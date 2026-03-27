import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Granville NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Granville NSW. Western Sydney industrial hub — warehouses, factories & offices near Parramatta. Fully insured. Free quotes.',
    keywords: 'commercial cleaning Granville, office cleaning Granville, business cleaning Granville NSW, cleaners Granville',
    openGraph: { title: 'Commercial Cleaning Granville NSW | Pro Clean Corp', description: 'Professional commercial cleaning in Granville NSW. Western Sydney industrial hub — warehouses, factories & offices near Parramatta. Fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-granville', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Granville NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-granville' },
};

export default function GranvilleCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Granville NSW",
        description: "Granville is a major Western Sydney industrial and commercial hub, positioned between Parramatta, Auburn, and Merrylands at the intersection of some of the region's most important arterial routes. The suburb hosts a dense mix of manufacturing, automotive, logistics, and light industrial businesses alongside a busy retail strip and professional services sector along Granville's main streets. Pro Clean Corp has been delivering reliable commercial cleaning across Granville for over 15 years, with experienced teams who understand the demands of Western Sydney's industrial environment and the high-throughput businesses that drive this suburb's economy.",
        benefits: [
            "Industrial warehouse and factory floor cleaning for Granville's manufacturing and logistics businesses, using ride-on scrubbers for large floor areas",
            "Automotive workshop and showroom cleaning for Granville's significant car industry cluster along Woodville Road",
            "Retail and commercial strip cleaning along Granville's main streets, keeping shopfronts and interiors presentable",
            "Medical and professional office cleaning for Granville's healthcare and business services sector",
            "WHS-compliant industrial cleaning programs with SWMS documentation for Granville's manufacturing clients",
            "Flexible scheduling including overnight and weekend cleans to fit Granville's round-the-clock industrial operations"
        ],
        process: ["Free Granville site assessment", "Custom cleaning plan for your Granville business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Granville and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Parramatta", "Auburn", "Merrylands", "Clyde", "South Granville", "Woodville", "Guildford", "Silverwater"],
        faqs: [
            { question: "What commercial properties do you clean in Granville?", answer: "We clean warehouses, manufacturing facilities, automotive workshops and showrooms, logistics depots, retail stores, medical centres, offices, and strata buildings throughout Granville. Our team is experienced across the full range of Granville's diverse commercial and industrial landscape." },
            { question: "How much does commercial cleaning cost in Granville?", answer: "Rates in Granville typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Granville?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Granville business." },
            { question: "Are your Granville cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Can you handle industrial degreasing and heavy-duty floor cleaning in Granville?", answer: "Yes. Our Granville industrial cleaning team uses commercial-grade degreasers, industrial floor scrubbers, and pressure washing equipment to handle the oil, grease, and heavy soiling common in Granville's manufacturing and automotive businesses. We assess each facility and deploy the right equipment for your Granville premises." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Granville NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Granville" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Granville NSW" serviceDescription="Professional commercial cleaning in Granville NSW. Western Sydney industrial hub — warehouses, factories & offices near Parramatta. Fully insured. Free quotes." serviceUrl="/commercial-cleaning-granville" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
