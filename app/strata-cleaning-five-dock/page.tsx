import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Five Dock NSW | Body Corporate Cleaning | Free Quote | Pro Clean Corp',
  description: 'Professional strata and body corporate cleaning in Five Dock since 2015. Common areas, foyers, lifts, car parks & bin rooms. Serving Five Dock, Abbotsford & Cabarita. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'strata cleaning five dock, strata cleaners five dock, body corporate cleaning five dock, common area cleaning five dock, strata cleaning abbotsford, strata cleaning cabarita, strata cleaning canada bay, strata cleaning concord west, residential strata five dock',
  openGraph: {
    title: 'Strata Cleaning Five Dock NSW | Body Corporate Cleaning | Free Quote | Pro Clean Corp',
    description: 'Professional strata and body corporate cleaning in Five Dock. Foyers, lifts, car parks & bin rooms. Serving Five Dock, Abbotsford & Cabarita. Call 1300 494 983.',
    url: '/strata-cleaning-five-dock',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning Five Dock NSW body corporate' }]
  },
  alternates: { canonical: '/strata-cleaning-five-dock' }
};

const faqs = [
  {
    question: 'What strata cleaning services do you provide in Five Dock?',
    answer: 'Our Five Dock strata cleaning service covers all common property areas: foyers, corridors, stairwells, lifts, car parks, bin rooms, letterbox areas, and communal outdoor spaces. We tailor the scope and frequency to your building\'s layout and strata plan obligations.'
  },
  {
    question: 'Do you service strata buildings in Abbotsford and Cabarita?',
    answer: 'Yes. Our Canada Bay area team services strata buildings throughout Five Dock, Abbotsford, Cabarita, Drummoyne, Concord West, and Russell Lea. The area has a growing number of boutique apartment complexes and established strata buildings that we service on regular weekly and fortnightly schedules.'
  },
  {
    question: 'How often should our Five Dock strata building be cleaned?',
    answer: 'For most Five Dock apartment buildings, weekly internal common area cleaning and fortnightly car park and outdoor area maintenance is the right starting frequency. Buildings with more floors, a lift, or higher resident density often benefit from twice-weekly foyer and corridor cleaning. We recommend based on your specific building after a free site inspection.'
  },
  {
    question: 'Do you work with strata managers in Five Dock?',
    answer: 'Yes. We work directly with strata managers, building managers, and owners corporations across the Canada Bay area. We provide service reports, respond promptly to strata committee requests, and maintain on-site communication logs for resident feedback.'
  },
  {
    question: 'Are your cleaners police checked and insured?',
    answer: 'Yes. All Pro Clean Corp staff are police-checked and we hold full public liability insurance. You receive the same assigned team on each visit — providing consistency and security for residents and building managers.'
  }
];

export default function StrataCleaningFiveDockPage() {
  const serviceInfo = {
    title: 'Strata Cleaning Five Dock NSW',
    description: 'Five Dock\'s apartment market has grown significantly — with newer complexes joining the area\'s established strata buildings to create a diverse mix of properties requiring professional common area maintenance. Pro Clean Corp delivers strata and body corporate cleaning services across Five Dock, Abbotsford, and Cabarita, providing consistent, reliable cleaning that keeps residents happy and body corporate obligations met.',
    benefits: [
      'Foyer & Lobby Cleaning: Entry floors cleaned, glass doors wiped streak-free, letterboxes dusted, surfaces wiped, and bins emptied — a clean, welcoming entrance on every scheduled visit.',
      'Corridor & Stairwell Maintenance: All corridors, stairwells, and landing areas vacuumed or mopped. Cobwebs removed, handrails and skirting wiped on each visit.',
      'Lift Car Sanitisation: Floor, walls, stainless panels, button pads, and door tracks cleaned and disinfected — high-touch surfaces kept hygienic for every resident.',
      'Car Park & Driveway Cleaning: Regular blowing and sweeping of car parks, visitor parking, and driveways. Periodic pressure washing for oil stains and surface grime build-up.',
      'Bin Room Hygiene: Bin rooms sanitised and deodorised on each visit. Full bin management service available — presentation, retrieval, and post-collection cleaning.',
      'Outdoor & Communal Areas: Sweeping and maintenance of communal paths, garden areas, and outdoor spaces — keeping the whole property presented consistently.'
    ],
    process: [
      'Free Building Assessment: We visit your Five Dock strata property and walk all common areas with the strata or building manager to understand the full scope required.',
      'Tailored Schedule: Frequencies matched to each zone — lifts and foyers cleaned weekly, car parks and outdoor areas fortnightly or monthly.',
      'Consistent Assigned Team: The same cleaners every visit — familiar with your building layout, access requirements, and resident expectations.',
      'Strata Manager Communication: Service reports, on-site communication book, and direct account manager contact for fast response to any issues.'
    ],
    whyChooseUs: [
      'Canada Bay Area Coverage: Locally positioned team servicing Five Dock, Abbotsford, Cabarita, Drummoyne, Concord West, and surrounding suburbs.',
      'Strata Manager Preferred: Reporting, accountability, and communication standards that Canada Bay strata managers trust.',
      'Licensed & Fully Insured: Police-checked staff and $20M public liability insurance. Certificates of currency on request.',
      'Consistent Resident Experience: The same high standard on every visit — reducing resident complaints and owner corporation workload.',
      'No Lock-In Contracts: Month-to-month arrangements — we earn your building every visit.'
    ],
    serviceAreas: [
      'Five Dock', 'Abbotsford', 'Cabarita', 'Drummoyne',
      'Concord West', 'Russell Lea', 'Canada Bay', 'Wareemba',
      'Rodd Point', 'Chiswick', 'Mortlake', 'Concord'
    ],
    faqs,
    images: [
      { src: '/images/services/office.webp', alt: 'Strata cleaning Five Dock NSW foyer lobby' },
      { src: '/images/services/commercial.webp', alt: 'Body corporate cleaning Abbotsford Cabarita NSW' }
    ],
    relatedServices: [
      'Strata Cleaning Sydney',
      'Strata Cleaning Drummoyne',
      'Strata Cleaning Concord',
      'Commercial Cleaning Inner West'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Strata Cleaning Five Dock NSW"
        serviceDescription="Professional strata and body corporate cleaning in Five Dock NSW. Common areas, foyers, lifts, corridors, car parks and bin rooms. Serving Five Dock, Abbotsford, Cabarita and surrounding Canada Bay suburbs."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-five-dock"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Body Corporate Cleaning', 'Common Area Cleaning', 'Bin Management', 'Car Park Cleaning', 'Lift Sanitisation']}
        faqs={faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
