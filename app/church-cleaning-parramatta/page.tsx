import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Church Cleaning Parramatta | ProCleanCorp Western Sydney',
  description: 'Church and worship centre cleaning in Parramatta. Trusted by local congregations — pews, halls, kitchens and bathrooms. Flexible scheduling. Free quote today.',
  keywords: 'church cleaning parramatta, worship centre cleaning parramatta, mosque cleaning parramatta, temple cleaning parramatta, place of worship cleaning parramatta, church cleaners western sydney',
  openGraph: {
    title: 'Church Cleaning Parramatta | ProCleanCorp Western Sydney',
    description: 'Church and worship centre cleaning in Parramatta for all faith communities. Flexible scheduling around services. Free quote.',
    url: 'https://www.procleancorp.com.au/church-cleaning-parramatta',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Church cleaning Parramatta worship centre cleaners' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/church-cleaning-parramatta' }
};

const faqs = [
  {
    question: 'Do you clean mosques, temples and other places of worship in Parramatta?',
    answer: 'Yes. ProCleanCorp provides cleaning for all places of worship in Parramatta — Christian churches, mosques, Hindu temples, Buddhist centres, Sikh gurdwaras and other faith communities. We approach every place of worship with respect for the space and its community. Our staff are briefed on appropriate conduct in different religious environments, including footwear protocols, modest dress requirements and handling of sacred items (we clean around them, we do not move them).'
  },
  {
    question: 'Can you schedule church cleaning around Sunday services and community events?',
    answer: 'Yes. ProCleanCorp provides flexible scheduling specifically designed around worship service times and community event calendars. We typically clean before services (early morning starts) or after services (same day or next day). For venues with regular community events (weddings, funerals, social gatherings), we can provide on-call or event-specific cleaning packages. We ask for a monthly events calendar to plan cleaning around your schedule.'
  },
  {
    question: 'What is included in a standard church cleaning service in Parramatta?',
    answer: 'A standard church or worship centre clean in Parramatta includes: vacuuming and/or mopping the sanctuary floor and seating aisles, wiping pews or seating, cleaning the entry foyer and reception area, cleaning all bathrooms and amenities, cleaning the kitchen or social hall (if included), emptying all bins, and cleaning the stage or altar area (excluding sacred items). Community halls and function spaces are also included if they are part of the scope. We can provide pre-service and post-service clean options.'
  }
];

export default function ChurchCleaningParramattaPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Church Cleaning Parramatta"
        serviceDescription="ProCleanCorp provides church and worship centre cleaning in Parramatta, servicing sanctuaries, halls, commercial kitchens and bathrooms with flexible scheduling that respects service times and community events."
        serviceUrl="https://www.procleancorp.com.au/church-cleaning-parramatta"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Sanctuary Cleaning', 'Community Hall Cleaning', 'Kitchen Cleaning', 'Pre-Service & Post-Service Cleaning', 'Event Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Parramatta Church & Worship Centre Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Church Cleaning Parramatta — Worship Centre Cleaning Services
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides church and worship centre cleaning in Parramatta for all faith communities — respectful, reliable, flexible scheduling around service times and community events.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ All Faith Communities &nbsp;|&nbsp; ✓ Flexible Scheduling &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/commercial.webp" alt="Church cleaning Parramatta worship centre cleaners"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides church and worship centre cleaning in Parramatta</strong>, servicing sanctuaries, halls, commercial kitchens and bathrooms with flexible scheduling that respects service times and community events. Parramatta is one of Australia's most religiously diverse cities — we serve all faith communities with the same respectful, professional approach.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Church & Worship Centre Cleaning in Parramatta</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Parramatta is one of the most religiously diverse cities in Australia. Christian churches, mosques, Hindu temples, Buddhist centres, Sikh gurdwaras and community faith organisations are all active in the Parramatta area. Each place of worship has different cleaning requirements — different floor surfaces, different community areas, different cultural expectations around how cleaning staff conduct themselves.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp approaches every place of worship as a culturally sensitive environment. Our staff are briefed on respectful conduct specific to each faith tradition. We clean around sacred items and spaces — we do not relocate, move or handle objects of worship significance. Scheduling is always aligned with the congregation's service calendar.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Parramatta Church Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Sanctuary & main hall cleaning', 'Pew, chair & seating cleaning', 'Entry foyer & reception', 'Bathroom & amenities', 'Commercial kitchen & social hall', 'Meeting & function rooms', 'Nursery & children\'s areas', 'Office & administration areas', 'Bin emptying throughout', 'Pre-service & post-service cleans', 'Event-specific cleaning', 'Outdoor entrance & carpark entry'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Parramatta Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Parramatta', 'Westmead', 'Merrylands', 'Granville', 'Auburn', 'Fairfield', 'Blacktown', 'Pendle Hill'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Church & worship centre cleaning. All faith communities.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Church Cleaning Parramatta</h3>
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
                { label: 'Church Cleaning Sydney', href: '/church-cleaning-sydney' },
                { label: 'Commercial Cleaning Parramatta', href: '/commercial-cleaning-parramatta' },
                { label: 'School Cleaning Parramatta', href: '/school-cleaning-parramatta' },
                { label: 'Function Centre Cleaning Sydney', href: '/function-centre-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Church Cleaning Parramatta — Free Quote</h3>
            <p className="text-xl mb-4 text-gray-100">All faith communities welcome. Respectful, reliable, flexible scheduling.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
