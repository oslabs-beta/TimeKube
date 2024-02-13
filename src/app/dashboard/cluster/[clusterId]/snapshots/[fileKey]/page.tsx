import {downloadFromS3} from "@/services/aws-s3-service.ts";
import "highlight.js/styles/atom-one-dark.css";
import YamlDisplay from "@/app/dashboard/cluster/[clusterId]/snapshots/[fileKey]/YamlDisplay.tsx";
import { cache } from "react";

export const revalidate = 3600 // revalidate at most every hour
export default async function SnapshotFilePage({params}) {
  // The React cache function is used to memoize data requests.
  const getFileString = cache(async (fileKey: string) => {
    return await downloadFromS3(fileKey)
  });
  const fileString = await getFileString(params.fileKey);
  return (
    <div>
      <YamlDisplay fileString={fileString}/>
    </div>
  )
}
