import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Pagewood Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional office cleaning in Pagewood since 2015. Licensed & insured commercial cleaners serving Pagewood, Botany, Banksmeadow & Mascot area. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'office cleaning pagewood, commercial cleaning pagewood, office cleaners pagewood sydney, office cleaning botany, office cleaning banksmeadow, commercial cleaning south sydney, business cleaning pagewood, office cleaning mascot area, professional office cleaning pagewood, office cleaners pagewood nsw',
  openGraph: {
    title: 'Office Cleaning Pagewood Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional office cleaning in Pagewood NSW. Licensed & insured. Serving Pagewood, Botany, Banksmeadow & Mascot. Call 1300 494 983.',
    url: '/office-cleaning-pagewood',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Office cleaning services Pagewood Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/office-cleaning-pagewood'
  }
};

export default function OfficeCleaningPagewoodPage() {
  const serviceInfo = {
    title: 'Office Cleaning Pagewood Sydney NSW',
    description: 'Pro Clean Corp delivers professional office cleaning services throughout Pagewood and the surrounding South Sydney business precinct. From small professional suites to multi-floor corporate offices, we provide consistent, thorough cleaning that keeps your workplace healthy, productive, and presentable — every single day.',
    benefits: [
      'Daily & Regular Cleaning: Tailored schedules from daily to fortnightly, aligned with your business hours.',
      'Desk & Workstation Sanitisation: High-touch surfaces cleaned and disinfected to reduce illness transmission.',
      'Kitchen & Breakroom Cleaning: Full clean including appliances, benches, sinks, and consumable restocking.',
      'Restroom Maintenance: Sanitisation, consumable refill, and odour control on every visit.',
      'Floor Care: Vacuuming, mopping, and carpet spot cleaning for all floor types.',
      'After-Hours Availability: We clean outside business hours so your team is never disrupted.'
    ],
    process: [
      'Free Site Assessment: We visit your Pagewood office and build a cleaning checklist around your layout and priorities.',
      'Custom Schedule: Daily, weekly, or a bespoke frequency — whatever keeps your space consistently clean.',
      'Trained Local Team: The same trusted cleaners assigned to your site for consistency.',
      'Regular Quality Checks: Supervisor inspections and open communication to keep standards high.'
    ],
    whyChooseUs: [
      'Local South Sydney Coverage: We service Pagewood, Botany, Banksmeadow, Mascot, Rosebery, and surrounding suburbs daily.',
      'Licensed & Insured: Police-checked staff and full public liability insurance on every job.',
      'Eco-Friendly Products: TGA-listed disinfectants and environmentally responsible cleaning products.',
      'No Lock-In Contracts: Flexible arrangements — we earn your business every visit.',
      'Responsive Account Management: Direct contact with your account manager, not a call centre.'
    ],
    serviceAreas: [
      'Pagewood', 'Botany', 'Banksmeadow', 'Mascot',
      'Rosebery', 'Alexandria', 'Zetland', 'Eastlakes',
      'Kingsford', 'Matraville', 'Hillsdale', 'Daceyville'
    ],
    faqs: [
      {
        question: 'What office cleaning services do you offer in Pagewood?',
        answer: 'Our Pagewood office cleaning covers all standard commercial cleaning tasks: desk and workstation sanitisation, kitchen and breakroom cleaning, restroom maintenance, vacuuming and mopping, bin emptying, window cleaning, and carpet care. We build a checklist specific to your office layout and cleaning frequency.'
      },
      {
        question: 'Can you clean our Pagewood office outside business hours?',
        answer: 'Yes. We specialise in after-hours office cleaning in Pagewood and across South Sydney. We can schedule your clean for evenings or early mornings so your office is fresh and ready before your team arrives.'
      },
      {
        question: 'Do you service the Botany and Banksmeadow area as well?',
        answer: 'Absolutely. Our South Sydney team services Pagewood, Botany, Banksmeadow, Mascot, Rosebery, Alexandria, and surrounding suburbs. If your office is in the area, we can service it.'
      },
      {
        question: 'Are your cleaners police-checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff are police-checked and we hold full public liability insurance. You will receive the same trained team on each visit for consistency and security.'
      },
      {
        question: 'How do I get a quote for office cleaning in Pagewood?',
        answer: 'Call us on 1300 494 983 or submit an enquiry online. We will arrange a free site visit to your Pagewood office and provide a detailed quote within 24 hours.'
      }
    ],
    images: [
      { src: '/images/services/office.webp', alt: 'Office cleaning Pagewood Sydney NSW' },
      { src: '/images/services/commercial.webp', alt: 'Commercial cleaning services Pagewood NSW' }
    ],
    relatedServices: [
      'Office Cleaning Mascot',
      'Office Cleaning Rosebery',
      'Office Cleaning Alexandria',
      'Commercial Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Pagewood Sydney"
        serviceDescription="Professional office cleaning services in Pagewood Sydney NSW. Serving Pagewood, Botany, Banksmeadow, Mascot and surrounding South Sydney suburbs. Licensed, insured, after-hours available."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-pagewood"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Desk Sanitisation', 'Kitchen Cleaning', 'Restroom Maintenance', 'Carpet Cleaning', 'Window Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
