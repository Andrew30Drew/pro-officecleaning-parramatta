import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Vinyl Floor Polishing Sydney | Floor Strip Seal & Polish | Pro Clean Corp',
    description: 'Professional vinyl floor polishing in Sydney. Strip and reseal, machine polishing, burnishing, hospital-grade sealer, anti-slip finish, LVT and VCT flooring, periodic maintenance.',
    keywords: 'vinyl floor polishing sydney, floor strip seal sydney, floor polishing sydney, burnishing sydney, hospital grade floor sealer, anti-slip floor finish, LVT cleaning sydney, VCT floor polishing, vinyl plank care sydney, commercial floor maintenance',
    openGraph: {
        title: 'Vinyl Floor Polishing Sydney | Floor Strip Seal & Polish | Pro Clean Corp',
        description: 'Expert vinyl floor polishing and strip-and-seal services in Sydney. Machine polishing, burnishing, hospital-grade sealer, anti-slip finish for LVT, VCT, and commercial vinyl.',
        url: 'https://www.procleancorp.com.au/vinyl-floor-polishing-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Vinyl floor polishing Sydney strip seal machine polish burnish' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/vinyl-floor-polishing-sydney' },
};

export default function VinylFloorPolishingSydneyPage() {
    const serviceInfo = {
        title: "Vinyl Floor Polishing Sydney | Strip, Seal & Polish",
        description: "Vinyl floors in commercial environments take a relentless beating from foot traffic, trolleys, equipment, and cleaning chemicals. Over time, the protective sealer layer wears away, leaving floors looking dull, yellowed, and difficult to clean. Pro Clean Corp restores commercial vinyl floors across Sydney using a complete strip, seal, and polish process — removing all old sealer and applying fresh hospital-grade sealer coats that protect the vinyl and restore a brilliant, long-lasting shine. We service LVT (luxury vinyl tile), VCT (vinyl composition tile), homogeneous vinyl sheet, and vinyl plank flooring across hospitals, schools, offices, retail stores, and industrial facilities.",
        benefits: [
            "Strip and reseal removes all old, contaminated sealer and applies fresh coats — restoring the floor's protective barrier completely",
            "Machine polishing brings a high-gloss finish to freshly sealed floors using rotary polishers and appropriate polishing pads",
            "Burnishing with ultra-high-speed burnishers creates a deep, wet-look gloss on sealer-finished floors between strip cycles",
            "Vinyl plank care protocols clean and restore LVT planks without over-wetting joins or lifting adhesive",
            "Hospital-grade sealer applied in multiple coats — durable, hygienic, and easy to maintain for healthcare, education, and food facilities",
            "Anti-slip finish available as a sealer additive for wet areas, commercial kitchens, and aged care facilities requiring enhanced slip resistance"
        ],
        process: [
            "Floor assessment to determine the current sealer condition, number of strip coats required, and the appropriate sealer system for your floor type and facility use",
            "Strip phase: chemical stripper applied and agitated with a single disc floor machine to dissolve all existing sealer layers, then wet-vacuumed and rinsed until the floor is completely clean and residue-free",
            "Sealer application: multiple coats of appropriate hospital-grade or commercial sealer applied with flat mops, allowing full drying between coats to build a hard, durable protective film",
            "Machine polish or burnish to achieve the desired finish level — from satin to high-gloss — followed by final inspection and documentation of the completed works"
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
                question: "What is the strip and seal process for vinyl floors?",
                answer: "Strip and seal is a two-phase floor restoration process. The strip phase uses a chemical floor stripper — applied and agitated with a single disc floor machine — to dissolve and remove all existing sealer coats from the vinyl surface. The seal phase then applies multiple fresh coats of commercial floor sealer that bond to the clean vinyl, creating a new protective layer. The result is a floor that looks new, is easier to maintain, and is protected against wear and soiling."
            },
            {
                question: "How often should commercial vinyl floors be stripped and resealed in Sydney?",
                answer: "Strip and reseal frequency depends on foot traffic intensity. High-traffic commercial floors (hospitals, schools, supermarkets) may require stripping annually or every 18 months. Medium-traffic offices and retail environments typically need stripping every 2–3 years. Between strips, regular burnishing and recoating extends the sealer life. We assess your floor's condition and recommend a maintenance programme."
            },
            {
                question: "What is the difference between machine polishing and burnishing?",
                answer: "Machine polishing (using a standard rotary polisher with a polishing pad) is performed after strip and seal to bring up the initial shine on fresh sealer. Burnishing uses an ultra-high-speed (UHS) burnisher — spinning at 1,500–3,000+ RPM — to generate heat that fuses the sealer surface into a deep, wet-look gloss. Burnishing is used as a maintenance step between strip cycles to restore the shine that fades with daily cleaning and traffic."
            },
            {
                question: "Can you polish LVT (luxury vinyl tile) and vinyl plank floors?",
                answer: "Yes, but LVT and vinyl plank require specific products and methods. Many LVT products have a factory-applied polyurethane wear layer that should not be stripped with chemical strippers. We use LVT-compatible, pH-neutral cleaning and application of purpose-formulated LVT floor finish rather than traditional sealer. We always confirm the manufacturer's recommendations before applying any chemical to LVT."
            },
            {
                question: "Do you offer periodic vinyl floor maintenance programmes?",
                answer: "Yes. Periodic maintenance programmes — combining regular spray buffing or burnishing with occasional recoating — extend the life of the sealer system between full strip cycles and keep floors looking consistently professional. We design maintenance programmes based on your floor type, traffic level, and daily cleaning practices, and can include vinyl floor maintenance in your regular commercial cleaning contract."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Vinyl floor polishing Sydney strip seal machine polish burnish" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp vinyl floor polishing Sydney commercial floors" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Vinyl Floor Polishing Sydney"
                serviceDescription="Professional vinyl floor polishing and strip-seal services in Sydney including machine polishing, burnishing, hospital-grade sealer, anti-slip finish for LVT, VCT, and commercial vinyl flooring with periodic maintenance programmes."
                serviceUrl="/vinyl-floor-polishing-sydney"
                serviceType="Vinyl Floor Polishing"
                price="$$"
                additionalServices={["Strip and Reseal", "Machine Polishing", "Burnishing", "Anti-Slip Floor Treatment", "LVT Floor Care"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
