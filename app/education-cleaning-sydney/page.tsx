
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Education Facility Cleaning Sydney | School & University Cleaning | Pro Clean Corp',
    description: 'Professional school and education facility cleaning in Sydney. Child-safe TGA-approved products, Working With Children checked staff, classrooms, canteens, gyms, and holiday deep cleans. Call 1300 494 983.',
    keywords: 'education facility cleaning sydney, school cleaning sydney, university cleaning sydney, classroom cleaning, school cleaning services, childcare cleaning sydney, canteen cleaning school, gym cleaning school, WWCC cleaners sydney, school holiday deep clean, TAFE cleaning sydney',
    openGraph: {
        title: 'Education Facility Cleaning Sydney | School & University Cleaning | Pro Clean Corp',
        description: 'Trusted education facility cleaning across Sydney. Child-safe products, WWCC-checked staff, comprehensive school and university cleaning. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/education-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/school.webp', alt: 'Education facility cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/education-cleaning-sydney' },
};

export default function EducationCleaningPage() {
    const serviceInfo = {
        title: "Education Facility Cleaning Sydney",
        description: "Pro Clean Corp delivers professional education facility cleaning services across Sydney for primary schools, high schools, universities, TAFE campuses, and early childhood centres. Education facilities present one of the most demanding commercial cleaning environments — high student densities, high-touch surfaces, food service areas, specialist spaces including laboratories, gyms, and libraries, and the critical obligation to use only child-safe cleaning products in spaces occupied by children. Every Pro Clean Corp education cleaning team member holds a current NSW Working With Children Check (WWCC), uses only TGA-approved, child-safe cleaning agents, and follows infection control protocols that meet NSW Department of Education standards and independent school accreditation requirements.",
        benefits: [
            "Child-Safe TGA-Approved Products: All cleaning products used in school and childcare environments are TGA-approved, low-VOC, and certified safe for use in spaces occupied by children and young people.",
            "Classrooms & Learning Spaces: Daily cleaning of classrooms, lecture theatres, tutorial rooms, and learning areas including desk surfaces, chair legs, door handles, and technology equipment exteriors.",
            "Libraries & Specialist Rooms: Careful, informed cleaning of school libraries, science laboratories, art rooms, music rooms, and home economics areas using appropriate techniques for each specialist space.",
            "Canteens & Food Service Areas: HACCP-aligned cleaning and sanitisation of school canteen preparation surfaces, serving areas, refrigeration units, and dining hall tables and seating.",
            "Toilets & Amenity Blocks: Thorough disinfection and restocking of all student and staff toilet blocks, change rooms, and shower facilities using hospital-grade disinfectants and automated dispensing systems.",
            "Working With Children Checks: Every Pro Clean Corp team member assigned to education facilities holds a current NSW Working With Children Check, providing the mandatory screening required for regular school access."
        ],
        process: [
            "Compliance Briefing & Access Setup: We coordinate with your school's principal and facilities manager to confirm WWCC compliance for all assigned staff, establish after-hours access procedures, and develop a cleaning schedule aligned with term timetables and bell times.",
            "Daily Term-Time Cleaning: After-hours or pre-opening systematic cleaning of classrooms, corridors, amenity blocks, staffrooms, administration offices, and canteen areas to a daily presentation standard.",
            "Specialist Area & Holiday Deep Clean: Periodic deep cleaning of gymnasium floors, library shelving, science laboratory benches, canteen equipment, and carpet steam extraction during school holiday periods to reset the facility for the new term.",
            "Quality Audit & Reporting: Regular supervisor audits against a school-specific cleaning checklist, with completion reports and WWCC compliance documentation provided to school administration for records."
        ],
        whyChooseUs: [
            "Working With Children Checked: All staff assigned to school and education environments hold a current NSW WWCC — non-negotiable for regular access to any premises where children are present.",
            "Education Sector Specialists: Extensive experience cleaning government schools, independent schools, TAFE campuses, and universities across the Sydney metropolitan area.",
            "Child-Safe Chemical Commitment: We use only TGA-approved, low-irritant, non-toxic cleaning agents in classrooms and learning spaces — eliminating chemical exposure risk for students and teaching staff.",
            "School Holiday Deep Clean Capability: Dedicated deep-clean teams available during the Easter, mid-year, and summer school holidays for floor stripping and sealing, carpet extraction, and comprehensive facility reset.",
            "Term Schedule Alignment: Our cleaning rosters are built around school bell times, exam periods, and special events to ensure no disruption to teaching and learning activities.",
            "Fully Insured: $20 million public liability insurance covering all education facility cleaning activities across school, university, and TAFE premises."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "Do all your cleaners hold Working With Children Checks for school cleaning?",
                answer: "Yes. This is a non-negotiable requirement for all Pro Clean Corp staff assigned to school and education facilities. Every team member holds a current NSW Working With Children Check (WWCC), and we maintain compliance documentation readily available for school administration. No staff member enters an education facility without a current valid WWCC."
            },
            {
                question: "Are the cleaning products you use safe for students with allergies or sensitivities?",
                answer: "Yes. All cleaning products we use in classrooms and student-accessible areas are TGA-approved, low-VOC, non-irritant formulations that are safe for children and suitable for environments including students with asthma, chemical sensitivities, or allergies. We can provide full product data sheets for any chemicals used on your campus upon request."
            },
            {
                question: "Can you perform deep cleaning during school holidays?",
                answer: "Yes. School holiday deep cleaning is a specialised service we strongly recommend for comprehensive facility maintenance. During holiday periods we perform floor stripping and sealing in corridors and canteens, carpet steam extraction in classrooms and libraries, thorough cleaning of gymnasium floors, and full amenity block disinfection — all without impacting student learning time."
            },
            {
                question: "Do you clean science laboratories and specialist rooms?",
                answer: "Yes. We clean science laboratories, art rooms, home economics rooms, and music rooms as part of our education facility service. Our staff are briefed on appropriate cleaning methods for each specialist environment — including safe chemical use in laboratories, appropriate cleaning of musical instruments and cases, and handling of art materials and equipment."
            },
            {
                question: "Can you manage cleaning consumables supply for our school?",
                answer: "Yes. We can manage the complete supply and restocking of all cleaning consumables across your campus — including toilet paper, paper towels, hand soap, hand sanitiser, bin liners, and sanitary disposal units. This simplifies your facilities management by consolidating consumable supply with your cleaning service under a single managed contract."
            }
        ],
        images: [
            { src: "/images/services/school.webp", alt: "Education facility cleaning Sydney - school and classroom cleaning" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney school and university cleaning services" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Education Facility Cleaning Sydney"
                serviceDescription="Professional school and education facility cleaning services in Sydney. Child-safe TGA-approved products, WWCC-checked staff, classroom cleaning, canteen hygiene, and school holiday deep cleans."
                serviceUrl="/education-cleaning-sydney"
                serviceType="Education Facility Cleaning"
                price="$$"
                additionalServices={["Classroom Cleaning", "School Canteen Cleaning", "Gymnasium Floor Cleaning", "School Holiday Deep Clean", "University Campus Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
