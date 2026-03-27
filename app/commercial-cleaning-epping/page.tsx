import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Epping NSW | Pro Clean Corp',
    description: 'Commercial cleaning in Epping NSW. Trusted by Hills/Ryde commercial offices, retail & rail interchange businesses. Police-checked, $20M insured. Free quote today.',
    keywords: 'commercial cleaning Epping, office cleaning Epping, business cleaning Epping NSW',
    openGraph: {
        title: 'Commercial Cleaning Epping NSW | Pro Clean Corp',
        description: 'Commercial cleaning in Epping NSW. Trusted by Hills/Ryde commercial offices, retail & rail interchange businesses. Police-checked, $20M insured. Free quote today.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-epping',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Epping NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-epping' },
};

export default function EppingCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Epping NSW",
        description: "Epping is a major commercial hub at the intersection of the Hills District and Ryde, anchored by a busy rail interchange that drives high foot traffic past its retail precinct, professional offices and medical centres every day. Pro Clean Corp provides consistent, professional commercial cleaning services for Epping's diverse business community — from corporate office floors to specialist medical suites and high-turnover retail tenancies. Our experienced team works flexibly around train schedules and business hours to deliver exceptional results.",
        benefits: [
            "Corporate office and professional suite cleaning",
            "High foot-traffic retail and shopping centre maintenance",
            "Medical centre and specialist clinic hygiene standards",
            "Rail interchange area and commercial lobby cleaning",
            "Flexible early-morning and after-hours scheduling",
            "Consistent service across multi-tenancy commercial buildings"
        ],
        process: [
            "Free Epping site assessment",
            "Custom cleaning plan for your premises type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Epping and the Hills/Ryde district",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Carlingford", "Eastwood", "North Epping", "Pennant Hills", "Marsfield", "Ryde", "Meadowbank", "West Ryde"],
        faqs: [
            {
                question: "What commercial properties do you clean in Epping?",
                answer: "We clean corporate offices, medical centres, dental practices, retail shops, real estate agencies, childcare facilities and mixed-use commercial buildings throughout Epping and the surrounding Hills/Ryde precinct."
            },
            {
                question: "How much does commercial cleaning cost in Epping?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Epping facility."
            },
            {
                question: "Do you offer after-hours cleaning in Epping?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available to suit Epping's busy commercial office and retail environment."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Can you manage cleaning for a large multi-tenancy commercial building in Epping?",
                answer: "Yes, we specialise in managing cleaning programs for multi-tenancy buildings in Epping, coordinating schedules across multiple floors and tenancies and liaising directly with building managers to ensure seamless service."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Epping NSW" },
            { src: "/images/services/office.webp", alt: "Office cleaning Epping" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Epping NSW"
                serviceDescription="Commercial cleaning in Epping NSW. Trusted by Hills/Ryde commercial offices, retail & rail interchange businesses. Police-checked, $20M insured."
                serviceUrl="/commercial-cleaning-epping"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
