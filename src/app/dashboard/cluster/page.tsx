"use client"

import { NextPage } from 'next';
import Cluster from './cluster';
const clusterIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const Page: NextPage = () => {
    return (
    <div className='flex flex-col mt-10'>
      <div className="flex flex-col items-center justify-top text-5xl font-extrabold py-16">Select your cluster to view more detailed information</div>
      <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-32 justify-center align-middle">
        {clusterIds.map((id) => (
          <Cluster id={id} text={"Cluster " + id} />
        ))}
      </div>
    </div>
    );
  };
  
export default Page;