import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Brookvale NSW | Professional Business Cleaning Services',
  description: 'Top-rated commercial cleaning services in Brookvale NSW. Professional business cleaning for offices, retail, warehouses & commercial facilities. Expert teams, competitive rates.',
  keywords: 'commercial cleaning Brookvale, commercial cleaners Brookvale, business cleaning Brookvale, professional office cleaning Brookvale, office cleaning services Brookvale, corporate cleaning Brookvale, strata cleaning Brookvale, industrial cleaning Brookvale, warehouse cleaning Brookvale, retail cleaning services Brookvale, medical centre cleaning Brookvale, childcare centre cleaning Brookvale, gym cleaning Brookvale, school cleaning Brookvale, church cleaning Brookvale, professional strata cleaners Brookvale, commercial cleaning companies Brookvale, office cleaning company Brookvale, janitorial services Brookvale, commercial building cleaning Brookvale',
  openGraph: {
    title: 'Commercial Cleaning Brookvale NSW | Professional Business Cleaning Services',
    description: 'Top-rated commercial cleaning services in Brookvale NSW. Professional business cleaning for offices, retail, warehouses & commercial facilities. Expert teams, competitive rates.',
    url: '/commercial-cleaning-brookvale',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Brookvale NSW' }]
  },
  alternates: { canonical: '/commercial-cleaning-brookvale' }
};

export default function CommercialCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Cleaning Brookvale NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Top-rated commercial cleaning services for all business types across Brookvale NSW. Professional cleaning solutions for offices, retail stores, warehouses, and commercial facilities with expert teams and competitive rates.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial cleaning Brookvale NSW - Professional business cleaning services"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Commercial Cleaning Services in Brookvale NSW</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp delivers comprehensive commercial cleaning services throughout Brookvale NSW, providing professional cleaning solutions for businesses of all sizes and industries. Our commercial cleaning specialists understand that maintaining clean, healthy, and professionally presented commercial spaces is essential for business success, employee productivity, and customer satisfaction across Brookvale's diverse commercial landscape.
                </p>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Commercial cleaning encompasses a wide range of specialized services designed to meet the unique requirements of different business environments. From corporate offices and retail stores to warehouses and industrial facilities, our experienced commercial cleaning teams provide tailored solutions that address specific cleaning challenges while maintaining the highest standards of hygiene, safety, and professional presentation throughout Brookvale NSW.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Comprehensive Commercial Cleaning Solutions</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Our commercial cleaning services extend beyond basic maintenance to provide comprehensive facility management that supports business operations, enhances workplace environments, and creates positive impressions for employees, customers, and visitors. We deliver consistent, reliable commercial cleaning that meets industry standards and exceeds client expectations throughout Brookvale NSW's competitive business environment.
                </p>
              </div>
              
              <div>
                <Image
                  src="/images/services/office.webp"
                  alt="Professional commercial cleaning team Brookvale NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
                <div className="bg-blueprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Commercial Services</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Office building cleaning</li>
                    <li>• Retail store maintenance</li>
                    <li>• Warehouse cleaning services</li>
                    <li>• Industrial facility cleaning</li>
                    <li>• Emergency cleaning response</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Commercial Cleaning Process</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Facility Assessment & Planning</h4>
                <p className="text-gray-700 mb-4">
                  Our commercial cleaning specialists conduct comprehensive facility assessments, evaluating business type, cleaning requirements, traffic patterns, and operational schedules. We develop customized commercial cleaning plans that address specific facility needs while minimizing disruption to business operations and ensuring optimal cleaning effectiveness.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Industry-Specific Cleaning Protocols</h4>
                <p className="text-gray-700 mb-4">
                  We implement specialized cleaning protocols tailored to different commercial environments including offices, retail stores, warehouses, medical facilities, restaurants, and industrial spaces. Our industry-specific approach ensures appropriate cleaning methods, products, and safety procedures for each type of commercial facility.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Professional Cleaning Execution</h4>
                <p className="text-gray-700 mb-4">
                  Using commercial-grade equipment and professional cleaning products, our trained teams execute comprehensive cleaning services including floor maintenance, restroom sanitization, window cleaning, carpet care, and specialized facility cleaning. We maintain consistent quality standards across all commercial cleaning projects.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Quality Assurance & Reporting</h4>
                <p className="text-gray-700 mb-4">
                  We provide detailed quality assurance through regular inspections, client feedback systems, and comprehensive reporting. Our quality management ensures consistent commercial cleaning standards while addressing any concerns promptly and maintaining long-term client satisfaction.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Office building cleaning',
                  'Retail store cleaning', 
                  'Warehouse cleaning',
                  'Restaurant cleaning',
                  'Medical facility cleaning',
                  'Industrial cleaning',
                  'Gym cleaning services',
                  'School cleaning',
                  'Strata building cleaning',
                  'Emergency cleaning',
                  'Window cleaning',
                  'Carpet cleaning services'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blueprimary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Benefits of Professional Commercial Cleaning</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                src="/images/services/warehouse.webp"
                alt="Clean commercial facility Brookvale NSW"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Enhanced Business Image</h4>
                    <p className="text-gray-700">Professional commercial cleaning maintains superior facility presentation that enhances business reputation and creates positive impressions.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Improved Employee Productivity</h4>
                    <p className="text-gray-700">Clean, healthy work environments support employee wellbeing, reduce sick days, and enhance workplace productivity.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Regulatory Compliance</h4>
                    <p className="text-gray-700">Professional commercial cleaning ensures compliance with health and safety regulations and industry standards.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Cost-Effective Solutions</h4>
                    <p className="text-gray-700">Regular commercial cleaning prevents costly facility maintenance issues and extends equipment and furnishing lifespan.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Commercial Areas We Service</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides commercial cleaning services throughout Brookvale NSW and surrounding areas. Our commercial cleaning teams service businesses in:
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'Circular Quay', 'Martin Place', 'George Street',
                'North Sydney', 'St Leonards', 'Crows Nest', 'Milsons Point',
                'Parramatta', 'Westmead', 'Olympic Park', 'Homebush',
                'Chatswood', 'Artarmon', 'Lane Cove', 'Willoughby',
                'Bondi Junction', 'Double Bay', 'Surry Hills', 'Redfern',
                'Macquarie Park', 'North Ryde', 'Marsfield', 'Epping',
                'Alexandria', 'Mascot', 'Botany', 'Banksmeadow',
                'Liverpool', 'Bankstown', 'Auburn', 'Granville'
              ].map((location, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">{location}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions about Commercial Cleaning in Brookvale</h3>
            <div className="space-y-6 mb-12">
              {[
                {
                  question: 'What types of commercial properties do you clean in Brookvale NSW?',
                  answer: 'We provide comprehensive commercial cleaning services for a wide range of properties in Brookvale, including corporate offices, retail showrooms, warehouses, industrial facilities, strata buildings, medical centres, gyms, schools, and childcare centres. Our team is equipped to handle the specific cleaning requirements of any business environment in the Brookvale area.'
                },
                {
                  question: 'How much does commercial cleaning cost in Brookvale?',
                  answer: 'Commercial cleaning rates in Brookvale vary depending on the size of your facility, the frequency of service, and your specific cleaning needs. Typically, our rates range from $35 to $60 per hour. We offer free, no-obligation quotes and can customize a cleaning package to suit your budget and requirements.'
                },
                {
                  question: 'Do you offer after-hours office cleaning in Brookvale?',
                  answer: 'Yes, we understand that businesses in Brookvale need to operate without disruption. We offer flexible scheduling, including after-hours, early mornings, and weekends, to ensure your workplace is cleaned at a time that minimizes impact on your daily operations.'
                },
                {
                  question: 'Are your Brookvale commercial cleaners insured and background checked?',
                  answer: 'Absolutely. All our commercial cleaning staff servicing Brookvale are fully insured with public liability coverage, have undergone strict police background checks, and are rigorously trained in WHS and industry-standard cleaning protocols. You can trust our team to be professional, reliable, and secure.'
                },
                {
                  question: 'Can you provide strata and body corporate cleaning in Brookvale?',
                  answer: 'Yes, we specialize in strata and body corporate cleaning for residential and commercial complexes in Brookvale. Our services include common area maintenance, foyer cleaning, lift sanitization, bin management, and garden maintenance, ensuring your property is always well-presented for residents and visitors.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Professional Commercial Cleaning Brookvale NSW</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for reliable commercial cleaning services. Expert teams, competitive rates, flexible scheduling for all business types.
              </p>
              <div className="text-2xl font-bold text-greenprimary">
                Call 1300 494 983 for Your Commercial Cleaning Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
