import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning NSW | Professional Commercial Cleaners New South Wales | Pro Clean Corp',
  description: 'Professional commercial cleaning across NSW. Office cleaning, strata cleaning, industrial cleaning, and all commercial cleaning services for businesses throughout New South Wales. Call 1300 494 983.',
  keywords: ['commercial cleaning NSW', 'commercial cleaning New South Wales', 'commercial cleaners NSW', 'professional commercial cleaning NSW', 'commercial cleaning company NSW'],
  openGraph: {
    title: 'Commercial Cleaning NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning services across New South Wales — offices, warehouses, strata, retail, medical, and more.',
    url: '/commercial-cleaning-nsw',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Cleaning NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning across New South Wales.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-cleaning-nsw' }
};

export default function CommercialCleaningNSWPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaning NSW"
        serviceDescription="Pro Clean Corp provides professional commercial cleaning services across New South Wales including Sydney, Newcastle, Wollongong, and regional NSW. Office cleaning, strata cleaning, warehouse cleaning, medical cleaning, retail cleaning, and all commercial cleaning services."
        serviceUrl="/commercial-cleaning-nsw"
        serviceType="Commercial Cleaning"
        price="$$-$$$"
        additionalServices={['Office Cleaning', 'Strata Cleaning', 'Warehouse & Industrial Cleaning', 'Medical & Healthcare Cleaning', 'Retail Cleaning', 'Body Corporate Cleaning']}
        faqs={[
          { question: 'Do you provide commercial cleaning across all of NSW?', answer: 'Pro Clean Corp primarily services Greater Sydney and surrounding NSW regions including the Central Coast, Newcastle, Wollongong, and the Hunter Valley. Contact us to discuss your location — we service a wide range of NSW locations beyond metropolitan Sydney.' },
          { question: 'What commercial cleaning services do you offer across NSW?', answer: 'We provide office cleaning, strata and body corporate cleaning, warehouse and industrial cleaning, medical and healthcare facility cleaning, retail cleaning, restaurant and hospitality cleaning, gym and fitness centre cleaning, and all other commercial cleaning services across NSW.' }
        ]}
      />

      <section className="relative bg-gradient-to-br from-darkblue to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">NSW Commercial Cleaning Specialists</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Commercial Cleaning NSW</h1>
              <p className="text-xl mb-8 text-gray-100">Pro Clean Corp delivers professional commercial cleaning services across New South Wales. From Sydney CBD offices to industrial warehouses in Western Sydney, strata complexes on the North Shore, and medical centres across Greater Sydney — we cover the full range of commercial cleaning needs for NSW businesses.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Get a Free Quote</a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ All NSW Regions</span><span>✓ $20M Insurance</span><span>✓ WHS Compliant</span>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Commercial cleaning NSW" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">1,000+</div>
                <div className="text-xs text-gray-500">NSW Clients Serviced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium"><strong>Commercial cleaning in NSW</strong> from Pro Clean Corp covers every type of business facility — offices, warehouses, medical centres, retail spaces, strata buildings, gyms, restaurants, and more. We are a trusted NSW commercial cleaning company with 15+ years of experience serving businesses across the state.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Commercial Cleaning Services Across NSW</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">New South Wales is home to a diverse range of businesses — from Sydney CBD financial and legal firms to industrial manufacturers in Western Sydney, healthcare providers across the suburbs, retail strips in the Inner West, and strata complexes from the Northern Beaches to the Sutherland Shire.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Pro Clean Corp provides tailored commercial cleaning programs for every type of NSW business. Our teams are trained across all cleaning disciplines, our equipment covers everything from standard office cleaning to industrial floor scrubbing, and our WHS procedures meet the requirements of every industry we service.</p>
              <div className="space-y-2">
                {[
                  'Office & commercial building cleaning',
                  'Strata & body corporate cleaning',
                  'Warehouse & industrial cleaning',
                  'Medical & healthcare cleaning',
                  'Retail & showroom cleaning',
                  'Gym & fitness centre cleaning',
                  'Restaurant & hospitality cleaning',
                  'End of lease & builders cleaning',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-greenprimary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Image src="/images/services/hero1.jpg" alt="Commercial cleaning team NSW" className="rounded-2xl shadow-xl w-full h-96 object-cover" width={600} height={384} loading="lazy" />
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">Commercial Cleaning Locations Across NSW</h3>
            <p className="text-center text-gray-500 mb-6 text-sm">Click your area to see local commercial cleaning services</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: 'Sydney CBD', href: '/commercial-cleaning-sydney-cbd' },
                { name: 'North Sydney', href: '/commercial-cleaning-north-sydney' },
                { name: 'Parramatta', href: '/commercial-cleaning-parramatta' },
                { name: 'Chatswood', href: '/commercial-cleaning-chatswood' },
                { name: 'Macquarie Park', href: '/commercial-cleaning-macquarie-park' },
                { name: 'Penrith', href: '/commercial-cleaning-penrith' },
                { name: 'Liverpool', href: '/commercial-cleaning-liverpool' },
                { name: 'Norwest', href: '/commercial-cleaning-norwest' },
                { name: 'Sutherland', href: '/commercial-cleaning-sutherland' },
                { name: 'Inner West', href: '/commercial-cleaning-inner-west' },
                { name: 'Eastern Suburbs', href: '/commercial-cleaning-eastern-suburbs' },
                { name: 'Western Sydney', href: '/commercial-cleaning-western-sydney' },
                { name: 'Bankstown', href: '/commercial-cleaning-bankstown' },
                { name: 'Hornsby', href: '/commercial-cleaning-hornsby' },
                { name: 'Ryde', href: '/commercial-cleaning-ryde' },
                { name: 'All Sydney Locations', href: '/commercial-cleaning-sydney' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">{link.name}</Link>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: 'Office & Commercial Cleaning NSW',
                desc: 'Daily, weekly, and fortnightly office cleaning for NSW businesses of all sizes. Desks, kitchens, bathrooms, and all common areas.',
                href: '/office-cleaning',
              },
              {
                title: 'Strata & Body Corporate Cleaning NSW',
                desc: 'Common area cleaning, lobby maintenance, car park cleaning, and full strata programs for NSW residential and commercial strata buildings.',
                href: '/strata-cleaning-services',
              },
              {
                title: 'Industrial & Warehouse Cleaning NSW',
                desc: 'Industrial floor scrubbing, loading dock cleaning, and full facility maintenance for NSW warehouses and industrial facilities.',
                href: '/warehouse-cleaning-services',
              },
              {
                title: 'Medical & Healthcare Cleaning NSW',
                desc: 'Hospital-grade cleaning for medical centres, dental practices, allied health, and healthcare facilities across NSW.',
                href: '/medical-centre-cleaning',
              },
              {
                title: 'Retail Cleaning NSW',
                desc: 'Professional retail cleaning for shops, showrooms, shopping centres, and all retail environments across NSW.',
                href: '/retail-cleaning-sydney',
              },
              {
                title: 'Gym & Fitness Cleaning NSW',
                desc: 'Specialised gym and fitness centre cleaning with disinfection protocols for equipment, change rooms, and floors across NSW.',
                href: '/gym-cleaning-services',
              },
            ].map((service, i) => (
              <Link key={i} href={service.href} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition group">
                <h4 className="font-bold text-darkblue mb-3 group-hover:text-blueprimary">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Commercial Cleaning NSW</h3>
            <div className="space-y-4">
              {[
                { q: 'Do you provide commercial cleaning across all of NSW?', a: 'Pro Clean Corp primarily services Greater Sydney and surrounding NSW regions. Contact us to discuss your location — we service a wide range of NSW locations and can advise on coverage for your area.' },
                { q: 'What commercial cleaning services do you offer across NSW?', a: 'Office cleaning, strata and body corporate cleaning, warehouse and industrial cleaning, medical and healthcare cleaning, retail cleaning, restaurant and hospitality cleaning, gym and fitness centre cleaning, and all other commercial cleaning services across NSW.' },
                { q: 'Are your commercial cleaners NSW-based?', a: 'Yes. Pro Clean Corp is a Sydney-based commercial cleaning company with teams operating across Greater Sydney and broader NSW. All our cleaning teams are employed, trained, and managed directly — not subcontracted.' },
                { q: 'How do I get a commercial cleaning quote for my NSW business?', a: 'Call 1300 494 983 or use our online contact form to request a free site assessment. We visit your premises, assess your cleaning requirements, and provide a detailed quote tailored to your facility and frequency needs.' },
                { q: 'What industries do you service for commercial cleaning in NSW?', a: 'We service all industries requiring commercial cleaning in NSW including corporate offices, medical and healthcare, strata and body corporate, warehousing and industrial, retail, hospitality, education, government, and more.' },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Commercial Cleaning NSW — Get a Free Quote</h3>
            <p className="text-xl mb-6 text-gray-100">Pro Clean Corp services businesses across New South Wales. Contact us today for a free site assessment and tailored cleaning proposal.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Request a Quote</a>
              <div className="text-2xl font-bold text-greenprimary">1300 494 983</div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
