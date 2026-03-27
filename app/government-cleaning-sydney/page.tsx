
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Government Building Cleaning Sydney | Council & Public Sector Cleaning | Pro Clean Corp',
    description: 'Trusted government building cleaning in Sydney. Security-screened staff, council offices, court buildings, libraries, police stations, and procurement compliance. Call 1300 494 983.',
    keywords: 'government cleaning sydney, council building cleaning, public sector cleaning sydney, government office cleaning, court building cleaning sydney, library cleaning sydney, police station cleaning, government procurement cleaning, security screened cleaners sydney, public facility cleaning',
    openGraph: {
        title: 'Government Building Cleaning Sydney | Council & Public Sector Cleaning | Pro Clean Corp',
        description: 'Reliable, security-screened government building cleaning across Sydney. Council offices, courts, libraries, and public facilities cleaned to audit-ready standards. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/government-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/office.webp', alt: 'Government building cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/government-cleaning-sydney' },
};

export default function GovernmentCleaningPage() {
    const serviceInfo = {
        title: "Government Building Cleaning Sydney",
        description: "Pro Clean Corp provides trusted government building cleaning services across Sydney for local councils, state government departments, court complexes, public libraries, police stations, and community facilities. Government facility cleaning demands a level of accountability, security screening, and compliance documentation that exceeds standard commercial cleaning requirements. Our security-screened, police-checked teams work within strict government access protocols, maintain detailed service records for procurement and audit purposes, and deliver the consistent, professional cleaning standards that public buildings and their users deserve. We are experienced in government tender processes, hold all required industry insurances and certifications, and provide the structured reporting and contract management that public sector procurement teams require.",
        benefits: [
            "Security-Screened Staff: All team members assigned to government facilities undergo police checks and National Police Certificate verification, meeting the security screening requirements of local and state government procurement.",
            "Council Offices & Administration Buildings: Comprehensive cleaning of council administration buildings, customer service areas, councillor suites, meeting rooms, and record storage areas to audit-ready presentation standard.",
            "Court Buildings & Secure Facilities: Specialist cleaning of court complexes, tribunal buildings, and other secure government facilities with strict adherence to access protocols and restricted area procedures.",
            "Libraries & Community Facilities: Respectful, non-disruptive cleaning of public libraries, community centres, civic halls, and cultural facilities — working around public opening hours and community programming.",
            "Compliance with Government Procurement Requirements: Structured service delivery with documented quality management, WHS compliance, equal opportunity employment, and environmental management aligned with NSW government procurement criteria.",
            "Audit-Ready Service Records: Complete digital service logs, supervisor sign-off reports, and chemical usage records provided after every service, supporting government facility audits and contract performance reporting."
        ],
        process: [
            "Procurement & Security Compliance: We complete all required government vendor registration, insurance certification, WWCC compliance (where required), and staff police check verification before commencing any government facility contract.",
            "Site Induction & Access Setup: Government-specific site induction for all assigned staff, establishment of access card, key, and alarm protocols with the facilities manager, and confirmation of restricted area boundaries.",
            "Scheduled Facility Cleaning: Systematic cleaning delivered to a documented schedule and specification, covering all public-facing areas, administrative offices, amenity blocks, meeting rooms, and secure zones per the agreed scope.",
            "Quality Audit & Compliance Reporting: Regular supervisor inspection against a government facility-specific checklist, with formal service reports, defect logs, and corrective action records provided to the facility manager for contract management and audit purposes."
        ],
        whyChooseUs: [
            "Government Sector Experience: Proven track record delivering cleaning services for Sydney-area local councils, state government agencies, and public institutions over many years.",
            "Police-Checked Teams: All staff hold National Police Certificates, meeting the security vetting requirements of government procurement and facility access policies.",
            "Tender and Procurement Ready: We maintain all required industry certifications, insurance coverage, WHS management systems, and quality management documentation to meet government tender requirements.",
            "Audit-Ready Documentation: Our service delivery model generates the structured records, completion reports, and compliance documentation that government contract management and internal audit functions require.",
            "Public Presentation Standards: We understand that government buildings are public trust facilities and deliver cleaning standards that reflect appropriately on the institutions they represent.",
            "Fully Insured: $20 million public liability insurance, workers compensation, and professional indemnity coverage meeting NSW government contract insurance requirements."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "Do your staff hold the security clearances required for government facility access?",
                answer: "Yes. All Pro Clean Corp staff assigned to government facilities hold current National Police Certificates and have undergone thorough background screening. For higher-security government environments requiring additional clearance levels, we can facilitate the appropriate verification process with the relevant government agency prior to commencing service."
            },
            {
                question: "Can you respond to government cleaning tenders and panels?",
                answer: "Yes. Pro Clean Corp is experienced in responding to local and state government cleaning tenders and standing offer panels. We maintain current public liability insurance, workers compensation, quality management documentation, WHS management plans, and environmental management statements required by standard government procurement specifications."
            },
            {
                question: "Do you clean court buildings and other secure government facilities?",
                answer: "Yes. We provide cleaning services for court complexes and other secure government facilities with all required security protocols in place. Our staff are fully briefed on restricted access areas, secure zone procedures, and appropriate conduct within court and justice facilities before commencing any cleaning activity."
            },
            {
                question: "Can you service multiple government facilities across different council areas?",
                answer: "Yes. We operate across the entire Sydney metropolitan area and can service multiple government facilities under a single managed service contract. We provide a dedicated contract manager as a single point of contact for all government facility cleaning across your organisation."
            },
            {
                question: "What compliance documentation do you provide for government contracts?",
                answer: "We provide comprehensive documentation including signed service completion reports, supervisor inspection records, chemical usage logs and safety data sheets, WHS incident records (nil or actual), and quality audit results on a frequency agreed in the contract. All documentation is provided in digital format for easy integration with your records management system."
            }
        ],
        images: [
            { src: "/images/services/office.webp", alt: "Government building cleaning Sydney - council and public sector cleaning" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney government facility and public building cleaning" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Government Building Cleaning Sydney"
                serviceDescription="Trusted government building cleaning services in Sydney. Security-screened staff for council offices, court buildings, libraries, police stations, and public facilities with full compliance documentation."
                serviceUrl="/government-cleaning-sydney"
                serviceType="Government Building Cleaning"
                price="$$"
                additionalServices={["Council Office Cleaning", "Court Building Cleaning", "Public Library Cleaning", "Community Centre Cleaning", "Police Station Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
