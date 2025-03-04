import Image from 'next/image'
import React from 'react'

function Card({ cardData }) {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
                {cardData.map((card, i) => (
                    <div
                        key={i + 1}
                        className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
                    >
                        <div className="flex ">
                            <Image src={card.logo} alt={card.title} className="w-12 h-12" />
                        </div>
                        <h2 className="text-xl font-bold text-[#AD23FF] mt-4">
                            {card.title}
                        </h2>
                        <p className="text-[#A19F9F]  text-sm">{card.link}</p>
                        <p className="text-[#000000] mt-3 ">{card.description}</p>
                        <div className="flex mt-4">
                            <span
                                className={`text-white px-6 py-1.5 font-bold text-xs rounded-full transition-all duration-500 ease-in-out 
                      ${card.categoryColor} hover:bg-[#F8F8F8] hover:text-[#3B37FE]`}
                            >
                                {card.category}
                            </span>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card
