import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Companies Sydney | ProCleanCorp',
  description: 'ProCleanCorp — Sydney\'s trusted commercial cleaning company. Offices, warehouses, gyms, medical centres and strata. Fully insured, police-checked, no lock-in contracts. Free quote in 24hrs.',
  keywords: 'commercial cleaning companies sydney, commercial cleaning company sydney, best commercial cleaning company sydney, commercial cleaners sydney, commercial cleaning services sydney',
  openGraph: {
    title: 'Commercial Cleaning Companies Sydney | ProCleanCorp',
    description: 'ProCleanCorp — Sydney\'s trusted commercial cleaning company. Offices, warehouses, gyms, medical and strata. No lock-in contracts. Free quote.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning-companies-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning companies Sydney ProCleanCorp' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-companies-sydney' }
};

const faqs = [
  {
    question: 'What should I look for when comparing commercial cleaning companies in Sydney?',
    answer: 'When comparing commercial cleaning companies in Sydney, check five things: (1) Insurance — minimum $20M public liability with a certificate available on request; (2) Police checks — all staff should hold current police clearances, especially for after-hours access; (3) Equipment — do they own their equipment or rent it? Owned equipment means consistent quality; (4) No lock-in contracts — reputable commercial cleaners earn retention through performance, not contractual lock-in; (5) Direct account management — one point of contact who knows your property, not a call centre. ProCleanCorp meets all five standards and can provide documentation on request.'
  },
  {
    question: 'How much do commercial cleaning companies charge in Sydney?',
    answer: 'Commercial cleaning in Sydney is typically priced from $35–$65 per hour for standard offices, $55–$90 per hour for warehouses and $80–$120 per hour for medical or specialist facilities. Most commercial cleaning companies charge on a fixed-visit basis once the scope is established — a 200m² office might be $250–$400 per weekly clean as a fixed price. ProCleanCorp provides fixed pricing after an on-site assessment — no hourly surprises.'
  },
  {
    question: 'Do commercial cleaning companies in Sydney provide their own products and equipment?',
    answer: 'Yes — all reputable commercial cleaning companies supply their own equipment and cleaning products. ProCleanCorp supplies all chemicals, mops, microfibre cloths, vacuum cleaners and specialised equipment. We can also manage consumables replenishment (toilet paper, hand soap, paper towels, sanitiser) as a bundled service if required.'
  },
  {
    question: 'Can a commercial cleaning company service multiple property types under one contract?',
    answer: 'Yes. Many Sydney businesses use ProCleanCorp to manage multiple property types — an office, a warehouse and a medical centre — under a single contract with one invoice and one account manager. This simplifies procurement, ensures consistent standards across all sites and typically delivers better pricing than managing three separate cleaning relationships.'
  }
];

export default function CommercialCleaningCompaniesSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaning Companies Sydney"
        serviceDescription="ProCleanCorp is Sydney's trusted commercial cleaning company. Offices, warehouses, gyms, medical centres and strata. Fully insured, police-checked staff, no lock-in contracts, one account manager."
        serviceUrl="https://www.procleancorp.com.au/commercial-cleaning-companies-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Warehouse Cleaning', 'Gym Cleaning', 'Medical Centre Cleaning', 'Strata Cleaning', 'Multi-Site Management']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Offices · Warehouses · Medical · Strata</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Commercial Cleaning Companies Sydney — ProCleanCorp
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp is one of Sydney's most trusted commercial cleaning companies — fully insured, police-checked staff, no lock-in contracts and a dedicated account manager for every client. Offices, warehouses, gyms, medical centres and strata across Greater Sydney.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ $20M Public Liability &nbsp;|&nbsp; ✓ Police-Checked Staff &nbsp;|&nbsp; ✓ No Lock-In Contracts</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Commercial cleaning companies Sydney ProCleanCorp"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides commercial cleaning services across Sydney for offices, warehouses, gyms, medical centres and strata properties</strong> — with $20M public liability insurance, police-checked staff, no lock-in contracts and a dedicated account manager for every client. We service businesses of all sizes from single-tenancy offices to multi-location commercial portfolios, with fixed pricing established after an on-site assessment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">What Makes a Good Commercial Cleaning Company in Sydney?</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                The Sydney commercial cleaning market has hundreds of operators — from sole traders to national chains. What separates reliable commercial cleaning companies from the rest is consistency, accountability and the right documentation. A cleaner who can't provide a liability certificate, police check or ARTG-listed products is a compliance risk for your business. ProCleanCorp provides all three as standard.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Commercial Services — All Industries</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { service: 'Office Cleaning', desc: 'From $35/hr. Daily, weekly or fortnightly. CBD to suburbs.' },
                    { service: 'Warehouse Cleaning', desc: 'Floor scrubbing, pressure washing, high-bay. Industrial precincts.' },
                    { service: 'Gym & Fitness Cleaning', desc: 'TGA disinfectants. Pre-opening. Equipment + floor specialists.' },
                    { service: 'Medical Centre Cleaning', desc: 'TGA-registered products. NHMRC protocols. Accreditation docs.' },
                    { service: 'Strata Cleaning', desc: 'Common areas, lifts, car parks. OC committee reporting.' },
                    { service: 'Retail & Showroom', desc: 'Glass polishing, floor buffing, display area maintenance.' },
                    { service: 'Restaurant & Hospitality', desc: 'HACCP kitchen cleaning, pre-inspection, late-night access.' },
                    { service: 'School & Childcare', desc: 'WWC-checked staff. Non-toxic products. Term calendar scheduling.' },
                  ].map((s, i) => (
                    <div key={i} className="border-l-4 border-greenprimary pl-4">
                      <h4 className="font-semibold text-darkblue text-sm mb-1">{s.service}</h4>
                      <p className="text-gray-600 text-xs">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-lg font-bold text-darkblue mb-4">Commercial Cleaning Pricing Guide — Sydney</h3>
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-gray-200"><th className="text-left py-2 text-darkblue">Service Type</th><th className="text-left py-2 text-darkblue">Price Range</th><th className="text-left py-2 text-darkblue">Basis</th></tr></thead>
                  <tbody>
                    {[
                      ['Office cleaning', '$35–$65/hr', 'Fixed weekly visits'],
                      ['Warehouse cleaning', '$55–$90/hr', 'Per visit / area'],
                      ['Medical centre cleaning', '$80–$120/hr', 'Fixed daily/weekly'],
                      ['Strata cleaning', '$80–$300/visit', 'Per complex size'],
                      ['Gym cleaning', '$45–$85/hr', 'Fixed daily visits'],
                    ].map(([type, price, basis], i) => (
                      <tr key={i} className="border-b border-gray-100"><td className="py-2 text-gray-700">{type}</td><td className="py-2 font-semibold text-darkblue">{price}</td><td className="py-2 text-gray-600">{basis}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Why Choose ProCleanCorp</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  {['$20M public liability insurance', 'Police-checked staff', 'No lock-in contracts', 'Dedicated account manager', 'TGA-registered products', 'Accreditation documentation', 'ABN registered & GST registered', 'Same cleaner each visit'].map((a, i) => <li key={i}>✓ {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site assessment for any commercial property type in Sydney.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Commercial Cleaning Companies Sydney</h3>
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
                { label: 'Commercial Cleaning Sydney', href: '/commercial-cleaning-sydney' },
                { label: 'Industrial Cleaning Companies Sydney', href: '/industrial-cleaning-companies-sydney' },
                { label: 'Office Cleaning Sydney', href: '/office-cleaning-sydney' },
                { label: 'Commercial Cleaning Quote', href: '/commercial-cleaning-quote' },
                { label: 'Commercial Cleaning Contract', href: '/commercial-cleaning-contract' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get Your Free Commercial Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">On-site assessment within 24 hours. Fixed pricing, no lock-in contracts, dedicated account manager.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
