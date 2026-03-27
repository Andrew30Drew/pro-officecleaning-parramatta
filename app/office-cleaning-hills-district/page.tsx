import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Hills District Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional office cleaning across the Hills District since 2015. Serving Castle Hill, Baulkham Hills, Norwest, Kellyville & Rouse Hill. Licensed & insured. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'office cleaning hills district, office cleaning castle hill, office cleaning baulkham hills, office cleaning kellyville, office cleaning norwest, office cleaning rouse hill, commercial cleaning hills district, business cleaning hills district, office cleaners hills district sydney, professional office cleaning hills district nsw',
  openGraph: {
    title: 'Office Cleaning Hills District Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional office cleaning across the Hills District. Castle Hill, Baulkham Hills, Norwest, Kellyville & Rouse Hill. Licensed & insured. Call 1300 494 983.',
    url: '/office-cleaning-hills-district',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Office cleaning Hills District Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/office-cleaning-hills-district'
  }
};

export default function OfficeCleaningHillsDistrictPage() {
  const serviceInfo = {
    title: 'Office Cleaning Hills District Sydney NSW',
    description: 'The Hills District is one of Sydney\'s fastest-growing business corridors — from Norwest Business Park to the Castle Hill commercial precinct. Pro Clean Corp provides professional office cleaning services across the Hills District, keeping workplaces in Castle Hill, Baulkham Hills, Norwest, Kellyville, and Rouse Hill consistently clean, hygienic, and professional.',
    benefits: [
      'Full Office Cleaning: Desks, kitchens, restrooms, floors, bins, and high-touch surfaces on every visit.',
      'Norwest Business Park Specialists: Regular commercial cleaning for the growing Norwest precinct.',
      'Flexible Scheduling: Daily, 3x weekly, or weekly — we match your business rhythm.',
      'After-Hours Service: Evening and early-morning cleaning so operations are never disrupted.',
      'Carpet & Hard Floor Care: Vacuuming, mopping, carpet spot treatment, and periodic deep cleans.',
      'Eco-Friendly Products: TGA-listed disinfectants and environmentally responsible cleaning agents.'
    ],
    process: [
      'Free Site Visit: We visit your Hills District office and design a cleaning plan around your layout and schedule.',
      'Assigned Team: The same trained cleaners every visit — no strangers walking through your office.',
      'Detailed Checklist: Every area covered, every visit — nothing left to chance.',
      'Ongoing Communication: Direct access to your account manager for any adjustments or special requests.'
    ],
    whyChooseUs: [
      'Hills District Local Coverage: Teams based in the area — fast response, no travel delays.',
      'Licensed & Insured: Police-checked cleaners and full public liability insurance on every site.',
      'Business Park Experience: We clean multi-tenancy buildings, serviced offices, and standalone commercial premises throughout Norwest and Castle Hill.',
      'Trusted by Local Businesses: Reliable, consistent cleaning that Hills District businesses depend on.',
      'No Lock-In Contracts: Month-to-month arrangements — we keep your business by earning it every visit.'
    ],
    serviceAreas: [
      'Castle Hill', 'Baulkham Hills', 'Norwest', 'Kellyville',
      'Rouse Hill', 'Bella Vista', 'Glenhaven', 'Round Corner',
      'Cherrybrook', 'West Pennant Hills', 'Dural', 'Kenthurst'
    ],
    faqs: [
      {
        question: 'Do you clean offices in Norwest Business Park?',
        answer: 'Yes. Norwest Business Park is one of our key service areas in the Hills District. We clean corporate offices, serviced offices, medical suites, and retail premises across the entire Norwest precinct. Our teams are familiar with the access requirements and building management standards of the business park.'
      },
      {
        question: 'What areas of the Hills District do you cover?',
        answer: 'We service the entire Hills District including Castle Hill, Baulkham Hills, Norwest, Kellyville, Rouse Hill, Bella Vista, Glenhaven, Cherrybrook, West Pennant Hills, Round Corner, and surrounding suburbs. If your office is in the Hills District, we can clean it.'
      },
      {
        question: 'Can you clean our Castle Hill office after hours?',
        answer: 'Yes. After-hours cleaning is standard for most of our Hills District clients. We schedule your clean for evenings or early mornings to ensure zero disruption to your team and full security compliance.'
      },
      {
        question: 'Do you offer daily office cleaning in the Hills District?',
        answer: 'Absolutely. We offer daily, 3x weekly, weekly, and fortnightly cleaning schedules. For busy offices in Castle Hill or Norwest, we recommend a minimum of 3x per week to maintain hygiene standards. We will recommend the right frequency based on your office size and staff count.'
      },
      {
        question: 'Are your Hills District cleaners police checked and insured?',
        answer: 'Yes. All Pro Clean Corp cleaners are police-checked and we hold comprehensive public liability insurance. You will be assigned a consistent team so the same trusted people are in your office on every visit.'
      }
    ],
    images: [
      { src: '/images/services/office.webp', alt: 'Office cleaning Hills District Sydney NSW' },
      { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Castle Hill Norwest NSW' }
    ],
    relatedServices: [
      'Office Cleaning Castle Hill',
      'Gym Cleaning Norwest',
      'Medical Cleaning Castle Hill',
      'Commercial Cleaning Hills District'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Hills District Sydney"
        serviceDescription="Professional office cleaning services across the Hills District Sydney NSW. Serving Castle Hill, Baulkham Hills, Norwest, Kellyville, Rouse Hill and surrounding suburbs. Licensed, insured, after-hours available."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-hills-district"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Desk Sanitisation', 'Kitchen Cleaning', 'Restroom Maintenance', 'Carpet Cleaning', 'Floor Polishing']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
