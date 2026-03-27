import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

const Getstart = () => {
  return (
    <div className=" flex w-full justify-center py-6 md:py-14 lg:py-0 ">
      <div className="w-full lg:max-w-[1440px]  lg:px-20 md:px-10 px-5 flex  flex-col lg:flex-row h-auto   space-y-10   ">
        <div className="w-full lg:w-1/2 bg-slate-50 h-full rounded-l-2xl flex flex-col space-y-8 p-8 py-10 lg:justify-center">
          <p className="text-5xl font-bold">
            Get Started <br /> <span className="text-greenprimary">Today</span>
          </p>
          <p className="text-lg">
            Contact us today to schedule a free consultation and discover how our cleaning services can benefit you. Let
            us handle the cleaning so you can focus on what matters most.
          </p>
          <Link
            href={'/contact-us'}
            className=" w-52 flex text-sm  items-center justify-between pl-5 bg-darkblue text-white  font-bold rounded-full  py-2  px-2    hover:bg-gold"
          >
            <p className="text-lg">Get in touch</p>
            <div className="rounded-full lg:p-4 p-3 relative ">
              {/* Background effect */}
              <div className="absolute inset-0 rounded-full "></div>

              {/* Arrow Icon */}
              <div className="relative z-10  text-white font-poppins">
                <FaArrowRight />
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full lg:w-1/2 h-full ">
          <Image
            width={650}
            height={580}
            src="/images/services/getintouch.jpg"
            alt="image"
            className="rounded-xl lg:rounded-r-xl lg:rounded-none "
          />
        </div>
      </div>
    </div>
  );
};

export default Getstart;
