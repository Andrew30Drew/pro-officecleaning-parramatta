import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Services Sydney | All Suburbs Covered | Pro Clean Corp',
  description: 'Comprehensive strata cleaning services across all Sydney suburbs. Common areas, lobbies, lifts, car parks and bin rooms. OC-ready reporting. Free quote 24hrs.',
  keywords: ['strata cleaning services sydney', 'strata cleaners sydney', 'body corporate cleaning sydney', 'common area cleaning sydney', 'strata management cleaning'],
  openGraph: {
    title: 'Strata Cleaning Services Sydney | All Suburbs Covered | Pro Clean Corp',
    description: 'Comprehensive strata cleaning services across all Sydney suburbs. OC-ready reporting, no lock-in contracts.',
    url: 'https://www.procleancorp.com.au/strata-cleaning-services-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Strata cleaning services Sydney' }]
  },
  twitter: { card: 'summary_large_image', title: 'Strata Cleaning Services Sydney | Pro Clean Corp', description: 'Comprehensive strata cleaning services across all Sydney suburbs.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-services-sydney' }
};

const faqs = [
  {
    question: 'What does a professional strata cleaning service include?',
    answer: 'A professional strata cleaning service covers all common areas including entrance foyers, lift interiors, stairwells, corridors, bin rooms, car parks and communal outdoor areas. Pro Clean Corp also provides written service reports, maintenance issue flagging and photo evidence on request — meeting the reporting needs of all major strata management platforms.'
  },
  {
    question: 'How often should strata cleaning be scheduled in Sydney?',
    answer: 'Frequency depends on building size and resident traffic. High-rise buildings with 50+ units typically require 3–5 visits per week. Medium complexes (20–50 units) are usually serviced 2–3 times weekly. Small unit blocks under 20 units can maintain presentation with weekly or fortnightly visits.'
  },
  {
    question: 'Do you clean strata buildings across all Sydney suburbs?',
    answer: 'Yes. Pro Clean Corp has teams servicing all Sydney metro areas including the CBD, Eastern Suburbs, Inner West, North Shore, Northern Beaches, Western Sydney, South-West Sydney and the St George/Sutherland region. We can typically begin a new strata contract within 5 business days.'
  },
  {
    question: 'Can I get a fixed price strata cleaning quote for my building?',
    answer: 'Yes. We provide a free on-site assessment and a written fixed-price quote within 24 hours. Pricing is based on the number of common areas, floors, lift levels, car park size and required frequency — giving your OC committee a predictable monthly figure for budget planning.'
  }
];

const sydneySuburbs = [
  'Sydney CBD', 'Pyrmont', 'Ultimo', 'Surry Hills', 'Darlinghurst', 'Potts Point',
  'Bondi', 'Bondi Junction', 'Randwick', 'Maroubra', 'Coogee', 'Kingsford',
  'Newtown', 'Glebe', 'Balmain', 'Annandale', 'Leichhardt', 'Petersham',
  'Chatswood', 'North Sydney', 'Crows Nest', 'St Leonards', 'Artarmon', 'Lane Cove',
  'Parramatta', 'Westmead', 'Merrylands', 'Auburn', 'Homebush', 'Strathfield',
  'Hurstville', 'Kogarah', 'Rockdale', 'Cronulla', 'Sutherland', 'Miranda',
  'Liverpool', 'Fairfield', 'Bankstown', 'Lakemba', 'Punchbowl', 'Campsie',
  'Ryde', 'Meadowbank', 'West Ryde', 'Macquarie Park', 'Epping', 'Marsfield',
  'Manly', 'Dee Why', 'Brookvale', 'Mona Vale', 'Newport', 'Avalon'
];

export default function StrataCleaningServicesSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Services Sydney"
        serviceDescription="Comprehensive strata cleaning services across all Sydney suburbs. Common areas, lobbies, lifts, car parks and bin rooms cleaned to OC-ready standard."
        serviceUrl="/strata-cleaning-services-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Common Area Cleaning', 'Lobby & Foyer Cleaning', 'Lift Cleaning', 'Car Park Sweeping', 'Bin Room Sanitisation', 'OC Reporting']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">All Sydney Suburbs Covered</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Strata Cleaning Services Sydney — OC-Ready, Every Visit
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Pro Clean Corp provides <strong>strata cleaning services</strong> across every Sydney suburb — from CBD high-rises to suburban apartment blocks — with written service reports, police-checked staff and no lock-in contracts.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['50+ Sydney suburbs covered', 'Written reports every visit', 'Police-checked cleaners', 'Free on-site quote'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                    <span className="text-green-300">✓</span>
                    <span className="text-sm text-white">{item}</span>
                  </div>
                ))}
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200 hover:text-white transition">1300 494 983</a>
            </div>
            <div className="relative">
              <Image
                src="/images/services/strata.jpg"
                alt="Strata cleaning services Sydney"
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
            <strong>Pro Clean Corp delivers professional strata cleaning services across all Sydney suburbs</strong>, covering common areas, lobbies, lifts, stairwells, bin rooms and car parks. Each visit includes a written service report for strata managers and OC committees — keeping your building compliant and residents satisfied.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-3 text-center">What Our Strata Cleaning Services Include</h2>
          <p className="text-center text-gray-600 mb-12">Every service area covered — for every building type across Sydney.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { area: 'Entrance Foyers & Lobbies', desc: 'First impressions matter. Floors mopped, glass polished, surfaces disinfected and signage wiped clean.' },
              { area: 'Lift Interiors', desc: 'Buttons, panels, floors and walls cleaned and disinfected. Stainless steel polished to a streak-free finish.' },
              { area: 'Corridors & Stairwells', desc: 'Hard floors mopped, carpet vacuumed, handrails disinfected and cobwebs removed at every level.' },
              { area: 'Bin Rooms', desc: 'Bins cleaned and deodorised, floors mopped, walls wiped down and fly strips replaced as needed.' },
              { area: 'Car Parks', desc: 'Sweeping, blow-out and spot-pressure washing. Oil stain treatment on request.' },
              { area: 'Communal Outdoor Areas', desc: 'Walkways swept, outdoor furniture wiped, letterbox areas cleaned and signage maintained.' }
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition">
                <h3 className="font-bold text-darkblue mb-2">{item.area}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suburb Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-4">Strata Cleaning Across All Sydney Suburbs</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our strata cleaning teams are based across Greater Sydney, ensuring fast response times and local knowledge for every building we service. From Manly to Liverpool, Parramatta to Cronulla — we have crews near you.
              </p>
              <Image
                src="/images/services/faq3.jpg"
                alt="Strata cleaning team Sydney suburbs"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
                width={600}
                height={256}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-darkblue mb-4">Suburbs We Serve</h3>
              <div className="grid grid-cols-3 gap-2">
                {sydneySuburbs.map((suburb, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-lg px-3 py-2 text-xs text-gray-700 text-center">{suburb}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">Strata Cleaning Pricing — Sydney</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blueprimary text-white">
                  <th className="text-left px-4 py-3 rounded-tl-xl">Building Type</th>
                  <th className="text-left px-4 py-3">Typical Cost</th>
                  <th className="text-left px-4 py-3">Visits Per Week</th>
                  <th className="text-left px-4 py-3 rounded-tr-xl">What&apos;s Included</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Small block (under 20 units)', '$80–$150/visit', '1–2x weekly', 'Lobby, corridors, bin room'],
                  ['Medium complex (20–50 units)', '$300–$600/month', '2–3x weekly', 'All common areas + car park'],
                  ['Large high-rise (50+ units)', '$700–$1,500/month', '3–5x weekly', 'Full building coverage + reports'],
                  ['Car park only', '$150–$300/visit', 'Fortnightly', 'Sweep, blow-out, spot wash']
                ].map(([type, cost, freq, incl], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-medium text-darkblue">{type}</td>
                    <td className="px-4 py-3 font-bold text-greenprimary">{cost}</td>
                    <td className="px-4 py-3 text-gray-600">{freq}</td>
                    <td className="px-4 py-3 text-gray-600">{incl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Strata Cleaning Services Sydney</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-darkblue mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blueprimary to-darkblue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Get a Free Strata Cleaning Quote in Sydney</h2>
          <p className="text-xl text-blue-100 mb-8">On-site assessment within 24 hours. Fixed pricing, no lock-in contracts, OC-ready reporting.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote Online</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
