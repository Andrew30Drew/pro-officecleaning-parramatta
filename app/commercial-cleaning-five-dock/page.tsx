import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Five Dock NSW | Pro Clean Corp',
    description: 'Commercial cleaning in Five Dock NSW. Trusted by Inner West Great North Road retailers, offices & local businesses. Police-checked, $20M insured. Free quote today.',
    keywords: 'commercial cleaning Five Dock, office cleaning Five Dock, business cleaning Five Dock NSW',
    openGraph: {
        title: 'Commercial Cleaning Five Dock NSW | Pro Clean Corp',
        description: 'Commercial cleaning in Five Dock NSW. Trusted by Inner West Great North Road retailers, offices & local businesses. Police-checked, $20M insured. Free quote today.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-five-dock',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Five Dock NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-five-dock' },
};

export default function FiveDockCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Five Dock NSW",
        description: "Five Dock's bustling Great North Road retail strip and surrounding Inner West streets support a thriving mix of independent retailers, cafes, medical practices and professional offices serving a loyal local community. Pro Clean Corp provides reliable, thorough commercial cleaning services tailored to Five Dock's diverse business mix — from small retail shopfronts to multi-suite professional buildings. Our team is known across the Inner West for consistent quality, punctuality and attention to detail.",
        benefits: [
            "Great North Road retail strip and shopfront cleaning",
            "Independent cafe and restaurant hygiene maintenance",
            "Medical and dental practice cleaning protocols",
            "Professional office and multi-suite building cleaning",
            "Flexible after-hours and early-morning scheduling",
            "Eco-friendly products safe for staff and customers"
        ],
        process: [
            "Free Five Dock site assessment",
            "Custom cleaning plan for your premises type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Five Dock and the Inner West",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Drummoyne", "Concord", "Abbotsford", "Cabarita", "Rhodes", "Canada Bay", "Burwood", "Strathfield"],
        faqs: [
            {
                question: "What commercial properties do you clean in Five Dock?",
                answer: "We clean retail shops, cafes, medical practices, dental clinics, professional offices, real estate agencies and strata buildings throughout Five Dock and the Canada Bay LGA."
            },
            {
                question: "How much does commercial cleaning cost in Five Dock?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Five Dock facility."
            },
            {
                question: "Do you offer after-hours cleaning in Five Dock?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available to suit Five Dock's busy retail and professional precinct."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Do you offer regular scheduled cleaning contracts for Five Dock businesses?",
                answer: "Yes, we offer flexible cleaning contracts for Five Dock businesses on daily, weekly, fortnightly or monthly schedules, giving you consistent service and a dedicated point of contact."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Five Dock NSW" },
            { src: "/images/services/office.webp", alt: "Office cleaning Five Dock" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Five Dock NSW"
                serviceDescription="Commercial cleaning in Five Dock NSW. Trusted by Inner West Great North Road retailers, offices & local businesses. Police-checked, $20M insured."
                serviceUrl="/commercial-cleaning-five-dock"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
