import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Drummoyne NSW | Body Corporate Cleaning | Free Quote | Pro Clean Corp',
  description: 'Professional strata and body corporate cleaning in Drummoyne since 2015. Common areas, foyers, lifts, car parks & bin rooms. Serving Drummoyne, Five Dock & Russell Lea. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'strata cleaning drummoyne, strata cleaners drummoyne, body corporate cleaning drummoyne, common area cleaning drummoyne, strata cleaning five dock, strata cleaning rodd point, strata cleaning russell lea, residential strata drummoyne, strata cleaning canada bay',
  openGraph: {
    title: 'Strata Cleaning Drummoyne NSW | Body Corporate Cleaning | Free Quote | Pro Clean Corp',
    description: 'Professional strata and body corporate cleaning in Drummoyne. Foyers, lifts, car parks & bin rooms. Serving Drummoyne, Five Dock & Russell Lea. Call 1300 494 983.',
    url: '/strata-cleaning-drummoyne',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning Drummoyne NSW body corporate' }]
  },
  alternates: { canonical: '/strata-cleaning-drummoyne' }
};

const faqs = [
  {
    question: 'What strata cleaning services do you provide in Drummoyne?',
    answer: 'Our Drummoyne strata cleaning service covers all common property areas: foyers, corridors, stairwells, lifts, car parks, driveways, bin rooms, letterbox areas, and communal outdoor and waterfront spaces. We build a scope specific to your building and strata plan obligations.'
  },
  {
    question: 'Do you service strata buildings in Five Dock and Russell Lea?',
    answer: 'Yes. Our team services strata buildings throughout Drummoyne, Five Dock, Russell Lea, Rodd Point, Abbotsford, and Cabarita. Whether your building is a boutique four-storey walk-up or a larger waterfront complex, we provide the same consistent standard of service.'
  },
  {
    question: 'How do you handle waterfront strata buildings in Drummoyne?',
    answer: 'Waterfront and harbour-adjacent strata buildings in Drummoyne require additional attention to salt residue on glass, external surfaces, and car parks near water. We use appropriate cleaning agents for salt-affected surfaces and increase the frequency of external glass cleaning for buildings with significant harbour exposure.'
  },
  {
    question: 'Do you work with strata managers in Drummoyne?',
    answer: 'Yes. We work directly with strata managers, building managers, and owners corporations across Drummoyne and the inner-west waterfront. We provide service reports, maintain on-site communication logs, and respond promptly to strata manager requests and resident concerns.'
  },
  {
    question: 'Are your cleaners police checked and insured?',
    answer: 'Yes. All Pro Clean Corp staff are police-checked and we hold full public liability insurance. You receive the same assigned team on each visit — providing accountability and security for residents and building managers.'
  }
];

export default function StrataCleaningDrummoyePage() {
  const serviceInfo = {
    title: 'Strata Cleaning Drummoyne NSW',
    description: 'Drummoyne\'s mix of established apartment buildings and newer waterfront complexes demands a strata cleaning partner who understands both. Pro Clean Corp provides professional strata and body corporate cleaning services throughout Drummoyne, Five Dock, and Russell Lea — keeping foyers, corridors, car parks, and communal spaces clean and well-maintained for residents, strata committees, and building managers.',
    benefits: [
      'Foyer & Lobby Cleaning: Polished floors, clean glass entry doors, dusted surfaces, wiped letterboxes, and emptied bins — presenting your Drummoyne building at its best on every scheduled visit.',
      'Corridor & Stairwell Maintenance: All internal common areas vacuumed or mopped, cobwebs removed, handrails and skirting wiped — consistent maintenance across every floor.',
      'Lift Car Sanitisation: Floor, walls, stainless steel panels, buttons, and door tracks cleaned and disinfected on every visit to protect residents from high-touch surface contamination.',
      'Car Park & Driveway Cleaning: Blowing, sweeping, and periodic pressure washing of basement and surface car parks, driveways, and visitor areas — salt residue treatment for waterfront buildings.',
      'Bin Room Hygiene: Regular bin room sanitisation and deodorising, plus full bin management — presentation and retrieval around council collection schedules.',
      'Waterfront & Outdoor Areas: Cleaning of pool surrounds, communal courtyards, and harbour-facing outdoor common areas — including salt residue management for waterfront properties.'
    ],
    process: [
      'Free Building Assessment: We visit your Drummoyne strata property, inspect all common areas with the strata or building manager, and build a cleaning scope and schedule to match.',
      'Zone-Based Schedule: High-traffic internal areas cleaned weekly, car parks and outdoor areas fortnightly or monthly, with additional visits available around body corporate events.',
      'Consistent Assigned Team: The same cleaners every visit — familiar with your building, access procedures, and the expectations of your strata committee.',
      'Strata Manager Communication: Service reports, on-site communication book, and a direct account manager for fast response to any resident or strata committee concerns.'
    ],
    whyChooseUs: [
      'Inner-West Waterfront Experience: We understand the specific cleaning requirements of Drummoyne\'s harbour-side and waterfront strata buildings — including salt management and external surface care.',
      'Canada Bay LGA Coverage: Locally based team servicing Drummoyne, Five Dock, Russell Lea, Rodd Point, Abbotsford, and Cabarita.',
      'Strata Manager Ready: Reporting, accountability, and communication standards that strata managers in the area rely on.',
      'Licensed & Fully Insured: Police-checked staff and $20M public liability insurance. Certificates on request.',
      'No Lock-In Contracts: Month-to-month — we keep your contract by delivering results every visit.'
    ],
    serviceAreas: [
      'Drummoyne', 'Five Dock', 'Russell Lea', 'Rodd Point',
      'Abbotsford', 'Cabarita', 'Concord West', 'Chiswick',
      'Canada Bay', 'Wareemba', 'Mortlake', 'Rhodes'
    ],
    faqs,
    images: [
      { src: '/images/services/office.webp', alt: 'Strata cleaning Drummoyne NSW foyer corridor' },
      { src: '/images/services/commercial.webp', alt: 'Body corporate cleaning Five Dock Russell Lea NSW' }
    ],
    relatedServices: [
      'Strata Cleaning Sydney',
      'Strata Cleaning Concord',
      'Strata Cleaning Five Dock',
      'Commercial Cleaning Inner West'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Strata Cleaning Drummoyne NSW"
        serviceDescription="Professional strata and body corporate cleaning in Drummoyne NSW. Common areas, foyers, lifts, corridors, car parks and bin rooms. Serving Drummoyne, Five Dock, Russell Lea and surrounding Canada Bay suburbs."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-drummoyne"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Body Corporate Cleaning', 'Common Area Cleaning', 'Bin Management', 'Car Park Cleaning', 'Waterfront Building Cleaning']}
        faqs={faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
