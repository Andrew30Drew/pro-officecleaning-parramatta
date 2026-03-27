import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Warehouse Cleaning Company Sydney | Industrial Cleaning NSW | Pro Clean Corp',
  description: 'Pro Clean Corp is a trusted warehouse cleaning company in Sydney NSW. Industrial equipment, trained teams, flexible scheduling for warehouses of all sizes. Call 1300 494 983.',
  keywords: ['warehouse cleaning company', 'warehouse cleaning company Sydney', 'industrial cleaning company NSW', 'best warehouse cleaners Sydney', 'commercial warehouse cleaning company'],
  openGraph: {
    title: 'Warehouse Cleaning Company Sydney | Pro Clean Corp',
    description: 'Trusted warehouse cleaning company in Sydney. Industrial equipment, trained teams, WHS-compliant service.',
    url: '/warehouse-cleaning-company',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Warehouse Cleaning Company Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warehouse Cleaning Company Sydney | Pro Clean Corp',
    description: "Pro Clean Corp — Sydney's trusted warehouse cleaning company.",
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/warehouse-cleaning-company' }
};

export default function WarehouseCleaningCompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Warehouse Cleaning Company Sydney"
        serviceDescription="Pro Clean Corp is a trusted warehouse cleaning company serving Sydney NSW. Industrial floor scrubbers, pressure washers, and experienced teams for warehouses, distribution centres, and industrial facilities."
        serviceUrl="/warehouse-cleaning-company"
        serviceType="Warehouse Cleaning"
        price="$$-$$$"
        additionalServices={['Floor Scrubbing', 'Loading Dock Cleaning', 'High-Bay Cleaning', 'Amenities Cleaning', 'Pressure Washing', 'Industrial Degreasing']}
        faqs={[
          { question: 'What should I look for in a warehouse cleaning company?', answer: "Look for: industrial cleaning equipment (ride-on scrubbers, pressure washers), WHS-compliant procedures, public liability insurance, police-checked staff, references from similar facilities, flexible scheduling around your operations, and transparent pricing." },
          { question: 'How do I choose a warehouse cleaning company in Sydney?', answer: "Visit your shortlisted companies' facilities or ask for references from current warehouse clients. Ensure they use proper industrial cleaning equipment, have documented WHS procedures, and can schedule cleaning around your operational hours. Pro Clean Corp offers free site assessments so you can see exactly what we'll do before signing anything." }
        ]}
      />
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Sydney&apos;s Warehouse Cleaning Specialists</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Warehouse Cleaning Company Sydney</h1>
              <p className="text-xl mb-8 text-gray-100">Pro Clean Corp is a trusted warehouse cleaning company serving businesses across Sydney NSW. With industrial cleaning equipment, WHS-compliant procedures, and experienced teams, we keep warehouses of every size clean, safe, and running efficiently.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Get a Free Quote</a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-200">
                <span>✓ Industrial Equipment</span><span>✓ 150+ Warehouses Serviced</span><span>✓ $20M Insurance</span>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/warehouse.webp" alt="Warehouse cleaning company Sydney" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
              <div className="absolute -bottom-4 -left-4 bg-greenprimary rounded-xl shadow-lg p-4 text-white">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">Choosing the right <strong>warehouse cleaning company</strong> matters — industrial environments have unique hazards, compliance requirements, and operational constraints that require a specialist. Pro Clean Corp has serviced 150+ warehouses across Sydney NSW and understands what it takes to keep your facility clean, safe, and productive.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">What Makes a Good Warehouse Cleaning Company?</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Most commercial cleaning companies are not equipped to service warehouses properly. They don&apos;t have ride-on floor scrubbers, industrial pressure washers, or the trained operatives to use them safely in a live industrial environment. Pro Clean Corp is built for this — with the right equipment, the right training, and the operational flexibility to work around your schedules.</p>
              <div className="space-y-4">
                {[
                  { title: 'Industrial Equipment', desc: 'Ride-on and walk-behind scrubbers, pressure washers, and industrial vacuum systems.' },
                  { title: 'WHS Compliance', desc: 'Site-specific risk assessments, SWMS documentation, and PPE for all warehouse environments.' },
                  { title: 'Operational Flexibility', desc: 'Overnight, weekend, and shift-break cleaning to avoid disrupting warehouse operations.' },
                  { title: 'Consistent Quality', desc: 'Supervisor audits, cleaning checklists, and dedicated account management.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl">
                    <div className="w-8 h-8 bg-greenprimary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-darkblue">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Image src="/images/services/hero3.jpg" alt="Warehouse cleaning Sydney" className="rounded-2xl shadow-xl w-full h-full object-cover max-h-96" width={600} height={384} loading="lazy" />
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Warehouse Cleaning Company</h3>
            <div className="space-y-4">
              {[
                { q: 'What should I look for in a warehouse cleaning company?', a: 'Industrial cleaning equipment, WHS-compliant procedures, public liability insurance, police-checked staff, references from similar facilities, flexible scheduling, and transparent pricing.' },
                { q: 'How do I choose a warehouse cleaning company in Sydney?', a: "Ask for references from current warehouse clients, check they use industrial equipment (not just mops), verify their insurance, and request a site assessment. Pro Clean Corp offers free site assessments so you can see exactly what we'll do and how we'll price it." },
                { q: 'Do you use industrial scrubber machines for warehouse floors?', a: 'Yes. We use ride-on and walk-behind floor scrubber machines to efficiently clean large warehouse floors. These deliver far better results than manual mopping across large areas.' },
                { q: 'What Sydney areas does your warehouse cleaning company cover?', a: 'We cover all of Greater Sydney including Eastern Creek, Wetherill Park, Seven Hills, Auburn, Parramatta, Rydalmere, Brookvale, and all major industrial precincts across the region.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Sydney&apos;s Trusted Warehouse Cleaning Company</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for a free warehouse cleaning assessment. We service all of Greater Sydney&apos;s industrial precincts.</p>
            <div className="text-2xl font-bold text-greenprimary">1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
