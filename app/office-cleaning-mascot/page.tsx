
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Mascot NSW | Logistics & Airport Cleaning',
  description: 'Specialist cleaning for Mascot businesses. Serving logistics companies, freight forwarders, and corporate offices near Sydney Airport. Reliable 24/7 service.',
  keywords: 'office cleaning mascot, commercial cleaning mascot, airport business park cleaning, logistics cleaning services, freight forwarder cleaning, industrial cleaning mascot',
  openGraph: {
    title: 'Office Cleaning Mascot NSW | Logistics & Airport Cleaning',
    description: 'Expert cleaning for Mascot\'s logistics and corporate sector. 24/7 availability for airport-adjacent businesses.',
    url: 'https://www.procleancorp.com.au/office-cleaning-mascot',
    type: 'website',
    images: [
      {
        url: '/images/services/office.webp',
        alt: 'Office cleaning Mascot NSW',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.procleancorp.com.au/office-cleaning-mascot',
  },
};

export default function MascotCleaningPage() {
  const serviceInfo = {
    title: "Office Cleaning Mascot NSW",
    description: "Mascot is the bustling gateway to Sydney, home to major logistics firms, freight forwarders, and corporate headquarters. Pro Clean Corp understands the fast-paced nature of businesses near Sydney Airport. We provide reliable office and commercial cleaning services that keep your operations running smoothly. Whether you're a 24-hour logistics hub or a corporate office suite, our team ensures a clean, professional environment for your staff and clients.",
    benefits: [
      "Airport Precinct Specialists: Familiar with the security and access needs of air freight businesses.",
      "24/7 Availability: Cleaning schedules that work around round-the-clock logistics.",
      "Dual Service: Seamlessly cleaning both office suites and attached warehouse floors.",
      "High Hygiene: Sanitizing high-touch points in busy dispatch offices.",
      "Consumables Supply: Managing toilet paper and soap so you never run out.",
      "Consistent Team: Regular cleaners who know your site protocols."
    ],
    process: [
      "Consultation: Assessing potential security requirements and cleaning scope.",
      "Plan: Developing a schedule that minimizes disruption to shift work.",
      "Clean: Delivering thorough cleaning from reception to the break room.",
      "Monitor: Regular supervisor visits to ensure compliance."
    ],
    whyChooseUs: [
      "Local Focus: We service many clients in Mascot, Botany, and Alexandria.",
      "Flexible: We adapt to your shift patterns.",
      "Secure: Police-checked staff for sensitive freight environments.",
      "Comprehensive: One invoice for office and warehouse cleaning.",
      "Insured: Fully covered for industrial and commercial zones."
    ],
    serviceAreas: [
      "Alexandria", "Botany", "Rosebery", "Zetland",
      "Waterloo", "Redfern", "Kingsford", "Pagewood"
    ],
    faqs: [
      {
        question: "Do you clean 24-hour logistics offices?",
        answer: "Yes, we specialize in cleaning facilities that operate 24/7, scheduling our work during quieter shift changeovers or low-traffic periods."
      },
      {
        question: "Can you clean warehouse floors?",
        answer: "Absolutely. We provide machine scrubbing for concrete warehouse floors alongside our office cleaning services."
      },
      {
        question: "Are your staff security checked?",
        answer: "Yes, all our cleaners undergo rigorous police checks, essential for businesses handling secure freight or sensitive data."
      },
      {
        question: "Do you provide carpet cleaning?",
        answer: "Yes, we offer professional carpet steam cleaning to remove heavy traffic stains common in busy logistics offices."
      },
      {
        question: "Do you service strata complexes in Mascot?",
        answer: "Yes, we provide common area cleaning for the many new residential and mixed-use strata developments in Mascot."
      }
    ],
    images: [
      { src: "/images/services/office.webp", alt: "Logistics office cleaning Mascot" },
      { src: "/images/services/commercial.webp", alt: "Airport business park cleaning Mascot" }
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Office Cleaning Mascot"
        serviceDescription="Professional cleaning services for logistics, office, and commercial businesses in Mascot NSW."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-mascot"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={["Warehouse Cleaning", "Strata Cleaning", "Carpet Cleaning", "Window Cleaning"]}
        faqs={serviceInfo.faqs}
      />
      <ServiceSEOContent {...serviceInfo} />
    </>
  );
}
