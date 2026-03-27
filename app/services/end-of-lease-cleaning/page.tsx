import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'End of Lease Cleaning Services Sydney | Bond Cleaning | Pro Clean Corp',
    description: 'Pro Clean Corp delivers bond cleaning across Sydney with a 100% satisfaction guarantee. Full deep clean, carpet steam, oven degrease, window clean, wall marks & real estate inspection pass.',
    keywords: 'end of lease cleaning sydney, bond cleaning sydney, vacate cleaning sydney, bond return guarantee, carpet steam clean bond, oven degreasing vacate, window cleaning bond clean, wall mark removal, real estate inspection pass sydney',
    openGraph: {
        title: 'End of Lease Cleaning Services Sydney | Bond Cleaning | Pro Clean Corp',
        description: 'Bond cleaning with 100% satisfaction guarantee across Sydney. Full deep clean, carpet steam, oven degrease, window clean, wall marks removed, and real estate inspection pass.',
        url: 'https://www.procleancorp.com.au/services/end-of-lease-cleaning',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'End of lease bond cleaning services Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/services/end-of-lease-cleaning' },
};

export default function EndOfLeaseCleaningServicesPage() {
    const serviceInfo = {
        title: "End of Lease Cleaning Services Sydney",
        description: "Your bond is a significant sum — and losing it over cleaning disputes is entirely avoidable with the right professional team. Pro Clean Corp provides comprehensive residential and commercial end of lease cleaning services across Sydney, with a 100% satisfaction guarantee that gives you complete confidence going into your final inspection. Our experienced bond cleaning teams know exactly what real estate agents check, and we deliver the full property deep clean, carpet steam, window cleaning, kitchen degreasing, and wall mark removal required to pass every time.",
        benefits: [
            "Bond Return Guarantee: If your agent is not satisfied within 72 hours, we return to rectify at no additional cost.",
            "Full Property Deep Clean: Every room, fixture, fitting, and surface cleaned to agent's inspection checklist.",
            "Carpet Steam Clean: Professional hot water extraction carpet cleaning included as standard in all bond packages.",
            "Oven Degrease: Full oven interior, griller, rangehood, and filter degreasing.",
            "Window Clean: All internal glass, mirrors, and sliding door tracks cleaned as standard.",
            "Wall Marks Removed: Scuff marks, handprints, and light staining removed from walls and skirting boards.",
            "Real Estate Inspection Pass Guarantee: We know what property managers check — and we deliver it every time."
        ],
        process: [
            "Fixed-price quote based on property size and condition, with no hidden fees on the day.",
            "Dedicated bond cleaning team assigned to tackle every surface from ceiling to floor.",
            "Supervisor inspection against the agent's checklist before keys are returned or submitted.",
            "72-hour guarantee period — any agent concerns addressed with a free return visit."
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
            { question: "What is included in your bond cleaning package?", answer: "Our standard bond clean includes all rooms, bathrooms, kitchen (including oven and rangehood), internal windows, walls (mark removal), carpets (steam cleaned), and all fixtures and fittings to agent's inspection standard." },
            { question: "Do you guarantee the bond return?", answer: "We offer a 100% satisfaction guarantee. If your property manager identifies any cleaning issues within 72 hours, we return to fix them at no additional cost to you." },
            { question: "Is carpet steam cleaning included?", answer: "Yes, professional carpet steam cleaning is included as standard in all our bond cleaning packages, which is a requirement of most Sydney real estate agents and lease agreements." },
            { question: "How do I book a bond clean?", answer: "Contact us with your property address, size, and vacate date and we will provide a fixed-price quote. We recommend booking 1-2 weeks in advance, particularly for end-of-month dates." },
            { question: "Do I need to be present during the clean?", answer: "No, you do not need to be present. We just need access arranged. Many clients provide a key and we let ourselves in, complete the clean, and return the key as instructed." }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "End of lease bond cleaning services Sydney" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="End of Lease Cleaning Services Sydney"
                serviceDescription="Comprehensive bond cleaning across Sydney with a 100% satisfaction guarantee, including full property deep clean, carpet steam, oven degreasing, window cleaning, wall mark removal, and real estate inspection pass guarantee."
                serviceUrl="/services/end-of-lease-cleaning"
                serviceType="End of Lease Cleaning"
                price="$$"
                additionalServices={["Carpet Steam Cleaning", "Oven Degreasing", "Window Cleaning", "Wall Mark Removal", "Rubbish Removal"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
