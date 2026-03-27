import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daily Office Cleaning Services Sydney NSW | Regular Workplace Maintenance',
  description: 'Professional daily office cleaning services in Sydney NSW. Consistent workplace maintenance ensuring pristine office environments every day with reliable cleaning schedules.',
  keywords: 'daily office cleaning Sydney, regular office cleaning NSW, workplace maintenance Sydney, daily cleaning services, consistent office cleaning',
  openGraph: {
    title: 'Daily Office Cleaning Services Sydney NSW | Regular Workplace Maintenance',
    description: 'Professional daily office cleaning services in Sydney NSW. Consistent workplace maintenance ensuring pristine office environments every day with reliable cleaning schedules.',
    url: '/daily-office-cleaning-services-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Daily office cleaning services Sydney NSW' }]
  },
  alternates: { canonical: '/daily-office-cleaning-services-sydney' }
};

export default function DailyOfficeCleaningServicesSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-greenprimary via-blueprimary to-greenprimary py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Daily Office Cleaning Services Sydney NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Consistent, reliable daily office cleaning that maintains pristine workplace environments every single day. Professional cleaning schedules designed for optimal office hygiene and productivity in Sydney NSW.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Daily office cleaning services Sydney NSW - Regular workplace maintenance"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Daily Office Cleaning Services in Sydney NSW</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp provides exceptional daily office cleaning services throughout Sydney NSW, ensuring your workplace maintains consistent cleanliness, hygiene, and professional presentation every single day. Our daily cleaning specialists understand that regular office maintenance is essential for employee health, productivity, and creating positive impressions for clients and visitors who interact with your business daily.
                </p>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Daily office environments accumulate dust, germs, spills, and clutter throughout each business day, requiring consistent professional attention to maintain optimal workplace conditions. Our comprehensive daily office cleaning services address these ongoing challenges through systematic cleaning schedules, ensuring your office remains clean, healthy, and professionally presented from the moment employees arrive until the end of each business day.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Consistent Daily Cleaning Standards</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Daily office cleaning requires consistent standards and reliable service delivery that employees and management can depend on every day. Our professional daily cleaning services maintain uniform cleanliness levels, follow established cleaning protocols, and ensure your office environment supports productivity, health, and professional success throughout Sydney NSW's competitive business landscape.
                </p>
              </div>
              
              <div>
                <Image
                  src="/images/services/commercial.webp"
                  alt="Professional daily office cleaning schedule Sydney NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
                <div className="bg-greenprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Daily Service Benefits</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Consistent daily maintenance</li>
                    <li>• Reliable cleaning schedules</li>
                    <li>• Improved workplace hygiene</li>
                    <li>• Enhanced employee productivity</li>
                    <li>• Professional daily presentation</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Daily Office Cleaning Schedule & Process</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Morning Preparation Services</h4>
                <p className="text-gray-700 mb-4">
                  Our daily cleaning teams arrive before business hours to prepare your office for the day ahead. Morning services include entrance cleaning, reception area maintenance, restroom restocking, kitchen preparation, and ensuring all common areas are pristine when employees and visitors arrive, creating positive first impressions every single day.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Midday Maintenance Services</h4>
                <p className="text-gray-700 mb-4">
                  Throughout the business day, our cleaning staff provide discreet maintenance services including restroom checks, kitchen cleaning, waste removal, spill response, and high-traffic area attention. These midday services ensure your office remains clean and professional throughout business hours without disrupting workplace productivity or operations.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Evening Deep Cleaning</h4>
                <p className="text-gray-700 mb-4">
                  After business hours, we perform comprehensive daily cleaning including desk area sanitization, floor cleaning, window cleaning, equipment maintenance, and detailed restroom cleaning. Our evening services prepare your office for the next business day while addressing accumulated dirt, germs, and clutter from daily office activities.
                </p>
                
                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Quality Consistency Monitoring</h4>
                <p className="text-gray-700 mb-4">
                  We maintain detailed daily cleaning checklists, conduct regular quality inspections, and track cleaning consistency to ensure reliable service delivery every day. Our monitoring systems identify any variations in cleaning quality and address issues immediately to maintain the consistent daily cleaning standards your office requires.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Daily Office Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Daily desk sanitization',
                  'Morning office preparation', 
                  'Restroom maintenance & restocking',
                  'Kitchen daily cleaning',
                  'Daily floor cleaning & vacuuming',
                  'Waste removal & recycling',
                  'Reception area daily maintenance',
                  'Common area cleaning',
                  'Daily window & glass cleaning',
                  'Equipment daily sanitization',
                  'Entrance daily cleaning',
                  'End-of-day office reset'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-greenprimary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Benefits of Daily Office Cleaning Services</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/hero_img1.jpg"
                  alt="Clean daily maintained office Sydney NSW workplace"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                  />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Consistent Professional Image</h4>
                    <p className="text-gray-700">Maintain superior office presentation every day, ensuring consistent professional impressions for employees, clients, and visitors.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Enhanced Employee Health</h4>
                    <p className="text-gray-700">Daily sanitization and cleaning reduces germs, allergens, and bacteria, creating healthier workplace environments that support employee wellbeing.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Improved Workplace Productivity</h4>
                    <p className="text-gray-700">Clean, organized daily environments enhance employee focus, reduce distractions, and support optimal workplace productivity and performance.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Reliable Service Delivery</h4>
                    <p className="text-gray-700">Consistent daily cleaning schedules you can depend on, ensuring your office maintains professional standards without management oversight.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Daily Office Cleaning Schedule Options</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white border-2 border-greenprimary rounded-2xl p-6 text-center">
                <h4 className="text-xl font-bold text-darkblue mb-4">Morning Service</h4>
                <p className="text-gray-600 mb-4">Early morning cleaning before business hours</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 5:00 AM - 8:00 AM</li>
                  <li>• Office preparation</li>
                  <li>• Reception setup</li>
                  <li>• Restroom restocking</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-blueprimary rounded-2xl p-6 text-center">
                <h4 className="text-xl font-bold text-darkblue mb-4">Evening Service</h4>
                <p className="text-gray-600 mb-4">Comprehensive cleaning after business hours</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 6:00 PM - 10:00 PM</li>
                  <li>• Deep office cleaning</li>
                  <li>• Floor maintenance</li>
                  <li>• Detailed sanitization</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-greenprimary rounded-2xl p-6 text-center">
                <h4 className="text-xl font-bold text-darkblue mb-4">Split Service</h4>
                <p className="text-gray-600 mb-4">Morning preparation + evening deep clean</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Morning & evening</li>
                  <li>• Continuous maintenance</li>
                  <li>• Maximum cleanliness</li>
                  <li>• Premium service level</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney NSW Office Areas We Service Daily</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides daily office cleaning services throughout Sydney NSW's business districts and commercial areas. Our daily cleaning teams service offices in:
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'Circular Quay', 'Martin Place', 'George Street',
                'North Sydney', 'Milsons Point', 'St Leonards', 'Crows Nest',
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
                  question: 'What time do daily office cleaning services occur in Sydney NSW offices?',
                  answer: 'Daily office cleaning can be scheduled for early morning (5:00-8:00 AM), evening (6:00-10:00 PM), or split services combining both. We work with your business schedule to provide cleaning services when they least disrupt operations while ensuring your office is always clean when needed. Our flexible scheduling accommodates various business hours and operational requirements throughout Sydney NSW.'
                },
                {
                  question: 'What does daily office cleaning include compared to weekly cleaning services?',
                  answer: 'Daily office cleaning includes essential maintenance tasks like desk sanitization, restroom maintenance, waste removal, kitchen cleaning, reception area care, and high-traffic floor cleaning. This differs from weekly services which focus on deeper tasks like detailed carpet cleaning, window washing, and comprehensive equipment cleaning. Daily services maintain consistent cleanliness while weekly services provide deeper maintenance.'
                },
                {
                  question: 'How much does daily office cleaning cost in Sydney?',
                  answer: 'Daily office cleaning costs in Sydney vary based on office size, service frequency, specific requirements, and cleaning schedule. Our competitive daily rates typically range from $15-$50 per visit depending on scope and office size. Daily contracts often provide better value per cleaning compared to less frequent services. We provide detailed quotes with transparent daily pricing tailored to your office needs.'
                },
                {
                  question: 'Can daily office cleaning be customized for different business types in Sydney?',
                  answer: 'Absolutely. We customize daily cleaning services for different business types including law firms, medical offices, financial services, tech companies, and creative agencies. Each business type has unique daily cleaning requirements, from confidentiality needs to specialized equipment care. Our daily cleaning protocols are tailored to match your industry requirements and business operations throughout Sydney NSW.'
                },
                {
                  question: 'What happens if daily office cleaning service is missed or delayed?',
                  answer: 'We maintain backup systems and alternative scheduling to ensure daily cleaning consistency. If service is delayed due to unforeseen circumstances, we provide same-day makeup cleaning or adjust scheduling to maintain your office cleanliness standards. Our daily service agreements include reliability guarantees and contingency plans to ensure your Sydney NSW office cleaning requirements are consistently met.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-greenprimary via-blueprimary to-greenprimary rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Reliable Daily Office Cleaning Sydney NSW</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for consistent daily office cleaning services. Professional daily maintenance, reliable schedules, enhanced workplace productivity.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Your Daily Office Cleaning Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}