'use client'
import React, { useEffect, useState } from 'react'
import VideoInfo from '../_component/VideoInfo';
import RemotionPlay from '../_component/RemotionPlay';
import { useConvex } from 'convex/react';
import { useParams } from 'next/navigation';
import { api } from '../../../../../convex/_generated/api';

const PlayVideo = () => {

  const convex = useConvex();
  const params = useParams();
  const videoId = params.videoId;
  const [videoData, setVideoData] = useState();

  useEffect(() => {
    videoId && GetVideoDataById();
  }, [videoId]);

  const GetVideoDataById = async () => {
    const result = await convex.query(api.videoData.GetUserVideoById, {
      videoId: videoId
    })
    console.log(result)
    setVideoData(result)
  };



  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
      <div>
        <RemotionPlay videoData={videoData} />
      </div>
      <div>
        <VideoInfo />
      </div>
    </div>
  )
}

export default PlayVideo;
