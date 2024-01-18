"use server";
import { uploadToS3 } from "@/services/aws-s3-service";
import { insertBackup } from "@/utils/appdb-kysely";
import { saveClusterToSingleYaml, saveClusterToYaml } from "@/utils/backup";

/**
 * Event handler to back up cluster to yaml and upload to s3, recording s3 URL in database
 * @param {string} [clusterId="default"] - ID of target cluster to back up
 */
export async function backupHandler(formData: FormData) {
  // saveClusterToYaml();
  // save cluster state to a single yaml file
  const clusterId = formData.get("clusterId") as string;
  const localSavedFilePath = await saveClusterToSingleYaml();
  if (typeof localSavedFilePath !== "string") {
    throw new Error("YamlSaveError");
  }

  // backup file to AWS
  await backupFile(localSavedFilePath, clusterId);
}

/**
 * Saves a file specified by a file path to AWS.
 * @param {string} filePath - path to YAML backup of cluster
 * @param {string} [clusterId="default"] - ID of cluster being backed up
 */
export async function backupFile(filePath: string, clusterId = "default") {
  // Back up to s3
  try {
    const s3data = await uploadToS3(filePath, clusterId);
    const s3url = s3data.Location;
    const s3key = s3data.Key;
    console.log("s3 key: ",s3data.Key)
    if (s3data.Location === undefined || s3data.Key === undefined) {
      console.error("URL", s3data.Location, "Key", s3data.Key)
      throw new Error("S3UploadError");
    }
    // Record info in db
    const dbdata = await insertBackup(s3url, s3key, clusterId);
    return dbdata;
  } catch (e) {
    console.log("Error in backupFile: ", e);
  }
}
