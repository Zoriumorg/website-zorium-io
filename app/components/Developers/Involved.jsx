
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InvolvedImg } from "@/app/image";
import Image from "next/image";
import List from "../common/Developers/List";

gsap.registerPlugin(ScrollTrigger);

// staticData
const staticData = [
    { number: "01", title: "Join the Discord", desc: "Join our Discord of over 300K+ members and get involved in our Base community" },
    { number: "02", title: "Host a Meetup", desc: "Sign up to host a meetup with other Based builders anywhere in the world" },
    { number: "03", title: "Use Apps on Base", desc: "Browse and use projects being built on the Base ecosystem" },
];

function Involved() {
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
                ease: "power3.out",
                scrollTrigger: {
                    trigger: rightRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reset",
                },
            }
        );
    }, []);

    return (
        <div className="lg:mt-[120px] md:mt-[50px] mt-[20px] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-12 gap-5 lg:gap-20 items-center">

                {/* Only this Image section will animate */}
                <div
                    ref={rightRef}
                    className="lg:col-span-7 flex justify-center bg-[#ECF0FA] rounded-[18px] py-6 md:py-8 lg:py-12 h-full lg:order-2 order-1"
                >
                    <Image
                        src={InvolvedImg}
                        alt="Get Involved"
                        height={300}
                        width={300}
                        className=""
                    />
                </div>

                {/* This text section will stay static */}
                <div className="lg:col-span-5 lg:order-1 order-1">
                    <h3 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold">
                        Get Involved
                    </h3>
                    <List data={staticData} color={"text-[#6081FF]"} isGrid={false} />
                </div>

            </div>
        </div>
    );
}

export default Involved;
