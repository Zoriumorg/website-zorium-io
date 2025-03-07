"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LearnZorium } from '@/app/image'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger);

const Learn = () => {

    const rightRef = useRef(null);

    // Gsap Animetion Useefect
    useEffect(() => {
        gsap.fromTo(
            rightRef.current,
            { x: 1000, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: rightRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reset",
                },
            }
        );
    }, []);

    return (
        <div className='max-w-screen-2xl mx-auto px-2 overflow-hidden'>

            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-between mt-20 items-center gap-9'>
                <div className='lg:col-span-1 xl:col-span-2 lg:order-none order-2'>
                    <h2 className='text-[#3B37FE] font-DM-sans text-lg'>Learn</h2>
                    <h1 className='sm:text-4xl text-3xl font-semibold font-DM-sans sm:tracking-wider mt-2'>Understand Ethereum</h1>
                    <p className='text-base font-DM-sans lg:w-[70%] w-full mt-3'>Crypto can feel overwhelming. Don't worry, these materials are designed to help you understand Ethereum in just a few minutes.</p>
                    <div className='mt-5'>
                        <h3 className='text-lg font-DM-sans font-semibold tracking-wider'>Popular topics</h3>
                        <div className='grid grid-cols-2 md:grid-cols-3 text-center mt-4 gap-3'>
                            {[
                                "What is Ethereum?",
                                "How to start, step by step",
                                "Ethereum roadmap",
                                "What are crypto wallets?",
                                "Ethereum Whitepaper"
                            ].map((data, index) => (
                                <div
                                    key={index}
                                    className='col-span-1  flex justify-center items-center text-sm md:text-base rounded-xl text-center shadow-[0px_4px_20px_rgba(0,0,0,0.15)] p-4 md:p-5 w-full '>
                                    {data}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    ref={rightRef}
                    className='col-span-1  flex justify-center  lg:justify-end  '>
                    <Image
                        src={LearnZorium}
                        alt='Learn-Zorium'
                        className='sm:w-[500px] sm:h-[500px] w-full h-full'
                    />
                </div>
            </div>

        </div>
    )
}

export default Learn
