import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Leichhardt NSW | Body Corporate Cleaning | Free Quote | Pro Clean Corp',
  description: 'Professional strata and body corporate cleaning in Leichhardt since 2015. Common areas, foyers, lifts, car parks & bin rooms. Serving Leichhardt, Annandale & Balmain. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'strata cleaning leichhardt, strata cleaners leichhardt, body corporate cleaning leichhardt, common area cleaning leichhardt, strata cleaning annandale, strata cleaning balmain, strata cleaning glebe, strata cleaning rozelle, residential strata inner west',
  openGraph: {
    title: 'Strata Cleaning Leichhardt NSW | Body Corporate Cleaning | Free Quote | Pro Clean Corp',
    description: 'Professional strata and body corporate cleaning in Leichhardt. Foyers, lifts, car parks & bin rooms. Serving Leichhardt, Annandale & Balmain. Call 1300 494 983.',
    url: '/strata-cleaning-leichhardt',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Strata cleaning Leichhardt NSW body corporate inner west' }]
  },
  alternates: { canonical: '/strata-cleaning-leichhardt' }
};

const faqs = [
  {
    question: 'What strata cleaning services do you provide in Leichhardt?',
    answer: 'Our Leichhardt strata cleaning service covers all common areas: foyers, corridors, stairwells, lifts (where present), car parks, driveways, bin rooms, and communal garden areas. Inner West strata buildings often include a mix of heritage features and modern fittings — we clean both with appropriate care.'
  },
  {
    question: 'Do you service strata buildings in Annandale and Balmain?',
    answer: 'Yes. Our inner-west team services strata buildings across Leichhardt, Annandale, Balmain, Rozelle, Glebe, and Lilyfield. From period-converted apartment buildings to newer boutique strata complexes, we provide consistent cleaning matched to each building\'s requirements.'
  },
  {
    question: 'Can you clean heritage strata buildings in Leichhardt?',
    answer: 'Yes. Leichhardt and surrounding inner-west suburbs have a significant number of heritage-listed or period strata buildings — converted terraces, federation-era buildings, and brick-and-tile apartments. We use surface-appropriate products and methods that clean thoroughly without damaging heritage floors, tiles, timber stairwells, or period features.'
  },
  {
    question: 'How often should strata buildings in Leichhardt be cleaned?',
    answer: 'For most inner-west strata buildings we recommend weekly internal common area cleaning. Older buildings with more foot traffic through shared entrances and stairwells may benefit from twice-weekly foyer maintenance. Car parks and outdoor areas are typically fortnightly. We will recommend the right schedule after a free site assessment.'
  },
  {
    question: 'Are your cleaners police checked and insured?',
    answer: 'Yes. All Pro Clean Corp staff are police-checked and we carry full public liability insurance. You will receive the same assigned team on every visit — important for the security and familiarity that residents in small inner-west strata buildings value.'
  }
];

export default function StrataCleaningLeichardtPage() {
  const serviceInfo = {
    title: 'Strata Cleaning Leichhardt NSW',
    description: 'Leichhardt and the inner-west have some of Sydney\'s most characterful strata buildings — from converted federation terraces and brick-and-tile walk-ups to newer boutique complexes on Norton Street and Parramatta Road. Pro Clean Corp provides professional strata and body corporate cleaning services throughout Leichhardt, Annandale, Balmain, and Rozelle, with experience in both heritage buildings and modern strata properties.',
    benefits: [
      'Foyer & Entry Cleaning: Tiled and timber entry floors cleaned appropriately, glass doors wiped streak-free, letterboxes dusted, and bins emptied — a clean entrance every scheduled visit.',
      'Corridor & Stairwell Maintenance: Internal common areas vacuumed or mopped, cobwebs removed, handrails and skirting wiped — essential for the narrow stairwells common in inner-west buildings.',
      'Heritage Surface Care: Appropriate products and methods for heritage timber floors, original tiling, sandstone steps, and period finishes — thorough cleaning without surface damage.',
      'Car Park & Driveway Cleaning: Swept and blown car parks and driveways, with periodic pressure washing for older surface-level parking common in inner-west strata.',
      'Bin Room Management: Regular sanitisation and deodorising of bin rooms, plus full bin management service around council collection days.',
      'Communal Garden & Courtyard Areas: Sweeping, tidying, and maintenance of communal courtyards and garden paths common in converted inner-west strata complexes.'
    ],
    process: [
      'Free Building Walk-Through: We visit your Leichhardt strata building, inspect all common areas with the strata or building manager, and note any heritage or specialist surface requirements.',
      'Tailored Cleaning Plan: A scope and schedule suited to your building\'s age, layout, and the frequencies required by your strata plan and residents.',
      'Assigned Local Team: The same cleaners on every visit — familiar with your building\'s specific features and access requirements.',
      'Strata Manager Communication: Service reports, on-site communication log, and direct account manager contact for fast response to any issues.'
    ],
    whyChooseUs: [
      'Inner-West Local Presence: Team based in the inner-west — fast, reliable service for Leichhardt, Annandale, Balmain, and surrounding suburbs.',
      'Heritage Building Experience: Proven track record cleaning period and heritage strata buildings that require extra care and surface knowledge.',
      'Strata Manager Trusted: Communication, documentation, and accountability that inner-west strata managers rely on.',
      'Licensed & Fully Insured: Police-checked staff, $20M public liability insurance, certificates available on request.',
      'No Lock-In Contracts: Month-to-month — we keep your building by performing consistently.'
    ],
    serviceAreas: [
      'Leichhardt', 'Annandale', 'Balmain', 'Rozelle',
      'Glebe', 'Lilyfield', 'Stanmore', 'Petersham',
      'Haberfield', 'Drummoyne', 'Croydon', 'Ashfield'
    ],
    faqs,
    images: [
      { src: '/images/services/office.webp', alt: 'Strata cleaning Leichhardt NSW inner west foyer' },
      { src: '/images/services/commercial.webp', alt: 'Body corporate cleaning Annandale Balmain NSW' }
    ],
    relatedServices: [
      'Strata Cleaning Sydney',
      'Strata Cleaning Drummoyne',
      'Strata Cleaning Burwood',
      'Commercial Cleaning Inner West'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Strata Cleaning Leichhardt NSW"
        serviceDescription="Professional strata and body corporate cleaning in Leichhardt NSW. Common areas, foyers, corridors, car parks and bin rooms. Heritage building experience. Serving Leichhardt, Annandale, Balmain, Rozelle and inner-west suburbs."
        serviceUrl="https://www.procleancorp.com.au/strata-cleaning-leichhardt"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Body Corporate Cleaning', 'Heritage Building Cleaning', 'Common Area Cleaning', 'Bin Management', 'Car Park Cleaning']}
        faqs={faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
