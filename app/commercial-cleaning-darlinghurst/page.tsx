import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Darlinghurst NSW | Pro Clean Corp',
    description: 'Commercial cleaning in Darlinghurst NSW. Trusted by inner-city cafes, creative studios & medical practices. Police-checked staff, $20M insured. Free quote today.',
    keywords: 'commercial cleaning Darlinghurst, office cleaning Darlinghurst, business cleaning Darlinghurst NSW',
    openGraph: {
        title: 'Commercial Cleaning Darlinghurst NSW | Pro Clean Corp',
        description: 'Commercial cleaning in Darlinghurst NSW. Trusted by inner-city cafes, creative studios & medical practices. Police-checked staff, $20M insured. Free quote today.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-darlinghurst',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Darlinghurst NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-darlinghurst' },
};

export default function DarlinghurstCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Darlinghurst NSW",
        description: "Darlinghurst is one of Sydney's most dynamic inner-city suburbs, mixing award-winning cafes, creative agencies, medical practices and vibrant nightlife venues on Oxford Street and Victoria Street. Pro Clean Corp specialises in flexible commercial cleaning solutions that work around Darlinghurst's 24-hour energy — from pre-open cafe cleans and daytime office services to late-night hospitality turnovers. We help Darlinghurst businesses maintain an immaculate, professional environment that matches the suburb's creative standards.",
        benefits: [
            "Specialist cafe, restaurant and hospitality venue cleaning",
            "Creative studio and agency office maintenance",
            "Medical and allied health practice hygiene protocols",
            "Oxford Street retail shopfront and floor care",
            "Late-night and early-morning scheduling available",
            "Discreet, professional staff suited to creative environments"
        ],
        process: [
            "Free Darlinghurst site assessment",
            "Custom cleaning plan for your premises type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Darlinghurst and inner Sydney",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Surry Hills", "Paddington", "Potts Point", "Kings Cross", "Woolloomooloo", "Newtown", "Redfern", "Glebe"],
        faqs: [
            {
                question: "What commercial properties do you clean in Darlinghurst?",
                answer: "We clean cafes, restaurants, bars, creative agencies, medical practices, retail boutiques, co-working spaces and mixed-use commercial buildings throughout Darlinghurst and the Oxford Street precinct."
            },
            {
                question: "How much does commercial cleaning cost in Darlinghurst?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Darlinghurst facility."
            },
            {
                question: "Do you offer after-hours cleaning in Darlinghurst?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available — ideal for Darlinghurst's busy hospitality and nightlife venues."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Do you clean medical and allied health practices in Darlinghurst?",
                answer: "Yes, we provide specialised medical-grade cleaning for GP clinics, dental practices, physiotherapy studios and allied health premises in Darlinghurst, following strict hygiene and infection-control protocols."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Darlinghurst NSW" },
            { src: "/images/services/office.webp", alt: "Office cleaning Darlinghurst" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Darlinghurst NSW"
                serviceDescription="Commercial cleaning in Darlinghurst NSW. Trusted by inner-city cafes, creative studios & medical practices. Police-checked staff, $20M insured."
                serviceUrl="/commercial-cleaning-darlinghurst"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
