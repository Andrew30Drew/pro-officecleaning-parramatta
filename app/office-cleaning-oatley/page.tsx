import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Oatley | ProCleanCorp South Sydney',
  description: 'Professional office cleaning in Oatley and the St George area. Flexible weekly and fortnightly schedules for local businesses. Fully insured. Free quote.',
  keywords: 'office cleaning oatley, office cleaners oatley, commercial cleaning oatley, professional office cleaning oatley, st george office cleaning, south sydney office cleaners',
  openGraph: {
    title: 'Office Cleaning Oatley | ProCleanCorp South Sydney',
    description: 'Professional office cleaning in Oatley and the St George area. Flexible schedules for local businesses. Fully insured. Free quote.',
    url: 'https://www.procleancorp.com.au/office-cleaning-oatley',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Office cleaning Oatley South Sydney' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-oatley' }
};

const faqs = [
  {
    question: 'Do you service offices in Oatley and Como area?',
    answer: 'Yes. ProCleanCorp services offices throughout the St George area including Oatley, Como, Hurstville, Kogarah, Blakehurst and Penshurst. We can cover multiple South Sydney offices on the same route.'
  },
  {
    question: 'What is included in a standard weekly office clean?',
    answer: 'A standard weekly office clean includes vacuuming all carpeted areas, mopping hard floors, sanitising desks and high-touch surfaces (phones, keyboards, door handles), cleaning the kitchen and bathroom, emptying all bins and cleaning internal glass. We provide all equipment and eco-friendly cleaning products — you just need to let us in.'
  },
  {
    question: 'Can I combine office and strata cleaning for my Oatley building?',
    answer: 'Yes. ProCleanCorp offers combined office and strata cleaning packages for buildings in Oatley where a single business occupies part of a strata building. We can clean the common areas (lobby, lifts, stairwells) and your private office space under a single contract, which simplifies scheduling and can reduce overall costs.'
  }
];

export default function OfficeCleaningOatleyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Oatley"
        serviceDescription="Professional office cleaning in Oatley with local knowledge of the St George precinct, serving professional services, medical suites and retail offices."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-oatley"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Weekly Office Cleaning', 'Fortnightly Cleaning', 'Strata Cleaning', 'Medical Office Cleaning', 'After Hours Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Oatley & St George Office Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Office Cleaning Oatley — South Sydney Commercial Cleaners
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers professional office cleaning in Oatley with local knowledge of the St George precinct. Same cleaner every visit, direct communication, no call centre.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ From $35/hr &nbsp;|&nbsp; ✓ Same Cleaner Every Visit &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/office.webp" alt="Office cleaning Oatley South Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp delivers professional office cleaning in Oatley with local knowledge of the St George precinct</strong>, serving professional services, medical suites and retail offices with flexible weekly, fortnightly and daily scheduling options.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Office Cleaning Services in Oatley</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Oatley is a growing commercial strip with many boutique professional services — accountants, solicitors, medical practices and specialist consultants. These businesses need a cleaner who shows up reliably, communicates directly and delivers consistent quality without the overhead of a large contract-cleaning company.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp positions against generic cleaners with a "local, owner-operated feel" — the same cleaner visits every time, you deal directly with management (not a call centre), and pricing is transparent with no hidden fees. We serve Oatley, Como, Hurstville and the broader St George precinct from our South Sydney base.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Oatley Office Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Desk & surface sanitisation', 'Kitchen & breakroom cleaning', 'Bathroom & amenities', 'Vacuuming & hard floor mop', 'Bin emptying & liners', 'Internal glass cleaning', 'High-touch disinfection', 'After hours access', 'Weekly & fortnightly programs', 'One-off deep cleans', 'Strata common area cleaning', 'Consumables restocking'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">St George Service Areas</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Oatley', 'Como', 'Hurstville', 'Kogarah', 'Blakehurst', 'Penshurst', 'Mortdale', 'Peakhurst'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site assessment for Oatley offices.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Office Cleaning Oatley</h3>
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
                { label: 'Commercial Cleaning Oatley', href: '/commercial-cleaning-oatley' },
                { label: 'Office Cleaning Kogarah', href: '/office-cleaning-kogarah' },
                { label: 'Office Cleaning Caringbah', href: '/office-cleaning-caringbah' },
                { label: 'Strata Cleaning Sydney', href: '/strata-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Office Cleaning Oatley — Free Quote Today</h3>
            <p className="text-xl mb-4 text-gray-100">Same cleaner every visit. Direct communication. No lock-in contracts.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
