
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Cool Room Cleaning Sydney | Cold Storage & Refrigeration Cleaning | Pro Clean Corp',
    description: 'Specialist cool room and cold storage cleaning in Sydney. Food-grade sanitisers, HACCP compliance, mould prevention, and shelf-by-shelf deep clean. Call 1300 494 983.',
    keywords: 'cool room cleaning sydney, cold storage cleaning, refrigeration cleaning sydney, coolroom sanitisation, HACCP cleaning sydney, food safe cool room cleaning, mould removal cool room, cold storage hygiene, commercial freezer cleaning, walk-in cool room cleaning',
    openGraph: {
        title: 'Cool Room Cleaning Sydney | Cold Storage & Refrigeration Cleaning | Pro Clean Corp',
        description: 'HACCP-compliant cool room and cold storage cleaning across Sydney. Food-grade sanitisers, mould prevention, and shelf-by-shelf deep clean. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/cool-room-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/warehouse.webp', alt: 'Cool room cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/cool-room-cleaning-sydney' },
};

export default function CoolRoomCleaningPage() {
    const serviceInfo = {
        title: "Cool Room Cleaning Sydney",
        description: "Pro Clean Corp provides specialist cool room and cold storage cleaning services across Sydney for restaurants, hotels, food manufacturers, supermarkets, pharmaceutical distributors, and any business where refrigerated storage hygiene is critical to both food safety compliance and product integrity. Cool rooms and walk-in freezers present unique cleaning challenges — the constant cold and moisture environment creates ideal conditions for mould growth, bacterial biofilm, and yeast accumulation on walls, floor drains, shelf brackets, and door seals. Our trained technicians use food-grade, temperature-stable sanitisers and specialist cold-environment cleaning techniques to deliver a thorough, HACCP-compliant clean that protects your inventory, your compliance record, and the health of your customers.",
        benefits: [
            "Food-Grade Sanitisers: All cleaning agents used inside cool rooms are TGA-approved, food-grade sanitisers that are safe for contact with food storage surfaces and certified for use in HACCP-compliant food environments.",
            "Temperature-Maintained Cleaning: Our cleaning procedures are adapted for cold environments, using temperature-stable chemicals and appropriate application methods that remain effective even in sub-zero storage areas.",
            "Mould & Mildew Prevention: Specialist anti-mould treatment applied to wall panels, ceiling joins, floor drains, and door seal channels that eliminates existing mould growth and inhibits regrowth between scheduled cleaning visits.",
            "Condensate Drain Clearing: Complete cleaning and flushing of condensate drain lines, drain trays, and drainage channels to prevent blockages, odours, and the bacterial growth that blocked drains promote.",
            "Shelf-by-Shelf Deep Clean: Systematic removal and cleaning of all shelving racks, shelf clips, and shelf tracks — not just the exposed surfaces — to eliminate bacterial biofilm and food residue that accumulates on shelf supports.",
            "HACCP Compliance Documentation: Completion records, cleaning logs, and chemical use documentation provided after every service to support your HACCP plan, food safety audits, and local council inspection requirements."
        ],
        process: [
            "Pre-Clean Coordination & Stock Management: We coordinate with your kitchen or storage manager to schedule cleaning during minimum-stock periods, establish what stock can be temporarily relocated, and section the cool room for safe sequential cleaning.",
            "Shelf Dismantling & Gross Soiling Removal: All removable shelving is taken out, loose food debris and packaging residue is removed from floor and wall surfaces, and heavily soiled drains and drain trays are cleared.",
            "Food-Grade Sanitiser Application & Scrubbing: Food-grade, temperature-stable sanitiser is applied to all internal surfaces — walls, floor, ceiling, shelving, and door seals — with appropriate dwell time before scrubbing and rinse extraction.",
            "Drain Treatment, Shelf Reinstatement & Documentation: Drain lines are flushed and treated with anti-bacterial agent, shelving is reinstalled, a final inspection is completed by the supervisor, and full cleaning documentation is issued."
        ],
        whyChooseUs: [
            "Food Safety Trained: Our cool room cleaning technicians are trained in food safety protocols, HACCP principles, and appropriate chemical handling in food storage environments.",
            "HACCP-Compliant Documentation: We issue cleaning records, chemical datasheets, and completion reports in a format compatible with your HACCP plan and suitable for food safety audits.",
            "Temperature-Stable Chemical Systems: We use cleaning agents formulated specifically for cold and sub-zero environments that maintain their efficacy at cool room and freezer temperatures.",
            "Mould & Biofilm Specialists: Expert understanding of the mould and biofilm growth patterns specific to cool room environments, with targeted treatment protocols that address root causes rather than surface symptoms.",
            "Minimal Downtime: Our efficient team and systematic approach complete cool room cleaning with minimum disruption to your food storage operations and stock rotation schedules.",
            "Fully Insured: $20 million public liability insurance covering all cool room and cold storage cleaning activities across Sydney."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "How often should a commercial cool room be professionally cleaned?",
                answer: "Food safety authorities and HACCP guidelines generally recommend professional cool room cleaning every 3 months at minimum, with monthly cleaning recommended for high-use commercial kitchen cool rooms and fortnightly cleaning for cool rooms storing raw meat, seafood, or dairy. We can tailor a cleaning frequency to your specific operation and compliance requirements."
            },
            {
                question: "Do I need to empty my cool room before cleaning?",
                answer: "Ideally, the cool room should be at minimum stock levels for a deep clean. In practice, we can work in sections — cleaning one area while stock is consolidated to the other side. We coordinate carefully with your team to minimise disruption to your cold chain and avoid any stock having to leave the cool room unnecessarily."
            },
            {
                question: "Are your cleaning chemicals safe for food storage surfaces?",
                answer: "Yes. All chemicals we use inside cool rooms and freezers are TGA-approved, food-grade sanitisers that are safe for use in food contact environments. We use no bleach or harsh oxidising agents that could contaminate food or damage stainless steel and plastic cool room fittings. Full chemical safety data sheets are available on request."
            },
            {
                question: "Can you remove and treat mould from cool room door seals and walls?",
                answer: "Yes. Mould on door seals, wall panel joins, and ceiling edges is a very common cool room issue. We apply specialist anti-mould treatment to all affected areas during cleaning, and can recommend a seal replacement if door seals are beyond effective cleaning. Our mould inhibitor treatment slows regrowth between scheduled cleaning visits."
            },
            {
                question: "Do you provide documentation for our food safety audit after cool room cleaning?",
                answer: "Yes. After every cool room cleaning service we provide a signed completion record detailing the date of service, areas cleaned, chemicals used (with batch numbers), technician name, and supervisor sign-off. This documentation is formatted to support HACCP records and is readily accepted by NSW Food Authority inspectors."
            }
        ],
        images: [
            { src: "/images/services/warehouse.webp", alt: "Cool room cleaning Sydney - cold storage and refrigeration cleaning" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney HACCP-compliant cool room and walk-in freezer cleaning" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Cool Room Cleaning Sydney"
                serviceDescription="Specialist cool room and cold storage cleaning services in Sydney. Food-grade sanitisers, HACCP compliance documentation, mould prevention, and shelf-by-shelf deep clean."
                serviceUrl="/cool-room-cleaning-sydney"
                serviceType="Cool Room & Cold Storage Cleaning"
                price="$$"
                additionalServices={["Cold Storage Sanitisation", "Mould Remediation", "Condensate Drain Clearing", "HACCP Documentation", "Freezer Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
