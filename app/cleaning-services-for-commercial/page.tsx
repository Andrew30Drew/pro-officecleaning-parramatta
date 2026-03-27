import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaStar, FaClock, FaShieldAlt } from 'react-icons/fa';
import Ourservices from '../components/Ourservices';

export default function CleaningServicesForCommercialPage() {
  const benefits = [
    'Enhanced business reputation through pristine commercial environments',
    'Improved employee productivity and satisfaction in clean workspaces',
    'Reduced liability risks with comprehensive sanitization protocols',
    'Compliance with health and safety regulations across all industries',
    'Extended asset lifespan through professional maintenance programs',
    'Flexible service scheduling to minimize business disruption',
    'Cost-effective cleaning solutions with transparent pricing models',
    'Emergency response capabilities for urgent commercial needs'
  ];

  const services = [
    'Daily Office Cleaning',
    'Retail Store Maintenance', 
    'Warehouse Cleaning',
    'Medical Facility Sanitization',
    'Restaurant Deep Cleaning',
    'Industrial Site Cleaning',
    'Educational Facility Care',
    'Corporate Building Services'
  ];

  const locations = [
    'Sydney CBD', 'North Sydney', 'Parramatta', 'Chatswood', 'Liverpool',
    'Campbelltown', 'Penrith', 'Blacktown', 'Bankstown', 'Fairfield',
    'Hornsby', 'Sutherland', 'Burwood', 'Strathfield', 'Auburn'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section with New Design */}
      <section className="relative bg-gradient-to-r from-darkblue via-blueprimary to-greenprimary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white bg-opacity-90 rounded-full px-6 py-2 text-sm">
                <FaStar className="text-yellow-400 mr-2" />
                <span className="text-darkblue font-semibold">Premier Commercial Cleaning Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Cleaning Services
                <span className="block text-greenprimary">For Commercial</span>
                <span className="block text-2xl md:text-3xl font-normal">Properties Sydney NSW</span>
              </h1>
              
              <p className="text-xl text-gray-200 max-w-lg">
                Transform your commercial space with Pro Clean Corp's comprehensive cleaning services. From offices to warehouses, we deliver exceptional results that enhance your business image.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:1300494983"
                  className="inline-flex items-center justify-center bg-greenprimary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <FaPhone className="mr-3" />
                  Call 1300 494 983
                </a>
                <Link 
                  href="/contact-us"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-darkblue text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/commercial.webp"
                  alt="Professional cleaning services for commercial properties Sydney NSW"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-greenprimary rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-greenprimary">500+</div>
              <div className="text-gray-600">Commercial Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blueprimary">8+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-greenprimary">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blueprimary">100%</div>
              <div className="text-gray-600">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-darkblue mb-4">
              Comprehensive Commercial Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small offices to large industrial facilities, we provide specialized cleaning services tailored to your commercial property needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-greenprimary rounded-lg flex items-center justify-center mb-4">
                  <FaCheckCircle className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-darkblue mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">Professional cleaning solutions designed for your industry requirements.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-darkblue mb-8">
                Why Choose Our Commercial Cleaning Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FaCheckCircle className="text-greenprimary text-lg mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-greenprimary to-blueprimary rounded-xl text-white">
                <div className="flex items-center mb-4">
                  <FaShieldAlt className="text-2xl mr-3 text-white" />
                  <h3 className="text-xl font-semibold text-white">Fully Licensed & Insured</h3>
                </div>
                <p className="text-white">Complete peace of mind with comprehensive public liability insurance and professional indemnity coverage for all commercial cleaning services.</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/hero/hero5.jpg"
                alt="Professional commercial cleaning team Sydney NSW"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-greenprimary to-transparent opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-darkblue to-blueprimary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Commercial Space?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Contact Pro Clean Corp today for a free consultation and discover why over 500 businesses trust us with their commercial cleaning needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-greenprimary rounded-full flex items-center justify-center">
                <FaPhone className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Call Now</h3>
                <a href="tel:1300494983" className="text-greenprimary hover:underline text-lg">1300 494 983</a>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-greenprimary rounded-full flex items-center justify-center">
                <FaEnvelope className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Email Us</h3>
                <a href="mailto:hello@procleancorp.com.au" className="text-greenprimary hover:underline">hello@procleancorp.com.au</a>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-greenprimary rounded-full flex items-center justify-center">
                <FaClock className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Available</h3>
                <p className="text-gray-200">24/7 Emergency Service</p>
              </div>
            </div>
          </div>
          
          <Link 
            href="/contact-us"
            className="inline-flex items-center justify-center bg-greenprimary hover:bg-green-600 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Your Free Quote Today
          </Link>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-darkblue mb-8">Commercial Cleaning Service Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-center space-x-2">
                  <FaMapMarkerAlt className="text-greenprimary text-sm" />
                  <span className="text-gray-700 text-sm font-medium">{location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Ourservices bg_color="bg-white" />
    </div>
  );
}