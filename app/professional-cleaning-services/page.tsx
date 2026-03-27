import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services Sydney NSW | Trusted Commercial & Office Cleaners',
  description: 'Pro Clean Corp delivers professional cleaning services across Sydney NSW. Trusted commercial cleaners for offices, strata, retail, medical, and industrial properties. Experienced teams, eco-friendly products, guaranteed results.',
  keywords: 'professional cleaning services, professional cleaners Sydney, commercial cleaning services NSW, trusted cleaning company Sydney',
  openGraph: {
    title: 'Professional Cleaning Services Sydney NSW | Trusted Commercial & Office Cleaners',
    description: 'Pro Clean Corp delivers professional cleaning services across Sydney NSW. Trusted commercial cleaners for offices, strata, retail, medical, and industrial properties. Experienced teams, eco-friendly products, guaranteed results.',
    url: 'https://www.procleancorp.com.au/professional-cleaning-services',
    type: 'website',
    images: [{ url: '/images/services/commercial.webp', alt: 'Professional cleaning services Sydney NSW commercial cleaners' }],
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/professional-cleaning-services' },
};

const services = [
  'Professional office cleaning',
  'Commercial premises cleaning',
  'Strata & body corporate cleaning',
  'Medical & healthcare cleaning',
  'Retail & showroom cleaning',
  'Industrial & warehouse cleaning',
  'End of lease cleaning',
  'Carpet & upholstery cleaning',
  'Window & glass cleaning',
  'High-pressure washing',
  'Floor care & maintenance',
  'Post-construction cleaning',
];

const processSteps = [
  { title: 'Free Site Assessment & Quote', desc: 'We visit your premises, assess all cleaning areas and requirements, and provide a written fixed-price quote with no obligation.' },
  { title: 'Customised Cleaning Plan', desc: 'We build a tailored cleaning schedule and checklist covering every area, frequency and special requirement specific to your property.' },
  { title: 'Professional Cleaning Execution', desc: 'Our experienced, police-checked and fully insured teams deliver every visit to the agreed standard using eco-friendly products.' },
  { title: 'Quality Inspection & Sign-Off', desc: 'A supervisor quality check ensures every visit meets our standard. Any issue is resolved within 24 hours at no additional charge.' },
];

const benefits = [
  { title: 'Certified & Fully Insured Teams', desc: 'All Pro Clean Corp teams carry $20M public liability insurance and current police clearances, meeting the requirements of commercial landlords and property managers across Sydney.' },
  { title: 'Eco-Friendly Cleaning Products', desc: 'We use Australian-standard, environmentally responsible cleaning products that are safe for staff, clients and the environment — without compromising on cleaning power.' },
  { title: 'Flexible Scheduling 7 Days', desc: 'Available 7 days a week, including early morning, evening and weekend slots, so your cleaning programme never disrupts your operations or your people.' },
  { title: 'Satisfaction Guarantee', desc: 'Not satisfied with any part of your clean? We return within 24 hours at no cost to make it right — every time, without argument.' },
];

const areas = [
  'Sydney CBD', 'Parramatta', 'North Sydney', 'Chatswood',
  'Bondi', 'Surry Hills', 'Newtown', 'Glebe',
  'Randwick', 'Liverpool', 'Penrith', 'Blacktown',
  'Hornsby', 'Hurstville', 'Bankstown', 'Burwood',
];

const faqs = [
  {
    question: 'What industries do you provide professional cleaning services for?',
    answer: 'Pro Clean Corp services a broad range of industries across Sydney, including corporate offices, government buildings, medical and healthcare facilities, retail stores, showrooms, strata and body corporate buildings, industrial warehouses, schools, childcare centres, restaurants and hospitality venues. We tailor every cleaning programme to the specific requirements of your industry and premises.',
  },
  {
    question: 'Are you fully insured and do your staff have police clearances?',
    answer: 'Yes. Pro Clean Corp carries $20 million public liability insurance covering all cleaning operations across Sydney. All cleaning staff hold current National Police Clearances before commencing any client work. We can provide copies of all certificates and compliance documentation on request — a standard requirement from our commercial and government clients.',
  },
  {
    question: 'Do you use eco-friendly cleaning products?',
    answer: 'Yes. We use Australian-standard, environmentally responsible cleaning products across all our professional cleaning services. Our products are biodegradable, free from harsh chemicals, and safe for use in sensitive environments including medical facilities, childcare centres and food-handling areas. Switching to eco-friendly cleaning does not compromise cleaning effectiveness or hygiene standards.',
  },
  {
    question: 'How do I get a quote for professional cleaning services?',
    answer: 'The easiest way to get an accurate quote is to call us on 1300 494 983 or submit an enquiry online. We arrange a free on-site assessment at a time that suits you, inspect all areas to be cleaned, and provide a written fixed-price quote within 24 hours. There is no obligation, and our pricing is transparent with no hidden charges.',
  },
  {
    question: 'Do you require long-term contracts for professional cleaning?',
    answer: 'No. We offer flexible arrangements from month-to-month agreements through to annual contracts, depending on what suits your business. Most clients prefer a rolling monthly arrangement with 30 days notice to cancel. We earn your ongoing business through consistent quality, not lock-in contract clauses. Short-term and one-off professional cleaning bookings are also available.',
  },
];

export default function ProfessionalCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-darkblue via-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Sydney-Wide Professional Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Professional Cleaning Services Sydney NSW
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                Pro Clean Corp is Sydney's trusted provider of professional cleaning services for offices, strata, medical, retail, industrial and commercial properties — certified teams, eco-friendly products, guaranteed results.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Fully Insured &amp; Police Checked &nbsp;|&nbsp; ✓ 7-Day Availability &nbsp;|&nbsp; ✓ Free Quotes</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Professional cleaning services Sydney NSW commercial cleaners"
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
            <strong>Pro Clean Corp provides professional cleaning services across Sydney NSW</strong>, covering offices, strata buildings, medical facilities, retail showrooms, industrial warehouses and commercial properties of all sizes. Certified and fully insured cleaning teams, eco-friendly products, flexible scheduling 7 days a week, and a 100% satisfaction guarantee on every visit.
          </p>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">

            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Trusted Professional Cleaning Services Across Sydney</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Sydney businesses deserve a cleaning partner they can rely on — one that shows up on time, every time, with trained staff, the right equipment, and a genuine commitment to quality. Pro Clean Corp has been delivering professional cleaning services across Sydney NSW for over 15 years, building a reputation with commercial landlords, property managers, strata committees and business owners who need consistent results without constant supervision.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We operate across all major industries and property types. Whether you need daily office cleaning in the Sydney CBD, weekly strata cleaning for an apartment complex in Chatswood, medical-grade cleaning for a healthcare clinic in Parramatta, or a one-off post-construction clean in Blacktown — our teams are equipped, trained and insured to deliver. Every service is backed by our written quality guarantee.
              </p>

              {/* Services Grid */}
              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Our Professional Cleaning Services</h3>
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
                src="/images/services/office.webp"
                alt="Pro Clean Corp professional office cleaning services Sydney"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
            </div>

            {/* Sidebar */}
            <div>
              <Image
                src="/images/hero/hero3.jpg"
                alt="Professional cleaning team Sydney NSW Pro Clean Corp"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Why Choose Pro Clean Corp?</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ 15+ years cleaning experience</li>
                  <li>✓ $20M public liability insured</li>
                  <li>✓ Police-checked all staff</li>
                  <li>✓ Eco-friendly products</li>
                  <li>✓ 7-day flexible scheduling</li>
                  <li>✓ 100% satisfaction guarantee</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl mb-4">
                <h4 className="font-bold mb-2">Free Site Assessment</h4>
                <p className="text-sm mb-3 text-gray-300">Call us for a free on-site assessment and fixed-price quote for your Sydney property.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Industries We Service</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Corporate Offices', 'Government Buildings', 'Medical Facilities', 'Retail & Showrooms', 'Strata Buildings', 'Industrial Warehouses', 'Schools & Childcare', 'Hospitality Venues'].map((ind, i) => (
                    <li key={i}>• {ind}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Process — 2×2 Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-darkblue mb-2 text-center">Our Professional Cleaning Process</h2>
            <p className="text-gray-600 text-center mb-8">A systematic four-step approach that ensures consistent, high-quality results on every visit.</p>
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
            <h2 className="text-2xl font-bold text-darkblue mb-2 text-center">Professional Cleaning Service Areas — Sydney NSW</h2>
            <p className="text-gray-600 text-center mb-6">We provide professional cleaning services across all major Sydney suburbs and surrounding regions.</p>
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
            <h2 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Professional Cleaning Services Sydney</h2>
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
            <h2 className="text-3xl font-bold mb-3">Get a Free Quote for Professional Cleaning Services in Sydney</h2>
            <p className="text-xl mb-6 text-gray-100">Trusted by 1,200+ Sydney businesses. Certified teams, eco-friendly products, 100% satisfaction guarantee.</p>
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
