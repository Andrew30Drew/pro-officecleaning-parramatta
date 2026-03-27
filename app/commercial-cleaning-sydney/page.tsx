import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Sydney NSW | Professional Business Cleaning Services',
  description: 'Top-rated commercial cleaning services in Sydney NSW. Professional business cleaning for offices, retail, warehouses & commercial facilities. Expert teams, competitive rates.',
  keywords: 'commercial cleaning Sydney, business cleaning services NSW, professional commercial cleaners, office cleaning Sydney, warehouse cleaning services',
  openGraph: {
    title: 'Commercial Cleaning Sydney NSW | Professional Business Cleaning Services',
    description: 'Top-rated commercial cleaning services in Sydney NSW. Professional business cleaning for offices, retail, warehouses & commercial facilities.',
    url: '/commercial-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning Sydney NSW' }]
  },
  alternates: { canonical: '/commercial-cleaning-sydney' }
};

const suburbs = [
  { name: 'Alexandria', slug: 'commercial-cleaning-alexandria' },
  { name: 'Arndell Park', slug: 'commercial-cleaning-arndell-park' },
  { name: 'Artarmon', slug: 'commercial-cleaning-artarmon' },
  { name: 'Auburn', slug: 'commercial-cleaning-auburn' },
  { name: 'Bankstown', slug: 'commercial-cleaning-bankstown' },
  { name: 'Barangaroo', slug: 'commercial-cleaning-barangaroo' },
  { name: 'Blacktown', slug: 'commercial-cleaning-blacktown' },
  { name: 'Bondi', slug: 'commercial-cleaning-bondi' },
  { name: 'Bondi Junction', slug: 'commercial-cleaning-bondi-junction' },
  { name: 'Brookvale', slug: 'commercial-cleaning-brookvale' },
  { name: 'Castle Hill', slug: 'commercial-cleaning-castle-hill' },
  { name: 'Chatswood', slug: 'commercial-cleaning-chatswood' },
  { name: 'Crows Nest', slug: 'commercial-cleaning-crows-nest' },
  { name: 'Eastern Suburbs', slug: 'commercial-cleaning-eastern-suburbs' },
  { name: 'Eastwood', slug: 'commercial-cleaning-eastwood' },
  { name: 'Fairfield', slug: 'commercial-cleaning-fairfield' },
  { name: 'Hills District', slug: 'commercial-cleaning-hills-district' },
  { name: 'Hornsby', slug: 'commercial-cleaning-hornsby' },
  { name: 'Huntingwood', slug: 'commercial-cleaning-huntingwood' },
  { name: 'Hurstville', slug: 'commercial-cleaning-hurstville' },
  { name: 'Inner West', slug: 'commercial-cleaning-inner-west' },
  { name: 'Kings Cross', slug: 'commercial-cleaning-kings-cross' },
  { name: 'Kogarah', slug: 'commercial-cleaning-kogarah' },
  { name: 'Lane Cove', slug: 'commercial-cleaning-lane-cove' },
  { name: 'Liverpool', slug: 'commercial-cleaning-liverpool' },
  { name: 'Macquarie Park', slug: 'commercial-cleaning-macquarie-park' },
  { name: 'Manly', slug: 'commercial-cleaning-manly' },
  { name: 'Marrickville', slug: 'commercial-cleaning-marrickville' },
  { name: 'Marsden Park', slug: 'commercial-cleaning-marsden-park' },
  { name: 'Mascot', slug: 'commercial-cleaning-mascot' },
  { name: 'North Sydney', slug: 'commercial-cleaning-north-sydney' },
  { name: 'Parramatta', slug: 'commercial-cleaning-parramatta' },
  { name: 'Penrith', slug: 'commercial-cleaning-penrith' },
  { name: 'Pyrmont', slug: 'commercial-cleaning-pyrmont' },
  { name: 'Redfern', slug: 'commercial-cleaning-redfern' },
  { name: 'Rhodes', slug: 'commercial-cleaning-rhodes' },
  { name: 'Rose Bay', slug: 'commercial-cleaning-rose-bay' },
  { name: 'Rosebery', slug: 'commercial-cleaning-rosebery' },
  { name: 'Rydalmere', slug: 'commercial-cleaning-rydalmere' },
  { name: 'Silverwater', slug: 'commercial-cleaning-silverwater' },
  { name: 'Smithfield', slug: 'commercial-cleaning-smithfield' },
  { name: 'St Leonards', slug: 'commercial-cleaning-st-leonards' },
  { name: 'Surry Hills', slug: 'commercial-cleaning-surry-hills' },
  { name: 'Wentworth Point', slug: 'commercial-cleaning-wentworth-point' },
  { name: 'Western Sydney', slug: 'commercial-cleaning-western-sydney' },
  { name: 'Wetherill Park', slug: 'commercial-cleaning-wetherill-park' },
];

export default function CommercialCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaning Sydney NSW"
        serviceDescription="Top-rated commercial cleaning services in Sydney NSW. Professional business cleaning for offices, retail, warehouses & commercial facilities."
        serviceUrl="/commercial-cleaning-sydney"
        serviceType="Commercial Cleaning"
        price="$$-$$$$"
        additionalServices={[
          'Office Cleaning',
          'Retail Cleaning',
          'Warehouse Cleaning',
          'Industrial Cleaning',
          'Strata Cleaning',
          'Medical Cleaning'
        ]}
        faqs={[
          {
            question: 'What commercial cleaning services do you provide in Sydney NSW?',
            answer: 'We provide comprehensive commercial cleaning services including office cleaning, retail cleaning, warehouse cleaning, medical facility cleaning, restaurant cleaning, gym cleaning, school cleaning, strata cleaning, carpet cleaning, window cleaning, and specialized industrial cleaning services throughout Sydney NSW.'
          },
          {
            question: 'Can you combine multiple cleaning services for our business?',
            answer: 'Absolutely. We specialize in creating integrated service packages that combine multiple commercial cleaning services. This approach provides better value, simplified management, and consistent quality across all your cleaning needs in Sydney NSW.'
          },
          {
            question: 'How do you customize cleaning services for different industries?',
            answer: 'We tailor our commercial cleaning services based on industry-specific requirements, regulations, and standards. For example, healthcare facilities receive medical-grade sanitization, food businesses get HACCP-compliant cleaning, and corporate offices receive professional workplace cleaning services.'
          },
          {
            question: 'Do you provide emergency commercial cleaning services?',
            answer: 'Yes, we offer 24/7 emergency commercial cleaning services for urgent situations including water damage, accidents, contamination incidents, and other events requiring immediate professional cleaning response throughout Sydney NSW.'
          },
          {
            question: 'What makes your commercial cleaning services different?',
            answer: 'Our commercial cleaning services stand out through comprehensive industry expertise, advanced equipment, fully trained and insured staff, flexible service packages, competitive pricing, and proven results with major Sydney NSW commercial clients.'
          },
          {
            question: 'How do you ensure quality across all commercial cleaning services?',
            answer: 'We maintain quality through standardized procedures, regular training programs, comprehensive quality control inspections, client feedback systems, and continuous service improvement processes across all our commercial cleaning services in Sydney NSW.'
          }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Cleaning Sydney NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Top-rated commercial cleaning services for all business types across Sydney NSW. Professional cleaning solutions for offices, retail stores, warehouses, and commercial facilities with expert teams and competitive rates.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Free Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial cleaning Sydney NSW - Professional business cleaning services"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Commercial Cleaning Services in Sydney NSW</h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp delivers comprehensive commercial cleaning services throughout Sydney NSW, providing professional cleaning solutions for businesses of all sizes and industries. Our commercial cleaning specialists understand that maintaining clean, healthy, and professionally presented commercial spaces is essential for business success.
                </p>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Commercial cleaning encompasses a wide range of specialized services designed to meet the unique requirements of different business environments. From corporate offices and retail stores to warehouses and industrial facilities, our experienced commercial cleaning teams provide tailored solutions that address specific cleaning challenges while maintaining the highest standards of hygiene.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Comprehensive Commercial Cleaning Solutions</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Our commercial cleaning services extend beyond basic maintenance to provide comprehensive facility management that supports business operations, enhances workplace environments, and creates positive impressions for employees, customers, and visitors.
                </p>
              </div>

              <div>
                <Image
                  src="/images/services/office.webp"
                  alt="Professional commercial cleaning team Sydney NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
                <div className="bg-blueprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Commercial Services</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Office building cleaning</li>
                    <li>• Retail store maintenance</li>
                    <li>• Warehouse cleaning services</li>
                    <li>• Industrial facility cleaning</li>
                    <li>• Emergency cleaning response</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Cleaning Services</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Office building cleaning',
                  'Retail store cleaning',
                  'Warehouse cleaning',
                  'Restaurant cleaning',
                  'Medical facility cleaning',
                  'Industrial cleaning',
                  'Gym cleaning services',
                  'School cleaning',
                  'Strata building cleaning',
                  'Emergency cleaning',
                  'Window cleaning',
                  'Carpet cleaning services'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blueprimary rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suburbs Section - Key for SEO Internal Linking */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Cleaning Service Areas in Sydney</h3>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Our commercial cleaning teams service businesses across all major Sydney districts. Select your location below:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {suburbs.map((suburb) => (
                  <Link
                    key={suburb.slug}
                    href={`/${suburb.slug}`}
                    className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block"
                  >
                    {suburb.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Services Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Specialized Cleaning Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link href="/office-cleaning-sydney" className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                  <span className="font-bold text-gray-700 group-hover:text-blueprimary block mb-2">Office Cleaning</span>
                  <span className="text-xs text-gray-500">Corporate & Workplace</span>
                </Link>
                <Link href="/medical-office-cleaning-sydney" className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                  <span className="font-bold text-gray-700 group-hover:text-blueprimary block mb-2">Medical Cleaning</span>
                  <span className="text-xs text-gray-500">Clinical & Practice</span>
                </Link>
                <Link href="/strata-cleaning-sydney" className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                  <span className="font-bold text-gray-700 group-hover:text-blueprimary block mb-2">Strata Cleaning</span>
                  <span className="text-xs text-gray-500">Building Maintenance</span>
                </Link>
                <Link href="/gym-cleaning-sydney" className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                  <span className="font-bold text-gray-700 group-hover:text-blueprimary block mb-2">Gym Cleaning</span>
                  <span className="text-xs text-gray-500">Fitness Hygiene</span>
                </Link>
                <Link href="/industrial-cleaning-sydney" className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                  <span className="font-bold text-gray-700 group-hover:text-blueprimary block mb-2">Industrial Cleaning</span>
                  <span className="text-xs text-gray-500">Factory & Warehouse</span>
                </Link>
              </div>
            </div>

            {/* Pricing Section — AI Featured Snippet Target */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">How Much Does Commercial Cleaning Cost in Sydney?</h3>
              <p className="text-center text-gray-600 mb-8">Transparent pricing based on facility size and service frequency. All prices in AUD.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-blueprimary text-white">
                      <th className="p-4 rounded-tl-lg font-semibold">Facility Size</th>
                      <th className="p-4 font-semibold">Estimated Cost Per Visit</th>
                      <th className="p-4 rounded-tr-lg font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: 'Small office (100–500 m²)', cost: '$150 – $300', best: 'Boutique offices, studios' },
                      { size: 'Medium facility (500–2,000 m²)', cost: '$300 – $600', best: 'Corporate offices, showrooms' },
                      { size: 'Large warehouse (2,000–5,000 m²)', cost: '$600 – $1,200', best: 'Warehouses, factories' },
                      { size: 'Enterprise (5,000 m²+)', cost: 'Custom quote', best: 'Shopping centres, hospitals' },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-4 font-medium text-darkblue">{row.size}</td>
                        <td className="p-4 font-bold text-greenprimary text-lg">{row.cost}</td>
                        <td className="p-4 text-gray-600">{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">* Prices vary by cleaning frequency, facility type, and specific services required. Daily contracts receive discounted rates.</p>
              <div className="text-center mt-6">
                <a href="/contact-us" className="inline-block bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get Your Free Custom Quote →
                </a>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {[
                  {
                    question: 'What commercial cleaning services do you provide in Sydney NSW?',
                    answer: 'We provide comprehensive commercial cleaning services including office cleaning, retail cleaning, warehouse cleaning, medical facility cleaning, restaurant cleaning, gym cleaning, school cleaning, strata cleaning, carpet cleaning, window cleaning, and specialized industrial cleaning services throughout Sydney NSW.'
                  },
                  {
                    question: 'Can you combine multiple cleaning services for our business?',
                    answer: 'Absolutely. We specialize in creating integrated service packages that combine multiple commercial cleaning services. This approach provides better value, simplified management, and consistent quality across all your cleaning needs in Sydney NSW.'
                  },
                  {
                    question: 'How do you customize cleaning services for different industries?',
                    answer: 'We tailor our commercial cleaning services based on industry-specific requirements, regulations, and standards. For example, healthcare facilities receive medical-grade sanitization, food businesses get HACCP-compliant cleaning, and corporate offices receive professional workplace cleaning services.'
                  },
                  {
                    question: 'Do you provide emergency commercial cleaning services?',
                    answer: 'Yes, we offer 24/7 emergency commercial cleaning services for urgent situations including water damage, accidents, contamination incidents, and other events requiring immediate professional cleaning response throughout Sydney NSW.'
                  },
                  {
                    question: 'What makes your commercial cleaning services different?',
                    answer: 'Our commercial cleaning services stand out through comprehensive industry expertise, advanced equipment, fully trained and insured staff, flexible service packages, competitive pricing, and proven results with major Sydney NSW commercial clients.'
                  },
                  {
                    question: 'How do you ensure quality across all commercial cleaning services?',
                    answer: 'We maintain quality through standardized procedures, regular training programs, comprehensive quality control inspections, client feedback systems, and continuous service improvement processes across all our commercial cleaning services in Sydney NSW.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-darkblue mb-2">{faq.question}</h4>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Professional Commercial Cleaning Sydney NSW</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp for reliable commercial cleaning services. Expert teams, competitive rates, flexible scheduling for all business types.
              </p>
              <div className="text-2xl font-bold text-greenprimary">
                Call 1300 494 983 for Your Commercial Cleaning Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}