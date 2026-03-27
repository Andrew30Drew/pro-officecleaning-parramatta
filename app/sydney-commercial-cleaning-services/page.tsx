import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Sydney Commercial Cleaning Services | Full Overview | Pro Clean Corp',
  description: 'All commercial cleaning services available in Sydney — offices, strata, warehouses, medical, retail, gyms. Pro Clean Corp: one provider for every commercial cleaning need.',
  keywords: ['sydney commercial cleaning services', 'commercial cleaning sydney', 'commercial cleaners sydney', 'commercial cleaning company sydney', 'professional cleaning sydney'],
  openGraph: {
    title: 'Sydney Commercial Cleaning Services | Full Overview | Pro Clean Corp',
    description: 'Every commercial cleaning service in Sydney under one provider. Offices, strata, medical, retail, gyms and more. Free quote today.',
    url: 'https://www.procleancorp.com.au/sydney-commercial-cleaning-services',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Sydney commercial cleaning services' }]
  },
  twitter: { card: 'summary_large_image', title: 'Sydney Commercial Cleaning Services | Pro Clean Corp', description: 'All commercial cleaning services available in Sydney under one provider.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/sydney-commercial-cleaning-services' }
};

const faqs = [
  {
    question: 'What commercial cleaning services are available in Sydney?',
    answer: 'Sydney commercial cleaning services cover: office cleaning, strata common area cleaning, medical and healthcare cleaning, gym and fitness facility cleaning, retail store cleaning, restaurant and hospitality cleaning, warehouse and industrial cleaning, end of lease cleaning, window cleaning and pressure washing. Pro Clean Corp provides all these services across Greater Sydney under one contract.'
  },
  {
    question: 'How do I choose the right commercial cleaning service in Sydney?',
    answer: 'Choose a Sydney commercial cleaning service based on: industry experience (e.g. medical, strata, industrial), insurance level ($20M minimum public liability), staff vetting (police checks), pricing model (fixed vs hourly), contract flexibility (month-to-month vs lock-in) and reporting standards. Pro Clean Corp meets the highest benchmark across all these criteria.'
  },
  {
    question: 'Do Sydney commercial cleaning companies cover all suburbs?',
    answer: 'Pro Clean Corp services all Sydney metropolitan areas including the CBD, Eastern Suburbs, Inner West, North Shore, Northern Beaches, Western Sydney, Parramatta, South-West Sydney and the St George/Sutherland region. For locations outside the metro area, contact us to discuss service availability.'
  },
  {
    question: 'Can one Sydney commercial cleaning company handle multiple facility types?',
    answer: 'Yes. Pro Clean Corp is one of Sydney\'s few commercial cleaning companies offering specialist expertise across multiple facility types under one contract — offices, strata buildings, medical centres, gyms, warehouses and retail. This simplifies procurement and management for businesses or property managers with diverse cleaning needs.'
  }
];

const allServices = [
  { title: 'Office Cleaning', href: '/office-cleaning', desc: 'Workstations, meeting rooms, kitchens and bathrooms.' },
  { title: 'Strata Cleaning', href: '/strata-cleaning-services-sydney', desc: 'Common areas, lobbies, lifts, car parks and bin rooms.' },
  { title: 'Medical Cleaning', href: '/medical-cleaning', desc: 'GP clinics, hospitals, dental and allied health.' },
  { title: 'Gym & Fitness Cleaning', href: '/gym-cleaning-service', desc: 'Equipment, floors, changerooms and showers.' },
  { title: 'Warehouse Cleaning', href: '/warehouse-cleaners-sydney', desc: 'Floor sweeping, rack cleaning and amenities.' },
  { title: 'Retail Cleaning', href: '/retail-cleaning-sydney', desc: 'Shop floors, display areas, stockrooms and entries.' },
  { title: 'Restaurant & Pub Cleaning', href: '/pub-club-cleaning-sydney', desc: 'Commercial kitchens, dining areas and amenities.' },
  { title: 'End of Lease Cleaning', href: '/end-of-lease-cleaning-sydney', desc: 'Bond-back standard cleaning across Sydney.' },
  { title: 'Corporate Cleaning', href: '/corporate-cleaning-services-sydney', desc: 'Premium service for CBD and North Sydney offices.' },
  { title: 'Commercial Cleaning', href: '/commercial-cleaning', desc: 'Full-spectrum commercial cleaning across Sydney.' },
  { title: 'School Cleaning', href: '/school-cleaning-parramatta', desc: 'Classroom, amenities and common area cleaning.' },
  { title: 'Aged Care Cleaning', href: '/aged-care-cleaning-sydney', desc: 'Infection-control-grade cleaning for aged care facilities.' }
];

export default function SydneyCommercialCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Sydney Commercial Cleaning Services"
        serviceDescription="Full range of commercial cleaning services across Sydney — offices, strata, medical, gyms, warehouses, retail and more. One provider, all facility types."
        serviceUrl="/sydney-commercial-cleaning-services"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Strata Cleaning', 'Medical Cleaning', 'Gym Cleaning', 'Warehouse Cleaning', 'Retail Cleaning']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Every Commercial Cleaning Service in Sydney</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Sydney Commercial Cleaning Services — One Provider, Every Facility
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                <strong>Pro Clean Corp delivers all commercial cleaning services across Sydney</strong> — from CBD office towers to Parramatta medical centres, Eastern Suburbs gyms to Western Sydney warehouses. One company, every facility type.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-8 text-sm">
                {['Offices', 'Strata', 'Medical', 'Gyms', 'Warehouses', 'Retail', 'Restaurants', 'Schools', 'Aged Care'].map((s, i) => (
                  <div key={i} className="bg-white/10 border border-white/20 rounded-lg px-2 py-1.5 text-center text-white text-xs">{s}</div>
                ))}
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/commercial.webp"
                alt="Sydney commercial cleaning services"
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
            <strong>Sydney commercial cleaning services from Pro Clean Corp cover every facility type</strong> — offices, strata buildings, medical centres, gyms, warehouses, retail and hospitality. One provider across all Greater Sydney suburbs, with specialist expertise for each industry, fixed pricing and no lock-in contracts.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">All Sydney Commercial Cleaning Services</h2>
          <p className="text-center text-gray-600 mb-12">Every service you need — specialist protocols for each facility type.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allServices.map((service, i) => (
              <Link key={i} href={service.href} className="group bg-gray-50 hover:bg-blueprimary hover:text-white rounded-xl p-5 border border-gray-100 transition">
                <h3 className="font-bold text-darkblue group-hover:text-white mb-2 text-sm">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-xs leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pro Clean Corp */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Why Sydney Businesses Choose Pro Clean Corp</h2>
              <div className="space-y-4">
                {[
                  { stat: '10+ years', label: 'Servicing Sydney commercial properties' },
                  { stat: '4.8★', label: 'Average rating across 1,200+ verified reviews' },
                  { stat: '$20M', label: 'Public liability insurance cover' },
                  { stat: '48hrs', label: 'On-site assessment turnaround' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-4">
                    <div className="text-2xl font-black text-blueprimary w-20 flex-shrink-0">{item.stat}</div>
                    <p className="text-gray-700 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/services/hero3.jpg"
                alt="Pro Clean Corp Sydney commercial cleaning"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Sydney Commercial Cleaning Services</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
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
          <h2 className="text-3xl font-bold mb-4">Find the Right Sydney Commercial Cleaning Service</h2>
          <p className="text-xl text-blue-100 mb-8">Tell us about your facility — we&apos;ll match you with the right service and provide a free quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
