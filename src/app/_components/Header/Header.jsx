"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Authentication from '../Authentication'
import { useAuthContext } from '@/app/Provider'
import Link from 'next/link'

const Header = () => {
  const { user } = useAuthContext();

  return (
    <div className='flex justify-between items-center mt-4'>
      <div className='flex items-center'>
        <Image
          src={"/logo.svg"}
          alt='logo image'
          width={40}
          height={40}
        />
        <h2 className='text-3xl font-bold text-neutral-50'>SyllaAI</h2>
      </div>
      <div>
        {!user ? <Authentication>
          <Button className="text-lg font-medium p-5 bg-blue-800">Get Started</Button>
        </Authentication>

          :
          <div className='flex items-center gap-2'>
            <Link href={"/dashboard"}>
              <Button className="text-lg font-medium p-5 bg-blue-800">
                Dashboard
              </Button>
            </Link>
            <Image src={user?.pictureURL} alt="user logo" width={50} height={50} className='rounded-full' />
          </div>}
      </div>
    </div>
  )
}

export default Header
