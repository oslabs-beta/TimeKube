import BackupContainer from "./BackupContainer";

export default function BackupPage() {
  return (
    <div>
      <div className="drawer-content flex flex-col items-center justify-top text-8xl -mt-36 text-black font-extrabold">Backup</div>
      <p className="mt-36 mb-36 text-2xl flex flex-col items-center">Welcome to the backup page!</p>
      < BackupContainer />
    </div>
  );
}