import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaners Mascot | Airport Precinct | Pro Clean Corp',
  description: 'Professional commercial cleaners in Mascot, Sydney Airport precinct. Offices, retail, strata and warehouses. 6km from CBD. Fixed pricing, after-hours service. Free quote.',
  keywords: ['commercial cleaners mascot', 'commercial cleaning mascot', 'office cleaning mascot', 'commercial cleaning sydney airport', 'cleaners mascot sydney'],
  openGraph: {
    title: 'Commercial Cleaners Mascot | Airport Precinct | Pro Clean Corp',
    description: 'Professional commercial cleaners in Mascot — Sydney Airport precinct. Offices, retail and strata. Fixed pricing, after-hours.',
    url: 'https://www.procleancorp.com.au/commercial-cleaners-mascot',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial cleaners Mascot Sydney Airport' }]
  },
  twitter: { card: 'summary_large_image', title: 'Commercial Cleaners Mascot | Pro Clean Corp', description: 'Professional commercial cleaners in Mascot, Sydney Airport precinct.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaners-mascot' }
};

const faqs = [
  {
    question: 'What commercial cleaning services are available in Mascot?',
    answer: 'Pro Clean Corp provides a full range of commercial cleaning services in Mascot including office cleaning, corporate office cleaning, strata common area cleaning, retail cleaning, warehouse cleaning, showroom cleaning and end of lease cleaning. Mascot\'s diverse commercial market — spanning aviation industry offices, logistics, retail and residential strata — is well suited to our multi-service offering.'
  },
  {
    question: 'Do you clean commercial offices in Mascot\'s airport precinct?',
    answer: 'Yes. Pro Clean Corp services commercial offices throughout Mascot\'s Sydney Airport precinct, including along Botany Road, the Airport Business District and the mixed commercial-residential zones around Mascot train station. Our teams are familiar with the access requirements and after-hours scheduling common in airport-adjacent commercial facilities.'
  },
  {
    question: 'How much does commercial cleaning cost in Mascot?',
    answer: 'Commercial cleaning in Mascot ranges from $80/clean for small offices and retail under 100sqm to $280+/clean for larger commercial premises. Strata cleaning starts from $80/visit for small complexes. Monthly fixed-price contracts are available for all Mascot commercial premises — Pro Clean Corp provides a written quote after a free on-site assessment.'
  },
  {
    question: 'Can you provide 24/7 or early morning commercial cleaning in Mascot?',
    answer: 'Yes. Given Mascot\'s proximity to Sydney Airport and the prevalence of 24-hour aviation and logistics operations in the area, Pro Clean Corp is experienced with flexible cleaning schedules — including overnight, early morning and shift-based cleaning for businesses that operate outside standard hours. Contact us to discuss your specific scheduling needs.'
  }
];

const nearbySuburbs = [
  { suburb: 'Botany', href: '/commercial-cleaning-botany' },
  { suburb: 'Rosebery', href: '/commercial-cleaning-rosebery' },
  { suburb: 'Zetland', href: '/commercial-cleaning-zetland' },
  { suburb: 'Eastlakes', href: '/commercial-cleaning-eastlakes' },
  { suburb: 'Alexandria', href: '/office-cleaning-alexandria' },
  { suburb: 'Kingsford', href: '/commercial-cleaning-kingsford' }
];

export default function CommercialCleanersMascotPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaners Mascot"
        serviceDescription="Professional commercial cleaning services in Mascot, Sydney Airport precinct. Offices, retail, strata and warehouses. Fixed pricing, after-hours service, no lock-in contracts."
        serviceUrl="/commercial-cleaners-mascot"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Corporate Office Cleaning', 'Strata Cleaning', 'Warehouse Cleaning', 'Retail Cleaning', 'Showroom Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Mascot · Sydney Airport Precinct · 6km from CBD</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Commercial Cleaners Mascot — Sydney&apos;s Airport Hub
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Pro Clean Corp provides commercial cleaners in Mascot</strong> for offices, strata buildings, warehouses and retail premises throughout Sydney&apos;s major airport commercial precinct — with flexible after-hours scheduling to suit aviation, logistics and 24-hour operations.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Airport precinct experienced', 'Flexible 24/7 scheduling', 'Office + strata + warehouse', 'Fixed monthly pricing', 'No lock-in contracts', 'Free on-site assessment'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white text-sm">
                    <span className="text-green-300">✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial cleaners Mascot Sydney Airport"
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
      <section className="py-8 bg-greenprimary/10 border-l-4 border-greenprimary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>Commercial cleaners in Mascot from Pro Clean Corp</strong> service offices, strata buildings, warehouses and retail premises throughout the Sydney Airport precinct — with flexible scheduling for aviation, logistics and 24-hour operations. Fixed pricing from $80/clean and no lock-in contracts across all Mascot commercial property types.
          </p>
        </div>
      </section>

      {/* About Mascot */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-5">Commercial Cleaning in Mascot&apos;s Airport Precinct</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Mascot sits at the boundary of the City of Sydney and the Bayside Council area, approximately 6km south of the CBD. As Sydney&apos;s airport suburb, Mascot has one of the highest concentrations of aviation industry offices, logistics and freight businesses, corporate headquarters and mixed-use strata development in Greater Sydney.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The commercial landscape spans Botany Road, the Airport Business District, Gardeners Road and the rapidly developing residential-commercial zones around Mascot train station — including newer apartment towers with strata cleaning requirements alongside older commercial office blocks.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Pro Clean Corp has extensive experience with Mascot&apos;s diverse commercial market — from standard office cleaning to after-hours airport precinct cleaning with security protocols and flexible shift-based scheduling.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/hero2.jpg"
                alt="Mascot commercial cleaning Sydney Airport precinct"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Types */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-10 text-center">Commercial Cleaning for Every Mascot Business Type</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { type: 'Corporate & Aviation Offices', desc: 'Workstations, meeting rooms, reception, kitchen and bathrooms. After-hours and early morning scheduling for airport precinct offices.', price: 'From $80/clean' },
              { type: 'Strata Complexes', desc: 'Common areas, lobbies, lifts, bin rooms and car parks for Mascot\'s growing residential and mixed-use strata market.', price: 'From $80/visit' },
              { type: 'Warehouses & Logistics', desc: 'Floor sweeping, amenities cleaning, loading dock areas and office zones for Mascot\'s logistics and freight businesses.', price: 'From $150/clean' },
              { type: 'Retail Premises', desc: 'Shop floors, displays, changerooms and entry areas for Mascot train station retail and Botany Road commercial strips.', price: 'From $80/clean' },
              { type: 'Showrooms', desc: 'Premium floor cleaning, display surface care and entry presentation for Mascot showroom facilities.', price: 'From $100/clean' },
              { type: 'End of Lease', desc: 'Bond-back standard end of lease cleaning for commercial and residential Mascot properties.', price: 'From $250' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-darkblue mb-2 text-sm">{item.type}</h3>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">{item.desc}</p>
                <span className="text-greenprimary font-bold text-sm">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-darkblue mb-6">Also Serving Nearby Suburbs</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {nearbySuburbs.map((s, i) => (
              <Link key={i} href={s.href} className="bg-gray-50 hover:bg-blueprimary hover:text-white border border-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700 text-center transition">{s.suburb}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Commercial Cleaners Mascot</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-darkblue mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blueprimary to-darkblue text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get a Free Mascot Commercial Cleaning Quote</h2>
          <p className="text-xl text-blue-100 mb-8">On-site assessment within 48 hours. Fixed pricing, flexible scheduling, no lock-in.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
