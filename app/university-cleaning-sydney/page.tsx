import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'University Cleaning Sydney | Campus & TAFE Cleaning Services | Pro Clean Corp',
    description: 'Professional university and TAFE cleaning across Sydney. Lecture theatres, labs, student unions, libraries, residence halls, semester and holiday deep cleans. UNSW, UTS, USyd experience.',
    keywords: 'university cleaning sydney, TAFE cleaning sydney, campus cleaning sydney, lecture theatre cleaning, student union cleaning, library cleaning sydney, university residence hall cleaning, UNSW cleaning, UTS cleaning, USyd cleaning, semester cleaning sydney',
    openGraph: {
        title: 'University Cleaning Sydney | Campus & TAFE Cleaning Services | Pro Clean Corp',
        description: 'University and TAFE campus cleaning across Sydney. Lecture theatres, labs, student unions, libraries, computer rooms, residence halls, and semester vs holiday deep cleans.',
        url: 'https://www.procleancorp.com.au/university-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/school.webp', alt: 'University cleaning Sydney campus TAFE lecture theatre library' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/university-cleaning-sydney' },
};

export default function UniversityCleaningSydneyPage() {
    const serviceInfo = {
        title: "University Cleaning Sydney | Campus & TAFE Specialists",
        description: "University and TAFE campuses are among the most complex cleaning environments in existence — large, heavily used, diverse in building type, and requiring different cleaning standards across lecture theatres, research laboratories, student common areas, libraries, computer rooms, and residential accommodation. Pro Clean Corp has extensive experience delivering campus cleaning contracts across Sydney, including UNSW, UTS, and USyd precincts. We manage semester-timetabled daily cleaning alongside intensive holiday-period deep cleans, with security-cleared staff and scalable teams that adapt to the academic calendar.",
        benefits: [
            "Lecture theatre cleaning to a high standard between classes — seating, floors, lectern areas, and AV equipment surrounds",
            "Laboratory cleaning with appropriate contamination control protocols for science, engineering, and health faculty labs",
            "Student union and common area cleaning manages the high traffic demands of student social and dining spaces",
            "Library cleaning with quiet, respectful cleaning during study periods and intensive cleaning during off-peak hours",
            "Computer room cleaning including keyboard, mouse, and workstation surface sanitation for infection control",
            "Residence hall cleaning with semester maintenance programmes and intensive holiday-period deep cleans"
        ],
        process: [
            "Semester-aligned cleaning schedule developed with your facilities management team — daily cleaning rosters for term time, deep clean programmes for mid-semester and end-of-year breaks",
            "Zone-based campus cleaning with dedicated crews assigned to specific buildings or precincts for familiarity with access requirements, security protocols, and building-specific cleaning needs",
            "Daily operational cleaning: lecture theatre turnovers between sessions, common area maintenance, bathroom servicing, and waste collection across all campus zones",
            "Holiday deep clean programmes: intensive cleaning of all lecture theatres, student spaces, laboratories, residences, and administrative buildings during semester breaks to reset the campus for the new semester"
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
                question: "Do you have experience cleaning at major Sydney universities?",
                answer: "Yes. Pro Clean Corp has provided cleaning services in and around UNSW, UTS, and University of Sydney precincts. We understand the access protocols, security requirements, and cleaning standards expected by Australian university facilities management teams, and have the capacity to service large campuses with multiple building types."
            },
            {
                question: "How do you manage cleaning across a large campus with different building types?",
                answer: "We use a zone-based management approach where dedicated crew members are assigned to specific buildings or precincts. This builds familiarity with access requirements, building-specific cleaning protocols, and security procedures. A senior site supervisor oversees quality across the full campus, with regular auditing and direct liaison with your facilities management team."
            },
            {
                question: "Do you provide holiday-period deep cleaning for universities?",
                answer: "Yes. Semester break and mid-year holiday deep cleans are a core part of our university cleaning service. These intensive programmes cover full carpet steam cleaning, hard floor strip and seal, lecture theatre seat cleaning, laboratory decontamination, residence hall full-room cleaning, and detailed cleaning of all common areas — resetting the campus for the returning student population."
            },
            {
                question: "Can you clean university science and research laboratories?",
                answer: "Yes. We provide laboratory cleaning for science, engineering, health, and research facilities on university campuses, following appropriate contamination control protocols. Laboratory staff lead us through any specific requirements for their lab, and our cleaning teams follow GMP-aligned procedures including gowning requirements, appropriate chemical selection, and cleaning log maintenance."
            },
            {
                question: "Are your university cleaning staff security cleared?",
                answer: "Yes. All Pro Clean Corp staff are police-checked prior to employment. For campuses requiring additional clearances — such as facilities with government research contracts, childcare centres, or sensitive research areas — we can arrange additional background verification checks as required by your institution's security policy."
            }
        ],
        images: [
            { src: "/images/services/school.webp", alt: "University cleaning Sydney campus TAFE lecture theatre library" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp university campus cleaning Sydney" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="University Cleaning Sydney"
                serviceDescription="Specialist university and TAFE campus cleaning across Sydney covering lecture theatres, labs, student unions, libraries, computer rooms, residence halls, and semester and holiday deep clean programmes."
                serviceUrl="/university-cleaning-sydney"
                serviceType="University & TAFE Cleaning"
                price="$$"
                additionalServices={["Lecture Theatre Cleaning", "Laboratory Cleaning", "Student Union Cleaning", "Residence Hall Cleaning", "Holiday Deep Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
