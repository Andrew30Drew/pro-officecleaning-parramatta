import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Cleaning Company Near Me | Local Professional Office Cleaners Sydney',
  description: 'Find the best office cleaning company near you in Sydney NSW. Local professional office cleaners with fast response times, competitive rates, and exceptional service quality.',
  keywords: 'office cleaning company near me, local office cleaners Sydney, professional office cleaning services nearby, office cleaners in my area',
  openGraph: {
    title: 'Office Cleaning Company Near Me | Local Professional Office Cleaners Sydney',
    description: 'Find the best office cleaning company near you in Sydney NSW. Local professional office cleaners with fast response times, competitive rates, and exceptional service quality.',
    url: '/office-cleaning-company-near-me',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Office cleaning company near me' }]
  },
  alternates: { canonical: '/office-cleaning-company-near-me' }
};

export default function OfficeCleaningCompanyNearMePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-greenprimary via-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Cleaning Company Near Me
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Looking for a reliable office cleaning company near you? Pro Clean Corp provides professional office cleaning services with local teams throughout Sydney NSW. Fast response, competitive rates, exceptional results.
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
                src="/images/services/office.webp"
                alt="Office cleaning company near me - Local professional cleaners"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
                />
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">Office Cleaning Services Near You</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Pro Clean Corp operates local office cleaning teams throughout Sydney NSW, providing fast response times and personalized service to businesses in your area.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'Sydney CBD', distance: '2km', response: '15min', offices: '200+' },
              { name: 'North Sydney', distance: '5km', response: '20min', offices: '150+' },
              { name: 'Parramatta', distance: '8km', response: '25min', offices: '180+' },
              { name: 'Chatswood', distance: '6km', response: '20min', offices: '120+' },
              { name: 'Bondi Junction', distance: '4km', response: '18min', offices: '100+' },
              { name: 'Liverpool', distance: '12km', response: '30min', offices: '140+' },
              { name: 'Blacktown', distance: '15km', response: '35min', offices: '90+' },
              { name: 'Penrith', distance: '20km', response: '40min', offices: '80+' }
            ].map((location, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-darkblue mb-2">{location.name}</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Distance: {location.distance}</p>
                  <p>Response: {location.response}</p>
                  <p>Offices: {location.offices}</p>
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Why Choose a Local Office Cleaning Company?</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Choosing a local office cleaning company near you provides significant advantages including faster response times, lower costs without travel surcharges, and personalized service from teams familiar with your specific area and business community. Pro Clean Corp operates dedicated local teams throughout Sydney NSW, ensuring your office receives consistent, reliable cleaning services from professionals who understand local business needs and requirements.
                </p>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Local office cleaning companies offer superior accountability, community reputation, and the ability to quickly respond to emergency cleaning needs or schedule changes. Our strategically located teams provide comprehensive office cleaning services including daily maintenance, deep cleaning, carpet care, and specialized cleaning solutions tailored to Sydney's diverse business environments and office spaces.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Benefits of Local Office Cleaning</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    'Faster response times (15-40 minutes)',
                    'No travel surcharges or additional fees',
                    'Local team familiar with your area',
                    'Community reputation and references',
                    'Flexible scheduling around local business hours',
                    'Supporting local employment and economy',
                    'Personalized service from dedicated managers',
                    'Emergency cleaning response available'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Image
                  src="/images/services/commercial.webp"
                  alt="Local office cleaning company Sydney"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
                <div className="bg-greenprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Local Advantages</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ 15-40 minute response times</li>
                    <li>✓ Local team knowledge</li>
                    <li>✓ Community reputation</li>
                    <li>✓ No travel surcharges</li>
                    <li>✓ Personalized service</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-darkblue mb-8">Comprehensive Office Cleaning Services</h3>
            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Daily office cleaning & maintenance',
                  'Desk sanitization & workspace cleaning',
                  'Kitchen & breakroom deep cleaning',
                  'Restroom maintenance & sanitization',
                  'Floor cleaning & carpet vacuuming',
                  'Window & glass surface cleaning',
                  'Conference room cleaning',
                  'Reception area maintenance',
                  'Waste removal & recycling',
                  'Equipment cleaning & sanitization',
                  'After-hours cleaning services',
                  'Emergency cleaning response'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blueprimary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">How to Find the Right Office Cleaning Company Near You</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Check Local Reputation & Reviews</h4>
                <p className="text-gray-700 mb-4">
                  Research local office cleaning companies through online reviews, testimonials, and community recommendations. Look for companies with strong local presence, positive client feedback, and established reputation in your specific area of Sydney NSW.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Verify Insurance & Certifications</h4>
                <p className="text-gray-700 mb-4">
                  Ensure your chosen office cleaning company carries comprehensive insurance, worker's compensation, and relevant certifications. Professional local companies maintain proper credentials and comply with Australian workplace safety standards.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Evaluate Response Times & Availability</h4>
                <p className="text-gray-700 mb-4">
                  Choose office cleaning companies that can provide fast response times and flexible scheduling. Local companies should offer emergency cleaning services and accommodate your specific business hours and requirements.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Compare Services & Pricing</h4>
                <p className="text-gray-700 mb-4">
                  Request detailed quotes from local office cleaning companies, comparing services included, pricing structures, and contract terms. Look for transparent pricing without hidden travel surcharges or additional fees.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Local Office Cleaning Areas We Cover</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides local office cleaning services throughout Sydney NSW's major business districts and commercial areas:
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'Circular Quay', 'The Rocks', 'Barangaroo',
                'North Sydney', 'Crows Nest', 'St Leonards', 'Artarmon',
                'Parramatta', 'Westmead', 'Harris Park', 'Granville',
                'Chatswood', 'Lane Cove', 'Willoughby', 'Macquarie Park',
                'Bondi Junction', 'Woollahra', 'Paddington', 'Surry Hills',
                'Liverpool', 'Casula', 'Green Valley', 'Prestons',
                'Blacktown', 'Mount Druitt', 'Seven Hills', 'Eastern Creek',
                'Penrith', 'Kingswood', 'St Marys', 'Emu Plains'
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
                  question: 'How do I find the best office cleaning company near me?',
                  answer: 'Search for local office cleaning companies with strong community reputation, positive reviews, proper insurance, and fast response times. Pro Clean Corp operates throughout Sydney NSW with local teams providing personalized service, competitive rates, and reliable office cleaning solutions tailored to your specific area and business needs.'
                },
                {
                  question: 'What are the benefits of using a local office cleaning company?',
                  answer: 'Local office cleaning companies offer faster response times, lower costs without travel surcharges, personalized service from teams familiar with your area, community accountability, flexible scheduling, and the ability to quickly respond to emergency cleaning needs or schedule changes throughout Sydney NSW.'
                },
                {
                  question: 'How quickly can a local office cleaning company respond to my needs?',
                  answer: 'Pro Clean Corp provides 15-40 minute response times depending on your location within Sydney NSW. Our strategically located teams ensure fast emergency response, same-day service availability, and flexible scheduling to accommodate urgent cleaning requirements and last-minute requests.'
                },
                {
                  question: 'Do local office cleaning companies charge extra travel fees?',
                  answer: 'Reputable local office cleaning companies typically do not charge travel surcharges when servicing their immediate area. Pro Clean Corp provides transparent pricing without hidden travel fees for all locations within our service areas throughout Sydney NSW, ensuring cost-effective office cleaning solutions.'
                },
                {
                  question: 'What should I look for when choosing an office cleaning company near me?',
                  answer: 'Look for local companies with proper insurance, positive community reputation, fast response times, transparent pricing, flexible scheduling, and comprehensive service offerings. Verify certifications, read local reviews, check references, and ensure the company understands your specific business and area requirements.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-greenprimary via-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Find Your Local Office Cleaning Company</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for professional office cleaning services near you. Local teams, fast response, competitive rates guaranteed.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Immediate Service
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}