"use client"
import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const VideoList = () => {

  const [videoList, setVideoList] = useState([]);
  const GetVideoList = () => {
    // All User Video
  }
  return (
    <div>
      {videoList?.length == 0 &&
        <div className='flex flex-col border p-5 border-dashed rounded-lg shadow-lg mx-16 items-center justify-center mt-20'>
          <Image src='/logo.svg' alt='logo' width={60} height={60} />
          <h2 className='text-xl mt-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500'>You Don't have any created video. Create one now!!</h2>
          <Link href="/create-new-video" className='mt-10'>
            <Button className="bg-blue-800 text-lg text-center w-full">🎯 Create Video</Button>
          </Link>
        </div>

      }

    </div>
  )
}

export default VideoList;
