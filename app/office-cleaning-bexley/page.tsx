import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Bexley | Commercial Cleaners Bayside Sydney | Pro Clean Corp',
  description: 'Professional office cleaning in Bexley, Bayside area Sydney. Trusted commercial cleaners for offices, shops, and businesses in Bexley North and South. Serving the full Bayside Council area. Call 1300 494 983.',
  keywords: [
    'office cleaning Bexley',
    'commercial cleaners Bexley',
    'office cleaners Bayside Sydney',
    'Bexley office cleaning services',
    'commercial cleaning Bexley NSW',
    'office cleaning Bayside area',
    'business cleaning Bexley',
    'professional office cleaners Bexley',
    'Pro Clean Corp Bexley'
  ],
  openGraph: {
    title: 'Office Cleaning Bexley | Pro Clean Corp',
    description: 'Professional office cleaning in Bexley, Bayside Sydney. Trusted commercial cleaners for offices and businesses in Bexley NSW.',
    url: '/office-cleaning-bexley',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Office Cleaning Bexley Bayside Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaning Bexley | Pro Clean Corp',
    description: 'Professional office cleaning in Bexley, Bayside Sydney. Call 1300 494 983.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/office-cleaning-bexley' }
};

const nearbyAreas = [
  { name: 'Rockdale', slug: 'office-cleaning-rockdale' },
  { name: 'Arncliffe', slug: 'office-cleaning-arncliffe' },
  { name: 'Hurstville', slug: 'office-cleaning-hurstville' },
  { name: 'Kogarah', slug: 'office-cleaning-kogarah' },
  { name: 'Carlton', slug: 'office-cleaning-carlton' },
  { name: 'Kingsgrove', slug: 'office-cleaning-kingsgrove' },
  { name: 'Banksia', slug: 'office-cleaning-banksia' },
  { name: 'Mascot', slug: 'commercial-cleaning-mascot' },
];

export default function OfficeCleaningBexleyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Bexley"
        serviceDescription="Professional office cleaning services in Bexley, Bayside area Sydney. Trusted commercial cleaners for offices, retail spaces, and businesses in Bexley North, Bexley, and the Bayside Council area."
        serviceUrl="/office-cleaning-bexley"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={[
          'Regular Office Cleaning',
          'Retail & Commercial Cleaning',
          'Medical & Healthcare Cleaning',
          'Bathroom & Amenities Cleaning',
          'Deep Clean Services',
          'End-of-Lease Office Cleaning'
        ]}
        faqs={[
          {
            question: 'Do you offer office cleaning in Bexley?',
            answer: 'Yes. Pro Clean Corp provides professional office cleaning services throughout Bexley and the Bayside Council area, including regular daily, weekly, and fortnightly schedules.'
          },
          {
            question: 'Which parts of Bexley do you cover?',
            answer: 'We cover all parts of Bexley including Bexley North, Bexley South, and all surrounding streets. We also serve neighbouring suburbs like Rockdale, Arncliffe, Carlton, and Kogarah.'
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
                Bayside Area Sydney
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Cleaning Bexley
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides professional office and commercial cleaning throughout Bexley and the Bayside Council area. Reliable, insured, and available seven days — keeping your Bexley workplace clean and professional every day.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Free Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Bayside Council Area</span>
                <span>✓ Fully Insured Team</span>
                <span>✓ 7 Days a Week</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Office cleaning Bexley Bayside Sydney"
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
            <strong>Office cleaning in Bexley</strong> is provided by Pro Clean Corp, servicing the Bayside Council area approximately 14 km south of Sydney CBD. Bexley is a mixed residential and commercial suburb known for its medical practices, retail strips, and professional service offices. We deliver consistent, professional cleaning across Bexley North, Bexley, and all surrounding streets.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Office Cleaning Services for Bexley Businesses</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Bexley sits within the Bayside Council area, positioned between Rockdale and Kingsgrove. The suburb features a notable commercial presence along Stoney Creek Road, King Street, and the surrounding retail precincts — including a high density of medical and allied health offices, real estate agencies, and small professional service firms.
              </p>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Pro Clean Corp&apos;s commercial cleaning team provides Bexley offices with a comprehensive cleaning service tailored to the specific demands of each workspace. We accommodate early morning starts (from 6am), after-hours cleaning, and weekend schedules to keep your office immaculate without any interruption to your business.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">The Pro Clean Corp Difference in Bexley</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our Bexley clients value our consistency: the same cleaners, the same high standard, every visit. We use quality commercial-grade cleaning products, provide detailed cleaning checklists for each site, and conduct regular quality inspections. If anything falls short, we&apos;ll rectify it promptly — no questions asked.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/hero4.jpg"
                alt="Commercial office cleaning team in Bexley Bayside area"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Why Choose Us in Bexley</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Consistent cleaning teams</li>
                  <li>✓ Custom cleaning checklists</li>
                  <li>✓ Quality inspection checks</li>
                  <li>✓ No minimum contract</li>
                  <li>✓ Fully insured & police checked</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Business Types */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Medical & Dental Offices', icon: '🏥', desc: 'GP clinics, dental practices, and allied health suites throughout Bexley and Bexley North.' },
              { title: 'Retail & Commercial', icon: '🏬', desc: 'Backroom offices, storerooms, and commercial spaces along Stoney Creek Road and King Street.' },
              { title: 'Professional Services', icon: '💼', desc: 'Accountants, financial advisers, legal practices, and real estate offices throughout Bexley.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-darkblue mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Complete Office Cleaning Services — Bexley</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                'Desk, chair & surface wiping',
                'Vacuuming carpets & rugs',
                'Hard floor mopping & buffing',
                'Kitchen & tea station cleaning',
                'Bathroom & toilet deep clean',
                'Bin services & hygienic waste',
                'Glass & window polishing',
                'Reception & entry cleaning',
                'Meeting room reset & clean',
                'High-touch point disinfection',
                'Skirting board & cornice dusting',
                'One-off deep clean available'
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
            <p className="text-center text-gray-600 mb-6">Our cleaning coverage extends across all Bayside and St George suburbs near Bexley.</p>
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
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Office Cleaning Bexley</h3>
            <div className="space-y-5">
              {[
                { q: 'Do you clean offices in both Bexley and Bexley North?', a: 'Yes. We service all parts of Bexley including Bexley North, Bexley South, and all streets across the suburb. Our team is fully familiar with the area and can begin service quickly.' },
                { q: 'What are your office cleaning hours in Bexley?', a: 'We are available from 6am until 10pm Monday to Sunday. Most Bexley office clients prefer either an early morning clean before 8:30am or an evening clean after 5:30pm.' },
                { q: 'Do you offer a one-off deep clean for Bexley offices?', a: 'Yes. One-off deep cleans are available for Bexley offices — ideal for end-of-lease, new tenancy preparation, post-renovation, or special events. Contact us for a tailored quote.' },
                { q: 'Can I combine office cleaning with carpet cleaning in Bexley?', a: 'Absolutely. We offer carpet steam cleaning and hard floor polishing as add-on services to your regular office cleaning in Bexley. Bundling services can reduce your overall cleaning costs.' }
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
            <h3 className="text-3xl font-bold mb-4">Professional Office Cleaning in Bexley</h3>
            <p className="text-xl mb-6 text-gray-100">
              Contact Pro Clean Corp today for a free, no-obligation office cleaning quote for your Bexley workplace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Free Quote
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
