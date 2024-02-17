"use client"

import {NextPage} from 'next';
import Option from './option';
import OptionDetails from './option_details';
import React, {useState} from 'react';

const Page: NextPage = () => {
  const [optionId, setOptionId] = useState('1');

  const handleOptionClicked = (id: string) => {
    console.log(`${id} clicked`);
    setOptionId(id);
  }

  return (
    <>
      <div
        className="drawer-content flex flex-col items-center justify-top mt-36 text-white font-extrabold">
        <div className={'text-6xl'}>Automatic Data Backup</div>
        <div className="mx-auto grid grid-cols-4 gap-36 mt-36">
          <Option id='1' text='Daily' handleOptionClicked={handleOptionClicked}/>
          <Option id='2' text='Weekly' handleOptionClicked={handleOptionClicked}/>
          <Option id='3' text='Monthly' handleOptionClicked={handleOptionClicked}/>
          <Option id='4' text='Yearly' handleOptionClicked={handleOptionClicked}/>
        </div>
        <div className='mt-36'>
          <OptionDetails id={optionId} props='1'/>
        </div>
      </div>
    </>
  );
};

export default Page;