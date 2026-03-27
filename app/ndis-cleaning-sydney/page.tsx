import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'NDIS Cleaning Sydney | Registered NDIS Cleaning Provider | Pro Clean Corp',
    description: 'Pro Clean Corp is a registered NDIS cleaning provider in Sydney. Participant-centred flexible scheduling, routine domestic cleaning, deep cleans & plan management compatible billing.',
    keywords: 'ndis cleaning sydney, registered ndis cleaning provider, ndis domestic cleaning, ndis deep clean, plan management compatible cleaning, ndis participant cleaning, ndis cleaner sydney, disability support cleaning sydney, ndis household tasks',
    openGraph: {
        title: 'NDIS Cleaning Sydney | Registered NDIS Cleaning Provider | Pro Clean Corp',
        description: 'Registered NDIS cleaning provider in Sydney. Participant-centred, flexible scheduling, routine domestic cleaning, deep cleans, and plan management compatible invoicing.',
        url: 'https://www.procleancorp.com.au/ndis-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'NDIS cleaning Sydney registered provider' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/ndis-cleaning-sydney' },
};

export default function NDISCleaningPage() {
    const serviceInfo = {
        title: "NDIS Cleaning Sydney",
        description: "Pro Clean Corp is a registered NDIS cleaning provider serving participants across Sydney with respectful, high-quality, and participant-centred cleaning services. We understand that a clean, safe, and organised home is fundamental to independence, wellbeing, and quality of life. Our experienced team works closely with participants, support coordinators, and plan managers to deliver tailored cleaning programmes that meet NDIS goals — from routine domestic cleaning and deep cleans to specialised support services.",
        benefits: [
            "NDIS Registered Provider: Fully registered to deliver NDIS-funded cleaning supports across Sydney.",
            "Participant-Centred Flexible Scheduling: We clean when and how the participant prefers, with consistent familiar staff.",
            "Routine Domestic Cleaning: Vacuuming, mopping, bathroom and kitchen cleaning, laundry, and linen changes.",
            "Deep Cleans: Full property deep clean available for participants requiring intensive one-off cleaning support.",
            "Disability-Friendly Teams: Trained to work respectfully, patiently, and sensitively in participants' homes.",
            "Plan Management Compatible: We invoice plan managers directly with correct NDIS line items and referencing."
        ],
        process: [
            "Initial contact from participant, support coordinator, or plan manager to discuss cleaning goals.",
            "Service agreement developed outlining specific tasks, frequency, and NDIS funding alignment.",
            "Regular cleaning sessions scheduled with the same team member for familiarity and trust.",
            "Plan manager invoicing or self-managed payment processing handled directly by our office."
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
            { question: "Are you a registered NDIS provider?", answer: "Yes, Pro Clean Corp is a registered NDIS provider and can service agency-managed, plan-managed, and self-managed participants across Sydney." },
            { question: "Can you invoice my plan manager directly?", answer: "Yes, we invoice plan managers directly with the correct NDIS line item codes. We just need your plan manager's details and NDIS number to set this up." },
            { question: "Will I get the same cleaner every visit?", answer: "We aim to provide the same team member for every regular service to build familiarity, trust, and consistency for the participant. We always give advance notice if a substitute is necessary." },
            { question: "What cleaning tasks can you help with?", answer: "We assist with vacuuming, mopping, bathroom and kitchen cleaning, laundry, linen changes, dusting, rubbish removal, and general tidying. We tailor the tasks to each participant's goals." },
            { question: "Do you bring your own cleaning products and equipment?", answer: "Yes, our team arrives fully equipped with all vacuums, mops, and cleaning products. If a participant has specific chemical sensitivities or preferences, we accommodate these with advance notice." }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "NDIS cleaning Sydney registered provider" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="NDIS Cleaning Sydney"
                serviceDescription="Registered NDIS cleaning provider in Sydney delivering participant-centred flexible scheduling, routine domestic cleaning, deep cleans, and plan management compatible invoicing for NDIS participants."
                serviceUrl="/ndis-cleaning-sydney"
                serviceType="NDIS Cleaning Services"
                price="$$"
                additionalServices={["Routine Domestic Cleaning", "Deep Cleans", "Laundry & Linen", "Rubbish Removal", "Plan Manager Invoicing"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
