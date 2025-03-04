import { footerZorium } from '@/app/image';
import Image from 'next/image';
import React from 'react'

const menuData = [
    {
        title: "Learn",
        items: [
            "Learn Hub",
            "What is Ethereum?",
            "What is ether (ETH)?",
            "Ethereum wallets",
            "What is Web3?",
            "Smart contracts",
            "Gas fees",
            "Run a node",
            "Ethereum security and scam prevention",
            "Quiz Hub",
            "Ethereum glossary",
            "Learn Hub"
        ]
    },
    {
        title: "Use",
        items: [
            "Guides",
            "Choose your wallet",
            "Get ETH",
            "Dapps - Decentralized applications",
            "Stablecoins",
            "NFTs - Non-fungible tokens",
            "DeFi - Decentralized finance",
            "DAOs - Decentralized autonomous organizations",
            "Decentralized identity",
            "Stake ETH",
            "Layer 2"
        ]
    },
    {
        title: "Build",
        items: [
            "Builder's home",
            "Tutorials",
            "Documentation",
            "Learn by coding",
            "Set up local environment",
            "Grants",
            "Foundational topics",
            "UX/UI design fundamentals",
            "Enterprise - Mainnet Ethereum",
            "Enterprise - Private Ethereum"
        ]
    },
    {
        title: "Participate",
        items: [
            "Community hub",
            "Online communities",
            "Ethereum events",
            "Contributing to ethereum.org",
            "Translation Program",
            "Ethereum bug bounty program",
            "Ethereum Foundation",
            "Ethereum Foundation Blog"
        ]
    }
];

const Footer = () => {
    return (
        <div className='border-t bg-[#FAFAFA] gradient-border '>
            <div className='max-w-[1440px] mx-auto px-4 py-5 '>
                <div className='lg:mt-[100px] md:mt-[50px] mt-[20px]'>

                    <div className='grid grid-cols-12 lg:gap-14 md:gap-5 gap-0   space-y-8 md:space-y-0 '>
                        {menuData.map((section, index) => (
                            <div key={index} className='lg:col-span-3 md:col-span-6 col-span-12 md:w-full w-2xs'>
                                <h6 className='font-bold md:text-[25px] text-[18px] text-[#000000]'>{section.title}</h6>
                                <div className='mt-7'>
                                    <ul className='space-y-3'>
                                        {section.items.map((item, i) => (
                                            <li key={i} className='md:text-[22px] text-[15px]  cursor-pointer  break-words whitespace-normal hover:text-[#3B37FE] w-fit'>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image */}
                <div className='lg:mt-[200px]'>
                    <div className='w-full md:my-[50px] my-[20px] '>
                        <Image
                            src={footerZorium}
                            alt="second"
                            height={200}
                            width={200}
                            className='w-full  lg:h-[345px]'
                        />
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Footer