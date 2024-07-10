"use client";

import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { TbPlaylist } from 'react-icons/tb';

const Library = () => {
  const onClick = () => {
    //TODO: Handle upload songs!
  }
  return (
    <div className='flex flex-col'>
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className='text-neutral-400'/>
          <p className='text-neutral-400 font-medium text-md'>Your Library!</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={26}
          className='text-neutral-400 cursor-pointer hover:text-white transition'
          />
      </div>
      <div className="flex flex-col gap-y-2 px-3 mt-4">
        List of Songs!
      </div>
    </div>
  )
}

export default Library