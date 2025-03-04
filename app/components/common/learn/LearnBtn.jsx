import React from 'react'
import { GoArrowRight } from "react-icons/go";

const LearnBtn = ({btnTitle}) => {
    return (
        <button className='flex items-center justify-center cursor-pointer gap-3 uppercase text-base text-[#3B37FE] font-DM-sans border border-[#3B37FE] rounded-full px-5 p-3 w-fit tracking-wider '> {btnTitle}<GoArrowRight /></button>
    )
}

export default LearnBtn
