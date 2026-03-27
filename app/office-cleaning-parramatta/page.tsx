import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Office Cleaning Parramatta | Commercial Cleaners Western Sydney | Pro Clean Corp',
    description: 'Professional office cleaning services in Parramatta NSW. Trusted by Parramatta CBD businesses, government offices & corporate tenants. Flexible scheduling, $20M insured. Call 1300 494 983.',
    keywords: 'office cleaning parramatta, commercial cleaning parramatta, office cleaners parramatta, parramatta cbd office cleaning, cleaning services parramatta nsw, parramatta commercial cleaners, office cleaning western sydney parramatta',
    openGraph: {
        title: 'Office Cleaning Parramatta | Commercial Cleaners Western Sydney | Pro Clean Corp',
        description: 'Office cleaning specialists in Parramatta CBD and Western Sydney. Police-checked staff, $20M insured, flexible scheduling. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/office-cleaning-parramatta',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Office cleaning Parramatta CBD commercial cleaners Western Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-parramatta' },
};

const faqs = [
    {
        question: 'Do you provide office cleaning in Parramatta CBD?',
        answer: 'Yes. Pro Clean Corp services all of Parramatta CBD including the major commercial towers, government offices, financial district buildings, and corporate tenants across Church Street, Phillip Street, and surrounding commercial precincts. We are familiar with Parramatta\'s building access procedures and after-hours cleaning protocols for the precinct.'
    },
    {
        question: 'What types of offices do you clean in Parramatta?',
        answer: 'We clean all commercial office types in Parramatta — corporate towers, government departments, legal and financial services firms, real estate agencies, medical practices, co-working spaces, and small business offices. We customise the cleaning scope and schedule for each client based on their specific office environment and operational requirements.'
    },
    {
        question: 'Can you clean Parramatta offices outside business hours?',
        answer: 'Yes. We offer early morning cleaning (from 5am), evening cleaning (from 5:30pm), and weekend services for all Parramatta clients. Most Parramatta CBD corporate clients schedule evening cleaning from 6pm to avoid any disruption to their team during business hours. We manage keys and building access codes with full security accountability.'
    },
    {
        question: 'Do you service government offices in Parramatta?',
        answer: 'Yes. We have experience with government office cleaning in Parramatta, including compliance with government building access protocols, security clearance requirements for staff, and the documentation standards that government clients require for cleaning contractors. We can provide all necessary insurance certificates, police clearances, and compliance documentation.'
    },
    {
        question: 'How much does office cleaning in Parramatta cost?',
        answer: 'Office cleaning pricing in Parramatta depends on the size of your office, number of staff, frequency required, and scope of tasks. We offer a free on-site assessment and provide a fixed monthly price that covers all agreed cleaning tasks. Most Parramatta offices are priced on a monthly contract basis for straightforward budget management and invoice processing.'
    }
];

export default function OfficeCleaningParramattaPage() {
    const serviceInfo = {
        title: 'Office Cleaning Parramatta',
        description: 'Parramatta is Sydney\'s second CBD — a major commercial hub for government agencies, financial services, law firms, and corporate businesses that demand the same professional standards they would expect in the heart of the city. Pro Clean Corp provides dependable, high-quality office cleaning services throughout Parramatta, combining experienced cleaning teams, flexible scheduling, comprehensive insurance, and the professionalism that Parramatta\'s premier office buildings and their tenants require.',
        benefits: [
            'Parramatta CBD Specialists: Established service network across Parramatta CBD commercial towers, government buildings, and corporate offices with knowledge of local building access systems.',
            'Government Office Experience: Experienced in government building access protocols, compliance documentation, and the security and accountability standards government clients require.',
            'Corporate Tower Coverage: Full-service cleaning for multi-floor commercial tenancies in Parramatta\'s major office towers — including common areas, meeting rooms, and end-of-floor facilities.',
            'Flexible Scheduling: Before-hours, after-hours, or weekend cleaning to work around Parramatta\'s busy commercial schedule without disrupting your team.',
            'Full Scope Office Clean: Desks and workstations, floors, kitchens and breakrooms, bathrooms, bins, glass partitions, reception, lifts, and all common areas covered on every visit.',
            'Police-Checked & Insured: All staff carry current National Police Clearances and are covered by $20M public liability — the standard expected by Parramatta\'s major commercial landlords.',
            'Consistent Assigned Team: The same trained cleaners at your Parramatta office every visit — no revolving door of unknown staff through your premises.'
        ],
        process: [
            'Free Parramatta Office Assessment: On-site visit to your Parramatta office to assess all cleaning areas, agree on scope and schedule, and provide a written fixed-price quote.',
            'Custom Cleaning Checklist: Documented zone-by-zone checklist covering every area of your office — the same standard delivered on every single visit.',
            'Experienced Parramatta Team Assigned: Dedicated cleaning crew familiar with your building, access requirements, and preferred scheduling.',
            'Quality Management & Reporting: Supervisor spot checks, direct account manager contact, and fast issue resolution for any quality concern within 24 hours.'
        ],
        whyChooseUs: [
            'Parramatta CBD Knowledge: Deep familiarity with Parramatta\'s commercial precinct, its major buildings, and the cleaning standards expected by quality-conscious tenants.',
            '15+ Years Western Sydney Cleaning: Over 15 years servicing commercial offices across Parramatta and Western Sydney — one of our highest-density service areas.',
            '$20M Public Liability Insurance: Full commercial coverage required by Parramatta\'s major property managers, commercial landlords, and government building managers.',
            'Police-Checked Staff: Current National Police Clearances for all cleaning staff — essential for unsupervised access to government and corporate premises.',
            '7-Day Availability: Monday to Sunday scheduling across Parramatta — including early morning starts for facilities that need cleaning before 8am.',
            '100% Satisfaction Guarantee: Any quality issue resolved with a return visit within 24 hours, no arguments and no additional charge.'
        ],
        serviceAreas: [
            'Parramatta CBD', 'North Parramatta', 'South Parramatta', 'Westmead',
            'Harris Park', 'Granville', 'Merrylands', 'Wentworthville',
            'Woodville', 'Toongabbie', 'Constitution Hill', 'Old Toongabbie'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Office cleaning Parramatta CBD commercial cleaners Western Sydney' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Parramatta office cleaning corporate team' }
        ],
        relatedServices: [
            'Office Cleaning Sydney',
            'Commercial Cleaning Sydney',
            'Office Cleaning Castle Hill',
            'Office Cleaning Norwest'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Office Cleaning Parramatta"
                serviceDescription="Professional office and commercial cleaning services in Parramatta CBD and Western Sydney. Specialists in corporate, government, and commercial office cleaning. Police-checked staff, $20M insured, flexible after-hours scheduling."
                serviceUrl="/office-cleaning-parramatta"
                serviceType="Office Cleaning"
                price="$$"
                additionalServices={['Floor Cleaning', 'Kitchen Cleaning', 'Bathroom Sanitisation', 'Window & Glass Cleaning', 'Reception Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
