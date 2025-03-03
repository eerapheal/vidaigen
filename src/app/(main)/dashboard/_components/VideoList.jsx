"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { api } from '../../../../../convex/_generated/api';
import { useConvex } from 'convex/react';
import { useAuthContext } from '@/app/Provider';
import { RefreshCcw } from 'lucide-react';
import moment from 'moment';

const VideoList = () => {

  const [videoList, setVideoList] = useState([]);
  const convex = useConvex();
  const { user } = useAuthContext();


  useEffect(() => {
    user && GetVideoList();
  }, [user]);
  // Get User Video List from Convex GraphQL API using user id
  const GetVideoList = async () => {
    const result = await convex.query(api.videoData.GetUserVideos, {
      uid: user?._id,
    })
    setVideoList(result)
    const isPendingVideo = result?.find((items) => items?.status == 'pending');
    isPendingVideo && GetPendingVideoStatus(isPendingVideo);
  };


  const GetPendingVideoStatus = (pendingVideo) => {
    const intervalId = setInterval(async () => {
      const result = await convex.query(api.videoData.GetUserVideoById, {
        videoId: pendingVideo?._id
      })

      if (result?.status == 'Completed') {
        clearInterval(intervalId);
        GetVideoList()
      }
    }, 5000)
  };

  return (
    <div className=' border p-5 border-dashed rounded-lg shadow-lg'>
      {videoList?.length == 0 ?

        <div className='flex flex-col mx-16 items-center justify-center mt-20'>
          <Image src='/logo.svg' alt='logo' width={60} height={60} />
          <h2 className='text-xl mt-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500'>You Don't have any created video. Create one now!!</h2>
          <Link href="/create-new-video" className='mt-10'>
            <Button className="bg-blue-800 text-lg text-center w-full">🎯 Create Video</Button>
          </Link>
        </div> :
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5'>
          {videoList?.map((items) => (
                  <Link href={'/play-video/'+items?._id} key={items._id}>
            <div
              
              className='relative'
            >
              {items?.status === "Completed" ? (
                <Image
                  src={items?.images[0]}
                  alt={items?.title}
                  width={400}
                  height={400}
                  className='rounded-xl shadow-xl object-cover aspect-[2/3] w-full'
                />
              ) : items?.status === "Failed" ? (
                <div className="aspect-[2/3] w-full p-5 rounded-xl">
                  <h3>Video Generation Failed</h3>
                </div>
              ) : (
                <div className="flex items-center justify-center aspect-[2/3] w-full p-5 rounded-xl bg-slate-800">
                  <RefreshCcw className='animate-spin' />
                  <h3> Generating...</h3>
                </div>
              )}
              <div className='absolute bottom-5 left-2'>
                <h3>{items?.title}</h3>
                <h3>{moment(items?._creationTime).fromNow()}</h3>
              </div>
            </div>
            </Link>
          ))}
        </div>

      }

    </div>
  )
}

export default VideoList;
