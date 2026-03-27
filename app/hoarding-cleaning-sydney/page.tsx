import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Hoarding Cleaning Sydney | Extreme Property Cleanup Services | Pro Clean Corp',
    description: 'Compassionate hoarding cleaning in Sydney. Non-judgmental approach, structured decluttering, deep sanitisation, biohazard removal, odour treatment, and social worker coordination.',
    keywords: 'hoarding cleaning sydney, hoarding cleanup sydney, squalor cleaning sydney, extreme property cleanup, compassionate decluttering sydney, biohazard removal sydney, odour treatment hoarding, property clearance sydney, hoarding remediation',
    openGraph: {
        title: 'Hoarding Cleaning Sydney | Extreme Property Cleanup Services | Pro Clean Corp',
        description: 'Compassionate, non-judgmental hoarding cleaning in Sydney. Structured decluttering, deep sanitisation, biohazard removal, and odour treatment with social worker coordination.',
        url: 'https://www.procleancorp.com.au/hoarding-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Hoarding cleaning Sydney compassionate extreme property cleanup' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/hoarding-cleaning-sydney' },
};

export default function HoardingCleaningSydneyPage() {
    const serviceInfo = {
        title: "Hoarding Cleaning Sydney | Compassionate Property Cleanup",
        description: "Hoarding situations require a level of sensitivity, patience, and professionalism that goes far beyond standard cleaning. Pro Clean Corp's hoarding cleanup teams in Sydney are trained to work compassionately and without judgment, respecting the dignity of the individual while restoring the property to a safe and livable condition. We handle structured decluttering with careful sorting of valuables, deep sanitisation of all affected surfaces, biohazard removal, and comprehensive odour treatment. We also coordinate with social workers, support workers, NDIS plan managers, and property managers to ensure the process is handled with the right support network in place.",
        benefits: [
            "Compassionate, non-judgmental approach — our teams are trained in sensitive communication and work with full discretion",
            "Structured decluttering with careful sorting to preserve valuables, documents, and sentimental items",
            "Deep sanitisation of all surfaces including floors, walls, kitchens, and bathrooms to restore hygiene and safety",
            "Biohazard removal following strict WHS and EPA protocols for safe handling of contaminated waste",
            "Odour treatment including fogging and surface treatments to eliminate persistent smells from the property",
            "Social worker and support worker coordination available for cases requiring a multi-disciplinary response"
        ],
        process: [
            "Confidential consultation with the client, family, or property manager to understand the situation, set expectations, and develop a structured cleanup plan",
            "Structured decluttering phase — items are carefully sorted into keep, donate, recycle, and dispose categories with the client's input wherever possible",
            "Deep cleaning and sanitisation of all surfaces, fixtures, and fittings once areas are cleared — including biohazard treatment where required",
            "Odour treatment, final inspection, and coordination with any support services or property managers to confirm the property is safe and ready for re-occupation"
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
                question: "What is hoarding cleaning and what does the process involve?",
                answer: "Hoarding cleaning is a specialist service for properties that have become unsafe or uninhabitable due to extreme accumulation of belongings, waste, or debris. The process involves structured decluttering with careful sorting, removal of waste and unwanted items, deep cleaning and sanitisation of all surfaces, biohazard treatment where required, and odour elimination. Pro Clean Corp approaches every hoarding cleanup with compassion and respect for the individual."
            },
            {
                question: "Do you work with social workers and support workers on hoarding cases in Sydney?",
                answer: "Yes. We regularly coordinate with social workers, occupational therapists, NDIS support workers, and mental health professionals on hoarding cleanup jobs. We understand that hoarding is often associated with complex health and wellbeing needs, and we work as part of the broader support team to achieve the best outcome for the individual."
            },
            {
                question: "How do you handle biohazards in hoarding properties?",
                answer: "Hoarding properties sometimes contain biohazardous material including animal waste, human waste, mould, rotting food, and other contaminated waste. Our teams are trained in biohazard handling and use appropriate PPE, EPA-compliant disposal methods, and specialised sanitisation chemicals to safely remediate these areas."
            },
            {
                question: "Will you throw away all the belongings in a hoarded property?",
                answer: "No. We work carefully and systematically, sorting items into categories — keep, donate, recycle, and dispose — with the involvement of the client or their representative wherever possible. Valuables, documents, and sentimental items are identified and set aside. We never dispose of anything without proper authorisation."
            },
            {
                question: "Is your hoarding cleaning service confidential?",
                answer: "Absolutely. All Pro Clean Corp staff operate under strict confidentiality obligations. We arrive in unmarked vehicles where requested, do not discuss client situations outside the team, and handle every hoarding cleanup with complete discretion and respect for the privacy of all individuals involved."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Hoarding cleaning Sydney compassionate property decluttering" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp hoarding cleanup Sydney extreme cleaning" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Hoarding Cleaning Sydney"
                serviceDescription="Compassionate hoarding cleaning and extreme property cleanup in Sydney including structured decluttering, deep sanitisation, biohazard removal, odour treatment, and social worker coordination."
                serviceUrl="/hoarding-cleaning-sydney"
                serviceType="Hoarding Cleanup"
                price="$$"
                additionalServices={["Biohazard Removal", "Property Decluttering", "Deep Sanitisation", "Odour Treatment", "Squalor Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
