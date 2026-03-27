import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Cremorne NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Cremorne NSW. Trusted by lower north shore retailers, offices & boutique businesses. Police-checked staff, $20M insured. Free quote.',
    keywords: 'commercial cleaning Cremorne, office cleaning Cremorne, business cleaning Cremorne NSW',
    openGraph: {
        title: 'Commercial Cleaning Cremorne NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning in Cremorne NSW. Trusted by lower north shore retailers, offices & boutique businesses. Police-checked staff, $20M insured. Free quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-cremorne',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Cremorne NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-cremorne' },
};

export default function CremorneCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Cremorne NSW",
        description: "Cremorne's lower north shore village strip along Military Road is home to boutique retailers, cafes, medical practices and professional offices that demand a consistently high standard of presentation. Pro Clean Corp delivers dependable commercial cleaning services built around Cremorne's busy foot-traffic environment and discerning clientele. From early-morning retail floor cleans to after-hours office sanitisation, our uniformed team keeps your Cremorne premises spotless and guest-ready every single day.",
        benefits: [
            "Specialist retail and shopfront cleaning along Military Road",
            "Medical practice and professional office hygiene protocols",
            "High foot-traffic floor care and entrance maintenance",
            "Flexible after-hours and early-morning scheduling",
            "Eco-friendly products safe for staff and customers",
            "Consistent, detail-focused results every visit"
        ],
        process: [
            "Free Cremorne site assessment",
            "Custom cleaning plan for your premises type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Cremorne and lower north shore",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Neutral Bay", "Mosman", "Cammeray", "North Sydney", "Kirribilli", "Milsons Point", "Crows Nest", "St Leonards"],
        faqs: [
            {
                question: "What commercial properties do you clean in Cremorne?",
                answer: "We clean retail shops, cafes, medical practices, professional offices, real estate agencies and strata buildings throughout Cremorne and the Military Road corridor."
            },
            {
                question: "How much does commercial cleaning cost in Cremorne?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Cremorne facility."
            },
            {
                question: "Do you offer after-hours cleaning in Cremorne?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available to suit Cremorne's busy retail and office precinct."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Can you service multiple Cremorne tenancies in the same building?",
                answer: "Absolutely. We regularly manage multi-tenancy cleaning schedules for Cremorne's mixed-use buildings, coordinating access and timing with building managers or strata committees."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Cremorne NSW" },
            { src: "/images/services/office.webp", alt: "Office cleaning Cremorne" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Cremorne NSW"
                serviceDescription="Professional commercial cleaning in Cremorne NSW. Trusted by lower north shore retailers, offices & boutique businesses. Police-checked staff, $20M insured."
                serviceUrl="/commercial-cleaning-cremorne"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
