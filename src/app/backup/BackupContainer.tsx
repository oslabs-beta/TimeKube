import { ls } from "@/utils/backup";
import BackupButton from "./BackupButton";

export default async function Backup() {
  const lsResult = ls();
  return (
    <div className="max-w-3xl rounded overflow-hidden shadow-lg text-3xl bg-gray-600">
      <div className="px-6 pt-4 pb-2 flex flex-col items-center">
        <div className="mb-8">Project root is at: {process.cwd()}</div>
        < BackupButton text="Back Up Now!" />
      </div>
    </div>
  );
}
