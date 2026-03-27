import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa6';

const Welcomesection = () => {

    return(
      <div className="flex justify-center  py-12 md:py-4 lg:py-24 my-6 lg:my-24 ">
      <div className="w-full max-w-[1440px]  lg:px-20 md:px-10 px-5 ">
            <section className="flex flex-col lg:flex-row gap-14 md:space-y-14 space-y-4  bg-white w-full">
              {/* Left Images */}
              <div className="w-full lg:w-1/2 ">
              <div className="relative ">
         <div className="border-l-8 border-greenprimary pl-2">
                  <Image
                    src="/images/hero_img1.jpg"
                    alt="Cleaning"
                    width={400}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
        
                <div className=" hidden md:block absolute -bottom-14 right-0   rounded-xl  overflow-hidden mt-2">
                  <Image
                    src="/images/hero_img2.jpg"
                    alt="Cleaner"
                    width={300}
                    height={300}
                    className="rounded-xl"
                  />
                </div>
              </div>
               
        
              
              </div>
        
              {/* Right FAQ */}
              <div className="w-full lg:w-1/2   flex flex-col space-y-3 lg:space-y-6">
               <p className=" font-bold lg:text-3xl text-2xl text-greenprimary uppercase">ABOUT CLEANING</p>
               <p className="md:text-6xl text-3xl font-medium text-darkblue">Pro Clean Corp</p>
               <p className="md:text-2xl font-semibold">Local operations team on-call 24 hours a day, available to work at a moment’s notice</p>
               <p>Affordable and Deep Cleaning Services in Surry Hills by professionals with free service so you can focus on business or loved ones!Deep Cleaning Services in Alexandria for detailed, thorough results. We refresh every corner with expert care and precision.</p>
               <p>Rebranded Pro Clean Corp takes pride with professional experienced cleaners since 2016 and stands as a No. 1 Cleaning Service provider in Australia. Based in Sydney, we have diligently served the communities of New South Wales and Queensland. Our team comprises of skilled and experienced cleaners who are committed to delivering exceptional results. With a wealth of industry knowledge and expertise, we specialise in offering a wide array of cleaning solutions meticulously tailored to fulfill the unique requirements of our valued clients.</p>
                 <Link
              href={'/contact-us'}
              className=" w-52 flex text-sm  items-center justify-between pl-5 bg-darkblue text-white   rounded-full  py-2  px-2    hover:bg-gold"
            >
              <p className="text-lg">Contact Us</p>
              <div className="rounded-full lg:p-4 p-3 relative ">
                {/* Background effect */}
                <div className="absolute inset-0 rounded-full bg-white opacity-10"></div>

                {/* Arrow Icon */}
                <div className="relative z-10  text-white font-poppins">
                  <FaArrowRight />
                </div>
              </div>
            </Link>
              </div>
            </section>
        </div>
        </div>
    )
}

export default Welcomesection