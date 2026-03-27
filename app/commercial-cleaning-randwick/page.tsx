import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Randwick NSW | Pro Clean Corp',
    description: 'Commercial cleaning in Randwick NSW. Trusted by Eastern Suburbs hospital precinct, UNSW businesses & local offices. Police-checked, $20M insured. Free quote today.',
    keywords: 'commercial cleaning Randwick, office cleaning Randwick, business cleaning Randwick NSW',
    openGraph: {
        title: 'Commercial Cleaning Randwick NSW | Pro Clean Corp',
        description: 'Commercial cleaning in Randwick NSW. Trusted by Eastern Suburbs hospital precinct, UNSW businesses & local offices. Police-checked, $20M insured. Free quote today.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-randwick',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Randwick NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-randwick' },
};

export default function RandwickCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Randwick NSW",
        description: "Randwick is the Eastern Suburbs' foremost medical and education precinct, anchored by the Prince of Wales Hospital campus, the Royal Hospital for Women, Sydney Children's Hospital and the University of New South Wales (UNSW). Pro Clean Corp specialises in the exacting hygiene standards required by Randwick's healthcare providers, university facilities and surrounding medical offices — as well as delivering top-quality cleaning for the suburb's busy retail businesses, cafes and professional services on Belmore Road and beyond.",
        benefits: [
            "Hospital-grade hygiene for medical and clinical facilities",
            "UNSW campus and university-adjacent business cleaning",
            "Specialist healthcare office and consulting room protocols",
            "Retail and hospitality cleaning on Belmore Road",
            "Infection-control compliant products and procedures",
            "Flexible scheduling around healthcare and university operations"
        ],
        process: [
            "Free Randwick site assessment",
            "Custom cleaning plan for your facility type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Randwick and Eastern Suburbs",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Kensington", "Coogee", "Maroubra", "Kingsford", "Clovelly", "Bronte", "Waverley", "Botany"],
        faqs: [
            {
                question: "What commercial properties do you clean in Randwick?",
                answer: "We clean medical centres, specialist clinics, allied health practices, dental surgeries, university-adjacent businesses, retail shops, cafes, professional offices and strata buildings throughout Randwick and the Prince of Wales Hospital precinct."
            },
            {
                question: "How much does commercial cleaning cost in Randwick?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Randwick facility."
            },
            {
                question: "Do you offer after-hours cleaning in Randwick?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available — suited to Randwick's healthcare facilities and busy retail precincts."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Can you clean medical facilities near the Prince of Wales Hospital to clinical hygiene standards?",
                answer: "Yes, we are experienced in cleaning medical and allied health facilities to the infection-control and clinical hygiene standards required by healthcare providers in the Randwick hospital precinct, using hospital-grade disinfectants and documented cleaning procedures."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Randwick NSW" },
            { src: "/images/services/office.webp", alt: "Medical office cleaning Randwick" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Randwick NSW"
                serviceDescription="Commercial cleaning in Randwick NSW. Trusted by Eastern Suburbs hospital precinct, UNSW businesses & local offices. Police-checked, $20M insured."
                serviceUrl="/commercial-cleaning-randwick"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
