import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Aged Care Cleaning Sydney | Nursing Home & Retirement Village Cleaning | Pro Clean Corp',
    description: 'Pro Clean Corp provides specialist aged care cleaning across Sydney. Infection control protocols, TGA-approved chemicals, NDIS-aware, dementia ward sensitivity & accreditation compliance.',
    keywords: 'aged care cleaning sydney, nursing home cleaning sydney, retirement village cleaning, aged care infection control, tga approved cleaning products aged care, ndis cleaning, dementia ward cleaning, aged care accreditation cleaning, aged care facility cleaners nsw',
    openGraph: {
        title: 'Aged Care Cleaning Sydney | Nursing Home & Retirement Village Cleaning | Pro Clean Corp',
        description: 'Specialist infection control cleaning for aged care facilities, nursing homes, and retirement villages across Sydney. TGA-approved chemicals & accreditation compliant.',
        url: 'https://www.procleancorp.com.au/aged-care-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/medical.webp', alt: 'Aged care cleaning Sydney nursing home' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/aged-care-cleaning-sydney' },
};

export default function AgedCareCleaningPage() {
    const serviceInfo = {
        title: "Aged Care Cleaning Sydney",
        description: "Cleaning in aged care facilities demands a precise balance of rigorous hospital-grade hygiene and deep respect for residents' dignity and comfort. Pro Clean Corp provides specialist aged care cleaning services across Sydney for nursing homes, retirement villages, and memory care units. We strictly follow infection control protocols using TGA-approved chemicals, with staff trained to work sensitively in dementia wards and high-dependency environments. Our cleaning programmes are fully aligned with Aged Care Quality Standards and accreditation requirements.",
        benefits: [
            "Infection Control Protocols: Strict colour-coded cross-contamination prevention across clinical and living zones.",
            "Resident-Safe TGA-Approved Chemicals: Low-irritant, non-toxic formulations safe for residents with respiratory sensitivities.",
            "NDIS-Aware: Experience working alongside NDIS support workers and plan-managed care settings.",
            "High-Touch Surface Disinfection: Frequent sanitisation of handrails, door handles, call buttons, and lift controls.",
            "Dementia Ward Sensitivity: Staff trained to work with minimal disruption and maximum patience in memory care areas.",
            "Accreditation Compliance: Documentation and cleaning records aligned with Aged Care Quality Standards."
        ],
        process: [
            "Facility consultation to assess care levels, risk zones, and resident-specific sensitivities.",
            "Tailored cleaning roster developed to minimise disruption to resident routines and clinical schedules.",
            "Daily cleaning with infection control protocols including colour-coded equipment and TGA-approved disinfectants.",
            "Regular compliance audits and cleaning records provided to support accreditation visits."
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
            { question: "Do your cleaners have experience in dementia wards?", answer: "Yes, our staff are trained to work respectfully and patiently in memory care environments, minimising disruption and anxiety for residents while maintaining full infection control standards." },
            { question: "Are your cleaning products safe for elderly residents?", answer: "Absolutely. We use TGA-registered, hospital-grade, low-irritant cleaning agents that are safe for residents with sensitive skin, respiratory conditions, or chemical sensitivities." },
            { question: "Do you follow Aged Care Quality Standards?", answer: "Yes, our cleaning protocols are designed specifically to support your facility in meeting Aged Care Quality Standards regarding safe and clean environments and consumer dignity." },
            { question: "Can you manage infectious outbreak cleaning?", answer: "Yes, we have specialised outbreak response procedures for gastroenteritis, influenza, and other communicable illness scenarios, with immediate escalation teams available." },
            { question: "Are you experienced with NDIS settings?", answer: "Yes, we regularly work alongside NDIS support coordinators and plan managers in residential aged care and supported living environments across Sydney." }
        ],
        images: [
            { src: "/images/services/medical.webp", alt: "Aged care cleaning Sydney nursing home" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Aged Care Cleaning Sydney"
                serviceDescription="Specialist infection control cleaning for aged care facilities, nursing homes, and retirement villages across Sydney using TGA-approved chemicals and Aged Care Quality Standards-compliant protocols."
                serviceUrl="/aged-care-cleaning-sydney"
                serviceType="Aged Care Cleaning"
                price="$$"
                additionalServices={["Infection Control Cleaning", "High-Touch Disinfection", "Outbreak Response", "Carpet Cleaning", "Kitchen Deep Clean"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
