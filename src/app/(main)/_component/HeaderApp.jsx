"use client"
import { useAuthContext } from '@/app/Provider';
import { SidebarTrigger } from '@/components/ui/sidebar'
import Image from 'next/image';
import React from 'react'

const HeaderApp = () => {
  const { user } = useAuthContext();
  return (
    <div className='flex justify-between items-center p-3'>
      <SidebarTrigger />
      {user?.pictureURL ? (
  <Image
    src={user.pictureURL}
    alt="user logo"
    width={40}
    height={40}
    className='rounded-full'
  />
) : (
  <Image
    src="/logo.svg" // Path to your default profile image
    alt="default user logo"
    width={40}
    height={40}
    className='rounded-full'
  />
)}
    </div>
  )
}

export default HeaderApp
