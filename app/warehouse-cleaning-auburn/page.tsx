import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Warehouse Cleaning Auburn | ProCleanCorp Western Sydney',
  description: 'Professional warehouse cleaning in Auburn from $55/hr. Floor scrubbing, pressure washing, high-bay cleaning and industrial sanitation. Fully insured. Free quote.',
  keywords: 'warehouse cleaning auburn, industrial cleaning auburn, HACCP warehouse cleaning auburn, food processing cleaning auburn, warehouse floor scrubbing auburn, commercial cleaning auburn industrial',
  openGraph: {
    title: 'Warehouse Cleaning Auburn | ProCleanCorp Western Sydney',
    description: 'Professional warehouse cleaning in Auburn from $55/hr. Floor scrubbing, pressure washing, HACCP-compliant. Free quote.',
    url: 'https://www.procleancorp.com.au/warehouse-cleaning-auburn',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Warehouse cleaning Auburn Western Sydney industrial' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/warehouse-cleaning-auburn' }
};

const faqs = [
  {
    question: 'Do you provide HACCP-compliant warehouse cleaning in Auburn for food businesses?',
    answer: 'Yes. ProCleanCorp provides HACCP-compliant warehouse cleaning for Auburn\'s food processing and textile businesses. HACCP-aligned cleaning uses food-safe chemical products, documented cleaning schedules with verification records, and cleaning protocols that separate food contact surfaces from non-contact areas. We provide the HACCP cleaning records required for council food safety audits and third-party food safety certification programs.'
  },
  {
    question: 'How much does warehouse cleaning cost in Auburn per shift?',
    answer: 'Warehouse cleaning in Auburn costs from $55 per hour, with most single-shift industrial cleaning (4-6 hours) ranging from $220-$450 per visit depending on the warehouse size, floor type and specific requirements. HACCP-documented food processing cleans carry a small premium for the additional documentation and food-safe product requirements. We provide fixed-price proposals after a free on-site assessment.'
  },
  {
    question: 'Can you clean cool rooms and food processing areas in Auburn warehouses?',
    answer: 'Yes. ProCleanCorp provides cool room cleaning and food processing area cleaning for Auburn food businesses. Cool room cleaning uses food-safe disinfectants rated for low-temperature environments, anti-microbial products for condensation-prone surfaces, and documentation suitable for council food safety inspectors.'
  }
];

export default function WarehouseCleaningAuburnPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Warehouse Cleaning Auburn"
        serviceDescription="ProCleanCorp provides warehouse cleaning in Auburn from $55 per hour, covering floor scrubbing, pressure washing, high-bay cleaning and industrial sanitation for food, textile and logistics facilities."
        serviceUrl="https://www.procleancorp.com.au/warehouse-cleaning-auburn"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['HACCP-Compliant Cleaning', 'Cool Room Cleaning', 'Floor Scrubbing', 'Pressure Washing', 'High-Bay Cleaning', 'Food Safety Documentation']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Auburn Warehouse & Industrial Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Warehouse Cleaning Auburn — Industrial Cleaners from $55/hr
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides warehouse cleaning in Auburn from $55/hr — HACCP-compliant for food processing, floor scrubbing, pressure washing, cool room cleaning. Auburn's garment, textile and food industry specialists.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ HACCP-Compliant &nbsp;|&nbsp; ✓ From $55/hr &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Warehouse cleaning Auburn Western Sydney industrial"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides warehouse cleaning in Auburn from $55 per hour</strong>, covering floor scrubbing, pressure washing, high-bay cleaning and industrial sanitation for food, textile and logistics facilities. Auburn is one of Sydney's most active food processing and textile manufacturing zones — our HACCP-compliant cleaning addresses the specific requirements of these industries.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Warehouse Cleaning Services in Auburn</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Auburn is one of Sydney's most active food processing and textile manufacturing zones. The garment industry, food processing and logistics businesses that dominate Auburn's industrial estate have specific cleaning requirements — HACCP compliance for food contact areas, cool room sanitation, and industrial floor maintenance that handles the heavy soiling typical of manufacturing environments.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp is the natural choice for Auburn warehouse and food processing clients. Our HACCP-compliant cleaning uses food-safe chemical products with documented cleaning schedules and verification records — satisfying council food safety auditors and third-party certification requirements.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Auburn Warehouse Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Floor scrubbing & sweeping', 'Pressure washing', 'High-bay cleaning', 'Cool room & cool store cleaning', 'Food processing area cleaning', 'HACCP compliance documentation', 'Food-safe chemical products', 'Loading dock cleaning', 'Industrial sanitation', 'Mezzanine & racking cleaning', 'After hours & shift cleaning', 'Emergency spill response'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing box — AEO snippet target */}
              <div className="bg-blue-50 border border-blueprimary/20 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-darkblue mb-3">Warehouse Cleaning Prices — Auburn (2026)</h3>
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
                        ['Standard warehouse clean (per hour)', 'From $55/hr'],
                        ['HACCP food processing clean', 'From $65/hr'],
                        ['Cool room cleaning (per session)', 'From $180'],
                        ['Pressure washing (per day)', 'From $450'],
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
                <h4 className="font-bold text-darkblue mb-3">Auburn Area Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Auburn', 'Silverwater', 'Lidcombe', 'Berala', 'Regents Park', 'Homebush', 'Flemington', 'Rookwood'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">HACCP warehouse cleaning. Auburn & surrounds.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Warehouse Cleaning Auburn</h3>
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
                { label: 'Warehouse Cleaning Silverwater', href: '/warehouse-cleaning-silverwater' },
                { label: 'Commercial Cleaning Auburn', href: '/commercial-cleaning-auburn' },
                { label: 'Cool Room Cleaning Sydney', href: '/cool-room-cleaning-sydney' },
                { label: 'Industrial Cleaning Sydney', href: '/industrial-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Warehouse Cleaning Auburn — From $55/hr</h3>
            <p className="text-xl mb-4 text-gray-100">HACCP-compliant. Food processing specialists. Free on-site assessment.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
