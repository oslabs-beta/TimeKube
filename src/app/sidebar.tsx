"use client";
import { useRouter } from 'next/navigation';

export default function Sidebar({ content }: { content: React.ReactNode }) {
    const router = useRouter();

    const handleRedirect = (destination: string) => {
        router.push(destination);
      };
    return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/* <div className="drawer-content flex flex-col items-center justify-center"> */}
      <div className="drawer-content">
        {content}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-6 text-xl font-bold">
          {/* Sidebar content here */}
          <li><a onClick={() => handleRedirect('/dashboard/cluster')}>View Clusters</a></li>
          <li><a onClick={() => handleRedirect('/dashboard/snapshots')}>View Snapshots</a></li>
          <li><a onClick={() => handleRedirect('/dashboard/backup')}>Manual Data Backup</a></li>
          <li><a onClick={() => handleRedirect('/schedule_options')}>Automatic Data Backup</a></li>

        </ul>
      </div>
    </div>
    )
}