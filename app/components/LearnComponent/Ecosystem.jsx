
"use client";
import { EconsystemBg } from '@/app/image';
import Image from 'next/image';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Ecosystem = () => {
  const data = [
    { id: 1, amount: 100, suffix: "B", prefix: "$", description: "Value locked in DeFi" },
    { id: 2, amount: 87.08, suffix: "B", prefix: "$", description: "Value protecting zor" },
    { id: 3, amount: 0.082, suffix: "", prefix: "$", description: "Average transaction cost" },
    { id: 4, amount: 18.81, suffix: "M", prefix: "", description: "Transactions in the last 24h" },
  ];

  const counterRefs = useRef([]);
  counterRefs.current = [];

  useEffect(() => {
    counterRefs.current.forEach((el, index) => {
      const { amount, suffix, prefix } = data[index];

      gsap.fromTo(
        el,
        { innerText: "0" },
        {
          innerText: amount,
          duration: 3, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 70%", 
            end: "top 40%", 
            toggleActions: "play none none reset",
          },
          snap: { innerText: 0.01 },
          onUpdate: function () {
            const currentValue = parseFloat(this.targets()[0].innerText).toFixed(2);
            el.innerText = `${prefix}${currentValue}${suffix}`;
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !counterRefs.current.includes(el)) {
      counterRefs.current.push(el);
    }
  };

  return (
    <div className='max-w-screen-2xl px-2 mx-auto mt-24'>
      <p className='text-[#0500FF] font-DM-sans text-lg text-center '>Activity</p>
      <h1 className='font-DM-sans text-center mt-4 text-2xl sm:text-4xl font-bold'>
        The strongest ecosystem
      </h1>
      <p className='font-DM-sans text-center mt-2 text-base'>
        Activity from all Zor wallet networks
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 flex-wrap gap-7 items-center text-center mt-12 sm:mt-20">
        {data.map(({ id, amount, description }) => (
          <div key={id}>
            <h1
              ref={addToRefs}
              className="lg:text-4xl text-3xl text-[#0500FF] font-DM-sans font-bold"
            >
              0
            </h1>
            <p className="text-base mt-1 font-DM-sans">{description}</p>
          </div>
        ))}
      </div>

      <div className='mt-8 sm:mt-14'>
        <Image
          src={EconsystemBg}
          alt='Ecosystem background'
          className='w-full h-full'
        />
      </div>
    </div>
  );
};

export default Ecosystem;
