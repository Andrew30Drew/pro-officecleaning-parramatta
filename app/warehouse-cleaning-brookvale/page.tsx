import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Warehouse Cleaning Brookvale | Industrial Cleaning Northern Beaches NSW | Pro Clean Corp',
  description: 'Professional warehouse cleaning in Brookvale NSW. Industrial floor scrubbing, loading dock cleaning, and full facility maintenance for Brookvale warehouses. Call 1300 494 983.',
  keywords: ['warehouse cleaning Brookvale', 'Brookvale warehouse cleaning', 'industrial cleaning Brookvale NSW', 'warehouse cleaners Northern Beaches', 'warehouse cleaning Warringah'],
  openGraph: {
    title: 'Warehouse Cleaning Brookvale | Pro Clean Corp',
    description: 'Professional warehouse cleaning services in Brookvale and the Northern Beaches industrial area.',
    url: '/warehouse-cleaning-brookvale',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Warehouse Cleaning Brookvale NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warehouse Cleaning Brookvale | Pro Clean Corp',
    description: 'Industrial warehouse cleaning in Brookvale and Northern Beaches NSW.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/warehouse-cleaning-brookvale' }
};

export default function WarehouseCleaningBrookvalePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Warehouse Cleaning Brookvale"
        serviceDescription="Pro Clean Corp provides professional warehouse cleaning in Brookvale NSW and across the Northern Beaches industrial precinct. Industrial floor scrubbing, loading dock cleaning, and full facility maintenance."
        serviceUrl="/warehouse-cleaning-brookvale"
        serviceType="Warehouse Cleaning"
        price="$$-$$$"
        additionalServices={['Floor Scrubbing', 'Loading Dock Cleaning', 'Racking Area Cleaning', 'Amenities Cleaning', 'Pressure Washing', 'After-Hours Cleaning']}
        faqs={[
          { question: 'Do you provide warehouse cleaning in Brookvale?', answer: 'Yes. Pro Clean Corp provides professional warehouse cleaning throughout Brookvale and the Northern Beaches industrial precinct including Warringah Industrial Area. We service warehouses, distribution centres, and industrial facilities of all sizes.' },
          { question: 'What warehouse areas do you clean in Brookvale?', answer: 'We clean warehouse floors (ride-on scrubbing), loading docks, racking areas, office and administration zones within warehouses, amenities and lunchrooms, and external hardstand areas across all Brookvale warehouse facilities.' }
        ]}
      />
      <section className="relative bg-gradient-to-br from-darkblue to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Northern Beaches Warehouse Cleaning</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Warehouse Cleaning Brookvale</h1>
              <p className="text-xl mb-8 text-gray-100">Pro Clean Corp provides professional warehouse cleaning throughout Brookvale and the Northern Beaches industrial area. Local teams with industrial-grade equipment — ride-on floor scrubbers, pressure washers, and trained operatives — servicing the Warringah industrial precinct and surrounds.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Get a Free Quote</a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Local Brookvale Teams</span><span>✓ Industrial Equipment</span><span>✓ After-Hours Available</span>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/warehouse.webp" alt="Warehouse cleaning Brookvale NSW" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium"><strong>Warehouse cleaning in Brookvale</strong> from Pro Clean Corp keeps Northern Beaches industrial facilities clean, safe, and compliant. Brookvale is home to a significant industrial precinct with warehousing, light manufacturing, and distribution operations — and our local teams understand the area&apos;s specific business environment.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Warehouse Cleaning in Brookvale & Northern Beaches</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Brookvale&apos;s industrial precinct, centred around the Warringah Mall corridor, hosts a diverse mix of warehouses, light manufacturing, and trade businesses approximately 18km north of Sydney CBD. Pro Clean Corp services this area with local teams who know the precinct and can respond quickly to your cleaning needs.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">We provide warehouse cleaning for all types of Brookvale industrial facilities — from small trade warehouses to larger distribution operations. Our teams work overnight and on weekends to minimise disruption to your operations.</p>
              <div className="space-y-2">
                {['Ride-on floor scrubbing', 'Loading dock cleaning', 'Racking area dusting', 'Amenities & lunchroom', 'Office-in-warehouse areas', 'After-hours scheduling'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-greenprimary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Image src="/images/services/hero4.jpg" alt="Warehouse cleaning team Brookvale" className="rounded-2xl shadow-xl w-full h-full object-cover max-h-80" width={600} height={320} loading="lazy" />
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Nearby Areas We Also Service</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Dee Why', 'Frenchs Forest', 'Warriewood', 'Mona Vale', 'Terrey Hills', 'Manly Vale', 'North Manly', 'All Sydney Warehouses'].map((area) => (
                <Link key={area} href="/warehouse-cleaners-sydney" className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">{area}</Link>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Warehouse Cleaning Brookvale</h3>
            <div className="space-y-4">
              {[
                { q: 'Do you provide warehouse cleaning in Brookvale?', a: 'Yes. Pro Clean Corp services warehouses throughout Brookvale and the Northern Beaches industrial precinct with local teams and industrial-grade cleaning equipment.' },
                { q: 'What industrial areas near Brookvale do you cover?', a: 'We service the entire Northern Beaches region including Brookvale, Dee Why, Frenchs Forest, Terrey Hills, Warriewood, and all surrounding industrial areas.' },
                { q: 'Can you clean our Brookvale warehouse overnight?', a: 'Yes. After-hours and overnight warehouse cleaning is available for all Brookvale facilities. We work around your operational hours to ensure the floor is dry and ready for staff when the morning shift begins.' },
                { q: 'How quickly can you start warehouse cleaning in Brookvale?', a: 'We can typically start a new Brookvale warehouse cleaning contract within 5–7 business days after a site assessment and agreement. Call 1300 494 983 to arrange a free site visit.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Warehouse Cleaning Brookvale NSW</h3>
            <p className="text-xl mb-6 text-gray-100">Professional warehouse cleaning for Brookvale and Northern Beaches industrial facilities. Free site assessment available.</p>
            <div className="text-2xl font-bold text-greenprimary">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
