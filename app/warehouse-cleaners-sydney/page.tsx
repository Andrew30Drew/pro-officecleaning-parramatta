import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Warehouse Cleaners Sydney | Industrial Warehouse Cleaning Services NSW | Pro Clean Corp',
  description: 'Professional warehouse cleaners in Sydney NSW. Specialised industrial cleaning for storage facilities, distribution centres, manufacturing plants, and logistics hubs. Flexible scheduling, competitive rates. Call 1300 494 983.',
  keywords: [
    'warehouse cleaners Sydney',
    'warehouse cleaning Sydney NSW',
    'industrial warehouse cleaning',
    'warehouse cleaning services Sydney',
    'commercial warehouse cleaners',
    'distribution centre cleaning Sydney',
    'factory cleaning services NSW',
    'warehouse floor cleaning Sydney',
    'Pro Clean Corp warehouse cleaning'
  ],
  openGraph: {
    title: 'Warehouse Cleaners Sydney | Pro Clean Corp',
    description: 'Professional warehouse cleaners in Sydney NSW. Industrial cleaning for storage, distribution centres, and manufacturing plants.',
    url: '/warehouse-cleaners-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Warehouse Cleaners Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warehouse Cleaners Sydney | Pro Clean Corp',
    description: 'Professional warehouse cleaners in Sydney. Industrial cleaning for storage, distribution, and manufacturing facilities.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/warehouse-cleaners-sydney' }
};

const warehouseAreas = [
  { name: 'Auburn', slug: 'warehouse-cleaning-auburn' },
  { name: 'Eastern Creek', slug: 'warehouse-cleaning-eastern-creek' },
  { name: 'Marsden Park', slug: 'warehouse-cleaning-marsden-park' },
  { name: 'Rydalmere', slug: 'warehouse-cleaning-rydalmere' },
  { name: 'Seven Hills', slug: 'warehouse-cleaning-seven-hills' },
  { name: 'Campbelltown', slug: 'warehouse-cleaning-campbelltown' },
  { name: 'Wetherill Park', slug: 'commercial-cleaning-parramatta' },
  { name: 'Smithfield', slug: 'commercial-cleaning-parramatta' },
  { name: 'Blacktown', slug: 'commercial-cleaning-bankstown' },
  { name: 'Parramatta', slug: 'commercial-cleaning-parramatta' },
];

export default function WarehouseCleanersSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Warehouse Cleaners Sydney"
        serviceDescription="Professional warehouse cleaners in Sydney NSW providing specialised industrial cleaning for storage facilities, distribution centres, and manufacturing plants."
        serviceUrl="/warehouse-cleaners-sydney"
        serviceType="Warehouse Cleaning"
        price="$$-$$$$"
        additionalServices={[
          'Warehouse Floor Scrubbing',
          'Industrial Pressure Washing',
          'Racking & Shelving Cleaning',
          'Loading Dock Cleaning',
          'Forklift Area Maintenance',
          'Office & Amenities Cleaning'
        ]}
        faqs={[
          {
            question: 'What do warehouse cleaners in Sydney do?',
            answer: 'Sydney warehouse cleaners provide comprehensive industrial cleaning including floor scrubbing and degreasing, dust and debris removal, high-reach cleaning, racking and shelving wipe-down, loading dock cleaning, amenities maintenance, and pressure washing of hard surfaces. We work around operational hours to minimise disruption.'
          },
          {
            question: 'How often should a warehouse be cleaned?',
            answer: 'Most warehouses benefit from daily or weekly cleaning depending on the product handled and foot traffic. High-activity zones like loading docks and forklift paths require more frequent attention. We create custom schedules to match your operational needs and compliance requirements.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Industrial Specialists
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Warehouse Cleaners Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides professional warehouse cleaning across Sydney NSW. From floor scrubbing and degreasing to high-reach dust removal — we keep your facility safe, compliant, and operationally efficient.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Free Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Industrial Equipment</span>
                <span>✓ After-Hours Available</span>
                <span>✓ WHS Compliant</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/warehouse.webp"
                alt="Warehouse cleaners Sydney - Industrial cleaning services"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">15+ yrs</div>
                <div className="text-xs text-gray-500">Industrial Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Warehouse cleaners in Sydney</strong> provide specialised industrial cleaning for storage facilities, distribution centres, and manufacturing plants — using professional-grade equipment to maintain safe, compliant, and efficient warehouse environments across Western Sydney and beyond.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Warehouse Cleaning Services Across Sydney</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Warehouses present unique cleaning challenges that standard commercial cleaning companies are not equipped to handle. Concrete floors accumulate grease, oil, and dust. Racking systems trap debris. Loading docks are exposed to outdoor contaminants. Pro Clean Corp&apos;s warehouse cleaning specialists have the industrial equipment and expertise to tackle these challenges efficiently.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We service distribution centres, storage facilities, manufacturing plants, cold storage warehouses, logistics hubs, and light industrial facilities across Sydney — including Western Sydney&apos;s major industrial precincts in Wetherill Park, Eastern Creek, Marsden Park, Auburn, and Rydalmere.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Safe, Compliant Warehouse Environments</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Clean warehouses are safer warehouses. Slippery floors, accumulated dust, and cluttered work areas are major WHS hazards. Our systematic cleaning programs reduce these risks while helping your facility meet WHS Act compliance requirements and pass audits with confidence.
              </p>
            </div>
            <div>
              <Image
                src="/images/hero/hero3.jpg"
                alt="Industrial warehouse cleaning equipment Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Industrial Capabilities</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Ride-on floor scrubbers</li>
                  <li>✓ Industrial pressure washers</li>
                  <li>✓ High-reach equipment</li>
                  <li>✓ Degreasing chemicals</li>
                  <li>✓ Bulk waste removal</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Warehouse Cleaning Services We Provide</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Concrete floor scrubbing & degreasing',
                'Industrial pressure washing',
                'Racking & shelving cleaning',
                'Loading dock & bay cleaning',
                'High-reach cobweb & dust removal',
                'Forklift path maintenance',
                'Amenities & lunchroom cleaning',
                'Office area cleaning',
                'Waste & recycling area management',
                'Emergency spill response',
                'Mezzanine & stairwell cleaning',
                'External hardstand cleaning'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blueprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Warehouse Cleaning Locations — Sydney</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {warehouseAreas.map((area) => (
                <Link key={area.slug} href={`/${area.slug}`} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Related */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Related Industrial Cleaning Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Industrial Cleaning Companies', sub: 'Heavy-duty solutions', href: '/industrial-cleaning-companies-sydney' },
                { label: 'Commercial Cleaning', sub: 'All business types', href: '/commercial-cleaning-sydney' },
                { label: 'Office Cleaning', sub: 'Workplace hygiene', href: '/office-cleaning-sydney' },
                { label: 'Warehouse Cleaning', sub: 'Storage facilities', href: '/commercial-cleaning-parramatta' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                  <span className="font-bold text-gray-700 group-hover:text-blueprimary block mb-2">{item.label}</span>
                  <span className="text-xs text-gray-500">{item.sub}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">How Much Does Warehouse Cleaning Cost in Sydney?</h3>
            <p className="text-center text-gray-600 mb-8">Pricing based on facility size, floor type, and cleaning frequency.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blueprimary text-white">
                    <th className="p-4 rounded-tl-lg font-semibold">Facility Size</th>
                    <th className="p-4 font-semibold">Estimated Cost Per Visit</th>
                    <th className="p-4 rounded-tr-lg font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: 'Small warehouse (500–2,000 m²)', cost: '$400 – $700', best: 'Trade storage, small logistics' },
                    { size: 'Medium warehouse (2,000–5,000 m²)', cost: '$700 – $1,400', best: 'Distribution centres, factories' },
                    { size: 'Large facility (5,000–15,000 m²)', cost: '$1,400 – $3,000', best: 'Major logistics hubs' },
                    { size: 'Enterprise (15,000 m²+)', cost: 'Custom quote', best: 'Industrial parks, fulfilment centres' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-darkblue">{row.size}</td>
                      <td className="p-4 font-bold text-greenprimary text-lg">{row.cost}</td>
                      <td className="p-4 text-gray-600">{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-6">
              <a href="/contact-us" className="inline-block bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get Your Free Warehouse Cleaning Quote →
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Warehouse Cleaners Sydney</h3>
            <div className="space-y-6">
              {[
                { q: 'What do warehouse cleaners in Sydney do?', a: 'Sydney warehouse cleaners provide comprehensive industrial cleaning including floor scrubbing and degreasing, dust and debris removal, high-reach cleaning, racking and shelving wipe-down, loading dock cleaning, amenities maintenance, and pressure washing of hard surfaces. We work around operational hours to minimise disruption.' },
                { q: 'How often should a warehouse be cleaned?', a: 'Most warehouses benefit from daily or weekly cleaning depending on the product handled and foot traffic. High-activity zones like loading docks and forklift paths require more frequent attention. We create custom schedules to match your operational needs and WHS compliance requirements.' },
                { q: 'Can you clean around our warehouse operations?', a: 'Yes. Our warehouse cleaning teams are trained to work safely around active operations, racking systems, and moving equipment. We schedule cleaning to minimise disruption — including after-hours, weekend, and overnight cleans for 24/7 facilities.' },
                { q: 'Do you clean warehouse floors?', a: 'Absolutely. Warehouse floor cleaning is one of our core specialisations. We use industrial ride-on scrubbers, rotary scrubbing machines, pressure washers, and industrial degreasers to restore and maintain concrete, epoxy, and sealed floors to a clean, safe standard.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Professional Warehouse Cleaners — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Keep your warehouse clean, safe, and WHS-compliant with Pro Clean Corp&apos;s industrial cleaning specialists. Flexible scheduling, competitive rates.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              Call 1300 494 983 for Your Warehouse Cleaning Quote
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
