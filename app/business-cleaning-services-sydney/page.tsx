import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Business Cleaning Services Sydney | All Business Types | Pro Clean Corp',
  description: 'Business cleaning services for all Sydney business types — retail, office, hospitality, medical, industrial and more. Fixed pricing, no lock-in. Free quote today.',
  keywords: ['business cleaning services sydney', 'business cleaning sydney', 'commercial cleaning for businesses', 'office cleaning business sydney', 'small business cleaning sydney'],
  openGraph: {
    title: 'Business Cleaning Services Sydney | All Business Types | Pro Clean Corp',
    description: 'Business cleaning services for every type of Sydney business. Retail, office, hospitality, medical, industrial — all covered. Free quote today.',
    url: 'https://www.procleancorp.com.au/business-cleaning-services-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Business cleaning services Sydney' }]
  },
  twitter: { card: 'summary_large_image', title: 'Business Cleaning Services Sydney | Pro Clean Corp', description: 'Business cleaning services for all Sydney business types.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/business-cleaning-services-sydney' }
};

const faqs = [
  {
    question: 'What business cleaning services are available in Sydney?',
    answer: 'Sydney business cleaning services span every industry: office and corporate cleaning, retail store cleaning, restaurant and hospitality cleaning, medical practice and clinic cleaning, gym and fitness facility cleaning, warehouse and industrial cleaning, strata common area cleaning and end of lease cleaning. Pro Clean Corp delivers all these under one roof across Greater Sydney.'
  },
  {
    question: 'Do business cleaning services in Sydney include small businesses?',
    answer: 'Yes. Pro Clean Corp services businesses of all sizes — from single-person home offices and small retail stores to large corporate floors and industrial warehouses. There is no minimum contract size, and we tailor service frequency and scope to match every budget. Small business pricing starts from $80/clean for modest office and retail spaces.'
  },
  {
    question: 'How are business cleaning services priced in Sydney?',
    answer: 'Business cleaning pricing in Sydney is based on floor area, cleaning zones, required frequency and business type. A transparent fixed-price quote is provided after an on-site assessment — no hourly rate surprises. Pro Clean Corp provides month-to-month contracts with no lock-in, making it straightforward to adjust as your business grows or changes premises.'
  },
  {
    question: 'Can business cleaning services in Sydney be scheduled around my trading hours?',
    answer: 'Yes. Pro Clean Corp schedules business cleaning to align with your specific trading hours and customer traffic. Retail and hospitality businesses typically prefer early morning or after-close cleaning. Offices usually opt for after-hours evening cleaning. Medical practices are cleaned after the last patient each evening. Your trading hours set the schedule — not ours.'
  }
];

const businessTypes = [
  { type: 'Retail Stores', icon: '🛍️', desc: 'Shop floors, displays, changing rooms, stockrooms and entry areas.', href: '/retail-cleaning-sydney' },
  { type: 'Offices', icon: '💼', desc: 'Workstations, meeting rooms, kitchens and reception areas.', href: '/office-cleaning' },
  { type: 'Restaurants & Cafes', icon: '🍽️', desc: 'Commercial kitchen, dining area, bar and amenities cleaning.', href: '/pub-club-cleaning-sydney' },
  { type: 'Medical Practices', icon: '🏥', desc: 'GP clinics, specialist suites, dental and allied health.', href: '/medical-cleaning' },
  { type: 'Gyms & Fitness', icon: '🏋️', desc: 'Equipment disinfection, floors, changerooms and showers.', href: '/gym-cleaning-service' },
  { type: 'Warehouses', icon: '🏭', desc: 'Floor sweeping, loading dock, amenities and rack areas.', href: '/warehouse-cleaners-sydney' },
  { type: 'Strata Buildings', icon: '🏢', desc: 'Common areas, lobbies, lifts and car parks.', href: '/strata-cleaning-services-sydney' },
  { type: 'Schools & Childcare', icon: '📚', desc: 'Classrooms, amenities, playgrounds and common areas.', href: '/school-cleaning-parramatta' }
];

export default function BusinessCleaningServicesSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Business Cleaning Services Sydney"
        serviceDescription="Professional business cleaning services for all Sydney business types — retail, office, medical, hospitality, industrial and more. Fixed pricing, flexible scheduling."
        serviceUrl="/business-cleaning-services-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Retail Cleaning', 'Restaurant Cleaning', 'Medical Cleaning', 'Gym Cleaning', 'Warehouse Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Every Business Type · All Sydney Suburbs</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Business Cleaning Services Sydney — Tailored to Your Industry
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Pro Clean Corp delivers business cleaning services</strong> for every type of Sydney business — from small retail stores and GP clinics to large warehouses and corporate offices. Fixed pricing, flexible scheduling and industry-specific cleaning protocols.
              </p>
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-8">
                <p className="text-sm text-white font-semibold mb-2">Small Business Pricing from:</p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs text-white/90">
                  <div className="bg-white/10 rounded-lg p-2"><div className="font-bold text-green-300">$80</div><div>Small office</div></div>
                  <div className="bg-white/10 rounded-lg p-2"><div className="font-bold text-green-300">$120</div><div>Retail store</div></div>
                  <div className="bg-white/10 rounded-lg p-2"><div className="font-bold text-green-300">$150</div><div>Medical clinic</div></div>
                </div>
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/commercial.webp"
                alt="Business cleaning services Sydney"
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
      <section className="py-8 bg-greenprimary/10 border-l-4 border-greenprimary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>Business cleaning services from Pro Clean Corp in Sydney are designed for every industry</strong> — with specialist protocols for retail, medical, hospitality, gym, office and industrial environments. Fixed monthly pricing from $80/clean for small businesses, scaled for every size. No lock-in contracts.
          </p>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Business Cleaning for Every Industry in Sydney</h2>
          <p className="text-center text-gray-600 mb-12">Specialist protocols for each business type — not a one-size-fits-all approach.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {businessTypes.map((biz, i) => (
              <Link key={i} href={biz.href} className="group bg-gray-50 hover:bg-blueprimary/5 border border-gray-100 hover:border-blueprimary/20 rounded-xl p-5 transition text-center">
                <div className="text-3xl mb-3">{biz.icon}</div>
                <h3 className="font-bold text-darkblue group-hover:text-blueprimary mb-2 text-sm">{biz.type}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{biz.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pro Clean Corp + Image */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/services/hero6.jpg"
                alt="Business cleaning Sydney team"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">What Every Sydney Business Cleaning Contract Includes</h2>
              <div className="space-y-3">
                {[
                  'Free on-site assessment of your premises',
                  'Written fixed-price quote within 24 hours',
                  'Schedule designed around your business hours',
                  'Police-checked, insured cleaning staff',
                  'Service confirmation after every clean',
                  'No lock-in — month-to-month contracts',
                  'Direct account manager contact',
                  '$20M public liability insurance included'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-greenprimary font-bold mt-0.5">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Business Cleaning Services Sydney</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-darkblue mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blueprimary to-darkblue text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get a Business Cleaning Quote for Your Sydney Premises</h2>
          <p className="text-xl text-blue-100 mb-8">Free on-site assessment. Fixed pricing. Schedule that works around your business hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
