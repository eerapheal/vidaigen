'use client';
import { useEffect } from 'react';
import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig, Sequence } from 'remotion';
const RemotionComposition = ({ videoData, setDurationInFrame, DurationInFrame }) => {

  const captions = videoData?.captionJson;
  const { fps } = useVideoConfig();
  const imageList = videoData?.images;
  const frame = useCurrentFrame();

  useEffect(() => {
    videoData && GetDurationFrame();
  }, [videoData])

  const GetDurationFrame = () => {
    const totalDuration = captions[captions?.length - 1]?.end * fps
    setDurationInFrame(totalDuration);
    return totalDuration;
  }

  return (
    <div>
      <AbsoluteFill>
        {imageList?.map((items, index) => {
          const startTime = (index * GetDurationFrame()) / imageList?.length;
          const duration = GetDurationFrame();
          return (
            <>
              <Sequence key={items?.index} from={startTime} DurationInFrame={setDurationInFrame()}>
                <AbsoluteFill>
                  <Img src={items}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </AbsoluteFill>
              </Sequence>
            </>
          )
        })}
      </AbsoluteFill>
    </div>
  )
}

export default RemotionComposition;
