import { heroSection, MobileHeroSection } from '@/app/image'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className='xl:max-w-full max-w-screen-2xl mx-auto'>
            <Image src={heroSection} alt='heroSection' height={1000} width={1000} className='w-full sm:h-full xl:px-20 h-[30vh] object-contain sm:block hidden' />
            <Image src={MobileHeroSection} alt='heroSection' height={1000} width={1000} className='w-full sm:h-full h-[35vh] object-cover sm:hidden block ' />

        </div>
    )
}

export default Banner
