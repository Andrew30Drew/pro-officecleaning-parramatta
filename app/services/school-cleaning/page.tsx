import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'School Cleaning Services Sydney | Education Facility Cleaning | Pro Clean Corp',
    description: 'Pro Clean Corp delivers specialist school cleaning across Sydney. Primary & high school, classrooms, canteen, bathrooms, gyms, child-safe chemicals, WWCC staff & holiday deep cleans.',
    keywords: 'school cleaning services sydney, education facility cleaning sydney, primary school cleaning, secondary school cleaning, classroom cleaning sydney, canteen cleaning school, school bathroom cleaning, school gym cleaning, working with children check school cleaner, holiday deep clean school sydney',
    openGraph: {
        title: 'School Cleaning Services Sydney | Education Facility Cleaning | Pro Clean Corp',
        description: 'Specialist school and education facility cleaning across Sydney. Primary and secondary schools, classrooms, canteen, bathrooms, gyms, child-safe chemicals, and holiday deep cleans.',
        url: 'https://www.procleancorp.com.au/services/school-cleaning',
        type: 'website',
        images: [{ url: '/images/services/school.webp', alt: 'School cleaning services Sydney education facility' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/services/school-cleaning' },
};

export default function SchoolCleaningServicesPage() {
    const serviceInfo = {
        title: "School Cleaning Services Sydney",
        description: "Pro Clean Corp provides specialist school and education facility cleaning services across Sydney for primary schools, secondary schools, K-12 campuses, and independent colleges. We understand the critical importance of maintaining a clean, hygienic, and safe learning environment for students and staff. All our school cleaning staff hold Working With Children Checks, and we use only child-safe, TGA-approved, non-toxic products throughout all school areas — with scheduling designed to cause zero disruption to the school day.",
        benefits: [
            "Primary/Secondary School Cleaning: Experience across all school types, sizes, and campus configurations.",
            "Classrooms: High-touch surface disinfection of desks, chairs, door handles, light switches, and technology.",
            "Canteen: HACCP-aligned cleaning of food preparation areas, serving counters, and storage zones.",
            "Bathrooms: Daily deep sanitisation of all student and staff bathroom facilities.",
            "Gyms: Floor scrubbing, equipment area cleaning, and bleacher maintenance for school sports halls.",
            "Safe Chemicals: TGA-approved, non-toxic, child-safe products used throughout all school environments.",
            "Working With Children Checks: All cleaning staff hold current WWCCs and police clearances.",
            "Holiday Deep Cleans: Intensive carpet, floor, window, and high-level cleaning during school breaks.",
            "Term Schedule: Flexible programmes aligned with NSW school term dates and after-hours access."
        ],
        process: [
            "Campus inspection to understand school layout, traffic patterns, security requirements, and risk zones.",
            "Custom cleaning schedule aligned with school terms, bell times, and after-hours or weekend access.",
            "Daily cleaning of classrooms, bathrooms, canteens, and common areas using colour-coded child-safe systems.",
            "Holiday deep clean programme for carpets, floors, windows, high-level areas, and specialist spaces."
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
            { question: "Do your school cleaners hold Working With Children Checks?", answer: "Yes, every member of our school cleaning team holds a current Working With Children Check (WWCC) and has undergone thorough police background screening before commencing work at any school." },
            { question: "What cleaning chemicals do you use in schools?", answer: "We use only TGA-approved, non-toxic, low-allergen cleaning products throughout all school areas. Product safety data sheets are available on request for your school's WHS records." },
            { question: "When is the cleaning performed?", answer: "All routine cleaning is performed before school opens, after school closes, or on weekends to ensure zero disruption to teachers, students, and the learning programme." },
            { question: "Do you clean school canteens to food safety standards?", answer: "Yes, school canteen and food preparation areas are cleaned to HACCP-aligned food safety standards using food-safe, TGA-approved chemicals and appropriate sanitisation procedures." },
            { question: "What is included in a holiday deep clean?", answer: "Our holiday deep cleans include carpet steam cleaning, floor strip-and-seal, high-level cobweb and light fitting cleaning, internal window cleaning, and thorough cleaning of all classrooms, bathrooms, and specialist rooms." }
        ],
        images: [
            { src: "/images/services/school.webp", alt: "School cleaning services Sydney education facility" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="School Cleaning Services Sydney"
                serviceDescription="Specialist school and education facility cleaning across Sydney for primary and secondary schools, including classrooms, canteen, bathrooms, gyms, child-safe chemicals, Working With Children checked staff, and holiday deep clean programmes."
                serviceUrl="/services/school-cleaning"
                serviceType="School Cleaning Services"
                price="$$"
                additionalServices={["Classroom Sanitisation", "Canteen Cleaning", "Holiday Deep Cleans", "Carpet Steam Cleaning", "Sports Hall Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
