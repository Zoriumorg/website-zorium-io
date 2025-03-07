"use client"
import { Logo } from '@/app/image'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import BtnNav from '../../common/BtnNav/BtnNav'
import { usePathname } from 'next/navigation'



const Navbar = () => {

  const pathName = usePathname();
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
      <div className='max-w-screen-2xl mx-auto px-2 border-b gradient-border'>
        <div className='flex items-center justify-between py-2 px-2 sm:p-3'>
          <div className='flex items-center gap-7 lg:gap-12'>
            <Link href='/' >
              <Image
                src={Logo}
                width={35}
                height={35}
                alt='zorium' />
            </Link>

            <div className='md:flex hidden items-center gap-1 lg:gap-4 font-DM-sans '>
              {NavLinks.map(({ id, pageHref, pageName }) => (
                <Link
                  key={id}
                  href={pageHref}
                  className={`font-medium duration-75 transition-all ease-in-out px-3 py-2 tracking-wider rounded-md ${pathName == pageHref ? "text-[#3B37FE]" : ""} hover:bg-[#3a37fe41] hover:text-[#3B37FE]`}
                >{pageName}</Link>
              ))}
            </div>
          </div>

          <div className='md:block hidden'>
            <BtnNav btn={"Download App"} />
          </div>

          <div className='md:hidden '>
            <HiOutlineMenuAlt3 className='sm:text-3xl text-2xl' onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </div>

      {/* small screen  */}

      <div className={`md:hidden block w-full`}>
        <div className={`${isOpen ? "  w-full fixed h-screen top-0 " : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`flex flex-col top-0 h-screen transition-all duration-500 ease-in-out fixed sm:w-[65%] w-full bg-white ${isOpen ? "left-0" : "-left-full"} `}>
            <div className='p-1 py-2 pl-2 flex justify-between items-center border-b gradient-border'>
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

            <div className='flex  mt-2 flex-col font-DM-sans '>
              {NavLinks.map(({ id, pageHref, pageName }) => (
                <div key={id} className=' border-b border-[#C9C9C9] py-3'>
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={pageHref}
                    className='text-lg font-bold pl-4'
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
