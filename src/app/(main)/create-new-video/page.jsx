"use client";
import React, { useState } from 'react';
import Topic from './_components/Topic';
import VideoStyles from './_components/VideoStyles';
import VoiceOver from './_components/VoiceOver';
import Caption from './_components/Caption';

const CreateNewVideo = () => {

  const [formData, setFormData] = useState();

  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
    console.log(formData)
  }
  return (
    <div>
      <h2 className="">Create New Video</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8">
        <div className="col-span-2 p-7 rounded-lg border h-[79vh] overflow-auto hide-scrollbar">
          {/* Topic */}
          <Topic onHandleInputChange={onHandleInputChange} />
          {/* Video Images */}
          <VideoStyles onHandleInputChange={onHandleInputChange} />
          {/* Voice over */}
          <VoiceOver  onHandleInputChange={onHandleInputChange} />
          {/* Cations */}
          <Caption  onHandleInputChange={onHandleInputChange} />
        </div>
        <div className="col-span-1">
          {/* creacted vudeo */}
        </div>
      </div>
    </div>
  );
};

export default CreateNewVideo;