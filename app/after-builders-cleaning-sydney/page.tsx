
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'After Builders Cleaning Sydney | Post Construction Cleaning | Pro Clean Corp',
    description: 'Professional after builders cleaning in Sydney. We remove construction dust, paint splatter, silicone, and debris for a flawless handover-ready finish. Call 1300 494 983.',
    keywords: 'after builders cleaning sydney, post construction cleaning sydney, builders clean sydney, construction site cleaning, renovation cleaning sydney, handover cleaning sydney, final builders clean, sparkle clean sydney, construction dust removal, builders clean commercial',
    openGraph: {
        title: 'After Builders Cleaning Sydney | Post Construction Cleaning | Pro Clean Corp',
        description: 'Transform your construction site into a spotless, handover-ready space. Expert post-construction cleaning across all Sydney suburbs. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/after-builders-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'After builders cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/after-builders-cleaning-sydney' },
};

export default function AfterBuildersCleaningPage() {
    const serviceInfo = {
        title: "After Builders Cleaning Sydney",
        description: "Pro Clean Corp delivers expert after builders cleaning services across Sydney, transforming construction sites, renovation projects, and commercial fit-outs into immaculate, handover-ready spaces. Our White Card certified teams specialise in the removal of fine construction dust, paint splatter, silicone residue, adhesive stickers, and post-build debris that standard cleaners simply cannot handle. We operate a proven two-stage cleaning process — a thorough rough clean for defect identification followed by a meticulous final sparkle clean — ensuring every surface meets the highest handover standards whether you are a construction company delivering a commercial project or a developer presenting to a new tenant.",
        benefits: [
            "Construction Dust Removal: HEPA-filtered vacuums and damp-wiping to eliminate ultra-fine plaster and concrete dust from all surfaces, including ceiling voids, air vents, and joinery interiors.",
            "Paint & Silicone Splatter Cleaning: Professional-grade scrapers and solvent solutions safely remove paint drops, silicone smears, and adhesive sticker residue from glass, tiles, and joinery without scratching.",
            "Window Sticker & Protective Film Removal: Complete removal of builders' protective film and transit stickers from glazing, hardware, and appliances to a streak-free, inspection-ready finish.",
            "Debris Clearance: Full removal of leftover construction materials, packaging waste, timber offcuts, and general post-build debris from all internal and external areas.",
            "Sparkle Handover Clean: A final-stage detail clean covering every surface — skirting boards, light fittings, exhaust fans, cabinet interiors, and floor finishes — to showroom presentation standard.",
            "Bond-Back Guarantee for Builders: We stand behind our work with a sign-off inspection checklist and a no-charge return guarantee if any area does not meet handover standard."
        ],
        process: [
            "Site Assessment & Scope: We assess the property, identify hazardous debris, check access requirements, and plan the cleaning schedule around your critical handover timeline.",
            "Stage 1 – Rough Clean: Removal of all construction waste, large debris, gross contamination, and builder's rubbish from floors, surfaces, fixtures, and outdoor areas.",
            "Stage 2 – Detail Deep Clean: Systematic deep cleaning of all surfaces including glass, joinery interiors, light fittings, exhaust fans, bathrooms, kitchen areas, and floor finishes.",
            "Stage 3 – Sparkle Finish & Sign-Off: Final buff, streak-free window polish, floor finishing, and quality inspection sign-off by a supervisor against a detailed handover checklist."
        ],
        whyChooseUs: [
            "White Card Certified: All team members hold current General Construction Induction (White Card) certification for compliant site access across New South Wales.",
            "Post-Build Specialists: Years of experience across commercial fit-outs, residential renovations, industrial facilities, and large-scale construction projects.",
            "Deadline Driven: We deploy appropriately sized teams to guarantee your handover date is never compromised regardless of project scale.",
            "Quality Guaranteed: Every clean is signed off against a detailed inspection checklist by a supervisor with a no-charge return if any item is missed.",
            "Fully Insured: $20 million public liability insurance for complete peace of mind on active building sites.",
            "Two-Stage Process: Our proven rough-clean-to-sparkle-finish system ensures no construction dust pocket, paint drip, or debris is ever missed."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "What does after builders cleaning include?",
                answer: "Our after builders cleaning includes removal of construction dust, paint splatter, silicone residue, adhesive stickers, and debris. We clean all windows, internal joinery, floors, bathrooms, kitchens, light fittings, exhaust fans, and skirting boards to handover-ready standard."
            },
            {
                question: "How long does a post-construction clean take?",
                answer: "Duration depends on the size and condition of the property. A typical 3-bedroom residential renovation takes 1–2 days. Large commercial fit-outs may require a dedicated team over several days. We provide accurate timeframes after a site assessment."
            },
            {
                question: "Do your team members have White Cards?",
                answer: "Yes, all Pro Clean Corp staff hold current General Construction Induction (White Card) certification, allowing compliant access to active construction sites across New South Wales."
            },
            {
                question: "Can you remove paint from windows and glass?",
                answer: "Absolutely. We use professional-grade scrapers and safe solvent solutions to remove paint splatter, adhesive labels, and protective film from glass surfaces without causing scratches or damage."
            },
            {
                question: "Do you offer a satisfaction guarantee on builders cleans?",
                answer: "Yes. Every after builders clean includes a supervisor sign-off inspection. If anything is missed on our checklist, we return to rectify it at no additional cost before your handover."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "After builders cleaning Sydney - construction site cleaning" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney post construction cleaning" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="After Builders Cleaning Sydney"
                serviceDescription="Professional post-construction and after builders cleaning services in Sydney. White Card certified teams delivering sparkle-clean handover finishes."
                serviceUrl="/after-builders-cleaning-sydney"
                serviceType="Post Construction Cleaning"
                price="$$"
                additionalServices={["Construction Dust Removal", "Paint Splatter Removal", "Window Cleaning Post-Build", "Renovation Cleaning", "Commercial Builders Clean"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
