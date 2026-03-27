import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Hospital Grade Cleaning Sydney | HAI Prevention | ProCleanCorp',
  description: 'Hospital grade cleaning services across Sydney. TGA-registered sporicidal disinfectants, colour-coded systems, HAI prevention protocols. Clinical environments, aged care and healthcare facilities. Free quote.',
  keywords: 'hospital grade cleaning sydney, hospital grade cleaning services, HAI prevention cleaning sydney, sporicidal cleaning sydney, clinical cleaning sydney, infection control cleaning sydney',
  openGraph: {
    title: 'Hospital Grade Cleaning Sydney | HAI Prevention | ProCleanCorp',
    description: 'Hospital grade cleaning across Sydney. TGA sporicidal disinfectants, HAI prevention, colour-coded systems. Clinical, aged care and healthcare. Free quote.',
    url: 'https://www.procleancorp.com.au/hospital-grade-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Hospital grade cleaning Sydney HAI prevention' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/hospital-grade-cleaning-sydney' }
};

const faqs = [
  {
    question: 'What is hospital grade cleaning and how is it different from medical grade cleaning?',
    answer: 'Hospital grade cleaning uses TGA-registered disinfectants classified specifically for hospital environments — the highest level of efficacy available in Australian healthcare. The key distinction from standard medical grade cleaning is the inclusion of sporicidal agents (effective against C. difficile and other spore-forming bacteria), a higher frequency of high-touch surface disinfection, and terminal cleaning protocols for isolation or post-infectious areas. Hospital grade cleaning is used in clinical environments where the risk of healthcare-associated infections (HAIs) is highest.'
  },
  {
    question: 'Which facilities in Sydney need hospital grade cleaning?',
    answer: 'In Sydney, hospital grade cleaning is required for private hospitals, day surgery and procedure centres, dialysis clinics, oncology treatment suites, endoscopy suites, rehabilitation wards, high-dependency aged care facilities, and any facility that houses immunocompromised patients. It is also recommended for large GP practices and medical centres where COVID-positive or infectious patients are regularly assessed.'
  },
  {
    question: 'What is HAI prevention cleaning and why does it matter?',
    answer: 'Healthcare-associated infections (HAIs) are infections acquired during or after healthcare contact — they are largely preventable with correct cleaning and disinfection. Australian Institute of Health and Welfare data consistently shows that HAIs add days to hospital stays, increase treatment costs and represent a significant patient safety risk. Hospital grade cleaning with sporicidal agents, correct surface coverage, adequate contact time and documented frequency directly reduces HAI transmission via environmental surfaces, particularly for C. difficile, MRSA and VRE.'
  },
  {
    question: 'Do you provide terminal cleaning for isolation rooms in Sydney?',
    answer: 'Yes. ProCleanCorp provides terminal cleaning for isolation and negative-pressure rooms in private hospitals and clinical facilities across Sydney. Terminal cleaning is a complete high-level disinfection of the entire room environment following an infectious patient\'s discharge or transfer — using sporicidal agents, following a strict top-to-bottom sequence and documented with a checklist signed off before the room is returned to use.'
  }
];

export default function HospitalGradeCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Hospital Grade Cleaning Sydney"
        serviceDescription="Hospital grade cleaning across Sydney for clinical environments, day surgery centres, aged care and healthcare facilities. TGA sporicidal disinfectants, HAI prevention protocols, terminal cleaning, colour-coded systems."
        serviceUrl="https://www.procleancorp.com.au/hospital-grade-cleaning-sydney"
        serviceType="ProfessionalService"
        price="$$$"
        additionalServices={['Hospital-Grade Disinfection', 'HAI Prevention Cleaning', 'Terminal Room Cleaning', 'Isolation Room Cleaning', 'Sporicidal Protocols', 'Colour-Coded Cleaning Systems']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Sporicidal · HAI Prevention · Terminal Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Hospital Grade Cleaning Sydney — HAI Prevention & Sporicidal Disinfection
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers hospital grade cleaning across Sydney using TGA-registered sporicidal disinfectants, colour-coded equipment and healthcare-associated infection (HAI) prevention protocols for clinical and high-risk healthcare environments.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ TGA Sporicidal Disinfectants &nbsp;|&nbsp; ✓ HAI Prevention &nbsp;|&nbsp; ✓ Terminal Cleaning Available</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/medical.webp" alt="Hospital grade cleaning Sydney clinical HAI prevention"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>Hospital grade cleaning is the highest level of environmental cleaning available in Australian healthcare settings</strong> — it uses TGA-registered sporicidal disinfectants effective against C. difficile, MRSA, VRE and enveloped viruses, with specific protocols for HAI prevention and terminal cleaning of isolation environments. ProCleanCorp delivers hospital grade cleaning for private hospitals, day surgery centres, dialysis clinics, oncology suites and high-dependency aged care facilities across Sydney.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Hospital Grade Cleaning Services in Sydney</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Healthcare-associated infections (HAIs) are a preventable patient safety issue — and environmental surfaces are a documented transmission pathway for C. difficile, MRSA, VRE and respiratory pathogens. Hospital grade cleaning with TGA-registered sporicidal agents, correct surface coverage and documented frequency directly interrupts this transmission pathway. ProCleanCorp's hospital grade cleaning protocols are built around ACSQHC's Australian Commission on Safety and Quality in Health Care environmental cleaning standards.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Hospital Grade Cleaning Inclusions</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'TGA sporicidal disinfectant application',
                    'High-touch surface priority protocol',
                    'Colour-coded microfibre (6-room system)',
                    'Patient room / clinical area cleaning',
                    'Bathroom deep disinfection',
                    'Clinical waste segregation management',
                    'Terminal cleaning for isolation rooms',
                    'Corridor and common area disinfection',
                    'Nursing station and med room cleaning',
                    'Equipment surface disinfection',
                    'Documented cleaning frequency logs',
                    'ACSQHC standard compliance reporting'
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
                  { title: 'Sporicidal Agents', desc: 'TGA-registered products effective against C. difficile spores — the most difficult pathogen to eliminate in clinical environments.' },
                  { title: 'HAI Prevention Protocol', desc: 'Cleaning frequency, surface coverage and agent rotation designed to interrupt the 6 HAI transmission pathways.' },
                  { title: 'Terminal Cleaning', desc: 'Full sporicidal terminal clean for isolation rooms, post-infectious areas and discharge room preparation.' },
                  { title: 'ACSQHC Aligned', desc: 'Cleaning standards aligned with the Australian Commission on Safety and Quality in Health Care environmental cleaning guidelines.' }
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
                <h4 className="font-bold text-darkblue mb-3">Facilities We Service</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Private hospitals', 'Day surgery / procedure centres', 'Dialysis clinics', 'Oncology treatment suites', 'Endoscopy suites', 'Rehabilitation wards', 'High-dependency aged care', 'Pathology & radiology'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Site assessment and infection control review included.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Hospital Grade Cleaning Sydney</h3>
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
                { label: 'Medical Grade Cleaning Sydney', href: '/medical-grade-cleaning-sydney' },
                { label: 'Sterile Cleaning Services Sydney', href: '/sterile-cleaning-services-sydney' },
                { label: 'Medical Office Cleaning Sydney', href: '/medical-office-cleaning-sydney' },
                { label: 'Healthcare Cleaning Sydney', href: '/healthcare-cleaning-sydney' },
                { label: 'Aged Care Cleaning Sydney', href: '/aged-care-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get Your Free Hospital Grade Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Site assessment included. Sporicidal protocols, HAI prevention documentation, terminal cleaning available.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
