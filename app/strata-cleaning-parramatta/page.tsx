import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Parramatta | ProCleanCorp',
  description: 'Professional strata cleaning in Parramatta for residential and commercial strata. Lobby, lift and common area specialists. Fully insured. Free quote.',
  keywords: 'strata cleaning parramatta, strata cleaners parramatta, common area cleaning parramatta, strata management cleaning parramatta, residential strata cleaning parramatta, owners corporation cleaning parramatta',
  openGraph: {
    title: 'Strata Cleaning Parramatta | ProCleanCorp',
    description: 'Professional strata cleaning in Parramatta for residential and commercial strata. Lobby, lift and common areas. Free quote.',
    url: 'https://www.procleancorp.com.au/strata-cleaning-parramatta',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning Parramatta common areas' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-parramatta' }
};

const faqs = [
  {
    question: 'How much does strata cleaning cost in Parramatta?',
    answer: 'Strata cleaning in Parramatta typically costs from $80 per visit for small complexes (under 20 units with minimal common areas), $250-$500 per month for mid-size residential buildings, and $500-$1,500+ per month for large high-rise strata schemes. The final price depends on the number of common area floors, lift lobbies, car park levels, garden areas and cleaning frequency. We provide fixed-price proposals after a free on-site assessment.'
  },
  {
    question: 'Do you clean both residential and commercial strata in Parramatta?',
    answer: 'Yes. ProCleanCorp cleans both residential strata complexes and commercial strata buildings in Parramatta. Parramatta is undergoing the largest residential development boom in NSW, with dozens of new high-rise strata schemes entering the market annually. We provide proposals tailored to newly settled OC committees setting up their first cleaning contract, as well as established strata schemes looking for a more reliable contractor.'
  },
  {
    question: 'Can you provide a strata cleaning proposal for our Parramatta OC committee?',
    answer: 'Yes. ProCleanCorp provides formal strata cleaning proposals suitable for OC committee review and approval. Our proposals include a detailed scope of works, cleaning frequency for each area, pricing breakdown, insurance certificates and references from existing strata clients. We can attend OC meetings to present our proposal if required.'
  }
];

export default function StrataClearningParramattaPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Parramatta"
        serviceDescription="Professional strata cleaning in Parramatta from $80 per visit, covering lobby areas, lifts, stairwells, car parks and common gardens for residential and commercial strata schemes."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-parramatta"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Lobby Cleaning', 'Lift Cleaning', 'Car Park Cleaning', 'Stairwell Cleaning', 'Common Garden Maintenance', 'Bin Room Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Parramatta Strata Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Strata Cleaning Parramatta — Common Area Specialists from $80/visit
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides professional strata cleaning in Parramatta from $80/visit — lobby, lift, stairwell, car park and common garden specialists. OC committee proposals available within 48 hours.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ From $80/visit &nbsp;|&nbsp; ✓ OC Proposals Available &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Strata cleaning Parramatta common area lobby"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides professional strata cleaning in Parramatta from $80 per visit</strong>, covering lobby areas, lifts, stairwells, car parks and common gardens for residential and commercial strata schemes. Parramatta is undergoing NSW's largest residential development boom — ProCleanCorp supports new OC committees from day one of occupancy.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Strata Cleaning Services in Parramatta</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Parramatta is undergoing the largest residential development boom in NSW — dozens of new high-rise strata schemes going on-market annually. New OC committees need a reliable cleaning contractor from day one of occupancy, with a clear proposal, fixed pricing and professional documentation.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp provides strata cleaning for Parramatta's entire spectrum — from small boutique complexes to large mixed-use high-rise developments. We provide OC committee proposals with detailed scope, pricing and insurance documentation, and attend committee meetings to present and discuss our proposal where required.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Parramatta Strata Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Lobby & foyer cleaning', 'Lift interior & threshold cleaning', 'Stairwell & landing cleaning', 'Car park scrubbing', 'Bin room cleaning & deodorising', 'Common garden area maintenance', 'Pool surround cleaning', 'Letterbox area cleaning', 'Intercom & entry point sanitising', 'Window sill & ledge cleaning', 'Pressure washing common areas', 'OC compliance documentation'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Table — AEO snippet target */}
              <div className="bg-blue-50 border border-blueprimary/20 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Strata Cleaning Prices — Parramatta (2026)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blueprimary/10">
                        <th className="text-left p-3 font-semibold text-darkblue">Complex Size</th>
                        <th className="text-left p-3 font-semibold text-darkblue">Typical Cost</th>
                        <th className="text-left p-3 font-semibold text-darkblue">Frequency</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Small (under 20 units)', 'From $80/visit', 'Weekly or fortnightly'],
                        ['Medium (20-60 units)', '$250–$500/month', 'Weekly'],
                        ['Large (60+ units, high-rise)', '$500–$1,500/month', 'Weekly + spot cleans'],
                      ].map(([size, cost, freq], i) => (
                        <tr key={i} className="border-t border-gray-200">
                          <td className="p-3 text-gray-700">{size}</td>
                          <td className="p-3 text-gray-700 font-semibold">{cost}</td>
                          <td className="p-3 text-gray-700">{freq}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Parramatta Strata Areas</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Parramatta CBD', 'North Parramatta', 'Westmead', 'Rydalmere', 'Granville', 'Merrylands', 'Woodville', 'Ermington'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">OC Committee Proposals</h4>
                <p className="text-sm mb-3 text-gray-300">Formal proposals within 48 hours. Attend OC meetings on request.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Strata Cleaning Parramatta</h3>
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
                { label: 'Commercial Cleaning Parramatta', href: '/commercial-cleaning-parramatta' },
                { label: 'Body Corporate Cleaning Sydney', href: '/body-corporate-cleaning-sydney' },
                { label: 'Strata Cleaning Prices Sydney', href: '/strata-cleaning-prices' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Strata Cleaning Parramatta — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">OC committee proposals within 48 hours. From $80/visit. No lock-in contracts.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
