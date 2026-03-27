import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Kensington | Eastern Suburbs | Pro Clean Corp',
  description: 'Professional office cleaning in Kensington, Eastern Suburbs. Near UNSW and the medical precinct. Fixed pricing, after-hours service. Free quote within 24 hours.',
  keywords: ['office cleaning kensington', 'commercial cleaning kensington', 'cleaners kensington sydney', 'office cleaners kensington', 'cleaning services kensington'],
  openGraph: {
    title: 'Office Cleaning Kensington | Eastern Suburbs | Pro Clean Corp',
    description: 'Professional office cleaning in Kensington, Eastern Suburbs. Near UNSW and the medical precinct. After-hours service and fixed pricing.',
    url: 'https://www.procleancorp.com.au/office-cleaning-kensington',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Office cleaning Kensington Eastern Suburbs' }]
  },
  twitter: { card: 'summary_large_image', title: 'Office Cleaning Kensington | Pro Clean Corp', description: 'Professional office cleaning in Kensington, Eastern Suburbs — near UNSW.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-kensington' }
};

const faqs = [
  {
    question: 'What office cleaning services are available in Kensington?',
    answer: 'Pro Clean Corp provides full commercial office cleaning in Kensington including workstation and desk cleaning, meeting room preparation, kitchen and breakroom cleaning, bathroom disinfection, floor vacuuming and mopping, window and internal glass cleaning, and bin emptying with consumables restocking. We also provide medical practice cleaning for the UNSW-adjacent medical and health precinct in Kensington and Randwick.'
  },
  {
    question: 'How much does office cleaning cost in Kensington?',
    answer: 'Office cleaning in Kensington is priced on floor area and frequency. A small office suite (under 100sqm) starts from $80/clean, medium offices (100–300sqm) from $150/clean and larger commercial floors from $280/clean. Monthly contracts provide budget certainty. Pro Clean Corp provides a written fixed-price quote after an on-site assessment — typically arranged within 48 hours.'
  },
  {
    question: 'Do you clean medical offices and allied health practices near UNSW in Kensington?',
    answer: 'Yes. Kensington and the adjoining Randwick/UNSW medical precinct is home to numerous specialist practices, allied health clinics, dental practices and university-affiliated medical facilities. Pro Clean Corp provides TGA-registered medical cleaning for all healthcare settings in this area — using infection control protocols appropriate for each practice type.'
  },
  {
    question: 'Is after-hours office cleaning available in Kensington?',
    answer: 'Yes. Most of our Kensington office cleaning contracts are scheduled after business hours (6–9pm) to avoid disrupting staff or client-facing operations. Early morning scheduling (6–8am) is also available. Access arrangements are confirmed during your on-site assessment.'
  }
];

const nearbySuburbs = [
  { suburb: 'Randwick', href: '/office-cleaning-randwick' },
  { suburb: 'Maroubra', href: '/commercial-cleaning-maroubra' },
  { suburb: 'Coogee', href: '/office-cleaning-coogee' },
  { suburb: 'Moore Park', href: '/office-cleaning-moore-park' },
  { suburb: 'Surry Hills', href: '/commercial-cleaning-surry-hills' },
  { suburb: 'Zetland', href: '/office-cleaning-zetland' }
];

export default function OfficeCleaningKensingtonPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Kensington"
        serviceDescription="Professional office cleaning in Kensington, Eastern Suburbs Sydney. Near UNSW and the Randwick medical precinct. Fixed pricing and after-hours service available."
        serviceUrl="/office-cleaning-kensington"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Floor Cleaning', 'Meeting Room Cleaning', 'Medical Practice Cleaning', 'Kitchen Cleaning', 'Bathroom Cleaning', 'After-Hours Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Eastern Suburbs · Randwick LGA · 6km from CBD · Near UNSW</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Office Cleaning Kensington — Eastern Suburbs Professionals
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Pro Clean Corp provides professional office cleaning in Kensington</strong> — serving the Eastern Suburbs&apos; professional and medical precinct with fixed pricing, after-hours scheduling and specialist medical cleaning capability for UNSW-adjacent health practices.
              </p>
              <div className="space-y-2 mb-8">
                {['Office and commercial cleaning', 'Medical practice cleaning available', 'After-hours scheduling (6–9pm)', 'Fixed monthly pricing', 'Local Eastern Suburbs team', 'Free on-site assessment'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white text-sm">
                    <span className="text-green-300">✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/office.webp"
                alt="Office cleaning Kensington Eastern Suburbs"
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
            <strong>Office cleaning in Kensington from Pro Clean Corp</strong> covers professional offices, medical suites and allied health practices across this Eastern Suburbs suburb near UNSW and the Randwick medical precinct. Fixed pricing from $80/clean, after-hours scheduling and a local team that understands the Kensington commercial and medical precinct.
          </p>
        </div>
      </section>

      {/* About Kensington */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-5">Office Cleaning in Kensington&apos;s Professional Precinct</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Kensington is a well-connected Eastern Suburbs suburb approximately 6km from the Sydney CBD, within the Randwick LGA. The suburb is immediately adjacent to the UNSW (University of New South Wales) campus and borders the Randwick Health Precinct — home to Prince of Wales Hospital, Sydney Children&apos;s Hospital and a large number of specialist medical practices.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Kensington&apos;s commercial profile includes professional offices along Anzac Parade and Doncaster Avenue, university-affiliated businesses, medical and allied health practices, and a range of small businesses serving the large student and healthcare professional population.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Pro Clean Corp&apos;s Eastern Suburbs team covers Kensington as part of its regular service area — with local cleaners familiar with the suburb&apos;s access, parking and building types.
              </p>
            </div>
            <div>
              <Image
                src="/images/services/hero6.jpg"
                alt="Kensington office cleaning Eastern Suburbs"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-10 text-center">Office Cleaning Services in Kensington</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { type: 'Standard Office Cleaning', tasks: ['Workstations and desks', 'Meeting rooms', 'Reception area', 'Kitchen and breakroom', 'Bathrooms and amenities', 'Floor vacuum and mop'] },
              { type: 'Medical Practice Cleaning', tasks: ['Waiting room disinfection', 'Consultation rooms', 'TGA-registered products', 'After-hours scheduling', 'NHMRC protocols', 'Service reports'] },
              { type: 'Small Business Cleaning', tasks: ['Retail and studio spaces', 'Flexible scheduling', 'Weekly or fortnightly', 'From $80/clean', 'No lock-in contract', 'Free on-site quote'] }
            ].map((svc, i) => (
              <div key={i} className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-darkblue mb-4">{svc.type}</h3>
                <ul className="space-y-2">
                  {svc.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-greenprimary font-bold mt-0.5">✓</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-darkblue mb-6">Also Serving Nearby Eastern Suburbs</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {nearbySuburbs.map((s, i) => (
              <Link key={i} href={s.href} className="bg-gray-50 hover:bg-blueprimary hover:text-white border border-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700 text-center transition">{s.suburb}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Office Cleaning Kensington</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-darkblue mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blueprimary to-darkblue text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get a Free Kensington Office Cleaning Quote</h2>
          <p className="text-xl text-blue-100 mb-8">On-site assessment within 48 hours. Fixed pricing, after-hours available, no lock-in.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
