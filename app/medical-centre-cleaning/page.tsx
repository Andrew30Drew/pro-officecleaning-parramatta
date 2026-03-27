import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Centre Cleaning Sydney | Professional Healthcare Facility Cleaners | Pro Clean Corp',
  description: 'Certified medical centre cleaning services in Sydney. Hospital-grade disinfection, infection control protocols, and compliant cleaning for GP clinics, specialist rooms & healthcare facilities. Call 1300 494 983.',
  keywords: [
    'medical centre cleaning',
    'medical centre cleaning Sydney',
    'GP clinic cleaning Sydney',
    'healthcare facility cleaning',
    'medical cleaning services NSW',
    'clinical cleaning Sydney',
    'infection control cleaning',
    'medical grade cleaning services',
    'doctor office cleaning Sydney',
    'Pro Clean Corp medical cleaning'
  ],
  openGraph: {
    title: 'Medical Centre Cleaning Sydney | Pro Clean Corp',
    description: 'Certified medical centre cleaning services in Sydney. Hospital-grade disinfection and infection control for GP clinics and specialist rooms.',
    url: '/medical-centre-cleaning',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Medical Centre Cleaning Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Centre Cleaning Sydney | Pro Clean Corp',
    description: 'Certified medical centre cleaning with hospital-grade disinfection and infection control protocols across Sydney.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/medical-centre-cleaning' }
};

const serviceAreas = [
  { name: 'North Sydney', slug: 'medical-cleaning-north-sydney' },
  { name: 'Parramatta', slug: 'office-cleaning-parramatta' },
  { name: 'Hornsby', slug: 'medical-cleaning-hornsby' },
  { name: 'Hurstville', slug: 'medical-cleaning-hurstville' },
  { name: 'Eastern Suburbs', slug: 'medical-cleaning-eastern-suburbs' },
  { name: 'Campbelltown', slug: 'medical-cleaning-campbelltown' },
  { name: 'Newcastle', slug: 'medical-centre-cleaning-newcastle' },
  { name: 'Bankstown', slug: 'office-cleaning-bankstown' },
  { name: 'Chatswood', slug: 'office-cleaning-artarmon' },
  { name: 'Sydney CBD', slug: 'office-cleaning-sydney' },
];

export default function MedicalCentreCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Centre Cleaning Sydney"
        serviceDescription="Certified medical centre cleaning services in Sydney with hospital-grade disinfection and infection control protocols for GP clinics, specialist rooms and healthcare facilities."
        serviceUrl="/medical-centre-cleaning"
        serviceType="Medical Centre Cleaning"
        price="$$-$$$"
        additionalServices={[
          'GP Clinic Cleaning',
          'Specialist Room Cleaning',
          'Reception & Waiting Area Cleaning',
          'Treatment Room Disinfection',
          'Medical Waste Area Cleaning',
          'Pathology Lab Cleaning'
        ]}
        faqs={[
          {
            question: 'What does medical centre cleaning involve?',
            answer: 'Medical centre cleaning involves hospital-grade disinfection of all patient contact surfaces, treatment rooms, reception areas, waiting rooms, restrooms, and back-of-house areas using TGA-approved disinfectants and strict infection control protocols compliant with Australian healthcare standards.'
          },
          {
            question: 'How often should a medical centre be cleaned?',
            answer: 'Medical centres should be cleaned daily with high-touch surfaces disinfected multiple times per day. Treatment rooms require cleaning and disinfection between each patient. Deep cleaning of the entire facility should occur weekly, with periodic specialist cleans for equipment and hard-to-reach areas.'
          },
          {
            question: 'Are your cleaners trained in infection control?',
            answer: 'Yes. All Pro Clean Corp medical cleaning staff are trained in infection control procedures, personal protective equipment use, correct chemical handling, and Australian healthcare cleaning standards. Our teams hold relevant compliance certifications for clinical environments.'
          },
          {
            question: 'Do you clean outside business hours?',
            answer: 'Absolutely. We offer flexible scheduling including early morning, evening, and weekend cleaning to minimise disruption to patients and medical staff. Emergency and after-hours cleaning is also available for urgent situations.'
          },
          {
            question: 'What disinfectants do you use in medical centres?',
            answer: 'We use TGA-registered, hospital-grade disinfectants appropriate for medical environments. These products meet ARTG requirements for killing bacteria, viruses, and fungi, including blood-borne pathogen protocols required for clinical spaces.'
          },
          {
            question: 'Do you provide cleaning for specialist medical clinics?',
            answer: 'Yes. We clean all types of medical facilities including GP practices, specialist clinics, allied health centres, dental practices, pathology collection centres, physiotherapy practices, and day procedure centres across Sydney NSW.'
          }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Certified Medical Cleaners
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Medical Centre Cleaning Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides certified medical centre cleaning across Sydney with hospital-grade disinfection, TGA-approved products, and strict infection control protocols — keeping your patients and staff safe.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Free Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ TGA-Approved Disinfectants</span>
                <span>✓ Infection Control Trained</span>
                <span>✓ Fully Insured</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/medical.webp"
                alt="Medical centre cleaning Sydney - Hospital grade disinfection"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">4.9★</div>
                <div className="text-xs text-gray-500">1,200+ Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF Content Block */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Medical centre cleaning</strong> is a specialised cleaning service that uses hospital-grade disinfectants and infection control protocols to sanitise GP clinics, specialist rooms, waiting areas, and treatment spaces — protecting patients, staff, and visitors from healthcare-associated infections.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Medical Centre Cleaning Services in Sydney</h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Medical centres have zero tolerance for unhygienic conditions. As a healthcare provider, your facility must meet strict Australian infection control standards — and the right commercial cleaning partner is critical to achieving that compliance every single day.
                </p>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp&apos;s medical centre cleaning teams are trained in clinical hygiene protocols, use TGA-approved hospital-grade disinfectants, and follow step-by-step procedures designed specifically for healthcare environments. We service GP clinics, specialist medical practices, allied health centres, dental offices, and multi-practitioner facilities across Sydney.
                </p>
                <h3 className="text-2xl font-bold text-darkblue mb-4">Why Medical Cleaning is Different</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Unlike standard office cleaning, medical centre cleaning requires specialised knowledge of cross-contamination risks, correct PPE usage, clinical waste handling, and the use of disinfectants that meet ARTG listing requirements. Our teams understand the difference — and follow strict colour-coded cleaning protocols to prevent the spread of infection.
                </p>
              </div>
              <div>
                <Image
                  src="/images/services/faq5.jpg"
                  alt="Medical cleaning team using hospital-grade products"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
                <div className="bg-blueprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Medical Cleaning Standards</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ TGA-registered disinfectants</li>
                    <li>✓ Colour-coded equipment</li>
                    <li>✓ Full PPE compliance</li>
                    <li>✓ Clinical waste protocols</li>
                    <li>✓ Patient area between-clean</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">What Our Medical Centre Cleaning Covers</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Waiting room & reception cleaning',
                  'Treatment room disinfection',
                  'Consulting room sanitisation',
                  'Medical equipment surface wipe-down',
                  'High-touch point disinfection',
                  'Restroom & change room cleaning',
                  'Kitchen & staff areas',
                  'Floor mopping with disinfectant',
                  'Clinical waste station cleaning',
                  'Window & blind dusting',
                  'Entry glass & door handle cleaning',
                  'Medical record storage areas'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Medical Centre Cleaning Service Areas — Sydney</h3>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                We clean medical centres and healthcare facilities across all major Sydney regions. Find your nearest team:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/${area.slug}`}
                    className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Services */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Related Healthcare Cleaning Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link href="/hospital-grade-cleaning-services" className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                  <span className="font-bold text-gray-700 group-hover:text-blueprimary block mb-2">Hospital Grade Cleaning</span>
                  <span className="text-xs text-gray-500">Maximum disinfection</span>
                </Link>
                <Link href="/medical-grade-cleaning-services" className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                  <span className="font-bold text-gray-700 group-hover:text-blueprimary block mb-2">Medical Grade Cleaning</span>
                  <span className="text-xs text-gray-500">Clinical standard</span>
                </Link>
                <Link href="/office-cleaning-sydney" className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                  <span className="font-bold text-gray-700 group-hover:text-blueprimary block mb-2">Office Cleaning</span>
                  <span className="text-xs text-gray-500">Workplace hygiene</span>
                </Link>
                <Link href="/commercial-cleaning-sydney" className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                  <span className="font-bold text-gray-700 group-hover:text-blueprimary block mb-2">Commercial Cleaning</span>
                  <span className="text-xs text-gray-500">All facility types</span>
                </Link>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">How Much Does Medical Centre Cleaning Cost in Sydney?</h3>
              <p className="text-center text-gray-600 mb-8">Pricing based on facility size, number of treatment rooms, and cleaning frequency.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-blueprimary text-white">
                      <th className="p-4 rounded-tl-lg font-semibold">Facility Type</th>
                      <th className="p-4 font-semibold">Estimated Cost Per Visit</th>
                      <th className="p-4 rounded-tr-lg font-semibold">Includes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: 'Solo GP Clinic (1–2 rooms)', cost: '$180 – $320', includes: 'Waiting, consult, restroom' },
                      { type: 'Group Practice (3–6 rooms)', cost: '$320 – $550', includes: 'All clinical & admin areas' },
                      { type: 'Specialist Centre (6–12 rooms)', cost: '$550 – $900', includes: 'Treatment, labs, recovery' },
                      { type: 'Large Medical Facility', cost: 'Custom quote', includes: 'Full site management' },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-4 font-medium text-darkblue">{row.type}</td>
                        <td className="p-4 font-bold text-greenprimary text-lg">{row.cost}</td>
                        <td className="p-4 text-gray-600">{row.includes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">* Prices vary based on cleaning frequency, scope, and specific infection control requirements. Daily contracts receive discounted rates.</p>
              <div className="text-center mt-6">
                <a href="/contact-us" className="inline-block bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get Your Free Medical Centre Cleaning Quote →
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Medical Centre Cleaning</h3>
              <div className="space-y-6">
                {[
                  {
                    question: 'What does medical centre cleaning involve?',
                    answer: 'Medical centre cleaning involves hospital-grade disinfection of all patient contact surfaces, treatment rooms, reception areas, waiting rooms, restrooms, and back-of-house areas using TGA-approved disinfectants and strict infection control protocols compliant with Australian healthcare standards.'
                  },
                  {
                    question: 'How often should a medical centre be cleaned?',
                    answer: 'Medical centres should be cleaned daily with high-touch surfaces disinfected multiple times per day. Treatment rooms require cleaning between each patient. Deep cleaning should occur weekly, with periodic specialist cleans for equipment and hard-to-reach areas.'
                  },
                  {
                    question: 'Are your cleaners trained in infection control?',
                    answer: 'Yes. All Pro Clean Corp medical cleaning staff hold infection control training, know proper PPE protocols, handle chemicals correctly, and are trained to Australian healthcare cleaning standards with relevant compliance certifications for clinical environments.'
                  },
                  {
                    question: 'Do you clean outside business hours?',
                    answer: 'Absolutely. We offer flexible scheduling including early morning, evening, and weekend cleaning to minimise disruption to patients and medical staff. Emergency and after-hours cleaning is also available for urgent situations.'
                  },
                  {
                    question: 'What disinfectants do you use in medical centres?',
                    answer: 'We use TGA-registered, hospital-grade disinfectants appropriate for medical environments. These products meet ARTG requirements for killing bacteria, viruses, and fungi, including blood-borne pathogen protocols required for clinical spaces.'
                  },
                  {
                    question: 'Do you provide cleaning for specialist medical clinics?',
                    answer: 'Yes. We clean all types of medical facilities including GP practices, specialist clinics, allied health centres, dental practices, pathology collection centres, physiotherapy practices, and day procedure centres across Sydney NSW.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-darkblue mb-2">{faq.question}</h4>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Certified Medical Centre Cleaning — Sydney NSW</h3>
              <p className="text-xl mb-6 text-gray-100">
                Protect your patients and staff with compliant, hospital-grade cleaning for your medical centre. Expert teams available 7 days a week.
              </p>
              <div className="text-2xl font-bold text-greenprimary">
                Call 1300 494 983 for a Free Medical Cleaning Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
