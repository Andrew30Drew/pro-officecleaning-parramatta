import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retail Cleaning Service Sydney NSW | Professional Store Cleaning Solutions',
  description: 'Expert retail cleaning services in Sydney NSW. Professional store cleaning for shopping centers, boutiques, retail chains & commercial retail spaces. Daily & weekly cleaning.',
  keywords: 'retail cleaning service Sydney, store cleaning NSW, shopping center cleaning, retail space cleaning Sydney, commercial retail cleaning',
  openGraph: {
    title: 'Retail Cleaning Service Sydney NSW | Professional Store Cleaning Solutions',
    description: 'Expert retail cleaning services in Sydney NSW. Professional store cleaning for shopping centers, boutiques, retail chains & commercial retail spaces. Daily & weekly cleaning.',
    url: '/retail-cleaning-service-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Retail cleaning service Sydney NSW' }]
  },
  alternates: { canonical: '/retail-cleaning-service-sydney' }
};

export default function RetailCleaningServiceSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Retail Cleaning Service Sydney NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional store cleaning that enhances customer experience and maintains brand image. Specialized cleaning for stores, shopping centers, and retail spaces across Sydney NSW.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Retail cleaning service Sydney NSW - Professional store cleaning"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Retail Cleaning Services in Sydney NSW</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp provides specialized retail cleaning services throughout Sydney NSW, helping retail businesses create exceptional customer experiences through immaculate store environments. Our retail cleaning specialists understand the unique challenges of retail spaces, from high customer traffic to diverse merchandise requirements, delivering cleaning solutions that enhance brand image while maintaining operational efficiency.
                </p>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Retail environments face constant challenges from heavy foot traffic, product handling, food court areas, and diverse customer activities that can quickly impact store appearance and customer perception. Our comprehensive retail cleaning services ensure stores remain pristine, welcoming, and safe for customers while supporting sales performance and brand reputation throughout Sydney NSW.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Why Professional Retail Cleaning Matters</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Professional retail cleaning directly impacts customer behavior, sales performance, and brand perception. Clean, well-maintained retail spaces encourage longer customer visits, increase purchase likelihood, and create positive brand associations that drive customer loyalty and repeat business across all retail formats.
                </p>
              </div>
              
              <div>
                <Image
                  src="/images/hero_img1.jpg"
                  alt="Professional retail cleaning process Sydney NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
                <div className="bg-blueprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Retail Cleaning Benefits</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Enhanced customer experience</li>
                    <li>• Increased sales performance</li>
                    <li>• Improved brand perception</li>
                    <li>• Flexible scheduling options</li>
                    <li>• Specialized retail expertise</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Our Retail Cleaning Process</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Store Assessment & Planning</h4>
                <p className="text-gray-700 mb-4">
                  Our retail cleaning specialists conduct comprehensive store assessments, evaluating customer traffic patterns, merchandise areas, high-touch surfaces, and specific retail requirements. We develop customized cleaning schedules that work around store operations, peak shopping times, and special events.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Customer Area Maintenance</h4>
                <p className="text-gray-700 mb-4">
                  We prioritize customer-facing areas including sales floors, fitting rooms, checkout areas, and entrance zones. Our cleaning protocols focus on creating welcoming, hygienic environments that encourage customer engagement while maintaining the professional appearance essential for retail success.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Specialized Retail Cleaning</h4>
                <p className="text-gray-700 mb-4">
                  Using retail-specific cleaning techniques, we address unique challenges including window and display cleaning, merchandise area maintenance, food court cleaning, and specialized floor care for diverse retail surfaces. Our methods preserve product integrity while maintaining pristine store environments.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Quality Control & Monitoring</h4>
                <p className="text-gray-700 mb-4">
                  We conduct regular quality inspections during peak and off-peak hours, ensuring consistent cleanliness standards throughout operating hours. Our monitoring systems track cleaning effectiveness and customer satisfaction to continuously improve retail cleaning services.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Retail Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Fashion store cleaning',
                  'Department store cleaning', 
                  'Shopping center maintenance',
                  'Boutique store cleaning',
                  'Electronics store cleaning',
                  'Grocery store cleaning',
                  'Pharmacy cleaning',
                  'Bookstore cleaning',
                  'Jewelry store cleaning',
                  'Shoe store cleaning',
                  'Furniture store cleaning',
                  'Sporting goods store cleaning'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blueprimary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Benefits of Professional Retail Cleaning</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/hero_img2.jpg"
                  alt="Clean retail store Sydney NSW shopping center"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Enhanced Customer Experience</h4>
                    <p className="text-gray-700">Clean, welcoming retail environments encourage longer customer visits, increased browsing time, and higher purchase conversion rates.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Brand Image Protection</h4>
                    <p className="text-gray-700">Maintain consistent brand standards through professional cleaning that reflects your commitment to quality and customer care.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Sales Performance Support</h4>
                    <p className="text-gray-700">Clean retail spaces directly correlate with improved sales performance, customer satisfaction, and positive reviews.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Flexible Operations</h4>
                    <p className="text-gray-700">Cleaning schedules adapted to retail hours, including early morning, evening, and weekend services to minimize customer disruption.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Retail Areas We Service</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides retail cleaning services throughout Sydney NSW's major shopping districts and retail precincts. Our professional teams service retail establishments in:
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'Westfield Bondi', 'Chatswood Chase', 'Macquarie Centre',
                'Pitt Street Mall', 'Broadway Shopping', 'Bondi Junction', 'Miranda Westfield',
                'Castle Hill', 'Hornsby Westfield', 'Parramatta Westfield', 'Liverpool Westfield',
                'Bankstown Central', 'Eastgardens', 'Burwood Westfield', 'Top Ryde',
                'Blacktown Westfield', 'Mt Druitt Westfield', 'Penrith Plaza', 'Campbelltown Mall',
                'The Rocks Markets', 'Paddy\'s Markets', 'Queen Victoria Building', 'Strand Arcade'
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
                  question: 'How often should retail stores be professionally cleaned in Sydney NSW?',
                  answer: 'Retail stores should be professionally cleaned daily or multiple times per week depending on customer traffic, store size, and retail type. High-traffic stores like department stores and shopping centers require daily cleaning, while specialty boutiques may need 3-5 times weekly. Food retailers and pharmacies often require multiple daily cleaning sessions to maintain hygiene standards and customer safety.'
                },
                {
                  question: 'What are the costs for retail cleaning services in Sydney?',
                  answer: 'Retail cleaning costs vary based on store size, cleaning frequency, retail type, and specific requirements. Our competitive rates typically range from $25-$80 per hour for retail cleaning services, with discounts available for multi-store contracts and high-frequency cleaning schedules. We provide free detailed quotes tailored to your retail cleaning needs and budget requirements.'
                },
                {
                  question: 'Can you clean retail stores during operating hours in Sydney?',
                  answer: 'Yes, we provide retail cleaning services during operating hours using discreet, customer-friendly cleaning methods that minimize disruption to shopping experiences. Our teams are trained to work efficiently around customers and staff, focusing on high-priority areas while maintaining professional appearance and customer safety throughout Sydney NSW retail locations.'
                },
                {
                  question: 'Do you provide specialized cleaning for different types of retail stores?',
                  answer: 'Absolutely. We provide specialized retail cleaning services for fashion stores, electronics retailers, grocery stores, pharmacies, jewelry stores, furniture stores, and more. Each retail type has unique cleaning requirements, from delicate merchandise handling to food safety compliance, and our teams are trained in industry-specific cleaning protocols and safety standards.'
                },
                {
                  question: 'What retail cleaning services do you provide for shopping centers?',
                  answer: 'We provide comprehensive shopping center cleaning including common areas, food courts, restrooms, corridors, escalators, elevators, parking areas, and individual store maintenance. Our shopping center services include crowd management during cleaning, emergency spill response, special event cleaning, and coordination with center management to ensure seamless operations throughout Sydney NSW shopping centers.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Professional Retail Cleaning Sydney NSW</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for expert retail cleaning services. Enhanced customer experience, flexible scheduling, competitive rates.
              </p>
              <div className="text-2xl font-bold text-greenprimary">
                Call 1300 494 983 for Your Free Retail Cleaning Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}