import React from 'react'

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

const VoiceOver = () => {
  return (
    <div>
      <h2 className='mt-3'>Voice Over</h2>
      <p className='m-1'>Select Video Style</p>
      <div className='grid grid-cols-2 gap-1 mt-3'>
        {
          options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedStyle()
                onHandleInputChange("videoStyle", option.name)
              }}
              className=' cursor-pointer'>
              <h3 className=' cursor-pointer bg-slate-800'> {option.name}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default VoiceOver;
