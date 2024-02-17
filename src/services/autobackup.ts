import * as cron from 'node-cron';
import * as AWS from 'aws-sdk';
import * as fs from 'fs';
import dotenv from 'dotenv';
import moment from 'moment';
// import moment from 'moment';
import { DB } from 'kysely-codegen';
import { db } from '@/utils/kysely';
import { bucketUpload, uploadParams } from './aws-s3-service';
import ClusterInfo from '@/app/dashboard/cluster/ClusterInfo';
import {  S3 } from 'aws-sdk';
import { AWSError } from 'aws-sdk';



const startChronJobs = () => {
let interval;
const timeIdentifer = ['daily_snapshots', 'weekly_snapshots', 'monthly_snapshots','annual_snapshots'];

const ClusterInformtion = ClusterInfo();
console.log('Automatic Backup Processes are Running!');
let currentshot; 


//test of scheduled backups in 2 min backup icrement. 
cron.schedule('*/1 * * * *', async () => {
      console.log('testRun-------->', ClusterInformtion);


      try {
      //When app runs, cluster should already be backed up 
      let uploadResult: S3.ManagedUpload.SendData;
    // Grab the backup and wrap the s3.upload in a Promise, upload the cluster state to a YAML file storage.
        uploadResult = await new Promise<S3.ManagedUpload.SendData>((resolve, reject) => {
          bucketUpload(uploadParams, (err: any, data: any) => {
            if (err) {
               reject(err);
            } else {
          resolve(data);
           }
          });
       });
       // After the file has been uploaded to the bucket, log the message and location
       console.log('Backup Achieved!', uploadResult.Location);
       } catch (error) {
       console.error('Error during backup:', error);
        }
    });

//daily backup
cron.schedule('0 7 * * *', async () => {
  let interval: String = timeIdentifer[0];
  try {
    let uploadResult: S3.ManagedUpload.SendData;
    //Grab backup then wraps the s3.upload in a Promise, upload cluster state to a YAML file storage. 
    uploadResult = await new Promise<S3.ManagedUpload.SendData>((resolve, reject) => {
      bucketUpload(uploadParams, (err: any, data: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    //After file has been uploaded to the bucket, console logged the message and location
    console.log('Daily Backup Achieved!', uploadResult.Location);
  } catch (error) {
    console.error('Error during backup: ', error);
  }
});



//weekly backup
cron.schedule('0 0 * * 0', async () => {
  let interval: String = timeIdentifer[1];
  try {
    let uploadResult: S3.ManagedUpload.SendData;
    uploadResult = await new Promise<S3.ManagedUpload.SendData>((resolve, reject) => {
      bucketUpload(uploadParams, (err: any, data: any)=> {
        if(err){
          reject(err)
        } else {
          resolve(data);
        }
      });
    });
    console.log('Error during weekly backup: ', uploadResult.Location)
  } catch (error) {
    console.error('Error during backup: ', error)
  }
  //export the backup 
  currentshot = timeIdentifer[1];
  console.log('Weekly Backup Achieved!');
})




//monthly backup
cron.schedule('0 0 28 * *', () => {
  let interval: String = timeIdentifer[2];
  //export the backup 
  currentshot = timeIdentifer[2];
  console.log('Monthly Backup Achieved!');
});



//annual backup for january first 
cron.schedule('0 0 1 1 *', () => {
  //export the backup 
  currentshot = timeIdentifer[3];
  console.log('Annual Backup Achieved on January 1st! of the new year');
});


}

export { startChronJobs }