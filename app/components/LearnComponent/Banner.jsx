"use client"
import { heroSection, MobileHeroSection } from '@/app/image'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Image from 'next/image'
import React, { Suspense } from 'react'
import EthObject from './EthObject'
import { useMediaQuery } from 'react-responsive'

const Banner = () => {


    return (
        <div className='xl:max-w-full max-w-screen-2xl mx-auto relative z-0 overflow-x-hidden'>
            <div className=' h-full absolute z-50 w-full bg-transparent'>
                <Suspense >
                    <Canvas className='absolute cursor-pointer w-full h-full 2xl:left-5 xl:left-4 lg:left-3 md:left-2 sm:left-1 left-1  bg-transparent'>
                        <ambientLight intensity={1} />
                        <pointLight position={[0, 10, 5]} intensity={1} />
                        <PerspectiveCamera position={[10, 10, 10]} />
                        <OrbitControls
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 2}
                            enableZoom={false} />
                        <EthObject rotation={[0, Math.PI, 0]} scale={1} />
                    </Canvas>
                </Suspense>
            </div>
            <Image src={heroSection} alt='heroSection' height={1000} width={1000} className='w-full sm:h-full xl:px-20 h-[30vh] object-contain sm:block hidden relative z-0' />
            <Image src={MobileHeroSection} alt='heroSection' height={1000} width={1000} className='w-full sm:h-full h-[35vh] object-cover sm:hidden block ' />

        </div>
    )
}

export default Banner
