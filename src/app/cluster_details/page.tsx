"use client"

import { NextPage } from 'next';
import { useSearchParams } from 'next/navigation'

const Page: NextPage = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
    return (
      <div>
        <div className="flex flex-col items-center justify-top text-8xl -mt-36 text-white font-extrabold">Cluster Details</div>
        <div className="grid grid-cols-4 gap-4 mt-36">
          <h1>Loading cluster details #{id}</h1>
        </div>
      </div>
    );
  };
  
export default Page;