import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Burwood NSW | Body Corporate Cleaning | Free Quote | Pro Clean Corp',
  description: 'Professional strata and body corporate cleaning in Burwood since 2015. Common areas, foyers, lifts, car parks & bin rooms. Serving Burwood, Strathfield & Croydon. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'strata cleaning burwood, strata cleaners burwood, body corporate cleaning burwood, common area cleaning burwood, strata cleaning strathfield, strata cleaning croydon, strata cleaning ashfield, residential strata burwood, strata cleaning burwood nsw',
  openGraph: {
    title: 'Strata Cleaning Burwood NSW | Body Corporate Cleaning | Free Quote | Pro Clean Corp',
    description: 'Professional strata and body corporate cleaning in Burwood. Foyers, lifts, car parks & bin rooms. Serving Burwood, Strathfield & Croydon. Call 1300 494 983.',
    url: '/strata-cleaning-burwood',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning Burwood NSW body corporate' }]
  },
  alternates: { canonical: '/strata-cleaning-burwood' }
};

const faqs = [
  {
    question: 'What strata cleaning services do you offer in Burwood?',
    answer: 'Our Burwood strata cleaning service covers all common property areas: foyers, corridors, stairwells, lifts, car parks, bin rooms, letterbox areas, and communal outdoor spaces. We create a cleaning schedule matched to your building\'s size and strata plan requirements.'
  },
  {
    question: 'Do you service strata buildings in Strathfield and Croydon?',
    answer: 'Yes. Our inner-west team services strata buildings across Burwood, Strathfield, Croydon, Ashfield, Homebush, and Flemington. Burwood and Strathfield have a high concentration of mid-rise apartment buildings that we service on regular weekly and fortnightly schedules.'
  },
  {
    question: 'How do you manage high-density strata buildings in Burwood?',
    answer: 'Burwood\'s high-density apartment buildings require more frequent attention to lifts, foyers, and bin rooms due to higher resident numbers. For larger buildings we recommend twice-weekly internal cleaning and weekly bin room maintenance. We assess each building individually and recommend the frequency that keeps residents satisfied without overspending the strata budget.'
  },
  {
    question: 'Do you work with strata managers in Burwood?',
    answer: 'Yes. We work with strata managers and owners corporations across Burwood and the inner-west. We provide written service reports, maintain on-site communication books, and offer direct account manager access for fast response to strata committee requests.'
  },
  {
    question: 'Are your cleaners police checked and insured?',
    answer: 'Yes. All Pro Clean Corp staff are police-checked and we carry full public liability insurance. You receive the same assigned team on each visit — providing consistency and security for residents.'
  }
];

export default function StrataCleaningBurwoodPage() {
  const serviceInfo = {
    title: 'Strata Cleaning Burwood NSW',
    description: 'Burwood is one of Sydney\'s most densely populated apartment markets — with hundreds of strata buildings ranging from classic 1970s blocks to modern high-rises near the station. Pro Clean Corp delivers professional strata and body corporate cleaning services throughout Burwood, Strathfield, and Croydon, providing reliable common area maintenance that keeps residents satisfied and body corporate obligations met.',
    benefits: [
      'Foyer & Lobby Cleaning: Entry floors mopped or vacuumed, glass doors cleaned streak-free, letterboxes wiped, surfaces dusted, and bins emptied — a welcoming entrance on every visit.',
      'Corridor & Stairwell Maintenance: All corridors, stairwells, and landing areas vacuumed or mopped on schedule. Cobwebs, marks on walls, and skirting boards addressed on every visit.',
      'Lift Car Sanitisation: Complete lift car clean including floor, walls, stainless panels, button pads, and door tracks — disinfected to keep the most high-touch area in any building hygienic.',
      'Car Park Cleaning: Basement and surface-level car parks blown, swept, and periodically pressure washed. Oil stain treatment and drain surround cleaning included.',
      'Bin Room Hygiene: Bin rooms sanitised and deodorised on each visit. Full bin management service available — presentation, retrieval, and cleaning after collection day.',
      'Communal Garden & Outdoor Areas: Paths, entrances, and communal garden areas swept and maintained to match the standard of the internal common areas.'
    ],
    process: [
      'Free Site Assessment: We visit your Burwood strata building, walk all common areas with the strata or building manager, and design a scope and schedule matched to your building.',
      'Frequency-Matched Plan: High-traffic zones cleaned more frequently — lifts and foyers weekly, car parks and outdoor areas fortnightly.',
      'Consistent Team: The same cleaners assigned to your building every visit — no strangers, no inconsistency.',
      'Clear Communication: Service reports, on-site log book, and direct account manager access for strata managers and building management.'
    ],
    whyChooseUs: [
      'Inner-West Expertise: Locally based team with deep experience in Burwood, Strathfield, and Croydon strata buildings — including the mix of older and newer stock in the area.',
      'High-Density Building Experience: We manage large-building contracts with multiple cleaning zones, multiple access points, and high resident expectations.',
      'Strata Manager Preferred: Reporting, documentation, and communication that strata managers across the Burwood area rely on.',
      'Licensed & Fully Insured: Police-checked staff, $20M public liability insurance, certificates on request.',
      'No Lock-In Contracts: Month-to-month arrangements — we keep your contract by earning it.'
    ],
    serviceAreas: [
      'Burwood', 'Strathfield', 'Croydon', 'Ashfield',
      'Homebush', 'Flemington', 'Croydon Park', 'Burwood Heights',
      'North Strathfield', 'Concord', 'Enfield', 'Belfield'
    ],
    faqs,
    images: [
      { src: '/images/services/office.webp', alt: 'Strata cleaning Burwood NSW foyer lobby' },
      { src: '/images/services/commercial.webp', alt: 'Body corporate cleaning Strathfield Croydon NSW' }
    ],
    relatedServices: [
      'Strata Cleaning Sydney',
      'Strata Cleaning Concord',
      'Strata Cleaning Leichhardt',
      'Commercial Cleaning Inner West'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Strata Cleaning Burwood NSW"
        serviceDescription="Professional strata and body corporate cleaning in Burwood NSW. Common areas, foyers, lifts, corridors, car parks and bin rooms. Serving Burwood, Strathfield, Croydon and surrounding inner-west suburbs."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-burwood"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Body Corporate Cleaning', 'Common Area Cleaning', 'Bin Management', 'Car Park Cleaning', 'Lift Sanitisation']}
        faqs={faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
