"use client"
import { activityImages } from '@/app/image'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'

const Activity = () => {


    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px -20% 0px" });

    const heartShapeGrid = [
        { col: 1, row: 4 }, { col: 1, row: 5 }, { col: 1, row: 6 }, // 1st col → 3 images
        { col: 2, row: 3 }, { col: 2, row: 4 }, { col: 2, row: 5 }, { col: 2, row: 6 }, { col: 2, row: 7 }, // 2nd col → 5 images
        { col: 3, row: 2 }, { col: 3, row: 3 }, { col: 3, row: 4 }, { col: 3, row: 5 }, { col: 3, row: 6 }, { col: 3, row: 7 }, // 3rd col → 6 images
        { col: 4, row: 3, mb: "mb-10" }, { col: 4, row: 4, mb: "mb-10" }, { col: 4, row: 5, mb: "mb-10" }, { col: 4, row: 6, mb: "mb-10" }, { col: 4, row: 7, mb: "mb-10" }, { col: 4, row: 8, mb: "mb-10" }, // 4th col → 6 images
        { col: 5, row: 2 }, { col: 5, row: 3 }, { col: 5, row: 4 }, { col: 5, row: 5 }, { col: 5, row: 6 }, { col: 5, row: 7 }, { col: 5, row: 8 }, // 5th col → 7 images
        { col: 6, row: 3 }, { col: 6, row: 4 }, { col: 6, row: 5 }, { col: 6, row: 6 }, { col: 6, row: 7 }, { col: 6, row: 8 }, { col: 6, row: 9 }, // 6th col → 7 images
        { col: 7, row: 4 }, { col: 7, row: 5 }, { col: 7, row: 6 }, { col: 7, row: 7 }, { col: 7, row: 8 }, { col: 7, row: 9 }, { col: 7, row: 10 }, { col: 7, row: 9 }, // 7th col → 8 images
        { col: 8, row: 3 }, { col: 8, row: 4 }, { col: 8, row: 5 }, { col: 8, row: 6 }, { col: 8, row: 7 }, { col: 8, row: 8 }, { col: 8, row: 9 }, // 8th col → 7 images
        { col: 9, row: 2 }, { col: 9, row: 3 }, { col: 9, row: 4 }, { col: 9, row: 5 }, { col: 9, row: 6 }, { col: 9, row: 7 }, { col: 9, row: 8 }, // 9th col → 7 images
        { col: 10, row: 3 }, { col: 10, row: 4 }, { col: 10, row: 5 }, { col: 10, row: 6 }, { col: 10, row: 7 }, { col: 10, row: 8 }, // 10th col → 6 images
        { col: 11, row: 2 }, { col: 11, row: 3 }, { col: 11, row: 4 }, { col: 11, row: 5 }, { col: 11, row: 6 }, { col: 11, row: 7 }, // 11th col → 6 images
        { col: 12, row: 3 }, { col: 12, row: 4 }, { col: 12, row: 5 }, { col: 12, row: 6 }, { col: 12, row: 7 }, // 12th col → 5 images
        { col: 13, row: 4 }, { col: 13, row: 5 }, { col: 13, row: 6 } // 13th col → 3 images
    ];
    const centerCol = 7;

    return (
        <div className='max-w-screen-2xl mx-auto px-2'>
            <div className='mt-16'>
                <p className='text-center text-[#3B37FE] font-DM-sans text-lg'>Activity</p>
                <h3 className='mt-5 text-3xl font-semibold text-center font-DM-sans'>The World’s Zorium Store</h3>
            </div>

            <div className='flex items-center justify-center'>
                <div className="md:grid hidden w-fit grid-cols-13 xl:gap-x-7 lg:gap-x-5 pag-x-3 grid-rows-10 gap-4" ref={sectionRef}    >
                    {heartShapeGrid.map((pos, index) => {
                        const distanceFromCenter = Math.abs(pos.col - centerCol);
                        const delay = distanceFromCenter * 0.07;

                        return (
                            <motion.div
                                key={index}
                                className='lg:w-16 lg:h-16 md:h-10 md:w-10 flex items-center justify-center'
                                style={{
                                    gridColumnStart: pos.col,
                                    gridRowStart: pos.row,
                                }}
                                initial={{ opacity: 0, y: 40, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay, ease: "easeOut" }}
                            >
                                <Image
                                    src={activityImages[index]}
                                    alt={`Activity ${index + 1}`}
                                    width={120}
                                    height={120}
                                    className='lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] object-cover rounded-md shadow-md'
                                />
                            </motion.div>
                        );
                    })}
                </div>

                <div className='md:hidden grid grid-cols-5 sm:grid-cols-8 w-fit gap-4 mt-5'>
                    {heartShapeGrid.map((pos, index) => (
                        <div
                            key={index}
                            className={` w-14  h-14  flex items-center justify-center`}
                        >
                            <Image
                                src={activityImages[index]}
                                alt={`Activity ${index + 1}`}
                                width={120}
                                height={120}
                                className={` w-[40px] h-[40px]    object-cover rounded-md shadow-md  `}
                            />

                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}
export default Activity
