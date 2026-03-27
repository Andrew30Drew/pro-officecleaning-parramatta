import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Flood Damage Cleaning Sydney | Water Damage Restoration Cleaning | Pro Clean Corp',
    description: 'Pro Clean Corp provides expert flood damage cleaning in Sydney. Water extraction, structural drying, mould prevention, sewage contamination cleanup, and insurance documentation.',
    keywords: 'flood damage cleaning sydney, water extraction sydney, structural drying sydney, flood cleanup sydney, sewage contamination cleaning, mould prevention after flood, desiccant dehumidification sydney, water damage restoration sydney, insurance flood cleaning',
    openGraph: {
        title: 'Flood Damage Cleaning Sydney | Water Damage Restoration Cleaning | Pro Clean Corp',
        description: 'Expert flood damage cleaning and water restoration in Sydney. Water extraction, structural drying, sewage decontamination, and insurance documentation. Available 24/7.',
        url: 'https://www.procleancorp.com.au/flood-damage-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Flood damage cleaning Sydney water extraction and drying' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/flood-damage-cleaning-sydney' },
};

export default function FloodDamageCleaningSydneyPage() {
    const serviceInfo = {
        title: "Flood Damage Cleaning Sydney | Water Damage Restoration",
        description: "Flood damage demands immediate professional action — every hour that water sits in your property increases the risk of structural damage, mould growth, and costly repair bills. Pro Clean Corp's flood damage cleaning teams operate 24/7 across Sydney, responding to storm flooding, burst pipes, sewage overflow, and building inundation events. We deploy industrial water extraction equipment, desiccant dehumidifiers, and thermal drying systems to remove all moisture from your structure fast and verify complete dryness with moisture mapping. Every job includes full insurance documentation to support your claim.",
        benefits: [
            "Water extraction using truck-mounted and portable industrial systems removes standing water immediately on arrival",
            "Desiccant dehumidification and thermal drying achieves complete structural dryness, preventing mould and timber rot",
            "Sewage contamination cleaned and decontaminated under strict biohazard protocols for complete occupant safety",
            "Mould prevention treatments applied to all affected surfaces and cavities as a standard precautionary measure",
            "Moisture mapping with thermal imaging confirms all structural materials are dried to IICRC standard before handover",
            "Comprehensive insurance documentation — scope of works, moisture readings, and before/after evidence for your insurer"
        ],
        process: [
            "Emergency dispatch on your call — 24/7 flood damage teams arrive within 2–4 hours across Greater Sydney with full extraction and drying equipment",
            "Rapid water extraction and removal of unsalvageable materials — standing water eliminated, wet carpets extracted, affected contents moved to safe zones",
            "Structural drying phase using desiccant dehumidifiers, industrial air movers, and heat drying — moisture readings taken daily until IICRC dryness standards are confirmed",
            "Final sanitisation, mould prevention treatment, and insurance documentation package prepared for handover to your insurer or property manager"
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
                question: "How soon should I call for flood damage cleaning after my Sydney property floods?",
                answer: "Immediately. Water damage worsens exponentially with time — mould can begin growing within 24–48 hours, and structural materials absorb moisture rapidly. Call Pro Clean Corp as soon as it is safe to do so. Our 24/7 teams will mobilise within hours."
            },
            {
                question: "What is the difference between water extraction and structural drying?",
                answer: "Water extraction removes standing and surface water using powerful vacuum extraction equipment. Structural drying is the subsequent process of removing moisture absorbed into floors, walls, subfloor, and framing using desiccant dehumidifiers and air movers. Both steps are essential — extraction alone will not dry a flooded building adequately."
            },
            {
                question: "Can you clean up sewage contamination from flooding in Sydney?",
                answer: "Yes. Sewage contamination (Category 3 black water) requires specialist biohazard decontamination protocols. Our teams are certified and equipped for safe sewage cleanup, including removal of contaminated materials, disinfection of all affected surfaces, and air sanitation. This is not a DIY job — sewage contamination poses serious health risks."
            },
            {
                question: "Will flood damage cleaning prevent mould from growing?",
                answer: "Yes, when carried out promptly and thoroughly. Our process includes achieving full structural dryness verified by moisture mapping, plus application of antimicrobial treatments to all affected surfaces. This eliminates the moisture mould requires to grow. If drying is delayed, mould remediation may also be necessary."
            },
            {
                question: "Do you provide documentation for flood damage insurance claims in Sydney?",
                answer: "Yes. All flood damage cleaning jobs include a comprehensive insurance documentation package: moisture readings at entry and completion, scope of works, before/after photographic evidence, and a detailed invoice with line items acceptable to Australian insurers. We can also attend site with your loss assessor if required."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Flood damage cleaning Sydney water extraction and structural drying" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp flood damage restoration Sydney" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Flood Damage Cleaning Sydney"
                serviceDescription="Professional flood damage cleaning and water restoration in Sydney including water extraction, structural drying, sewage decontamination, mould prevention, and full insurance documentation."
                serviceUrl="/flood-damage-cleaning-sydney"
                serviceType="Flood Damage Cleaning"
                price="$$"
                additionalServices={["Water Extraction", "Structural Drying", "Sewage Decontamination", "Mould Prevention", "Insurance Documentation"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
