import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Warehouse Cleaning Eastern Creek | ProCleanCorp',
  description: 'Professional warehouse and industrial cleaning in Eastern Creek. Sweeping, scrubbing and high-bay cleaning for logistics, 3PL and distribution centres. Free quote.',
  keywords: 'warehouse cleaning eastern creek, industrial cleaning eastern creek, 3PL warehouse cleaning eastern creek, logistics cleaning eastern creek, distribution centre cleaning eastern creek, OHS floor cleaning eastern creek',
  openGraph: {
    title: 'Warehouse Cleaning Eastern Creek | ProCleanCorp',
    description: 'Warehouse and industrial cleaning in Eastern Creek for logistics, 3PL and distribution centres. Floor scrubbing, high-bay cleaning. Free quote.',
    url: 'https://www.procleancorp.com.au/warehouse-cleaning-eastern-creek',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Warehouse cleaning Eastern Creek logistics distribution centre' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/warehouse-cleaning-eastern-creek' }
};

const faqs = [
  {
    question: 'Do you clean large-format logistics warehouses in Eastern Creek?',
    answer: 'Yes. ProCleanCorp provides warehouse cleaning for large-format logistics and distribution centre operations in Eastern Creek, including LOGOS, Goodman and ESR-managed facilities. Large-format warehouse cleaning includes industrial floor scrubbing, aisle sweeping, loading dock cleaning, high-bay cleaning and OHS-compliant wet floor management. We work with facility managers to deliver cleaning programs compatible with 24/7 warehouse operations.'
  },
  {
    question: 'Can you provide OHS-compliant floor cleaning programs for Eastern Creek distribution centres?',
    answer: 'Yes. All ProCleanCorp warehouse floor cleaning programs in Eastern Creek are OHS-compliant — including wet floor signage protocols, slip-resistant product use in high-traffic areas, and documentation of cleaning completion for workplace safety records. We also provide scheduled floor scrubbing programs that align with shift changeovers to minimise operational disruption.'
  },
  {
    question: 'What industrial cleaning equipment do you use for Eastern Creek warehouse floors?',
    answer: 'ProCleanCorp uses ride-on floor scrubbers, industrial sweepers and high-pressure washers for Eastern Creek warehouse floors. Equipment is selected based on floor type — polished concrete, epoxy coating, or sealed aggregate — and warehouse size. We bring all equipment to site; no client-side equipment provision is required. Our team is trained in safe equipment operation within live logistics environments.'
  }
];

export default function WarehouseCleaningEasternCreekPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Warehouse Cleaning Eastern Creek"
        serviceDescription="ProCleanCorp delivers warehouse cleaning in Eastern Creek for logistics, 3PL and distribution centre operations, with floor scrubbing, industrial sweeping and pressure washing programs."
        serviceUrl="https://www.procleancorp.com.au/warehouse-cleaning-eastern-creek"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Floor Scrubbing', 'Industrial Sweeping', 'High-Bay Cleaning', 'Loading Dock Cleaning', 'OHS-Compliant Floor Programs', 'Pressure Washing']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Eastern Creek Warehouse & Industrial Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Warehouse Cleaning Eastern Creek — Industrial Cleaners for Logistics Hubs
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers warehouse cleaning in Eastern Creek for logistics, 3PL and e-commerce distribution centres. Floor scrubbing, aisle sweeping, loading dock cleaning and OHS-compliant programs for live operations.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ 3PL & Logistics Specialists &nbsp;|&nbsp; ✓ OHS-Compliant &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Warehouse cleaning Eastern Creek logistics distribution centre"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp delivers warehouse cleaning in Eastern Creek</strong> for logistics, 3PL and distribution centre operations, with floor scrubbing, industrial sweeping and pressure washing programs. Eastern Creek is one of Australia's fastest-growing logistics precincts — we provide shift-compatible cleaning programs designed for large-format operations without disrupting throughput.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Warehouse Cleaning Services in Eastern Creek</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Eastern Creek is one of Australia's fastest-growing logistics precincts. Major institutional property developers — LOGOS, Goodman, ESR — have delivered millions of square metres of new warehouse space in this corridor. The tenants are logistics, 3PL, e-commerce fulfilment, cold chain and automotive parts distribution operations with demanding cleaning requirements.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp provides warehouse cleaning programs specifically designed for large-format logistics operations. Our OHS-compliant floor cleaning uses industrial ride-on scrubbers and sweepers, wet floor management protocols, and shift-aligned scheduling — so cleaning never interrupts your pick-and-pack throughput.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Eastern Creek Warehouse Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Industrial floor scrubbing', 'Ride-on sweeper programs', 'Loading dock cleaning', 'High-bay cleaning', 'Racking & mezzanine cleaning', 'OHS-compliant wet floor management', 'Pressure washing', 'Forklift aisle cleaning', 'Amenities & lunchroom cleaning', 'Graffiti removal', 'After hours & shift-compatible access', 'Emergency spill response'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blueprimary/20 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-darkblue mb-3">Warehouse Cleaning Prices — Eastern Creek (2026)</h3>
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
                        ['Large-format logistics warehouse (per shift)', 'From $450'],
                        ['Ride-on scrubber program (per visit)', 'From $380'],
                        ['Loading dock deep clean', 'From $220'],
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
                <h4 className="font-bold text-darkblue mb-3">Eastern Creek Area Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Eastern Creek', 'Rooty Hill', 'Minchinbury', 'Arndell Park', 'Penrith', 'Blacktown', 'Seven Hills', 'Prospect'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Logistics & distribution centre cleaning. Eastern Creek & surrounds.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Warehouse Cleaning Eastern Creek</h3>
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
                { label: 'Industrial Cleaning Sydney', href: '/industrial-cleaning-sydney' },
                { label: 'Warehouse Cleaning Seven Hills', href: '/warehouse-cleaning-seven-hills' },
                { label: 'Commercial Cleaning Sydney', href: '/commercial-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Warehouse Cleaning Eastern Creek — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Logistics & 3PL specialists. OHS-compliant. Shift-compatible scheduling.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
