import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Strathfield Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional commercial cleaning in Strathfield since 2015. Licensed & insured cleaners serving Strathfield, Burwood, Homebush, Lidcombe & North Strathfield. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'commercial cleaning strathfield, commercial cleaners strathfield, office cleaning strathfield, commercial cleaning burwood area, commercial cleaning homebush, commercial cleaning lidcombe, business cleaning strathfield, commercial cleaners strathfield nsw, professional commercial cleaning strathfield, commercial cleaning north strathfield',
  openGraph: {
    title: 'Commercial Cleaning Strathfield Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional commercial cleaning in Strathfield NSW. Licensed & insured. Serving Strathfield, Burwood, Homebush & Lidcombe. Call 1300 494 983.',
    url: '/commercial-cleaning-strathfield',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Commercial cleaning services Strathfield Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/commercial-cleaning-strathfield'
  }
};

export default function CommercialCleaningStrathfieldPage() {
  const serviceInfo = {
    title: 'Commercial Cleaning Strathfield Sydney NSW',
    description: 'Pro Clean Corp delivers professional commercial cleaning services throughout Strathfield and the Inner West commercial corridor. From corporate offices and retail precincts along The Boulevard to medical suites, educational facilities, and strata buildings, we provide consistent, high-quality cleaning that keeps your Strathfield business operating at its best — every visit.',
    benefits: [
      'Daily & Regular Cleaning: Tailored schedules from daily to fortnightly, aligned with your Strathfield business hours.',
      'Office & Retail Cleaning: Comprehensive commercial cleaning for businesses of all sizes across the Strathfield precinct.',
      'High-Touch Surface Disinfection: Counters, door handles, lifts, and shared equipment sanitised on every visit.',
      'Kitchen & Breakroom Cleaning: Full clean including appliances, benches, sinks, and consumable restocking.',
      'Restroom Maintenance: Sanitisation, consumable refill, and odour control on every scheduled visit.',
      'After-Hours Availability: We clean evenings or early mornings so your business is pristine before opening.'
    ],
    process: [
      'Free Site Assessment: We visit your Strathfield premises and build a cleaning checklist tailored to your business type and layout.',
      'Custom Schedule: Daily, weekly, or bespoke frequency — whatever keeps your space consistently clean.',
      'Trained Local Team: The same trusted cleaners assigned to your site every visit for reliability and security.',
      'Regular Quality Checks: Supervisor inspections and open communication to maintain high standards.'
    ],
    whyChooseUs: [
      'Inner West Corridor Coverage: We service Strathfield, Burwood, Homebush, Lidcombe, North Strathfield, Homebush West, Flemington, and surrounding suburbs.',
      'Licensed & Insured: Police-checked staff and full public liability insurance on every job.',
      'Eco-Friendly Products: TGA-listed disinfectants and environmentally responsible cleaning products.',
      'No Lock-In Contracts: Flexible arrangements — we earn your business every visit.',
      'Responsive Account Management: Direct contact with your account manager, not a call centre.'
    ],
    serviceAreas: [
      'Strathfield', 'Burwood', 'Homebush', 'Lidcombe',
      'North Strathfield', 'Homebush West', 'Flemington', 'Concord',
      'Auburn', 'Berala', 'Granville', 'Merrylands'
    ],
    faqs: [
      {
        question: 'What commercial cleaning services do you offer in Strathfield?',
        answer: 'Our Strathfield commercial cleaning covers offices, retail shops, medical suites, educational facilities, strata buildings, and hospitality venues. Services include daily cleaning, high-touch disinfection, kitchen and breakroom cleaning, restroom maintenance, vacuuming, mopping, and window cleaning. We build a custom checklist for your specific business type.'
      },
      {
        question: 'Do you service Burwood, Homebush, and Lidcombe as well?',
        answer: 'Yes. Our local team services Strathfield, Burwood, Homebush, Lidcombe, North Strathfield, Homebush West, Flemington, Concord, and surrounding inner west corridor suburbs. If your business is in the area, we can service it.'
      },
      {
        question: 'Can you clean our Strathfield office or retail store after hours?',
        answer: 'Absolutely. We specialise in after-hours commercial cleaning in Strathfield. We schedule your clean for evenings or early mornings so your business is ready to trade — with zero disruption to your customers or staff.'
      },
      {
        question: 'Are your cleaners police-checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff are police-checked and we hold full public liability insurance. You will receive the same trained team on each visit for consistency and security.'
      },
      {
        question: 'How do I get a quote for commercial cleaning in Strathfield?',
        answer: 'Call us on 1300 494 983 or submit an enquiry online. We will arrange a free site visit to your Strathfield premises and provide a detailed quote within 24 hours.'
      }
    ],
    images: [
      { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Strathfield Sydney NSW' },
      { src: '/images/services/office.webp', alt: 'Office cleaning services Strathfield NSW' }
    ],
    relatedServices: [
      'Commercial Cleaning Burwood',
      'Commercial Cleaning Concord',
      'Commercial Cleaning Auburn',
      'Commercial Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Strathfield Sydney"
        serviceDescription="Professional commercial cleaning services in Strathfield Sydney NSW. Serving Strathfield, Burwood, Homebush, Lidcombe, North Strathfield and surrounding inner west corridor suburbs. Licensed, insured, after-hours available."
        serviceUrl="https://www.procleancorp.com.au/commercial-cleaning-strathfield"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Retail Cleaning', 'Strata Cleaning', 'Restroom Maintenance', 'After-Hours Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
