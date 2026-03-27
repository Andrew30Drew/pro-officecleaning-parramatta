import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Contract Guide | ProCleanCorp Sydney',
  description: 'What should a commercial cleaning contract include? KPIs, insurance and exit clauses explained. ProCleanCorp offers flexible no-lock-in contracts.',
  keywords: 'commercial cleaning contract sydney, commercial cleaning contract what to look for, cleaning contract exit clause sydney, commercial cleaning kpis, no lock in cleaning contract sydney',
  openGraph: {
    title: 'Commercial Cleaning Contract Guide | ProCleanCorp Sydney',
    description: 'What should a commercial cleaning contract include? KPIs, insurance, exit clauses explained. ProCleanCorp\'s no-lock-in contract guide.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning-contract',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning contract guide Sydney' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-contract' }
};

const faqs = [
  {
    question: 'Should I sign a long-term commercial cleaning contract in Sydney?',
    answer: 'No. A long-term lock-in commercial cleaning contract (12 months or more) is rarely in the client\'s interest. It prevents you from switching if service quality declines, and it removes the cleaner\'s incentive to maintain standards. A reputable commercial cleaning company in Sydney should offer month-to-month contracts without a lock-in penalty — if they insist on a long-term contract, that is a warning sign. ProCleanCorp offers month-to-month contracts for all services.'
  },
  {
    question: 'What happens if I want to cancel my commercial cleaning contract?',
    answer: 'Under a ProCleanCorp commercial cleaning contract, you can cancel with 30 days\' written notice with no penalty or cancellation fee. This is standard for reputable commercial cleaners. Be wary of contracts requiring 90+ days notice or containing penalty clauses for early termination — these are disproportionate for a cleaning service and indicate a provider more focused on retention than service quality.'
  },
  {
    question: 'What KPIs should a commercial cleaning contract include?',
    answer: 'A good commercial cleaning contract should include measurable quality KPIs such as: a cleaning schedule specifying which tasks are completed on which days, a sign-off sheet or digital log completed after each visit, a response time KPI for ad hoc requests or complaints (typically 24 hours), and a quality review process (monthly or quarterly walkthrough). KPIs protect both parties — the client can evidence poor performance, and the cleaner can demonstrate compliance.'
  }
];

const contractChecklist = [
  { category: 'Scope of Works', items: ['Complete list of all tasks to be performed', 'Frequency of each task (daily/weekly/monthly)', 'Areas covered with clear boundaries', 'Any exclusions explicitly stated'] },
  { category: 'Pricing & Payment', items: ['Fixed price per visit (not hourly estimates)', 'GST clearly stated', 'Invoice frequency (weekly/monthly)', 'Price review clause (annual CPI adjustment is reasonable)'] },
  { category: 'Insurance', items: ['Public liability insurance (minimum $20M)', 'Workers compensation insurance', 'Certificates of currency provided on request', 'Contractor insurance covers all staff on site'] },
  { category: 'Exit Clause', items: ['30-day notice period (standard and fair)', 'No lock-in beyond 30 days', 'No penalty for early termination', 'Equipment and keys returned promptly on exit'] },
  { category: 'Quality & KPIs', items: ['Completion log or sign-off after each visit', 'Response time for complaints (24 hours standard)', 'Process for escalating unresolved issues', 'Regular quality review schedule'] },
  { category: 'Staff & Compliance', items: ['All staff police-checked and/or WWC-checked (if required)', 'Training records available on request', 'Uniform and ID policy for on-site staff', 'Compliance documentation for regulated facilities (medical, food)'] },
];

export default function CommercialCleaningContractPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaning Contract Guide Sydney"
        serviceDescription="A commercial cleaning contract should specify the services included, cleaning frequency, pricing structure, insurance coverage, quality KPIs and exit clause — with month-to-month terms."
        serviceUrl="https://www.procleancorp.com.au/commercial-cleaning-contract"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning Sydney', 'Commercial Cleaning Sydney', 'No Lock-In Contracts']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white max-w-3xl mx-auto">
            <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Commercial Cleaning Contract Guide — Sydney</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Commercial Cleaning Contracts Sydney — What to Look for Before You Sign
            </h1>
            <p className="text-xl mb-6 text-gray-100">
              Everything a commercial cleaning contract should include — and the red flags that should make you walk away. ProCleanCorp offers no lock-in, month-to-month contracts.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>A commercial cleaning contract should specify the services included, cleaning frequency, pricing structure, insurance coverage, quality KPIs and exit clause</strong> — and any reputable cleaner should offer month-to-month terms without a lock-in penalty. If a cleaning company insists on a 12-month lock-in, that is a red flag.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-darkblue mb-8">Commercial Cleaning Contract Checklist</h2>
          <p className="text-gray-700 mb-8 text-lg">Use this checklist when reviewing any commercial cleaning contract. Every item marked ✓ should be present in a well-structured contract from a reputable provider.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contractChecklist.map(({ category, items }, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-darkblue mb-3 text-lg">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start space-x-2 text-sm text-gray-700">
                      <span className="text-greenprimary font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-darkblue mb-4">Red Flags in Commercial Cleaning Contracts</h2>
            <ul className="space-y-3">
              {[
                ['12-month+ lock-in with penalty clauses', 'A reputable cleaner does not need to lock you in — they keep you through quality.'],
                ['Vague scope of works ("clean as required")', 'Without a defined scope, you have no recourse if tasks are skipped.'],
                ['No insurance documentation', 'Always obtain certificates of currency for public liability and workers comp before work begins.'],
                ['Price escalation without notice', 'Price reviews should be agreed in advance (e.g. annual CPI adjustment, not arbitrary increases).'],
                ['No quality review process', 'If there is no mechanism to raise complaints or measure performance, quality will decline.'],
                ['Subcontracting without disclosure', 'Ask whether the company directly employs its staff or subcontracts — subcontracting chains reduce accountability.'],
              ].map(([flag, reason], i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold text-lg mt-0.5 flex-shrink-0">⚠</span>
                  <div>
                    <span className="font-semibold text-gray-800">{flag}:</span>
                    <span className="text-gray-700"> {reason}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Commercial Cleaning Contracts</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-darkblue mb-2">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-darkblue mb-4">Related Resources</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Commercial Cleaning Sydney', href: '/commercial-cleaning-sydney' },
                { label: 'Get a Commercial Cleaning Quote', href: '/commercial-cleaning-quote' },
                { label: 'Commercial Cleaning Cost', href: '/how-much-does-commercial-cleaning-cost' },
                { label: 'Professional Commercial Cleaning', href: '/professional-commercial-cleaning' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">ProCleanCorp — No Lock-In Cleaning Contracts</h3>
            <p className="text-xl mb-4 text-gray-100">Month-to-month. 30-day notice. Fixed-price scope. Cancel any time without penalty.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
