import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Solar Panel Cleaning Sydney | Commercial Solar Array Cleaning | Pro Clean Corp',
    description: 'Pro Clean Corp uses deionised pure water technology to clean commercial solar panels across Sydney. Restore efficiency up to 30%, bird proofing & annual maintenance.',
    keywords: 'solar panel cleaning sydney, commercial solar cleaning, deionised water solar cleaning, solar panel efficiency sydney, bird proofing solar panels, solar array maintenance, rooftop solar cleaning, commercial solar maintenance',
    openGraph: {
        title: 'Solar Panel Cleaning Sydney | Commercial Solar Array Cleaning | Pro Clean Corp',
        description: 'Boost solar output with deionised water panel cleaning. Bird proofing, efficiency reports & annual maintenance across Sydney.',
        url: 'https://www.procleancorp.com.au/solar-panel-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Solar panel cleaning Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/solar-panel-cleaning-sydney' },
};

export default function SolarPanelCleaningPage() {
    const serviceInfo = {
        title: "Solar Panel Cleaning Sydney",
        description: "Dirty solar panels can lose up to 30% of their power generation capacity through dust, bird droppings, lichen, and pollution — a significant financial loss for commercial operators. Pro Clean Corp provides specialised solar panel cleaning services across Sydney using pure deionised water technology that leaves panels streak-free and spot-free without chemical residue that could void manufacturer warranties. Our height-safety-certified technicians service rooftop arrays, ground-mounted installations, and large-scale commercial string inverter systems with full annual maintenance programs.",
        benefits: [
            "Deionised Water Pure Wash: Zero chemicals, zero streaks, zero warranty risk — pure water technology only.",
            "Bird Proofing Service: Mesh installation to prevent nesting damage under panel arrays.",
            "Efficiency Restoration Up to 30%: Pre- and post-clean output comparison reports provided.",
            "Commercial Rooftop Arrays: Height-safety-certified teams with full fall-arrest equipment.",
            "String Inverter Safety Protocols: Safe shutdown and isolation procedures followed on every job.",
            "Annual Maintenance: Scheduled visits with compliance documentation and efficiency tracking."
        ],
        process: [
            "Pre-clean efficiency check and visual inspection of panels, mounting hardware, and inverter connections.",
            "Setup of all height safety equipment including anchors, harnesses, and exclusion zones.",
            "Pure deionised water clean using soft-bristle brushes — zero chemical contact with panels.",
            "Post-clean efficiency comparison report provided to the client for ROI documentation."
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
            { question: "How much efficiency can I recover by cleaning my solar panels?", answer: "Studies show dirty panels can lose 15-30% of their output. In Sydney's dusty conditions, a professional clean typically recovers 10-25% of lost generation capacity, providing a fast return on investment." },
            { question: "Do you use chemicals to clean solar panels?", answer: "No. We use only pure deionised water with soft-bristle brushes. This is the safest and most effective method, leaving no chemical residue that could degrade panel coatings or void warranties." },
            { question: "Can you install bird proofing on my solar array?", answer: "Yes, we install mesh bird-proofing systems around the perimeter of panel arrays to prevent pigeons and other birds from nesting underneath, which can cause significant wiring and panel damage." },
            { question: "How often should commercial solar panels be cleaned?", answer: "For most commercial properties in Sydney, we recommend a clean every 6 months. Properties near industrial areas, flight paths, or heavy tree cover may benefit from quarterly cleaning." },
            { question: "Is it safe to clean panels on a steep roof?", answer: "Yes. Our technicians are height-safety certified and use full fall-arrest systems including roof anchors, harnesses, and edge protection. We conduct a full site safety assessment before commencing any rooftop work." }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Solar panel cleaning Sydney" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Solar Panel Cleaning Sydney"
                serviceDescription="Professional solar panel cleaning using deionised water technology across Sydney, including bird proofing, efficiency improvement reports, and annual maintenance programs for commercial arrays."
                serviceUrl="/solar-panel-cleaning-sydney"
                serviceType="Solar Panel Cleaning"
                price="$$"
                additionalServices={["Bird Proofing Installation", "Efficiency Reports", "Annual Maintenance Plans", "Roof Safety Inspection", "String Inverter System Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
