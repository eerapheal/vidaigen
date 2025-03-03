import React from 'react'
import { Player } from "@remotion/player";
import RemotionComposition from '@/app/_components/RemotionComposition';

const RemotionPlay = () => {
  return (
    <div className="">
  <Player
      component={RemotionComposition}
      durationInFrames={120}
      compositionWidth={720}
      compositionHeight={1280}
      fps={30}
    />
    </div>
  )
}

export default RemotionPlay;
