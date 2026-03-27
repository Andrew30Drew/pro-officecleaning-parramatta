import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Squatters Cleanup Sydney | Vacant Property Remediation | Pro Clean Corp',
    description: 'Pro Clean Corp provides full squatter cleanup & vacant property remediation across Sydney. Biohazard removal, sharps disposal, odour elimination, graffiti removal & boarding-up.',
    keywords: 'squatters cleanup sydney, property remediation sydney, biohazard removal sydney, sharps disposal sydney, vacant property cleaning, abandoned property cleanup, graffiti removal sydney, odour elimination sydney, property restoration sydney',
    openGraph: {
        title: 'Squatters Cleanup Sydney | Vacant Property Remediation | Pro Clean Corp',
        description: 'Full property remediation after squatters — biohazard removal, sharps disposal, odour elimination, graffiti removal & boarding-up. Sydney-wide service.',
        url: 'https://www.procleancorp.com.au/squatters-cleanup-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Squatters cleanup Sydney vacant property remediation' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/squatters-cleanup-sydney' },
};

export default function SquattersCleanupPage() {
    const serviceInfo = {
        title: "Squatters Cleanup Sydney",
        description: "Discovering that a vacant property has been occupied by squatters is a distressing situation that demands an immediate, professional response. Pro Clean Corp provides comprehensive vacant property remediation services across Sydney, restoring properties to a safe, habitable condition for tradespeople, real estate agents, or incoming tenants. Our trained PPE-equipped teams handle the full scope — from certified sharps disposal and biohazard removal to industrial odour elimination, graffiti removal, and boarding-up to prevent re-entry.",
        benefits: [
            "Full Property Remediation: Complete clearance of all abandoned belongings, waste, and hazardous materials.",
            "Biohazard and Sharps Disposal: Certified technicians using sealed safety containers and compliant disposal procedures.",
            "Odour Elimination: Industrial fogging and ozone treatment technology to neutralise deeply embedded odours.",
            "Graffiti Removal: Internal and external surfaces including brick, render, glass, and fencing.",
            "Boarding-Up Coordination: Securing all entry points post-clean to prevent re-occupation.",
            "Insurance-Grade Documentation: Detailed before-and-after photo records and waste disposal certificates for insurance claims."
        ],
        process: [
            "Safety risk assessment to identify biohazards, structural risks, and sharps zones before entry.",
            "Certified sharps sweep and biohazard removal by PPE-equipped technicians using compliant disposal procedures.",
            "Full property clearance of all abandoned belongings, rubbish, and discarded materials.",
            "Deep clean, sanitisation, odour fogging, graffiti removal, and boarding-up as required."
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
            { question: "Is it safe to enter the property before your team arrives?", answer: "We strongly advise against entering unsecured properties before our team has conducted a safety sweep. Sharps, unstable structures, and biohazardous materials pose serious risks. Contact us first and we will assess the property before anyone else enters." },
            { question: "How do you dispose of needles and sharps?", answer: "Our trained technicians perform a thorough sharps sweep of all rooms, surfaces, and outdoor areas. All sharps are collected using protective equipment and disposed of in certified containers at licensed disposal facilities." },
            { question: "Can you remove graffiti from the property?", answer: "Yes, we provide graffiti removal from internal walls, external facades, fences, and windows using appropriate solvents and pressure washing equipment. For heritage surfaces we use specialist low-impact techniques." },
            { question: "Do you offer boarding-up services?", answer: "Yes, as part of our end-to-end remediation service we can board up doors and windows to secure the property against re-entry after the cleanup is complete." },
            { question: "How quickly can you respond to a squatter cleanup job?", answer: "We offer priority response for urgent property remediation. In most cases we can mobilise a team within 24-48 hours, and in genuine emergencies we will do our best to respond the same day." }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Squatters cleanup Sydney property remediation" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Squatters Cleanup Sydney"
                serviceDescription="Full vacant property remediation after squatters across Sydney, including biohazard removal, sharps disposal, odour elimination, graffiti removal, and boarding-up services."
                serviceUrl="/squatters-cleanup-sydney"
                serviceType="Vacant Property Cleanup"
                price="$$"
                additionalServices={["Biohazard Removal", "Sharps Disposal", "Odour Elimination", "Graffiti Removal", "Property Boarding Up"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
