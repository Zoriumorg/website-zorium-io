"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import BtnNav from '@/app/components/common/BtnNav/BtnNav'
import MaltipalTabes from '@/app/components/Explore/MaltipalTabes'
import { ExploreMain } from '@/app/image'
import Image from 'next/image'

function Explore() {
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
        <div className='max-w-[1440px] mx-auto px-4 py-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center lg:h-[90vh]'>
                {/* Image Section */}
                <div
                    ref={containerRef}
                    className='flex justify-center md:justify-end order-1 md:order-2'>
                    <Image
                        ref={imgRef}
                        src={ExploreMain}
                        alt='home'
                        height={500}
                        width={500}
                        className='w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]'
                    />
                </div>

                {/* Text Section */}
                <div className='text-center md:text-left flex flex-col justify-center order-2 md:order-1'>
                    <h2 className='text-[#000000] text-[30px] md:text-[46px] font-bold leading-tight'>
                        Base ecosystem apps and integrations overview.
                    </h2>
                    <div className='mt-8'>
                        <BtnNav btn={"Submit your app"} />
                    </div>

                </div>
            </div>
            <MaltipalTabes />
        </div>
    )
}

export default Explore
