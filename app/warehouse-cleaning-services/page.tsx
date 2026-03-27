import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Warehouse Cleaning Services Sydney | Industrial Cleaning NSW | Pro Clean Corp',
  description: 'Professional warehouse cleaning services across Sydney NSW. Floor scrubbing, high-bay cleaning, loading dock degreasing, and full facility maintenance. Call 1300 494 983 for a free quote.',
  keywords: ['warehouse cleaning services', 'warehouse cleaning services Sydney', 'industrial warehouse cleaning NSW', 'warehouse floor cleaning Sydney', 'warehouse cleaning company Sydney'],
  openGraph: {
    title: 'Warehouse Cleaning Services Sydney | Pro Clean Corp',
    description: 'Professional warehouse cleaning services across Sydney — industrial scrubbers, loading dock cleaning, full facility programs.',
    url: '/warehouse-cleaning-services',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Warehouse Cleaning Services Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warehouse Cleaning Services Sydney | Pro Clean Corp',
    description: 'Industrial warehouse cleaning services across Sydney NSW.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/warehouse-cleaning-services' }
};

export default function WarehouseCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Warehouse Cleaning Services"
        serviceDescription="Pro Clean Corp provides professional warehouse cleaning services across Sydney NSW using industrial floor scrubbers, pressure washers, and heavy-duty cleaning products for warehouses and distribution centres."
        serviceUrl="/warehouse-cleaning-services"
        serviceType="Warehouse Cleaning"
        price="$$-$$$"
        additionalServices={['Floor Scrubbing & Sweeping', 'Loading Dock Cleaning', 'Racking & High-Bay Cleaning', 'Amenities Cleaning', 'Pressure Washing', 'Industrial Degreasing']}
        faqs={[
          { question: 'What are warehouse cleaning services?', answer: 'Warehouse cleaning services provide professional industrial cleaning for warehouse and distribution centre facilities. This includes floor scrubbing with ride-on machines, loading dock degreasing, racking area dusting, amenities cleaning, and pressure washing of hard surfaces.' },
          { question: 'How often should warehouse cleaning services be scheduled?', answer: 'Most warehouses need daily floor sweeping in active zones, weekly full-floor machine scrubbing, and monthly deep cleans including racking, loading docks, and overhead areas. We tailor frequency to your product type, staff numbers, and compliance requirements.' }
        ]}
      />
      <section className="relative bg-gradient-to-br from-darkblue to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Industrial Cleaning Specialists</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Warehouse Cleaning Services Sydney</h1>
              <p className="text-xl mb-8 text-gray-100">Pro Clean Corp delivers professional warehouse cleaning services across Sydney NSW. Industrial-grade floor scrubbers, pressure washers, and trained teams for warehouses of all sizes — from 500m² distribution centres to 20,000m² logistics facilities.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Get a Free Quote</a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Ride-On Scrubber Machines</span><span>✓ WHS Compliant</span><span>✓ All Warehouse Sizes</span>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/warehouse.webp" alt="Warehouse cleaning services Sydney" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">150+</div>
                <div className="text-xs text-gray-500">Warehouses Serviced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium"><strong>Warehouse cleaning services</strong> from Pro Clean Corp use industrial-grade equipment to keep your facility clean, safe, and WHS-compliant — reducing slip hazards, controlling dust, and maintaining a professional working environment for your staff, visitors, and clients.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Warehouse Cleaning Services</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Warehouses require specialised cleaning that standard commercial cleaners cannot provide. Large concrete floor areas, heavy contamination from forklift traffic and product handling, dusty racking systems, and loading docks with grease and vehicle residue all demand industrial equipment and experienced operators.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Our warehouse cleaning services include ride-on and walk-behind scrubber machines for efficient floor cleaning, industrial pressure washers for hard-surface degreasing, heavy-duty vacuum systems for dust control, and comprehensive programs covering every zone of your facility.</p>
              <div className="grid grid-cols-2 gap-3">
                {['Ride-on floor scrubbing', 'Industrial pressure washing', 'Loading dock degreasing', 'Racking area dusting', 'Amenities & lunchroom', 'Office-in-warehouse', 'WHS hazard management', 'After-hours scheduling'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Image src="/images/services/hero1.jpg" alt="Warehouse cleaning team Sydney" className="rounded-2xl shadow-xl w-full h-96 object-cover" width={600} height={384} loading="lazy" />
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Warehouse Cleaning Service Locations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: 'Warehouse Cleaners Sydney', href: '/warehouse-cleaners-sydney' },
                { name: 'Auburn', href: '/warehouse-cleaning-auburn' },
                { name: 'Eastern Creek', href: '/warehouse-cleaning-eastern-creek' },
                { name: 'Marsden Park', href: '/warehouse-cleaning-marsden-park' },
                { name: 'Rydalmere', href: '/warehouse-cleaning-rydalmere' },
                { name: 'Seven Hills', href: '/warehouse-cleaning-seven-hills' },
                { name: 'Brookvale', href: '/warehouse-cleaning-brookvale' },
                { name: 'Campbelltown', href: '/warehouse-cleaning-campbelltown' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">{link.name}</Link>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Warehouse Cleaning Services</h3>
            <div className="space-y-4">
              {[
                { q: 'What are warehouse cleaning services?', a: 'Professional industrial cleaning for warehouses using floor scrubbers, pressure washers, and vacuum systems. Covers floor scrubbing, loading dock degreasing, racking dust control, amenities, and full facility maintenance.' },
                { q: 'How often should warehouse cleaning services be scheduled?', a: 'Daily floor sweeping in high-traffic zones, weekly full-floor machine scrubbing, and monthly deep cleans. We tailor the program to your specific facility, product type, and compliance requirements.' },
                { q: 'Do you use industrial floor scrubber machines?', a: 'Yes. We use ride-on and walk-behind floor scrubber machines for warehouse floors. These deliver a thorough, consistent clean across large areas far more effectively than manual mopping, with quick dry times to minimise operational disruption.' },
                { q: 'Can warehouse cleaning services be done outside operating hours?', a: 'Yes. We offer after-hours, overnight, and weekend warehouse cleaning to work around your operations. Most clients prefer overnight cleaning so the floor is dry and ready for forklift operations when the morning shift starts.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Warehouse Cleaning Services — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">Keep your warehouse safe, clean, and compliant with Pro Clean Corp. Free site assessment for all Sydney warehouse facilities.</p>
            <div className="text-2xl font-bold text-greenprimary">1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
