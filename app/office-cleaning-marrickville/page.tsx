import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Marrickville Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional office cleaning in Marrickville since 2015. Licensed & insured commercial cleaners serving Marrickville, Sydenham, Tempe, St Peters & surrounds. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'office cleaning marrickville, office cleaners marrickville sydney, commercial cleaning marrickville, office cleaning sydenham, office cleaning tempe, office cleaning st peters, business cleaning marrickville, professional office cleaners marrickville, office cleaning marrickville nsw, commercial cleaners marrickville',
  openGraph: {
    title: 'Office Cleaning Marrickville Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional office cleaning in Marrickville NSW. Licensed & insured. Serving Marrickville, Sydenham, Tempe & St Peters. Call 1300 494 983.',
    url: '/office-cleaning-marrickville',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Office cleaning services Marrickville Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/office-cleaning-marrickville'
  }
};

export default function OfficeCleaningMarrickvillePage() {
  const serviceInfo = {
    title: 'Office Cleaning Marrickville Sydney NSW',
    description: 'Pro Clean Corp delivers professional office cleaning services throughout Marrickville and the surrounding Inner West precinct. From creative industry studios and tech offices to professional suites and light commercial spaces, we provide reliable, thorough cleaning that keeps your Marrickville workplace healthy, presentable, and productive — every visit.',
    benefits: [
      'Daily & Regular Cleaning: Tailored schedules from daily to fortnightly, aligned with your Marrickville business hours.',
      'Desk & Workstation Sanitisation: High-touch surfaces cleaned and disinfected to reduce illness and maintain productivity.',
      'Kitchen & Breakroom Cleaning: Full clean including appliances, benches, sinks, and consumable restocking.',
      'Restroom Maintenance: Sanitisation, consumable refill, and odour control on every scheduled visit.',
      'Floor Care: Vacuuming, mopping, and carpet spot cleaning for all floor types including polished concrete.',
      'After-Hours Availability: We clean evenings or early mornings so your Marrickville team is never disrupted.'
    ],
    process: [
      'Free Site Assessment: We visit your Marrickville office and build a cleaning checklist tailored to your layout and priorities.',
      'Custom Schedule: Daily, weekly, or bespoke frequency — whatever keeps your space consistently clean.',
      'Trained Local Team: The same trusted cleaners assigned to your site every visit for reliability.',
      'Regular Quality Checks: Supervisor inspections and open communication to maintain high standards.'
    ],
    whyChooseUs: [
      'Inner West Coverage: We service Marrickville, Sydenham, Tempe, St Peters, Newtown, Enmore, Dulwich Hill, and surrounding suburbs.',
      'Licensed & Insured: Police-checked staff and full public liability insurance on every job.',
      'Eco-Friendly Products: TGA-listed disinfectants and environmentally responsible cleaning products.',
      'No Lock-In Contracts: Flexible arrangements — we earn your business every visit.',
      'Responsive Account Management: Direct contact with your account manager, not a call centre.'
    ],
    serviceAreas: [
      'Marrickville', 'Sydenham', 'Tempe', 'St Peters',
      'Newtown', 'Enmore', 'Dulwich Hill', 'Petersham',
      'Stanmore', 'Camperdown', 'Lewisham', 'Summer Hill'
    ],
    faqs: [
      {
        question: 'What office cleaning services do you offer in Marrickville?',
        answer: 'Our Marrickville office cleaning covers all commercial cleaning tasks: desk and workstation sanitisation, kitchen and breakroom cleaning, restroom maintenance, vacuuming and mopping, bin emptying, window cleaning, and carpet care. We build a custom checklist specific to your office layout and cleaning frequency.'
      },
      {
        question: 'Do you service Sydenham, Tempe, and St Peters as well?',
        answer: 'Yes. Our Inner West team services Marrickville, Sydenham, Tempe, St Peters, Newtown, Enmore, Dulwich Hill, Petersham, and all surrounding suburbs. If your office is in the area, we can service it.'
      },
      {
        question: 'Can you clean our Marrickville office after hours?',
        answer: 'Absolutely. We specialise in after-hours office cleaning in Marrickville. We can schedule your clean for evenings or early mornings so your office is fresh and ready before your team arrives — with zero disruption to your workday.'
      },
      {
        question: 'Are your cleaners police-checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff are police-checked and we hold full public liability insurance. You will receive the same trained team on each visit for consistency and security.'
      },
      {
        question: 'How do I get a quote for office cleaning in Marrickville?',
        answer: 'Call us on 1300 494 983 or submit an enquiry online. We will arrange a free site visit to your Marrickville office and provide a detailed quote within 24 hours.'
      }
    ],
    images: [
      { src: '/images/services/office.webp', alt: 'Office cleaning Marrickville Sydney NSW' },
      { src: '/images/services/commercial.webp', alt: 'Commercial cleaning services Marrickville NSW' }
    ],
    relatedServices: [
      'Office Cleaning Inner West',
      'Commercial Cleaning Marrickville',
      'Office Cleaning Newtown',
      'Office Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Marrickville Sydney"
        serviceDescription="Professional office cleaning services in Marrickville Sydney NSW. Serving Marrickville, Sydenham, Tempe, St Peters, Newtown, Enmore and surrounding Inner West suburbs. Licensed, insured, after-hours available."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-marrickville"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Desk Sanitisation', 'Kitchen Cleaning', 'Restroom Maintenance', 'Carpet Cleaning', 'Window Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
