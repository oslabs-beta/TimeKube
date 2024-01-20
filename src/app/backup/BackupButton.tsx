'use client'
import { useSearchParams } from 'next/navigation'
import { backupHandler } from "./backup.action";

export default async function BackupButton({text}: {text: string}) {
  const searchParams = useSearchParams()
  const clusterId = searchParams.get('clusterId')
  console.log('clusterId in BackupButton', clusterId)
  return (
    <form action={backupHandler}>
      <input type="hidden" name="clusterId" value={clusterId || "default"}/>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        {text}
      </button>
    </form>
  );
}
