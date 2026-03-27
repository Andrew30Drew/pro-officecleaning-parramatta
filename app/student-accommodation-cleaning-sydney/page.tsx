import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Student Accommodation Cleaning Sydney | University Residence Cleaning | Pro Clean Corp',
    description: 'Pro Clean Corp provides specialist student accommodation cleaning across Sydney. Semester changeovers, common areas, shared kitchens, bathrooms, laundry rooms & budget-friendly contracts.',
    keywords: 'student accommodation cleaning sydney, university residence cleaning, semester changeover cleaning, student housing common area, shared kitchen cleaning, student bathroom cleaning, university managed property cleaning, student accommodation cleaners sydney',
    openGraph: {
        title: 'Student Accommodation Cleaning Sydney | University Residence Cleaning | Pro Clean Corp',
        description: 'Specialist student accommodation cleaning across Sydney. Semester changeovers, common areas, shared kitchens, bathrooms, laundry rooms, and university managed properties.',
        url: 'https://www.procleancorp.com.au/student-accommodation-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Student accommodation cleaning Sydney university' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/student-accommodation-cleaning-sydney' },
};

export default function StudentAccommodationCleaningPage() {
    const serviceInfo = {
        title: "Student Accommodation Cleaning Sydney",
        description: "Student accommodation faces the unique challenge of high-density living, intensive shared facility usage, and the critical semester changeover periods that demand rapid, thorough room preparation. Pro Clean Corp partners with university colleges, on-campus residential colleges, and private student housing providers across Sydney to manage the full cleaning lifecycle — from daily common area maintenance and shared kitchen hygiene to intensive semester changeover deep cleans that prepare rooms for incoming students on tight turnaround timelines.",
        benefits: [
            "Semester Changeovers: Rapid room-by-room deep clean programmes executed during semester break windows.",
            "Common Areas: Daily cleaning of lounges, study rooms, corridors, and shared amenity spaces.",
            "Shared Kitchens: High-frequency deep cleaning of kitchen benches, appliances, and floors.",
            "Bathrooms: Daily sanitisation of shared bathroom facilities to prevent illness spread.",
            "Laundry Rooms: Regular cleaning of laundry equipment surrounds, benches, and floors.",
            "Study Rooms: Regular cleaning of study and computer lab areas.",
            "Budget-Friendly Contracts: Flexible pricing models to suit university facilities management budgets.",
            "University Managed Properties: Experience working within institutional facilities management frameworks."
        ],
        process: [
            "Academic calendar review to align cleaning programme with term dates, orientation, and changeover windows.",
            "Daily common area and shared facility cleaning schedule developed with facilities management.",
            "Semester changeover deep clean deployment with large teams to meet intake deadlines.",
            "Maintenance reporting system for damage, defects, and hygiene issues identified during cleaning."
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
            { question: "Do you clean individual student rooms?", answer: "Yes, we clean individual rooms during semester changeover deep cleans and can arrange scheduled en-suite or shared bathroom cleaning as part of ongoing maintenance programmes." },
            { question: "How do you manage semester changeover cleaning?", answer: "We deploy large teams during the semester break window to rapidly deep clean all vacated rooms to a ready-for-occupancy standard, including carpet cleaning, bathroom sanitisation, and kitchen reset." },
            { question: "Do you clean shared kitchens daily?", answer: "Yes, shared kitchens are treated as a priority zone. We clean appliances, benches, sinks, and floors daily to control pest risk and maintain food hygiene standards." },
            { question: "Are your staff police-checked for campus work?", answer: "Yes, all staff hold police checks and, where required for properties housing students under 18, Working With Children Checks are also in place." },
            { question: "Can you work with university facilities management teams?", answer: "Yes, we are experienced in working within institutional facilities management frameworks and are familiar with the reporting, access, and compliance requirements of university-managed accommodation." }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Student accommodation cleaning Sydney university" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Student Accommodation Cleaning Sydney"
                serviceDescription="Specialist student accommodation cleaning across Sydney including semester changeovers, common areas, shared kitchens, bathrooms, laundry rooms, study rooms, and university managed property contracts."
                serviceUrl="/student-accommodation-cleaning-sydney"
                serviceType="Student Accommodation Cleaning"
                price="$$"
                additionalServices={["Semester Changeovers", "Common Area Cleaning", "Shared Kitchen Cleaning", "Carpet Steam Cleaning", "Maintenance Reporting"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
