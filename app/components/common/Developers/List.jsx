import React from 'react'

const List = ({ data, color, isGrid }) => {

    return (
        <div>
            {/* <div className='mt-6 space-y-8'> */}
            <div className={`mt-6 grid gap-6 ${isGrid ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                {data.map((item, index) => (
                    <div key={index} className='relative'>
                        {/* Background Number */}
                        <h2 className='absolute text-gray-200 text-4xl sm:text-5xl md:text-6xl font-semibold -top-2 left-0'>
                            {item.number}
                        </h2>

                        {/* Foreground Text */}
                        <div className='relative pl-10 pt-4 sm:pt-5 md:pt-6'>
                            <h5 className={`text-md sm:text-lg font-bold ${color}`}>
                                {item.title}
                            </h5>
                            <p className='text-[#323232] text-sm sm:text-base md:text-lg'>
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List
