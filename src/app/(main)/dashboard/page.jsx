import React from 'react'
import VideoList from './_components/VideoList'
const HomeScreen = () => {
  return (
    <div>
      <h1 className="my-8 text-3xl">Your Generated Video</h1>
      <VideoList />
    </div>
  )
}

export default HomeScreen;
