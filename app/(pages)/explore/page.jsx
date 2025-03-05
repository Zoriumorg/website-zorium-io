import MaltipalTabes from '@/app/components/Explore/MaltipalTabes'
import { ExploreMain } from '@/app/image'
import Image from 'next/image'
import React from 'react'

function Explore() {
    return (
        <div className='max-w-[1440px] mx-auto px-4 py-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>
                {/* Image Section */}
                <div className='flex justify-center md:justify-end order-1 md:order-2'>
                    <Image
                        src={ExploreMain}
                        alt='home'
                        height={500}
                        width={500}
                        className='w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]'
                    />
                </div>

                {/* Text Section */}
                <div className='text-center md:text-left flex flex-col justify-center order-2 md:order-1'>
                    <h2 className='text-[#000000] text-[30px] md:text-[46px] font-bold leading-tight'>
                        Base ecosystem apps and integrations overview.
                    </h2>
                    <div className='mt-8'>

                        <button className={`md:px-9 px-5 md:py-4 py-2  font-bold md:text-[20px] text-xs hover:text-[#3B37FE] hover:bg-[#F8F8F8]  rounded-full bg-[#3B37FE] text-white transition-all duration-500 ease-in-out `} >Submit your app</button>
                    </div>

                </div>
            </div>
            <MaltipalTabes />
        </div>
    )
}

export default Explore
