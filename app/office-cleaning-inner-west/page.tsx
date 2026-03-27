import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Inner West Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional office cleaning in the Inner West Sydney since 2015. Licensed & insured commercial cleaners serving Leichhardt, Newtown, Balmain, Annandale & surrounds. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'office cleaning inner west, office cleaners inner west sydney, commercial cleaning inner west, business cleaning inner west, professional office cleaning leichhardt, office cleaning newtown, office cleaning balmain, office cleaning annandale, office cleaning inner west sydney, commercial cleaners inner west nsw',
  openGraph: {
    title: 'Office Cleaning Inner West Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional office cleaning in Inner West Sydney NSW. Licensed & insured. Serving Leichhardt, Newtown, Balmain, Annandale & surrounds. Call 1300 494 983.',
    url: '/office-cleaning-inner-west',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Office cleaning services Inner West Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/office-cleaning-inner-west'
  }
};

export default function OfficeCleaningInnerWestPage() {
  const serviceInfo = {
    title: 'Office Cleaning Inner West Sydney NSW',
    description: 'Pro Clean Corp delivers professional office cleaning services across the Inner West Sydney. From creative studios and co-working spaces in Newtown to corporate suites in Leichhardt and professional offices in Balmain, we provide consistent, thorough cleaning that keeps your Inner West workplace healthy, productive, and professionally presented — every visit.',
    benefits: [
      'Daily & Regular Cleaning: Tailored schedules from daily to fortnightly, designed around your Inner West business hours.',
      'Desk & Workstation Sanitisation: High-touch surfaces cleaned and disinfected to reduce illness and maximise productivity.',
      'Kitchen & Breakroom Cleaning: Full clean including appliances, benches, sinks, and consumable restocking.',
      'Restroom Maintenance: Sanitisation, consumable refill, and odour control on every scheduled visit.',
      'Floor Care: Vacuuming, mopping, and carpet spot cleaning for all floor types including polished concrete.',
      'After-Hours Availability: We clean evenings or early mornings so your Inner West team is never disrupted.'
    ],
    process: [
      'Free Site Assessment: We visit your Inner West office and build a cleaning checklist tailored to your layout and priorities.',
      'Custom Schedule: Daily, weekly, or bespoke frequency — whatever keeps your space consistently clean.',
      'Trained Local Team: The same trusted cleaners assigned to your site every visit for consistency.',
      'Regular Quality Checks: Supervisor inspections and open communication to maintain high standards.'
    ],
    whyChooseUs: [
      'Inner West Coverage: We service Leichhardt, Newtown, Balmain, Annandale, Rozelle, Glebe, Pyrmont, Surry Hills, and surrounding suburbs.',
      'Licensed & Insured: Police-checked staff and full public liability insurance on every job.',
      'Eco-Friendly Products: TGA-listed disinfectants and environmentally responsible cleaning products.',
      'No Lock-In Contracts: Flexible arrangements — we earn your business every visit.',
      'Responsive Account Management: Direct contact with your account manager, not a call centre.'
    ],
    serviceAreas: [
      'Leichhardt', 'Newtown', 'Balmain', 'Annandale',
      'Rozelle', 'Glebe', 'Pyrmont', 'Surry Hills',
      'Enmore', 'Petersham', 'Marrickville', 'Dulwich Hill'
    ],
    faqs: [
      {
        question: 'What office cleaning services do you offer in the Inner West?',
        answer: 'Our Inner West office cleaning covers all commercial cleaning tasks: desk and workstation sanitisation, kitchen and breakroom cleaning, restroom maintenance, vacuuming and mopping, bin emptying, window cleaning, and carpet care. We build a custom checklist for your specific office layout and cleaning requirements.'
      },
      {
        question: 'Do you clean offices in Newtown, Balmain, and Leichhardt?',
        answer: 'Yes. Our Inner West team services all major suburbs including Leichhardt, Newtown, Balmain, Annandale, Rozelle, Glebe, Pyrmont, Enmore, Petersham, Marrickville, and more. If your office is in the Inner West, we can service it.'
      },
      {
        question: 'Can you clean our Inner West office outside business hours?',
        answer: 'Absolutely. We specialise in after-hours office cleaning across the Inner West. We schedule your clean for evenings or early mornings so your office is fresh and ready before your team arrives — with zero disruption to your workday.'
      },
      {
        question: 'Are your cleaners police-checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff are police-checked and we hold full public liability insurance. You will receive the same trained team on each visit for consistency and security.'
      },
      {
        question: 'How do I get a quote for office cleaning in the Inner West?',
        answer: 'Call us on 1300 494 983 or submit an enquiry online. We will arrange a free site visit to your Inner West office and provide a detailed quote within 24 hours.'
      }
    ],
    images: [
      { src: '/images/services/office.webp', alt: 'Office cleaning Inner West Sydney NSW' },
      { src: '/images/services/commercial.webp', alt: 'Commercial cleaning services Inner West Sydney NSW' }
    ],
    relatedServices: [
      'Office Cleaning Leichhardt',
      'Office Cleaning Newtown',
      'Commercial Cleaning Inner West',
      'Office Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Inner West Sydney"
        serviceDescription="Professional office cleaning services in Inner West Sydney NSW. Serving Leichhardt, Newtown, Balmain, Annandale, Rozelle, Glebe and surrounding Inner West suburbs. Licensed, insured, after-hours available."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-inner-west"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Desk Sanitisation', 'Kitchen Cleaning', 'Restroom Maintenance', 'Carpet Cleaning', 'Window Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
