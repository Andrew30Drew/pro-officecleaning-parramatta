import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Cleaning Services Sydney | GP, Clinics & Hospitals | Pro Clean Corp',
  description: 'Professional medical cleaning services across Sydney. GP clinics, specialist suites, hospitals, dental and allied health. TGA products, infection control trained. Free quote.',
  keywords: ['medical cleaning', 'medical cleaning sydney', 'clinic cleaning services', 'hospital cleaning sydney', 'healthcare cleaning services', 'medical grade cleaning'],
  openGraph: {
    title: 'Medical Cleaning Services Sydney | GP, Clinics & Hospitals | Pro Clean Corp',
    description: 'All medical cleaning services in one place — GP clinics, hospitals, dental, allied health. TGA-approved products and infection control trained staff.',
    url: 'https://www.procleancorp.com.au/medical-cleaning',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Medical cleaning services Sydney' }]
  },
  twitter: { card: 'summary_large_image', title: 'Medical Cleaning Services Sydney | Pro Clean Corp', description: 'All medical cleaning services — GP, clinics, hospitals, dental and allied health.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/medical-cleaning' }
};

const faqs = [
  {
    question: 'What is medical cleaning?',
    answer: 'Medical cleaning refers to the professional cleaning and disinfection of healthcare settings — including GP clinics, specialist suites, hospitals, dental practices, pathology rooms and allied health facilities. It differs from standard commercial cleaning through the use of TGA-registered hospital-grade disinfectants, colour-coded microfibre systems, HEPA vacuum filtration and staff trained in NHMRC infection control guidelines.'
  },
  {
    question: 'How is medical cleaning different from regular office cleaning?',
    answer: 'Medical cleaning requires a higher standard of disinfection to protect patients and staff from healthcare-associated infections (HAIs). Key differences include: TGA-registered disinfectants (not standard commercial products), zone-based colour-coded cleaning to prevent cross-contamination, documented cleaning procedures for each room type, HEPA filtration vacuums and staff training in infection control and clinical waste handling.'
  },
  {
    question: 'How often do medical facilities need professional cleaning?',
    answer: 'Patient-facing areas in medical facilities should be cleaned daily, with clinical rooms and high-touch surfaces receiving terminal cleaning after the last appointment. Waiting rooms may require mid-day touchpoint cleaning in high-volume practices. Pathology and surgical facilities have more stringent requirements — Pro Clean Corp will advise based on your specific setting during an on-site assessment.'
  },
  {
    question: 'Which Sydney areas do you provide medical cleaning services?',
    answer: 'Pro Clean Corp provides medical cleaning services across all Sydney metro areas including the CBD, Eastern Suburbs, North Shore, Inner West, Western Sydney, Parramatta and the St George/Sutherland region. We also service Newcastle and Wollongong medical facilities — contact us for availability.'
  }
];

const serviceTypes = [
  { title: 'General Practice Clinics', href: '/medical-cleaning', desc: 'Daily cleaning for GP waiting rooms, consultation rooms, nurse stations and amenities.' },
  { title: 'Specialist Medical Suites', href: '/medical-cleaning', desc: 'Cardiology, dermatology, oncology and other specialist suites requiring clinical-standard cleaning.' },
  { title: 'Medical Centres', href: '/medical-centre-cleaning', desc: 'Large multi-practitioner medical centres with complex scheduling and high patient volumes.' },
  { title: 'Dental Practices', href: '/medical-cleaning', desc: 'Sterilisation zone cleaning, patient chair surfaces, reception and waiting areas.' },
  { title: 'Allied Health Clinics', href: '/medical-cleaning', desc: 'Physiotherapy, psychology, occupational therapy and podiatry clinic cleaning.' },
  { title: 'Pathology Rooms', href: '/medical-cleaning', desc: 'Specimen collection areas cleaned to NHMRC standard with biohazard protocols.' },
  { title: 'Hospital Cleaning', href: '/hospital-cleaning-services', desc: 'Ward cleaning, common areas, amenities and high-touch surface disinfection.' },
  { title: 'Medical Grade Cleaning', href: '/medical-grade-cleaning-services', desc: 'Terminal cleaning and deep disinfection for clinical environments requiring the highest standard.' }
];

export default function MedicalCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Cleaning Services Sydney"
        serviceDescription="Professional medical cleaning services across Sydney for GP clinics, hospitals, dental practices, specialist suites and allied health facilities. TGA-registered products and infection control protocols."
        serviceUrl="/medical-cleaning"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['GP Clinic Cleaning', 'Hospital Cleaning', 'Dental Practice Cleaning', 'Allied Health Cleaning', 'Medical Centre Cleaning', 'Pathology Room Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">GP · Clinics · Hospitals · Dental · Allied Health</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Medical Cleaning Services Across Sydney
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Pro Clean Corp delivers medical cleaning</strong> for every healthcare setting in Sydney — from single-GP practices to multi-storey medical centres. TGA-registered disinfectants, infection control training and after-hours scheduling as standard.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['TGA hospital-grade disinfectants', 'NHMRC infection control training', 'Colour-coded zone cleaning', 'After-hours service available', 'Written service reports', '$20M public liability'].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white">
                    <span className="text-green-300">✓</span>
                    {b}
                  </div>
                ))}
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/medical.webp"
                alt="Medical cleaning services Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-8 bg-greenprimary/10 border-l-4 border-greenprimary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>Medical cleaning from Pro Clean Corp covers every healthcare setting across Sydney</strong> — GP clinics, specialist suites, hospitals, dental practices, allied health and pathology rooms. All services use TGA-registered hospital-grade disinfectants and NHMRC-aligned infection control protocols to protect patients, staff and your accreditation.
          </p>
        </div>
      </section>

      {/* Service Types Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">All Medical Cleaning Services</h2>
          <p className="text-center text-gray-600 mb-12">One provider for every medical cleaning need across Sydney.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceTypes.map((service, i) => (
              <Link key={i} href={service.href} className="bg-gray-50 hover:bg-blueprimary/5 border border-gray-100 hover:border-blueprimary/20 rounded-xl p-5 transition group">
                <h3 className="font-bold text-darkblue group-hover:text-blueprimary mb-2 text-sm">{service.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/services/hero1.jpg"
                alt="Medical cleaning process"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Our Medical Cleaning Process</h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'On-Site Assessment', desc: 'We assess your facility\'s layout, patient volume, high-risk zones and specific infection control requirements.' },
                  { step: '2', title: 'Custom Cleaning Protocol', desc: 'A written cleaning protocol is created for each room type — consultation rooms, waiting areas, bathrooms, kitchens — with specified products and procedures.' },
                  { step: '3', title: 'Trained Staff Assigned', desc: 'Police-checked, infection-control-trained cleaners are assigned to your practice. The same team each visit ensures familiarity with your layout and protocols.' },
                  { step: '4', title: 'Service Confirmation', desc: 'After every clean, a digital service report is sent to your practice manager confirming completion and listing any items requiring attention.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-blueprimary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{item.step}</div>
                    <div>
                      <h4 className="font-semibold text-darkblue text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Medical Cleaning</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-darkblue mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blueprimary to-darkblue text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get a Free Medical Cleaning Quote</h2>
          <p className="text-xl text-blue-100 mb-8">On-site assessment, written protocol and fixed quote within 24 hours. After-hours service available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
