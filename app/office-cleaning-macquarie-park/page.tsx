import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Office Cleaning Macquarie Park | Corporate Commercial Cleaning | Pro Clean Corp',
    description: 'Professional office cleaning services in Macquarie Park NSW. Trusted by tech companies, research institutions & corporate offices. Flexible scheduling, police-checked staff. Call 1300 494 983.',
    keywords: 'office cleaning macquarie park, commercial cleaning macquarie park, office cleaners macquarie park, cleaning services macquarie park nsw, north ryde office cleaning, ryde office cleaning, macquarie park commercial cleaners',
    openGraph: {
        title: 'Office Cleaning Macquarie Park | Corporate Commercial Cleaning | Pro Clean Corp',
        description: 'Office and commercial cleaning specialists in Macquarie Park NSW. Trusted by tech and corporate offices. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/office-cleaning-macquarie-park',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Office cleaning Macquarie Park commercial cleaners NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-macquarie-park' },
};

const faqs = [
    {
        question: 'Do you clean tech company and research facility offices in Macquarie Park?',
        answer: 'Yes. Macquarie Park is home to many technology companies, pharmaceutical firms, and university-affiliated research institutions. Pro Clean Corp has experience with the specific cleaning requirements of these environments — including cleanroom-adjacent areas, laboratory hallways, sensitive equipment surrounds, and high-spec corporate office fitouts. We use appropriate products and methods for each environment type.'
    },
    {
        question: 'What cleaning services do you offer for Macquarie Park offices?',
        answer: 'We provide a full range of commercial cleaning services for Macquarie Park offices: daily or weekly office cleaning, window and glass partition cleaning, carpet cleaning, hard floor maintenance, end of lease cleaning for commercial tenants, after-hours cleaning, and periodic deep cleans. All services can be combined into a single managed cleaning program.'
    },
    {
        question: 'Can you clean Macquarie Park offices outside business hours?',
        answer: 'Yes. We offer early morning (from 5am), evening, and weekend cleaning for all Macquarie Park commercial clients. Most corporate offices prefer evening cleaning from 6pm onwards to avoid any disruption to staff during the working day. We hold and manage keys and security codes responsibly and securely.'
    },
    {
        question: 'How do you handle cleaning in shared or multi-tenancy Macquarie Park buildings?',
        answer: 'We are experienced in multi-tenancy commercial buildings, coordinating access with building management, respecting other tenants, and cleaning common areas as part of a broader building maintenance program. We work seamlessly within strata-managed commercial buildings and can liaise directly with building managers if required.'
    },
    {
        question: 'Are your Macquarie Park cleaners insured and security-cleared?',
        answer: 'Yes. All Pro Clean Corp staff hold current National Police Clearances and are covered by $20 million public liability insurance. We are fully WorkCover compliant and can provide all insurance documentation required for access to corporate building management systems in Macquarie Park.'
    }
];

export default function OfficeCleaningMacquarieParkPage() {
    const serviceInfo = {
        title: 'Office Cleaning Macquarie Park',
        description: 'Macquarie Park is one of Sydney\'s most significant business and research precincts — home to global technology companies, pharmaceutical leaders, and university research facilities. The offices here demand a higher level of cleaning professionalism: discretion, consistency, and the ability to work within secure buildings without disruption. Pro Clean Corp delivers exactly that — experienced commercial cleaning teams, flexible scheduling, comprehensive insurance, and a quality standard that reflects the calibre of the businesses we serve in Macquarie Park.',
        benefits: [
            'Corporate & Tech Office Specialists: Experienced in cleaning high-spec corporate fitouts, open plan tech offices, pharmaceutical companies, and research institution buildings common in Macquarie Park.',
            'Security & Discretion: All staff hold National Police Clearances, are trained in building security protocols, and handle key and access code management with full accountability.',
            'After-Hours Scheduling: Evening and early morning cleaning to fit corporate schedules — most Macquarie Park clients prefer 6pm onwards so staff are not disrupted.',
            'Glass & Partition Cleaning: Macquarie Park offices feature extensive glass, meeting room partitions, and feature walls — our glass cleaning teams leave every surface streak-free.',
            'Multi-Tenancy & Strata Building Experience: We coordinate with building management for multi-tenancy commercial buildings, including common area cleaning and compliance with strata requirements.',
            'Full-Scope Office Cleaning: Desks, floors, kitchens, bathrooms, bins, reception, meeting rooms, and all common areas — a complete clean on every visit.',
            'Consistent Team: The same trained cleaning crew assigned to your Macquarie Park office for familiarity and ongoing consistent standards.'
        ],
        process: [
            'Free Office Assessment: We visit your Macquarie Park office, assess all areas and specific requirements, agree on a cleaning scope and schedule tailored to your business.',
            'Written Cleaning Checklist: A documented checklist for every area of your office — so both you and our team know exactly what is covered on every visit.',
            'Dedicated Macquarie Park Team: Experienced cleaners assigned specifically to your account, familiar with your building, access requirements, and standards.',
            'Account Management & Quality Control: Direct account manager contact, periodic supervisor quality checks, and proactive communication for any changes or feedback.'
        ],
        whyChooseUs: [
            'Macquarie Park Corporate Expertise: Deep experience with the tech, pharma, and research companies that define Macquarie Park\'s business character.',
            '$20M Public Liability Insurance: The coverage level required by most Macquarie Park building management companies and corporate tenants.',
            'Police-Checked Staff: National Police Clearances for every team member — essential for access to secured corporate environments.',
            '15+ Years Commercial Cleaning: Over 15 years of experience in Sydney\'s corporate cleaning market, with clients across the Macquarie Park and North Ryde precinct.',
            'Eco-Friendly, Low-VOC Products: Environmentally responsible products appropriate for shared office buildings and sensitive research environments.',
            '100% Satisfaction Guarantee: Any quality concern is addressed with a return visit within 24 hours at no additional charge.'
        ],
        serviceAreas: [
            'Macquarie Park', 'North Ryde', 'Ryde', 'Meadowbank',
            'West Ryde', 'Eastwood', 'Epping', 'Rhodes',
            'Chatswood', 'Lane Cove', 'Artarmon', 'St Leonards'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Office cleaning Macquarie Park corporate commercial cleaning' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Macquarie Park office cleaning team' }
        ],
        relatedServices: [
            'Office Cleaning Sydney',
            'Commercial Cleaning Sydney',
            'Office Cleaning North Sydney',
            'Office Cleaning Chatswood'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Office Cleaning Macquarie Park"
                serviceDescription="Professional office and commercial cleaning in Macquarie Park NSW. Specialists in corporate, tech, and research facility cleaning. Police-checked staff, $20M insured, flexible after-hours scheduling."
                serviceUrl="/office-cleaning-macquarie-park"
                serviceType="Office Cleaning"
                price="$$"
                additionalServices={['Floor Cleaning', 'Glass & Partition Cleaning', 'Kitchen Cleaning', 'Bathroom Sanitisation', 'Reception Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
