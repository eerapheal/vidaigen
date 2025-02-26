import React from 'react';
import { options } from './VideoStyles';
import Image from 'next/image';
import { caption } from './Caption';

const Preview = ({ formData }) => {
  const selectedVideoStyle = formData?.videoStyle ? options.find(item => item.name === formData.videoStyle) : null;
  const selectedCaption = formData?.caption ? caption.find(item => item.name === formData.caption) : null;

  return formData?.videoStyle && (
    <div className='relative'>
      <h2 className='mb-3'>Preview Your Video</h2>
      <Image
        src={selectedVideoStyle.image}
        alt={selectedVideoStyle.name}
        width={1000}
        height={300}
        className='w-full h-[74vh] object-cover rounded border shadow-lg'
      />
      <h2 className={`${selectedCaption?.styles} absolute bottom-10 text-center w-full`}>{selectedCaption?.name}</h2>
    </div>
  );
};

export default Preview;