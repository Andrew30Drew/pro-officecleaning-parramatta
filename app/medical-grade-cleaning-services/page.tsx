import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Grade Cleaning Services Sydney NSW | TGA-Approved Disinfection | Pro Clean Corp',
  description: 'Medical grade cleaning services across Sydney NSW. TGA-approved disinfectants, infection control protocols, and clinical-standard sanitisation for healthcare, dental, and high-risk facilities. Call 1300 494 983.',
  keywords: [
    'medical grade cleaning services',
    'medical grade cleaning Sydney',
    'TGA approved cleaning Sydney',
    'clinical grade disinfection NSW',
    'hospital grade cleaning services Sydney',
    'infection control cleaning Sydney',
    'healthcare cleaning services NSW',
    'medical standard cleaning company',
    'Pro Clean Corp medical grade'
  ],
  openGraph: {
    title: 'Medical Grade Cleaning Services Sydney | Pro Clean Corp',
    description: 'TGA-approved medical grade cleaning with infection control protocols for healthcare, dental and high-risk facilities across Sydney NSW.',
    url: '/medical-grade-cleaning-services',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Medical Grade Cleaning Services Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Grade Cleaning Services Sydney | Pro Clean Corp',
    description: 'TGA-approved medical grade cleaning with infection control for healthcare and high-risk facilities across Sydney NSW.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/medical-grade-cleaning-services' }
};

export default function MedicalGradeCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Grade Cleaning Services Sydney"
        serviceDescription="TGA-approved medical grade cleaning services with infection control protocols for healthcare, dental, and high-risk facilities across Sydney NSW."
        serviceUrl="/medical-grade-cleaning-services"
        serviceType="Medical Grade Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Clinical Disinfection',
          'Infection Control Cleaning',
          'Healthcare Facility Sanitisation',
          'Dental Clinic Cleaning',
          'High-Risk Area Decontamination',
          'TGA-Approved Product Application'
        ]}
        faqs={[
          {
            question: 'What is medical grade cleaning?',
            answer: 'Medical grade cleaning is a higher standard of cleaning and disinfection that uses TGA-registered hospital-grade disinfectants, follows clinical infection control protocols, and applies colour-coded equipment to prevent cross-contamination. It is required in healthcare environments where patients and staff face elevated infection risks.'
          },
          {
            question: 'What facilities require medical grade cleaning?',
            answer: 'Medical grade cleaning is required in GP clinics, specialist medical centres, dental practices, allied health facilities, pathology laboratories, day procedure centres, aged care facilities, and any commercial space where infection control is a regulatory or safety requirement.'
          },
          {
            question: 'How does medical grade cleaning differ from regular commercial cleaning?',
            answer: 'Medical grade cleaning uses hospital-grade disinfectants that kill a broader spectrum of pathogens including blood-borne viruses, requires staff trained in clinical protocols and PPE, follows defined cleaning frequencies for clinical zones, and uses colour-coded equipment to prevent cross-contamination between areas.'
          },
          {
            question: 'Do you use eco-friendly medical grade products?',
            answer: 'Yes. Where possible, we use TGA-registered disinfectants that meet both clinical efficacy and environmental standards. These products are effective against pathogens without unnecessary chemical residue, reducing environmental impact while maintaining healthcare-grade performance.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                TGA-Approved Products
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Medical Grade Cleaning Services Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Clinical-standard disinfection using TGA-approved hospital-grade products and strict infection control protocols. Protecting staff, patients, and visitors across Sydney healthcare and high-risk facilities.
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
                <span>✓ ARTG-Listed Disinfectants</span>
                <span>✓ Colour-Coded Equipment</span>
                <span>✓ Infection Control Trained</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/medical.webp"
                alt="Medical grade cleaning services Sydney - TGA approved disinfection"
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
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Medical grade cleaning services</strong> use TGA-registered hospital-grade disinfectants and clinical infection control protocols to achieve a higher standard of hygiene than regular commercial cleaning — essential for GP clinics, dental practices, allied health centres, and any facility where patient safety depends on contamination control.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">What Are Medical Grade Cleaning Services?</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Medical grade cleaning is a specialised tier of commercial cleaning that goes beyond routine sanitisation. Using ARTG-listed disinfectants and following clinical infection control standards, our teams eliminate bacteria, viruses, fungi, and other pathogens from surfaces in healthcare and high-risk environments.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Unlike standard commercial cleaning, medical grade work requires staff trained in PPE protocols, cross-contamination prevention using colour-coded equipment systems, and documented procedures for different clinical zones — from reception areas to treatment rooms and clinical waste stations.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Who Needs Medical Grade Cleaning?</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Any facility where the risk of healthcare-associated infection (HAI) must be actively managed requires medical grade cleaning. This includes GP and specialist clinics, dental practices, physio and allied health centres, aged care facilities, and even corporate offices that need elevated disinfection standards post-illness or post-event.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/faq3.jpg"
                alt="Medical grade cleaning technician Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Medical Grade Standards</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ TGA/ARTG disinfectants</li>
                  <li>✓ Hospital-grade efficacy</li>
                  <li>✓ Colour-coded protocols</li>
                  <li>✓ PPE-compliant teams</li>
                  <li>✓ Documented procedures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service types grid */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Medical Grade Cleaning Applications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'GP & specialist clinic disinfection',
                'Dental surgery sanitisation',
                'Allied health practice cleaning',
                'Pathology lab cleaning',
                'Aged care facility sanitisation',
                'Day procedure centre cleaning',
                'Post-illness deep disinfection',
                'COVID-19 & outbreak response',
                'High-touch point disinfection',
                'Clinical waste area cleaning',
                'Sterile zone maintenance',
                'Healthcare common area cleaning'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Related Medical Cleaning Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Medical Centre Cleaning', sub: 'GP & specialist clinics', href: '/medical-centre-cleaning' },
                { label: 'Hospital Grade Cleaning', sub: 'Maximum disinfection', href: '/hospital-grade-cleaning-services' },
                { label: 'Healthcare Office Cleaning', sub: 'Admin & clinical mix', href: '/office-cleaning-sydney' },
                { label: 'Commercial Cleaning', sub: 'All business types', href: '/commercial-cleaning-sydney' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                  <span className="font-bold text-gray-700 group-hover:text-blueprimary block mb-2">{item.label}</span>
                  <span className="text-xs text-gray-500">{item.sub}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Medical Grade Cleaning</h3>
            <div className="space-y-6">
              {[
                {
                  question: 'What is medical grade cleaning?',
                  answer: 'Medical grade cleaning is a higher standard of cleaning and disinfection using TGA-registered hospital-grade disinfectants, clinical infection control protocols, and colour-coded equipment to prevent cross-contamination. Required in healthcare environments where patients and staff face elevated infection risks.'
                },
                {
                  question: 'What facilities require medical grade cleaning?',
                  answer: 'Medical grade cleaning is required in GP clinics, specialist medical centres, dental practices, allied health facilities, pathology laboratories, day procedure centres, aged care facilities, and any commercial space where infection control is a regulatory or safety requirement.'
                },
                {
                  question: 'How does medical grade cleaning differ from regular commercial cleaning?',
                  answer: 'Medical grade cleaning uses hospital-grade disinfectants that kill a broader spectrum of pathogens, requires staff trained in clinical protocols and PPE, follows defined cleaning frequencies for clinical zones, and uses colour-coded equipment to prevent cross-contamination between areas.'
                },
                {
                  question: 'Do you use eco-friendly medical grade products?',
                  answer: 'Yes. Where possible, we use TGA-registered disinfectants that meet both clinical efficacy and environmental standards. These products are effective against pathogens without unnecessary chemical residue, balancing environmental impact with healthcare-grade performance.'
                }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.question}</h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Medical Grade Cleaning Services — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Elevate your facility&apos;s hygiene standard with certified medical grade cleaning. TGA-approved products, trained teams, flexible scheduling.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              Call 1300 494 983 for Your Free Cleaning Assessment
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
