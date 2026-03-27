import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Drummoyne NSW | Pro Clean Corp',
    description: 'Commercial cleaning in Drummoyne NSW. Trusted by Inner West waterfront offices, retail businesses & strata complexes. Police-checked staff, $20M insured. Free quote.',
    keywords: 'commercial cleaning Drummoyne, office cleaning Drummoyne, business cleaning Drummoyne NSW',
    openGraph: {
        title: 'Commercial Cleaning Drummoyne NSW | Pro Clean Corp',
        description: 'Commercial cleaning in Drummoyne NSW. Trusted by Inner West waterfront offices, retail businesses & strata complexes. Police-checked staff, $20M insured. Free quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-drummoyne',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Drummoyne NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-drummoyne' },
};

export default function DrummoyneCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Drummoyne NSW",
        description: "Drummoyne's attractive Inner West waterfront location makes it a sought-after address for professional offices, boutique retailers and residential strata complexes along Victoria Road and the Bay Run precinct. Pro Clean Corp provides thorough, reliable commercial cleaning services tailored to Drummoyne's mix of waterfront offices, medical suites and retail tenancies. Our local team understands the presentation standards expected by Drummoyne's professional community and delivers consistent results every visit.",
        benefits: [
            "Waterfront office and professional suite cleaning",
            "Victoria Road retail and shopfront maintenance",
            "Strata building and common area cleaning",
            "Medical suite and allied health hygiene protocols",
            "Flexible after-hours and weekend scheduling",
            "Eco-friendly products safe for all commercial environments"
        ],
        process: [
            "Free Drummoyne site assessment",
            "Custom cleaning plan for your premises type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Drummoyne and the Inner West",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Five Dock", "Concord", "Balmain", "Rozelle", "Abbotsford", "Canada Bay", "Rhodes", "Cabarita"],
        faqs: [
            {
                question: "What commercial properties do you clean in Drummoyne?",
                answer: "We clean professional offices, medical suites, retail shops, cafes, strata common areas and waterfront commercial premises throughout Drummoyne and the Canada Bay LGA."
            },
            {
                question: "How much does commercial cleaning cost in Drummoyne?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Drummoyne facility."
            },
            {
                question: "Do you offer after-hours cleaning in Drummoyne?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available to suit Drummoyne's busy professional offices and retail tenancies."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Do you provide strata cleaning services in Drummoyne?",
                answer: "Yes, we offer comprehensive strata cleaning for Drummoyne apartment buildings and mixed-use complexes, including lobby maintenance, lift cleaning, car park sweeping and common area sanitisation."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Drummoyne NSW" },
            { src: "/images/services/office.webp", alt: "Office cleaning Drummoyne" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Drummoyne NSW"
                serviceDescription="Commercial cleaning in Drummoyne NSW. Trusted by Inner West waterfront offices, retail businesses & strata complexes. Police-checked staff, $20M insured."
                serviceUrl="/commercial-cleaning-drummoyne"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
