import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Industrial Cleaning Service Sydney | Factory & Warehouse Cleaning NSW | Pro Clean Corp',
  description: 'Professional industrial cleaning service across Sydney NSW. Heavy-duty factory, warehouse, and industrial facility cleaning with industrial-grade equipment. Call 1300 494 983.',
  keywords: ['industrial cleaning service', 'industrial cleaning service Sydney', 'factory cleaning Sydney NSW', 'industrial facility cleaning', 'heavy industry cleaning Sydney'],
  openGraph: {
    title: 'Industrial Cleaning Service Sydney | Pro Clean Corp',
    description: 'Heavy-duty industrial cleaning service for factories, warehouses, and industrial facilities across Sydney NSW.',
    url: '/industrial-cleaning-service',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Industrial Cleaning Service Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Cleaning Service Sydney | Pro Clean Corp',
    description: 'Industrial cleaning service for factories and warehouses across Sydney.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/industrial-cleaning-service' }
};

export default function IndustrialCleaningServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Industrial Cleaning Service"
        serviceDescription="Pro Clean Corp provides professional industrial cleaning services for factories, warehouses, and industrial facilities across Sydney NSW using heavy-duty industrial equipment and trained teams."
        serviceUrl="/industrial-cleaning-service"
        serviceType="Industrial Cleaning"
        price="$$-$$$"
        additionalServices={['Factory Floor Cleaning', 'Industrial Degreasing', 'High-Pressure Washing', 'Production Area Cleaning', 'Amenities Cleaning', 'Industrial Waste Area Cleaning']}
        faqs={[
          { question: 'What is an industrial cleaning service?', answer: 'An industrial cleaning service provides heavy-duty cleaning for factories, warehouses, manufacturing facilities, and other industrial premises. It uses industrial-grade equipment including ride-on floor scrubbers, high-pressure washers, industrial vacuum systems, and specialist degreasers to address the high levels of contamination typical in industrial environments.' },
          { question: 'What industrial facilities do you clean?', answer: 'We clean warehouses, distribution centres, manufacturing plants, food processing facilities, automotive workshops, engineering facilities, recycling centres, and all other types of industrial premises across Sydney NSW.' }
        ]}
      />
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Heavy-Duty Industrial Cleaning</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Industrial Cleaning Service Sydney</h1>
              <p className="text-xl mb-8 text-gray-100">Pro Clean Corp delivers professional industrial cleaning services for factories, manufacturing plants, warehouses, and all industrial facilities across Sydney NSW. Heavy-duty equipment, industrial chemicals, and experienced teams for the toughest cleaning environments.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Get Industrial Quote</a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Industrial Equipment</span><span>✓ WHS Compliant</span><span>✓ 7 Days Available</span>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/warehouse.webp" alt="Industrial cleaning service Sydney" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">An <strong>industrial cleaning service</strong> from Pro Clean Corp goes far beyond standard commercial cleaning — bringing heavy-duty equipment, industrial chemicals, and trained operatives to tackle the unique contamination challenges of manufacturing, warehousing, and industrial environments across Sydney NSW.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Industrial Cleaning for Every Type of Facility</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Industrial environments present cleaning challenges that require specialist equipment and knowledge. Concrete floors contaminated with oil, grease, and chemical spillages; production equipment with built-up residue; loading areas covered in vehicle exhaust and tyre marks; high racking systems coated in dust — these all require industrial-grade solutions, not standard commercial cleaning.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Pro Clean Corp&apos;s industrial cleaning teams use ride-on floor scrubbers, hot and cold high-pressure washers, industrial vacuum systems with HEPA filtration, and commercial degreasers to deliver thorough, consistent results across all types of industrial facilities.</p>
              <div className="space-y-2">
                {['Manufacturing plants & factories', 'Warehouses & distribution centres', 'Food processing facilities', 'Automotive workshops', 'Engineering & fabrication facilities', 'Chemical storage areas', 'Recycling & waste facilities', 'Mining & resource facilities'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-greenprimary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Image src="/images/services/hero2.jpg" alt="Industrial cleaning team Sydney" className="rounded-2xl shadow-xl w-full h-96 object-cover" width={600} height={384} loading="lazy" />
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Industrial Cleaning Service</h3>
            <div className="space-y-4">
              {[
                { q: 'What is an industrial cleaning service?', a: 'Heavy-duty cleaning for factories, warehouses, and industrial facilities using industrial equipment including ride-on scrubbers, pressure washers, and vacuum systems to address the high contamination levels typical in industrial environments.' },
                { q: 'What industrial facilities do you clean?', a: 'Warehouses, manufacturing plants, food processing facilities, automotive workshops, engineering facilities, recycling centres, and all types of industrial premises across Sydney NSW.' },
                { q: 'What industrial cleaning equipment do you use?', a: 'Ride-on and walk-behind floor scrubbers, hot and cold pressure washers, industrial vacuum systems with HEPA filtration, commercial degreasers, and specialist cleaning agents appropriate for each facility type.' },
                { q: 'Can industrial cleaning services be done after hours?', a: 'Yes. We schedule industrial cleaning around your production shifts — overnight, weekends, or during planned shutdowns. We coordinate with your site management to minimise any impact on operations.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Industrial Cleaning Service — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">Heavy-duty industrial cleaning for Sydney factories, warehouses, and industrial facilities. Free site assessment available.</p>
            <div className="text-2xl font-bold text-greenprimary">Call 1300 494 983 Today</div>
          </div>
        </div>
      </section>
    </div>
  );
}
