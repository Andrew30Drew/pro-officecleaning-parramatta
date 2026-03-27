import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Chatswood | Office & Business Cleaners North Shore | Pro Clean Corp',
    description: 'Professional commercial cleaning services in Chatswood NSW. Trusted by Chatswood CBD offices, retail businesses & corporate tenants. Police-checked, $20M insured. Call 1300 494 983.',
    keywords: 'commercial cleaning chatswood, office cleaning chatswood, commercial cleaners chatswood, chatswood cbd office cleaning, cleaning services chatswood nsw, north shore commercial cleaning chatswood, office cleaners chatswood sydney',
    openGraph: {
        title: 'Commercial Cleaning Chatswood | North Shore Office & Business Cleaning | Pro Clean Corp',
        description: 'Commercial and office cleaning specialists in Chatswood CBD and the north shore. Police-checked, $20M insured. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-chatswood',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Chatswood north shore office cleaners Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-chatswood' },
};

const faqs = [
    {
        question: 'What types of commercial properties do you clean in Chatswood?',
        answer: 'Chatswood is one of Sydney\'s most significant north shore commercial hubs — a high-density mix of corporate offices, government agencies, financial services, technology companies, retail centres, restaurants, and medical practices. Pro Clean Corp services all of these commercial property types in Chatswood, from individual office suites to multi-floor corporate tenancies in Chatswood\'s A-grade commercial buildings.'
    },
    {
        question: 'Do you clean Chatswood CBD office towers and commercial buildings?',
        answer: 'Yes. We service commercial tenants across Chatswood CBD\'s major office towers and commercial buildings. We are familiar with Chatswood\'s building management systems, access protocols, and after-hours cleaning requirements for the precinct. We work with both individual tenants and building management companies for comprehensive building cleaning programs.'
    },
    {
        question: 'Can you clean Chatswood offices outside business hours?',
        answer: 'Yes. Evening cleaning from 5:30pm and early morning cleaning from 5am are available for all Chatswood clients. After-hours cleaning is the preferred arrangement for most Chatswood CBD corporate tenants. We manage building access codes and keys with full security accountability and discretion.'
    },
    {
        question: 'Do you clean retail businesses and restaurants in Chatswood?',
        answer: 'Yes. Chatswood has a high-density retail and food and beverage sector. We provide regular commercial cleaning for retail premises, restaurant and café cleaning front and back of house, and cleaning for Chatswood\'s entertainment venues. Our retail and hospitality cleaning programs are tailored to the high-traffic, customer-facing nature of these environments.'
    },
    {
        question: 'How do I get a commercial cleaning quote for my Chatswood business?',
        answer: 'Call 1300 494 983 or complete our online enquiry form. We will arrange a free on-site assessment at your Chatswood premises and provide a written fixed-price quote within 24 hours. Most Chatswood commercial clients are on regular cleaning contracts with fixed monthly pricing for straightforward budget management.'
    }
];

export default function CommercialCleaningChatswoodPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Chatswood',
        description: 'Chatswood is one of the north shore\'s most commercially dense and professionally demanding precincts — home to corporate headquarters, government offices, financial services companies, technology firms, and a high-profile retail and hospitality sector that draws visitors from across Sydney. The businesses here expect a cleaning standard that matches Chatswood\'s commercial reputation. Pro Clean Corp provides dependable, high-quality commercial cleaning services throughout Chatswood CBD and the surrounding north shore area, with experienced teams, comprehensive insurance, and a quality guarantee that backs every contract.',
        benefits: [
            'Chatswood CBD Specialists: Established service network across Chatswood CBD and the north shore, familiar with the precinct\'s commercial towers, building management systems, and corporate tenant expectations.',
            'Corporate Office Cleaning: Premium-standard cleaning for Chatswood\'s corporate headquarters, government offices, and financial services tenancies — boardrooms, executive floors, and open plan environments.',
            'Retail & Hospitality Cleaning: High-presentation cleaning for Chatswood\'s retail premises, restaurants, cafés, and entertainment venues — customer-facing areas maintained to the standard Chatswood\'s foot traffic demands.',
            'Multi-Floor Tenancy Experience: Experienced in cleaning large multi-floor commercial tenancies in Chatswood\'s A-grade office buildings, coordinating cleaning across levels and building management protocols.',
            'After-Hours Scheduling: Evening and early morning cleaning for Chatswood\'s corporate and retail operators — zero disruption to your working hours or customer trading.',
            'Police-Checked & $20M Insured: All staff hold National Police Clearances and full public liability cover — required by Chatswood\'s premium building management companies.',
            'North Shore Coverage: Our north shore teams service Chatswood, Artarmon, St Leonards, Lane Cove, Willoughby, North Sydney, and surrounds — reliable, responsive, local.'
        ],
        process: [
            'Free On-Site Assessment: We visit your Chatswood premises, assess all cleaning areas and specific requirements, and provide a written fixed-price quote within 24 hours.',
            'Custom Commercial Cleaning Plan: Documented scope and schedule covering every area of your Chatswood business — agreed upfront, delivered consistently on every visit.',
            'Dedicated North Shore Team: Experienced Chatswood-familiar cleaners assigned to your account with knowledge of building access requirements and north shore commercial standards.',
            'Quality Management: Supervisor spot checks, direct account manager contact, and 24-hour resolution for any service feedback or quality concern.'
        ],
        whyChooseUs: [
            'Chatswood Commercial Expertise: Deep familiarity with Chatswood CBD\'s commercial buildings, strata requirements, and the cleaning standards expected by the precinct\'s quality-conscious tenants.',
            '15+ Years North Shore Cleaning: Over 15 years servicing north shore commercial clients — Chatswood is one of our highest-density service areas.',
            '$20M Public Liability Insurance: Full commercial coverage required by Chatswood\'s A-grade building managers and corporate landlords.',
            'Police-Checked Staff: Current National Police Clearances for all team members — essential for after-hours access to Chatswood\'s premium commercial buildings.',
            '7-Day Availability: Monday to Sunday scheduling available for Chatswood\'s corporate and retail clients with diverse operating schedules.',
            '100% Satisfaction Guarantee: Any quality concern resolved within 24 hours with a free return visit — no excuses, guaranteed.'
        ],
        serviceAreas: [
            'Chatswood', 'Artarmon', 'St Leonards', 'Crows Nest',
            'Willoughby', 'Lane Cove', 'North Sydney', 'Gordon',
            'Lindfield', 'Killara', 'Roseville', 'Pymble'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Chatswood north shore office cleaners Sydney' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Chatswood commercial cleaning CBD north shore' }
        ],
        relatedServices: [
            'Office Cleaning Artarmon',
            'Office Cleaning North Sydney',
            'Commercial Cleaning Sydney',
            'Office Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Chatswood"
                serviceDescription="Professional commercial and office cleaning services in Chatswood CBD and the north shore NSW. Specialists in corporate offices, government buildings, retail premises, and hospitality venues. Police-checked staff, $20M insured, flexible scheduling."
                serviceUrl="/commercial-cleaning-chatswood"
                serviceType="CommercialService"
                price="$$"
                additionalServices={['Corporate Office Cleaning', 'Retail Cleaning', 'Restaurant Cleaning', 'Floor Care', 'Bathroom Sanitisation']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
