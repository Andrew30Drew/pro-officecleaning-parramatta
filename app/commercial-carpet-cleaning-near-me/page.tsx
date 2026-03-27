import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Carpet Cleaning Near Me | Local Professional Carpet Cleaners Sydney',
  description: 'Professional commercial carpet cleaning services near you in Sydney NSW. Local carpet cleaners with advanced equipment, fast response times, and guaranteed results for businesses.',
  keywords: 'commercial carpet cleaning near me, local carpet cleaners Sydney, business carpet cleaning nearby, professional carpet cleaning services in my area',
  openGraph: {
    title: 'Commercial Carpet Cleaning Near Me | Local Professional Carpet Cleaners Sydney',
    description: 'Professional commercial carpet cleaning services near you in Sydney NSW. Local carpet cleaners with advanced equipment, fast response times, and guaranteed results for businesses.',
    url: '/commercial-carpet-cleaning-near-me',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial carpet cleaning near me' }]
  },
  alternates: { canonical: '/commercial-carpet-cleaning-near-me' }
};

export default function CommercialCarpetCleaningNearMePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blueprimary via-darkblue to-greenprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Carpet Cleaning Near Me
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional commercial carpet cleaning services near you with Pro Clean Corp. Local carpet cleaning specialists throughout Sydney NSW providing deep cleaning, stain removal, and carpet restoration for businesses.
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
                src="/images/services/carpet.jpg"
                alt="Commercial carpet cleaning near me - Professional local services"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
                />
            </div>
          </div>
        </div>
      </section>

      {/* Local Coverage Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">Commercial Carpet Cleaning Services Near You</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Pro Clean Corp operates local commercial carpet cleaning teams throughout Sydney NSW, providing fast response times and specialized service for businesses in your area.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { location: 'Sydney CBD', response: '15 min', businesses: '150+', rating: '4.9★' },
              { location: 'North Sydney', response: '20 min', businesses: '120+', rating: '4.8★' },
              { location: 'Parramatta', response: '25 min', businesses: '180+', rating: '4.9★' },
              { location: 'Chatswood', response: '20 min', businesses: '100+', rating: '4.8★' },
              { location: 'Bondi Junction', response: '18 min', businesses: '90+', rating: '4.9★' },
              { location: 'Liverpool', response: '30 min', businesses: '140+', rating: '4.8★' },
              { location: 'Blacktown', response: '35 min', businesses: '110+', rating: '4.7★' },
              { location: 'Penrith', response: '40 min', businesses: '80+', rating: '4.8★' }
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="font-bold text-darkblue mb-2">{area.location}</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Response: {area.response}</p>
                  <p>Businesses: {area.businesses}</p>
                  <p className="text-greenprimary font-semibold">{area.rating}</p>
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Commercial Carpet Cleaning Near You</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Finding reliable commercial carpet cleaning near you is essential for maintaining professional business environments, extending carpet lifespan, and creating healthy workplaces. Pro Clean Corp provides specialized commercial carpet cleaning services throughout Sydney NSW with local teams equipped with advanced cleaning equipment, eco-friendly products, and expertise in handling various commercial carpet types and challenging cleaning situations.
                </p>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Local commercial carpet cleaning services offer significant advantages including faster response times, competitive pricing without travel surcharges, personalized service from teams familiar with your area, and the ability to accommodate emergency cleaning needs or last-minute scheduling changes. Our strategically positioned teams ensure comprehensive carpet cleaning solutions that meet the demanding requirements of Sydney's diverse business environments.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Advanced Commercial Carpet Cleaning Technology</h3>
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Hot water extraction systems',
                      'Industrial steam cleaning equipment',
                      'Specialized stain removal treatments',
                      'Fast-drying technology',
                      'Eco-friendly cleaning products',
                      'Carpet protection applications',
                      'Odor elimination systems',
                      'Traffic lane restoration'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blueprimary rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <Image
                  src="/images/services/office.webp"
                  alt="Professional commercial carpet cleaning Sydney"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
                <div className="bg-blueprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Local Service Benefits</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ 15-40 minute response times</li>
                    <li>✓ No travel surcharges</li>
                    <li>✓ Local expertise & knowledge</li>
                    <li>✓ Emergency cleaning available</li>
                    <li>✓ Flexible scheduling options</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-darkblue mb-8">Commercial Carpet Cleaning Services</h3>
            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Office carpet deep cleaning',
                  'Retail store carpet maintenance',
                  'Restaurant carpet cleaning',
                  'Hotel & hospitality carpet care',
                  'Medical facility carpet sanitization',
                  'School & education carpet cleaning',
                  'Gym & fitness center carpets',
                  'Stain removal & treatment',
                  'Odor elimination services',
                  'Traffic lane restoration',
                  'Carpet protection application',
                  'Emergency carpet cleaning',
                  'End of lease carpet cleaning',
                  'Post-construction cleanup',
                  'Upholstery cleaning services',
                  'Maintenance cleaning programs'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-darkblue rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Choosing Commercial Carpet Cleaning Services Near You</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Equipment & Technology</h4>
                <p className="text-gray-700 mb-4">
                  Choose commercial carpet cleaning services with professional-grade equipment including truck-mounted systems, industrial extractors, and specialized cleaning tools. Advanced equipment ensures deeper cleaning, faster drying times, and superior results for commercial carpets.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Local Expertise & Response Time</h4>
                <p className="text-gray-700 mb-4">
                  Select local commercial carpet cleaning services with fast response times, area knowledge, and understanding of local business requirements. Pro Clean Corp provides 15-40 minute response times throughout Sydney NSW with teams familiar with diverse commercial environments.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Insurance & Certification</h4>
                <p className="text-gray-700 mb-4">
                  Verify commercial carpet cleaning services carry comprehensive insurance, maintain proper certifications, and comply with Australian workplace safety standards. Professional services protect your business and provide quality assurance.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Pricing & Service Transparency</h4>
                <p className="text-gray-700 mb-4">
                  Compare pricing from local commercial carpet cleaning services, ensuring transparent quotes without hidden fees. Look for services offering competitive rates, flexible scheduling, and comprehensive cleaning solutions tailored to your business needs.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Commercial Areas We Service</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides commercial carpet cleaning services throughout Sydney NSW's business districts and commercial centers:
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'Circular Quay', 'The Rocks', 'Barangaroo',
                'North Sydney', 'Crows Nest', 'St Leonards', 'Artarmon',
                'Parramatta', 'Westmead', 'Olympic Park', 'Granville',
                'Chatswood', 'Lane Cove', 'Willoughby', 'Macquarie Park',
                'Bondi Junction', 'Randwick', 'Kensington', 'Mascot',
                'Liverpool', 'Campbelltown', 'Green Valley', 'Prestons',
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
                  question: 'How do I find commercial carpet cleaning services near me?',
                  answer: 'Search for local commercial carpet cleaning services with strong community reputation, professional equipment, proper insurance, and fast response times. Pro Clean Corp operates throughout Sydney NSW with local teams providing specialized commercial carpet cleaning services, competitive pricing, and guaranteed results for businesses in your area.'
                },
                {
                  question: 'What are the benefits of using local commercial carpet cleaning services?',
                  answer: 'Local commercial carpet cleaning services offer faster response times, competitive pricing without travel surcharges, personalized service from area-familiar teams, emergency availability, flexible scheduling, community accountability, and deep understanding of local business requirements and commercial carpet challenges.'
                },
                {
                  question: 'How quickly can commercial carpet cleaners respond to urgent needs?',
                  answer: 'Pro Clean Corp provides 15-40 minute response times for commercial carpet cleaning throughout Sydney NSW. Our strategically positioned teams ensure fast emergency response, same-day service availability, and flexible scheduling to accommodate urgent business needs and last-minute requirements.'
                },
                {
                  question: 'What commercial carpet cleaning methods do you use?',
                  answer: 'We use professional hot water extraction (steam cleaning), dry cleaning methods, and specialized treatments depending on carpet type and condition. Our truck-mounted equipment provides superior cleaning power, faster drying, and optimal soil removal for all commercial carpet types throughout Sydney NSW business locations.'
                },
                {
                  question: 'Do you provide ongoing maintenance programs for commercial carpets?',
                  answer: 'Yes, we offer customized commercial carpet maintenance programs including regular cleaning schedules, preventive treatments, and ongoing care plans. Our maintenance programs help extend carpet lifespan, maintain professional appearance, and reduce long-term replacement costs for Sydney NSW businesses.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blueprimary via-darkblue to-greenprimary rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Professional Commercial Carpet Cleaning Near You</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for expert commercial carpet cleaning services. Local teams, advanced equipment, guaranteed results.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Commercial Carpet Cleaning
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}