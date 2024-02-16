'use client'
import { useSearchParams, useParams } from 'next/navigation'
import { backupHandler } from "../../../../api/backup/backup.action.ts";

export default function BackupButton({text}: {text: string}) {
  // const searchParams = useSearchParams()
  const params = useParams();
  const clusterId = params.clusterId ?? "default"
  console.log('clusterId in BackupButton', clusterId)
  return (
    <form action={backupHandler}>
      <input type="hidden" name="clusterId" value={clusterId || "default"}/>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl text-3xl"
        type="submit"
      >
        {text}
      </button>
    </form>
  );
}
