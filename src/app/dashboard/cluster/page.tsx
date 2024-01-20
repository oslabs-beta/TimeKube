"use client"

import { NextPage } from 'next';
import Cluster from './cluster';
const clusterIds = ["1", "2", "3", "4", "5", "6"];
const Page: NextPage = () => {
    return (
    <div>
      <div className="drawer-content flex flex-col items-center justify-top text-8xl -mt-36 text-white font-extrabold">User Clusters</div>
      <div className="grid grid-cols-3 gap-48 mt-36">
        {clusterIds.map((id) => (
          <Cluster id={id} text={"Cluster " + id} />
        ))}
      </div>
    </div>
    );
  };
  
export default Page;