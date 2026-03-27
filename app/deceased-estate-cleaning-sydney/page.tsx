
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Deceased Estate Cleaning Sydney | Compassionate Estate Cleanout | Pro Clean Corp',
    description: 'Compassionate deceased estate cleaning in Sydney. Full property deep clean, odour elimination, estate-agent ready standard, same-week availability. Call 1300 494 983.',
    keywords: 'deceased estate cleaning sydney, estate cleanout sydney, probate cleaning sydney, house clearance deceased sydney, estate agent ready cleaning, compassionate estate cleaning, property clearance deceased, estate deep clean, executor cleaning service sydney, deceased person property cleaning',
    openGraph: {
        title: 'Deceased Estate Cleaning Sydney | Compassionate Estate Cleanout | Pro Clean Corp',
        description: 'Sensitive, discreet deceased estate cleaning across Sydney. Full property deep clean, odour elimination, and estate-agent ready standard. Same-week availability. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/deceased-estate-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Deceased estate cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/deceased-estate-cleaning-sydney' },
};

export default function DeceasedEstateCleaningPage() {
    const serviceInfo = {
        title: "Deceased Estate Cleaning Sydney",
        description: "Pro Clean Corp provides compassionate and professional deceased estate cleaning services across Sydney, supporting executors, solicitors, family members, and real estate agents through one of the most challenging property management situations they will face. We understand that managing a deceased estate involves grief, time pressure, legal obligations, and the need for absolute discretion — and we bring a respectful, professional, and efficient approach to every engagement. Our experienced teams provide a complete service from initial property clearance through to estate-agent ready deep clean, including odour elimination, carpet steam cleaning, biohazard removal where required, and all surface cleaning to a standard that supports timely property settlement or sale.",
        benefits: [
            "Compassionate Discreet Team: Our cleaning teams are specifically briefed on the sensitive nature of deceased estate work and approach every job with the care, respect, and professionalism that families and executors deserve.",
            "Full Property Deep Clean: Complete cleaning of all rooms, surfaces, and spaces within the property to a thorough move-out standard — kitchens, bathrooms, bedrooms, living areas, garages, and outdoor spaces.",
            "Odour Elimination: Professional-grade odour treatment including hydroxyl or ozone generation to permanently eliminate embedded odours from carpets, soft furnishings, walls, and HVAC systems throughout the property.",
            "Estate-Agent Ready Standard: Our cleaning standard is specifically calibrated to prepare a property for real estate listing photography, open homes, and buyer inspection — maximising presentation and sale appeal.",
            "Biohazard Removal if Required: Where a deceased estate presents biohazard conditions, our certified biohazard remediation team can be deployed to safely address contamination before the property clean commences.",
            "Same-Week Availability: We understand the time pressure that estate settlement, probate timelines, and property listing deadlines create, and we prioritise deceased estate bookings for same-week or next-day service wherever possible."
        ],
        process: [
            "Compassionate Consultation & Scope: We begin with a sensitive consultation with the executor or family representative to understand the property condition, the cleaning scope required, any biohazard considerations, and the target timeline for settlement or listing.",
            "Property Clearance (if required): Where required, we manage the careful removal of personal effects, furniture, rubbish, and unwanted items from the property, coordinating with estate agents or family members regarding items to be retained.",
            "Full Property Deep Clean: Systematic room-by-room deep cleaning of all surfaces, fixtures, fittings, and floor coverings — including kitchen appliances, bathroom tiles, carpets, and windows — to estate-agent presentation standard.",
            "Odour Treatment & Final Inspection: Professional odour elimination treatment is applied throughout the property, followed by a supervisor inspection against a detailed checklist. Completion report and photos provided for estate records."
        ],
        whyChooseUs: [
            "Experienced & Compassionate: Our teams understand the emotional weight of deceased estate situations and bring sensitivity, respect, and professionalism to every engagement from first contact through to completion.",
            "Complete Property Service: From initial clearance through to estate-agent ready presentation, we manage the entire property cleaning scope so executors and families do not need to coordinate multiple contractors.",
            "Biohazard Capability: Our in-house certified biohazard remediation team means we can address any level of contamination within a deceased estate without requiring a separate specialist contractor.",
            "Same-Week Priority Scheduling: We recognise the legal and financial deadlines of estate settlement and prioritise deceased estate jobs with same-week or expedited scheduling.",
            "Discreet Operation: We arrive in standard company vehicles without excessive signage, work quietly and respectfully, and coordinate directly with whoever you nominate as the property contact.",
            "Fully Insured: $20 million public liability insurance covering all deceased estate cleaning and clearance activities across Sydney."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "How quickly can you begin a deceased estate clean in Sydney?",
                answer: "We prioritise deceased estate cleaning and aim to commence within 24–48 hours of your initial enquiry in most cases. For urgent situations involving settlement deadlines or property listing dates, same-day or next-morning deployment can often be arranged. Call 1300 494 983 to discuss your timeline."
            },
            {
                question: "Do you handle properties that have been unoccupied for a long time?",
                answer: "Yes. We regularly clean properties that have been unoccupied for extended periods following a death, including those with significant dust accumulation, garden overgrowth, expired food, mould growth, and general deterioration. We assess the property condition first and provide a clear scope and quote before commencing."
            },
            {
                question: "Can you manage the removal of furniture and personal belongings?",
                answer: "Yes. We can coordinate the careful removal and disposal of furniture, clothing, household items, and general contents from the property as part of our estate clearance service. We work closely with you to identify any items the family wishes to retain before proceeding with removal."
            },
            {
                question: "Do you clean properties where a person passed away inside?",
                answer: "Yes. We handle deceased estate cleaning including properties where a person passed away on the premises. Depending on the circumstances, our certified biohazard remediation team may be required before the general deep clean commences. We approach these situations with complete professionalism, sensitivity, and full regulatory compliance."
            },
            {
                question: "What does estate-agent ready cleaning standard mean?",
                answer: "Our estate-agent ready cleaning standard means the property is cleaned to a level appropriate for listing photography, open home inspections, and buyer walkthroughs. This includes streak-free windows, spotless kitchens and bathrooms, clean carpets, odour elimination, and a presentation standard that maximises buyer first impressions and supports the best possible sale outcome."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Deceased estate cleaning Sydney - compassionate property deep clean" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney estate cleanout and property preparation for sale" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Deceased Estate Cleaning Sydney"
                serviceDescription="Compassionate deceased estate cleaning services in Sydney. Full property deep clean, odour elimination, biohazard removal if required, and estate-agent ready presentation standard."
                serviceUrl="/deceased-estate-cleaning-sydney"
                serviceType="Deceased Estate Cleaning"
                price="$$"
                additionalServices={["Property Clearance", "Odour Elimination", "Biohazard Removal", "Carpet Steam Cleaning", "Estate-Agent Ready Clean"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
