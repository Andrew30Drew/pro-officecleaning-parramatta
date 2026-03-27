import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Pennant Hills NSW | Pro Clean Corp',
    description: 'Commercial cleaning in Pennant Hills NSW. Trusted by Upper North Shore village retailers, medical practices & offices. Police-checked, $20M insured. Free quote.',
    keywords: 'commercial cleaning Pennant Hills, office cleaning Pennant Hills, business cleaning Pennant Hills NSW',
    openGraph: {
        title: 'Commercial Cleaning Pennant Hills NSW | Pro Clean Corp',
        description: 'Commercial cleaning in Pennant Hills NSW. Trusted by Upper North Shore village retailers, medical practices & offices. Police-checked, $20M insured. Free quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-pennant-hills',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Pennant Hills NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-pennant-hills' },
};

export default function PennantHillsCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Pennant Hills NSW",
        description: "Pennant Hills is a charming Upper North Shore village with a compact retail and professional services precinct that serves a well-established local community. Pro Clean Corp provides dependable commercial cleaning services for Pennant Hills' small businesses, medical practices, dental clinics and office suites — delivering the consistent, high-quality results that the suburb's discerning business community expects. Our team is punctual, thorough and works discreetly around your business operations.",
        benefits: [
            "Village retail strip and shopfront cleaning",
            "Medical, dental and allied health hygiene standards",
            "Professional office suite and consulting room cleaning",
            "Childcare and community facility maintenance",
            "Flexible early-morning and after-hours scheduling",
            "Eco-friendly products safe for families and patients"
        ],
        process: [
            "Free Pennant Hills site assessment",
            "Custom cleaning plan for your premises type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Pennant Hills and Upper North Shore",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Cherrybrook", "Thornleigh", "Waitara", "Hornsby", "Beecroft", "Carlingford", "Baulkham Hills", "West Pennant Hills"],
        faqs: [
            {
                question: "What commercial properties do you clean in Pennant Hills?",
                answer: "We clean retail shops, medical practices, dental clinics, professional offices, childcare centres, real estate agencies and strata buildings throughout Pennant Hills and the surrounding Upper North Shore area."
            },
            {
                question: "How much does commercial cleaning cost in Pennant Hills?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Pennant Hills facility."
            },
            {
                question: "Do you offer after-hours cleaning in Pennant Hills?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available to suit Pennant Hills' retail and professional businesses."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Can you clean a medical or dental practice in Pennant Hills to clinical standards?",
                answer: "Yes, we provide specialised medical and dental practice cleaning in Pennant Hills, using hospital-grade disinfectants and following infection-control protocols to meet the hygiene standards required by healthcare regulators."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Pennant Hills NSW" },
            { src: "/images/services/office.webp", alt: "Office cleaning Pennant Hills" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Pennant Hills NSW"
                serviceDescription="Commercial cleaning in Pennant Hills NSW. Trusted by Upper North Shore village retailers, medical practices & offices. Police-checked, $20M insured."
                serviceUrl="/commercial-cleaning-pennant-hills"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
