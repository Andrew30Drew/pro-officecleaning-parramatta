import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Kingsgrove | Professional Strata Cleaners Canterbury-Bankstown | Pro Clean Corp',
  description: 'Professional strata cleaning in Kingsgrove, Canterbury-Bankstown area. Expert cleaners for residential and commercial strata buildings in Kingsgrove and surrounding suburbs. Call 1300 494 983.',
  keywords: [
    'strata cleaning Kingsgrove',
    'strata cleaners Kingsgrove',
    'strata cleaning Canterbury Bankstown',
    'Kingsgrove strata cleaning services',
    'building cleaning Kingsgrove NSW',
    'strata maintenance Kingsgrove',
    'apartment cleaning Kingsgrove',
    'common area cleaning Kingsgrove',
    'Pro Clean Corp Kingsgrove'
  ],
  openGraph: {
    title: 'Strata Cleaning Kingsgrove | Pro Clean Corp',
    description: 'Professional strata cleaning in Kingsgrove, Canterbury-Bankstown. Expert cleaners for strata buildings throughout Kingsgrove NSW.',
    url: '/strata-cleaning-kingsgrove',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Strata Cleaning Kingsgrove Canterbury-Bankstown' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strata Cleaning Kingsgrove | Pro Clean Corp',
    description: 'Professional strata cleaning services in Kingsgrove, Canterbury-Bankstown area. Call 1300 494 983.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/strata-cleaning-kingsgrove' }
};

const nearbyAreas = [
  { name: 'Bexley', slug: 'strata-cleaning-bexley' },
  { name: 'Bexley North', slug: 'strata-cleaning-bexley-north' },
  { name: 'Beverly Hills', slug: 'strata-cleaning-beverly-hills' },
  { name: 'Narwee', slug: 'strata-cleaning-narwee' },
  { name: 'Hurstville', slug: 'strata-cleaning-hurstville' },
  { name: 'Rockdale', slug: 'strata-cleaning-rockdale' },
  { name: 'Earlwood', slug: 'strata-cleaning-earlwood' },
  { name: 'Bankstown', slug: 'strata-cleaning-bankstown' },
];

export default function StrataCleaningKingsgrovePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Kingsgrove"
        serviceDescription="Professional strata cleaning services in Kingsgrove, Canterbury-Bankstown area. Expert cleaners for residential apartment buildings, commercial strata complexes, and common areas throughout Kingsgrove NSW."
        serviceUrl="/strata-cleaning-kingsgrove"
        serviceType="Strata Cleaning"
        price="$$"
        additionalServices={[
          'Common Area Cleaning',
          'Lobby & Foyer Cleaning',
          'Stairwell & Lift Cleaning',
          'Bin Room & Waste Area Cleaning',
          'Car Park Sweeping & Cleaning',
          'Garden & Pathway Maintenance Cleaning'
        ]}
        faqs={[
          {
            question: 'Do you provide strata cleaning in Kingsgrove?',
            answer: 'Yes. Pro Clean Corp provides professional strata cleaning services throughout Kingsgrove and the Canterbury-Bankstown area, including common areas, lobbies, stairwells, lifts, bin rooms, and car parks.'
          },
          {
            question: 'What strata buildings do you clean in Kingsgrove?',
            answer: 'We clean all types of strata buildings in Kingsgrove including residential apartment complexes, mixed-use buildings, commercial strata properties, and townhouse complexes.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Canterbury-Bankstown Area
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Strata Cleaning Kingsgrove
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides professional strata cleaning services across Kingsgrove and the Canterbury-Bankstown area. Reliable, insured strata cleaners for apartment complexes, mixed-use buildings, and commercial strata properties.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Free Strata Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Strata Manager Approved</span>
                <span>✓ OC Committee Trusted</span>
                <span>✓ Fully Insured</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/strata.jpg"
                alt="Strata cleaning Kingsgrove Canterbury-Bankstown"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">14 km</div>
                <div className="text-xs text-gray-500">From Sydney CBD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Strata cleaning in Kingsgrove</strong> is provided by Pro Clean Corp, servicing the Canterbury-Bankstown Council area approximately 14 km south-west of Sydney CBD. Kingsgrove is a densely populated residential suburb with a growing number of apartment complexes and mixed-use strata buildings that require regular, professional common area maintenance and cleaning.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Strata Cleaners — Kingsgrove & Canterbury-Bankstown</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Kingsgrove sits within the Canterbury-Bankstown Council area and has experienced significant residential development in recent years, with an increasing number of apartment complexes, villa communities, and mixed-use strata buildings emerging alongside existing retail and industrial properties along the Kingsgrove corridor.
              </p>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Strata cleaning in these buildings requires a systematic approach: regular common area cleaning, lift and stairwell maintenance, bin room sanitation, lobby and foyer presentation, and car park sweeping — all coordinated with the owners corporation or strata manager to meet residents&apos; expectations and the building&apos;s by-laws.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Partnering with Kingsgrove Strata Managers</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp works directly with strata managers, building managers, and owners corporations throughout Kingsgrove. We provide detailed cleaning reports, maintain compliance records, and offer flexible scheduling to keep your strata building looking its best year-round.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/hero1.jpg"
                alt="Strata cleaning team in Kingsgrove apartment building"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Kingsgrove Service Info</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ LGA: Canterbury-Bankstown</li>
                  <li>✓ Distance from CBD: ~14 km</li>
                  <li>✓ Strata manager liaison</li>
                  <li>✓ OC committee reporting</li>
                  <li>✓ Compliance records kept</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Strata Services */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Strata Cleaning Services — Kingsgrove</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                'Lobby, foyer & entry cleaning',
                'Stairwell sweeping & mopping',
                'Lift car & buttons disinfection',
                'Common area vacuuming & mopping',
                'Bin room cleaning & deodorising',
                'Car park sweeping & pressure wash',
                'Mailroom & intercom area cleaning',
                'External path & paving cleaning',
                'Garden edge & pathway blow',
                'Rubbish removal & bin services',
                'Graffiti removal coordination',
                'End-of-year deep clean services'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Areas */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-3 text-center">Nearby Areas We Also Serve</h3>
            <p className="text-center text-gray-600 mb-6">Strata cleaning services throughout Canterbury-Bankstown and surrounding LGAs.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {nearbyAreas.map((area) => (
                <Link key={area.slug} href={`/${area.slug}`} className="bg-white p-3 rounded-lg text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Strata Cleaning Kingsgrove</h3>
            <div className="space-y-5">
              {[
                { q: 'Who is responsible for strata cleaning in Kingsgrove buildings?', a: 'The owners corporation (OC) is responsible for maintaining and cleaning all common property in a strata-titled building. This typically includes lobbies, corridors, stairwells, lifts, car parks, bin rooms, and external common areas. The OC usually engages a professional strata cleaning company like Pro Clean Corp.' },
                { q: 'How often should a strata building in Kingsgrove be cleaned?', a: 'Most strata buildings in Kingsgrove benefit from weekly cleaning of common areas, with more frequent attention to high-traffic lobbies and lifts (2–3 times per week), monthly car park sweeps, and quarterly deep cleans of stairwells and bin rooms.' },
                { q: 'Do you work with strata managers in the Kingsgrove area?', a: 'Yes. Pro Clean Corp regularly works with strata managers servicing buildings in the Canterbury-Bankstown and surrounding areas. We provide detailed cleaning records, are responsive to inspection requests, and can attend owners corporation meetings if required.' },
                { q: 'Can you clean a Kingsgrove building at short notice?', a: 'Yes. We maintain capacity to respond to urgent strata cleaning requests across Kingsgrove — whether for a pre-sale inspection, an owners corporation complaint, or an unexpected cleaning event. Call 1300 494 983 to discuss urgent requirements.' }
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
            <h3 className="text-3xl font-bold mb-4">Professional Strata Cleaning in Kingsgrove</h3>
            <p className="text-xl mb-6 text-gray-100">
              Keep your Kingsgrove strata building immaculate. Contact Pro Clean Corp for a free strata cleaning quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Free Strata Quote
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
