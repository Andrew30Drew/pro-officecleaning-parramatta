import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Concord Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional commercial cleaning in Concord since 2015. Licensed & insured cleaners serving Concord, North Strathfield, Rhodes, Liberty Grove & Canada Bay. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'commercial cleaning concord, commercial cleaners concord, office cleaning concord, commercial cleaning north strathfield, commercial cleaning rhodes, commercial cleaning liberty grove, business cleaning concord, commercial cleaners concord nsw, professional commercial cleaning concord, commercial cleaning canada bay',
  openGraph: {
    title: 'Commercial Cleaning Concord Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional commercial cleaning in Concord NSW. Licensed & insured. Serving Concord, North Strathfield, Rhodes & Liberty Grove. Call 1300 494 983.',
    url: '/commercial-cleaning-concord',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Commercial cleaning services Concord Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/commercial-cleaning-concord'
  }
};

export default function CommercialCleaningConcordPage() {
  const serviceInfo = {
    title: 'Commercial Cleaning Concord Sydney NSW',
    description: 'Pro Clean Corp delivers professional commercial cleaning services throughout Concord and the Canada Bay business precinct. From medical suites near Concord Hospital and professional offices to retail shops along Majors Bay Road and strata buildings across Canada Bay, we provide consistent, thorough cleaning that keeps your Concord business healthy, presentable, and productive — every visit.',
    benefits: [
      'Daily & Regular Cleaning: Tailored schedules from daily to fortnightly, designed around your Concord business hours.',
      'Medical & Office Cleaning: Specialist cleaning for medical practices, professional offices, and retail premises across Concord.',
      'High-Touch Surface Disinfection: Counters, door handles, lifts, and shared surfaces sanitised on every visit.',
      'Kitchen & Breakroom Cleaning: Full clean including appliances, benches, sinks, and consumable restocking.',
      'Restroom Maintenance: Sanitisation, consumable refill, and odour control on every scheduled visit.',
      'After-Hours Availability: We clean evenings or early mornings so your business is ready before opening.'
    ],
    process: [
      'Free Site Assessment: We visit your Concord premises and build a cleaning checklist tailored to your business type and layout.',
      'Custom Schedule: Daily, weekly, or bespoke frequency — whatever keeps your space consistently clean.',
      'Trained Local Team: The same trusted cleaners assigned to your site every visit for reliability and security.',
      'Regular Quality Checks: Supervisor inspections and open communication to maintain high standards.'
    ],
    whyChooseUs: [
      'Canada Bay Coverage: We service Concord, North Strathfield, Rhodes, Liberty Grove, Breakfast Point, Cabarita, Concord West, and surrounding suburbs.',
      'Licensed & Insured: Police-checked staff and full public liability insurance on every job.',
      'Eco-Friendly Products: TGA-listed disinfectants and environmentally responsible cleaning products.',
      'No Lock-In Contracts: Flexible arrangements — we earn your business every visit.',
      'Responsive Account Management: Direct contact with your account manager, not a call centre.'
    ],
    serviceAreas: [
      'Concord', 'North Strathfield', 'Rhodes', 'Liberty Grove',
      'Breakfast Point', 'Cabarita', 'Concord West', 'Strathfield',
      'Homebush', 'Drummoyne', 'Five Dock', 'Burwood'
    ],
    faqs: [
      {
        question: 'What commercial cleaning services do you offer in Concord?',
        answer: 'Our Concord commercial cleaning covers medical suites, offices, retail shops, strata buildings, and hospitality venues. Services include daily cleaning, high-touch surface disinfection, kitchen and breakroom cleaning, restroom maintenance, vacuuming, mopping, and window cleaning. We build a custom checklist for your specific business type and location.'
      },
      {
        question: 'Do you clean medical practices near Concord Hospital?',
        answer: 'Yes. We specialise in medical and healthcare cleaning for GP clinics, specialist suites, and allied health practices in the Concord area. Our teams are trained in infection control protocols and use TGA-approved hospital-grade disinfectants for all healthcare environments.'
      },
      {
        question: 'Do you service North Strathfield, Rhodes, and Liberty Grove as well?',
        answer: 'Yes. Our local team services Concord, North Strathfield, Rhodes, Liberty Grove, Breakfast Point, Cabarita, Concord West, and all surrounding Canada Bay suburbs. If your business is in the area, we can service it.'
      },
      {
        question: 'Can you clean our Concord office or retail premises after hours?',
        answer: 'Absolutely. We specialise in after-hours commercial cleaning in Concord. We schedule your clean for evenings or early mornings so your business is clean and ready to open — with zero disruption to your operations.'
      },
      {
        question: 'How do I get a quote for commercial cleaning in Concord?',
        answer: 'Call us on 1300 494 983 or submit an enquiry online. We will arrange a free site visit to your Concord premises and provide a detailed quote within 24 hours.'
      }
    ],
    images: [
      { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Concord Sydney NSW' },
      { src: '/images/services/office.webp', alt: 'Office cleaning services Concord Canada Bay NSW' }
    ],
    relatedServices: [
      'Commercial Cleaning Rhodes',
      'Commercial Cleaning Strathfield',
      'Commercial Cleaning Drummoyne',
      'Commercial Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Concord Sydney"
        serviceDescription="Professional commercial cleaning services in Concord Sydney NSW. Serving Concord, North Strathfield, Rhodes, Liberty Grove, Breakfast Point and surrounding Canada Bay suburbs. Licensed, insured, after-hours available."
        serviceUrl="https://www.procleancorp.com.au/commercial-cleaning-concord"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Medical Cleaning', 'Office Cleaning', 'Retail Cleaning', 'Strata Cleaning', 'After-Hours Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
