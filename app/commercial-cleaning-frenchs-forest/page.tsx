import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Frenchs Forest NSW | Pro Clean Corp',
    description: 'Commercial cleaning in Frenchs Forest NSW. Trusted by Northern Beaches medical, business parks & professional offices. Police-checked, $20M insured. Free quote.',
    keywords: 'commercial cleaning Frenchs Forest, office cleaning Frenchs Forest, business cleaning Frenchs Forest NSW',
    openGraph: {
        title: 'Commercial Cleaning Frenchs Forest NSW | Pro Clean Corp',
        description: 'Commercial cleaning in Frenchs Forest NSW. Trusted by Northern Beaches medical, business parks & professional offices. Police-checked, $20M insured. Free quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-frenchs-forest',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Frenchs Forest NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-frenchs-forest' },
};

export default function FrenchsForestCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Frenchs Forest NSW",
        description: "Frenchs Forest is the Northern Beaches' premier commercial and medical hub, home to the new Northern Beaches Hospital precinct, established business parks and a growing cluster of professional and allied health services. Pro Clean Corp delivers specialist commercial cleaning services for Frenchs Forest's medical facilities, corporate office parks and retail businesses — bringing healthcare-grade hygiene standards and professional office cleaning expertise to one of Sydney's fastest-growing commercial precincts.",
        benefits: [
            "Medical facility and hospital-grade hygiene cleaning",
            "Corporate business park and office suite maintenance",
            "Allied health and specialist clinic cleaning protocols",
            "Retail and professional services shopfront care",
            "Flexible scheduling around medical and business operations",
            "Eco-certified products safe for sensitive environments"
        ],
        process: [
            "Free Frenchs Forest site assessment",
            "Custom cleaning plan for your facility type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Frenchs Forest and Northern Beaches",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Brookvale", "Dee Why", "Belrose", "Terrey Hills", "Warringah", "Davidson", "Forestville", "Killarney Heights"],
        faqs: [
            {
                question: "What commercial properties do you clean in Frenchs Forest?",
                answer: "We clean medical centres, specialist clinics, allied health practices, corporate offices, business park tenancies, retail shops and strata buildings throughout Frenchs Forest and the Northern Beaches Hospital precinct."
            },
            {
                question: "How much does commercial cleaning cost in Frenchs Forest?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Frenchs Forest facility."
            },
            {
                question: "Do you offer after-hours cleaning in Frenchs Forest?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available to minimise disruption to medical and business operations in Frenchs Forest."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Are you experienced in cleaning medical facilities near the Northern Beaches Hospital?",
                answer: "Yes, we have extensive experience cleaning medical centres, specialist practices and allied health facilities in the Frenchs Forest precinct, applying infection-control and clinical hygiene standards required by healthcare providers."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Frenchs Forest NSW" },
            { src: "/images/services/office.webp", alt: "Office cleaning Frenchs Forest" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Frenchs Forest NSW"
                serviceDescription="Commercial cleaning in Frenchs Forest NSW. Trusted by Northern Beaches medical, business parks & professional offices. Police-checked, $20M insured."
                serviceUrl="/commercial-cleaning-frenchs-forest"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
