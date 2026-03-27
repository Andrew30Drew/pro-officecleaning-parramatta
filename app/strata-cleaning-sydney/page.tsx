import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Sydney NSW | Body Corporate Cleaning | Free Quote | Pro Clean Corp',
  description: 'Professional strata and body corporate cleaning in Sydney since 2015. Common areas, foyers, lifts, car parks & bin rooms. Licensed & insured. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'strata cleaning sydney, body corporate cleaning sydney, common area cleaning sydney, strata cleaners sydney, residential strata cleaning, commercial strata cleaning nsw, strata cleaning company sydney, strata cleaning services sydney, apartment building cleaning sydney, strata maintenance sydney',
  openGraph: {
    title: 'Strata Cleaning Sydney NSW | Body Corporate Cleaning | Free Quote | Pro Clean Corp',
    description: 'Professional strata and body corporate cleaning in Sydney. Common areas, foyers, lifts, car parks & bin rooms. Licensed & insured. Call 1300 494 983.',
    url: '/strata-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning Sydney NSW body corporate' }]
  },
  alternates: { canonical: '/strata-cleaning-sydney' }
};

const spokePages = [
  { name: 'Strata Cleaning Arncliffe', slug: 'strata-cleaning-arncliffe' },
  { name: 'Strata Cleaning Bondi', slug: 'strata-cleaning-bondi' },
  { name: 'Strata Cleaning Burwood', slug: 'strata-cleaning-burwood' },
  { name: 'Strata Cleaning Concord', slug: 'strata-cleaning-concord' },
  { name: 'Strata Cleaning Coogee', slug: 'strata-cleaning-coogee' },
  { name: 'Strata Cleaning Drummoyne', slug: 'strata-cleaning-drummoyne' },
  { name: 'Strata Cleaning Earlwood', slug: 'strata-cleaning-earlwood' },
  { name: 'Strata Cleaning Eastern Suburbs', slug: 'strata-cleaning-eastern-suburbs' },
  { name: 'Strata Cleaning Five Dock', slug: 'strata-cleaning-five-dock' },
  { name: 'Strata Cleaning Hornsby', slug: 'strata-cleaning-hornsby' },
  { name: 'Strata Cleaning Kings Cross', slug: 'strata-cleaning-kings-cross' },
  { name: 'Strata Cleaning Leichhardt', slug: 'strata-cleaning-leichhardt' },
  { name: 'Strata Cleaning Maroubra', slug: 'strata-cleaning-maroubra' },
  { name: 'Strata Cleaning North Sydney', slug: 'strata-cleaning-north-sydney' },
  { name: 'Strata Cleaning Sydney CBD', slug: 'strata-cleaning-sydney-cbd' },
];

const faqs = [
  {
    question: 'What does strata cleaning include?',
    answer: 'Our Sydney strata cleaning service covers all common property areas: foyers, lobbies, corridors, stairwells, lifts, car parks, driveways, bin rooms, letterbox areas, outdoor paths, and communal recreational spaces such as pool surrounds and BBQ areas. We tailor the scope to your building\'s specific common areas and strata plan.'
  },
  {
    question: 'How often should strata common areas be cleaned?',
    answer: 'For most Sydney apartment buildings, we recommend weekly cleaning of internal common areas (foyers, corridors, lifts) and fortnightly attention to car parks and outdoor areas. High-density buildings or those with high foot traffic — particularly in the CBD or inner suburbs — often require twice-weekly or daily foyer and lobby maintenance. We will recommend the right frequency after a free site assessment.'
  },
  {
    question: 'Do you work directly with strata managers and owners corporations?',
    answer: 'Yes. We work closely with strata managers, building managers, and owners corporations across Sydney. We provide detailed service reports, respond promptly to strata manager requests, attend body corporate meetings when required, and maintain a communication log on-site for resident feedback. We understand the accountability that strata managers need from their cleaning contractors.'
  },
  {
    question: 'Do you provide bin management services?',
    answer: 'Yes. Our strata cleaning service includes bin management — presenting bins for council collection, returning them after collection, cleaning bin rooms, and deodorising bins. Bin room hygiene is one of the most common resident complaints in strata buildings; we treat it as a priority on every visit.'
  },
  {
    question: 'Are your strata cleaners police checked and insured?',
    answer: 'Yes. All Pro Clean Corp staff are police-checked and we hold full public liability insurance. For strata buildings with residents on-site, we understand the security and trust requirements. You will receive the same assigned team on every visit — familiar faces that residents recognise and trust.'
  }
];

export default function StrataCleaningSydneyPage() {
  const serviceInfo = {
    title: 'Strata Cleaning Sydney NSW',
    description: 'Well-maintained common areas are the single biggest factor in resident satisfaction and long-term property value in strata buildings. Pro Clean Corp delivers professional strata and body corporate cleaning services across Sydney — from CBD high-rise towers to suburban apartment complexes — working directly with strata managers and owners corporations to keep every common area consistently clean, safe, and welcoming.',
    benefits: [
      'Foyer & Lobby Cleaning: First impressions matter. We clean and polish foyer floors, wipe down letterboxes, clean glass entry doors, dust surfaces, and empty bins — presenting your building at its best every day.',
      'Corridor & Stairwell Maintenance: Vacuuming or mopping all corridors, stairwells, and landings on every visit. Cobweb removal, handrail wiping, and light fixture dusting included.',
      'Lift Car Sanitisation: Full lift car cleaning including floors, walls, buttons, and door tracks. High-touch surfaces disinfected to reduce germ transmission between residents.',
      'Car Park & Driveway Cleaning: Blowing, sweeping, and periodic pressure washing of car parks, visitor parking areas, and driveways. Oil stain treatment available.',
      'Bin Room Cleaning & Management: Bin room sanitisation, deodorising, and full bin management service — presentation, retrieval, and cleaning after collection.',
      'Pool Surrounds & Communal Areas: Cleaning of pool surrounds, BBQ areas, gymnasium spaces, and rooftop terraces as part of a comprehensive strata maintenance package.'
    ],
    process: [
      'Free Building Assessment: We visit your strata property, walk all common areas with the building or strata manager, and design a cleaning scope matched to your building\'s needs and budget.',
      'Strata-Tailored Schedule: Frequencies set for each area — high-traffic zones cleaned more often, periodic tasks scheduled around body corporate requirements.',
      'Assigned Consistent Team: The same cleaners every visit — known to residents and building management, providing accountability and security.',
      'Reporting & Communication: Digital service reports, on-site communication book, and a direct account manager available to strata managers for fast response to any issues.'
    ],
    whyChooseUs: [
      'Strata Industry Experience: We manage cleaning contracts for residential complexes, mixed-use buildings, and commercial strata across greater Sydney.',
      'Strata Manager Preferred: We understand the reporting, accountability, and response standards that strata managers require from cleaning contractors.',
      'Residents Come First: Consistent, reliable cleaning that residents notice — reducing complaint volumes for building and strata managers.',
      'Licensed & Fully Insured: Police-checked staff, $20M public liability insurance, and certificates of currency available on request.',
      'No Lock-In Contracts: Month-to-month arrangements — we keep your building by earning it every visit.'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Bondi', 'Coogee',
      'Maroubra', 'Arncliffe', 'Kings Cross', 'Hornsby',
      'Parramatta', 'Chatswood', 'Manly', 'Eastern Suburbs'
    ],
    faqs,
    images: [
      { src: '/images/services/office.webp', alt: 'Strata foyer and lobby cleaning Sydney NSW' },
      { src: '/images/services/commercial.webp', alt: 'Body corporate common area cleaning Sydney NSW' }
    ],
    relatedServices: [
      'Body Corporate Cleaning Sydney',
      'Commercial Cleaning Sydney',
      'Office Cleaning Sydney',
      'Commercial Property Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Strata Cleaning Sydney NSW"
        serviceDescription="Professional strata and body corporate cleaning services in Sydney NSW. Common areas, foyers, lifts, corridors, car parks, bin rooms and communal spaces. Licensed, insured, strata manager preferred."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Body Corporate Cleaning', 'Common Area Cleaning', 'Bin Management', 'Car Park Cleaning', 'Pool Surround Cleaning']}
        faqs={faqs}
      />
      <ServiceSEOContent {...serviceInfo} />

      {/* Spoke Pages Hub Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-darkblue mb-6 text-center">Strata Cleaning by Sydney Suburb</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We service strata buildings and apartment complexes across all Sydney suburbs. Find your local strata cleaning service:
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
