import Image from "next/image";
import { startChronJobs } from "@/services/autobackup";

export default function Home() {
  {/**/}
  // startChronJobs()
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Hello World</h1>
      </main>
  );
}
