import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaning Newcastle NSW | Fitness Centre & Health Club Cleaning | Pro Clean Corp',
  description: 'Professional gym cleaning across Newcastle NSW. Equipment sanitisation, locker rooms, change rooms & health club deep cleaning. Serving Newcastle CBD, Hamilton, Charlestown, Broadmeadow & surrounds. Call 1300 494 983.',
  keywords: [
    'gym cleaning Newcastle',
    'gym cleaning Newcastle NSW',
    'fitness centre cleaning Newcastle',
    'health club cleaning Newcastle NSW',
    'gym sanitisation Newcastle',
    'locker room cleaning Newcastle',
    'commercial gym cleaning Hunter Valley',
    'gym cleaners Newcastle CBD',
    'Pro Clean Corp Newcastle gym'
  ],
  openGraph: {
    title: 'Gym Cleaning Newcastle NSW | Pro Clean Corp',
    description: 'Professional gym and fitness centre cleaning across Newcastle NSW — equipment sanitisation, locker rooms, change rooms, and health club deep cleaning.',
    url: '/gym-cleaning-newcastle',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Gym Cleaning Newcastle NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Cleaning Newcastle NSW | Pro Clean Corp',
    description: 'Professional gym and fitness centre cleaning across Newcastle NSW — equipment sanitisation, locker rooms, and health club cleaning.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/gym-cleaning-newcastle' }
};

const newcastleAreas = [
  { name: 'Newcastle CBD', desc: 'Hunter St & city centre gyms' },
  { name: 'Hamilton', desc: 'Hamilton health clubs & studios' },
  { name: 'Charlestown', desc: 'Charlestown Square precinct gyms' },
  { name: 'Broadmeadow', desc: 'Broadmeadow sports & fitness' },
  { name: 'Mayfield', desc: 'Mayfield community fitness centres' },
  { name: 'New Lambton', desc: 'New Lambton suburb gyms' },
  { name: 'Waratah', desc: 'Waratah fitness facilities' },
  { name: 'Merewether', desc: 'Merewether beachside studios' },
  { name: 'The Junction', desc: 'The Junction boutique studios' },
  { name: 'Wickham', desc: 'Wickham & Maryville gyms' },
];

export default function GymCleaningNewcastlePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Newcastle NSW"
        serviceDescription="Professional gym and fitness centre cleaning services across Newcastle NSW covering equipment sanitisation, locker rooms, changerooms, health clubs, and all high-touch surfaces. Serving Newcastle CBD, Hamilton, Charlestown, Broadmeadow, and surrounding suburbs."
        serviceUrl="/gym-cleaning-newcastle"
        serviceType="Gym Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Health Club & Aquatic Centre Cleaning',
          'Pool Surround & Sauna Cleaning',
          'Changeroom Deep Sanitisation',
          '24-Hour Gym Cleaning',
          'Equipment Disinfection Programme',
          'Locker Room Hygiene Service',
          'CrossFit Box Specialist Cleaning',
          'Pre-Opening & After-Hours Cleans'
        ]}
        faqs={[
          {
            question: 'Do you service large commercial gyms and health clubs in Newcastle?',
            answer: 'Yes. We have experience cleaning large-format fitness centres, multi-level health clubs with pools and saunas, as well as smaller boutique studios throughout the Newcastle region. Our Newcastle gym cleaning teams use industrial floor scrubbers, TGA-approved disinfectants, and specialist wet area cleaning equipment suited to the scale and complexity of commercial health facilities.'
          },
          {
            question: 'What Newcastle suburbs do you service for gym cleaning?',
            answer: 'Pro Clean Corp services gyms and fitness centres across the Newcastle metropolitan area including Newcastle CBD, Hamilton, Charlestown, Broadmeadow, Mayfield, New Lambton, Waratah, Wickham, Maryville, Merewether, The Junction, Kotara, Adamstown, Islington, and surrounding suburbs. We also service the Hunter Valley region including Maitland, Cessnock, and Raymond Terrace.'
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
                Newcastle NSW Gym Specialists
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Gym Cleaning Newcastle NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides professional <strong className="text-white">gym cleaning across Newcastle NSW</strong> — from large health clubs in Charlestown to boutique studios in Hamilton and CrossFit boxes in Broadmeadow. Expert sanitisation, flexible scheduling, 7 days a week.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Newcastle Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ All Newcastle Suburbs</span>
                <span>✓ Hunter Valley Coverage</span>
                <span>✓ 24-Hour Gym Capability</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/gym.jpg"
                alt="Gym cleaning Newcastle NSW - fitness centre cleaning services"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">40+</div>
                <div className="text-xs text-gray-500">Newcastle Gyms Serviced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Gym cleaning in Newcastle NSW</strong> is available from Pro Clean Corp across all suburbs — from Newcastle CBD and Hamilton to Charlestown, Broadmeadow, Mayfield, and the broader Hunter region. We service commercial health clubs, boutique fitness studios, CrossFit boxes, and council leisure facilities with the same specialist approach we bring to Sydney&apos;s top gym operators.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Gym Cleaning Services — Newcastle & Hunter Region</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Newcastle&apos;s fitness industry has grown significantly in recent years, driven by urban renewal along the Hunter Street and Honeysuckle precincts, increased residential density in the inner city, and a strong health and wellness culture across suburban communities from Charlestown to Merewether. Large multi-sport complexes, franchise gym operations, and an expanding network of boutique studios now serve Newcastle&apos;s population — all requiring reliable, specialist cleaning to maintain the hygiene standards members expect.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp&apos;s Newcastle gym cleaning teams are based in the Hunter region and operate across all suburbs from Maryville and Wickham in the inner city to Charlestown, Kotara, and Adamstown in the south, and Mayfield, Broadmeadow, and Waratah in the west. We use the same industrial floor scrubbers, TGA-approved disinfectants, and specialist wet area cleaning equipment as our Sydney operations — delivering consistent hygiene standards regardless of facility size or location.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Newcastle Health Club & Aquatic Centre Cleaning</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Multi-facility health clubs and aquatic centres in Newcastle require particular expertise — combining pool deck cleaning, wet changeroom management, gym floor scrubbing, court and studio cleaning, and amenity servicing under a single integrated programme. Our teams are trained and equipped for every zone, ensuring no aspect of your Newcastle facility falls below the hygiene standard your members and management expect.
              </p>
            </div>
            <div>
              <Image
                src="/images/hero/hero6.jpg"
                alt="Gym cleaning team Newcastle NSW fitness centre"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Newcastle Gym Services</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Equipment sanitisation</li>
                  <li>✓ Locker room deep clean</li>
                  <li>✓ Pool & wet area cleaning</li>
                  <li>✓ Court & studio floors</li>
                  <li>✓ 24-hour gym access</li>
                  <li>✓ Odour elimination</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Complete Gym Cleaning Scope — Newcastle</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Weight & resistance equipment wipe-down',
                'Cardio machine sanitisation',
                'Rubber gym floor scrubbing',
                'Changeroom & shower deep clean',
                'Locker area disinfection',
                'Group fitness studio cleaning',
                'Pool deck tile scrubbing',
                'Sauna & steam room service',
                'Court and studio floor cleaning',
                'Reception & café area clean',
                'High-touch surface disinfection',
                'Anti-mould wet area treatment'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suburb Links Grid — UNIQUE SECTION */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Gym Cleaning by Newcastle Suburb</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {newcastleAreas.map((area, i) => (
                <Link key={i} href="/gym-cleaning-newcastle" className="bg-white p-3 rounded text-sm text-center hover:shadow-md transition border border-gray-100 block">
                  <span className="font-medium text-darkblue block">{area.name}</span>
                  <span className="text-xs text-gray-500">{area.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Gym Cleaning Newcastle</h3>
            <div className="space-y-6">
              {[
                { q: 'Do you service large commercial gyms and health clubs in Newcastle?', a: 'Yes. We have experience cleaning large-format fitness centres, multi-level health clubs with pools and saunas, and boutique studios throughout Newcastle. Our teams use industrial floor scrubbers, TGA-approved disinfectants, and specialist wet area equipment suited to the scale of commercial health facilities.' },
                { q: 'What Newcastle suburbs do you cover for gym cleaning?', a: 'Pro Clean Corp services gyms across Newcastle CBD, Hamilton, Charlestown, Broadmeadow, Mayfield, New Lambton, Waratah, Wickham, Maryville, Merewether, The Junction, Kotara, Adamstown, and Islington. We also service the Hunter Valley including Maitland, Cessnock, and Raymond Terrace.' },
                { q: 'Can you clean a Newcastle gym that operates 24/7?', a: 'Yes. We design cleaning windows around your quietest hours — typically between midnight and 5am — and deploy trained teams with secure access credentials to deliver a full clean without disturbing members. Day porter services are available for ongoing hygiene maintenance during operating hours.' },
                { q: 'Do you offer one-off deep cleaning for Newcastle gyms?', a: 'Yes. We provide one-off deep cleans for Newcastle fitness facilities ahead of inspections, refurbishments, ownership changes, or after a contamination event. Emergency deep sanitisation can be arranged within 24 hours for confirmed hygiene incidents. Call 1300 494 983 to arrange.' }
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
            <h3 className="text-3xl font-bold mb-4">Newcastle&apos;s Trusted Gym Cleaning Specialists</h3>
            <p className="text-xl mb-6 text-gray-100">
              From Newcastle CBD health clubs to Hunter Valley boutique studios — Pro Clean Corp delivers professional gym cleaning across the entire Newcastle region.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Newcastle Quote
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
