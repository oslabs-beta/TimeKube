import BackupContainer from "./BackupContainer";

export default function BackupPage(params, searchParams) {
  return (
    <div>
      <div className="drawer-content flex flex-col items-center justify-top text-8xl -mt-36 text-white font-extrabold">Manual Data Backup</div>
      <p className="mt-36 mb-36 text-3xl flex flex-col items-center">Welcome to the backup page!</p>
      <div className="text-3xl flex flex-col items-center">< BackupContainer clusterId={params.searchParams.clusterId ? params.searchParams.clusterId : "default"}/></div>
    </div>
  );
}