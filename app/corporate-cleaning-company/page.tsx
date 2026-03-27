import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Corporate Cleaning Company Sydney | Pro Clean Corp | Premium Office Cleaning',
  description: 'Pro Clean Corp is Sydney\'s trusted corporate cleaning company. Premium standards, same-team consistency, NDA capability and after-hours service for professional offices.',
  keywords: ['corporate cleaning company', 'corporate cleaning company sydney', 'office cleaning company sydney', 'corporate cleaners sydney', 'professional cleaning company sydney'],
  openGraph: {
    title: 'Corporate Cleaning Company Sydney | Pro Clean Corp',
    description: 'Sydney\'s trusted corporate cleaning company. Premium standards, same-team consistency and NDA capability for professional offices.',
    url: 'https://www.procleancorp.com.au/corporate-cleaning-company',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Corporate cleaning company Sydney' }]
  },
  twitter: { card: 'summary_large_image', title: 'Corporate Cleaning Company Sydney | Pro Clean Corp', description: 'Sydney\'s trusted corporate cleaning company with premium standards.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/corporate-cleaning-company' }
};

const faqs = [
  {
    question: 'What does a corporate cleaning company do differently to a regular cleaner?',
    answer: 'A corporate cleaning company like Pro Clean Corp provides: consistent dedicated teams (not rotating casual staff), NDA signing for sensitive office environments, premium eco-certified cleaning products, documented service procedures for each area, account manager contact (not a call centre), and reporting that satisfies corporate governance and facilities management requirements.'
  },
  {
    question: 'How do I choose a corporate cleaning company in Sydney?',
    answer: 'When evaluating a corporate cleaning company: confirm they carry $20M public liability insurance, ask whether staff are employees or subcontractors, verify police clearance procedures, request client references in your industry, confirm NDA capability if required, and review the service agreement for exit terms. Pro Clean Corp meets every benchmark and provides references on request.'
  },
  {
    question: 'Does a corporate cleaning company charge more than standard office cleaners?',
    answer: 'Corporate cleaning typically carries a 15–25% premium over standard office cleaning. This reflects same-team consistency, higher product standards (eco-certified), dedicated account management, NDA capability and the additional compliance processes required for professional corporate environments. For most CBD Sydney offices, this represents strong value relative to the presentation standard achieved.'
  },
  {
    question: 'Can Pro Clean Corp clean our entire Sydney CBD building, including multiple tenancies?',
    answer: 'Yes. Pro Clean Corp works with building managers to provide coordinated cleaning across multiple corporate tenancies in the same building — delivering consistent standards for each tenant while coordinating access, schedules and reporting through a single building management point of contact.'
  }
];

export default function CorporateCleaningCompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Corporate Cleaning Company Sydney"
        serviceDescription="Pro Clean Corp is Sydney's trusted corporate cleaning company. Same-team consistency, NDA capability, premium products and after-hours service for professional offices."
        serviceUrl="/corporate-cleaning-company"
        serviceType="ProfessionalService"
        price="$$$"
        additionalServices={['Executive Office Cleaning', 'Boardroom Cleaning', 'After-Hours Cleaning', 'NDA Cleaning Teams', 'Multi-Tenancy Building Cleaning', 'Corporate Reception Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Sydney&apos;s Trusted Corporate Cleaning Company</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                What a Corporate Cleaning Company Should Look Like
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Pro Clean Corp is Sydney&apos;s corporate cleaning company</strong> of choice for law firms, financial services, consulting groups and government agencies who demand consistency, discretion and a presentation standard that matches their brand.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Same dedicated team — every visit, no surprises',
                  'NDA signing for sensitive environments',
                  'Premium eco-certified products',
                  'After-hours or early morning scheduling',
                  'Dedicated account manager (not a call centre)',
                  '$20M public liability insurance'
                ].map((item, i) => (
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
                src="/images/services/office.webp"
                alt="Corporate cleaning company Sydney"
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
            <strong>A corporate cleaning company is defined by consistency, discretion and premium standards</strong> — not just who shows up with a mop. Pro Clean Corp delivers all three: the same team each visit, NDA-capable staff for sensitive offices, eco-certified products and an account manager who knows your building.
          </p>
        </div>
      </section>

      {/* What Sets Corporate Cleaning Apart */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-12 text-center">What Separates a Corporate Cleaning Company from Regular Cleaners</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                category: 'Standard Cleaning Company',
                items: ['Rotating anonymous staff', 'Standard commercial products', 'Call centre for issues', 'Hourly or variable pricing', 'No NDA capability', 'Generic cleaning procedures'],
                highlight: false
              },
              {
                category: 'Pro Clean Corp Corporate',
                items: ['Same dedicated team every visit', 'Premium eco-certified products', 'Dedicated account manager', 'Fixed monthly pricing', 'Full NDA capability', 'Custom procedures per area'],
                highlight: true
              }
            ].map((col, i) => (
              <div key={i} className={`rounded-2xl p-7 ${col.highlight ? 'bg-blueprimary text-white' : 'bg-gray-50'}`}>
                <h3 className={`text-lg font-bold mb-5 ${col.highlight ? 'text-white' : 'text-darkblue'}`}>{col.category}</h3>
                <ul className="space-y-3">
                  {col.items.map((item, j) => (
                    <li key={j} className={`flex items-center gap-3 text-sm ${col.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                      <span className={col.highlight ? 'text-green-300 font-bold' : 'text-gray-400'}>
                        {col.highlight ? '✓' : '—'}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Industries */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Industries We Serve as a Corporate Cleaning Company</h2>
              <div className="space-y-3">
                {[
                  { industry: 'Legal & Law Firms', detail: 'Document sensitivity, secure room protocols, out-of-hours only' },
                  { industry: 'Financial Services', detail: 'Trading floor protocols, NDA teams, security clearance capable' },
                  { industry: 'Management Consulting', detail: 'Hot-desk hygiene, presentation-ready meeting rooms' },
                  { industry: 'Government & Regulatory Bodies', detail: 'Documented procedures, police-checked staff, audit-ready records' },
                  { industry: 'Technology & Software', detail: 'Hardware-safe cleaning, server-room adjacent protocols' },
                  { industry: 'Accounting & Advisory', detail: 'Confidential environment protocols, after-hours scheduling' }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                    <div className="font-bold text-darkblue text-sm">{item.industry}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/services/hero4.jpg"
                alt="Corporate cleaning company at work"
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
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Corporate Cleaning Company</h2>
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
          <h2 className="text-3xl font-bold mb-4">Engage Sydney&apos;s Corporate Cleaning Company</h2>
          <p className="text-xl text-blue-100 mb-8">On-site assessment. Written fixed-price quote. Same team from day one.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
