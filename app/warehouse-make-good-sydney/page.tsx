import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Warehouse Make Good Sydney | End of Lease Industrial Cleaning | Pro Clean Corp',
    description: 'Pro Clean Corp delivers warehouse make good cleaning across Sydney. Full industrial deep clean, oil & grease floor removal, racking area cleaning, loading dock pressure wash, bond-ready.',
    keywords: 'warehouse make good sydney, end of lease warehouse cleaning, industrial bond cleaning, warehouse deep clean, oil grease floor removal, loading dock cleaning, industrial make good, factory end of lease sydney',
    openGraph: {
        title: 'Warehouse Make Good Sydney | End of Lease Industrial Cleaning | Pro Clean Corp',
        description: 'Exit your industrial lease with confidence. Full make good cleaning including floor degreasing, loading dock pressure wash, and landlord sign-off ready standard.',
        url: 'https://www.procleancorp.com.au/warehouse-make-good-sydney',
        type: 'website',
        images: [{ url: '/images/services/warehouse.webp', alt: 'Warehouse make good cleaning Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/warehouse-make-good-sydney' },
};

export default function WarehouseMakeGoodPage() {
    const serviceInfo = {
        title: "Warehouse Make Good Sydney",
        description: "Exiting an industrial lease requires returning the property to its original condition — and landlords of commercial warehouses apply strict standards before releasing bonds. Pro Clean Corp specialises in warehouse make good cleaning across Sydney, delivering full industrial deep cleans that meet real estate agent checklists and landlord sign-off requirements. From oil and grease floor removal and racking area cleaning to loading dock pressure washing and high-level cobweb removal, our experienced industrial teams handle every scope.",
        benefits: [
            "Full Industrial Deep Clean: Comprehensive cleaning of all warehouse areas from floor to ceiling.",
            "Oil and Grease Floor Removal: Industrial degreasers and machine scrubbing to lift staining from concrete.",
            "Racking Area Cleaning: Removal of dust, debris, and product residue from racking bays and uprights.",
            "Loading Dock Pressure Wash: High-pressure cleaning of loading bays, dock levellers, and hardstands.",
            "Bond Recovery Standard: We work directly to the agent's checklist to maximise bond return.",
            "Landlord Sign-Off Ready: Final walkthrough with site supervisor and photographic documentation provided."
        ],
        process: [
            "Scope review against the agent's make good checklist and site walkthrough to assess condition.",
            "Full industrial deep clean including high-level dusting, floor scrubbing, amenities, and office areas.",
            "Loading dock and hardstand pressure washing, waste clearance, and racking area detailing.",
            "Final supervisor inspection and photographic handover documentation for your lease records."
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
            { question: "Can you degrease oil-stained concrete floors?", answer: "Yes, we use industrial-grade degreasers combined with ride-on scrubbing machines to lift stubborn oil and grease staining from concrete warehouse floors." },
            { question: "Do you clean high-level cobwebs and rafters?", answer: "Yes, we use scissor lifts and extension equipment to reach high ceilings, beams, lighting, and ventilation systems as part of a complete make good clean." },
            { question: "Can you remove rubbish and leftover stock?", answer: "Yes, we offer full site clearance including leftover pallets, packaging, and general waste removal as part of our make good service." },
            { question: "Do you work to the agent's make good checklist?", answer: "Absolutely. We request the agent's specific requirements before starting and complete a detailed walkthrough against their checklist to ensure landlord sign-off." },
            { question: "Do you pressure wash loading docks?", answer: "Yes, loading docks, dock levellers, and surrounding hardstands are pressure washed as a standard component of our warehouse make good service." }
        ],
        images: [
            { src: "/images/services/warehouse.webp", alt: "Warehouse make good cleaning Sydney" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Warehouse Make Good Sydney"
                serviceDescription="Full end of lease industrial make good cleaning for warehouses and factories across Sydney, including floor degreasing, racking area cleaning, loading dock pressure wash, and bond recovery standard service."
                serviceUrl="/warehouse-make-good-sydney"
                serviceType="Warehouse Make Good Cleaning"
                price="$$"
                additionalServices={["Industrial Floor Scrubbing", "Loading Dock Pressure Wash", "High-Level Cleaning", "Rubbish Removal", "Office Deep Clean"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
