
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Steam Cleaning Sydney | High Temperature Steam Clean | Pro Clean Corp',
    description: 'Professional commercial steam cleaning in Sydney. 180°C steam kills 99.9% of bacteria on grout, tiles, upholstery, and carpets. Chemical-free, hospital-grade results. Call 1300 494 983.',
    keywords: 'commercial steam cleaning sydney, high temperature steam cleaning, steam cleaning services sydney, grout steam cleaning, tile steam cleaning, upholstery steam cleaning, carpet steam cleaning sydney, chemical free cleaning, hospital grade steam cleaning, food safe steam cleaning',
    openGraph: {
        title: 'Commercial Steam Cleaning Sydney | High Temperature Steam Clean | Pro Clean Corp',
        description: 'Hospital-grade steam cleaning for Sydney businesses. 180°C steam kills 99.9% of bacteria on any surface — chemical-free, quick-dry, food-safe results. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/commercial-steam-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial steam cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-steam-cleaning-sydney' },
};

export default function CommercialSteamCleaningPage() {
    const serviceInfo = {
        title: "Commercial Steam Cleaning Sydney",
        description: "Pro Clean Corp delivers high-temperature commercial steam cleaning services across Sydney, providing businesses with a powerful, chemical-free cleaning solution that achieves hospital-grade hygiene results on a wide range of commercial surfaces. Our industrial steam cleaning equipment generates dry steam at temperatures up to 180°C, killing 99.9% of bacteria, viruses, mould spores, and dust mites on contact without the need for harsh chemical cleaning agents. This makes steam cleaning the preferred choice for food service kitchens, childcare facilities, healthcare environments, and any business committed to both superior hygiene and reducing chemical exposure for staff and occupants.",
        benefits: [
            "180°C Steam Kills 99.9% of Bacteria: Industrial dry steam at up to 180°C eliminates bacteria, viruses, E. coli, Salmonella, MRSA, mould spores, and dust mites from all treated surfaces without chemical agents.",
            "No Harsh Chemicals Required: Steam cleaning achieves hospital-grade disinfection results using only water — eliminating chemical residue, fumes, and the associated health and environmental impacts of conventional disinfectants.",
            "Grout, Tile & Hard Surfaces: High-temperature steam penetrates grout lines, tile joints, and porous hard surfaces to dissolve grease, scale, and biofilm buildup that conventional scrubbing cannot reach.",
            "Upholstery & Carpet Deep Clean: Steam extraction deep-cleans fabric upholstery, carpets, and soft furnishings, removing embedded soiling, allergens, and odours while achieving rapid dry times with powerful vacuum extraction.",
            "Food-Safe for Commercial Kitchens: Steam cleaning is certified food-safe and ideal for commercial kitchen surfaces, equipment exteriors, exhaust hood grease deposits, and food preparation areas without chemical contamination risk.",
            "Hospital-Grade Results with Quick Dry: Our steam cleaning process achieves clinical-standard surface hygiene with dramatically reduced moisture application, minimising dry times and allowing treated areas to return to use faster."
        ],
        process: [
            "Surface Assessment & Pre-Treatment: We assess all surfaces to be steam cleaned, identify high-soiling areas requiring pre-treatment, and prepare equipment with appropriate steam pressure and temperature settings for each surface type.",
            "High-Temperature Steam Application: Industrial dry steam is applied systematically to all target surfaces — grout lines, tiles, upholstery, carpets, and hard surfaces — at 140–180°C to kill pathogens and dissolve contamination.",
            "Extraction & Residue Removal: Loosened soiling, biological contamination, and steam moisture are immediately extracted using powerful industrial vacuum systems, leaving surfaces clean, sanitised, and drying rapidly.",
            "Quality Inspection & Sign-Off: All steam-cleaned areas are inspected under lighting for grout clarity, fabric cleanliness, and surface hygiene, with a supervisor sign-off confirming hospital-grade standard achieved."
        ],
        whyChooseUs: [
            "Industrial Steam Equipment: Commercial-grade steam generators and extraction units producing consistent 180°C dry steam with the power output required for large-scale commercial cleaning projects.",
            "Chemical-Free Disinfection: Our steam cleaning process achieves TGA-listed disinfection benchmarks without harsh chemicals — the preferred choice for sensitive environments including childcare, healthcare, and food service.",
            "Multi-Surface Capability: Grout, tiles, natural stone, vinyl, carpet, upholstery, stainless steel, rubber, and most commercial surfaces are safely and effectively cleaned with our high-temperature steam systems.",
            "Food Service Specialists: Specific experience steam cleaning commercial kitchen equipment surrounds, food preparation surfaces, exhaust systems, and coolroom seal areas to food safety authority standards.",
            "Rapid Return-to-Service: Our dry steam and powerful extraction combination minimises surface moisture and dramatically reduces drying times compared to conventional wet cleaning methods.",
            "Fully Insured: $20 million public liability insurance covering all commercial steam cleaning activities."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "What temperature does your commercial steam cleaning reach?",
                answer: "Our industrial steam generators produce dry steam at temperatures between 140°C and 180°C depending on the application and surface type. At 180°C, steam achieves a greater than 99.9% kill rate for bacteria, viruses, and mould spores on contact — meeting hospital-grade disinfection benchmarks without chemical agents."
            },
            {
                question: "Is steam cleaning safe for food preparation surfaces?",
                answer: "Yes. Steam cleaning is one of the safest cleaning methods for food preparation surfaces because it uses only water — there is no chemical residue risk. Our food-safe steam cleaning process is suitable for commercial kitchen benchtops, equipment exteriors, prep surfaces, and food storage areas, and supports HACCP compliance."
            },
            {
                question: "Can steam cleaning remove mould from tile grout?",
                answer: "Yes. High-temperature steam is extremely effective at killing mould spores and dissolving the organic matter that mould feeds on in grout lines, tile joints, and silicone seals. Steam penetrates porous grout surfaces and eliminates mould at the root level rather than simply surface-treating it, delivering more durable results than chemical mould sprays."
            },
            {
                question: "How long does it take for steam-cleaned carpets to dry?",
                answer: "Our steam extraction process uses dry steam combined with powerful industrial vacuum extraction that removes the majority of moisture immediately. Commercial carpet areas are typically dry enough for foot traffic within 2–4 hours, compared to 6–12 hours for conventional hot water extraction. Upholstery dries within 1–3 hours depending on fabric weight."
            },
            {
                question: "Is commercial steam cleaning suitable for childcare centres?",
                answer: "Steam cleaning is an ideal solution for childcare centres because it achieves hospital-grade surface disinfection — killing 99.9% of bacteria and viruses — without using any chemical cleaning agents that could pose a risk to children. All treated surfaces are safe for child contact once dry, typically within 1–3 hours."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial steam cleaning Sydney - high temperature grout and tile cleaning" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney hospital-grade steam cleaning service" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Steam Cleaning Sydney"
                serviceDescription="High-temperature commercial steam cleaning services in Sydney. 180°C dry steam kills 99.9% bacteria on grout, tiles, upholstery, and carpets — chemical-free, hospital-grade results."
                serviceUrl="/commercial-steam-cleaning-sydney"
                serviceType="Commercial Steam Cleaning"
                price="$$"
                additionalServices={["Grout & Tile Steam Cleaning", "Carpet Steam Extraction", "Upholstery Steam Cleaning", "Commercial Kitchen Steam Clean", "Mould Remediation"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
