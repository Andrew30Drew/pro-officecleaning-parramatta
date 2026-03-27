import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Dental Practice Cleaning Sydney | Surgery-Grade Dental Cleaning | Pro Clean Corp',
    description: 'Pro Clean Corp delivers surgery-grade dental practice cleaning across Sydney. Infection control, sterilisation room, dental chair areas, patient waiting, ADA compliance & after-hours.',
    keywords: 'dental practice cleaning sydney, dental surgery cleaning, infection control dental, ada compliance cleaning, sterilisation room cleaning, dental chair cleaning, after-hours dental cleaning, dental clinic sanitisation sydney',
    openGraph: {
        title: 'Dental Practice Cleaning Sydney | Surgery-Grade Dental Cleaning | Pro Clean Corp',
        description: 'Surgery-grade infection control cleaning for dental practices across Sydney. ADA-compliant, after-hours service, sterilisation room, and patient area specialists.',
        url: 'https://www.procleancorp.com.au/dental-practice-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/medical.webp', alt: 'Dental practice cleaning Sydney surgery grade' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/dental-practice-cleaning-sydney' },
};

export default function DentalPracticeCleaningPage() {
    const serviceInfo = {
        title: "Dental Practice Cleaning Sydney",
        description: "Dental practices require a precise level of cleaning that goes beyond standard commercial cleaning — every surface, zone, and transition between clinical and non-clinical areas must be managed to prevent cross-contamination and maintain accreditation. Pro Clean Corp provides specialist dental practice cleaning services across Sydney using surgery-grade TGA-registered disinfectants, colour-coded systems, and infection control protocols aligned with Australian Dental Association guidelines and NHMRC standards. All work is performed after-hours to minimise aerosol risk during patient hours.",
        benefits: [
            "Surgery-Grade Disinfection: TGA-registered hospital-grade disinfectants applied to all clinical surfaces.",
            "Dental Chair and Unit Areas: Non-clinical surface cleaning of chairs, bases, and associated equipment.",
            "Sterilisation Room: Meticulous cleaning of benches, sinks, and steriliser exteriors in the most critical zone.",
            "Patient Waiting Areas: High-touch surface disinfection of chairs, tables, reception, and door handles.",
            "Infection Control Protocol: Colour-coded systems preventing cross-contamination between clinical and non-clinical zones.",
            "ADA Compliance: Cleaning documented to support infection control accreditation records.",
            "After-Hours Service: All cleaning performed outside patient hours to eliminate aerosol exposure risk."
        ],
        process: [
            "Site risk assessment identifying clean and contaminated zones across the entire practice.",
            "Detailed scope developed for surgery areas, sterilisation bays, and reception zones.",
            "Clinical cleaning with hospital-grade disinfectants on all high-touch and clinical surfaces.",
            "Sign-off documentation provided for your infection control accreditation records."
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
            { question: "Do you clean the dental chairs?", answer: "We clean all non-clinical surfaces of the dental chair including the base, foot controls, and surrounding cabinetry. We follow your specific clinical team's instructions for any upholstered surfaces." },
            { question: "Are your cleaners trained in infection control?", answer: "Yes, all staff servicing dental practices undergo specific training in standard precautions and infection control relevant to healthcare settings, including cross-contamination prevention." },
            { question: "Do you use hospital-grade disinfectants?", answer: "Yes, we use TGA-registered hospital-grade disinfectants that meet Australian standards for clinical surface cleaning, effective against a full spectrum of pathogens including bacteria, fungi, and viruses." },
            { question: "Can you clean the sterilisation room?", answer: "Yes, the sterilisation room is treated as the highest-priority zone in our dental cleaning scope. We clean benchtops, sinks, instrument storage areas, and steriliser exteriors with full infection control protocols." },
            { question: "Do you clean after hours?", answer: "Yes, we recommend and exclusively schedule dental practice cleaning after patient hours. This allows unrestricted access, eliminates aerosol risk during active treatment, and ensures the practice is pristine for morning opening." }
        ],
        images: [
            { src: "/images/services/medical.webp", alt: "Dental practice cleaning Sydney surgery grade" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Dental Practice Cleaning Sydney"
                serviceDescription="Surgery-grade dental practice cleaning across Sydney including infection control protocols, sterilisation room, dental chair areas, patient waiting, ADA compliance documentation, and after-hours service."
                serviceUrl="/dental-practice-cleaning-sydney"
                serviceType="Dental Practice Cleaning"
                price="$$"
                additionalServices={["Infection Control Cleaning", "Sterilisation Room Cleaning", "Reception Area Cleaning", "Floor Polishing", "Bathroom Sanitisation"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
