import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Balmain Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional office cleaning in Balmain since 2015. Licensed & insured commercial cleaners serving Balmain, Rozelle, Drummoyne, Balmain East & surrounds. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'office cleaning balmain, office cleaners balmain sydney, commercial cleaning balmain, office cleaning rozelle, office cleaning drummoyne, office cleaning balmain east, business cleaning balmain, professional office cleaners balmain, office cleaning balmain nsw, commercial cleaners balmain',
  openGraph: {
    title: 'Office Cleaning Balmain Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional office cleaning in Balmain NSW. Licensed & insured. Serving Balmain, Rozelle, Drummoyne & surrounds. Call 1300 494 983.',
    url: '/office-cleaning-balmain',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Office cleaning services Balmain Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/office-cleaning-balmain'
  }
};

export default function OfficeCleaningBalmainPage() {
  const serviceInfo = {
    title: 'Office Cleaning Balmain Sydney NSW',
    description: 'Pro Clean Corp delivers professional office cleaning services throughout Balmain and the surrounding Inner West peninsula. From boutique professional offices and creative studios to multi-tenant commercial buildings, we provide consistent, high-quality cleaning that keeps your Balmain workplace immaculate, healthy, and ready for business — every visit.',
    benefits: [
      'Daily & Regular Cleaning: Schedules tailored to your Balmain business hours, from daily to fortnightly.',
      'Desk & Workstation Sanitisation: High-touch surfaces cleaned and disinfected to reduce illness transmission.',
      'Kitchen & Breakroom Cleaning: Full clean including appliances, benches, sinks, and consumable restocking.',
      'Restroom Maintenance: Sanitisation, consumable refill, and odour control on every visit.',
      'Floor Care: Vacuuming, mopping, and carpet spot cleaning for all floor types including heritage timber floors.',
      'After-Hours Availability: We clean outside business hours so your Balmain team is never disrupted.'
    ],
    process: [
      'Free Site Assessment: We visit your Balmain office and build a cleaning checklist around your layout and priorities.',
      'Custom Schedule: Daily, weekly, or bespoke frequency — whatever keeps your workspace consistently clean.',
      'Trained Local Team: The same trusted cleaners assigned to your site every visit for consistency.',
      'Regular Quality Checks: Supervisor inspections and open communication to maintain high standards.'
    ],
    whyChooseUs: [
      'Local Peninsula Coverage: We service Balmain, Balmain East, Rozelle, Drummoyne, Five Dock, Lilyfield, and surrounding suburbs.',
      'Licensed & Insured: Police-checked staff and full public liability insurance on every job.',
      'Eco-Friendly Products: TGA-listed disinfectants and environmentally responsible cleaning products.',
      'No Lock-In Contracts: Flexible arrangements — we earn your business every visit.',
      'Responsive Account Management: Direct contact with your account manager, not a call centre.'
    ],
    serviceAreas: [
      'Balmain', 'Balmain East', 'Rozelle', 'Drummoyne',
      'Five Dock', 'Lilyfield', 'Leichhardt', 'Annandale',
      'Glebe', 'Pyrmont', 'Birchgrove', 'Longueville'
    ],
    faqs: [
      {
        question: 'What office cleaning services do you offer in Balmain?',
        answer: 'Our Balmain office cleaning covers all commercial cleaning tasks: desk and workstation sanitisation, kitchen and breakroom cleaning, restroom maintenance, vacuuming and mopping, bin emptying, window cleaning, and carpet care. We build a custom checklist specific to your Balmain office layout and preferred cleaning frequency.'
      },
      {
        question: 'Do you service Rozelle and Drummoyne as well as Balmain?',
        answer: 'Yes. Our local team covers Balmain, Balmain East, Rozelle, Drummoyne, Five Dock, Lilyfield, Leichhardt, and surrounding Inner West peninsula suburbs. If your office is in the area, we can service it.'
      },
      {
        question: 'Can you clean our Balmain office after hours?',
        answer: 'Absolutely. We specialise in after-hours office cleaning in Balmain. We can schedule your clean for evenings or early mornings so your office is fresh and ready before your team arrives — with no disruption to your business.'
      },
      {
        question: 'Are your cleaners police-checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff are police-checked and we hold full public liability insurance. You will receive the same trained team on each visit for consistency and security.'
      },
      {
        question: 'How do I get a quote for office cleaning in Balmain?',
        answer: 'Call us on 1300 494 983 or submit an enquiry online. We will arrange a free site visit to your Balmain office and provide a detailed quote within 24 hours.'
      }
    ],
    images: [
      { src: '/images/services/office.webp', alt: 'Office cleaning Balmain Sydney NSW' },
      { src: '/images/services/commercial.webp', alt: 'Commercial cleaning services Balmain NSW' }
    ],
    relatedServices: [
      'Office Cleaning Inner West',
      'Office Cleaning Drummoyne',
      'Commercial Cleaning Inner West',
      'Office Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Balmain Sydney"
        serviceDescription="Professional office cleaning services in Balmain Sydney NSW. Serving Balmain, Balmain East, Rozelle, Drummoyne, Five Dock and surrounding Inner West peninsula suburbs. Licensed, insured, after-hours available."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-balmain"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Desk Sanitisation', 'Kitchen Cleaning', 'Restroom Maintenance', 'Carpet Cleaning', 'Window Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
