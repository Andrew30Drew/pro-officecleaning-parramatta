import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Cleaners Parramatta NSW | Professional Office Cleaning Services',
  description: 'Trusted office cleaners in Parramatta NSW. Pro Clean Corp provides professional office cleaning for businesses across Parramatta and Western Sydney. Daily, weekly and periodic cleaning. Free quotes available.',
  keywords: 'office cleaners Parramatta, office cleaning Parramatta NSW, professional office cleaners western Sydney, commercial cleaners Parramatta',
  openGraph: {
    title: 'Office Cleaners Parramatta NSW | Professional Office Cleaning Services',
    description: 'Trusted office cleaners in Parramatta NSW. Pro Clean Corp provides professional office cleaning for businesses across Parramatta and Western Sydney. Daily, weekly and periodic cleaning. Free quotes available.',
    url: 'https://www.procleancorp.com.au/office-cleaners-parramatta',
    type: 'website',
    images: [{ url: '/images/services/office.webp', alt: 'Office cleaners Parramatta NSW professional cleaning services' }],
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaners-parramatta' },
};

const services = [
  'Daily office cleaning',
  'Workstation & desk sanitisation',
  'Kitchen & breakroom cleaning',
  'Bathroom & amenities cleaning',
  'Reception & lobby cleaning',
  'Meeting room cleaning',
  'Floor vacuuming & mopping',
  'Window & glass cleaning',
  'Bin emptying & recycling',
  'High-touch surface disinfection',
  'Computer & equipment dusting',
  'After-hours & weekend cleaning',
];

const processSteps = [
  { title: 'Free Office Assessment', desc: 'We visit your Parramatta office, walk through every area, understand your specific needs and provide a written fixed-price quote within 24 hours.' },
  { title: 'Tailored Cleaning Schedule', desc: 'We build a customised cleaning checklist and schedule — daily, weekly or periodic — designed around your office hours and operational requirements.' },
  { title: 'Dedicated Cleaning Team', desc: 'The same trained, police-checked cleaners are assigned to your office every visit so your team knows who to expect and your space is cleaned consistently.' },
  { title: 'Regular Quality Checks', desc: 'Supervisors conduct regular spot checks on your premises. Any concern is resolved within 24 hours — no arguments, no additional charges.' },
];

const benefits = [
  { title: 'Local Parramatta-Based Team', desc: 'Our Parramatta cleaners are based locally — that means faster response times, better knowledge of the area\'s buildings and access procedures, and reliable scheduling you can count on.' },
  { title: 'Consistent Same Cleaners', desc: 'We assign a dedicated cleaning team to your office so you always see the same familiar faces. This means better results over time as your team learns your space inside out.' },
  { title: 'After-Hours Available', desc: 'We offer early morning cleaning from 5am and evening cleaning from 5:30pm, seven days a week, so your Parramatta office is always immaculate before your staff arrive.' },
  { title: 'Fully Insured & Police Checked', desc: 'All Pro Clean Corp staff carry current National Police Clearances and we hold $20M public liability insurance — meeting the requirements of Parramatta\'s commercial landlords and government buildings.' },
];

const areas = [
  'Parramatta', 'Westmead', 'Harris Park', 'Granville',
  'Auburn', 'Merrylands', 'Guildford', 'Wentworthville',
  'Pendle Hill', 'Toongabbie', 'Seven Hills', 'Baulkham Hills',
  'Castle Hill', 'Bella Vista', 'Rosehill', 'Camellia',
];

const faqs = [
  {
    question: 'How often should an office in Parramatta be professionally cleaned?',
    answer: 'The recommended frequency depends on the size of your office and the number of people working there. Small offices of under 10 staff can typically maintain a professional standard with 2–3 cleans per week. Larger offices or those with high foot traffic generally benefit from daily cleaning. We assess your specific office during our free site visit and recommend the minimum frequency needed to maintain a consistently clean and hygienic environment.',
  },
  {
    question: 'Do you provide cleaning supplies and equipment, or do we need to supply them?',
    answer: 'Pro Clean Corp supplies all cleaning products, equipment and consumables required to clean your office. This includes professional-grade vacuums, mops, microfibre cloths, and eco-friendly cleaning solutions appropriate for your office surfaces. You do not need to purchase or store any cleaning supplies. If you have specific product preferences — for example, fragrance-free products due to allergies — we can accommodate this.',
  },
  {
    question: 'Will we get the same cleaners each visit?',
    answer: 'Yes. We assign a dedicated cleaning team to your Parramatta office. The same cleaners attend each scheduled visit so they become familiar with your space, your preferences, and any sensitive areas. This consistency leads to better results and gives your team the confidence of knowing exactly who has access to your office. In the event a regular team member is unavailable, we notify you in advance and ensure a trained replacement attends.',
  },
  {
    question: 'Is there a minimum contract period for office cleaning in Parramatta?',
    answer: 'No lock-in contract is required. We offer flexible month-to-month arrangements for Parramatta office cleaning. You can cancel with 30 days written notice at any time. We also offer 6-month and 12-month agreements for clients who prefer a fixed rate for budget certainty — these arrangements include a price guarantee for the contract term. Short-term office cleaning bookings are also available for project work or temporary office spaces.',
  },
  {
    question: 'Can you clean our Parramatta office outside of business hours?',
    answer: 'Yes. After-hours cleaning is our most popular scheduling option for Parramatta offices. We offer early morning cleaning starting from 5am and evening cleaning from 5:30pm, as well as weekend services. We manage building access cards and swipe keys with full security accountability and will adhere to your building\'s after-hours access protocols. Most Parramatta CBD corporate tenants prefer evening cleaning from 6pm to ensure zero disruption during business hours.',
  },
];

export default function OfficeCleanersParramattaPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-darkblue via-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Parramatta & Western Sydney Office Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Office Cleaners Parramatta NSW
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                Pro Clean Corp is Parramatta's trusted office cleaning company — local teams, consistent same cleaners, after-hours scheduling and guaranteed results for businesses across Western Sydney.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Local Parramatta Team &nbsp;|&nbsp; ✓ Same Cleaners Every Visit &nbsp;|&nbsp; ✓ Free Quotes</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Office cleaners Parramatta NSW professional cleaning services"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF Answer Box */}
      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>Pro Clean Corp provides trusted office cleaning services in Parramatta NSW</strong>, with dedicated local teams serving businesses across Parramatta CBD, Westmead, Granville, Merrylands, Seven Hills and surrounding Western Sydney suburbs. Daily, weekly or periodic office cleaning — same cleaners every visit, after-hours available, fully insured and police checked.
          </p>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">

            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Office Cleaners in Parramatta</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Parramatta has evolved into one of Sydney's most significant commercial centres — home to government agencies, financial services firms, legal practices, healthcare providers, and a rapidly expanding corporate precinct. The businesses and organisations operating here need an office cleaning partner that understands the standards required in a professional environment and delivers them reliably, visit after visit.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp has been cleaning offices across Parramatta and Western Sydney for over 15 years. Our locally based cleaning teams are familiar with Parramatta's commercial buildings, access procedures and after-hours protocols. We assign the same dedicated cleaners to your office so performance improves over time rather than starting from scratch on every visit. Our flat pricing, flexible scheduling and 100% satisfaction guarantee make us the preferred choice for Parramatta's growing business community.
              </p>

              {/* Services Grid */}
              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Office Cleaning Services We Provide in Parramatta</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {services.map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits with border-l-4 */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {benefits.map((item, i) => (
                  <div
                    key={i}
                    className={`border-l-4 pl-4 ${i === 0 ? 'border-darkblue' : i === 1 ? 'border-greenprimary' : i === 2 ? 'border-blueprimary' : 'border-darkblue'}`}
                  >
                    <h4 className="font-semibold text-darkblue mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Benefits Image */}
              <Image
                src="/images/whychoose.jpg"
                alt="Pro Clean Corp Parramatta office cleaning team Western Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
            </div>

            {/* Sidebar */}
            <div>
              <Image
                src="/images/hero/hero6.jpg"
                alt="Office cleaning Parramatta professional cleaners Western Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Why Parramatta Businesses Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Local Parramatta-based team</li>
                  <li>✓ Same cleaners every visit</li>
                  <li>✓ After-hours from 5am / 5:30pm</li>
                  <li>✓ $20M public liability insured</li>
                  <li>✓ Police-checked all staff</li>
                  <li>✓ No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl mb-4">
                <h4 className="font-bold mb-2">Free Office Assessment</h4>
                <p className="text-sm mb-3 text-gray-300">We visit your Parramatta office and provide a written fixed-price quote within 24 hours.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Cleaning Frequencies Available</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Daily (5 days/week)', '6 days/week', 'Monday–Friday + Saturday', '3 days/week', '2 days/week', 'Weekly', 'Fortnightly', 'One-off / Periodic'].map((freq, i) => (
                    <li key={i}>• {freq}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Process — 2×2 Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-darkblue mb-2 text-center">Our Parramatta Office Cleaning Process</h2>
            <p className="text-gray-600 text-center mb-8">A clear four-step process that gets your office cleaning programme running smoothly from day one.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {processSteps.map((step, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 bg-greenprimary text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-darkblue mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Areas — md:grid-cols-3 lg:grid-cols-4 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-darkblue mb-2 text-center">Areas We Service Around Parramatta</h2>
            <p className="text-gray-600 text-center mb-6">Our office cleaning teams cover Parramatta and all surrounding Western Sydney suburbs.</p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              {areas.map((area, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center hover:border-greenprimary transition-colors">
                  <span className="text-gray-700 text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Office Cleaners Parramatta</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-darkblue mb-2">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-darkblue via-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-3">Get a Free Quote from Parramatta's Trusted Office Cleaners</h2>
            <p className="text-xl mb-6 text-gray-100">Local team, consistent cleaners, after-hours available. Serving Parramatta and Western Sydney businesses since 2009.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-block bg-white text-darkblue font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                Request a Free Quote
              </Link>
              <a
                href="tel:1300494983"
                className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-darkblue transition-colors"
              >
                Call 1300 494 983
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
