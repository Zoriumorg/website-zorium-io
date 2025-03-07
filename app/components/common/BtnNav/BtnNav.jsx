import React from 'react'

function BtnNav({ btn }) {
    return (
        <div>
            <button className='bg-[#3B37FE] hover:bg-white hover:text-[#3B37FE] border-2 border-transparent hover:border-[#3B37FE] text-white  md:px-9 sm:px-6 px-5 cursor-pointer text-base md:text-[16px] p-2  transition-all duration-500 ease-in-out rounded-full tracking-wide font-DM-sans'>{btn}</button>
        </div>
    )
}

export default BtnNav
