import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Hurstville | Commercial Office Cleaners St George Sydney | Pro Clean Corp',
  description: 'Professional office cleaning in Hurstville, St George area Sydney. Expert commercial cleaners for offices, medical suites, and retail spaces in Hurstville CBD and surrounds. Call 1300 494 983.',
  keywords: [
    'office cleaning Hurstville',
    'commercial cleaners Hurstville',
    'office cleaners St George Sydney',
    'Hurstville office cleaning services',
    'commercial cleaning Hurstville NSW',
    'office cleaning St George area',
    'business cleaning Hurstville',
    'professional office cleaners Hurstville',
    'Pro Clean Corp Hurstville'
  ],
  openGraph: {
    title: 'Office Cleaning Hurstville | Pro Clean Corp',
    description: 'Professional office cleaning in Hurstville, St George area. Expert commercial cleaners for offices and businesses in Hurstville Sydney.',
    url: '/office-cleaning-hurstville',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Office Cleaning Hurstville St George Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaning Hurstville | Pro Clean Corp',
    description: 'Professional office cleaning services in Hurstville, St George Sydney. Call 1300 494 983.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/office-cleaning-hurstville' }
};

const nearbyAreas = [
  { name: 'Mortdale', slug: 'office-cleaning-mortdale' },
  { name: 'Bexley', slug: 'office-cleaning-bexley' },
  { name: 'Oatley', slug: 'office-cleaning-oatley' },
  { name: 'Kogarah', slug: 'office-cleaning-kogarah' },
  { name: 'Rockdale', slug: 'office-cleaning-rockdale' },
  { name: 'Penshurst', slug: 'office-cleaning-penshurst' },
  { name: 'Allawah', slug: 'office-cleaning-allawah' },
  { name: 'Arncliffe', slug: 'office-cleaning-arncliffe' },
];

const processSteps = [
  { step: '01', title: 'Free Site Assessment', desc: 'We visit your Hurstville office to understand your exact cleaning requirements and workspace layout.' },
  { step: '02', title: 'Tailored Cleaning Plan', desc: 'We design a cleaning schedule and checklist specific to your business hours and priorities.' },
  { step: '03', title: 'Dedicated Cleaning Team', desc: 'Your assigned team learns your office inside and out, delivering consistent results every visit.' },
  { step: '04', title: 'Quality Assurance Checks', desc: 'Regular inspections and client feedback loops ensure we always meet your standard.' },
];

export default function OfficeCleaningHurstvillePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Hurstville"
        serviceDescription="Professional office cleaning services in Hurstville, St George area Sydney. Expert commercial cleaners for offices, medical suites, and retail spaces in the Hurstville CBD and surrounding suburbs."
        serviceUrl="/office-cleaning-hurstville"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={[
          'Daily & Weekly Office Cleaning',
          'Medical Suite Cleaning',
          'Carpet Cleaning & Maintenance',
          'Bathroom & Kitchen Sanitisation',
          'High-Rise Office Cleaning',
          'End-of-Lease Office Cleaning'
        ]}
        faqs={[
          {
            question: 'Do you offer office cleaning in Hurstville?',
            answer: 'Yes. Pro Clean Corp provides professional office cleaning throughout Hurstville and the broader St George area, servicing offices, medical practices, retail spaces, and commercial buildings.'
          },
          {
            question: 'What office buildings do you clean in Hurstville?',
            answer: 'We clean all types of commercial offices in Hurstville including high-rise towers in the Hurstville CBD, ground-floor retail offices, medical and specialist suites, and co-working spaces.'
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
                St George Area Sydney
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Cleaning Hurstville
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp delivers expert office cleaning across Hurstville&apos;s growing commercial precinct. From high-rise offices in the Hurstville CBD to medical suites and retail backrooms — trusted cleaning services tailored to St George area businesses.
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
                <span>✓ Hurstville CBD Specialists</span>
                <span>✓ Medical Grade Available</span>
                <span>✓ Fully Insured</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Office cleaning Hurstville St George Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">16 km</div>
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
            <strong>Office cleaning in Hurstville</strong> is available from Pro Clean Corp — commercial cleaning specialists serving the St George LGA. Hurstville is one of Sydney&apos;s key southern CBDs, located approximately 16 km from the city centre, and home to a fast-growing commercial district with offices, medical centres, and retail complexes that demand professional, reliable cleaning services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Commercial Office Cleaners — Hurstville & St George Area</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Hurstville has transformed into one of Sydney&apos;s most active commercial hubs south of the CBD. The Hurstville CBD features mid-rise office towers, bustling retail floors, busy medical precincts, and growing co-working facilities — all of which require professional, consistent cleaning to maintain professional standards.
              </p>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Pro Clean Corp&apos;s Hurstville office cleaning team works flexibly around your business schedule — arriving before staff, working after hours, or scheduling weekend visits to ensure zero disruption to your operations. We clean everything from boardrooms and open-plan workspaces to server rooms, print rooms, and shared amenities.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Trusted by Hurstville&apos;s Business Community</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We service a wide range of Hurstville businesses including financial services firms, law offices, real estate agencies, healthcare providers, and education providers. Our cleaning professionals are trained, police-checked where required, and consistent — you&apos;ll have the same reliable team at your office each visit.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/hero2.jpg"
                alt="Professional office cleaning team in Hurstville"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Hurstville Service Details</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ LGA: Georges River Council</li>
                  <li>✓ Distance from CBD: ~16 km</li>
                  <li>✓ Train line: T4 Eastern Suburbs</li>
                  <li>✓ Available 7 days a week</li>
                  <li>✓ Medical-grade options</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-8 text-center">How Our Hurstville Office Cleaning Works</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                  <div className="text-4xl font-black text-greenprimary mb-3">{step.step}</div>
                  <h4 className="font-bold text-darkblue mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Full Office Cleaning Services in Hurstville</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                'Open-plan office cleaning',
                'Private office & boardroom cleaning',
                'Kitchen & lunch room sanitisation',
                'Bathroom & amenities cleaning',
                'Reception & lobby cleaning',
                'Carpet vacuuming & spot treatment',
                'Hard floor mopping & polishing',
                'Window & glass surface cleaning',
                'Bin collection & liner replacement',
                'High-touch disinfection',
                'Stairwell & common area cleaning',
                'End-of-lease deep clean'
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
            <h3 className="text-2xl font-bold text-darkblue mb-3 text-center">Nearby Suburbs We Also Service</h3>
            <p className="text-center text-gray-600 mb-6">Beyond Hurstville, we provide office cleaning throughout the entire St George and Bayside area.</p>
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
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Office Cleaning Hurstville</h3>
            <div className="space-y-5">
              {[
                { q: 'Do you provide office cleaning in Hurstville?', a: 'Yes. Pro Clean Corp provides professional office and commercial cleaning services throughout Hurstville, including the Hurstville CBD, surrounding streets, and the broader Georges River Council area.' },
                { q: 'Can you clean our Hurstville office after hours?', a: 'Absolutely. We offer early morning, evening, and weekend cleaning across Hurstville to ensure your office is immaculate before the working day starts without any disruption to your staff or clients.' },
                { q: 'Do you clean medical offices in Hurstville?', a: 'Yes. Pro Clean Corp provides medical-grade office and clinic cleaning in Hurstville using TGA-approved disinfectants and infection-control protocols suitable for GP clinics, specialist suites, and allied health practices.' },
                { q: 'How often should we have our Hurstville office cleaned?', a: 'Most offices in Hurstville benefit from daily or 3-times-weekly cleaning. The right frequency depends on your staff headcount, foot traffic, and the nature of your business. We can advise based on a free site assessment.' }
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
            <h3 className="text-3xl font-bold mb-4">Get a Free Office Cleaning Quote in Hurstville</h3>
            <p className="text-xl mb-6 text-gray-100">
              Trusted office cleaning for Hurstville businesses — consistent, reliable, and competitively priced.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Request a Free Quote
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
