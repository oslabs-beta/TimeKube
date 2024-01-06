'use server'
import { uploadToS3 } from "@/services/aws-s3-service";
import { insertBackup } from "@/utils/appdb-kysely";
import { saveClusterToSingleYaml, saveClusterToYaml } from "@/utils/backup";

export async function backupHandler() {
  // saveClusterToYaml();
  const localSavedFilePath = saveClusterToSingleYaml();
  
}

export async function backupFile(filePath: string, clusterId = "default") {
  // Back up to s3
  const s3data = await uploadToS3(filePath, clusterId);
  const s3url = s3data.Location;
  const s3key = s3data.Key;

  // Record info in db
  const dbdata = await insertBackup(s3url, s3key, clusterId);
  return dbdata;
}