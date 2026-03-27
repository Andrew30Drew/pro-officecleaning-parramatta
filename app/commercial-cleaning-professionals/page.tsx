import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Professionals Sydney | Expert Business Cleaners NSW | Pro Clean Corp',
  description: 'Experienced commercial cleaning professionals serving businesses across Sydney NSW. Trained, insured & background-checked teams for offices, retail & industry. Call 1300 494 983.',
  keywords: [
    'commercial cleaning professionals',
    'professional commercial cleaners Sydney',
    'commercial cleaning experts NSW',
    'business cleaning professionals Sydney',
    'trained commercial cleaners NSW',
    'commercial cleaning specialists Sydney',
    'Pro Clean Corp professionals'
  ],
  openGraph: {
    title: 'Commercial Cleaning Professionals Sydney | Pro Clean Corp',
    description: 'Experienced commercial cleaning professionals for offices, retail, industrial and healthcare premises across Sydney NSW.',
    url: '/commercial-cleaning-professionals',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Cleaning Professionals Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Professionals Sydney | Pro Clean Corp',
    description: 'Trained, insured commercial cleaning professionals delivering outstanding results for Sydney businesses.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-cleaning-professionals' }
};

const credentials = [
  { label: 'Police Checked', icon: '🛡️', desc: 'All team members undergo national police checks before commencing work.' },
  { label: 'Fully Insured', icon: '📋', desc: 'Public liability and workers\' compensation coverage on every job.' },
  { label: 'Industry Certified', desc: 'Teams are trained to BSCAA standards and Australian commercial cleaning guidelines.', icon: '🏆' },
  { label: 'Uniformed Teams', icon: '👕', desc: 'Identifiable, professional presentation on every site visit.' },
  { label: 'Equipment Supplied', icon: '🧹', desc: 'We bring all commercial-grade equipment and cleaning products.' },
  { label: 'Ongoing Training', icon: '📚', desc: 'Regular refresher training on new products, techniques, and safety protocols.' },
];

export default function CommercialCleaningProfessionalsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaning Professionals Sydney"
        serviceDescription="Experienced commercial cleaning professionals serving businesses across Sydney NSW — trained, insured and background-checked teams for offices, retail, and industry."
        serviceUrl="/commercial-cleaning-professionals"
        serviceType="Commercial Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Office Cleaning',
          'Retail Cleaning',
          'Industrial Cleaning',
          'Medical Facility Cleaning',
          'Strata Cleaning',
          'Post-Construction Cleaning'
        ]}
        faqs={[
          {
            question: 'What qualifications do your commercial cleaning professionals have?',
            answer: 'Our commercial cleaning professionals are trained to BSCAA industry standards, are police checked, fully insured, and receive ongoing training in cleaning techniques, chemical handling, and workplace safety. All staff are employed directly — not subcontracted.'
          },
          {
            question: 'Do your cleaners bring their own equipment and products?',
            answer: 'Yes. Our commercial cleaning professionals arrive fully equipped with industrial-grade machinery and commercial cleaning products. You never need to supply anything — we bring everything required for an outstanding result.'
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
                Trained, Verified & Insured
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Cleaning Professionals
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp&apos;s commercial cleaning professionals bring industry expertise, cutting-edge equipment, and a proven track record to every Sydney business we serve. Police-checked, fully insured, and dedicated to exceptional results.
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
                <span>✓ Police Checked Staff</span>
                <span>✓ BSCAA Trained</span>
                <span>✓ No Lock-In Contracts</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial cleaning professionals Sydney NSW"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">4.8★</div>
                <div className="text-xs text-gray-500">Average Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Commercial cleaning professionals</strong> are the difference between a business that looks clean and one that genuinely is clean. Pro Clean Corp employs experienced, trained specialists who understand the hygiene standards, compliance requirements, and presentation expectations of commercial environments across Sydney.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Why Our Commercial Cleaning Professionals Stand Apart</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                The commercial cleaning industry has a reputation for high staff turnover and inconsistent service quality. Pro Clean Corp breaks that mould. We directly employ all our cleaning professionals, invest in ongoing training, and implement quality audit systems that keep our performance standards measurably high.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Every one of our commercial cleaning professionals undergoes a national police check and completes structured onboarding before stepping foot in a client&apos;s premises. They are trained in the correct use of commercial cleaning chemicals, safe work practices, and the specific requirements of different industry environments — from medical suites to food production facilities.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Industry-Specific Cleaning Expertise</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Not every commercial space has the same cleaning requirements. A gym needs antimicrobial products safe for rubber flooring. A medical clinic needs TGA-listed disinfectants and strict contamination protocols. Our professionals are allocated to industry verticals where their training and experience best match your facility&apos;s needs.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/hero2.jpg"
                alt="Professional commercial cleaners at work Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Our Professional Standards</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Direct employment model</li>
                  <li>✓ Documented cleaning specs</li>
                  <li>✓ Digital sign-in/sign-out</li>
                  <li>✓ Chemical safety compliance</li>
                  <li>✓ Client satisfaction surveys</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Credentials Grid */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Our Credentials & Standards</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {credentials.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-blueprimary mb-2">{item.label}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Pro Clean Corp vs Typical Commercial Cleaners</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blueprimary text-white">
                    <th className="p-4 text-left rounded-tl-lg">Feature</th>
                    <th className="p-4 text-center">Pro Clean Corp</th>
                    <th className="p-4 text-center rounded-tr-lg">Typical Provider</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Police-checked staff', '✅ All staff', '❌ Rarely'],
                    ['Direct employment', '✅ Yes', '❌ Subcontractors'],
                    ['Dedicated account manager', '✅ Included', '❌ Call centre only'],
                    ['Quality audit system', '✅ Digital reporting', '❌ Not standard'],
                    ['Industry-specific training', '✅ Yes', '⚠️ Generic only'],
                    ['Insurance certificates on file', '✅ Always available', '⚠️ On request'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-darkblue">{row[0]}</td>
                      <td className="p-4 text-center font-bold text-greenprimary">{row[1]}</td>
                      <td className="p-4 text-center text-gray-600">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Commercial Cleaning Professionals</h3>
            <div className="space-y-6">
              {[
                { q: 'What qualifications do your commercial cleaning professionals have?', a: 'Our commercial cleaning professionals are trained to BSCAA industry standards, are police checked, fully insured, and receive ongoing training in cleaning techniques, chemical handling, and workplace safety. All staff are directly employed — not subcontracted — ensuring consistent quality and accountability.' },
                { q: 'Do your cleaners bring their own equipment and products?', a: 'Yes. Our professionals arrive fully equipped with industrial-grade machinery and commercial cleaning products including microfibre systems, commercial vacuums, floor scrubbers, and TGA-listed disinfectants. You never need to supply anything.' },
                { q: 'Can I request the same cleaning team each visit?', a: 'Yes. We aim to assign consistent teams to each site wherever possible. Familiarity with your premises means faster, more thorough cleaning and better security outcomes. If your regular team member is unavailable, a trained replacement is always briefed on your site specifications.' },
                { q: 'How do you handle after-hours or key-holder access?', a: 'Our commercial cleaning professionals are fully vetted for unsupervised site access. We maintain secure key management systems, digital sign-in/sign-out logs, and alarm code protocols. All access procedures are documented and agreed upon in your service contract.' }
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
            <h3 className="text-3xl font-bold mb-4">Work With Sydney&apos;s Commercial Cleaning Professionals</h3>
            <p className="text-xl mb-6 text-gray-100">
              Experienced, vetted, and dedicated to your business. Request a free quote from Pro Clean Corp today.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              Call 1300 494 983 — 7 Days a Week
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
