import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Ryde Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional commercial cleaning in Ryde since 2015. Licensed & insured cleaners serving Ryde, Meadowbank, West Ryde, Top Ryde & Macquarie Park. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'commercial cleaning ryde, commercial cleaners ryde, office cleaning ryde, commercial cleaning meadowbank, commercial cleaning west ryde, commercial cleaning top ryde, business cleaning ryde, commercial cleaners ryde nsw, professional commercial cleaning ryde, commercial cleaning macquarie park area',
  openGraph: {
    title: 'Commercial Cleaning Ryde Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional commercial cleaning in Ryde NSW. Licensed & insured. Serving Ryde, Meadowbank, West Ryde & Top Ryde. Call 1300 494 983.',
    url: '/commercial-cleaning-ryde',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Commercial cleaning services Ryde Sydney NSW' }]
  },
  alternates: { canonical: '/commercial-cleaning-ryde' }
};

export default function CommercialCleaningRydePage() {
  const serviceInfo = {
    title: 'Commercial Cleaning Ryde Sydney NSW',
    description: 'Pro Clean Corp delivers professional commercial cleaning services throughout Ryde and the surrounding North West Sydney business corridor. From corporate offices in Top Ryde and Macquarie Park to retail shops, medical suites, and strata buildings in Meadowbank and West Ryde, we provide consistent, reliable cleaning that keeps your Ryde business operating at its best — every visit.',
    benefits: [
      'Daily & Regular Cleaning: Tailored schedules from daily to fortnightly, designed around your Ryde business hours.',
      'Office & Retail Cleaning: Comprehensive commercial cleaning for businesses of all sizes across the Ryde precinct.',
      'High-Touch Surface Disinfection: Counters, lifts, door handles, and shared equipment sanitised on every visit.',
      'Kitchen & Breakroom Cleaning: Full clean including appliances, benches, sinks, and consumable restocking.',
      'Restroom Maintenance: Sanitisation, consumable refill, and odour control on every scheduled visit.',
      'After-Hours Availability: We clean evenings or early mornings so your business is ready before the day begins.'
    ],
    process: [
      'Free Site Assessment: We visit your Ryde premises and build a cleaning checklist tailored to your business type and layout.',
      'Custom Schedule: Daily, weekly, or bespoke frequency — whatever keeps your space consistently clean.',
      'Trained Local Team: The same trusted cleaners assigned to your site every visit for reliability.',
      'Regular Quality Checks: Supervisor inspections and open communication to maintain high standards.'
    ],
    whyChooseUs: [
      'Ryde Corridor Coverage: We service Ryde, West Ryde, Meadowbank, Top Ryde, Putney, Shepherds Bay, Macquarie Park, North Ryde, and surrounding suburbs.',
      'Licensed & Insured: Police-checked staff and full public liability insurance on every job.',
      'Eco-Friendly Products: TGA-listed disinfectants and environmentally responsible cleaning products.',
      'No Lock-In Contracts: Flexible arrangements — we earn your business every visit.',
      'Responsive Account Management: Direct contact with your account manager, not a call centre.'
    ],
    serviceAreas: [
      'Ryde', 'West Ryde', 'Meadowbank', 'Top Ryde',
      'Putney', 'Shepherds Bay', 'Macquarie Park', 'North Ryde',
      'Eastwood', 'Ermington', 'Gladesville', 'Rydalmere'
    ],
    faqs: [
      {
        question: 'What commercial cleaning services do you offer in Ryde?',
        answer: 'Our Ryde commercial cleaning covers offices, retail shops, medical suites, strata buildings, and hospitality venues. Services include daily cleaning, high-touch surface disinfection, kitchen and breakroom cleaning, restroom maintenance, vacuuming, mopping, and window cleaning. We build a custom checklist for your specific business type.'
      },
      {
        question: 'Do you service Meadowbank, West Ryde, and Top Ryde as well?',
        answer: 'Yes. Our local team services Ryde, West Ryde, Meadowbank, Top Ryde, Putney, Macquarie Park, North Ryde, Eastwood, Ermington, and all surrounding suburbs. If your business is in the Ryde area, we can service it.'
      },
      {
        question: 'Can you clean our Ryde office or retail premises after hours?',
        answer: 'Absolutely. We specialise in after-hours commercial cleaning in Ryde. We schedule your clean for evenings or early mornings so your business is clean and ready to open — with zero disruption to your staff or customers.'
      },
      {
        question: 'Are your cleaners police-checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff are police-checked and we hold full public liability insurance. You will receive the same trained team on each visit for consistency and security.'
      },
      {
        question: 'How do I get a quote for commercial cleaning in Ryde?',
        answer: 'Call us on 1300 494 983 or submit an enquiry online. We will arrange a free site visit to your Ryde premises and provide a detailed quote within 24 hours.'
      }
    ],
    images: [
      { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Ryde Sydney NSW' },
      { src: '/images/services/office.webp', alt: 'Office cleaning services Ryde NSW' }
    ],
    relatedServices: [
      'Commercial Cleaning Macquarie Park',
      'Office Cleaning Macquarie Park',
      'Commercial Cleaning Eastwood',
      'Commercial Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Ryde Sydney"
        serviceDescription="Professional commercial cleaning services in Ryde Sydney NSW. Serving Ryde, West Ryde, Meadowbank, Top Ryde, Macquarie Park and surrounding North West Sydney suburbs. Licensed, insured, after-hours available."
        serviceUrl="https://www.procleancorp.com.au/commercial-cleaning-ryde"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Retail Cleaning', 'Strata Cleaning', 'Medical Cleaning', 'After-Hours Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
