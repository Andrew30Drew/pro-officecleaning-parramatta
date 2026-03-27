"use client"
import Image from "next/image";


import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faq = () => {
    

  const faqs = [
    {
      id: 1,
      title: "Enhanced Productivity",
       content: "A clean and organised workspace facilitates efficiency by enabling employees to locate items easily. Our professional cleaning services eliminate clutter and streamline operations, minimising stress and maximising productivity",
    },
    {
      id: 2,
      title: "Improved Health",
       content: "Routine cleaning prevents the buildup of dust, dirt, and allergens, promoting a healthier work environment and reducing the risk of illness among employees. Our use of professional-grade cleaning products and equipment ensures thorough sanitation and hygiene.",
    },
    {
      id: 3,
      title: "Stress Reduction",
       content: "A cluttered and unkempt workplace can contribute to employee stress and frustration. By entrusting your cleaning needs to us, you free your team from the burden of maintaining cleanliness, allowing them to focus on their core responsibilities with peace of mind.",
    },
    {
      id: 4,
      title: "Impressive Impressions",
       content: "Impress clients, partners, and visitors with a clean and well-maintained office space. Our meticulous attention to detail ensures that every corner of your premises exudes professionalism and care, leaving a lasting positive impression on all who enter.",
    },
    {
      id: 5,
      title: "Boosted Morale",
       content: "A clean and orderly workplace fosters a positive atmosphere and instills confidence in your team. By investing in professional cleaning services, you demonstrate your commitment to employee well-being, enhancing morale and motivation.",
    },
    {
      id: 6,
      title: "Cost Savings",
       content: "Prevent costly downtime and absenteeism by investing in regular cleaning services. Our skilled cleaners utilise the latest equipment and techniques to deliver superior results, adding value to your business while reducing long-term maintenance expenses. Experience the difference that professional cleaning can make for your business. Contact Pro Clean Corp today to schedule a consultation and unlock the full potential of your workplace.",
    },
  ];
 

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="flex justify-center  py-6 md:py-4 lg:py-24 pb-32 lg:pb-40 bg-slate-100 ">
      <div className="w-full max-w-[1440px]  lg:px-20 md:px-10 px-5 ">
        
         <section className="flex flex-col lg:flex-row gap-14 md:space-y-14 space-y-6  w-full">
      {/* Left Images */}
      <div className="w-full lg:w-1/2">
      <div className="relative ">
 <div className="border-l-6 border-greenprimary pl-2">
          <Image
            src="/images/services/faq5.jpg"
            alt="Cleaning"
            width={400}
            height={400}
            className="rounded-xl"
          />
        </div>

        <div className=" hidden md:block absolute -bottom-14 right-0   overflow-hidden mt-2">
          <Image
            src="/images/services/faq3.jpg"
            alt="Cleaner"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>
       

      
      </div>

      {/* Right FAQ */}
      <div className="w-full lg:w-1/2 ">
      <div className="space-y-4">
 <p className="text-greenprimary lg:text-3xl text-2xl font-bold uppercase">
             ASKED QUESTIONS
            </p>
        <p className="md:text-4xl text-3xl  font-medium text-darkblue">
             General Frequently Asked Questions
            </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(index)}
              className={`  w-full text-left px-5 py-4  flex justify-between items-center bg-${activeIndex === index ? 'greenprimary text-white rounded-t-xl' : 'white text-gray-800 rounded-xl '} transition-colors`}
            >
              <span className="font-semibold">
                {index + 1}. {faq.title}
              </span>
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
            {activeIndex === index && (
              <div className="bg-white px-5  py-5 text-sm text-gray-600 rounded-b-xl">
                {faq.content}
              </div>
            )}
          </div>
        ))}
      </div>
      
      </div>
    </section>
      </div>
    </div>
  );
};

export default Faq
