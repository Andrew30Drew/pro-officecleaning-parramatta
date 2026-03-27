import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Upholstery Cleaning Sydney | Office Chair & Sofa Cleaning | Pro Clean Corp',
    description: 'Professional upholstery cleaning in Sydney. Hot water extraction, dry foam cleaning, fabric protection, office chairs, sofas, reception seating, Scotchgard, and rapid drying.',
    keywords: 'upholstery cleaning sydney, office chair cleaning sydney, sofa cleaning sydney, fabric protection treatment, hot water extraction upholstery, dry foam cleaning sydney, scotchgard application sydney, reception seating cleaning, commercial upholstery cleaning',
    openGraph: {
        title: 'Upholstery Cleaning Sydney | Office Chair & Sofa Cleaning | Pro Clean Corp',
        description: 'Professional upholstery cleaning in Sydney. Hot water extraction, dry foam cleaning, Scotchgard fabric protection for office chairs, sofas, and reception seating with rapid drying.',
        url: 'https://www.procleancorp.com.au/upholstery-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Upholstery cleaning Sydney office chairs sofas reception seating' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/upholstery-cleaning-sydney' },
};

export default function UpholsteryCleaningSydneyPage() {
    const serviceInfo = {
        title: "Upholstery Cleaning Sydney | Office & Commercial Furniture",
        description: "Office furniture accumulates body oils, dust mites, food particles, and bacteria that make upholstery look dull and smell stale — and in commercial environments, this directly affects the impression your workplace makes on clients and staff. Pro Clean Corp provides professional upholstery cleaning for businesses across Sydney using hot water extraction for fabric furniture and dry foam cleaning for delicate or moisture-sensitive materials. We clean office chairs, sofas, reception seating, waiting room chairs, and boardroom furniture, finishing with Scotchgard fabric protection treatment to repel future stains and extend the life of your upholstery investment.",
        benefits: [
            "Hot water extraction deep cleans fabric upholstery by injecting hot water and immediately extracting it with dissolved soils and allergens",
            "Dry foam cleaning for delicate, antique, or moisture-sensitive upholstery that cannot be wet-extracted without risk of damage",
            "Fabric protection treatment (Scotchgard) applied after cleaning creates an invisible barrier that repels liquid spills and stains",
            "Office chair cleaning removes body oils, perspiration, and embedded dirt from task chairs — individually on-site or in bulk",
            "Sofa and reception seating cleaning restores the look of client-facing furniture that forms a critical first impression",
            "Rapid drying technology using industrial air movers minimises downtime — most furniture is ready to use within 2–4 hours"
        ],
        process: [
            "Fabric identification and condition assessment — we test each upholstery type to confirm the appropriate cleaning method and pre-treat any heavy stains or soiling",
            "Pre-spray application of appropriate pre-treatment solution to break down body oils, soil, and stains before the primary cleaning method is applied",
            "Hot water extraction or dry foam cleaning applied to all upholstered surfaces — each item cleaned thoroughly and inspected for any remaining spots",
            "Scotchgard fabric protection treatment applied to all cleaned items where requested — followed by rapid drying with industrial air movers to return furniture to service quickly"
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
                question: "What is the difference between hot water extraction and dry foam upholstery cleaning?",
                answer: "Hot water extraction (also known as steam cleaning) injects hot water and cleaning solution into the fabric under pressure and immediately extracts it, drawing out deeply embedded soils, allergens, and bacteria. Dry foam cleaning uses a low-moisture foam applied to the surface and worked in mechanically, then vacuumed out — producing far less moisture. Dry foam is preferred for delicate fabrics, antique pieces, or items that cannot tolerate wetting."
            },
            {
                question: "Can you clean office chairs in bulk for large Sydney workplaces?",
                answer: "Yes. Bulk office chair cleaning is a popular service for large offices undertaking a periodic refresh of their workspace. We clean all task chairs on-site using extraction or dry methods depending on the fabric type. For a typical office, we can clean 40–60 chairs per day. We schedule this service during weekends or after hours to avoid disrupting the working day."
            },
            {
                question: "What does Scotchgard fabric protection do for commercial upholstery?",
                answer: "Scotchgard creates an invisible fluoropolymer barrier on fabric fibres that causes liquids to bead on the surface rather than absorbing into the fabric. This gives you time to blot and clean up spills before they become permanent stains. It also significantly reduces the rate at which everyday soiling builds up, meaning your upholstery stays cleaner for longer between professional cleaning appointments."
            },
            {
                question: "How long does upholstery take to dry after cleaning in Sydney?",
                answer: "Drying time depends on the cleaning method, fabric type, and room ventilation. After hot water extraction, most commercial upholstery is dry in 2–4 hours with our industrial air movers running. Dry foam cleaning produces much less moisture and typically dries within 1–2 hours. We can schedule cleaning in the evening or overnight for items that need to be in use first thing the following morning."
            },
            {
                question: "Do you clean leather upholstery as well as fabric?",
                answer: "Yes. We clean and condition leather upholstery using specialised leather-safe cleaning solutions and conditioners. Regular leather cleaning removes body oils and surface grime that dry out and crack leather over time, while conditioning treatments restore suppleness and prevent premature ageing. We do not use water extraction methods on leather — only appropriate leather cleaning products."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Upholstery cleaning Sydney office chairs sofas reception seating" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp upholstery cleaning Sydney Scotchgard protection" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Upholstery Cleaning Sydney"
                serviceDescription="Professional upholstery cleaning in Sydney using hot water extraction and dry foam cleaning for office chairs, sofas, reception seating, and commercial furniture with Scotchgard fabric protection treatment."
                serviceUrl="/upholstery-cleaning-sydney"
                serviceType="Upholstery Cleaning"
                price="$$"
                additionalServices={["Hot Water Extraction Cleaning", "Dry Foam Cleaning", "Scotchgard Application", "Office Chair Cleaning", "Leather Upholstery Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
