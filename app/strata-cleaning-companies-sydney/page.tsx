import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Companies Sydney | How to Choose | Pro Clean Corp',
  description: 'Comparing strata cleaning companies in Sydney? Learn what to look for — insurance, reporting, experience. Pro Clean Corp: 4.8★, fully insured, free quote.',
  keywords: ['strata cleaning companies sydney', 'best strata cleaning company sydney', 'strata cleaning contractors sydney', 'body corporate cleaning companies', 'strata cleaners sydney'],
  openGraph: {
    title: 'Strata Cleaning Companies Sydney | How to Choose | Pro Clean Corp',
    description: 'How to choose the right strata cleaning company in Sydney. What to look for, comparison table and why Pro Clean Corp is the trusted choice.',
    url: 'https://www.procleancorp.com.au/strata-cleaning-companies-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Strata cleaning companies Sydney comparison' }]
  },
  twitter: { card: 'summary_large_image', title: 'Strata Cleaning Companies Sydney | Pro Clean Corp', description: 'How to choose the right strata cleaning company in Sydney.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-companies-sydney' }
};

const faqs = [
  {
    question: 'What should I look for when choosing a strata cleaning company in Sydney?',
    answer: 'Key factors include: public liability insurance of at least $20 million, written service reports after each visit, police-checked and uniformed staff, experience with your building type (high-rise vs small block), OC committee reporting formats and transparent fixed pricing. Avoid companies that cannot provide a written service agreement or that subcontract work without disclosure.'
  },
  {
    question: 'How do strata cleaning companies price their services in Sydney?',
    answer: 'Reputable strata cleaning companies price based on the number of common areas, building levels, lift count, car park size and required visit frequency. Expect written fixed-price quotes after an on-site assessment. Be wary of hourly rates for strata — fixed pricing provides budget certainty for OC committees.'
  },
  {
    question: 'Do strata cleaning companies in Sydney provide OC committee reports?',
    answer: 'Professional companies like Pro Clean Corp provide written service reports after every visit, listing completed tasks, any maintenance issues noted and photos on request. These reports are compatible with leading strata management software including StrataMax and Strata Master.'
  },
  {
    question: 'Is Pro Clean Corp an insured strata cleaning company?',
    answer: 'Yes. Pro Clean Corp carries $20 million public liability insurance, workers compensation and professional indemnity cover. All staff are police-checked, uniformed and trained in strata-specific cleaning protocols. We can provide certificates of insurance to strata managers and OC committees on request.'
  }
];

export default function StrataCleaningCompaniesSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Companies Sydney"
        serviceDescription="Professional strata cleaning company in Sydney. Fully insured, OC-ready reporting, police-checked staff and fixed pricing for all building types."
        serviceUrl="/strata-cleaning-companies-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Strata Common Area Cleaning', 'Lobby & Foyer Cleaning', 'Lift Cleaning', 'Bin Room Cleaning', 'Car Park Sweeping', 'OC Committee Reporting']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Sydney&apos;s Trusted Strata Cleaning Partner</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Choosing the Right Strata Cleaning Company in Sydney
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Not all <strong>strata cleaning companies in Sydney</strong> are equal. Pro Clean Corp stands out with $20M insurance, written OC reports, police-checked staff and transparent fixed pricing — verified by 1,200+ reviews.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['4.8★ 1,200+ Reviews', '$20M Public Liability', 'Police-Checked Staff', 'Fixed Price Guarantee'].map((b, i) => (
                  <span key={i} className="bg-white/15 border border-white/25 text-white text-sm px-4 py-2 rounded-lg">✓ {b}</span>
                ))}
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/strata.jpg"
                alt="Strata cleaning company Sydney"
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
            <strong>When comparing strata cleaning companies in Sydney</strong>, the key differentiators are insurance level, reporting quality, staff vetting and pricing transparency. Pro Clean Corp meets every benchmark — $20M public liability, written OC reports, police-checked cleaners and fixed monthly pricing for all building types.
          </p>
        </div>
      </section>

      {/* What to Look For */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">What to Look for in a Strata Cleaning Company</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Use this checklist when evaluating any Sydney strata cleaning company.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Public Liability Insurance', detail: 'Minimum $20M. Request certificates before signing. Strata managers are personally liable if a contractor is uninsured.', status: 'Critical' },
              { title: 'Police-Checked Staff', detail: 'Staff must have current police clearances. They have access to your building 24/7. Non-negotiable for resident safety.', status: 'Critical' },
              { title: 'Written Service Reports', detail: 'Every visit should generate a report listing tasks completed, issues flagged and areas serviced. Essential for OC records.', status: 'Essential' },
              { title: 'Fixed Pricing', detail: 'Monthly fixed fees allow accurate OC budget forecasting. Avoid hourly-rate contracts for recurring strata cleaning.', status: 'Essential' },
              { title: 'Experience with Your Building Type', detail: 'High-rise cleaning differs from small block cleaning. Ask for references from buildings of similar size and type.', status: 'Important' },
              { title: 'No-Subcontract Policy', detail: 'Some companies subcontract work to unknown third parties. Ask directly — and get a written no-subcontracting clause.', status: 'Important' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border-t-4" style={{ borderColor: item.status === 'Critical' ? '#ef4444' : item.status === 'Essential' ? '#f59e0b' : '#22c55e' }}>
                <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${item.status === 'Critical' ? 'text-red-500' : item.status === 'Essential' ? 'text-amber-500' : 'text-green-600'}`}>{item.status}</div>
                <h3 className="font-bold text-darkblue mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">Pro Clean Corp vs Other Strata Cleaning Companies</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blueprimary text-white">
                  <th className="text-left px-5 py-3 rounded-tl-xl">What to Check</th>
                  <th className="px-5 py-3 text-center">Pro Clean Corp</th>
                  <th className="px-5 py-3 text-center rounded-tr-xl">Typical Competitor</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$20M Public Liability Insurance', '✅ Yes', '⚠️ Often $10M or less'],
                  ['Written OC Reports Every Visit', '✅ Yes', '❌ On request only'],
                  ['Police-Checked All Staff', '✅ Yes', '⚠️ Varies by contractor'],
                  ['Fixed Monthly Pricing', '✅ Yes', '⚠️ Often hourly rate'],
                  ['No Lock-In Contracts', '✅ 30-day notice', '❌ 12-month minimum'],
                  ['No Subcontracting', '✅ Guaranteed', '⚠️ Often subcontracted'],
                  ['Dedicated Account Manager', '✅ Premium plans', '❌ Call centre only'],
                  ['Response Within 24hrs', '✅ Yes', '⚠️ 48–72hrs typical']
                ].map(([check, us, them], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 font-medium text-darkblue">{check}</td>
                    <td className="px-5 py-3 text-center text-green-700 font-semibold">{us}</td>
                    <td className="px-5 py-3 text-center text-gray-600">{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Image + Why Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/services/commercial.webp"
                alt="Pro Clean Corp strata cleaning team"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Why Pro Clean Corp is Sydney&apos;s Preferred Strata Cleaner</h2>
              <div className="space-y-4">
                {[
                  'Over 10 years experience servicing strata buildings across Greater Sydney',
                  'Trained in strata-specific cleaning protocols for high-rise and low-rise buildings',
                  'Compatible with all major strata management software for seamless reporting',
                  'Dedicated liaison with strata managers — attend site meetings on request',
                  'Rapid response to urgent cleaning requests — same day in most Sydney areas'
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-greenprimary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Strata Cleaning Companies Sydney</h2>
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

      {/* Related */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-darkblue mb-4">Related Strata Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Strata Cleaning Services Sydney', href: '/strata-cleaning-services-sydney' },
              { label: 'Professional Strata Cleaning', href: '/professional-strata-cleaning' },
              { label: 'Strata Cleaning NSW', href: '/strata-cleaning-nsw' },
              { label: 'Strata & Commercial Cleaning', href: '/strata-and-commercial-cleaning' },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blueprimary transition">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blueprimary to-darkblue text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get a Quote from Sydney&apos;s Trusted Strata Cleaner</h2>
          <p className="text-xl text-blue-100 mb-8">Free on-site assessment. Written fixed-price quote within 24 hours. No obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
