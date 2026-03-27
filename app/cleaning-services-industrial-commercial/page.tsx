import Image from 'next/image';
import Link from 'next/link';
import { FaIndustry, FaBuilding, FaWarehouse, FaCog, FaHardHat, FaTools, FaClipboardCheck, FaAward } from 'react-icons/fa';
import Ourservices from '../components/Ourservices';

export default function CleaningServicesIndustrialCommercialPage() {
  const industrialServices = [
    {
      icon: <FaIndustry />,
      title: 'Manufacturing Facilities',
      description: 'Specialized cleaning for production floors, machinery areas, and quality control zones with industrial-grade solutions.'
    },
    {
      icon: <FaWarehouse />,
      title: 'Warehouse & Distribution',
      description: 'Comprehensive cleaning for storage areas, loading docks, and logistics facilities to maintain operational efficiency.'
    },
    {
      icon: <FaBuilding />,
      title: 'Commercial Buildings',
      description: 'Professional cleaning for multi-tenant buildings, office complexes, and mixed-use commercial properties.'
    },
    {
      icon: <FaCog />,
      title: 'Industrial Complexes',
      description: 'Heavy-duty cleaning for industrial sites including chemical plants, refineries, and processing facilities.'
    }
  ];

  const specializedAreas = [
    'Production Floor Cleaning',
    'Machinery & Equipment Sanitization',
    'Loading Dock Maintenance',
    'Storage Area Deep Cleaning',
    'Office & Administrative Areas',
    'Break Room & Facility Cleaning',
    'Hazardous Material Cleanup',
    'Post-Construction Cleaning'
  ];

  const certifications = [
    { name: 'OH&S Compliance', icon: <FaHardHat /> },
    { name: 'Environmental Standards', icon: <FaClipboardCheck /> },
    { name: 'Industrial Safety Certified', icon: <FaAward /> },
    { name: 'Professional Equipment', icon: <FaTools /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Split Design */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-darkblue to-blueprimary">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/services/warehouse.webp"
            alt="Industrial and commercial cleaning services background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 text-white">
              <div className="mb-6">
                <span className="inline-block bg-greenprimary text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Industrial & Commercial Specialists
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                <span className="block text-white">Cleaning Services</span>
                <span className="block text-greenprimary">Industrial &</span>
                <span className="block text-white">Commercial</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Professional cleaning solutions for Sydney's toughest industrial and commercial environments. From factories to office complexes, we deliver results that exceed expectations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="tel:1300494983"
                  className="bg-greenprimary hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Industrial Quote
                </a>
                <Link 
                  href="/contact-us"
                  className="border-2 border-greenprimary text-greenprimary hover:bg-greenprimary hover:text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all duration-300"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-200">
                  <h3 className="text-2xl font-bold text-darkblue mb-6">Why Choose Pro Clean Corp?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-greenprimary rounded-full flex items-center justify-center mx-auto mb-3 text-2xl text-white">
                          {cert.icon}
                        </div>
                        <p className="text-gray-700 text-sm font-medium">{cert.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-6">
              Industrial & Commercial Cleaning Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Specialized cleaning solutions designed for Sydney's most demanding industrial and commercial environments, 
              ensuring safety, compliance, and operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrialServices.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-greenprimary to-blueprimary rounded-xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-darkblue mb-4 group-hover:text-greenprimary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Areas Checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-8">
                Comprehensive Industrial Cleaning Services
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Our industrial cleaning specialists handle every aspect of your facility maintenance, 
                from production areas to administrative spaces.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specializedAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-greenprimary hover:text-white transition-all duration-300 group">
                    <div className="w-6 h-6 bg-greenprimary rounded-full flex items-center justify-center group-hover:bg-white">
                      <div className="w-2 h-2 bg-white rounded-full group-hover:bg-greenprimary"></div>
                    </div>
                    <span className="font-medium text-gray-800 group-hover:text-white">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/services/commercial.webp"
                  alt="Industrial and commercial cleaning specialists Sydney NSW"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 z-20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-greenprimary">500+</div>
                  <div className="text-gray-600 text-sm">Industrial Sites Cleaned</div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-darkblue text-white rounded-2xl p-6 shadow-xl z-20">
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-gray-300 text-sm">Emergency Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-to-br from-darkblue to-blueprimary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Industrial Cleaning Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach ensuring safety, efficiency, and compliance in every industrial cleaning project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Site Assessment', desc: 'Comprehensive evaluation of industrial cleaning requirements and safety protocols' },
              { step: '02', title: 'Safety Planning', desc: 'Development of detailed safety procedures and compliance documentation' },
              { step: '03', title: 'Execution', desc: 'Professional cleaning using industrial-grade equipment and certified techniques' },
              { step: '04', title: 'Quality Control', desc: 'Final inspection and documentation to ensure all standards are met' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-greenprimary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white">
                    {phase.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-20 w-full h-0.5 bg-greenprimary opacity-50"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                <p className="text-gray-300">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-greenprimary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready for Industrial-Grade Cleaning?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Contact Pro Clean Corp for specialized industrial and commercial cleaning services that meet the highest safety and quality standards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:1300494983"
              className="bg-white text-greenprimary hover:bg-gray-100 px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call 1300 494 983
            </a>
            <a 
              href="mailto:hello@procleancorp.com.au"
              className="border-2 border-white text-white hover:bg-white hover:text-greenprimary px-12 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Email for Quote
            </a>
          </div>
        </div>
      </section>

      <Ourservices bg_color="bg-gray-50" />
    </div>
  );
}