import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Office Cleaning Arndell Park | Commercial Cleaners | Pro Clean Corp',
    description: 'Professional office cleaning services in Arndell Park NSW. Flexible scheduling, fully insured, police-checked staff. Serving Arndell Park industrial and commercial properties. Call 1300 494 983 for a free quote.',
    keywords: 'office cleaning arndell park, commercial cleaning arndell park, office cleaners arndell park, industrial cleaning arndell park, cleaning services arndell park nsw, arndell park office cleaners',
    openGraph: {
        title: 'Office Cleaning Arndell Park | Commercial Cleaners | Pro Clean Corp',
        description: 'Professional office and commercial cleaning in Arndell Park NSW. Fully insured, police-checked staff. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/office-cleaning-arndell-park',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Office cleaning Arndell Park commercial cleaners' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-arndell-park' },
};

const faqs = [
    {
        question: 'Do you service office and commercial properties in Arndell Park?',
        answer: 'Yes. Pro Clean Corp provides regular office and commercial cleaning services throughout Arndell Park and the surrounding Blacktown area. We service office buildings, warehouses with office components, industrial facilities, showrooms, and mixed-use commercial properties across the Arndell Park business precinct.'
    },
    {
        question: 'Can you clean our Arndell Park offices outside business hours?',
        answer: 'Yes. Most of our Arndell Park commercial cleaning services are scheduled outside standard business hours — either early morning before your team arrives or in the evening after close. We also offer weekend cleaning for facilities that require it. Early morning and after-hours scheduling is available 7 days a week.'
    },
    {
        question: 'What is included in a standard office clean in Arndell Park?',
        answer: 'Our standard Arndell Park office cleaning includes: vacuuming and mopping all floors, emptying bins and replacing liners, cleaning kitchen and lunchroom areas, sanitising bathrooms and restrooms, wiping down desks and work surfaces, cleaning glass partitions and internal windows, dusting blinds and surfaces, and cleaning entry and reception areas. We customise the scope to your specific facility requirements.'
    },
    {
        question: 'Are your Arndell Park cleaners police-checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff servicing Arndell Park hold current National Police Clearances and are covered by our $20 million public liability insurance policy. We are also WorkCover insured and all staff receive ongoing training in commercial cleaning standards and chemical safety.'
    },
    {
        question: 'How do you price office cleaning in Arndell Park?',
        answer: 'We price based on the size and type of your facility, the frequency of service required, and the scope of cleaning tasks. We provide a free on-site assessment and written quote with no obligation. Most Arndell Park commercial clients are on weekly or twice-weekly scheduled services with fixed monthly pricing for easy budgeting.'
    }
];

export default function OfficeCleaningArndellParkPage() {
    const serviceInfo = {
        title: 'Office Cleaning Arndell Park',
        description: 'Arndell Park\'s growing business precinct demands professional, reliable commercial cleaning that does not interrupt your operations. Pro Clean Corp provides tailored office and commercial cleaning services throughout Arndell Park — covering office buildings, industrial facilities with office components, showrooms, and mixed commercial spaces. With fully trained, police-checked staff and flexible scheduling built around your hours, we keep your Arndell Park workplace clean, hygienic, and professionally presented every day.',
        benefits: [
            'Arndell Park Local Service: Dedicated cleaning teams servicing Arndell Park and the surrounding Blacktown area — local response, reliable scheduling, no outsourcing.',
            'Flexible Scheduling: Before-hours, after-hours, or weekend cleaning to suit your operation. We work around you, not the other way around.',
            'Office & Industrial Facilities: Experienced in both standard office environments and combined office-warehouse or showroom-office facilities common in Arndell Park.',
            'Full Scope Cleaning: Floors, kitchens, bathrooms, desks, bins, glass, and common areas — a complete clean every visit, not a cursory once-over.',
            'Consistent Staff: The same cleaning crew assigned to your site for familiarity, security, and consistent standards.',
            'Police-Checked & Insured: All staff hold current National Police Clearances and are covered by $20M public liability insurance.',
            'Eco-Friendly Products: Environmentally responsible cleaning products safe for your team, compliant with workplace health standards.'
        ],
        process: [
            'Free On-Site Assessment: We visit your Arndell Park facility to assess size, layout, specific requirements, and agree on a custom cleaning scope and schedule.',
            'Custom Cleaning Plan: A written checklist for your facility covering every area, every visit — no guesswork, consistent results on every clean.',
            'Experienced Local Team Assigned: The same trained cleaners allocated to your account for continuity of service and site familiarity.',
            'Quality Checks & Reporting: Supervisor spot checks and direct account manager contact for any issues, changes, or feedback.'
        ],
        whyChooseUs: [
            'Local Western Sydney Coverage: Arndell Park-based servicing with teams familiar with the business precinct and its commercial property types.',
            '15+ Years Commercial Cleaning: Over 15 years of commercial cleaning experience across Western Sydney industrial and office environments.',
            '$20M Public Liability: Fully insured — the coverage level required by most commercial property managers and strata plans.',
            'Police-Checked Staff: Every cleaner holds a current National Police Clearance — essential for overnight and unsupervised access.',
            '7-Day Scheduling: Weekday and weekend services available to match your operational schedule.',
            '100% Satisfaction Guarantee: If you are not satisfied with any aspect of our service, we will return and rectify within 24 hours at no cost.'
        ],
        serviceAreas: [
            'Arndell Park', 'Blacktown', 'Seven Hills', 'Girraween',
            'Toongabbie', 'Pendle Hill', 'Wentworthville', 'Prospect',
            'Minchinbury', 'Eastern Creek', 'Rooty Hill', 'Mount Druitt'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Office cleaning Arndell Park commercial cleaners NSW' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Arndell Park commercial cleaning team' }
        ],
        relatedServices: [
            'Office Cleaning Sydney',
            'Commercial Cleaning Sydney',
            'Industrial Cleaning Sydney',
            'Office Cleaning Blacktown'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Office Cleaning Arndell Park"
                serviceDescription="Professional office and commercial cleaning services in Arndell Park NSW. Flexible scheduling, police-checked staff, $20M insured. Serving office buildings, industrial facilities, and showrooms in the Arndell Park business precinct."
                serviceUrl="/office-cleaning-arndell-park"
                serviceType="Office Cleaning"
                price="$$"
                additionalServices={['Floor Cleaning', 'Kitchen Cleaning', 'Bathroom Sanitisation', 'Waste Removal', 'Window Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
