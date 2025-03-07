
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NoticedImg } from '@/app/image'
import Image from 'next/image'
import React from 'react'
import List from '../common/Developers/List'

gsap.registerPlugin(ScrollTrigger);

// staticData
const staticData = [
    { number: "01", title: "Onchain Content Network", desc: "Submit your project to be viewed by millions of potential users across the network" },
    { number: "02", title: "Base Builds Channel", desc: "Share your project on /base and /base-builds to get community feedback on Farcaster" },
];

function Noticed() {
    const leftRef = useRef(null);

    // Gsap Animetion Useefect
    useEffect(() => {
        gsap.fromTo(
            leftRef.current,
            { x: -1000, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: leftRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reset",
                },
            }
        );
    }, []);

    return (
        <div className='lg:mt-[122px] md:mt-[50px] mt-[20px] overflow-hidden'>
            <div className='lg:grid grid-cols-12 gap-14'>

                {/* Only this Image section will animate */}
                <div
                    ref={leftRef}
                    className='lg:col-span-7 flex justify-center bg-[#ECF0FA] rounded-[18px] py-6 md:py-8 lg:py-12 h-full'
                >
                    <Image
                        src={NoticedImg}
                        alt="Get Involved"
                        height={300}
                        width={300}
                        className=' '
                    />
                </div>

                {/*  This text section will stay static */}
                <div className='lg:col-span-5 mt-5 lg:mt-0'>
                    <h3 className='text-black text-2xl sm:text-3xl md:text-4xl font-bold'>
                        Get Noticed
                    </h3>
                    <List data={staticData} color={"text-[#3700FD]"} isGrid={false} />
                </div>

            </div>
        </div>
    );
}

export default Noticed;
