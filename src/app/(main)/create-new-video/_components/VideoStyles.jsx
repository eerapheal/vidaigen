import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import React, { useState } from 'react'

const options = [
  {
    name: 'Realistic',
    image: '/hummingbird.jpg'
  },
  {
    name: 'Artwork',
    image: '/from.jpg'
  },
  {
    name: 'Cartoon',
    image: '/loeo.jpg'
  },
  {
    name: 'Cinematic',
    image: '/darkstre.jpg'
  },
  {
    name: 'Hygiene',
    image: '/Hygiene.jpg'
  },
  {
    name: 'Super',
    image: '/megayak.jpg'
  },
  {
    name: 'Elderly',
    image: '/elderly_African.jpg'
  },
  {
    name: 'History',
    image: '/mome.jpg'
  },
  {
    name: 'Horously',
    image: '/pulse.jpg'
  },
  {
    name: 'Waterfall',
    image: '/perspective.jpg'
  },
  {
    name: 'Reality',
    image: '/Reality.jpg'
  },
  {
    name: 'Pirate',
    image: '/some_1.jpg'
  },
];

const VideoStyles = ({ onHandleInputChange }) => {

  const [selectedStyle, setSelectedStyle] = useState();

  return (
    <div>
      <h2 className='mt-3'>Video Styles</h2>
      <p className='m-1'>Select Video Style</p>
      <ScrollArea className="h-[250px] w-full rounded-md border p-4">
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2'>
          {
            options.map((option, index) => (
              <div
                key={index}
                className='relative'
                onClick={() => {
                  setSelectedStyle()
                  onHandleInputChange("videoStyle", option.name)
                }}
              >
                <Image
                  src={option.image}
                  alt={option.name}
                  width={500}
                  height={120}
                  className={`object-cover rounded shadow-2xl cursor-pointer h-[90px] lg:h-[120px] xl-h-[180px] hover:border border-slate-400
                  ${option.name === selectedStyle ? 'border p-2' : ""}
                  `}
                />
                <h3 className='absolute bottom-1 text-center w-full text-slate-50'>{option.name}</h3>
              </div>
            ))
          }
        </div>
      </ScrollArea>
    </div>
  )
}

export default VideoStyles;
