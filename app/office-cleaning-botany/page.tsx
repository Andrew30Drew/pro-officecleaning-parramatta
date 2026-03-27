import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Botany | ProCleanCorp South Sydney',
  description: 'Office cleaning in Botany for industrial offices, logistics companies and commercial tenants. Familiar with Botany precinct. Fully insured. Free quote today.',
  keywords: 'office cleaning botany, office cleaners botany, commercial cleaning botany, industrial office cleaning botany, logistics office cleaning botany, south sydney office cleaning botany',
  openGraph: {
    title: 'Office Cleaning Botany | ProCleanCorp South Sydney',
    description: 'Office cleaning in Botany for industrial offices, logistics companies and commercial tenants. Fully insured. Free quote.',
    url: 'https://www.procleancorp.com.au/office-cleaning-botany',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Office cleaning Botany industrial offices Sydney' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-botany' }
};

const faqs = [
  {
    question: 'Do you clean industrial offices and admin areas in Botany?',
    answer: 'Yes. ProCleanCorp specialises in cleaning the administration offices and meeting rooms attached to warehouses and industrial facilities in Botany. These spaces have different requirements from standard offices — often higher dust and contamination levels from adjacent operational areas — and our protocols address this with more frequent vacuuming, hard floor scrubbing and filtered air intake cleaning.'
  },
  {
    question: 'Can you provide office cleaning that works around shift rosters in Botany?',
    answer: 'Absolutely. Many Botany industrial and logistics businesses operate across multiple shifts. ProCleanCorp provides cleaning programs timed to shift changeovers — typically between 2am-4am or during a day shift break — ensuring offices are clean when each shift starts without interfering with operational hours.'
  },
  {
    question: 'What areas near Botany do ProCleanCorp service?',
    answer: 'ProCleanCorp services the entire Botany industrial and commercial precinct including Botany, Mascot, Rosebery, Banksmeadow, Port Botany, Taren Point and Pagewood. We are familiar with all major industrial estates in the area and the building access requirements for port-adjacent facilities.'
  }
];

export default function OfficeCleaningBotanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Botany"
        serviceDescription="ProCleanCorp cleans offices and administration areas for businesses in Botany's industrial and commercial zone, including logistics, shipping and transport companies."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-botany"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Industrial Admin Office Cleaning', 'Logistics Office Cleaning', 'After Hours Cleaning', 'Shift-Compatible Scheduling', 'Weekly Office Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Botany & South Sydney Industrial Office Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Office Cleaning Botany — Industrial & Commercial Office Cleaners
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp cleans offices and administration areas for businesses in Botany's industrial and commercial zone — logistics, shipping, transport and food processing operations.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Industrial Admin Specialists &nbsp;|&nbsp; ✓ Shift-Compatible &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/office.webp" alt="Office cleaning Botany industrial precinct"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp cleans offices and administration areas for businesses in Botany's industrial and commercial zone</strong>, including logistics, shipping and transport companies. Botany's industrial admin office is a specific sub-niche — higher contamination, shift-based access, and different protocols to standard office cleaning.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Office Cleaning Services in Botany</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Botany is dominated by industrial and logistics operations — warehouses, cold-storage facilities, port-adjacent distribution centres and food processing plants. The admin offices and meeting rooms attached to these facilities are a specific cleaning challenge that generic office cleaners typically underestimate.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp addresses the industrial admin office cleaning sub-niche directly: higher dust loads from adjacent operations, harder floor surfaces requiring industrial scrubbing, shift-compatible access times and the ability to work around 24-hour operations without disruption. We serve logistics companies, transport operators, food processing admin and port-adjacent commercial offices throughout the Botany precinct.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Botany Office Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Industrial admin office cleaning', 'Logistics & transport office cleaning', 'Shift-compatible scheduling', 'Hard floor scrubbing & mopping', 'High-dust environment vacuuming', 'Kitchen & breakroom cleaning', 'Bathroom sanitisation', 'Bin removal & recycling', 'Meeting room maintenance', 'After hours & early morning access', 'Weekly & fortnightly programs', 'One-off deep cleans'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Botany Precinct Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Botany', 'Mascot', 'Rosebery', 'Banksmeadow', 'Port Botany', 'Pagewood', 'Matraville', 'Taren Point'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site assessment for Botany industrial offices.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Office Cleaning Botany</h3>
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
                { label: 'Commercial Cleaning Botany', href: '/commercial-cleaning-botany' },
                { label: 'Warehouse Cleaning Sydney', href: '/warehouse-cleaning-sydney' },
                { label: 'Office Cleaning Mascot', href: '/office-cleaning-mascot' },
                { label: 'Industrial Cleaning Sydney', href: '/industrial-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Industrial Office Cleaning — Botany</h3>
            <p className="text-xl mb-4 text-gray-100">Shift-compatible scheduling for logistics, transport and industrial offices in Botany.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
