import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';
import Ourservices from '../components/Ourservices';

export default function CommercialCleaningContractorsPage() {
  const serviceData = {
    title: 'Commercial Cleaning Contractors Sydney NSW - Licensed Professional Cleaning Services',
    description: 'Trusted commercial cleaning contractors in Sydney NSW. Pro Clean Corp provides licensed, insured, and bonded cleaning contractors for businesses requiring reliable, professional commercial cleaning solutions.',
    benefits: [
      'Licensed commercial cleaning contractors with full professional certifications',
      'Comprehensive insurance coverage protecting clients and contractor services',
      'Bonded cleaning contractors ensuring complete security and reliability',
      'Experienced commercial contractors with specialized industry knowledge',
      'Flexible contracting arrangements from short-term to long-term agreements',
      'Professional contractor teams trained in commercial cleaning standards',
      'Competitive contractor rates with transparent pricing and detailed quotations',
      'Quality assurance programs ensuring consistent contractor performance'
    ],
    process: [
      'Initial contractor consultation and comprehensive project assessment',
      'Detailed contract proposal with scope of work and service specifications',
      'Professional contractor team assignment and service commencement',
      'Ongoing contractor performance monitoring and client satisfaction review'
    ],
    whyChooseUs: [
      'Trusted commercial cleaning contractors serving Sydney NSW for 8+ years',
      'Licensed and certified contractors meeting Australian commercial standards',
      'Comprehensive contractor insurance including public liability and professional indemnity',
      'Experienced contractor teams specializing in diverse commercial environments',
      'Flexible contractor agreements tailored to your specific business requirements',
      'Professional contractor management ensuring consistent service delivery',
      'Emergency contractor services available for urgent commercial cleaning needs',
      'Proven contractor track record with excellent client references and satisfaction'
    ],
    serviceAreas: [
      'Sydney CBD Contractor Services', 'North Sydney Commercial Contractors', 'Parramatta Business Contractors',
      'Chatswood Professional Contractors', 'Liverpool Commercial Contractors', 'Campbelltown Business Contractors',
      'Penrith Industrial Contractors', 'Blacktown Commercial Contractors', 'Bankstown Business Contractors',
      'Fairfield Professional Contractors', 'Hornsby Commercial Contractors', 'Sutherland Business Contractors'
    ],
    faqs: [
      {
        question: 'What qualifications do your commercial cleaning contractors have?',
        answer: 'Our commercial cleaning contractors are licensed, insured, bonded, and certified with professional training in commercial cleaning standards, safety protocols, and industry-specific requirements.'
      },
      {
        question: 'How do you ensure commercial cleaning contractors are reliable?',
        answer: 'We ensure contractor reliability through comprehensive background checks, professional certifications, insurance verification, performance monitoring, and regular client feedback evaluation.'
      },
      {
        question: 'What types of commercial cleaning contracts do you offer?',
        answer: 'Our commercial cleaning contractors offer flexible contracts including daily cleaning, weekly maintenance, monthly deep cleaning, one-time services, and specialized project-based contracts.'
      },
      {
        question: 'Are your commercial cleaning contractors insured?',
        answer: 'Yes, all our commercial cleaning contractors carry comprehensive public liability insurance, professional indemnity coverage, and workers compensation insurance for complete protection.'
      },
      {
        question: 'How do you manage commercial cleaning contractor performance?',
        answer: 'We manage contractor performance through detailed service specifications, regular inspections, client feedback systems, performance metrics, and ongoing professional development programs.'
      },
      {
        question: 'Can commercial cleaning contractors handle specialized projects?',
        answer: 'Yes, our commercial cleaning contractors have expertise in specialized projects including post-construction cleanup, industrial cleaning, medical facility sanitization, and emergency cleaning services.'
      }
    ],
    images: [
      {
        src: '/images/services/commercial.webp',
        alt: 'Commercial cleaning contractors Sydney NSW - Licensed professional cleaning services'
      },
      {
        src: '/images/hero/hero2.jpg',
        alt: 'Professional commercial cleaning contractors serving Sydney businesses'
      }
    ],
    relatedServices: ['Commercial Cleaning Company', 'Professional Contractors', 'Business Cleaning Services', 'Industrial Contractors']
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Contractors Sydney NSW"
        serviceDescription="Trusted commercial cleaning contractors in Sydney NSW. Licensed, insured, and bonded cleaning contractors for businesses requiring reliable professional commercial cleaning solutions."
        serviceUrl="/commercial-cleaning-contractors"
        serviceType="Commercial Cleaning Contractors"
        price="$$-$$$$"
        additionalServices={[
          'Licensed Commercial Contractors',
          'Professional Cleaning Contractors',
          'Industrial Cleaning Contractors',
          'Specialized Project Contractors',
          'Emergency Cleaning Contractors',
          'Post-Construction Contractors',
          'Medical Facility Contractors',
          'Maintenance Service Contractors'
        ]}
      />
      
      <ServiceSEOContent {...serviceData} />
      
      <Ourservices bg_color="bg-slate-50" />
    </>
  );
}