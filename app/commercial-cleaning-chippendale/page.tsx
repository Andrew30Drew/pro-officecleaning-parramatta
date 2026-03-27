import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Chippendale | Office & Business Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning services in Chippendale NSW. Offices, studios, tech businesses & creative agencies. Flexible after-hours scheduling, police-checked staff, $20M insured. Call 1300 494 983.',
    keywords: 'commercial cleaning chippendale, office cleaning chippendale, commercial cleaners chippendale, business cleaning chippendale, cleaning services chippendale nsw, chippendale office cleaners sydney',
    openGraph: {
        title: 'Commercial Cleaning Chippendale | Office & Business Cleaners | Pro Clean Corp',
        description: 'Commercial and office cleaning in Chippendale NSW. Police-checked staff, flexible scheduling. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-chippendale',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Chippendale office cleaners Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-chippendale' },
};

const faqs = [
    {
        question: 'What types of businesses in Chippendale do you clean?',
        answer: 'Chippendale is home to a diverse mix of businesses — tech start-ups, creative agencies, architectural firms, co-working spaces, retail showrooms, cafés, and professional services. Pro Clean Corp has experience with all of these environments and can tailor a cleaning scope and schedule to your specific space, whether it is a heritage terrace conversion or a modern commercial fitout.'
    },
    {
        question: 'Can you clean Chippendale offices and studios outside business hours?',
        answer: 'Yes. We offer early morning cleaning from 5am, evening cleaning from 5:30pm, and weekend services for all Chippendale clients. Most inner-city Chippendale businesses prefer evening cleaning to avoid any disruption during the working day. We manage key and building access securely with full accountability.'
    },
    {
        question: 'Do you clean co-working spaces in Chippendale?',
        answer: 'Yes. Co-working spaces have specific cleaning requirements — high-frequency touch surfaces across shared desks, meeting rooms used by multiple tenants, shared kitchens and bathrooms, and presentation standards important for attracting and retaining members. We provide daily or weekly cleaning programs specifically designed for Chippendale co-working operators.'
    },
    {
        question: 'Are your Chippendale commercial cleaners insured and police-checked?',
        answer: 'Yes. All Pro Clean Corp staff servicing Chippendale hold current National Police Clearances and are covered by $20 million public liability insurance. We are WorkCover insured and can provide all required documentation for building management access in Chippendale commercial properties.'
    },
    {
        question: 'How close are your cleaning teams to Chippendale?',
        answer: 'We service the entire inner-Sydney corridor including Chippendale, Surry Hills, Newtown, Redfern, Ultimo, and the CBD. Our inner-city teams can respond quickly for urgent cleans and are very familiar with Chippendale\'s mix of commercial building types.'
    }
];

export default function CommercialCleaningChippendAlePage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Chippendale',
        description: 'Chippendale has reinvented itself as one of Sydney\'s most creative and technology-forward inner-city precincts — and the businesses here expect their environment to reflect that same standard. Pro Clean Corp provides reliable, professional commercial cleaning services throughout Chippendale, tailored to the creative agencies, tech start-ups, co-working spaces, professional offices, and retail showrooms that define this suburb. Flexible inner-city scheduling, consistent quality, and a team that respects your workspace.',
        benefits: [
            'Inner-City Chippendale Coverage: Dedicated inner-Sydney cleaning teams covering Chippendale, Surry Hills, Newtown, Redfern, Ultimo, and surrounding suburbs — fast, local, reliable.',
            'Creative & Tech Office Specialists: Experienced in cleaning open-plan creative agencies, tech start-up environments, design studios, and co-working spaces common in Chippendale.',
            'Flexible After-Hours Scheduling: Early morning or evening cleaning to fit busy inner-city schedules — no disruption to your team, clients, or studio workflow.',
            'Co-Working Space Programs: Tailored daily cleaning programs for Chippendale co-working operators covering shared desks, meeting rooms, kitchens, and bathrooms.',
            'Full Commercial Cleaning Scope: Floors, workstations, kitchens, bathrooms, bins, glass, reception, and meeting rooms — a complete clean every visit.',
            'Police-Checked & $20M Insured: All staff hold National Police Clearances and full public liability cover — required by most Chippendale commercial building managers.',
            'Eco-Friendly Products: Low-VOC, environmentally responsible products appropriate for Chippendale\'s progressive, sustainability-conscious business community.'
        ],
        process: [
            'Free On-Site Quote: We visit your Chippendale premises, assess the cleaning scope, and provide a written fixed-price quote within 24 hours.',
            'Custom Cleaning Plan: Documented checklist covering every area of your space — agreed upfront, delivered consistently on every visit.',
            'Assigned Inner-City Team: Experienced Chippendale-familiar cleaners assigned to your account for consistent results and site familiarity.',
            'Quality Management: Supervisor checks, direct account manager contact, and 24-hour resolution for any service feedback.'
        ],
        whyChooseUs: [
            'Inner-Sydney Local Knowledge: Established cleaning teams in Chippendale and surrounds — familiar with the area\'s commercial mix and building access requirements.',
            '15+ Years Commercial Cleaning: Over 15 years servicing Sydney\'s inner-city commercial precincts with consistent quality and reliability.',
            '$20M Public Liability Insurance: Full commercial cover required by Chippendale building managers, landlords, and strata plans.',
            'Police-Checked Staff: National Police Clearances for all cleaners — essential for after-hours access to commercial premises.',
            '7-Day Scheduling: Monday to Sunday availability across Chippendale and inner Sydney.',
            '100% Satisfaction Guarantee: Any issue resolved with a free return visit within 24 hours.'
        ],
        serviceAreas: [
            'Chippendale', 'Surry Hills', 'Redfern', 'Newtown',
            'Ultimo', 'Pyrmont', 'Darlinghurst', 'Glebe',
            'Sydney CBD', 'Haymarket', 'Alexandria', 'Waterloo'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Chippendale office cleaners inner Sydney' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Chippendale commercial cleaning team' }
        ],
        relatedServices: [
            'Commercial Cleaning Sydney',
            'Office Cleaning Sydney',
            'Commercial Cleaning Mascot',
            'Office Cleaning Alexandria'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Chippendale"
                serviceDescription="Professional commercial cleaning services in Chippendale NSW. Specialist in offices, creative agencies, tech start-ups, and co-working spaces. Police-checked staff, $20M insured, flexible inner-city scheduling."
                serviceUrl="/commercial-cleaning-chippendale"
                serviceType="CommercialService"
                price="$$"
                additionalServices={['Office Cleaning', 'Co-Working Space Cleaning', 'Floor Cleaning', 'Kitchen Cleaning', 'Bathroom Sanitisation']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
