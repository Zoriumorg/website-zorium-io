"use client"
import React, { useEffect, useState } from 'react'
import { Across, Zeero0x, Zeero0xPPL, Zeero0xSplitsL } from '@/app/image';
import Card from './Card';

const cardData1 = [
    {
        id: 1,
        logo: Zeero0x,
        title: "0x",
        link: "0x.org",
        description:
            "Your one stop shop to build financial products on crypto rails. Enable faster trading, better prices and superior UX in your app.",
        category: "Defi",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 2,
        logo: Zeero0xPPL,
        title: "0xPPL",
        link: "0x.org",
        description:
            "0xPPL is a web3 social platform enabling you to follow or interact with onchain activities of your peers & discover trends in a human-readable feed. Access your multi-chain portfolio across EVMs, Solana, Cosmos, and TON.",
        category: "Social",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 3,
        logo: Across,
        title: "Across Protocol",
        link: "across.to",
        description:
            "Across Protocol is a leading cross-chain token bridge that is secured by UMA's optimistic oracle. It is optimized for capital efficiency with a single liquidity pool, a competitive relayer landscape, and a no-slippage fee model. You can expect secure, fast and affordable cross-chain token transfers with Across.",
        category: "Bridge",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 4,
        logo: Zeero0xSplitsL,
        title: "0xSplits",
        link: "0xsplits.xyz",
        description:
            "Splits is a set of simple, modular smart contracts for safe and efficient onchain payments. You can split revenue from NFT sales, recoup expenses, diversify an income stream, withhold taxes, and much more.",
        category: "Infra",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 5,
        logo: Zeero0x,
        title: "0x",
        link: "0x.org",
        description:
            "Your one stop shop to build financial products on crypto rails. Enable faster trading, better prices and superior UX in your app.",
        category: "Defi",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 6,
        logo: Zeero0xPPL,
        title: "0xPPL",
        link: "0x.org",
        description:
            "0xPPL is a web3 social platform enabling you to follow or interact with onchain activities of your peers & discover trends in a human-readable feed. Access your multi-chain portfolio across EVMs, Solana, Cosmos, and TON.",
        category: "Social",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 7,
        logo: Across,
        title: "Across Protocol",
        link: "across.to",
        description:
            "Across Protocol is a leading cross-chain token bridge that is secured by UMA's optimistic oracle. It is optimized for capital efficiency with a single liquidity pool, a competitive relayer landscape, and a no-slippage fee model. You can expect secure, fast and affordable cross-chain token transfers with Across.",
        category: "Bridge",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 8,
        logo: Zeero0xSplitsL,
        title: "0xSplits",
        link: "0xsplits.xyz",
        description:
            "Splits is a set of simple, modular smart contracts for safe and efficient onchain payments. You can split revenue from NFT sales, recoup expenses, diversify an income stream, withhold taxes, and much more.",
        category: "Infra",
        categoryColor: "bg-[#3B37FE]",
    },

];
const cardData2 = [
    {
        id: 2,
        logo: Zeero0xPPL,
        title: "0xPPL",
        link: "0x.org",
        description:
            "0xPPL is a web3 social platform enabling you to follow or interact with onchain activities of your peers & discover trends in a human-readable feed. Access your multi-chain portfolio across EVMs, Solana, Cosmos, and TON.",
        category: "Social",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 1,
        logo: Zeero0x,
        title: "0x",
        link: "0x.org",
        description:
            "Your one stop shop to build financial products on crypto rails. Enable faster trading, better prices and superior UX in your app.",
        category: "Defi",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 4,
        logo: Zeero0xSplitsL,
        title: "0xSplits",
        link: "0xsplits.xyz",
        description:
            "Splits is a set of simple, modular smart contracts for safe and efficient onchain payments. You can split revenue from NFT sales, recoup expenses, diversify an income stream, withhold taxes, and much more.",
        category: "Infra",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 3,
        logo: Across,
        title: "Across Protocol",
        link: "across.to",
        description:
            "Across Protocol is a leading cross-chain token bridge that is secured by UMA's optimistic oracle. It is optimized for capital efficiency with a single liquidity pool, a competitive relayer landscape, and a no-slippage fee model. You can expect secure, fast and affordable cross-chain token transfers with Across.",
        category: "Bridge",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 5,
        logo: Zeero0x,
        title: "0x",
        link: "0x.org",
        description:
            "Your one stop shop to build financial products on crypto rails. Enable faster trading, better prices and superior UX in your app.",
        category: "Defi",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 6,
        logo: Zeero0xPPL,
        title: "0xPPL",
        link: "0x.org",
        description:
            "0xPPL is a web3 social platform enabling you to follow or interact with onchain activities of your peers & discover trends in a human-readable feed. Access your multi-chain portfolio across EVMs, Solana, Cosmos, and TON.",
        category: "Social",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 7,
        logo: Across,
        title: "Across Protocol",
        link: "across.to",
        description:
            "Across Protocol is a leading cross-chain token bridge that is secured by UMA's optimistic oracle. It is optimized for capital efficiency with a single liquidity pool, a competitive relayer landscape, and a no-slippage fee model. You can expect secure, fast and affordable cross-chain token transfers with Across.",
        category: "Bridge",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 8,
        logo: Zeero0xSplitsL,
        title: "0xSplits",
        link: "0xsplits.xyz",
        description:
            "Splits is a set of simple, modular smart contracts for safe and efficient onchain payments. You can split revenue from NFT sales, recoup expenses, diversify an income stream, withhold taxes, and much more.",
        category: "Infra",
        categoryColor: "bg-[#3B37FE]",
    },

];
const cardData3 = [

    {
        id: 1,
        logo: Zeero0x,
        title: "0x",
        link: "0x.org",
        description:
            "Your one stop shop to build financial products on crypto rails. Enable faster trading, better prices and superior UX in your app.",
        category: "Defi",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 4,
        logo: Zeero0xSplitsL,
        title: "0xSplits",
        link: "0xsplits.xyz",
        description:
            "Splits is a set of simple, modular smart contracts for safe and efficient onchain payments. You can split revenue from NFT sales, recoup expenses, diversify an income stream, withhold taxes, and much more.",
        category: "Infra",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 2,
        logo: Zeero0xPPL,
        title: "0xPPL",
        link: "0x.org",
        description:
            "0xPPL is a web3 social platform enabling you to follow or interact with onchain activities of your peers & discover trends in a human-readable feed. Access your multi-chain portfolio across EVMs, Solana, Cosmos, and TON.",
        category: "Social",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 3,
        logo: Across,
        title: "Across Protocol",
        link: "across.to",
        description:
            "Across Protocol is a leading cross-chain token bridge that is secured by UMA's optimistic oracle. It is optimized for capital efficiency with a single liquidity pool, a competitive relayer landscape, and a no-slippage fee model. You can expect secure, fast and affordable cross-chain token transfers with Across.",
        category: "Bridge",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 2,
        logo: Zeero0xPPL,
        title: "0xPPL",
        link: "0x.org",
        description:
            "0xPPL is a web3 social platform enabling you to follow or interact with onchain activities of your peers & discover trends in a human-readable feed. Access your multi-chain portfolio across EVMs, Solana, Cosmos, and TON.",
        category: "Social",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 6,
        logo: Zeero0xPPL,
        title: "0xPPL",
        link: "0x.org",
        description:
            "0xPPL is a web3 social platform enabling you to follow or interact with onchain activities of your peers & discover trends in a human-readable feed. Access your multi-chain portfolio across EVMs, Solana, Cosmos, and TON.",
        category: "Social",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 7,
        logo: Across,
        title: "Across Protocol",
        link: "across.to",
        description:
            "Across Protocol is a leading cross-chain token bridge that is secured by UMA's optimistic oracle. It is optimized for capital efficiency with a single liquidity pool, a competitive relayer landscape, and a no-slippage fee model. You can expect secure, fast and affordable cross-chain token transfers with Across.",
        category: "Bridge",
        categoryColor: "bg-[#3B37FE]",
    },
    {
        id: 8,
        logo: Zeero0xSplitsL,
        title: "0xSplits",
        link: "0xsplits.xyz",
        description:
            "Splits is a set of simple, modular smart contracts for safe and efficient onchain payments. You can split revenue from NFT sales, recoup expenses, diversify an income stream, withhold taxes, and much more.",
        category: "Infra",
        categoryColor: "bg-[#3B37FE]",
    },

];


const cardData4 = [
    {
        id: 1,
        logo: Zeero0xPPL,
        title: "0x",
        link: "0x.org",
        description:
            "Your one stop shop to build financial products on crypto rails. Enable faster trading, better prices and superior UX in your app.",
        category: "Defi",
        categoryColor: "bg-[#3B37FE]",
    },
];
const cardData5 = [
    {
        id: 1,
        logo: Zeero0xPPL,
        title: "0x",
        link: "0x.org",
        description:
            "Your one stop shop to build financial products on crypto rails. Enable faster trading, better prices and superior UX in your app.",
        category: "Defi",
        categoryColor: "bg-[#3B37FE]",
    },
];
const cardData6 = [
    {
        id: 1,
        logo: Zeero0xPPL,
        title: "0x",
        link: "0x.org",
        description:
            "Your one stop shop to build financial products on crypto rails. Enable faster trading, better prices and superior UX in your app.",
        category: "Defi",
        categoryColor: "bg-[#3B37FE]",
    },
];
const cardData7 = [
    {
        id: 1,
        logo: Zeero0xPPL,
        title: "0x",
        link: "0x.org",
        description:
            "Your one stop shop to build financial products on crypto rails. Enable faster trading, better prices and superior UX in your app.",
        category: "Defi",
        categoryColor: "bg-[#3B37FE]",
    },
];
const cardData8 = [
    {
        id: 1,
        logo: Zeero0xPPL,
        title: "0x",
        link: "0x.org",
        description:
            "Your one stop shop to build financial products on crypto rails. Enable faster trading, better prices and superior UX in your app.",
        category: "Defi",
        categoryColor: "bg-[#3B37FE]",
    },
];
const cardData9 = [
    {
        id: 1,
        logo: Zeero0xPPL,
        title: "0x",
        link: "0x.org",
        description:
            "Your one stop shop to build financial products on crypto rails. Enable faster trading, better prices and superior UX in your app.",
        category: "Defi",
        categoryColor: "bg-[#3B37FE]",
    },
];
const cardData10 = [
    {
        id: 1,
        logo: Zeero0xPPL,
        title: "0x",
        link: "0x.org",
        description:
            "Your one stop shop to build financial products on crypto rails. Enable faster trading, better prices and superior UX in your app.",
        category: "Defi",
        categoryColor: "bg-[#3B37FE]",
    },
];
const cardData11 = [
    {
        id: 1,
        logo: Zeero0xPPL,
        title: "0x",
        link: "0x.org",
        description:
            "Your one stop shop to build financial products on crypto rails. Enable faster trading, better prices and superior UX in your app.",
        category: "Defi",
        categoryColor: "bg-[#3B37FE]",
    },
];


const btn = [
    {
        id: 1,
        btnTitle: "All"
    },
    {
        id: 2,
        btnTitle: "Bridge"
    },
    {
        id: 3,
        btnTitle: "Gaming"
    },
    {
        id: 4,
        btnTitle: "Onramp"
    },
    {
        id: 5,
        btnTitle: "Dao"
    },
    {
        id: 6,
        btnTitle: "Infra"
    },
    {
        id: 7,
        btnTitle: "Social"
    },
    {
        id: 8,
        btnTitle: "Security"
    },
    {
        id: 9,
        btnTitle: "Other"
    },
    {
        id: 10,
        btnTitle: "X-chain"
    },
    {
        id: 11,
        btnTitle: "X-cross"
    },
]


function MaltipalTabes() {

    const categoryDataMap = {
        // All: [...cardData1, ...cardData2, ...cardData3, ...cardData4, ...cardData5, ...cardData6, ...cardData7, ...cardData8, ...cardData9, ...cardData10, ...cardData11],
        All: cardData1,
        Bridge: cardData2,
        Gaming: cardData3,
        Onramp: cardData4,
        Dao: cardData5,
        Infra: cardData6,
        Social: cardData7,
        Security: cardData8,
        Other: cardData9,
        "X-chain": cardData10,
        "X-cross": cardData11,
    };

    const [activeTab, setActiveTab] = useState('All');
    const [filteredData, setFilteredData] = useState(categoryDataMap["All"]);


    useEffect(() => {
        setFilteredData(categoryDataMap[activeTab] || []);
    }, [activeTab]);

    return (
        <div className='md:mt-[150px] mt-[50px]'>
            <div className='flex flex-wrap justify-center items-center md:gap-x-5 gap-x-2.5 md:gap-y-[56px] gap-y-5'>
                {btn.map((item, index) => (
                    <button key={index + 1} className={`md:px-9 px-5 md:py-4 py-2  font-bold md:text-[20px] text-xs  rounded-full hover:bg-[#3B37FE] hover:text-white transition-all duration-500 ease-in-out ${activeTab == item.btnTitle ? "text-white bg-[#3B37FE]" : "text-[#3B37FE] bg-[#F8F8F8]"} `} onClick={() => setActiveTab(item.btnTitle)}>{item.btnTitle}</button>
                ))}
            </div>
            <div className='md:my-[100px] mt-[20px]'>

                <Card cardData={filteredData} />
            </div>
        </div>
    )
}

export default MaltipalTabes