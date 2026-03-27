import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Warehouse Cleaning Seven Hills | ProCleanCorp',
  description: 'Warehouse cleaning in Seven Hills for manufacturing and distribution. Floor sweeping, scrubbing and sanitation. Fully insured. Free quote.',
  keywords: 'warehouse cleaning seven hills, industrial cleaning seven hills, manufacturing cleaning seven hills, distribution cleaning seven hills, combined warehouse office cleaning seven hills, commercial cleaning seven hills industrial',
  openGraph: {
    title: 'Warehouse Cleaning Seven Hills | ProCleanCorp',
    description: 'Warehouse and industrial cleaning in Seven Hills for manufacturing and distribution. Combined warehouse + office cleaning available. Free quote.',
    url: 'https://www.procleancorp.com.au/warehouse-cleaning-seven-hills',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Warehouse cleaning Seven Hills Western Sydney industrial' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/warehouse-cleaning-seven-hills' }
};

const faqs = [
  {
    question: 'Can you clean both the warehouse floor and office at our Seven Hills facility?',
    answer: 'Yes. ProCleanCorp offers a combined warehouse and office cleaning package for Seven Hills businesses — covering the warehouse floor, loading areas and amenities alongside the front office, reception and meeting rooms. This bundled contract saves you from managing two separate cleaning contractors and typically provides a better per-service rate. We can structure the cleaning schedule so the same team covers both areas in a single visit.'
  },
  {
    question: 'How much does warehouse cleaning cost in Seven Hills?',
    answer: 'Warehouse cleaning in Seven Hills costs from $55 per hour, with most standard commercial warehouse cleans (4–6 hours) ranging from $220–$400 per visit. Facilities that also require office cleaning can be packaged at a combined rate. Combined warehouse and office packages for Seven Hills mid-size facilities typically range from $350–$650 per visit depending on the size and frequency. ProCleanCorp provides fixed-price proposals after a free on-site assessment.'
  },
  {
    question: 'Do you offer weekly and fortnightly warehouse cleaning in Seven Hills?',
    answer: 'Yes. ProCleanCorp provides weekly, fortnightly and monthly warehouse cleaning programs in Seven Hills. For active manufacturing and distribution operations, weekly cleaning is typically recommended — particularly for floor maintenance and amenities. We also offer one-off deep cleans for lease-end inspections, new tenant fit-outs, and pre-audit clean-ups. All regular programs include a fixed price with no lock-in contract.'
  }
];

export default function WarehouseCleaningSevenHillsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Warehouse Cleaning Seven Hills"
        serviceDescription="ProCleanCorp provides warehouse cleaning in Seven Hills for the Norwest and Seven Hills industrial precincts, with floor sweeping, scrubbing and periodic sanitation programs."
        serviceUrl="https://www.procleancorp.com.au/warehouse-cleaning-seven-hills"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Combined Warehouse & Office Cleaning', 'Floor Scrubbing', 'Industrial Sweeping', 'Loading Dock Cleaning', 'Amenities Cleaning', 'Periodic Deep Cleans']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Seven Hills Warehouse & Industrial Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Warehouse Cleaning Seven Hills — Industrial Cleaners Western Sydney
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides warehouse and industrial cleaning in Seven Hills for manufacturing, distribution and trade businesses. Floor sweeping, scrubbing and sanitation — plus combined warehouse + office cleaning packages for businesses with both.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Combined Warehouse + Office &nbsp;|&nbsp; ✓ From $55/hr &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Warehouse cleaning Seven Hills Western Sydney industrial"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides warehouse cleaning in Seven Hills</strong> for the Norwest and Seven Hills industrial precincts, with floor sweeping, scrubbing and periodic sanitation programs. Seven Hills sits at the intersection of several major industrial corridors — many businesses here have both a warehouse floor and a front office, and our combined warehouse and office cleaning package means one contractor handles both.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Warehouse Cleaning Services in Seven Hills</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Seven Hills sits at the intersection of several major industrial corridors — the Old Windsor Road and Prospect Highway precincts are home to a mix of manufacturing, distribution, trade and light industrial businesses. A common characteristic of these businesses is that they have both a warehouse operation and a small front office — which means they need both industrial floor cleaning and standard office cleaning.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp's combined warehouse and office cleaning package is specifically designed for businesses like these. One contract, one team, one invoice — covering everything from the loading dock to the reception desk. This saves Seven Hills businesses from managing two separate cleaning contractors and typically offers a more competitive combined rate.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Seven Hills Warehouse Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Warehouse floor scrubbing', 'Industrial sweeping', 'Loading dock cleaning', 'High-bay cleaning', 'Amenities & lunchroom cleaning', 'Office & reception cleaning', 'Racking & shelving cleaning', 'Pressure washing', 'Sanitation programs', 'Bin room cleaning', 'After hours access', 'One-off deep cleans'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blueprimary/20 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-darkblue mb-3">Warehouse Cleaning Prices — Seven Hills (2026)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blueprimary/10">
                        <th className="text-left p-3 font-semibold text-darkblue">Service</th>
                        <th className="text-left p-3 font-semibold text-darkblue">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Warehouse only (per hour)', 'From $55/hr'],
                        ['Warehouse + office combined (per visit)', 'From $350'],
                        ['One-off warehouse deep clean', 'From $450'],
                        ['Fortnightly maintenance program', 'From $280/visit'],
                      ].map(([service, price], i) => (
                        <tr key={i} className="border-t border-gray-200">
                          <td className="p-3 text-gray-700">{service}</td>
                          <td className="p-3 text-gray-700 font-semibold">{price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Seven Hills Area Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Seven Hills', 'Blacktown', 'Toongabbie', 'Girraween', 'Prospect', 'Wentworthville', 'Pendle Hill', 'Northmead'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Warehouse + office cleaning packages. Seven Hills & surrounds.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Warehouse Cleaning Seven Hills</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-darkblue mb-2">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-darkblue mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Warehouse Cleaning Blacktown', href: '/warehouse-cleaning-blacktown' },
                { label: 'Gym Cleaning Seven Hills', href: '/gym-cleaning-seven-hills' },
                { label: 'Warehouse Cleaning Eastern Creek', href: '/warehouse-cleaning-eastern-creek' },
                { label: 'Office Cleaning Sydney', href: '/office-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Warehouse Cleaning Seven Hills — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Combined warehouse + office packages. One contract, one team.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
