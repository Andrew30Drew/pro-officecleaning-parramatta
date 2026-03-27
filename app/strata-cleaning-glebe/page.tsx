import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Glebe | ProCleanCorp Inner West',
  description: 'Strata cleaning in Glebe for residential apartments, terrace conversions and mixed-use buildings. Heritage-appropriate products. Fully insured. Free quote.',
  keywords: 'strata cleaning glebe, strata cleaners glebe, heritage strata cleaning glebe, terrace conversion strata cleaning glebe, common area cleaning glebe, apartment strata cleaning glebe',
  openGraph: {
    title: 'Strata Cleaning Glebe | ProCleanCorp Inner West',
    description: 'Strata cleaning in Glebe for residential apartments and terrace conversions. Heritage-appropriate products. Free quote.',
    url: 'https://www.procleancorp.com.au/strata-cleaning-glebe',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning Glebe Inner West Sydney' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-glebe' }
};

const faqs = [
  {
    question: 'Can you clean heritage strata buildings in Glebe without damaging original surfaces?',
    answer: 'Yes. ProCleanCorp uses heritage-appropriate cleaning products specifically selected for Glebe\'s Victorian terrace conversions and Federation-era apartment buildings. We use pH-neutral stone cleaners for sandstone walls, timber-safe products for original staircase cleaning, and avoid acid-based or alkaline cleaners that etch original tiles. Our team is trained to identify and work with heritage-sensitive materials.'
  },
  {
    question: 'What is the average cost of strata cleaning in Glebe?',
    answer: 'Strata cleaning in Glebe typically costs from $80-$150 per visit for small terrace conversion strata (2-6 units with limited common areas), $200-$400 per month for mid-size apartment complexes, and $400-$800 per month for larger mixed-use buildings. Heritage buildings sometimes cost slightly more due to the specialised products and care required for original surfaces.'
  },
  {
    question: 'Do you clean common areas in Glebe terrace conversions?',
    answer: 'Yes. Terrace conversions in Glebe present specific strata cleaning challenges — narrow staircases, original timber floors, sandstone front entries, small rear courtyards and shared heritage bathrooms. ProCleanCorp has extensive experience with these environments and provides a tailored cleaning program that addresses each heritage surface appropriately.'
  }
];

export default function StrataCleaningGlebePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Glebe"
        serviceDescription="ProCleanCorp delivers strata cleaning in Glebe with heritage-appropriate cleaning products and methods suited to the suburb's Victorian terrace conversions and modern apartment blocks."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-glebe"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Heritage Strata Cleaning', 'Terrace Conversion Cleaning', 'Lobby Cleaning', 'Courtyard Cleaning', 'Sandstone Surface Care']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Glebe Strata Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Strata Cleaning Glebe — Local Common Area Cleaning Specialists
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers strata cleaning in Glebe with heritage-appropriate products for Victorian terrace conversions, Federation apartments and modern mixed-use buildings. Sandstone-safe, timber-safe methods.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Heritage-Safe Products &nbsp;|&nbsp; ✓ Terrace Specialists &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Strata cleaning Glebe Inner West heritage building"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp delivers strata cleaning in Glebe with heritage-appropriate cleaning products</strong> and methods suited to the suburb's mix of Victorian terrace conversions and modern apartment blocks. Sandstone walls, original tiling, timber staircases — we clean each surface correctly.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Strata Cleaning Services in Glebe</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Glebe has a significant stock of heritage strata — converted Victorian terraces with original tiling, timber staircases, sandstone walls and small rear courtyards. These properties require cleaning products and methods that no generic strata cleaner provides: pH-neutral stone cleaners, timber-safe products, and the knowledge to avoid the acid or alkaline cleaners that etch original surfaces.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp is the only strata cleaning provider in Glebe that specifically addresses heritage surface protocols at the suburb level. We also serve Glebe's growing stock of modern mixed-use buildings with a full commercial strata program.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Glebe Strata Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Heritage surface-safe cleaning', 'Sandstone wall & entry cleaning', 'Original tile care & grouting', 'Timber staircase & floor cleaning', 'Lobby & corridor cleaning', 'Lift cleaning', 'Bin room & courtyard cleaning', 'Letterbox & intercom cleaning', 'Window sill & ledge cleaning', 'Eco-certified product range', 'OC committee proposals', 'Visit log reporting'].map((item, i) => (
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
                <h4 className="font-bold text-darkblue mb-3">Glebe Area Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Glebe', 'Forest Lodge', 'Ultimo', 'Pyrmont', 'Camperdown', 'Chippendale', 'Newtown', 'Annandale'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Heritage-safe strata cleaning. Glebe & surrounds.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Strata Cleaning Glebe</h3>
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
                { label: 'Strata Cleaning Leichhardt', href: '/strata-cleaning-leichhardt' },
                { label: 'Strata Cleaning Inner West', href: '/strata-cleaning-inner-west' },
                { label: 'Commercial Cleaning Glebe', href: '/commercial-cleaning-glebe' },
                { label: 'Strata Cleaning Sydney', href: '/strata-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Heritage Strata Cleaning — Glebe</h3>
            <p className="text-xl mb-4 text-gray-100">Sandstone-safe, timber-safe products. Terrace conversion specialists. Free quote.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
