import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Queenscliff | Professional Strata Cleaners Northern Beaches Sydney | Pro Clean Corp',
  description: 'Professional strata cleaning in Queenscliff, Northern Beaches Sydney. Expert strata cleaners for beachside apartment buildings, townhouse complexes, and residential strata in Queenscliff and Manly area. Call 1300 494 983.',
  keywords: [
    'strata cleaning Queenscliff',
    'strata cleaners Queenscliff NSW',
    'strata cleaning Northern Beaches Sydney',
    'Queenscliff strata cleaning services',
    'building cleaning Queenscliff',
    'strata maintenance Queenscliff',
    'apartment cleaning Queenscliff Northern Beaches',
    'common area cleaning Queenscliff',
    'Pro Clean Corp Northern Beaches'
  ],
  openGraph: {
    title: 'Strata Cleaning Queenscliff | Pro Clean Corp',
    description: 'Professional strata cleaning in Queenscliff, Northern Beaches Sydney. Expert cleaners for beachside strata buildings and apartment complexes.',
    url: '/strata-cleaning-queenscliff',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Strata Cleaning Queenscliff Northern Beaches Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strata Cleaning Queenscliff | Pro Clean Corp',
    description: 'Professional strata cleaning services in Queenscliff, Northern Beaches Sydney. Call 1300 494 983.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/strata-cleaning-queenscliff' }
};

const nearbyAreas = [
  { name: 'Manly', slug: 'strata-cleaning-manly' },
  { name: 'Freshwater', slug: 'strata-cleaning-freshwater' },
  { name: 'Curl Curl', slug: 'strata-cleaning-curl-curl' },
  { name: 'Narraweena', slug: 'strata-cleaning-narraweena' },
  { name: 'Dee Why', slug: 'strata-cleaning-dee-why' },
  { name: 'Collaroy', slug: 'strata-cleaning-collaroy' },
  { name: 'Brookvale', slug: 'strata-cleaning-brookvale' },
  { name: 'Manly Vale', slug: 'strata-cleaning-manly-vale' },
];

export default function StrataCleaningQueenscliffPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Queenscliff"
        serviceDescription="Professional strata cleaning services in Queenscliff, Northern Beaches Sydney. Expert cleaners for beachside apartment buildings, strata complexes, and residential common areas in Queenscliff and the Manly area."
        serviceUrl="/strata-cleaning-queenscliff"
        serviceType="Strata Cleaning"
        price="$$"
        additionalServices={[
          'Common Area & Lobby Cleaning',
          'Coastal Building Salt & Sand Control',
          'Stairwell & Lift Maintenance Cleaning',
          'Bin Room & Waste Area Services',
          'Car Park Cleaning',
          'Building Exterior Washing'
        ]}
        faqs={[
          {
            question: 'Do you provide strata cleaning in Queenscliff?',
            answer: 'Yes. Pro Clean Corp services Queenscliff and the broader Northern Beaches area, providing regular strata cleaning for beachside apartment buildings and residential complexes.'
          },
          {
            question: 'How does coastal living affect strata cleaning in Queenscliff?',
            answer: 'Beachside buildings in Queenscliff require additional attention to salt, sand, and moisture management. Our cleaning methods are adapted for coastal strata buildings to protect surfaces and maintain a clean, presentable appearance year-round.'
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
                Northern Beaches Sydney
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Strata Cleaning Queenscliff
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides specialist strata cleaning for Queenscliff&apos;s beachside apartment buildings and strata complexes. Expert coastal building cleaning — salt, sand, and moisture management for Northern Beaches properties.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Free Strata Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Coastal Building Specialists</span>
                <span>✓ Salt & Sand Management</span>
                <span>✓ Strata Manager Preferred</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/strata.jpg"
                alt="Strata cleaning Queenscliff Northern Beaches Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">18 km</div>
                <div className="text-xs text-gray-500">From Sydney CBD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Strata cleaning in Queenscliff</strong> requires specialist knowledge of coastal building environments. Located on Sydney&apos;s Northern Beaches, approximately 18 km from the CBD, Queenscliff&apos;s beachside apartment buildings face unique cleaning challenges including salt air corrosion, windblown sand in common areas, and high resident foot traffic. Pro Clean Corp provides cleaning protocols specifically designed for these conditions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Coastal Strata Cleaning — Queenscliff & Northern Beaches</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Queenscliff is one of Sydney&apos;s most desirable beachside communities, nestled between Manly and Freshwater on the Northern Beaches. The suburb is characterised by a mix of older-style apartment buildings, newer residential complexes, and beachside units that are highly sought after by owner-occupiers and investors alike.
              </p>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Strata buildings in Queenscliff face cleaning challenges unique to coastal environments: salt air deposits on windows and glass balustrades, windblown sand accumulating in lobbies and corridors, and the general premium on cleanliness that comes with beachside living. Residents and owners have high expectations for common area presentation — and rightly so.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Our Approach to Queenscliff Strata Cleaning</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp adapts its standard strata cleaning protocols for Queenscliff&apos;s environment. This includes more frequent floor cleaning to manage sand, specialist glass and window cleaning to handle salt film, and additional attention to external common areas and balconies where coastal elements have the most impact.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/hero2.jpg"
                alt="Strata cleaning team Queenscliff Northern Beaches apartment building"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-greenprimary/10 p-6 rounded-xl border border-greenprimary/20">
                <h4 className="font-bold text-darkblue mb-3">Queenscliff Service Info</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ LGA: Northern Beaches</li>
                  <li>✓ Distance from CBD: ~18 km</li>
                  <li>✓ Coastal building specialists</li>
                  <li>✓ Salt & sand protocols</li>
                  <li>✓ Strata manager liaison</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Coastal Cleaning Features */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Coastal Strata Cleaning — What&apos;s Different at Queenscliff</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: '🌊', title: 'Salt Air Management', desc: 'Regular removal of salt deposits from windows, glass balustrades, door frames, and metal fixtures.' },
                { icon: '🏖️', title: 'Sand Control', desc: 'Frequent lobby and corridor cleaning to manage sand tracked in by residents from the beach.' },
                { icon: '💧', title: 'Moisture Control', desc: 'Attention to moisture-prone areas including entry mats, lobby tiles, and car park drains.' },
                { icon: '🪟', title: 'Glass & Window Care', desc: 'Specialist cleaning for coastal glass surfaces affected by sea spray and mineral deposits.' },
                { icon: '🌬️', title: 'Wind-Blown Debris', desc: 'Frequent clearing of leaves, sand, and coastal debris from pathways and external common areas.' },
                { icon: '🏗️', title: 'Building Exterior', desc: 'External wall washing and maintenance cleaning suited to coastal environmental exposure.' },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-darkblue mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Strata Cleaning Services — Queenscliff</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                'Lobby & foyer cleaning',
                'Stairwell & landing cleaning',
                'Lift car cleaning & disinfection',
                'Common corridor vacuuming & mopping',
                'Bin room cleaning & odour treatment',
                'Car park sweeping',
                'External paths & paving cleaning',
                'Letterbox & intercom area maintenance',
                'Sand & debris removal from entries',
                'Salt film removal from glass & metal',
                'Building exterior spot cleaning',
                'End-of-year comprehensive deep clean'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Areas */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-3 text-center">Nearby Areas We Also Serve</h3>
            <p className="text-center text-gray-600 mb-6">Strata cleaning services across all Northern Beaches suburbs near Queenscliff.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {nearbyAreas.map((area) => (
                <Link key={area.slug} href={`/${area.slug}`} className="bg-white p-3 rounded-lg text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Strata Cleaning Queenscliff</h3>
            <div className="space-y-5">
              {[
                { q: 'How often should a Queenscliff strata building be cleaned?', a: 'Due to the coastal environment, Queenscliff strata buildings typically require more frequent cleaning than inland properties. We recommend at minimum twice-weekly common area cleaning, with weekly attention to lobbies, lifts, and entries, plus monthly external common area maintenance.' },
                { q: 'Do you handle the effects of sea air on strata buildings in Queenscliff?', a: 'Yes. Our Queenscliff strata cleaning protocols specifically address salt air effects — we use appropriate cleaning agents for salt removal from glass, metal, and stone surfaces, and maintain a regular schedule to prevent build-up.' },
                { q: 'Can you coordinate with the Northern Beaches strata managers for Queenscliff buildings?', a: 'Absolutely. Pro Clean Corp works with all major strata management companies operating on the Northern Beaches. We provide cleaning reports, are available for routine strata manager inspections, and respond promptly to any resident or manager concerns.' },
                { q: 'Do you clean buildings near the beach differently to inland buildings?', a: 'Yes. Our coastal cleaning schedule is adapted to account for sand management, salt residue, increased moisture, and higher resident foot traffic associated with beachside living. We discuss these specific requirements during your free site assessment.' }
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
            <h3 className="text-3xl font-bold mb-4">Strata Cleaning Queenscliff — Get a Free Quote</h3>
            <p className="text-xl mb-6 text-gray-100">
              Pro Clean Corp&apos;s coastal strata cleaning specialists are ready to keep your Queenscliff building looking pristine.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Free Strata Quote
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
