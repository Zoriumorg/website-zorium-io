
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import BuildBenar from '@/app/components/Developers/BuildBenar'
import Essentials from '@/app/components/Developers/Essentials'
import FundYourProject from '@/app/components/Developers/FundYourProject'
import Involved from '@/app/components/Developers/Involved'
import Noticed from '@/app/components/Developers/Noticed'
import { FirstBuildImg } from '@/app/image'
import Image from 'next/image'

const Developers = () => {
    const imgRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (event) => {
            if (!imgRef.current) return;

            const { left, top, width, height } = container.getBoundingClientRect();
            const x = event.clientX - left;
            const y = event.clientY - top;

            const xRotation = ((y / height) - 0.5) * 30;
            const yRotation = ((x / width) - 0.5) * 30;

            gsap.to(imgRef.current, {
                rotateX: -xRotation,
                rotateY: yRotation,
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(imgRef.current, {
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div className='container mx-auto px-4 py-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center lg:h-[90vh]'>
                {/* Text Section */}
                <div className='text-center md:text-left flex flex-col justify-center md:order-1 order-2'>
                    <h2 className='text-[#000000] text-[36px] md:text-[46px] font-bold leading-tight'>
                        Resources for Builders
                    </h2>
                    <p className='text-[#000000] mt-2 text-[18px]'>
                        Get help to build and grow your project on Base with our Builder Resource Kit
                    </p>
                </div>

                {/* Image Section */}
                <div
                    ref={containerRef}
                    className='flex justify-center md:justify-end md:order-2 w-full max-w-[500px] lg:max-w-[600px] aspect-square relative'
                >
                    <Image
                        ref={imgRef}
                        src={FirstBuildImg}
                        alt="3D Image"
                        height={500}
                        width={500}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            <Essentials />
            <FundYourProject />
            <Involved />
            <Noticed />
            <BuildBenar />
        </div>
    );
};

export default Developers;
