import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Kitchen Cleaning Sydney | Deep Clean & Degreasing Services NSW | Pro Clean Corp',
  description: 'Professional commercial kitchen cleaning in Sydney. Deep degreasing, exhaust hood cleaning, floor scrubbing & food safety compliance for restaurants & cafes. Call 1300 494 983.',
  keywords: [
    'commercial kitchen cleaning Sydney',
    'restaurant kitchen cleaning Sydney',
    'kitchen deep cleaning Sydney NSW',
    'exhaust hood cleaning Sydney',
    'kitchen degreasing Sydney',
    'food safety kitchen cleaning NSW',
    'commercial kitchen sanitisation Sydney',
    'Pro Clean Corp kitchen cleaning'
  ],
  openGraph: {
    title: 'Commercial Kitchen Cleaning Sydney | Pro Clean Corp',
    description: 'Professional commercial kitchen deep cleaning and degreasing for restaurants, cafes and food businesses across Sydney NSW.',
    url: '/commercial-kitchen-cleaning-sydney',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Kitchen Cleaning Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Kitchen Cleaning Sydney | Pro Clean Corp',
    description: 'Commercial kitchen deep cleaning, degreasing and food safety compliance for Sydney restaurants and hospitality businesses.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-kitchen-cleaning-sydney' }
};

const kitchenAreas = [
  { area: 'Exhaust Canopy & Hood', detail: 'Grease buildup removal, filter cleaning, and ductwork degreasing to reduce fire risk and maintain extraction efficiency.' },
  { area: 'Commercial Oven & Range', detail: 'Full disassembly cleaning of ovens, grills, griddles, and cooktops using high-temperature degreasers.' },
  { area: 'Fryer Deep Cleaning', detail: 'Interior and exterior degreasing of commercial fryers, including boil-out and oil change preparation.' },
  { area: 'Prep Surface Sanitisation', detail: 'Thorough cleaning and food-safe sanitisation of benchtops, chopping boards, and food prep zones.' },
  { area: 'Cold Room & Refrigeration', detail: 'Interior scrubbing, door seal cleaning, and drain maintenance for cool rooms and commercial fridges.' },
  { area: 'Floor Scrubbing & Grout', detail: 'High-pressure floor scrubbing, grout restoration, and anti-slip treatment for kitchen floor surfaces.' },
];

export default function CommercialKitchenCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Kitchen Cleaning Sydney"
        serviceDescription="Professional commercial kitchen cleaning in Sydney NSW — deep degreasing, exhaust hood cleaning, food safety compliance for restaurants, cafes and food businesses."
        serviceUrl="/commercial-kitchen-cleaning-sydney"
        serviceType="Commercial Kitchen Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Exhaust Canopy Degreasing',
          'Commercial Oven Deep Clean',
          'Fryer Boil-Out & Cleaning',
          'Cold Room Sanitisation',
          'Kitchen Floor Scrubbing',
          'Food Safety Compliance Clean'
        ]}
        faqs={[
          {
            question: 'How often should a commercial kitchen be deep cleaned?',
            answer: 'Commercial kitchens require daily surface cleaning and sanitisation, weekly deep cleaning of equipment, and monthly comprehensive deep cleans covering exhaust hoods, ovens, cold rooms, and floors. High-volume operations may require more frequent deep cleans to maintain food safety compliance.'
          },
          {
            question: 'Do your kitchen cleaners work while the kitchen is closed?',
            answer: 'Yes. Pro Clean Corp\'s commercial kitchen cleaning teams work during your kitchen\'s closed hours — typically overnight, early morning, or after service — ensuring the kitchen is clean, safe, and ready for the next service without interrupting operations.'
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
                Food Safety Specialists
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Kitchen Cleaning Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp provides specialist commercial kitchen cleaning across Sydney NSW — deep degreasing of exhausts, ovens, and fryers, floor scrubbing, cold room sanitisation, and full food safety compliance cleaning for restaurants, cafes, hotels, and commercial kitchens.
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
                <span>✓ Food Safety Compliant</span>
                <span>✓ After-Hours Cleaning</span>
                <span>✓ Fire Risk Reduction</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/faq5.jpg"
                alt="Commercial kitchen cleaning Sydney NSW deep clean"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">300+</div>
                <div className="text-xs text-gray-500">Sydney Kitchens Deep Cleaned</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Commercial kitchen cleaning in Sydney</strong> is a specialist service requiring food-safe degreasers, high-temperature equipment, and teams trained in food safety regulations. Pro Clean Corp&apos;s kitchen cleaning service covers everything from nightly surface sanitisation to quarterly deep cleans that keep your kitchen compliant, fire-safe, and ready for council inspections.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Kitchen Cleaning for Sydney Hospitality Businesses</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Commercial kitchens are one of the most challenging environments to clean correctly. Grease accumulation in exhaust hoods is a leading cause of commercial kitchen fires in NSW. Bacterial contamination in poorly sanitised prep areas is a major food safety risk. An unhygienic kitchen can result in failed council inspections, putting your business licence at risk.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp&apos;s commercial kitchen cleaning teams use commercial-grade degreasers, steam cleaning equipment, and high-pressure washers specifically designed for kitchen environments. All products are food-safe and HACCP-compatible, ensuring your kitchen meets NSW Food Authority standards after every clean.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Exhaust Hood & Ductwork Cleaning</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Exhaust canopy and ductwork cleaning is arguably the most critical kitchen cleaning task from a fire safety perspective. Accumulated grease in ductwork is highly flammable. Pro Clean Corp provides thorough exhaust system degreasing with before/after photographic documentation — essential for your insurance and council compliance.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/getintouch.jpg"
                alt="Professional kitchen cleaning team Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Kitchen Cleaning Benefits</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Reduced fire risk</li>
                  <li>✓ Council inspection ready</li>
                  <li>✓ HACCP compliance support</li>
                  <li>✓ Photo documentation provided</li>
                  <li>✓ Odour elimination</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kitchen Areas */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Kitchen Cleaning — Area by Area</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kitchenAreas.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-blueprimary mb-2">{item.area}</h4>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">Commercial Kitchen Cleaning Pricing — Sydney</h3>
            <p className="text-center text-gray-600 mb-8">Pricing varies by kitchen size, equipment volume, and cleaning frequency.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blueprimary text-white">
                    <th className="p-4 text-left rounded-tl-lg">Service Type</th>
                    <th className="p-4 text-left">Estimated Cost</th>
                    <th className="p-4 text-left rounded-tr-lg">Recommended Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Nightly kitchen clean (small café)', '$120 – $220', 'Nightly'],
                    ['Nightly kitchen clean (restaurant)', '$220 – $450', 'Nightly'],
                    ['Exhaust canopy deep clean', '$350 – $800', 'Quarterly'],
                    ['Full kitchen deep clean', '$600 – $1,500', 'Monthly'],
                    ['Post-trade kitchen sanitisation', '$180 – $380', 'Weekly'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-darkblue">{row[0]}</td>
                      <td className="p-4 font-bold text-greenprimary">{row[1]}</td>
                      <td className="p-4 text-gray-600">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Commercial Kitchen Cleaning Sydney</h3>
            <div className="space-y-6">
              {[
                { q: 'How often should a commercial kitchen be deep cleaned?', a: 'Commercial kitchens require daily surface cleaning and sanitisation, weekly deep cleaning of equipment, and monthly comprehensive deep cleans covering exhaust hoods, ovens, cold rooms, and floors. High-volume operations may require more frequent deep cleans to maintain food safety compliance and reduce fire risk.' },
                { q: 'Do your kitchen cleaners work while the kitchen is closed?', a: 'Yes. Pro Clean Corp\'s kitchen cleaning teams work exclusively during closed hours — overnight or early morning — ensuring the kitchen is clean and ready for the next service without interrupting operations or posing cross-contamination risk.' },
                { q: 'Can kitchen cleaning help us pass a council food safety inspection?', a: 'Yes. A professionally cleaned and documented kitchen significantly improves your prospects in council food safety inspections. Pro Clean Corp provides photographic before/after documentation and cleaning records that demonstrate your commitment to food safety standards.' },
                { q: 'What chemicals do you use for commercial kitchen cleaning?', a: 'We use TGA-registered, food-safe degreasers and sanitisers appropriate for commercial food preparation environments. All products are HACCP-compatible and suitable for use in licensed food premises. Safety Data Sheets are available on request.' }
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
            <h3 className="text-3xl font-bold mb-4">Commercial Kitchen Cleaning — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Keep your kitchen fire-safe, food-safe, and inspection-ready with Pro Clean Corp&apos;s specialist kitchen cleaning service.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              Call 1300 494 983 for a Kitchen Cleaning Quote
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
