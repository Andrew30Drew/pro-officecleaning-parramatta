import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Healthcare Office Cleaning Sydney | Medical Administration Cleaning NSW | Pro Clean Corp',
  description: 'Professional healthcare office cleaning across Sydney NSW. Clean, hygienic office environments for healthcare administration, back-of-house, and non-clinical medical office areas. Call 1300 494 983.',
  keywords: ['healthcare office cleaning', 'healthcare office cleaning Sydney', 'medical administration cleaning NSW', 'health sector office cleaning Sydney', 'non-clinical healthcare cleaning'],
  openGraph: { title: 'Healthcare Office Cleaning Sydney | Pro Clean Corp', description: 'Professional healthcare office cleaning for Sydney medical administration and non-clinical areas.', url: '/healthcare-office-cleaning', type: 'website', images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Healthcare Office Cleaning Sydney' }] },
  twitter: { card: 'summary_large_image', title: 'Healthcare Office Cleaning Sydney | Pro Clean Corp', description: 'Healthcare office cleaning for Sydney medical practices and health organisations.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: '/healthcare-office-cleaning' }
};

export default function HealthcareOfficeCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData serviceName="Healthcare Office Cleaning" serviceDescription="Pro Clean Corp provides professional healthcare office cleaning for Sydney medical administration, health organisation offices, and non-clinical healthcare environments. Trained teams, flexible scheduling." serviceUrl="/healthcare-office-cleaning" serviceType="Healthcare Office Cleaning" price="$$" additionalServices={['Medical Administration Cleaning', 'Health Organisation Office Cleaning', 'Non-Clinical Area Cleaning', 'Healthcare Reception Cleaning', 'Staff Room Cleaning', 'After-Hours Healthcare Office Cleaning']} faqs={[{ question: 'What is healthcare office cleaning?', answer: 'Healthcare office cleaning covers the non-clinical office and administration areas of healthcare facilities — including reception, administration offices, staff rooms, meeting rooms, and common areas. While not requiring full clinical disinfection, these areas still need a higher standard of hygiene than standard commercial offices due to their proximity to patients and clinical areas.' }, { question: 'Do healthcare office cleaners need special training?', answer: 'Healthcare office cleaners benefit from basic IPC awareness even in non-clinical areas. Our teams understand the healthcare environment, are discreet around patient information, and know when and how to escalate if they encounter a clinical area that requires specialist attention.' }]} />
      <section className="relative bg-gradient-to-br from-darkblue to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Healthcare Office Specialists</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Healthcare Office Cleaning Sydney</h1>
              <p className="text-xl mb-8 text-gray-100">Pro Clean Corp provides professional healthcare office cleaning across Sydney NSW — delivering clean, hygienic office environments for medical administration teams, health organisation offices, and non-clinical areas within healthcare facilities.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Get a Free Quote</a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Discreet & Professional</span><span>✓ Health Sector Experience</span><span>✓ Flexible Hours</span>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/medical.webp" alt="Healthcare office cleaning Sydney" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4"><div className="text-2xl font-bold text-blueprimary">98%</div><div className="text-xs text-gray-500">Satisfaction Rate</div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium"><strong>Healthcare office cleaning</strong> serves the administrative backbone of medical and health organisations. Clean offices support productive teams, maintain professional appearances for visitors and patient families, and reflect the care standards of the clinical services your organisation provides.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Cleaning for Healthcare Office Environments</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Healthcare organisations have office environments that are unique — they exist within or adjacent to clinical settings, handle sensitive patient information, and are visited by patients, families, and external partners who expect to see professional standards of cleanliness.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Pro Clean Corp healthcare office cleaners are trained to work discreetly in sensitive environments. Our staff understand the healthcare setting, are respectful of patient privacy, and deliver thorough office cleaning while being mindful of the clinical environment around them.</p>
              <div className="grid grid-cols-2 gap-3">
                {['Medical administration offices', 'Health organisation HQs', 'Hospital management floors', 'Health fund offices', 'Community health offices', 'Allied health admin areas', 'Medical education offices', 'Healthcare IT & operations'].map((item, i) => (
                  <div key={i} className="bg-blueprimary/5 p-3 rounded-lg text-sm text-gray-700 border border-blueprimary/10">✓ {item}</div>
                ))}
              </div>
            </div>
            <Image src="/images/services/office.webp" alt="Healthcare office environment Sydney" className="rounded-2xl shadow-xl w-full h-full object-cover max-h-96" width={600} height={384} loading="lazy" />
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Healthcare Office Cleaning</h3>
            <div className="space-y-4">
              {[
                { q: 'What is healthcare office cleaning?', a: 'Healthcare office cleaning covers non-clinical areas of healthcare facilities — administration offices, reception, meeting rooms, staff rooms, and corridors. These areas need a higher hygiene standard than regular offices due to their proximity to patients and clinical areas.' },
                { q: 'Is healthcare office cleaning different from medical facility cleaning?', a: 'Yes. Healthcare office cleaning focuses on administrative and non-clinical areas and uses commercial-grade cleaning methods. Medical facility cleaning covers clinical areas and applies TGA-registered disinfectants with IPC protocols. We provide both services and can combine them for comprehensive facility coverage.' },
                { q: 'Can you clean our healthcare offices outside business hours?', a: 'Yes. After-hours cleaning is available for all healthcare office environments across Sydney. We can schedule cleaning to avoid disruption to your administration teams and clinical operations.' },
                { q: 'Do you clean healthcare organisation offices across Sydney?', a: 'Yes. We service healthcare office environments across all of Sydney including CBD, North Sydney, Parramatta, Western Sydney, and all suburban areas. Our teams are experienced in the healthcare sector and understand the unique requirements of health organisations.' }
              ].map((faq, i) => <div key={i} className="bg-gray-50 rounded-xl p-6"><h4 className="font-bold text-darkblue mb-2">{faq.q}</h4><p className="text-gray-700">{faq.a}</p></div>)}
            </div>
          </div>
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Healthcare Office Cleaning — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">Professional healthcare office cleaning across all Sydney suburbs. Call Pro Clean Corp for a free quote.</p>
            <div className="text-2xl font-bold text-greenprimary">1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
