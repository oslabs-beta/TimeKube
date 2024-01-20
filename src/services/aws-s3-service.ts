import * as AWS from "aws-sdk";
import * as fs from "fs";
import dotenv from "dotenv";
import moment from "moment";
import { backupHandler } from "@/app/dashboard/cluster/[clusterId]/backup/backup.action";
// import moment from 'moment';
import { DB } from "kysely-codegen";
import { db } from "@/utils/kysely";
dotenv.config();
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
// import { saveClusterToSingleYaml, saveClusterToYaml } from "@/utils/backup";

//created instance of S3
const s3 = new AWS.S3();

//Backup functionality

// const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');


//fetching the information (We can adjust this based on our logic)
// const snapshotType: string = timeIdentifer[0]; // We can change this to 'Daily', 'Weekly', 'Monthly', or 'Annual' - Will need to be sent in by the front end.
// //Object information that will be stored in the s3 Bucket
const objectKey: string = "cluster-state.yaml";
//S3 bucket functionality and uploading Cluster YAML file to Bucket
const bucket = "timekubedbclusterbucket";
//Object that we are storing in our S3 bucket, Will need to store snapshot URL from Bucket into Timekube SQL Database.
const uploadParams: AWS.S3.Types.PutObjectRequest = {
  Bucket: bucket,
  Key: objectKey,
  Body: fs.readFileSync(
    "./k8s-backups/cluster-state.yaml",
    "utf-8"
  ),
};

/**
 *
 * @param filePath path to yaml file that will be uploaded to S3
 * @param s3FileName desired filename in s3
 * @returns {string} - URL of the uploaded file
 * Filename in s3 will be 
 */
export async function uploadToS3(
  filePath: string = "@/k8s-backups/cluster-state.yaml",
  s3FileName = "cluster-state.yaml"
) {
  // Generate timestamp
  const now = new Date();
  const timestamp = now.getTime();
  
  // Create upload request with Body pointing to file param
  const s3uploadParams: AWS.S3.Types.PutObjectRequest = {
    Bucket: bucket,
    Key: `${timestamp}-${s3FileName}`,
    Body: fs.readFileSync(filePath, "utf-8"),
  };

  try{
    return await s3.upload(s3uploadParams).promise();
  }
  catch (err){
    console.error("Error uploading to S3:", err);
    throw err;
  }
}

export function checkFileExistsInS3(s3FileKey: string) {
  const params = {
    Bucket: bucket,
    Key: s3FileKey
  };

  return new Promise((resolve, reject) => {
    s3.headObject(params, (error, data) => {
      if (error) {
        // If the error is NoSuchKey, the file does not exist
        if (error.code === 'NotFound') {
          resolve(false);
        } else {
          console.error("Error checking file existence:", error);
          reject(error);
        }
      } else {
        resolve(true);
      }
    });
  });
}

export async function deleteFromS3(s3FileName: string) {
  const s3uploadParams : AWS.S3.Types.DeleteObjectRequest = {
    Bucket: bucket,
    Key: s3FileName,
  }
  try {
    await s3.deleteObject(s3uploadParams).promise();
  }
  catch (err) {
    console.error("Error deleting from S3:", err);
    throw err;
  }
}

//S3 upload functionality
// const bucketUpload = s3.upload(uploadParams, (err, data) => {
//   if (err) {
//     console.log('Error uploading to S3:', err);
//   } else {
//     console.log('Successfully uploaded to S3:', data.Location);
//   }
// });
//conditional statement
// const userId = 123; // Replace with the actual user ID
// //get URL from generation of the YAML FILE...
// const snapshotUrl = data.Location; // data.location is the URL that will be stored in the s3 bucket./
// const timestamp = new Date(); // Replace with the actual timestamp
// const insertQuery = "INSERT";
// ... (other imports and code)

export const bucketUpload = s3.upload.bind(s3);
export { uploadParams };

//exports s3 object to be used in other parts of the application like the SQ
