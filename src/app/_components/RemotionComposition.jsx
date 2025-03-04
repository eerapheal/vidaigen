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

  const getCurrentCaption = () => {
    const currentTime = frame / 30;
    let currentCaption = captions?.find((items) => currentTime >= items?.start && currentTime <= items.end)
    return currentCaption ? currentCaption?.word : ''
  }

  return (
    <div>
      <AbsoluteFill className='relative'>
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
        <AbsoluteFill
          style={{
            display: 'flex',
            justifyContent: 'center',

            bottom: 40 ,
            height: 150,
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better readability
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <h2
            style={{
              color: 'white',
              fontSize: '48px',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow for better visibility
              animation: 'fadeInOut 3s infinite', // Example animation
            }}
          >
            {getCurrentCaption()}
          </h2>
        </AbsoluteFill>
        {videoData?.audioUrl && <Audio src={videoData?.audioUrl} />}
      </AbsoluteFill>

      {/* Define the animation in a style tag */}
      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; }
            50% { opacity: 5; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default RemotionComposition;