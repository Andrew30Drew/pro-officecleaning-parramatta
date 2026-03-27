import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'School Cleaning Sydney | Primary & High School Cleaning | Pro Clean Corp',
    description: 'Pro Clean Corp provides specialist school cleaning across Sydney. Classroom sanitisation, canteen, toilets, libraries, sports halls, child-safe chemicals & holiday deep clean programs.',
    keywords: 'school cleaning sydney, primary school cleaning sydney, high school cleaning sydney, classroom sanitisation, canteen cleaning school, school toilet cleaning, child safe cleaning products school, working with children check cleaners, holiday deep clean school',
    openGraph: {
        title: 'School Cleaning Sydney | Primary & High School Cleaning | Pro Clean Corp',
        description: 'Specialist cleaning for primary and high schools across Sydney. Classrooms, canteens, toilets, libraries, sports halls, child-safe chemicals, and holiday deep cleans.',
        url: 'https://www.procleancorp.com.au/school-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/school.webp', alt: 'School cleaning Sydney primary high school' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/school-cleaning-sydney' },
};

export default function SchoolCleaningPage() {
    const serviceInfo = {
        title: "School Cleaning Sydney",
        description: "Schools are high-density environments where infection prevention and a clean, safe learning space are critical to student health and outcomes. Pro Clean Corp provides specialist primary and high school cleaning services across Sydney, using child-safe, non-toxic cleaning products and infection control protocols that protect students and staff. Every member of our school cleaning team holds a Working With Children Check, and our flexible scheduling keeps all cleaning outside of school hours to avoid any disruption to the learning environment.",
        benefits: [
            "Classroom Sanitisation: High-touch surface disinfection of desks, chairs, door handles, and light switches.",
            "Canteen/Tuckshop: HACCP-aligned cleaning of food preparation areas, equipment, and serving zones.",
            "Toilets: Daily deep sanitisation of all student and staff bathroom facilities.",
            "Libraries: Careful cleaning of book shelves, study tables, and IT equipment areas.",
            "Sports Halls: Floor scrubbing, bleacher cleaning, and equipment storage area maintenance.",
            "Child-Safe Chemicals: TGA-approved, low-irritant, non-toxic products safe for all student ages.",
            "Working With Children Checks: All cleaning staff hold valid WWCCs and police clearances.",
            "Holiday Deep Clean Programs: Intensive carpet steam cleaning, floor strip-and-seal, and window cleaning during school breaks."
        ],
        process: [
            "Campus inspection to understand specific school layout, traffic areas, security requirements, and high-risk zones.",
            "Custom cleaning schedule aligned with school terms, bell times, and after-hours access arrangements.",
            "Daily cleaning of classrooms, restrooms, canteens, and common areas using colour-coded, child-safe systems.",
            "Holiday deep clean programme scheduled for carpets, floors, windows, and high-level areas."
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
            { question: "Are your school cleaners Working With Children checked?", answer: "Yes, every member of our school cleaning team holds a current Working With Children Check (WWCC) and has undergone thorough police background screening before commencing any school work." },
            { question: "Are your cleaning products child-safe?", answer: "Yes, we use TGA-approved, non-toxic, low-allergen cleaning products throughout all school areas. We can provide product safety data sheets on request for your school's WHS records." },
            { question: "When do you perform the school cleaning?", answer: "All cleaning is performed before school opens, after school closes, or on weekends to ensure zero disruption to teachers, students, or the learning programme." },
            { question: "Do you offer holiday deep clean programs?", answer: "Yes, school holidays are the ideal time for intensive deep cleaning including carpet steam cleaning, floor strip-and-seal, high-level dusting, and window cleaning across all school buildings." },
            { question: "Can you clean canteens and food preparation areas?", answer: "Yes, school canteens and tuckshop areas are cleaned to HACCP-aligned food safety standards using food-safe chemicals and appropriate sanitisation protocols." }
        ],
        images: [
            { src: "/images/services/school.webp", alt: "School cleaning Sydney primary high school" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="School Cleaning Sydney"
                serviceDescription="Specialist primary and high school cleaning across Sydney including classroom sanitisation, canteen, toilets, libraries, sports halls, child-safe chemicals, Working With Children checked staff, and holiday deep clean programmes."
                serviceUrl="/school-cleaning-sydney"
                serviceType="School Cleaning"
                price="$$"
                additionalServices={["Classroom Sanitisation", "Canteen Cleaning", "Holiday Deep Cleans", "Carpet Steam Cleaning", "Sports Hall Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
