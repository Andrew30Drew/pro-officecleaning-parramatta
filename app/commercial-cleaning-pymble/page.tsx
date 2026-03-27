import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Pymble NSW | Pro Clean Corp',
    description: 'Commercial cleaning in Pymble NSW. Trusted by Upper North Shore corporate offices, professional services & medical suites. Police-checked, $20M insured. Free quote.',
    keywords: 'commercial cleaning Pymble, office cleaning Pymble, business cleaning Pymble NSW',
    openGraph: {
        title: 'Commercial Cleaning Pymble NSW | Pro Clean Corp',
        description: 'Commercial cleaning in Pymble NSW. Trusted by Upper North Shore corporate offices, professional services & medical suites. Police-checked, $20M insured. Free quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-pymble',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Pymble NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-pymble' },
};

export default function PymbleCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Pymble NSW",
        description: "Pymble is a prestigious Upper North Shore suburb with a well-established corporate precinct, quality professional offices and specialist medical suites that serve the broader Ku-ring-gai community. Pro Clean Corp delivers premium commercial cleaning services for Pymble's corporate and professional environment — from executive office floor cleaning to specialist medical facility hygiene. Our staff present professionally, work discreetly and deliver the consistently high standards expected by Pymble's discerning business community.",
        benefits: [
            "Corporate office and executive suite cleaning",
            "Specialist medical and allied health hygiene standards",
            "Professional services and consulting room maintenance",
            "Strata building and commercial lobby cleaning",
            "Flexible after-hours scheduling for active offices",
            "Discreet, uniformed staff suited to corporate environments"
        ],
        process: [
            "Free Pymble site assessment",
            "Custom cleaning plan for your premises type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Pymble and Upper North Shore",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Gordon", "Turramurra", "St Ives", "Wahroonga", "Killarney Heights", "West Pymble", "Warrawee", "Lindfield"],
        faqs: [
            {
                question: "What commercial properties do you clean in Pymble?",
                answer: "We clean corporate offices, medical suites, specialist practices, professional consulting rooms, real estate agencies, financial services offices and strata commercial buildings throughout Pymble and the Ku-ring-gai area."
            },
            {
                question: "How much does commercial cleaning cost in Pymble?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Pymble facility."
            },
            {
                question: "Do you offer after-hours cleaning in Pymble?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available to minimise disruption to Pymble's active corporate and professional offices."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Can you provide cleaning for a corporate office with sensitive documents in Pymble?",
                answer: "Absolutely. All Pro Clean Corp staff are police background checked and trained in privacy-aware cleaning practices. We clean around workstations and sensitive areas respectfully and discreetly, as required by Pymble's corporate office clients."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Pymble NSW" },
            { src: "/images/services/office.webp", alt: "Corporate office cleaning Pymble" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Pymble NSW"
                serviceDescription="Commercial cleaning in Pymble NSW. Trusted by Upper North Shore corporate offices, professional services & medical suites. Police-checked, $20M insured."
                serviceUrl="/commercial-cleaning-pymble"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
