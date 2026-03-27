import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'

export const Exellence = () => {
  return (
    <div className='bg-greenprimary flex justify-center py-12 lg:py-16'>
        <div className='w-full max-w-[1440px]   lg:px-20 md:px-10 px-5 text-white  '>
            <p className='lg:text-6xl text-3xl  text-center font-semibold'>Excellence in Cleanliness, Every Time</p>
            <div className='flex justify-center'>
                <div className='lg:w-[60%] w-full flex flex-col items-center justify-center '>
                <p className='mt-5 text-xl lg:text-2xl text-center'>We provide specialised Commercial, Residential & NDIS cleaning services in Sydney. Our experienced cleaning service is environmentally friendly and based on professional attention to detail.</p>
                <p className='mt-3 text-lg lg:text-xl text-center'>Choose Yahweh Property Care as your trusted cleaner in Sydney because your satisfaction is our top priority.</p>
                 {/* Buttons */}
                 <div className='flex justify-between lg:w-3/5 w-full '>
                    <div className="flex flex-row gap-3 md:gap-4 lg:gap-6 mt-6 md:mt-6 lg:mt-8 w-full max-w-lg md:max-w-none">
                    <Link
                      href="/contact-us"
                      className="flex-1 md:w-52 md:flex-none flex items-center justify-between pl-4 md:pl-5 bg-darkblue text-white rounded-full py-3.5 md:py-3 lg:py-2 pr-2 hover:bg-gold transition-colors duration-300"
                      aria-label="Get free quote for professional cleaning services in Hornsby from Pro Clean Corp"
                    >
                      <span className="text-base md:text-lg whitespace-nowrap">
                        Get Quote
                      </span>
                      <div className="rounded-full p-2.5 md:p-3 lg:p-4 bg-white/10">
                        <FaArrowRight className="text-sm md:text-base text-white" />
                      </div>
                    </Link>

                    <a
                      href="tel:1300494983"
                      className="flex-1 md:w-52 md:flex-none flex items-center justify-between pl-4 md:pl-5 bg-white border-2 border-white rounded-full py-3.5 md:py-3 lg:py-2 pr-2 hover:bg-gray-50 transition-colors duration-300"
                      aria-label="Call Pro Clean Corp at 1300 494 983 for immediate cleaning service quotes in Hornsby"
                    >
                      <div className="flex flex-col items-start">
                        <span className="text-greenprimary text-xs md:text-sm font-medium">
                          Call Us Now
                        </span>
                        <span className="text-greenprimary font-bold text-sm md:text-sm">
                          1300 494 983
                        </span>
                      </div>
                      <div className="rounded-full p-2.5 md:p-3 lg:p-4 bg-greenprimary/10">
                        <IoCall className="text-sm md:text-base lg:text-xl text-greenprimary" />
                      </div>
                    </a>
                  </div>
                 </div>
                  
                </div>
            </div>
            
        </div>
    </div>
  )
}
