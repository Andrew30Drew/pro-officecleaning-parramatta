import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Cleaning Companies Near Me | Local Commercial Cleaners Sydney',
  description: 'Top-rated business cleaning companies near you in Sydney NSW. Local commercial cleaners with proven track records, competitive pricing, and comprehensive business cleaning services.',
  keywords: 'business cleaning companies near me, local commercial cleaners Sydney, business cleaners in my area, commercial cleaning services nearby',
  openGraph: {
    title: 'Business Cleaning Companies Near Me | Local Commercial Cleaners Sydney',
    description: 'Top-rated business cleaning companies near you in Sydney NSW. Local commercial cleaners with proven track records, competitive pricing, and comprehensive business cleaning services.',
    url: '/business-cleaning-companies-near-me',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Business cleaning companies near me' }]
  },
  alternates: { canonical: '/business-cleaning-companies-near-me' }
};

export default function BusinessCleaningCompaniesNearMePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-darkblue via-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Business Cleaning Companies Near Me
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Find trusted business cleaning companies near you with Pro Clean Corp. Local commercial cleaning services throughout Sydney NSW with proven results, competitive pricing, and exceptional customer service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:1300494983" 
                  className="bg-white text-darkblue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Call Now: 1300 494 983
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-darkblue transition-colors">
                  Get Free Quote
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Business cleaning companies near me - Local commercial cleaners"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Business Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">Business Cleaning Companies Serving Your Area</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Pro Clean Corp operates multiple local teams across Sydney NSW, providing comprehensive business cleaning services to companies in your immediate area.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { 
                area: 'Sydney CBD & Inner City',
                businesses: '300+',
                response: '15-20 min',
                specialties: ['High-rise offices', 'Retail stores', 'Restaurants', 'Hotels']
              },
              { 
                area: 'North Shore & Northern Beaches',
                businesses: '250+',
                response: '20-25 min',
                specialties: ['Corporate offices', 'Medical centers', 'Childcare facilities', 'Gyms']
              },
              { 
                area: 'Western Sydney',
                businesses: '400+',
                response: '25-35 min',
                specialties: ['Warehouses', 'Manufacturing', 'Shopping centers', 'Schools']
              },
              { 
                area: 'Eastern Suburbs',
                businesses: '200+',
                response: '18-25 min',
                specialties: ['Boutique offices', 'Cafes', 'Beauty salons', 'Real estate']
              },
              { 
                area: 'Southern Sydney',
                businesses: '350+',
                response: '25-40 min',
                specialties: ['Industrial facilities', 'Distribution centers', 'Healthcare', 'Education']
              },
              { 
                area: 'Hills District',
                businesses: '180+',
                response: '20-30 min',
                specialties: ['Business parks', 'Tech companies', 'Professional services', 'Clinics']
              }
            ].map((region, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-darkblue mb-3">{region.area}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Businesses Served:</strong> {region.businesses}</p>
                  <p><strong>Response Time:</strong> {region.response}</p>
                  <div>
                    <strong>Specialties:</strong>
                    <ul className="mt-1 space-y-1">
                      {region.specialties.map((specialty, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-greenprimary rounded-full"></div>
                          <span>{specialty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-darkblue mb-8">How to Choose the Best Business Cleaning Companies Near You</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Selecting the right business cleaning company near you requires careful evaluation of local reputation, service quality, pricing transparency, and reliability. Pro Clean Corp stands out among Sydney NSW business cleaning companies by providing comprehensive commercial cleaning solutions, maintaining local teams throughout the metropolitan area, and delivering consistent results that exceed client expectations while supporting local business growth and community development.
                </p>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  The best business cleaning companies near you should offer flexible scheduling, competitive pricing without hidden fees, comprehensive insurance coverage, and proven track records with local businesses. Our strategically positioned teams throughout Sydney NSW ensure fast response times, personalized service, and deep understanding of local business requirements, regulatory compliance, and community standards that make us the preferred choice for discerning business owners.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">What Makes Pro Clean Corp Different</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="border-l-4 border-greenprimary pl-4">
                      <h4 className="font-semibold text-darkblue">Local Expertise</h4>
                      <p className="text-gray-700">Deep knowledge of Sydney business districts and commercial requirements.</p>
                    </div>
                    <div className="border-l-4 border-blueprimary pl-4">
                      <h4 className="font-semibold text-darkblue">Fast Response</h4>
                      <p className="text-gray-700">15-40 minute response times across all Sydney locations.</p>
                    </div>
                    <div className="border-l-4 border-darkblue pl-4">
                      <h4 className="font-semibold text-darkblue">Transparent Pricing</h4>
                      <p className="text-gray-700">No hidden fees, travel surcharges, or surprise costs.</p>
                    </div>
                    <div className="border-l-4 border-greenprimary pl-4">
                      <h4 className="font-semibold text-darkblue">Proven Results</h4>
                      <p className="text-gray-700">1000+ satisfied business clients across Sydney NSW.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Image
                src="/images/services/warehouse.webp"
                alt="Professional business cleaning companies Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
                <div className="bg-darkblue/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Service Excellence</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ 1000+ business clients served</li>
                    <li>✓ 15-40 minute response times</li>
                    <li>✓ Local teams in every district</li>
                    <li>✓ Comprehensive insurance coverage</li>
                    <li>✓ Transparent pricing structure</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-darkblue mb-8">Comprehensive Business Cleaning Services</h3>
            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Office building cleaning & maintenance',
                  'Retail store cleaning services',
                  'Restaurant & hospitality cleaning',
                  'Warehouse & industrial cleaning',
                  'Medical facility sanitization',
                  'Educational institution cleaning',
                  'Childcare center maintenance',
                  'Gym & fitness facility cleaning',
                  'Strata & apartment building services',
                  'End of lease cleaning',
                  'Carpet & upholstery cleaning',
                  'Window cleaning services',
                  'Emergency cleaning response',
                  'Post-construction cleanup',
                  'Specialized deep cleaning',
                  'Regular maintenance programs'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-darkblue rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Evaluation Criteria for Business Cleaning Companies</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Local Reputation & Experience</h4>
                <p className="text-gray-700 mb-4">
                  Research business cleaning companies with strong local presence, positive client testimonials, and proven track records in your specific area. Look for companies that understand local business requirements, maintain community relationships, and provide references from nearby businesses.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Service Range & Flexibility</h4>
                <p className="text-gray-700 mb-4">
                  Choose business cleaning companies offering comprehensive services including daily maintenance, deep cleaning, specialized services, and emergency response. Ensure they can accommodate your specific business hours, cleaning requirements, and scheduling preferences.
                </p>

                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Insurance & Compliance</h4>
                <p className="text-gray-700 mb-4">
                  Verify that business cleaning companies carry comprehensive liability insurance, worker's compensation, and maintain all necessary certifications. Professional companies comply with Australian workplace safety standards and industry regulations.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Pricing Transparency</h4>
                <p className="text-gray-700 mb-4">
                  Compare pricing structures from multiple business cleaning companies, ensuring transparent quotes without hidden fees. Local companies should provide competitive rates without travel surcharges or additional costs for standard services within their coverage areas.
                </p>

                <h4 className="text-xl font-semibold text-darkblue mb-3">5. Response Time & Availability</h4>
                <p className="text-gray-700 mb-4">
                  Evaluate response times, emergency service availability, and scheduling flexibility. The best business cleaning companies near you provide fast response for urgent needs and accommodate last-minute schedule changes or special requirements.
                </p>

                <h4 className="text-xl font-semibold text-darkblue mb-3">6. Technology & Communication</h4>
                <p className="text-gray-700 mb-4">
                  Modern business cleaning companies utilize technology for scheduling, communication, quality monitoring, and service delivery. Look for companies that provide regular updates, easy communication channels, and professional service management systems.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Business Districts We Serve</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides business cleaning services throughout Sydney NSW's major commercial areas and business districts:
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'Circular Quay', 'The Rocks', 'Barangaroo',
                'North Sydney', 'Crows Nest', 'St Leonards', 'Chatswood',
                'Parramatta', 'Westmead', 'Olympic Park', 'Ryde',
                'Bondi Junction', 'Randwick', 'Kensington', 'Mascot',
                'Liverpool', 'Campbelltown', 'Penrith', 'Blacktown',
                'Macquarie Park', 'Frenchs Forest', 'Brookvale', 'Manly',
                'Hurstville', 'Miranda', 'Sutherland', 'Cronulla',
                'Bankstown', 'Auburn', 'Granville', 'Fairfield'
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
                  question: 'How do I find reliable business cleaning companies near me?',
                  answer: 'Research local business cleaning companies through online reviews, community recommendations, and business referrals. Look for companies with strong local presence, positive client testimonials, proper insurance, and proven track records in your area. Pro Clean Corp maintains teams throughout Sydney NSW with comprehensive business cleaning services and local expertise.'
                },
                {
                  question: 'What should I expect from professional business cleaning companies?',
                  answer: 'Professional business cleaning companies should provide comprehensive services, flexible scheduling, transparent pricing, proper insurance, trained staff, quality assurance, and reliable communication. Expect consistent results, professional presentation, and service that supports your business operations and enhances your workplace environment.'
                },
                {
                  question: 'How do business cleaning companies price their services?',
                  answer: 'Most business cleaning companies price services based on facility size, cleaning frequency, service scope, and location. Pro Clean Corp provides transparent pricing without hidden fees, travel surcharges, or surprise costs. We offer customized quotes based on your specific business requirements and cleaning needs.'
                },
                {
                  question: 'Can business cleaning companies work around my business hours?',
                  answer: 'Yes, professional business cleaning companies offer flexible scheduling including after-hours, early morning, weekend, and holiday cleaning services. Pro Clean Corp accommodates your business operations, customer schedules, and specific timing requirements to minimize disruption while maintaining cleaning quality.'
                },
                {
                  question: 'What makes local business cleaning companies better than national chains?',
                  answer: 'Local business cleaning companies offer personalized service, faster response times, community accountability, competitive pricing without corporate overhead, and deep understanding of local business requirements. Pro Clean Corp combines local expertise with professional standards to deliver superior business cleaning services throughout Sydney NSW.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-darkblue via-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Connect with Local Business Cleaning Companies</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for professional business cleaning services near you. Local expertise, proven results, competitive pricing.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Your Business Cleaning Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}