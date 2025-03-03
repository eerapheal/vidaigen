'use client'
import React, { useState } from 'react';
import { Player } from "@remotion/player";
import RemotionComposition from '@/app/_components/RemotionComposition';

const RemotionPlay = ({ videoData }) => {
  const [DurationInFrame, setDurationInFrame] = useState(100);

  const handleSetDurationInFrame = (frameValue) => {
    const parsedValue = Number(frameValue);
    if (!isNaN(parsedValue)) {
      setDurationInFrame(Math.round(parsedValue));
    }
  };

  return (
    <div className="">
      <Player
        component={RemotionComposition}
        durationInFrames={Math.round(DurationInFrame) + 100}
        compositionWidth={720}
        compositionHeight={1280}
        fps={30}
        controls
        style={{
          width: '25vw',
          height: '70vh'
        }}
        inputProps={{
          videoData: videoData,
          setDurationInFrame: handleSetDurationInFrame
        }}
      />
    </div>
  );
};

export default RemotionPlay;