import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Industrial Cleaning Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional industrial cleaning services in Sydney since 2015. Warehouses, factories, manufacturing plants & distribution centres. WHS-compliant, licensed & insured. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'industrial cleaning sydney, industrial cleaning services sydney, warehouse cleaning sydney, factory cleaning sydney, manufacturing facility cleaning sydney, industrial cleaning company sydney, industrial cleaners sydney nsw, industrial site cleaning sydney, distribution centre cleaning sydney, industrial floor cleaning sydney',
  openGraph: {
    title: 'Industrial Cleaning Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional industrial cleaning in Sydney. Warehouses, factories, manufacturing plants & distribution centres. WHS-compliant, licensed & insured. Call 1300 494 983.',
    url: '/industrial-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Industrial cleaning Sydney NSW' }]
  },
  alternates: { canonical: '/industrial-cleaning-sydney' }
};

const spokePages = [
  { name: 'Warehouse Cleaning Alexandria', slug: 'warehouse-cleaning-alexandria' },
  { name: 'Warehouse Cleaning Blacktown', slug: 'warehouse-cleaning-blacktown' },
  { name: 'Warehouse Cleaning Silverwater', slug: 'warehouse-cleaning-silverwater' },
  { name: 'Warehouse Cleaning Smithfield', slug: 'warehouse-cleaning-smithfield' },
  { name: 'Warehouse Cleaning Wetherill Park', slug: 'warehouse-cleaning-wetherill-park' },
  { name: 'Warehouse Cleaning Sydney', slug: 'warehouse-cleaning-sydney' },
  { name: 'Industrial Cleaning Services Sydney', slug: 'industrial-cleaning-services-sydney' },
];

const faqs = [
  {
    question: 'What types of industrial facilities do you clean in Sydney?',
    answer: 'We clean warehouses, factories, manufacturing plants, food processing facilities, distribution centres, logistics hubs, automotive workshops, printing facilities, and cold storage sites across Sydney. Our teams are trained in the specific cleaning requirements and safety protocols for each industry type.'
  },
  {
    question: 'Do you comply with WHS regulations for industrial cleaning?',
    answer: 'Yes. All Pro Clean Corp industrial cleaning work is carried out in accordance with Australian WHS (Work Health and Safety) standards. Our staff hold relevant safety certifications, we conduct site-specific risk assessments before commencing work, and we maintain SWMS (Safe Work Method Statements) for all industrial cleaning tasks.'
  },
  {
    question: 'Can you clean during production hours or maintenance shutdowns?',
    answer: 'Both. We offer flexible scheduling including during-shift cleaning for amenities and common areas, maintenance window deep cleans, weekend shutdown cleaning, and emergency response. We coordinate with your facility managers and safety officers to ensure zero disruption to production and full compliance with site access requirements.'
  },
  {
    question: 'What specialist equipment do you use for industrial floor cleaning?',
    answer: 'We use ride-on auto-scrubbers, industrial floor sweepers, high-pressure hot water jetters, commercial wet/dry vacuums, and chemical dispensing systems. Equipment is selected based on your floor type — sealed concrete, epoxy, unsealed concrete, or anti-slip surfaces — and the specific contamination requiring removal.'
  },
  {
    question: 'Do you clean food manufacturing and food processing facilities?',
    answer: 'Yes. We provide specialist food-grade cleaning for food manufacturing and processing facilities in Sydney. This includes clean-in-place protocols, food-safe chemical use, HACCP-compliant cleaning procedures, and documentation suitable for food safety audits. All staff assigned to food facilities are trained in food hygiene requirements.'
  }
];

export default function IndustrialCleaningSydneyPage() {
  const serviceInfo = {
    title: 'Industrial Cleaning Sydney NSW',
    description: 'Industrial facilities demand more than a standard clean — they require specialist equipment, WHS-compliant procedures, and teams who understand the unique hazards and requirements of warehouse, factory, and manufacturing environments. Pro Clean Corp delivers professional industrial cleaning services across Sydney, combining industrial-grade equipment with trained, safety-certified staff to keep your facility clean, compliant, and operational.',
    benefits: [
      'Warehouse Floor Cleaning: Ride-on auto-scrubbers and industrial sweepers for large concrete, epoxy, and sealed warehouse floors. We remove dust, debris, spills, and chemical residue efficiently across even the largest floor plates.',
      'Factory & Manufacturing Cleaning: Machinery surrounds, production line cleaning, overhead dusting, amenities maintenance, and general housekeeping for factories and manufacturing plants — scheduled around your shift pattern.',
      'Distribution Centre Cleaning: High-frequency cleaning for busy logistics and distribution centres including loading docks, pallet areas, driver amenities, and office blocks.',
      'Food Processing Facility Cleaning: HACCP-aligned cleaning procedures, food-safe chemicals, and thorough sanitation for food manufacturing and processing environments. Documentation available for food safety audits.',
      'High-Pressure & Steam Cleaning: Commercial hot-water jet washing for loading docks, external hard surfaces, machinery bases, and areas requiring heavy-duty decontamination.',
      'Scheduled Shutdown Cleaning: Comprehensive deep cleans during planned maintenance shutdowns — the most efficient time to access machinery surrounds, roof structures, and production areas that cannot be reached during live operations.'
    ],
    process: [
      'Site Safety Assessment: We conduct a site walk with your facility manager to identify hazards, access restrictions, contamination types, and WHS requirements before any work commences. SWMS documentation prepared.',
      'Custom Cleaning Plan: A detailed scope of work covering all areas, frequencies, equipment to be used, chemicals, and safety protocols — reviewed and signed off by your team.',
      'Certified Industrial Team: Staff hold relevant safety certifications and are briefed on site-specific requirements. The same core team assigned to your facility for consistency and familiarity.',
      'Quality Assurance: Supervisor inspections, photographic logs available on request, and a direct account manager for fast issue resolution and schedule adjustments.'
    ],
    whyChooseUs: [
      'Industrial-Grade Equipment: Ride-on scrubbers, floor sweepers, high-pressure jetters, and industrial vacuums — not domestic-grade equipment scaled up.',
      'WHS-Compliant Operations: SWMS, risk assessments, and safety certifications on every industrial job. No shortcuts that put your compliance at risk.',
      'Sydney-Wide Industrial Coverage: We service industrial precincts across Western Sydney, South Sydney, and the Greater Sydney region.',
      'Flexible Scheduling: Day shift, night shift, weekend shutdown — we fit around your operations, not the other way around.',
      'One Provider for the Whole Facility: Industrial floors, amenities, offices, canteens, and car parks — all through Pro Clean Corp.'
    ],
    serviceAreas: [
      'Silverwater', 'Smithfield', 'Wetherill Park', 'Eastern Creek',
      'Alexandria', 'Botany', 'Blacktown', 'Arndell Park',
      'Emu Plains', 'St Marys', 'Liverpool', 'Moorebank',
      'Campbelltown', 'Minto', 'Prestons', 'Villawood'
    ],
    faqs,
    images: [
      { src: '/images/services/warehouse.webp', alt: 'Industrial warehouse floor cleaning Sydney NSW' },
      { src: '/images/services/commercial.webp', alt: 'Factory and manufacturing plant cleaning Sydney NSW' }
    ],
    relatedServices: [
      'Warehouse Cleaning Sydney',
      'Commercial Cleaning Sydney',
      'Office Cleaning Sydney',
      'Commercial Cleaning Western Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Industrial Cleaning Sydney NSW"
        serviceDescription="Professional industrial cleaning services in Sydney NSW. Warehouses, factories, manufacturing plants, food processing facilities and distribution centres. WHS-compliant, licensed and insured."
        serviceUrl="https://www.procleancorp.com.au/industrial-cleaning-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Warehouse Cleaning', 'Factory Cleaning', 'Food Processing Cleaning', 'High-Pressure Cleaning', 'Shutdown Cleaning']}
        faqs={faqs}
      />
      <ServiceSEOContent {...serviceInfo} />

      {/* Spoke Pages Hub Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-darkblue mb-6 text-center">Industrial & Warehouse Cleaning by Location</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Find specialist industrial and warehouse cleaning services in your Sydney suburb:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {spokePages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="bg-white p-3 rounded-lg text-center text-gray-700 hover:text-greenprimary hover:shadow-md transition border border-gray-100 font-medium text-sm"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
