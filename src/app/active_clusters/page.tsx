"use client"

import { NextPage } from 'next';
import Cluster from './cluster';

const Page: NextPage = () => {
    return (
      <div className="grid grid-cols-4 gap-4">
        <Cluster id='1' text='Cluster 1'/>
      </div>
    );
  };
  
export default Page;