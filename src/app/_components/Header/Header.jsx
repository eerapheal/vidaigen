"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Authentication from '../Authentication'

const Header = () => {
  return (
    <div className='flex justify-between items-center mt-4'>
      <div className='flex items-center'>
        <Image
          src={"/logo.svg"}
          alt='logo image'
          width={40}
          height={40}
        />
        <h2 className='text-3xl font-bold text-neutral-50'>VIDAIGEN</h2>
      </div>
      <div>
        <Authentication>
          <Button className="text-lg font-medium p-5 bg-blue-800">Get Started</Button>
        </Authentication>
      </div>
    </div>
  )
}

export default Header
