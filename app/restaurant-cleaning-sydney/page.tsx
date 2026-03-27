import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Cleaning Sydney NSW | Professional Kitchen & Dining Cleaning',
  description: 'Expert restaurant cleaning services in Sydney NSW. Professional kitchen cleaning, dining area maintenance, food safety compliance for restaurants, cafes & food service businesses.',
  keywords: 'restaurant cleaning Sydney, kitchen cleaning NSW, commercial kitchen cleaning, food service cleaning, restaurant maintenance Sydney',
  openGraph: {
    title: 'Restaurant Cleaning Sydney NSW | Professional Kitchen & Dining Cleaning',
    description: 'Expert restaurant cleaning services in Sydney NSW. Professional kitchen cleaning, dining area maintenance, food safety compliance for restaurants, cafes & food service businesses.',
    url: '/restaurant-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Restaurant cleaning Sydney NSW' }]
  },
  alternates: { canonical: '/restaurant-cleaning-sydney' }
};

export default function RestaurantCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blueprimary via-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Restaurant Cleaning Sydney NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional restaurant and kitchen cleaning services ensuring food safety compliance and pristine dining environments. Expert cleaning for restaurants, cafes, and food service businesses across Sydney NSW.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Restaurant cleaning Sydney NSW - Professional kitchen cleaning services"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Restaurant Cleaning Services in Sydney NSW</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp provides specialized restaurant cleaning services throughout Sydney NSW, ensuring food safety compliance, hygiene standards, and pristine dining environments for restaurants, cafes, pubs, clubs, and food service establishments. Our restaurant cleaning specialists understand the critical importance of maintaining spotless kitchens, dining areas, and food preparation spaces that meet Australian food safety regulations and create positive dining experiences.
                </p>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Restaurant cleaning requires specialized knowledge of food safety protocols, commercial kitchen equipment, grease management, and health department regulations that are essential for successful food service operations. Our experienced restaurant cleaning teams provide comprehensive cleaning solutions including kitchen deep cleaning, dining area maintenance, equipment sanitization, and compliance with NSW Food Authority standards and HACCP requirements.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Food Safety & Compliance Focus</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Professional restaurant cleaning is essential for maintaining food safety standards, preventing cross-contamination, and ensuring compliance with health department regulations. Our cleaning services support restaurant operations by maintaining hygienic food preparation environments, reducing health inspection risks, and creating clean, welcoming dining spaces that enhance customer satisfaction and business reputation throughout Sydney NSW.
                </p>
              </div>
              
              <div>
                <Image
                  src="/images/services/commercial.webp"
                  alt="Professional restaurant kitchen cleaning Sydney NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
                <div className="bg-blueprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Restaurant Services</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>" Commercial kitchen deep cleaning</li>
                    <li>" Dining area maintenance</li>
                    <li>" Equipment sanitization</li>
                    <li>" Food safety compliance</li>
                    <li>" Grease management systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Restaurant Cleaning Process</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Food Safety Assessment</h4>
                <p className="text-gray-700 mb-4">
                  Our restaurant cleaning specialists conduct comprehensive food safety assessments, identifying high-risk areas, cross-contamination points, and compliance requirements. We develop customized cleaning protocols that address kitchen equipment, food preparation areas, storage spaces, and dining areas while ensuring adherence to Australian food safety standards.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Kitchen Deep Cleaning</h4>
                <p className="text-gray-700 mb-4">
                  We perform intensive commercial kitchen cleaning including equipment degreasing, exhaust system cleaning, floor sanitization, and surface decontamination. Our kitchen cleaning addresses grease buildup, food residue, and bacterial contamination using specialized equipment and food-safe cleaning products designed for commercial food service environments.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Dining Area Maintenance</h4>
                <p className="text-gray-700 mb-4">
                  Our comprehensive dining area cleaning includes floor cleaning, table sanitization, chair and booth maintenance, window cleaning, and restroom deep cleaning. We focus on creating welcoming, hygienic dining environments that enhance customer experience and support positive restaurant reputation and customer retention.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Compliance Documentation</h4>
                <p className="text-gray-700 mb-4">
                  We provide detailed cleaning documentation, compliance checklists, and health inspection preparation support. Our documentation system helps restaurant owners maintain records required for health department inspections and demonstrates ongoing commitment to food safety and hygiene standards.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Restaurant Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Commercial kitchen deep cleaning',
                  'Equipment degreasing & sanitization', 
                  'Exhaust system cleaning',
                  'Floor cleaning & sanitization',
                  'Dining area maintenance',
                  'Bar area cleaning',
                  'Restroom deep cleaning',
                  'Storage area cleaning',
                  'Grease trap maintenance',
                  'Food preparation area cleaning',
                  'Window & glass cleaning',
                  'Emergency spill response'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blueprimary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Benefits of Professional Restaurant Cleaning</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/services/office.webp"
                  alt="Clean restaurant dining area Sydney NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Food Safety Compliance</h4>
                    <p className="text-gray-700">Professional restaurant cleaning ensures compliance with NSW Food Authority standards and reduces health inspection risks.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Enhanced Customer Experience</h4>
                    <p className="text-gray-700">Clean, hygienic dining environments create positive customer impressions and encourage repeat business and positive reviews.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Equipment Protection</h4>
                    <p className="text-gray-700">Regular professional cleaning extends commercial kitchen equipment lifespan and reduces maintenance costs.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Staff Health & Safety</h4>
                    <p className="text-gray-700">Professional cleaning creates safer working environments and reduces workplace health risks for restaurant staff.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Restaurant Areas We Service</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides restaurant cleaning services throughout Sydney NSW's dining precincts and hospitality districts. Our specialized teams service restaurants and food establishments in:
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'Circular Quay', 'The Rocks', 'Darling Harbour',
                'Surry Hills', 'Paddington', 'Potts Point', 'Kings Cross',
                'Newtown', 'Enmore', 'Marrickville', 'Leichhardt',
                'Bondi Beach', 'Coogee', 'Bronte', 'Manly',
                'North Sydney', 'Neutral Bay', 'Mosman', 'Cremorne',
                'Parramatta', 'Westmead', 'Homebush', 'Olympic Park',
                'Chatswood', 'Lane Cove', 'Artarmon', 'St Leonards',
                'Liverpool', 'Campbelltown', 'Penrith', 'Blacktown'
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
                  question: 'What restaurant cleaning services do you provide in Sydney NSW?',
                  answer: 'We provide comprehensive restaurant cleaning including commercial kitchen deep cleaning, equipment degreasing, exhaust system cleaning, dining area maintenance, bar cleaning, restroom sanitization, floor cleaning, window cleaning, and specialized food service cleaning. Our services address all areas of restaurant operations from kitchen to customer dining spaces.'
                },
                {
                  question: 'Do your restaurant cleaning services comply with NSW food safety regulations?',
                  answer: 'Yes, our restaurant cleaning services strictly comply with NSW Food Authority standards, HACCP requirements, and Australian food safety regulations. Our cleaning protocols address cross-contamination prevention, proper sanitization procedures, and documentation requirements for health department inspections and food safety compliance.'
                },
                {
                  question: 'How often should restaurants be professionally cleaned in Sydney?',
                  answer: 'Most restaurants require daily cleaning for dining areas and weekly deep cleaning for kitchens, with monthly comprehensive cleaning for equipment and exhaust systems. High-volume restaurants may need more frequent cleaning. We customize cleaning schedules based on restaurant size, volume, menu complexity, and specific operational requirements.'
                },
                {
                  question: 'Can you clean during restaurant operating hours or after closing?',
                  answer: 'We provide flexible restaurant cleaning scheduling including after-hours deep cleaning, early morning preparation cleaning, and during-hours maintenance cleaning. Our scheduling accommodates restaurant operating hours, peak service times, and staff schedules to minimize disruption while maintaining cleaning effectiveness throughout Sydney NSW restaurants.'
                },
                {
                  question: 'What specialized equipment do you use for restaurant and kitchen cleaning?',
                  answer: 'Our restaurant cleaning equipment includes commercial degreasers, steam cleaning systems, pressure washers, specialized vacuum systems, floor scrubbers, and food-safe sanitizers. We use equipment specifically designed for commercial kitchen environments and food service facilities to ensure effective cleaning while maintaining food safety standards.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blueprimary via-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Professional Restaurant Cleaning Sydney NSW</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for specialized restaurant cleaning services. Food safety compliant, expert kitchen cleaning, pristine dining environments.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Your Restaurant Cleaning Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}