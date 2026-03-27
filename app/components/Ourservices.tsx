'use client';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData } from '../lib/Servicedata';
import { FaArrowRight } from 'react-icons/fa6';

interface props {
  bg_color: string;
}

const Ourservices = ({ bg_color }: props) => {

  return (
  <section 
    className={`flex justify-center py-8 lg:py-16 ${bg_color}`}
    id="services"
    aria-labelledby="services-heading"
  >
      <div className="h-auto lg:px-20 md:px-10 px-5  w-full lg:max-w-[1440px]">
        <header className="text-center space-y-4">
          <p className="text-center font-bold lg:text-3xl text-2xl text-greenprimary uppercase tracking-wide">Cleaning Service</p>
          <h2 id="services-heading" className="md:text-5xl text-3xl font-medium text-darkblue">Our Excellent Services</h2>
        </header>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8 lg:mt-12">
          {servicesData.map((item) => (
            <Link 
              href={`/services/${item.link}`} 
              key={item.id} 
              className="bg-white p-2 relative rounded-lg border-b-4 border-b-greenprimary shadow-2xl w-full group overflow-hidden transition-transform duration-300 hover:translate-y-[-10px] block"
              aria-label={`Learn more about ${item.title} services`}
            >
              <div className="h-48 w-full overflow-hidden">
                <Image
                  height={500}
                  width={500}
                  className="h-full rounded-xl w-full object-cover transform overflow-hidden transition-transform duration-[300ms] group-hover:scale-125 object-end"
                  src={item.icon}
                  alt={`${item.title} commercial cleaning services in Sydney NSW`}
                />
              </div>
              
              <div className='bg-white h-16 w-16 rounded-full absolute right-8 top-[170px] p-3'>
                <div className='bg-greenprimary h-full w-full rounded-full flex items-center justify-center text-white'>
                  <FaArrowRight />
                </div>
              </div>
              
              <div className="p-6 flex flex-col space-y-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.content?.slice(0, 100)}...</p>
              </div>
             
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourservices;
