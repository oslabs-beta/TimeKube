import BackupContainer from "./BackupContainer";

export default function BackupPage({ params } : {params: ClusterPageParams}) {
  return (
    <div>
      <div className="drawer-content flex flex-col items-center justify-top text-6xl mt-10 text-white font-extrabold">Manual Data Backup</div>
      <p className="mt-36 mb-36 text-3xl flex flex-col items-center">Welcome to the backup page! Your current cluster is {params.clusterId ?? "default"}</p>
      <div className="text-3xl flex flex-col items-center">< BackupContainer /></div>
    </div>
  );
}