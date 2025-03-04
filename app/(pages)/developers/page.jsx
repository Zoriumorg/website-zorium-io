

import BuildBenar from '@/app/components/Developers/BuildBenar'
import Essentials from '@/app/components/Developers/Essentials'
import FundYourProject from '@/app/components/Developers/FundYourProject'
import Involved from '@/app/components/Developers/Involved'
import Noticed from '@/app/components/Developers/Noticed'
import { FirstBuildImg } from '@/app/image'
import Image from 'next/image'
import React from 'react'

const Developers = () => {
    return (
        <div className='max-w-[1440px] mx-auto px-4 py-5'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                {/* Text Section */}
                <div className='text-center md:text-left flex flex-col justify-center'>
                    <h2 className='text-[#000000] text-[36px] md:text-[46px] font-bold leading-tight'>
                        Resources for Builders
                    </h2>
                    <p className='text-[#000000] mt-2 text-[18px]'>
                        Get help to build and grow your project on Base with our Builder Resource Kit
                    </p>
                </div>

                {/* Image Section */}
                <div className='flex justify-center md:justify-end'>
                    <Image
                        src={FirstBuildImg}
                        alt='home'
                        height={500}
                        width={500}
                        className='w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]'
                    />
                </div>
            </div>

            <Essentials />
            <FundYourProject />
            <Involved />
            <Noticed />
            <BuildBenar />
        </div>
    )
}

export default Developers
