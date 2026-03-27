import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial & Corporate Cleaning Sydney | One Provider | Pro Clean Corp',
  description: 'Combined commercial and corporate cleaning under one Sydney provider. Offices, warehouses, retail, strata — one contract, one invoice, consistent standards.',
  keywords: ['commercial corporate cleaning', 'commercial and corporate cleaning sydney', 'commercial office cleaning', 'corporate cleaning services', 'combined cleaning services sydney'],
  openGraph: {
    title: 'Commercial & Corporate Cleaning Sydney | One Provider | Pro Clean Corp',
    description: 'Pro Clean Corp covers commercial and corporate cleaning under one contract — offices, warehouses, retail and more across Sydney.',
    url: 'https://www.procleancorp.com.au/commercial-corporate-cleaning',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial and corporate cleaning Sydney' }]
  },
  twitter: { card: 'summary_large_image', title: 'Commercial & Corporate Cleaning Sydney | Pro Clean Corp', description: 'Combined commercial and corporate cleaning under one Sydney provider.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/commercial-corporate-cleaning' }
};

const faqs = [
  {
    question: 'What is the difference between commercial cleaning and corporate cleaning?',
    answer: 'Commercial cleaning broadly covers any non-residential cleaning — warehouses, retail stores, factories, offices and industrial spaces. Corporate cleaning specifically refers to the cleaning of professional office environments — typically law firms, financial services, consulting firms and executive suites — where presentation standards are higher and confidentiality requirements exist. Pro Clean Corp delivers both, with protocols tailored to each environment.'
  },
  {
    question: 'Can one cleaning company handle both my warehouse and my head office?',
    answer: 'Yes. Pro Clean Corp handles commercial cleaning for warehouses, distribution centres and industrial spaces alongside corporate office cleaning for the same client — under one contract, one invoice and one account manager. This is particularly common for businesses where the head office and warehouse are on the same site or nearby.'
  },
  {
    question: 'Do you provide commercial and corporate cleaning across all of Sydney?',
    answer: 'Yes. Pro Clean Corp has teams across Greater Sydney servicing both commercial and corporate facilities — from CBD law firms to Western Sydney warehouse operations. We can provide on-site assessments for all locations within 48 hours and begin service within 5 business days.'
  },
  {
    question: 'Are commercial and corporate cleaning priced the same?',
    answer: 'Pricing differs based on facility type, required frequency and service scope. Corporate cleaning for executive offices typically carries a premium due to higher product standards and same-team requirements. Commercial cleaning for warehouses and industrial spaces is priced on floor area and frequency. A combined contract covering both often achieves a 10–15% discount over separate agreements.'
  }
];

export default function CommercialCorporateCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial and Corporate Cleaning Sydney"
        serviceDescription="Combined commercial and corporate cleaning services in Sydney. Offices, warehouses, retail, strata and industrial facilities under one provider."
        serviceUrl="/commercial-corporate-cleaning"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Warehouse Cleaning', 'Retail Cleaning', 'Corporate Suite Cleaning', 'Industrial Cleaning', 'Strata Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">One Provider · All Facility Types</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Commercial &amp; Corporate Cleaning — Sydney&apos;s Complete Cleaning Solution
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                Whether you need <strong>commercial cleaning</strong> for warehouses and retail, <strong>corporate cleaning</strong> for executive offices or anything in between — Pro Clean Corp delivers consistent quality across your entire property portfolio under one contract.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label: 'Commercial', types: 'Warehouses, retail, industrial' },
                  { label: 'Corporate', types: 'Offices, suites, boardrooms' },
                  { label: 'Combined', types: 'Head office + warehouse sites' },
                  { label: 'Portfolio', types: 'Multiple sites, one invoice' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-3">
                    <div className="text-green-200 font-bold text-sm">{item.label}</div>
                    <div className="text-white/80 text-xs mt-0.5">{item.types}</div>
                  </div>
                ))}
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial and corporate cleaning Sydney"
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
            <strong>Pro Clean Corp provides commercial and corporate cleaning under one Sydney contract</strong> — covering everything from warehouse floors and loading docks to executive suites and boardrooms. One provider, one invoice, consistent standards across every facility type.
          </p>
        </div>
      </section>

      {/* Service Matrix */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-12 text-center">Commercial vs Corporate Cleaning — What We Cover</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-blueprimary text-white rounded-t-2xl px-6 py-4">
                <h3 className="font-bold text-xl">Commercial Cleaning</h3>
                <p className="text-blue-200 text-sm">Broad-market, high-volume facilities</p>
              </div>
              <div className="bg-gray-50 rounded-b-2xl p-6">
                <div className="space-y-3">
                  {[
                    ['Warehouses & distribution centres', 'Floor sweeping, rack cleaning, amenities'],
                    ['Retail stores', 'Floor mopping, display cleaning, stockrooms'],
                    ['Industrial facilities', 'Machine area cleaning, safety surface maintenance'],
                    ['Showrooms', 'Floor polishing, display case cleaning, entry maintenance'],
                    ['Hospitality', 'Kitchen and dining cleaning, end-of-trade service']
                  ].map(([type, detail], i) => (
                    <div key={i} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <div className="font-semibold text-darkblue text-sm">{type}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="bg-darkblue text-white rounded-t-2xl px-6 py-4">
                <h3 className="font-bold text-xl">Corporate Cleaning</h3>
                <p className="text-blue-300 text-sm">Professional offices, premium standard</p>
              </div>
              <div className="bg-gray-50 rounded-b-2xl p-6">
                <div className="space-y-3">
                  {[
                    ['Executive offices', 'Furniture-grade surface care, same team each visit'],
                    ['Law firms & financial services', 'NDA capability, document sensitivity protocols'],
                    ['Consulting & advisory firms', 'Presentation-ready boardrooms, hot-desk hygiene'],
                    ['Government & regulated sectors', 'Security protocols, documented cleaning procedures'],
                    ['Technology companies', 'Screen, keyboard and hardware-safe cleaning']
                  ].map(([type, detail], i) => (
                    <div key={i} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <div className="font-semibold text-darkblue text-sm">{type}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined + Image */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/services/office.webp"
                alt="Office and commercial cleaning combined"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Why Choose One Provider for Both?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Businesses with both commercial and corporate facilities — a head office plus warehouse, or multiple mixed-use sites — benefit significantly from a single cleaning provider. Unified scheduling, reporting and invoicing removes administrative overhead and ensures consistent standards everywhere.
              </p>
              <div className="space-y-3">
                {[
                  'Volume pricing — combined contracts save 10–15% vs separate providers',
                  'Single account manager for all sites and scheduling',
                  'Consistent staff vetting standards across all locations',
                  'One insurance certificate covers all your sites',
                  'Unified reporting for finance and facilities teams'
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-greenprimary font-bold mt-0.5">✓</span>
                    {point}
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
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Commercial &amp; Corporate Cleaning</h2>
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
          <h2 className="text-3xl font-bold mb-4">Get a Combined Commercial &amp; Corporate Cleaning Quote</h2>
          <p className="text-xl text-blue-100 mb-8">Tell us about all your sites — we&apos;ll provide a bundled quote that covers everything.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
