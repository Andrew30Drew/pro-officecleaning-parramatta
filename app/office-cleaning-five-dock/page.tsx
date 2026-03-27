import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Five Dock | ProCleanCorp',
  description: 'Office cleaning in Five Dock for local businesses, showrooms and professional suites. Competitive rates, no lock-in contracts, fully insured. Get a free quote.',
  keywords: 'office cleaning five dock, office cleaners five dock, commercial cleaning five dock, showroom cleaning five dock, professional office cleaning five dock, inner west office cleaners five dock',
  openGraph: {
    title: 'Office Cleaning Five Dock | ProCleanCorp',
    description: 'Office cleaning in Five Dock for local businesses, showrooms and professional suites. Competitive rates, no lock-in contracts. Free quote.',
    url: 'https://www.procleancorp.com.au/office-cleaning-five-dock',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Office cleaning Five Dock Inner West Sydney' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-five-dock' }
};

const faqs = [
  {
    question: 'Do you service offices along Great North Road in Five Dock?',
    answer: 'Yes. ProCleanCorp services the entire Great North Road commercial strip in Five Dock, including showrooms, professional suites, retail offices and boutique businesses. We are familiar with the Five Dock precinct and can accommodate early morning or afterhours access around your business hours.'
  },
  {
    question: 'Can you provide a cleaning schedule certificate for our Five Dock lease renewal?',
    answer: 'Yes. ProCleanCorp provides formal cleaning schedule documentation and compliance certificates for commercial lease renewals in Five Dock. We maintain visit logs and can provide written confirmation of cleaning frequency, scope and products used — satisfying most building manager and landlord requirements.'
  },
  {
    question: 'Do you clean showrooms as well as offices in Five Dock?',
    answer: 'Yes. ProCleanCorp cleans both offices and showrooms in Five Dock. Showroom cleaning requires additional attention to display surfaces, glass, product areas and customer-facing zones — we adapt our cleaning program to the specific requirements of showroom environments, maintaining the presentation standard your customers expect.'
  }
];

export default function OfficeCleaningFiveDockPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Five Dock"
        serviceDescription="Reliable office cleaning in Five Dock and surrounds, serving the growing Inner West commercial precinct with transparent hourly rates and no lock-in contracts."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-five-dock"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Showroom Cleaning', 'Weekly Office Cleaning', 'After Hours Cleaning', 'One-Off Deep Clean', 'Lease Compliance Documentation']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Five Dock & Inner West Office Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Office Cleaning Five Dock — Commercial Cleaners Inner West
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers reliable office cleaning in Five Dock and surrounds — serving the Inner West commercial precinct with transparent hourly rates, no lock-in contracts and showroom-capable teams.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Showrooms & Offices &nbsp;|&nbsp; ✓ No Lock-In &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/office.webp" alt="Office cleaning Five Dock Inner West Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp delivers reliable office cleaning in Five Dock and surrounds</strong>, serving the growing Inner West commercial precinct with transparent hourly rates and no lock-in contracts. Five Dock's Great North Road commercial strip has seen a resurgence of boutique offices and showrooms — we serve both.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Office Cleaning Services in Five Dock</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Five Dock's Great North Road commercial strip has seen a resurgence of boutique offices, showrooms and professional services. These businesses require a cleaner who understands both the standard office cleaning requirements and the presentation-focused demands of showroom and customer-facing retail environments.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp serves Five Dock's diverse commercial precinct with tailored programs — from weekly office maintenance cleans to daily showroom preparation. We also provide lease compliance documentation for commercial tenants renewing their Five Dock office leases.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Five Dock Office & Showroom Cleaning</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Office desk & surface cleaning', 'Showroom display area cleaning', 'Kitchen & breakroom cleaning', 'Bathroom sanitisation', 'Floor vacuuming & mopping', 'Internal glass & mirror cleaning', 'High-touch disinfection', 'Bin removal & recycling', 'After hours access', 'Lease compliance documentation', 'Weekly & fortnightly programs', 'One-off deep cleans'].map((item, i) => (
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
                <h4 className="font-bold text-darkblue mb-3">Nearby Areas</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Five Dock', 'Drummoyne', 'Concord', 'Abbotsford', 'Chiswick', 'Russell Lea', 'Rodd Point', 'Wareemba'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site assessment for Five Dock offices and showrooms.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Office Cleaning Five Dock</h3>
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
                { label: 'Commercial Cleaning Five Dock', href: '/commercial-cleaning-five-dock' },
                { label: 'Showroom Cleaning Sydney', href: '/showroom-cleaning-sydney' },
                { label: 'Office Cleaning Drummoyne', href: '/office-cleaning-drummoyne' },
                { label: 'Office Cleaning Inner West', href: '/office-cleaning-inner-west' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Office & Showroom Cleaning — Five Dock</h3>
            <p className="text-xl mb-4 text-gray-100">Reliable, transparent pricing. No lock-in contracts. Free quote today.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
