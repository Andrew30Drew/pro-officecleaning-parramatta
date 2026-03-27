import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Strata Cleaning | Mixed-Use & Commercial Strata Cleaning Sydney | Pro Clean Corp',
  description: 'Specialist commercial strata cleaning for mixed-use developments, commercial buildings, and strata-titled properties in Sydney NSW. Common areas, lobbies, car parks, and facilities. Call 1300 494 983.',
  keywords: [
    'commercial strata cleaning',
    'commercial strata cleaning Sydney',
    'mixed use building cleaning Sydney',
    'commercial strata cleaners NSW',
    'strata common area cleaning Sydney',
    'commercial property strata cleaning',
    'strata cleaning company Sydney',
    'Pro Clean Corp strata cleaning'
  ],
  openGraph: {
    title: 'Commercial Strata Cleaning Sydney | Pro Clean Corp',
    description: 'Specialist commercial strata cleaning for mixed-use developments and commercial strata buildings across Sydney NSW.',
    url: '/commercial-strata-cleaning',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Strata Cleaning Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Strata Cleaning Sydney | Pro Clean Corp',
    description: 'Commercial strata cleaning for mixed-use buildings, office towers, and commercial complexes across Sydney.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-strata-cleaning' }
};

export default function CommercialStrataCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Strata Cleaning"
        serviceDescription="Specialist commercial strata cleaning services for mixed-use developments, commercial office buildings, and strata-titled commercial properties across Sydney NSW."
        serviceUrl="/commercial-strata-cleaning"
        serviceType="Commercial Strata Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Commercial Lobby & Atrium Cleaning',
          'Multi-Tenancy Corridor Cleaning',
          'Commercial Car Park Maintenance',
          'Shared Bathroom & Amenities Cleaning',
          'Commercial Bin Compound Cleaning',
          'Loading Dock Common Area Cleaning',
          'External Facade Ground Level Cleaning',
          'Mixed-Use Building Coordination'
        ]}
        faqs={[
          {
            question: 'What is commercial strata cleaning?',
            answer: 'Commercial strata cleaning refers to the cleaning of common areas and shared facilities in commercial strata-titled buildings — including office towers with multiple tenants, mixed-use developments combining retail/office/residential, commercial complexes with shared car parking, and business parks with common lobbies and amenities. Unlike residential strata, commercial strata buildings often have higher foot traffic, 7-day operations, and more complex access requirements.'
          },
          {
            question: 'How does cleaning a commercial strata building differ from residential?',
            answer: 'Commercial strata buildings typically have higher daily foot traffic, diverse tenant types with different operating hours, stricter presentation requirements in client-facing lobbies and lifts, loading docks and commercial waste areas requiring specialised cleaning, and multiple strata management entities to coordinate with. Pro Clean Corp has extensive experience managing these complexities across Sydney\'s CBD, Parramatta, Chatswood, and other commercial precincts.'
          }
        ]}
      />

      {/* Hero — two-column with stacked images right */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Commercial & Mixed-Use Specialists
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Commercial Strata Cleaning Services — Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp specialises in commercial strata cleaning for mixed-use developments, multi-tenancy commercial buildings, and strata-titled office complexes across Sydney NSW. We coordinate with multiple strata entities and building managers to deliver seamless, consistent common area cleaning.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Commercial Strata Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Multi-Strata Coordination</span>
                <span>✓ 7-Day Coverage Available</span>
                <span>✓ Commercial Grade Equipment</span>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="/images/services/strata.jpg"
                alt="Commercial strata cleaning Sydney lobby"
                className="rounded-2xl shadow-xl w-full h-52 object-cover"
                width={800}
                height={208}
                priority
              />
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/hero3.jpg"
                  alt="Commercial building strata cleaning"
                  className="rounded-xl shadow-lg w-full h-36 object-cover"
                  width={400}
                  height={144}
                  priority
                />
                <div className="bg-white/10 rounded-xl p-5 flex flex-col justify-center">
                  <div className="text-3xl font-bold text-white mb-1">75+</div>
                  <div className="text-sm text-gray-200">Commercial Strata Buildings</div>
                  <div className="text-3xl font-bold text-greenprimary mt-3">12yr</div>
                  <div className="text-sm text-gray-200">Sydney Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Commercial strata cleaning</strong> in Sydney involves coordinating cleaning services across multiple tenancies, common areas, and shared facilities in buildings where the expectations are significantly higher than a standard residential complex. Pro Clean Corp delivers structured, multi-entity cleaning programs that maintain commercial presentation standards while meeting the obligations of every strata owner in the building.
          </p>
        </div>
      </section>

      {/* Commercial vs Residential comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Commercial Strata vs Residential Strata Cleaning</h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">Commercial strata buildings present unique challenges that require a specialist approach.</p>
          <div className="overflow-x-auto mb-14">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blueprimary text-white">
                  <th className="p-4 text-left font-semibold rounded-tl-lg">Consideration</th>
                  <th className="p-4 text-center font-semibold">Residential Strata</th>
                  <th className="p-4 text-center font-semibold rounded-tr-lg">Commercial Strata</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Daily foot traffic', 'Low–medium', 'Very high (multi-tenancy)'],
                  ['Lobby presentation standard', 'Clean & tidy', 'Corporate / client-facing'],
                  ['Operating hours', 'Residents 24/7', 'Business hours + after-hours access'],
                  ['Cleaning frequency required', 'Weekly common areas', 'Daily lobbies, weekly car parks'],
                  ['Strata entities to coordinate', 'Single OC', 'Multiple OCs + building manager'],
                  ['Loading dock cleaning', 'Not applicable', 'Required regularly'],
                  ['Amenities types', 'Pool, gym, BBQ', 'End-of-trip, meeting rooms, cafes'],
                  ['Compliance documentation', 'Basic', 'Detailed WHS & insurance required'],
                ].map(([feature, resi, comm], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 font-medium text-gray-700">{feature}</td>
                    <td className="p-4 text-center text-gray-500">{resi}</td>
                    <td className="p-4 text-center font-semibold text-darkblue">{comm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Main Content + Sidebar */}
          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Why Commercial Strata Requires a Specialist Cleaner</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Mixed-use commercial strata buildings in Sydney&apos;s CBD, Parramatta, and North Sydney present a fundamentally different cleaning challenge from residential strata. Client-facing lobbies require hotel-standard presentation. End-of-trip facilities (showers, bike storage) need daily service. Loading docks and commercial waste compactors require industrial cleaning protocols.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp has served Sydney&apos;s commercial strata sector for over a decade, building the operational systems to manage multi-entity coordination, variable access scheduling, and the high-throughput commercial cleaning that these buildings demand. We work with building managers, facilities managers, and strata companies to deliver a seamless, single-provider solution.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-darkblue mb-4">Commercial Strata Cleaning — Full Scope</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    'Ground floor lobby & atrium',
                    'Lift lobbies on all levels',
                    'Lift cars & button panels',
                    'End-of-trip facilities',
                    'Multi-tenancy corridors',
                    'Shared amenity rooms',
                    'Commercial car park levels',
                    'Loading dock & service areas',
                    'External ground-level façade',
                    'Bin compound & waste bay'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/services/strata.jpg"
                alt="Commercial strata building cleaning"
                className="rounded-xl shadow-lg w-full h-56 object-cover mb-6"
                width={400}
                height={224}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Related Strata Services</h4>
                <ul className="space-y-2">
                  {[
                    { label: 'Strata Cleaning Services', href: '/strata-cleaning-services' },
                    { label: 'Professional Strata Cleaning', href: '/professional-strata-cleaning-sydney' },
                    { label: 'Strata Cleaning Prices', href: '/strata-cleaning-prices' },
                    { label: 'Commercial Cleaning', href: '/commercial-cleaning' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-blueprimary hover:text-darkblue transition">→ {link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-darkblue mb-6">Commercial Strata Cleaning — FAQs</h2>
          <div className="space-y-5 mb-12">
            {[
              { q: 'What is commercial strata cleaning?', a: 'Commercial strata cleaning refers to the cleaning of common areas in commercial strata-titled buildings — office towers with multiple tenants, mixed-use developments, commercial complexes with shared car parking, and business parks with common lobbies and amenities. Unlike residential strata, commercial buildings have higher foot traffic, diverse operating hours, and stricter presentation requirements.' },
              { q: 'How does cleaning a commercial strata building differ from residential?', a: 'Commercial strata buildings have significantly higher daily foot traffic, diverse tenant types with different operating hours, stricter presentation standards in client-facing lobbies and lifts, loading docks requiring specialised cleaning, and multiple strata management entities to coordinate with. Pro Clean Corp has extensive experience managing these complexities across Sydney.' },
              { q: 'Can you handle multiple commercial strata buildings under one contract?', a: 'Yes. We manage multi-building commercial strata contracts across Sydney, with a dedicated contract manager overseeing all buildings. Each building has its own cleaning schedule and checklist, but all reporting, invoicing, and escalations are handled through a single point of contact for your facilities team.' },
              { q: 'Do commercial strata buildings need cleaning more often than residential?', a: 'Generally yes. Commercial strata lobbies typically require daily service given the volume of daily foot traffic from staff, clients, and visitors. Car parks may need weekly sweeping. Shared bathrooms and end-of-trip facilities need daily or twice-daily service. The higher operational intensity demands a more frequent cleaning program.' }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Commercial Strata Cleaning — Sydney Specialists</h3>
            <p className="text-xl mb-8 text-gray-100">75+ commercial strata buildings across Sydney trust Pro Clean Corp for reliable, professional common area cleaning. Multi-entity coordination included.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-10 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Request a Commercial Strata Quote
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
