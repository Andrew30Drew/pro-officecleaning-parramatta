import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Industrial Cleaning Companies Sydney | Best Industrial Cleaners NSW | Pro Clean Corp',
  description: 'Looking for industrial cleaning companies in Sydney? Pro Clean Corp is a trusted industrial cleaning company with 15+ years experience, industrial equipment, and WHS-compliant service. Call 1300 494 983.',
  keywords: ['industrial cleaning companies', 'industrial cleaning companies Sydney', 'industrial cleaning company NSW', 'best industrial cleaners Sydney', 'commercial industrial cleaning company'],
  openGraph: {
    title: 'Industrial Cleaning Companies Sydney | Pro Clean Corp',
    description: 'Trusted industrial cleaning company in Sydney — 15+ years experience, industrial equipment, WHS-compliant.',
    url: '/industrial-cleaning-companies',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Industrial Cleaning Companies Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Cleaning Companies Sydney | Pro Clean Corp',
    description: 'Trusted industrial cleaning companies in Sydney NSW. Industrial equipment, trained staff, WHS compliant.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/industrial-cleaning-companies' }
};

export default function IndustrialCleaningCompaniesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Industrial Cleaning Companies Sydney"
        serviceDescription="Pro Clean Corp is one of Sydney's trusted industrial cleaning companies with 15+ years experience, industrial-grade equipment, WHS-compliant procedures, and teams servicing factories, warehouses, and industrial facilities across NSW."
        serviceUrl="/industrial-cleaning-companies"
        serviceType="Industrial Cleaning"
        price="$$-$$$"
        additionalServices={['Factory Cleaning', 'Warehouse Cleaning', 'Industrial Floor Scrubbing', 'Pressure Washing', 'Industrial Degreasing', 'After-Hours Cleaning']}
        faqs={[
          { question: 'What should I look for in industrial cleaning companies?', answer: 'Look for: industrial cleaning equipment (ride-on scrubbers, pressure washers), documented WHS procedures including SWMS, public liability insurance ($10M+), police-checked staff, experience with similar industrial facilities, references from current clients, and transparent pricing that accounts for the unique challenges of industrial environments.' },
          { question: 'How do industrial cleaning companies differ from commercial cleaners?', answer: 'Industrial cleaning companies use heavy-duty industrial equipment and specialist products for manufacturing, warehouse, and factory environments. They handle contamination like oil, grease, chemical spillages, heavy dust, and industrial soiling that standard commercial cleaning products and equipment cannot address effectively.' }
        ]}
      />
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Sydney&apos;s Industrial Cleaning Specialists</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Industrial Cleaning Companies Sydney</h1>
              <p className="text-xl mb-8 text-gray-100">Pro Clean Corp is one of Sydney&apos;s trusted industrial cleaning companies. With 15+ years of industrial cleaning experience, heavy-duty equipment, and WHS-compliant procedures, we deliver consistent results for factories, warehouses, and all industrial facilities across NSW.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Get Industrial Quote</a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-200">
                <span>✓ 15yr Experience</span><span>✓ Industrial Equipment</span><span>✓ $20M Insurance</span><span>✓ WHS Compliant</span>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/warehouse.webp" alt="Industrial cleaning companies Sydney" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
              <div className="absolute -bottom-4 -left-4 bg-greenprimary rounded-xl shadow-lg p-4 text-white">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-xs">Industrial Sites Serviced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">When comparing <strong>industrial cleaning companies</strong> in Sydney, the critical differentiator is equipment. Companies without industrial floor scrubbers, pressure washers, and industrial vacuum systems simply cannot clean warehouses and factories to a professional standard — no matter how experienced their teams are.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">What Separates Pro Clean Corp from Other Industrial Cleaning Companies</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Many cleaning companies claim to offer industrial cleaning, but without the right equipment and WHS compliance infrastructure, they&apos;re simply applying standard commercial cleaning methods to environments they&apos;re not designed for. The result is poor outcomes, potential WHS hazards, and frustrated clients.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Pro Clean Corp invests in industrial-grade equipment and maintains documented WHS procedures including site-specific risk assessments and Safe Work Method Statements (SWMS) for every type of industrial cleaning task. We also carry comprehensive public liability insurance up to $20M.</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '150+', label: 'Industrial Sites' },
                  { num: '15yr', label: 'Experience' },
                  { num: '$20M', label: 'Insurance' },
                  { num: 'WHS', label: 'Compliant' },
                ].map((stat, i) => (
                  <div key={i} className="bg-blueprimary/5 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-blueprimary">{stat.num}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <Image src="/images/services/commercial.webp" alt="Industrial cleaning company Sydney" className="rounded-2xl shadow-xl w-full h-full object-cover max-h-96" width={600} height={384} loading="lazy" />
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Industrial Cleaning Companies Sydney</h3>
            <div className="space-y-4">
              {[
                { q: 'What should I look for in industrial cleaning companies?', a: 'Industrial equipment (ride-on scrubbers, pressure washers), WHS procedures including SWMS, public liability insurance ($10M+), police-checked staff, references from similar industrial facilities, and transparent pricing.' },
                { q: 'How do industrial cleaning companies differ from commercial cleaners?', a: 'Industrial cleaning companies use heavy-duty equipment and specialist products for manufacturing and warehouse environments. They handle oil, grease, chemical spillages, heavy dust, and industrial soiling that standard commercial cleaning cannot address effectively.' },
                { q: 'What Sydney industrial precincts do you service?', a: 'We service all Greater Sydney industrial areas including Eastern Creek, Wetherill Park, Seven Hills, Auburn, Parramatta, Rydalmere, Brookvale, Kingsgrove, Prestons, and all other industrial precincts across the region.' },
                { q: 'Do industrial cleaning companies need to have WHS documentation?', a: 'Yes. Any professional industrial cleaning company operating in NSW must maintain documented WHS procedures including risk assessments and SWMS for all industrial cleaning tasks. Pro Clean Corp maintains full WHS documentation and can provide copies on request.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Industrial Cleaning Companies — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">Choose a truly industrial cleaning company. Contact Pro Clean Corp for a free site assessment across all Sydney industrial areas.</p>
            <div className="text-2xl font-bold text-greenprimary">1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
