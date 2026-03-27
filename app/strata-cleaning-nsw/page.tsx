import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning NSW | Sydney, Newcastle & Wollongong | Pro Clean Corp',
  description: 'Professional strata cleaning across NSW — Sydney, Newcastle and Wollongong. Common areas, OC reporting, fully insured. Call Pro Clean Corp for a free quote.',
  keywords: ['strata cleaning nsw', 'strata cleaning new south wales', 'strata cleaning sydney', 'strata cleaning newcastle', 'strata cleaning wollongong', 'body corporate cleaning nsw'],
  openGraph: {
    title: 'Strata Cleaning NSW | Sydney, Newcastle & Wollongong | Pro Clean Corp',
    description: 'Professional strata cleaning across NSW including Sydney, Newcastle and Wollongong. OC-ready, fully insured, free quote.',
    url: 'https://www.procleancorp.com.au/strata-cleaning-nsw',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Strata cleaning NSW' }]
  },
  twitter: { card: 'summary_large_image', title: 'Strata Cleaning NSW | Pro Clean Corp', description: 'Professional strata cleaning across NSW — Sydney, Newcastle and Wollongong.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-nsw' }
};

const faqs = [
  {
    question: 'Do you provide strata cleaning outside of Sydney in NSW?',
    answer: 'Yes. Pro Clean Corp services strata buildings in Sydney, Newcastle and the Hunter Valley, and Wollongong and the Illawarra region. We can arrange on-site assessments in all these areas and provide written fixed-price quotes. Contact us to discuss your building\'s specific location and needs.'
  },
  {
    question: 'What types of strata buildings do you clean across NSW?',
    answer: 'We clean all strata building types including residential apartment complexes, mixed-use developments, commercial strata, retirement villages and townhouse estates. Our services are adapted to building size and type — from small 10-unit blocks to large high-rise towers.'
  },
  {
    question: 'Are your NSW strata cleaning contracts flexible?',
    answer: 'All our strata cleaning contracts are month-to-month with 30 days notice to cancel — no exit fees or penalties. We also offer annual contracts for buildings that prefer fixed annual budgeting, with included quarterly deep-cleans and priority scheduling.'
  },
  {
    question: 'How do you handle OC reporting for strata buildings in regional NSW?',
    answer: 'Regardless of location, every visit includes a written service report delivered digitally to your strata manager within 24 hours of the clean. Reports include tasks completed, issues noted and photos on request — compatible with all major NSW strata management software platforms.'
  }
];

const nswRegions = [
  {
    region: 'Greater Sydney',
    suburbs: ['Sydney CBD', 'Parramatta', 'North Sydney', 'Bondi', 'Chatswood', 'Liverpool', 'Hurstville', 'Penrith', 'Blacktown', 'Manly']
  },
  {
    region: 'Newcastle & Hunter Valley',
    suburbs: ['Newcastle CBD', 'Hamilton', 'Broadmeadow', 'Charlestown', 'Kotara', 'Jesmond', 'Maitland', 'Cessnock', 'Raymond Terrace', 'Rutherford']
  },
  {
    region: 'Wollongong & Illawarra',
    suburbs: ['Wollongong CBD', 'Fairy Meadow', 'Corrimal', 'Thirroul', 'Shellharbour', 'Dapto', 'Unanderra', 'Figtree', 'Warrawong', 'Albion Park']
  }
];

export default function StrataCleaningNSWPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning NSW"
        serviceDescription="Professional strata cleaning services across NSW including Sydney, Newcastle and Wollongong. Common areas, OC reporting, police-checked staff, fixed pricing."
        serviceUrl="/strata-cleaning-nsw"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Common Area Cleaning', 'Lobby Cleaning', 'Lift Cleaning', 'Bin Room Sanitisation', 'Car Park Sweeping', 'OC Reporting']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Sydney · Newcastle · Wollongong</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Strata Cleaning NSW — Serving the State&apos;s Biggest Markets
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                From inner-Sydney high-rises to Wollongong beachfront apartments and Newcastle CBD strata — <strong>Pro Clean Corp delivers professional strata cleaning across NSW</strong> with OC-ready reporting and fixed pricing.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-8">
                {['Greater Sydney', 'Newcastle', 'Wollongong'].map((city, i) => (
                  <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-3 text-center">
                    <div className="text-white font-bold text-sm">{city}</div>
                    <div className="text-green-200 text-xs mt-1">Fully Covered</div>
                  </div>
                ))}
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/strata.jpg"
                alt="Strata cleaning NSW"
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
            <strong>Pro Clean Corp provides strata cleaning across NSW</strong>, with active teams in Greater Sydney, Newcastle and Wollongong. Every strata building receives the same standard — OC-ready written reports, police-checked cleaners, $20M insurance and fixed monthly pricing. One national-standard provider across three of NSW&apos;s key strata markets.
          </p>
        </div>
      </section>

      {/* Regional Breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-12 text-center">Strata Cleaning Across NSW — Region by Region</h2>
          <div className="space-y-10">
            {nswRegions.map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-darkblue mb-4">{r.region}</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                  {r.suburbs.map((s, j) => (
                    <div key={j} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 text-center">{s}</div>
                  ))}
                </div>
                {i === 0 && <p className="text-gray-600 text-sm">Greater Sydney is our primary market with teams across all 32 local government areas. Response times typically under 24 hours for urgent requests.</p>}
                {i === 1 && <p className="text-gray-600 text-sm">Newcastle&apos;s growing apartment market is serviced by our Hunter Valley team. Specialising in waterfront strata and CBD mixed-use developments.</p>}
                {i === 2 && <p className="text-gray-600 text-sm">Wollongong&apos;s coastal strata market requires salt-air protocols similar to Sydney&apos;s Eastern Suburbs. Our Illawarra team is equipped for coastal building care.</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">NSW-Wide Strata Cleaning — What&apos;s Included</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Every strata building we service in NSW — whether in Sydney, Newcastle or Wollongong — receives the same comprehensive service package. No variations based on location.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Lobby & foyer cleaning', 'Corridor & stairwell mopping', 'Lift interior disinfection', 'Bin room sanitisation', 'Car park sweeping', 'Window & glass polishing', 'Written OC reports', 'Maintenance issue flagging', 'Police-checked staff', 'Fixed monthly pricing'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-greenprimary font-bold">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/services/hero6.jpg"
                alt="Strata cleaning NSW building"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Strata Cleaning NSW</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
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
          <h2 className="text-3xl font-bold mb-4">Get a Free NSW Strata Cleaning Quote</h2>
          <p className="text-xl text-blue-100 mb-8">Sydney, Newcastle or Wollongong — on-site assessment and written quote within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
