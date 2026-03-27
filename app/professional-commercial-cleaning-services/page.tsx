import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Professional Commercial Cleaning Services Sydney | Certified Business Cleaners NSW | Pro Clean Corp',
  description: 'Certified professional commercial cleaning services across Sydney NSW. Trained teams, compliant protocols, quality guarantees for all business types. Call 1300 494 983 for a free quote.',
  keywords: [
    'professional commercial cleaning services',
    'professional commercial cleaning Sydney',
    'certified commercial cleaners Sydney',
    'professional commercial cleaning NSW',
    'commercial cleaning professionals Sydney',
    'best commercial cleaning company Sydney',
    'professional office cleaning services Sydney'
  ],
  openGraph: {
    title: 'Professional Commercial Cleaning Services Sydney | Pro Clean Corp',
    description: 'Certified, professional commercial cleaning services for all Sydney businesses. Trained staff, guaranteed quality, flexible scheduling.',
    url: '/professional-commercial-cleaning-services',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Professional Commercial Cleaning Services Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Commercial Cleaning Services | Pro Clean Corp Sydney',
    description: 'Expert commercial cleaning services for Sydney businesses — certified teams, quality guaranteed.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/professional-commercial-cleaning-services' }
};

export default function ProfessionalCommercialCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Professional Commercial Cleaning Services"
        serviceDescription="Pro Clean Corp delivers certified professional commercial cleaning services across Sydney NSW. Our trained, police-checked teams provide compliant, high-standard cleaning for offices, warehouses, medical facilities, retail, gyms, and all commercial premises."
        serviceUrl="/professional-commercial-cleaning-services"
        serviceType="Commercial Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Professional Office Cleaning', 'Industrial Cleaning', 'Medical Facility Cleaning',
          'Retail Cleaning', 'Gym Cleaning', 'Strata Cleaning',
          'Compliance Cleaning', 'After-Hours Commercial Cleaning'
        ]}
        faqs={[
          {
            question: 'What makes a commercial cleaning service "professional"?',
            answer: 'A professional commercial cleaning service is characterised by trained and police-checked staff, industry-appropriate cleaning products and equipment, documented cleaning procedures, public liability insurance, consistent quality management, and responsive communication. Pro Clean Corp meets all these standards with 15+ years of commercial cleaning experience in Sydney.'
          },
          {
            question: 'How do professional commercial cleaning services differ from standard cleaners?',
            answer: 'Professional commercial cleaning services use industrial-grade equipment, follow documented cleaning protocols, employ permanently trained staff (not casual contractors), carry comprehensive insurance, and provide quality management systems including supervisor audits and reporting. This ensures consistent, compliant results compared to ad-hoc cleaning arrangements.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Certified Commercial Cleaning
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional Commercial Cleaning Services
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides certified professional commercial cleaning services across all of Sydney NSW. Our trained, insured, and police-checked teams deliver compliant, high-standard cleaning for every type of commercial premises — backed by our quality guarantee.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Request a Free Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Trained & Certified Staff</span>
                <span>✓ Compliance-Ready</span>
                <span>✓ Quality Guaranteed</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Professional commercial cleaning services Sydney"
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
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Professional commercial cleaning services</strong> mean more than just a clean floor. They mean trained staff, documented procedures, industry-appropriate products, and a system that delivers consistent results every visit. Pro Clean Corp has been delivering this standard to Sydney businesses for over 15 years.
          </p>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">What &quot;Professional&quot; Actually Means</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">These are the standards that separate a professional commercial cleaning service from a cheap alternative.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: '🎓',
                title: 'Trained Staff',
                desc: 'Every Pro Clean Corp team member undergoes structured training in cleaning techniques, chemical handling, WHS compliance, and industry-specific protocols.'
              },
              {
                icon: '🔒',
                title: 'Police Checked',
                desc: 'All cleaning staff are police-checked before placement. Your premises and your data are protected.'
              },
              {
                icon: '📋',
                title: 'Documented Procedures',
                desc: 'We use documented cleaning checklists and procedures for every service type — no guesswork, no missed areas.'
              },
              {
                icon: '🛡️',
                title: '$20M Insurance',
                desc: 'Comprehensive public liability insurance up to $20M covers any unforeseen incidents during cleaning.'
              },
              {
                icon: '👔',
                title: 'Uniformed Teams',
                desc: 'Professional uniformed staff are identifiable, accountable, and represent your business with the right image.'
              },
              {
                icon: '📊',
                title: 'Quality Reporting',
                desc: 'Regular supervisor audits, client reporting, and issue resolution ensure standards never slip over time.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-darkblue mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Professional vs Basic Commercial Cleaning</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-gray-600 font-semibold border-b">Feature</th>
                    <th className="p-4 text-darkblue font-bold border-b bg-greenprimary/5 rounded-t">Pro Clean Corp</th>
                    <th className="p-4 text-gray-500 font-semibold border-b">Typical Basic Cleaner</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Trained staff', '✓ Structured training', '✗ On-the-job only'],
                    ['Police checks', '✓ All staff', '✗ Often skipped'],
                    ['Insurance', '✓ $20M public liability', '✗ Minimal or none'],
                    ['Documented procedures', '✓ Industry-specific checklists', '✗ Ad hoc'],
                    ['Quality audits', '✓ Regular supervisor checks', '✗ Rarely'],
                    ['Account management', '✓ Dedicated contact', '✗ No fixed contact'],
                    ['Satisfaction guarantee', '✓ Re-clean within 24hrs', '✗ Not offered'],
                  ].map(([feature, pro, basic], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="p-4 text-gray-700 font-medium">{feature}</td>
                      <td className="p-4 text-greenprimary font-semibold bg-greenprimary/5">{pro}</td>
                      <td className="p-4 text-red-500">{basic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Our Professional Commercial Cleaning Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Office Cleaning', href: '/office-cleaning-sydney' },
                { label: 'Warehouse Cleaning', href: '/warehouse-cleaners-sydney' },
                { label: 'Medical Cleaning', href: '/medical-centre-cleaning' },
                { label: 'Gym Cleaning', href: '/gym-cleaners-sydney' },
                { label: 'Retail Cleaning', href: '/retail-cleaning-sydney' },
                { label: 'Strata Cleaning', href: '/strata-cleaning-sydney' },
                { label: 'Pub & Club Cleaning', href: '/pub-club-cleaning-sydney' },
                { label: 'Showroom Cleaning', href: '/showroom-cleaning-sydney' },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="bg-blueprimary/5 p-4 rounded-xl text-center hover:bg-blueprimary hover:text-white transition group border border-blueprimary/10">
                  <span className="font-semibold text-darkblue group-hover:text-white text-sm transition">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Professional Commercial Cleaning Services</h3>
            <div className="space-y-6">
              {[
                { q: 'What makes a commercial cleaning service "professional"?', a: 'A professional commercial cleaning service employs trained and police-checked staff, uses industry-appropriate equipment and products, follows documented cleaning procedures, carries comprehensive insurance, and provides consistent quality management. Pro Clean Corp meets all these standards across all service types.' },
                { q: 'Are your commercial cleaners certified?', a: 'Our cleaning teams receive structured training in cleaning techniques, WHS compliance, chemical handling, and industry-specific protocols. We maintain ongoing training programs to ensure all staff stay current with best practices and compliance requirements.' },
                { q: 'Do you provide cleaning compliance documentation?', a: 'Yes. We provide cleaning logs, product Safety Data Sheets (SDS), WHS compliance documentation, and quality audit reports. This is particularly important for clients in regulated industries like healthcare, food service, and childcare.' },
                { q: 'How do you ensure consistent quality across visits?', a: 'We use documented cleaning checklists for every service, conduct regular supervisor quality audits, maintain consistent team assignments, and have a dedicated account management structure. Monthly quality reports are available for all commercial accounts.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Professional Commercial Cleaning Services — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Experience the difference of a truly professional commercial cleaning service. Contact Pro Clean Corp for a free site assessment and detailed proposal.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              1300 494 983 — Serving All Sydney Suburbs
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
