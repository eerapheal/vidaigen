"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import Authentication from '../Authentication'

const Hero = () => {
  return (
    <div className='p-10 mt-24 flex flex-col items-center justify-center'>
      <h1 className='font-bold text-5xl text-center  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500'>
        AI Short Video generator for Youtube, Reel and TikTok
      </h1>

      <p className='mt-4 text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-purple-500'>Our AI generates scripts, images, videos, and voiceovers in seconds. <br /> Start creating, editing, and publishing today!</p>
      <div className='flex gap-10 mt-11'>
        <Button className="text-lg font-medium p-5 bg-blue-800">Get Started</Button>
        <Authentication>
          <Button variant="outline" className="text-lg font-medium p-5 text-blue-800">Get Stared for free</Button>
        </Authentication>
      </div>

    </div>
  )
}

export default Hero
