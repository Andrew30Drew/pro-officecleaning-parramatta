import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Fire Damage Cleaning Sydney | Smoke & Soot Removal Services | Pro Clean Corp',
    description: 'Pro Clean Corp restores fire-damaged properties in Sydney. Soot removal, smoke odour elimination, thermal fogging, ozone treatment, and insurance reporting. Call now.',
    keywords: 'fire damage cleaning sydney, smoke damage cleaning sydney, soot removal sydney, smoke odour elimination, fire restoration cleaning, ozone treatment sydney, thermal fogging sydney, structural drying fire damage, insurance fire cleaning sydney',
    openGraph: {
        title: 'Fire Damage Cleaning Sydney | Smoke & Soot Removal Services | Pro Clean Corp',
        description: 'Specialist fire and smoke damage cleaning in Sydney. Soot removal, thermal fogging, ozone odour treatment, and full insurance documentation. Available 24/7.',
        url: 'https://www.procleancorp.com.au/fire-damage-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Fire damage cleaning Sydney soot and smoke restoration' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/fire-damage-cleaning-sydney' },
};

export default function FireDamageCleaningSydneyPage() {
    const serviceInfo = {
        title: "Fire Damage Cleaning Sydney | Smoke & Soot Restoration",
        description: "Fire damage leaves behind far more than visible soot — toxic smoke particles penetrate walls, ceilings, HVAC systems, and furnishings, creating persistent odour and long-term health risks if not professionally remediated. Pro Clean Corp's fire damage cleaning specialists in Sydney use a multi-stage restoration process: dry and wet soot removal, chemical sponging of all affected surfaces, thermal fogging and ozone treatment for deep smoke odour elimination, structural drying to address water damage from firefighting, and comprehensive insurance reporting. We work directly with insurers and restorers to get your property safe and habitable as quickly as possible.",
        benefits: [
            "Soot removal from walls, ceilings, structural beams, and all surfaces using dry and wet chemical sponging techniques",
            "Smoke odour elimination via thermal fogging that penetrates cavities and materials to neutralise odour at a molecular level",
            "Ozone treatment eliminates residual smoke smell from air, soft furnishings, and porous building materials",
            "Structural drying addresses water damage caused by fire suppression activities, preventing secondary mould growth",
            "Detailed insurance documentation with scope of works, before/after evidence, and assessor-ready records",
            "Restoration-ready handover — surfaces cleaned, dried, and prepared for repainting or re-occupation"
        ],
        process: [
            "Emergency response and site safety assessment — we establish which areas are safe to enter and begin containment to prevent cross-contamination to unaffected zones",
            "Dry soot removal using chemical sponging and HEPA vacuuming, followed by wet cleaning of all soot-affected surfaces including walls, ceilings, floors, and contents",
            "Thermal fogging and ozone generation deployed in sequence to penetrate cavities, wall voids, and porous materials, permanently neutralising smoke odour molecules",
            "Structural drying using desiccant dehumidifiers and industrial air movers, with moisture mapping to confirm dryness before handover to builders or insurers"
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
                question: "Why is professional fire damage cleaning necessary in Sydney?",
                answer: "Smoke and soot are chemically acidic and can permanently stain and corrode surfaces within hours if untreated. Smoke particles deeply penetrate porous materials, making DIY cleaning ineffective. Professional fire damage cleaning uses specialist techniques — including thermal fogging and ozone treatment — to fully remediate the property and prevent long-term health risks from toxic residues."
            },
            {
                question: "What is thermal fogging and how does it remove smoke odour?",
                answer: "Thermal fogging uses a heated vaporiser to convert a deodorising solution into tiny particles that penetrate the same areas smoke did — including wall cavities, ceiling voids, and porous materials. The deodorising agents chemically neutralise smoke odour molecules at the source, providing a permanent solution rather than masking the smell."
            },
            {
                question: "Do you work directly with insurance companies for fire damage claims in Sydney?",
                answer: "Yes. Pro Clean Corp has extensive experience working with all major Australian insurers. We prepare detailed scope-of-works documentation, before/after photographic evidence, and cost breakdowns in formats accepted by insurance assessors, streamlining the claims and approval process."
            },
            {
                question: "How long does fire damage cleaning take?",
                answer: "The timeline depends on the extent of fire, soot, and smoke damage. A contained room fire may take 2–3 days; a whole-property fire incident requiring full soot removal, structural drying, and repeated ozone treatments can take 5–10 days. We provide a realistic timeline on our initial site assessment."
            },
            {
                question: "Can you clean fire-damaged commercial properties in Sydney?",
                answer: "Yes. We handle fire damage cleaning for all property types including commercial offices, warehouses, restaurants, retail stores, strata buildings, and industrial facilities. We can mobilise large teams for major commercial incidents to minimise business downtime."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Fire damage cleaning Sydney soot and smoke restoration" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp fire damage restoration Sydney" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Fire Damage Cleaning Sydney"
                serviceDescription="Specialist fire and smoke damage cleaning in Sydney including soot removal, thermal fogging, ozone odour treatment, structural drying, and full insurance documentation."
                serviceUrl="/fire-damage-cleaning-sydney"
                serviceType="Fire & Smoke Damage Cleaning"
                price="$$"
                additionalServices={["Soot Removal", "Smoke Odour Elimination", "Thermal Fogging", "Ozone Treatment", "Insurance Documentation"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
