import { appsIcon, networksIcon, WalletIcon, zorIcon } from '@/app/image'
import Image from 'next/image'
import React from 'react'

const Welcome = () => {
    const Cards = [
        {
            id: 1,
            icon: WalletIcon,
            title: "Pick a wallet",
            description: "Create accounts & manage assets",
        },
        {
            id: 2,
            icon: zorIcon,
            title: "Get zor",
            description: "The currency of zor wallet",
        },
        {
            id: 3,
            icon: networksIcon,
            title: "Choose a network",
            description: "Enjoy minimal fees",
        },
        {
            id: 4,
            icon: appsIcon,
            title: "Try apps",
            description: "Finance, gaming, social",
        },
    ]
    return (
        <>
            <div>
                <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-center lg:mt-16 md:mt-14 mt-10 font-DM-sans'>Welcome to Zorium</h1>
                <p className='text-base md:text-lg sm:mt-5 mt-3 text-center font-DM-sans'>The leading platform for innovative apps and blockchain networks</p>
            </div>
            <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1  md:gap-0 gap-7 place-items-center place-content-center max-w-screen-2xl  px-2 mx-auto mt-14 text-center'>
                {Cards.map(({ id, icon, title, description }) => (
                    <div key={id} className='flex items-center flex-col gap-1  font-DM-sans'>
                        <Image src={icon} alt={title} height={80} width={80}   />
                        <h2 className='mt-4 text-lg uppercase  font-medium'>{title}</h2>
                        <p className='font-base'>{description}</p>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Welcome
