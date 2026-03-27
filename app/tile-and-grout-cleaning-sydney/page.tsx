import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Tile & Grout Cleaning Sydney | Professional Tile Restoration | Pro Clean Corp',
    description: 'Pro Clean Corp restores tiles & grout across Sydney using high-pressure steam extraction. Grout whitening, mould removal, bathroom/pool tiles, sealing & slip-resistance restoration.',
    keywords: 'tile and grout cleaning sydney, grout cleaning sydney, steam tile cleaning, grout whitening sydney, mould removal tiles, tile sealing sydney, bathroom tile cleaning, pool tile cleaning, slip resistance restoration, kitchen tile cleaning sydney',
    openGraph: {
        title: 'Tile & Grout Cleaning Sydney | Professional Tile Restoration | Pro Clean Corp',
        description: 'Restore blackened grout, remove mould, and protect tiles with professional sealing across Sydney. Bathrooms, kitchens & pool surrounds.',
        url: 'https://www.procleancorp.com.au/tile-and-grout-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Tile and grout cleaning Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/tile-and-grout-cleaning-sydney' },
};

export default function TileAndGroutCleaningPage() {
    const serviceInfo = {
        title: "Tile & Grout Cleaning Sydney",
        description: "Over years of mopping, grout lines absorb dirt, bacteria, and mould that regular cleaning cannot reach — turning once-white grout lines grey or black and creating unsanitary, slippery surfaces. Pro Clean Corp provides specialist tile and grout cleaning across Sydney using high-pressure steam extraction and professional rotary scrubbing equipment to lift deeply embedded grime and restore grout to near-original colour. We service all tile types in bathrooms, kitchens, pool surrounds, and commercial amenities, with optional grout sealing and slip-resistance restoration.",
        benefits: [
            "High-Pressure Steam Extraction: Penetrates and lifts deep-seated dirt from grout lines other methods miss.",
            "Grout Whitening and Sealing: Whitening treatment plus sealer application to repel future staining.",
            "Mould Removal: Anti-fungal treatment that removes mould at the root and prevents rapid regrowth.",
            "Bathroom/Kitchen/Pool Tiles: All tile types serviced including ceramic, porcelain, stone, and glass.",
            "Slip-Resistance Restoration: Treatment applied to ensure floors meet WHS safety standards.",
            "Colour Restoration: Restore original tile colour dulled by years of mineral deposits and soiling."
        ],
        process: [
            "Pre-inspection of tile type, grout condition, and any cracked or damaged areas requiring attention.",
            "Pre-treatment spray applied to grout lines and heavy soiling areas to break down embedded dirt.",
            "High-pressure steam cleaning and rotary scrubbing of all tiled surfaces, followed by full rinse and extraction.",
            "Grout sealing and slip-resistance treatment applied as the final protective step."
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
            { question: "Can you actually restore blackened grout to white?", answer: "In most cases, yes. Our high-pressure steam and rotary scrubbing method removes years of embedded dirt. We always conduct a test patch first so you can see the result before we proceed with the full area." },
            { question: "Do you seal the grout after cleaning?", answer: "Yes, we strongly recommend grout sealing immediately after cleaning. Sealing creates a protective barrier that repels moisture, staining, and mould, significantly extending the life of your clean grout." },
            { question: "Can you remove black mould from tile grout?", answer: "Yes. We use an anti-fungal treatment that penetrates grout lines and removes mould at the root. We also offer an ongoing mould-prevention treatment that can be applied every 6-12 months." },
            { question: "Do you clean pool tiles?", answer: "Yes, we clean pool surround tiles including removal of calcium deposits, algae staining, and waterline build-up. Specialist products are used that are safe for pool water chemistry." },
            { question: "Will the floor be wet afterwards?", answer: "Our equipment uses powerful extraction to remove most moisture during the cleaning process. Floors are typically dry within 1-3 hours depending on ventilation and tile porosity." }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Tile and grout cleaning Sydney" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Tile & Grout Cleaning Sydney"
                serviceDescription="Professional tile and grout cleaning across Sydney using high-pressure steam technology, including grout whitening, mould removal, sealing treatment, and slip-resistance restoration for bathrooms, kitchens, and pool surrounds."
                serviceUrl="/tile-and-grout-cleaning-sydney"
                serviceType="Tile & Grout Cleaning"
                price="$$"
                additionalServices={["Grout Whitening", "Mould Removal", "Grout Sealing", "Pool Tile Cleaning", "Slip Resistance Restoration"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
