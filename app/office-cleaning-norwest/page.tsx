import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Office Cleaning Norwest | Business Park Commercial Cleaning | Pro Clean Corp',
    description: 'Professional office cleaning services in Norwest Business Park NSW. Trusted by Hills District corporate offices. Flexible scheduling, police-checked staff, $20M insured. Call 1300 494 983.',
    keywords: 'office cleaning norwest, commercial cleaning norwest, office cleaners norwest business park, cleaning services norwest nsw, norwest office cleaners, baulkham hills norwest cleaning, hills district office cleaning norwest',
    openGraph: {
        title: 'Office Cleaning Norwest Business Park | Hills District Commercial Cleaning | Pro Clean Corp',
        description: 'Office cleaning specialists in Norwest Business Park and the Hills District. Police-checked, $20M insured, flexible scheduling. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/office-cleaning-norwest',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Office cleaning Norwest Business Park Hills District commercial cleaners' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-norwest' },
};

const faqs = [
    {
        question: 'Do you provide regular office cleaning services in Norwest Business Park?',
        answer: 'Yes. Pro Clean Corp provides daily, twice-weekly, weekly, and fortnightly commercial office cleaning throughout Norwest Business Park and the surrounding Hills District. Norwest is one of our primary service areas and we have established relationships with multiple commercial tenants and building managers across the precinct.'
    },
    {
        question: 'What types of businesses in Norwest do you clean for?',
        answer: 'We service all commercial office types in Norwest Business Park — technology companies, financial services firms, insurance companies, healthcare businesses, professional services, and corporate head offices. Norwest attracts large-footprint offices and we have experience with multi-floor tenancies, open plan environments, and premium corporate fitouts that need specialist care.'
    },
    {
        question: 'Can you clean Norwest offices after hours?',
        answer: 'Yes. Evening cleaning from 5:30–6pm and early morning cleaning from 5am are available for all Norwest clients. After-hours cleaning is preferred by most Norwest Business Park corporate tenants to ensure no disruption during the working day. We manage building access codes and keys with full security protocols and accountability.'
    },
    {
        question: 'Do you clean the common areas of Norwest Business Park buildings?',
        answer: 'Yes. We work with strata managers and building management companies to provide common area cleaning for Norwest Business Park buildings — including lobbies, lifts, corridors, bathrooms, and end-of-trip facilities. We can coordinate individual tenancy cleaning alongside building common area cleaning for a seamless, single-provider experience.'
    },
    {
        question: 'How do I get a quote for office cleaning in Norwest?',
        answer: 'Call 1300 494 983 or complete our online enquiry form and we will arrange a free on-site assessment at your Norwest office. We provide a written, fixed-price quote within 24 hours. Our Norwest clients are typically on monthly fixed-price contracts covering all agreed cleaning services for straightforward invoice management.'
    }
];

export default function OfficeCleaningNorwestPage() {
    const serviceInfo = {
        title: 'Office Cleaning Norwest',
        description: 'Norwest Business Park is one of Sydney\'s most prestigious commercial precincts — home to corporate head offices, technology leaders, financial services companies, and healthcare businesses that compete for the best staff and clients. In an environment where first impressions matter, the cleanliness and presentation of your office is part of your brand. Pro Clean Corp delivers reliable, professional office cleaning services throughout Norwest Business Park and the Hills District, maintaining the premium standard that Norwest\'s best tenants expect.',
        benefits: [
            'Norwest Business Park Specialists: Established service provider across Norwest Business Park with knowledge of building access systems, strata requirements, and the corporate cleaning standards the precinct demands.',
            'Premium Corporate Office Experience: Experienced in cleaning large-footprint corporate fitouts, open plan tech environments, glass-heavy modern offices, and premium end-of-trip facilities.',
            'Strata & Building Management Liaison: We coordinate directly with Norwest building managers for access, common area cleaning, and compliance with strata cleaning requirements.',
            'After-Hours Scheduling: Evening (from 5:30pm) and early morning (from 5am) cleaning to suit Norwest\'s corporate working hours — no disruption to your team or visitors.',
            'Comprehensive Office Cleaning: Workstations, floors, kitchens, bathrooms, meeting rooms, glass partitions, reception, lifts — a complete clean every visit with nothing overlooked.',
            'Police-Checked & Insured: All staff carry current National Police Clearances and are covered by $20M public liability — the standard required by Norwest\'s premium building managers.',
            'Consistent Team Allocation: The same cleaning crew at your Norwest office each visit — familiar with your building, your standards, and your access requirements.'
        ],
        process: [
            'Free On-Site Assessment: We visit your Norwest office, assess all cleaning areas, discuss specific requirements, and provide a written fixed-price quote within 24 hours.',
            'Custom Cleaning Plan: A documented checklist for every zone of your Norwest office — the same standard delivered consistently on every visit.',
            'Dedicated Norwest Team: Experienced commercial cleaners assigned to your account who know your building, your preferences, and your expected standard.',
            'Quality Management: Supervisor spot checks, direct account manager contact, and 24-hour resolution for any service feedback or quality concern.'
        ],
        whyChooseUs: [
            'Norwest Business Park Experience: Established cleaning provider in the Norwest precinct with familiarity with its building standards, access systems, and tenant expectations.',
            '15+ Years Commercial Cleaning: Over 15 years delivering commercial office cleaning across the Hills District and Greater Sydney.',
            '$20M Public Liability Insurance: Full commercial coverage required by Norwest building management companies, strata plans, and corporate landlords.',
            'Police-Checked Staff: National Police Clearances for all team members — essential for unsupervised after-hours access to premium commercial premises.',
            'Eco-Friendly Products: Low-VOC, environmentally responsible products appropriate for high-spec office environments and shared commercial buildings.',
            '100% Satisfaction Guarantee: Any quality issue resolved with a free return visit within 24 hours — no excuses, no delays.'
        ],
        serviceAreas: [
            'Norwest Business Park', 'Bella Vista', 'Baulkham Hills', 'Castle Hill',
            'Kellyville', 'Rouse Hill', 'Winston Hills', 'Pennant Hills',
            'Cherrybrook', 'Dural', 'Glenhaven', 'West Pennant Hills'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Office cleaning Norwest Business Park Hills District commercial cleaners' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Norwest Business Park office cleaning team' }
        ],
        relatedServices: [
            'Office Cleaning Castle Hill',
            'Office Cleaning Parramatta',
            'Commercial Cleaning Sydney',
            'Office Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Office Cleaning Norwest Business Park"
                serviceDescription="Professional office and commercial cleaning services in Norwest Business Park and the Hills District NSW. Specialists in corporate, tech, and premium office cleaning. Police-checked staff, $20M insured, flexible after-hours scheduling."
                serviceUrl="/office-cleaning-norwest"
                serviceType="Office Cleaning"
                price="$$"
                additionalServices={['Floor Cleaning', 'Glass & Partition Cleaning', 'Kitchen Cleaning', 'Bathroom Sanitisation', 'Common Area Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
