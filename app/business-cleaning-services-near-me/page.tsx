import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaRoute, FaUsers, FaHandshake, FaShieldAlt, FaThumbsUp, FaBuilding, FaSearch } from 'react-icons/fa';
import Ourservices from '../components/Ourservices';

export default function BusinessCleaningServicesNearMePage() {
  const locations = [
    { name: 'Sydney CBD', distance: '5km', clients: '50+', response: '30min' },
    { name: 'North Sydney', distance: '8km', clients: '35+', response: '25min' },
    { name: 'Parramatta', distance: '12km', clients: '60+', response: '35min' },
    { name: 'Chatswood', distance: '10km', clients: '40+', response: '30min' },
    { name: 'Liverpool', distance: '15km', clients: '45+', response: '40min' },
    { name: 'Bondi Junction', distance: '7km', clients: '30+', response: '25min' },
    { name: 'Blacktown', distance: '18km', clients: '35+', response: '45min' },
    { name: 'Campbelltown', distance: '25km', clients: '25+', response: '50min' }
  ];

  const nearbyServices = [
    {
      icon: <FaBuilding />,
      title: 'Office Buildings Near You',
      description: 'Professional cleaning for office buildings, corporate centers, and business parks in your immediate area.'
    },
    {
      icon: <FaUsers />,
      title: 'Local Business Cleaning',
      description: 'Trusted by local businesses including retail stores, restaurants, gyms, and professional services.'
    },
    {
      icon: <FaRoute />,
      title: 'Fast Local Response',
      description: 'Quick response times with cleaning teams strategically located throughout Sydney suburbs.'
    },
    {
      icon: <FaHandshake />,
      title: 'Community Partnership',
      description: 'Long-term partnerships with local businesses, understanding unique area requirements and challenges.'
    }
  ];

  const whyChooseLocal = [
    'Local cleaning teams familiar with your area',
    'Fast emergency response from nearby locations', 
    'Competitive rates without travel surcharges',
    'Understanding of local business community needs',
    'Flexible scheduling around local business hours',
    'Strong community reputation and references',
    'Supporting local employment and economy',
    'Personalized service from dedicated local managers'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Location Search */}
      <section className="relative bg-gradient-to-br from-slate-100 via-white to-gray-50 py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-darkblue/5 to-greenprimary/5"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-greenprimary text-white px-6 py-3 rounded-full mb-6">
              <FaMapMarkerAlt className="mr-2" />
              <span className="font-semibold">Local Business Cleaning Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-darkblue mb-8">
              Business Cleaning Services
              <span className="block text-greenprimary">Near Me</span>
              <span className="block text-2xl md:text-3xl font-normal text-gray-600">Sydney NSW</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto">
              Find professional business cleaning services in your local Sydney area. Fast response times, 
              competitive rates, and personalized service from cleaning teams near you.
            </p>
            
            {/* Location Search Box */}
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6">Find Business Cleaning Services In Your Area</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Location</label>
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Enter suburb or postcode"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenprimary focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenprimary focus:border-transparent">
                    <option>All Business Cleaning</option>
                    <option>Office Cleaning</option>
                    <option>Retail Cleaning</option>
                    <option>Restaurant Cleaning</option>
                  </select>
                </div>
                <a
                  href="tel:1300494983"
                  className="bg-greenprimary hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 text-center"
                >
                  Call Now: 1300 494 983
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Coverage Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-6">
              Local Coverage Across Sydney
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our business cleaning teams are strategically located throughout Sydney to provide 
              fast, reliable service to businesses in your area.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {locations.map((location, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-darkblue">{location.name}</h3>
                  <FaMapMarkerAlt className="text-greenprimary text-xl" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Distance:</span>
                    <span className="font-semibold text-darkblue">{location.distance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Local Clients:</span>
                    <span className="font-semibold text-greenprimary">{location.clients}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response Time:</span>
                    <span className="font-semibold text-blueprimary">{location.response}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-greenprimary hover:bg-green-600 text-white py-2 rounded-lg font-medium transition-colors duration-300">
                  Get Local Quote
                </button>
              </div>
            ))}
          </div>
          
          {/* Map Placeholder */}
          <div className="relative bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <FaMapMarkerAlt className="text-6xl text-greenprimary mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-darkblue mb-2">Service Coverage Map</h3>
              <p className="text-gray-600 max-w-md">
                Interactive map showing our business cleaning service coverage across Sydney NSW with local team locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-darkblue mb-6">
              Local Business Cleaning Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our local teams understand the unique needs of businesses in your area, 
              providing specialized cleaning services with a personal touch.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {nearbyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-greenprimary">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-greenprimary to-blueprimary rounded-xl flex items-center justify-center text-2xl text-white flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-darkblue mb-4">{service.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Local Section */}
      <section className="py-20 bg-darkblue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why Choose Local Business Cleaning Services?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Working with local cleaning professionals offers unique advantages that distant companies simply can't match.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseLocal.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FaThumbsUp className="text-greenprimary flex-shrink-0" />
                    <span className="text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-darkblue mb-6">Local Service Guarantee</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-greenprimary rounded-full flex items-center justify-center">
                      <FaClock className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-darkblue">Fast Response</div>
                      <div className="text-gray-600 text-sm">Average 30min response time</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blueprimary rounded-full flex items-center justify-center">
                      <FaShieldAlt className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-darkblue">Fully Insured</div>
                      <div className="text-gray-600 text-sm">Comprehensive local coverage</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-greenprimary rounded-full flex items-center justify-center">
                      <FaUsers className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-darkblue">Community Trusted</div>
                      <div className="text-gray-600 text-sm">500+ local business clients</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a 
                    href="tel:1300494983"
                    className="w-full bg-greenprimary hover:bg-green-600 text-white py-3 rounded-lg font-bold text-center block transition-colors duration-300"
                  >
                    Call Your Local Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-greenprimary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Find Your Local Business Cleaning Team
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Connect with professional business cleaning services in your area. Get personalized quotes 
            and fast, reliable service from teams who know your local community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
            <a 
              href="tel:1300494983"
              className="bg-white text-greenprimary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center"
            >
              <FaPhone className="mr-3" />
              Call 1300 494 983
            </a>
            <a 
              href="mailto:hello@procleancorp.com.au"
              className="border-2 border-white text-white hover:bg-white hover:text-greenprimary px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center"
            >
              <FaEnvelope className="mr-3" />
              Email for Quote
            </a>
          </div>
        </div>
      </section>

      <Ourservices bg_color="bg-white" />
    </div>
  );
}