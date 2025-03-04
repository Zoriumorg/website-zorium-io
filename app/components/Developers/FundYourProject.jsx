import { Credits, Ecosystem, Grants } from '@/app/image'
import Image from 'next/image'
import React from 'react'

// staticData 
const staticData = [
    {
        id: 1,
        title: "Base Ecosystem Fund",
        desc: "Early stage projects (pre-seed to seed) building on Base can apply for investment",
        image: Ecosystem,
    },
    {
        id: 2,
        title: "Rounds Grants",
        desc: "Post to /base-builds on Farcaster to be eligible for 2.25 ETH in weekly rewards",
        image: Grants,
    },
    {
        id: 3,
        title: "Gas Credits",
        desc: "Eligible projects may receive up to $15K in gas credits for their users",
        image: Credits,
    }
];

const FundYourProject = () => {
    return (
        <div className='lg:mt-32 md:mt-[50px] mt-[20px]'>
            <div>
                <h2 className='text-[#000000] lg:text-[40px] md:text-[30px] text-2xl font-bold text-center'>Fund Your Project</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {staticData.map((item) => (
                        <div key={item.id} className='col-span-1 bg-white rounded-[18px] shadow-[0px_4px_20px_rgba(0,0,0,0.15)] p-6 lg:mt-[50px] md:mt-[20px] mt-[10px]'>
                            <div className='flex flex-col space-y-3'>
                                {/* Icon */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    height={48}
                                    width={48}
                                    className='h-12 w-12'
                                />

                                {/* Title */}
                                <h6 className='text-black text-lg font-bold'>{item.title}</h6>

                                {/* Description */}
                                <p className='text-[#323232] text-sm'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>

        </div>
    )
}

export default FundYourProject
