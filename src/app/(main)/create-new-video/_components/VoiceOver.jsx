import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useState } from 'react'

const options = [
  {
    value: "af_sarah",
    name: "us Sarah (Female)"
  },
  {
    value: "af_sky",
    name: "🇿🇦 Sky (Female)"
  },
  {
    value: "am_adam",
    name: "🇪🇬 Adam (Male)"
  },
  {
    value: "hf_alpha",
    name: "in Alpha (Female)"
  },
  {
    value: "hf_beta",
    name: "US Beta (Female)"
  },
  {
    value: "hm_psi",
    name: "IN Psi (Male)"
  },
  {
    value: "am_echo",
    name: "US Echo (Male)"
  },
  {
    value: "am_eric",
    name: "US Eric (Male)"
  },
  {
    value: "am_fenrir",
    name: "EN Fenrir (Male)"
  },
  {
    value: "am_liam",
    name: "🇩🇰 Liam (Male)"
  },
  {
    value: "am_michael",
    name: "US Michael (Male)"
  },
  {
    value: "am_onyx",
    name: "US Onyx (Male)"
  },
  {
    value: "hm_omega",
    name: "IN Omega (Male)"
  },
];

const VoiceOver = ({ onHandleInputChange }) => {

  const [selectedVoiceOver, setSelectedVoiceOver] = useState();

  return (
    <div>
      <h2 className='mt-3'>Voice Over</h2>
      <p className='m-1'>Select Voice Over</p>
      <ScrollArea className="h-[160px] w-full rounded-md border p-4">
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-1 mt-3'>
          {
            options.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedVoiceOver(option.value);
                  onHandleInputChange("voice", option.value)
                }}
                className={`cursor-pointer shadow-lg text-center rounded-lg ${option.styles} ${option.name === selectedVoiceOver ? 'bg-slate-700' : ''}`}>
                <h3 className={` cursor-pointer bg-slate-800 p-2 m-1 hover:border rounded
              ${option.name === selectedVoiceOver ? 'border' : ""}
              `}
                > {option.name}</h3>
              </div>
            ))
          }
        </div>
      </ScrollArea>
    </div>
  )
}

export default VoiceOver;