import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Office Cleaning Sydney NSW | Expert Workplace Cleaning Services',
  description: 'Expert professional office cleaning services in Sydney NSW. Advanced workplace cleaning techniques, certified professionals, and superior standards for corporate offices.',
  keywords: 'professional office cleaning Sydney, expert workplace cleaning NSW, professional office services, corporate cleaning Sydney, professional cleaning standards',
  openGraph: {
    title: 'Professional Office Cleaning Sydney NSW | Expert Workplace Cleaning Services',
    description: 'Expert professional office cleaning services in Sydney NSW. Advanced workplace cleaning techniques, certified professionals, and superior standards for corporate offices.',
    url: '/professional-office-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Professional office cleaning Sydney NSW' }]
  },
  alternates: { canonical: '/professional-office-cleaning-sydney' }
};

export default function ProfessionalOfficeCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-darkblue to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional Office Cleaning Sydney NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Expert workplace cleaning services that set the standard for professional excellence. Advanced techniques, certified professionals, and superior standards for Sydney's leading corporate offices and business environments.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Professional office cleaning Sydney NSW - Expert workplace cleaning services"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Expert Professional Office Cleaning Services in Sydney NSW</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp delivers exceptional professional office cleaning services throughout Sydney NSW, setting the industry standard for workplace cleaning excellence through expert techniques, certified professionals, and unwavering commitment to superior service quality. Our professional office cleaning specialists understand that corporate environments require cleaning services that reflect the professionalism, attention to detail, and high standards that define successful businesses.
                </p>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Professional office cleaning encompasses more than basic maintenance—it represents a commitment to workplace excellence that supports business success, employee wellbeing, and client impressions. Our comprehensive professional approach combines advanced cleaning methodologies, professional-grade equipment, expert staff training, and rigorous quality assurance systems that ensure every office cleaning project exceeds expectations and maintains the professional standards essential for Sydney NSW business success.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Professional Office Cleaning Excellence</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Professional office cleaning excellence requires continuous dedication to skill development, equipment advancement, technique refinement, and service innovation that keeps pace with evolving workplace standards and client expectations. Our professional cleaning services represent years of expertise, industry knowledge, and commitment to maintaining the highest professional standards that distinguish superior office cleaning from basic maintenance services throughout Sydney NSW's corporate landscape.
                </p>
              </div>
              
              <div>
                <Image
                  src="/images/services/commercial.webp"
                  alt="Professional office cleaning team Sydney NSW workplace"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
                <div className="bg-darkblue/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Professional Excellence</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Certified cleaning professionals</li>
                    <li>• Advanced workplace techniques</li>
                    <li>• Superior quality standards</li>
                    <li>• Expert service delivery</li>
                    <li>• Professional presentation focus</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Professional Office Cleaning Process</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Expert Assessment & Strategy</h4>
                <p className="text-gray-700 mb-4">
                  Our professional office cleaning specialists conduct comprehensive workplace assessments using expert evaluation techniques, identifying specific cleaning requirements, workplace challenges, and optimal cleaning strategies. Professional assessment ensures efficient service delivery, resource optimization, and customized cleaning solutions that address unique office environments with expert precision and attention to detail.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Advanced Professional Techniques</h4>
                <p className="text-gray-700 mb-4">
                  We implement cutting-edge professional cleaning techniques using advanced equipment, specialized cleaning solutions, and scientifically-proven methodologies that maximize cleaning effectiveness while maintaining workplace safety. Our professional approach ensures superior cleaning results that exceed traditional office cleaning methods through expert knowledge and innovative workplace cleaning technologies.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Professional Quality Assurance</h4>
                <p className="text-gray-700 mb-4">
                  Professional quality assurance involves comprehensive inspection systems, performance monitoring, and certification processes that ensure consistent service excellence across all office cleaning projects. Our quality assurance specialists conduct detailed evaluations, documentation, and continuous improvement initiatives that maintain professional standards and exceed client expectations for office cleaning quality.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Expert Service Management</h4>
                <p className="text-gray-700 mb-4">
                  We provide expert service management through professional project coordination, clear communication, detailed reporting, and responsive client support. Expert service management encompasses punctual scheduling, comprehensive cleaning execution, thorough quality verification, and ongoing client relationship management that defines superior professional office cleaning service delivery.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Professional Office Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Executive office cleaning',
                  'Corporate workspace maintenance', 
                  'Professional reception cleaning',
                  'Boardroom cleaning services',
                  'Conference room maintenance',
                  'Professional kitchen cleaning',
                  'Expert restroom sanitization',
                  'Professional floor care',
                  'Window cleaning specialists',
                  'Carpet cleaning experts',
                  'Professional equipment cleaning',
                  'Workplace sanitization services'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-darkblue rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Professional Service Standards & Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-white border-2 border-darkblue rounded-2xl">
                <div className="w-12 h-12 bg-darkblue rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <h4 className="font-bold text-darkblue mb-2">Certified Staff</h4>
                <p className="text-sm text-gray-600">Professional cleaning certifications</p>
              </div>
              <div className="text-center p-6 bg-white border-2 border-greenprimary rounded-2xl">
                <div className="w-12 h-12 bg-greenprimary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  ⭐
                </div>
                <h4 className="font-bold text-darkblue mb-2">Quality Standards</h4>
                <p className="text-sm text-gray-600">Superior service excellence</p>
              </div>
              <div className="text-center p-6 bg-white border-2 border-darkblue rounded-2xl">
                <div className="w-12 h-12 bg-darkblue rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  🛡️
                </div>
                <h4 className="font-bold text-darkblue mb-2">Fully Insured</h4>
                <p className="text-sm text-gray-600">Comprehensive coverage</p>
              </div>
              <div className="text-center p-6 bg-white border-2 border-greenprimary rounded-2xl">
                <div className="w-12 h-12 bg-greenprimary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  🏆
                </div>
                <h4 className="font-bold text-darkblue mb-2">Award Winning</h4>
                <p className="text-sm text-gray-600">Industry recognition</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Benefits of Professional Office Cleaning Services</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/hero_img3.jpg"
                  alt="Professional office cleaning results Sydney NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-darkblue pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Superior Professional Results</h4>
                    <p className="text-gray-700">Professional expertise and advanced techniques deliver superior office cleaning results that reflect your business excellence and attention to detail.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Certified Expertise</h4>
                    <p className="text-gray-700">Certified professional cleaning staff with ongoing training ensure expert service delivery and industry-leading office cleaning standards.</p>
                  </div>
                  <div className="border-l-4 border-darkblue pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Professional Equipment</h4>
                    <p className="text-gray-700">Professional-grade equipment and advanced cleaning technologies maximize office cleaning efficiency and effectiveness.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Service Guarantee</h4>
                    <p className="text-gray-700">Professional service guarantees backed by comprehensive quality assurance and client satisfaction commitments.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Office Areas We Service Professionally</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides professional office cleaning services throughout Sydney NSW's premier business districts and corporate centers. Our expert office cleaning teams service professional workplaces in:
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'Martin Place', 'George Street', 'Circular Quay',
                'North Sydney', 'St Leonards', 'Crows Nest', 'Milsons Point',
                'Parramatta', 'Westmead', 'Olympic Park', 'Harris Park',
                'Chatswood', 'Artarmon', 'Lane Cove', 'Willoughby',
                'Bondi Junction', 'Double Bay', 'Surry Hills', 'Redfern',
                'Macquarie Park', 'North Ryde', 'Marsfield', 'Epping',
                'Pyrmont', 'Ultimo', 'Alexandria', 'Mascot',
                'Liverpool', 'Bankstown', 'Auburn', 'Granville'
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
                  question: 'What distinguishes professional office cleaning from regular cleaning services in Sydney NSW?',
                  answer: 'Professional office cleaning involves certified technicians, advanced equipment, specialized workplace techniques, rigorous quality assurance, and superior service standards. Professional services include comprehensive staff training, industry certifications, premium cleaning products, detailed quality inspections, and performance guarantees that distinguish professional office cleaning from basic workplace maintenance services throughout Sydney NSW business environments.'
                },
                {
                  question: 'What professional certifications and training do your office cleaning staff possess?',
                  answer: 'Our professional office cleaning staff hold industry certifications including workplace cleaning qualifications, safety certifications, specialized equipment training, and ongoing professional development programs. All technicians complete comprehensive training in advanced office cleaning techniques, workplace safety protocols, customer service standards, and quality assurance procedures to maintain professional service excellence in Sydney NSW office environments.'
                },
                {
                  question: 'How do you maintain consistent professional quality across all office cleaning projects?',
                  answer: 'We maintain professional quality through standardized procedures, detailed quality checklists, regular inspections, performance monitoring, and continuous staff training. Our quality assurance system includes pre-service planning, in-service monitoring, post-service evaluation, and client feedback integration to ensure consistent professional standards across all office cleaning projects throughout Sydney NSW.'
                },
                {
                  question: 'What advanced equipment and techniques do you use for professional office cleaning?',
                  answer: 'Our professional office cleaning equipment includes truck-mounted extraction systems, HEPA filtration technology, microfiber cleaning systems, electrostatic spraying equipment, and eco-friendly professional cleaning products. We employ advanced techniques such as color-coded cleaning systems, zone-based cleaning protocols, and scientific cleaning methodologies that maximize office cleaning effectiveness while maintaining workplace safety.'
                },
                {
                  question: 'Do you provide professional cleaning for specialized office environments and corporate facilities?',
                  answer: 'Yes, we provide professional cleaning for specialized office environments including executive suites, corporate headquarters, legal firms, financial institutions, medical offices, and high-security corporate facilities. Each specialized environment requires specific protocols, equipment, and certifications. Our professional teams are trained and equipped to handle diverse office cleaning requirements while maintaining confidentiality and security throughout Sydney NSW.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-darkblue to-blueprimary rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Expert Professional Office Cleaning Sydney NSW</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for professional office cleaning services. Certified expertise, advanced techniques, superior workplace standards guaranteed.
              </p>
              <div className="text-2xl font-bold text-greenprimary">
                Call 1300 494 983 for Your Professional Office Cleaning Consultation
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}