import React from 'react';
import bgimg from '../../public/images/hero/hero5.jpg';
import { GiVacuumCleaner } from "react-icons/gi";
import { TbHomeSpark } from "react-icons/tb";

export const Whatwedo = () => {
  return (
    <div className=' relative w-full  h-[80vh]   '>
        <div className='absolute inset-0 z-0 '>
 <div
      className='flex justify-center items-center  bg-cover bg-center  h-[80vh]  bg-red-200 brightness-75'
      style={{ backgroundImage: `url(${bgimg.src})` }}
    >
     
      
    </div>
      {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className='relative z-10 text-white flex mx-auto w-full lg:max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-20 py-12 lg:py-16'>
          <div className='w-full lg:w-1/2 flex flex-col space-y-3'>
            <p className='lg:text-6xl text-2xl text-white font-bold'>Behind the <span className='text-greenprimary'> Home Master</span> Company Stories.</p>
            <p className='text-xl font-semibold'>We help people live and work in cleaner, healthier spaces with dependable, professional cleaning always tailored to what you need.</p>
            <div className='flex  flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-20'>
                <div className='flex items-center space-x-3'>
                    <div className='bg-greenprimary w-20 h-20 rounded-full flex items-center justify-center'>
                        <GiVacuumCleaner className='text-4xl' />
                    </div>
                    <div>
                        <p className='text-3xl text-greenprimary font-bold'>269+</p>
                        <p>Active Clients</p>

                    </div>
                </div>
                <div className='flex items-center space-x-3' >
                    <div className='bg-greenprimary w-20 h-20 rounded-full flex items-center justify-center'>
                        <TbHomeSpark className='text-4xl'/>
                    </div>
                      <div>
                        <p className='text-3xl text-greenprimary font-bold'>386+</p>
                        <p>Glorious Years</p>

                    </div>
                </div>
            </div>
          </div>
        </div>
  
    </div>
 
  );
}
