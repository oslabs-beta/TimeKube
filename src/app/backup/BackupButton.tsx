import { backupHandler } from "./backup.action";

export default async function BackupButton({text}: {text: string}) {
  return (
    <form action={backupHandler}>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        {text}
      </button>
    </form>
  );
}
