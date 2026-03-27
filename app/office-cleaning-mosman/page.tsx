import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Mosman Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional office cleaning in Mosman since 2015. Licensed & insured commercial cleaners serving Mosman, Cremorne, Neutral Bay, Kirribilli & surrounds. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'office cleaning mosman, office cleaners mosman sydney, commercial cleaning mosman, office cleaning cremorne, office cleaning neutral bay, office cleaning kirribilli, business cleaning mosman, professional office cleaners mosman, office cleaning mosman nsw, commercial cleaners mosman',
  openGraph: {
    title: 'Office Cleaning Mosman Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional office cleaning in Mosman NSW. Licensed & insured. Serving Mosman, Cremorne, Neutral Bay & Kirribilli. Call 1300 494 983.',
    url: '/office-cleaning-mosman',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Office cleaning services Mosman Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/office-cleaning-mosman'
  }
};

export default function OfficeCleaningMosmanPage() {
  const serviceInfo = {
    title: 'Office Cleaning Mosman Sydney NSW',
    description: 'Pro Clean Corp delivers professional office cleaning services throughout Mosman and the surrounding Lower North Shore business precinct. From prestige professional suites and boutique corporate offices to medical practices and multi-tenant commercial buildings, we provide discreet, high-quality cleaning that meets the standards Mosman businesses expect — every visit.',
    benefits: [
      'Daily & Regular Cleaning: Premium schedules tailored to your Mosman business — daily, weekly, or bespoke.',
      'Desk & Workstation Sanitisation: High-touch surfaces cleaned and disinfected to protect staff and clients.',
      'Kitchen & Breakroom Cleaning: Full clean including appliances, benches, sinks, and consumable restocking.',
      'Restroom Maintenance: Premium sanitisation, consumable refill, and odour control on every visit.',
      'Floor Care: Vacuuming, mopping, and carpet spot cleaning — including premium carpet and hard floor treatments.',
      'After-Hours Availability: Discreet after-hours cleaning so your Mosman office is pristine before your team arrives.'
    ],
    process: [
      'Free Site Assessment: We visit your Mosman office and build a cleaning checklist aligned to your exact standards and priorities.',
      'Custom Schedule: Daily, weekly, or bespoke frequency — we adapt to your Mosman business rhythm.',
      'Trained Local Team: The same trusted, vetted cleaners assigned to your site every visit for consistency.',
      'Regular Quality Checks: Supervisor inspections and direct communication to maintain premium standards.'
    ],
    whyChooseUs: [
      'Lower North Shore Coverage: We service Mosman, Cremorne, Neutral Bay, Kirribilli, Milsons Point, McMahons Point, Cammeray, and surrounding suburbs.',
      'Licensed & Insured: Police-checked staff and full public liability insurance on every job.',
      'Eco-Friendly Products: TGA-listed disinfectants and environmentally responsible cleaning products.',
      'No Lock-In Contracts: Flexible, premium arrangements — we earn your business every visit.',
      'Responsive Account Management: Direct contact with your dedicated account manager, not a call centre.'
    ],
    serviceAreas: [
      'Mosman', 'Cremorne', 'Neutral Bay', 'Kirribilli',
      'Milsons Point', 'McMahons Point', 'Cammeray', 'Seaforth',
      'Balmoral', 'Spit Junction', 'Clifton Gardens', 'Beauty Point'
    ],
    faqs: [
      {
        question: 'What office cleaning services do you offer in Mosman?',
        answer: 'Our Mosman office cleaning covers all commercial cleaning tasks: desk and workstation sanitisation, kitchen and breakroom cleaning, restroom maintenance, vacuuming and mopping, bin emptying, window cleaning, and carpet care. We build a premium cleaning checklist specific to your Mosman office and standards.'
      },
      {
        question: 'Do you service Cremorne, Neutral Bay, and Kirribilli as well?',
        answer: 'Yes. Our Lower North Shore team services Mosman, Cremorne, Neutral Bay, Kirribilli, Milsons Point, McMahons Point, Cammeray, and all surrounding North Shore suburbs. If your office is in the area, we can service it.'
      },
      {
        question: 'Can you clean our Mosman office outside business hours?',
        answer: 'Absolutely. We specialise in discreet after-hours office cleaning in Mosman. We can schedule your clean for evenings or early mornings so your office is immaculate and ready before your team and clients arrive — with no disruption to your business.'
      },
      {
        question: 'Are your cleaners police-checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff are police-checked and we hold full public liability insurance. You will receive the same trained, vetted team on each visit for consistency and peace of mind.'
      },
      {
        question: 'How do I get a quote for office cleaning in Mosman?',
        answer: 'Call us on 1300 494 983 or submit an enquiry online. We will arrange a free site visit to your Mosman office and provide a detailed, tailored quote within 24 hours.'
      }
    ],
    images: [
      { src: '/images/services/office.webp', alt: 'Office cleaning Mosman Sydney NSW' },
      { src: '/images/services/commercial.webp', alt: 'Commercial cleaning services Mosman NSW' }
    ],
    relatedServices: [
      'Office Cleaning North Sydney',
      'Office Cleaning Cremorne',
      'Commercial Cleaning North Sydney',
      'Office Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Mosman Sydney"
        serviceDescription="Professional office cleaning services in Mosman Sydney NSW. Serving Mosman, Cremorne, Neutral Bay, Kirribilli, Milsons Point, McMahons Point and surrounding Lower North Shore suburbs. Licensed, insured, after-hours available."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-mosman"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Desk Sanitisation', 'Kitchen Cleaning', 'Restroom Maintenance', 'Carpet Cleaning', 'Window Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
