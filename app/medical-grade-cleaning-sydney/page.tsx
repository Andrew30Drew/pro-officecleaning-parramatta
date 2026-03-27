import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Grade Cleaning Sydney | TGA-Approved Disinfectants | ProCleanCorp',
  description: 'Medical grade cleaning services across Sydney using TGA-approved, hospital-grade disinfectants. What "medical grade" actually means, who needs it, and why it matters. GP practices, specialist suites and allied health. Free quote.',
  keywords: 'medical grade cleaning sydney, medical grade cleaning services, TGA approved cleaning sydney, hospital grade disinfectants sydney, medical office cleaning sydney, clinical cleaning services sydney',
  openGraph: {
    title: 'Medical Grade Cleaning Sydney | TGA-Approved Disinfectants | ProCleanCorp',
    description: 'Medical grade cleaning across Sydney using TGA-approved disinfectants. What it means, who needs it. GP practices, specialist suites, allied health. Free quote.',
    url: 'https://www.procleancorp.com.au/medical-grade-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Medical grade cleaning Sydney TGA approved' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/medical-grade-cleaning-sydney' }
};

const faqs = [
  {
    question: 'What does "medical grade cleaning" actually mean?',
    answer: 'Medical grade cleaning means the cleaning products used are TGA-registered (Therapeutic Goods Administration) as hospital-grade disinfectants — capable of killing bacteria, viruses and fungi at the concentration and contact time specified on the TGA label. It also means the cleaning protocol follows evidence-based infection control guidelines (NHMRC) with specific attention to high-touch surfaces, colour-coded equipment to prevent cross-contamination, and documented cleaning schedules for audit purposes. It is distinct from standard commercial cleaning, which uses general-purpose cleaners that are not necessarily registered for therapeutic use.'
  },
  {
    question: 'Which types of businesses need medical grade cleaning?',
    answer: 'Any business where infection control is a regulatory or patient safety requirement benefits from medical grade cleaning: GP practices, specialist medical suites, allied health clinics (physio, chiro, osteo), dental practices, pathology collection centres, radiology practices, day procedure centres, aged care facilities, childcare centres and pharmacies. Many of these are required by AHPRA, ACQSC or state health regulations to demonstrate they use TGA-registered disinfection products and documented cleaning procedures.'
  },
  {
    question: 'What TGA-registered products does ProCleanCorp use for medical grade cleaning?',
    answer: 'ProCleanCorp uses TGA-registered hospital-grade disinfectants with listed ARTG numbers, including products with proven efficacy against MRSA, VRE, C. difficile spores and enveloped viruses including COVID-19. Specific products are documented in our cleaning SOPs and can be disclosed to practice managers on request. We rotate between product classes to prevent adaptive resistance in high-frequency environments.'
  },
  {
    question: 'Do you provide cleaning documentation for AHPRA or accreditation audits?',
    answer: 'Yes. ProCleanCorp provides written cleaning schedules, cleaning logs and product data sheets (ARTG registration details, SDS) suitable for RACGP, ACHS, QIP or AAPM accreditation submissions. Our documentation is formatted to meet the infection prevention evidence requirements of the major primary care and specialist accreditation bodies operating in NSW.'
  }
];

export default function MedicalGradeCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Grade Cleaning Sydney"
        serviceDescription="Medical grade cleaning across Sydney using TGA-registered hospital-grade disinfectants. GP practices, specialist suites, allied health and dental. NHMRC-aligned protocols, documented for AHPRA accreditation."
        serviceUrl="https://www.procleancorp.com.au/medical-grade-cleaning-sydney"
        serviceType="ProfessionalService"
        price="$$$"
        additionalServices={['TGA-Registered Disinfection', 'GP Practice Cleaning', 'Specialist Suite Cleaning', 'Allied Health Cleaning', 'Dental Practice Cleaning', 'Accreditation Documentation']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">TGA-Registered · NHMRC-Aligned · Audit-Ready</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Medical Grade Cleaning Sydney — TGA-Approved Disinfectants for Clinical Environments
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers genuine medical grade cleaning across Sydney using TGA-registered hospital-grade disinfectants, colour-coded equipment and NHMRC-aligned protocols — with documentation ready for accreditation audits.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ TGA-Registered Products &nbsp;|&nbsp; ✓ Accreditation Documentation &nbsp;|&nbsp; ✓ Free Quote in 24hrs</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/medical.webp" alt="Medical grade cleaning Sydney TGA approved"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>"Medical grade cleaning" means using TGA-registered hospital-grade disinfectants</strong> — products with proven, laboratory-validated efficacy against the pathogens found in clinical environments, used at the correct concentration and contact time. ProCleanCorp provides medical grade cleaning across Sydney for GP practices, specialist suites, allied health clinics and dental practices, with written cleaning schedules and product documentation suitable for RACGP, ACHS and QIP accreditation submissions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">What Is Medical Grade Cleaning and Why Does It Matter?</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                The term "medical grade" is used frequently by cleaning companies but rarely defined. In Australia, medical grade cleaning means the disinfectants used are TGA-registered under the Therapeutic Goods Act — they have a valid ARTG (Australian Register of Therapeutic Goods) listing number and have been assessed for safety and efficacy against specified pathogens. This is entirely different from a standard commercial cleaner labelled "antibacterial" or "hygiene".
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                TGA-registered hospital-grade disinfectants are required to demonstrate efficacy against Staphylococcus aureus (MRSA), Pseudomonas aeruginosa, and specific viruses and fungi. ProCleanCorp uses only ARTG-listed products in all clinical environments, and our SOPs specify the correct dilution, application method and contact time for each product — because a disinfectant used incorrectly provides no protection.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Medical Grade Cleaning — What's Included</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'TGA-registered hospital-grade disinfection',
                    'High-touch surface priority protocol',
                    'Colour-coded microfibre system (no cross-contamination)',
                    'Waiting room chairs and surfaces',
                    'Consultation room benches and equipment',
                    'Door handles, light switches, card readers',
                    'Bathroom TGA-grade sanitisation',
                    'Clinical waste bin management',
                    'Written cleaning schedule (per NHMRC)',
                    'Cleaning log for accreditation audit',
                    'Product data sheets (ARTG numbers on file)',
                    'Staff with infection control training'
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
                  { title: 'TGA-Registered Products', desc: 'All disinfectants carry valid ARTG listing numbers. Product documentation provided for accreditation.' },
                  { title: 'NHMRC-Aligned Protocol', desc: 'Cleaning follows National Health and Medical Research Council infection control guidelines for primary care.' },
                  { title: 'Colour-Coded Equipment', desc: 'Dedicated colour-coded microfibre cloths and mop heads for clinical, amenity and general areas. Zero cross-contamination.' },
                  { title: 'Accreditation Ready', desc: 'Cleaning logs and product sheets formatted for RACGP, ACHS, QIP and AAPM accreditation submissions.' }
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
                <h4 className="font-bold text-darkblue mb-3">Practices We Service</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['GP practices & bulk billing clinics', 'Specialist medical suites', 'Allied health (physio, chiro, osteo)', 'Dental practices', 'Pathology collection centres', 'Radiology & imaging', 'Day procedure centres', 'Pharmacy dispensaries'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site assessment. Cleaning programme and documentation provided.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Medical Grade Cleaning Sydney</h3>
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
                { label: 'Hospital Grade Cleaning Sydney', href: '/hospital-grade-cleaning-sydney' },
                { label: 'Medical Office Cleaning Sydney', href: '/medical-office-cleaning-sydney' },
                { label: 'Healthcare Cleaning Sydney', href: '/healthcare-cleaning-sydney' },
                { label: 'Sterile Cleaning Services Sydney', href: '/sterile-cleaning-services-sydney' },
                { label: 'Medical Cleaning North Sydney', href: '/medical-cleaning-north-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get Your Free Medical Grade Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">TGA-registered products. Accreditation documentation included. Free on-site assessment within 24 hours.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
