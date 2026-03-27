
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Surry Hills NSW | Creative Studio Cleaning',
  description: 'Pro Clean Corp keeps Surry Hills\' creative studios and offices pristine. Modern cleaning for open-plan workspaces, media agencies, and tech hubs.',
  keywords: 'office cleaning surry hills, creative studio cleaning, tech office cleaning, local commercial cleaners surry hills, eco friendly office cleaning',
  openGraph: {
    title: 'Office Cleaning Surry Hills NSW | Creative Studio Cleaning',
    description: 'Specialized cleaning for Surry Hills\' vibrant office scene. Eco-friendly products and flexible scheduling.',
    url: 'https://www.procleancorp.com.au/office-cleaning-surry-hills',
    type: 'website',
    images: [
      {
        url: '/images/services/office.webp',
        alt: 'Office cleaning Surry Hills NSW',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.procleancorp.com.au/office-cleaning-surry-hills',
  },
};

export default function SurryHillsCleaningPage() {
  const serviceInfo = {
    title: "Office Cleaning Surry Hills NSW",
    description: "Surry Hills is the heart of Sydney's creative and tech scene, filled with converted warehouses, sleek studios, and open-plan offices. Pro Clean Corp understands the unique aesthetic and vibe of Surry Hills businesses. We provide meticulous office cleaning services that respect your modern workspace, using eco-friendly products and flexible schedules to keep your agency or startup looking sharp and professional.",
    benefits: [
      "Creative Spaces: We clean glass partitions, polished concrete, and exposed brick with care.",
      "Eco-Conscious: Green cleaning products to align with your company values.",
      "Flexible Hours: Cleaning before 9am or after 5pm to suit your team.",
      "Detail Oriented: Spotless kitchens, meeting rooms, and breakout areas.",
      "Reliable Staff: Trusted cleaners who become part of your office routine.",
      "Strata Focused: Cleaning common foyers and stairs for mixed-use buildings."
    ],
    process: [
      "Walkthrough: Meeting at your studio to discuss specific areas of focus.",
      "Custom Plan: A checklist tailored to your office layout and staff numbers.",
      "Regular Clean: Daily or weekly visits to maintain hygiene.",
      "Consumables: We can restock your kitchen and bathrooms."
    ],
    whyChooseUs: [
      "Local Presence: We service many businesses in Surry Hills and Darlinghurst.",
      "Responsive: Quick communication via email or phone.",
      "Insured: Full liability cover for peace of mind.",
      "Quality Checks: Regular supervisor inspections.",
      "All-Inclusive: We bring all chemicals and equipment."
    ],
    serviceAreas: [
      "Darlinghurst", "Redfern", "Chippendale", "Paddington",
      "Newtown", "Waterloo", "Alexandria", "CBD"
    ],
    faqs: [
      {
        question: "Do you use eco-friendly products?",
        answer: "Yes, we prioritize green cleaning solutions that are non-toxic and safe for your staff and the environment."
      },
      {
        question: "Can you clean polished concrete floors?",
        answer: "Absolutely. We use pH-neutral cleaners and specialized pads to maintain the shine of polished concrete without damage."
      },
      {
        question: "Do you offer recycling management?",
        answer: "Yes, we can manage your office recycling stations, separating paper, commingled, and general waste."
      },
      {
        question: "How secure is your service?",
        answer: "Our staff are police-checked and trained in securing premises, ensuring alarms are set and doors locked upon exit."
      },
      {
        question: "Do you clean on weekends?",
        answer: "Yes, weekend cleaning is available for busy offices that prefer zero disruption during the work week."
      }
    ],
    images: [
      { src: "/images/services/office.webp", alt: "Creative office cleaning Surry Hills" },
      { src: "/images/services/commercial.webp", alt: "Studio cleaning Surry Hills" }
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Surry Hills"
        serviceDescription="Professional office cleaning services for creative studios and businesses in Surry Hills NSW."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-surry-hills"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={["Studio Cleaning", "Carpet Cleaning", "Window Cleaning", "Green Cleaning"]}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
