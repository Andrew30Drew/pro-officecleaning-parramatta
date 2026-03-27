import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Prestons NSW | Pro Clean Corp',
    description: 'Commercial & industrial cleaning in Prestons NSW. Specialists in SW Sydney logistics, warehouses & large-scale facilities. $20M insured. Free quote today.',
    keywords: 'commercial cleaning Prestons, industrial cleaning Prestons, business cleaning Prestons NSW',
    openGraph: {
        title: 'Commercial Cleaning Prestons NSW | Pro Clean Corp',
        description: 'Commercial & industrial cleaning in Prestons NSW. Specialists in SW Sydney logistics, warehouses & large-scale facilities. $20M insured. Free quote today.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-prestons',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Prestons NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-prestons' },
};

export default function PrestonssCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Prestons NSW",
        description: "Prestons is one of South Western Sydney's most significant logistics and industrial precincts, housing major distribution centres, transport depots and large-scale commercial warehouses that support Sydney's supply chain. Pro Clean Corp delivers specialist commercial and industrial cleaning services designed for Prestons' demanding operational environments — including large warehouse floor cleaning, amenities maintenance, loading dock cleaning and comprehensive office fitout services. We are structured to handle high-volume, large-footprint facilities with the reliability that major logistics operators require.",
        benefits: [
            "Large-scale distribution centre and warehouse cleaning",
            "Transport depot and loading dock maintenance",
            "Site office, amenities and canteen hygiene management",
            "Industrial floor scrubbing and high-pressure cleaning",
            "Scheduled cleaning to fit 24/7 logistics operations",
            "WHS-compliant safety and hygiene standards"
        ],
        process: [
            "Free Prestons site assessment",
            "Custom cleaning plan for your logistics facility",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Prestons and South Western Sydney",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Liverpool", "Casula", "Moorebank", "Heckenberg", "Green Valley", "Cartwright", "Miller", "Edmondson Park"],
        faqs: [
            {
                question: "What commercial properties do you clean in Prestons?",
                answer: "We clean distribution centres, warehouses, transport depots, cold storage facilities, manufacturing plants, logistics offices and site amenities throughout the Prestons industrial and logistics precinct."
            },
            {
                question: "How much does commercial cleaning cost in Prestons?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Prestons facility."
            },
            {
                question: "Do you offer after-hours cleaning in Prestons?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available — including between-shift and overnight cleaning for Prestons' 24/7 logistics operations."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Can you manage cleaning across a very large warehouse or distribution centre in Prestons?",
                answer: "Yes, we have the team size and equipment to manage large-footprint facilities in Prestons, deploying multiple staff and industrial cleaning equipment to cover extensive floor areas efficiently within agreed timeframes."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Prestons NSW" },
            { src: "/images/services/office.webp", alt: "Warehouse cleaning Prestons" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Prestons NSW"
                serviceDescription="Commercial & industrial cleaning in Prestons NSW. Specialists in SW Sydney logistics, warehouses & large-scale facilities. $20M insured."
                serviceUrl="/commercial-cleaning-prestons"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
