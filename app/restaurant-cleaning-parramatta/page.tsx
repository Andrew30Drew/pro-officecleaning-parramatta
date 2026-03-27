import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Restaurant Cleaning Parramatta | ProCleanCorp',
  description: 'Restaurant and commercial kitchen cleaning in Parramatta. Council health inspection ready. Grease trap areas, exhaust canopies, dining rooms. Free quote.',
  keywords: 'restaurant cleaning parramatta, commercial kitchen cleaning parramatta, kitchen cleaning council inspection parramatta, exhaust canopy cleaning parramatta, restaurant cleaners parramatta, food business cleaning parramatta',
  openGraph: {
    title: 'Restaurant Cleaning Parramatta | ProCleanCorp',
    description: 'Restaurant and commercial kitchen cleaning in Parramatta. Council health inspection ready. Exhaust canopies, grease areas, dining rooms. Free quote.',
    url: 'https://www.procleancorp.com.au/restaurant-cleaning-parramatta',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Restaurant cleaning Parramatta commercial kitchen cleaners' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/restaurant-cleaning-parramatta' }
};

const faqs = [
  {
    question: 'Can you clean our Parramatta restaurant kitchen before a council health inspection?',
    answer: 'Yes. ProCleanCorp provides pre-inspection deep cleans for Parramatta restaurants and food businesses. Our pre-inspection clean covers all areas that council environmental health officers check: exhaust canopy and filter systems, grease-affected surfaces, food contact areas, cool room interiors, floor drains and waste areas, and all storage zones. We can turn around a pre-inspection deep clean within 24–48 hours of booking for urgent requests. We also provide a checklist of what was cleaned, which you can present to the inspector.'
  },
  {
    question: 'Do you clean exhaust canopies and grease traps in Parramatta restaurants?',
    answer: 'Yes. ProCleanCorp provides exhaust canopy cleaning and grease trap area cleaning for Parramatta restaurants and commercial kitchens. Exhaust canopy cleaning removes built-up grease from the canopy hood, baffles and duct (accessible sections) using degreasers and steam cleaning methods. Grease trap cleaning (below-ground trap pumping) is handled by our licensed grease trap specialist partner — we coordinate this as part of a full kitchen compliance clean. Both are typically required for council health inspection compliance and fire safety.'
  },
  {
    question: 'How often should a commercial kitchen in Parramatta be professionally cleaned?',
    answer: 'A commercial kitchen in Parramatta should be professionally cleaned — beyond daily in-house cleaning — at least monthly for a deep clean of difficult areas (under equipment, behind fridges, exhaust canopy filters). High-volume restaurants typically require fortnightly deep cleans. Exhaust canopy cleaning frequency depends on cooking volume: typically quarterly for light use and monthly for high-volume grilling or frying. The Parramatta City Council environmental health department and your food safety plan will specify minimum cleaning frequencies for your food licence.'
  }
];

export default function RestaurantCleaningParramattaPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Restaurant Cleaning Parramatta"
        serviceDescription="ProCleanCorp provides restaurant and commercial kitchen cleaning in Parramatta, covering exhaust canopy cleaning, grease trap areas, cool rooms, dining rooms and all food contact surfaces to council health inspection standards."
        serviceUrl="https://www.procleancorp.com.au/restaurant-cleaning-parramatta"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Pre-Inspection Deep Cleans', 'Exhaust Canopy Cleaning', 'Grease Trap Area Cleaning', 'Cool Room Cleaning', 'Dining Room Cleaning', '24-Hour Call-Out']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Parramatta Restaurant & Commercial Kitchen Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Restaurant Cleaning Parramatta — Commercial Kitchen & Dining Cleaners
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides restaurant and commercial kitchen cleaning in Parramatta — council health inspection ready. Exhaust canopies, grease areas, cool rooms and dining rooms. 24-hour call-out for pre-inspection deep cleans.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Council Inspection Ready &nbsp;|&nbsp; ✓ 24hr Call-Out &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Restaurant cleaning Parramatta commercial kitchen cleaners"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides restaurant and commercial kitchen cleaning in Parramatta</strong>, covering exhaust canopy cleaning, grease trap areas, cool rooms, dining rooms and all food contact surfaces to council health inspection standards. Parramatta has one of the highest restaurant densities in western Sydney — our 24-hour call-out service is specifically designed for the time-sensitive pre-inspection clean.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Restaurant Cleaning Services in Parramatta</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Parramatta has one of the highest restaurant densities in western Sydney, driven by its multicultural food scene. The area's diverse restaurant ecosystem — from large Chinese seafood restaurants to Lebanese bakeries, Indian curry houses and modern Australian cafes — creates a concentrated demand for commercial kitchen cleaning that understands different cuisine types and their specific grease and residue profiles.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Council health inspections are the most time-sensitive cleaning need in hospitality. ProCleanCorp's 24-hour pre-inspection deep clean service is specifically designed for Parramatta restaurant owners who receive notice of an upcoming inspection — or who want to address compliance gaps before a scheduled visit.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Parramatta Restaurant Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Commercial kitchen deep clean', 'Exhaust canopy & filter cleaning', 'Grease trap area cleaning', 'Cool room & cool store cleaning', 'Food contact surface sanitisation', 'Dining room & front-of-house cleaning', 'Bar & beverage area cleaning', 'Floor drain cleaning', 'Under-equipment cleaning', 'Storage & dry goods area cleaning', 'Pre-inspection deep cleans (24hr call-out)', 'Regular maintenance cleaning programs'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blueprimary/20 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-darkblue mb-3">Restaurant Cleaning Prices — Parramatta (2026)</h3>
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
                        ['Pre-inspection kitchen deep clean', 'From $380'],
                        ['Regular commercial kitchen clean (per visit)', 'From $180'],
                        ['Exhaust canopy cleaning', 'From $280'],
                        ['Cool room cleaning (per session)', 'From $150'],
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
                <h4 className="font-bold text-darkblue mb-3">Parramatta Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Parramatta CBD', 'Church Street precinct', 'Westfield Parramatta', 'Merrylands', 'Granville', 'Auburn', 'Silverwater', 'North Parramatta'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-red-600 text-white p-6 rounded-xl mb-4">
                <h4 className="font-bold mb-2">24hr Pre-Inspection Call-Out</h4>
                <p className="text-sm mb-3 text-red-100">Got a council inspection coming? We can clean within 24 hours.</p>
                <div className="text-xl font-bold">1300 494 983</div>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Regular Programs</h4>
                <p className="text-sm mb-3 text-gray-300">Monthly deep cleans & weekly maintenance.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Restaurant Cleaning Parramatta</h3>
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
                { label: 'Restaurant Cleaning Sydney', href: '/restaurant-cleaning-sydney' },
                { label: 'Commercial Kitchen Cleaning Sydney', href: '/commercial-kitchen-cleaning-sydney' },
                { label: 'Commercial Cleaning Parramatta', href: '/commercial-cleaning-parramatta' },
                { label: 'How Much Does Commercial Cleaning Cost', href: '/how-much-does-commercial-cleaning-cost' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Restaurant Cleaning Parramatta — 24hr Call-Out Available</h3>
            <p className="text-xl mb-4 text-gray-100">Pre-inspection deep cleans. Council health inspection ready. Regular programs available.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
