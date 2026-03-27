import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Earlwood | ProCleanCorp',
  description: 'Reliable office cleaning in Earlwood and surrounds. Local cleaners, competitive rates, fully insured. Serving small businesses and medical offices. Free quote.',
  keywords: 'office cleaning earlwood, office cleaners earlwood, commercial cleaning earlwood, professional office cleaning earlwood, small business cleaning earlwood, medical office cleaning earlwood',
  openGraph: {
    title: 'Office Cleaning Earlwood | ProCleanCorp',
    description: 'Reliable office cleaning in Earlwood and surrounds. Local cleaners, competitive rates, fully insured. Free quote.',
    url: 'https://www.procleancorp.com.au/office-cleaning-earlwood',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Office cleaning Earlwood NSW' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-earlwood' }
};

const faqs = [
  {
    question: 'Do you clean offices in Earlwood and nearby suburbs like Dulwich Hill?',
    answer: 'Yes. ProCleanCorp services offices throughout Earlwood and the surrounding Canterbury-Bankstown LGA including Dulwich Hill, Marrickville, Canterbury, Campsie and Kingsgrove. We can include multiple nearby offices on the same cleaning route.'
  },
  {
    question: 'How often should a small Earlwood office be professionally cleaned?',
    answer: 'For a small Earlwood office with under 10 staff, we typically recommend weekly professional cleaning supplemented by daily self-maintenance of high-use areas like the kitchen. Offices with 10-20 staff usually benefit from 2-3 cleans per week. We provide a free consultation to recommend the right frequency for your specific workplace.'
  },
  {
    question: 'Can I book a one-off office clean in Earlwood?',
    answer: 'Yes. ProCleanCorp offers one-off office cleaning in Earlwood for lease inspections, end-of-tenancy, pre-opening cleans and special events. One-off deep cleans are available with 24-48 hours notice in most cases.'
  }
];

export default function OfficeCleaningEarlwoodPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Earlwood"
        serviceDescription="Professional office cleaning in Earlwood with competitive hourly rates, serving local businesses, medical practices and retail offices."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-earlwood"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Weekly Office Cleaning', 'Fortnightly Cleaning', 'Medical Office Cleaning', 'One-Off Deep Clean', 'After Hours Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Earlwood & Inner West Commercial Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Office Cleaning Earlwood — Professional Commercial Cleaners
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp offers professional office cleaning in Earlwood with competitive hourly rates, serving local businesses, medical practices and retail offices along Canterbury Road.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ From $35/hr &nbsp;|&nbsp; ✓ One-Off Available &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/office.webp" alt="Office cleaning Earlwood NSW"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp offers professional office cleaning in Earlwood with competitive hourly rates</strong>, serving local businesses, medical practices and retail offices. As an underserved Inner West suburb, Earlwood businesses get dedicated local service without the premium pricing of inner-city competitors.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Office Cleaning Services in Earlwood</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Earlwood is an underserved Inner West suburb for commercial cleaning — which means local businesses are often stuck with city-priced contractors who don't know the area. ProCleanCorp targets the small medical and professional services offices lining Canterbury Road, with emphasis on thoroughness and genuine local presence.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We serve Earlwood's boutique accountants, medical practitioners, physiotherapists and small corporate offices with reliable, same-cleaner-every-visit service. You deal with real people — not a call centre — and get consistent quality on every visit.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Office Cleaning Inclusions — Earlwood</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Vacuuming all floor areas', 'Hard floor mopping', 'Desk & surface sanitisation', 'Kitchen & breakroom cleaning', 'Bathroom maintenance', 'Bin emptying & liner replacement', 'Internal glass cleaning', 'High-touch point disinfection', 'After hours available', 'One-off deep cleans', 'Weekly & fortnightly programs', 'Consumables replenishment'].map((item, i) => (
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
                  {['Dulwich Hill', 'Marrickville', 'Canterbury', 'Campsie', 'Kingsgrove', 'Hurlstone Park', 'Undercliffe', 'Bexley'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site assessment. Competitive rates for Earlwood businesses.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Office Cleaning Earlwood</h3>
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
                { label: 'Commercial Cleaning Earlwood', href: '/commercial-cleaning-earlwood' },
                { label: 'Office Cleaning Marrickville', href: '/office-cleaning-marrickville' },
                { label: 'Strata Cleaning Earlwood', href: '/strata-cleaning-earlwood' },
                { label: 'Office Cleaning Inner West', href: '/office-cleaning-inner-west' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Professional Office Cleaning — Earlwood</h3>
            <p className="text-xl mb-4 text-gray-100">Local cleaners. Competitive rates. Free quote in 24 hours.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
