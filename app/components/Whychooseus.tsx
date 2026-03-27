import Image from 'next/image';
import { FaArrowRight, FaShieldAlt, FaClock, FaUsers } from "react-icons/fa";
import Link from 'next/link';
import heroimg1 from "../../public/images/hero/hero1.jpg";
import heroimg2 from "../../public/images/hero/hero2.jpg";
import heroimg3 from "../../public/images/hero/hero3.jpg";
import heroimg4 from "../../public/images/hero/hero4.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Fully Licensed & Insured",
      description: "Complete protection and peace of mind for your business"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "9+ Years Experience",
      description: "Proven track record serving 1,200+ business clients"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Professional Team",
      description: "Trained and certified commercial cleaning experts"
    }
  ];

  return (
    <section className="flex justify-center py-12 lg:py-16">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* Left - Content */}
          <div className="w-full lg:w-1/2 order-1">
            <div className="space-y-6 lg:space-y-8">
              {/* Section Tag */}
              <div className="inline-flex items-center bg-greenprimary/10 text-greenprimary px-4 py-2 rounded-full">
                <span className="text-sm lg:text-base font-semibold uppercase tracking-wide">Why Choose Us</span>
              </div>
              
              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-darkblue leading-tight">
                Best Commercial Cleaning Services{' '}
                <span className="text-greenprimary">Sydney NSW</span>
              </h2>
              
              {/* Description */}
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                Pro Clean Corp prioritizes your safety and satisfaction, offering comprehensive commercial cleaning solutions tailored to your business needs across Sydney NSW.
              </p>
              
              {/* Features List - Mobile Optimized */}
              <div className="space-y-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 lg:flex-col lg:items-start lg:bg-white lg:p-6 lg:rounded-xl lg:shadow-sm lg:border lg:border-gray-100 lg:hover:shadow-md lg:transition-shadow">
                    <div className="flex-shrink-0 text-greenprimary bg-greenprimary/10 p-3 rounded-full lg:bg-transparent lg:p-0 lg:mb-3">
                      {feature.icon}
                    </div>
                    <div className="flex-1 lg:flex-none">
                      <h3 className="font-bold text-darkblue mb-2 text-base lg:text-sm xl:text-base">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm lg:text-xs xl:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-between bg-darkblue hover:bg-greenprimary text-white rounded-full py-4 pl-6 pr-2 transition-all duration-300 shadow-lg hover:shadow-xl w-fit group"
              >
                <span className="text-lg font-semibold mr-4">Get Free Quote</span>
                <div className="bg-white/10 rounded-full p-3 group-hover:bg-white/20 transition-colors">
                  <FaArrowRight className="text-sm" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right - Images Grid */}
          <div className="w-full lg:w-1/2 order-2">
            <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-lg mx-auto lg:max-w-none">
              {/* Top Row */}
              <div className="space-y-4 lg:space-y-6">
                <div className="aspect-square">
                  <Image 
                    src={heroimg1} 
                    alt="Professional office cleaning services Sydney NSW - clean modern workspace" 
                    className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                    priority
                  />
                </div>
                <div className="aspect-[4/5]">
                  <Image 
                    src={heroimg2} 
                    alt="Commercial cleaning team Sydney NSW - professional cleaners at work" 
                    className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                  />
                </div>
              </div>
              
              {/* Bottom Row - Offset */}
              <div className="space-y-4 lg:space-y-6 mt-8 lg:mt-12">
                <div className="aspect-[4/5]">
                  <Image 
                    src={heroimg3} 
                    alt="Industrial cleaning Sydney NSW - warehouse and facility cleaning" 
                    className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                  />
                </div>
                <div className="aspect-square">
                  <Image 
                    src={heroimg4} 
                    alt="Medical centre cleaning Sydney NSW - sanitized healthcare facility" 
                    className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                  />
                </div>
              </div>
            </div>
            
            {/* Stats Badge */}
            <div className="mt-8 lg:mt-12 bg-greenprimary text-white rounded-2xl p-6 text-center shadow-xl max-w-xs mx-auto">
              <div className="text-3xl lg:text-4xl font-bold mb-2">1,200+</div>
              <div className="text-sm lg:text-base opacity-90">Satisfied Business Clients</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;