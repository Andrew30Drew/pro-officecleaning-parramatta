import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Wahroonga NSW | Pro Clean Corp',
    description: 'Commercial cleaning in Wahroonga NSW. Trusted by Upper North Shore corporate offices, rail hub businesses & professional services. $20M insured. Free quote today.',
    keywords: 'commercial cleaning Wahroonga, office cleaning Wahroonga, business cleaning Wahroonga NSW',
    openGraph: {
        title: 'Commercial Cleaning Wahroonga NSW | Pro Clean Corp',
        description: 'Commercial cleaning in Wahroonga NSW. Trusted by Upper North Shore corporate offices, rail hub businesses & professional services. $20M insured. Free quote today.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-wahroonga',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Wahroonga NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-wahroonga' },
};

export default function WahroonggaCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Wahroonga NSW",
        description: "Wahroonga is a prestigious Upper North Shore suburb and a key commercial rail hub on the North Shore Line, supporting a well-established precinct of corporate offices, medical facilities, professional services and quality retailers. Pro Clean Corp delivers premium commercial cleaning services for Wahroonga's business community — providing the consistent, high-quality results that corporate clients and professional service firms in this sought-after Ku-ring-gai suburb rightly demand. Our uniformed team works discreetly and punctually to keep your Wahroonga premises immaculate.",
        benefits: [
            "Corporate office and professional services cleaning",
            "Medical facility and specialist clinic hygiene standards",
            "Rail precinct commercial and retail cleaning",
            "Strata building and commercial lobby maintenance",
            "Flexible scheduling for active corporate offices",
            "Discreet, police-checked staff for secure environments"
        ],
        process: [
            "Free Wahroonga site assessment",
            "Custom cleaning plan for your premises type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Wahroonga and Upper North Shore",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Turramurra", "Gordon", "Pymble", "St Ives", "Warrawee", "South Wahroonga", "Hornsby", "Asquith"],
        faqs: [
            {
                question: "What commercial properties do you clean in Wahroonga?",
                answer: "We clean corporate offices, medical centres, specialist clinics, professional services firms, financial advisers, real estate agencies, retail shops and strata buildings throughout Wahroonga and the surrounding Ku-ring-gai LGA."
            },
            {
                question: "How much does commercial cleaning cost in Wahroonga?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Wahroonga facility."
            },
            {
                question: "Do you offer after-hours cleaning in Wahroonga?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available to minimise disruption to Wahroonga's busy corporate and professional offices."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Can you provide cleaning for a medical centre in Wahroonga to clinical hygiene standards?",
                answer: "Yes, we are experienced in cleaning medical centres and specialist practices in Wahroonga using hospital-grade disinfectants and documented infection-control procedures, meeting the standards required by healthcare regulators and practice managers."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Wahroonga NSW" },
            { src: "/images/services/office.webp", alt: "Corporate office cleaning Wahroonga" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Wahroonga NSW"
                serviceDescription="Commercial cleaning in Wahroonga NSW. Trusted by Upper North Shore corporate offices, rail hub businesses & professional services. $20M insured."
                serviceUrl="/commercial-cleaning-wahroonga"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
