
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Bank Cleaning Sydney | Financial Institution Cleaning Services | Pro Clean Corp',
    description: 'Specialist bank and financial institution cleaning in Sydney. Security-screened staff, after-hours cleaning, teller areas, ATM surrounds, and compliance documentation. Call 1300 494 983.',
    keywords: 'bank cleaning sydney, financial institution cleaning, bank branch cleaning, ATM cleaning sydney, teller area cleaning, after hours bank cleaning, executive suite cleaning, compliance cleaning sydney, security cleaning sydney, banking facility cleaning',
    openGraph: {
        title: 'Bank Cleaning Sydney | Financial Institution Cleaning Services | Pro Clean Corp',
        description: 'Trusted bank and financial institution cleaning across Sydney. Security-screened staff, after-hours access, and compliance-ready documentation. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/bank-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/office.webp', alt: 'Bank cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/bank-cleaning-sydney' },
};

export default function BankCleaningPage() {
    const serviceInfo = {
        title: "Bank Cleaning Sydney",
        description: "Pro Clean Corp provides specialist cleaning services for banks, credit unions, and financial institutions across Sydney, delivering the highest standards of hygiene, security, and professionalism the banking sector demands. Our police-checked and security-screened cleaning teams operate strictly after hours, ensuring zero disruption to customers and daily banking operations. From customer-facing teller counters and ATM surrounds to secure back-of-house areas, executive suites, and safe deposit vault surrounds, we clean every zone with total discretion and meticulous attention to detail that financial institutions require.",
        benefits: [
            "Security-Cleared Staff: Every team member is police-checked and security-screened prior to commencing work, with clearance documentation available for your compliance and audit records.",
            "After-Hours Cleaning: All cleaning performed outside business hours to ensure absolutely zero disruption to staff, customers, or daily banking operations.",
            "Teller Counter Sanitisation: Thorough cleaning and disinfection of teller workstations, cash-handling surfaces, customer-facing service counters, and transaction document areas.",
            "ATM & Self-Service Zones: Detailed cleaning and disinfection of ATM fascias, PIN keypads, surrounding floor areas, and self-service kiosks to high-touch hygiene standards.",
            "Safe Deposit Vault Surrounds: Careful, discreet cleaning of vault access corridors, waiting areas, and surrounding secure zones with full respect for restricted access protocols.",
            "Executive Suite Detailing: Premium cleaning standards for executive offices, boardrooms, private client meeting rooms, and senior management areas."
        ],
        process: [
            "Security Briefing & Access Setup: We coordinate with your branch manager and security team to establish after-hours access, alarm deactivation protocols, and restricted area procedures before the first service.",
            "Customer Area Cleaning: Systematic cleaning of lobby floors, seating areas, glass partitions, ATM zones, teller counters, and customer service areas to an impeccable presentation standard.",
            "Back-of-House & Secure Area Cleaning: Cleaning of staff offices, break rooms, IT room surrounds, and permissible secure zones with complete discretion and professionalism.",
            "Quality Sign-Off & Lock-Up: Supervisor inspection of all cleaned areas, security system reset, and a documented completion report submitted directly to branch management for compliance records."
        ],
        whyChooseUs: [
            "Police-Checked Teams: All staff undergo thorough background screening appropriate for access to financial institution premises and sensitive environments.",
            "Proven Bank Sector Experience: We service major retail banks, credit unions, building societies, and financial advisory firms throughout Sydney.",
            "Strict After-Hours Compliance: Our scheduling and access procedures are built entirely around your security requirements, alarm protocols, and branch operating hours.",
            "Zero Business Disruption: 100% of cleaning work completed outside trading hours with no impact on customer service, staff workflow, or branch operations.",
            "Audit-Ready Documentation: Signed completion reports and service logs provided after every cleaning session for your compliance, audit trail, and facility management records.",
            "Fully Insured: $20 million public liability insurance covering all bank and financial premises cleaning activities."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "Do your cleaners undergo police checks for bank cleaning?",
                answer: "Yes. All Pro Clean Corp staff assigned to bank and financial institution cleaning are fully police-checked and security-screened prior to commencing. We provide clearance documentation upon request for your compliance records."
            },
            {
                question: "Can you clean around security systems and alarms?",
                answer: "Absolutely. We work closely with your security team to establish correct entry and exit procedures, alarm deactivation protocols, and restricted area access rules. Our staff are comprehensively briefed on your specific security requirements before every shift."
            },
            {
                question: "Do you clean ATM areas and self-service banking zones?",
                answer: "Yes. We provide detailed cleaning and disinfection of ATM fascias, PIN keypads, surrounding floor areas, and self-service kiosks, ensuring these high-touch customer-facing zones are hygienic and presentable at all times."
            },
            {
                question: "Can you service multiple bank branches across Sydney?",
                answer: "Yes. We service bank branches of all sizes across Sydney with dedicated after-hours cleaning teams. We coordinate cleaning schedules across multiple branches under a single managed service agreement with consistent quality standards."
            },
            {
                question: "Do you provide cleaning compliance reports for audit purposes?",
                answer: "Yes. We supply signed completion reports and detailed service logs after each cleaning session, providing the full documentation trail required for internal audits, compliance reviews, and facility management records."
            }
        ],
        images: [
            { src: "/images/services/office.webp", alt: "Bank cleaning Sydney - financial institution cleaning" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney bank and office cleaning" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Bank Cleaning Sydney"
                serviceDescription="Specialist bank and financial institution cleaning services in Sydney. Security-screened staff, after-hours cleaning, teller area sanitisation, and compliance documentation."
                serviceUrl="/bank-cleaning-sydney"
                serviceType="Bank & Financial Institution Cleaning"
                price="$$"
                additionalServices={["After-Hours Cleaning", "ATM Zone Cleaning", "Teller Counter Sanitisation", "Executive Suite Cleaning", "Compliance Documentation"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
