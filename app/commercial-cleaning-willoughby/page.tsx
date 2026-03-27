import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Willoughby NSW | Office & Retail Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Willoughby NSW. Offices, retail, medical & strata on the Lower North Shore. Reliable, insured cleaners. Free quote today.',
    keywords: 'commercial cleaning Willoughby, office cleaning Willoughby, business cleaning Willoughby NSW',
    openGraph: {
        title: 'Commercial Cleaning Willoughby NSW | Pro Clean Corp',
        description: 'Trusted commercial cleaning in Willoughby NSW. Serving offices, retail, strata and medical premises across the Lower North Shore with flexible scheduling and guaranteed results.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-willoughby',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Willoughby NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-willoughby' },
};

export default function WilloughbyCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Willoughby NSW',
        description:
            'Willoughby is a thriving Lower North Shore suburb that blends established retail precincts, professional service businesses, medical practices, television and media production facilities, and a growing strata market encompassing both heritage commercial buildings and modern mixed-use developments. Pro Clean Corp has been the cleaning partner of choice for Willoughby businesses for over 15 years, delivering tailored commercial cleaning programs that maintain the high presentation standards expected in this sought-after location. Our North Shore teams are experienced across retail cleaning, office maintenance, medical sanitation, and strata common area programs — all scheduled around your operations.',
        benefits: [
            'Lower North Shore retail and commercial shopfront cleaning',
            'Professional office cleaning for Willoughby\'s diverse business community',
            'Medical centre and allied health sanitation to infection control standards',
            'Strata common area cleaning for residential and commercial complexes',
            'Media and production facility cleaning around production timetables',
            'Fully insured with $20M public liability and police-checked staff',
        ],
        process: [
            'Free Willoughby site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Willoughby and the Lower North Shore',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Eco-friendly, biodegradable products',
            'Flexible scheduling including after-hours and weekends',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Chatswood', 'Artarmon', 'Crows Nest', 'St Leonards', 'Naremburn', 'Lane Cove', 'Northbridge', 'Castlecrag'],
        faqs: [
            {
                question: 'Do you clean office buildings in Willoughby\'s commercial precincts?',
                answer: 'Yes, we service office buildings, commercial suites, and professional service firms throughout Willoughby. We offer daily, weekly, and fortnightly cleaning programs tailored to your team size and space requirements, scheduled outside business hours if preferred.',
            },
            {
                question: 'How much does commercial cleaning cost in Willoughby?',
                answer: 'Rates range $35–$60/hr. Free quotes for all Willoughby businesses with no obligation.',
            },
            {
                question: 'Do you offer after-hours cleaning in Willoughby?',
                answer: 'Yes, after-hours, early morning and weekend scheduling is available across Willoughby.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained.',
            },
            {
                question: 'Are you able to clean media studios and production facilities in Willoughby?',
                answer: 'Yes. Willoughby is home to significant media and production facilities, and we are experienced in cleaning these environments — including office areas, green rooms, reception zones, and amenities — with schedules designed around production timetables.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Willoughby NSW' },
            { src: '/images/services/office.webp', alt: 'Office cleaning Willoughby Lower North Shore' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Willoughby NSW"
                serviceDescription="Professional commercial cleaning in Willoughby NSW, serving offices, retail, strata and medical premises across the Lower North Shore."
                serviceUrl="/commercial-cleaning-willoughby"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
