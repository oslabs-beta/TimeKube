import Image from "next/image";
import Link from "next/link";
import { startChronJobs } from "@/services/autobackup";
import OurTeam from "./OurTeam";
import { initDB } from "@/utils/appdb";

export default function Home() {
  {/**/}
  // startChronJobs()
  initDB();
  return (
    <main className="flex min-h-screen min flex-col items-center justify-between">
        <div className="w-full flex">
          <div className="w-1/2 p-12 lg:p-24">
            <h1 className={"text-6xl font-bold py-10"}>Travel back in time to your past clusters</h1>
            <p className="py-2 text-xl">TimeKube enables you to securely create backups for your Kubernetes clusters, ensuring the protection of your data, configurations, and files.</p>
            <p className="py-6 text-xl"> TimeKube provides a user-friendly GUI for developers to easily and securely create backups for your Kubernetes clusters with a few clicks of a button; ensuring the protection of your data, configurations, and files.</p>
            <Link href={"/active_clusters"}>
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
          <div className="w-1/2 p-12 lg:p-24">
            <div className="flex justify-center items-center">
              <Image className="" src="/TimeKubeLogo.png" alt="TimeKubeLogo" width={500} height={500}/>
            </div>
          </div>
        </div>
      <div className="w-full">
          <OurTeam/>
      </div>  
    </main>
  );
}
