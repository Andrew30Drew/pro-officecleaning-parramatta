import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Builders Cleaning Sydney | Post Construction Sparkle Clean | Pro Clean Corp',
    description: 'Pro Clean Corp delivers specialist builders cleaning across Sydney. Construction dust removal, paint splatter, window sticker removal, debris clearance, final sparkle clean & defects-ready.',
    keywords: 'builders cleaning sydney, post construction cleaning sydney, construction sparkle clean, renovation cleaning sydney, final builders clean, construction dust removal, paint splatter cleaning, window sticker removal',
    openGraph: {
        title: 'Builders Cleaning Sydney | Post Construction Sparkle Clean | Pro Clean Corp',
        description: 'Specialist builders cleaning for residential and commercial projects across Sydney. Dust removal, paint splatter, window sticker removal, final sparkle clean.',
        url: 'https://www.procleancorp.com.au/builders-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Builders cleaning Sydney post construction' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/builders-cleaning-sydney' },
};

export default function BuildersCleaningPage() {
    const serviceInfo = {
        title: "Builders Cleaning Sydney",
        description: "Construction projects always leave behind fine dust, paint splatter, adhesive residue, and debris that standard cleaning cannot handle. Pro Clean Corp provides specialist builders cleaning services for residential and commercial construction sites across Sydney. We partner with builders, developers, and project managers to deliver the final sparkle clean that transforms a construction site into a pristine, handover-ready property — on time and to defects inspection standard.",
        benefits: [
            "Construction Dust Removal: Industrial HEPA vacuuming and wiping of all surfaces including cornices and ledges.",
            "Paint Splatter Cleaning: Specialist removal of paint spots, render splatter, and silicone smears from all surfaces.",
            "Window Sticker Removal: Safe removal of protective film, stickers, and render from glass without scratching.",
            "Debris Clearance: Full site debris removal and coordination with waste disposal.",
            "Final Sparkle Clean: Comprehensive detail clean of every room, fixture, and fitting to presentation standard.",
            "Defects Inspection Ready: Delivered to the standard required for formal defects inspection and PC.",
            "Builder Guarantee: If the site isn't accepted, we return to rectify at no additional cost."
        ],
        process: [
            "Rough clean: Removing larger debris, initial sweep/vacuum, and surface wipe-down.",
            "Final clean: Thorough detailing of all surfaces, windows, fixtures, floors, and wet areas.",
            "Sparkle clean: High-detail polish of glass, tiles, tapware, and kitchen surfaces.",
            "Sign-off: Walkthrough with site supervisor and photographic completion report."
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
            { question: "Do your cleaners have White Cards?", answer: "Yes, all our builders cleaning staff hold current White Cards and are experienced in working on active construction sites with full site induction." },
            { question: "Can you remove paint from windows?", answer: "Yes, we use specialist scrapers and solvents to carefully remove paint, render, and stickers from glass without scratching the surface." },
            { question: "What is included in a builders sparkle clean?", answer: "A sparkle clean includes detailed cleaning of all glass, tapware, tiles, kitchen surfaces, light fittings, skirting boards, window tracks, and floors to a defects-inspection-ready standard." },
            { question: "How much notice do you need?", answer: "We understand construction schedules change. We are as flexible as possible and frequently accommodate 24-48 hour requests around handover milestones." },
            { question: "Do you offer a guarantee if the clean is not accepted?", answer: "Yes. If your builder or client identifies any cleaning issues within 72 hours of our completion, we will return to rectify the work at no additional cost." }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Builders cleaning Sydney post construction" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Builders Cleaning Sydney"
                serviceDescription="Specialist post-construction builders cleaning for residential and commercial projects across Sydney including construction dust removal, paint splatter cleaning, window sticker removal, debris clearance, and final sparkle clean to defects inspection standard."
                serviceUrl="/builders-cleaning-sydney"
                serviceType="Builders Cleaning"
                price="$$"
                additionalServices={["Construction Dust Removal", "Window Cleaning", "Floor Scrubbing", "Debris Clearance", "Final Sparkle Clean"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
