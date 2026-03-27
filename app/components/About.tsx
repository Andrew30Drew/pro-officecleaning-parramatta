import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';

const About = () => {
  return (
    <section 
      className="flex justify-center py-12 lg:py-16" 
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="relative">
            {/* Main Image */}
            <div className="relative">
              <Image
                src="/images/hero_img1.jpg"
                alt="Professional commercial cleaning services Sydney NSW - Pro Clean Corp cleaners"
                width={500}
                height={400}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover object-[center_20%] rounded-2xl shadow-lg"
                priority
              />
            </div>

            {/* Overlay Image */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 lg:-bottom-12 lg:-right-8">
              <Image 
                src="/images/hero/hero4.jpg" 
                alt="Commercial cleaning equipment and supplies Sydney NSW" 
                width={180} 
                height={180} 
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-xl shadow-xl border-4 border-white" 
                loading="lazy"
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-greenprimary text-white rounded-full px-4 py-2 lg:px-6 lg:py-3 shadow-lg">
              <div className="text-center">
                <div className="text-lg lg:text-xl font-bold">9+</div>
                <div className="text-xs lg:text-sm">Years</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="space-y-6">
            {/* Section Tag */}
            <div className="inline-flex items-center bg-greenprimary/10 text-greenprimary px-4 py-2 rounded-full">
              <span className="text-sm lg:text-base font-semibold uppercase tracking-wide">About Pro Clean Corp</span>
            </div>
            
            {/* Main Heading */}
            <h2 
              id="about-heading"
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-darkblue leading-tight"
            >
              Professional Commercial Cleaning Services{' '}
              <span className="text-greenprimary">Sydney NSW</span>
            </h2>
            
            {/* Description */}
            <div className="space-y-4 text-gray-600">
              <p className="text-base lg:text-lg leading-relaxed">
                Pro Clean Corp delivers premier commercial cleaning services across Sydney NSW. With 9+ years of experience and over 1,200 satisfied business customers, we specialize in office cleaning, industrial cleaning, and commercial property maintenance.
              </p>
              <p className="text-base lg:text-lg leading-relaxed">
                Our fully licensed and insured team is dedicated to maintaining pristine business environments. From medical centres to warehouses, we provide reliable, cost-effective cleaning solutions that let you focus on your core business activities.
              </p>
            </div>
            
            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 lg:p-6 rounded-xl">
                <div className="text-2xl lg:text-3xl font-bold text-greenprimary mb-1">1,200+</div>
                <div className="text-sm lg:text-base text-gray-600">Happy Business Clients</div>
              </div>
              <div className="bg-gray-50 p-4 lg:p-6 rounded-xl">
                <div className="text-2xl lg:text-3xl font-bold text-greenprimary mb-1">4.8★</div>
                <div className="text-sm lg:text-base text-gray-600">Customer Rating</div>
              </div>
            </div>
            
            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center justify-between bg-darkblue hover:bg-greenprimary text-white rounded-full py-4 pl-6 pr-2 transition-all duration-300 shadow-lg hover:shadow-xl w-fit group"
            >
              <span className="text-lg font-semibold mr-4">Learn More About Us</span>
              <div className="bg-white/10 rounded-full p-3 group-hover:bg-white/20 transition-colors">
                <FaArrowRight className="text-sm" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;