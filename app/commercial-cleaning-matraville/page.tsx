import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Matraville NSW | Industrial & Light Commercial Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Matraville NSW. Light industrial, defence precinct & retail in South East Sydney. Fully insured, police-checked. Call today!',
    keywords: 'commercial cleaning Matraville, industrial cleaning Matraville, office cleaning Matraville NSW, defence precinct cleaning Matraville, business cleaning South East Sydney',
    openGraph: {
        title: 'Commercial Cleaning Matraville NSW | Pro Clean Corp',
        description: 'Expert commercial and industrial cleaning for Matraville light industrial estates, defence-adjacent businesses, and retail in South East Sydney. Trusted, insured.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-matraville',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Matraville NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-matraville' },
};

export default function MatravilleCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Matraville NSW",
        description: "Matraville occupies a unique position in South East Sydney as a suburb that combines light-industrial activity, defence precinct operations, trade businesses, and a local retail strip in a compact but productive commercial zone. The presence of Randwick Barracks and defence-related facilities means that security awareness and professional conduct are non-negotiable requirements for any commercial cleaning provider operating in Matraville. Pro Clean Corp brings exactly this level of professionalism to our Matraville cleaning operations — all staff are police-checked, carry formal identification, and are trained in the access protocols required for secure and sensitive commercial environments. Beyond defence-adjacent facilities, we service the range of warehouses, storage businesses, wholesale operations, and light-industrial units that populate the Matraville and Banksmeadow industrial corridors, as well as the everyday commercial businesses serving the local community.",
        benefits: [
            "Security-cleared, police-checked staff suitable for defence-adjacent and sensitive facilities",
            "Light-industrial and warehouse cleaning for the Matraville and Banksmeadow industrial corridors",
            "Trade and wholesale business cleaning including storage areas, showrooms, and offices",
            "Local retail and commercial strip cleaning maintaining community-facing presentation",
            "Documented cleaning records supporting compliance for regulated industry clients",
            "Amenities and common area cleaning for multi-tenant industrial and commercial buildings"
        ],
        process: [
            "Free Matraville site assessment including access, security, and compliance review",
            "Custom cleaning plan tailored to your Matraville business type, security requirements, and schedule",
            "Professional cleaning by police-checked, uniformed technicians experienced in sensitive commercial sites",
            "Quality inspection, documented sign-off, and responsive account management"
        ],
        whyChooseUs: [
            "15+ years serving Matraville and South East Sydney businesses",
            "Fully insured with $20M public liability coverage",
            "Police-checked, uniformed, and professionally trained cleaning staff",
            "Security-aware procedures for defence-adjacent and sensitive commercial environments",
            "Flexible scheduling including early morning, evening, and weekend cleans",
            "100% satisfaction guarantee on every clean"
        ],
        serviceAreas: ["Maroubra", "Pagewood", "Kingsford", "Botany", "Eastgardens", "Hillsdale", "La Perouse", "Banksmeadow"],
        faqs: [
            {
                question: "Are your Matraville cleaning staff police-checked and suitable for secure facilities?",
                answer: "Yes. All Pro Clean Corp staff are police-checked and carry formal identification. We are experienced in operating within security-sensitive environments adjacent to defence facilities in Matraville, and we follow all access protocols and security requirements specified by individual clients."
            },
            {
                question: "Do you clean light-industrial and warehouse facilities in the Matraville area?",
                answer: "Absolutely. Industrial and warehouse cleaning is a primary service in the Matraville and Banksmeadow corridor. We use industrial scrubbers, high-reach dusting equipment, and appropriate products for concrete floors, metal shelving, and the varied surfaces common in light-industrial environments."
            },
            {
                question: "Can you provide cleaning for wholesale and trade businesses in Matraville?",
                answer: "Yes. We service a range of wholesale, distribution, and trade businesses throughout Matraville, providing cleaning for showroom and customer-facing areas, stock storage and warehouse zones, administration offices, and staff amenities on schedules that align with dispatch and delivery rosters."
            },
            {
                question: "Do you provide documented cleaning records for compliance purposes in Matraville?",
                answer: "Yes. We provide detailed cleaning logs and sign-off sheets for all scheduled Matraville cleans. These records are particularly important for businesses operating in regulated industries, defence-adjacent environments, or facilities where cleaning compliance supports accreditation or insurance requirements."
            },
            {
                question: "Can you clean commercial businesses serving the local Matraville community?",
                answer: "Definitely. Beyond industrial clients, we also service the everyday retail shops, cafes, medical practices, and community businesses throughout Matraville. We offer the same high standards, police-checked staff, and flexible scheduling regardless of the size or type of your Matraville business."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Matraville NSW" },
            { src: "/images/services/office.webp", alt: "Industrial and office cleaning Matraville South East Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Matraville NSW"
                serviceDescription="Professional commercial and industrial cleaning for light industrial estates, defence-adjacent businesses, and retail in Matraville and South East Sydney."
                serviceUrl="/commercial-cleaning-matraville"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
