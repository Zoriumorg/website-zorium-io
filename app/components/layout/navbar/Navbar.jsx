"use client"
import { Logo } from '@/app/image'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const NavLinks = [
    {
      id: 1,
      pageName: 'Learn',
      pageHref: '/'
    },
    {
      id: 2,
      pageName: 'Use',
      pageHref: '/explore'
    },
    {
      id: 3,
      pageName: 'Build',
      pageHref: '/developers'
    },
    {
      id: 4,
      pageName: 'Participate',
      pageHref: '#'
    },
    {
      id: 5,
      pageName: 'Research',
      pageHref: '#'
    }
  ]

  return (
    <div className=' sticky top-0 bg-white z-[999999999999]'>
      <div className='max-w-screen-2xl mx-auto px-2'>
        <div className='flex items-center justify-between sm:my-3 py-4 px-2 sm:p-5'>
          <div className='flex items-center gap-7 lg:gap-12'>
            <Link href='/' >
              <Image
                src={Logo}
                width={35}
                height={35}
                alt='zorium' />
            </Link>

            <div className='md:flex hidden items-center gap-7 lg:gap-10 font-DM-sans '>
              {NavLinks.map(({ id, pageHref, pageName }) => (
                <Link
                  key={id}
                  href={pageHref}
                  className='text-lg font-normal'
                >{pageName}</Link>
              ))}
            </div>
          </div>

          <div className='md:block hidden'>
            <button className='bg-[#3B37FE] hover:bg-white hover:text-[#3B37FE] border-2 border-transparent hover:border-[#3B37FE] text-white  md:px-9 sm:px-6 px-5 cursor-pointer text-base md:text-lg p-2  transition-all duration-500 ease-in-out rounded-full tracking-wide font-DM-sans'>Download App</button>
          </div>

          <div className='md:hidden '>
            <HiOutlineMenuAlt3 className='sm:text-3xl text-2xl' onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </div>

      {/* small screen  */}

      <div className={`md:hidden block w-full `}>
        <div className={`${isOpen ? "  w-full fixed h-screen top-0 " : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`flex flex-col top-0 h-screen transition-all duration-500 ease-in-out  fixed sm:w-[65%] w-full bg-white ${isOpen ? "left-0" : "-left-full"} `}>
            <div className='p-1 pt-4 pl-2 flex justify-between items-center'>
              <Link href='/'>
                <Image
                  src={Logo}
                  width={35}
                  height={35}
                  alt='zorium pl-2 ' />
              </Link>
              <div className='w-fit' onClick={() => setIsOpen(false)}>
                <IoClose className='sm:text-3xl text-2xl' />
              </div>
            </div>

            <div className='flex  mt-5   flex-col font-DM-sans '>
              {NavLinks.map(({ id, pageHref, pageName }) => (
                <div key={id} className=' border-t border-t-[#C9C9C9]/[25%] py-4 '>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={pageHref}
                    className='text-lg font-normal pl-4'
                  >{pageName}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>


  )
}

export default Navbar
