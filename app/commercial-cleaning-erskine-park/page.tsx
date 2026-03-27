import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Erskine Park NSW | Pro Clean Corp',
    description: 'Industrial & commercial cleaning in Erskine Park NSW. Specialists in Western Sydney logistics, warehouses & industrial facilities. $20M insured. Free quote today.',
    keywords: 'commercial cleaning Erskine Park, industrial cleaning Erskine Park, business cleaning Erskine Park NSW',
    openGraph: {
        title: 'Commercial Cleaning Erskine Park NSW | Pro Clean Corp',
        description: 'Industrial & commercial cleaning in Erskine Park NSW. Specialists in Western Sydney logistics, warehouses & industrial facilities. $20M insured. Free quote today.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-erskine-park',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Erskine Park NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-erskine-park' },
};

export default function ErskineParkCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Erskine Park NSW",
        description: "Erskine Park is a key Western Sydney industrial and logistics precinct, home to large-scale distribution centres, manufacturing facilities and commercial warehouses serving Greater Sydney. Pro Clean Corp delivers specialist industrial and commercial cleaning services designed for Erskine Park's demanding operational environments, including warehouse floor cleaning, amenities maintenance, office fitout cleaning and end-of-lease industrial cleans. We work around shift patterns and operational hours to keep your Erskine Park facility safe, compliant and clean.",
        benefits: [
            "Large-scale warehouse and distribution centre cleaning",
            "Manufacturing facility and factory floor maintenance",
            "Site amenities and lunchroom hygiene management",
            "Industrial office and administration area cleaning",
            "Scheduled and on-call cleaning to suit shift rosters",
            "Compliant with WHS industrial hygiene standards"
        ],
        process: [
            "Free Erskine Park site assessment",
            "Custom cleaning plan for your industrial facility",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Erskine Park and Western Sydney",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["St Clair", "Penrith", "St Marys", "Colyton", "Kemps Creek", "Minchinbury", "Blacktown", "Ropes Crossing"],
        faqs: [
            {
                question: "What commercial properties do you clean in Erskine Park?",
                answer: "We clean warehouses, distribution centres, manufacturing facilities, logistics depots, industrial offices, site amenities and commercial properties throughout the Erskine Park industrial estate."
            },
            {
                question: "How much does commercial cleaning cost in Erskine Park?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Erskine Park facility."
            },
            {
                question: "Do you offer after-hours cleaning in Erskine Park?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available — including cleaning between shifts for 24/7 operational facilities."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Can you handle end-of-lease industrial cleaning in Erskine Park?",
                answer: "Yes, we provide comprehensive end-of-lease industrial cleaning for Erskine Park facilities, including deep cleaning of floors, amenities, loading docks, offices and all common areas to meet lease handback requirements."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Erskine Park NSW" },
            { src: "/images/services/office.webp", alt: "Industrial office cleaning Erskine Park" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Erskine Park NSW"
                serviceDescription="Industrial & commercial cleaning in Erskine Park NSW. Specialists in Western Sydney logistics, warehouses & industrial facilities. $20M insured."
                serviceUrl="/commercial-cleaning-erskine-park"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
