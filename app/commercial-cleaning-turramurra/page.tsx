import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Turramurra NSW | Pro Clean Corp',
    description: 'Commercial cleaning in Turramurra NSW. Trusted by Upper North Shore village strip retailers, offices & professional businesses. $20M insured. Free quote today.',
    keywords: 'commercial cleaning Turramurra, office cleaning Turramurra, business cleaning Turramurra NSW',
    openGraph: {
        title: 'Commercial Cleaning Turramurra NSW | Pro Clean Corp',
        description: 'Commercial cleaning in Turramurra NSW. Trusted by Upper North Shore village strip retailers, offices & professional businesses. $20M insured. Free quote today.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-turramurra',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Turramurra NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-turramurra' },
};

export default function TurramurraCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Turramurra NSW",
        description: "Turramurra's pleasant Upper North Shore village strip along Pacific Highway and Rohini Street offers a well-curated mix of independent retailers, cafes, professional offices, medical practices and real estate agencies catering to Ku-ring-gai's established residential community. Pro Clean Corp provides reliable, high-quality commercial cleaning services for Turramurra businesses of all sizes, from single-tenancy retail shops to multi-suite professional buildings, ensuring every premises is clean, fresh and ready to welcome customers each day.",
        benefits: [
            "Village retail strip and shopfront cleaning",
            "Independent cafe and restaurant hygiene maintenance",
            "Medical, dental and allied health cleaning protocols",
            "Professional office and multi-suite building cleaning",
            "Real estate and financial services office maintenance",
            "Flexible early-morning and after-hours scheduling"
        ],
        process: [
            "Free Turramurra site assessment",
            "Custom cleaning plan for your premises type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Turramurra and Upper North Shore",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Wahroonga", "Gordon", "Pymble", "St Ives", "Killara", "Warrawee", "South Turramurra", "Lindfield"],
        faqs: [
            {
                question: "What commercial properties do you clean in Turramurra?",
                answer: "We clean retail shops, cafes, medical practices, dental clinics, professional offices, real estate agencies, financial services businesses and strata buildings throughout Turramurra and the surrounding Ku-ring-gai area."
            },
            {
                question: "How much does commercial cleaning cost in Turramurra?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Turramurra facility."
            },
            {
                question: "Do you offer after-hours cleaning in Turramurra?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available to suit Turramurra's retail and professional businesses."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Do you offer regular cleaning contracts for Turramurra businesses?",
                answer: "Yes, we offer flexible regular cleaning contracts for Turramurra businesses on daily, weekly or fortnightly schedules, providing consistent, accountable service with a dedicated point of contact for your business."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Turramurra NSW" },
            { src: "/images/services/office.webp", alt: "Office cleaning Turramurra" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Turramurra NSW"
                serviceDescription="Commercial cleaning in Turramurra NSW. Trusted by Upper North Shore village strip retailers, offices & professional businesses. $20M insured."
                serviceUrl="/commercial-cleaning-turramurra"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
