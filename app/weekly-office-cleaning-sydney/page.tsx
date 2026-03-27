import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weekly Office Cleaning Sydney NSW | Professional Workplace Maintenance Services',
  description: 'Expert weekly office cleaning services in Sydney NSW. Cost-effective professional workplace maintenance with flexible weekly schedules for offices, businesses & commercial properties.',
  keywords: 'weekly office cleaning Sydney, workplace cleaning NSW, weekly cleaning services, office maintenance Sydney, professional weekly cleaning',
  openGraph: {
    title: 'Weekly Office Cleaning Sydney NSW | Professional Workplace Maintenance Services',
    description: 'Expert weekly office cleaning services in Sydney NSW. Cost-effective professional workplace maintenance with flexible weekly schedules for offices, businesses & commercial properties.',
    url: '/weekly-office-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Weekly office cleaning Sydney NSW' }]
  },
  alternates: { canonical: '/weekly-office-cleaning-sydney' }
};

export default function WeeklyOfficeCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blueprimary via-darkblue to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Weekly Office Cleaning Sydney NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Cost-effective weekly office cleaning services that maintain professional workplace standards. Comprehensive cleaning solutions designed for offices seeking quality maintenance with flexible scheduling throughout Sydney NSW.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Weekly office cleaning Sydney NSW - Professional workplace maintenance"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Weekly Office Cleaning Services in Sydney NSW</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp delivers comprehensive weekly office cleaning services throughout Sydney NSW, providing cost-effective workplace maintenance solutions that balance thorough cleaning with budget considerations. Our weekly cleaning specialists understand that many offices require professional cleaning services that maintain cleanliness standards while offering flexible scheduling and competitive pricing for sustained business operations.
                </p>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Weekly office cleaning provides an optimal balance between maintaining professional workplace standards and managing cleaning costs effectively. Our comprehensive weekly services address accumulated dirt, dust, and clutter while providing deep cleaning attention to areas that require regular professional maintenance, ensuring your office remains clean, healthy, and professionally presented throughout Sydney NSW's competitive business environment.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Strategic Weekly Cleaning Approach</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Weekly office cleaning requires strategic planning that maximizes cleaning effectiveness while accommodating business schedules and budget constraints. Our professional weekly cleaning approach focuses on high-impact areas, deep cleaning tasks, and comprehensive maintenance that ensures your office maintains professional standards between cleaning sessions while providing excellent value for ongoing workplace maintenance.
                </p>
              </div>
              
              <div>
                <Image
                  src="/images/services/commercial.webp"
                  alt="Professional weekly office cleaning process Sydney NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
                <div className="bg-blueprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Weekly Service Features</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Comprehensive deep cleaning</li>
                    <li>• Cost-effective maintenance</li>
                    <li>• Flexible weekly scheduling</li>
                    <li>• Thorough professional service</li>
                    <li>• Consistent quality standards</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Weekly Office Cleaning Process & Schedule</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Weekly Assessment & Planning</h4>
                <p className="text-gray-700 mb-4">
                  Our weekly cleaning teams conduct comprehensive office assessments, identifying areas requiring attention since the previous cleaning session, evaluating accumulated dirt and clutter, and prioritizing cleaning tasks for maximum impact. We customize each weekly cleaning session based on office usage patterns and specific maintenance requirements.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Deep Cleaning Focus Areas</h4>
                <p className="text-gray-700 mb-4">
                  Weekly cleaning sessions emphasize deep cleaning tasks including thorough floor cleaning, detailed restroom sanitization, comprehensive kitchen maintenance, desk area deep cleaning, and equipment sanitization. These intensive cleaning tasks ensure your office receives professional attention that maintains high cleanliness standards throughout the week.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Comprehensive Maintenance Tasks</h4>
                <p className="text-gray-700 mb-4">
                  Our weekly services include comprehensive maintenance tasks such as detailed window cleaning, carpet deep cleaning, furniture sanitization, air vent cleaning, and thorough waste management. These comprehensive tasks address cleaning needs that accumulate over time, ensuring your office maintains professional presentation and hygiene standards.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Weekly Quality Assurance</h4>
                <p className="text-gray-700 mb-4">
                  We conduct detailed quality inspections during each weekly cleaning session, documenting completed tasks, identifying any maintenance concerns, and ensuring consistent service quality. Our weekly quality assurance includes client communication, feedback collection, and service adjustments to maintain optimal cleaning standards for your office environment.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Weekly Office Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Comprehensive floor cleaning',
                  'Deep restroom sanitization', 
                  'Kitchen thorough cleaning',
                  'Desk area deep cleaning',
                  'Equipment sanitization',
                  'Window & glass cleaning',
                  'Carpet deep cleaning',
                  'Furniture cleaning & polishing',
                  'Waste removal & management',
                  'Reception area deep clean',
                  'Meeting room maintenance',
                  'Storage area organization'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blueprimary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Benefits of Weekly Office Cleaning Services</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/hero_img2.jpg"
                  alt="Clean weekly maintained office Sydney NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Cost-Effective Maintenance</h4>
                    <p className="text-gray-700">Balance professional cleaning quality with budget considerations through weekly services that provide excellent value while maintaining office standards.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Deep Cleaning Focus</h4>
                    <p className="text-gray-700">Weekly sessions allow for thorough, comprehensive cleaning that addresses accumulated dirt, dust, and maintenance needs more effectively than less frequent services.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Flexible Scheduling</h4>
                    <p className="text-gray-700">Weekly cleaning offers scheduling flexibility that accommodates business operations while ensuring consistent professional office maintenance.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Professional Standards</h4>
                    <p className="text-gray-700">Maintain professional office presentation and hygiene standards that support business success and employee satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Weekly Cleaning Schedule Options</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-white border-2 border-blueprimary rounded-2xl">
                <div className="w-12 h-12 bg-blueprimary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  Mon
                </div>
                <h4 className="font-bold text-darkblue mb-2">Monday Clean</h4>
                <p className="text-sm text-gray-600">Fresh week start with comprehensive cleaning</p>
              </div>
              <div className="text-center p-6 bg-white border-2 border-greenprimary rounded-2xl">
                <div className="w-12 h-12 bg-greenprimary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  Wed
                </div>
                <h4 className="font-bold text-darkblue mb-2">Wednesday Clean</h4>
                <p className="text-sm text-gray-600">Mid-week maintenance for optimal hygiene</p>
              </div>
              <div className="text-center p-6 bg-white border-2 border-blueprimary rounded-2xl">
                <div className="w-12 h-12 bg-blueprimary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  Fri
                </div>
                <h4 className="font-bold text-darkblue mb-2">Friday Clean</h4>
                <p className="text-sm text-gray-600">End-of-week deep clean for fresh Monday</p>
              </div>
              <div className="text-center p-6 bg-white border-2 border-greenprimary rounded-2xl">
                <div className="w-12 h-12 bg-greenprimary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  Sat
                </div>
                <h4 className="font-bold text-darkblue mb-2">Weekend Clean</h4>
                <p className="text-sm text-gray-600">Weekend deep cleaning without disruption</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Areas We Service Weekly</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides weekly office cleaning services throughout Sydney NSW's business districts and commercial areas. Our weekly cleaning teams service offices in:
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'Martin Place', 'Circular Quay', 'George Street',
                'North Sydney', 'St Leonards', 'Crows Nest', 'Milsons Point',
                'Parramatta', 'Westmead', 'Harris Park', 'Olympic Park',
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
                  question: 'What day of the week is best for weekly office cleaning in Sydney NSW?',
                  answer: 'The optimal day depends on your business operations and preferences. Popular options include Monday mornings for a fresh week start, Wednesday for mid-week maintenance, Friday afternoons for end-of-week deep cleaning, or weekends for minimal disruption. We work with your schedule to determine the most convenient and effective weekly cleaning day for your Sydney office operations.'
                },
                {
                  question: 'What does weekly office cleaning include compared to daily or monthly services?',
                  answer: 'Weekly office cleaning provides comprehensive maintenance including deep floor cleaning, thorough restroom sanitization, detailed kitchen cleaning, desk area deep cleaning, equipment sanitization, window cleaning, and carpet maintenance. Weekly services offer more thorough cleaning than daily maintenance while providing more frequent attention than monthly deep cleaning, creating an optimal balance of quality and cost-effectiveness.'
                },
                {
                  question: 'How much does weekly office cleaning cost in Sydney?',
                  answer: 'Weekly office cleaning costs in Sydney vary based on office size, specific requirements, cleaning scope, and location. Our competitive weekly rates typically range from $80-$300 per cleaning session depending on office size and services required. Weekly contracts often provide better value than one-time cleanings. We provide detailed quotes with transparent weekly pricing tailored to your office needs and budget.'
                },
                {
                  question: 'Can weekly office cleaning be adjusted for seasonal needs or special requirements?',
                  answer: 'Yes, we customize weekly cleaning services based on seasonal requirements, business changes, and special needs. This includes increased cleaning during flu season, additional services during busy periods, holiday cleaning adjustments, and accommodation for office events or renovations. Our flexible weekly service agreements can be modified to address changing business requirements throughout Sydney NSW.'
                },
                {
                  question: 'What happens if our office needs additional cleaning between weekly services?',
                  answer: 'We provide emergency and additional cleaning services as needed between weekly sessions. Whether dealing with spills, unexpected events, important client visits, or increased office activity, our team can provide supplementary cleaning services. Many weekly clients also add monthly deep cleaning services or periodic specialized cleaning to complement their regular weekly maintenance schedule.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blueprimary via-darkblue to-blueprimary rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Professional Weekly Office Cleaning Sydney NSW</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for cost-effective weekly office cleaning services. Comprehensive maintenance, flexible scheduling, professional standards.
              </p>
              <div className="text-2xl font-bold text-greenprimary">
                Call 1300 494 983 for Your Weekly Office Cleaning Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}