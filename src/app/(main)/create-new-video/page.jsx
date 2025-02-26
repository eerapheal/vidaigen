"use client";
import React, { useState } from 'react';
import Topic from './_components/Topic';
import VideoStyles from './_components/VideoStyles';
import VoiceOver from './_components/VoiceOver';
import Caption from './_components/Caption';
import { Button } from '@/components/ui/button';
import { WandSparkles } from 'lucide-react';
import Preview from './_components/Preview';

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
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8">
        <div className="col-span-2 p-7 rounded-lg border h-[79vh] overflow-auto hide-scrollbar">
          {/* Topic */}
          <Topic onHandleInputChange={onHandleInputChange} />
          {/* Video Images */}
          <VideoStyles onHandleInputChange={onHandleInputChange} />
          {/* Voice over */}
          <VoiceOver onHandleInputChange={onHandleInputChange} />
          {/* Cations */}
          <Caption onHandleInputChange={onHandleInputChange} />
          {/* Submit */}
          <Button className="w-full  mt-3 px-6 py-3 text-white bg-blue-700 rounded-md hover:bg-blue-500">
            <WandSparkles /> Generate Video
          </Button>
        </div>
        <div className="col-span-1">
          {/* Preview video */}
          <Preview formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewVideo;