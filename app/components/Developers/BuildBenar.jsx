import { BuildingBenar } from '@/app/image';
import Image from 'next/image';
import React from 'react'

function BuildBenar() {
    return (
        <div className='lg:mt-[100px] md:mt-[50px] mt-[10px]'>
            <div className="relative w-full max-w-[1420px] mx-auto">
                {/* Background Image */}
                <Image
                    src={BuildingBenar}
                    alt="Building Banner"
                    className="w-full h-auto rounded-[18px]"
                />

                {/* Content on Top */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold">
                        Start building with us
                    </h2>

                    {/* Buttons */}
                    <div className="md:mt-6 mt-2 flex space-x-4">
                        <button className="md:px-6 md:py-3 py-1 px-2 text-xs md:text-lg bg-transparent border  text-white font-medium rounded-full shadow-md hover:bg-white hover:text-[#3B37FE] transition-all duration-500 ease-in-out ">
                            Office Hours
                        </button>
                        <button className="md:px-6 md:py-3 py-1 px-2 text-xs md:text-lg bg-transparent border  text-white font-medium rounded-full shadow-md hover:bg-white hover:text-[#3B37FE] transition-all duration-500 ease-in-out ">
                            View Our Docs
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BuildBenar