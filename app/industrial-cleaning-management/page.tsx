import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Industrial Cleaning Management Sydney | Managed Cleaning Programs NSW | Pro Clean Corp',
  description: 'Professional industrial cleaning management for factories, warehouses, and industrial facilities across Sydney NSW. Scheduled programs, compliance documentation, and account management. Call 1300 494 983.',
  keywords: ['industrial cleaning management', 'industrial cleaning management Sydney', 'managed industrial cleaning NSW', 'industrial cleaning program Sydney', 'industrial facility cleaning management'],
  openGraph: {
    title: 'Industrial Cleaning Management Sydney | Pro Clean Corp',
    description: 'Managed industrial cleaning programs for factories, warehouses, and industrial facilities across Sydney NSW.',
    url: '/industrial-cleaning-management',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Industrial Cleaning Management Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Cleaning Management Sydney | Pro Clean Corp',
    description: 'Managed industrial cleaning programs across Sydney NSW.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/industrial-cleaning-management' }
};

export default function IndustrialCleaningManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Industrial Cleaning Management"
        serviceDescription="Pro Clean Corp provides professional industrial cleaning management services for factories, warehouses, and industrial facilities across Sydney NSW. Scheduled programs, compliance documentation, supervisor audits, and dedicated account management."
        serviceUrl="/industrial-cleaning-management"
        serviceType="Industrial Cleaning"
        price="$$-$$$"
        additionalServices={['Scheduled Cleaning Programs', 'WHS Compliance Documentation', 'Supervisor Audits', 'Account Management', 'Emergency Response', 'Reporting & Checklists']}
        faqs={[
          { question: 'What is industrial cleaning management?', answer: 'Industrial cleaning management is a structured approach to cleaning industrial facilities that goes beyond simple cleaning contracts. It includes documented cleaning programs, WHS compliance procedures, regular supervisor audits, performance reporting, and dedicated account management — ensuring consistent results and full compliance across your facility at all times.' },
          { question: 'What does an industrial cleaning management program include?', answer: 'A managed industrial cleaning program from Pro Clean Corp includes a site-specific cleaning schedule, risk assessments and SWMS documentation, scheduled supervisor audits, client reporting, account management contact, emergency response capacity, and equipment maintenance to ensure your facility is consistently clean and compliant.' }
        ]}
      />
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Managed Industrial Cleaning</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Industrial Cleaning Management Sydney</h1>
              <p className="text-xl mb-8 text-gray-100">Pro Clean Corp provides professional industrial cleaning management programs for factories, warehouses, and industrial facilities across Sydney NSW. Scheduled cleaning, compliance documentation, regular audits, and dedicated account management — everything you need to maintain a clean, safe, and compliant facility.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Discuss Your Program</a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ WHS Compliant</span><span>✓ Regular Audits</span><span>✓ Dedicated Account Manager</span>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Industrial cleaning management Sydney" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">150+</div>
                <div className="text-xs text-gray-500">Managed Sites</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">Effective <strong>industrial cleaning management</strong> ensures your facility is consistently maintained to the right standard — with documented compliance, scheduled audits, and a responsive team that understands your operational requirements. Pro Clean Corp manages industrial cleaning programs for facilities of all sizes across Sydney NSW.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">What a Managed Industrial Cleaning Program Includes</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Industrial cleaning management is more than sending a team to clean — it&apos;s a structured program designed to keep your facility consistently maintained, compliant with WHS requirements, and operating at peak cleanliness without requiring you to manage the day-to-day details.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Pro Clean Corp&apos;s managed programs include site-specific cleaning schedules, full WHS documentation, regular supervisor audits with written reports, and a dedicated account manager who is your single point of contact for everything cleaning-related.</p>
              <div className="space-y-3">
                {[
                  { title: 'Site-Specific Cleaning Schedule', desc: 'Tailored to your facility, operations, and compliance requirements.' },
                  { title: 'WHS Documentation', desc: 'Risk assessments and SWMS for all cleaning tasks performed on your site.' },
                  { title: 'Regular Supervisor Audits', desc: 'Written audit reports provided to facility management on agreed frequency.' },
                  { title: 'Dedicated Account Manager', desc: 'Single point of contact for all service queries, changes, and issues.' },
                  { title: 'Performance Reporting', desc: 'Monthly cleaning completion reports and audit results.' },
                  { title: 'Emergency Response', desc: 'Priority response for spills and urgent cleaning requirements.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl">
                    <div className="w-6 h-6 bg-greenprimary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-darkblue">{item.title}</span>
                      <span className="text-gray-600 text-sm"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Image src="/images/services/hero1.jpg" alt="Industrial cleaning management team Sydney" className="rounded-2xl shadow-xl w-full h-full object-cover max-h-96" width={600} height={384} loading="lazy" />
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Industrial Facilities We Manage</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Warehouses & Distribution Centres', 'Manufacturing Plants', 'Food Processing Facilities', 'Automotive Workshops', 'Engineering & Fabrication', 'Chemical & Pharmaceutical'].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center border border-gray-100">
                  <div className="text-sm font-medium text-darkblue">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Industrial Cleaning Management</h3>
            <div className="space-y-4">
              {[
                { q: 'What is industrial cleaning management?', a: 'A structured approach to industrial facility cleaning that includes documented programs, WHS compliance procedures, regular supervisor audits, performance reporting, and dedicated account management — ensuring consistent results across your facility.' },
                { q: 'What does an industrial cleaning management program include?', a: 'Site-specific cleaning schedules, risk assessments and SWMS documentation, scheduled supervisor audits, client reporting, a dedicated account manager, emergency response capacity, and equipment maintenance.' },
                { q: 'How does managed industrial cleaning differ from a standard cleaning contract?', a: 'Managed programs include structured oversight — regular audits, written reports, performance tracking, and proactive account management. Standard contracts typically just schedule cleaning visits without the same level of governance and compliance documentation.' },
                { q: 'What size facilities does industrial cleaning management suit?', a: 'Managed programs are most valuable for mid-to-large industrial facilities where cleaning consistency, WHS compliance, and operational continuity are critical. They are also suited to facilities with complex requirements, food safety standards, or multiple zones with different cleaning protocols.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Industrial Cleaning Management — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">Let Pro Clean Corp manage your industrial facility cleaning program. Free consultation and site assessment available across all Sydney industrial areas.</p>
            <div className="text-2xl font-bold text-greenprimary">1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
