import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Service Sydney | Business Cleaning NSW | Pro Clean Corp',
  description: 'Professional commercial cleaning service across Sydney NSW. Offices, warehouses, medical, retail, strata and more. Flexible contracts, trained staff, guaranteed quality. Call 1300 494 983.',
  keywords: [
    'commercial cleaning service',
    'commercial cleaning service Sydney',
    'commercial cleaning service NSW',
    'business cleaning service Sydney',
    'professional commercial cleaning',
    'commercial cleaning company Sydney',
    'commercial cleaning service near me'
  ],
  openGraph: {
    title: 'Commercial Cleaning Service Sydney | Pro Clean Corp',
    description: 'Professional commercial cleaning service for all business types across Sydney NSW. Offices, warehouses, medical facilities, retail, and strata.',
    url: '/commercial-cleaning-service',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Cleaning Service Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Service Sydney | Pro Clean Corp',
    description: 'Expert commercial cleaning service across Sydney. Flexible contracts, trained teams, quality guaranteed.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-cleaning-service' }
};

export default function CommercialCleaningServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaning Service"
        serviceDescription="Pro Clean Corp provides expert commercial cleaning services across all of Sydney NSW. Our teams service offices, warehouses, medical facilities, retail spaces, gyms, schools, and strata properties with professional-grade equipment and proven cleaning protocols."
        serviceUrl="/commercial-cleaning-service"
        serviceType="Commercial Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Office Cleaning', 'Warehouse Cleaning', 'Retail Cleaning',
          'Medical Cleaning', 'Gym Cleaning', 'School Cleaning',
          'Strata Cleaning', 'After-Hours Cleaning'
        ]}
        faqs={[
          {
            question: 'What is a commercial cleaning service?',
            answer: 'A commercial cleaning service provides professional cleaning for business premises including offices, warehouses, retail stores, medical facilities, gyms, schools, and any other non-residential property. Commercial cleaning goes beyond domestic cleaning — using industrial equipment, professional-grade products, and trained staff with specific industry knowledge.'
          },
          {
            question: 'How do I choose the right commercial cleaning service?',
            answer: 'When choosing a commercial cleaning service, look for: public liability insurance (minimum $10M), police-checked staff, industry-specific experience, clear pricing and contracts, and verifiable references from similar businesses. Pro Clean Corp meets all of these criteria and offers free site assessments before quoting.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-darkblue to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Expert Commercial Cleaning
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Cleaning Service Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp delivers a professional commercial cleaning service for every type of Sydney business. From single-office small businesses to multi-site enterprise accounts — we build custom cleaning programs that keep your premises clean, compliant, and ready for business every day.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Request a Free Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Custom Cleaning Programs</span>
                <span>✓ All Industries Served</span>
                <span>✓ No Lock-In Contracts</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial cleaning service Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">A+</div>
                <div className="text-xs text-gray-500">Quality Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            A <strong>commercial cleaning service</strong> from Pro Clean Corp means a fully tailored program for your business premises — the right cleaning frequency, the right products for your environment, and consistently trained staff who understand your industry&apos;s cleaning standards.
          </p>
        </div>
      </section>

      {/* What is Commercial Cleaning */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">What is a Commercial Cleaning Service?</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                A commercial cleaning service is a professional cleaning operation specifically designed for business and commercial premises. Unlike residential cleaning, commercial cleaning involves industrial-grade equipment, specialist products for different surfaces and environments, and staff trained in the unique requirements of workplace hygiene.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Commercial cleaning covers a wide range of business types — from professional offices and retail stores to warehouses, medical facilities, educational institutions, gyms, and hospitality venues. Each environment has different cleaning requirements, and a quality commercial cleaning service understands those differences.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Pro Clean Corp&apos;s commercial cleaning service in Sydney is built on 15+ years of industry experience, hundreds of satisfied commercial clients, and a commitment to quality that&apos;s backed by our satisfaction guarantee.
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src="/images/about_img1.webp"
                alt="Commercial cleaning team Sydney"
                className="rounded-2xl shadow-lg w-full h-56 object-cover"
                width={600}
                height={224}
                loading="lazy"
              />
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blueprimary/5 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-blueprimary">500+</div>
                  <div className="text-xs text-gray-500 mt-1">Active Clients</div>
                </div>
                <div className="bg-greenprimary/10 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-greenprimary">15yr</div>
                  <div className="text-xs text-gray-500 mt-1">Experience</div>
                </div>
                <div className="bg-blueprimary/5 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-blueprimary">7/7</div>
                  <div className="text-xs text-gray-500 mt-1">Days a Week</div>
                </div>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Cleaning Services by Industry</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Office & Corporate', desc: 'Daily to weekly office cleaning for single-floor to multi-storey corporate offices.', href: '/office-cleaning-sydney' },
                { title: 'Warehouse & Industrial', desc: 'Heavy-duty industrial cleaning for warehouses, factories, and distribution centres.', href: '/warehouse-cleaners-sydney' },
                { title: 'Medical & Healthcare', desc: 'Infection control cleaning for clinics, medical centres, and allied health practices.', href: '/medical-centre-cleaning' },
                { title: 'Gym & Fitness', desc: 'Antimicrobial deep cleaning for gyms, CrossFit boxes, and leisure centres.', href: '/gym-cleaners-sydney' },
                { title: 'Retail & Showrooms', desc: 'Clean, welcoming retail spaces with specialist floor and display care.', href: '/retail-cleaning-sydney' },
                { title: 'Strata & Body Corporate', desc: 'Common area cleaning for residential and commercial strata properties.', href: '/strata-cleaning-sydney' },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="bg-white p-5 rounded-xl border border-gray-100 hover:shadow-md transition group">
                  <h4 className="font-bold text-darkblue mb-2 group-hover:text-blueprimary transition">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  <span className="text-greenprimary text-sm font-semibold mt-3 inline-block">View service →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-8 text-center">How Our Commercial Cleaning Service Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Site Assessment', desc: 'We visit your premises to assess cleaning requirements, schedule, and access arrangements.' },
                { step: '2', title: 'Custom Proposal', desc: 'We provide a detailed, itemised quote with cleaning scope, frequency, and pricing.' },
                { step: '3', title: 'Team Assignment', desc: 'We assign dedicated cleaning staff with the right skills for your industry and premises.' },
                { step: '4', title: 'Ongoing Quality', desc: 'Regular supervisor audits and monthly reporting keep standards consistently high.' },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 bg-greenprimary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">{step.step}</span>
                  </div>
                  <h4 className="font-bold text-darkblue mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {[
                { q: 'What is a commercial cleaning service?', a: 'A commercial cleaning service provides professional cleaning for business premises. Unlike domestic cleaning, commercial services use industrial equipment, professional products, and trained staff with industry-specific knowledge to maintain hygiene standards suited to each type of commercial environment.' },
                { q: 'How do I choose the right commercial cleaning service?', a: 'Look for: public liability insurance ($10M+), police-checked staff, relevant industry experience, transparent pricing, and client references. Pro Clean Corp meets all criteria and offers free site assessments before quoting, so you know exactly what you\'re getting.' },
                { q: 'Do you offer flexible commercial cleaning contracts?', a: 'Yes. We offer weekly, fortnightly, monthly, and custom frequency contracts with no lock-in terms. We also provide one-off commercial cleaning for move-ins, events, or special requirements. Our goal is to earn your ongoing business through performance, not contracts.' },
                { q: 'What areas of Sydney do you service?', a: 'We service all of Greater Sydney including the CBD, North Sydney, Inner West, Eastern Suburbs, South Sydney, Western Sydney (Parramatta, Penrith, Blacktown), Hills District, Northern Beaches, Sutherland Shire, and all areas in between.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Get a Custom Commercial Cleaning Service Quote</h3>
            <p className="text-xl mb-6 text-gray-100">
              No two businesses are the same — that&apos;s why we build every commercial cleaning program from scratch. Contact us today for a free site assessment and proposal.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition">
                Request a Free Assessment
              </a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                1300 494 983
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
