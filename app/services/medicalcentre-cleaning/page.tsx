import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../../components/Ourservices';

export default function MedicalCentreCleaningPage() {
  const serviceData = {
    title: 'Professional Medical Centre Cleaning Services Sydney NSW',
    description: "Ensure patient safety and regulatory compliance with Pro Clean Corp\'s specialized medical centre cleaning services in Sydney NSW. Our trained team understands healthcare facility requirements, delivering hospital-grade sanitization and infection control protocols.",
    benefits: [
      'Hospital-grade disinfection protocols ensuring patient and staff safety',
      'Compliance with Australian healthcare facility cleaning standards and regulations',
      'Specialized infection control procedures reducing healthcare-associated infections',
      'Professional handling of medical waste and biohazardous materials',
      'Enhanced patient confidence through visibly clean and sanitized facilities',
      'Reduced cross-contamination risks with appropriate cleaning sequencing',
      'Support for accreditation requirements and health department inspections',
      'Flexible scheduling to accommodate patient care and operational needs'
    ],
    process: [
      'Healthcare facility assessment and compliance requirement analysis',
      'Development of medical-specific cleaning protocols and safety procedures',
      'Implementation of infection control measures and hospital-grade sanitization',
      'Regular compliance monitoring and documentation for regulatory requirements'
    ],
    whyChooseUs: [
      'Specialized training in healthcare facility cleaning standards and infection control',
      'Hospital-grade disinfectants and medical facility approved cleaning products',
      'Comprehensive understanding of healthcare regulations and compliance requirements',
      'Experienced team trained in bloodborne pathogen safety and medical waste handling',
      'Flexible scheduling options including after-hours and emergency cleaning services',
      'Detailed documentation and reporting for compliance and accreditation purposes',
      'Advanced equipment designed specifically for medical and healthcare environments',
      'Proven track record with medical centres, clinics, and healthcare facilities'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Chatswood', 'Parramatta', 'Liverpool',
      'Campbelltown', 'Penrith', 'Blacktown', 'Hornsby', 'Sutherland',
      'Randwick', 'Kogarah', 'Hurstville', 'Bankstown', 'Auburn',
      'Burwood', 'Strathfield', 'Eastwood', 'Epping', 'Castle Hill'
    ],
    faqs: [
      {
        question: 'What makes medical centre cleaning different from regular commercial cleaning?',
        answer: 'Medical centre cleaning requires hospital-grade disinfectants, specialized infection control protocols, proper handling of medical waste, compliance with healthcare regulations, and staff training in bloodborne pathogen safety and cross-contamination prevention.'
      },
      {
        question: 'Do you comply with Australian healthcare facility cleaning standards?',
        answer: 'Yes, we strictly adhere to Australian healthcare facility cleaning standards including AS/NZS 4146 and guidelines from the Australian Commission on Safety and Quality in Health Care. Our protocols meet all regulatory requirements.'
      },
      {
        question: 'How do you handle medical waste and biohazardous materials?',
        answer: 'Our team is trained and certified in medical waste handling procedures. We follow strict protocols for identifying, containing, and disposing of medical waste in compliance with Australian healthcare waste regulations.'
      },
      {
        question: 'Can you clean during operating hours without disrupting patient care?',
        answer: "Yes, we specialize in working around healthcare operations. We coordinate with facility managers to clean during optimal times, use low-noise equipment, and follow protocols that don\'t interfere with patient care."
      },
      {
        question: 'What types of medical facilities do you service?',
        answer: 'We clean various healthcare facilities including medical centres, dental practices, physiotherapy clinics, pathology labs, radiology centers, day surgery facilities, aged care facilities, and specialist medical practices.'
      },
      {
        question: 'Do you provide emergency cleaning for medical facilities?',
        answer: 'Yes, we offer 24/7 emergency medical facility cleaning for situations like infectious disease outbreaks, biohazard spills, or other urgent situations requiring immediate professional cleaning response.'
      }
    ],
    images: [
      {
        src: '/images/services/medical.webp',
        alt: 'Professional medical centre cleaning services Sydney NSW - Hospital-grade sanitization'
      },
      {
        src: '/images/services/commercial.webp',
        alt: 'Medical facility cleaning team with specialized equipment - Pro Clean Corp Sydney NSW'
      }
    ],
    relatedServices: ['Commercial Cleaning', 'Office Cleaning', 'Childcare Cleaning']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Professional Medical Centre Cleaning Services Sydney NSW"
        serviceDescription="Specialized medical facility cleaning services with hospital-grade sanitization and infection control protocols. Serving medical centres, clinics, and healthcare facilities across Sydney NSW."
        serviceUrl="/services/medicalcentre-cleaning"
        serviceType="Medical Centre Cleaning"
        price="$$$-$$$$"
        additionalServices={[
          'Medical Centre Deep Cleaning',
          'Dental Practice Cleaning',
          'Pathology Lab Cleaning',
          'Day Surgery Facility Cleaning',
          'Medical Waste Handling',
          'Infection Control Protocols',
          'Emergency Medical Cleaning',
          'Healthcare Compliance Cleaning'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}
