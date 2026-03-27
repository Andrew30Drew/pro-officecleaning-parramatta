
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Building Facade Cleaning Sydney | High-Rise & Exterior Cleaning | Pro Clean Corp',
    description: 'Expert building facade cleaning in Sydney. High-rise rope access, pressure washing, glass curtain wall cleaning, graffiti removal, and annual exterior maintenance programs. Call 1300 494 983.',
    keywords: 'building facade cleaning sydney, high rise facade cleaning, rope access cleaning sydney, exterior building cleaning, glass curtain wall cleaning, graffiti removal sydney, pressure washing building, pollution stain removal, commercial exterior cleaning, building maintenance sydney',
    openGraph: {
        title: 'Building Facade Cleaning Sydney | High-Rise & Exterior Cleaning | Pro Clean Corp',
        description: 'Professional building facade and exterior cleaning in Sydney. Rope access, pressure washing, and glass curtain wall specialists. Restore your building\'s street appeal. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/building-facade-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Building facade cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/building-facade-cleaning-sydney' },
};

export default function BuildingFacadeCleaningPage() {
    const serviceInfo = {
        title: "Building Facade Cleaning Sydney",
        description: "Pro Clean Corp delivers professional building facade and exterior cleaning services across Sydney, restoring commercial towers, retail buildings, and strata complexes to their original appearance with specialist high-rise cleaning techniques. Sydney's urban environment subjects building exteriors to traffic pollution, salt air, biological growth, and graffiti that accumulates year-round and degrades both appearance and material integrity. Our rope access certified technicians, elevated work platform operators, and pressure washing specialists safely clean glass curtain walls, cladding, brickwork, concrete, and architectural features at any height. We offer one-off facade restorations as well as annual maintenance programs that protect your investment and keep your building presenting at its best.",
        benefits: [
            "High-Rise Rope Access: IRATA-certified rope access technicians safely access and clean building facades at any height without expensive scaffold installation.",
            "Pressure Washing & Soft Wash: High-pressure washing for hard-wearing surfaces and low-pressure soft wash systems for delicate render, cladding, and architectural features.",
            "Glass Curtain Wall Cleaning: Specialist pure-water-fed pole systems and abseiling techniques deliver streak-free cleaning of glass curtain wall facades on commercial towers.",
            "Pollution & Atmospheric Stain Removal: Removal of traffic exhaust deposits, atmospheric carbon staining, calcium carbonate runs, and oxidisation from all facade materials.",
            "Graffiti Removal: Professional graffiti removal from brick, concrete, cladding, and glass using surface-specific solvents that eliminate graffiti without damaging the substrate.",
            "Annual Maintenance Programs: Structured annual or bi-annual facade cleaning programs to maintain your building's presentation and prevent long-term material degradation."
        ],
        process: [
            "Site Assessment & Work at Height Planning: Our supervisors conduct a detailed facade inspection, assess access requirements, and develop a Safe Work Method Statement (SWMS) for all work at height activities.",
            "Access Setup & Safety Establishment: Rope access anchors, elevated work platforms, or water-fed pole systems are rigged and tested with pedestrian exclusion zones established in compliance with WorkSafe NSW requirements.",
            "Facade Cleaning & Stain Treatment: Systematic top-to-bottom cleaning of all facade elements including glass, cladding, framing, sills, and architectural features with appropriate cleaning methods for each material type.",
            "Quality Inspection & Derig: Final quality inspection of all cleaned areas from ground level and elevated positions, removal of all access equipment, and reinstatement of the public environment."
        ],
        whyChooseUs: [
            "Rope Access Certified: IRATA-certified rope access technicians providing safe, cost-effective high-rise facade access without scaffold costs or extended site occupation.",
            "Work at Height Compliance: All high-rise and elevated facade cleaning work is performed under documented Safe Work Method Statements compliant with NSW WHS Regulations.",
            "Multi-Surface Expertise: Experience cleaning every commercial facade material including glass, aluminium composite cladding, concrete, brick, terracotta, and precast panels.",
            "Graffiti Specialists: Fast-response graffiti removal service using surface-appropriate chemical systems that remove vandalism without damaging your building's exterior finish.",
            "Annual Maintenance Programs: Structured maintenance agreements provide budget certainty, scheduled cleaning, and priority response for your building management team.",
            "Fully Insured: $20 million public liability insurance and specific work at height coverage for all facade cleaning activities."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "How do you safely clean high-rise building facades in Sydney?",
                answer: "We use a combination of IRATA-certified rope access techniques, elevated work platforms (EWPs/cherry pickers), and extended water-fed pole systems depending on building height, architecture, and access constraints. All work at height is performed under a documented Safe Work Method Statement with appropriate fall arrest systems and pedestrian exclusion zones."
            },
            {
                question: "What types of building facades can you clean?",
                answer: "We clean all commercial facade types including glass curtain walls, aluminium composite cladding (ACP), precast concrete, face brick, rendered surfaces, terracotta, sandstone, and painted masonry. Our technicians select appropriate cleaning methods and products for each specific material to ensure effective cleaning without surface damage."
            },
            {
                question: "Can you remove graffiti from building facades?",
                answer: "Yes. We provide professional graffiti removal from all exterior building surfaces including brick, concrete, painted walls, cladding, and glass. We use surface-specific solvent and anti-graffiti systems that fully remove vandalism without damaging or discolouring the underlying substrate. Anti-graffiti protective coatings can also be applied after removal."
            },
            {
                question: "How often should a commercial building facade be professionally cleaned?",
                answer: "For most Sydney CBD and inner-city buildings, we recommend annual facade cleaning to address atmospheric pollution and biological growth before it causes material degradation. Buildings adjacent to heavily trafficked roads, near water, or in industrial areas may benefit from bi-annual cleaning. We offer annual maintenance programs with scheduled visits and priority response."
            },
            {
                question: "Do you provide facade cleaning for strata-managed buildings?",
                answer: "Yes. We work regularly with strata managers and body corporate committees to deliver facade cleaning for residential and mixed-use strata buildings across Sydney. We provide detailed quotes, SWMS documentation, insurance certificates, and completion reports suitable for strata committee records and AGM presentations."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Building facade cleaning Sydney - high-rise rope access exterior cleaning" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney building exterior and glass curtain wall cleaning" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Building Facade Cleaning Sydney"
                serviceDescription="Professional building facade and exterior cleaning services in Sydney. Rope access certified, high-rise specialists for glass curtain walls, cladding, graffiti removal, and annual maintenance programs."
                serviceUrl="/building-facade-cleaning-sydney"
                serviceType="Building Facade & Exterior Cleaning"
                price="$$"
                additionalServices={["Rope Access Cleaning", "Glass Curtain Wall Cleaning", "Graffiti Removal", "Pressure Washing", "Annual Maintenance Programs"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
