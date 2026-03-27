import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Premises Cleaning Sydney | All Business Types | Pro Clean Corp',
  description: 'Professional commercial premises cleaning for all Sydney business types. Offices, retail, medical, industrial & strata. Tailored programs. Call 1300 494 983.',
  keywords: [
    'commercial premises cleaning',
    'commercial premises cleaning Sydney',
    'business premises cleaning NSW',
    'commercial premises cleaner Sydney',
    'office premises cleaning Sydney',
    'commercial building cleaning services',
    'Pro Clean Corp premises cleaning'
  ],
  openGraph: {
    title: 'Commercial Premises Cleaning Sydney | Pro Clean Corp',
    description: 'Tailored commercial premises cleaning for offices, retail, medical, industrial and strata buildings across Sydney NSW.',
    url: '/commercial-premises-cleaning',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Premises Cleaning Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Premises Cleaning Sydney | Pro Clean Corp',
    description: 'Complete commercial premises cleaning for every Sydney business type — tailored programs, quality guaranteed.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-premises-cleaning' }
};

export default function CommercialPremisesCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Premises Cleaning Sydney"
        serviceDescription="Professional commercial premises cleaning services for all Sydney business types including offices, retail, medical, industrial and strata buildings."
        serviceUrl="/commercial-premises-cleaning"
        serviceType="Commercial Premises Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Office Premises Daily Cleaning',
          'Retail Premises Cleaning',
          'Industrial Premises Cleaning',
          'Medical Premises Sanitisation',
          'Strata Premises Common Areas',
          'Post-Tenancy Premises Clean'
        ]}
        faqs={[
          {
            question: 'What does commercial premises cleaning include?',
            answer: 'Commercial premises cleaning covers all areas of a business property: offices, reception areas, bathrooms, kitchenettes, storerooms, corridors, carparks, and external areas. The scope is tailored to your specific premises type, size, and operational hours.'
          },
          {
            question: 'How often should commercial premises be cleaned?',
            answer: 'Most commercial premises benefit from daily cleaning of high-use areas (bathrooms, kitchens, entry points) with regular deep cleaning of floors, carpets, and hard surfaces. Frequency depends on foot traffic, industry type, and hygiene requirements.'
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
                Every Business Premises Type
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Premises Cleaning
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp delivers professional commercial premises cleaning for every type of Sydney business — from small retail shopfronts to multi-floor office buildings, medical suites, strata complexes, and industrial facilities. Fully tailored, consistently delivered.
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
                <span>✓ All Premises Types</span>
                <span>✓ Tailored Programs</span>
                <span>✓ Quality Guaranteed</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial premises cleaning Sydney NSW"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">50+</div>
                <div className="text-xs text-gray-500">Premises Types Serviced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Commercial premises cleaning</strong> is not one-size-fits-all. A medical clinic has entirely different hygiene requirements to a retail boutique or a manufacturing plant. Pro Clean Corp&apos;s premises cleaning programs are built around your specific premises type, occupancy, compliance requirements, and operational schedule — ensuring the right clean every time.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Tailored Cleaning for Every Type of Commercial Premises</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Commercial premises present unique cleaning challenges depending on their purpose. High foot traffic retail premises require daily floor care and polished presentation. Medical premises demand strict infection control and TGA-listed disinfectants. Industrial premises need heavy-duty degreasing and dust management.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp&apos;s commercial premises cleaning programs begin with a detailed site assessment. We map every zone of your premises, identify the specific cleaning requirements for each area, and develop a written cleaning specification that forms the basis of our service agreement. You know exactly what will be cleaned, how, and when.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Compliance-Ready Premises Cleaning</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Many industries require demonstrable cleaning compliance — food businesses, childcare centres, medical practices, and aged care facilities all face audit requirements. Pro Clean Corp provides documented cleaning records and digital reporting that support your compliance obligations and give you confidence during inspections.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/hero5.jpg"
                alt="Professional premises cleaning team Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Premises Cleaning Features</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Written cleaning specs</li>
                  <li>✓ Digital sign-off records</li>
                  <li>✓ Industry-safe products</li>
                  <li>✓ Scheduled & periodic cleaning</li>
                  <li>✓ After-hours availability</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Industry Grid */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Premises Types We Clean</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: '🏢', type: 'Office Premises', detail: 'Daily cleaning, sanitisation, floor care' },
                { icon: '🏪', type: 'Retail Premises', detail: 'Shopfront, display, change rooms' },
                { icon: '🏥', type: 'Medical Premises', detail: 'Hospital-grade, infection control' },
                { icon: '🏭', type: 'Industrial Premises', detail: 'Factory floors, loading docks' },
                { icon: '🏠', type: 'Strata Premises', detail: 'Common areas, lobbies, lifts' },
                { icon: '🍽️', type: 'Hospitality Premises', detail: 'Kitchens, dining, bars' },
                { icon: '🏫', type: 'Education Premises', detail: 'Classrooms, labs, amenities' },
                { icon: '💪', type: 'Fitness Premises', detail: 'Equipment, floors, changerooms' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-bold text-blueprimary text-sm mb-1">{item.type}</h4>
                  <p className="text-xs text-gray-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Standard Commercial Premises Cleaning Checklist</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-blueprimary mb-4">Daily Cleaning Tasks</h4>
                <div className="space-y-2">
                  {[
                    'Vacuuming carpeted areas',
                    'Mopping hard floor surfaces',
                    'Sanitising bathrooms & amenities',
                    'Cleaning kitchen & breakroom',
                    'Emptying bins & replacing liners',
                    'Wiping high-touch surfaces',
                    'Dusting desks & furniture',
                    'Cleaning entry & reception areas'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-blueprimary mb-4">Periodic Deep Cleaning</h4>
                <div className="space-y-2">
                  {[
                    'Carpet steam cleaning',
                    'Hard floor scrubbing & buffing',
                    'Window & glass deep clean',
                    'Light fitting & vent cleaning',
                    'Upholstery spot treatment',
                    'High-pressure external washing',
                    'Carpark & loading dock sweep',
                    'Post-construction clean-up'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blueprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Commercial Premises Cleaning</h3>
            <div className="space-y-6">
              {[
                { q: 'What does commercial premises cleaning include?', a: 'Commercial premises cleaning covers all areas of your business property: offices, reception areas, bathrooms, kitchenettes, storerooms, corridors, carparks, and external areas. The scope is fully customised to your premises type, size, occupancy level, and operational hours.' },
                { q: 'How often should commercial premises be cleaned?', a: 'Most commercial premises benefit from daily cleaning of high-use areas (bathrooms, kitchens, entry points) and regular deep cleaning of floors, carpets, and hard surfaces. The optimal frequency depends on foot traffic, industry type, and applicable hygiene regulations.' },
                { q: 'Do you provide cleaning records for compliance purposes?', a: 'Yes. Pro Clean Corp provides digital cleaning records and sign-off reports that document what was cleaned, when, and by whom. These records are available for regulatory audits and are particularly valuable for childcare, food service, and medical premises operators.' },
                { q: 'Can you clean our premises outside of business hours?', a: 'Absolutely. Most of our commercial premises cleaning is conducted outside of business hours — early morning, evening, or on weekends. This ensures your premises are clean and ready when staff and customers arrive without any disruption to operations.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Professional Commercial Premises Cleaning — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Every business premises is different. Get a cleaning program built specifically for yours. Contact Pro Clean Corp today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Request a Premises Cleaning Quote
              </a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                Call 1300 494 983
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
