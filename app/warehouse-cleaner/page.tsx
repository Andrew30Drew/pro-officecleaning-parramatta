import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Warehouse Cleaner Sydney | Industrial Warehouse Cleaning Services NSW | Pro Clean Corp',
  description: 'Professional warehouse cleaner services in Sydney NSW. Industrial-grade floor cleaning, high bay cleaning, and full facility maintenance for warehouses and distribution centres. Call 1300 494 983.',
  keywords: [
    'warehouse cleaner',
    'warehouse cleaner Sydney',
    'warehouse cleaning Sydney NSW',
    'industrial warehouse cleaning',
    'warehouse floor cleaning Sydney',
    'warehouse cleaning company Sydney',
    'warehouse cleaning services NSW'
  ],
  openGraph: {
    title: 'Warehouse Cleaner Sydney | Pro Clean Corp Industrial Cleaning',
    description: 'Professional warehouse cleaning services across Sydney NSW. Industrial-grade equipment, trained teams, and flexible scheduling for warehouses of all sizes.',
    url: '/warehouse-cleaner',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Warehouse Cleaner Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warehouse Cleaner Sydney | Pro Clean Corp',
    description: 'Expert warehouse cleaning across Sydney. Industrial equipment, trained staff, competitive pricing.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/warehouse-cleaner' }
};

const warehouseAreas = [
  { name: 'Warehouse Cleaners Sydney', href: '/warehouse-cleaners-sydney' },
  { name: 'Auburn', href: '/warehouse-cleaning-auburn' },
  { name: 'Eastern Creek', href: '/warehouse-cleaning-eastern-creek' },
  { name: 'Marsden Park', href: '/warehouse-cleaning-marsden-park' },
  { name: 'Rydalmere', href: '/warehouse-cleaning-rydalmere' },
  { name: 'Seven Hills', href: '/warehouse-cleaning-seven-hills' },
];

export default function WarehouseCleanerPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Warehouse Cleaner Sydney"
        serviceDescription="Pro Clean Corp provides professional warehouse cleaner services across Sydney NSW. Industrial-grade cleaning equipment for warehouse floors, racking areas, loading docks, amenities, and full facility maintenance."
        serviceUrl="/warehouse-cleaner"
        serviceType="Warehouse Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Warehouse Floor Cleaning', 'High Bay & Racking Cleaning',
          'Loading Dock Cleaning', 'Amenities & Lunchroom Cleaning',
          'Office Within Warehouse Cleaning', 'Post-Construction Cleaning',
          'Pressure Washing', 'Industrial Degreasing'
        ]}
        faqs={[
          {
            question: 'What does a warehouse cleaner do?',
            answer: 'A warehouse cleaner provides professional industrial cleaning of warehouse facilities including floor sweeping and scrubbing, dust control in racking areas, loading dock cleaning, amenities and lunchroom maintenance, office area cleaning, and high-pressure cleaning of hard surfaces. Warehouse cleaners use industrial equipment suited to large-format commercial environments.'
          },
          {
            question: 'How often does a warehouse need to be cleaned?',
            answer: 'Most warehouses benefit from daily floor maintenance (sweeping and mopping key areas), weekly scrubber passes across the full floor area, and monthly deep cleans including racking, loading docks, and overhead areas. The right frequency depends on your product type, staff numbers, and industry compliance requirements.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-darkblue to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Industrial Cleaning Specialists
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Warehouse Cleaner Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides professional warehouse cleaner services across Sydney NSW. We use industrial-grade ride-on scrubbers, high-pressure washers, and industrial vacuum systems to keep your warehouse clean, safe, and compliant — from floor to racking to loading dock.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Free Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Ride-On Scrubber Machines</span>
                <span>✓ Industrial-Grade Products</span>
                <span>✓ WHS Compliant</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/warehouse.webp"
                alt="Warehouse cleaner Sydney industrial cleaning"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">150+</div>
                <div className="text-xs text-gray-500">Warehouses Serviced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            A <strong>warehouse cleaner</strong> from Pro Clean Corp brings industrial cleaning equipment and trained teams to maintain your warehouse to a professional standard — reducing slip hazards, controlling dust, and ensuring a safe, compliant working environment for your staff and visitors.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Warehouse Cleaning Services</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Warehouses present cleaning challenges that standard commercial cleaners simply can&apos;t handle. Large floor areas, heavy contamination from forklift traffic and product spills, high dusty racking systems, loading docks with vehicle exhaust residue — these require industrial cleaning equipment and experienced operators.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Pro Clean Corp warehouse cleaners bring ride-on scrubber machines, industrial pressure washers, HEPA-filtered vacuum systems, and the product knowledge to tackle grease, oil, concrete dust, and industrial soiling. We service warehouses from 500m² small distribution centres to 10,000m²+ logistics facilities across Greater Sydney.
              </p>
              <div className="space-y-3">
                {[
                  'Ride-on scrubber floor cleaning',
                  'Industrial pressure washing',
                  'High racking & shelf dusting',
                  'Loading dock degreasing',
                  'Amenities & lunchroom cleaning',
                  'WHS slip hazard management',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-greenprimary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Image
                src="/images/hero/hero4.jpg"
                alt="Warehouse cleaning team Sydney"
                className="rounded-2xl shadow-lg w-full h-56 object-cover"
                width={600}
                height={224}
                loading="lazy"
              />
              <div className="bg-blueprimary/5 p-6 rounded-xl border border-blueprimary/10">
                <h4 className="font-bold text-darkblue mb-3">Industrial Equipment We Use</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>🔄 Ride-on floor scrubbers</li>
                  <li>💨 Industrial vacuum systems</li>
                  <li>💧 High-pressure washers</li>
                  <li>🧹 Industrial sweeper machines</li>
                  <li>🫧 Degreasing equipment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cleaning Areas */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Warehouse Areas We Clean</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { area: 'Warehouse Floor', items: ['Concrete floor scrubbing', 'Oil & grease removal', 'Forklift lane cleaning', 'Slip hazard treatment', 'Floor line marking protection'] },
                { area: 'Storage & Racking', items: ['Shelf & racking dusting', 'Pallet zone cleaning', 'Vertical surface dedusting', 'Product storage area cleaning', 'Bin & basket cleaning'] },
                { area: 'Loading Dock', items: ['Dock floor degreasing', 'Vehicle exhaust residue removal', 'Dock door & seal cleaning', 'Bay area pressure washing', 'Spillage clean-up'] },
                { area: 'Amenities', items: ['Staff lunchroom cleaning', 'Bathroom & toilet cleaning', 'Locker room cleaning', 'Wash-down areas', 'Drinking fountain cleaning'] },
                { area: 'Office Within Warehouse', items: ['Office floor vacuuming', 'Desk & workstation clean', 'Window & glass cleaning', 'Kitchenette cleaning', 'Bathroom cleaning'] },
                { area: 'External Areas', items: ['External hardstand washing', 'Roller door cleaning', 'External bin areas', 'Perimeter path cleaning', 'Car park sweeping'] },
              ].map((section, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-darkblue mb-3">{section.area}</h4>
                  <ul className="space-y-1">
                    {section.items.map((item, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-center space-x-2">
                        <span className="text-greenprimary text-xs">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Warehouse Cleaning — Sydney Locations</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {warehouseAreas.map((area) => (
                <Link key={area.href} href={area.href} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Warehouse Cleaner Sydney</h3>
            <div className="space-y-6">
              {[
                { q: 'What does a warehouse cleaner do?', a: 'A warehouse cleaner provides industrial cleaning using ride-on scrubbers, pressure washers, and industrial vacuum systems. Services include floor scrubbing, racking dust removal, loading dock degreasing, amenities cleaning, and full facility maintenance to keep the warehouse safe and compliant.' },
                { q: 'How often does a warehouse need to be cleaned?', a: 'Most warehouses need daily floor maintenance, weekly scrubber passes across the full floor, and monthly deep cleans of racking, loading docks, and overhead areas. We tailor the frequency to your product type, staff numbers, and compliance requirements.' },
                { q: 'Do you use industrial scrubber machines for warehouse floors?', a: 'Yes. Pro Clean Corp uses ride-on and walk-behind floor scrubber machines for warehouse floors. This equipment delivers a thorough, consistent clean across large areas far more effectively than mop cleaning, and dramatically reduces drying time to minimise disruption to your operations.' },
                { q: 'Can you clean our warehouse outside of operating hours?', a: 'Yes. We offer after-hours, overnight, and weekend warehouse cleaning to work around your operations. Many of our clients prefer overnight cleaning to ensure the floor is dry and ready for forklift operations when the morning shift arrives.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Professional Warehouse Cleaner — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Keep your warehouse clean, safe, and WHS-compliant with Pro Clean Corp&apos;s industrial warehouse cleaning service across Sydney.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition">
                Get a Free Warehouse Quote
              </a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                1300 494 983
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
