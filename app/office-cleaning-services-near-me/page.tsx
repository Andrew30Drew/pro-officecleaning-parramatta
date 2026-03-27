import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Services Near Me | Sydney NSW Local Office Cleaners | Pro Clean Corp',
  description: 'Looking for office cleaning services near you in Sydney? Pro Clean Corp provides local office cleaning across all Sydney suburbs. Same-day quotes, flexible schedules. Call 1300 494 983.',
  keywords: [
    'office cleaning services near me',
    'office cleaners near me Sydney',
    'local office cleaning Sydney',
    'office cleaning near me NSW',
    'office cleaning services Sydney',
    'commercial office cleaners near me',
    'office cleaning company near me'
  ],
  openGraph: {
    title: 'Office Cleaning Services Near Me | Sydney | Pro Clean Corp',
    description: 'Local office cleaning services across all Sydney suburbs. Pro Clean Corp provides professional, reliable office cleaners near you — flexible schedules, free quotes.',
    url: '/office-cleaning-services-near-me',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Office Cleaning Services Near Me Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Cleaning Services Near Me | Pro Clean Corp Sydney',
    description: 'Local office cleaners near you across Sydney NSW. Free quotes, flexible schedules, professional results.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/office-cleaning-services-near-me' }
};

const officeAreas = [
  { name: 'Sydney CBD', href: '/office-cleaning-sydney' },
  { name: 'North Sydney', href: '/office-cleaning-north-sydney' },
  { name: 'Parramatta', href: '/office-cleaning-parramatta' },
  { name: 'Chatswood', href: '/office-cleaning-chatswood' },
  { name: 'Penrith', href: '/office-cleaning-penrith' },
  { name: 'Bankstown', href: '/office-cleaning-bankstown' },
  { name: 'Hornsby', href: '/office-cleaning-hornsby' },
  { name: 'Macquarie Park', href: '/office-cleaning-macquarie-park' },
  { name: 'Artarmon', href: '/office-cleaning-artarmon' },
  { name: 'Lane Cove', href: '/office-cleaning-lane-cove' },
  { name: 'Norwest', href: '/office-cleaning-norwest' },
  { name: 'Castle Hill', href: '/office-cleaning-castle-hill' },
  { name: 'Concord', href: '/office-cleaning-concord' },
  { name: 'Glebe', href: '/office-cleaning-glebe' },
  { name: 'Five Dock', href: '/office-cleaning-five-dock' },
];

export default function OfficeCleaningServicesNearMePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Services Near Me"
        serviceDescription="Pro Clean Corp provides professional office cleaning services near you across all Sydney suburbs. Local office cleaners with flexible scheduling, same-day quotes, and a satisfaction guarantee."
        serviceUrl="/office-cleaning-services-near-me"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={[
          'Daily Office Cleaning', 'Weekly Office Cleaning',
          'Deep Clean Services', 'After-Hours Cleaning',
          'Shared Workspace Cleaning', 'Reception & Lobby Cleaning',
          'Kitchen & Breakroom Cleaning', 'Bathroom Sanitisation'
        ]}
        faqs={[
          {
            question: 'How do I find office cleaning services near me in Sydney?',
            answer: 'Pro Clean Corp provides local office cleaning services across all Greater Sydney suburbs. We have cleaning teams stationed throughout Sydney to ensure fast response times and consistent service. Call 1300 494 983 or submit an online enquiry for a same-day quote.'
          },
          {
            question: 'What do office cleaning services near me include?',
            answer: 'Local office cleaning services typically include vacuuming, mopping, dusting, desk surface wipe-down, kitchen and breakroom cleaning, bathroom sanitisation, bin emptying, and glass/mirror cleaning. We can customise the scope based on your office layout and requirements.'
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
                Local Office Cleaners — All Sydney Suburbs
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Cleaning Services Near Me
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Searching for professional office cleaning services near you in Sydney? Pro Clean Corp has local cleaning teams across every Sydney suburb — ready to deliver consistent, reliable office cleaning on your schedule and at your price point.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Same-Day Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Local Cleaners Near You</span>
                <span>✓ Same-Day Quotes</span>
                <span>✓ Flexible Scheduling</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Office cleaning services near me Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">All</div>
                <div className="text-xs text-gray-500">Sydney Suburbs Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Office cleaning services near you</strong> from Pro Clean Corp mean local cleaners who know your area, respond quickly, and consistently deliver the clean workspace your team deserves. We cover every Sydney suburb from Penrith to Bondi, Hornsby to Sutherland.
          </p>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Why Local Office Cleaning Services Matter</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Choosing local office cleaning services near you isn&apos;t just about convenience — it&apos;s about getting a cleaning partner who can respond quickly, understands your suburb&apos;s business environment, and delivers consistency you can count on. When something needs attention, a local cleaner can be there fast.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Pro Clean Corp maintains cleaning teams across all of Greater Sydney. Whether your office is in Parramatta, North Sydney, the CBD, or the Hills District, there&apos;s a Pro Clean Corp team near you ready to deliver professional results.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Fast Response Time', desc: 'Local teams mean quicker quotes, faster starts, and rapid response to any cleaning issues.' },
                  { title: 'Consistent Cleaning Staff', desc: 'We assign regular cleaners to your office so they know your space and your standards.' },
                  { title: 'Flexible Scheduling', desc: 'Daily, weekly, fortnightly or one-off cleans — scheduled around your business hours.' },
                  { title: 'Satisfaction Guarantee', desc: 'If you\'re not happy, we\'ll re-clean within 24 hours at no extra charge.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4 bg-gray-50 p-4 rounded-xl">
                    <div className="w-8 h-8 bg-greenprimary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-darkblue">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/hero/hero1.jpg"
                alt="Local office cleaners near you Sydney"
                className="rounded-2xl shadow-xl w-full h-full object-cover max-h-[500px]"
                width={600}
                height={500}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">What&apos;s Included in Our Office Cleaning Services</h2>
          <p className="text-center text-gray-600 mb-10">A comprehensive clean for every part of your office environment.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                area: 'Workstations & Desks',
                items: ['Desk surface wipe-down', 'Monitor & keyboard dusting', 'Chair surface cleaning', 'Desk bin emptying', 'Cable management area dusting']
              },
              {
                area: 'Common Areas',
                items: ['Reception desk cleaning', 'Lobby & waiting area cleaning', 'Meeting room cleaning', 'Corridor vacuuming & mopping', 'Lift lobby cleaning']
              },
              {
                area: 'Kitchen & Amenities',
                items: ['Bench & appliance cleaning', 'Sink & tap scrubbing', 'Fridge exterior wipe-down', 'Microwave cleaning', 'Dishwasher area cleaning']
              },
              {
                area: 'Bathrooms',
                items: ['Toilet disinfection', 'Basin & tap cleaning', 'Mirror polishing', 'Floor mopping', 'Soap & paper restocking']
              },
              {
                area: 'Floors',
                items: ['Carpet vacuuming', 'Hard floor mopping', 'Entrance mat cleaning', 'Tile scrubbing', 'Floor buffing (optional)']
              },
              {
                area: 'Glass & Windows',
                items: ['Internal glass cleaning', 'Mirror polishing', 'Glass partition cleaning', 'Window sill dusting', 'Fingerprint removal']
              },
            ].map((section, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-darkblue mb-3 text-lg">{section.area}</h3>
                <ul className="space-y-1">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className="text-greenprimary">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Office Cleaning Services Near You — Sydney Suburbs</h2>
          <p className="text-center text-gray-600 mb-10">Local office cleaning teams across Greater Sydney — near your suburb.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {officeAreas.map((area) => (
              <Link key={area.href} href={area.href} className="bg-gray-50 p-3 rounded-lg text-sm text-center text-gray-700 hover:text-blueprimary hover:bg-white hover:shadow-md transition border border-gray-100 block">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">FAQs — Office Cleaning Services Near Me</h2>
          <div className="space-y-6">
            {[
              { q: 'How do I find office cleaning services near me in Sydney?', a: 'Pro Clean Corp covers all of Greater Sydney. Call 1300 494 983 or submit an online enquiry — we\'ll connect you with the local team nearest your office for a same-day or next-day quote.' },
              { q: 'What do office cleaning services near me include?', a: 'Our office cleaning services include vacuuming, mopping, desk wipe-downs, kitchen and breakroom cleaning, bathroom sanitisation, bin emptying, and glass cleaning. We tailor the scope to your office layout and requirements.' },
              { q: 'How much does office cleaning cost near me in Sydney?', a: 'Office cleaning costs depend on office size, frequency, and specific requirements. Most small offices (under 200m²) start from $80–$150 per clean. We provide free, detailed quotes with no obligation.' },
              { q: 'Can you provide the same cleaner each visit?', a: 'Yes. We assign consistent cleaning staff to your office so they become familiar with your space, preferences, and standards. Consistency is a key part of the quality of service we deliver.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-darkblue mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blueprimary to-darkblue">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Find Office Cleaners Near You Today</h2>
          <p className="text-xl mb-8 text-gray-200">Pro Clean Corp has local office cleaning teams across all Sydney suburbs. Get a free quote today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact-us" className="bg-greenprimary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition shadow-lg">
              Get a Free Local Quote
            </a>
            <a href="tel:1300494983" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition">
              1300 494 983
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
