import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Industrial Cleaning Companies Sydney | ProCleanCorp',
  description: 'Leading industrial cleaning company in Sydney. Warehouse floors, factory cleaning, high-bay cleaning, pressure washing and industrial sanitation. Serving all industrial precincts. Free quote.',
  keywords: 'industrial cleaning companies sydney, industrial cleaning company sydney, industrial cleaners sydney, factory cleaning sydney, warehouse cleaning company sydney, industrial cleaning services sydney',
  openGraph: {
    title: 'Industrial Cleaning Companies Sydney | ProCleanCorp',
    description: 'Leading industrial cleaning company in Sydney. Warehouse floors, factory cleaning, high-bay cleaning, pressure washing. All industrial precincts. Free quote.',
    url: 'https://www.procleancorp.com.au/industrial-cleaning-companies-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Industrial cleaning companies Sydney warehouse factory' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/industrial-cleaning-companies-sydney' }
};

const faqs = [
  {
    question: 'What should I look for when choosing an industrial cleaning company in Sydney?',
    answer: 'When evaluating industrial cleaning companies in Sydney, the key criteria are: (1) Insurance — $20M public liability minimum for industrial environments; (2) OHS compliance — SWMS (Safe Work Method Statements) for high-risk tasks like working at heights for high-bay cleaning; (3) Equipment — do they own industrial scrubber-dryers, pressure washers and scissor lifts, or do they subcontract?; (4) Experience with your industry — food-grade HACCP vs logistics vs manufacturing have completely different requirements; (5) Flexibility — can they work around shift rosters without disrupting operations? ProCleanCorp meets all five criteria and operates its own industrial cleaning equipment fleet.'
  },
  {
    question: 'How much does industrial cleaning cost in Sydney?',
    answer: 'Industrial cleaning in Sydney costs $55–$110 per hour depending on the task. Floor scrubbing for large warehouses (1,000m²+) is typically quoted as a fixed price per visit: $400–$900 for a standard industrial scrubber-dryer clean. High-bay cleaning, pressure washing and factory deep cleans are quoted after site assessment as the scope varies significantly. ProCleanCorp provides fixed-price weekly, fortnightly or monthly contracts for most industrial facilities.'
  },
  {
    question: 'Do you clean food manufacturing facilities in Sydney?',
    answer: 'Yes. ProCleanCorp provides HACCP-aligned cleaning for food manufacturing, food processing and cold storage facilities across Sydney. Food-grade cleaning requires specific product selection (food-safe sanitisers, no phenol-based products near food contact surfaces), colour-coded equipment systems, and documentation suitable for food safety audits. We have experience with SQF, HACCP and BRC food safety standard requirements.'
  },
  {
    question: 'Can you provide industrial cleaning during active production hours?',
    answer: 'Yes, with appropriate risk management. ProCleanCorp can provide industrial cleaning during production with SWMS in place for working around machinery, managing wet floor hazards, and segregating cleaning zones from active work areas. For larger facilities, we typically recommend a combination: daily light cleaning during shifts and full floor scrubbing during scheduled downtime or changeovers.'
  }
];

export default function IndustrialCleaningCompaniesSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Industrial Cleaning Companies Sydney"
        serviceDescription="ProCleanCorp is a leading industrial cleaning company in Sydney providing warehouse floor cleaning, factory cleaning, high-bay cleaning, pressure washing and industrial sanitation across all major industrial precincts."
        serviceUrl="https://www.procleancorp.com.au/industrial-cleaning-companies-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Warehouse Floor Scrubbing', 'Factory Cleaning', 'High-Bay Cleaning', 'Pressure Washing', 'HACCP Food-Grade Cleaning', 'Industrial Sanitation']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Warehouse · Factory · Industrial</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Industrial Cleaning Companies Sydney — ProCleanCorp Industrial Services
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp is Sydney's trusted industrial cleaning company — warehouse floor scrubbing, factory cleaning, high-bay cleaning and pressure washing for industrial precincts across Greater Sydney, with SWMS documentation and OHS compliance built in.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Own Industrial Equipment Fleet &nbsp;|&nbsp; ✓ SWMS Provided &nbsp;|&nbsp; ✓ Free Quote in 24hrs</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/warehouse.webp" alt="Industrial cleaning companies Sydney warehouse factory"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp is a specialist industrial cleaning company servicing warehouses, factories and industrial facilities across Sydney</strong> — from Eastern Creek and Marsden Park logistics precincts to Auburn food manufacturing and Rydalmere's manufacturing corridor. We operate our own industrial cleaning equipment fleet (scrubber-dryers, pressure washers, scissor lifts) and provide SWMS documentation for all high-risk industrial cleaning tasks.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Industrial Cleaning Services Across Sydney</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Industrial cleaning is a different discipline to commercial office cleaning — it requires industrial-grade equipment, OHS-compliant work methods and an understanding of how to clean around active operations without disrupting production or creating safety hazards. ProCleanCorp's industrial cleaning teams are equipped and trained for this environment.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Industrial Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Warehouse floor scrubbing (ride-on)', 'Factory floor cleaning', 'High-bay cleaning (scissor lift)', 'Industrial pressure washing', 'Cool room & cold storage cleaning', 'HACCP food-grade facility cleaning', 'Around-machinery cleaning (SWMS)', 'Loading dock pressure wash', 'Office + warehouse combined contract', 'Periodic industrial deep cleans', 'OHS-compliant wet floor management', 'Emergency spill response cleaning'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-lg font-bold text-darkblue mb-4">Industrial Cleaning Pricing — Sydney</h3>
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-gray-200"><th className="text-left py-2 text-darkblue">Service</th><th className="text-left py-2 text-darkblue">Typical Cost</th><th className="text-left py-2 text-darkblue">Note</th></tr></thead>
                  <tbody>
                    {[
                      ['Warehouse floor scrub (under 1,000m²)', '$400–$700/visit', 'Scrubber-dryer'],
                      ['Warehouse floor scrub (1,000m²+)', '$700–$1,500/visit', 'Ride-on scrubber'],
                      ['High-bay cleaning (up to 8m)', '$800–$2,000/visit', 'Scissor lift + crew'],
                      ['Pressure washing (loading dock)', '$300–$600/visit', '3,000 PSI'],
                      ['Factory/manufacturing clean', 'POA', 'Site assessment required'],
                    ].map(([svc, cost, note], i) => (
                      <tr key={i} className="border-b border-gray-100"><td className="py-2 text-gray-700">{svc}</td><td className="py-2 font-semibold text-darkblue">{cost}</td><td className="py-2 text-gray-600">{note}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Industrial Precincts We Service</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Eastern Creek & Plumpton', 'Marsden Park', 'Blacktown & Seven Hills', 'Auburn & Silverwater', 'Rydalmere & Granville', 'Wetherill Park & Smithfield', 'Bankstown & Chullora', 'Alexandria & Mascot'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Site assessment included. Fixed pricing for scheduled contracts.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Industrial Cleaning Companies Sydney</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-darkblue mb-2">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-darkblue mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Industrial Cleaning Sydney', href: '/industrial-cleaning-sydney' },
                { label: 'Warehouse Cleaning Sydney', href: '/warehouse-cleaning-sydney' },
                { label: 'Warehouse Cleaning Eastern Creek', href: '/warehouse-cleaning-eastern-creek' },
                { label: 'Warehouse Cleaning Auburn', href: '/warehouse-cleaning-auburn' },
                { label: 'Commercial Cleaning Companies Sydney', href: '/commercial-cleaning-companies-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get Your Free Industrial Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Site assessment within 24 hours. SWMS provided. Fixed pricing for scheduled contracts.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
