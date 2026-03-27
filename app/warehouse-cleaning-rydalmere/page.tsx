import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Warehouse Cleaning Rydalmere | ProCleanCorp',
  description: 'Warehouse cleaning in Rydalmere for manufacturers and logistics businesses. Floor scrubbing, high-pressure wash. Fully insured. Free quote.',
  keywords: 'warehouse cleaning rydalmere, industrial cleaning rydalmere, manufacturing facility cleaning rydalmere, around-machinery cleaning rydalmere, OHS warehouse cleaning rydalmere, victoria road industrial cleaning',
  openGraph: {
    title: 'Warehouse Cleaning Rydalmere | ProCleanCorp',
    description: 'Warehouse and industrial cleaning in Rydalmere for manufacturers and logistics. Floor scrubbing, high-pressure wash. Free quote.',
    url: 'https://www.procleancorp.com.au/warehouse-cleaning-rydalmere',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Warehouse cleaning Rydalmere industrial corridor Victoria Road' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/warehouse-cleaning-rydalmere' }
};

const faqs = [
  {
    question: 'Do you clean around heavy machinery in Rydalmere warehouses?',
    answer: 'Yes. ProCleanCorp provides around-machinery cleaning for Rydalmere manufacturing and production facilities. Around-machinery cleaning requires trained staff who understand safe working distances, lockout/tagout procedures, and how to clean effectively in constrained spaces without disrupting machinery calibration or safety systems. Our staff are trained in OHS compliance for industrial cleaning environments including heavy machinery zones.'
  },
  {
    question: 'Can you provide OHS-compliant warehouse cleaning for our Rydalmere manufacturing facility?',
    answer: 'Yes. All ProCleanCorp warehouse cleaning programs in Rydalmere are OHS-compliant. We follow safe work method statements (SWMS) for industrial cleaning, use appropriate PPE for different cleaning zones, apply wet floor signage protocols, and can provide copies of our SWMS and insurance documentation for your site safety records. We are fully public liability insured and hold workers compensation insurance.'
  },
  {
    question: 'How often should an active warehouse in Rydalmere be professionally cleaned?',
    answer: 'For an active manufacturing or logistics warehouse in Rydalmere, most facilities require professional cleaning at least weekly — with daily or every-second-day cleaning for high-production environments. The cleaning frequency depends on production activity, number of staff, floor size, and the type of materials being handled. ProCleanCorp can provide a recommended cleaning frequency as part of our free on-site assessment.'
  }
];

export default function WarehouseCleaningRydalmerePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Warehouse Cleaning Rydalmere"
        serviceDescription="ProCleanCorp delivers warehouse cleaning in Rydalmere for the established manufacturing and logistics precinct along Victoria Road, with floor scrubbing, pressure washing and industrial sanitation."
        serviceUrl="https://www.procleancorp.com.au/warehouse-cleaning-rydalmere"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Around-Machinery Cleaning', 'OHS-Compliant Cleaning', 'Floor Scrubbing', 'Pressure Washing', 'Manufacturing Facility Cleaning', 'Industrial Sanitation']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Rydalmere Warehouse & Industrial Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Warehouse Cleaning Rydalmere — Industrial Cleaning Specialists
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers warehouse and industrial cleaning in Rydalmere for the Victoria Road manufacturing and logistics corridor. Around-machinery cleaning, floor scrubbing, pressure washing and OHS-compliant programs for active production environments.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Manufacturing Specialists &nbsp;|&nbsp; ✓ OHS-Compliant &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Warehouse cleaning Rydalmere industrial corridor Victoria Road"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp delivers warehouse cleaning in Rydalmere</strong> for the established manufacturing and logistics precinct along Victoria Road, with floor scrubbing, pressure washing and industrial sanitation. Rydalmere's Victoria Road industrial corridor is one of Sydney's oldest — many tenants are legacy manufacturers with heavy machinery and specific around-equipment cleaning requirements that generic warehouse cleaners cannot safely handle.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Warehouse Cleaning Services in Rydalmere</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Rydalmere's Victoria Road industrial corridor is one of Sydney's oldest and most established. The businesses here are legacy manufacturers — plastics, electronics, food processing, engineering and logistics — with heavy machinery, production equipment and complex facility layouts that require specialist industrial cleaning.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Around-machinery cleaning is a capability most generic warehouse cleaners lack. ProCleanCorp staff are trained in OHS industrial cleaning protocols including safe work method statements (SWMS), lockout/tagout awareness, and cleaning techniques for constrained production spaces. We also handle the heavy-duty floor cleaning required in long-established industrial facilities — removing years of accumulated oil, rubber and industrial soiling from concrete floors.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Rydalmere Warehouse Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Around-machinery cleaning', 'Industrial floor scrubbing', 'Oil & grease removal', 'Pressure washing', 'Loading dock cleaning', 'High-bay cleaning', 'Production area cleaning', 'Amenities & lunchroom cleaning', 'OHS-compliant protocols', 'SWMS documentation', 'After hours access', 'Emergency spill response'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blueprimary/20 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-darkblue mb-3">Warehouse Cleaning Prices — Rydalmere (2026)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blueprimary/10">
                        <th className="text-left p-3 font-semibold text-darkblue">Service</th>
                        <th className="text-left p-3 font-semibold text-darkblue">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Standard warehouse clean (per hour)', 'From $55/hr'],
                        ['Manufacturing facility clean (per shift)', 'From $380'],
                        ['Around-machinery deep clean', 'From $280'],
                        ['Pressure washing (full day)', 'From $450'],
                      ].map(([service, price], i) => (
                        <tr key={i} className="border-t border-gray-200">
                          <td className="p-3 text-gray-700">{service}</td>
                          <td className="p-3 text-gray-700 font-semibold">{price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Rydalmere Area Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Rydalmere', 'Parramatta', 'Camellia', 'Harris Park', 'Telopea', 'Dundas', 'Dundas Valley', 'Carlingford'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Manufacturing & warehouse cleaning. Rydalmere & surrounds.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Warehouse Cleaning Rydalmere</h3>
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
                { label: 'Warehouse Cleaning Parramatta', href: '/warehouse-cleaning-parramatta' },
                { label: 'Industrial Cleaning Sydney', href: '/industrial-cleaning-sydney' },
                { label: 'Warehouse Cleaning Auburn', href: '/warehouse-cleaning-auburn' },
                { label: 'Commercial Cleaning Rydalmere', href: '/commercial-cleaning-rydalmere' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Warehouse Cleaning Rydalmere — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Manufacturing & around-machinery specialists. OHS-compliant. Fully insured.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
