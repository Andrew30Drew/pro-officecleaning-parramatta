import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Hospital Cleaning Companies Sydney | Best Hospital Cleaners NSW | Pro Clean Corp',
  description: 'Looking for hospital cleaning companies in Sydney? Pro Clean Corp is a trusted hospital cleaning company with IPC-trained teams, TGA disinfectants, and 15+ years experience. Call 1300 494 983.',
  keywords: ['hospital cleaning companies', 'hospital cleaning companies Sydney', 'hospital cleaning company NSW', 'best hospital cleaners Sydney', 'hospital cleaning service Sydney'],
  openGraph: { title: 'Hospital Cleaning Companies Sydney | Pro Clean Corp', description: 'Pro Clean Corp is one of Sydney\'s trusted hospital cleaning companies. IPC trained, TGA products, 15+ years experience.', url: '/hospital-cleaning-companies', type: 'website', images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Hospital Cleaning Companies Sydney' }] },
  twitter: { card: 'summary_large_image', title: 'Hospital Cleaning Companies Sydney | Pro Clean Corp', description: 'Trusted hospital cleaning company in Sydney NSW. IPC certified, TGA products, quality guaranteed.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: '/hospital-cleaning-companies' }
};

export default function HospitalCleaningCompaniesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData serviceName="Hospital Cleaning Companies Sydney" serviceDescription="Pro Clean Corp is one of Sydney's trusted hospital cleaning companies. We provide IPC-trained teams, TGA-registered disinfectants, and comprehensive hospital cleaning programs for public and private hospitals across NSW." serviceUrl="/hospital-cleaning-companies" serviceType="Hospital Cleaning" price="$$$" additionalServices={['Ward Cleaning', 'Operating Theatre Cleaning', 'ICU Disinfection', 'Emergency Department Cleaning', 'Outpatient Area Cleaning', 'Terminal Cleaning']} faqs={[{ question: 'What should I look for in hospital cleaning companies?', answer: 'Look for: IPC-trained staff, use of TGA-registered disinfectants, documented cleaning protocols, comprehensive public liability insurance, police-checked teams, quality management systems with audit trails, experience in hospital or healthcare environments, and flexible scheduling around clinical operations.' }, { question: 'How do hospital cleaning companies prevent cross-contamination?', answer: 'Professional hospital cleaning companies prevent cross-contamination through colour-coded cleaning equipment by zone (clinical vs non-clinical), single-use materials where required, strict PPE protocols, correct product selection and dwell times, and documented cleaning procedures that ensure every surface is addressed in the correct sequence.' }]} />
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Trusted Hospital Cleaning Company</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Hospital Cleaning Companies Sydney</h1>
              <p className="text-xl mb-8 text-gray-100">Pro Clean Corp is one of Sydney&apos;s trusted hospital cleaning companies. With IPC-trained teams, TGA-registered disinfectants, and documented protocols aligned with Australian healthcare standards, we deliver the standard of hospital cleaning that patient safety demands.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Request Assessment</a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ IPC Certified Teams</span><span>✓ TGA Products</span><span>✓ $20M Insurance</span><span>✓ 15yr Experience</span>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/medical.webp" alt="Hospital cleaning companies Sydney" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
              <div className="absolute -bottom-4 -left-4 bg-greenprimary rounded-xl shadow-lg p-4 text-white"><div className="text-2xl font-bold">15+</div><div className="text-xs">Years Hospital Cleaning</div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">When choosing between <strong>hospital cleaning companies</strong> in Sydney, the most important factors are IPC training standards, disinfectant quality, protocol documentation, and quality management — because in a hospital setting, the consequences of cleaning failures are measured in patient health outcomes.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">What Separates Good Hospital Cleaning Companies</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Not all hospital cleaning companies are equal. Here&apos;s what Pro Clean Corp does differently.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { title: 'IPC-Trained Staff', desc: 'All cleaning staff complete structured infection prevention and control training — not just a brief orientation. We maintain training records and provide refresher training annually.', icon: '🎓' },
              { title: 'TGA-Registered Disinfectants', desc: 'We only use disinfectants registered with the Therapeutic Goods Administration and documented to be effective against hospital-relevant pathogens at correct use concentrations.', icon: '🧪' },
              { title: 'Documented Protocols', desc: 'Written cleaning procedures for every hospital area, from ward rooms to operating theatres — with correct contact times, product selections, and cleaning sequences documented.', icon: '📋' },
              { title: 'Quality Audit System', desc: 'Regular supervisor audits using standardised assessment tools, with documented results and corrective action tracking. We provide quality reports to hospital management.', icon: '📊' },
              { title: 'Police-Checked Teams', desc: 'All staff are police-checked prior to working in any healthcare facility. Working with vulnerable patients demands the highest level of trust and screening.', icon: '🔒' },
              { title: '$20M Public Liability', desc: 'Comprehensive public liability insurance up to $20M — protecting the hospital and patients against any unforeseen incidents during cleaning operations.', icon: '🛡️' },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4 bg-gray-50 p-5 rounded-xl border border-gray-100">
                <div className="text-3xl">{item.icon}</div>
                <div><h3 className="font-bold text-darkblue mb-1">{item.title}</h3><p className="text-gray-600 text-sm">{item.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Related Healthcare Cleaning Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: 'Hospital Disinfection', href: '/hospital-disinfection-services' },
                { name: 'Hospital Grade Cleaning', href: '/hospital-grade-cleaning-services' },
                { name: 'Medical Centre Cleaning', href: '/medical-centre-cleaning' },
                { name: 'Healthcare Cleaning', href: '/healthcare-cleaning-services' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">{link.name}</Link>
              ))}
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Hospital Cleaning Companies Sydney</h3>
            <div className="space-y-4">
              {[
                { q: 'What should I look for in hospital cleaning companies?', a: 'Look for IPC-trained staff, TGA-registered disinfectants, documented cleaning protocols, comprehensive public liability insurance, police-checked teams, quality management systems, and proven healthcare facility experience.' },
                { q: 'How do hospital cleaning companies prevent cross-contamination?', a: 'Through colour-coded equipment by zone, single-use materials where required, strict PPE protocols, correct product selection with appropriate dwell times, and documented cleaning sequences ensuring every surface is addressed correctly.' },
                { q: 'What hospital areas do you clean?', a: 'We clean all hospital areas including patient wards, operating theatres (pre and post), ICU, emergency departments, outpatient areas, consulting rooms, pathology areas, staff zones, and external common areas.' },
                { q: 'Do you have experience with accreditation requirements?', a: 'Yes. Pro Clean Corp is familiar with Australian Commission on Safety and Quality in Health Care (ACSQHC) standards and National Safety and Quality Health Service (NSQHS) requirements. We provide documentation to support hospital accreditation processes.' }
              ].map((faq, i) => <div key={i} className="bg-gray-50 rounded-xl p-6"><h4 className="font-bold text-darkblue mb-2">{faq.q}</h4><p className="text-gray-700">{faq.a}</p></div>)}
            </div>
          </div>
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Sydney&apos;s Trusted Hospital Cleaning Company</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for a comprehensive hospital cleaning assessment. We service hospitals and healthcare facilities across all of Sydney NSW.</p>
            <div className="text-2xl font-bold text-greenprimary">1300 494 983 — Free Assessment</div>
          </div>
        </div>
      </section>
    </div>
  );
}
