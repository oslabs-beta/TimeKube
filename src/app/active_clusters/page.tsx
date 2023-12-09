"use client"

import { NextPage } from 'next';
import Cluster from './cluster';

const Page: NextPage = () => {
    return (
    <div>
      <div className="drawer-content flex flex-col items-center justify-top text-8xl -mt-36 text-black font-extrabold">User Clusters</div>
      <div className="grid grid-cols-3 gap-48 mt-36">
        <Cluster id='1' text='Cluster 1'/>
        <Cluster id='2' text='Cluster 2'/>
        <Cluster id='3' text='Cluster 3'/>
        <Cluster id='4' text='Cluster 4'/>
        <Cluster id='5' text='Cluster 5'/>
        <Cluster id='6' text='Cluster 6'/>
      </div>
    </div>
    );
  };
  
export default Page;