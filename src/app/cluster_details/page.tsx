"use client"

import { NextPage } from 'next';
import { useSearchParams } from 'next/navigation'

const Page: NextPage = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
    return (
      <div className="grid grid-cols-4 gap-4">
        <h1>Loading cluster details #{id}</h1>
      </div>
    );
  };
  
export default Page;