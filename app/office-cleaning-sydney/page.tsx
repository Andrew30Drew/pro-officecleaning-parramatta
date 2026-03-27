import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Sydney NSW | Professional Workplace Cleaning Services',
  description: 'Expert office cleaning services in Sydney NSW. Professional workplace cleaning for corporate offices, business centers & commercial buildings. Daily, weekly cleaning schedules available.',
  keywords: 'office cleaning Sydney, workplace cleaning NSW, corporate cleaning services, business cleaning Sydney, professional office cleaners',
  openGraph: {
    title: 'Office Cleaning Sydney NSW | Professional Workplace Cleaning Services',
    description: 'Expert office cleaning services in Sydney NSW. Professional workplace cleaning for corporate offices, business centers & commercial buildings.',
    url: '/office-cleaning-sydney',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Professional office cleaning services Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/office-cleaning-sydney'
  }
};

const suburbs = [
  { name: 'Alexandria', slug: 'office-cleaning-alexandria' },
  { name: 'Arncliffe', slug: 'office-cleaning-arncliffe' },
  { name: 'Artarmon', slug: 'office-cleaning-artarmon' },
  { name: 'Auburn', slug: 'office-cleaning-auburn' },
  { name: 'Bankstown', slug: 'office-cleaning-bankstown' },
  { name: 'Blacktown', slug: 'office-cleaning-blacktown' },
  { name: 'Brookvale', slug: 'office-cleaning-brookvale' },
  { name: 'Chatswood', slug: 'office-cleaning-chatswood' },
  { name: 'Hornsby', slug: 'office-cleaning-hornsby' },
  { name: 'Kogarah', slug: 'office-cleaning-kogarah' },
  { name: 'Liverpool', slug: 'office-cleaning-liverpool' },
  { name: 'Macquarie Park', slug: 'office-cleaning-macquarie-park' },
  { name: 'Marsden Park', slug: 'office-cleaning-marsden-park' },
  { name: 'Mascot', slug: 'office-cleaning-mascot' },
  { name: 'North Sydney', slug: 'office-cleaning-north-sydney' },
  { name: 'Parramatta', slug: 'office-cleaning-parramatta' },
  { name: 'Penrith', slug: 'office-cleaning-penrith' },
  { name: 'Prospect', slug: 'office-cleaning-prospect' },
  { name: 'Revesby', slug: 'office-cleaning-revesby' },
  { name: 'Roseville', slug: 'office-cleaning-roseville' },
  { name: 'Silverwater', slug: 'office-cleaning-silverwater' },
  { name: 'Smithfield', slug: 'office-cleaning-smithfield' },
  { name: 'Surry Hills', slug: 'office-cleaning-surry-hills' },
  { name: 'Sydney CBD', slug: 'office-cleaning-sydney-cbd' },
  { name: 'Wetherill Park', slug: 'office-cleaning-wetherill-park' },
];

export default function OfficeCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Services Sydney NSW"
        serviceDescription="Professional office cleaning services for businesses across Sydney NSW. Comprehensive workplace cleaning solutions including desk sanitization, floor care, and restroom maintenance."
        serviceUrl="/office-cleaning-sydney"
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
        faqs={[
          {
            question: 'What office cleaning services do you provide in Sydney NSW?',
            answer: 'Our comprehensive office cleaning services include workstation cleaning, kitchen and breakroom maintenance, restroom sanitization, floor care, waste management, window cleaning, carpet cleaning, conference room cleaning, reception area maintenance, and specialized deep cleaning services throughout Sydney NSW.'
          },
          {
            question: 'How often should we schedule office cleaning services?',
            answer: 'Office cleaning frequency depends on office size, staff numbers, and business requirements. We provide flexible scheduling including daily, weekly, bi-weekly, and monthly office cleaning services to match your specific needs and budget in Sydney NSW.'
          },
          {
            question: 'Can you provide office cleaning services outside business hours?',
            answer: 'Yes, we offer flexible office cleaning services including after-hours, early morning, weekend, and holiday cleaning to minimize disruption to your business operations throughout Sydney NSW.'
          },
          {
            question: 'Do your office cleaning services include specialized areas?',
            answer: 'Absolutely. Our office cleaning services cover all areas including executive offices, open-plan workspaces, conference rooms, reception areas, kitchens, restrooms, break rooms, server rooms, and common areas with specialized cleaning protocols for each space type.'
          },
          {
            question: 'Are your office cleaning services environmentally friendly?',
            answer: 'Yes, we prioritize eco-friendly office cleaning using green products and sustainable practices that are safe for indoor office environments while maintaining professional cleaning standards throughout Sydney NSW.'
          },
          {
            question: 'How do you ensure quality in your office cleaning services?',
            answer: 'We maintain service quality through comprehensive staff training, regular quality inspections, detailed cleaning checklists, client feedback systems, and continuous service improvement processes across all our office cleaning services in Sydney NSW.'
          }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Cleaning Sydney NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional office cleaning services that create productive, healthy workplace environments. Expert cleaning solutions for corporate offices, small businesses, and commercial properties across Sydney NSW.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-white text-blueprimary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                  Get a Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Office cleaning Sydney NSW - Professional workplace cleaning"
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
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Office Cleaning Services in Sydney NSW</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp provides exceptional office cleaning services throughout Sydney NSW, creating productive workplace environments that support business success, employee wellbeing, and professional presentation. Our office cleaning specialists understand that maintaining clean, organized, and hygienic office spaces is essential for business operations.
              </p>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Office cleaning encompasses comprehensive workplace maintenance including desk sanitization, kitchen cleaning, restroom maintenance, floor care, window cleaning, and specialized office equipment cleaning. Our experienced office cleaning teams provide tailored solutions for all Sydney suburbs.
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
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Choose Us?</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Experienced Local Teams</li>
                  <li>• Custom Cleaning Plans</li>
                  <li>• Eco-Friendly Products</li>
                  <li>• Fully Insured & Vetted</li>
                  <li>• 100% Satisfaction Guarantee</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Suburbs Section */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Service Areas Across Sydney</h3>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              We provide professional office cleaning services to businesses across the entire Sydney metropolitan area. Find your local service area below:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {suburbs.map((suburb) => (
                <Link
                  key={suburb.slug}
                  href={`/${suburb.slug}`}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition text-center text-gray-700 hover:text-greenprimary font-medium border border-gray-100"
                >
                  {suburb.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Related Services Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Other Commercial Cleaning Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/commercial-cleaning-sydney" className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                <span className="font-bold text-gray-700 group-hover:text-greenprimary block mb-2">Commercial Cleaning</span>
                <span className="text-xs text-gray-500">Comprehensive Business Solutions</span>
              </Link>
              <Link href="/medical-office-cleaning-sydney" className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                <span className="font-bold text-gray-700 group-hover:text-greenprimary block mb-2">Medical Cleaning</span>
                <span className="text-xs text-gray-500">Specialist Healthcare Hygiene</span>
              </Link>
              <Link href="/strata-cleaning-sydney" className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                <span className="font-bold text-gray-700 group-hover:text-greenprimary block mb-2">Strata Cleaning</span>
                <span className="text-xs text-gray-500">Body Corporate Maintenance</span>
              </Link>
              <Link href="/gym-cleaning-sydney" className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                <span className="font-bold text-gray-700 group-hover:text-greenprimary block mb-2">Gym Cleaning</span>
                <span className="text-xs text-gray-500">Fitness Centre Sanitization</span>
              </Link>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">How Much Does Office Cleaning Cost in Sydney?</h3>
            <p className="text-center text-gray-600 mb-8">Transparent pricing based on office size and frequency. All prices in AUD.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blueprimary text-white">
                    <th className="p-4 rounded-tl-lg font-semibold">Office Size</th>
                    <th className="p-4 font-semibold">Estimated Cost Per Visit</th>
                    <th className="p-4 rounded-tr-lg font-semibold">Recommended Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: 'Small office (1–10 staff)', cost: '$80 – $150', freq: '2–3x per week' },
                    { size: 'Medium office (10–50 staff)', cost: '$150 – $350', freq: 'Daily or 3–5x per week' },
                    { size: 'Large office (50–200 staff)', cost: '$350 – $700', freq: 'Daily' },
                    { size: 'Corporate HQ (200+ staff)', cost: 'Custom quote', freq: 'Daily + specialist services' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-darkblue">{row.size}</td>
                      <td className="p-4 font-bold text-greenprimary text-lg">{row.cost}</td>
                      <td className="p-4 text-gray-600">{row.freq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">* Rates vary by location, scope, and contract length. Long-term contracts attract discounted pricing.</p>
            <div className="text-center mt-6">
              <a href="/contact-us" className="inline-block bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get Your Free Office Cleaning Quote →
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {[
                {
                  question: 'What office cleaning services do you provide in Sydney NSW?',
                  answer: 'Our comprehensive office cleaning services include workstation cleaning, kitchen and breakroom maintenance, restroom sanitization, floor care, waste management, window cleaning, carpet cleaning, conference room cleaning, reception area maintenance, and specialized deep cleaning services throughout Sydney NSW.'
                },
                {
                  question: 'How often should we schedule office cleaning services?',
                  answer: 'Office cleaning frequency depends on office size, staff numbers, and business requirements. We provide flexible scheduling including daily, weekly, bi-weekly, and monthly office cleaning services to match your specific needs and budget in Sydney NSW.'
                },
                {
                  question: 'Can you provide office cleaning services outside business hours?',
                  answer: 'Yes, we offer flexible office cleaning services including after-hours, early morning, weekend, and holiday cleaning to minimize disruption to your business operations throughout Sydney NSW.'
                },
                {
                  question: 'Do your office cleaning services include specialized areas?',
                  answer: 'Absolutely. Our office cleaning services cover all areas including executive offices, open-plan workspaces, conference rooms, reception areas, kitchens, restrooms, break rooms, server rooms, and common areas with specialized cleaning protocols for each space type.'
                },
                {
                  question: 'Are your office cleaning services environmentally friendly?',
                  answer: 'Yes, we prioritize eco-friendly office cleaning using green products and sustainable practices that are safe for indoor office environments while maintaining professional cleaning standards throughout Sydney NSW.'
                },
                {
                  question: 'How do you ensure quality in your office cleaning services?',
                  answer: 'We maintain service quality through comprehensive staff training, regular quality inspections, detailed cleaning checklists, client feedback systems, and continuous service improvement processes across all our office cleaning services in Sydney NSW.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.question}</h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Professional Office Cleaning Sydney NSW</h3>
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