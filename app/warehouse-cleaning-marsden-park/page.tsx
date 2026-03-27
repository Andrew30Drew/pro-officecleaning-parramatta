import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Warehouse Cleaning Marsden Park | ProCleanCorp',
  description: 'Warehouse and industrial cleaning in Marsden Park. Floor scrubbing, pressure washing, deep cleans for logistics and manufacturing. Fully insured. Free quote.',
  keywords: 'warehouse cleaning marsden park, industrial cleaning marsden park, factory cleaning marsden park, logistics cleaning marsden park, concrete floor cleaning marsden park, epoxy floor cleaning marsden park',
  openGraph: {
    title: 'Warehouse Cleaning Marsden Park | ProCleanCorp',
    description: 'Warehouse and industrial cleaning in Marsden Park for logistics and manufacturing. Floor scrubbing, pressure washing. Fully insured. Free quote.',
    url: 'https://www.procleancorp.com.au/warehouse-cleaning-marsden-park',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Warehouse cleaning Marsden Park industrial estate' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/warehouse-cleaning-marsden-park' }
};

const faqs = [
  {
    question: 'Do you clean warehouses in the Marsden Park industrial estate?',
    answer: 'Yes. ProCleanCorp provides warehouse cleaning throughout the Marsden Park industrial estate — including new-build facilities from Sydney\'s largest industrial developers. We clean all warehouse types from small trade units to large-format logistics warehouses. Our team is familiar with new-build industrial facilities and the requirements of tenants setting up operations for the first time.'
  },
  {
    question: 'What floor cleaning methods do you use for polished concrete warehouse floors?',
    answer: 'Polished concrete warehouse floors require specific cleaning — standard mops or improper chemicals can cause micro-scratching or strip the sealer. ProCleanCorp uses pH-neutral cleaning products compatible with polished concrete sealing systems, auto-scrubbers with soft-pad settings, and dry-sweep first protocols to remove abrasive grit before scrubbing. We also clean epoxy-coated floors with compatible non-abrasive products. We assess the floor type on-site before commencing any program.'
  },
  {
    question: 'Can you provide a regular warehouse cleaning schedule for our new Marsden Park facility?',
    answer: 'Yes. ProCleanCorp offers monthly, fortnightly and weekly warehouse cleaning programs for Marsden Park facilities. For new facilities, we recommend a detailed on-site assessment before quoting — this lets us identify floor coatings, access requirements and specific cleaning zones. We then provide a fixed-price proposal with a clear scope of works, which is ideal for new tenants setting their first operational cleaning budget.'
  }
];

export default function WarehouseCleaningMarsdenParkPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Warehouse Cleaning Marsden Park"
        serviceDescription="ProCleanCorp provides warehouse cleaning in Marsden Park, covering the rapidly growing Marsden Park industrial estate with floor scrubbing, pressure washing and periodic deep clean programs."
        serviceUrl="https://www.procleancorp.com.au/warehouse-cleaning-marsden-park"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Polished Concrete Floor Cleaning', 'Epoxy Floor Cleaning', 'Floor Scrubbing', 'Pressure Washing', 'Deep Clean Programs', 'Industrial Sweeping']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Marsden Park Warehouse & Industrial Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Warehouse Cleaning Marsden Park — Industrial & Logistics Cleaners
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides warehouse cleaning across Marsden Park's rapidly growing industrial estate. Floor scrubbing, pressure washing, deep cleans for logistics, manufacturing and new-build facilities. Polished concrete and epoxy floor specialists.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ New-Build Industrial Specialists &nbsp;|&nbsp; ✓ From $55/hr &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Warehouse cleaning Marsden Park industrial estate"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides warehouse cleaning in Marsden Park</strong>, covering the rapidly growing Marsden Park industrial estate with floor scrubbing, pressure washing and periodic deep clean programs. Marsden Park is one of Sydney's newest and largest industrial estates — we specialise in new-build facility cleaning including polished concrete and epoxy floor maintenance.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Warehouse Cleaning Services in Marsden Park</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Marsden Park's industrial estate is one of Sydney's newest and largest — many tenants are setting up operations for the first time and need a cleaning contractor familiar with new-build industrial facilities. New warehouses present specific challenges: polished concrete or epoxy-coated floors requiring careful product selection, construction dust management during initial fit-out, and establishing first-time cleaning programs for facilities with no cleaning history.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp has cleaned dozens of new industrial facilities across Western Sydney. We understand the requirements of modern warehouse floors, can advise on the right cleaning program from day one, and provide fixed-price proposals that fit your operational budget.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Marsden Park Warehouse Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Polished concrete floor cleaning', 'Epoxy floor cleaning', 'Industrial floor scrubbing', 'Construction dust removal', 'Pressure washing', 'Loading dock cleaning', 'High-bay cleaning', 'Racking & shelving cleaning', 'Amenities cleaning', 'Office & reception cleaning', 'Periodic deep clean programs', 'Post-fit-out cleaning'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blueprimary/20 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-darkblue mb-3">Warehouse Cleaning Prices — Marsden Park (2026)</h3>
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
                        ['Post-fit-out industrial clean', 'From $650'],
                        ['Polished concrete maintenance program', 'From $280/visit'],
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
                <h4 className="font-bold text-darkblue mb-3">Marsden Park Area Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Marsden Park', 'Riverstone', 'Schofields', 'Quakers Hill', 'Blacktown', 'Rouse Hill', 'Box Hill', 'Vineyard'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">New-build & established warehouse cleaning. Marsden Park & surrounds.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Warehouse Cleaning Marsden Park</h3>
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
                { label: 'Factory Cleaning Sydney', href: '/factory-cleaning-sydney' },
                { label: 'Warehouse Cleaning Eastern Creek', href: '/warehouse-cleaning-eastern-creek' },
                { label: 'Industrial Cleaning Sydney', href: '/industrial-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Warehouse Cleaning Marsden Park — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">New-build industrial specialists. Polished concrete & epoxy floor experts.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
