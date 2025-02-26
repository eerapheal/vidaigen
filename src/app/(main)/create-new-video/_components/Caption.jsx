import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useState } from 'react'

export const caption = [
  {
    name: "Roboto",
    styles: "font-roboto italic text-red-600",
  },
  {
    name: "Open Sans",
    styles: "font-open-sans uppercase text-blue-600",
  },
  {
    name: "Lato",
    styles: "font-lato capitalize text-green-600",
  },
  {
    name: "Montserrat",
    styles: "font-montserrat italic text-purple-600",
  },
  {
    name: "Poppins",
    styles: "font-poppins uppercase text-pink-600",
  },
  {
    name: "Raleway",
    styles: "font-raleway capitalize text-yellow-600",
  },
  {
    name: "Merriweather",
    styles: "font-merriweather italic text-indigo-600",
  },
  {
    name: "Playfair Display",
    styles: "font-playfair-display uppercase text-white",
  },
  {
    name: "Nunito",
    styles: "font-nunito capitalize text-orange-600",
  },
  {
    name: "Oswald",
    styles: "font-oswald italic text-red-800",
  },
  {
    name: "Source Sans Pro",
    styles: "font-source-sans-pro uppercase text-blue-800",
  },
  {
    name: "Ubuntu",
    styles: "font-ubuntu capitalize text-green-800",
  },
  {
    name: "Fira Sans",
    styles: "font-fira-sans italic text-purple-800",
  },
  {
    name: "PT Sans",
    styles: "font-pt-sans uppercase text-pink-800",
  },
  {
    name: "Noto Sans",
    styles: "font-noto-sans capitalize text-yellow-800",
  },
  {
    name: "Quicksand",
    styles: "font-quicksand italic text-indigo-800",
  },
  {
    name: "Dancing Script",
    styles: "font-dancing-script uppercase text-teal-800",
  },
  {
    name: "Josefin Sans",
    styles: "font-josefin-sans capitalize text-orange-800",
  },
  {
    name: "Cabin",
    styles: "font-cabin italic text-red-900",
  },
  {
    name: "Arvo",
    styles: "font-arvo uppercase text-blue-900",
  },
];

const Caption = ({ onHandleInputChange }) => {
  const [selectedCaption, setSelectedCaption] = useState(null);

  return (
    <div>
      <h2 className='mt-3'>Video Caption</h2>
      <p className='m-1'>Select Caption</p>
      <ScrollArea className="h-[160px] w-full mt-2 rounded-md border">
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-1'>
          {
            caption.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedCaption(option.name)
                  onHandleInputChange("caption", option.name)
                }}
                className={`cursor-pointer p-1 m-3 rounded-lg shadow-lg text-center ${option.styles} ${option.name === selectedCaption ? 'bg-slate-700' : ''}`}
              >
                <h3 className={`cursor-pointer p-1 hover:border rounded
                    ${option.name === selectedCaption ? 'border' : ""}
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

export default Caption