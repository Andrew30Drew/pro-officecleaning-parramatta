import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Office Cleaning Castle Hill | Commercial Cleaners Hills District | Pro Clean Corp',
    description: 'Professional office cleaning services in Castle Hill NSW. Trusted by Hills District businesses. Flexible scheduling, police-checked staff, $20M insured. Call 1300 494 983 for a free quote today.',
    keywords: 'office cleaning castle hill, commercial cleaning castle hill, office cleaners castle hill, hills district office cleaning, cleaning services castle hill nsw, castle hill commercial cleaners, baulkham hills office cleaning',
    openGraph: {
        title: 'Office Cleaning Castle Hill | Hills District Commercial Cleaning | Pro Clean Corp',
        description: 'Office cleaning specialists in Castle Hill and the Hills District. Police-checked staff, flexible scheduling. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/office-cleaning-castle-hill',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Office cleaning Castle Hill Hills District commercial cleaners' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-castle-hill' },
};

const faqs = [
    {
        question: 'Do you provide regular office cleaning services in Castle Hill?',
        answer: 'Yes. Pro Clean Corp provides daily, twice-weekly, weekly, and fortnightly commercial office cleaning throughout Castle Hill and the broader Hills District, including Baulkham Hills, Bella Vista, Norwest, Round Corner, Rouse Hill, and surrounding suburbs. We have teams based in the Hills District for reliable, responsive scheduling.'
    },
    {
        question: 'What types of businesses do you clean in Castle Hill?',
        answer: 'We service all types of commercial businesses in Castle Hill — professional services offices (accountants, lawyers, financial planners), retail showrooms, medical and allied health practices, real estate offices, IT companies, and light commercial premises in the Castle Hill industrial areas. We customise our cleaning scope for each business type.'
    },
    {
        question: 'Can you clean our Castle Hill office after hours?',
        answer: 'Yes. We offer flexible scheduling for Castle Hill offices — including early morning cleans before your team arrives (from 5am), evening cleans after office close (from 5:30pm), and weekend services. After-hours cleaning is our most popular option for Castle Hill clients as it avoids any disruption to working staff.'
    },
    {
        question: 'Do you clean Castle Hill retail showrooms and shopfronts?',
        answer: 'Yes. Castle Hill has a mix of traditional office buildings and retail showroom premises. We clean both — including carpet cleaning, hard floor polishing, window and glass cleaning, bathroom and staff area cleaning, and customer-facing areas to a high presentation standard.'
    },
    {
        question: 'How do I get a quote for office cleaning in Castle Hill?',
        answer: 'Call us on 1300 494 983 or fill in our online quote form and we will arrange a free on-site assessment at your Castle Hill premises. We provide a written fixed-price quote within 24 hours. Most Castle Hill office cleaning contracts are priced on a monthly fixed basis for easy budget management.'
    }
];

export default function OfficeCleaningCastleHillPage() {
    const serviceInfo = {
        title: 'Office Cleaning Castle Hill',
        description: 'Castle Hill is the commercial heart of Sydney\'s Hills District — a growing hub of professional services, retail, health care, and technology businesses all competing for the same professional reputation. A clean, well-maintained office is part of that reputation. Pro Clean Corp provides reliable, professional office cleaning services throughout Castle Hill and the broader Hills District, with flexible scheduling, consistent quality, and cleaning teams who understand what a Hills District business environment demands.',
        benefits: [
            'Hills District Specialists: Teams based in the Hills District covering Castle Hill, Baulkham Hills, Bella Vista, Norwest, Rouse Hill, and Round Corner — local cleaners for local businesses.',
            'All Commercial Property Types: Professional offices, medical practices, retail showrooms, real estate agencies, IT companies, and light commercial premises all serviced.',
            'Flexible After-Hours Scheduling: Morning, evening, or weekend cleaning to fit your Castle Hill business hours — no disruption to your team or clients during the working day.',
            'Comprehensive Office Cleaning: Floors, kitchens, bathrooms, desks, bins, glass, reception, meeting rooms — a complete clean that covers every area of your premises.',
            'Consistent Staff: The same vetted, trained cleaners assigned to your Castle Hill office for continuity, familiarity, and accountability.',
            'Police-Checked & Insured: National Police Clearances and $20M public liability insurance on every team member — essential for key-access premises.',
            'Eco-Responsible Products: Low-VOC, environmentally responsible products safe for your staff and compliant with Hills District commercial building requirements.'
        ],
        process: [
            'Free On-Site Assessment: We visit your Castle Hill office, assess the full cleaning scope, and provide a written fixed-price quote within 24 hours.',
            'Custom Cleaning Schedule: Frequency and timing agreed to match your business hours — daily, twice-weekly, weekly, or fortnightly as required.',
            'Experienced Hills District Team: The same trained cleaners allocated to your premises each visit for consistent results and site familiarity.',
            'Ongoing Quality Management: Supervisor checks, direct account manager contact, and fast response to any service concern within 24 hours.'
        ],
        whyChooseUs: [
            'Hills District Local Knowledge: Established in the Castle Hill area with deep familiarity with local commercial buildings, business parks, and property management expectations.',
            '15+ Years Commercial Cleaning: Over 15 years of commercial cleaning experience across the Hills District and Greater Sydney.',
            '$20M Public Liability Insurance: Full commercial coverage required by property managers, strata plans, and commercial landlords across Castle Hill.',
            'Police-Checked Staff: All cleaners hold current National Police Clearances — critical for unsupervised after-hours access to commercial premises.',
            '7-Day Availability: Monday to Sunday scheduling available across Castle Hill — including public holiday cover for essential facilities.',
            '100% Satisfaction Guarantee: Any quality concern resolved with a free return visit within 24 hours, no questions asked.'
        ],
        serviceAreas: [
            'Castle Hill', 'Baulkham Hills', 'Bella Vista', 'Norwest',
            'Rouse Hill', 'Round Corner', 'Kellyville', 'Winston Hills',
            'Old Toongabbie', 'Pennant Hills', 'Cherrybrook', 'West Pennant Hills'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Office cleaning Castle Hill Hills District commercial cleaners' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Castle Hill office cleaning Hills District' }
        ],
        relatedServices: [
            'Office Cleaning Norwest',
            'Office Cleaning Parramatta',
            'Commercial Cleaning Sydney',
            'Office Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Office Cleaning Castle Hill"
                serviceDescription="Professional office and commercial cleaning in Castle Hill and the Hills District NSW. Servicing offices, medical practices, retail showrooms, and commercial premises. Police-checked staff, $20M insured, flexible scheduling."
                serviceUrl="/office-cleaning-castle-hill"
                serviceType="Office Cleaning"
                price="$$"
                additionalServices={['Floor Cleaning', 'Kitchen Cleaning', 'Bathroom Sanitisation', 'Window Cleaning', 'Reception Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
