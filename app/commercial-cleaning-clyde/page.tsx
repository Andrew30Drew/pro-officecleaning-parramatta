import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Clyde NSW | Pro Clean Corp',
    description: 'Specialist commercial cleaning in Clyde NSW. Industrial businesses near Granville & Parramatta — warehouses, factories & offices. Fully insured. Free quotes.',
    keywords: 'commercial cleaning Clyde, office cleaning Clyde, business cleaning Clyde NSW, cleaners Clyde',
    openGraph: { title: 'Commercial Cleaning Clyde NSW | Pro Clean Corp', description: 'Specialist commercial cleaning in Clyde NSW. Industrial businesses near Granville & Parramatta — warehouses, factories & offices. Fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-clyde', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Clyde NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-clyde' },
};

export default function ClydeCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Clyde NSW",
        description: "Clyde is a compact but busy industrial suburb in Western Sydney, nestled between Granville, Auburn, and the Parramatta River at Camellia. Its commercial fabric is dominated by automotive businesses, light manufacturing, logistics operators, and the industrial service companies that support Western Sydney's broader economy. Pro Clean Corp provides specialist commercial cleaning across Clyde, with experienced teams who understand the demands of industrial cleaning environments and can deliver flexible, reliable programs for businesses of all sizes in this busy western precinct.",
        benefits: [
            "Industrial warehouse and factory floor cleaning for Clyde's automotive, manufacturing, and logistics businesses",
            "Automotive business cleaning including showrooms, service bays, and office reception areas in Clyde's car industry cluster",
            "Office and amenities cleaning for Clyde's workforce, maintaining hygienic, comfortable staff facilities",
            "WHS-compliant cleaning programs with documented SWMS for Clyde's industrial and manufacturing sites",
            "Flexible day, evening, and overnight scheduling to fit around Clyde's operational hours",
            "Industrial-grade equipment including ride-on scrubbers for large Clyde warehouse floor areas"
        ],
        process: ["Free Clyde site assessment", "Custom cleaning plan for your Clyde business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Clyde and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Granville", "Auburn", "Silverwater", "Merrylands", "Rosehill", "Camellia", "Parramatta", "Woodville"],
        faqs: [
            { question: "What commercial properties do you clean in Clyde?", answer: "We clean warehouses, automotive workshops and showrooms, light manufacturing facilities, logistics depots, and the associated offices and staff amenities for businesses throughout the Clyde industrial precinct." },
            { question: "How much does commercial cleaning cost in Clyde?", answer: "Rates in Clyde typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Clyde?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Clyde business." },
            { question: "Are your Clyde cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Can you handle oil and grease cleaning in Clyde automotive and industrial facilities?", answer: "Yes. Our Clyde industrial cleaning team is experienced in degreasing concrete floors, cleaning oil-affected surfaces, and managing industrial waste in automotive workshops and manufacturing environments. We use commercial-grade degreasers and appropriate containment methods to keep your Clyde facility safe and compliant." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Clyde NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Clyde" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Clyde NSW" serviceDescription="Specialist commercial cleaning in Clyde NSW. Industrial businesses near Granville & Parramatta — warehouses, factories & offices. Fully insured. Free quotes." serviceUrl="/commercial-cleaning-clyde" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
