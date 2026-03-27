import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Companies Sydney | How to Choose the Right One | Pro Clean Corp',
  description: 'Looking for the best commercial cleaning companies in Sydney? Pro Clean Corp offers transparent pricing, police-checked staff & quality guarantees. Call 1300 494 983.',
  keywords: [
    'commercial cleaning companies',
    'commercial cleaning companies Sydney',
    'best commercial cleaning company NSW',
    'top commercial cleaning companies Sydney',
    'commercial cleaning company comparison',
    'office cleaning company Sydney',
    'Pro Clean Corp commercial cleaning'
  ],
  openGraph: {
    title: 'Commercial Cleaning Companies Sydney | Pro Clean Corp',
    description: 'Compare commercial cleaning companies in Sydney. Pro Clean Corp delivers transparent pricing, vetted staff and satisfaction guarantees for your business.',
    url: '/commercial-cleaning-companies',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Cleaning Companies Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Companies Sydney | Pro Clean Corp',
    description: 'Find the best commercial cleaning company in Sydney. Transparent pricing, vetted staff, and quality guarantees.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-cleaning-companies' }
};

const selectionCriteria = [
  { title: 'Verify Insurance & Licensing', desc: 'Any reputable commercial cleaning company should carry current public liability insurance and workers\' compensation. Always request certificates of currency before signing a contract.' },
  { title: 'Check Staff Vetting Processes', desc: 'Ask whether cleaners are directly employed or subcontracted, and whether they undergo police checks and structured training. This is especially important for key-holder access.' },
  { title: 'Review Quality Assurance Systems', desc: 'Quality commercial cleaning companies use documented inspection systems, digital reporting tools, and dedicated account managers — not just reactive complaint handling.' },
  { title: 'Understand the Contract Terms', desc: 'Look for flexibility in contract length and scope. Avoid companies that lock you into long terms without performance guarantees or exit provisions.' },
  { title: 'Assess Industry Experience', desc: 'A commercial cleaning company with experience in your specific industry (medical, retail, industrial) will deliver superior results through relevant product knowledge and protocols.' },
  { title: 'Request References', desc: 'Ask for references from current clients in similar industries or of similar business size. Genuine reviews from local businesses are a reliable quality indicator.' },
];

export default function CommercialCleaningCompaniesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaning Companies Sydney"
        serviceDescription="Pro Clean Corp is one of Sydney's leading commercial cleaning companies — offering transparent pricing, police-checked staff, quality guarantees and flexible contracts."
        serviceUrl="/commercial-cleaning-companies"
        serviceType="Commercial Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Office Cleaning Services',
          'Retail Cleaning',
          'Industrial Cleaning',
          'Medical Grade Cleaning',
          'Strata Cleaning',
          'Gymnasium Cleaning'
        ]}
        faqs={[
          {
            question: 'What should I look for when comparing commercial cleaning companies?',
            answer: 'When comparing commercial cleaning companies, look for: valid public liability insurance, directly employed (not subcontracted) staff, police-checked cleaners, documented quality assurance systems, industry-specific experience, and flexible contract terms with satisfaction guarantees.'
          },
          {
            question: 'How much do commercial cleaning companies charge in Sydney?',
            answer: 'Commercial cleaning company pricing in Sydney varies by facility type, size, frequency, and required services. Typical office cleaning ranges from $35–$55/hour. Most companies offer monthly contract pricing for regular clients. Always request a detailed, itemised quote before committing.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Sydney&apos;s Trusted Commercial Cleaners
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Cleaning Companies
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Not all commercial cleaning companies are created equal. Pro Clean Corp stands apart through direct employment, police-checked staff, quality audit systems, and a genuine satisfaction guarantee for every Sydney business we serve.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Free Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Satisfaction Guarantee</span>
                <span>✓ No Hidden Fees</span>
                <span>✓ Flexible Contracts</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial cleaning companies Sydney NSW"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">10+</div>
                <div className="text-xs text-gray-500">Years in Sydney Market</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            When evaluating <strong>commercial cleaning companies</strong> in Sydney, the key differentiators are staff vetting, quality systems, contract transparency, and industry-specific expertise. Pro Clean Corp was built to exceed on all four — giving Sydney businesses a commercial cleaning partner they can genuinely rely on.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">How to Choose the Right Commercial Cleaning Company in Sydney</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Sydney has hundreds of commercial cleaning companies ranging from one-person operators to national franchises. With so many options, choosing the right provider for your business can feel overwhelming. The key is knowing what separates a truly professional commercial cleaning company from one that simply talks a good game.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp was established in response to the frustration Sydney businesses experienced with inconsistent commercial cleaners — the unreliable attendance, the subcontracted strangers with no background checks, the 1300 number that nobody answers. We built our company on the exact principles that those providers lacked.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">What Makes Pro Clean Corp Different</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Every one of our cleaning professionals is directly employed, police-checked, and trained to a documented standard. Our quality audit system generates digital reports after every major clean. And your dedicated account manager is reachable directly — not through a call centre — giving you genuine accountability.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/hero4.jpg"
                alt="Commercial cleaning company team Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Pro Clean Corp At a Glance</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ 1,200+ active clients</li>
                  <li>✓ 200+ suburbs covered</li>
                  <li>✓ 4.8 star average rating</li>
                  <li>✓ $20M public liability cover</li>
                  <li>✓ 100% satisfaction guarantee</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Selection Guide */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">6 Things to Check When Choosing a Commercial Cleaning Company</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectionCriteria.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-greenprimary rounded-full flex items-center justify-center text-white font-bold text-sm mb-3">{i + 1}</div>
                  <h4 className="font-bold text-darkblue mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Guide */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">Commercial Cleaning Company Pricing Guide — Sydney 2025</h3>
            <p className="text-center text-gray-600 mb-8">Typical pricing ranges from Sydney commercial cleaning companies for common facility types.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blueprimary text-white">
                    <th className="p-4 text-left rounded-tl-lg">Facility Type</th>
                    <th className="p-4 text-left">Approx. Weekly Cost</th>
                    <th className="p-4 text-left rounded-tr-lg">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Small office (under 200 m²)', '$180 – $320/week', '3x per week'],
                    ['Medium office (200–600 m²)', '$320 – $680/week', '5x per week'],
                    ['Retail shopfront', '$150 – $350/week', '3–5x per week'],
                    ['Medical/dental practice', '$250 – $500/week', '5x per week'],
                    ['Warehouse/industrial', '$300 – $800/week', '2–3x per week'],
                    ['Strata complex (common areas)', '$200 – $600/week', '3–5x per week'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-darkblue">{row[0]}</td>
                      <td className="p-4 font-bold text-greenprimary">{row[1]}</td>
                      <td className="p-4 text-gray-600">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Commercial Cleaning Companies</h3>
            <div className="space-y-6">
              {[
                { q: 'What should I look for when comparing commercial cleaning companies?', a: 'Key factors include: valid public liability insurance and workers\' compensation, directly employed staff (not subcontractors), police-checked cleaners, documented quality assurance systems, industry-specific experience, and flexible contract terms with genuine satisfaction guarantees.' },
                { q: 'How much do commercial cleaning companies charge in Sydney?', a: 'Pricing varies by facility type, size, frequency, and service scope. Small offices typically range from $180–$320 per week for 3x weekly cleaning. Larger facilities and specialist cleaning (medical, industrial) will attract higher pricing. Always request a detailed, itemised quote.' },
                { q: 'Should I choose a local commercial cleaning company or a national franchise?', a: 'Local companies often provide more responsive, personalised service with direct account management. National franchises may offer broader coverage but can suffer from inconsistent quality due to franchise model variability. Choose based on your specific operational needs and expected service levels.' },
                { q: 'What is a fair commercial cleaning contract length?', a: 'A fair commercial cleaning contract is typically 6–12 months for ongoing services, with a 30-day notice clause for underperformance. Be cautious of companies requiring 24-month minimum commitments without performance guarantee provisions.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Experience the Difference — Pro Clean Corp</h3>
            <p className="text-xl mb-6 text-gray-100">
              One of Sydney&apos;s most trusted commercial cleaning companies. Request your free, obligation-free quote today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Free Quote
              </a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                Call 1300 494 983
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
