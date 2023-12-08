"use client"

import { NextPage } from 'next';
import Cluster from './cluster';

const Page: NextPage = () => {
    return (
      <div className="grid grid-cols-4 gap-4">
        <Cluster id='1' text='Cluster 1'/>
        <Cluster id='2' text='Cluster 2'/>
        <Cluster id='3' text='Cluster 3'/>
        <Cluster id='4' text='Cluster 4'/>
      </div>
    );
  };
  
export default Page;