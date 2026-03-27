import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Corporate Cleaning Services Sydney CBD & North Sydney | Pro Clean Corp',
  description: 'Premium corporate cleaning services for Sydney CBD and North Sydney offices. Discreet, after-hours service for law firms, financial services and executive offices. Free quote.',
  keywords: ['corporate cleaning services sydney', 'corporate office cleaning sydney', 'CBD office cleaning', 'North Sydney corporate cleaning', 'premium office cleaning sydney'],
  openGraph: {
    title: 'Corporate Cleaning Services Sydney CBD & North Sydney | Pro Clean Corp',
    description: 'Premium corporate cleaning services for Sydney CBD and North Sydney. Discreet, professional, after-hours service for law firms and financial offices.',
    url: 'https://www.procleancorp.com.au/corporate-cleaning-services-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Corporate cleaning services Sydney' }]
  },
  twitter: { card: 'summary_large_image', title: 'Corporate Cleaning Services Sydney | Pro Clean Corp', description: 'Premium corporate cleaning for Sydney CBD and North Sydney offices.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/corporate-cleaning-services-sydney' }
};

const faqs = [
  {
    question: 'What makes corporate cleaning different from standard office cleaning?',
    answer: 'Corporate cleaning for Sydney CBD and North Sydney law firms, financial institutions and executive offices demands a higher standard of discretion, consistency and presentation. This means: the same team each visit (not anonymous rotating staff), full NDA signing for sensitive environments, premium eco-friendly cleaning products, executive bathroom detailing and furniture-grade surface care. Pro Clean Corp provides all these as standard in corporate cleaning contracts.'
  },
  {
    question: 'Do corporate cleaning services in Sydney operate after hours?',
    answer: 'Yes. Pro Clean Corp schedules all CBD and North Sydney corporate cleaning services outside business hours — typically 6pm–10pm for standard offices or overnight for high-security environments. Our teams work quietly, efficiently and without disrupting any after-hours staff. Access protocols are agreed during your on-site assessment.'
  },
  {
    question: 'What is the typical cost of corporate cleaning services in Sydney CBD?',
    answer: 'Corporate cleaning for Sydney CBD offices typically ranges from $180/night for small suites under 200sqm to $600+/night for large floor-plate offices with multiple meeting rooms, kitchen areas and executive bathrooms. Monthly fixed contracts provide budget certainty for finance and operations teams. Pro Clean Corp provides a written fixed-price quote after an on-site assessment.'
  },
  {
    question: 'How do corporate cleaning companies handle confidential documents and secure areas?',
    answer: 'Pro Clean Corp operates strict protocols in corporate environments: all cleaners are police-checked and sign confidentiality agreements, document handling protocols are documented in your service agreement, all staff are instructed never to open, move or review documents, and secure room protocols can be established for IT, legal or boardroom areas with restricted access.'
  }
];

export default function CorporateCleaningServicesSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Corporate Cleaning Services Sydney"
        serviceDescription="Premium corporate cleaning services for Sydney CBD and North Sydney. After-hours, discreet, police-checked staff with full NDA capability for law firms and financial offices."
        serviceUrl="/corporate-cleaning-services-sydney"
        serviceType="ProfessionalService"
        price="$$$"
        additionalServices={['Executive Office Cleaning', 'Boardroom Cleaning', 'Kitchen & Breakroom Cleaning', 'Executive Bathroom Detailing', 'After-Hours Cleaning', 'NDA Cleaning Teams']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Sydney CBD · North Sydney · Premium Corporate</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Corporate Cleaning Services Sydney — Premium Standard, Every Night
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Pro Clean Corp delivers corporate cleaning services</strong> for Sydney CBD and North Sydney offices that demand the highest standard — discreet after-hours teams, NDA-capable staff and consistent presentation that reflects your brand.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Same team, every visit — no anonymous staff',
                  'NDA signing available for sensitive environments',
                  'Premium eco-certified products',
                  'Executive bathroom and boardroom detailing',
                  'After-hours scheduling (6pm–10pm or overnight)'
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
                alt="Corporate cleaning services Sydney CBD"
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
            <strong>Pro Clean Corp&apos;s corporate cleaning services in Sydney CBD and North Sydney</strong> go beyond standard office cleaning — delivering consistent premium presentation with the same team each visit, NDA capability for legal and financial firms, and after-hours scheduling that never disrupts your business operations.
          </p>
        </div>
      </section>

      {/* Corporate Sectors */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Corporate Sectors We Service in Sydney</h2>
          <p className="text-center text-gray-600 mb-12">From law firms to financial services — Pro Clean Corp understands the distinct requirements of each sector.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { sector: 'Law Firms', note: 'Document sensitivity protocols, secure room cleaning, after-hours only' },
              { sector: 'Financial Services', note: 'Desk and terminal cleaning, trading floor protocols, NDA teams' },
              { sector: 'Consulting Firms', note: 'Hot-desk hygiene, presentation-ready meeting rooms, same-night turnaround' },
              { sector: 'Technology Companies', note: 'Screen and keyboard cleaning, server room adjacent areas, secure after-hours' },
              { sector: 'Government & Regulatory', note: 'Security-cleared or police-checked staff, documented protocols, report delivery' },
              { sector: 'Executive Suites', note: 'Premium product use, furniture-grade care, daily or nightly options' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-darkblue mb-2 text-sm">{item.sector}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/services/hero1.jpg"
                alt="Corporate office cleaning Sydney"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">What Our Corporate Cleaning Service Covers</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Open plan workstations', 'Private offices and executive suites', 'Boardroom and meeting rooms', 'Reception and waiting areas', 'Kitchen and breakrooms', 'Executive bathrooms', 'Internal glass partitions', 'Lift lobbies and foyers', 'Stairwells and corridors', 'Print and copy rooms'
                ].map((area, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-greenprimary font-bold">✓</span>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Corporate Cleaning Services Sydney</h2>
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
          <h2 className="text-3xl font-bold mb-4">Get a Premium Corporate Cleaning Quote</h2>
          <p className="text-xl text-blue-100 mb-8">On-site assessment in Sydney CBD or North Sydney. Written fixed-price quote within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
