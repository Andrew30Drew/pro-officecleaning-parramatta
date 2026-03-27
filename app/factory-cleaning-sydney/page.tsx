import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Factory Cleaning Sydney | Industrial Factory Cleaning Services | Pro Clean Corp',
    description: 'Pro Clean Corp delivers WHS-compliant factory cleaning across Sydney. Production floor scrubbing, machinery areas, loading docks, amenities, chemical/grease removal & shutdown cleans.',
    keywords: 'factory cleaning sydney, industrial cleaning services sydney, manufacturing plant cleaning, production floor scrubbing, machinery area cleaning, shutdown cleaning sydney, factory floor degreasing, industrial cleaners sydney, whs compliant factory cleaning',
    openGraph: {
        title: 'Factory Cleaning Sydney | Industrial Factory Cleaning Services | Pro Clean Corp',
        description: 'WHS-compliant factory cleaning across Sydney. Production floors, machinery areas, loading docks, chemical and grease removal, and shutdown cleaning services.',
        url: 'https://www.procleancorp.com.au/factory-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/warehouse.webp', alt: 'Factory cleaning Sydney industrial' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/factory-cleaning-sydney' },
};

export default function FactoryCleaningPage() {
    const serviceInfo = {
        title: "Factory Cleaning Sydney",
        description: "Factory and manufacturing environments require a level of cleaning expertise that goes far beyond standard commercial cleaning. Pro Clean Corp delivers specialised industrial factory cleaning services across Sydney, deploying WHS-compliant, PPE-equipped teams experienced in heavy-duty production environments. From production floor machine scrubbing and machinery area cleaning to loading dock high-pressure washing and shutdown deep cleans, our industrial teams keep your facility safe, compliant, and productive.",
        benefits: [
            "Production Floor Scrubbing: Ride-on machine scrubbing of large-format factory floors including concrete and epoxy.",
            "Machinery Area Cleaning: Careful degreasing and cleaning of production equipment surrounds.",
            "Loading Docks: High-pressure washing of loading bays, dock levellers, and surrounding hardstands.",
            "Amenities: Cleanroom-standard cleaning of factory bathrooms, change rooms, and lunchrooms.",
            "Chemical/Grease/Dust Removal: Industrial degreasers and HEPA equipment for all contamination types.",
            "Shutdown Cleaning: Full facility deep clean during planned production shutdowns.",
            "WHS-Compliant PPE-Equipped Teams: All staff inducted, PPE-equipped, and White Card certified."
        ],
        process: [
            "WHS hazard assessment and site induction to understand your specific safety procedures and risk zones.",
            "Detailed scope developed for production floor, machinery areas, amenities, and loading docks.",
            "High-impact industrial cleaning executed with minimal disruption to production schedule.",
            "Regular safety and quality audits to maintain standards across the contract period."
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
            { question: "Do you clean production machinery and equipment areas?", answer: "Yes, we provide specialised degreasing and cleaning of machinery surrounds and adjacent areas. We follow strict lockout/tagout procedures and work within your production team's guidelines." },
            { question: "Can you remove oil and grease stains from factory floors?", answer: "Yes, we use industrial-grade degreasers combined with ride-on scrubbers and hand machines to lift stubborn oil, grease, and tyre marks from concrete and epoxy factory floors." },
            { question: "Do you clean high factory ceilings and rafters?", answer: "Yes, we offer high-level dusting and cleaning for factory rafters, lights, and ventilation systems using scissor lifts and extension equipment to improve air quality and reduce fire risk." },
            { question: "Are your teams qualified for industrial sites?", answer: "Yes, all our factory cleaning staff hold current White Cards, undergo site-specific inductions, and are fully equipped with appropriate PPE for industrial environments." },
            { question: "Do you offer shutdown cleaning services?", answer: "Yes, we regularly schedule full-facility deep cleans during planned production shutdowns, allowing access to all areas including under machinery and in confined spaces." }
        ],
        images: [
            { src: "/images/services/warehouse.webp", alt: "Factory cleaning Sydney industrial" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Factory Cleaning Sydney"
                serviceDescription="WHS-compliant industrial factory cleaning across Sydney including production floor scrubbing, machinery area cleaning, loading docks, chemical and grease removal, and shutdown cleaning with PPE-equipped teams."
                serviceUrl="/factory-cleaning-sydney"
                serviceType="Factory Cleaning"
                price="$$"
                additionalServices={["Production Floor Scrubbing", "Machinery Area Cleaning", "Loading Dock Cleaning", "Shutdown Deep Clean", "High-Level Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
