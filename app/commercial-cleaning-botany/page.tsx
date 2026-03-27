import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Botany NSW | Pro Clean Corp',
    description: 'Specialist commercial cleaning in Botany NSW near Sydney Airport. Warehouses, logistics facilities & offices serviced by security-cleared cleaners. Free quotes.',
    keywords: 'commercial cleaning Botany, office cleaning Botany, business cleaning Botany NSW, cleaners Botany',
    openGraph: { title: 'Commercial Cleaning Botany NSW | Pro Clean Corp', description: 'Specialist commercial cleaning in Botany NSW near Sydney Airport. Warehouses, logistics facilities & offices serviced by security-cleared cleaners. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-botany', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Botany NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-botany' },
};

export default function BotanyCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Botany NSW",
        description: "Botany is Sydney's industrial and logistics powerhouse, anchored by Port Botany and the adjacent container terminals, freight forwarders, cold stores, and manufacturing plants that keep the city's supply chain moving. Pro Clean Corp delivers specialist commercial cleaning across Botany's industrial precinct, with experienced teams who understand the unique demands of port-adjacent businesses, airport-proximity operations, and high-security environments. We also service the offices, medical centres, and retail businesses that serve Botany's residential and commercial communities.",
        benefits: [
            "Port Botany logistics and warehouse cleaning using industrial-grade scrubbers for large concrete and epoxy floors",
            "Security-cleared staff capable of site-specific inductions for Botany's bonded stores and restricted freight areas",
            "Airport-proximity operations experience, with teams familiar with the 24-hour operational rhythms near Sydney Airport",
            "Office and amenities cleaning for Botany's logistics workforce, including driver reception areas, washrooms, and break rooms",
            "Industrial dust suppression and surface decontamination to maintain safe, clean working environments in Botany's manufacturing facilities",
            "Round-the-clock scheduling flexibility to align with Botany's 24/7 port and logistics operations"
        ],
        process: ["Free Botany site assessment", "Custom cleaning plan for your Botany business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Botany and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Mascot", "Rosebery", "Alexandria", "Banksmeadow", "Pagewood", "Matraville", "Randwick", "Zetland"],
        faqs: [
            { question: "What commercial properties do you clean in Botany?", answer: "We clean warehouses, freight forwarding depots, cold stores, manufacturing facilities, container yard offices, corporate offices, retail stores, and medical centres throughout Botany and the Port Botany precinct. Our team is experienced across the full spectrum of Botany's diverse industrial and commercial landscape." },
            { question: "How much does commercial cleaning cost in Botany?", answer: "Rates in Botany typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Botany?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Botany business." },
            { question: "Are your Botany cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Can your Botany cleaners access secure port and bonded store areas?", answer: "Yes. Our Botany staff are police-cleared and can complete site-specific security inductions for MSIC-aware environments, bonded customs areas, and other restricted zones within the Port Botany precinct. We treat client security requirements as a standard part of our onboarding for every Botany industrial client." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Botany NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Botany" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Botany NSW" serviceDescription="Specialist commercial cleaning in Botany NSW near Sydney Airport. Warehouses, logistics facilities & offices serviced by security-cleared cleaners. Free quotes." serviceUrl="/commercial-cleaning-botany" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
