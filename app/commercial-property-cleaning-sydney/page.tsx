import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Property Cleaning Sydney NSW | Professional Building Maintenance',
  description: 'Comprehensive commercial property cleaning services in Sydney NSW. Professional building maintenance for office complexes, shopping centers, warehouses & commercial facilities.',
  keywords: 'commercial property cleaning Sydney, building cleaning services NSW, property maintenance cleaning Sydney, commercial facility cleaning, building management services',
  openGraph: {
    title: 'Commercial Property Cleaning Sydney NSW | Professional Building Maintenance',
    description: 'Comprehensive commercial property cleaning services in Sydney NSW. Professional building maintenance for office complexes, shopping centers, warehouses & commercial facilities.',
    url: '/commercial-property-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial property cleaning Sydney NSW' }]
  },
  alternates: { canonical: '/commercial-property-cleaning-sydney' }
};

export default function CommercialPropertyCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-greenprimary via-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Property Cleaning Sydney NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Comprehensive commercial property cleaning and building maintenance services. Professional facility management for office complexes, shopping centers, warehouses, and commercial properties across Sydney NSW.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial property cleaning Sydney NSW - Building maintenance services"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Commercial Property Cleaning Services in Sydney NSW</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp provides comprehensive commercial property cleaning services throughout Sydney NSW, delivering complete building maintenance solutions for property managers, building owners, and facility management companies. Our commercial property specialists understand the unique requirements of maintaining large-scale commercial facilities, ensuring optimal presentation, tenant satisfaction, and property value preservation.
                </p>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Commercial properties face diverse cleaning challenges from multiple tenants, high-traffic common areas, exterior building maintenance, waste management coordination, and compliance with building standards and regulations. Our comprehensive commercial property cleaning services address all aspects of facility maintenance, creating clean, safe, and attractive environments that enhance property appeal and tenant retention throughout Sydney NSW.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Integrated Property Management Solutions</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Commercial property cleaning requires coordinated facility management approaches that address interior cleaning, exterior maintenance, tenant needs, and building compliance. Our integrated cleaning solutions support property managers and building owners in maintaining superior facility standards while optimizing operational efficiency and tenant satisfaction across Sydney NSW's diverse commercial property portfolio.
                </p>
              </div>
              
              <div>
                <Image
                  src="/images/services/office.webp"
                  alt="Professional commercial property maintenance Sydney NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
                <div className="bg-greenprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Property Services</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Complete building maintenance</li>
                    <li>• Multi-tenant coordination</li>
                    <li>• Common area management</li>
                    <li>• Emergency response services</li>
                    <li>• Compliance management</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Commercial Property Cleaning Process</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Property Assessment & Planning</h4>
                <p className="text-gray-700 mb-4">
                  Our commercial property specialists conduct comprehensive facility assessments, evaluating building size, tenant requirements, common areas, exterior maintenance needs, and traffic patterns. We develop customized cleaning schedules that coordinate with building operations, tenant activities, and property management requirements for optimal facility maintenance.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Multi-Zone Cleaning Coordination</h4>
                <p className="text-gray-700 mb-4">
                  We implement coordinated cleaning protocols across different building zones including tenant spaces, common areas, lobbies, elevators, stairwells, parking areas, and exterior surfaces. Our multi-zone approach ensures consistent cleanliness standards throughout the entire commercial property while accommodating diverse tenant needs and building usage patterns.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Integrated Facility Maintenance</h4>
                <p className="text-gray-700 mb-4">
                  Using commercial-grade equipment and building-appropriate cleaning methods, we maintain all aspects of commercial property cleanliness including interior cleaning, window washing, exterior building maintenance, landscaping support, and waste management coordination. Our integrated approach ensures comprehensive facility care that enhances property value and tenant satisfaction.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Property Management Support</h4>
                <p className="text-gray-700 mb-4">
                  We provide detailed cleaning reports, maintenance schedules, and property management coordination to support building operations and tenant relations. Our property management support includes emergency response capabilities, tenant service coordination, and compliance documentation required for commercial property operations and inspections.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Property Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Office complex cleaning',
                  'Shopping center maintenance', 
                  'Warehouse cleaning services',
                  'Mixed-use property cleaning',
                  'Strata building cleaning',
                  'Industrial facility cleaning',
                  'Common area maintenance',
                  'Lobby & entrance cleaning',
                  'Parking area cleaning',
                  'Building exterior washing',
                  'Window cleaning services',
                  'Emergency cleaning response'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-greenprimary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Benefits of Professional Commercial Property Cleaning</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/hero_img4.jpg"
                  alt="Clean commercial property Sydney NSW building"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Enhanced Property Value</h4>
                    <p className="text-gray-700">Maintain superior building presentation that preserves and enhances commercial property values while attracting quality tenants.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Improved Tenant Satisfaction</h4>
                    <p className="text-gray-700">Create clean, comfortable building environments that support tenant retention and positive building reputation.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Operational Efficiency</h4>
                    <p className="text-gray-700">Streamline facility maintenance through coordinated cleaning services that reduce management overhead and operational complexity.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Compliance Management</h4>
                    <p className="text-gray-700">Ensure building cleanliness meets regulatory standards, health requirements, and property management compliance obligations.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Commercial Property Areas We Service</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides commercial property cleaning services throughout Sydney NSW's major commercial districts and business precincts. Our facility management teams service commercial properties in:
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'Barangaroo', 'Circular Quay', 'Martin Place',
                'North Sydney', 'St Leonards', 'Chatswood', 'Artarmon',
                'Parramatta', 'Westmead', 'Olympic Park', 'Homebush',
                'Macquarie Park', 'North Ryde', 'Marsfield', 'Epping',
                'Bondi Junction', 'Double Bay', 'Surry Hills', 'Redfern',
                'Alexandria', 'Mascot', 'Botany', 'Banksmeadow',
                'Liverpool', 'Bankstown', 'Auburn', 'Granville',
                'Penrith', 'Blacktown', 'Castle Hill', 'Rouse Hill'
              ].map((location, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">{location}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6 mb-12">
              {[
                {
                  question: 'What types of commercial properties do you service in Sydney NSW?',
                  answer: 'We service all types of commercial properties including office complexes, shopping centers, mixed-use developments, warehouses, industrial facilities, strata buildings, medical centers, educational facilities, and retail properties. Our commercial property cleaning services are customized to meet the specific requirements of each property type and building management needs throughout Sydney NSW.'
                },
                {
                  question: 'How do you coordinate cleaning services with multiple tenants and property managers?',
                  answer: 'We work closely with property managers, building management, and tenant representatives to coordinate cleaning schedules that minimize disruption while maintaining superior cleanliness standards. Our team provides detailed scheduling, communicates with all stakeholders, and maintains flexible service delivery that accommodates diverse tenant needs and building operations across Sydney commercial properties.'
                },
                {
                  question: 'Do you provide emergency cleaning services for commercial properties?',
                  answer: 'Yes, Pro Clean Corp offers 24/7 emergency cleaning services for commercial properties throughout Sydney NSW. Whether dealing with water damage, tenant emergencies, special events, or urgent cleaning needs, our rapid response team can address emergency situations promptly with specialized equipment and techniques to protect property value and tenant satisfaction.'
                },
                {
                  question: 'What are the costs for commercial property cleaning in Sydney?',
                  answer: 'Commercial property cleaning costs vary based on building size, service frequency, property type, tenant requirements, and specific cleaning needs. Our competitive rates are structured to provide cost-effective solutions for property managers while maintaining superior service quality. We provide detailed quotes with transparent pricing and flexible contract terms tailored to your commercial property requirements.'
                },
                {
                  question: 'How do you ensure consistent cleaning quality across large commercial properties?',
                  answer: 'We implement comprehensive quality management systems including regular inspections, detailed cleaning checklists, staff training programs, and direct property manager communication. Our supervisory staff conduct ongoing quality assessments, address any concerns immediately, and maintain detailed documentation to ensure consistent cleaning excellence throughout all areas of your commercial property in Sydney NSW.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-greenprimary via-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Professional Commercial Property Cleaning Sydney NSW</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for comprehensive commercial property cleaning services. Complete facility management, tenant satisfaction focused, property value protection.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Your Commercial Property Cleaning Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}