import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Hospital Disinfection Services Sydney | Healthcare Facility Disinfection NSW | Pro Clean Corp',
  description: 'Specialist hospital disinfection services in Sydney NSW. TGA-listed disinfectants, infection control protocols, terminal cleaning, and ongoing healthcare facility disinfection. Call 1300 494 983.',
  keywords: [
    'hospital disinfection services',
    'hospital disinfection Sydney',
    'healthcare disinfection services NSW',
    'hospital cleaning disinfection Sydney',
    'medical facility disinfection',
    'infection control disinfection Sydney',
    'terminal cleaning services Sydney'
  ],
  openGraph: {
    title: 'Hospital Disinfection Services Sydney | Pro Clean Corp',
    description: 'Specialist hospital disinfection using TGA-listed disinfectants and infection control protocols. Serving healthcare facilities across Sydney NSW.',
    url: '/hospital-disinfection-services',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Hospital Disinfection Services Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospital Disinfection Services Sydney | Pro Clean Corp',
    description: 'TGA-listed hospital disinfection across Sydney. Infection control certified teams, terminal cleaning, ongoing programs.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/hospital-disinfection-services' }
};

export default function HospitalDisinfectionServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Hospital Disinfection Services"
        serviceDescription="Pro Clean Corp provides specialist hospital disinfection services across Sydney NSW. Using TGA-listed disinfectants and strict infection prevention and control (IPC) protocols, we deliver terminal cleaning, outbreak response, and ongoing disinfection programs for hospitals and healthcare facilities."
        serviceUrl="/hospital-disinfection-services"
        serviceType="Hospital Disinfection"
        price="$$$"
        additionalServices={[
          'Terminal Cleaning', 'Outbreak Response Disinfection',
          'ICU & High-Risk Area Disinfection', 'Operating Theatre Cleaning',
          'Patient Room Disinfection', 'Common Area Disinfection',
          'Fogging & Electrostatic Disinfection', 'Isolation Room Cleaning'
        ]}
        faqs={[
          {
            question: 'What are hospital disinfection services?',
            answer: 'Hospital disinfection services are specialised cleaning and disinfection procedures carried out in healthcare facilities using TGA-listed disinfectants and infection prevention and control (IPC) protocols. They include terminal cleaning of patient rooms, high-level disinfection of clinical equipment areas, outbreak response, and ongoing environmental disinfection to prevent healthcare-associated infections (HAIs).'
          },
          {
            question: 'What disinfectants are used in hospital disinfection?',
            answer: 'Hospital disinfection services use TGA-listed (Therapeutic Goods Administration) disinfectants that are proven effective against hospital-relevant pathogens including MRSA, VRE, C. difficile, Norovirus, and COVID-19. Common active agents include quaternary ammonium compounds, hydrogen peroxide, chlorine-based products, and peracetic acid formulations — selected based on the surface type and pathogen risk.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                TGA-Listed Disinfectants | IPC Certified
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Hospital Disinfection Services
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp delivers specialist hospital disinfection services across Sydney NSW. Our infection control-certified teams use TGA-listed disinfectants and strict IPC protocols for terminal cleaning, outbreak response, and ongoing healthcare facility disinfection programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Request a Disinfection Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ TGA-Listed Disinfectants</span>
                <span>✓ IPC Certified Teams</span>
                <span>✓ Outbreak Response</span>
                <span>✓ 24/7 Emergency Cleaning</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/medical.webp"
                alt="Hospital disinfection services Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-greenprimary rounded-xl shadow-lg p-4 text-white">
                <div className="text-2xl font-bold">99.99%</div>
                <div className="text-xs">Pathogen Elimination Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Hospital disinfection services</strong> from Pro Clean Corp use TGA-listed products proven effective against MRSA, VRE, C. difficile, Norovirus, and all major healthcare-associated pathogens. Our IPC-certified teams follow documented protocols that align with Australian infection prevention standards — protecting patients, staff, and visitors.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Specialist Hospital Disinfection — Sydney NSW</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Healthcare-associated infections (HAIs) are one of the most serious risks in any hospital or healthcare facility. Environmental contamination is a major contributing factor — and the quality of your disinfection program directly impacts patient safety outcomes. Pro Clean Corp&apos;s hospital disinfection services are designed specifically to address this risk.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We use TGA-listed disinfectants with documented efficacy data against hospital-relevant pathogens. Our teams are trained in infection prevention and control (IPC) including standard and transmission-based precautions, correct PPE use, and proper disinfection dwell times to ensure effective pathogen elimination — not just the appearance of cleanliness.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                We offer terminal cleaning programs, routine environmental disinfection, outbreak response services, and ongoing compliance support for hospitals, day surgery centres, and large medical facilities across Sydney NSW.
              </p>
            </div>
            <div className="space-y-6">
              <Image
                src="/images/hero/hero2.jpg"
                alt="Hospital disinfection team Sydney healthcare"
                className="rounded-2xl shadow-lg w-full h-56 object-cover"
                width={600}
                height={224}
                loading="lazy"
              />
              <div className="bg-greenprimary/10 p-6 rounded-xl border border-greenprimary/20">
                <h4 className="font-bold text-darkblue mb-3">Pathogens We Eliminate</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  {['MRSA', 'VRE', 'C. difficile', 'Norovirus', 'COVID-19', 'Hepatitis B & C', 'SARS-CoV-2', 'Pseudomonas'].map((p, i) => (
                    <span key={i} className="flex items-center space-x-1">
                      <span className="text-greenprimary text-xs">✓</span>
                      <span>{p}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Hospital Disinfection Service Types</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Terminal Cleaning',
                  desc: 'Complete, documented disinfection of patient rooms and clinical areas following patient discharge. Uses TGA-listed disinfectants at correct concentrations with full dwell time compliance.',
                  badge: 'HIGH PRIORITY'
                },
                {
                  title: 'Outbreak Response',
                  desc: 'Rapid deployment for known or suspected infectious outbreaks. Enhanced disinfection protocols, escalated frequency, and documented response records for infection control teams.',
                  badge: 'EMERGENCY'
                },
                {
                  title: 'Routine Environmental Disinfection',
                  desc: 'Ongoing daily/weekly disinfection programs covering patient rooms, corridors, waiting areas, bathrooms, and high-touch points throughout the facility.',
                  badge: 'ONGOING'
                },
                {
                  title: 'Electrostatic & Fogging Disinfection',
                  desc: 'Advanced disinfection technology for comprehensive surface coverage in complex environments including ICUs, isolation rooms, and operating theatres.',
                  badge: 'ADVANCED'
                },
              ].map((service, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-darkblue text-lg">{service.title}</h4>
                    <span className="text-xs font-bold text-greenprimary bg-greenprimary/10 px-2 py-1 rounded-full">{service.badge}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* IPC Standards */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Our IPC Compliance Standards</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: '📋', title: 'Documented Protocols', desc: 'Written procedures for every cleaning and disinfection task, specific to area risk level.' },
                { icon: '🧤', title: 'PPE Compliance', desc: 'Appropriate PPE for every clinical area including gloves, gowns, masks, and eye protection.' },
                { icon: '🎨', title: 'Colour-Coded Systems', desc: 'Colour-coded equipment prevents cross-contamination between clinical zones and clean areas.' },
                { icon: '⏱️', title: 'Correct Dwell Times', desc: 'Disinfectants applied at correct concentrations and allowed proper contact time for efficacy.' },
              ].map((item, i) => (
                <div key={i} className="bg-blueprimary/5 p-5 rounded-xl border border-blueprimary/10 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h4 className="font-bold text-darkblue mb-2 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Related Healthcare Cleaning Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: 'Hospital Grade Cleaning', href: '/hospital-grade-cleaning-services' },
                { name: 'Medical Centre Cleaning', href: '/medical-centre-cleaning' },
                { name: 'Medical Grade Cleaning', href: '/medical-grade-cleaning-services' },
                { name: 'Medical Cleaning Services', href: '/medical-centre-cleaning-services' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Hospital Disinfection Services</h3>
            <div className="space-y-6">
              {[
                { q: 'What are hospital disinfection services?', a: 'Hospital disinfection services are specialised cleaning and disinfection procedures using TGA-listed disinfectants and IPC protocols. They include terminal cleaning of patient rooms, outbreak response disinfection, routine environmental hygiene, and high-level disinfection of clinical contact surfaces to prevent healthcare-associated infections.' },
                { q: 'What disinfectants do you use for hospital disinfection?', a: 'We use TGA-listed disinfectants with documented efficacy against hospital pathogens including MRSA, VRE, C. difficile, and Norovirus. Active agents include quaternary ammonium compounds, hydrogen peroxide, and chlorine-based products selected based on surface type and pathogen risk profile.' },
                { q: 'Do your hospital disinfection teams have IPC training?', a: 'Yes. All Pro Clean Corp healthcare cleaning staff complete infection prevention and control (IPC) training covering standard precautions, transmission-based precautions, correct PPE use, chemical handling, and disinfection dwell time protocols. Training records are maintained and available for audit.' },
                { q: 'Can you respond to infectious outbreaks?', a: 'Yes. We provide rapid outbreak response disinfection services for Sydney healthcare facilities. Our teams can mobilise quickly with appropriate disinfectants, PPE, and protocols for known or suspected outbreaks including gastroenteritis, respiratory infections, and notifiable conditions.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Hospital Disinfection Services — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Protect your patients and staff with Pro Clean Corp&apos;s specialist hospital disinfection services. IPC-certified, TGA-compliant, operating 24/7 across Sydney.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              Call 1300 494 983 — Free Healthcare Disinfection Assessment
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
