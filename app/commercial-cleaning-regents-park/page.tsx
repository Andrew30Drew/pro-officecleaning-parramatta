import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Regents Park NSW | Pro Clean Corp',
    description: 'Commercial & industrial cleaning in Regents Park NSW. Trusted by SW Sydney industrial businesses, warehouses & commercial sites. $20M insured. Free quote today.',
    keywords: 'commercial cleaning Regents Park, industrial cleaning Regents Park, business cleaning Regents Park NSW',
    openGraph: {
        title: 'Commercial Cleaning Regents Park NSW | Pro Clean Corp',
        description: 'Commercial & industrial cleaning in Regents Park NSW. Trusted by SW Sydney industrial businesses, warehouses & commercial sites. $20M insured. Free quote today.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-regents-park',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Regents Park NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-regents-park' },
};

export default function RegentsParkCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Regents Park NSW",
        description: "Regents Park sits at the industrial heart of South Western Sydney, bordered by Bankstown, Auburn and Berala with strong access to major freight routes. The suburb hosts a busy mix of light industrial businesses, warehouses, manufacturing units and commercial operations that rely on efficient, professional cleaning to maintain safe and hygienic workplaces. Pro Clean Corp provides dependable commercial and industrial cleaning services tailored to Regents Park's operational environment, working flexibly around production schedules and business hours.",
        benefits: [
            "Light industrial and commercial warehouse cleaning",
            "Manufacturing facility and workshop floor maintenance",
            "Site office and administration area cleaning",
            "Amenities, bathroom and lunchroom hygiene management",
            "Flexible scheduling around industrial shift patterns",
            "WHS-compliant hygiene and safety standards"
        ],
        process: [
            "Free Regents Park site assessment",
            "Custom cleaning plan for your facility type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Regents Park and South Western Sydney",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Bankstown", "Berala", "Auburn", "Sefton", "Yagoona", "Chullora", "Condell Park", "Greenacre"],
        faqs: [
            {
                question: "What commercial properties do you clean in Regents Park?",
                answer: "We clean light industrial units, commercial warehouses, manufacturing workshops, transport yards, site offices, amenities blocks and mixed commercial-industrial buildings throughout Regents Park and the Bankstown LGA."
            },
            {
                question: "How much does commercial cleaning cost in Regents Park?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Regents Park facility."
            },
            {
                question: "Do you offer after-hours cleaning in Regents Park?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available — including between-shift cleaning for Regents Park's industrial and manufacturing operators."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Can you provide regular contract cleaning for an industrial site in Regents Park?",
                answer: "Yes, we offer ongoing cleaning contracts for Regents Park industrial clients on daily, weekly or customised schedules, with reliable staff and a consistent account manager to ensure your facility stays clean and compliant."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Regents Park NSW" },
            { src: "/images/services/office.webp", alt: "Industrial cleaning Regents Park" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Regents Park NSW"
                serviceDescription="Commercial & industrial cleaning in Regents Park NSW. Trusted by SW Sydney industrial businesses, warehouses & commercial sites. $20M insured."
                serviceUrl="/commercial-cleaning-regents-park"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
