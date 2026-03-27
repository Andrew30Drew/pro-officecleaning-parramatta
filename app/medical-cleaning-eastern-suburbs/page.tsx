import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Cleaning Eastern Suburbs Sydney | ProCleanCorp',
  description: 'Medical centre and specialist clinic cleaning across the Eastern Suburbs. Bondi Junction, Randwick, Paddington, Surry Hills. TGA-approved protocols. Free quote.',
  keywords: 'medical cleaning eastern suburbs, medical centre cleaning randwick, clinical cleaning bondi junction, GP practice cleaning eastern suburbs, specialist clinic cleaning paddington, prince of wales hospital precinct cleaning',
  openGraph: {
    title: 'Medical Cleaning Eastern Suburbs Sydney | ProCleanCorp',
    description: 'Medical centre cleaning across the Eastern Suburbs. Randwick, Bondi Junction, Paddington. TGA-approved protocols. Free quote.',
    url: 'https://www.procleancorp.com.au/medical-cleaning-eastern-suburbs',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Medical cleaning Eastern Suburbs Sydney Randwick' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/medical-cleaning-eastern-suburbs' }
};

const faqs = [
  {
    question: 'Do you clean medical centres near Prince of Wales Hospital in Randwick?',
    answer: 'Yes. ProCleanCorp specifically serves the Randwick health precinct surrounding Prince of Wales Hospital and Sydney Children\'s Hospital. Clinics adjacent to these hospitals require hospital-adjacent infection control standards — we apply NHMRC-aligned protocols, TGA-approved hospital-grade disinfectants and compliance documentation appropriate for the Randwick medical precinct.'
  },
  {
    question: 'What areas of the Eastern Suburbs do your medical cleaners cover?',
    answer: 'ProCleanCorp covers the full Eastern Suburbs medical precinct including Randwick (Prince of Wales/Sydney Children\'s Hospital precinct), Bondi Junction (private specialist suites), Paddington (GP practices and allied health), Surry Hills, Darlinghurst, Coogee and Maroubra. We operate regular medical cleaning routes through the Eastern Suburbs.'
  },
  {
    question: 'Can you provide clinical cleaning compliance certificates for Eastern Suburbs practices?',
    answer: 'Yes. ProCleanCorp provides a complete compliance documentation package for Eastern Suburbs medical practices — including TGA product approval documentation, AHPRA-ready cleaning schedules, infection control logs, staff training records and formal compliance letters for practice accreditation and AHPRA inspection purposes.'
  }
];

export default function MedicalCleaningEasternSuburbsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Cleaning Eastern Suburbs Sydney"
        serviceDescription="ProCleanCorp delivers medical centre cleaning across Sydney's Eastern Suburbs, covering GP practices, specialist clinics and allied health from Bondi Junction to Randwick with TGA-approved disinfectants."
        serviceUrl="https://www.procleancorp.com.au/medical-cleaning-eastern-suburbs"
        serviceType="ProfessionalService"
        price="$$$"
        additionalServices={['Randwick Hospital Precinct Cleaning', 'Specialist Suite Cleaning', 'GP Practice Cleaning', 'Allied Health Cleaning', 'TGA-Approved Disinfection', 'AHPRA Compliance Documentation']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Eastern Suburbs Medical Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Medical Centre Cleaning Eastern Suburbs — Clinical Specialists
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers medical centre cleaning across Sydney's Eastern Suburbs — Randwick health precinct, Bondi Junction specialist suites, Paddington and Surry Hills allied health. TGA-approved, AHPRA-compliant.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Randwick Precinct Specialists &nbsp;|&nbsp; ✓ AHPRA-Compliant &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Medical cleaning Eastern Suburbs Sydney Randwick"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp delivers medical centre cleaning across Sydney's Eastern Suburbs</strong>, covering GP practices, specialist clinics and allied health from Bondi Junction to Randwick with TGA-approved disinfectants. The Randwick health precinct — home to Prince of Wales and Sydney Children's Hospital — sets the infection control standard we apply across the Eastern Suburbs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Medical Centre Cleaning — Eastern Suburbs</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                The Eastern Suburbs has some of Sydney's highest concentrations of private medical practices. Prince of Wales and Sydney Children's Hospital in Randwick create a satellite specialist clinic network that extends across Coogee, Maroubra and Kingsford. Bondi Junction hosts a dense cluster of private specialists. Paddington and Surry Hills are home to a growing allied health sector.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp provides a consistent hospital-adjacent cleaning standard across all these locations — NHMRC-aligned infection control protocols, TGA-approved disinfectants, and compliance documentation that supports AHPRA and practice accreditation requirements.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Eastern Suburbs Medical Cleaning</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Waiting room & reception cleaning', 'Consultation room disinfection', 'Specialist suite protocols', 'Colour-coded microfibre system', 'TGA-approved hospital disinfectants', 'NHMRC-aligned protocols', 'Bathroom & amenity cleaning', 'High-touch disinfection', 'After hours access', 'AHPRA compliance logs', 'Infection control documentation', 'Police-checked staff'].map((item, i) => (
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
                <h4 className="font-bold text-darkblue mb-3">Eastern Suburbs Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Randwick', 'Bondi Junction', 'Paddington', 'Surry Hills', 'Darlinghurst', 'Coogee', 'Maroubra', 'Kingsford'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Eastern Suburbs medical cleaning.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Medical Cleaning Eastern Suburbs</h3>
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
                { label: 'Medical Office Cleaning Sydney', href: '/medical-office-cleaning-sydney' },
                { label: 'Healthcare Cleaning Sydney', href: '/healthcare-cleaning-sydney' },
                { label: 'Commercial Cleaning Eastern Suburbs', href: '/commercial-cleaning-eastern-suburbs' },
                { label: 'Gym Cleaning Eastern Suburbs', href: '/gym-cleaning-eastern-suburbs' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Medical Cleaning Eastern Suburbs — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Randwick precinct specialists. AHPRA-compliant. TGA-approved disinfectants.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
