import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Earlwood NSW | Body Corporate Cleaning | Free Quote | Pro Clean Corp',
  description: 'Professional strata and body corporate cleaning in Earlwood since 2015. Common areas, foyers, lifts, car parks & bin rooms. Serving Earlwood, Kingsgrove & Bexley North. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'strata cleaning earlwood, strata cleaners earlwood, body corporate cleaning earlwood, common area cleaning earlwood, strata cleaning kingsgrove, strata cleaning bexley north, strata cleaning bardwell park, strata cleaning arncliffe area, strata cleaning hurstville',
  openGraph: {
    title: 'Strata Cleaning Earlwood NSW | Body Corporate Cleaning | Free Quote | Pro Clean Corp',
    description: 'Professional strata and body corporate cleaning in Earlwood. Foyers, lifts, car parks & bin rooms. Serving Earlwood, Kingsgrove & Bexley North. Call 1300 494 983.',
    url: '/strata-cleaning-earlwood',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning Earlwood NSW body corporate' }]
  },
  alternates: { canonical: '/strata-cleaning-earlwood' }
};

const faqs = [
  {
    question: 'What strata cleaning services do you provide in Earlwood?',
    answer: 'Our Earlwood strata cleaning service covers all common property areas: foyers, corridors, stairwells, lifts, car parks, driveways, bin rooms, letterbox areas, and communal outdoor spaces. We design a scope and schedule matched to your building\'s layout and strata plan requirements.'
  },
  {
    question: 'Do you service strata buildings in Kingsgrove and Bexley North?',
    answer: 'Yes. Our St George area team services strata buildings across Earlwood, Kingsgrove, Bexley North, Bardwell Park, Bardwell Valley, and surrounding suburbs. The area includes a mix of established mid-century apartment buildings and newer strata complexes — we service both with consistent standards.'
  },
  {
    question: 'How do you handle older strata buildings in Earlwood?',
    answer: 'Many Earlwood strata buildings are older mid-century apartment blocks with specific needs — original tiling, terrazzo floors, and older lift infrastructure. We use appropriate cleaning products and methods for each surface type, and we communicate clearly with strata managers about any maintenance issues we observe during our visits.'
  },
  {
    question: 'Do you work with strata managers in Earlwood and the St George area?',
    answer: 'Yes. We work directly with strata managers and owners corporations across the Earlwood and St George area. We provide written service reports, maintain on-site communication logs, and offer direct account manager access for fast response to strata committee requests.'
  },
  {
    question: 'Are your cleaners police checked and insured?',
    answer: 'Yes. All Pro Clean Corp staff are police-checked and we hold full public liability insurance. You receive the same assigned team on each visit — providing accountability and the familiarity that residents in established strata buildings value.'
  }
];

export default function StrataCleaningEarlwoodPage() {
  const serviceInfo = {
    title: 'Strata Cleaning Earlwood NSW',
    description: 'Earlwood and the surrounding St George suburbs are home to a large number of established strata buildings — from mid-century apartment blocks to newer complexes near Kingsgrove and Bexley North. Pro Clean Corp provides professional strata and body corporate cleaning services throughout Earlwood and the surrounding area, keeping common areas clean, well-maintained, and meeting the expectations of residents and owners corporations.',
    benefits: [
      'Foyer & Lobby Cleaning: Entry floors vacuumed or mopped, glass doors cleaned, letterboxes wiped, surfaces dusted, and bins emptied — a consistently clean entrance that reflects well on the building.',
      'Corridor & Stairwell Maintenance: All corridors, stairwells, and landings cleaned on every scheduled visit. Cobwebs, marks, and handrail grime addressed each time.',
      'Lift Car Sanitisation: Floor, walls, stainless panels, button pads, and door tracks cleaned and disinfected — keeping the highest-traffic area of any apartment building hygienic.',
      'Car Park Cleaning: Basement and surface car parks blown, swept, and periodically pressure washed. Oil and fluid stain treatment available.',
      'Bin Room Hygiene: Bin rooms sanitised and deodorised regularly. Full bin management service available — presentation, retrieval, and post-collection cleaning.',
      'Outdoor & Communal Paths: Sweeping and maintenance of entrance paths, driveways, and communal garden areas — consistent presentation across the whole property.'
    ],
    process: [
      'Free Site Assessment: We visit your Earlwood strata building, walk all common areas with the strata or building manager, and build a cleaning scope and schedule to match.',
      'Zone-Based Schedule: Internal common areas cleaned weekly, car parks and outdoor areas fortnightly — frequencies adjusted for your building\'s size and traffic.',
      'Consistent Team: The same cleaners assigned to your building every visit — no surprises, no inconsistency.',
      'Strata Manager Communication: Written service reports, on-site communication book, and direct account manager access for fast resolution of any issues.'
    ],
    whyChooseUs: [
      'St George Area Coverage: Locally based team servicing Earlwood, Kingsgrove, Bexley North, Bardwell Park, and surrounding suburbs reliably and promptly.',
      'Older Building Experience: Comfortable with the specific requirements of mid-century apartment buildings — original tiling, terrazzo, and older lift infrastructure.',
      'Strata Manager Trusted: Documentation, communication, and accountability that St George area strata managers depend on.',
      'Licensed & Fully Insured: Police-checked staff and $20M public liability insurance. Certificates available on request.',
      'No Lock-In Contracts: Month-to-month — we keep your building by delivering consistent results.'
    ],
    serviceAreas: [
      'Earlwood', 'Kingsgrove', 'Bexley North', 'Bardwell Park',
      'Bardwell Valley', 'Arncliffe', 'Turrella', 'Undercliffe',
      'Hurstville', 'Bexley', 'Narwee', 'Beverly Hills'
    ],
    faqs,
    images: [
      { src: '/images/services/office.webp', alt: 'Strata cleaning Earlwood NSW foyer corridor' },
      { src: '/images/services/commercial.webp', alt: 'Body corporate cleaning Kingsgrove Bexley North NSW' }
    ],
    relatedServices: [
      'Strata Cleaning Sydney',
      'Strata Cleaning Arncliffe',
      'Strata Cleaning Maroubra',
      'Commercial Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Strata Cleaning Earlwood NSW"
        serviceDescription="Professional strata and body corporate cleaning in Earlwood NSW. Common areas, foyers, lifts, corridors, car parks and bin rooms. Serving Earlwood, Kingsgrove, Bexley North and surrounding St George suburbs."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-earlwood"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Body Corporate Cleaning', 'Common Area Cleaning', 'Bin Management', 'Car Park Cleaning', 'Lift Sanitisation']}
        faqs={faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
