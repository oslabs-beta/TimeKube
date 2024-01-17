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
import { saveClusterToSingleYaml, saveClusterToYaml } from '@/utils/backup';
import {  S3 } from 'aws-sdk';
import { AWSError } from 'aws-sdk';

//set an interval parameter
//define a TimeIntervalsObject that serves as arguments for the cron jobs functiion

let setInterval;
const TimeIntervalsObject = {
  twoMins: "twoMins",
  daily: "daily",
  weekly: "weekly",
  monthly: "monthly",
  annually: "annually"
};


//Cronjobsfunction that will conduct time backup events for exporting YAMLS
//Will only work when server is running. 
const startChronJobs = async (timeInt: any) => {
let interval;
//will need to grab specific information for the particular Kubernetes Clusters chosen, currently only implemented for minikube. 
const ClusterInformtion = saveClusterToSingleYaml();
console.log('Automatic Backup Processes are Running!');
let currentshot; 
//caseTwoMinuteInterval
switch (timeInt) {
  case TimeIntervalsObject.twoMins:
    console.log('Backing up two mins snapshot......', ClusterInformtion);
    try {
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
  break;

//caseDailyInterval
  case TimeIntervalsObject.daily:
    console.log('Backing up Daily Snapshot...',ClusterInformtion )
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
  break;
  
  case TimeIntervalsObject.weekly:
    console.log('Backing up weekly snapshot...',ClusterInformtion )
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
      console.log('Weekly Backup Achieved!', uploadResult.Location);
    } catch (error) {
      console.error('Error during backup: ', error);
    }
  break

  case TimeIntervalsObject.monthly:
    console.log('Backing up monthly snapshot...',ClusterInformtion )
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
      console.log('Weekly Backup Achieved!', uploadResult.Location);
    } catch (error) {
      console.error('Error during backup: ', error);





//weekly backup
 
  }

}
}
export { startChronJobs, TimeIntervalsObject };