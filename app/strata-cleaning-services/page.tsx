import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Services | Professional Strata Cleaners Sydney NSW | Pro Clean Corp',
  description: 'Professional strata cleaning services across Sydney. Lobbies, stairwells, car parks, common areas, pool decks, and bin rooms cleaned to strata committee standards. Call 1300 494 983.',
  keywords: [
    'strata cleaning services',
    'strata cleaning services Sydney',
    'strata cleaners Sydney',
    'strata common area cleaning',
    'strata body corporate cleaning',
    'apartment complex cleaning Sydney',
    'strata cleaning NSW',
    'Pro Clean Corp strata'
  ],
  openGraph: {
    title: 'Strata Cleaning Services Sydney | Pro Clean Corp',
    description: 'Professional strata cleaning for Sydney apartment complexes. Lobbies, car parks, stairwells, pool decks, and all common areas.',
    url: '/strata-cleaning-services',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Strata Cleaning Services Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strata Cleaning Services Sydney | Pro Clean Corp',
    description: 'Specialist strata cleaning — lobbies, car parks, stairwells, pool decks, and all common areas across Sydney.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/strata-cleaning-services' }
};

const strataAreas = [
  { name: 'Maroubra', slug: 'strata-cleaning-maroubra' },
  { name: 'Parramatta', slug: 'strata-cleaning-parramatta' },
  { name: 'Chatswood', slug: 'strata-cleaning-chatswood' },
  { name: 'Inner West', slug: 'strata-cleaning-inner-west' },
  { name: 'Ryde', slug: 'strata-cleaning-ryde' },
  { name: 'Sutherland', slug: 'strata-cleaning-sutherland' },
  { name: 'Balmain', slug: 'strata-cleaning-balmain' },
  { name: 'Newtown', slug: 'strata-cleaning-newtown' },
  { name: 'Glebe', slug: 'strata-cleaning-glebe' },
  { name: 'Burwood', slug: 'strata-cleaning-burwood' },
];

export default function StrataCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Services"
        serviceDescription="Professional strata cleaning services across Sydney NSW. Common areas, lobbies, stairwells, car parks, pool decks, bin rooms, and lift cleaning for apartment complexes and strata-titled buildings."
        serviceUrl="/strata-cleaning-services"
        serviceType="Strata Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Lobby & Entrance Cleaning',
          'Stairwell & Corridor Cleaning',
          'Car Park & Basement Cleaning',
          'Pool Deck & BBQ Area Cleaning',
          'Bin Room Cleaning & Sanitisation',
          'Lift & Elevator Cleaning',
          'Garden Path & Hardstand Cleaning',
          'Post-Tradesperson Clean-Up'
        ]}
        faqs={[
          {
            question: 'What areas do strata cleaning services cover?',
            answer: 'Strata cleaning services cover all common property areas that fall under the owners corporation or body corporate: entrance lobbies, lift cars and doors, stairwells, corridors, car parks, basement levels, bin rooms and waste areas, pool decks, BBQ areas, letterbox alcoves, external pathways and hardstand areas. We do not clean individual owner lots unless specifically arranged.'
          },
          {
            question: 'How often should strata common areas be cleaned?',
            answer: 'Minimum recommended frequency is weekly for lobbies and high-traffic corridors. Car parks generally require fortnightly attention, while bin rooms benefit from twice-weekly cleaning. Pool areas and BBQ zones are typically done weekly during summer and fortnightly in winter. We can build a custom schedule that fits your building\'s occupancy and budget.'
          }
        ]}
      />

      {/* Hero — building/property focused */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/images/services/strata.jpg"
                alt="Strata cleaning services Sydney common areas"
                className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
                width={800}
                height={420}
                priority
              />
              <div className="absolute -top-4 -right-4 bg-greenprimary text-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-xs text-white/80">Strata Buildings Managed</div>
              </div>
            </div>
            <div className="text-white order-1 lg:order-2">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Strata & Body Corporate Specialists
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Professional Strata Cleaning Services — Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp works directly with strata managers, owners corporations, and body corporates across Sydney to deliver reliable, scheduled common area cleaning. We understand strata compliance requirements and the expectations of residents.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Strata Cleaning Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Strata Manager Direct Billing</span>
                <span>✓ AGM-Ready Reports</span>
                <span>✓ 7 Days Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Strata cleaning services</strong> maintain the common property areas that affect every resident&apos;s daily experience — lobbies, lifts, car parks, stairwells, and bin rooms. Pro Clean Corp delivers dependable, scheduled strata cleaning across Sydney apartment complexes and commercial strata buildings, providing strata managers with the reliability and documentation they need to meet owners corporation obligations.
          </p>
        </div>
      </section>

      {/* Common Areas — zone-by-zone breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Every Common Area Zone — Covered</h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">Our strata cleaning services address every zone of your common property with a dedicated cleaning checklist for each area.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[
              { title: 'Entrance & Lobby', items: ['Floors mopped & polished', 'Glass doors cleaned', 'Mailboxes dusted', 'Intercom panel cleaned', 'Entrance mats vacuumed'] },
              { title: 'Lifts & Corridors', items: ['Lift car floors & walls', 'Lift button panels sanitised', 'Corridor floors vacuumed', 'Skirting boards dusted', 'Light switch plates cleaned'] },
              { title: 'Car Park & Basement', items: ['Concrete floor sweeping', 'Oil stain treatment', 'Column & wall cleaning', 'Roller door surround', 'Line marking maintained'] },
              { title: 'Bin Room & Waste', items: ['Bin bay cleaning', 'Floor disinfection', 'Waste area deodorising', 'Compactor surround clean', 'Residue removal'] },
              { title: 'Pool Deck & BBQ', items: ['Pool surround scrubbing', 'Furniture wipe-down', 'BBQ grill cleaning', 'Drain clearing', 'Slip surface maintenance'] },
              { title: 'Stairwells', items: ['Tread & riser cleaning', 'Handrail disinfection', 'Landing floor cleaning', 'Cobweb removal', 'Emergency light dusting'] },
              { title: 'Garden Paths', items: ['Path sweeping & blowing', 'Leaf clearing', 'Hardstand jet wash', 'Letterbox areas', 'Visitor parking bays'] },
              { title: 'Amenity Rooms', items: ['Gym equipment wipe-down', 'Media room cleaning', 'Meeting room cleaning', 'Kitchen sanitisation', 'Bathroom cleaning'] },
            ].map((zone, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-darkblue mb-3 text-sm">{zone.title}</h3>
                <ul className="space-y-1">
                  {zone.items.map((item, j) => (
                    <li key={j} className="text-xs text-gray-600 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-greenprimary rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Main Content + Sidebar */}
          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Trusted Strata Cleaning Services — Sydney Strata Managers</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Strata managers across Sydney choose Pro Clean Corp because we understand the unique dynamics of strata property management. We deal directly with your strata manager, follow approved cleaning schedules, maintain service logs for AGM reporting, and respond rapidly to ad-hoc requests from building managers on site.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our strata cleaning contracts are flexible — no lock-in terms, with the ability to adjust frequency, add special cleans (post-renovation, post-move, wet weather clean-ups), and scale the service level as new buildings come into your portfolio. We bill directly to the strata fund with full invoicing documentation.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/strata.jpg"
                alt="Strata common area cleaning Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Strata Cleaning by Suburb</h4>
                <div className="grid grid-cols-2 gap-2">
                  {strataAreas.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} className="text-xs text-blueprimary hover:text-darkblue transition">
                      → {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-darkblue mb-6">Strata Cleaning Services — FAQs</h2>
          <div className="space-y-5 mb-12">
            {[
              { q: 'What areas do strata cleaning services cover?', a: 'Strata cleaning covers all common property: entrance lobbies, lift cars and doors, stairwells, corridors, car parks, basement levels, bin rooms, waste areas, pool decks, BBQ areas, letterbox alcoves, external pathways, and hardstand areas. Individual owner lots are not included unless specifically arranged.' },
              { q: 'How often should strata common areas be cleaned?', a: 'Minimum recommendation is weekly for lobbies and high-traffic corridors. Car parks generally require fortnightly cleaning. Bin rooms benefit from twice-weekly service. Pool areas and BBQ zones are typically done weekly in summer and fortnightly in winter. We can build a custom schedule for your building.' },
              { q: 'Can we get strata cleaning reports for our AGM?', a: 'Yes. Pro Clean Corp provides monthly service completion reports, attendance records, and product usage documentation that can be presented at your AGM or provided to the executive committee. We can also provide a summary of any issues noted during cleaning visits.' },
              { q: 'Do you work with strata management companies directly?', a: 'Yes. We work directly with strata management companies as preferred contractors. We can be added to your approved supplier list and will deal with your on-site building manager for day-to-day coordination. All invoicing goes directly to the strata fund with full breakdowns.' }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Strata Cleaning Services — Sydney NSW</h3>
            <p className="text-xl mb-8 text-gray-100">Keep your building&apos;s common areas clean, resident-ready, and compliant. Direct strata manager billing and AGM-ready reporting available.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-10 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Strata Cleaning Quote
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
