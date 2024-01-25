import {downloadFromS3} from "@/services/aws-s3-service.ts";
import "highlight.js/styles/atom-one-dark.css";
import YamlDisplay from "@/app/dashboard/cluster/[clusterId]/snapshots/[fileKey]/YamlDisplay.tsx";

export default async function SnapshotFilePage({params}) {
  const fileString = await downloadFromS3(params.fileKey);
  return (
    <div>
      <YamlDisplay fileString={fileString}/>
    </div>
  )
}
