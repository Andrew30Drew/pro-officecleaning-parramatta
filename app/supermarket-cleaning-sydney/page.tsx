import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Supermarket Cleaning Sydney | Grocery Store Cleaning Services | Pro Clean Corp',
    description: 'HACCP-compliant supermarket cleaning across Sydney. Aisle floor auto-scrubbing, deli & bakery areas, refrigeration units, loading docks, car parks — before & after trading hours.',
    keywords: 'supermarket cleaning sydney, grocery store cleaning sydney, haccp cleaning sydney, retail food cleaning, supermarket floor scrubbing, deli cleaning, bakery cleaning, loading dock cleaning, car park cleaning sydney, after-hours supermarket cleaning',
    openGraph: {
        title: 'Supermarket Cleaning Sydney | Grocery Store Cleaning Services | Pro Clean Corp',
        description: 'HACCP-compliant cleaning for Sydney supermarkets. Aisle floors, deli, bakery, refrigeration units, loading docks & car parks. Before & after trading hours.',
        url: 'https://www.procleancorp.com.au/supermarket-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Supermarket cleaning Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/supermarket-cleaning-sydney' },
};

export default function SupermarketCleaningPage() {
    const serviceInfo = {
        title: "Supermarket Cleaning Sydney",
        description: "Supermarkets operate in one of the highest-traffic, highest-scrutiny retail environments in Australia — and your store's cleanliness directly impacts customer confidence and food safety compliance. Pro Clean Corp provides specialised HACCP-compliant supermarket cleaning services across Sydney, covering every zone of your operation with machine-power and food-safe chemicals. All work is scheduled before or after trading hours to ensure zero disruption to customers and staff.",
        benefits: [
            "Aisle Floor Auto-Scrubbing: High-performance ride-on scrubbing and machine buffing for a safe, high-shine finish.",
            "Deli and Bakery Areas: Specialised food-safe cleaning of preparation surfaces, counters, and equipment.",
            "Refrigeration Unit Exteriors: Cleaning of unit exteriors and coil areas for hygiene compliance.",
            "Loading Docks: Pressure washing and deodorising of loading docks, waste rooms, and compactor areas.",
            "Car Parks: Sweeping, scrubbing, and line marking maintenance for customer safety.",
            "HACCP Compliance: All cleaning protocols and chemicals aligned with food safety legislation.",
            "Before/After Trading Hours: Full programme executed outside trading hours for zero operational disruption."
        ],
        process: [
            "Detailed site walk with your store manager to map all cleaning zones and compliance requirements.",
            "Customised cleaning schedule built around trading hours, deliveries, and council health inspection dates.",
            "Nightly or before-trading-hours crew executes full floor machine programme and zone-specific cleaning.",
            "Day porter service available for spill response, trolley bay cleaning, and continuous restroom maintenance."
        ],
        whyChooseUs: [
            "15+ years experience",
            "$20M public liability",
            "Police-checked staff",
            "Eco-friendly products",
            "7-day flexible scheduling",
            "100% satisfaction guarantee"
        ],
        serviceAreas: [
            "Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith",
            "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"
        ],
        faqs: [
            { question: "Do you clean supermarkets during trading hours?", answer: "We typically schedule the core cleaning programme before or after trading hours. However, we can provide day porter services during trading for spill response, restroom maintenance, and trolley bay cleaning." },
            { question: "Are your cleaning products food-safe?", answer: "Yes. All chemicals used in food preparation areas, deli counters, and bakery zones are food-safe and HACCP-approved. We provide full chemical data sheets on request for your compliance records." },
            { question: "Can you clean refrigeration units and cool rooms?", answer: "Yes, we clean the exterior surfaces and coil areas of refrigeration units and walk-in cool rooms using appropriate low-temperature safe chemicals as part of your regular cleaning programme." },
            { question: "Do you clean the loading dock and waste areas?", answer: "Absolutely. Loading docks, waste compactor areas, and recycling bays are included in our supermarket cleaning scope and are pressure-washed and deodorised on a scheduled basis." },
            { question: "How do you handle health inspection preparation?", answer: "We are experienced in preparing supermarkets for local council health inspections. We can schedule a pre-inspection deep clean and provide documentation of cleaning frequency and chemicals used." }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Supermarket cleaning Sydney" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Supermarket Cleaning Sydney"
                serviceDescription="HACCP-compliant supermarket and grocery store cleaning across Sydney, covering aisle floors, deli and bakery areas, refrigeration units, loading docks, car parks, and before and after trading hours service."
                serviceUrl="/supermarket-cleaning-sydney"
                serviceType="Supermarket Cleaning"
                price="$$"
                additionalServices={["Aisle Floor Scrubbing", "Deli & Bakery Cleaning", "Loading Dock Cleaning", "Car Park Cleaning", "Day Porter Services"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
