import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Dee Why Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional commercial cleaning in Dee Why since 2015. Licensed & insured cleaners serving Dee Why, Northern Beaches, Collaroy, Narraweena & Manly Vale. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'commercial cleaning dee why, commercial cleaners dee why, commercial cleaning northern beaches, office cleaning dee why, commercial cleaning collaroy, commercial cleaning narraweena, commercial cleaning manly vale, commercial cleaners dee why nsw, business cleaning dee why, professional commercial cleaning dee why',
  openGraph: {
    title: 'Commercial Cleaning Dee Why Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional commercial cleaning in Dee Why NSW. Licensed & insured. Serving Dee Why, Northern Beaches, Collaroy & Narraweena. Call 1300 494 983.',
    url: '/commercial-cleaning-dee-why',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Commercial cleaning services Dee Why Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/commercial-cleaning-dee-why'
  }
};

export default function CommercialCleaningDeeWhyPage() {
  const serviceInfo = {
    title: 'Commercial Cleaning Dee Why Sydney NSW',
    description: 'Pro Clean Corp delivers professional commercial cleaning services throughout Dee Why and the Northern Beaches corridor. From retail shops and professional offices along The Corso to medical suites and beachside hospitality venues, we provide reliable, thorough cleaning that keeps your Dee Why business presentable, healthy, and compliant — every visit.',
    benefits: [
      'Daily & Regular Cleaning: Tailored schedules from daily to fortnightly, designed around your Dee Why business hours.',
      'Office & Retail Cleaning: Comprehensive cleaning for commercial premises of all sizes across the Northern Beaches.',
      'High-Touch Surface Disinfection: Counters, door handles, phones, and shared equipment sanitised on every visit.',
      'Kitchen & Breakroom Cleaning: Full clean including appliances, benches, sinks, and consumable restocking.',
      'Restroom Maintenance: Sanitisation, consumable refill, and odour control on every scheduled visit.',
      'After-Hours Availability: We clean evenings or early mornings so your business is fresh and ready to open.'
    ],
    process: [
      'Free Site Assessment: We visit your Dee Why premises and build a cleaning checklist tailored to your business type and layout.',
      'Custom Schedule: Daily, weekly, or bespoke frequency — whatever keeps your space consistently clean.',
      'Trained Local Team: The same trusted cleaners assigned to your site every visit for reliability.',
      'Regular Quality Checks: Supervisor inspections and open communication to maintain high standards.'
    ],
    whyChooseUs: [
      'Northern Beaches Coverage: We service Dee Why, Collaroy, Narraweena, Manly Vale, Brookvale, Curl Curl, Cromer, and surrounding Northern Beaches suburbs.',
      'Licensed & Insured: Police-checked staff and full public liability insurance on every job.',
      'Eco-Friendly Products: TGA-listed disinfectants and environmentally responsible cleaning products.',
      'No Lock-In Contracts: Flexible arrangements — we earn your business every visit.',
      'Responsive Account Management: Direct contact with your account manager, not a call centre.'
    ],
    serviceAreas: [
      'Dee Why', 'Collaroy', 'Narraweena', 'Manly Vale',
      'Brookvale', 'Curl Curl', 'Cromer', 'Allambie Heights',
      'Frenchs Forest', 'Beacon Hill', 'Wheeler Heights', 'Narrabeen'
    ],
    faqs: [
      {
        question: 'What commercial cleaning services do you offer in Dee Why?',
        answer: 'Our Dee Why commercial cleaning covers offices, retail shops, medical suites, hospitality venues, and light industrial premises. Services include daily cleaning, high-touch disinfection, kitchen and breakroom cleaning, restroom maintenance, vacuuming, mopping, and window cleaning. We build a custom checklist for your specific business.'
      },
      {
        question: 'Do you service the broader Northern Beaches area from Dee Why?',
        answer: 'Yes. Our Northern Beaches team services Dee Why, Collaroy, Narraweena, Manly Vale, Brookvale, Curl Curl, Cromer, Frenchs Forest, and all surrounding suburbs. If your business is on the Northern Beaches, we can service it.'
      },
      {
        question: 'Can you clean our Dee Why office or shop after hours?',
        answer: 'Absolutely. We specialise in after-hours commercial cleaning in Dee Why. We schedule your clean for evenings or early mornings so your business is immaculate and ready to open — with zero disruption to your trading hours.'
      },
      {
        question: 'Are your cleaners police-checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff are police-checked and we hold full public liability insurance. You will receive the same trained team on each visit for consistency and security.'
      },
      {
        question: 'How do I get a quote for commercial cleaning in Dee Why?',
        answer: 'Call us on 1300 494 983 or submit an enquiry online. We will arrange a free site visit to your Dee Why premises and provide a detailed quote within 24 hours.'
      }
    ],
    images: [
      { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Dee Why Sydney NSW' },
      { src: '/images/services/office.webp', alt: 'Office cleaning services Dee Why Northern Beaches NSW' }
    ],
    relatedServices: [
      'Commercial Cleaning Brookvale',
      'Office Cleaning Brookvale',
      'Commercial Cleaning Manly',
      'Commercial Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Dee Why Sydney"
        serviceDescription="Professional commercial cleaning services in Dee Why Sydney NSW. Serving Dee Why, Collaroy, Narraweena, Manly Vale, Brookvale and surrounding Northern Beaches suburbs. Licensed, insured, after-hours available."
        serviceUrl="https://www.procleancorp.com.au/commercial-cleaning-dee-why"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Office Cleaning', 'Retail Cleaning', 'Medical Cleaning', 'Restroom Maintenance', 'After-Hours Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
