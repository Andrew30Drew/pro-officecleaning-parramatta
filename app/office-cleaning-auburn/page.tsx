import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Auburn NSW | Professional Workplace Cleaning Services',
  description: 'Expert office cleaning services in Auburn NSW. Professional workplace cleaning for corporate offices, business centers & commercial buildings. Daily, weekly cleaning schedules available.',
  keywords: 'office cleaning Auburn, office cleaners Auburn, commercial cleaning Auburn, professional office cleaning Auburn, corporate cleaning services Auburn, business cleaning Auburn, workplace cleaning Auburn, office cleaning companies Auburn, commercial office cleaners Auburn, daily office cleaning Auburn, office janitorial services Auburn, cleaning services for offices Auburn, best office cleaners Auburn, affordable office cleaning Auburn, office sanitization services Auburn, deep office cleaning Auburn, office carpet cleaning Auburn, medical office cleaning Auburn, strata office cleaning Auburn, local office cleaners Auburn',
  openGraph: {
    title: 'Office Cleaning Auburn NSW | Professional Workplace Cleaning Services',
    description: 'Expert office cleaning services in Auburn NSW. Professional workplace cleaning for corporate offices, business centers & commercial buildings. Daily, weekly cleaning schedules available.',
    url: '/office-cleaning-auburn',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Professional office cleaning services Auburn NSW'
      }
    ]
  },
  alternates: {
    canonical: '/office-cleaning-auburn'
  }
};

export default function OfficeCleaningPage() {
  const faqs = [
    {
      question: 'What does your office cleaning service in Auburn include?',
      answer: 'Our Auburn office cleaning services are comprehensive, covering dusting, vacuuming, mopping, trash removal, restroom sanitization, kitchen cleaning, and desk wiping. We can also include window cleaning, carpet steam cleaning, and high-touch point disinfection to ensure a healthy workspace.'
    },
    {
      question: 'Can you clean our Auburn office after hours?',
      answer: 'Yes, we specialize in after-hours office cleaning in Auburn to minimize disruption to your staff. Our teams are available evenings, weekends, and early mornings to ensure your office is fresh and ready for the next business day.'
    },
    {
      question: 'Do you provide cleaning supplies for Auburn offices?',
      answer: 'Yes, we provide all necessary cleaning equipment and eco-friendly supplies. We can also manage consumables replenishment (toilet paper, hand soap, paper towels) for your Auburn office as part of our service.'
    },
    {
      question: 'Is your Auburn office cleaning staff insured?',
      answer: 'Absolutely. All our office cleaners in Auburn are fully insured, police-checked, and professionally trained. We hold public liability insurance to give you peace of mind while we are on your premises.'
    },
    {
      question: 'How often should I have my Auburn office cleaned?',
      answer: 'The frequency depends on your office size and staff count. For most busy offices in Auburn, we recommend daily or 3-times-weekly cleaning to maintain hygiene standards. We can provide a custom schedule based on your specific needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Auburn NSW"
        serviceDescription="Expert office cleaning services in Auburn NSW. Professional workplace cleaning for corporate offices, business centers & commercial buildings."
        serviceUrl="/office-cleaning-auburn"
        serviceType="Office Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Daily Office Cleaning',
          'Weekly Office Maintenance',
          'Executive Office Cleaning',
          'Corporate Office Cleaning',
          'Medical Office Cleaning',
          'After Hours Office Cleaning'
        ]}
        faqs={faqs}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Cleaning Auburn NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional office cleaning services that create productive, healthy workplace environments. Expert cleaning solutions for corporate offices, small businesses, and commercial properties across Auburn NSW.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Office cleaning Auburn NSW - Professional workplace cleaning"
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
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Office Cleaning Services in Auburn NSW</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp provides exceptional office cleaning services throughout Auburn NSW, creating productive workplace environments that support business success, employee wellbeing, and professional presentation. Our office cleaning specialists understand that maintaining clean, organized, and hygienic office spaces is essential for business operations, staff productivity, and creating positive impressions for clients and visitors.
              </p>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Office cleaning encompasses comprehensive workplace maintenance including desk sanitization, kitchen cleaning, restroom maintenance, floor care, window cleaning, and specialized office equipment cleaning. Our experienced office cleaning teams provide tailored solutions that address the unique requirements of different office environments while maintaining consistent professional standards throughout Auburn NSW.
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
                  alt="Office cleaning team Auburn NSW"
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

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions about Office Cleaning in Auburn</h3>
          <div className="space-y-6 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Professional Office Cleaning Auburn NSW</h3>
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
