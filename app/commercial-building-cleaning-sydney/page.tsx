import Image from 'next/image';
import { Metadata } from 'next';

import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Building Cleaning Sydney | Multi-Floor & High-Rise Buildings | Pro Clean Corp',
  description: 'Expert commercial building cleaning across Sydney. Multi-floor offices, high-rise buildings, A-grade & B-grade commercial buildings. Contracted cleaning. Call 1300 494 983.',
  keywords: [
    'commercial building cleaning Sydney',
    'commercial building cleaners Sydney NSW',
    'office building cleaning Sydney',
    'high rise building cleaning Sydney',
    'multi floor building cleaning Sydney',
    'A-grade commercial cleaning Sydney',
    'building management cleaning Sydney'
  ],
  openGraph: {
    title: 'Commercial Building Cleaning Sydney | Pro Clean Corp',
    description: 'Specialist commercial building cleaning for multi-floor offices, high-rise and A-grade buildings across Sydney NSW.',
    url: '/commercial-building-cleaning-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Building Cleaning Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Building Cleaning Sydney | Pro Clean Corp',
    description: 'Multi-floor and high-rise commercial building cleaning across Sydney. Professional, contracted, consistent.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-building-cleaning-sydney' }
};

export default function CommercialBuildingCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Building Cleaning Sydney"
        serviceDescription="Expert commercial building cleaning across Sydney NSW — multi-floor offices, high-rise buildings, A-grade and B-grade commercial buildings with dedicated account management."
        serviceUrl="/commercial-building-cleaning-sydney"
        serviceType="Commercial Building Cleaning"
        price="$$$"
        additionalServices={[
          'Lobby & Atrium Cleaning',
          'Multi-Floor Office Cleaning',
          'Lift & Stairwell Cleaning',
          'External Facade Cleaning',
          'Carpark Level Cleaning',
          'Rooftop & Plant Room Cleaning'
        ]}
        faqs={[
          {
            question: 'Do you clean high-rise commercial buildings in Sydney?',
            answer: 'Yes. Pro Clean Corp has extensive experience cleaning multi-floor and high-rise commercial buildings across Sydney CBD and suburban business districts. Our teams are trained in working within managed building environments with security, access, and contractor management requirements.'
          },
          {
            question: 'How is commercial building cleaning structured for multi-tenanted buildings?',
            answer: 'For multi-tenanted commercial buildings, cleaning programs typically cover base building areas (lobbies, lifts, amenities, corridors) under a building management contract, with separate programs for individual tenancy fit-outs. Pro Clean Corp can manage both under a single contract for simplicity.'
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
                Multi-Floor Building Specialists
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Building Cleaning Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides specialist commercial building cleaning for Sydney&apos;s office towers, suburban business parks, and managed commercial complexes. From A-grade CBD buildings to local two-storey offices, we deliver consistent quality at every level.
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
                <span>✓ High-Rise Capable</span>
                <span>✓ Managed Building Experience</span>
                <span>✓ Digital Audit Reports</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial building cleaning Sydney NSW"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">A-Grade</div>
                <div className="text-xs text-gray-500">Building Standard Capability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Commercial building cleaning in Sydney</strong> requires a cleaning partner who understands managed building environments — from contractor management systems and access protocols to base building vs tenancy cleaning responsibilities. Pro Clean Corp works seamlessly within facility management and property management structures to deliver building-wide cleaning excellence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Sydney Commercial Building Cleaning — From Lobby to Rooftop</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                A commercial building is a complex ecosystem with distinct cleaning requirements at every level. Ground floor lobbies are the first impression — they need immaculate presentation throughout the business day. Upper floor corridors and amenities need daily maintenance. Carparks, plant rooms, and external areas need periodic heavy-duty cleaning.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp&apos;s commercial building cleaning teams are experienced in working within managed building environments, understanding the protocols required by facility managers — from contractor induction to digital access management, OH&S compliance, and NABERS building management standards.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Base Building vs Tenancy Cleaning</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Commercial buildings typically require two distinct cleaning scopes: base building cleaning (lobbies, lifts, toilets, corridors, carparks) managed by the building owner, and individual tenancy cleaning (individual offices, fit-outs) managed by each tenant. Pro Clean Corp can coordinate both under one provider, simplifying management and ensuring consistent results throughout the building.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/hero6.jpg"
                alt="Commercial building cleaning team at work Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Building Cleaning Areas</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Ground floor lobbies</li>
                  <li>✓ Lifts & lift lobbies</li>
                  <li>✓ Stairwells & fire stairs</li>
                  <li>✓ Bathrooms & end-of-trip</li>
                  <li>✓ Rooftop & plant areas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Building Types */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Building Types We Clean in Sydney</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'A-Grade CBD office towers',
                'B & C-grade suburban office buildings',
                'Mixed-use commercial/residential buildings',
                'Strata-titled commercial complexes',
                'Medical & specialist centre buildings',
                'Retail centre & shopping precinct cleaning',
                'Technology & innovation park campuses',
                'Government & council building facilities',
                'Heritage & prestige commercial properties',
                'Business park multi-tenancy campuses',
                'Data centre & secure facility cleaning',
                'University & educational buildings'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-8 text-center">Our Building Cleaning Management Process</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: '1', title: 'Building Audit', desc: 'Full assessment of all building zones, access points, and cleaning requirements.' },
                { step: '2', title: 'Scope Development', desc: 'Detailed cleaning specification for base building and tenancy areas.' },
                { step: '3', title: 'Team Assignment', desc: 'Dedicated building team allocated with security clearances and inductions completed.' },
                { step: '4', title: 'Scheduled Execution', desc: 'Daily and periodic cleaning delivered to specification with digital sign-off.' },
                { step: '5', title: 'Monthly Reporting', desc: 'Quality audit reports provided to facility manager or building owner monthly.' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-greenprimary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">{item.step}</div>
                  <h4 className="font-bold text-darkblue text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Commercial Building Cleaning Sydney</h3>
            <div className="space-y-6">
              {[
                { q: 'Do you clean high-rise commercial buildings in Sydney?', a: 'Yes. Pro Clean Corp has extensive experience with multi-floor and high-rise commercial buildings across Sydney CBD and suburban business districts. Our teams are trained in managed building environments with security, access control, and contractor management requirements.' },
                { q: 'How is commercial building cleaning structured for multi-tenanted buildings?', a: 'Multi-tenanted buildings typically have base building cleaning (lobbies, lifts, toilets, corridors, carparks) under a building management contract, plus separate programs for individual tenancies. Pro Clean Corp can manage both under a single provider arrangement for operational simplicity.' },
                { q: 'Do you work with facility management companies?', a: 'Yes. Pro Clean Corp regularly works alongside facility management firms as the cleaning contractor for commercial building portfolios. We integrate with FM reporting systems, attend regular building management meetings, and provide documentation required by FM compliance frameworks.' },
                { q: 'Can you provide cleaning staff for a new commercial building fitout?', a: 'Yes. We offer post-construction and builder\'s clean services for new commercial building fitouts and refurbishments. These include dust control, window cleaning, hard floor sealing, and detailed cleaning to prepare the building for occupation.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Commercial Building Cleaning — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              From ground floor lobby to rooftop plant room. Pro Clean Corp delivers professional building-wide cleaning for Sydney&apos;s commercial buildings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Building Cleaning Quote
              </a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                Call 1300 494 983
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
