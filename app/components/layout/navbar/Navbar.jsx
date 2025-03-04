import { Logo } from '@/app/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

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
    <div className='container mx-auto'>
      <div className='flex items-center justify-between sm:my-3 py-4 px-2 sm:p-5'>
        <div className='flex items-center gap-12'>
          <Image
            src={Logo}
            width={40}
            height={40}
            alt='zorium' />

          <div className='lg:flex hidden items-center gap-10 font-DM-sans '>
            {NavLinks.map(({ id, pageHref, pageName }) => (
              <Link
                key={id}
                href={pageHref}
                className='text-lg font-normal'
              >{pageName}</Link>
            ))}
          </div>
        </div>

        <div>
          <button className='bg-[#3B37FE] hover:bg-white hover:text-[#3B37FE] border-2 border-transparent hover:border-[#3B37FE] text-white  md:px-9 sm:px-6 px-5 cursor-pointer text-base md:text-lg p-2  transition-all duration-500 ease-in-out rounded-full tracking-wide font-DM-sans'>Download App</button>
        </div>

      </div>

    </div>


  )
}

export default Navbar
