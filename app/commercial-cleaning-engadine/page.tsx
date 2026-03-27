import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Engadine NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Engadine NSW. Serving Sutherland Shire community retail, offices & local businesses. Police-checked, $20M insured. Free quote.',
    keywords: 'commercial cleaning Engadine, office cleaning Engadine, business cleaning Engadine NSW',
    openGraph: {
        title: 'Commercial Cleaning Engadine NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning in Engadine NSW. Serving Sutherland Shire community retail, offices & local businesses. Police-checked, $20M insured. Free quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-engadine',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Engadine NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-engadine' },
};

export default function EngadineCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Engadine NSW",
        description: "Engadine is a close-knit Sutherland Shire community with a thriving local retail strip, professional services and small businesses that rely on a clean and welcoming environment. Pro Clean Corp delivers dependable commercial cleaning services tailored to Engadine's community-oriented businesses, from retail shops and medical centres to office suites and local tradies' premises. Our local team is trusted by Engadine businesses to maintain high hygiene standards without disrupting daily operations.",
        benefits: [
            "Community retail strip and shopfront cleaning",
            "Medical centre and allied health hygiene standards",
            "Office suite and professional services cleaning",
            "Small business and tradespeople premises maintenance",
            "Flexible scheduling around Engadine business hours",
            "Eco-friendly products safe for staff and customers"
        ],
        process: [
            "Free Engadine site assessment",
            "Custom cleaning plan for your premises type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Engadine and Sutherland Shire",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Heathcote", "Sutherland", "Loftus", "Menai", "Bangor", "Kirrawee", "Miranda", "Gymea"],
        faqs: [
            {
                question: "What commercial properties do you clean in Engadine?",
                answer: "We clean retail shops, medical centres, dental practices, professional offices, real estate agencies, childcare centres and small industrial premises throughout Engadine and the local Sutherland Shire area."
            },
            {
                question: "How much does commercial cleaning cost in Engadine?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Engadine facility."
            },
            {
                question: "Do you offer after-hours cleaning in Engadine?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available to suit Engadine's retail and office businesses."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Can you clean childcare centres and community facilities in Engadine?",
                answer: "Yes, we are experienced in cleaning childcare centres and community facilities in the Sutherland Shire, using child-safe, non-toxic products and following strict hygiene standards required by regulatory bodies."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Engadine NSW" },
            { src: "/images/services/office.webp", alt: "Office cleaning Engadine" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Engadine NSW"
                serviceDescription="Professional commercial cleaning in Engadine NSW. Serving Sutherland Shire community retail, offices & local businesses. Police-checked, $20M insured."
                serviceUrl="/commercial-cleaning-engadine"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
