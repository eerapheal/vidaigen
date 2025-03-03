'use client'
import { useVideoConfig} from 'remotion'
import { useEffect } from 'react'
const RemotionComposition = ({ videoData, setDurationInFrame }) => {

  const captions = videoData?.captionJson;
  const { fps } = useVideoConfig();

  useEffect(() => {
    videoData && GetDurationFrame();
  }, [videoData])

  const GetDurationFrame = () => {
    const totalDuration = captions[captions?.length - 1]?.end * fps
    setDurationInFrame(totalDuration);
  }

  return (
    <div>
      RemotionComposition
    </div>
  )
}

export default RemotionComposition;
