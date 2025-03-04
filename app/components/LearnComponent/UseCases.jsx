import { bitcoin, Financial, usecasesInternet, usecasesNetwork, zorWalletLogo } from '@/app/image'
import Image from 'next/image'
import React from 'react'
import LearnBtn from '../common/learn/LearnBtn'

const UseCases = () => {
    return (
        <div className='container mx-auto'>
            <div className='mt-20'>
                <p className='text-center text-[#3B37FE] font-DM-sans text-lg'>Use cases</p>
                <h3 className='mt-5 text-3xl font-semibold text-center font-DM-sans'>A new way to use the internet</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 grid-rows-5 gap-4 mt-5">
                    <div className="lg:col-span-2 lg:row-span-3 h-fit flex justify-center flex-col bg-[#FFEBF2] p-9 rounded-4xl">
                        <div className="flex justify-center flex-col items-center">
                            <Image src={bitcoin} alt="Crypto without volatility" width={100} height={100} className="w-[250px] h-[280px]" />
                        </div>
                        <h3 className="text-lg font-medium tracking-widest uppercase font-DM-sans">Crypto without volatility</h3>
                        <p className="font-DM-sans text-base mt-3 w-[80%]">
                            Stablecoins are currencies that maintain stable value. Their price matches the U.S. dollar or other steady assets.
                        </p>
                        <div className="mt-4">
                            <LearnBtn btnTitle="learn more" />
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-4 bg-[#F5FFEE] rounded-4xl p-10">
                        <div className="relative w-full z-10 h-full flex flex-col justify-center">
                            <div className="w-full h-full absolute top-0 z-0">
                                <Image src={zorWalletLogo} alt="zorWalletLogo" width={100} height={100} className="w-full h-full" />
                            </div>
                            <div className="relative z-20">
                                <h1 className="text-2xl font-semibold tracking-widest uppercase font-DM-sans w-[80%]">Innovative apps</h1>
                                <p className="w-[65%] font-DM-sans text-lg font-normal tracking-wide">Ethereum apps work without selling your data. Protect your privacy.</p>
                                <div className="mt-4">
                                    <LearnBtn btnTitle="learn more" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 lg:row-span-2 lg:col-start-3 lg:row-start-1 relative bg-[#FFFBEB] rounded-4xl">
                        <div className="flex items-center">
                            <div className="p-10">
                                <h1 className="uppercase font-DM-sans mt-5 text-4xl font-semibold tracking-wider">A fairer financial system</h1>
                                <p className="text-xl font-DM-sans mt-5 w-[70%]">
                                    Billions can't open bank accounts or freely use their money. Ethereum's financial system is always open and unbiased.
                                </p>
                                <div className="mt-5">
                                    <LearnBtn btnTitle="explore" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-5">
                            <Image src={Financial} alt="Financial" height={100} width={100} className="w-fit h-full" />
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-3 bg-[#EBFFFB] h-full flex justify-center flex-col p-9 rounded-4xl">
                        <div className="flex justify-center flex-col items-center">
                            <Image src={usecasesNetwork} alt="Crypto without volatility" width={100} height={100} className="w-[250px] h-[280px]" />
                        </div>
                        <h3 className="text-lg font-medium tracking-widest uppercase font-DM-sans">The network of networks</h3>
                        <p className="font-DM-sans text-base mt-3 w-[80%]">
                            Ethereum is the hub for blockchain innovation. The best projects are built on Ethereum.
                        </p>
                        <div className="mt-4">
                            <LearnBtn btnTitle="learn more" />
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-3 bg-[#F2EBFF] h-full flex justify-center flex-col p-9 rounded-4xl">
                        <div className="flex justify-center flex-col items-center">
                            <Image src={usecasesInternet} alt="Crypto without volatility" width={100} height={100} className="w-[250px] h-[280px]" />
                        </div>
                        <h3 className="text-lg font-medium tracking-widest uppercase font-DM-sans">The internet of assets</h3>
                        <p className="font-DM-sans text-base mt-3 w-[80%]">
                            Art, certificates or even real estate can be tokenized. Anything can be a tradable token. Ownership is public and verifiable.
                        </p>
                        <div className="mt-4">
                            <LearnBtn btnTitle="Explore benefits" />
                        </div>
                    </div>
                </div> 

            </div>

        </div >
    )
}

export default UseCases
