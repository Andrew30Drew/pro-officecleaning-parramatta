import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Maroubra | ProCleanCorp from $80/visit',
  description: 'Professional strata cleaning in Maroubra from $80 per visit. Common areas, lobbies, lifts, bin rooms and car parks. Serving Eastern Suburbs strata. Free quote in 24hrs.',
  keywords: 'strata cleaning Maroubra, body corporate cleaning Maroubra, common area cleaning Maroubra, strata cleaners Maroubra, apartment building cleaning Maroubra',
  openGraph: {
    title: 'Strata Cleaning Maroubra | ProCleanCorp from $80/visit',
    description: 'Professional strata cleaning in Maroubra from $80 per visit. Common areas, lobbies, lifts and car parks. Free quote in 24hrs.',
    url: 'https://www.procleancorp.com.au/strata-cleaning-maroubra',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning Maroubra Eastern Suburbs' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-maroubra' }
};

const faqs = [
  {
    question: 'How much does strata cleaning cost in Maroubra?',
    answer: 'Strata cleaning in Maroubra starts from $80 per visit for small complexes and ranges to $400–$800 per month for larger buildings. Pricing depends on the number of common areas, floors, lift levels and cleaning frequency. ProCleanCorp provides a fixed-price quote after an on-site assessment.'
  },
  {
    question: 'What areas do you clean in Maroubra strata buildings?',
    answer: 'We clean all common areas including entrance foyers, hallways, stairwells, elevators, mailrooms, bin rooms, car parks and communal outdoor areas. Coastal Maroubra buildings also benefit from our salt-air surface protection protocols for stainless steel and glass.'
  },
  {
    question: 'Do you work directly with Maroubra strata managers?',
    answer: 'Yes. We work directly with strata managers and OC committees in Maroubra, providing written service reports, attending site meetings on request and maintaining open communication about any maintenance issues noted during cleaning visits.'
  },
  {
    question: 'How often should a Maroubra strata building be professionally cleaned?',
    answer: 'High-rise buildings and large complexes in Maroubra typically require 3–5 cleaning visits per week. Smaller unit blocks of under 20 units can maintain presentation with weekly or fortnightly visits. We tailor the frequency to your building size, resident traffic and OC budget.'
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Maroubra"
        serviceDescription="Professional strata cleaning in Maroubra for residential apartments, coastal complexes and mixed-use strata buildings. Common areas, lobbies, lifts, bin rooms and car parks. Fully insured, OC-ready reporting."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-maroubra"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Common Area Cleaning', 'Lobby & Foyer Cleaning', 'Lift & Stairwell Cleaning', 'Bin Room Cleaning', 'Car Park Sweeping', 'Salt-Air Surface Protection']}
        faqs={faqs}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Maroubra & Eastern Suburbs Strata</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Strata Cleaning Maroubra — Common Area Specialists from $80/visit
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers professional strata cleaning across Maroubra's coastal apartment complexes and mixed-use strata buildings, with OC-ready reporting and flexible scheduling.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ From $80/visit &nbsp;|&nbsp; ✓ OC Committee Reports &nbsp;|&nbsp; ✓ Free Quote in 24hrs</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Strata Cleaning Maroubra"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF Answer Box */}
      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides professional strata cleaning in Maroubra from $80 per visit</strong>, covering residential apartment complexes, coastal buildings and mixed-use strata from Maroubra Beach to Pagewood. Common areas, lobbies, lifts, bin rooms and car parks cleaned to OC-ready standard with written service reports on every visit.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Strata Cleaning in Maroubra</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Maroubra's coastal apartment market presents unique strata cleaning challenges — salt air accelerates surface degradation on stainless steel fixtures, glass balustrades and external cladding. ProCleanCorp uses salt-air-appropriate cleaning products and protective treatments as standard on coastal Maroubra buildings, extending the life of common area surfaces between painting and maintenance cycles.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We work directly with strata managers and OC committees throughout Maroubra, providing written service reports after each visit, flagging maintenance issues noted during cleaning, and attending site meetings on request. Our staff are police-checked, uniformed and fully insured — meeting the documentation requirements of all major strata management software platforms.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Maroubra Strata Cleaning Inclusions</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Entrance foyer & lobby cleaning', 'Hallway & corridor mopping', 'Lift interior & buttons disinfection', 'Stairwell sweeping & mopping', 'Bin room cleaning & sanitisation', 'Car park sweeping & pressure wash', 'Glass & mirror polishing', 'Letterbox area cleaning', 'Outdoor common area maintenance', 'Salt-air surface protection', 'OC-ready service reports', 'Maintenance issue flagging'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-lg font-bold text-darkblue mb-4">Strata Cleaning Pricing — Maroubra</h3>
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-gray-200"><th className="text-left py-2 text-darkblue">Building Type</th><th className="text-left py-2 text-darkblue">Typical Cost</th><th className="text-left py-2 text-darkblue">Frequency</th></tr></thead>
                  <tbody>
                    {[['Small complex (under 20 units)', '$80–$150/visit', 'Weekly or fortnightly'], ['Medium building (20–50 units)', '$300–$500/month', '2–3x per week'], ['Large high-rise (50+ units)', '$600–$1,200/month', 'Daily or 5x/week'], ['Car park only', '$150–$300/visit', 'Fortnightly']].map(([type, cost, freq], i) => (
                      <tr key={i} className="border-b border-gray-100"><td className="py-2 text-gray-700">{type}</td><td className="py-2 font-semibold text-darkblue">{cost}</td><td className="py-2 text-gray-600">{freq}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: 'OC Committee Reports', desc: 'Written service reports after every visit — ready for strata manager records and AGM documentation.' },
                  { title: 'Coastal Surface Protocols', desc: 'Salt-air-appropriate cleaning products protect stainless steel, glass and cladding in beachside buildings.' },
                  { title: 'No Lock-In Contracts', desc: 'Month-to-month agreements — switch or cancel with 30 days notice, no exit fees.' },
                  { title: 'Police-Checked Staff', desc: 'All staff hold current police clearances and are uniformed for resident confidence.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-greenprimary pl-4">
                    <h4 className="font-semibold text-darkblue mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Service Areas</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Maroubra Beach', 'Maroubra Junction', 'South Maroubra', 'Pagewood', 'Hillsdale', 'Chifley', 'Malabar', 'Little Bay'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl mb-4">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site assessment for Maroubra strata. Fixed pricing for OC budgets.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Strata Cleaning Maroubra</h3>
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
                { label: 'Strata Cleaning Randwick', href: '/strata-cleaning-randwick' },
                { label: 'Strata Cleaning Eastern Suburbs', href: '/strata-cleaning-eastern-suburbs' },
                { label: 'Commercial Cleaning Maroubra', href: '/commercial-cleaning-maroubra' },
                { label: 'Body Corporate Cleaning Sydney', href: '/body-corporate-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get Your Free Maroubra Strata Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">On-site assessment within 24 hours. Fixed pricing for OC budgets, no lock-in contracts.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
