import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Warehouse Cleaning | Professional Warehouse Cleaning Services Sydney NSW | Pro Clean Corp',
  description: 'Specialist warehouse cleaning services in Sydney NSW. Floor scrubbing, racking cleaning, dock areas, and industrial hygiene for warehouses and distribution centres. Call 1300 494 983.',
  keywords: [
    'warehouse cleaning',
    'warehouse cleaning Sydney',
    'warehouse cleaning services',
    'industrial warehouse cleaning NSW',
    'warehouse floor cleaning Sydney',
    'warehouse cleaners Sydney',
    'distribution centre cleaning',
    'Pro Clean Corp warehouse'
  ],
  openGraph: {
    title: 'Warehouse Cleaning Sydney | Pro Clean Corp',
    description: 'Professional warehouse cleaning for Sydney distribution centres, storage facilities, and industrial warehouses. Heavy-duty floor scrubbing, racking, and dock cleaning.',
    url: '/warehouse-cleaning',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Warehouse Cleaning Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warehouse Cleaning Sydney | Pro Clean Corp',
    description: 'Specialist warehouse cleaning services in Sydney NSW — floor scrubbing, racking, dock areas, and WHS compliance.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/warehouse-cleaning' }
};

const warehouseSuburbs = [
  { name: 'Auburn', slug: 'warehouse-cleaning-auburn' },
  { name: 'Eastern Creek', slug: 'warehouse-cleaning-eastern-creek' },
  { name: 'Marsden Park', slug: 'warehouse-cleaning-marsden-park' },
  { name: 'Rydalmere', slug: 'warehouse-cleaning-rydalmere' },
  { name: 'Seven Hills', slug: 'warehouse-cleaning-seven-hills' },
  { name: 'Warehouse Cleaners Sydney', slug: 'warehouse-cleaners-sydney' },
];

export default function WarehouseCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Warehouse Cleaning"
        serviceDescription="Specialist warehouse cleaning services across Sydney NSW. Heavy-duty floor scrubbing, racking cleaning, loading dock maintenance, and industrial hygiene for warehouses and distribution centres."
        serviceUrl="/warehouse-cleaning"
        serviceType="Warehouse & Industrial Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Warehouse Floor Scrubbing & Polishing',
          'Racking & Shelving Cleaning',
          'Loading Dock & Bay Cleaning',
          'Amenities & Lunchroom Cleaning',
          'High-Bay Dust Removal',
          'Concrete Floor Degreasing',
          'Stormwater Drain Maintenance',
          'WHS Compliance Cleaning'
        ]}
        faqs={[
          {
            question: 'What equipment do you use for warehouse floor cleaning?',
            answer: 'Pro Clean Corp uses commercial ride-on floor scrubbers, rotary scrubbers, and industrial vacuum systems designed for large concrete, epoxy, and sealed warehouse floors. Our equipment covers thousands of square metres per session and removes embedded grime, oil, and debris that a mop and bucket cannot reach.'
          },
          {
            question: 'How often should a warehouse be cleaned?',
            answer: 'The frequency depends on your warehouse operations. High-throughput distribution centres typically require daily aisle sweeping and weekly floor scrubbing. Lighter storage facilities may only need fortnightly or monthly cleaning. We recommend a site inspection to determine the right schedule for your specific operations and WHS obligations.'
          }
        ]}
      />

      {/* Hero — stats-forward banner layout */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Industrial & Warehouse Specialists
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Warehouse Cleaning Services Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Heavy-duty warehouse cleaning for distribution centres, storage facilities, and industrial warehouses across Sydney NSW. Ride-on scrubbers, industrial vacuums, and WHS-compliant processes.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Warehouse Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Ride-On Floor Scrubbers</span>
                <span>✓ WHS Compliant</span>
                <span>✓ 24/7 Scheduling</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/warehouse.webp"
                alt="Warehouse cleaning services Sydney NSW"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">50,000+</div>
                <div className="text-xs text-gray-500">m² Cleaned Per Week</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Warehouse cleaning</strong> is a specialist service that requires industrial-grade equipment, trained operators, and a deep understanding of WHS obligations. Pro Clean Corp delivers professional warehouse cleaning across Sydney, covering floor scrubbing, racking maintenance, dock areas, and amenities — keeping your facility clean, safe, and compliant.
          </p>
        </div>
      </section>

      {/* Comparison Table — unique section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Standard vs Pro Clean Corp Warehouse Cleaning</h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">See why professional warehouse cleaning delivers a measurably better result than in-house sweeping.</p>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="p-4 bg-gray-100 text-left text-gray-600 font-semibold rounded-tl-lg">Feature</th>
                  <th className="p-4 bg-gray-100 text-center text-gray-500 font-semibold">In-House Sweeping</th>
                  <th className="p-4 bg-blueprimary text-center text-white font-bold rounded-tr-lg">Pro Clean Corp</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Floor scrubbing (removes embedded grime)', '✗', '✓'],
                  ['Industrial ride-on equipment', '✗', '✓'],
                  ['Racking & high-bay cleaning', '✗', '✓'],
                  ['Oil & grease degreasing', 'Rarely', '✓ Every session'],
                  ['WHS documentation provided', '✗', '✓'],
                  ['Loading dock cleaning', '✗', '✓'],
                  ['Staff safety training included', '✗', '✓'],
                  ['Consistent quality audits', '✗', '✓'],
                ].map(([feat, basic, pro], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 font-medium text-gray-700">{feat}</td>
                    <td className="p-4 text-center text-gray-500">{basic}</td>
                    <td className="p-4 text-center font-bold text-greenprimary">{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Main Content + Sidebar */}
          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Warehouse Cleaning — Sydney NSW</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Sydney&apos;s warehouse and distribution precincts — from Eastern Creek and Wetherill Park to Rydalmere, Seven Hills, and Marsden Park — present unique cleaning challenges. Concrete floors accumulate oil, grease, dust, and pallet debris that ordinary mopping cannot remove. Our industrial ride-on scrubbers and heavy-duty degreasing agents eliminate ground-in contamination on every pass.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Beyond floors, Pro Clean Corp addresses every zone of your warehouse: racking and shelving, loading docks, amenities blocks, lunchrooms, offices, and perimeter areas. We coordinate with your shift supervisors to schedule cleaning around operational requirements — often overnight or during shift changeovers.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-darkblue mb-4">Warehouse Cleaning Scope</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Concrete floor scrubbing',
                    'Epoxy floor maintenance',
                    'Racking dust & debris removal',
                    'Loading dock deep clean',
                    'Pallet storage area cleaning',
                    'Amenities & lunchroom',
                    'Office areas within warehouse',
                    'External hardstand cleaning',
                    'Stormwater drain clearing',
                    'High-bay ledge dusting'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/services/warehouse.webp"
                alt="Industrial warehouse floor scrubbing Sydney"
                className="rounded-xl shadow-lg w-full h-56 object-cover mb-6"
                width={400}
                height={224}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl border border-blueprimary/20">
                <h4 className="font-bold text-darkblue mb-3">Warehouse Cleaning Areas</h4>
                <div className="grid grid-cols-1 gap-2">
                  {warehouseSuburbs.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} className="text-sm text-blueprimary hover:text-darkblue transition">
                      → {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-darkblue mb-6">Warehouse Cleaning — Frequently Asked Questions</h2>
          <div className="space-y-5 mb-12">
            {[
              { q: 'What equipment do you use for warehouse floor cleaning?', a: 'Pro Clean Corp uses commercial ride-on floor scrubbers, rotary scrubbers, and industrial vacuum systems. Our equipment covers thousands of square metres per session and removes embedded grime, oil, and debris that mop-and-bucket methods cannot reach.' },
              { q: 'How often should a warehouse be cleaned?', a: 'High-throughput distribution centres typically require daily aisle sweeping and weekly floor scrubbing. Lighter storage facilities may only need fortnightly or monthly cleaning. We recommend a free site inspection to determine the right schedule for your WHS obligations.' },
              { q: 'Can you work around our warehouse shifts?', a: 'Yes. We schedule warehouse cleaning around your operations — overnight, during shift changeovers, or in sections to maintain continuous workflow. We coordinate directly with your shift supervisors and site managers to minimise any disruption to inbound and outbound logistics.' },
              { q: 'Do you provide WHS-compliant cleaning documentation?', a: 'Yes. For all warehouse cleaning contracts, we provide Safe Work Method Statements (SWMS), Material Safety Data Sheets (MSDS) for all cleaning products, and site-specific induction records. This documentation supports your facility\'s WHS compliance obligations and audits.' }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Heavy-Duty Warehouse Cleaning — Sydney NSW</h3>
            <p className="text-xl mb-8 text-gray-100">Industrial-grade equipment. WHS-compliant processes. Flexible scheduling around your operations.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-10 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Warehouse Cleaning Quote
              </a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-10 py-3 rounded-full font-bold hover:bg-white/10 transition">
                1300 494 983
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
