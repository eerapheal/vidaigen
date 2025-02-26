"use client";
import { Button } from '@/components/ui/button';
import React from 'react';
import Authentication from '../Authentication';
import Image from 'next/image';
import { Camera, Video, Mic, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className='relative p-10 mt-24 flex flex-col items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute top-0 left-0 w-full h-full'>
        <Image
          src="/logo.svg"
          alt="Background"
          fill 
          priority 
          className="opacity-10 object-cover"
        />
      </div>

      {/* Heading */}
      <h1 className='relative font-bold text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500 mb-4'>
        AI Short Video Generator for YouTube, Reels, and TikTok
      </h1>

      {/* Subheading */}
      <p className='relative mt-4 text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 mb-8'>
        Our AI generates scripts, images, videos, and voiceovers in seconds. <br />
        Start creating, editing, and publishing today!
      </p>

      {/* Buttons */}
      <div className='relative flex gap-10 mt-11'>
        <Button className="text-lg font-medium p-5 bg-blue-800">Get Started</Button>
        <Authentication>
          <Button variant="outline" className="text-lg font-medium p-5 text-blue-800">Get Started for free</Button>
        </Authentication>
      </div>

      {/* Floating Icons */}
      <div className="absolute animate-float top-0 left-0 w-full h-full pointer-events-none">
        <Camera className="absolute text-blue-500 animate-float w-16 h-16" style={{ top: '5%', left: '10%' }} />
        <Video className="absolute text-green-500 animate-float w-16 h-16" style={{ top: '20%', right: '15%' }} />
        <Mic className="absolute text-red-500 animate-float w-16 h-16" style={{ bottom: '15%', left: '20%' }} />
        <Sparkles className="absolute text-yellow-500 animate-float w-16 h-16" style={{ bottom: '5%', right: '10%' }} />

      </div>
    </div>
  );
};

export default Hero;