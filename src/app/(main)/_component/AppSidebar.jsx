"use client"
import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Gem, HomeIcon, LucideFileVideo, Search, WalletCards } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const MenuItems = [
  {
    title: 'Home',
    url: '/dashboard',
    icon: HomeIcon,
  },
  {
    title: 'Create New Video',
    url: '/create-new-video',
    icon: LucideFileVideo,
  },
  {
    title: 'Explore',
    url: '/explore',
    icon: Search,
  },
  {
    title: 'Billings',
    url: '/billing',
    icon: WalletCards,
  },
]
const AppSidebar = () => {
  const path = usePathname();

  return (
    <div className="">
      <Sidebar className="">
        <SidebarHeader>
          <div>
            <div className='flex items-center w-full justify-center pt-5 text-neutral-800'>
              <Image
                src={"/logo.svg"}
                alt='logo image'
                width={40}
                height={40}
              />
              <h2 className='text-3xl font-bold text-neutral-800'>SyllaAI</h2>
            </div>
            <h2 className='text-lg text-center mt-4'>AI Video Generator</h2>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <div className='mx-5 mt-10'>
                <Button className="text-lg text-center w-full">+Create Video</Button>
              </div>
              <SidebarMenu>
                <SidebarMenuItem className="mt-3">
                  {MenuItems.map((menu, index) => (<SidebarMenuItem>
                    <SidebarMenuButton isActive={path == menu.url} className="">
                      <Link
                        href={menu.url}
                        className='flex items-center text-lg gap-4 p-4'
                      >
                        <menu.icon />
                        <span>{menu.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  ))}
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter>
          <div className='border rounded-xl m-6 p-3 bg-slate-300'>
            <div className='flex justify-between items-center text-lg'>
              <Gem />
              <h2>10 Credits left</h2>
            </div>
            <Button className="w-full mt-3">Buy more Credits</Button>
          </div>
        </SidebarFooter>
      </Sidebar>
    </div>
  )
}

export default AppSidebar
