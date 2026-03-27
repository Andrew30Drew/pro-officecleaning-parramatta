import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Professional Strata Cleaning Sydney | OC Committee Specialists | ProCleanCorp',
  description: 'Professional strata cleaning across Sydney. Insurance credentials, OHS compliance, OC committee reporting and body corporate compliance documentation. From $80/visit. Free quote in 24hrs.',
  keywords: 'professional strata cleaning sydney, professional strata cleaning, strata cleaning company sydney, body corporate cleaning sydney, OC committee cleaning sydney, strata cleaning credentials',
  openGraph: {
    title: 'Professional Strata Cleaning Sydney | OC Committee Specialists | ProCleanCorp',
    description: 'Professional strata cleaning across Sydney. Insurance, OHS compliance, OC reporting, body corporate compliance docs. From $80/visit. Free quote.',
    url: 'https://www.procleancorp.com.au/professional-strata-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Professional strata cleaning Sydney OC committee' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/professional-strata-cleaning-sydney' }
};

const faqs = [
  {
    question: 'What credentials should a professional strata cleaning company have?',
    answer: 'A professional strata cleaning company should hold: (1) Public liability insurance of at least $20M — essential for working in occupied residential buildings; (2) Workers compensation insurance — protecting your OC from liability for cleaners injured on your property; (3) Police-checked staff — required for access to secure strata buildings; (4) WHS management system — covering safe work in stairwells, car parks and confined spaces like bin rooms; (5) ABN and GST registration — required for strata financial reporting. ProCleanCorp can provide certificates for all five on request.'
  },
  {
    question: 'What should a professional strata cleaning contract include?',
    answer: 'A professional strata cleaning contract should specify: the exact scope of works (which common areas, which tasks, which frequency), the cleaning products used and their safety data sheets, the cleaning schedule with days and times, quality KPIs and inspection process, the reporting structure (service reports, maintenance flagging), liability and insurance details, and exit/termination clauses. It should NOT include unreasonable lock-in periods longer than 30–60 days notice. ProCleanCorp\'s contracts are month-to-month with 30 days notice — we earn retention through performance.'
  },
  {
    question: 'How do you report to OC committees for professional strata cleaning?',
    answer: 'ProCleanCorp provides written service reports after each cleaning visit — itemising what was cleaned, any areas flagged for maintenance (damaged fixtures, graffiti, safety hazards), product batches used and the time of service. Reports are formatted for upload to strata management software (StrataVote, PropertyMe, Palace) and available digitally within 24 hours of each visit. We also attend annual general meetings and site inspections on request at no additional charge.'
  },
  {
    question: 'How much does professional strata cleaning cost in Sydney?',
    answer: 'Professional strata cleaning in Sydney costs from $80 per visit for small complexes under 20 units, $300–$600 per month for medium buildings, and $700–$1,500 per month for large high-rise strata. Pricing depends on the number of levels, common area types (car parks, lifts, pools, gardens) and cleaning frequency. ProCleanCorp provides fixed-price quotes after an on-site assessment — no surprises for OC budget planning.'
  }
];

export default function ProfessionalStrataCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Professional Strata Cleaning Sydney"
        serviceDescription="Professional strata cleaning across Sydney for OC committees, strata managers and body corporate. Insurance credentials, OHS compliance, written service reports and body corporate compliance documentation. From $80 per visit."
        serviceUrl="https://www.procleancorp.com.au/professional-strata-cleaning-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Common Area Cleaning', 'OC Committee Reporting', 'Lobby & Foyer Cleaning', 'Car Park Cleaning', 'Lift & Stairwell Cleaning', 'Bin Room Sanitisation']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">OC Committees · Strata Managers · Body Corporate</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Professional Strata Cleaning Sydney — Credentialed, Insured, OC-Ready
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides professional strata cleaning across Sydney with full insurance credentials, OHS compliance documentation, written service reports and body corporate-ready cleaning contracts — from $80 per visit.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ $20M Public Liability &nbsp;|&nbsp; ✓ OC Service Reports &nbsp;|&nbsp; ✓ From $80/visit</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/strata.webp" alt="Professional strata cleaning Sydney OC committee"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>Professional strata cleaning means more than a clean floor</strong> — it means the right insurance credentials, OHS-compliant work methods, written service reports for strata manager records, and a cleaning contractor who attends AGMs and flags maintenance issues as part of the service. ProCleanCorp provides all of this for strata schemes across Sydney, with month-to-month contracts and fixed pricing that fits OC budget cycles.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">What Makes Strata Cleaning Professional?</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Owners corporations and strata managers in Sydney deal with a consistent problem: cleaners who seem professional at quote stage but lack the documentation, insurance or reporting that a strata scheme's compliance requirements actually demand. When something goes wrong — a slip and fall in a wet corridor, a damaged fire door, a cleaning chemical incident — the OC needs to know their cleaner has adequate insurance and the incident will be documented.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp is built for strata compliance. Every cleaning visit generates a written service report. Our liability certificate ($20M) and workers compensation policy are available on request for your strata manager's files. All staff are police-checked and trained in working safely in occupied residential buildings. And our contracts are month-to-month — because a professional strata cleaner should not need a 12-month lock-in to retain clients.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">ProCleanCorp Strata Credentials</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { cred: '$20M Public Liability Insurance', detail: 'Certificate available for strata manager files and OC records' },
                    { cred: 'Workers Compensation Insurance', detail: 'Full coverage — protects your OC from liability for staff injuries' },
                    { cred: 'Police-Checked Staff', detail: 'Current clearances for all staff with building access' },
                    { cred: 'WHS Management System', detail: 'Safe work procedures for stairwells, car parks, bin rooms and lifts' },
                    { cred: 'ABN & GST Registration', detail: 'Tax compliant for strata financial reporting and levy accounting' },
                    { cred: 'OC-Ready Service Reports', detail: 'Written report after every visit — formatted for strata software upload' },
                  ].map((c, i) => (
                    <div key={i} className="border-l-4 border-greenprimary pl-4">
                      <h4 className="font-semibold text-darkblue text-sm mb-1">{c.cred}</h4>
                      <p className="text-gray-600 text-xs">{c.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-lg font-bold text-darkblue mb-4">Strata Cleaning Pricing — Sydney</h3>
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-gray-200"><th className="text-left py-2 text-darkblue">Building Type</th><th className="text-left py-2 text-darkblue">Typical Cost</th><th className="text-left py-2 text-darkblue">Frequency</th></tr></thead>
                  <tbody>
                    {[
                      ['Small complex (under 20 units)', '$80–$160/visit', 'Weekly or fortnightly'],
                      ['Medium building (20–60 units)', '$300–$600/month', '2–3x per week'],
                      ['Large high-rise (60+ units)', '$700–$1,500/month', 'Daily or 5x/week'],
                      ['Car park only', '$150–$350/visit', 'Fortnightly'],
                    ].map(([type, cost, freq], i) => (
                      <tr key={i} className="border-b border-gray-100"><td className="py-2 text-gray-700">{type}</td><td className="py-2 font-semibold text-darkblue">{cost}</td><td className="py-2 text-gray-600">{freq}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Areas We Service</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Sydney CBD & Inner City', 'Eastern Suburbs', 'Inner West', 'North Shore', 'Parramatta & Western Sydney', 'Hills District', 'Sutherland Shire', 'Chatswood & North West'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site assessment. Fixed pricing for OC budget planning. All credentials provided.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Professional Strata Cleaning Sydney</h3>
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
                { label: 'Strata Cleaning Sydney', href: '/strata-cleaning-sydney' },
                { label: 'Body Corporate Cleaning Sydney', href: '/body-corporate-cleaning-sydney' },
                { label: 'Strata Cleaning Prices', href: '/strata-cleaning-prices' },
                { label: 'Strata Cleaning Parramatta', href: '/strata-cleaning-parramatta' },
                { label: 'Commercial Cleaning Companies Sydney', href: '/commercial-cleaning-companies-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get Your Free Professional Strata Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">On-site assessment within 24 hours. Full credentials provided. Fixed pricing, month-to-month contracts.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
