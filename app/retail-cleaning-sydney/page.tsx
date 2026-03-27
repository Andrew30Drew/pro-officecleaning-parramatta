import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retail Cleaning Sydney NSW | Professional Shop & Store Cleaning Services',
  description: 'Specialist retail cleaning services in Sydney NSW. Professional shop cleaning, shopping centre cleaning, display cleaning, fitting room sanitisation for retail businesses. Flexible hours, minimal disruption.',
  keywords: 'retail cleaning Sydney, shop cleaning services NSW, store cleaning Sydney, professional retail cleaners, shopping centre cleaning Sydney',
  openGraph: {
    title: 'Retail Cleaning Sydney NSW | Professional Shop & Store Cleaning Services',
    description: 'Specialist retail cleaning services in Sydney NSW. Professional shop cleaning, shopping centre cleaning, display cleaning, fitting room sanitisation for retail businesses. Flexible hours, minimal disruption.',
    url: '/retail-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Retail cleaning Sydney NSW' }]
  },
  alternates: { canonical: '/retail-cleaning-sydney' }
};

export default function RetailCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-darkblue via-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Retail Cleaning Sydney NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional retail cleaning services for Sydney shops, boutiques, and shopping centres. We deliver immaculate store environments with flexible after-hours cleaning, display maintenance, fitting room sanitisation, and daily floor care — all with minimal disruption to your retail operations.
              </p>
              <div className="bg-white/10 rounded-xl p-4 inline-block">
                <p className="text-white font-bold text-lg">Call 1300 494 983 — Retail Cleaning Quote</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Retail cleaning Sydney NSW - Professional shop and store cleaning services"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-darkblue mb-8">Specialist Retail Cleaning Services Across Sydney NSW</h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  In retail, first impressions sell. A clean, well-presented store environment communicates professionalism, encourages customers to browse longer, and reinforces brand standards. Pro Clean Corp provides specialist retail cleaning services throughout Sydney NSW, working with independent boutiques, franchise retailers, multi-store chains, and shopping centre tenants who understand that a pristine shopping environment directly impacts sales performance and customer satisfaction scores.
                </p>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Retail cleaning is fundamentally different from office or commercial cleaning. Display fixtures, merchandise, glass showcases, fitting rooms, and customer-facing surfaces require careful, product-aware cleaning that protects stock and signage while eliminating fingerprints, dust, and grime. Our retail cleaning teams are trained specifically for these environments — they know how to clean around merchandise without disturbing displays, how to maintain polished floor surfaces, and how to sanitise high-touch customer areas without leaving residues.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">After-Hours Retail Cleaning — Zero Disruption</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  The best time to clean a retail store is when customers aren&apos;t in it. Pro Clean Corp specialises in after-hours retail cleaning across Sydney — arriving after close of business and completing the full clean before your team arrives the next morning. We carry our own keys and access systems, work independently and securely, and our supervisors conduct quality checks before signing off each clean. Your store opens fresh, clean, and customer-ready every single morning.
                </p>
              </div>

              <div>
                <Image
                  src="/images/hero/hero4.jpg"
                  alt="Professional retail store cleaning services Sydney"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
                <div className="bg-darkblue/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Retail Cleaning Benefits</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ After-hours & weekend available</li>
                    <li>✓ Display & fixture safe cleaning</li>
                    <li>✓ Key-hold & alarm management</li>
                    <li>✓ Supervisor quality checks</li>
                    <li>✓ Flexible contracts</li>
                    <li>✓ Shopping centre approved</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">How We Approach Retail Cleaning in Sydney</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Retail Environment Audit</h4>
                <p className="text-gray-700 mb-4">
                  Every new retail cleaning contract begins with a detailed site audit. We walk through the store with the store manager or facilities contact to understand the layout, identify priority areas, note any fragile displays or stock-sensitive zones, and establish cleaning specifications tailored to the retailer&apos;s brand standards and operational requirements. Nothing is assumed — everything is agreed upon before we begin.
                </p>

                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Customised Cleaning Schedule</h4>
                <p className="text-gray-700 mb-4">
                  We develop a documented cleaning schedule covering daily tasks, weekly deep cleans, and periodic maintenance. Daily tasks typically include floor care, surface wiping, glass cleaning, fitting room turnaround, and waste removal. Weekly and periodic tasks include carpet extraction, grout cleaning, high-reach dusting, and full amenity deep cleans. Every task is logged and reported.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Trained Retail Cleaning Teams</h4>
                <p className="text-gray-700 mb-4">
                  Our retail cleaning staff are specifically trained in retail environments — including how to handle cleaning around product displays, how to safely clean glass showcases and mirrors, and how to maintain polished hard floor surfaces. All staff are uniformed, police-checked, and carry company identification. Supervisors conduct regular quality inspections to maintain consistency across every clean.
                </p>

                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Quality Reporting & Communication</h4>
                <p className="text-gray-700 mb-4">
                  We provide regular cleaning reports, digital sign-off sheets, and a dedicated account manager for all Sydney retail clients. Any maintenance issues identified during cleaning — a leaking fitting, damaged floor tile, or faulty light — are reported to you immediately. We act as an extension of your facilities team, not just a cleaning contractor.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Retail Cleaning Services Sydney</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Daily retail store cleaning',
                  'Floor cleaning & polishing',
                  'Window & display cleaning',
                  'Fitting room sanitisation',
                  'Change room cleaning',
                  'Stockroom & warehouse cleaning',
                  'Entrance & lobby cleaning',
                  'Toilet & amenities cleaning',
                  'High-touch surface disinfection',
                  'After-hours retail cleaning',
                  'Weekend cleaning services',
                  'Emergency spill response'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-darkblue rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">The Business Case for Professional Retail Cleaning</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/services/school.jpg"
                  alt="Clean retail environment drives customer experience Sydney"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-darkblue pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Customer Experience & Dwell Time</h4>
                    <p className="text-gray-700">A clean, fresh-smelling retail environment encourages customers to spend more time in store and creates a positive brand association. Dirty floors, dusty shelves, and unclean fitting rooms actively drive customers away.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Brand Standard Compliance</h4>
                    <p className="text-gray-700">Franchise and chain retailers must maintain consistent brand presentation standards across all locations. Our structured cleaning programs and quality reporting help multi-store operators maintain compliance with head office presentation requirements.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Health & Safety Obligations</h4>
                    <p className="text-gray-700">Sydney retail businesses have WHS obligations to maintain clean, safe environments for staff and customers. Professional cleaning with documented schedules and product data sheets helps retailers meet their duty-of-care obligations and reduces incident risk.</p>
                  </div>
                  <div className="border-l-4 border-darkblue pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Asset Protection</h4>
                    <p className="text-gray-700">Regular professional floor maintenance, glass care, and surface treatment protects your retail fitout investment — extending the life of flooring, fixtures, and finishes, and reducing costly refurbishment frequency.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">Sydney Retail Areas We Service</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides retail cleaning services across Sydney&apos;s major retail precincts and suburban shopping strips:
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Sydney CBD', 'Parramatta', 'Bondi Junction', 'Chatswood',
                'Liverpool', 'Penrith', 'Hornsby', 'Miranda',
                'Bankstown', 'Burwood', 'Hurstville', 'Ryde'
              ].map((location, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">{location}</span>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Retail Cleaning Sydney</h3>
            <div className="space-y-6 mb-12">
              {[
                {
                  question: 'Can you clean our Sydney retail store after trading hours?',
                  answer: 'Yes — after-hours retail cleaning is our specialty. We schedule cleaning teams to arrive after your store closes and complete the full clean before your opening time the next morning. We can manage key-holding arrangements and alarm codes securely. After-hours cleaning means zero disruption to customers and staff during trading, and your store always opens in perfect condition.'
                },
                {
                  question: 'How often should a Sydney retail store be professionally cleaned?',
                  answer: 'Most Sydney retail stores benefit from daily cleaning — floor care, surface wiping, fitting room and amenities cleaning, and waste removal every trading day. A more thorough weekly clean should address glass, displays, and high-touch surfaces in depth. Periodic deep cleans every 4–8 weeks cover carpet extraction, grout cleaning, and high-reach areas. We tailor frequency to your store type, trading hours, and foot traffic volume.'
                },
                {
                  question: 'Do you clean food court tenancies and café areas in Sydney shopping centres?',
                  answer: 'Yes — we clean food-related retail tenancies including café counters, food preparation surfaces, display cases, and dining areas. Our teams are trained in food-safe cleaning products and procedures. We understand the hygiene standards required for food retail environments and can provide cleaning that meets food safety compliance requirements for Sydney shopping centre operators.'
                },
                {
                  question: 'Can you maintain polished concrete or timber floors in a Sydney retail store?',
                  answer: 'Yes — floor maintenance is a core component of our retail cleaning services. We maintain polished concrete, hardwood, engineered timber, porcelain tile, and vinyl flooring using appropriate cleaning methods and maintenance products for each surface type. We also provide periodic buffing, polishing, and sealing services to maintain floor appearance and protect the surface finish.'
                },
                {
                  question: 'Do you provide retail cleaning for shopping centres across Sydney?',
                  answer: 'Pro Clean Corp works with both shopping centre management groups and individual tenants across Sydney. We are familiar with shopping centre access requirements, induction procedures, and the standards expected by major centre operators. Our public liability and workers compensation insurance is maintained at levels required for approved contractor status at Sydney shopping centres.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-darkblue via-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Professional Retail Cleaning for Sydney Businesses</h3>
              <p className="text-xl mb-6 text-gray-100">
                After-hours cleaning, display maintenance, floor care, and fitting room sanitisation for Sydney retail stores, boutiques, and shopping centres. Flexible contracts, guaranteed quality.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Your Retail Cleaning Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
