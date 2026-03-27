import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Cleaning Blacktown NSW | Professional Workplace Cleaning Services',
  description: 'Expert office cleaning services in Blacktown NSW. Professional workplace cleaning for corporate offices, business centers & commercial buildings. Daily, weekly cleaning schedules available.',
  keywords: 'office cleaning Blacktown, office cleaners Blacktown, commercial cleaning Blacktown, professional office cleaning Blacktown, corporate cleaning services Blacktown, business cleaning Blacktown, workplace cleaning Blacktown, office cleaning companies Blacktown, commercial office cleaners Blacktown, daily office cleaning Blacktown, office janitorial services Blacktown, cleaning services for offices Blacktown, best office cleaners Blacktown, affordable office cleaning Blacktown, office sanitization services Blacktown, deep office cleaning Blacktown, office carpet cleaning Blacktown, medical office cleaning Blacktown, strata office cleaning Blacktown, local office cleaners Blacktown',
  openGraph: {
    title: 'Office Cleaning Blacktown NSW | Professional Workplace Cleaning Services',
    description: 'Expert office cleaning services in Blacktown NSW. Professional workplace cleaning for corporate offices, business centers & commercial buildings. Daily, weekly cleaning schedules available.',
    url: '/office-cleaning-blacktown',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Professional office cleaning services Blacktown NSW'
      }
    ]
  },
  alternates: {
    canonical: '/office-cleaning-blacktown'
  }
};

export default function OfficeCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Cleaning Blacktown NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional office cleaning services that create productive, healthy workplace environments. Expert cleaning solutions for corporate offices, small businesses, and commercial properties across Blacktown NSW.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Office cleaning Blacktown NSW - Professional workplace cleaning"
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
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Office Cleaning Services in Blacktown NSW</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp provides exceptional office cleaning services throughout Blacktown NSW, creating productive workplace environments that support business success, employee wellbeing, and professional presentation. Our office cleaning specialists understand that maintaining clean, organized, and hygienic office spaces is essential for business operations, staff productivity, and creating positive impressions for clients and visitors.
              </p>
              
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Office cleaning encompasses comprehensive workplace maintenance including desk sanitization, kitchen cleaning, restroom maintenance, floor care, window cleaning, and specialized office equipment cleaning. Our experienced office cleaning teams provide tailored solutions that address the unique requirements of different office environments while maintaining consistent professional standards throughout Blacktown NSW.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-darkblue mb-6">Office Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Desk cleaning & sanitization',
                    'Kitchen & breakroom cleaning',
                    'Restroom maintenance & sanitization',
                    'Floor cleaning & vacuuming',
                    'Window & glass cleaning',
                    'Carpet cleaning services',
                    'Conference room cleaning',
                    'Reception area maintenance',
                    'Waste removal & recycling',
                    'Equipment sanitization',
                    'Common area cleaning',
                    'After-hours cleaning'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <Image
                  src="/images/services/office.webp"
                  alt="Office cleaning team Blacktown NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
              <div className="bg-greenprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Office Benefits</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Enhanced productivity</li>
                  <li>• Professional presentation</li>
                  <li>• Healthier workplace</li>
                  <li>• Flexible scheduling</li>
                  <li>• Cost-effective solutions</li>
                </ul>
              </div>
            </div>
          </div>

           <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions about Office Cleaning in Blacktown</h3>
            <div className="space-y-6 mb-12">
              {[
                {
                  question: 'What does your office cleaning service in Blacktown include?',
                  answer: 'Our Blacktown office cleaning services are comprehensive, covering dusting, vacuuming, mopping, trash removal, restroom sanitization, kitchen cleaning, and desk wiping. We can also include window cleaning, carpet steam cleaning, and high-touch point disinfection to ensure a healthy workspace.'
                },
                {
                  question: 'Can you clean our Blacktown office after hours?',
                  answer: 'Yes, we specialize in after-hours office cleaning in Blacktown to minimize disruption to your staff. Our teams are available evenings, weekends, and early mornings to ensure your office is fresh and ready for the next business day.'
                },
                {
                  question: 'Do you provide cleaning supplies for Blacktown offices?',
                  answer: 'Yes, we provide all necessary cleaning equipment and eco-friendly supplies. We can also manage consumables replenishment (toilet paper, hand soap, paper towels) for your Blacktown office as part of our service.'
                },
                {
                  question: 'Is your Blacktown office cleaning staff insured?',
                  answer: 'Absolutely. All our office cleaners in Blacktown are fully insured, police-checked, and professionally trained. We hold public liability insurance to give you peace of mind while we are on your premises.'
                },
                {
                  question: 'How often should I have my Blacktown office cleaned?',
                  answer: 'The frequency depends on your office size and staff count. For most busy offices in Blacktown, we recommend daily or 3-times-weekly cleaning to maintain hygiene standards. We can provide a custom schedule based on your specific needs.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Professional Office Cleaning Blacktown NSW</h3>
            <p className="text-xl mb-6">
              Contact Pro Clean Corp for reliable office cleaning services. Expert teams, flexible schedules, competitive rates.
            </p>
            <div className="text-2xl font-bold">
              Call 1300 494 983 for Your Office Cleaning Quote
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
