import React from 'react';
import img1 from '../../public/images/hero/hero1.jpg';
import Image from 'next/image';
import { FaShieldAlt, FaCog, FaLeaf, FaCheckCircle } from 'react-icons/fa';

export const Perfect = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-2xl lg:text-3xl" />,
      title: "Trusted Commercial Partner",
      description: "Over 9 years of providing commercial cleaning services across Sydney NSW, Pro Clean Corp has served 1,200+ business customers with 4.8★ satisfaction rating."
    },
    {
      icon: <FaCog className="text-2xl lg:text-3xl" />,
      title: "Premium Quality Equipment",
      description: "We use the most advanced commercial cleaning equipment and techniques to remove all dust, stains, and refresh your business environment to the highest standards."
    },
    {
      icon: <FaLeaf className="text-2xl lg:text-3xl" />,
      title: "Eco-Friendly Solutions",
      description: "Our green cleaning processes use environmentally safe, biodegradable products that protect your employees, customers, and the environment."
    }
  ];

  return (
    <section 
      className="w-full bg-greenprimary py-12 lg:py-16 relative overflow-hidden text-white" 
      id="why-perfect"
      aria-labelledby="perfect-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-4 border-dashed border-white animate-spin-slow" />
        <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full border-2 border-white/30" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-white/20" />
      </div>
      
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto relative z-10 text-white">
          
          {/* Header Section */}
          <div className="mb-8 lg:mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              
              {/* Left Content */}
              <div className="lg:w-2/3">
                <h2 
                  id="perfect-heading" 
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg"
                >
                  The Perfect Solution For Your{' '}
                  <span className="block">Commercial Space</span>
                </h2>
                <p className="text-lg lg:text-xl text-white leading-relaxed max-w-2xl drop-shadow-md">
                  Behind our commitment to providing the best commercial cleaning services in Sydney NSW, we have strengths and expertise that create trust and satisfaction among our business clients.
                </p>
              </div>
              
              {/* Right Decorative Element */}
              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <FaCheckCircle className="text-4xl lg:text-5xl text-white" />
                  </div>
                  <div className="absolute -inset-4 border-4 border-dashed border-white/30 rounded-full animate-spin-slow" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <Image 
                  src={img1} 
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300" 
                  width={600} 
                  height={400}
                  alt="Professional commercial cleaning services Sydney NSW - spotless business environment"
                  priority
                />
                {/* Image Overlay Badge */}
                <div className="absolute top-4 left-4 bg-white text-greenprimary px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  4.8★ Rated Service
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-8 lg:space-y-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 lg:gap-6 group">
                    
                    {/* Icon */}
                    <div className="flex-shrink-0 bg-white/10 !text-white p-4 rounded-2xl backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                      {feature.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold !text-white mb-3 drop-shadow-md" style={{ color: '#ffffff !important' }}>
                        {feature.title}
                      </h3>
                      <p className="text-base lg:text-lg !text-white leading-relaxed drop-shadow-sm" style={{ color: '#ffffff !important' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom Stats */}
          <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold !text-white mb-2 drop-shadow-lg" style={{ color: '#ffffff !important' }}>1,200+</div>
              <div className="text-sm lg:text-base !text-white drop-shadow-md" style={{ color: '#ffffff !important' }}>Business Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold !text-white mb-2 drop-shadow-lg" style={{ color: '#ffffff !important' }}>9+</div>
              <div className="text-sm lg:text-base !text-white drop-shadow-md" style={{ color: '#ffffff !important' }}>Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold !text-white mb-2 drop-shadow-lg" style={{ color: '#ffffff !important' }}>4.8★</div>
              <div className="text-sm lg:text-base !text-white drop-shadow-md" style={{ color: '#ffffff !important' }}>Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold !text-white mb-2 drop-shadow-lg" style={{ color: '#ffffff !important' }}>100%</div>
              <div className="text-sm lg:text-base !text-white drop-shadow-md" style={{ color: '#ffffff !important' }}>Satisfaction</div>
            </div>
          </div>
      </div>
    </section>
  );
};