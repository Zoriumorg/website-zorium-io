import { InvolvedImg } from '@/app/image'
import Image from 'next/image'
import React from 'react'
import List from '../common/Developers/List'



// staticData
const staticData = [
    { number: "01", title: "Join the Discord", desc: "Join our Discord of over 300K+ members and get involved in our Base community" },
    { number: "02", title: "Host a Meetup", desc: "Sign up to host a meetup with other Based builders anywhere in the world" },
    { number: "03", title: "Use Apps on Base", desc: "Browse and use projects being built on the Base ecosystem" },

]

function Involved() {
    return (
        <div className='lg:mt-[120px] md:mt-[50px] mt-[20px] '>
            <div className='grid grid-cols-1 lg:grid-cols-12 md:gap-12 gap-5 lg:gap-20 items-center'>

                {/* Left Content */}


                {/* Right Image */}
                <div className='lg:col-span-7 flex justify-center bg-[#ECF0FA] rounded-[18px] py-6 md:py-8 lg:py-12 h-full lg:order-2 order-1'>
                    <Image
                        src={InvolvedImg}
                        alt="Get Involved"
                        height={300}
                        width={300}
                        className=' '
                    />
                </div>

                <div className='lg:col-span-5 lh:order-1 order-1'>
                    <h3 className='text-black text-2xl sm:text-3xl md:text-4xl font-bold'>
                        Get Involved
                    </h3>
                    <List data={staticData} color={"text-[#6081FF]"} isGrid={false} />
                </div>

            </div>
        </div>
    )
}

export default Involved