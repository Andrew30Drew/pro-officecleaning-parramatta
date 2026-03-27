import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Corporate Cleaning Services | Sydney Office Cleaning Packages | Pro Clean Corp',
  description: 'Complete corporate cleaning services for Sydney businesses. Tailored packages for offices, boardrooms, corporate campuses, and multi-floor tenancies. Fully managed. Call 1300 494 983.',
  keywords: [
    'corporate cleaning services',
    'corporate cleaning services Sydney',
    'office cleaning packages Sydney',
    'corporate janitorial services',
    'office cleaning contract Sydney',
    'corporate facility cleaning',
    'managed office cleaning Sydney',
    'Pro Clean Corp corporate services'
  ],
  openGraph: {
    title: 'Corporate Cleaning Services Sydney | Pro Clean Corp',
    description: 'Fully managed corporate cleaning service packages for Sydney offices. Tailored programs, consistent teams, and monthly quality reporting.',
    url: '/corporate-cleaning-services',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Corporate Cleaning Services Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Cleaning Services Sydney | Pro Clean Corp',
    description: 'Tailored corporate cleaning service packages for Sydney offices. Consistent teams, flexible scheduling, monthly quality reports.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/corporate-cleaning-services' }
};

export default function CorporateCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Corporate Cleaning Services"
        serviceDescription="Fully managed corporate cleaning services for Sydney offices and commercial buildings. Tailored cleaning programs with consistent teams, dedicated account management, and monthly quality reporting."
        serviceUrl="/corporate-cleaning-services"
        serviceType="Corporate Cleaning Services"
        price="$$-$$$"
        additionalServices={[
          'Daily Office Cleaning Program',
          'Periodic Deep Clean Services',
          'Boardroom & Event Preparation',
          'Green Cleaning Certification Programs',
          'After-Hours Corporate Cleaning',
          'Day Porter & Concierge Cleaning',
          'Multi-Site Corporate Contracts',
          'Compliance Documentation Package'
        ]}
        faqs={[
          {
            question: 'What does a corporate cleaning services contract include?',
            answer: 'A Pro Clean Corp corporate cleaning services contract includes a tailored cleaning scope for your entire tenancy, a dedicated operations manager, a consistent assigned cleaning team, weekly cleaning logs, monthly quality audit reports, certificate of insurance documentation, and flexible service adjustments as your office needs change. No lock-in contract periods are required.'
          },
          {
            question: 'How does Pro Clean Corp manage corporate cleaning contracts?',
            answer: 'Every corporate cleaning services client receives a dedicated Account Manager as their single point of contact. The Account Manager conducts the initial site assessment, builds the cleaning program, manages the assigned team, coordinates access and inductions, responds to ad-hoc requests, and delivers monthly performance reports. You never need to chase down a different supervisor each time.'
          }
        ]}
      />

      {/* Hero — image-left with feature list right */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/services/office.webp"
                  alt="Corporate cleaning services Sydney office"
                  className="rounded-2xl shadow-xl w-full h-72 object-cover"
                  width={400}
                  height={288}
                  priority
                />
                <Image
                  src="/images/hero1.jpg"
                  alt="Corporate office cleaning team"
                  className="rounded-2xl shadow-xl w-full h-72 object-cover mt-8"
                  width={400}
                  height={288}
                  priority
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-greenprimary text-white rounded-xl shadow-lg px-6 py-3 whitespace-nowrap">
                <span className="font-bold">4.9★ Average Rating</span> — 300+ Sydney Clients
              </div>
            </div>
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Fully Managed Corporate Programs
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Corporate Cleaning Services Built Around Your Business
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp delivers fully managed corporate cleaning services — from daily office maintenance to periodic deep cleans, green certification programs, and multi-site contract management. One partner for all your corporate cleaning needs.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Request a Corporate Program
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Dedicated Account Manager</span>
                <span>✓ Monthly Quality Reports</span>
                <span>✓ Multi-Site Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Corporate cleaning services</strong> are more than a cleaning contract — they are a managed facility service that directly impacts staff wellbeing, client perception, and operational efficiency. Pro Clean Corp provides Sydney businesses with structured, fully managed corporate cleaning programs that ensure consistent results, transparent reporting, and genuine accountability.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Corporate Cleaning Service Tiers</h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">Structured service tiers designed to match different office sizes and corporate requirements.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                tier: 'Essentials',
                size: 'Up to 500m²',
                tagline: 'For boutique offices and SMEs',
                price: 'From $180/visit',
                highlight: false,
                features: [
                  'Daily cleaning program',
                  'Dedicated 2-person team',
                  'Workstation & common area cleaning',
                  'Kitchen & bathroom sanitisation',
                  'Bin collection',
                  'Monthly quality check-in'
                ]
              },
              {
                tier: 'Professional',
                size: '500m² – 2,000m²',
                tagline: 'For mid-size offices & tenancies',
                price: 'From $380/visit',
                highlight: true,
                features: [
                  'Everything in Essentials, plus:',
                  'Dedicated 4–6 person team',
                  'Boardroom & meeting room resets',
                  'Periodic carpet vacuuming',
                  'Window cleaning (internal)',
                  'Fortnightly quality audit report'
                ]
              },
              {
                tier: 'Enterprise',
                size: '2,000m²+',
                tagline: 'For corporate headquarters & campuses',
                price: 'Custom pricing',
                highlight: false,
                features: [
                  'Everything in Professional, plus:',
                  'Multi-floor team management',
                  'Day porter / concierge service',
                  'Green cleaning certifications',
                  'Compliance documentation',
                  'Weekly quality audit reporting'
                ]
              }
            ].map((tier, i) => (
              <div key={i} className={`rounded-2xl p-7 border-2 ${tier.highlight ? 'border-blueprimary shadow-lg bg-blueprimary/5' : 'border-gray-200 bg-white'}`}>
                {tier.highlight && <div className="text-center mb-3"><span className="bg-blueprimary text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</span></div>}
                <h3 className="text-xl font-bold text-darkblue mb-1">{tier.tier}</h3>
                <p className="text-sm text-gray-500 mb-1">{tier.size}</p>
                <p className="text-xs text-gray-400 italic mb-3">{tier.tagline}</p>
                <p className="text-2xl font-bold text-greenprimary mb-5">{tier.price}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((f, j) => (
                    <li key={j} className="text-sm text-gray-700 flex items-start space-x-2">
                      <span className="text-greenprimary font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="/contact-us" className={`block text-center py-2 rounded-full text-sm font-bold transition ${tier.highlight ? 'bg-blueprimary text-white hover:bg-darkblue' : 'border-2 border-blueprimary text-blueprimary hover:bg-blueprimary hover:text-white'}`}>
                  Get a Quote
                </a>
              </div>
            ))}
          </div>

          {/* Main Content + Sidebar */}
          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">What Sets Our Corporate Cleaning Services Apart</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Many cleaning companies offer corporate office cleaning. Very few deliver a genuinely managed service. The difference between the two is accountability — a managed service means you have a named account manager, a documented cleaning program, regular quality checks, and a performance guarantee.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp invests in the management infrastructure that makes corporate cleaning services truly reliable. Our operations team conducts unannounced quality audits, reviews cleaning logs weekly, and proactively resolves any issues before clients notice them. This is the corporate cleaning standard you deserve.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Dedicated Account Manager',
                  'Same team every visit',
                  'Monthly quality reporting',
                  'SLA-backed response times',
                  'Police-checked, inducted staff',
                  '$20M public liability insurance',
                  'Flexible contract terms',
                  'Green cleaning available'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-greenprimary flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/services/office.webp"
                alt="Managed corporate cleaning services Sydney"
                className="rounded-xl shadow-lg w-full h-56 object-cover mb-6"
                width={400}
                height={224}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Related Services</h4>
                <ul className="space-y-2">
                  {[
                    { label: 'Corporate Cleaning', href: '/corporate-cleaning' },
                    { label: 'Office Cleaning Sydney', href: '/office-cleaning' },
                    { label: 'Commercial Cleaning', href: '/commercial-cleaning' },
                    { label: 'Commercial Cleaners NSW', href: '/commercial-cleaners-nsw' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-blueprimary hover:text-darkblue transition">→ {link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-darkblue mb-6">Corporate Cleaning Services — FAQs</h2>
          <div className="space-y-5 mb-12">
            {[
              { q: 'What does a corporate cleaning services contract include?', a: 'A Pro Clean Corp contract includes a tailored cleaning scope, dedicated operations manager, consistent cleaning team, weekly cleaning logs, monthly quality audit reports, certificate of insurance documentation, and flexible service adjustments. No lock-in contract periods are required.' },
              { q: 'How does Pro Clean Corp manage corporate cleaning contracts?', a: 'Every corporate client receives a dedicated Account Manager as their single point of contact. The Account Manager conducts the initial site assessment, builds the cleaning program, manages the team, coordinates access and inductions, and delivers monthly performance reports.' },
              { q: 'Do you offer green corporate cleaning services?', a: 'Yes. We offer environmentally certified corporate cleaning programs using Ecolab, Greenline, and other certified-green cleaning products. We can provide documentation of your building\'s cleaning chemical footprint for NABERS, Green Star, or corporate sustainability reporting.' },
              { q: 'Can you manage corporate cleaning across multiple Sydney offices?', a: 'Yes. Multi-site corporate contracts are one of our specialisations. We manage each site under a single service agreement, with unified quality reporting across all locations. Your Account Manager has visibility of all sites and coordinates any site-specific requirements centrally.' }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Corporate Cleaning Services — Managed, Measured, Guaranteed</h3>
            <p className="text-xl mb-8 text-gray-100">Sydney&apos;s leading businesses trust Pro Clean Corp to manage their office cleaning. One partner, all locations, full accountability.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-10 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Request a Corporate Cleaning Program
              </a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-10 py-3 rounded-full font-bold hover:bg-white/10 transition">
                1300 494 983
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
