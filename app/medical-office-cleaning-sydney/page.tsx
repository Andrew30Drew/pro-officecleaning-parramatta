import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Office & Centre Cleaning Sydney | Professional Medical Cleaning Services',
  description: 'Top-rated medical office & centre cleaning services in Sydney. Specialist cleaning for medical centres, consulting rooms, and specialist clinics. Hospital-grade hygiene for private practices.',
  keywords: 'medical office cleaning, medical centre cleaning sydney, medical cleaning services, professional medical cleaning, commercial cleaning sydney, specialist cleaning sydney, healthcare cleaning',
  openGraph: {
    title: 'Medical Office & Centre Cleaning Sydney | Pro Clean Corp',
    description: 'Specialist cleaning for medical centres, consulting rooms, and specialist clinics. Hospital-grade hygiene for private practices and healthcare facilities.',
    url: '/medical-office-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Medical Office & Centre Cleaning Sydney' }]
  },
  alternates: { canonical: '/medical-office-cleaning-sydney' }
};

const suburbs = [
  { name: 'Blacktown', slug: 'medical-cleaning-blacktown' },
  { name: 'Castle Hill', slug: 'medical-cleaning-castle-hill' },
  { name: 'Liverpool', slug: 'medical-cleaning-liverpool' },
  { name: 'Parramatta', slug: 'medical-cleaning-parramatta' },
  { name: 'Penrith', slug: 'medical-cleaning-penrith' },
  { name: 'Sydney CBD', slug: 'medical-office-cleaning-sydney' },
];

export default function MedicalOfficeCleaningPage() {
  const faqs = [
    {
      question: 'Do you adhere to RACGP and Australian Health Department cleaning standards?',
      answer: 'Yes, our medical office cleaning protocols are strictly aligned with RACGP infection control standards and Australian Health Department guidelines. We ensure your medical practice meets all accreditation requirements for hygiene and cleanliness.'
    },
    {
      question: 'What disinfectants do you use for medical cleaning?',
      answer: 'We exclusively use TGA-listed hospital-grade disinfectants and sterilizing agents that are proven effective against a broad spectrum of pathogens, viruses, and bacteria, ensuring a safe environment for patients and staff.'
    },
    {
      question: 'Are your cleaners trained in medical privacy and confidentiality?',
      answer: 'Absolutely. Our medical cleaning staff undergo specific training regarding patient privacy, confidentiality, and conduct within medical environments. All staff are police-checked and sign confidentiality agreements.'
    },
    {
      question: 'Can you clean pathology labs and specialized treatment rooms?',
      answer: 'Yes, we have specialized teams trained for high-risk areas including pathology labs, procedure rooms, and sterile zones. We follow strict color-coding and cross-contamination prevention protocols for these sensitive areas.'
    },
    {
      question: 'How do you prevent cross-contamination in medical centres?',
      answer: 'We rigorously enforce a color-coded cleaning system (zoning), separating equipment used in waiting areas, treatment rooms, kitchens, and restrooms. Single-use items are used where appropriate, and all equipment is sanitized between zones.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Office & Centre Cleaning Sydney NSW"
        serviceDescription="Specialist cleaning for medical offices, medical centres, consulting rooms, and specialist clinics in Sydney. Hospital-grade hygiene standards and infection control compliance."
        serviceUrl="/medical-office-cleaning-sydney"
        serviceType="Medical Cleaning"
        price="$$-$$$$"
        additionalServices={[
          'Medical Centre Cleaning',
          'Dental Practice Cleaning',
          'Allied Health Cleaning',
          'Clinic Sanitization',
          'Pathology Lab Cleaning',
          'Waiting Room Station'
        ]}
        faqs={faqs}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Medical Office & Centre Cleaning Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Specialist medical cleaning services ensuring hospital-grade hygiene for medical centres, clinics, consulting rooms, and healthcare facilities across Sydney. Fully compliant with RACGP and infection control standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Free Quote
                </Link>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Medical Office Cleaning Sydney - Professional healthcare cleaning"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Medical Centre & Office Cleaning in Sydney</h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp delivers specialized <strong>medical office and centre cleaning</strong> services throughout Sydney, providing the highest standard of hygiene and infection control. We understand that medical environments require far more than just standard cleaning; they demand rigorous adherence to health standards to protect vulnerable patients and staff.
                </p>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Our medical cleaning teams are trained in infection prevention protocols, proper chemical usage, and cross-contamination prevention. Whether you run a GP clinic, large medical centre, dental practice, or specialist suite, we ensure your facility is clinically clean, compliant, and welcoming.
                </p>

                <div className="bg-blueprimary/5 border-l-4 border-blueprimary p-6 my-8">
                  <h3 className="text-xl font-bold text-darkblue mb-2">Accreditation Ready Cleaning</h3>
                  <p className="text-gray-700">
                    We support your practice accreditation by maintaining cleaning logs, using approved chemicals, and following documented procedures that satisfy RACGP, ADA, and other healthcare accreditation bodies.
                  </p>
                </div>
              </div>

              <div>
                <Image
                  src="/images/services/office.webp"
                  alt="Medical cleaning specialist Sydney"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
                <div className="bg-blueprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Healthcare Sectors</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ General Practice (GP) Clinics</li>
                    <li>✓ Dental & Specialist Suites</li>
                    <li>✓ Allied Health Centres</li>
                    <li>✓ Pathology & Radiology Labs</li>
                    <li>✓ Psychology & Counselling Rooms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Comprehensive Medical Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Consulting room disinfection',
                  'Waiting area sanitization',
                  'Reception desk cleaning',
                  'Treatment bed & chair wiping',
                  'Medical equipment dusting',
                  'Sterile zone cleaning',
                  'Bio-hazard waste management',
                  'Restroom & amenity hygiene',
                  'Kitchen & staff room cleaning',
                  'Hard floor scrubbing & polishing',
                  'High-touch point disinfection',
                  'Window & glass cleaning'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blueprimary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suburbs Section */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Medical Cleaning Service Areas</h3>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                We provide specialized medical cleaning across key Sydney medical precincts:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {suburbs.map((suburb) => (
                  <Link
                    key={suburb.slug}
                    href={`/${suburb.slug}`}
                    className="bg-white p-3 rounded-lg text-center text-gray-700 hover:text-greenprimary hover:shadow-md transition border border-gray-100 font-medium"
                  >
                    {suburb.name}
                  </Link>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions about Medical Cleaning</h3>
            <div className="space-y-6 mb-12">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center mt-12">
              <h3 className="text-3xl font-bold mb-4">Specialized Medical Cleaning Solutions</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp today for a confidential discussion about your medical cleaning needs.
              </p>
              <div className="text-2xl font-bold text-greenprimary">
                Call 1300 494 983
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
