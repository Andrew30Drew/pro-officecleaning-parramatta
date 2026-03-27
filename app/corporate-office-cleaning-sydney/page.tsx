import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Office Cleaning Sydney NSW | Executive Office Cleaning Services',
  description: 'Premium corporate office cleaning services in Sydney NSW. Professional executive office cleaning for corporate headquarters, business centers & high-end commercial properties.',
  keywords: 'corporate office cleaning Sydney, executive office cleaning NSW, corporate cleaning services Sydney, business office cleaning, professional corporate cleaning',
  openGraph: {
    title: 'Corporate Office Cleaning Sydney NSW | Executive Office Cleaning Services',
    description: 'Premium corporate office cleaning services in Sydney NSW. Professional executive office cleaning for corporate headquarters, business centers & high-end commercial properties.',
    url: '/corporate-office-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Corporate office cleaning Sydney NSW' }]
  },
  alternates: { canonical: '/corporate-office-cleaning-sydney' }
};

export default function CorporateOfficeCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-darkblue via-blueprimary to-greenprimary py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Corporate Office Cleaning Sydney NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Elite corporate office cleaning services for Sydney's leading businesses. Premium cleaning standards, executive presentation, and corporate image management for high-end office environments.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Corporate office cleaning Sydney NSW - Executive office cleaning services"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Premium Corporate Office Cleaning Services in Sydney NSW</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp delivers exceptional corporate office cleaning services throughout Sydney NSW, specializing in high-end corporate environments where image, professionalism, and attention to detail are paramount. Our corporate cleaning specialists understand that executive offices, boardrooms, and corporate headquarters require superior cleaning standards that reflect your company's commitment to excellence and success.
                </p>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Corporate offices present unique cleaning challenges including executive presentation requirements, confidential document security, expensive furnishings and technology protection, and maintaining pristine environments that impress clients, stakeholders, and high-level executives. Our comprehensive corporate office cleaning services ensure your business maintains the prestigious, professional image essential for corporate success in Sydney's competitive business landscape.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Corporate Image & Executive Standards</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Corporate office cleaning goes beyond basic maintenance to encompass image management, executive presentation, and brand representation. Our corporate cleaning services maintain the highest standards of cleanliness, organization, and presentation that reflect your company's professional values and commitment to excellence throughout Sydney NSW's corporate community.
                </p>
              </div>
              
              <div>
                <Image
                  src="/images/services/commercial.webp"
                  alt="Premium corporate office cleaning Sydney NSW boardroom"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
                <div className="bg-darkblue/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Corporate Excellence</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Executive presentation standards</li>
                    <li>• Premium service quality</li>
                    <li>• Confidential document security</li>
                    <li>• Corporate image management</li>
                    <li>• After-hours access capability</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Corporate Office Cleaning Process</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Corporate Assessment & Security</h4>
                <p className="text-gray-700 mb-4">
                  Our corporate cleaning specialists conduct comprehensive facility assessments, understanding security protocols, confidentiality requirements, and executive presentation standards. We coordinate with corporate security, facility management, and executive assistants to develop cleaning schedules that protect sensitive information while maintaining superior cleanliness standards.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Executive Area Maintenance</h4>
                <p className="text-gray-700 mb-4">
                  We prioritize executive offices, boardrooms, reception areas, and client meeting spaces where corporate image is critical. Our cleaning protocols focus on maintaining immaculate presentation, protecting expensive furnishings and technology, while ensuring confidential documents and corporate information remain secure throughout the cleaning process.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Premium Cleaning Standards</h4>
                <p className="text-gray-700 mb-4">
                  Using professional-grade equipment and premium cleaning products, we maintain superior cleanliness standards throughout corporate facilities. Our cleaning technicians are trained in handling expensive corporate furnishings, executive equipment, and maintaining the pristine presentation essential for high-level business operations and client impressions.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Quality Assurance & Reporting</h4>
                <p className="text-gray-700 mb-4">
                  We provide detailed cleaning reports, quality inspections, and corporate facility management coordination. Our quality assurance program ensures consistent excellence, addresses executive feedback, and maintains the superior standards expected in Sydney's premier corporate environments.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Corporate Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Executive office cleaning',
                  'Corporate headquarters cleaning', 
                  'Boardroom cleaning & setup',
                  'Executive suite maintenance',
                  'Corporate reception cleaning',
                  'Conference facility cleaning',
                  'Corporate kitchen cleaning',
                  'Executive restroom maintenance',
                  'Corporate lobby cleaning',
                  'Meeting room preparation',
                  'Executive floor cleaning',
                  'Corporate event cleaning'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-darkblue rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Benefits of Corporate Office Cleaning Services</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/hero_img3.jpg"
                  alt="Clean corporate office Sydney NSW executive suite"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-darkblue pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Enhanced Corporate Image</h4>
                    <p className="text-gray-700">Maintain prestigious corporate presentation that reflects your company's success, professionalism, and commitment to excellence.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Executive Productivity</h4>
                    <p className="text-gray-700">Create optimal working environments for executives and senior staff, supporting productivity and professional performance.</p>
                  </div>
                  <div className="border-l-4 border-darkblue pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Client Impression Management</h4>
                    <p className="text-gray-700">Ensure corporate facilities always present an impressive, professional image to clients, stakeholders, and business partners.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Confidentiality & Security</h4>
                    <p className="text-gray-700">Maintain strict security protocols while cleaning, protecting sensitive corporate information and executive privacy.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Corporate Districts We Service</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides corporate office cleaning services throughout Sydney NSW's premier business districts and corporate precincts. Our executive cleaning teams service corporate facilities in:
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'Circular Quay', 'Martin Place', 'George Street',
                'North Sydney', 'Milsons Point', 'Crows Nest', 'St Leonards',
                'Parramatta CBD', 'Westmead', 'Harris Park', 'Rosehill',
                'Chatswood', 'Lane Cove', 'Artarmon', 'Willoughby',
                'Bondi Junction', 'Double Bay', 'Woollahra', 'Paddington',
                'Macquarie Park', 'North Ryde', 'Marsfield', 'Epping',
                'Pyrmont', 'Ultimo', 'Surry Hills', 'Redfern',
                'Barangaroo', 'Darling Harbour', 'The Rocks', 'Observatory Hill'
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
                  question: 'What makes corporate office cleaning different from regular commercial cleaning?',
                  answer: 'Corporate office cleaning requires elevated standards focusing on executive presentation, confidentiality protocols, premium service quality, and corporate image management. We handle expensive furnishings, maintain security clearances, work around executive schedules, and ensure pristine presentation that reflects corporate success and professionalism in Sydney NSW business environments.'
                },
                {
                  question: 'How do you handle confidential documents and corporate security during cleaning?',
                  answer: 'Our corporate cleaning teams follow strict security protocols including background checks, confidentiality agreements, supervised access procedures, and secure document handling. We coordinate with corporate security teams, facility managers, and executive staff to ensure confidential information remains protected while maintaining superior cleaning standards throughout Sydney corporate facilities.'
                },
                {
                  question: 'Can you provide corporate office cleaning outside normal business hours?',
                  answer: 'Yes, Pro Clean Corp specializes in after-hours corporate cleaning throughout Sydney NSW. We provide evening, overnight, weekend, and holiday cleaning services to accommodate executive schedules, confidential operations, and business continuity requirements. Our flexible scheduling ensures corporate facilities are pristine when executives and staff arrive for work.'
                },
                {
                  question: 'What are the costs for corporate office cleaning services in Sydney?',
                  answer: 'Corporate office cleaning costs vary based on facility size, security requirements, service frequency, and executive standards. Our premium rates typically range from $40-$120 per hour for corporate cleaning services, reflecting the superior quality, security measures, and presentation standards required. We provide detailed quotes tailored to your corporate facility and executive requirements.'
                },
                {
                  question: 'Do you provide specialized cleaning for corporate events and meetings?',
                  answer: 'Absolutely. We provide specialized corporate event cleaning including boardroom preparation, conference setup cleaning, executive meeting preparation, corporate function cleaning, and post-event restoration. Our teams can work around corporate schedules, maintain discretion during high-level meetings, and ensure pristine presentation for important corporate functions throughout Sydney NSW.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-darkblue via-blueprimary to-greenprimary rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Premium Corporate Office Cleaning Sydney NSW</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for executive corporate office cleaning services. Premium standards, confidentiality assured, corporate image focused.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Your Corporate Cleaning Consultation
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}