import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Arncliffe | ProCleanCorp from $35/hr',
  description: 'Professional commercial cleaning in Arncliffe from $35/hr. Offices, retail, strata and medical suites along the Princes Highway precinct. Fully insured, no lock-in contracts. Free quote in 24hrs.',
  keywords: 'commercial cleaning Arncliffe, commercial cleaners Arncliffe, office cleaning Arncliffe, business cleaning Arncliffe, strata cleaning Arncliffe, commercial cleaning St George',
  openGraph: {
    title: 'Commercial Cleaning Arncliffe | ProCleanCorp from $35/hr',
    description: 'Professional commercial cleaning in Arncliffe from $35/hr. Offices, retail and strata. Fully insured. Free quote in 24hrs.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning-arncliffe',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Arncliffe St George' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-arncliffe' }
};

const faqs = [
  {
    question: 'How much does commercial cleaning cost in Arncliffe?',
    answer: 'Commercial cleaning in Arncliffe starts from $35 per hour for standard offices and retail tenancies. Small professional offices (under 150m²) typically cost $150–$280 per weekly clean on a fixed-price basis. Strata common areas start from $80 per visit. ProCleanCorp provides a fixed-price quote after a free on-site assessment — no hourly surprises.'
  },
  {
    question: 'Do you clean offices along the Princes Highway commercial strip in Arncliffe?',
    answer: 'Yes. The Princes Highway commercial precinct in Arncliffe is one of our core St George service areas. We clean professional services offices, medical suites, retail tenancies and mixed-use commercial buildings throughout Arncliffe and the surrounding Rockdale LGA.'
  },
  {
    question: 'Can you provide afterhours commercial cleaning in Arncliffe?',
    answer: 'Absolutely. ProCleanCorp offers afterhours commercial cleaning in Arncliffe — typically starting from 6pm — so your business is never disrupted during trading. Early morning starts from 5am are also available. We schedule around your business hours, not ours.'
  },
  {
    question: 'Do you clean strata buildings and common areas in Arncliffe?',
    answer: 'Yes. Arncliffe has a significant stock of residential and mixed-use strata buildings. ProCleanCorp provides strata common area cleaning for Arncliffe complexes — lobbies, lifts, stairwells, bin rooms and car parks — with written service reports for strata managers and OC committees.'
  }
];

export default function CommercialCleaningArncliffePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaning Arncliffe"
        serviceDescription="Professional commercial cleaning in Arncliffe for offices, retail tenancies, strata buildings and medical suites along the Princes Highway precinct. Fully insured, police-checked, no lock-in contracts."
        serviceUrl="https://www.procleancorp.com.au/commercial-cleaning-arncliffe"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Retail Cleaning', 'Strata Cleaning', 'Medical Suite Cleaning', 'Afterhours Cleaning', 'Strip & Seal Floors']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Arncliffe & St George Commercial Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Commercial Cleaning Arncliffe — Professional Business Cleaners from $35/hr
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers professional commercial cleaning across Arncliffe's Princes Highway precinct — offices, retail, strata and medical suites. Afterhours scheduling, fully insured, no lock-in contracts.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ From $35/hr &nbsp;|&nbsp; ✓ Afterhours Available &nbsp;|&nbsp; ✓ Free Quote in 24hrs</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Commercial cleaning Arncliffe St George"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides professional commercial cleaning in Arncliffe from $35 per hour</strong>, serving businesses along the Princes Highway commercial strip and the broader Rockdale LGA. We cover offices, retail tenancies, strata common areas and medical suites — with afterhours scheduling and written service reports included as standard.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Commercial Cleaning in Arncliffe</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Arncliffe's commercial precinct runs along the Princes Highway corridor — a mix of professional services offices, medical and allied health suites, retail tenancies and mixed-use strata buildings that has grown steadily with the St George area's residential expansion. ProCleanCorp has been servicing this precinct for years, and our teams understand the access requirements, strata building protocols and business rhythms of Arncliffe's commercial community.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We schedule all commercial cleans around your trading hours — afterhours from 6pm and early morning from 5am are both available. All staff are police-checked and uniformed, and we carry $20M public liability insurance with certificates available for your property manager or strata committee on request.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Commercial Cleaning Services — Arncliffe</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Office cleaning (daily, weekly, fortnightly)',
                    'Retail tenancy cleaning',
                    'Medical & allied health suite cleaning',
                    'Strata common area cleaning',
                    'Kitchen & breakroom sanitisation',
                    'Bathroom & amenities cleaning',
                    'Floor scrubbing, mopping & vacuuming',
                    'Strip & seal floor maintenance',
                    'High-touch surface disinfection',
                    'Internal glass & window cleaning',
                    'Bin management & removal',
                    'Afterhours & weekend scheduling',
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
                  { title: 'Princes Highway Precinct', desc: 'Local knowledge of Arncliffe\'s commercial strip — building access, parking restrictions and after-hours protocols.' },
                  { title: 'No Lock-In Contracts', desc: 'Month-to-month agreements with 30 days notice. We earn your business every visit.' },
                  { title: '$20M Public Liability', desc: 'Certificate available on request for your property manager or strata committee file.' },
                  { title: 'Police-Checked Staff', desc: 'All staff hold current police clearances — required for after-hours building access in Arncliffe.' }
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
                  {['Arncliffe', 'Rockdale', 'Banksia', 'Bardwell Park', 'Bardwell Valley', 'Wolli Creek', 'Turrella', 'Sydenham'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site assessment for any Arncliffe commercial property. Fixed pricing, no surprises.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Commercial Cleaning Arncliffe</h3>
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
                { label: 'Office Cleaning Arncliffe', href: '/office-cleaning-arncliffe' },
                { label: 'Strata Cleaning Arncliffe', href: '/strata-cleaning-arncliffe' },
                { label: 'Commercial Cleaning Rockdale', href: '/commercial-cleaning-rockdale' },
                { label: 'Commercial Cleaning Sydney', href: '/commercial-cleaning-sydney' },
                { label: 'Commercial Cleaning St George', href: '/commercial-cleaning-kogarah' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get Your Free Arncliffe Commercial Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">On-site assessment within 24 hours. Fixed pricing, no lock-in contracts.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
