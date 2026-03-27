import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Pressure Washing Sydney | Commercial Pressure Washing Services | Pro Clean Corp',
    description: 'Commercial pressure washing across Sydney. Hot and cold pressure washers for driveways, footpaths, walls, loading docks, grease, algae, and oil removal. Annual maintenance plans.',
    keywords: 'pressure washing sydney, commercial pressure washing sydney, driveway pressure washing sydney, footpath cleaning sydney, loading dock pressure washing, grease removal pressure washing, algae removal sydney, oil stain pressure washing, exterior pressure cleaning sydney',
    openGraph: {
        title: 'Pressure Washing Sydney | Commercial Pressure Washing Services | Pro Clean Corp',
        description: 'Commercial pressure washing across Sydney. Hot and cold pressure washers for driveways, footpaths, walls, loading docks, and grease, algae, and oil removal.',
        url: 'https://www.procleancorp.com.au/pressure-washing-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Pressure washing Sydney commercial driveway footpath cleaning' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/pressure-washing-sydney' },
};

export default function PressureWashingSydneyPage() {
    const serviceInfo = {
        title: "Pressure Washing Sydney | Commercial & Industrial Services",
        description: "Exterior surfaces accumulate years of grime, biological growth, oil spills, and pollution that make commercial properties look neglected and create genuine slip hazards. Pro Clean Corp's commercial pressure washing services across Sydney use both hot and cold water pressure washers to deliver thorough, fast results on driveways, footpaths, walls, loading docks, and equipment. We remove grease, algae, oil, and industrial contamination from a wide range of surfaces and offer annual maintenance plans to keep your property's exterior clean year-round.",
        benefits: [
            "Commercial hot and cold pressure washers for maximum effectiveness on grease, oil, algae, and ingrained grime",
            "Driveway and car park cleaning removes oil, fuel stains, tyre marks, and traffic pollution for a professional first impression",
            "Footpath cleaning eliminates chewing gum, biological growth, food stains, and slip hazards from pedestrian areas",
            "Wall and building exterior washing removes pollution, mould, algae, and staining from all facade types",
            "Loading dock pressure washing removes grease, food waste, and fluid spills to keep your facility compliant and safe",
            "Annual maintenance plans available to keep all exterior surfaces clean and prevent heavy contamination buildup"
        ],
        process: [
            "Site walkthrough to identify surface types, contamination levels, and any sensitive areas requiring adjusted pressure settings or specialist treatment",
            "Pre-treatment of heavily soiled areas with degreasers, biocides, or mould treatments to break down contaminants before pressure washing begins",
            "Pressure washing using the appropriate equipment — hot water for grease and oil, cold water for biological growth, rotary surface cleaners for large flat areas",
            "Post-wash runoff management, drain protection, and final rinse to ensure all loosened contaminants and cleaning solutions are fully removed from the site"
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
                question: "What is the difference between commercial pressure washing and domestic pressure washing?",
                answer: "Commercial pressure washing uses significantly more powerful equipment than domestic hire units, with industrial machines capable of much higher pressure and flow rates. Commercial pressure washers — particularly hot water units — are far more effective on oil, grease, heavy biological growth, and industrial contamination. Pro Clean Corp's equipment is suited to large-scale commercial and industrial applications, not just residential driveways."
            },
            {
                question: "Can pressure washing remove oil and grease from loading docks?",
                answer: "Yes. Hot water pressure washing combined with an appropriate industrial degreaser is the most effective method for removing oil, grease, and fat from loading dock surfaces. The combination of heat and degreaser chemistry breaks down the hydrocarbon molecules, allowing them to be flushed away. We also manage wastewater containment to prevent contaminated runoff reaching stormwater drains."
            },
            {
                question: "Do you offer annual pressure washing maintenance plans?",
                answer: "Yes. Regular pressure washing maintenance prevents heavy contamination buildup, keeps surfaces looking professional year-round, and is considerably more cost-effective than occasional one-off cleans. We offer tailored annual maintenance plans for commercial properties including scheduled quarterly or biannual pressure washing of driveways, car parks, footpaths, and exterior walls."
            },
            {
                question: "Will pressure washing damage my building facade or concrete?",
                answer: "When performed by experienced operators with the correct equipment settings, pressure washing does not damage properly constructed surfaces. We adjust pressure, nozzle type, and distance based on the surface being cleaned. For heritage sandstone, rendered facades, or delicate materials, we use soft wash techniques with appropriate low pressure and chemical cleaning to protect the surface."
            },
            {
                question: "How do you handle wastewater during commercial pressure washing in Sydney?",
                answer: "Contaminated pressure washing runoff (particularly from oil, grease, or chemical cleaning) must not be allowed to enter stormwater drains under NSW EPA regulations. We use bunded containment, drain covers, wet vacuums, and pump-out systems to collect and dispose of contaminated wastewater in compliance with environmental regulations."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Pressure washing Sydney commercial driveway footpath cleaning" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp pressure washing Sydney loading dock cleaning" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Pressure Washing Sydney"
                serviceDescription="Commercial pressure washing services across Sydney using hot and cold pressure washers for driveways, footpaths, walls, loading docks, and grease, algae, and oil removal with annual maintenance plans."
                serviceUrl="/pressure-washing-sydney"
                serviceType="Pressure Washing"
                price="$$"
                additionalServices={["Driveway Pressure Washing", "Loading Dock Cleaning", "Footpath Cleaning", "Building Facade Washing", "Annual Maintenance Plans"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
