import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Quote Sydney | ProCleanCorp Free Quote',
  description: 'Get a free commercial cleaning quote in Sydney. On-site assessment within 24 hours. Fixed pricing for offices, warehouses, gyms and medical centres. Book now.',
  keywords: 'commercial cleaning quote sydney, free commercial cleaning quote, commercial cleaning quote online sydney, office cleaning quote sydney, get a cleaning quote sydney',
  openGraph: {
    title: 'Commercial Cleaning Quote Sydney | ProCleanCorp Free Quote',
    description: 'Free commercial cleaning quotes across Sydney within 24 hours. Fixed pricing, no lock-in. All facility types.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning-quote',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning quote Sydney free assessment' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-quote' }
};

const faqs = [
  {
    question: 'Is a commercial cleaning quote from ProCleanCorp really free?',
    answer: 'Yes. ProCleanCorp provides fully free commercial cleaning quotes with no obligation. Our quote process includes a free on-site visit (for facilities over 200m²) or a detailed phone/email assessment for smaller facilities. There is no charge for the quote, no obligation to proceed, and we do not add a fee if you decline after the assessment. We believe in earning your business through price and quality — not through sales pressure.'
  },
  {
    question: 'How long does an on-site commercial cleaning quote take?',
    answer: 'A standard on-site commercial cleaning assessment takes 20–40 minutes. We walk through the facility with you to identify all cleaning zones, floor types, bathroom count, access requirements and any specialist cleaning needs. We then provide a written fixed-price proposal within 24 hours of the visit. For small offices (under 200m²), we can often provide a quote over the phone or via email without a site visit.'
  },
  {
    question: 'What information do I need to provide for a commercial cleaning quote?',
    answer: 'For an accurate commercial cleaning quote, we need: facility size (approximate m² or number of rooms), type of facility (office, warehouse, gym, medical, strata etc.), required cleaning frequency (daily, 3x/week, weekly etc.), access arrangements (key, fob, after-hours etc.), and any specific inclusions or compliance requirements (HACCP, AHPRA, medical-grade etc.). The more detail you can provide, the more accurate the first quote will be.'
  }
];

const processSteps = [
  { step: '1', title: 'Call or enquire online', body: 'Call 1300 494 983 or submit an online enquiry. Tell us your facility type, location and what you need cleaned.' },
  { step: '2', title: 'Free on-site assessment', body: 'We visit your facility at a time that suits you — typically within 24 hours of your enquiry. No charge, no obligation.' },
  { step: '3', title: 'Written fixed-price proposal', body: 'You receive a detailed written proposal within 24 hours of the assessment — with a fixed price per visit and full scope of works.' },
  { step: '4', title: 'Review and confirm', body: 'Review the proposal at your own pace. Ask questions, negotiate inclusions, or compare against other quotes. No pressure.' },
  { step: '5', title: 'Start cleaning', body: 'Once you confirm, we schedule your first clean — often within the same week. Your regular cleaner is briefed on your specific requirements.' },
];

export default function CommercialCleaningQuotePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaning Quote Sydney"
        serviceDescription="ProCleanCorp provides free commercial cleaning quotes across Sydney within 24 hours, with fixed pricing for offices, warehouses, gyms, medical centres and strata properties."
        serviceUrl="https://www.procleancorp.com.au/commercial-cleaning-quote"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Warehouse Cleaning', 'Gym Cleaning', 'Medical Cleaning', 'Strata Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white max-w-3xl mx-auto">
            <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Free Commercial Cleaning Quote — Sydney</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Get a Commercial Cleaning Quote in Sydney — Free On-Site Assessment
            </h1>
            <p className="text-xl mb-6 text-gray-100">
              Free on-site assessment within 24 hours. Fixed pricing for offices, warehouses, gyms, medical centres and strata. No lock-in contracts.
            </p>
            <div className="text-3xl font-bold text-green-200">Call 1300 494 983</div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides free commercial cleaning quotes across Sydney within 24 hours</strong>, with fixed pricing (not hourly estimates) for offices, warehouses, gyms, medical centres and strata properties. Our quote process is transparent — you'll know exactly what is included before you commit.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-darkblue mb-8">How the Quote Process Works</h2>
          <div className="grid md:grid-cols-5 gap-4 mb-16">
            {processSteps.map(({ step, title, body }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 bg-greenprimary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">{step}</div>
                <h3 className="font-bold text-darkblue mb-2 text-sm">{title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-darkblue mb-6">What Information to Have Ready</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Facility details', items: ['Approximate size in m² or number of rooms', 'Number of bathrooms/toilets', 'Type of flooring (carpet, tiles, polished concrete)', 'Number of staff', 'Any specialist zones (kitchen, server room, etc.)'] },
              { title: 'Cleaning requirements', items: ['Required frequency (daily, weekly, etc.)', 'Preferred days and start times', 'Access arrangements (key, fob, alarm codes)', 'Any compliance requirements (HACCP, AHPRA, etc.)', 'Current problems or priorities (e.g. bathrooms need attention)'] },
            ].map(({ title, items }, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-darkblue mb-3">{title}</h3>
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

          <div className="bg-blue-50 border border-blueprimary/20 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-darkblue mb-4">Why Fixed-Price Proposals Are Better Than Hourly Quotes</h2>
            <p className="text-gray-700 mb-4">Many commercial cleaners quote an hourly rate and bill you for actual time — meaning your monthly cleaning cost can vary. ProCleanCorp provides fixed-price proposals so you always know exactly what you pay per visit, making budgeting simple and eliminating invoice surprises.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                ['Predictable costs', 'Same price every visit — no surprises on your invoice.'],
                ['Accountable scope', 'Every task in your scope of works must be completed for the price.'],
                ['Easy to compare', 'Fixed-price proposals are simpler to compare across multiple cleaners.'],
              ].map(([title, body], i) => (
                <div key={i} className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-darkblue mb-1 text-sm">{title}</h3>
                  <p className="text-gray-700 text-sm">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Commercial Cleaning Quotes</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-darkblue mb-2">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-darkblue mb-4">Pricing Guides</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Commercial Cleaning Cost Sydney', href: '/how-much-does-commercial-cleaning-cost' },
                { label: 'Office Cleaning Prices', href: '/office-cleaning-price' },
                { label: 'Strata Cleaning Prices', href: '/strata-cleaning-prices' },
                { label: 'Gym Cleaning Cost', href: '/gym-cleaning-cost' },
                { label: 'Commercial Cleaning Contracts', href: '/commercial-cleaning-contract' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Ready to Get Your Free Quote?</h3>
            <p className="text-xl mb-4 text-gray-100">On-site assessment within 24 hours. Fixed-price proposal. No lock-in contract.</p>
            <div className="text-3xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
