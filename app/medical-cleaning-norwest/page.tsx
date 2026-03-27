import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Cleaning Norwest Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional medical centre cleaning in Norwest Business Park since 2015. Hospital-grade disinfection for GP clinics, specialist practices & healthcare facilities. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'medical cleaning norwest, medical centre cleaning norwest, clinic cleaning norwest, doctors surgery cleaning norwest, medical cleaning baulkham hills, GP clinic cleaning hills district, healthcare cleaning norwest business park, infection control cleaning norwest, medical cleaners norwest, clinical cleaning norwest nsw',
  openGraph: {
    title: 'Medical Cleaning Norwest Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional medical centre cleaning in Norwest Business Park NSW. Hospital-grade disinfection for GP clinics, specialist practices & healthcare facilities. Call 1300 494 983.',
    url: '/medical-cleaning-norwest',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Medical cleaning services Norwest Business Park Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/medical-cleaning-norwest'
  }
};

export default function MedicalCleaningNorwestPage() {
  const serviceInfo = {
    title: 'Medical Cleaning Norwest Sydney NSW',
    description: 'Pro Clean Corp provides specialist medical cleaning services throughout Norwest Business Park and the Hills District. Our infection-control trained teams deliver hospital-grade disinfection for GP clinics, specialist practices, allied health suites, dental surgeries, and pathology centres — ensuring patient safety and full compliance with Australian healthcare cleaning standards on every visit.',
    benefits: [
      'Hospital-Grade Disinfection: TGA-approved disinfectants effective against bacteria, viruses, and healthcare-acquired pathogens.',
      'Infection Control Protocols: Colour-coded equipment systems, strict cross-contamination prevention, and clinical area zoning on every visit.',
      'Consulting Room & Waiting Area Cleaning: Full sanitisation of high-touch surfaces, exam tables, chairs, and reception areas.',
      'Restroom Deep Cleaning: Medical-grade sanitisation and consumable restocking for patient and staff amenities.',
      'After-Hours Availability: Cleaning scheduled after clinic hours so patient care is never interrupted.',
      'Police-Checked, Trained Staff: All cleaners background-checked and trained specifically for healthcare environments.'
    ],
    process: [
      'Free Site Assessment: We inspect your Norwest clinic and document all clinical areas, infection risk zones, and cleaning priorities.',
      'Custom Cleaning Plan: A written cleaning schedule aligned to your practice protocols, AHPRA guidelines, and facility requirements.',
      'Trained Healthcare Team: The same dedicated team assigned to your site for consistency, security, and protocol adherence.',
      'Regular Quality Audits: Scheduled supervisor inspections and open communication to maintain clinical standards.'
    ],
    whyChooseUs: [
      'Healthcare Specialist: We clean GP clinics, dental surgeries, specialist suites, allied health practices, and pathology centres across the Hills District.',
      'Norwest & Hills District Coverage: Servicing Norwest Business Park, Bella Vista, Baulkham Hills, Castle Hill, Kellyville, and surrounding suburbs.',
      'Licensed & Insured: Full public liability insurance and police-checked staff on every job.',
      'TGA-Listed Products: Disinfectants proven effective in healthcare settings — Safety Data Sheets available on request.',
      'No Lock-In Contracts: Flexible arrangements — we earn your practice\'s trust every visit.'
    ],
    serviceAreas: [
      'Norwest Business Park', 'Bella Vista', 'Baulkham Hills', 'Castle Hill',
      'Kellyville', 'Rouse Hill', 'Stanhope Gardens', 'Parklea',
      'Winston Hills', 'Seven Hills', 'Blacktown', 'Prospect'
    ],
    faqs: [
      {
        question: 'What medical cleaning services do you offer in Norwest?',
        answer: 'Our Norwest medical cleaning covers all healthcare facility cleaning tasks: consulting room sanitisation, waiting area cleaning, restroom deep cleaning, high-touch surface disinfection, clinical waste area maintenance, kitchen and staff room cleaning, and floor care. We build a custom protocol checklist for your specific practice type and infection control requirements.'
      },
      {
        question: 'Are your cleaners trained in infection control for medical facilities?',
        answer: 'Yes. All staff assigned to medical facilities in Norwest undergo specific training in infection control, cross-contamination prevention, colour-coded equipment systems, and the correct use of TGA-approved hospital-grade disinfectants. Safety Data Sheets are available for all chemicals used.'
      },
      {
        question: 'Do you clean dental surgeries and specialist suites in Norwest Business Park?',
        answer: 'Absolutely. We service GP clinics, dental surgeries, specialist consulting suites, allied health practices, physiotherapy clinics, and pathology centres throughout Norwest Business Park and the broader Hills District. Each facility type receives a cleaning protocol specific to its infection risk profile.'
      },
      {
        question: 'Can you clean our Norwest clinic after hours?',
        answer: 'Yes. We specialise in after-hours medical cleaning in Norwest. We schedule your clean for evenings or early mornings so patient appointments are never disrupted and your clinic is pristine before opening every day.'
      },
      {
        question: 'How do I get a quote for medical cleaning in Norwest?',
        answer: 'Call us on 1300 494 983 or submit an enquiry online. We will arrange a free site visit to your Norwest clinic and provide a detailed, compliant cleaning proposal within 24 hours.'
      }
    ],
    images: [
      { src: '/images/services/commercial.webp', alt: 'Medical cleaning Norwest Business Park Sydney NSW' },
      { src: '/images/services/office.webp', alt: 'Healthcare cleaning services Norwest Hills District NSW' }
    ],
    relatedServices: [
      'Medical Cleaning Castle Hill',
      'Medical Cleaning Blacktown',
      'Medical Cleaning Parramatta',
      'Commercial Cleaning Hills District'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Medical Cleaning Norwest Sydney"
        serviceDescription="Professional medical centre cleaning services in Norwest Business Park Sydney NSW. Hospital-grade disinfection for GP clinics, specialist practices, dental surgeries and allied health facilities. Serving Norwest, Bella Vista, Baulkham Hills, Castle Hill and surrounding Hills District suburbs."
        serviceUrl="https://www.procleancorp.com.au/medical-cleaning-norwest"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Hospital-Grade Disinfection', 'Infection Control Cleaning', 'Dental Surgery Cleaning', 'Pathology Centre Cleaning', 'After-Hours Medical Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
