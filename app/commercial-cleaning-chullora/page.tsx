import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Chullora NSW | Pro Clean Corp',
    description: 'Specialist commercial cleaning in Chullora NSW. Major logistics, warehousing & industrial precinct in southwest Sydney. Fully insured. Free quotes.',
    keywords: 'commercial cleaning Chullora, office cleaning Chullora, business cleaning Chullora NSW, cleaners Chullora',
    openGraph: { title: 'Commercial Cleaning Chullora NSW | Pro Clean Corp', description: 'Specialist commercial cleaning in Chullora NSW. Major logistics, warehousing & industrial precinct in southwest Sydney. Fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-chullora', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Chullora NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-chullora' },
};

export default function ChulloraCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Chullora NSW",
        description: "Chullora is one of Sydney's most strategically important logistics and industrial hubs, home to major national distribution centres, transport depots, cold storage facilities, and large-format warehouses that service the city's retail and supply chain networks. Pro Clean Corp has been a trusted commercial cleaning provider in the Chullora industrial precinct for over 15 years, delivering specialist warehouse cleaning, office maintenance, and amenities cleaning for the logistics businesses that call Chullora home. Our Chullora teams are experienced with the high-throughput, safety-critical environments of large distribution and transport operations.",
        benefits: [
            "Large-scale warehouse and distribution centre floor cleaning using industrial ride-on scrubbers and sweepers suited to Chullora's massive floor plates",
            "Cold storage and refrigerated facility cleaning with appropriate food-safe products and temperature-compliant methods for Chullora's cold chain operators",
            "Transport depot cleaning including truck wash bays, driver amenities, dispatch offices, and loading dock areas",
            "Office and workforce amenities maintenance for Chullora's logistics operations, keeping staff areas hygienic and compliant",
            "WHS-compliant cleaning with SWMS documentation, PPE protocols, and site inductions for Chullora industrial clients",
            "Flexible shift scheduling to align with Chullora's 24-hour distribution operations without disrupting throughput"
        ],
        process: ["Free Chullora site assessment", "Custom cleaning plan for your Chullora business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Chullora and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Bankstown", "Greenacre", "Condell Park", "Regents Park", "Punchbowl", "Sefton", "Chester Hill", "Yagoona"],
        faqs: [
            { question: "What commercial properties do you clean in Chullora?", answer: "We clean distribution centres, warehouses, transport depots, cold stores, manufacturing facilities, truck yards, and the offices and amenities associated with all of these operations. Our team is experienced across the full range of Chullora's industrial and logistics businesses." },
            { question: "How much does commercial cleaning cost in Chullora?", answer: "Rates in Chullora typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Chullora?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Chullora business." },
            { question: "Are your Chullora cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Can you clean large distribution centre floors in Chullora with industrial equipment?", answer: "Yes. For Chullora's large warehouse and distribution centre floors, we deploy ride-on scrubbers, industrial floor sweepers, and high-pressure washers capable of managing the scale and soil load of major logistics operations. We assess each Chullora facility and select the right equipment configuration for your floor type and size." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Chullora NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Chullora" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Chullora NSW" serviceDescription="Specialist commercial cleaning in Chullora NSW. Major logistics, warehousing & industrial precinct in southwest Sydney. Fully insured. Free quotes." serviceUrl="/commercial-cleaning-chullora" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
