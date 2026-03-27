import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Inclusions — Full Checklist | ProCleanCorp',
  description: 'What does office cleaning include? Full checklist: vacuuming, sanitisation, kitchens, bathrooms. Plus what\'s excluded. ProCleanCorp Sydney explains.',
  keywords: 'what is included in office cleaning, office cleaning checklist sydney, what does office cleaning include, office cleaning inclusions, professional office clean checklist 2026',
  openGraph: {
    title: 'What Is Included in Office Cleaning? Full Checklist | ProCleanCorp',
    description: 'What does professional office cleaning include? Full checklist plus what\'s excluded. ProCleanCorp Sydney explains.',
    url: 'https://www.procleancorp.com.au/what-is-included-in-office-cleaning',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'What is included in office cleaning checklist Sydney' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/what-is-included-in-office-cleaning' }
};

const faqs = [
  {
    question: 'Does office cleaning include cleaning the fridge and kitchen appliances?',
    answer: 'Kitchen appliance cleaning (inside the fridge, microwave, oven) is typically not included in a standard weekly office clean — it is usually listed as a periodic add-on or one-off service. The exterior of appliances is included in standard cleaning (wiping down the outside of the microwave, fridge door). If you want the interior of appliances cleaned regularly, confirm this when getting your quote and it can be added to your scope of works.'
  },
  {
    question: 'Are bathrooms included in standard office cleaning?',
    answer: 'Yes. Bathrooms are included in all standard professional office cleaning programs. A standard office bathroom clean includes: toilet cleaning and disinfection inside and outside, basin and tapware cleaning, mirror cleaning, floor mopping with disinfectant, bin emptying and bin liner replacement, and restocking of hand soap and paper towels (if consumables are provided by the client). If bathroom consumables need to be supplied, this is typically a separate arrangement.'
  },
  {
    question: 'What is the difference between regular office cleaning and a deep clean?',
    answer: 'Regular office cleaning (weekly or daily) covers routine maintenance — vacuuming, surfaces, bathrooms, bins and kitchen benches. A deep clean goes further: cleaning inside appliances, washing windows internally, scrubbing grout, cleaning skirting boards and vents, shampooing carpets, cleaning window tracks, and sanitising hard-to-reach areas behind furniture. Most businesses schedule a deep clean 1–2 times per year in addition to regular maintenance cleaning.'
  }
];

const included = [
  { area: 'Floors', tasks: ['Vacuuming all carpeted areas', 'Mopping all hard floor surfaces', 'Spot-cleaning stains and spills'] },
  { area: 'Desks & Surfaces', tasks: ['Wiping desks and workstations (excluding paper stacks)', 'Sanitising keyboards and phones (if requested)', 'Dusting shelves and cabinets'] },
  { area: 'High-Touch Points', tasks: ['Sanitising door handles and light switches', 'Cleaning elevator buttons and touchscreens', 'Disinfecting shared equipment (printers, copiers)'] },
  { area: 'Kitchen / Lunchroom', tasks: ['Wiping benchtops and splashbacks', 'Cleaning sink and tapware', 'Emptying bins and replacing liners', 'Exterior wipe of fridge and microwave'] },
  { area: 'Bathrooms', tasks: ['Toilet cleaning (inside and outside)', 'Basin, tapware and mirror cleaning', 'Floor mopping with disinfectant', 'Bin emptying and liner replacement'] },
  { area: 'Reception & Common Areas', tasks: ['Vacuuming or mopping reception floor', 'Cleaning reception desk', 'Wiping down chairs and seating'] },
];

const notIncluded = [
  'Interior of fridge, microwave or oven',
  'Window cleaning (external)',
  'Carpet shampooing or steam cleaning',
  'Grout scrubbing',
  'Ceiling fans and high-level dusting',
  'Moving heavy furniture',
  'Bio-hazard or specialist cleaning',
];

export default function WhatIsIncludedInOfficeCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="What Is Included in Office Cleaning"
        serviceDescription="A professional office clean typically includes vacuuming, sanitising contact points, cleaning the kitchen and bathroom, emptying bins and mopping hard floors — with deep-clean tasks scheduled separately."
        serviceUrl="https://www.procleancorp.com.au/what-is-included-in-office-cleaning"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Deep Clean', 'Commercial Cleaning Sydney']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white max-w-3xl mx-auto">
            <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Office Cleaning Guide — 2026</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              What Is Included in a Professional Office Clean? (The Complete 2026 Checklist)
            </h1>
            <p className="text-xl mb-6 text-gray-100">
              Exactly what you should expect from every professional office clean — and what is typically not included.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>A professional office clean typically includes vacuuming all floor surfaces, sanitising all contact points (keyboards, door handles, desks), cleaning the kitchen and bathroom, emptying bins and mopping hard floors</strong> — with deep-clean tasks like window cleaning and carpet cleaning scheduled separately on a periodic basis.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-darkblue mb-8">Standard Office Cleaning Inclusions</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {included.map(({ area, tasks }, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-darkblue mb-3 text-lg">{area}</h3>
                <ul className="space-y-2">
                  {tasks.map((task, j) => (
                    <li key={j} className="flex items-start space-x-2 text-gray-700 text-sm">
                      <span className="text-greenprimary font-bold mt-0.5">✓</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-darkblue mb-4">What Is NOT Included in Standard Office Cleaning</h2>
            <p className="text-gray-700 mb-4">The following are typically periodic or add-on services — not included in a standard weekly clean unless specifically agreed:</p>
            <ul className="grid md:grid-cols-2 gap-2">
              {notIncluded.map((item, i) => (
                <li key={i} className="flex items-start space-x-2 text-gray-700 text-sm">
                  <span className="text-red-500 font-bold mt-0.5">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 border border-blueprimary/20 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-darkblue mb-4">Standard vs Deep Clean — What's the Difference?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blueprimary/10">
                    <th className="text-left p-3 font-semibold text-darkblue">Task</th>
                    <th className="text-center p-3 font-semibold text-darkblue">Regular Clean</th>
                    <th className="text-center p-3 font-semibold text-darkblue">Deep Clean</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Vacuuming & mopping', '✓', '✓'],
                    ['Bin emptying', '✓', '✓'],
                    ['Bathroom sanitisation', '✓', '✓'],
                    ['Kitchen benches & sink', '✓', '✓'],
                    ['Skirting boards & vents', '✗', '✓'],
                    ['Inside fridge/microwave', '✗', '✓'],
                    ['Carpet shampooing', '✗', '✓'],
                    ['Window cleaning (internal)', '✗', '✓'],
                    ['Behind furniture', '✗', '✓'],
                    ['Grout scrubbing', '✗', '✓'],
                  ].map(([task, reg, deep], i) => (
                    <tr key={i} className={`border-t border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="p-3 text-gray-700">{task}</td>
                      <td className={`p-3 text-center font-bold ${reg === '✓' ? 'text-greenprimary' : 'text-red-400'}`}>{reg}</td>
                      <td className={`p-3 text-center font-bold ${deep === '✓' ? 'text-greenprimary' : 'text-red-400'}`}>{deep}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Office Cleaning Inclusions</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-darkblue mb-2">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-darkblue mb-4">Related Resources</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Commercial Cleaning Checklist', href: '/commercial-cleaning-checklist' },
                { label: 'Office Cleaning Sydney', href: '/office-cleaning-sydney' },
                { label: 'How Often Should You Clean an Office', href: '/how-often-should-you-clean-an-office' },
                { label: 'Commercial Cleaning Cost Sydney', href: '/how-much-does-commercial-cleaning-cost' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get a Custom Office Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Tell us your size, frequency and inclusions — we'll give you a fixed price within 24 hours.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
