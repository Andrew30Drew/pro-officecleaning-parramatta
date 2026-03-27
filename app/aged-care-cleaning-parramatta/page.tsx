import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Aged Care Cleaning Parramatta | ProCleanCorp',
  description: 'Aged care facility cleaning in Parramatta. ACQSC-aware infection control, hospital-grade disinfection, resident-sensitive protocols. Fully insured. Free quote.',
  keywords: 'aged care cleaning parramatta, aged care facility cleaning parramatta, ACQSC cleaning parramatta, residential care cleaning parramatta, aged care infection control parramatta, nursing home cleaning parramatta',
  openGraph: {
    title: 'Aged Care Cleaning Parramatta | ProCleanCorp',
    description: 'Aged care cleaning in Parramatta — ACQSC-aware infection control, hospital-grade disinfection, resident-sensitive protocols. Free quote.',
    url: 'https://www.procleancorp.com.au/aged-care-cleaning-parramatta',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Aged care cleaning Parramatta ACQSC compliant' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/aged-care-cleaning-parramatta' }
};

const faqs = [
  {
    question: 'Do you meet ACQSC infection control standards for aged care cleaning in Parramatta?',
    answer: 'Yes. ProCleanCorp\'s aged care cleaning programs are designed around the infection prevention requirements of the Aged Care Quality and Safety Commission (ACQSC) Aged Care Quality Standards — particularly Standard 4 (Services and Supports for Daily Living) and the infection control guidance underpinning Standard 3 (Personal Care and Clinical Care). Our protocols include hospital-grade TGA-approved disinfectants, colour-coded microfibre systems to prevent cross-contamination, documented cleaning schedules, and staff trained in aged care infection control procedures.'
  },
  {
    question: 'How do you ensure resident privacy and dignity during cleaning in aged care facilities?',
    answer: 'ProCleanCorp staff are trained in resident dignity protocols for aged care environments — this includes knocking before entering resident rooms, announcing presence clearly, not cleaning a room while a resident is using private facilities, working quietly and efficiently in shared spaces, and never discussing resident information with other staff. We are sensitive to the fact that aged care facilities are homes for their residents, not just workplaces for our staff.'
  },
  {
    question: 'Can you provide daily aged care cleaning for our Parramatta facility?',
    answer: 'Yes. ProCleanCorp provides daily aged care cleaning programs for Parramatta residential facilities and day care centres. Daily programs cover resident room cleaning, common areas, dining rooms, bathrooms and all high-touch surface disinfection. We can also structure the cleaning program to align with the facility\'s existing care roster, minimising disruption to care activities.'
  }
];

export default function AgedCareCleaningParramattaPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Aged Care Cleaning Parramatta"
        serviceDescription="ProCleanCorp delivers aged care cleaning in Parramatta with ACQSC-aware infection control protocols, hospital-grade disinfectants and resident-sensitive cleaning schedules designed to minimise disruption."
        serviceUrl="https://www.procleancorp.com.au/aged-care-cleaning-parramatta"
        serviceType="ProfessionalService"
        price="$$$"
        additionalServices={['ACQSC-Aware Infection Control', 'Hospital-Grade Disinfection', 'Resident Room Cleaning', 'Common Area Cleaning', 'Dignity-Sensitive Protocols']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Parramatta Aged Care Facility Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Aged Care Cleaning Parramatta — Compliant, Compassionate Cleaning
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers aged care cleaning in Parramatta with ACQSC-aware infection control, hospital-grade disinfection and resident-sensitive protocols. Residential aged care, day centres and retirement living.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ ACQSC-Aware &nbsp;|&nbsp; ✓ Hospital-Grade Disinfection &nbsp;|&nbsp; ✓ Dignity-Sensitive</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Aged care cleaning Parramatta ACQSC compliant"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp delivers aged care cleaning in Parramatta</strong> with ACQSC-aware infection control protocols, hospital-grade disinfectants and resident-sensitive cleaning schedules designed to minimise disruption. Aged care cleaning requires more than product compliance — it requires staff who understand that they are working in residents' homes.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Aged Care Cleaning Services in Parramatta</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                The Aged Care Quality and Safety Commission (ACQSC) mandates infection prevention standards that most general commercial cleaners cannot document or demonstrate. ProCleanCorp's aged care cleaning program is built around ACQSC compliance — not just as a contractual requirement, but as the genuine standard our staff are trained to apply.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Parramatta has a significant aged care sector — residential facilities, in-home support hubs and day activity centres. ProCleanCorp serves all of these with protocols adapted to each facility type, from residential room cleaning in a 50-bed aged care home to common area cleaning in a day centre.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Parramatta Aged Care Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Resident room cleaning & sanitisation', 'Common areas & corridors', 'Dining room & kitchen cleaning', 'Bathroom & wet area disinfection', 'High-touch surface disinfection', 'Hospital-grade TGA disinfectants', 'Colour-coded microfibre system', 'ACQSC cleaning documentation', 'Staff trained in aged care protocols', 'Resident dignity & privacy protocols', 'Daily & weekly cleaning programs', 'Infection outbreak response cleaning'].map((item, i) => (
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
                <h4 className="font-bold text-darkblue mb-3">Parramatta Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Parramatta', 'Westmead', 'Woodville', 'Merrylands', 'Granville', 'Guildford', 'Auburn', 'Lidcombe'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">ACQSC-aware aged care cleaning. Parramatta & surrounds.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Aged Care Cleaning Parramatta</h3>
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
                { label: 'Aged Care Cleaning Sydney', href: '/aged-care-cleaning-sydney' },
                { label: 'Healthcare Cleaning Sydney', href: '/healthcare-cleaning-sydney' },
                { label: 'Medical Cleaning Parramatta', href: '/medical-cleaning-parramatta' },
                { label: 'Commercial Cleaning Parramatta', href: '/commercial-cleaning-parramatta' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Aged Care Cleaning Parramatta — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">ACQSC-aware infection control. Hospital-grade disinfection. Resident dignity guaranteed.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
