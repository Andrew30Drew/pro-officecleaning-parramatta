import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Earlwood | ProCleanCorp from $35/hr',
  description: 'Professional commercial cleaning in Earlwood from $35/hr. Offices, medical suites and retail along Canterbury Road. Serving Inner West and St George businesses. Free quote in 24hrs.',
  keywords: 'commercial cleaning Earlwood, commercial cleaners Earlwood, office cleaning Earlwood, business cleaning Earlwood, commercial cleaning Canterbury Road',
  openGraph: {
    title: 'Commercial Cleaning Earlwood | ProCleanCorp from $35/hr',
    description: 'Professional commercial cleaning in Earlwood from $35/hr. Offices, medical suites and retail. Free quote in 24hrs.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning-earlwood',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Earlwood Inner West' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-earlwood' }
};

const faqs = [
  {
    question: 'How much does commercial cleaning cost in Earlwood?',
    answer: 'Commercial cleaning in Earlwood starts from $35 per hour for standard offices and retail spaces. Small businesses under 150m² typically pay $150–$260 per weekly clean on a fixed-price basis. ProCleanCorp provides a free on-site quote within 24 hours — fixed pricing with no hourly surprises.'
  },
  {
    question: 'Do you clean medical offices and professional suites along Canterbury Road in Earlwood?',
    answer: 'Yes. Canterbury Road through Earlwood has a concentration of medical practices, allied health suites and professional services offices. ProCleanCorp services these with TGA-registered disinfectants and NHMRC-aligned protocols where required, and standard commercial cleaning for general professional offices.'
  },
  {
    question: 'What commercial areas in Earlwood do you service?',
    answer: 'We service the full Earlwood commercial area including the Canterbury Road strip, Wardell Road businesses, and surrounding commercial tenancies in Earlwood, Dulwich Hill and Marrickville South. If you\'re not sure we cover your address, call 1300 494 983 and we\'ll confirm in minutes.'
  },
  {
    question: 'Can you clean our Earlwood office after hours?',
    answer: 'Yes. Afterhours cleaning from 6pm and early morning starts from 5am are both available in Earlwood. We work around your business hours so staff are never disrupted. All cleaners are police-checked and uniformed for after-hours building access.'
  }
];

export default function CommercialCleaningEarlwoodPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaning Earlwood"
        serviceDescription="Professional commercial cleaning in Earlwood for offices, medical suites and retail tenancies along Canterbury Road. Fully insured, police-checked, afterhours available, no lock-in contracts."
        serviceUrl="https://www.procleancorp.com.au/commercial-cleaning-earlwood"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Medical Suite Cleaning', 'Retail Cleaning', 'Afterhours Cleaning', 'Floor Maintenance', 'High-Touch Disinfection']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Earlwood & Inner South-West Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Commercial Cleaning Earlwood — Professional Business Cleaners from $35/hr
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers professional commercial cleaning across Earlwood's Canterbury Road commercial strip — offices, medical suites and retail tenancies serviced around your business hours with no lock-in contracts.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ From $35/hr &nbsp;|&nbsp; ✓ Afterhours Available &nbsp;|&nbsp; ✓ Free Quote in 24hrs</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Commercial cleaning Earlwood Canterbury Road"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides professional commercial cleaning in Earlwood from $35 per hour</strong>, serving businesses along Canterbury Road and the surrounding Inner South-West precinct. Earlwood is an underserved commercial suburb — we bring the same professional standards available in Marrickville and Newtown directly to local businesses, with afterhours scheduling and fixed pricing as standard.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Commercial Cleaning in Earlwood</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Earlwood sits between the Inner West and St George — close enough to Marrickville and Rockdale to share their commercial density, but often overlooked by cleaning companies that concentrate on larger precincts. ProCleanCorp covers Earlwood as a primary service area, not an afterthought. Our teams service the Canterbury Road medical and professional strip, Wardell Road retail and the residential-adjacent small offices that characterise Earlwood's commercial landscape.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                For medical and allied health offices in Earlwood — a significant part of the Canterbury Road commercial strip — we use TGA-registered disinfectants and NHMRC-aligned cleaning protocols, with written cleaning schedules available for practice accreditation submissions. Standard offices and retail tenancies are serviced with commercial-grade products on your preferred schedule.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Commercial Cleaning Services — Earlwood</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Office cleaning (weekly, fortnightly, daily)',
                    'Medical & allied health suite cleaning',
                    'Retail tenancy cleaning',
                    'Kitchen & breakroom sanitisation',
                    'Bathroom & amenities cleaning',
                    'Floor mopping, vacuuming & scrubbing',
                    'Strip & seal hard floor maintenance',
                    'High-touch surface disinfection',
                    'Internal glass & window cleaning',
                    'Bin management & removal',
                    'Afterhours & early morning starts',
                    'One-off deep cleans',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: 'Canterbury Road Local Knowledge', desc: 'Familiar with the access, parking and after-hours protocols of Earlwood\'s commercial strip.' },
                  { title: 'Medical-Ready Protocols', desc: 'TGA-registered disinfectants available for medical and allied health offices along Canterbury Road.' },
                  { title: 'No Lock-In Contracts', desc: 'Month-to-month, 30 days notice. Most Earlwood clients stay long-term — by choice.' },
                  { title: 'Same Cleaner Each Visit', desc: 'Consistent assigned cleaner for your premises — learns your space and your preferences.' }
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
                <h4 className="font-bold text-darkblue mb-3">Nearby Areas We Cover</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Earlwood', 'Dulwich Hill', 'Marrickville South', 'Bardwell Valley', 'Undercliffe', 'Clemton Park', 'Hurlstone Park', 'Canterbury'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site assessment for any Earlwood commercial property. Fixed pricing.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Commercial Cleaning Earlwood</h3>
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
                { label: 'Office Cleaning Earlwood', href: '/office-cleaning-earlwood' },
                { label: 'Commercial Cleaning Marrickville', href: '/commercial-cleaning-marrickville' },
                { label: 'Commercial Cleaning Inner West', href: '/commercial-cleaning-inner-west' },
                { label: 'Strata Cleaning Earlwood', href: '/strata-cleaning-earlwood' },
                { label: 'Commercial Cleaning Sydney', href: '/commercial-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get Your Free Earlwood Commercial Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">On-site assessment within 24 hours. Fixed pricing, no lock-in contracts.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
