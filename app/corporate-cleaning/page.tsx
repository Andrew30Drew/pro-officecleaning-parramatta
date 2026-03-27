import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Corporate Cleaning | Professional Office & Corporate Cleaning Sydney NSW | Pro Clean Corp',
  description: 'Expert corporate cleaning services for Sydney offices, headquarters, and commercial spaces. Discreet, professional teams. Daily & periodic cleaning. Call 1300 494 983.',
  keywords: [
    'corporate cleaning',
    'corporate cleaning Sydney',
    'corporate office cleaning',
    'corporate cleaning services',
    'commercial office cleaning Sydney',
    'professional corporate cleaners',
    'office cleaning Sydney NSW',
    'Pro Clean Corp corporate'
  ],
  openGraph: {
    title: 'Corporate Cleaning Sydney | Pro Clean Corp',
    description: 'Professional corporate cleaning for Sydney offices and commercial spaces. Discreet teams, flexible scheduling, and guaranteed results.',
    url: '/corporate-cleaning',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Corporate Cleaning Sydney' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Cleaning Sydney | Pro Clean Corp',
    description: 'Expert corporate cleaning services for Sydney offices. Professional, discreet, and flexible.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/corporate-cleaning' }
};

export default function CorporateCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Corporate Cleaning"
        serviceDescription="Professional corporate cleaning services for Sydney offices, corporate headquarters, and commercial spaces. Discreet, experienced teams delivering consistent, high-standard results."
        serviceUrl="/corporate-cleaning"
        serviceType="Corporate Office Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Daily Office Cleaning',
          'Boardroom & Meeting Room Cleaning',
          'Executive Suite Deep Clean',
          'Kitchen & Breakroom Sanitisation',
          'Reception & Lobby Cleaning',
          'Carpet Steam Cleaning',
          'Window & Glass Cleaning',
          'After-Hours Corporate Cleaning'
        ]}
        faqs={[
          {
            question: 'What does corporate cleaning include?',
            answer: 'Corporate cleaning covers all areas of an office or commercial building — workstations, open-plan floors, boardrooms, executive suites, reception areas, kitchen and breakrooms, bathrooms, stairwells, and lift lobbies. We tailor the cleaning scope to each client\'s specific requirements and can include carpet care, window cleaning, and high-level dusting as periodic services.'
          },
          {
            question: 'When do corporate cleaners come in?',
            answer: 'Most corporate clients prefer after-hours cleaning to avoid disrupting staff. We operate from 5pm onwards for evening cleans and offer early morning services from 5am. We also provide daytime porter services for large office floors requiring continuous maintenance throughout the working day.'
          }
        ]}
      />

      {/* Hero — split layout reversed (image left, text right) */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/images/services/office.webp"
                alt="Corporate cleaning Sydney office"
                className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
                width={800}
                height={420}
                priority
              />
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">300+</div>
                <div className="text-xs text-gray-500">Corporate Clients in Sydney</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-greenprimary rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-white">4.9★</div>
                <div className="text-xs text-white/80">Average Client Rating</div>
              </div>
            </div>
            <div className="text-white order-1 lg:order-2">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Corporate Office Specialists
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Corporate Cleaning That Reflects Your Brand
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Your office is a direct reflection of your business. Pro Clean Corp&apos;s corporate cleaning teams deliver meticulous, discreet, and consistent cleaning for Sydney&apos;s leading companies — from boutique firms to ASX-listed corporations.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Corporate Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Police-Checked Staff</span>
                <span>✓ Fully Insured</span>
                <span>✓ After-Hours Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Corporate cleaning</strong> goes beyond a standard office clean — it demands professionalism, discretion, and attention to detail that matches the expectations of a business environment. Pro Clean Corp brings trained commercial cleaning teams to Sydney corporate offices, ensuring every surface, meeting room, and executive area meets the highest standards of presentation and hygiene.
          </p>
        </div>
      </section>

      {/* Process Steps — unique section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Our Corporate Cleaning Process</h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">We don&apos;t just show up and clean. Every corporate contract follows a structured 5-step service protocol.</p>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Site Assessment', desc: 'We visit your office to map out zones, access requirements, and any sensitive areas before we start.' },
              { step: '02', title: 'Tailored Plan', desc: 'A custom cleaning schedule is built around your office hours, staff density, and priority areas.' },
              { step: '03', title: 'Onboarding', desc: 'Your dedicated cleaning team is inducted, issued security access, and briefed on your expectations.' },
              { step: '04', title: 'Consistent Service', desc: 'The same trained team attends each session — no random rotations. You always know who\'s in your office.' },
              { step: '05', title: 'Quality Audits', desc: 'Regular site audits are conducted by our operations team. You receive a monthly quality report.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-blueprimary text-white text-lg font-bold flex items-center justify-center mx-auto mb-4">{item.step}</div>
                <h3 className="font-bold text-darkblue mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Corporate Cleaning Services — Sydney</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Sydney&apos;s corporate offices range from compact fitouts in the CBD to sprawling multi-floor headquarters in Parramatta, Chatswood, and Macquarie Park. Pro Clean Corp has the scale and expertise to service any size of corporate environment — deploying teams of two or twenty depending on the scope.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Our corporate clients include professional services firms, financial institutions, law firms, technology companies, and government agencies. We understand the importance of data security and confidentiality in these environments — our staff sign NDAs on request and are trained in respectful, unobtrusive cleaning practices.
              </p>
              <h3 className="text-xl font-bold text-darkblue mb-4">Corporate Cleaning — Complete Service List</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Open-plan floor cleaning & vacuuming',
                  'Workstation & desk surface sanitisation',
                  'Boardroom & meeting room reset',
                  'Executive suite & director offices',
                  'Kitchen / breakroom deep clean',
                  'Bathroom & amenity sanitisation',
                  'Reception & lobby presentation',
                  'Lift lobby & stairwell cleaning',
                  'Window cleaning (internal)',
                  'Carpet vacuuming & spot treatment',
                  'Bin collection & replacement',
                  'High-touch disinfection (door handles, screens)'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/services/office.webp"
                alt="Corporate office cleaning team Sydney"
                className="rounded-xl shadow-lg w-full h-56 object-cover mb-6"
                width={400}
                height={224}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl border border-blueprimary/20">
                <h4 className="font-bold text-darkblue mb-3">Why Sydney Corporates Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Same team every visit</li>
                  <li>✓ NDA available on request</li>
                  <li>✓ $20M public liability cover</li>
                  <li>✓ Monthly quality reports</li>
                  <li>✓ 24-hour response guarantee</li>
                  <li>✓ No lock-in contracts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-darkblue mb-3 text-center">Related Corporate & Office Cleaning Services</h2>
          <p className="text-center text-gray-500 mb-8">Explore our full range of office and commercial cleaning services for Sydney businesses.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Corporate Cleaning Services', sub: 'Full-service packages', href: '/corporate-cleaning-services' },
              { label: 'Office Cleaning', sub: 'Sydney-wide coverage', href: '/office-cleaning' },
              { label: 'Commercial Cleaning', sub: 'All facility types', href: '/commercial-cleaning' },
              { label: 'End of Lease Cleaning', sub: 'Commercial fitout cleans', href: '/end-of-lease-cleaning-sydney' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="bg-gray-50 p-5 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                <span className="font-bold text-gray-700 group-hover:text-blueprimary block mb-1">{item.label}</span>
                <span className="text-xs text-gray-500">{item.sub}</span>
              </Link>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-darkblue mb-6">Corporate Cleaning — Frequently Asked Questions</h2>
          <div className="space-y-5 mb-12">
            {[
              { q: 'What does corporate cleaning include?', a: 'Corporate cleaning covers all areas of an office or commercial building — workstations, open-plan floors, boardrooms, executive suites, reception areas, kitchen and breakrooms, bathrooms, stairwells, and lift lobbies. We tailor the scope to each client\'s requirements, including periodic carpet care, window cleaning, and high-level dusting.' },
              { q: 'Can corporate cleaners work after hours?', a: 'Yes. Most of our corporate clients prefer after-hours cleaning from 6pm onwards to avoid any disruption to staff. We also offer early morning services from 5am and can coordinate building security access for your cleaning team.' },
              { q: 'How many staff will you send to our office?', a: 'Team size is determined by your office square footage, the cleaning scope, and your desired completion time. A 500m² office typically requires 2–3 cleaners for a 2-hour session. Larger corporate floors may require teams of 6–10. We optimise the team size to match your schedule.' },
              { q: 'Do your corporate cleaners sign an NDA?', a: 'Yes, we can arrange non-disclosure agreements for clients in sensitive industries such as law, finance, and government. All of our cleaners undergo police checks as standard, and we can provide additional security screening documentation on request.' }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Elevate Your Office Presentation</h3>
            <p className="text-xl mb-8 text-gray-100">Join 300+ Sydney corporate clients who trust Pro Clean Corp for professional, consistent, and discreet office cleaning.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="bg-greenprimary text-white px-10 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get a Corporate Cleaning Quote
              </a>
              <a href="tel:1300494983" className="border-2 border-white text-white px-10 py-3 rounded-full font-bold hover:bg-white/10 transition">
                Call 1300 494 983
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
