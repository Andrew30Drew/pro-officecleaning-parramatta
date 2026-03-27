
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Driveway Cleaning Sydney | Concrete & Paver Pressure Washing | Pro Clean Corp',
    description: 'Professional driveway cleaning in Sydney. High-pressure washing, oil and grease removal, mould and algae elimination on concrete, pavers, and brick. Call 1300 494 983.',
    keywords: 'driveway cleaning sydney, concrete driveway cleaning, paver pressure washing sydney, oil stain removal driveway, driveway pressure washing, mould removal driveway, algae cleaning driveway, commercial driveway cleaning, sale prep driveway cleaning, brick cleaning sydney',
    openGraph: {
        title: 'Driveway Cleaning Sydney | Concrete & Paver Pressure Washing | Pro Clean Corp',
        description: 'Restore your driveway to like-new condition. High-pressure washing, oil stain removal, and mould elimination on concrete, pavers, and brick across Sydney. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/driveway-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Driveway cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/driveway-cleaning-sydney' },
};

export default function DrivewayCleaningPage() {
    const serviceInfo = {
        title: "Driveway Cleaning Sydney",
        description: "Pro Clean Corp delivers professional driveway and external hardscape cleaning services across Sydney, restoring concrete driveways, paved surfaces, brick pathways, and commercial forecourts to a clean, safe, and presentable condition using industrial-grade high-pressure washing equipment. A neglected driveway accumulates oil stains, tyre marks, mould, algae, lichen, and atmospheric dirt that degrade both appearance and safety — creating slip hazards and reducing your property's street appeal and value. Our trained pressure washing technicians select the right equipment, pressure settings, and surface treatments for each material type, delivering results that dramatically transform driveway presentation for residential sales preparation, strata building maintenance, commercial property management, and retail forecourt upkeep.",
        benefits: [
            "High-Pressure Washing: Industrial hot and cold water pressure washing equipment delivering up to 4,000 PSI to thoroughly clean concrete, paving, and brick surfaces at commercial scale.",
            "Oil & Grease Stain Removal: Targeted pre-treatment with specialist concrete degreasing agents breaks down oil and grease molecules before pressure washing, achieving maximum stain removal from driveways and forecourts.",
            "Mould & Algae Elimination: Specialist biocidal treatment kills mould, algae, lichen, and moss growth at the root, followed by high-pressure washing to remove all biological growth and prevent rapid recolonisation.",
            "Pavers, Concrete, & Brick: Expert knowledge of appropriate pressure settings and surface-specific techniques for all driveway materials — concrete, exposed aggregate, clay brick, sandstone pavers, and ceramic tile.",
            "Commercial Driveways & Forecourts: High-output cleaning capacity for large commercial driveways, service station forecourts, warehouse access roads, retail car parks, and industrial entry areas.",
            "Sale-Prep Driveway Cleaning: Property-sale-focused cleaning packages that restore driveway presentation to maximise curb appeal for real estate listing photography and buyer inspections."
        ],
        process: [
            "Surface Assessment & Pre-Treatment: Our technician assesses the driveway material type, soiling level, and staining pattern to select appropriate pressure settings and pre-treatment chemicals for oil, mould, or atmospheric staining.",
            "Pre-Treatment Application: Degreasing or biocidal pre-treatment is applied to heavily stained areas and allowed appropriate dwell time to chemically break down contamination before mechanical pressure washing begins.",
            "High-Pressure Washing: Industrial pressure washing systematically cleans the entire driveway surface, with rotary surface cleaners used for large flat areas to ensure even cleaning without streaking or track marks.",
            "Rinse, Edge Clean & Optional Sealing: A final rinse removes all loosened contamination, edge and border areas are hand-cleaned, and sealing can be applied to protect the cleaned surface and extend the cleaning result."
        ],
        whyChooseUs: [
            "Industrial Pressure Equipment: Commercial-grade hot and cold water pressure washing units with rotary surface cleaners delivering consistent, streak-free results across large driveway areas.",
            "Surface-Specific Expertise: We understand the pressure limits, detergent requirements, and technique variations needed for different driveway materials — including delicate sandstone and clay pavers — to clean effectively without surface damage.",
            "Oil Stain Specialists: Targeted degreasing pre-treatment combined with hot water pressure washing gives us the best possible outcome on old, deep-set oil stains that cold water pressure washing alone cannot shift.",
            "Mould & Biological Growth Experts: Our biocidal treatments address biological growth at the root level, not just the surface — delivering results that last longer than pressure washing alone.",
            "Property Sale Specialists: We understand what real estate agents and buyers look for and deliver driveway presentation that genuinely enhances property value and photography outcomes.",
            "Fully Insured: $20 million public liability insurance covering all driveway and external cleaning activities for residential, strata, and commercial properties."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "Can you remove old oil stains from a concrete driveway?",
                answer: "Yes. We apply specialist concrete degreasing agents to oil-stained areas and allow appropriate dwell time before hot water high-pressure washing. The success rate depends on stain age and concrete porosity. Fresh oil stains respond very well and are mostly or fully removed. Very old, deeply absorbed stains may be significantly lightened but not always completely eliminated. We provide an honest assessment before commencing."
            },
            {
                question: "Will high-pressure washing damage my pavers or concrete?",
                answer: "When performed correctly by experienced technicians, high-pressure washing does not damage sound concrete or pavers. We calibrate pressure settings to the specific surface type — lower pressure for delicate sandstone or clay pavers, higher pressure for poured concrete and exposed aggregate. We avoid holding the lance too close or at angles that could dislodge paver sand or etch soft stone."
            },
            {
                question: "How do you remove mould and algae from a driveway?",
                answer: "We apply a specialist biocidal pre-treatment to areas affected by mould, algae, lichen, or moss. This chemical kills the biological growth at the root level and loosens its grip on the surface. After appropriate dwell time, high-pressure washing removes all dead growth, leaving a clean surface. The biocidal treatment also provides residual protection that slows recolonisation compared to pressure washing alone."
            },
            {
                question: "Can you clean a large commercial driveway or forecourt?",
                answer: "Yes. We operate high-output commercial pressure washing equipment with rotary surface cleaners capable of cleaning several hundred square metres per hour. Large commercial driveways, service station forecourts, warehouse access areas, and retail car parks are all within our standard capability. We provide fixed pricing for large-area commercial cleaning."
            },
            {
                question: "Should I seal my driveway after pressure washing?",
                answer: "Sealing after pressure washing is an excellent investment that protects the clean surface from rapid resoiling, oil penetration, and biological growth. For concrete driveways we recommend a penetrating concrete sealer. For clay or sandstone pavers, a paver sealer preserves the clean finish and is available in matte or wet-look finishes. We offer sealing as an add-on to our driveway cleaning service."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Driveway cleaning Sydney - high pressure concrete and paver washing" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney oil stain removal and driveway restoration" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Driveway Cleaning Sydney"
                serviceDescription="Professional driveway and concrete pressure washing services in Sydney. Oil and grease removal, mould and algae elimination, and sale-preparation cleaning for concrete, pavers, and brick."
                serviceUrl="/driveway-cleaning-sydney"
                serviceType="Driveway & Concrete Cleaning"
                price="$$"
                additionalServices={["Concrete Pressure Washing", "Oil Stain Removal", "Mould & Algae Treatment", "Paver Cleaning", "Driveway Sealing"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
