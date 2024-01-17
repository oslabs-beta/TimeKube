import * as AWS from 'aws-sdk';
import * as fs from 'fs';
import dotenv from 'dotenv';
import moment from 'moment';
import ClusterInfo from '@/app/dashboard/cluster/ClusterInfo';
import { saveClusterToSingleYaml, saveClusterToYaml } from '@/utils/backup';
import { backupHandler } from '@/app/backup/backup.action';
// import moment from 'moment';
import { DB } from 'kysely-codegen';
import { db } from '@/utils/kysely';
dotenv.config();
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
//created instance of S3
const s3 = new AWS.S3();
let ClusterState = saveClusterToYaml();
// const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
//fetching the information (We can adjust this based on our logic)
// const snapshotType: string = timeIdentifer[0]; // We can change this to 'Daily', 'Weekly', 'Monthly', or 'Annual' - Will need to be sent in by the front end. 
// //Object information that will be stored in the s3 Bucket
const objectKey: string = 'cluster-state.yaml';
//S3 bucket functionality and uploading Cluster YAML file to Bucket 
const bucket = 'timekubedbclusterbucket';
//Importing Cluster State as a YAML File
//Key will have to be changed to a Cluster YAML
const uploadParams: AWS.S3.Types.PutObjectRequest = {
  Bucket: bucket,
  Key: objectKey,
  Body: ClusterState,
};



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

