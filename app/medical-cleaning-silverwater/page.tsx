import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Medical Cleaning Silverwater Sydney NSW | Free Quote | Pro Clean Corp',
  description: 'Professional medical centre cleaning in Silverwater since 2015. Hospital-grade disinfection for GP clinics, specialist practices & healthcare facilities in Silverwater, Auburn & Western Sydney. Call 1300 494 983.',
  keywords: 'medical cleaning silverwater, medical cleaning auburn area, clinic cleaning silverwater, medical centre cleaning doonside, healthcare cleaning western sydney, medical office cleaning silverwater, GP cleaning silverwater, infection control cleaning auburn, medical cleaners silverwater, clinical cleaning silverwater nsw',
  openGraph: {
    title: 'Medical Cleaning Silverwater Sydney NSW | Free Quote | Pro Clean Corp',
    description: 'Professional medical centre cleaning in Silverwater NSW. Hospital-grade disinfection for clinics & healthcare facilities in Silverwater, Auburn & Western Sydney. Call 1300 494 983.',
    url: '/medical-cleaning-silverwater',
    type: 'website',
    images: [
      {
        url: '/meta.png',
        alt: 'Medical cleaning services Silverwater Sydney NSW'
      }
    ]
  },
  alternates: {
    canonical: '/medical-cleaning-silverwater'
  }
};

export default function MedicalCleaningSilverwaterPage() {
  const serviceInfo = {
    title: 'Medical Cleaning Silverwater Sydney NSW',
    description: 'Pro Clean Corp provides specialist medical cleaning services throughout Silverwater and Western Sydney. Our infection-control trained teams deliver hospital-grade disinfection for GP clinics, medical centres, allied health suites, dental surgeries, and occupational health facilities — keeping patients safe and your practice compliant with Australian healthcare cleaning standards on every visit.',
    benefits: [
      'Hospital-Grade Disinfection: TGA-approved disinfectants effective against bacteria, viruses, and healthcare-acquired pathogens.',
      'Infection Control Protocols: Colour-coded equipment systems, strict cross-contamination prevention, and clinical area zoning on every visit.',
      'Consulting Room & Waiting Area Cleaning: Full sanitisation of high-touch surfaces, exam tables, chairs, and reception counters.',
      'Restroom Deep Cleaning: Medical-grade sanitisation and consumable restocking for patient and staff amenities.',
      'After-Hours Availability: Cleaning scheduled outside clinic hours to ensure zero disruption to patient appointments.',
      'Police-Checked, Trained Staff: All cleaners background-checked and specifically trained for healthcare environments.'
    ],
    process: [
      'Free Site Assessment: We inspect your Silverwater clinic, document all clinical zones, and identify infection risk areas.',
      'Custom Cleaning Plan: A written schedule aligned to your practice protocols, AHPRA guidelines, and facility cleaning requirements.',
      'Trained Healthcare Team: The same dedicated team assigned to your site every visit for consistency, security, and protocol compliance.',
      'Regular Quality Audits: Scheduled supervisor inspections and open communication to maintain clinical standards.'
    ],
    whyChooseUs: [
      'Healthcare Specialist: We clean GP clinics, dental surgeries, specialist suites, allied health practices, and occupational health centres across Western Sydney.',
      'Silverwater & Western Sydney Coverage: Servicing Silverwater, Auburn, Doonside, Wentworthville, Granville, Merrylands, and surrounding suburbs.',
      'Licensed & Insured: Full public liability insurance and police-checked staff on every job.',
      'TGA-Listed Products: Disinfectants proven effective in healthcare settings — Safety Data Sheets available on request.',
      'No Lock-In Contracts: Flexible arrangements — we earn your practice\'s trust every visit.'
    ],
    serviceAreas: [
      'Silverwater', 'Auburn', 'Doonside', 'Wentworthville',
      'Granville', 'Merrylands', 'Guildford', 'Woodville',
      'Berala', 'Lidcombe', 'Parramatta', 'Girraween'
    ],
    faqs: [
      {
        question: 'What medical cleaning services do you offer in Silverwater?',
        answer: 'Our Silverwater medical cleaning covers all healthcare facility tasks: consulting room sanitisation, waiting area cleaning, restroom deep cleaning, high-touch surface disinfection, clinical waste area maintenance, kitchen and staff room cleaning, and floor care. We build a custom protocol checklist for your specific practice type and infection control requirements.'
      },
      {
        question: 'Are your cleaners trained in infection control for medical facilities in Silverwater?',
        answer: 'Yes. All staff assigned to medical facilities in Silverwater undergo specific training in infection control, cross-contamination prevention, colour-coded equipment systems, and the correct use of TGA-approved hospital-grade disinfectants. Safety Data Sheets are available for all chemicals used.'
      },
      {
        question: 'Do you service GP clinics and medical centres in the Auburn and Doonside area?',
        answer: 'Yes. Our Western Sydney medical cleaning team services Silverwater, Auburn, Doonside, Wentworthville, Granville, Merrylands, and all surrounding suburbs. Each facility receives a cleaning protocol specific to its infection risk profile.'
      },
      {
        question: 'Can you clean our Silverwater medical centre after hours?',
        answer: 'Yes. We specialise in after-hours medical cleaning in Silverwater. We schedule your clean for evenings or early mornings so patient care is never disrupted and your clinic is ready before opening every day.'
      },
      {
        question: 'How do I get a quote for medical cleaning in Silverwater?',
        answer: 'Call us on 1300 494 983 or submit an enquiry online. We will arrange a free site visit to your Silverwater clinic and provide a detailed, compliant cleaning proposal within 24 hours.'
      }
    ],
    images: [
      { src: '/images/services/commercial.webp', alt: 'Medical cleaning Silverwater Sydney NSW' },
      { src: '/images/services/office.webp', alt: 'Healthcare cleaning services Silverwater Western Sydney NSW' }
    ],
    relatedServices: [
      'Medical Cleaning Parramatta',
      'Medical Cleaning Blacktown',
      'Office Cleaning Silverwater',
      'Commercial Cleaning Silverwater'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Medical Cleaning Silverwater Sydney"
        serviceDescription="Professional medical centre cleaning services in Silverwater Sydney NSW. Hospital-grade disinfection for GP clinics, specialist practices and dental surgeries. Serving Silverwater, Auburn, Doonside, Wentworthville and surrounding Western Sydney suburbs."
        serviceUrl="https://www.procleancorp.com.au/medical-cleaning-silverwater"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Hospital-Grade Disinfection', 'Infection Control Cleaning', 'Dental Surgery Cleaning', 'GP Clinic Cleaning', 'After-Hours Medical Cleaning']}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
