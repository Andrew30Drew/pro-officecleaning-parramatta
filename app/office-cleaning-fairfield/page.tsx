import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Fairfield Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional office cleaning in Fairfield since 2015. Licensed & insured commercial cleaners serving Fairfield, Cabramatta, Wetherill Park, Smithfield & surrounds. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'office cleaning fairfield, office cleaners fairfield sydney, commercial cleaning fairfield, office cleaning cabramatta, office cleaning wetherill park area, office cleaning smithfield, business cleaning fairfield, professional office cleaners fairfield, office cleaning fairfield nsw, commercial cleaners fairfield',
  openGraph: {
    title: 'Office Cleaning Fairfield Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional office cleaning in Fairfield NSW. Licensed & insured. Serving Fairfield, Cabramatta, Wetherill Park & Smithfield. Call 1300 494 983.',
    url: '/office-cleaning-fairfield',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Office cleaning services Fairfield Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/office-cleaning-fairfield'
  }
};

export default function OfficeCleaningFairfieldPage() {
  const serviceInfo = {
    title: 'Office Cleaning Fairfield Sydney NSW',
    description: 'Pro Clean Corp delivers professional office cleaning services throughout Fairfield and the surrounding South Western Sydney business corridor. From professional offices and medical suites to industrial and light commercial premises, we provide reliable, thorough cleaning that keeps your Fairfield workplace healthy, safe, and productive — every visit.',
    benefits: [
      'Daily & Regular Cleaning: Tailored schedules from daily to fortnightly, designed around your Fairfield business hours.',
      'Desk & Workstation Sanitisation: High-touch surfaces cleaned and disinfected to reduce illness and improve staff wellbeing.',
      'Kitchen & Breakroom Cleaning: Full clean including appliances, benches, sinks, and consumable restocking.',
      'Restroom Maintenance: Sanitisation, consumable refill, and odour control on every scheduled visit.',
      'Floor Care: Vacuuming, mopping, and carpet spot cleaning for all floor types.',
      'After-Hours Availability: We clean evenings or early mornings so your Fairfield team is never disrupted.'
    ],
    process: [
      'Free Site Assessment: We visit your Fairfield office and build a cleaning checklist tailored to your layout and priorities.',
      'Custom Schedule: Daily, weekly, or bespoke frequency — whatever keeps your space consistently clean.',
      'Trained Local Team: The same trusted cleaners assigned to your site every visit for reliability.',
      'Regular Quality Checks: Supervisor inspections and open communication to maintain high standards.'
    ],
    whyChooseUs: [
      'South Western Sydney Coverage: We service Fairfield, Cabramatta, Wetherill Park, Smithfield, Canley Vale, Canley Heights, Bonnyrigg, and surrounding suburbs.',
      'Licensed & Insured: Police-checked staff and full public liability insurance on every job.',
      'Eco-Friendly Products: TGA-listed disinfectants and environmentally responsible cleaning products.',
      'No Lock-In Contracts: Flexible arrangements — we earn your business every visit.',
      'Responsive Account Management: Direct contact with your account manager, not a call centre.'
    ],
    serviceAreas: [
      'Fairfield', 'Cabramatta', 'Wetherill Park', 'Smithfield',
      'Canley Vale', 'Canley Heights', 'Bonnyrigg', 'Prairiewood',
      'Villawood', 'Yennora', 'Carramar', 'Lansvale'
    ],
    faqs: [
      {
        question: 'What office cleaning services do you offer in Fairfield?',
        answer: 'Our Fairfield office cleaning covers all commercial cleaning tasks: desk and workstation sanitisation, kitchen and breakroom cleaning, restroom maintenance, vacuuming and mopping, bin emptying, window cleaning, and carpet care. We build a custom checklist specific to your office layout and cleaning frequency.'
      },
      {
        question: 'Do you service Cabramatta, Wetherill Park, and Smithfield as well?',
        answer: 'Yes. Our South Western Sydney team services Fairfield, Cabramatta, Wetherill Park, Smithfield, Canley Vale, Bonnyrigg, Prairiewood, and all surrounding suburbs. If your office is in the area, we can service it.'
      },
      {
        question: 'Can you clean our Fairfield office after hours?',
        answer: 'Absolutely. We specialise in after-hours office cleaning in Fairfield. We can schedule your clean for evenings or early mornings so your office is fresh and ready before your team arrives — with no disruption to your business.'
      },
      {
        question: 'Are your cleaners police-checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff are police-checked and we hold full public liability insurance. You will receive the same trained team on each visit for consistency and security.'
      },
      {
        question: 'How do I get a quote for office cleaning in Fairfield?',
        answer: 'Call us on 1300 494 983 or submit an enquiry online. We will arrange a free site visit to your Fairfield office and provide a detailed quote within 24 hours.'
      }
    ],
    images: [
      { src: '/images/services/office.webp', alt: 'Office cleaning Fairfield Sydney NSW' },
      { src: '/images/services/commercial.webp', alt: 'Commercial cleaning services Fairfield NSW' }
    ],
    relatedServices: [
      'Office Cleaning Wetherill Park',
      'Office Cleaning Smithfield',
      'Commercial Cleaning Fairfield',
      'Office Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Fairfield Sydney"
        serviceDescription="Professional office cleaning services in Fairfield Sydney NSW. Serving Fairfield, Cabramatta, Wetherill Park, Smithfield, Canley Vale and surrounding South Western Sydney suburbs. Licensed, insured, after-hours available."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-fairfield"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Desk Sanitisation', 'Kitchen Cleaning', 'Restroom Maintenance', 'Carpet Cleaning', 'Window Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
