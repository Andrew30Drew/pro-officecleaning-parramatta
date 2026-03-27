import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Commercial Cleaning Sydney NSW | Expert Business Cleaning Services',
  description: 'Expert professional commercial cleaning services in Sydney NSW. Advanced cleaning techniques, certified technicians, and superior service standards for all commercial properties.',
  keywords: 'professional commercial cleaning Sydney, expert business cleaning NSW, professional cleaning services, commercial cleaning experts, advanced cleaning techniques',
  openGraph: {
    title: 'Professional Commercial Cleaning Sydney NSW | Expert Business Cleaning Services',
    description: 'Expert professional commercial cleaning services in Sydney NSW. Advanced cleaning techniques, certified technicians, and superior service standards for all commercial properties.',
    url: '/professional-commercial-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Professional commercial cleaning Sydney NSW' }]
  },
  alternates: { canonical: '/professional-commercial-cleaning-sydney' }
};

export default function ProfessionalCommercialCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blueprimary via-greenprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional Commercial Cleaning Sydney NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Expert commercial cleaning services with advanced techniques, certified technicians, and superior service standards. Setting the industry benchmark for professional cleaning excellence across Sydney NSW's commercial sector.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Professional commercial cleaning Sydney NSW - Expert business cleaning services"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Expert Professional Commercial Cleaning Services in Sydney NSW</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp represents the pinnacle of professional commercial cleaning services throughout Sydney NSW, delivering expert cleaning solutions that exceed industry standards and client expectations. Our professional cleaning specialists combine advanced techniques, certified expertise, and superior service delivery to provide commercial cleaning services that define excellence in the cleaning industry across Sydney's diverse business landscape.
                </p>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Professional commercial cleaning demands expertise, precision, and unwavering commitment to quality that distinguishes superior service providers from basic cleaning companies. Our comprehensive professional approach encompasses advanced cleaning methodologies, cutting-edge equipment, certified staff training, and rigorous quality assurance systems that ensure every commercial cleaning project meets the highest professional standards expected by discerning Sydney NSW businesses.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Professional Excellence & Industry Leadership</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Professional commercial cleaning excellence requires continuous investment in staff development, equipment advancement, technique refinement, and service innovation that keeps pace with evolving industry standards and client expectations. Our professional cleaning services represent years of expertise, industry knowledge, and commitment to maintaining the highest professional standards that set new benchmarks for commercial cleaning excellence throughout Sydney NSW.
                </p>
              </div>
              
              <div>
                <Image
                  src="/images/services/office.webp"
                  alt="Professional commercial cleaning team Sydney NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
                <div className="bg-blueprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Professional Standards</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Certified cleaning technicians</li>
                    <li>• Advanced equipment & techniques</li>
                    <li>• Quality assurance systems</li>
                    <li>• Industry-leading standards</li>
                    <li>• Professional service delivery</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Professional Commercial Cleaning Process</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Professional Assessment & Planning</h4>
                <p className="text-gray-700 mb-4">
                  Our certified cleaning professionals conduct comprehensive facility assessments using advanced evaluation techniques, identifying specific cleaning requirements, potential challenges, and optimal cleaning strategies. Professional planning ensures efficient service delivery, resource allocation, and customized cleaning solutions that address unique commercial facility needs with expert precision.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Advanced Cleaning Methodology</h4>
                <p className="text-gray-700 mb-4">
                  We implement cutting-edge cleaning methodologies using professional-grade equipment, eco-friendly cleaning solutions, and scientifically-proven techniques that maximize cleaning effectiveness while minimizing environmental impact. Our advanced approach ensures superior cleaning results that exceed traditional cleaning methods through professional expertise and innovative cleaning technologies.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Quality Assurance & Certification</h4>
                <p className="text-gray-700 mb-4">
                  Professional quality assurance involves multi-level inspection systems, performance monitoring, and certification processes that ensure consistent service excellence. Our quality assurance specialists conduct detailed evaluations, documentation, and continuous improvement initiatives that maintain professional standards and exceed client expectations for commercial cleaning quality.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Professional Service Delivery</h4>
                <p className="text-gray-700 mb-4">
                  We provide professional service delivery through expert project management, clear communication, detailed reporting, and responsive client support. Professional service delivery encompasses punctual scheduling, comprehensive cleaning execution, thorough quality verification, and ongoing client relationship management that defines superior commercial cleaning service.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Professional Commercial Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Expert office cleaning',
                  'Professional retail cleaning', 
                  'Advanced industrial cleaning',
                  'Healthcare facility cleaning',
                  'Educational facility cleaning',
                  'Hospitality cleaning services',
                  'Professional carpet cleaning',
                  'Window cleaning specialists',
                  'Floor maintenance experts',
                  'Sanitization specialists',
                  'Emergency cleaning response',
                  'Specialized cleaning projects'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blueprimary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Professional Service Certifications & Standards</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white border-2 border-blueprimary rounded-2xl">
                <div className="w-16 h-16 bg-blueprimary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  ISO
                </div>
                <h4 className="font-bold text-darkblue mb-2">ISO Certification</h4>
                <p className="text-gray-600">International quality management standards compliance</p>
              </div>
              <div className="text-center p-6 bg-white border-2 border-greenprimary rounded-2xl">
                <div className="w-16 h-16 bg-greenprimary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  CERT
                </div>
                <h4 className="font-bold text-darkblue mb-2">Professional Training</h4>
                <p className="text-gray-600">Certified cleaning technician programs</p>
              </div>
              <div className="text-center p-6 bg-white border-2 border-blueprimary rounded-2xl">
                <div className="w-16 h-16 bg-blueprimary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  QA
                </div>
                <h4 className="font-bold text-darkblue mb-2">Quality Assurance</h4>
                <p className="text-gray-600">Rigorous quality control systems</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Benefits of Professional Commercial Cleaning</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/hero_img1.jpg"
                  alt="Professional commercial cleaning results Sydney NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Superior Cleaning Results</h4>
                    <p className="text-gray-700">Professional expertise and advanced techniques deliver superior cleaning results that exceed standard cleaning service expectations.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Certified Expertise</h4>
                    <p className="text-gray-700">Certified cleaning professionals with ongoing training ensure expert service delivery and industry-leading cleaning standards.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Advanced Equipment</h4>
                    <p className="text-gray-700">Professional-grade equipment and cutting-edge cleaning technologies maximize efficiency and effectiveness.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Quality Guarantee</h4>
                    <p className="text-gray-700">Professional service guarantees backed by comprehensive quality assurance systems and client satisfaction commitments.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Commercial Areas We Service Professionally</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides professional commercial cleaning services throughout Sydney NSW's premier commercial districts and business centers. Our expert cleaning teams service commercial facilities in:
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'Martin Place', 'Circular Quay', 'George Street',
                'North Sydney', 'St Leonards', 'Milsons Point', 'Crows Nest',
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
                  question: 'What makes professional commercial cleaning different from standard cleaning services?',
                  answer: 'Professional commercial cleaning involves certified technicians, advanced equipment, specialized techniques, rigorous quality assurance, and superior service standards. Professional services include comprehensive staff training, industry certifications, premium cleaning products, detailed quality inspections, and performance guarantees that distinguish professional cleaning from basic commercial cleaning services throughout Sydney NSW.'
                },
                {
                  question: 'What certifications and training do your professional cleaning staff have?',
                  answer: 'Our professional cleaning staff hold industry certifications including commercial cleaning qualifications, safety certifications, specialized equipment training, and ongoing professional development programs. All technicians complete comprehensive training in advanced cleaning techniques, safety protocols, customer service standards, and quality assurance procedures to maintain professional service excellence.'
                },
                {
                  question: 'How do you ensure consistent professional quality across all cleaning projects?',
                  answer: 'We maintain professional quality through standardized procedures, detailed quality checklists, regular inspections, performance monitoring, and continuous staff training. Our quality assurance system includes pre-service planning, in-service monitoring, post-service evaluation, and client feedback integration to ensure consistent professional standards across all commercial cleaning projects in Sydney NSW.'
                },
                {
                  question: 'What advanced equipment and techniques do you use for professional cleaning?',
                  answer: 'Our professional cleaning arsenal includes truck-mounted extraction systems, HEPA filtration equipment, microfiber cleaning systems, electrostatic spraying technology, and eco-friendly professional cleaning products. We employ advanced techniques such as color-coded cleaning systems, zone-based cleaning protocols, and scientific cleaning methodologies that maximize effectiveness while maintaining environmental responsibility.'
                },
                {
                  question: 'Do you provide professional cleaning for specialized commercial environments?',
                  answer: 'Yes, we provide professional cleaning for specialized environments including healthcare facilities, educational institutions, food service establishments, manufacturing facilities, and high-security commercial properties. Each specialized environment requires specific protocols, equipment, and certifications. Our professional teams are trained and equipped to handle diverse commercial cleaning requirements throughout Sydney NSW.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blueprimary via-greenprimary to-darkblue rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Expert Professional Commercial Cleaning Sydney NSW</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for professional commercial cleaning services. Certified expertise, advanced techniques, superior results guaranteed.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Your Professional Cleaning Consultation
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}