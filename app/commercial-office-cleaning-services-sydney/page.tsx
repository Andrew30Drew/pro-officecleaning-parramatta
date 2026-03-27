import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Office Cleaning Services Sydney | All Business Types | Pro Clean Corp',
  description: 'Commercial office cleaning services across Sydney. From small businesses to large corporate floors — flexible schedules, fixed pricing, after-hours service. Free quote.',
  keywords: ['commercial office cleaning services sydney', 'office cleaning sydney', 'commercial cleaning sydney offices', 'office cleaning services sydney', 'professional office cleaners sydney'],
  openGraph: {
    title: 'Commercial Office Cleaning Services Sydney | Pro Clean Corp',
    description: 'Commercial office cleaning services for all business types in Sydney. Flexible, fixed-price, after-hours available.',
    url: 'https://www.procleancorp.com.au/commercial-office-cleaning-services-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial office cleaning services Sydney' }]
  },
  twitter: { card: 'summary_large_image', title: 'Commercial Office Cleaning Services Sydney | Pro Clean Corp', description: 'Commercial office cleaning for all Sydney business types — fixed pricing, after-hours.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/commercial-office-cleaning-services-sydney' }
};

const faqs = [
  {
    question: 'What does a commercial office cleaning service in Sydney include?',
    answer: 'Commercial office cleaning covers: workstations and desks (including monitors and keyboards), meeting rooms, reception and waiting areas, kitchen and breakroom, toilets and bathrooms, floors (vacuum, mop or polish), internal glass and partitions, bin emptying and restocking of consumables such as hand soap, toilet paper and paper towels. Pro Clean Corp provides a detailed scope during your on-site assessment.'
  },
  {
    question: 'How often should I have my Sydney office commercially cleaned?',
    answer: 'Most Sydney offices with 20+ staff benefit from 3–5 cleaning visits per week. Small offices under 10 staff typically find 1–2 weekly visits sufficient. High-traffic environments — medical, food service, client-facing — may require daily cleaning. Pro Clean Corp will advise the optimal frequency based on your staff count, visitor volumes and specific hygiene requirements.'
  },
  {
    question: 'Are commercial office cleaning services available after hours in Sydney?',
    answer: 'Yes. The majority of Pro Clean Corp\'s Sydney office cleaning contracts are scheduled after business hours — typically 6pm–9pm for standard commercial offices. This allows our teams to clean without disrupting staff or meetings. Early morning (6–8am) scheduling is also available for businesses that prefer morning service before staff arrive.'
  },
  {
    question: 'Do you provide commercial office cleaning contracts without lock-in?',
    answer: 'Yes. All Pro Clean Corp commercial office cleaning contracts are month-to-month with 30 days written notice to exit. No lock-in periods, no exit fees. We believe in earning your business through quality of service, not contractual obligation. Annual contracts are available for businesses that prefer fixed annual budgeting, with included deep-clean visits.'
  }
];

export default function CommercialOfficeCleaningServicesSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Office Cleaning Services Sydney"
        serviceDescription="Professional commercial office cleaning services across Sydney for all business types. After-hours scheduling, fixed pricing and no lock-in contracts."
        serviceUrl="/commercial-office-cleaning-services-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Floor Cleaning', 'Workstation Cleaning', 'Meeting Room Cleaning', 'Kitchen Cleaning', 'Bathroom Cleaning', 'Reception Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Small Offices to Large Floors · All Sydney</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Commercial Office Cleaning Services Across Sydney
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Pro Clean Corp delivers commercial office cleaning services</strong> for every business size across Sydney — from 5-person startups to 200-desk corporate floors. Fixed pricing, flexible scheduling and no lock-in contracts.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="text-sm text-white w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-2 pr-4 text-green-200">Office Size</th>
                      <th className="text-left py-2 pr-4 text-green-200">From</th>
                      <th className="text-left py-2 text-green-200">Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/90">
                    <tr className="border-b border-white/10"><td className="py-1.5 pr-4">Small (under 50sqm)</td><td className="pr-4">$80/visit</td><td>Weekly</td></tr>
                    <tr className="border-b border-white/10"><td className="py-1.5 pr-4">Medium (50–200sqm)</td><td className="pr-4">$150/visit</td><td>2–3x weekly</td></tr>
                    <tr><td className="py-1.5 pr-4">Large (200sqm+)</td><td className="pr-4">$280/visit</td><td>Daily</td></tr>
                  </tbody>
                </table>
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/office.webp"
                alt="Commercial office cleaning services Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-8 bg-greenprimary/10 border-l-4 border-greenprimary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>Commercial office cleaning services from Pro Clean Corp in Sydney</strong> cover all workspaces — desks, meeting rooms, kitchens, bathrooms and reception areas. Fixed pricing from $80/visit for small offices, scaled for medium and large floors. After-hours scheduling and no lock-in contracts across all Sydney suburbs.
          </p>
        </div>
      </section>

      {/* Inclusions */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Commercial Office Cleaning — Full Inclusions</h2>
          <p className="text-center text-gray-600 mb-12">Every area of your office, covered on every visit.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                zone: 'Workstations',
                tasks: ['Desk surface wipe-down', 'Monitor and keyboard clean', 'Chair wipe (fabric or vinyl)', 'Bin emptying', 'Floor vacuuming']
              },
              {
                zone: 'Meeting Rooms',
                tasks: ['Table and surface clean', 'Chair wipe-down', 'Whiteboard cleaning', 'Floor vacuum and mop', 'AV equipment exterior clean']
              },
              {
                zone: 'Kitchen & Breakroom',
                tasks: ['Bench and sink cleaning', 'Microwave interior and exterior', 'Fridge exterior wipe', 'Floor mop', 'Dishwasher restacking']
              },
              {
                zone: 'Bathrooms',
                tasks: ['Toilet disinfection', 'Basin and tap cleaning', 'Mirror polish', 'Floor mop and disinfect', 'Consumables restocking']
              }
            ].map((zone, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-darkblue mb-3 text-sm">{zone.zone}</h3>
                <ul className="space-y-1.5">
                  {zone.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-700">
                      <span className="text-greenprimary font-bold mt-0.5">✓</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Process */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/services/hero2.jpg"
                alt="Office cleaning process Sydney"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">How Our Commercial Office Cleaning Service Works</h2>
              <div className="space-y-4">
                {[
                  { n: '1', t: 'Free On-Site Assessment', d: 'We visit your office to assess the layout, staff count, high-use areas and any specific requirements.' },
                  { n: '2', t: 'Written Fixed-Price Quote', d: 'Receive a written quote within 24 hours — fixed price for your agreed scope, no hidden extras.' },
                  { n: '3', t: 'Service Agreement', d: 'Month-to-month service agreement with your preferred schedule, start date and access details confirmed.' },
                  { n: '4', t: 'Regular Cleaning Begins', d: 'Your dedicated cleaning team begins service. Confirmation email after every clean, direct contact for any changes.' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-blueprimary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{step.n}</div>
                    <div>
                      <h4 className="font-bold text-darkblue text-sm mb-0.5">{step.t}</h4>
                      <p className="text-gray-600 text-sm">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Commercial Office Cleaning Services Sydney</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-darkblue mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blueprimary to-darkblue text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get a Commercial Office Cleaning Quote Today</h2>
          <p className="text-xl text-blue-100 mb-8">Free on-site assessment. Written fixed-price quote within 24 hours. No lock-in.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
