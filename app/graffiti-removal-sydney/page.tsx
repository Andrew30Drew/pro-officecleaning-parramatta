
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Graffiti Removal Sydney | Professional Graffiti Cleaning Services | Pro Clean Corp',
    description: 'Professional graffiti removal in Sydney. Chemical removal, high-pressure washing, heritage-safe methods, anti-graffiti coating, and rapid 24-hour emergency response. Call 1300 494 983.',
    keywords: 'graffiti removal sydney, graffiti cleaning sydney, anti graffiti coating sydney, graffiti removal brick concrete, graffiti removal glass metal, heritage graffiti removal, pressure wash graffiti, rapid graffiti removal sydney, graffiti paint removal, commercial graffiti cleaning',
    openGraph: {
        title: 'Graffiti Removal Sydney | Professional Graffiti Cleaning Services | Pro Clean Corp',
        description: 'Fast, effective graffiti removal from any surface in Sydney. Chemical removal, pressure washing, heritage-safe methods, and anti-graffiti protective coating. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/graffiti-removal-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Graffiti removal Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/graffiti-removal-sydney' },
};

export default function GraffitiRemovalPage() {
    const serviceInfo = {
        title: "Graffiti Removal Sydney",
        description: "Pro Clean Corp provides professional graffiti removal services across Sydney, responding rapidly to vandalism on commercial, strata, industrial, and heritage properties with specialist chemical removal systems and high-pressure washing techniques that eliminate graffiti completely without damaging the underlying surface. Graffiti left visible invites further vandalism — research consistently shows that rapid removal within 24–48 hours dramatically reduces reoffending on the same surface. Our specialist technicians are equipped to safely remove spray paint, marker tags, and surface etching from brick, concrete, glass, metal, timber, and heritage-listed masonry, and can apply protective anti-graffiti coatings after removal to make future incidents far easier to address.",
        benefits: [
            "Chemical Removal Systems: Surface-specific graffiti removal solvents are applied to dissolve paint polymers and lift spray paint and marker tags without damaging the substrate beneath.",
            "High-Pressure Washing: Controlled high-pressure washing follows chemical treatment to fully flush and remove dissolved graffiti from porous surfaces including brick, rendered masonry, and concrete.",
            "Brick, Concrete, Glass & Metal: Expert knowledge of appropriate removal systems for all common graffiti target surfaces — porous masonry, smooth glass, painted metal, roller doors, and signage panels.",
            "Heritage-Safe Methods: Specialist low-pressure and chemical-only removal techniques approved for use on heritage-listed buildings and sandstone structures that cannot tolerate high-pressure washing or abrasive methods.",
            "Anti-Graffiti Protective Coating: Post-removal application of sacrificial or permanent anti-graffiti coating systems that form a barrier between the surface and future paint, allowing quick removal of reoffending without chemical damage to the substrate.",
            "Rapid 24-Hour Emergency Response: 24-hour emergency graffiti removal response for offensive, obscene, or high-visibility vandalism situations where urgent removal is required to protect your property and brand image."
        ],
        process: [
            "Rapid Response & Surface Assessment: Our technician arrives quickly, assesses the surface type, graffiti medium (spray paint, marker, adhesive), and selects the appropriate chemical removal system and application method.",
            "Chemical Pre-Treatment Application: The appropriate graffiti solvent is applied to the vandalism, allowed the correct dwell time to penetrate and dissolve the paint polymer, and agitated where necessary to maximise chemical penetration.",
            "Pressure Wash or Wipe Removal: Dissolved graffiti is removed by controlled high-pressure washing on appropriate surfaces or by absorbent wipe technique on glass, painted metal, and smooth surfaces where pressure washing is not appropriate.",
            "Shadow Treatment & Anti-Graffiti Coating: Any residual 'shadowing' from the graffiti is treated with specialist shadow lifters, and anti-graffiti protective coating is applied if required to prevent future vandalism adhesion."
        ],
        whyChooseUs: [
            "Graffiti Removal Specialists: Dedicated graffiti removal technicians with extensive experience across all Sydney surface types, from city CBD brick and glass to suburban rendered walls and heritage sandstone.",
            "Surface-Specific Chemical Systems: We maintain a comprehensive inventory of graffiti removal products matched to specific surfaces — eliminating the guesswork and surface damage risk of using the wrong product.",
            "Heritage Property Experience: Specific experience and approved methods for graffiti removal from heritage-listed buildings, sandstone facades, and architecturally significant structures requiring sensitive treatment.",
            "24-Hour Emergency Availability: Round-the-clock emergency response for high-priority graffiti situations — particularly important for offensive or threatening content that must be removed immediately.",
            "Anti-Graffiti Coating Programs: We offer ongoing protective coating programs that reduce the cost and impact of future graffiti incidents, especially beneficial for properties that experience repeat vandalism.",
            "Fully Insured: $20 million public liability insurance covering all graffiti removal activities across commercial, residential, strata, and public infrastructure properties."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "How quickly can you respond to graffiti vandalism in Sydney?",
                answer: "We offer a 24-hour emergency graffiti removal response for urgent situations including offensive, obscene, or highly visible vandalism. For standard graffiti removal bookings, we typically schedule within 24–48 hours of your call. Rapid removal is important — research shows graffiti removed within 24 hours dramatically reduces the likelihood of reoffending on the same surface."
            },
            {
                question: "Can you remove graffiti from heritage-listed sandstone buildings?",
                answer: "Yes. Heritage-listed buildings require specialist treatment — high-pressure washing is often inappropriate for sandstone, render, and aged brick that form heritage facades. We use low-pressure chemical removal systems approved for heritage surfaces, applying solvents at appropriate dilutions and using soft brushing and absorbent wipe techniques to lift paint without surface damage."
            },
            {
                question: "Will graffiti removal leave a shadow or ghost mark?",
                answer: "Most graffiti can be fully removed without leaving a shadow, particularly when addressed quickly. For older or deeply absorbed paint on porous surfaces, a faint 'ghost' shadow may be visible after removal. We treat shadows with specialist shadow-lifting products that typically eliminate or significantly reduce residual marks. If a shadow cannot be fully removed, colour matching and spot painting is an alternative option."
            },
            {
                question: "What is anti-graffiti coating and should I get it applied?",
                answer: "Anti-graffiti coatings form a protective barrier over the surface that prevents spray paint from bonding directly with the substrate. Sacrificial coatings are removed along with the graffiti during cleaning and must be reapplied. Permanent coatings remain in place and simply require pressure washing to clean. Anti-graffiti coating is strongly recommended for properties that have experienced repeat vandalism or are in high-risk locations."
            },
            {
                question: "Can you remove graffiti from glass shopfronts and roller doors?",
                answer: "Yes. Glass and metal surfaces including shopfront windows, roller doors, and metal cladding require different removal products and techniques to brick and concrete. We use specialised glass-safe solvents and blade scrapers for glass surfaces, and appropriate metal-safe products for painted or raw metal roller doors and cladding — achieving clean results without scratching or etching the surface."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Graffiti removal Sydney - chemical and pressure wash removal from brick and concrete" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney anti-graffiti coating and vandalism cleanup" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Graffiti Removal Sydney"
                serviceDescription="Professional graffiti removal services in Sydney. Chemical removal, high-pressure washing, heritage-safe methods, and anti-graffiti protective coating with 24-hour emergency response."
                serviceUrl="/graffiti-removal-sydney"
                serviceType="Graffiti Removal"
                price="$$"
                additionalServices={["Chemical Graffiti Removal", "Heritage Surface Cleaning", "Anti-Graffiti Coating", "Emergency Graffiti Response", "Shadow Treatment"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
