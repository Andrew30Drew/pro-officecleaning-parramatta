import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Concord NSW | Body Corporate Cleaning | Free Quote | Pro Clean Corp',
  description: 'Professional strata and body corporate cleaning in Concord since 2015. Common areas, foyers, lifts, car parks & bin rooms. Serving Concord, Rhodes & North Strathfield. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'strata cleaning concord, strata cleaners concord, body corporate cleaning concord, common area cleaning concord, strata cleaning rhodes, strata cleaning north strathfield, strata cleaning strathfield, residential strata concord, strata cleaning canada bay',
  openGraph: {
    title: 'Strata Cleaning Concord NSW | Body Corporate Cleaning | Free Quote | Pro Clean Corp',
    description: 'Professional strata and body corporate cleaning in Concord. Foyers, lifts, car parks & bin rooms. Serving Concord, Rhodes & North Strathfield. Call 1300 494 983.',
    url: '/strata-cleaning-concord',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning Concord NSW body corporate' }]
  },
  alternates: { canonical: '/strata-cleaning-concord' }
};

const faqs = [
  {
    question: 'What strata cleaning services do you provide in Concord?',
    answer: 'Our Concord strata cleaning service covers all common property areas: foyers, lobbies, corridors, stairwells, lifts, car parks, driveways, bin rooms, letterbox areas, and communal outdoor spaces. We tailor the scope and frequency to your building\'s size and the requirements of your strata plan.'
  },
  {
    question: 'Do you service strata buildings in Rhodes and North Strathfield?',
    answer: 'Yes. Our Canada Bay area team services strata buildings throughout Concord, Rhodes, North Strathfield, Strathfield, Liberty Grove, and surrounding suburbs. Rhodes in particular has a high density of newer apartment complexes that we service regularly.'
  },
  {
    question: 'How often should our Concord strata building be cleaned?',
    answer: 'For most Concord apartment buildings we recommend weekly internal common area cleaning (foyers, corridors, lifts) and fortnightly car park and outdoor maintenance. High-density buildings or those near the Rhodes waterfront with higher foot traffic may benefit from twice-weekly foyer and lobby visits.'
  },
  {
    question: 'Do you work with strata managers and owners corporations in Concord?',
    answer: 'Yes. We work directly with strata managers, building managers, and owners corporations across the Canada Bay LGA. We provide service reports, respond promptly to requests, and maintain an on-site communication log for resident feedback.'
  },
  {
    question: 'Are your cleaners police checked and insured?',
    answer: 'Yes. All Pro Clean Corp staff are police-checked and we hold full public liability insurance. You receive the same assigned team on each visit — known faces that residents and building managers can trust.'
  }
];

export default function StrataCleaningConcordPage() {
  const serviceInfo = {
    title: 'Strata Cleaning Concord NSW',
    description: 'The Canada Bay area — covering Concord, Rhodes, and North Strathfield — is home to a growing number of modern apartment complexes and established strata buildings. Pro Clean Corp provides professional strata and body corporate cleaning services throughout Concord and the surrounding Canada Bay suburbs, keeping common areas consistently clean, safe, and well-presented for residents and owners corporations.',
    benefits: [
      'Foyer & Lobby Cleaning: Floors polished, glass entry doors cleaned, letterboxes wiped, surfaces dusted, and bins emptied on every visit — ensuring your building always presents well.',
      'Corridor & Stairwell Maintenance: All corridors, stairwells, and landings vacuumed or mopped, cobwebs removed, and handrails wiped down on each scheduled clean.',
      'Lift Car Sanitisation: Full lift car cleaning including floors, walls, stainless surfaces, buttons, and door tracks — disinfected to reduce germ transmission between residents.',
      'Car Park & Driveway Cleaning: Regular blowing and sweeping of car parks, visitor bays, and driveways. Periodic pressure washing for oil stains and built-up grime.',
      'Bin Room Cleaning & Management: Bin room sanitisation, deodorising, and full bin management — presentation for collection and return — keeping one of the most common resident complaint areas under control.',
      'Communal Area Maintenance: Cleaning of pool surrounds, garden paths, BBQ areas, and any other common property unique to your Concord building.'
    ],
    process: [
      'Free Building Assessment: We visit your Concord strata property, walk all common areas with the building or strata manager, and design a cleaning scope and schedule matched to your building\'s needs.',
      'Strata-Tailored Schedule: Frequencies matched to each zone — high-traffic foyers cleaned more often, car parks and outdoor areas on a fortnightly or monthly cycle.',
      'Consistent Assigned Team: The same cleaners every visit — familiar with your building layout, access codes, and resident expectations.',
      'Reporting & Communication: Service reports available, on-site communication book, and a direct account manager for strata managers needing fast response.'
    ],
    whyChooseUs: [
      'Canada Bay Area Coverage: Locally positioned team servicing Concord, Rhodes, North Strathfield, Strathfield, and surrounding suburbs.',
      'Strata Manager Preferred: We understand the reporting, accountability, and response standards that strata managers in the Canada Bay area require.',
      'Licensed & Fully Insured: Police-checked staff and $20M public liability insurance. Certificates of currency available on request.',
      'Resident-Focused Service: Consistent cleaning that residents notice and appreciate — reducing complaint volumes for building managers.',
      'No Lock-In Contracts: Month-to-month arrangements — we earn your building\'s business every visit.'
    ],
    serviceAreas: [
      'Concord', 'Rhodes', 'North Strathfield', 'Strathfield',
      'Liberty Grove', 'Concord West', 'Cabarita', 'Mortlake',
      'Breakfast Point', 'Majors Bay', 'Homebush', 'Flemington'
    ],
    faqs,
    images: [
      { src: '/images/services/office.webp', alt: 'Strata cleaning Concord NSW foyer and lobby' },
      { src: '/images/services/commercial.webp', alt: 'Body corporate cleaning Rhodes North Strathfield NSW' }
    ],
    relatedServices: [
      'Strata Cleaning Sydney',
      'Strata Cleaning Drummoyne',
      'Strata Cleaning Burwood',
      'Commercial Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Strata Cleaning Concord NSW"
        serviceDescription="Professional strata and body corporate cleaning in Concord NSW. Common areas, foyers, lifts, corridors, car parks and bin rooms. Serving Concord, Rhodes, North Strathfield and surrounding Canada Bay suburbs."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-concord"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Body Corporate Cleaning', 'Common Area Cleaning', 'Bin Management', 'Car Park Cleaning', 'Lift Sanitisation']}
        faqs={faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
