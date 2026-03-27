import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Childcare Centre Cleaning Services Sydney | Pro Clean Corp',
    description: 'Pro Clean Corp provides NQS-compliant childcare centre cleaning in Sydney. Child-safe TGA-approved products, toy sanitisation, nappy change areas, sleep rooms, play areas & WWCC staff.',
    keywords: 'childcare centre cleaning sydney, childcare cleaning services, nqs compliant cleaning childcare, child safe cleaning products, toy sanitisation childcare, nappy change area cleaning, sleep room cleaning childcare, working with children check cleaner, daycare cleaning sydney',
    openGraph: {
        title: 'Childcare Centre Cleaning Services Sydney | Pro Clean Corp',
        description: 'NQS-compliant childcare centre cleaning in Sydney. Child-safe TGA-approved products, toy sanitisation, nappy areas, sleep rooms, play areas, and WWCC staff.',
        url: 'https://www.procleancorp.com.au/services/childcare-cleaning',
        type: 'website',
        images: [{ url: '/images/services/school.webp', alt: 'Childcare centre cleaning services Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/services/childcare-cleaning' },
};

export default function ChildcareCleaningPage() {
    const serviceInfo = {
        title: "Childcare Centre Cleaning Services",
        description: "Childcare centres carry one of the highest hygiene responsibilities of any commercial environment — small children's immune systems are vulnerable, and the shared nature of play equipment and facilities creates constant cross-contamination risk. Pro Clean Corp provides specialist NQS-compliant childcare centre cleaning services across Sydney, using only child-safe, TGA-approved, non-toxic products throughout all areas of your centre. Every member of our team holds a Working With Children Check, and our protocols are designed to satisfy all National Quality Standard requirements.",
        benefits: [
            "Child-Safe TGA-Approved Products: Non-toxic, low-irritant disinfectants safe for children of all ages including infants.",
            "Toy Sanitisation: Regular cleaning and disinfection of all shared toys, puzzles, and play materials.",
            "Nappy Change Areas: Thorough disinfection of all nappy change stations and associated surfaces.",
            "Sleep Rooms: Daily cleaning and sanitisation of cot areas, mattresses, and sleep room surfaces.",
            "Play Areas: Indoor and outdoor play area cleaning including soft fall surfaces and equipment.",
            "Kitchen: HACCP-aligned cleaning of food preparation, serving, and storage areas.",
            "NQS Compliance: Cleaning documentation and protocols aligned with National Quality Standard requirements.",
            "Working With Children Checks: All cleaning staff hold current WWCCs and police clearances."
        ],
        process: [
            "Centre walkthrough to map all areas, identify infection risk zones, and understand NQS compliance requirements.",
            "Custom cleaning schedule developed around childcare hours with all cleaning performed after children depart.",
            "Daily cleaning using colour-coded, child-safe systems for all rooms, bathrooms, kitchens, and play areas.",
            "Regular compliance audit and cleaning records provided to support NQS accreditation visits."
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
            { question: "Are your products safe for infants and toddlers?", answer: "Yes, we use only TGA-approved, non-toxic, fragrance-free, and low-irritant cleaning products throughout all childcare areas. We can provide product safety data sheets to satisfy NQS inspections." },
            { question: "Do you sanitise toys and shared play equipment?", answer: "Yes, regular toy sanitisation is included in our childcare cleaning scope. We clean and disinfect all shared toys, puzzles, building blocks, and play materials using child-safe disinfectants." },
            { question: "Do your staff have Working With Children Checks?", answer: "Yes, every member of our childcare cleaning team holds a current Working With Children Check (WWCC) and has undergone full police background screening before commencing any childcare work." },
            { question: "Do you clean sleep rooms and cot areas?", answer: "Yes, sleep rooms and cot areas are treated as high-priority infection control zones. We clean and disinfect all cot frames, mattress surfaces, and surrounding areas as part of our daily schedule." },
            { question: "How do you support NQS accreditation?", answer: "We maintain detailed cleaning logs, provide product safety data sheets, and offer documented compliance records that childcare centre directors can use to demonstrate cleaning standards during NQS assessments." }
        ],
        images: [
            { src: "/images/services/school.webp", alt: "Childcare centre cleaning services Sydney" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Childcare Centre Cleaning Services"
                serviceDescription="NQS-compliant childcare centre cleaning across Sydney using child-safe TGA-approved products, including toy sanitisation, nappy change areas, sleep rooms, play areas, kitchen, and Working With Children checked staff."
                serviceUrl="/services/childcare-cleaning"
                serviceType="Childcare Centre Cleaning"
                price="$$"
                additionalServices={["Toy Sanitisation", "Nappy Area Disinfection", "Sleep Room Cleaning", "Play Area Cleaning", "Kitchen Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
