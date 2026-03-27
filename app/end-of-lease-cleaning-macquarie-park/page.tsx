import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'End of Lease Cleaning Macquarie Park | Bond Back Guarantee | Pro Clean Corp',
  description: 'Professional end of lease cleaning in Macquarie Park. Bond-back standard, same-day availability, full inclusions. Serving Macquarie Park and surrounding North Ryde suburbs.',
  keywords: ['end of lease cleaning macquarie park', 'bond cleaning macquarie park', 'vacate cleaning macquarie park', 'exit cleaning macquarie park', 'end of lease cleaners macquarie park'],
  openGraph: {
    title: 'End of Lease Cleaning Macquarie Park | Bond Back Guarantee | Pro Clean Corp',
    description: 'Bond-back end of lease cleaning in Macquarie Park. Full inclusions, oven, carpet, walls. Free quote — 24hr availability.',
    url: 'https://www.procleancorp.com.au/end-of-lease-cleaning-macquarie-park',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'End of lease cleaning Macquarie Park' }]
  },
  twitter: { card: 'summary_large_image', title: 'End of Lease Cleaning Macquarie Park | Pro Clean Corp', description: 'Bond-back end of lease cleaning in Macquarie Park. Full inclusions, same-day available.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/end-of-lease-cleaning-macquarie-park' }
};

const faqs = [
  {
    question: 'What does end of lease cleaning in Macquarie Park include?',
    answer: 'End of lease cleaning in Macquarie Park includes: full kitchen clean (oven, stovetop, rangehood, cupboards inside and out, benches), bathroom and toilet deep-clean, all floor vacuuming and mopping, wall spot-cleaning, window cleaning (internal), light fittings dusted, skirting boards and door frames cleaned, and all internal glass wiped down. Carpet steam cleaning and external windows are available as add-ons.'
  },
  {
    question: 'Is carpet steam cleaning included in Macquarie Park end of lease cleaning?',
    answer: 'Carpet steam cleaning is an optional add-on for end of lease cleaning in Macquarie Park. Many rental properties in Macquarie Park\'s modern apartments and units include a carpet-cleaning requirement in the lease. We can bundle standard end-of-lease cleaning with carpet steam cleaning at a reduced combined rate — ask when requesting your quote.'
  },
  {
    question: 'How long does end of lease cleaning take in a Macquarie Park apartment?',
    answer: 'A standard 1-bedroom apartment in Macquarie Park typically takes 3–4 hours. A 2-bedroom takes 4–6 hours and a 3-bedroom 6–8 hours. Larger properties or those requiring heavy oven cleaning, carpet steam cleaning or wall washing may take longer. We provide a time estimate in your written quote based on the property size and condition.'
  },
  {
    question: 'Do you guarantee the bond will be returned for Macquarie Park properties?',
    answer: 'Pro Clean Corp provides a free re-clean guarantee — if your property manager or real estate agent identifies any cleaning issue after our service, we will return to re-clean the relevant areas at no additional cost. This guarantee is in writing and covers the full scope of the end of lease cleaning for 72 hours after your inspection.'
  }
];

const nearbySuburbs = [
  { suburb: 'North Ryde', href: '/end-of-lease-cleaning-north-ryde' },
  { suburb: 'Ryde', href: '/end-of-lease-cleaning-ryde' },
  { suburb: 'Meadowbank', href: '/end-of-lease-cleaning-meadowbank' },
  { suburb: 'West Ryde', href: '/end-of-lease-cleaning-west-ryde' },
  { suburb: 'Rhodes', href: '/end-of-lease-cleaning-rhodes' },
  { suburb: 'Marsfield', href: '/end-of-lease-cleaning-marsfield' }
];

export default function EndOfLeaseCleaningMacquarieParkPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="End of Lease Cleaning Macquarie Park"
        serviceDescription="Professional end of lease cleaning in Macquarie Park, NSW. Bond-back standard cleaning for apartments and units near Macquarie University and the technology precinct."
        serviceUrl="/end-of-lease-cleaning-macquarie-park"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Kitchen Deep Clean', 'Bathroom Cleaning', 'Carpet Steam Cleaning', 'Window Cleaning', 'Oven Cleaning', 'Wall Spot Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Macquarie Park · North Ryde LGA · 12km from CBD</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                End of Lease Cleaning Macquarie Park — Bond Back Guaranteed
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                Moving out of a Macquarie Park apartment or unit? <strong>Pro Clean Corp delivers end of lease cleaning</strong> to the standard your property manager expects — full inclusions, free re-clean guarantee and 24-hour turnaround availability.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Full inclusions — no hidden extras', 'Free re-clean guarantee (72hrs)', 'Oven and kitchen deep-clean', 'Carpet steam cleaning add-on', 'Same-day availability', 'Written quote in 30 mins'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white text-sm">
                    <span className="text-green-300">✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/endoflease.jpg"
                alt="End of lease cleaning Macquarie Park"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-8 bg-greenprimary/10 border-l-4 border-greenprimary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>End of lease cleaning in Macquarie Park from Pro Clean Corp</strong> covers everything your real estate agent will inspect — kitchen, oven, bathrooms, floors, walls, skirting boards and all glass surfaces — at bond-back standard with a written free re-clean guarantee for 72 hours after your inspection.
          </p>
        </div>
      </section>

      {/* About Macquarie Park */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-5">End of Lease Cleaning in Macquarie Park&apos;s Tech Precinct</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Macquarie Park is one of Sydney&apos;s most active technology and business hubs, home to Macquarie University and major corporate campuses. The suburb&apos;s apartment and unit market — particularly along Herring Road, Epping Road and near the Macquarie Park Metro station — is highly competitive for tenants leaving properties.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Pro Clean Corp works with tenants across Macquarie Park&apos;s modern apartment blocks, university-adjacent student accommodation and residential units to achieve bond-back standard cleaning — meeting the expectations of local property managers and real estate agents in the North Ryde LGA.
              </p>
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-darkblue mb-3">Macquarie Park End of Lease Pricing</h3>
                <div className="space-y-2 text-sm">
                  {[['Studio / 1 bed', 'From $250'], ['2 bedrooms', 'From $320'], ['3 bedrooms', 'From $420'], ['Carpet steam cleaning', 'From $80 add-on']].map(([type, price], i) => (
                    <div key={i} className="flex justify-between border-b border-gray-100 pb-2 last:border-0">
                      <span className="text-gray-700">{type}</span>
                      <span className="font-bold text-greenprimary">{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/services/hero1.jpg"
                alt="Macquarie Park apartment end of lease cleaning"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions Checklist */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-10 text-center">End of Lease Cleaning Inclusions — Macquarie Park</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { room: 'Kitchen', tasks: ['Oven interior and racks', 'Stovetop and rangehood', 'Cupboards inside and out', 'Benches and splashback', 'Sink and taps', 'Dishwasher exterior'] },
              { room: 'Bathrooms & Toilets', tasks: ['Shower and bath scrub', 'Toilet disinfection', 'Basin and vanity', 'Mirror cleaning', 'Tiles and grout', 'Floor disinfection'] },
              { room: 'All Rooms', tasks: ['Vacuum and mop floors', 'Wall spot cleaning', 'Skirting boards', 'Door frames and handles', 'Window interiors', 'Light fittings'] }
            ].map((zone, i) => (
              <div key={i} className="bg-white rounded-xl p-5">
                <h3 className="font-bold text-darkblue mb-3">{zone.room}</h3>
                <ul className="space-y-1.5">
                  {zone.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-greenprimary font-bold">✓</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Suburbs */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-darkblue mb-6">Also Serving Nearby Suburbs</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {nearbySuburbs.map((s, i) => (
              <Link key={i} href={s.href} className="bg-gray-50 hover:bg-blueprimary hover:text-white border border-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700 text-center transition">{s.suburb}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — End of Lease Cleaning Macquarie Park</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-darkblue mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blueprimary to-darkblue text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get Your Macquarie Park End of Lease Quote</h2>
          <p className="text-xl text-blue-100 mb-8">Written quote in 30 minutes. Bond-back standard. Free re-clean guarantee.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
