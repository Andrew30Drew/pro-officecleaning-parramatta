import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Newtown | ProCleanCorp Inner West',
  description: 'Strata cleaning in Newtown for apartments, mixed-use buildings and commercial strata. Lobbies, bin rooms and courtyards. Eco-friendly. Free quote.',
  keywords: 'strata cleaning newtown, strata cleaners newtown, common area cleaning newtown, eco strata cleaning newtown, apartment strata cleaning newtown, owners corporation cleaning newtown',
  openGraph: {
    title: 'Strata Cleaning Newtown | ProCleanCorp Inner West',
    description: 'Strata cleaning in Newtown. Apartments, mixed-use buildings, commercial strata. Eco-friendly products. Free quote.',
    url: 'https://www.procleancorp.com.au/strata-cleaning-newtown',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning Newtown Inner West Sydney' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-newtown' }
};

const faqs = [
  {
    question: 'Do you use eco-friendly products for strata cleaning in Newtown?',
    answer: 'Yes. ProCleanCorp uses biodegradable, low-VOC and fragrance-free cleaning products for all Newtown strata cleaning contracts. Our eco-certified range meets Environmental Choice Australia standards and contains no harmful aerosols or harsh synthetic chemicals — meeting the sustainability expectations of Newtown strata committees who increasingly include environmental requirements in their cleaning tenders.'
  },
  {
    question: 'What does a standard strata common area clean include in Newtown?',
    answer: 'A standard Newtown strata common area clean includes sweeping and mopping all lobby and corridor floors, cleaning lift interiors and threshold tracks, wiping down all handrails and balustrades, cleaning letterbox surrounds and intercom points, emptying bin rooms and deodorising, and cleaning any common courtyard areas. Window sills, ledges and external common area glass are also included in most programs.'
  },
  {
    question: 'How do I get a strata cleaning quote for my Newtown apartment complex?',
    answer: 'Call 1300 494 983 or submit a quote request online. We will arrange a free on-site walk-through of your Newtown complex within 24 hours and provide a formal written proposal within 48 hours, including pricing, cleaning frequency, scope of works and insurance documentation suitable for OC committee review.'
  }
];

export default function StrataCleaningNewtownPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Newtown"
        serviceDescription="ProCleanCorp provides strata cleaning in Newtown for residential apartments and mixed-use commercial buildings, using eco-certified products suited to Newtown's sustainability-conscious strata committees."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-newtown"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Eco-Certified Strata Cleaning', 'Lobby Cleaning', 'Bin Room Cleaning', 'Courtyard Cleaning', 'Lift Cleaning', 'OC Proposals']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Newtown Strata Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Strata Cleaning Newtown — Residential & Commercial Common Areas
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides strata cleaning in Newtown for residential apartments and mixed-use buildings using eco-certified products. Biodegradable, no harsh aerosols — aligned with Newtown strata committees' sustainability requirements.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Eco-Certified Products &nbsp;|&nbsp; ✓ No Lock-In &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Strata cleaning Newtown Inner West common area"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides strata cleaning in Newtown for residential apartments and mixed-use commercial buildings</strong>, using eco-certified products suited to Newtown's sustainability-conscious strata committees. Biodegradable products, no harmful aerosols, low-VOC floor cleaners — the right choice for Newtown.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Strata Cleaning Services in Newtown</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Newtown strata committees are known for demanding eco-compliance from contractors. ProCleanCorp leads with green credentials — biodegradable products, no harmful aerosols, low-VOC floor cleaners — as a genuine differentiator in the Newtown strata market.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We service all strata types in Newtown — from converted terrace apartments to modern mixed-use developments on King Street and the surrounding commercial strip. Our eco-certified product range is safe for the heritage surfaces common in Newtown while meeting TGA disinfection standards for shared touchpoints like lift buttons, intercom handsets and handrails.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Newtown Strata Cleaning Inclusions</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Lobby & corridor cleaning', 'Lift interior cleaning', 'Stairwell & landing cleaning', 'Handrail & balustrade wiping', 'Bin room cleaning & deodorising', 'Courtyard & common area cleaning', 'Letterbox & intercom cleaning', 'Window sill & ledge cleaning', 'Eco-certified product range', 'Biodegradable chemicals', 'OC committee proposals', 'Visit log reporting'].map((item, i) => (
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
                  {['Newtown', 'Erskineville', 'St Peters', 'Marrickville', 'Enmore', 'Camperdown', 'Redfern', 'Glebe'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Eco strata cleaning. Newtown & Inner West.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Strata Cleaning Newtown</h3>
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
                { label: 'Strata Cleaning Inner West', href: '/strata-cleaning-inner-west' },
                { label: 'Commercial Cleaning Newtown', href: '/commercial-cleaning-newtown' },
                { label: 'Strata Cleaning Marrickville', href: '/strata-cleaning-marrickville' },
                { label: 'Green Cleaning Sydney', href: '/green-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Eco Strata Cleaning — Newtown</h3>
            <p className="text-xl mb-4 text-gray-100">Biodegradable products, OC committee proposals, free quote in 24 hours.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
