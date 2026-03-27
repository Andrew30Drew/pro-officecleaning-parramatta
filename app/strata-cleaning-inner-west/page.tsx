import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Inner West | ProCleanCorp Sydney',
  description: 'Professional strata cleaning across the Inner West — Newtown, Glebe, Balmain, Leichhardt and surrounds. Common areas, lobbies, lifts and car parks. Free quote.',
  keywords: 'strata cleaning inner west, strata cleaners inner west sydney, common area cleaning inner west, strata cleaning newtown, strata cleaning glebe, strata cleaning balmain, heritage strata cleaning sydney',
  openGraph: {
    title: 'Strata Cleaning Inner West | ProCleanCorp Sydney',
    description: 'Professional strata cleaning across the Inner West. Newtown, Glebe, Balmain, Leichhardt and surrounds. Common areas, lobbies, lifts. Free quote.',
    url: 'https://www.procleancorp.com.au/strata-cleaning-inner-west',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning Inner West Sydney common areas' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-inner-west' }
};

const faqs = [
  {
    question: 'Do you clean heritage apartment buildings in the Inner West?',
    answer: 'Yes. ProCleanCorp has specific experience with heritage strata cleaning across the Inner West — Victorian terrace conversions, Federation-era apartment blocks and sandstone buildings with original tiling, timber staircases and exposed brick. We use heritage-appropriate cleaning products that clean effectively without damaging original surfaces. Our team is trained to identify and work with heritage-sensitive materials.'
  },
  {
    question: 'Which Inner West suburbs do your strata cleaners cover?',
    answer: 'ProCleanCorp covers all Inner West suburbs for strata cleaning including Newtown, Glebe, Balmain, Leichhardt, Marrickville, Annandale, Rozelle, Forest Lodge, Petersham, Dulwich Hill, Camperdown, Erskineville, St Peters and surrounding areas. We operate regular strata cleaning routes throughout the Inner West LGA.'
  },
  {
    question: 'Can you provide a strata cleaning quote for our OC committee in the Inner West?',
    answer: 'Yes. ProCleanCorp provides formal strata cleaning proposals for Inner West OC committees, including a detailed scope of works covering all common areas, pricing per visit and monthly rates, cleaning frequency recommendations, insurance certificates and references from current Inner West strata clients. We can attend OC meetings to present our proposal.'
  }
];

export default function StrataCleaningInnerWestPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Inner West Sydney"
        serviceDescription="ProCleanCorp delivers strata cleaning across the Inner West, covering residential and mixed-use complexes from Glebe to Marrickville with thorough common area programs and OC-ready reporting."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-inner-west"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Heritage Strata Cleaning', 'Lobby Cleaning', 'Lift Cleaning', 'Car Park Cleaning', 'Common Garden Maintenance', 'OC Committee Proposals']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Inner West Strata Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Strata Cleaning Inner West Sydney — Common Area Cleaning Specialists
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers strata cleaning across the Inner West — Newtown, Glebe, Balmain, Leichhardt and surrounds. Heritage-appropriate methods for terrace conversions. OC committee proposals within 48 hours.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Heritage-Safe Methods &nbsp;|&nbsp; ✓ OC Proposals &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Strata cleaning Inner West Sydney common area"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp delivers strata cleaning across the Inner West</strong>, covering residential and mixed-use complexes from Glebe to Marrickville with thorough common area programs and OC-ready reporting. Inner West strata is a patchwork of heritage apartment conversions and modern high-rises — we clean both with appropriate methods.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Strata Cleaning Services — Inner West Sydney</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Inner West strata is a patchwork of heritage apartment conversions and modern high-rises. Victorian terrace conversions with original Victorian tiling in the lobby, sandstone walls in common areas, heritage timber staircases — these require fundamentally different cleaning products and methods from the polished concrete floors and glass facades of modern apartments.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp addresses both extremes. For heritage Inner West strata, we use stone-safe and timber-safe products that clean without etching surfaces or degrading grout. For modern buildings, we apply commercial-grade glass and hard-surface programs. OC-ready reporting and compliance documentation are provided for all Inner West strata contracts.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Inner West Strata Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Heritage lobby & foyer cleaning', 'Modern high-rise common areas', 'Lift interior & threshold cleaning', 'Stairwell & landing cleaning', 'Sandstone & original tile care', 'Timber staircase cleaning', 'Car park scrubbing', 'Bin room cleaning & deodorising', 'Common garden maintenance', 'Window sill & ledge cleaning', 'OC compliance documentation', 'Pressure washing courtyards'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: 'Heritage-Appropriate Products', desc: 'Stone-safe, timber-safe and pH-neutral cleaners for original Victorian and Federation-era strata surfaces.' },
                  { title: 'OC Committee Ready', desc: 'Formal proposals, insurance certificates and compliance reports for OC committee review and approval.' },
                  { title: 'Inner West Local', desc: 'We know the Inner West strata market — heritage buildings, council regulations and local building management expectations.' },
                  { title: 'No Lock-In Contracts', desc: 'Month-to-month strata cleaning agreements — no lock-in for Inner West OC committees.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-greenprimary pl-4">
                    <h4 className="font-semibold text-darkblue mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Inner West Suburbs Covered</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Newtown', 'Glebe', 'Balmain', 'Leichhardt', 'Marrickville', 'Annandale', 'Rozelle', 'Petersham', 'Dulwich Hill', 'Camperdown'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">OC proposals within 48hrs. Inner West coverage.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Strata Cleaning Inner West</h3>
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
                { label: 'Strata Cleaning Marrickville', href: '/strata-cleaning-marrickville' },
                { label: 'Strata Cleaning Leichhardt', href: '/strata-cleaning-leichhardt' },
                { label: 'Commercial Cleaning Inner West', href: '/commercial-cleaning-inner-west' },
                { label: 'Strata Cleaning Sydney', href: '/strata-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Strata Cleaning Inner West — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Heritage-appropriate methods. OC committee proposals within 48 hours.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
