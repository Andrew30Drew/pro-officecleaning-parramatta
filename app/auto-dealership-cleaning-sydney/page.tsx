import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Auto Dealership Cleaning Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional auto dealership cleaning in Sydney since 2015. Showroom floors, detailing bays, workshops & car yards. Licensed & insured. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'auto dealership cleaning sydney, car dealership cleaning sydney, automotive dealership cleaning services, car yard cleaning sydney, vehicle showroom cleaning sydney, new car showroom cleaners, car dealership floor cleaning, automotive cleaning services nsw, dealership cleaning company sydney, car showroom cleaning sydney',
  openGraph: {
    title: 'Auto Dealership Cleaning Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional auto dealership cleaning in Sydney. Showroom floors, detailing bays, workshops & car yards. Licensed & insured. Call 1300 494 983.',
    url: '/auto-dealership-cleaning-sydney',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Auto dealership cleaning services Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/auto-dealership-cleaning-sydney'
  }
};

export default function AutoDealershipCleaningPage() {
  const serviceInfo = {
    title: 'Auto Dealership Cleaning Sydney NSW',
    description: 'Your showroom is your first impression — customers decide whether to trust your brand the moment they walk in. Pro Clean Corp specialises in auto dealership cleaning across Sydney, delivering spotless showroom floors, streak-free glass, immaculate detailing bays, and compliant workshop cleaning. We work overnight and around your opening hours so your dealership is always tour-ready.',
    benefits: [
      'Showroom Floor Perfection: Machine scrubbing and buffing of large-format tiles and polished concrete.',
      'Streak-Free Glass: Crystal-clear windows, glass partitions, and vehicle display screens.',
      'Detailing Bay Cleaning: Oil, grease, and chemical residue safely removed to keep bays compliant.',
      'Workshop Floor Cleaning: Industrial-grade degreasing for workshop bays and service areas.',
      'Overnight Scheduling: We clean after closing so your team arrives to a spotless floor every morning.',
      'Car Yard & Forecourt: Hard-surface washing and pressure cleaning for outdoor display areas.'
    ],
    process: [
      'Site Walkthrough: We map showroom zones, high-traffic aisles, detailing bays, workshops, and customer areas.',
      'Custom Checklist: Each area gets specific tasks — glass, floors, consumables, bins, and restrooms.',
      'After-Hours Clean: Teams arrive after close, using quiet equipment to minimise disruption.',
      'Quality Check: Supervisor sign-off before departure, photo log available on request.'
    ],
    whyChooseUs: [
      'Automotive Industry Experience: We understand the compliance and presentation standards car dealerships require.',
      'Industrial Equipment: Auto-scrubbers, rotary buffers, and commercial degreasers — not mop-and-bucket.',
      'Licensed & Insured: Full public liability insurance and police-checked staff on every site.',
      'Flexible Contracts: Daily, weekly, or monthly — scale up for EOFY sales events or new model launches.',
      'Sydney-Wide Coverage: We service dealerships across the entire Greater Sydney area.'
    ],
    serviceAreas: [
      'Parramatta', 'Blacktown', 'Auburn', 'Liverpool',
      'Chatswood', 'North Sydney', 'Alexandria', 'Castle Hill',
      'Penrith', 'Hornsby', 'Silverwater', 'Wetherill Park'
    ],
    faqs: [
      {
        question: 'Do you clean car dealership showroom floors?',
        answer: 'Yes. We use auto-scrubbers and rotary buffer machines to clean and polish large showroom floors — including polished concrete, large-format tiles, and epoxy surfaces — leaving a high-shine finish that matches the quality of the vehicles on display.'
      },
      {
        question: 'Can you clean detailing bays and workshop areas?',
        answer: 'Absolutely. We use commercial-grade degreasers to remove oil, grease, and chemical build-up from detailing bays and workshop floors. Our team is trained in safe handling of automotive cleaning chemicals and can help you meet WHS compliance requirements.'
      },
      {
        question: 'Do you work after hours so the dealership is not disrupted?',
        answer: 'Yes — overnight and early-morning cleaning is our standard approach for dealerships. We arrive after your last customer leaves and ensure the showroom is immaculate before your team arrives the next morning.'
      },
      {
        question: 'Can you clean the car yard and outdoor forecourt?',
        answer: 'Yes. We offer pressure washing and hard-surface cleaning for outdoor forecourts, car yards, and entry driveways. A clean forecourt is just as important as a clean showroom for first impressions.'
      },
      {
        question: 'Are your staff insured and police checked?',
        answer: 'Yes. All Pro Clean Corp staff are police-checked, hold public liability insurance, and are trained in dealership cleaning standards. We can provide certificates of currency on request.'
      }
    ],
    images: [
      { src: '/images/services/commercial.webp', alt: 'Auto dealership showroom floor cleaning Sydney' },
      { src: '/images/services/office.webp', alt: 'Car dealership cleaning services Sydney NSW' }
    ],
    relatedServices: [
      'Showroom Cleaning Sydney',
      'Commercial Cleaning Sydney',
      'Industrial Cleaning Sydney',
      'Warehouse Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Auto Dealership Cleaning Sydney"
        serviceDescription="Professional auto dealership cleaning in Sydney NSW. Showroom floors, detailing bays, workshops, car yards and forecourts. Licensed, insured, overnight availability."
        serviceUrl="https://www.procleancorp.com.au/auto-dealership-cleaning-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Showroom Floor Polishing', 'Detailing Bay Cleaning', 'Workshop Floor Degreasing', 'Forecourt Pressure Washing', 'Glass & Window Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
