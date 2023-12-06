"use client"

import { NextPage } from 'next';
import Option from './option';

const handleOptionClicked = (id: string) => {
    alert(`${id} clicked`);
}

const Page: NextPage = () => {
    return (
      <div className="grid grid-cols-4 gap-4">
        <Option id='1' text='Daily' handleOptionClicked={handleOptionClicked}/>
        <Option id='2' text='Weekly' handleOptionClicked={handleOptionClicked} />
        <Option id='3' text='Monthly' handleOptionClicked={handleOptionClicked} />
        <Option id='4' text='Yearly' handleOptionClicked={handleOptionClicked} />
      </div>
    );
  };
  
export default Page;