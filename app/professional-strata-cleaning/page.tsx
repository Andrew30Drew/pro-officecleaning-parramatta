import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Professional Strata Cleaning Sydney | Standards & Equipment | Pro Clean Corp',
  description: 'What makes strata cleaning truly professional? Learn the standards, equipment and training behind Pro Clean Corp\'s professional strata cleaning service in Sydney.',
  keywords: ['professional strata cleaning', 'professional strata cleaners sydney', 'strata cleaning standards', 'strata cleaning training', 'quality strata cleaning sydney'],
  openGraph: {
    title: 'Professional Strata Cleaning Sydney | Standards & Equipment | Pro Clean Corp',
    description: 'What makes strata cleaning professional? Standards, equipment and training explained. Pro Clean Corp — Sydney\'s benchmark strata cleaner.',
    url: 'https://www.procleancorp.com.au/professional-strata-cleaning',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Professional strata cleaning Sydney' }]
  },
  twitter: { card: 'summary_large_image', title: 'Professional Strata Cleaning Sydney | Pro Clean Corp', description: 'What makes strata cleaning truly professional — standards, equipment and training.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/professional-strata-cleaning' }
};

const faqs = [
  {
    question: 'What qualifications do professional strata cleaners need?',
    answer: 'Professional strata cleaners should hold a Certificate II or III in Cleaning Operations, current police clearance, and be trained in chemical handling (SDS compliance), infection control protocols and the safe operation of industrial equipment including ride-on sweepers and pressure washers. At Pro Clean Corp, all staff complete our internal strata cleaning induction before their first shift.'
  },
  {
    question: 'What equipment does professional strata cleaning require?',
    answer: 'Professional strata cleaning requires commercial-grade equipment distinct from domestic products: auto-scrubbers for hard floors, HEPA-filter vacuums for carpeted corridors, SS-safe microfibre systems for lift interiors, industrial pressure washers for car parks and bio-enzymatic cleaners for bin rooms. Pro Clean Corp invests in and maintains this equipment in-house.'
  },
  {
    question: 'How do professional strata cleaners handle OC reporting?',
    answer: 'Every visit generates a digital service report listing: areas cleaned, products used, issues identified (with photos), time on-site and staff names. Reports are emailed to strata managers within 24 hours and are compatible with StrataMax, Strata Master and all major NSW strata management platforms.'
  },
  {
    question: 'What separates a professional strata company from a cheap alternative?',
    answer: 'The key differences are: insurance levels ($20M vs $5M or no insurance), staff vetting (police checks vs none), equipment quality (commercial vs domestic), reporting (written reports vs verbal updates) and accountability (dedicated account manager vs anonymous call centre). Pro Clean Corp meets the professional standard on every measure.'
  }
];

const standards = [
  { code: 'AS/NZS 3733', title: 'Carpet Cleaning Standard', desc: 'All carpet cleaning meets Australian Standard AS/NZS 3733 for extraction methods and drying times.' },
  { code: 'HACCP Principles', title: 'Chemical Handling', desc: 'All chemical use follows Hazard Analysis Critical Control Points principles — SDS sheets on file for every product.' },
  { code: 'ISO 9001', title: 'Quality Management', desc: 'Service delivery follows ISO 9001-aligned quality management processes for consistent outcomes.' },
  { code: 'WHS Act 2011', title: 'Workplace Safety', desc: 'All operations comply with the Work Health and Safety Act 2011 (NSW) including equipment checks and PPE use.' }
];

export default function ProfessionalStrataCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Professional Strata Cleaning Sydney"
        serviceDescription="Professional strata cleaning in Sydney meeting AS/NZS standards. Commercial-grade equipment, police-checked staff, OC reporting and $20M insurance."
        serviceUrl="/professional-strata-cleaning"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Common Area Cleaning', 'Lobby Cleaning', 'Car Park Sweeping', 'Lift Cleaning', 'Bin Room Sanitisation', 'Window Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Standards · Equipment · Training</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                What Does Professional Strata Cleaning Actually Mean?
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Professional strata cleaning</strong> goes far beyond a mop and bucket. It means trained staff, commercial-grade equipment, written OC reports, AS/NZS-compliant protocols and the insurance cover to protect your building and residents.
              </p>
              <div className="space-y-2 mb-8">
                {['Commercial-grade equipment — not domestic', 'Police-checked, inducted cleaners', 'Written OC reports every visit', '$20M public liability insurance', 'AS/NZS-aligned cleaning standards'].map((p, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white">
                    <span className="text-green-300">✓</span>
                    {p}
                  </div>
                ))}
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/strata.jpg"
                alt="Professional strata cleaning Sydney"
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
            <strong>Professional strata cleaning is defined by three benchmarks</strong>: commercial-grade equipment and products, trained and vetted staff who follow AS/NZS-aligned cleaning protocols, and OC-ready reporting that documents every visit. Pro Clean Corp meets all three — and backs it with $20M public liability insurance.
          </p>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-12 text-center">The Three Pillars of Professional Strata Cleaning</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Equipment & Products',
                items: ['Auto-scrubbers for hard floor corridors', 'HEPA-filter vacuums for carpeted areas', 'Industrial pressure washers for car parks', 'SS-safe microfibre systems for lift interiors', 'Bio-enzymatic cleaners for bin rooms', 'Commercial-grade glass cleaning solutions']
              },
              {
                number: '02',
                title: 'Staff Training & Vetting',
                items: ['Cert II/III in Cleaning Operations', 'Current police clearances', 'Chemical handling certification (SDS)', 'Strata-specific induction before first shift', 'Infection control protocols', 'Uniformed and identifiable on-site']
              },
              {
                number: '03',
                title: 'Reporting & Accountability',
                items: ['Digital service report per visit', 'Tasks completed, issues flagged', 'Photos of problems on request', 'Emailed within 24 hours', 'Compatible with strata software', 'AGM documentation support']
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7">
                <div className="text-5xl font-black text-blueprimary/20 mb-3">{pillar.number}</div>
                <h3 className="text-xl font-bold text-darkblue mb-4">{pillar.title}</h3>
                <ul className="space-y-2">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-greenprimary font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Standards Behind Our Professional Strata Cleaning</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Pro Clean Corp aligns every strata cleaning service with applicable Australian Standards and WHS legislation. This protects your building, your residents and your strata manager from liability — and ensures a consistent, verifiable quality standard on every visit.
              </p>
              <div className="space-y-4">
                {standards.map((s, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border-l-4 border-blueprimary">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold text-blueprimary bg-blueprimary/10 px-2 py-1 rounded">{s.code}</span>
                      <div>
                        <h4 className="font-semibold text-darkblue text-sm">{s.title}</h4>
                        <p className="text-gray-600 text-xs mt-1">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/whychoose.jpg"
                alt="Professional strata cleaning standards"
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
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Professional Strata Cleaning</h2>
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
          <h2 className="text-3xl font-bold mb-4">Request a Professional Strata Cleaning Quote</h2>
          <p className="text-xl text-blue-100 mb-8">On-site assessment, written fixed-price quote within 24 hours. No obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
