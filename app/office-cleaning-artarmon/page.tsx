import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Office Cleaning Artarmon | Commercial Cleaners Lower North Shore | Pro Clean Corp',
    description: 'Professional office cleaning services in Artarmon NSW. Trusted by lower north shore businesses, media companies & corporate offices. Police-checked, $20M insured. Call 1300 494 983.',
    keywords: 'office cleaning artarmon, commercial cleaning artarmon, office cleaners artarmon, artarmon office cleaning lower north shore, cleaning services artarmon nsw, commercial cleaners artarmon sydney',
    openGraph: {
        title: 'Office Cleaning Artarmon | Lower North Shore Commercial Cleaning | Pro Clean Corp',
        description: 'Office cleaning specialists in Artarmon and the lower north shore. Police-checked staff, $20M insured. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/office-cleaning-artarmon',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Office cleaning Artarmon lower north shore commercial cleaners' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-artarmon' },
};

const faqs = [
    {
        question: 'What types of offices and businesses do you clean in Artarmon?',
        answer: 'Artarmon has a strong commercial character centred around media, broadcasting, technology, and professional services companies. Pro Clean Corp services the full range of Artarmon commercial premises — broadcast studios with appropriate access protocols, media production offices, tech company offices, corporate headquarters, light industrial showrooms, and professional services firms along the Artarmon industrial and commercial precincts.'
    },
    {
        question: 'Can you clean Artarmon offices after business hours?',
        answer: 'Yes. We offer early morning cleaning from 5am, evening cleaning from 5:30pm, and weekend services across Artarmon. Evening cleaning is the most common preference for Artarmon\'s corporate and media tenants — arriving after staff leave and completing before the next working day begins. We manage building access codes and keys securely with full accountability.'
    },
    {
        question: 'Do you clean broadcast studios and media facilities in Artarmon?',
        answer: 'Yes. Artarmon is home to several major broadcast and media facilities. We have experience cleaning media environments — studio production areas, editing suites, green rooms, open plan newsrooms, and associated office spaces. We understand the access restrictions, the fragility of production equipment surrounds, and the disruption-avoidance protocols required in active media environments.'
    },
    {
        question: 'Are your Artarmon office cleaners insured for lower north shore buildings?',
        answer: 'Yes. All Pro Clean Corp staff hold current National Police Clearances and are covered by $20 million public liability insurance. We are WorkCover insured and can provide all required documentation for building management in Artarmon\'s commercial and industrial precincts.'
    },
    {
        question: 'Do you also service nearby suburbs like St Leonards and Crows Nest?',
        answer: 'Yes. Our lower north shore cleaning teams cover Artarmon, St Leonards, Crows Nest, North Sydney, Chatswood, Lane Cove, and surrounding suburbs as a single service area. We can combine Artarmon office cleaning with other nearby locations under a single account for multi-site clients.'
    }
];

export default function OfficeCleaningArtarmonPage() {
    const serviceInfo = {
        title: 'Office Cleaning Artarmon',
        description: 'Artarmon is one of Sydney\'s most interesting commercial precincts — a compact lower north shore suburb that hosts major broadcasting networks, technology companies, and professional services firms, all in a mix of industrial-conversion offices and purpose-built commercial buildings. Pro Clean Corp provides reliable, professional office cleaning services throughout Artarmon, with experienced teams who understand the diversity of the commercial environment here and the specific standards each business type requires.',
        benefits: [
            'Lower North Shore Commercial Coverage: Dedicated cleaning teams covering Artarmon, St Leonards, Crows Nest, North Sydney, and the lower north shore corridor — local, responsive, and reliable.',
            'Media & Broadcast Facility Experience: Specialist knowledge of media production environments — appropriate access protocols, sensitivity around equipment, and understanding of broadcast facility cleaning requirements.',
            'Corporate & Tech Office Cleaning: High-spec cleaning for Artarmon\'s technology companies, corporate headquarters, and professional services offices with open plan and glass-heavy fitouts.',
            'After-Hours Flexibility: Evening and early morning scheduling to fit Artarmon\'s varied commercial operating hours — from standard 9-to-5 offices to round-the-clock media operations.',
            'Full Scope Office Cleaning: Desks, floors, kitchens, bathrooms, reception, meeting rooms, glass partitions, bins, and all common areas — complete on every scheduled visit.',
            'Police-Checked & Insured: All staff hold National Police Clearances and $20M public liability cover — essential for Artarmon\'s media and corporate building access requirements.',
            'Consistent Team Allocation: The same experienced cleaners assigned to your Artarmon premises every visit for security, familiarity, and consistent standards.'
        ],
        process: [
            'Free On-Site Assessment: We visit your Artarmon office, assess cleaning zones and specific requirements, and provide a written fixed-price quote within 24 hours.',
            'Custom Cleaning Plan: Documented checklist tailored to your Artarmon premises — every area, every visit, to the agreed standard.',
            'Dedicated Artarmon Team: Experienced lower north shore cleaners assigned to your account, familiar with your building and access requirements.',
            'Quality Management: Supervisor spot checks, direct account manager contact, and same-day response to any service feedback.'
        ],
        whyChooseUs: [
            'Lower North Shore Expertise: Established service network across Artarmon, St Leonards, Crows Nest, and North Sydney — local teams for fast, reliable scheduling.',
            '15+ Years Commercial Cleaning: Extensive experience with Sydney\'s north shore commercial precinct, including media, tech, and corporate environments.',
            '$20M Public Liability Insurance: Full commercial cover for Artarmon\'s building managers, corporate landlords, and media facility operators.',
            'Police-Checked Staff: National Police Clearances for all team members — standard requirement for Artarmon\'s corporate and media building access.',
            '7-Day Scheduling: Monday to Sunday availability including early morning for Artarmon clients with early start requirements.',
            '100% Satisfaction Guarantee: Any quality concern resolved within 24 hours — free return visit, no questions asked.'
        ],
        serviceAreas: [
            'Artarmon', 'St Leonards', 'Crows Nest', 'North Sydney',
            'Chatswood', 'Lane Cove', 'Willoughby', 'Naremburn',
            'Wollstonecraft', 'Waverton', 'Greenwich', 'Longueville'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Office cleaning Artarmon lower north shore commercial cleaners' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Artarmon office cleaning north shore team' }
        ],
        relatedServices: [
            'Office Cleaning North Sydney',
            'Office Cleaning Chatswood',
            'Commercial Cleaning Chatswood',
            'Office Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Office Cleaning Artarmon"
                serviceDescription="Professional office and commercial cleaning in Artarmon and the lower north shore NSW. Specialists in media facility, corporate office, and tech company cleaning. Police-checked staff, $20M insured, flexible after-hours scheduling."
                serviceUrl="/office-cleaning-artarmon"
                serviceType="Office Cleaning"
                price="$$"
                additionalServices={['Floor Cleaning', 'Kitchen Cleaning', 'Bathroom Sanitisation', 'Glass & Partition Cleaning', 'Reception Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
