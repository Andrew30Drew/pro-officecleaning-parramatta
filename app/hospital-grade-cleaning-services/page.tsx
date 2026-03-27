import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Hospital Grade Cleaning Services Sydney NSW | Maximum Disinfection | Pro Clean Corp',
  description: 'Hospital grade cleaning services in Sydney NSW. Maximum-level disinfection using ARTG-listed products for healthcare, aged care, high-risk commercial, and outbreak response scenarios. Call 1300 494 983.',
  keywords: [
    'hospital grade cleaning services',
    'hospital grade cleaning Sydney',
    'hospital grade disinfection NSW',
    'ARTG listed cleaning Sydney',
    'maximum disinfection services Sydney',
    'clinical grade cleaning services',
    'hospital cleaning services Sydney',
    'healthcare grade sanitisation NSW',
    'Pro Clean Corp hospital grade cleaning'
  ],
  openGraph: {
    title: 'Hospital Grade Cleaning Services Sydney | Pro Clean Corp',
    description: 'Maximum-level disinfection using ARTG-listed products for healthcare, aged care and high-risk facilities across Sydney NSW.',
    url: '/hospital-grade-cleaning-services',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Hospital Grade Cleaning Services Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospital Grade Cleaning Services Sydney | Pro Clean Corp',
    description: 'Maximum disinfection with ARTG-listed products for healthcare and high-risk facilities in Sydney.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/hospital-grade-cleaning-services' }
};

export default function HospitalGradeCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Hospital Grade Cleaning Services Sydney"
        serviceDescription="Maximum-level disinfection services using ARTG-listed hospital grade products for healthcare, aged care, and high-risk commercial facilities across Sydney NSW."
        serviceUrl="/hospital-grade-cleaning-services"
        serviceType="Hospital Grade Cleaning"
        price="$$$-$$$$"
        additionalServices={[
          'Terminal Cleaning',
          'Outbreak Response Cleaning',
          'Isolation Room Decontamination',
          'Aged Care Facility Sanitisation',
          'High-Risk Zone Cleaning',
          'Post-Infection Deep Clean'
        ]}
        faqs={[
          {
            question: 'What is hospital grade cleaning?',
            answer: 'Hospital grade cleaning refers to the highest standard of cleaning and disinfection, using ARTG-listed disinfectants with proven efficacy against bacteria, viruses, fungi, and spores. It follows clinical infection control procedures including full PPE, colour-coded equipment, and documented protocols — the same standard used in hospital environments to prevent healthcare-associated infections.'
          },
          {
            question: 'When do I need hospital grade cleaning?',
            answer: 'Hospital grade cleaning is required in healthcare facilities, aged care homes, and any environment where an infection outbreak has occurred or where vulnerable people are present. It is also used for post-COVID cleaning, post-illness decontamination of commercial premises, and high-risk industrial or food processing environments.'
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
                Maximum Disinfection Standard
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Hospital Grade Cleaning Services Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp delivers hospital grade cleaning services across Sydney NSW — maximum-level disinfection using ARTG-listed products for healthcare facilities, aged care, post-outbreak decontamination, and any high-risk environment where standard cleaning is not enough.
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
                <span>✓ ARTG-Listed Products</span>
                <span>✓ Full PPE Protocols</span>
                <span>✓ Emergency Response Available</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/medical.webp"
                alt="Hospital grade cleaning services Sydney - Maximum disinfection"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-sm font-bold text-blueprimary">ARTG Listed</div>
                <div className="text-xs text-gray-500">Disinfection Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Hospital grade cleaning services</strong> provide the highest level of disinfection available — using ARTG-registered disinfectants that kill bacteria, viruses, fungi, and spores. This standard is required in healthcare facilities and used in post-outbreak decontamination, aged care environments, and any setting where infection control is critical.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Hospital Grade Disinfection Services — Sydney NSW</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Hospital grade cleaning is the gold standard in disinfection. Developed for clinical environments where patient safety depends on eliminating all pathogenic organisms from surfaces, this level of cleaning uses products with proven broad-spectrum efficacy — including against blood-borne pathogens, MRSA, C. difficile, norovirus, and other healthcare-associated infection risks.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp&apos;s hospital grade cleaning teams are equipped with ARTG-listed disinfectants, full PPE, colour-coded cleaning equipment to prevent cross-contamination, and documented cleaning protocols for different risk zones. We provide hospital grade services to healthcare facilities, aged care homes, commercial offices post-outbreak, schools, and any environment requiring maximum-level decontamination.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">When Hospital Grade Cleaning is Required</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Hospital grade cleaning is essential after infectious disease outbreaks, when setting up new healthcare spaces, following confirmed COVID or gastro cases in commercial premises, and as a routine standard in aged care and medical facilities. It is also used for terminal cleans — comprehensive decontamination of rooms after patient discharge.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/faq3.jpg"
                alt="Hospital grade disinfection team Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Hospital Grade Standard</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ ARTG-registered products</li>
                  <li>✓ Broad-spectrum efficacy</li>
                  <li>✓ Full PPE protocols</li>
                  <li>✓ Colour-coded equipment</li>
                  <li>✓ Documented procedures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Hospital Grade Cleaning Applications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Terminal room cleaning & disinfection',
                'Post-outbreak decontamination',
                'Isolation room cleaning',
                'Aged care facility sanitisation',
                'Medical centre disinfection',
                'Operating theatre preparation',
                'Post-COVID commercial decontamination',
                'Gastro outbreak response',
                'High-risk zone maintenance',
                'Clinical waste area disinfection',
                'Quarantine area cleaning',
                'Emergency response cleans'
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
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Related Healthcare Cleaning Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Medical Grade Cleaning', sub: 'Clinical standard', href: '/medical-grade-cleaning-services' },
                { label: 'Medical Centre Cleaning', sub: 'GP & specialist clinics', href: '/medical-centre-cleaning' },
                { label: 'Healthcare Office Cleaning', sub: 'Admin & clinical areas', href: '/office-cleaning-sydney' },
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
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Hospital Grade Cleaning</h3>
            <div className="space-y-6">
              {[
                { q: 'What is hospital grade cleaning?', a: 'Hospital grade cleaning refers to the highest standard of cleaning and disinfection, using ARTG-listed disinfectants with proven efficacy against bacteria, viruses, fungi, and spores. It follows clinical infection control procedures including full PPE, colour-coded equipment, and documented protocols — the same standard used in hospitals to prevent healthcare-associated infections.' },
                { q: 'When do I need hospital grade cleaning?', a: 'Hospital grade cleaning is required in healthcare facilities, aged care homes, and any environment where an infection outbreak has occurred or vulnerable people are present. It is also used for post-COVID cleaning, post-illness decontamination of commercial premises, and high-risk industrial or food processing environments.' },
                { q: 'How is hospital grade cleaning different from standard commercial cleaning?', a: 'Standard commercial cleaning focuses on appearance and general hygiene using everyday cleaning products. Hospital grade cleaning uses ARTG-registered disinfectants with proven pathogen kill rates, requires full PPE, follows strict infection control protocols, and targets both visible soiling and invisible pathogen contamination.' },
                { q: 'How quickly can you provide emergency hospital grade cleaning?', a: 'Pro Clean Corp offers emergency hospital grade cleaning response across Sydney. For outbreak situations or urgent decontamination requirements, call 1300 494 983 directly for priority response. We can mobilise trained teams quickly for urgent healthcare or commercial scenarios.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Hospital Grade Cleaning Services — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Maximum-level disinfection for healthcare, aged care, and high-risk commercial environments. ARTG-listed products, trained teams, emergency response available.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              Call 1300 494 983 for Hospital Grade Cleaning
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
