import { EconsystemBg } from '@/app/image'
import Image from 'next/image'
import React from 'react'

const Ecosystem = () => {

    const data = [
        {
            id: 1,
            amount: "$100B",
            description: "Value locked in DeFi"
        },
        {
            id: 2,
            amount: "$87.08B",
            description: "Value protecting zor"
        },
        {
            id: 3,
            amount: "$0.082",
            description: "Average transaction cost"
        },
        {
            id: 4,
            amount: "18.81M",
            description: "Transactions in the last 24h"
        },
    ]

    return (
        <div className='max-w-screen-2xl px-2 mx-auto mt-24'>
            <p className='text-[#0500FF] font-DM-sans text-lg text-center '>Activity</p>
            <h1 className='font-DM-sans text-center mt-4 text-2xl sm:text-4xl font-bold'>The strongest ecosystem</h1>
            <p className='font-DM-sans text-center mt-2 text-base'>Activity from all Zor wallet networks</p>

            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 flex-wrap gap-7 items-center text-center mt-12 sm:mt-20'>
                {data.map(({ id, amount, description }) => (
                    <div key={id}>
                        <h1 className='lg:text-4xl text-3xl text-[#0500FF] font-DM-sans font-bold'>{amount}</h1>
                        <p className='text-base mt-1 font-DM-sans'>{description}</p>
                    </div>
                ))}
            </div>

            <div className='mt-8 sm:mt-14'>
                <Image
                    src={EconsystemBg}
                    alt='Econsystem background'
                    className='w-full h-full'
                />
            </div>

        </div>
    )
}

export default Ecosystem
