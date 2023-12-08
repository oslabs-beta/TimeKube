import { ls } from "@/utils/backup";
import BackupButton from "./BackupButton";

export default async function Backup() {
  const lsResult = ls();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 pt-4 pb-2">
        Project root is at: {process.cwd()}
        < BackupButton text="Back Up Now!" />
      </div>
    </div>
  );
}
