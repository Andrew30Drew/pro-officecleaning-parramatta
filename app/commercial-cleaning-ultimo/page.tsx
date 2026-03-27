import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Ultimo NSW | Pro Clean Corp',
    description: 'Commercial cleaning in Ultimo NSW. Trusted by inner-city tech companies, media businesses, UTS & creative offices. Police-checked, $20M insured. Free quote today.',
    keywords: 'commercial cleaning Ultimo, office cleaning Ultimo, business cleaning Ultimo NSW',
    openGraph: {
        title: 'Commercial Cleaning Ultimo NSW | Pro Clean Corp',
        description: 'Commercial cleaning in Ultimo NSW. Trusted by inner-city tech companies, media businesses, UTS & creative offices. Police-checked, $20M insured. Free quote today.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-ultimo',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Ultimo NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-ultimo' },
};

export default function UltimoCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Ultimo NSW",
        description: "Ultimo is Sydney's inner-city technology, media and education hub, home to the University of Technology Sydney (UTS), the ABC's national headquarters, leading tech startups and a thriving concentration of creative businesses. Pro Clean Corp delivers professional commercial cleaning services built for Ultimo's fast-paced, innovation-driven environment — from daily co-working space maintenance to comprehensive office cleaning for growing tech companies. We work flexibly around UTS timetables, media production schedules and the dynamic workflows of Ultimo's creative sector.",
        benefits: [
            "Tech company and startup office cleaning",
            "Media production office and studio maintenance",
            "UTS-adjacent educational and commercial facility cleaning",
            "Co-working space and shared office hygiene management",
            "Flexible after-hours scheduling around creative workflows",
            "Eco-friendly products suited to modern office environments"
        ],
        process: [
            "Free Ultimo site assessment",
            "Custom cleaning plan for your premises type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Ultimo and inner Sydney",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Pyrmont", "Glebe", "Haymarket", "Chippendale", "Surry Hills", "CBD", "Darling Harbour", "Newtown"],
        faqs: [
            {
                question: "What commercial properties do you clean in Ultimo?",
                answer: "We clean tech offices, media production facilities, co-working spaces, educational facilities, retail tenancies, cafes and mixed-use commercial buildings throughout Ultimo and the surrounding inner-city precinct."
            },
            {
                question: "How much does commercial cleaning cost in Ultimo?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Ultimo facility."
            },
            {
                question: "Do you offer after-hours cleaning in Ultimo?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available — ideal for Ultimo's tech and media businesses with non-standard working hours."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Can you clean a co-working or shared office space in Ultimo on a daily basis?",
                answer: "Yes, we specialise in daily cleaning programs for co-working spaces and shared offices in Ultimo, covering hot desks, meeting rooms, kitchen areas, bathrooms and common zones to ensure a fresh, hygienic environment for all members each morning."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Ultimo NSW" },
            { src: "/images/services/office.webp", alt: "Tech office cleaning Ultimo" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Ultimo NSW"
                serviceDescription="Commercial cleaning in Ultimo NSW. Trusted by inner-city tech companies, media businesses, UTS & creative offices. Police-checked, $20M insured."
                serviceUrl="/commercial-cleaning-ultimo"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
