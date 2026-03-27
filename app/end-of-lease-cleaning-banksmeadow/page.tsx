import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'End of Lease Cleaning Banksmeadow | Bond Back Standard | Pro Clean Corp',
  description: 'Professional end of lease cleaning in Banksmeadow. Bond-back standard, full inclusions, free re-clean guarantee. Serving Banksmeadow and nearby Botany Bay suburbs.',
  keywords: ['end of lease cleaning banksmeadow', 'bond cleaning banksmeadow', 'vacate cleaning banksmeadow', 'exit clean banksmeadow', 'end of lease cleaners banksmeadow'],
  openGraph: {
    title: 'End of Lease Cleaning Banksmeadow | Bond Back Standard | Pro Clean Corp',
    description: 'Bond-back end of lease cleaning in Banksmeadow. Full inclusions, free re-clean guarantee. Same-day availability.',
    url: 'https://www.procleancorp.com.au/end-of-lease-cleaning-banksmeadow',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'End of lease cleaning Banksmeadow' }]
  },
  twitter: { card: 'summary_large_image', title: 'End of Lease Cleaning Banksmeadow | Pro Clean Corp', description: 'Bond-back end of lease cleaning in Banksmeadow — full inclusions, free re-clean.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/end-of-lease-cleaning-banksmeadow' }
};

const faqs = [
  {
    question: 'What is included in end of lease cleaning in Banksmeadow?',
    answer: 'End of lease cleaning in Banksmeadow covers: kitchen deep-clean (oven interior, stovetop, rangehood, cupboards inside and out, benches), full bathroom and toilet disinfection, all floors vacuumed and mopped, wall spot cleaning, skirting boards and door frames wiped, window interiors cleaned and light fittings dusted. Carpet steam cleaning and external window cleaning are available as add-ons.'
  },
  {
    question: 'How much does end of lease cleaning cost in Banksmeadow?',
    answer: 'End of lease cleaning in Banksmeadow starts from $250 for a studio or 1-bedroom unit, $320 for a 2-bedroom and $420 for a 3-bedroom property. Prices include all standard inclusions — oven, kitchen, bathrooms and all rooms. Carpet steam cleaning and external window cleaning are priced separately. A written fixed-price quote is provided based on your specific property size and condition.'
  },
  {
    question: 'Do you offer end of lease cleaning near Port Botany and Banksmeadow?',
    answer: 'Yes. Pro Clean Corp is highly familiar with the Banksmeadow, Port Botany and Botany Bay area. We service the residential pockets of Banksmeadow alongside the nearby suburbs of Botany, Mascot, Eastlakes, Hillsdale and Matraville. Our team can typically be available within 24–48 hours for end of lease cleaning bookings in this area.'
  },
  {
    question: 'What is the re-clean guarantee for end of lease cleaning?',
    answer: 'If your real estate agent or property manager raises any cleaning issue after our end of lease clean in Banksmeadow, Pro Clean Corp will return to re-clean the specified areas at no additional cost within 72 hours of your inspection. This guarantee is provided in writing with every booking. We have an extremely low re-clean rate due to our thorough approach.'
  }
];

const nearbySuburbs = [
  { suburb: 'Botany', href: '/end-of-lease-cleaning-botany' },
  { suburb: 'Mascot', href: '/end-of-lease-cleaning-mascot' },
  { suburb: 'Eastlakes', href: '/end-of-lease-cleaning-eastlakes' },
  { suburb: 'Hillsdale', href: '/end-of-lease-cleaning-hillsdale' },
  { suburb: 'Matraville', href: '/end-of-lease-cleaning-matraville' },
  { suburb: 'Rosebery', href: '/end-of-lease-cleaning-rosebery' }
];

export default function EndOfLeaseCleaningBanksmeadowPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="End of Lease Cleaning Banksmeadow"
        serviceDescription="Professional end of lease cleaning in Banksmeadow, Botany Bay LGA. Bond-back standard cleaning for residential properties near Port Botany and the industrial precinct."
        serviceUrl="/end-of-lease-cleaning-banksmeadow"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Kitchen Deep Clean', 'Oven Cleaning', 'Bathroom Cleaning', 'Carpet Steam Cleaning', 'Window Cleaning', 'Wall Spot Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Banksmeadow · Botany Bay LGA · Near Port Botany</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                End of Lease Cleaning Banksmeadow — Bond-Back Guaranteed
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                Moving out of a Banksmeadow property? <strong>Pro Clean Corp&apos;s end of lease cleaning</strong> covers every area your property manager will inspect — to bond-back standard, with a free re-clean guarantee and written confirmation delivered the same day.
              </p>
              <div className="bg-white/10 border border-white/20 rounded-xl p-5 mb-8">
                <h3 className="text-white font-bold mb-3 text-sm">Banksmeadow End of Lease Pricing</h3>
                <div className="space-y-1.5 text-sm text-white/90">
                  {[['Studio / 1 bedroom', 'From $250'], ['2 bedrooms', 'From $320'], ['3 bedrooms', 'From $420'], ['Carpet steam add-on', 'From $80']].map(([t, p], i) => (
                    <div key={i} className="flex justify-between"><span>{t}</span><span className="font-bold text-green-300">{p}</span></div>
                  ))}
                </div>
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/endoflease.jpg"
                alt="End of lease cleaning Banksmeadow"
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
            <strong>End of lease cleaning in Banksmeadow from Pro Clean Corp</strong> starts from $250 for a 1-bedroom unit and covers all kitchen, bathroom, floor and surface cleaning to the bond-back standard required by Botany Bay LGA property managers. Free re-clean guarantee for 72 hours after inspection.
          </p>
        </div>
      </section>

      {/* About Banksmeadow */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-5">Banksmeadow End of Lease Cleaning — Local Knowledge</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Banksmeadow is a residential suburb in the Botany Bay LGA, approximately 12km south of the Sydney CBD near Port Botany. The suburb has a mixed industrial and residential character, with a range of townhouses, older-style houses and smaller unit blocks — many tenanted by workers in the Port Botany logistics and shipping sector.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Property managers in the Botany Bay area maintain a thorough inspection standard. Pro Clean Corp&apos;s end of lease cleaning team is familiar with the local rental market expectations and the specific cleaning requirements common in Banksmeadow properties — including older-style kitchens with tile splashbacks and grout that requires attention.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Oven deep clean', 'Tile & grout', 'Carpet steam', 'Wall spot clean', 'Window clean'].map((item, i) => (
                  <span key={i} className="bg-greenprimary/10 text-greenprimary text-xs font-semibold px-3 py-1 rounded-full">{item}</span>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/services/hero2.jpg"
                alt="Banksmeadow property end of lease cleaning"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-10 text-center">What&apos;s Included in Every Banksmeadow End of Lease Clean</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              ['Oven interior, racks and door glass cleaned', 'Stovetop and rangehood degreased'],
              ['Cupboards cleaned inside and out', 'Benches, splashback and sink scrubbed'],
              ['Shower, bath and toilet disinfected', 'Basin, vanity and mirror polished'],
              ['All floors vacuumed and mopped', 'Wall marks spot-cleaned'],
              ['Skirting boards and door frames wiped', 'Window glass (internal) cleaned'],
              ['Light fittings and switches wiped', 'Built-in wardrobes wiped inside']
            ].map((pair, i) => (
              <div key={i} className="space-y-2">
                {pair.map((item, j) => (
                  <div key={j} className="flex items-start gap-2 bg-white rounded-lg px-4 py-2 text-sm text-gray-700">
                    <span className="text-greenprimary font-bold mt-0.5">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby */}
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
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — End of Lease Cleaning Banksmeadow</h2>
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
          <h2 className="text-3xl font-bold mb-4">Get Your Banksmeadow End of Lease Quote</h2>
          <p className="text-xl text-blue-100 mb-8">Written quote in 30 minutes. Bond-back standard. Free re-clean guarantee for 72 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
