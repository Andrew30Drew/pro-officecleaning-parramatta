import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning North Sydney | ProCleanCorp',
  description: 'Office cleaning across North Sydney\'s commercial towers and boutique offices. Trusted by 50+ businesses. Fully insured, HACCP compliant. Get a free quote.',
  keywords: 'office cleaning north sydney, office cleaners north sydney, commercial cleaning north sydney, north sydney office cleaning company, professional office cleaning north sydney, after hours office cleaning north sydney, corporate cleaning north sydney',
  openGraph: {
    title: 'Office Cleaning North Sydney | ProCleanCorp',
    description: 'Office cleaning across North Sydney\'s commercial towers and boutique offices. Trusted by 50+ businesses. Fully insured. Get a free quote.',
    url: 'https://www.procleancorp.com.au/office-cleaning-north-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Office cleaning North Sydney commercial towers' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-north-sydney' }
};

const faqs = [
  {
    question: 'Do you clean high-rise offices in North Sydney CBD?',
    answer: 'Yes. ProCleanCorp services commercial towers throughout North Sydney CBD, including buildings along Miller Street, Blue Street and Berry Street. Our staff hold current police checks and can obtain building security clearances required by North Sydney building managers. We work afterhours to avoid disrupting your business operations.'
  },
  {
    question: 'Can your cleaners work outside business hours in North Sydney?',
    answer: 'Absolutely. We specialise in afterhours office cleaning across North Sydney, typically starting from 6pm. Early morning starts from 5am are also available. Weekend and public holiday scheduling is available on request.'
  },
  {
    question: 'What is included in a standard office clean in North Sydney?',
    answer: 'A standard North Sydney office clean includes vacuuming all floor surfaces, mopping hard floors, sanitising all high-touch contact points (desks, phones, keyboards, door handles), cleaning kitchens and bathrooms, emptying bins, and cleaning internal glass. Periodic tasks like strip-and-seal floors, window cleaning and carpet steam cleaning can be added as scheduled extras.'
  }
];

export default function OfficeCleaningNorthSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning North Sydney"
        serviceDescription="Professional office cleaning services across North Sydney's commercial towers, boutique offices and co-working spaces. HACCP compliant, fully insured, afterhours available."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-north-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Nightly Office Cleaning', 'Day Porter Service', 'Strip and Seal Floors', 'After Hours Office Cleaning', 'Commercial Tower Cleaning', 'Security-Cleared Staff']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">North Sydney Commercial Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Office Cleaning North Sydney — CBD-Grade Service, Local Rates
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers nightly office cleaning across North Sydney's commercial towers and boutique offices — Miller Street to Blue Street. Security-cleared staff, no lock-in contracts.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ From $35/hr &nbsp;|&nbsp; ✓ Afterhours Available &nbsp;|&nbsp; ✓ Free Quote in 24hrs</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/office.webp" alt="Office cleaning North Sydney commercial towers"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF Answer Box */}
      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp delivers office cleaning services across North Sydney from Miller Street to Blue Street precinct</strong>, with nightly cleans, day porter services and periodic deep-clean packages for commercial towers, boutique offices and co-working spaces throughout the North Sydney CBD.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Office Cleaning in North Sydney</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                North Sydney is the second largest CBD in NSW — home to major financial services, technology firms and professional services companies that demand commercial-grade office cleaning. ProCleanCorp provides tailored cleaning for North Sydney's entire commercial precinct, from high-rise towers to boutique offices in Kirribilli and Neutral Bay.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our teams are available for nightly cleans, early morning pre-opening service, day porter maintenance and periodic deep cleans. All staff hold current police checks and are available for building security registration — a critical requirement for tower buildings managed by North Sydney building managers.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">North Sydney Office Cleaning Inclusions</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Nightly commercial tower cleaning', 'Day porter / ongoing maintenance', 'Kitchen & breakroom sanitisation', 'Bathroom & amenities cleaning', 'Floor scrubbing, mop & vacuum', 'Strip-and-seal floor maintenance', 'Boardroom & meeting room prep', 'Reception & lobby detailing', 'High-touch point disinfection', 'Bin removal & recycling', 'Internal glass & mirror cleaning', 'Afterhours & weekend cleaning'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: 'Security-Cleared Staff', desc: 'Police-checked cleaners available for security registration in North Sydney tower buildings.' },
                  { title: 'No Lock-In Contracts', desc: 'Month-to-month agreements — switch or cancel with 30 days notice.' },
                  { title: 'HACCP Compliant', desc: 'Cleaning protocols aligned with HACCP and AS/NZS infection control standards.' },
                  { title: 'Dedicated Account Manager', desc: 'One point of contact for your account — no call centres, direct communication.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-greenprimary pl-4">
                    <h4 className="font-semibold text-darkblue mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Service Areas</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['North Sydney CBD', 'Miller Street precinct', 'Blue & Berry Street', 'Crows Nest', 'Neutral Bay', 'Kirribilli', 'St Leonards', 'McMahons Point'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site assessment for North Sydney offices. Fixed pricing, no surprises.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Office Cleaning North Sydney</h3>
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
                { label: 'Office Cleaning Chatswood', href: '/office-cleaning-chatswood' },
                { label: 'Office Cleaning Neutral Bay', href: '/office-cleaning-neutral-bay' },
                { label: 'Commercial Cleaning North Sydney', href: '/commercial-cleaning-north-sydney' },
                { label: 'Strata Cleaning North Sydney', href: '/strata-cleaning-north-sydney' },
                { label: 'Office Cleaning Sydney', href: '/office-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get Your Free North Sydney Office Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">On-site assessment within 24 hours. Fixed pricing, no lock-in contracts.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
