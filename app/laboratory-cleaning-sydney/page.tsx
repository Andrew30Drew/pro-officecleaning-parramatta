import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Laboratory Cleaning Sydney | Scientific Facility Cleaning Services | Pro Clean Corp',
    description: 'Laboratory cleaning in Sydney to GMP and ISO standards. Chemical-resistant agents, fume hood cleaning, biosafety cabinet decontamination, HEPA vacuuming, and ISO-compliant protocols.',
    keywords: 'laboratory cleaning sydney, scientific facility cleaning sydney, GMP cleaning sydney, ISO compliant lab cleaning, biosafety cabinet decontamination, fume hood cleaning sydney, HEPA vacuuming lab, research facility cleaning sydney, medical laboratory cleaning',
    openGraph: {
        title: 'Laboratory Cleaning Sydney | Scientific Facility Cleaning Services | Pro Clean Corp',
        description: 'Precision laboratory cleaning in Sydney to GMP and ISO standards. Chemical-resistant agents, fume hood cleaning, biosafety cabinet decontamination, and HEPA vacuuming.',
        url: 'https://www.procleancorp.com.au/laboratory-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/medical.webp', alt: 'Laboratory cleaning Sydney scientific facility GMP ISO standards' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/laboratory-cleaning-sydney' },
};

export default function LaboratoryCleaningSydneyPage() {
    const serviceInfo = {
        title: "Laboratory Cleaning Sydney | GMP & ISO-Compliant",
        description: "Laboratories demand a standard of cleaning precision and contamination control that is categorically different from general commercial cleaning. Pro Clean Corp provides specialist laboratory cleaning services across Sydney for research institutes, universities, hospitals, pathology labs, pharmaceutical facilities, and industrial testing laboratories. Our teams are trained in GMP (Good Manufacturing Practice) standards, use chemical-resistant cleaning agents appropriate for laboratory environments, and follow strict entry, gowning, and cleaning protocols. We deliver consistently clean, contamination-controlled environments that support your research integrity and regulatory compliance.",
        benefits: [
            "Chemical-resistant cleaning agents selected for compatibility with laboratory surfaces and sensitive equipment",
            "Fume hood exterior cleaning without disrupting internal airflow patterns or contaminating the working zone",
            "Biosafety cabinet exterior decontamination to manufacturer specifications and biosafety level requirements",
            "HEPA vacuuming of floors, surfaces, and equipment areas to capture fine particulates without redistributing them",
            "GMP standards applied throughout — cleaning logs, staff training records, and verification procedures maintained",
            "ISO-compliant protocols tailored to your laboratory's specific class, contamination control requirements, and SOP documentation"
        ],
        process: [
            "Site assessment and SOP review — we review your laboratory's cleaning requirements, entry protocols, and any chemical or biological hazard considerations before onboarding",
            "PPE gowning and entry protocol compliance — staff follow your laboratory's specific entry procedures including gowning, gloving, and decontamination mat use",
            "Systematic cleaning of all laboratory areas using appropriate chemicals and equipment for each surface type — benches, floors, glass, and infrastructure — following zone-specific protocols",
            "Cleaning log completion and supervisor sign-off on every service, maintaining your quality management system documentation trail"
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
                question: "What qualifications do your laboratory cleaners have in Sydney?",
                answer: "Our laboratory cleaning staff receive specialised training in GMP cleaning protocols, chemical safety, biohazard awareness, laboratory entry and gowning procedures, and contamination control. Staff are police-checked and can sign confidentiality agreements required by research institutions. We can also provide staff who have completed specific inductions required by your facility."
            },
            {
                question: "Do you clean biosafety cabinets and fume hoods?",
                answer: "We clean the exterior surfaces of biosafety cabinets and fume hoods following manufacturer specifications. Interior decontamination of biosafety cabinets (Classes I, II, and III) requires specialist certification and must be performed by a certified biosafety cabinet technician — we can refer you to the appropriate specialist for internal decontamination and recertification."
            },
            {
                question: "What cleaning chemicals do you use in laboratory environments?",
                answer: "Chemical selection depends on your laboratory's specific requirements. We use IPA (isopropyl alcohol), quaternary ammonium compounds, hydrogen peroxide-based disinfectants, and other reagent-grade cleaning agents as specified by your SOP. We do not introduce chemicals into laboratory environments without prior approval, and we maintain full SDS documentation for all products used."
            },
            {
                question: "Can you clean ISO-classified cleanrooms in Sydney?",
                answer: "Yes. We have experience cleaning ISO Class 5 through Class 8 cleanroom environments using appropriate methods including HEPA-filtered vacuums, mopping with mop systems compatible with cleanroom requirements, and using approved cleanroom-grade cleaning products. All cleanroom cleaning is performed in accordance with your facility's validated cleaning procedures."
            },
            {
                question: "Do you maintain cleaning records for GMP compliance?",
                answer: "Yes. Maintaining GMP-compliant cleaning documentation is a core part of our laboratory cleaning service. We complete and sign cleaning logs for every session, recording the areas cleaned, chemicals used, staff members involved, and date and time of service. These records are maintained in a format suitable for inclusion in your quality management system."
            }
        ],
        images: [
            { src: "/images/services/medical.webp", alt: "Laboratory cleaning Sydney scientific facility GMP standards" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp laboratory cleaning Sydney ISO compliant" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Laboratory Cleaning Sydney"
                serviceDescription="Specialist laboratory cleaning in Sydney to GMP and ISO standards including chemical-resistant cleaning agents, fume hood exterior cleaning, biosafety cabinet decontamination, HEPA vacuuming, and full cleaning documentation."
                serviceUrl="/laboratory-cleaning-sydney"
                serviceType="Laboratory Cleaning"
                price="$$"
                additionalServices={["GMP Cleaning", "Cleanroom Cleaning", "Biosafety Cabinet Cleaning", "HEPA Vacuuming", "Research Facility Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
