import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Kogarah | St George Area | Pro Clean Corp from $80/visit',
  description: 'Professional strata cleaning in Kogarah, St George area. Common areas, lobbies, lifts, bin rooms and car parks. OC-ready reports. Free quote within 24 hours.',
  keywords: ['strata cleaning kogarah', 'body corporate cleaning kogarah', 'strata cleaners kogarah', 'common area cleaning kogarah', 'strata management cleaning kogarah'],
  openGraph: {
    title: 'Strata Cleaning Kogarah | St George Area | Pro Clean Corp',
    description: 'Professional strata cleaning in Kogarah. Common areas, lobbies, lifts, car parks. OC reports. Free quote.',
    url: 'https://www.procleancorp.com.au/strata-cleaning-kogarah',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Strata cleaning Kogarah St George' }]
  },
  twitter: { card: 'summary_large_image', title: 'Strata Cleaning Kogarah | Pro Clean Corp', description: 'Professional strata cleaning in Kogarah from $80/visit. OC reports included.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-kogarah' }
};

const faqs = [
  {
    question: 'How much does strata cleaning cost in Kogarah?',
    answer: 'Strata cleaning in Kogarah starts from $80 per visit for small unit blocks under 20 units. Medium-sized buildings (20–50 units) typically range from $280–$500 per month with 2–3 visits per week. Large high-rise complexes in Kogarah can range from $600–$1,200 per month with daily or 5x weekly service. Pricing depends on the number of common areas, lifts, car park levels and required frequency.'
  },
  {
    question: 'What common areas do you clean in Kogarah strata buildings?',
    answer: 'We clean all strata common areas in Kogarah including: entrance foyers, lift interiors and button panels, corridors and stairwells, bin rooms (cleaned and deodorised), car parks (swept and spot-pressure washed), outdoor walkways, letterbox areas and any communal barbecue or recreation areas. OC-ready service reports are provided after every visit.'
  },
  {
    question: 'Do you provide strata cleaning near Kogarah hospital?',
    answer: 'Yes. Pro Clean Corp cleans strata buildings throughout the Kogarah and Georges River LGA area, including apartment complexes in close proximity to St George Hospital. Buildings near major hospitals often have medical professionals and shift workers as residents — we accommodate late-night or early-morning cleaning schedules to minimise disruption.'
  },
  {
    question: 'Can you start strata cleaning in Kogarah quickly?',
    answer: 'Yes. For most Kogarah strata buildings, Pro Clean Corp can complete an on-site assessment within 48 hours and begin service within 5 business days. Our St George region team is based locally and services the Kogarah, Hurstville, Rockdale and Carlton area regularly. Contact us to arrange a same-week assessment.'
  }
];

const nearbySuburbs = [
  { suburb: 'Hurstville', href: '/commercial-cleaning-hurstville' },
  { suburb: 'Rockdale', href: '/commercial-cleaning-rockdale' },
  { suburb: 'Carlton', href: '/strata-cleaning-carlton' },
  { suburb: 'Allawah', href: '/strata-cleaning-allawah' },
  { suburb: 'Blakehurst', href: '/strata-cleaning-blakehurst' },
  { suburb: 'Ramsgate', href: '/strata-cleaning-ramsgate' }
];

export default function StrataCleaningKogarahPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Kogarah"
        serviceDescription="Professional strata cleaning in Kogarah, Georges River LGA. Common areas, lobbies, lifts, bin rooms and car parks. OC-ready reports from $80/visit."
        serviceUrl="/strata-cleaning-kogarah"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Lobby Cleaning', 'Lift Cleaning', 'Corridor Cleaning', 'Bin Room Sanitisation', 'Car Park Sweeping', 'OC Committee Reporting']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Kogarah · St George Area · Georges River LGA · 15km from CBD</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Strata Cleaning Kogarah — Common Area Specialists from $80/visit
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Pro Clean Corp delivers professional strata cleaning in Kogarah</strong> — covering all common areas in residential apartments, mixed-use strata and body corporate buildings throughout the Georges River LGA with OC-ready reporting on every visit.
              </p>
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-8">
                <p className="text-white font-semibold text-sm">✓ From $80/visit &nbsp;|&nbsp; ✓ OC Reports Included &nbsp;|&nbsp; ✓ Local St George Team &nbsp;|&nbsp; ✓ Free Quote 24hrs</p>
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/strata.jpg"
                alt="Strata cleaning Kogarah St George"
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
            <strong>Strata cleaning in Kogarah from Pro Clean Corp starts from $80 per visit</strong>, covering entrance foyers, lift interiors, corridors, bin rooms and car parks for all apartment and strata complexes in the Kogarah and Georges River LGA. Written OC reports after every visit, police-checked staff and no lock-in contracts.
          </p>
        </div>
      </section>

      {/* About Kogarah */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-5">Professional Strata Cleaning for Kogarah&apos;s Growing Apartment Market</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Kogarah is the major town centre of the Georges River LGA, located approximately 15km south of the Sydney CBD. The suburb has undergone significant residential development in recent years, driven by its proximity to St George Hospital, Kogarah train station and the broader St George commercial precinct.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The growing number of apartment complexes along Railway Parade, President Avenue and surrounding streets creates strong demand for professional strata cleaning services. Pro Clean Corp&apos;s St George team services Kogarah strata buildings with consistent schedules, OC-ready reporting and direct liaison with local strata managers.
              </p>
              <div className="bg-gray-50 p-5 rounded-xl">
                <h3 className="font-bold text-darkblue mb-3">Kogarah Strata Pricing Guide</h3>
                <div className="space-y-2 text-sm">
                  {[['Small block (under 20 units)', '$80–$150/visit', 'Weekly or fortnightly'], ['Medium building (20–50 units)', '$280–$500/month', '2–3x per week'], ['Large complex (50+ units)', '$600–$1,200/month', '3–5x per week']].map(([type, cost, freq], i) => (
                    <div key={i} className="grid grid-cols-3 gap-2 border-b border-gray-100 pb-2 last:border-0 text-xs">
                      <span className="text-gray-700">{type}</span>
                      <span className="font-bold text-greenprimary">{cost}</span>
                      <span className="text-gray-500">{freq}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/services/hero5.jpg"
                alt="Kogarah strata building cleaning"
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
          <h2 className="text-3xl font-bold text-darkblue mb-10 text-center">Strata Cleaning Inclusions — Kogarah</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Entrance foyer and lobby cleaning', 'Lift interior and button disinfection', 'Corridor and stairwell mopping', 'Handrail disinfection at all levels', 'Bin room clean and deodorise', 'Car park sweep and spot wash', 'Glass and mirror polishing', 'Letterbox area cleaning', 'Outdoor common area maintenance', 'OC-ready written service report', 'Maintenance issue flagging', 'Photo evidence on request'].map((item, i) => (
              <div key={i} className="flex items-start gap-2 bg-white rounded-lg px-4 py-3 text-sm text-gray-700">
                <span className="text-greenprimary font-bold mt-0.5">✓</span>
                {item}
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
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Strata Cleaning Kogarah</h2>
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
          <h2 className="text-3xl font-bold mb-4">Get a Free Kogarah Strata Cleaning Quote</h2>
          <p className="text-xl text-blue-100 mb-8">On-site assessment within 48 hours. Fixed pricing for OC budgets. No lock-in contracts.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
