import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Sylvania NSW | Retail, Waterfront & Office Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Sylvania NSW. Waterfront businesses, retail centres & Sutherland Shire offices kept spotless by Pro Clean Corp. Free quote.',
    keywords: 'commercial cleaning Sylvania, office cleaning Sylvania, retail cleaning Sylvania NSW, commercial cleaners Sutherland Shire, business cleaning Sylvania Waters',
    openGraph: {
        title: 'Commercial Cleaning Sylvania NSW | Pro Clean Corp',
        description: 'Expert commercial cleaning in Sylvania NSW. Waterfront dining, retail & professional offices across the Sutherland Shire. Police-checked, $20M insured. Free quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-sylvania',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Sylvania NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-sylvania' },
};

export default function SylvaniaCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Sylvania NSW",
        description: "Sylvania blends the relaxed lifestyle of the Sutherland Shire with a thriving commercial hub that includes the Southgate shopping precinct, waterfront restaurants and cafes overlooking the Georges River, professional medical and allied health suites, and a range of retail and service businesses that cater to the Shire's affluent residential community. Pro Clean Corp has been delivering premium commercial cleaning services throughout Sylvania for over 15 years, understanding that businesses here must maintain impeccable standards to satisfy a discerning local clientele. Whether it is the gleaming shopfronts of Southgate, the spotless dining areas of a waterfront restaurant, or the rigorously hygienic environment of a medical practice, our Sylvania cleaning teams consistently deliver results that reflect the quality this suburb expects.",
        benefits: [
            "Retail and shopping centre cleaning for Sylvania's Southgate precinct and local shops",
            "Waterfront restaurant and cafe cleaning including kitchen deep cleans and alfresco areas",
            "Medical, dental and allied health facility cleaning with strict infection control protocols",
            "Office and professional suite cleaning for Sylvania's business community",
            "Window and shopfront glass cleaning that maximises waterfront and street-front appeal",
            "Eco-friendly products appropriate for Sylvania's Georges River waterfront environment"
        ],
        process: [
            "Free on-site consultation at your Sylvania premises to understand your cleaning priorities",
            "Custom cleaning program tailored to your industry, location and business hours",
            "Professional service delivery by police-checked, uniformed cleaning specialists",
            "Ongoing quality assurance and dedicated account management for sustained results"
        ],
        whyChooseUs: [
            "15+ years serving Sylvania and the wider Sutherland Shire commercial community",
            "$20M public liability insurance covering retail, hospitality and medical premises",
            "Police-checked, uniformed staff who represent your business professionally on-site",
            "Food-safe and eco-friendly products suitable for waterfront dining environments",
            "Flexible scheduling aligned to retail trading hours, restaurant service times and office routines",
            "100% satisfaction guarantee with prompt, professional response to any feedback"
        ],
        serviceAreas: [
            "Miranda", "Caringbah", "Gymea Bay", "Taren Point", "Sans Souci", "Woolooware", "Kirrawee", "Port Hacking"
        ],
        faqs: [
            {
                question: "Do you provide cleaning for restaurants and cafes in Sylvania?",
                answer: "Yes. Restaurant and hospitality cleaning is one of our specialities. We provide pre-open kitchen deep cleans, post-service cleaning, commercial kitchen degreasing, floor sanitisation, and comprehensive front-of-house cleaning for cafes and restaurants throughout Sylvania. All our hospitality cleaning uses food-safe, TGA-listed products that meet NSW Food Authority requirements."
            },
            {
                question: "Can you clean waterfront dining areas in Sylvania?",
                answer: "Absolutely. Our teams are experienced in cleaning waterfront and outdoor dining environments. We use biodegradable, environmentally safe products in all areas adjacent to the Georges River, and our outdoor cleaning services cover pressure washing of pavers and decking, outdoor furniture sanitisation and comprehensive post-service clean-ups for alfresco areas."
            },
            {
                question: "Do you clean retail shops in Sylvania's Southgate shopping centre?",
                answer: "Yes. We provide retail cleaning programs for Southgate tenants and other Sylvania retailers, covering daily floor cleaning, window washing, fitting room maintenance, stockroom hygiene and customer toilet cleaning. All retail services are scheduled before opening hours or after closing to ensure your store is perfectly presented from the moment the doors open each day."
            },
            {
                question: "Can Pro Clean Corp clean our Sylvania medical or dental practice?",
                answer: "Yes. We hold deep expertise in medical and dental facility cleaning. Our healthcare cleaning programs follow AS/NZS 4187 infection control standards and use hospital-grade disinfectants on all clinical surfaces, waiting areas and patient amenities. We provide flexible scheduling — including early morning pre-clinic cleans — to ensure your practice is hygienic and welcoming for patients every day."
            },
            {
                question: "Do you offer regular and one-off commercial cleaning in Sylvania?",
                answer: "Yes. We serve both regular ongoing contract clients and one-off commercial cleaning needs in Sylvania. Whether you require daily office maintenance, a thorough spring clean, an end-of-lease clean, or a post-renovation preparation clean, our team delivers the same high standard of service and professionalism for every job, large or small."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Sylvania NSW" },
            { src: "/images/services/office.webp", alt: "Retail and restaurant cleaning Sylvania NSW" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Sylvania NSW"
                serviceDescription="Professional commercial cleaning services in Sylvania NSW covering retail shops, waterfront restaurants, medical practices and offices across the Sutherland Shire."
                serviceUrl="/commercial-cleaning-sylvania"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
