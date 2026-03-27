import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Leisure Centre Cleaning | Aquatic & Recreation Facility Cleaning NSW | Pro Clean Corp',
  description: 'Professional leisure centre cleaning for aquatic centres, recreation facilities, and multi-sport complexes across NSW. Pool deck, changerooms, gym, courts, and amenities. Call 1300 494 983.',
  keywords: [
    'leisure centre cleaning',
    'leisure centre cleaning NSW',
    'aquatic centre cleaning sydney',
    'recreation centre cleaning NSW',
    'pool facility cleaning sydney',
    'sports complex cleaning NSW',
    'council leisure centre cleaning',
    'multi-sport facility cleaning',
    'Pro Clean Corp leisure centre'
  ],
  openGraph: {
    title: 'Leisure Centre Cleaning NSW | Pro Clean Corp',
    description: 'Professional leisure centre cleaning for aquatic centres, recreation facilities, and multi-sport complexes across NSW. Pool deck, changerooms, gym, and courts.',
    url: '/leisure-centre-cleaning',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Leisure Centre Cleaning NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leisure Centre Cleaning NSW | Pro Clean Corp',
    description: 'Professional leisure centre cleaning for aquatic and recreation facilities across NSW.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/leisure-centre-cleaning' }
};

const zones = [
  { zone: 'Pool Deck & Wet Areas', items: ['Tile scrubbing', 'Drain cleaning', 'Anti-slip treatment', 'Mould control'] },
  { zone: 'Changerooms & Showers', items: ['Deep disinfection', 'Grout restoration', 'Drain treatment', 'Odour elimination'] },
  { zone: 'Gym & Fitness Zone', items: ['Equipment sanitisation', 'Rubber floor scrub', 'Mirror & glass clean', 'Cardio machine wipe'] },
  { zone: 'Courts & Studio Floors', items: ['Hardwood court cleaning', 'Studio floor buff', 'Marking protection', 'Dust removal'] },
  { zone: 'Café & Reception', items: ['Counter disinfection', 'Seating clean', 'Entry floor scrub', 'Glass cleaning'] },
  { zone: 'Amenities & Toilets', items: ['Full sanitation', 'Consumable restock', 'Grout cleaning', 'Odour treatment'] },
];

const stats = [
  { value: '12+', label: 'Council leisure centres serviced' },
  { value: '24/7', label: 'Scheduling flexibility' },
  { value: '100%', label: 'Insured & police-checked staff' },
  { value: '$20M', label: 'Public liability cover' },
];

export default function LeisureCentreCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Leisure Centre Cleaning"
        serviceDescription="Professional leisure centre cleaning services for aquatic centres, recreation facilities, and multi-sport complexes across NSW — covering pool decks, changerooms, gym floors, courts, and all amenity areas."
        serviceUrl="/leisure-centre-cleaning"
        serviceType="Leisure Centre Cleaning"
        price="$$$"
        additionalServices={[
          'Pool Deck Cleaning & Disinfection',
          'Changeroom & Shower Deep Clean',
          'Gym Zone Sanitisation',
          'Court & Studio Floor Cleaning',
          'Café & Reception Cleaning',
          'Toilet & Amenity Servicing',
          'Anti-Slip Treatment',
          'Mould Prevention Treatments'
        ]}
        faqs={[
          {
            question: 'What does leisure centre cleaning include?',
            answer: 'Leisure centre cleaning covers all zones of a recreation facility: pool deck tile scrubbing and anti-slip treatment, wet changeroom and shower deep disinfection with grout scrubbing, gym equipment sanitisation and floor scrubbing, court and studio floor cleaning, café and reception areas, and full toilet and amenity servicing. Leisure centres require a higher cleaning intensity than standard commercial facilities due to their combination of wet areas, high foot traffic, and diverse user demographics.'
          },
          {
            question: 'Do you service council-operated leisure centres and aquatic centres?',
            answer: 'Yes. Pro Clean Corp has extensive experience working with council-operated leisure and aquatic centres, including facilities managed under local government contracts. We understand the reporting requirements, safe work procedures, and public accountability standards that apply to council facilities. All staff are police-checked, fully insured, and trained in the specific hygiene requirements of publicly operated recreation facilities.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Aquatic & Recreation Specialists
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Leisure Centre Cleaning
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides comprehensive <strong className="text-white">leisure centre cleaning</strong> for aquatic centres, recreation complexes, and multi-sport facilities across NSW. Pool decks, changerooms, gym zones, courts — every area covered.
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
                <span>✓ Pool & Wet Area Experts</span>
                <span>✓ Council Contract Ready</span>
                <span>✓ Multi-Zone Management</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/gym.jpg"
                alt="Leisure centre cleaning NSW - aquatic and recreation facility"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">12+</div>
                <div className="text-xs text-gray-500">Council Leisure Centres</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Leisure centre cleaning</strong> is among the most demanding commercial cleaning categories — combining wet area hygiene, high-traffic gym floors, court surfaces, public amenities, and community-facing presentation standards under a single roof. Pro Clean Corp delivers integrated leisure centre cleaning programmes covering every zone of aquatic and recreation facilities across NSW.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Complete Leisure Centre Cleaning — NSW Aquatic & Recreation Facilities</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Leisure centres and aquatic complexes are extraordinarily complex cleaning environments. The combination of chlorinated pool water, high-humidity changerooms, heavy-use gym floors, multi-sport courts, food and beverage areas, and public toilets — all serviced by thousands of community members each week — demands a level of cleaning integration and zone management that most commercial cleaning providers cannot deliver.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp&apos;s leisure centre cleaning teams operate with zone-specific training, surface-appropriate chemicals, and the industrial equipment required for each area. Our pool deck crews use anti-mould treatments and tile scrubbing equipment rated for chlorinated environments. Our gym teams use rubber-specific auto-scrubbers and antimicrobial products. Our court cleaners protect hardwood surface finishes while maintaining the anti-dust standard that Health & Safety requires.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Compliant with Council & Government Standards</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Council-operated leisure centres and state government recreation facilities operate under detailed contract management and public reporting obligations. Pro Clean Corp provides documented cleaning logs, supervisor sign-offs, and incident response protocols that satisfy these requirements. Our staff are police-checked, fully inducted, and trained in the specific WHS requirements of publicly operated aquatic and recreation facilities.
              </p>
            </div>
            <div>
              <Image
                src="/images/hero/hero4.jpg"
                alt="Leisure centre cleaning NSW aquatic complex"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Leisure Centre Zones</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Pool deck & wet areas</li>
                  <li>✓ Changerooms & showers</li>
                  <li>✓ Gym & fitness zone</li>
                  <li>✓ Courts & studios</li>
                  <li>✓ Café & reception</li>
                  <li>✓ Toilets & amenities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats — UNIQUE SECTION */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Pro Clean Corp Leisure Centre Credentials</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-extrabold text-greenprimary mb-2">{s.value}</div>
                  <div className="text-sm text-gray-200">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Zone Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">Leisure Centre Cleaning by Zone</h3>
            <p className="text-center text-gray-600 mb-8">Every area of your facility managed with zone-specific methods and products.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {zones.map((z, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                  <h4 className="font-bold text-darkblue mb-3">{z.zone}</h4>
                  <ul className="space-y-1">
                    {z.items.map((item, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-greenprimary rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Leisure Centre Cleaning</h3>
            <div className="space-y-6">
              {[
                { q: 'What does leisure centre cleaning include?', a: 'Leisure centre cleaning covers all zones: pool deck tile scrubbing and anti-slip treatment, changeroom and shower deep disinfection with grout scrubbing, gym equipment sanitisation, court and studio floor cleaning, café and reception, and full toilet and amenity servicing. Every zone is managed with surface-appropriate methods and products.' },
                { q: 'Do you service council-operated leisure and aquatic centres?', a: 'Yes. We have extensive experience with council-operated leisure and aquatic centres. We understand the reporting requirements, safe work procedures, and public accountability standards that apply to council facilities. All staff are police-checked, fully insured, and trained for publicly operated recreation facilities.' },
                { q: 'Can you clean a leisure centre while it is open to the public?', a: 'Yes. Leisure centre cleaning typically involves zone-by-zone scheduling around public access. We work pool deck areas during low-swimmer periods, clean changerooms between peak sessions, and maintain ongoing amenity servicing throughout the day. Our teams are trained to work safely and unobtrusively in public-facing environments.' },
                { q: 'What anti-mould treatments do you use in pool areas?', a: 'Pool surrounds and wet areas are treated with EPA-registered, chlorine-compatible anti-mould products applied to tile grout lines, expansion joints, and wall surfaces. These treatments inhibit regrowth for 4–8 weeks between applications. Combined with our regular grout scrubbing programme, they maintain pool areas in a presentation standard appropriate for public aquatic facilities.' }
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
            <h3 className="text-3xl font-bold mb-4">NSW&apos;s Leisure Centre Cleaning Specialists</h3>
            <p className="text-xl mb-6 text-gray-100">
              From pool deck to gym floor — Pro Clean Corp manages complete leisure centre cleaning programmes for aquatic centres and recreation facilities across NSW.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Leisure Centre Quote
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
