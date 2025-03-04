

import Image from 'next/image'
import React from 'react'
import List from '../common/Developers/List'
import { SecondBuildImg } from '@/app/image'

// staticData
const staticData = [
    { number: "01", title: "Create your profile", desc: "Claim a Basename and create your Based Profile to connect with other Builders" },
    { number: "02", title: "Office Hours", desc: "Check out our Office Hours schedule to ask your questions live" },
    { number: "03", title: "Get Funded", desc: "A collection of monetary programs to help you build or grow your project" },
    { number: "04", title: "Get Noticed", desc: "Looking for help with distribution? Get noticed by millions of potential new users" },
    { number: "05", title: "Get Involved", desc: "Become an active participant in the Base community" },
    { number: "06", title: "Build Your Project", desc: "Resources that make it easy to build and use your onchain project" }
]


const Essentials = () => {

    return (
        <div className='lg:mt-40 md:mt-[50px] mt-[10px]'>
            <div className='lg:grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10'>



                {/* Text & List Section */}
                <div className='col-span-1 md:col-span-7 lg:mt-0 md:mt-5 mt-2.5 lg:order-2 order-1'>
                    <div>
                        <h2 className='text-black text-2xl md:text-[40px] font-bold'>
                            The Essentials
                        </h2>
                        <p className='text-[#000000] text-base md:text-lg mt-2'>
                            Jump to our most frequently requested tools and resources.
                        </p>
                    </div>

                    {/* Essentials List */}
                    <List data={staticData} color={"text-[#AD23FF]"} grid={true} />
                </div>

                {/* Image Section */}
                <div className='bg-[#ECF0FA] rounded-[40px] p-6 flex justify-center col-span-1 lg:col-span-5 lg:order-1 order-2 lg:mt-0 md:mt-5 mt-2.5'>
                    <Image
                        src={SecondBuildImg}
                        alt="second"
                        height={200}
                        width={200}
                        className='w-full h-auto max-w-[300px]'
                    />
                </div>

            </div>
        </div>
    )
}

export default Essentials