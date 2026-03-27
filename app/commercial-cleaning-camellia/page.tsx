import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Camellia NSW | Pro Clean Corp',
    description: 'Specialist commercial cleaning in Camellia NSW. Industrial precinct on the Parramatta River — warehouses, factories & offices. Fully insured. Free quotes.',
    keywords: 'commercial cleaning Camellia, office cleaning Camellia, business cleaning Camellia NSW, cleaners Camellia',
    openGraph: { title: 'Commercial Cleaning Camellia NSW | Pro Clean Corp', description: 'Specialist commercial cleaning in Camellia NSW. Industrial precinct on the Parramatta River — warehouses, factories & offices. Fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-camellia', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Camellia NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-camellia' },
};

export default function CamelliaCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Camellia NSW",
        description: "Camellia is one of Western Sydney's most significant industrial precincts, positioned along the Parramatta River between Rosehill, Rydalmere, and Granville. The suburb hosts a diverse mix of manufacturing plants, chemical and materials businesses, automotive operations, and large logistics facilities that demand specialist industrial cleaning with strict WHS compliance. Pro Clean Corp provides experienced commercial and industrial cleaning across Camellia, with teams trained in hazardous material awareness, industrial equipment operation, and the high-specification cleaning standards that heavy-industry clients require.",
        benefits: [
            "Industrial floor cleaning using ride-on scrubbers and sweepers for Camellia's large warehouse and manufacturing floor plates",
            "Chemical-safe cleaning protocols for Camellia's materials and processing businesses, using appropriate products for each facility zone",
            "WHS-compliant cleaning programs with full SWMS documentation available for Camellia industrial clients",
            "Office and amenities maintenance for Camellia's workforce, including clean lunchrooms, bathrooms, and reception areas",
            "Flexible shift-based scheduling to align with Camellia's round-the-clock industrial operations",
            "Waste management integration, including industrial waste segregation support, for Camellia's manufacturing clients"
        ],
        process: ["Free Camellia site assessment", "Custom cleaning plan for your Camellia business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Camellia and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Rosehill", "Rydalmere", "Granville", "Silverwater", "Auburn", "Merrylands", "Parramatta", "Clyde"],
        faqs: [
            { question: "What commercial properties do you clean in Camellia?", answer: "We clean manufacturing plants, chemical processing facilities, automotive businesses, logistics warehouses, container yards, and corporate offices throughout the Camellia industrial precinct. Our team is experienced with the full range of heavy and light industrial operations in this part of Western Sydney." },
            { question: "How much does commercial cleaning cost in Camellia?", answer: "Rates in Camellia typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Camellia?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Camellia business." },
            { question: "Are your Camellia cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Do you provide SWMS and WHS documentation for Camellia industrial sites?", answer: "Yes. For Camellia industrial sites, we provide Safe Work Method Statements (SWMS), site-specific risk assessments, and chemical Safety Data Sheets (SDS) as part of our standard service package. Our team can complete site inductions required by your Camellia facility's WHS management system." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Camellia NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Camellia" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Camellia NSW" serviceDescription="Specialist commercial cleaning in Camellia NSW. Industrial precinct on the Parramatta River — warehouses, factories & offices. Fully insured. Free quotes." serviceUrl="/commercial-cleaning-camellia" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
