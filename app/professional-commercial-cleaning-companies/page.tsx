import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Professional Commercial Cleaning Companies Sydney NSW | Pro Clean Corp',
  description: 'Trusted professional commercial cleaning company in Sydney NSW. Fully insured, industry-certified cleaning for offices, retail, warehouses & commercial facilities. Competitive rates. Call 1300 494 983.',
  keywords: [
    'professional commercial cleaning companies',
    'commercial cleaning company Sydney',
    'professional commercial cleaning Sydney NSW',
    'best commercial cleaning companies Sydney',
    'certified commercial cleaning company',
    'commercial cleaning contractors Sydney',
    'reputable commercial cleaners Sydney',
    'Pro Clean Corp commercial cleaning company'
  ],
  openGraph: {
    title: 'Professional Commercial Cleaning Companies Sydney | Pro Clean Corp',
    description: 'Trusted professional commercial cleaning company in Sydney NSW. Fully insured, certified cleaning for all commercial facility types.',
    url: '/professional-commercial-cleaning-companies',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Professional Commercial Cleaning Companies Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Commercial Cleaning Companies Sydney | Pro Clean Corp',
    description: 'Trusted professional commercial cleaning company in Sydney NSW with 15+ years experience.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/professional-commercial-cleaning-companies' }
};

export default function ProfessionalCommercialCleaningCompaniesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Professional Commercial Cleaning Companies Sydney"
        serviceDescription="Trusted professional commercial cleaning company in Sydney NSW providing fully insured, industry-certified cleaning for offices, retail, warehouses and commercial facilities."
        serviceUrl="/professional-commercial-cleaning-companies"
        serviceType="Commercial Cleaning"
        price="$$-$$$$"
        additionalServices={[
          'Office Cleaning',
          'Retail Cleaning',
          'Warehouse Cleaning',
          'Medical Centre Cleaning',
          'Strata Cleaning',
          'Industrial Cleaning'
        ]}
        faqs={[
          {
            question: 'What makes a commercial cleaning company professional?',
            answer: 'A professional commercial cleaning company holds public liability insurance, employs trained and background-checked staff, uses industry-grade equipment and chemicals, provides written service agreements, conducts regular quality inspections, and has a documented complaints resolution process. Pro Clean Corp meets all these criteria.'
          },
          {
            question: 'How do I choose the best commercial cleaning company in Sydney?',
            answer: 'Look for a company with proven experience in your industry, verifiable reviews, transparent pricing, proper insurance coverage, staff training certifications, and a clear service agreement. Request site inspections before signing contracts and ask for references from comparable businesses.'
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
                15+ Years Experience
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional Commercial Cleaning Companies Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp is one of Sydney&apos;s most trusted professional commercial cleaning companies — fully insured, industry-certified, and delivering consistent results for offices, retail stores, warehouses, and commercial facilities across NSW.
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
                <span>✓ Fully Insured</span>
                <span>✓ Industry Certified</span>
                <span>✓ Quality Guaranteed</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Professional commercial cleaning company Sydney NSW"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">4.8★</div>
                <div className="text-xs text-gray-500">1,200+ Client Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Professional commercial cleaning companies</strong> in Sydney are distinguished by their insurance coverage, staff training standards, industry certifications, and quality assurance systems. Pro Clean Corp has delivered professional commercial cleaning to Sydney businesses for over 15 years — with a 4.8-star client rating across 1,200+ reviews.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">What to Look for in a Professional Commercial Cleaning Company</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Not all commercial cleaning companies are equal. When you&apos;re hiring a cleaner for your business, the risk of an unprofessional provider is real — inconsistent quality, unvetted staff entering your premises, no recourse when things go wrong, and no proper insurance coverage. Choosing a professional commercial cleaning company protects your business.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp is a fully accredited, insured, and quality-certified commercial cleaning company operating across Sydney NSW. We employ trained and police-checked cleaning staff, use industry-grade equipment and chemicals, and back every service with our satisfaction guarantee.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">The Pro Clean Corp Difference</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Our commercial cleaning management system includes pre-start briefings, supervisor checks, client feedback loops, and digital reporting. You get the same standard of clean every time — and if anything falls short, we return to rectify it free of charge. That&apos;s the professional standard we hold ourselves to.
              </p>
            </div>
            <div>
              <Image
                src="/images/about_img1.webp"
                alt="Pro Clean Corp professional cleaning team Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Our Credentials</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Public liability insurance</li>
                  <li>✓ Workers compensation</li>
                  <li>✓ Police-checked staff</li>
                  <li>✓ Industry certification</li>
                  <li>✓ Quality management system</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why us checklist */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">What Defines a Professional Commercial Cleaning Company</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Full public liability insurance',
                'Police-checked cleaning staff',
                'Industry certification & training',
                'Written service agreements',
                'Quality assurance inspections',
                'Supervisor sign-off procedures',
                'Client satisfaction guarantee',
                'Digital cleaning reports',
                'Rapid complaints resolution',
                'Eco-friendly product options',
                'Custom cleaning schedules',
                'Emergency response capability'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Industries We Service as a Professional Cleaning Company</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Corporate Offices', href: '/office-cleaning-sydney', sub: 'Workplace cleaning' },
                { label: 'Medical Centres', href: '/medical-centre-cleaning', sub: 'Clinical hygiene' },
                { label: 'Retail & Showrooms', href: '/retail-cleaning-sydney', sub: 'Customer-facing spaces' },
                { label: 'Gyms & Fitness', href: '/gym-cleaning-services-sydney', sub: 'Hygiene & sanitisation' },
                { label: 'Warehouses', href: '/warehouse-cleaners-sydney', sub: 'Industrial facilities' },
                { label: 'Strata Buildings', href: '/strata-cleaning-services-sydney', sub: 'Common area maintenance' },
                { label: 'Schools', href: '/commercial-cleaning-sydney', sub: 'Educational facilities' },
                { label: 'Restaurants', href: '/commercial-cleaning-sydney', sub: 'Food facility cleaning' },
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
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {[
                { q: 'What makes a commercial cleaning company professional?', a: 'A professional commercial cleaning company holds public liability insurance, employs trained and background-checked staff, uses industry-grade equipment, provides written service agreements, conducts regular quality inspections, and has a documented complaints resolution process. Pro Clean Corp meets all these criteria.' },
                { q: 'How do I choose the best commercial cleaning company in Sydney?', a: 'Look for a company with proven experience in your industry, verifiable reviews, transparent pricing, proper insurance coverage, staff training certifications, and a clear service agreement. Request site inspections before signing contracts and ask for references from comparable businesses.' },
                { q: 'Are there accredited commercial cleaning companies in Sydney?', a: 'Yes. Pro Clean Corp is accredited and insured with proper industry certification. When comparing commercial cleaning companies in Sydney, always request their insurance certificates, staff training records, and client references before committing to a contract.' },
                { q: 'What contract terms do professional commercial cleaning companies offer?', a: 'Pro Clean Corp offers flexible contract terms including month-to-month, 6-month, and annual contracts. We do not lock clients into unreasonable long-term agreements. All contracts include clear scope of work, pricing, and exit terms so you always know what you are paying for.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Sydney&apos;s Professional Commercial Cleaning Company</h3>
            <p className="text-xl mb-6 text-gray-100">
              Trust Pro Clean Corp — fully insured, quality-certified, and delivering professional commercial cleaning to Sydney businesses since 2009.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              Call 1300 494 983 for a Professional Cleaning Quote
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
