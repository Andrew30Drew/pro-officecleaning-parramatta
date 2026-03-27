import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaning Liverpool | ProCleanCorp Western Sydney',
  description: 'Professional gym and fitness centre cleaning in Liverpool. TGA-approved disinfectants, early morning starts, locker room specialists. Fully insured. Free quote.',
  keywords: 'gym cleaning liverpool, fitness centre cleaning liverpool, gym cleaners liverpool, sports centre cleaning liverpool, gym disinfection liverpool, western sydney gym cleaning',
  openGraph: {
    title: 'Gym Cleaning Liverpool | ProCleanCorp Western Sydney',
    description: 'Professional gym and fitness centre cleaning in Liverpool. TGA-approved disinfectants, early morning starts. Free quote.',
    url: 'https://www.procleancorp.com.au/gym-cleaning-liverpool',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Gym cleaning Liverpool fitness centre Western Sydney' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-liverpool' }
};

const faqs = [
  {
    question: 'Do you clean council-run sports centres in Liverpool?',
    answer: 'Yes. ProCleanCorp provides cleaning services for both private gyms and council-run sports and leisure centres in Liverpool. Council-run facilities often have additional compliance and documentation requirements — we provide cleaning schedules, visit logs and compliance reports suitable for council procurement processes.'
  },
  {
    question: 'Can you provide a gym cleaning schedule that works around our peak hours?',
    answer: 'Absolutely. Liverpool gyms typically have peak hours from 6-8am and 5-7pm. ProCleanCorp schedules deep cleans during the lowest-traffic window (usually 1am-5am) and can provide a day porter service for ongoing maintenance checks during peak times. We design the schedule around your specific member traffic patterns.'
  },
  {
    question: 'What is included in a weekly fitness centre clean in Liverpool?',
    answer: 'A weekly Liverpool fitness centre clean includes full equipment wipe-down and disinfection, locker room and shower deep clean, rubber floor scrubbing, studio floor cleaning, reception and café area cleaning, mirror and glass cleaning, bin removal and HVAC vent dusting. Daily cleaning adds high-frequency touch-point disinfection and locker room spot checks between deep cleans.'
  }
];

export default function GymCleaningLiverpoolPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Liverpool"
        serviceDescription="Professional gym cleaning services in Liverpool for fitness centres, indoor sports complexes and personal training studios, with TGA-approved disinfectants and flexible scheduling."
        serviceUrl="https://www.procleancorp.com.au/gym-cleaning-liverpool"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Equipment Disinfection', 'Locker Room Cleaning', 'Council Sports Centre Cleaning', 'Early Morning Cleaning', 'Day Porter Service']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Liverpool & South-West Sydney Gym Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Gym Cleaning Liverpool — Fitness & Sports Centre Cleaners
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides gym cleaning services in Liverpool for private fitness centres, indoor sports complexes and personal training studios — TGA-approved disinfectants, peak-hour compatible scheduling.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ From $45/hr &nbsp;|&nbsp; ✓ Council Centres Welcomed &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/gym.webp" alt="Gym cleaning Liverpool Western Sydney fitness centre"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides gym cleaning services in Liverpool for fitness centres, indoor sports complexes and personal training studios</strong>, with TGA-approved disinfectants and flexible scheduling. Liverpool's multicultural community drives high-traffic gym environments where cleanliness directly impacts member satisfaction and compliance.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Gym Cleaning in Liverpool</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Liverpool has a high density of council-run sports centres and private gyms serving one of Sydney's most diverse communities. High-traffic peak hours, multicultural staff management and the growing competition between Liverpool fitness centres all drive demand for reliable, professional gym cleaning.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp designs Liverpool gym cleaning programs around your specific member traffic patterns — deep cleans during the overnight window, day porter maintenance during peak times, and quick-turnaround cleans between group fitness sessions. We also provide compliance documentation suitable for council procurement processes.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Liverpool Gym Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Equipment wipe-down & disinfection', 'Locker room & shower deep clean', 'Rubber floor scrubbing', 'Group fitness studio cleaning', 'Indoor sports court cleaning', 'Reception & café area', 'TGA-approved disinfectants', 'Day porter service', 'Early morning scheduling', 'Compliance documentation', 'Weekly & daily programs', 'Council facility protocols'].map((item, i) => (
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
                <h4 className="font-bold text-darkblue mb-3">Liverpool Area Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Liverpool', 'Casula', 'Moorebank', 'Warwick Farm', 'Carnes Hill', 'Prestons', 'Hoxton Park', 'Cecil Hills'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site gym assessment. Liverpool & surrounds.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Gym Cleaning Liverpool</h3>
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
                { label: 'Gym Cleaning Campbelltown', href: '/gym-cleaning-campbelltown' },
                { label: 'Commercial Cleaning Liverpool', href: '/commercial-cleaning-liverpool' },
                { label: 'Gym Cleaning Sydney', href: '/gym-cleaning-sydney' },
                { label: 'Industrial Cleaning Sydney', href: '/industrial-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Gym Cleaning Liverpool — Free Quote Today</h3>
            <p className="text-xl mb-4 text-gray-100">Peak-hour compatible scheduling. TGA-approved disinfectants. Council & private gyms.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
