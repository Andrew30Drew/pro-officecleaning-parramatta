import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'High Pressure Cleaning Sydney | Industrial Jet Washing Services | Pro Clean Corp',
    description: 'Industrial high pressure cleaning in Sydney. Cold and hot pressure washers for concrete, paving, building exteriors, loading docks, driveways, and oil and algae removal.',
    keywords: 'high pressure cleaning sydney, industrial jet washing sydney, commercial pressure washing, concrete cleaning sydney, building facade cleaning, loading dock cleaning, driveway cleaning sydney, oil removal pressure washing, algae removal sydney, grease trap cleaning',
    openGraph: {
        title: 'High Pressure Cleaning Sydney | Industrial Jet Washing Services | Pro Clean Corp',
        description: 'Industrial cold and hot pressure washing across Sydney. Concrete, paving, building exteriors, loading docks, driveways, and oil, grease, and algae removal.',
        url: 'https://www.procleancorp.com.au/high-pressure-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'High pressure cleaning Sydney industrial jet washing' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/high-pressure-cleaning-sydney' },
};

export default function HighPressureCleaningSydneyPage() {
    const serviceInfo = {
        title: "High Pressure Cleaning Sydney | Industrial Jet Washing",
        description: "A dirty exterior sends the wrong message about your business. Pro Clean Corp offers industrial-grade high pressure cleaning services across Sydney using both cold and hot water pressure washers capable of tackling the toughest commercial and industrial cleaning challenges. From concrete driveways and paving to building exteriors, loading docks, car parks, and grease traps, our pressure washing teams remove ingrained oil, algae, mould, gum, and industrial grime that standard cleaning cannot shift. We combine pre-treatment chemicals with the right equipment to deliver exceptional results without damaging surfaces.",
        benefits: [
            "Industrial cold and hot water pressure washers for maximum cleaning power on commercial and industrial surfaces",
            "Concrete, paving, and brick cleaning removes ingrained stains, chewing gum, oil, and biological growth",
            "Building exterior washing cleans facade panels, cladding, and render without surface damage",
            "Loading dock and grease trap cleaning keeps compliance obligations met and slipping hazards eliminated",
            "Driveway and car park cleaning removes oil, fuel spills, and tyre marks for a professional first impression",
            "Oil and algae removal using hot water extraction and industrial degreasers for complete surface restoration"
        ],
        process: [
            "Site assessment to determine surface types, contamination level, and correct pressure settings — protecting surfaces while maximising cleaning effectiveness",
            "Pre-treatment of heavily soiled areas with appropriate degreasers, biocides, or speciality detergents to break down ingrained contaminants",
            "Industrial pressure washing using rotary surface cleaners, specialist wand tips, and hot water capability where required for complete surface cleaning",
            "Post-wash rinse, runoff management, and optional sealant application to protect cleaned surfaces and extend the result"
        ],
        whyChooseUs: [
            "15+ years commercial cleaning experience",
            "$20M public liability insurance",
            "Police-checked, WHS-trained staff",
            "Eco-friendly commercial-grade products",
            "Flexible scheduling 7 days a week",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "What surfaces can you high pressure clean in Sydney?",
                answer: "We high pressure clean concrete driveways, paving, brick, sandstone, asphalt, steel, warehouse floors, loading docks, car parks, building facades, retaining walls, and most other hard outdoor and industrial surfaces. We adjust pressure settings and use appropriate nozzles for each surface type to prevent damage."
            },
            {
                question: "Can you remove oil stains from concrete driveways and car parks?",
                answer: "Yes. Oil stains on concrete require both chemical pre-treatment with an industrial degreaser and hot water pressure washing to lift and remove the oil from the pores of the surface. Our hot water pressure washers are specifically effective for oil, grease, and fat removal from concrete and other porous surfaces."
            },
            {
                question: "Do you clean building facades and exteriors in Sydney?",
                answer: "Yes. We clean commercial and industrial building facades including render, concrete panels, glass, metal cladding, and brick. For heritage or delicate surfaces, we use soft wash techniques with appropriate low-pressure cleaning to protect the material while removing biological growth and staining."
            },
            {
                question: "Can you clean grease traps and loading docks?",
                answer: "Yes. Loading dock and grease trap areas are a specialty. We use hot water pressure washing with food-safe degreasers to remove built-up grease, fat, and organic material, eliminating odours and slip hazards while keeping your facility compliant with council and health authority requirements."
            },
            {
                question: "How do you manage wastewater runoff during pressure washing?",
                answer: "We take stormwater compliance seriously. For jobs where contaminated runoff (containing oils, detergents, or other pollutants) could reach stormwater drains, we use bunded containment, wet vacuums, and pump systems to collect and dispose of wastewater in compliance with NSW EPA guidelines."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "High pressure cleaning Sydney industrial jet washing concrete" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp pressure washing Sydney commercial" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="High Pressure Cleaning Sydney"
                serviceDescription="Industrial high pressure cleaning services in Sydney using cold and hot pressure washers for concrete, paving, building exteriors, loading docks, driveways, and oil, grease, and algae removal."
                serviceUrl="/high-pressure-cleaning-sydney"
                serviceType="High Pressure Cleaning"
                price="$$"
                additionalServices={["Industrial Jet Washing", "Loading Dock Cleaning", "Building Facade Washing", "Oil Removal", "Grease Trap Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
