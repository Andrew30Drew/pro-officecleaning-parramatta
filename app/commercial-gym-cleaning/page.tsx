import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Gym Cleaning | Large Fitness Facility Cleaning Services NSW | Pro Clean Corp',
  description: 'Specialist commercial gym cleaning services for large-format fitness centres, health clubs, and multi-facility operations across NSW. Hospital-grade disinfectants, industrial equipment, flexible scheduling. Call 1300 494 983.',
  keywords: [
    'commercial gym cleaning',
    'commercial gym cleaning services',
    'large gym cleaning NSW',
    'health club cleaning Sydney',
    'commercial fitness centre cleaning',
    'gym deep cleaning NSW',
    'commercial gym cleaners sydney',
    'franchise gym cleaning NSW',
    'Pro Clean Corp commercial gym'
  ],
  openGraph: {
    title: 'Commercial Gym Cleaning | Pro Clean Corp NSW',
    description: 'Specialist commercial gym cleaning for large fitness centres and health clubs across NSW — hospital-grade disinfection, industrial equipment, 7-day scheduling.',
    url: '/commercial-gym-cleaning',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Gym Cleaning NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Gym Cleaning | Pro Clean Corp NSW',
    description: 'Specialist commercial gym cleaning for large fitness centres and health clubs across NSW.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-gym-cleaning' }
};

const gymTypes = [
  { name: 'Large Format Gyms', desc: 'Multi-zone facilities over 2,000 m² with heavy daily membership traffic', icon: '🏋️' },
  { name: 'Franchise Fitness Chains', desc: '24 Hour Fitness, F45, Anytime Fitness, Goodlife — consistent standards across all locations', icon: '🔗' },
  { name: 'Hotel Health Clubs', desc: 'Hotel gym and spa facilities requiring guest-facing presentation standards daily', icon: '🏨' },
  { name: 'Corporate Fitness Centres', desc: 'On-site employee gyms in office buildings, hospitals, and corporate campuses', icon: '🏢' },
  { name: 'Multi-Sport Complexes', desc: 'Facilities combining gym, pool, court sports, and group fitness studios', icon: '⚽' },
  { name: 'CrossFit & HIIT Boxes', desc: 'Chalk-heavy functional training environments with specialist floor surfaces', icon: '💪' },
];

const comparisonData = [
  { feature: 'Equipment sanitisation', standard: 'Basic wipe', procleancorp: 'TGA-grade antimicrobial' },
  { feature: 'Floor cleaning method', standard: 'Mop & bucket', procleancorp: 'Industrial auto-scrubber' },
  { feature: 'Locker room frequency', standard: 'Daily surface clean', procleancorp: 'Deep scrub + drain treatment' },
  { feature: 'Reporting', standard: 'None', procleancorp: 'Digital checklist per visit' },
  { feature: 'Account management', standard: 'Call centre', procleancorp: 'Dedicated account manager' },
  { feature: 'Products', standard: 'General purpose', procleancorp: 'Gym-specific, equipment-safe' },
];

export default function CommercialGymCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Gym Cleaning"
        serviceDescription="Specialist commercial gym cleaning services for large-format fitness centres, health clubs, franchise gyms, and multi-facility operations across NSW. Hospital-grade disinfectants, industrial floor scrubbers, and flexible scheduling."
        serviceUrl="/commercial-gym-cleaning"
        serviceType="Commercial Gym Cleaning"
        price="$$$"
        additionalServices={[
          'Large Format Gym Deep Clean',
          'Multi-Location Franchise Cleaning',
          'Hotel Health Club Cleaning',
          'Corporate Fitness Centre Cleaning',
          'CrossFit Box Specialist Cleaning',
          'Pool & Wet Area Cleaning',
          'Industrial Floor Scrubbing',
          'Equipment Sanitisation Programme'
        ]}
        faqs={[
          {
            question: 'What makes commercial gym cleaning different from regular gym cleaning?',
            answer: 'Commercial gym cleaning for large-format facilities involves industrial-grade equipment such as ride-on floor scrubbers for rubber and hardwood floors, auto-dosing disinfectant systems, and multi-person cleaning crews that operate across zones simultaneously. The scale, membership volumes, and regulatory requirements of commercial fitness facilities demand a more structured, documented, and professionally managed approach than smaller boutique gym cleaning.'
          },
          {
            question: 'Can Pro Clean Corp clean multiple gym locations under one contract?',
            answer: 'Yes. Pro Clean Corp manages multi-location commercial gym cleaning contracts for franchise chains and independent operators with multiple sites across NSW. A single account manager oversees all locations, ensuring consistent standards, coordinated scheduling, and unified reporting across your entire portfolio of fitness facilities.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Large-Format Fitness Specialists
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Commercial Gym Cleaning
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides specialist <strong className="text-white">commercial gym cleaning</strong> for large fitness centres, health clubs, franchise chains, and multi-facility operators across NSW. Industrial equipment. Hospital-grade disinfectants. Documented accountability.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Request a Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Multi-Location Contracts</span>
                <span>✓ Industrial Equipment</span>
                <span>✓ Digital Reporting</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/gym.jpg"
                alt="Commercial gym cleaning services large fitness centre NSW"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">50+</div>
                <div className="text-xs text-gray-500">Commercial Gym Chains Serviced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Commercial gym cleaning</strong> for large-format fitness facilities demands industrial-grade equipment, systematised processes, and multi-team coordination that standard cleaning companies cannot provide. Pro Clean Corp specialises in the unique scale, hygiene complexity, and operational demands of commercial gyms, health clubs, and franchise fitness operations across NSW.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Commercial Gym Cleaning — Scaled for Large Fitness Operations</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                A commercial gym with 1,000+ members per day generates hygiene challenges that are orders of magnitude greater than a small boutique studio. Equipment surfaces contact thousands of hands, rubber floors accumulate months of embedded sweat and residue without industrial scrubbing, and wet areas like showers and steam rooms become chronic sources of mould, biofilm, and fungal contamination unless managed with a rigorous daily programme.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp&apos;s commercial gym cleaning teams deploy ride-on floor scrubbers rated for rubber and hardwood gym surfaces, auto-dosing chemical systems that ensure correct disinfectant concentration on every application, and HEPA-filtered vacuuming for chalk and dust-heavy environments like CrossFit boxes and functional fitness floors.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Accountability Built Into Every Clean</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Every commercial gym cleaning visit is logged through our digital reporting platform. Supervisors complete zone-by-zone checklists, which are timestamped and available to gym management on request. This gives franchise operators, corporate gym managers, and health club operators the documented evidence of hygiene compliance their members, landlords, and insurers expect.
              </p>
            </div>
            <div>
              <Image
                src="/images/hero/hero2.jpg"
                alt="Commercial gym cleaning team large fitness facility"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Commercial Gym Cleaning Scope</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Industrial floor scrubbing</li>
                  <li>✓ Equipment sanitisation programme</li>
                  <li>✓ Locker room deep clean</li>
                  <li>✓ Pool & wet area cleaning</li>
                  <li>✓ Digital clean verification</li>
                  <li>✓ Multi-location management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Facility Types Grid — UNIQUE SECTION */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">Commercial Gym Types We Clean</h3>
            <p className="text-center text-gray-600 mb-8">Specialist cleaning solutions for every format of commercial fitness facility.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gymTypes.map((type, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-greenprimary/30 transition">
                  <div className="text-3xl mb-3">{type.icon}</div>
                  <h4 className="font-bold text-darkblue mb-2">{type.name}</h4>
                  <p className="text-sm text-gray-600">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">Pro Clean Corp vs Standard Gym Cleaning</h3>
            <p className="text-center text-gray-600 mb-8">See why commercial gym operators choose Pro Clean Corp for large facilities.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blueprimary text-white">
                    <th className="p-4 rounded-tl-lg text-left font-semibold">Feature</th>
                    <th className="p-4 text-left font-semibold">Standard Cleaners</th>
                    <th className="p-4 rounded-tr-lg text-left font-semibold">Pro Clean Corp</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-darkblue">{row.feature}</td>
                      <td className="p-4 text-gray-500">{row.standard}</td>
                      <td className="p-4 text-greenprimary font-semibold">{row.procleancorp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Commercial Gym Cleaning</h3>
            <div className="space-y-6">
              {[
                { q: 'What makes commercial gym cleaning different from regular gym cleaning?', a: 'Commercial gym cleaning for large-format facilities involves industrial-grade equipment — ride-on floor scrubbers, auto-dosing disinfectant systems, multi-person crews operating zones simultaneously. The scale, daily membership volumes, and regulatory requirements of commercial fitness facilities demand a more structured, documented approach.' },
                { q: 'Can Pro Clean Corp manage multiple gym locations under one contract?', a: 'Yes. We manage multi-location contracts for franchise chains and independent operators with multiple sites across NSW and ACT. A single account manager oversees all locations, ensuring consistent standards, coordinated scheduling, and unified digital reporting across your entire portfolio.' },
                { q: 'What industrial equipment do you use for commercial gym floors?', a: 'We use ride-on and walk-behind auto-scrubbers rated for rubber, hardwood, vinyl, and tile gym floors. These machines use timed water release and pressurised brush heads to remove embedded residue that mopping cannot reach. For CrossFit and functional fitness chalk floors, we use industrial HEPA vacuuming before wet scrubbing.' },
                { q: 'Do you provide compliance documentation for commercial gym operators?', a: 'Yes. Every cleaning visit is digitally logged and checked off against a zone-specific checklist. Reports are timestamped and available to gym management on request. This documentation supports hygiene compliance obligations, insurance requirements, and franchisor reporting for multi-location operators.' }
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
            <h3 className="text-3xl font-bold mb-4">Commercial Gym Cleaning — NSW&apos;s Fitness Facility Specialists</h3>
            <p className="text-xl mb-6 text-gray-100">
              From single large-format gyms to multi-location franchise operations — Pro Clean Corp delivers commercial gym cleaning at the scale and standard your facility demands.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Commercial Quote
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
