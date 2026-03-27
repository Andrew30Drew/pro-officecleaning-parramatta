'use client';
import { useRouter } from 'next/navigation';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { FaUsers, FaArrowRight } from 'react-icons/fa';
import { FaHouseCircleCheck } from 'react-icons/fa6';

interface Props {
  bg_color: string;
  card_color: string;
}

const HowItWorks = ({ bg_color, card_color }: Props) => {
  const router = useRouter();

  const process = [
    {
      id: 1,
      icon: <MdOutlineLibraryBooks />,
      title: 'Request Commercial Cleaning',
      content: 'Contact us via our online form or call 1300 494 983 to request a customized commercial cleaning quote for your Sydney NSW business.',
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: 'Meet Our Professional Team',
      content:
        'Our licensed and insured commercial cleaning experts conduct a thorough assessment of your facility and develop a tailored cleaning plan.',
    },
    {
      id: 3,
      icon: <FaHouseCircleCheck />,
      title: 'Enjoy Your Clean Business',
      content: 'Experience consistently spotless commercial spaces with our ongoing cleaning services, allowing you to focus on your core business operations.',
    },
  ];

  return (
    <section className={`flex justify-center py-12 lg:py-16 ${bg_color}`}>
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-greenprimary/10 text-greenprimary px-4 py-2 rounded-full mb-6">
            <span className="text-sm lg:text-base font-semibold uppercase tracking-wide">Our Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-darkblue leading-tight">
            How Our Commercial Cleaning{' '}
            <span className="text-greenprimary">Process Works</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, professional, and reliable - discover our streamlined approach to commercial cleaning services in Sydney NSW.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {process.map((step, index) => (
            <div key={step.id} className="relative group">
              
              {/* Connecting Line - Desktop Only */}
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-12 h-0.5 bg-greenprimary/20 z-0" />
              )}
              
              {/* Card */}
              <div className={`relative ${card_color} rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-greenprimary group-hover:-translate-y-2`}>
                
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 bg-greenprimary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.id}
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative bg-greenprimary rounded-full p-4 w-20 h-20 flex items-center justify-center shadow-lg">
                    <div className="text-3xl lg:text-4xl text-white">{step.icon}</div>
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-white/30 animate-spin-slow" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-lg lg:text-xl font-bold text-darkblue">
                    {step.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    {step.content}
                  </p>
                </div>
                
                {/* CTA Button */}
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => router.push('/contact-us')}
                    className="inline-flex items-center bg-greenprimary hover:bg-darkblue text-white px-6 py-3 rounded-full transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg group/btn"
                  >
                    <span className="mr-2">Get Started</span>
                    <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="mt-16 lg:mt-20 text-center bg-greenprimary/5 rounded-2xl p-8 lg:p-12">
          <h3 className="text-xl lg:text-2xl font-bold text-darkblue mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-base lg:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join over 1,200 satisfied business clients who trust Pro Clean Corp for their commercial cleaning needs in Sydney NSW.
          </p>
          <button
            onClick={() => router.push('/contact-us')}
            className="inline-flex items-center bg-greenprimary hover:bg-darkblue text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl group"
          >
            <span className="mr-3">Get Your Free Quote Today</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;