import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Carlingford | ProCleanCorp',
  description: 'Office cleaning in Carlingford for professional services, medical suites and corporate tenants. Fully insured. Competitive rates. Book your free quote today.',
  keywords: 'office cleaning carlingford, office cleaners carlingford, commercial cleaning carlingford, professional office cleaning carlingford, north rocks office cleaning, north west sydney office cleaners',
  openGraph: {
    title: 'Office Cleaning Carlingford | ProCleanCorp',
    description: 'Office cleaning in Carlingford for professional services, medical suites and corporate tenants. Fully insured. Free quote.',
    url: 'https://www.procleancorp.com.au/office-cleaning-carlingford',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Office cleaning Carlingford NSW' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-carlingford' }
};

const faqs = [
  {
    question: 'Do you offer office cleaning in Carlingford and North Rocks?',
    answer: 'Yes. ProCleanCorp services offices throughout Carlingford and the surrounding North-West Sydney area including North Rocks, Beecroft, Cheltenham, West Pennant Hills and Epping. We operate a regular cleaning route through the Carlingford commercial precinct.'
  },
  {
    question: 'Can you provide a cleaning reference letter for our Carlingford office lease?',
    answer: 'Yes. ProCleanCorp provides formal cleaning reference letters and compliance documentation for tenants renewing commercial leases in Carlingford. We document our visit logs, cleaning scope and products used, which satisfies most commercial lease cleaning requirements and building management requests.'
  },
  {
    question: 'How quickly can you start office cleaning in Carlingford?',
    answer: 'In most cases, ProCleanCorp can begin office cleaning in Carlingford within 3-5 business days of a confirmed quote. For urgent requirements (lease end, opening cleans), we can often start within 24-48 hours — call us directly on 1300 494 983 for urgent bookings.'
  }
];

export default function OfficeCleaningCarlingfordPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Carlingford"
        serviceDescription="Professional office cleaning across Carlingford's growing commercial and professional services precinct, with daily, weekly and periodic deep-clean packages."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-carlingford"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Daily Office Cleaning', 'Weekly Office Cleaning', 'Medical Suite Cleaning', 'Corporate Office Cleaning', 'After Hours Cleaning', 'Deep Clean']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">North-West Sydney Office Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Office Cleaning Carlingford — Trusted Commercial Cleaners
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides office cleaning across Carlingford's growing commercial and professional services precinct — Carlingford Road to Carlingford Court.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ From $35/hr &nbsp;|&nbsp; ✓ Start in 3-5 Days &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/office.webp" alt="Office cleaning Carlingford NSW"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides office cleaning across Carlingford's growing commercial and professional services precinct</strong>, with daily, weekly and periodic deep-clean packages. Carlingford is a significant North-West Sydney commercial corridor — and ProCleanCorp serves the large professional services cluster around Carlingford Road and Carlingford Court.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Office Cleaning Services in Carlingford</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Carlingford is a significant North-West Sydney commercial corridor often overlooked by major cleaning contractors who focus on Parramatta and the Hills District. This creates an opportunity for businesses in Carlingford to access quality commercial cleaning without CBD-level pricing.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp services the large professional services cluster around Carlingford Road — accountants, solicitors, medical specialists and corporate tenants in the Carlingford Court commercial precinct. We provide cleaning logs, insurance documentation and formal compliance letters required for commercial lease renewals and building management.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Carlingford Office Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Daily, weekly & fortnightly programs', 'Desk & surface sanitisation', 'Kitchen & breakroom cleaning', 'Bathroom & amenity maintenance', 'Floor vacuuming & mopping', 'Internal glass & window cleaning', 'High-touch point disinfection', 'Bin removal & recycling', 'After hours access', 'Lease-end deep cleans', 'Cleaning logs & compliance docs', 'Consumables replenishment'].map((item, i) => (
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
                <h4 className="font-bold text-darkblue mb-3">North-West Sydney Areas</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Carlingford', 'North Rocks', 'Beecroft', 'Cheltenham', 'West Pennant Hills', 'Epping', 'Rydalmere', 'Dundas'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site assessment. Start in 3-5 business days.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Office Cleaning Carlingford</h3>
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
                { label: 'Commercial Cleaning Carlingford', href: '/commercial-cleaning-carlingford' },
                { label: 'Office Cleaning Hills District', href: '/office-cleaning-hills-district' },
                { label: 'Medical Cleaning Ryde', href: '/medical-cleaning-ryde' },
                { label: 'Office Cleaning Parramatta', href: '/office-cleaning-parramatta' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Trusted Office Cleaning — Carlingford</h3>
            <p className="text-xl mb-4 text-gray-100">Daily, weekly and periodic cleaning for Carlingford's professional services precinct.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
