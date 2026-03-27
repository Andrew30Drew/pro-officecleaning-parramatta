import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Girraween NSW | Pro Clean Corp',
    description: 'Commercial & industrial cleaning in Girraween NSW. Specialists in Western Sydney light industrial, warehouses & commercial premises. $20M insured. Free quote today.',
    keywords: 'commercial cleaning Girraween, industrial cleaning Girraween, business cleaning Girraween NSW',
    openGraph: {
        title: 'Commercial Cleaning Girraween NSW | Pro Clean Corp',
        description: 'Commercial & industrial cleaning in Girraween NSW. Specialists in Western Sydney light industrial, warehouses & commercial premises. $20M insured. Free quote today.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-girraween',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Girraween NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-girraween' },
};

export default function GirraweeenCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Girraween NSW",
        description: "Girraween is an established Western Sydney light industrial suburb with a concentrated mix of manufacturing units, trade warehouses, commercial workshops and business offices close to the Parramatta CBD. Pro Clean Corp delivers reliable commercial and industrial cleaning services tailored to Girraween's operational businesses — from regular factory floor maintenance to comprehensive office cleaning and site amenity upkeep. We work flexibly around production and shift schedules to keep your Girraween facility clean, safe and compliant.",
        benefits: [
            "Light industrial and factory floor cleaning",
            "Trade warehouse and commercial unit maintenance",
            "Site office and administration area cleaning",
            "Amenities, lunchroom and bathroom hygiene management",
            "Flexible scheduling around shift patterns and operations",
            "WHS-compliant industrial hygiene standards"
        ],
        process: [
            "Free Girraween site assessment",
            "Custom cleaning plan for your facility type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Girraween and Western Sydney",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Pendle Hill", "Toongabbie", "Wentworthville", "Pemulwuy", "Merrylands", "Greystanes", "Parramatta", "Granville"],
        faqs: [
            {
                question: "What commercial properties do you clean in Girraween?",
                answer: "We clean light industrial units, trade warehouses, manufacturing facilities, commercial workshops, site offices, amenities blocks and mixed commercial-industrial buildings throughout Girraween."
            },
            {
                question: "How much does commercial cleaning cost in Girraween?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Girraween facility."
            },
            {
                question: "Do you offer after-hours cleaning in Girraween?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available — including between-shift cleaning for Girraween's manufacturing and logistics operators."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Can you provide a regular cleaning contract for an industrial site in Girraween?",
                answer: "Yes, we offer flexible contract cleaning arrangements for Girraween's industrial clients on daily, weekly or as-required schedules, with a dedicated account manager to ensure consistent service quality."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Girraween NSW" },
            { src: "/images/services/office.webp", alt: "Industrial office cleaning Girraween" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Girraween NSW"
                serviceDescription="Commercial & industrial cleaning in Girraween NSW. Specialists in Western Sydney light industrial, warehouses & commercial premises. $20M insured."
                serviceUrl="/commercial-cleaning-girraween"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
