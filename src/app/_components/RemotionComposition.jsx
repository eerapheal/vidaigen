'use client';
import { AbsoluteFill, Img, Audio, useCurrentFrame, useVideoConfig, Sequence, interpolate } from 'remotion';

const RemotionComposition = ({ videoData, setDurationInFrame }) => {
  const captions = videoData?.captionJson;
  const { fps } = useVideoConfig();
  const imageList = videoData?.images;
  const frame = useCurrentFrame();

  // Calculate total duration in frames
  const GetDurationFrame = () => {
    const totalDuration = captions[captions?.length - 1]?.end * fps;
    setDurationInFrame(totalDuration);
    return totalDuration;
  };

  // Scale function with startTime and duration as arguments
  const scale = (frame, startTime, duration, index) => {
    return interpolate(
      frame,
      [startTime, startTime + duration / 2, startTime + duration],
      index % 2 === 0 ? [1, 1.8, 1] : [1.8, 1, 1.8],
      { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
    );
  };

  return (
    <div>
      <AbsoluteFill>
        {imageList?.map((items, index) => {
          const duration = GetDurationFrame();
          const startTime = (index * duration) / imageList?.length;

          return (
            <Sequence key={index} from={startTime} durationInFrames={duration}>
              <AbsoluteFill>
                <Img
                  src={items}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: `scale(${scale(frame, startTime, duration, index)})`,
                  }}
                />
              </AbsoluteFill>
            </Sequence>
          );
        })}
        {videoData?.audioUrl && <Audio src={videoData?.audioUrl} />}
      </AbsoluteFill>
    </div>
  );
};

export default RemotionComposition;