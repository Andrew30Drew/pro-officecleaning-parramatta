import Image from 'next/image';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Companies Near Me Sydney | Local & Reliable | Pro Clean Corp',
  description: 'Find commercial cleaning companies near you across Greater Sydney. Pro Clean Corp is local, reliable & available this week. Insured, trained staff. Call 1300 494 983.',
  keywords: [
    'commercial cleaning companies near me',
    'commercial cleaning companies near me Sydney',
    'local commercial cleaning company NSW',
    'nearby commercial cleaners Sydney',
    'commercial cleaning company close by',
    'best local commercial cleaners Sydney'
  ],
  openGraph: {
    title: 'Commercial Cleaning Companies Near Me | Pro Clean Corp Sydney',
    description: 'Local commercial cleaning companies across Greater Sydney. Pro Clean Corp is nearby, available this week, and trusted by 1,200+ businesses.',
    url: '/commercial-cleaning-companies-near-me',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Commercial Cleaning Companies Near Me Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Companies Near Me | Pro Clean Corp',
    description: 'Local commercial cleaning companies near you across Greater Sydney. Fast response, same-week starts.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/commercial-cleaning-companies-near-me' }
};

const regions = [
  { region: 'Sydney CBD & Surrounds', suburbs: 'CBD, Pyrmont, Ultimo, Haymarket, Surry Hills, Redfern' },
  { region: 'North Shore', suburbs: 'Chatswood, North Sydney, Artarmon, Lane Cove, St Leonards' },
  { region: 'Inner West', suburbs: 'Newtown, Leichhardt, Marrickville, Dulwich Hill, Balmain, Glebe' },
  { region: 'Eastern Suburbs', suburbs: 'Bondi, Randwick, Kensington, Mascot, Botany, Alexandria' },
  { region: 'Parramatta & West', suburbs: 'Parramatta, Auburn, Merrylands, Penrith, Blacktown, Norwest' },
  { region: 'South Sydney', suburbs: 'Sutherland, Hurstville, Bankstown, Arncliffe, Kogarah, Rockdale' },
];

export default function CommercialCleaningCompaniesNearMePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaning Companies Near Me Sydney"
        serviceDescription="Local commercial cleaning companies serving every region of Greater Sydney — offices, retail, industrial, strata, medical and hospitality premises."
        serviceUrl="/commercial-cleaning-companies-near-me"
        serviceType="Commercial Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Office Cleaning',
          'Retail Cleaning',
          'Medical Centre Cleaning',
          'Strata Cleaning',
          'Industrial Cleaning',
          'Restaurant & Hospitality Cleaning'
        ]}
        faqs={[
          {
            question: 'Which commercial cleaning company is nearest to my Sydney business?',
            answer: 'Pro Clean Corp has cleaning teams positioned across all regions of Greater Sydney — from the CBD to Penrith, and from the Northern Beaches to Sutherland. Call 1300 494 983 to confirm coverage in your specific suburb and arrange a same-week site visit.'
          },
          {
            question: 'How do I find a reliable commercial cleaning company near me?',
            answer: 'Look for companies with verifiable local reviews, directly employed staff, public liability insurance, and documented quality systems. Pro Clean Corp meets all these criteria and offers a satisfaction guarantee on every clean.'
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
                Local Across All Sydney Regions
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Cleaning Companies Near Me
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Pro Clean Corp is one of the most geographically extensive commercial cleaning companies in Greater Sydney — with teams covering every region from the CBD to the outer suburbs. Fast response, same-week availability, and a satisfaction guarantee.
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
                <span>✓ Near You Right Now</span>
                <span>✓ Same-Week Starts</span>
                <span>✓ No Lock-In Contracts</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Commercial cleaning companies near me Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">6</div>
                <div className="text-xs text-gray-500">Sydney Regions Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            When searching for <strong>commercial cleaning companies near me</strong>, proximity matters — but so does quality. Pro Clean Corp combines genuine local presence across Greater Sydney with the professional standards, trained staff, and quality audit systems that larger companies can&apos;t match at the local level.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Local Commercial Cleaning — Every Sydney Region</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                The advantage of a local commercial cleaning company is real. When your cleaner is based nearby, response times are faster, call-outs for issues are handled the same day, and your account manager knows the local business environment. Pro Clean Corp operates regional teams across every major Sydney corridor.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We cover six distinct Sydney regions with dedicated teams — ensuring that whether your business is in Chatswood on the North Shore, Parramatta in the west, Mascot near the airport, or Hurstville in the south, a Pro Clean Corp team is never far away.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">What to Expect When You Call Us</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                When you contact Pro Clean Corp, you&apos;ll speak directly with a team member — not a bot or offshore call centre. We&apos;ll confirm coverage in your suburb, arrange a site assessment within 48 hours, and provide a detailed quote. Most clients can be cleaned within the same week of first contact.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/faq3.jpg"
                alt="Local commercial cleaning company near me"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Our Local Guarantee</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ 48-hour site visit</li>
                  <li>✓ Same-week commencement</li>
                  <li>✓ Direct account manager</li>
                  <li>✓ Local team allocation</li>
                  <li>✓ Satisfaction guarantee</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Regions Grid */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Our Sydney Regional Coverage</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-blueprimary mb-2">{item.region}</h4>
                  <p className="text-sm text-gray-600">{item.suburbs}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Cleaning Services Near You</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Daily office cleaning',
                'Retail & shopfront cleaning',
                'Industrial & warehouse cleaning',
                'Medical & dental cleaning',
                'Strata & building cleaning',
                'Gym & fitness centre cleaning',
                'Childcare & education cleaning',
                'Restaurant kitchen cleaning',
                'Post-construction cleaning',
                'End-of-lease cleaning',
                'Window & glass cleaning',
                'Pressure washing services'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Commercial Cleaning Companies Near Me</h3>
            <div className="space-y-6">
              {[
                { q: 'Which commercial cleaning company is nearest to my Sydney business?', a: 'Pro Clean Corp has cleaning teams positioned across all regions of Greater Sydney including the CBD, North Shore, Inner West, Eastern Suburbs, Western Suburbs, and South Sydney. Call 1300 494 983 to confirm coverage and arrange a same-week site visit.' },
                { q: 'How do I find a reliable commercial cleaning company near me?', a: 'Look for companies with verifiable local reviews, directly employed and police-checked staff, current public liability insurance, and documented quality assurance systems. Pro Clean Corp meets all these standards and backs every clean with a satisfaction guarantee.' },
                { q: 'Do local commercial cleaning companies cost more than large chains?', a: 'Not necessarily. Local commercial cleaning companies often have lower overheads and fewer franchise fees to cover, which can translate to more competitive pricing. Pro Clean Corp offers transparent, itemised pricing with no hidden fees or surcharges.' },
                { q: 'Can a nearby commercial cleaning company start immediately?', a: 'Yes. Pro Clean Corp can usually arrange a site assessment within 24–48 hours and commence cleaning within the same week in most Greater Sydney locations. Emergency cleaning cover is also available for urgent situations.' }
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
            <h3 className="text-3xl font-bold mb-4">The Commercial Cleaning Company Nearest to You</h3>
            <p className="text-xl mb-6 text-gray-100">
              Local presence, professional standards, satisfaction guaranteed. Contact Pro Clean Corp for a fast, free quote today.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              Call 1300 494 983 — We&apos;re Near You
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
