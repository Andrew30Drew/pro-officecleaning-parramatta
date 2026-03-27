import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Healthcare Cleaning Services Sydney | Medical Facility Hygiene NSW | Pro Clean Corp',
  description: 'Specialist healthcare cleaning services across Sydney NSW. Infection control protocols, TGA-registered disinfectants, IPC-trained staff for hospitals, clinics, and allied health facilities. Call 1300 494 983.',
  keywords: ['healthcare cleaning services', 'healthcare cleaning Sydney', 'medical facility cleaning NSW', 'healthcare hygiene services', 'IPC cleaning Sydney'],
  openGraph: { title: 'Healthcare Cleaning Services Sydney | Pro Clean Corp', description: 'Specialist healthcare cleaning with IPC protocols and TGA disinfectants across Sydney.', url: '/healthcare-cleaning-services', type: 'website', images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Healthcare Cleaning Services Sydney' }] },
  twitter: { card: 'summary_large_image', title: 'Healthcare Cleaning Services Sydney | Pro Clean Corp', description: 'IPC-compliant healthcare cleaning services across all Sydney suburbs.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: '/healthcare-cleaning-services' }
};

export default function HealthcareCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData serviceName="Healthcare Cleaning Services" serviceDescription="Pro Clean Corp provides specialist healthcare cleaning services across Sydney NSW using IPC protocols and TGA-registered disinfectants for hospitals, medical centres, clinics and allied health facilities." serviceUrl="/healthcare-cleaning-services" serviceType="Healthcare Cleaning" price="$$$" additionalServices={['Hospital Cleaning', 'Medical Centre Cleaning', 'Clinic Disinfection', 'Allied Health Cleaning', 'IPC Compliance Cleaning', 'After-Hours Healthcare Cleaning']} faqs={[{ question: 'What are healthcare cleaning services?', answer: 'Healthcare cleaning services are specialised cleaning programs designed for medical and health facilities. They use TGA-registered disinfectants, IPC protocols, colour-coded equipment, and trained staff to prevent cross-contamination and healthcare-associated infections.' }, { question: 'How are healthcare cleaning services different from regular commercial cleaning?', answer: 'Healthcare cleaning follows infection prevention and control guidelines, uses hospital-grade disinfectants, applies documented cleaning protocols for clinical zones, and requires staff trained in standard and transmission-based precautions. Regular commercial cleaning lacks these clinical safety measures.' }]} />
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">IPC Certified Healthcare Specialists</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Healthcare Cleaning Services Sydney</h1>
              <p className="text-xl mb-8 text-gray-100">Pro Clean Corp delivers specialist healthcare cleaning services across Sydney NSW. IPC-trained teams, TGA-registered disinfectants, and documented protocols to protect patients, staff, and visitors in every healthcare setting.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Get a Free Quote</a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ TGA-Registered Products</span><span>✓ IPC Certified Teams</span><span>✓ 24/7 Available</span>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/medical.webp" alt="Healthcare cleaning services Sydney" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4"><div className="text-2xl font-bold text-blueprimary">200+</div><div className="text-xs text-gray-500">Healthcare Facilities Served</div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium"><strong>Healthcare cleaning services</strong> from Pro Clean Corp are designed specifically for the unique hygiene demands of medical and health facilities — using TGA-registered disinfectants, IPC-trained staff, and colour-coded equipment systems to prevent cross-contamination and protect patient safety across all Sydney healthcare settings.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Healthcare Cleaning — Sydney NSW</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Healthcare environments demand cleaning standards far beyond what standard commercial cleaning companies provide. Every surface in a clinical setting is a potential vector for healthcare-associated infections (HAIs) — and preventing those infections starts with a cleaning program built on proper infection prevention and control (IPC) principles.</p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Pro Clean Corp healthcare cleaning teams are trained in standard precautions, transmission-based precautions, correct disinfectant selection and dwell times, PPE protocols, and colour-coded equipment systems. We serve hospitals, medical centres, GP clinics, specialist practices, allied health facilities, and day surgeries across all of Sydney NSW.</p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Healthcare Facilities We Service</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Hospitals & day surgeries', 'GP & bulk billing clinics', 'Specialist medical centres', 'Allied health practices', 'Pathology & radiology centres', 'Aged care facilities', 'Mental health services', 'Community health centres'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">{item}</span></div>
                ))}
              </div>
            </div>
            <div>
              <Image src="/images/services/hero4.jpg" alt="Healthcare cleaning team Sydney" className="rounded-xl shadow-lg w-full h-64 object-cover mb-6" width={400} height={256} loading="lazy" />
              <div className="bg-greenprimary/10 p-6 rounded-xl border border-greenprimary/20">
                <h4 className="font-bold text-darkblue mb-3">IPC Standards We Follow</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  {['Standard precautions', 'Colour-coded systems', 'TGA-listed products', 'Documented checklists', 'PPE compliance', 'Correct dwell times'].map((item, i) => <li key={i}>✓ {item}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Healthcare Cleaning Services Included</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {['Waiting room & reception sanitisation', 'Consultation room disinfection', 'Treatment room deep clean', 'Bathroom & toilet cleaning', 'Clinical waste area cleaning', 'High-touch point disinfection', 'Floor mopping with TGA products', 'Staff room & kitchen cleaning', 'Air vent & surface dusting', 'Glass & mirror cleaning', 'Bin replacement & sanitisation', 'After-hours scheduled cleaning'].map((item, i) => (
                <div key={i} className="flex items-center space-x-2"><div className="w-5 h-5 bg-greenprimary rounded-full flex items-center justify-center flex-shrink-0"><span className="text-white text-xs">✓</span></div><span className="text-gray-700 text-sm">{item}</span></div>
              ))}
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Healthcare Cleaning Services</h3>
            <div className="space-y-4">
              {[
                { q: 'What are healthcare cleaning services?', a: 'Healthcare cleaning services are specialised programs for medical and health facilities using TGA-registered disinfectants, IPC protocols, and trained staff to prevent cross-contamination and healthcare-associated infections.' },
                { q: 'Are your healthcare cleaners IPC trained?', a: 'Yes. All Pro Clean Corp healthcare cleaning staff complete IPC training covering standard precautions, PPE use, colour-coded equipment, chemical handling, and correct disinfection dwell times.' },
                { q: 'Can you clean our healthcare facility after hours?', a: 'Yes. We specialise in after-hours healthcare cleaning so your facility is fully clean and ready for patients each morning without disrupting clinical operations.' },
                { q: 'What disinfectants do you use in healthcare facilities?', a: 'We use TGA-registered disinfectants with documented efficacy against bacteria, viruses, and fungi including MRSA, VRE, Norovirus, and C. difficile. Products are selected based on surface type and clinical area risk.' }
              ].map((faq, i) => <div key={i} className="bg-gray-50 rounded-xl p-6"><h4 className="font-bold text-darkblue mb-2">{faq.q}</h4><p className="text-gray-700">{faq.a}</p></div>)}
            </div>
          </div>
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Specialist Healthcare Cleaning Services — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">Protect your patients, staff, and facility with Pro Clean Corp&apos;s IPC-compliant healthcare cleaning. Call today for a free assessment.</p>
            <div className="text-2xl font-bold text-greenprimary">1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
