import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaning Services | Fitness Facility Cleaning Packages Sydney | Pro Clean Corp',
  description: 'Comprehensive gym cleaning services packages for Sydney fitness facilities. Daily cleans, deep sanitisation, odour control, and equipment maintenance. Request a quote today.',
  keywords: [
    'gym cleaning services',
    'gym cleaning packages Sydney',
    'fitness facility cleaning services',
    'gym deep cleaning services',
    'gym cleaning contract Sydney',
    'fitness centre cleaning packages',
    'gym hygiene services Sydney',
    'Pro Clean Corp gym services'
  ],
  openGraph: {
    title: 'Gym Cleaning Services Sydney | Pro Clean Corp',
    description: 'Comprehensive gym cleaning service packages. Daily maintenance, deep sanitisation, and scheduled programs for Sydney fitness centres.',
    url: '/gym-cleaning-services',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Gym Cleaning Services Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym Cleaning Services Sydney | Pro Clean Corp',
    description: 'Daily maintenance, deep sanitisation, and antimicrobial treatment packages for Sydney gyms and fitness centres.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/gym-cleaning-services' }
};

export default function GymCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Services"
        serviceDescription="Comprehensive gym cleaning service packages for Sydney fitness facilities including daily maintenance cleans, weekly deep sanitisation, monthly treatments, and scheduled antimicrobial programs."
        serviceUrl="/gym-cleaning-services"
        serviceType="Gym Cleaning Services"
        price="$$-$$$"
        additionalServices={[
          'Daily Gym Maintenance Cleaning',
          'Weekly Deep Sanitisation Service',
          'Monthly Antimicrobial Treatment',
          'Changeroom & Shower Deep Clean',
          'Gym Floor Stripping & Resealing',
          'Equipment Disinfection Program',
          'Odour Elimination Treatment',
          'Post-COVID Fogging Service'
        ]}
        faqs={[
          {
            question: 'What gym cleaning service packages does Pro Clean Corp offer?',
            answer: 'We offer three core gym cleaning packages: Daily Maintenance (equipment wipe-down, floor mopping, amenities, high-touch disinfection), Weekly Deep Clean (full equipment disinfection, floor scrubbing, changeroom deep clean, grout treatment), and Monthly Treatment (antimicrobial fogging, odour elimination, high-bay cleaning, exhaust vent cleaning). Custom packages are also available for any size or type of facility.'
          },
          {
            question: 'How do I know which gym cleaning service package I need?',
            answer: 'The right package depends on your gym\'s size, membership numbers, operating hours, and hygiene requirements. Gyms with 200+ members typically need daily maintenance plus a weekly deep clean. Boutique studios with 50 members or fewer may be well-served with a 3-times-weekly maintenance package plus monthly treatment. We offer a free site assessment to recommend the optimal program for your facility.'
          }
        ]}
      />

      {/* Hero — two-image layout with service packages callout */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Gym Cleaning Service Packages
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Gym Cleaning Services Tailored to Your Facility
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                From daily maintenance to monthly antimicrobial treatments — Pro Clean Corp offers structured gym cleaning service packages designed around membership volume, facility size, and your specific hygiene standards.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  View Service Packages
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Daily, Weekly & Monthly Options</span>
                <span>✓ No Lock-In Contracts</span>
                <span>✓ Sydney-Wide</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Image
                  src="/images/services/gym.jpg"
                  alt="Gym cleaning services Sydney fitness centre"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  width={400}
                  height={256}
                  priority
                />
              </div>
              <div className="relative mt-8">
                <Image
                  src="/images/hero2.jpg"
                  alt="Professional gym cleaners at work"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  width={400}
                  height={256}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Gym cleaning services</strong> delivered on a structured program — not just ad-hoc cleans — are the only reliable way to maintain the hygiene standards that protect your members, comply with health regulations, and preserve your facility&apos;s reputation. Pro Clean Corp designs customised gym cleaning programs for every type of fitness business in Sydney.
          </p>
        </div>
      </section>

      {/* Service Packages — unique pricing cards section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Gym Cleaning Service Packages</h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">Choose from our structured gym cleaning packages or request a fully customised program. All packages include the same team each visit.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                name: 'Maintenance',
                freq: 'Daily or 3x/Week',
                price: 'From $120/visit',
                color: 'border-gray-200',
                badge: '',
                services: [
                  'Equipment wipe-down',
                  'Floor mopping & vacuuming',
                  'Amenities & bathroom clean',
                  'Bin collection',
                  'High-touch disinfection',
                  'Reception area tidy'
                ]
              },
              {
                name: 'Deep Clean',
                freq: 'Weekly',
                price: 'From $380/session',
                color: 'border-blueprimary',
                badge: 'Most Popular',
                services: [
                  'Everything in Maintenance, plus:',
                  'Full equipment disinfection',
                  'Floor scrubbing & degreasing',
                  'Changeroom deep clean',
                  'Shower grout treatment',
                  'Mirror & glass polish'
                ]
              },
              {
                name: 'Treatment',
                freq: 'Monthly',
                price: 'From $650/session',
                color: 'border-greenprimary',
                badge: '',
                services: [
                  'Everything in Deep Clean, plus:',
                  'Antimicrobial fogging',
                  'Odour elimination treatment',
                  'High-bay ledge cleaning',
                  'Exhaust vent cleaning',
                  'Sauna & spa deep clean'
                ]
              }
            ].map((pkg, i) => (
              <div key={i} className={`border-2 ${pkg.color} rounded-2xl p-6 relative`}>
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blueprimary text-white text-xs font-bold px-4 py-1 rounded-full">{pkg.badge}</div>
                )}
                <h3 className="text-xl font-bold text-darkblue mb-1">{pkg.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{pkg.freq}</p>
                <p className="text-2xl font-bold text-greenprimary mb-4">{pkg.price}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.services.map((s, j) => (
                    <li key={j} className="text-sm text-gray-700 flex items-start space-x-2">
                      <span className="text-greenprimary font-bold mt-0.5">✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <a href="/contact-us" className="block text-center bg-blueprimary text-white py-2 rounded-full text-sm font-bold hover:bg-darkblue transition">
                  Get a Quote
                </a>
              </div>
            ))}
          </div>

          {/* Main Content + Sidebar */}
          <div className="grid lg:grid-cols-3 gap-10 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Why Structured Gym Cleaning Services Matter</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                A single deep clean or periodic visit is not enough to maintain the hygiene standards of an active fitness facility. The combination of high-body-heat activity, shared equipment, humid wet areas, and continuous foot traffic creates an environment where pathogens can re-establish within 24 hours of cleaning.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp&apos;s gym cleaning service programs are designed to break this cycle — delivering consistent, scheduled cleaning at the right frequency for your membership volume. Our clients report a measurable reduction in member complaints, infection-related incidents, and odour issues within the first month of a structured program.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/gym.jpg"
                alt="Gym cleaning services program Sydney"
                className="rounded-xl shadow-lg w-full h-56 object-cover mb-6"
                width={400}
                height={224}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Related Gym Services</h4>
                <ul className="space-y-2">
                  {[
                    { label: 'Gym Cleaners Sydney', href: '/gym-cleaners-sydney' },
                    { label: 'Gym Cleaning Sydney', href: '/gym-cleaning' },
                    { label: 'Gym Sanitisation', href: '/gym-sanitisation-sydney' },
                    { label: 'Fitness Cleaning Services', href: '/fitness-cleaning-services' },
                    { label: 'Gym Floor Cleaning', href: '/gym-floor-cleaning-sydney' },
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
          <h2 className="text-2xl font-bold text-darkblue mb-6">Gym Cleaning Services — Frequently Asked Questions</h2>
          <div className="space-y-5 mb-12">
            {[
              { q: 'What gym cleaning service packages does Pro Clean Corp offer?', a: 'We offer three core gym cleaning packages: Daily Maintenance (equipment wipe-down, floor mopping, amenities, touch-point disinfection), Weekly Deep Clean (full equipment disinfection, floor scrubbing, changeroom deep clean), and Monthly Treatment (antimicrobial fogging, odour elimination, high-bay cleaning). Custom packages are available for any facility type.' },
              { q: 'How do I choose the right gym cleaning service?', a: 'The right service depends on your gym size, membership numbers, operating hours, and hygiene goals. Gyms with 200+ members typically need daily maintenance plus a weekly deep clean. Boutique studios may be well-served with 3x-weekly maintenance plus monthly treatment. We offer a free site assessment to recommend the optimal program.' },
              { q: 'Do you provide the same team for each gym cleaning service visit?', a: 'Yes. We assign a consistent team to your facility. The same cleaners learn your layout, your management preferences, and the specific sensitivities of your gym over time. This produces more reliable results than sending a different crew each time.' },
              { q: 'Can gym cleaning services be adjusted as our membership grows?', a: 'Absolutely. Our gym cleaning service contracts are flexible by design. As your membership grows, we can scale up frequency or scope with minimal notice. We do not lock you into a fixed service level — we adjust to match your evolving needs.' }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Structured Gym Cleaning Services — Sydney Wide</h3>
            <p className="text-xl mb-8 text-gray-100">Protect your members, preserve your equipment, and maintain your facility&apos;s reputation with a consistent gym cleaning program from Pro Clean Corp.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-10 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Request a Service Package Quote
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
