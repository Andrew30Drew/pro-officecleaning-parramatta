import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Drummoyne Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional office cleaning in Drummoyne since 2015. Licensed & insured commercial cleaners serving Drummoyne, Five Dock, Russell Lea, Canada Bay & surrounds. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'office cleaning drummoyne, office cleaners drummoyne sydney, commercial cleaning drummoyne, office cleaning five dock, office cleaning russell lea, office cleaning canada bay, business cleaning drummoyne, professional office cleaners drummoyne, office cleaning drummoyne nsw, commercial cleaners drummoyne',
  openGraph: {
    title: 'Office Cleaning Drummoyne Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional office cleaning in Drummoyne NSW. Licensed & insured. Serving Drummoyne, Five Dock, Russell Lea & Canada Bay. Call 1300 494 983.',
    url: '/office-cleaning-drummoyne',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Office cleaning services Drummoyne Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/office-cleaning-drummoyne'
  }
};

export default function OfficeCleaningDrummoyнePage() {
  const serviceInfo = {
    title: 'Office Cleaning Drummoyne Sydney NSW',
    description: 'Pro Clean Corp delivers professional office cleaning services throughout Drummoyne and the surrounding Canada Bay business precinct. From boutique professional offices and medical suites to corporate buildings and multi-tenant commercial spaces, we provide consistent, high-quality cleaning that keeps your Drummoyne workplace immaculate and productive — every visit.',
    benefits: [
      'Daily & Regular Cleaning: Tailored schedules from daily to fortnightly, designed around your Drummoyne business hours.',
      'Desk & Workstation Sanitisation: High-touch surfaces cleaned and disinfected to reduce illness and protect staff.',
      'Kitchen & Breakroom Cleaning: Full clean including appliances, benches, sinks, and consumable restocking.',
      'Restroom Maintenance: Sanitisation, consumable refill, and odour control on every scheduled visit.',
      'Floor Care: Vacuuming, mopping, and carpet spot cleaning for all floor types.',
      'After-Hours Availability: We clean evenings or early mornings so your Drummoyne team is never disrupted.'
    ],
    process: [
      'Free Site Assessment: We visit your Drummoyne office and build a cleaning checklist tailored to your layout and priorities.',
      'Custom Schedule: Daily, weekly, or bespoke frequency — whatever keeps your workspace consistently clean.',
      'Trained Local Team: The same trusted cleaners assigned to your site every visit for consistency.',
      'Regular Quality Checks: Supervisor inspections and open communication to maintain high standards.'
    ],
    whyChooseUs: [
      'Canada Bay Coverage: We service Drummoyne, Five Dock, Russell Lea, Canada Bay, Abbotsford, Concord West, Rhodes, and surrounding suburbs.',
      'Licensed & Insured: Police-checked staff and full public liability insurance on every job.',
      'Eco-Friendly Products: TGA-listed disinfectants and environmentally responsible cleaning products.',
      'No Lock-In Contracts: Flexible arrangements — we earn your business every visit.',
      'Responsive Account Management: Direct contact with your account manager, not a call centre.'
    ],
    serviceAreas: [
      'Drummoyne', 'Five Dock', 'Russell Lea', 'Canada Bay',
      'Abbotsford', 'Concord West', 'Rhodes', 'Cabarita',
      'Breakfast Point', 'Rodd Point', 'Wareemba', 'Chiswick'
    ],
    faqs: [
      {
        question: 'What office cleaning services do you offer in Drummoyne?',
        answer: 'Our Drummoyne office cleaning covers all commercial cleaning tasks: desk and workstation sanitisation, kitchen and breakroom cleaning, restroom maintenance, vacuuming and mopping, bin emptying, window cleaning, and carpet care. We build a custom checklist specific to your Drummoyne office layout and cleaning frequency.'
      },
      {
        question: 'Do you service Five Dock, Russell Lea, and Canada Bay as well?',
        answer: 'Yes. Our local team services Drummoyne, Five Dock, Russell Lea, Canada Bay, Abbotsford, Concord West, Rhodes, and all surrounding Canada Bay suburbs. If your office is in the area, we can service it.'
      },
      {
        question: 'Can you clean our Drummoyne office after hours?',
        answer: 'Absolutely. We specialise in after-hours office cleaning in Drummoyne. We can schedule your clean for evenings or early mornings so your office is fresh and ready before your team arrives — with zero disruption to your business.'
      },
      {
        question: 'Are your cleaners police-checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff are police-checked and we hold full public liability insurance. You will receive the same trained team on each visit for consistency and security.'
      },
      {
        question: 'How do I get a quote for office cleaning in Drummoyne?',
        answer: 'Call us on 1300 494 983 or submit an enquiry online. We will arrange a free site visit to your Drummoyne office and provide a detailed quote within 24 hours.'
      }
    ],
    images: [
      { src: '/images/services/office.webp', alt: 'Office cleaning Drummoyne Sydney NSW' },
      { src: '/images/services/commercial.webp', alt: 'Commercial cleaning services Drummoyne NSW' }
    ],
    relatedServices: [
      'Office Cleaning Balmain',
      'Office Cleaning Inner West',
      'Commercial Cleaning Drummoyne',
      'Office Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Drummoyne Sydney"
        serviceDescription="Professional office cleaning services in Drummoyne Sydney NSW. Serving Drummoyne, Five Dock, Russell Lea, Canada Bay, Abbotsford, Concord West and surrounding suburbs. Licensed, insured, after-hours available."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-drummoyne"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Desk Sanitisation', 'Kitchen Cleaning', 'Restroom Maintenance', 'Carpet Cleaning', 'Window Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
