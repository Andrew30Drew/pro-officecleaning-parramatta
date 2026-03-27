import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Car Showroom Cleaning Sydney | Dealership Cleaning | ProCleanCorp',
  description: 'Professional car showroom and auto dealership cleaning across Sydney. Showroom floor polishing, glass buffing, vehicle display areas, service bays. Daily standard. Free quote in 24hrs.',
  keywords: 'car showroom cleaning sydney, car dealership cleaning sydney, auto dealership cleaning, showroom floor cleaning sydney, dealership cleaning services, vehicle display area cleaning',
  openGraph: {
    title: 'Car Showroom Cleaning Sydney | Dealership Cleaning | ProCleanCorp',
    description: 'Car showroom and auto dealership cleaning across Sydney. Showroom floor polishing, glass buffing, vehicle display areas, service bays. Free quote in 24hrs.',
    url: 'https://www.procleancorp.com.au/car-showroom-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Car showroom cleaning Sydney auto dealership' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/car-showroom-cleaning-sydney' }
};

const faqs = [
  {
    question: 'How much does car showroom cleaning cost in Sydney?',
    answer: 'Car showroom cleaning in Sydney typically costs $55–$95 per hour depending on showroom size, the number of vehicles on display, and whether service bays are included. Small boutique dealerships average $200–$400 per clean. Large multi-brand showrooms are quoted per floor plate. ProCleanCorp provides fixed-price daily or weekly contracts after an on-site assessment.'
  },
  {
    question: 'Do you clean around vehicles on display without touching them?',
    answer: 'Yes. Our showroom cleaning teams are trained to clean around displayed vehicles without touching paintwork, wheels, or glass. We use microfibre mops and non-abrasive products on showroom floors around vehicles, and electrostatic safety protocols near high-value display models.'
  },
  {
    question: 'Can you clean our car dealership service bay as well as the showroom?',
    answer: 'Absolutely. ProCleanCorp provides combined showroom and service bay cleaning for dealerships. Service bays require a different cleaning approach — oil and fluid degreasing, floor draining, pressure washing — and we have the industrial equipment to handle both areas under one contract.'
  },
  {
    question: 'What time do you clean car showrooms in Sydney?',
    answer: 'We typically clean before showroom opening — starts from 5am or 6am are standard for dealerships. We can also provide evening post-close cleans. The schedule is set around your showroom hours to ensure vehicles are never moved by our teams and staff are not disrupted during trading.'
  }
];

export default function CarShowroomCleaningSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Car Showroom Cleaning Sydney"
        serviceDescription="Professional car showroom and auto dealership cleaning across Sydney. Showroom floor polishing, glass buffing, vehicle display areas and service bays. Pre-opening scheduling, fully insured."
        serviceUrl="https://www.procleancorp.com.au/car-showroom-cleaning-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Showroom Floor Polishing', 'Glass & Window Buffing', 'Vehicle Display Area Cleaning', 'Service Bay Cleaning', 'Reception & Lounge Cleaning', 'Pre-Opening Scheduling']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Auto Dealership & Showroom Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Car Showroom Cleaning Sydney — Dealership-Grade Presentation Daily
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers pre-opening car showroom cleaning across Sydney — showroom floor polishing, glass buffing, vehicle display areas and service bays cleaned to brand-standard every morning.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Pre-Opening Starts from 5am &nbsp;|&nbsp; ✓ Showroom + Service Bay &nbsp;|&nbsp; ✓ Free Quote in 24hrs</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Car showroom cleaning Sydney auto dealership"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF Answer Box */}
      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides specialist car showroom cleaning across Sydney</strong>, covering auto dealerships, multi-brand showrooms and boutique dealers. We handle showroom floor polishing, streak-free glass buffing, vehicle display area maintenance and service bay cleaning — all scheduled before your showroom opens so vehicles are never moved and trading is never disrupted.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Car Showroom Cleaning in Sydney</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                A car dealership's showroom floor is arguably its most important sales asset — buyers form their first impression of your brand within seconds of walking through the door. A scuffed, dusty or poorly maintained showroom floor communicates poor attention to detail before a salesperson even approaches. ProCleanCorp maintains your showroom to the exact daily standard your brand and manufacturer require.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We work exclusively before opening — typically from 5am or 6am — so our teams are finished and gone before your sales staff arrive and vehicles are never touched. We use microfibre cleaning systems and non-abrasive products on all showroom surfaces, and our glass buffing leaves internal and external glass streak-free under both natural and showroom lighting.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Car Showroom Cleaning Inclusions</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Showroom floor polish & buff',
                    'Streak-free internal glass buffing',
                    'External glass & window cleaning',
                    'Vehicle display area dusting',
                    'Reception & customer lounge cleaning',
                    'Bathroom & amenities sanitisation',
                    'Finance office & desk areas',
                    'Parts counter & display cases',
                    'Service reception area cleaning',
                    'Service bay floor degreasing',
                    'Car park sweeping & pressure wash',
                    'Pre-opening quality walkthrough'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-lg font-bold text-darkblue mb-4">Car Showroom Cleaning Pricing — Sydney</h3>
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-gray-200"><th className="text-left py-2 text-darkblue">Showroom Type</th><th className="text-left py-2 text-darkblue">Typical Cost</th><th className="text-left py-2 text-darkblue">Frequency</th></tr></thead>
                  <tbody>
                    {[
                      ['Boutique / small dealer (1–5 vehicles)', '$200–$350/clean', 'Daily or 5x/week'],
                      ['Mid-size dealership (6–20 vehicles)', '$350–$600/clean', 'Daily'],
                      ['Large multi-brand showroom (20+ vehicles)', '$600–$1,200/clean', 'Daily'],
                      ['Service bay only', '$150–$300/visit', 'Daily or weekly'],
                    ].map(([type, cost, freq], i) => (
                      <tr key={i} className="border-b border-gray-100"><td className="py-2 text-gray-700">{type}</td><td className="py-2 font-semibold text-darkblue">{cost}</td><td className="py-2 text-gray-600">{freq}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: 'Pre-Opening Schedule', desc: 'Cleans completed before opening — typically 5–7am. Vehicles are never touched or moved by our teams.' },
                  { title: 'Showroom + Service Bay', desc: 'One contractor for your entire dealership. Showroom, service reception, parts counter and workshop bays.' },
                  { title: 'Brand Standard Compliance', desc: 'We clean to manufacturer brand standards for OEM-franchised dealerships — available in written format.' },
                  { title: 'No Lock-In Contracts', desc: 'Month-to-month agreements. Most dealerships stay with us long-term because consistency speaks for itself.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-greenprimary pl-4">
                    <h4 className="font-semibold text-darkblue mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-lg font-bold text-darkblue mb-3">Showroom Floor Types We Clean</h3>
                <p className="text-gray-700 mb-4 text-sm">Different showroom floors require different cleaning approaches. ProCleanCorp uses surface-specific products for each:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { floor: 'Polished Concrete', method: 'Neutral pH cleaner + rotary burnisher. Preserves sealer and shine.' },
                    { floor: 'Epoxy Coating', method: 'Non-abrasive mopping + occasional scrubber-dryer. Maintains anti-slip rating.' },
                    { floor: 'Porcelain/Ceramic Tile', method: 'Grout-safe neutral cleaner + microfibre mop. Streak-free under spotlights.' },
                    { floor: 'Vinyl/LVT', method: 'PH-neutral cleaner only — no solvent-based products that lift adhesive.' },
                    { floor: 'Timber/Hybrid', method: 'Dry microfibre mop + approved timber cleaner. No excess moisture.' },
                    { floor: 'Terrazzo', method: 'Purpose-made terrazzo cleaner + diamond pad burnishing for premium shine.' },
                  ].map((f, i) => (
                    <div key={i} className="bg-white p-3 rounded-lg border border-gray-100">
                      <p className="font-semibold text-darkblue text-sm mb-1">{f.floor}</p>
                      <p className="text-gray-600 text-xs">{f.method}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Dealership Brands We Service</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Toyota & Lexus dealerships', 'BMW & MINI showrooms', 'Mercedes-Benz', 'Honda & Kia dealerships', 'Multi-brand used car yards', 'Boutique prestige dealers', 'Motorcycle showrooms', 'Fleet & commercial dealers'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site assessment for your Sydney dealership. Fixed daily pricing.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Car Showroom Cleaning Sydney</h3>
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
                { label: 'Showroom Cleaning Sydney', href: '/showroom-cleaning-sydney' },
                { label: 'Auto Dealership Cleaning Sydney', href: '/auto-dealership-cleaning-sydney' },
                { label: 'Car Dealership Cleaning Sydney', href: '/car-dealership-cleaning-sydney' },
                { label: 'Commercial Cleaning Sydney', href: '/commercial-cleaning-sydney' },
                { label: 'Office Cleaning Sydney', href: '/office-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get Your Free Car Showroom Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">On-site assessment within 24 hours. Fixed daily pricing, no lock-in contracts.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
