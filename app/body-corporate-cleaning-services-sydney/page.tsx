import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Body Corporate Cleaning Services Sydney | Strata Cleaning NSW | Pro Clean Corp',
  description: 'Professional body corporate cleaning services across Sydney NSW. Common area cleaning, lobby maintenance, car park cleaning, and full strata facility programs. Call 1300 494 983 for a free quote.',
  keywords: ['body corporate cleaning services Sydney', 'body corporate cleaning Sydney', 'strata cleaning services Sydney', 'body corporate cleaners NSW', 'common area cleaning Sydney'],
  openGraph: {
    title: 'Body Corporate Cleaning Services Sydney | Pro Clean Corp',
    description: 'Professional body corporate cleaning services across Sydney — common areas, lobbies, car parks, and full strata facility programs.',
    url: '/body-corporate-cleaning-services-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Body Corporate Cleaning Services Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Body Corporate Cleaning Services Sydney | Pro Clean Corp',
    description: 'Professional body corporate cleaning services for Sydney strata properties.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/body-corporate-cleaning-services-sydney' }
};

export default function BodyCorporateCleaningServicesSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Body Corporate Cleaning Services Sydney"
        serviceDescription="Pro Clean Corp provides professional body corporate cleaning services across Sydney NSW. Common area cleaning, lobby and foyer maintenance, lift cleaning, car park cleaning, and full strata facility programs for residential and commercial strata properties."
        serviceUrl="/body-corporate-cleaning-services-sydney"
        serviceType="Body Corporate Cleaning"
        price="$$-$$$"
        additionalServices={['Common Area Cleaning', 'Lobby & Foyer Cleaning', 'Lift Cleaning', 'Car Park Cleaning', 'Rubbish Room Maintenance', 'Window & Glass Cleaning']}
        faqs={[
          { question: 'What are body corporate cleaning services?', answer: 'Body corporate cleaning services maintain the common areas of strata-titled residential and commercial properties. This includes lobbies, corridors, stairwells, lifts, car parks, gym and pool areas, garden paths, and rubbish rooms — all the shared areas that owners and tenants use daily.' },
          { question: 'How often should body corporate cleaning be done?', answer: 'Most Sydney body corporate properties require daily or semi-weekly common area cleaning for high-traffic zones like lobbies and lifts, weekly cleaning of corridors and stairwells, and monthly deep cleans of car parks and utility areas. The right frequency depends on building size, occupancy, and the owners corporation budget.' }
        ]}
      />
      <section className="relative bg-gradient-to-br from-darkblue to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Strata Cleaning Specialists</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Body Corporate Cleaning Services Sydney</h1>
              <p className="text-xl mb-8 text-gray-100">Pro Clean Corp delivers professional body corporate cleaning services across Sydney NSW. From lobby and common area cleaning to car park maintenance and full strata facility programs — we work with owners corporations, strata managers, and building managers to keep every shared space clean, safe, and presentable.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Get a Free Quote</a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Strata Managers Welcome</span><span>✓ All Building Types</span><span>✓ $20M Insurance</span>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/strata.webp" alt="Body corporate cleaning services Sydney" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">500+</div>
                <div className="text-xs text-gray-500">Strata Buildings Serviced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium"><strong>Body corporate cleaning services</strong> from Pro Clean Corp maintain the shared spaces that define the first impression of your building — lobbies, corridors, lifts, car parks, and all common areas — keeping residents and visitors satisfied while protecting property values across Sydney NSW.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Body Corporate Cleaning Services for Sydney Properties</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Body corporate cleaning covers the common areas of strata-titled properties — the spaces that every owner, tenant, and visitor shares. These areas are the public face of any strata building, and maintaining them to a high standard is essential for resident satisfaction, property values, and the overall appeal of the building.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Pro Clean Corp works with strata management companies, owners corporations, and building managers across Sydney to deliver reliable, professional body corporate cleaning services. We understand the strata environment — including the need for discretion, early-morning scheduling, and clear communication with multiple stakeholders.</p>
              <div className="grid grid-cols-2 gap-3">
                {['Lobby & foyer cleaning', 'Lift & landing cleaning', 'Corridor & stairwell cleaning', 'Car park cleaning', 'Rubbish room maintenance', 'Pool & gym area cleaning', 'Garden path maintenance', 'Window & glass cleaning'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Image src="/images/services/hero2.jpg" alt="Body corporate cleaning team Sydney" className="rounded-2xl shadow-xl w-full h-96 object-cover" width={600} height={384} loading="lazy" />
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Strata Cleaning Locations Across Sydney</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: 'Strata Cleaning Sydney', href: '/strata-cleaning-sydney' },
                { name: 'Inner West', href: '/strata-cleaning-inner-west' },
                { name: 'Eastern Suburbs', href: '/strata-cleaning-eastern-suburbs' },
                { name: 'North Sydney', href: '/strata-cleaning-north-sydney' },
                { name: 'Parramatta', href: '/strata-cleaning-parramatta' },
                { name: 'Chatswood', href: '/strata-cleaning-chatswood' },
                { name: 'Newtown', href: '/strata-cleaning-newtown' },
                { name: 'Maroubra', href: '/strata-cleaning-maroubra' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">{link.name}</Link>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Body Corporate Cleaning Services Sydney</h3>
            <div className="space-y-4">
              {[
                { q: 'What are body corporate cleaning services?', a: 'Body corporate cleaning maintains the common areas of strata-titled properties — lobbies, corridors, stairwells, lifts, car parks, gym and pool areas, and rubbish rooms. These shared spaces are cleaned to keep residents and visitors satisfied while protecting property values.' },
                { q: 'How often should body corporate cleaning be done?', a: 'High-traffic areas like lobbies and lifts typically need daily or semi-weekly cleaning. Corridors and stairwells are usually cleaned weekly, with monthly deep cleans for car parks and utility areas. The right frequency depends on building size, occupancy, and owners corporation budget.' },
                { q: 'Can you work with our strata management company?', a: 'Yes. Pro Clean Corp regularly works with strata management companies across Sydney. We provide compliance documentation, regular reporting, and a dedicated contact to ensure seamless communication between our team and your strata manager.' },
                { q: 'Do you provide body corporate cleaning for commercial strata buildings?', a: 'Yes. We provide body corporate cleaning for both residential and commercial strata properties across Sydney, including mixed-use buildings, commercial office strata, and retail strata complexes.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Body Corporate Cleaning Services — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">Professional body corporate cleaning for Sydney strata properties. Free site assessment and quote for all buildings.</p>
            <div className="text-2xl font-bold text-greenprimary">1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
