
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Liverpool NSW | Office & Medical Cleaners',
  description: 'Pro Clean Corp provides reliable commercial cleaning in Liverpool. Expert cleaning for medical centres, offices, and new business parks in South West Sydney.',
  keywords: 'commercial cleaning liverpool, office cleaning liverpool, medical cleaning liverpool, business cleaning services south west sydney, strata cleaning liverpool',
  openGraph: {
    title: 'Commercial Cleaning Liverpool NSW | Office & Medical Cleaners',
    description: 'Specialist commercial cleaning services for Liverpool\'s growing business sector. Medical clean, office clean, and strata maintenance.',
    url: 'https://www.procleancorp.com.au/commercial-cleaning-liverpool',
    type: 'website',
    images: [
      {
        url: '/images/services/commercial.webp',
        alt: 'Commercial cleaning Liverpool NSW',
      },
      {
        url: '/images/services/office.webp',
        alt: 'Office cleaning Liverpool NSW',
      }
    ],
  },
  alternates: {
    canonical: 'https://www.procleancorp.com.au/commercial-cleaning-liverpool',
  },
};

export default function LiverpoolCleaningPage() {
  const serviceInfo = {
    title: "Commercial Cleaning Liverpool NSW",
    description: "Liverpool is rapidly transforming into a major commercial and health precinct for South West Sydney. Pro Clean Corp is at the forefront, offering specialized commercial cleaning services tailored to Liverpool's needs. We provide high-grade cleaning for medical centres near Liverpool Hospital, corporate offices in the CBD, and new industrial facilities in the surrounding suburbs. Our local team is dedicated to hygiene, safety, and presentation excellence.",
    benefits: [
      "Medical Grade: Cleaners trained in infection control for clinics and health facilities.",
      "Office Excellence: Professional maintenance for corporate suites and receptions.",
      "South West Local: Our teams are based in the Liverpool area for fast response.",
      "Strata Specialists: Managing common property for residential and commercial strata.",
      "Industrial Capabilities: Floor scrubbing and high cleaning for warehouses.",
      "Transparent Pricing: Clear quotes with no hidden surprises."
    ],
    process: [
      "Consultation: Understanding the specific needs of your medical, office, or industrial site.",
      "Custom Plan: Developing a cleaning roster that covers compliance and aesthetic needs.",
      "Implementation: Delivering high-quality cleaning with modern equipment.",
      "Quality Assurance: Regular supervision ensuring contract compliance."
    ],
    whyChooseUs: [
      "Liverpool Specialists: Deep understanding of local medical and business requirements.",
      "Health Focused: Using hospital-grade disinfectants where required.",
      "Background Checked: Security vetted staff for sensitive environments.",
      "Reliable Service: We value your time and business continuity.",
      "Complete Solution: Washroom supplies, carpet cleaning, and hard floor care included."
    ],
    serviceAreas: [
      "Liverpool CBD", "Warwick Farm", "Moorebank", "Chipping Norton",
      "Casula", "Prestons", "Hoxton Park", "Edmondson Park"
    ],
    faqs: [
      {
        question: "Do you clean medical centres in Liverpool?",
        answer: "Yes, we have extensive experience cleaning medical practices, dental clinics, and health facilities, ensuring compliance with strict hygiene standards."
      },
      {
        question: "Can you service industrial sites in Prestons?",
        answer: "Absolutely. We provide industrial cleaning services for factories and warehouses in Prestons and surrounding industrial zones."
      },
      {
        question: "Do you offer carpet cleaning for offices?",
        answer: "Yes, we provide professional carpet steam cleaning and stain removal to keep your office carpets fresh and hygienic."
      },
      {
        question: "Is your staff insured?",
        answer: "Yes, all Pro Clean Corp staff are fully insured with Public Liability and Workers Compensation insurance."
      },
      {
        question: "Do you provide strata cleaning?",
        answer: "Yes, we manage cleaning for many strata complexes in Liverpool, handling everything from bin rooms to foyer glass."
      }
    ],
    images: [
      { src: "/images/services/office.webp", alt: "Medical office cleaning Liverpool" },
      { src: "/images/services/warehouse.webp", alt: "Industrial cleaning Liverpool" }
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Commercial Cleaning Liverpool"
        serviceDescription="Professional commercial cleaning services for medical, office, and industrial businesses in Liverpool NSW."
        serviceUrl="https://www.procleancorp.com.au/commercial-cleaning-liverpool"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={["Medical Cleaning", "Office Cleaning", "Industrial Cleaning", "Strata Cleaning"]}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
