import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Concord | ProCleanCorp Inner West',
  description: 'Professional office cleaning in Concord for businesses along Majors Bay Road and surrounds. Eco products, flexible schedules, fully insured. Free quote.',
  keywords: 'office cleaning concord, office cleaners concord, concord office cleaners, commercial cleaning concord, professional office cleaning concord, medical office cleaning concord, inner west office cleaning',
  openGraph: {
    title: 'Office Cleaning Concord | ProCleanCorp Inner West',
    description: 'Professional office cleaning in Concord for businesses along Majors Bay Road and surrounds. Eco products, flexible schedules. Free quote.',
    url: 'https://www.procleancorp.com.au/office-cleaning-concord',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Office cleaning Concord Inner West Sydney' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-concord' }
};

const faqs = [
  {
    question: 'Do you clean medical offices in Concord?',
    answer: 'Yes. ProCleanCorp provides hospital-grade medical office cleaning in Concord, with AHPRA-aware infection control protocols for GP practices, allied health clinics and specialist suites. Concord has a dense strip of medical and allied health offices — we service them with specific healthcare cleaning protocols including TGA-approved disinfectants and documented cleaning logs for practice management.'
  },
  {
    question: 'What cleaning products do you use for professional office spaces in Concord?',
    answer: 'We use eco-certified, hospital-grade cleaning products for Concord offices. For standard commercial offices, our range is fragrance-light and low-VOC. For medical offices in Concord, we use TGA-approved hospital-grade disinfectants. All products are supplied by us — you never need to provide cleaning materials.'
  },
  {
    question: 'How do I set up a regular cleaning schedule for my Concord office?',
    answer: 'It\'s simple. Call 1300 494 983 or submit a quote request online, and we\'ll arrange a free on-site assessment of your Concord office within 24 hours. We recommend a cleaning frequency based on your office size and staff count, then provide a fixed-price proposal. Most Concord clients are up and running within 5 business days of accepting a quote.'
  }
];

export default function OfficeCleaningConcordPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Concord"
        serviceDescription="Professional office cleaning services in Concord, covering the Inner West commercial strip with flexible weekly, fortnightly and daily scheduling. Hospital-grade protocols for medical offices."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-concord"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Medical Office Cleaning', 'Weekly Office Cleaning', 'Daily Office Cleaning', 'After Hours Cleaning', 'Hospital-Grade Disinfection']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Concord & Inner West Office Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Office Cleaning Concord — Inner West Commercial Cleaning
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp offers professional office cleaning services in Concord — covering the Inner West commercial strip with flexible weekly, fortnightly and daily scheduling. AHPRA-aware protocols for medical offices.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Medical-Grade Available &nbsp;|&nbsp; ✓ From $35/hr &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/office.webp" alt="Office cleaning Concord Inner West"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp offers professional office cleaning services in Concord</strong>, covering the Inner West commercial strip with flexible weekly, fortnightly and daily scheduling options. Concord has a dense strip of medical and allied health offices — we leverage AHPRA-aware cleaning protocols, hospital-grade disinfection for waiting rooms, and compliance-ready documentation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Office Cleaning Services in Concord</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Concord's commercial strip along Majors Bay Road and the surrounding streets hosts a mix of medical practices, allied health clinics, professional services and small corporate offices. ProCleanCorp understands the difference between standard commercial office cleaning and the hospital-grade protocols required in medical waiting rooms and treatment areas.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                For Concord medical and allied health offices, we use TGA-approved disinfectants, provide documented cleaning logs for AHPRA inspection readiness, and follow infection control protocols appropriate to clinical settings. For standard commercial offices, we provide reliable, consistent cleaning at competitive Inner West rates.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Concord Office Cleaning Inclusions</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Medical-grade & standard options', 'AHPRA-aware protocols', 'TGA-approved disinfectants', 'Desk & surface sanitisation', 'Kitchen & breakroom cleaning', 'Bathroom & amenity maintenance', 'Floor vacuuming & mopping', 'Bin removal & recycling', 'Internal glass cleaning', 'High-touch disinfection', 'Cleaning logs & documentation', 'After hours access'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Nearby Areas</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Concord', 'Strathfield', 'Burwood', 'Homebush', 'Rhodes', 'Drummoyne', 'Five Dock', 'Canada Bay'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site assessment for Concord offices.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Office Cleaning Concord</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-darkblue mb-2">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-darkblue mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Commercial Cleaning Concord', href: '/commercial-cleaning-concord' },
                { label: 'Strata Cleaning Concord', href: '/strata-cleaning-concord' },
                { label: 'Office Cleaning Strathfield', href: '/office-cleaning-strathfield' },
                { label: 'Medical Cleaning Sydney', href: '/medical-office-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Office Cleaning Concord — Get a Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Standard and medical-grade cleaning for Concord's Inner West commercial precinct.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
