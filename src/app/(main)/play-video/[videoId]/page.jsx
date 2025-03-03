import React from 'react'
import VideoInfo from '../_component/VideoInfo';
import RemotionPlay from '../_component/RemotionPlay';

const PlayVideo = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
      <div>
<RemotionPlay />
      </div>
      <div>
<VideoInfo />
      </div>
    </div>
  )
}

export default PlayVideo;
