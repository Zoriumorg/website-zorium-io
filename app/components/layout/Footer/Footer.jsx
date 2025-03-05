
"use client"
import { BannerZoriumBG, zoriumFooter } from '@/app/image';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
    const pathName = usePathname()

    return (
        <div
            className='lg:mt-[100px] md:mt-[50px] mt-[10px] relative bg-cover bg-center'
            style={{ backgroundImage: `url(${BannerZoriumBG.src})` }}
        >
            {/* Content on Top */}
            <div className="relative w-full max-w-[1440px] mx-auto md:py-10">
                <div className='grid grid-cols-12 lg:gap-12 gap-0 space-y-1 md:space-y-0 relative z-10'>
                    {menuData.map((section, index) => (
                        <div key={index} className='lg:col-span-3 md:col-span-6 col-span-12 md:w-full   p-4 rounded-lg'>
                            <h6 className='font-bold text-[18px] text-[#000000]'>{section.title}</h6>
                            <div className='lg:mt-7 md:mt-3.5 mt-2'>
                                <ul className='space-y-3'>
                                    {section.items.map((item, i) => (
                                        <li key={i} className='text-[15px] cursor-pointer break-words whitespace-normal hover:text-[#3B37FE] w-fit'>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center w-full md:py-5 '>
                    <Image
                        src={zoriumFooter}
                        alt="Building Banner"
                        className="md:w-full w-[90%] md:h-40 h-36 "
                    />
                </div>
            </div>
        </div>

    )
}

export default Footer