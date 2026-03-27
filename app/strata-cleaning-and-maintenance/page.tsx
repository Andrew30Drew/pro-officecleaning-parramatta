import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning and Maintenance Sydney | Pro Clean Corp',
  description: 'Combined strata cleaning and maintenance services in Sydney. Garden upkeep, minor repairs, common area cleaning — all under one provider. Free quote in 24hrs.',
  keywords: ['strata cleaning and maintenance', 'strata maintenance sydney', 'strata cleaning services', 'body corporate maintenance', 'strata garden maintenance'],
  openGraph: {
    title: 'Strata Cleaning and Maintenance Sydney | Pro Clean Corp',
    description: 'Combined strata cleaning and maintenance services in Sydney. Garden upkeep, minor repairs, common area cleaning — one provider, one invoice.',
    url: 'https://www.procleancorp.com.au/strata-cleaning-and-maintenance',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Strata cleaning and maintenance Sydney' }]
  },
  twitter: { card: 'summary_large_image', title: 'Strata Cleaning and Maintenance Sydney | Pro Clean Corp', description: 'Combined strata cleaning and maintenance services in Sydney. One provider, one invoice.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-and-maintenance' }
};

const faqs = [
  {
    question: 'What is included in strata cleaning and maintenance?',
    answer: 'Strata cleaning and maintenance covers common area cleaning (lobbies, corridors, lifts, bin rooms, car parks) combined with garden and lawn upkeep, minor repairs such as replacing light globes and door handles, pressure washing, window cleaning and graffiti removal. Pro Clean Corp coordinates all these under a single contract for strata managers.'
  },
  {
    question: 'Why use one company for both strata cleaning and maintenance?',
    answer: 'A single provider eliminates coordination overhead for strata managers. Our teams identify maintenance issues during cleaning rounds and address them immediately — reducing call-out fees, preventing small issues from becoming costly repairs and providing a single point of contact for OC committee reporting.'
  },
  {
    question: 'Do you offer strata maintenance contracts?',
    answer: 'Yes. We offer month-to-month and annual strata maintenance contracts across Sydney. Annual contracts include quarterly deep-cleans, scheduled garden services and priority response for urgent maintenance requests, all at a fixed monthly fee for OC budget planning.'
  },
  {
    question: 'Which Sydney areas do you cover for strata cleaning and maintenance?',
    answer: 'We cover all Sydney metro areas including the CBD, Eastern Suburbs, Inner West, North Shore, Western Sydney and the St George/Sutherland region. For buildings outside metro areas, contact us for a custom service arrangement.'
  }
];

export default function StrataCleaningAndMaintenancePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning and Maintenance Sydney"
        serviceDescription="Combined strata cleaning and maintenance services in Sydney. Common area cleaning, garden upkeep, minor repairs and OC reporting under one provider."
        serviceUrl="/strata-cleaning-and-maintenance"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Common Area Cleaning', 'Garden & Lawn Maintenance', 'Minor Repairs', 'Pressure Washing', 'Window Cleaning', 'Graffiti Removal', 'Bin Room Sanitisation', 'Car Park Sweeping']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary/20 border border-greenprimary/40 text-green-200 text-sm font-semibold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
                One Contract · One Invoice · Zero Hassle
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Strata Cleaning and Maintenance — Sydney's Combined Solution
              </h1>
              <p className="text-xl mb-6 text-gray-100 leading-relaxed">
                Pro Clean Corp delivers <strong>strata cleaning and maintenance</strong> under a single contract — covering gardens, repairs, common areas and compliance reporting so your strata manager deals with one team, not five.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {['Cleaning + Maintenance Combined', 'OC-Ready Reporting', 'No Lock-In Contracts', 'Free On-Site Quote'].map((badge, i) => (
                  <span key={i} className="bg-white/10 border border-white/20 text-white text-sm px-3 py-1 rounded-lg">✓ {badge}</span>
                ))}
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/strata.jpg"
                alt="Strata cleaning and maintenance Sydney"
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
            <strong>Strata cleaning and maintenance from Pro Clean Corp</strong> combines scheduled common area cleaning with ongoing garden upkeep, minor repairs and preventative maintenance — giving OC committees a single provider, a single invoice and a building that stays in peak condition year-round.
          </p>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">What Our Strata Cleaning and Maintenance Covers</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">One team handles everything your building needs — from the lobby to the garden bed.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Cleaning Services',
                icon: '🧹',
                items: ['Lobby & foyer cleaning', 'Corridor & stairwell mopping', 'Lift interior disinfection', 'Bin room sanitisation', 'Car park sweeping', 'Window & glass cleaning']
              },
              {
                title: 'Maintenance Services',
                icon: '🔧',
                items: ['Garden & lawn mowing', 'Garden bed weeding & mulching', 'Light globe replacement', 'Door handle & hinge repairs', 'Pressure washing', 'Graffiti removal']
              },
              {
                title: 'Compliance & Reporting',
                icon: '📋',
                items: ['Written service reports', 'Maintenance issue flagging', 'OC committee documentation', 'Photo evidence on request', 'Work order tracking', 'AGM-ready records']
              }
            ].map((col, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6">
                <div className="text-3xl mb-3">{col.icon}</div>
                <h3 className="text-xl font-bold text-darkblue mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-greenprimary font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Combined */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/services/hero4.jpg"
                alt="Professional strata maintenance team"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Why Combine Strata Cleaning and Maintenance?</h2>
              <div className="space-y-5">
                {[
                  { title: 'Single Invoice', desc: 'One monthly fee covers cleaning and maintenance — simplifies OC budgeting and reduces administrative overhead for strata managers.' },
                  { title: 'Issues Caught Earlier', desc: 'Cleaners visit more frequently than maintenance teams. When our cleaners spot a loose handrail or a burnt-out light, it\'s fixed on the same visit.' },
                  { title: 'Consistent Presentation', desc: 'A co-ordinated team ensures the garden and common areas are always aligned — no patchy results from separate contractors with different schedules.' },
                  { title: 'Accountability', desc: 'One provider, one point of contact. Strata managers get a single service report covering both cleaning outcomes and maintenance actions.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-blueprimary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">{i + 1}</div>
                    <div>
                      <h4 className="font-semibold text-darkblue mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Options */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-10 text-center">Strata Maintenance Contract Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                tier: 'Essential Plan',
                freq: 'Weekly cleaning + monthly maintenance',
                price: 'From $450/month',
                features: ['Weekly common area clean', 'Monthly garden service', 'Quarterly pressure wash', 'Written service reports', 'Email maintenance alerts']
              },
              {
                tier: 'Premium Plan',
                freq: 'Daily/2x weekly cleaning + fortnightly maintenance',
                price: 'From $900/month',
                features: ['2–3x weekly common area clean', 'Fortnightly garden service', 'Monthly window clean', 'Priority maintenance response', 'Photo evidence reports', 'Dedicated account manager']
              }
            ].map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 ${i === 1 ? 'bg-blueprimary text-white' : 'bg-gray-50 text-darkblue'}`}>
                <h3 className={`text-xl font-bold mb-1 ${i === 1 ? 'text-white' : 'text-darkblue'}`}>{plan.tier}</h3>
                <p className={`text-sm mb-3 ${i === 1 ? 'text-blue-200' : 'text-gray-500'}`}>{plan.freq}</p>
                <div className={`text-2xl font-bold mb-5 ${i === 1 ? 'text-green-300' : 'text-greenprimary'}`}>{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${i === 1 ? 'text-blue-100' : 'text-gray-700'}`}>
                      <span className={i === 1 ? 'text-green-300' : 'text-greenprimary'}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">All plans include no lock-in contracts. Cancel with 30 days notice.</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Strata Cleaning and Maintenance</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-darkblue mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-darkblue mb-4">Related Strata Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Strata Cleaning Sydney', href: '/strata-cleaning-sydney' },
              { label: 'Professional Strata Cleaning', href: '/professional-strata-cleaning' },
              { label: 'Strata Cleaning Services Sydney', href: '/strata-cleaning-services-sydney' },
              { label: 'Strata Cleaning NSW', href: '/strata-cleaning-nsw' },
              { label: 'Commercial Cleaning Sydney', href: '/commercial-cleaning' },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blueprimary transition">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blueprimary to-darkblue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Get a Free Strata Cleaning & Maintenance Quote</h2>
          <p className="text-xl text-blue-100 mb-6">On-site assessment within 24 hours. Fixed monthly pricing for OC budget planning.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
