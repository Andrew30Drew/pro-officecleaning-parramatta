import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Sutherland Shire NSW | Professional Business Cleaning Services',
    description: 'Expert commercial cleaning services in Sutherland Shire NSW. Professional office, retail, medical, and industrial cleaning for businesses across the Shire. Reliable, insured, and experienced cleaning teams.',
    keywords: 'commercial cleaning Sutherland, business cleaning Sutherland Shire, professional cleaners Cronulla, office cleaning southern Sydney',
    openGraph: {
        title: 'Commercial Cleaning Sutherland Shire NSW | Professional Business Cleaning Services | Pro Clean Corp',
        description: 'Expert commercial cleaning for offices, retail, medical, and industrial businesses across Sutherland Shire. Reliable, insured, police-checked. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-sutherland',
        type: 'website',
        images: [{ url: '/images/hero/hero1.jpg', alt: 'Commercial cleaning Sutherland Shire NSW professional business cleaners southern Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-sutherland' },
};

const faqs = [
    {
        question: 'What commercial properties do you clean in Sutherland Shire?',
        answer: 'Pro Clean Corp provides commercial cleaning across Sutherland Shire\'s diverse business community. This includes corporate offices in Sutherland and Miranda, retail stores and shopping centre tenancies across the Shire, medical and dental clinics, allied health practices, restaurants and hospitality venues in Cronulla and Caringbah, strata properties and common areas, and industrial facilities in the Shire\'s light industrial zones. We tailor our cleaning programs to the specific needs and presentation standards of each business type.'
    },
    {
        question: 'Do you clean Cronulla and Caringbah businesses?',
        answer: 'Yes. Cronulla and Caringbah are two of Sutherland Shire\'s most commercially active centres and areas we service regularly. Cronulla\'s retail strip, restaurants, and professional services businesses all require high-presentation cleaning that matches the area\'s coastal lifestyle appeal. Caringbah\'s mix of retail, medical, and commercial offices also features prominently in our Sutherland Shire cleaning program. We are familiar with both precincts and their specific cleaning and access requirements.'
    },
    {
        question: 'Can you provide after-hours cleaning for Sutherland Shire businesses?',
        answer: 'Yes. After-hours cleaning is available for all Sutherland Shire commercial clients — evening cleaning from 5:30pm and early morning cleaning from 5am. This is particularly popular with Cronulla\'s retail and hospitality businesses and the professional services offices across Miranda, Caringbah, and Sutherland. We manage keys and access codes with complete security accountability and discretion.'
    },
    {
        question: 'Do you offer strata cleaning in Sutherland Shire?',
        answer: 'Yes. Strata cleaning is a core service in Sutherland Shire, where apartment and townhouse complexes are widespread. We provide regular common area cleaning, lobby cleaning, lift cleaning, basement parking cleaning, and external garden area maintenance for strata schemes throughout the Shire. Our strata cleaning programs are designed to meet the requirements of Sutherland Shire strata managers and body corporate committees, with fixed-price contracts and consistent, reliable service delivery.'
    },
    {
        question: 'How do I arrange a commercial cleaning quote for my Sutherland Shire business?',
        answer: 'Call 1300 494 983 or use our online enquiry form to request a free on-site assessment. Our Sutherland Shire team will visit your premises, assess your cleaning requirements, and provide a written fixed-price quote within 24 hours. We service all Sutherland Shire suburbs including Sutherland, Cronulla, Miranda, Caringbah, Engadine, Gymea, Kirrawee, Menai, Bangor, Loftus, and Kurnell.'
    }
];

export default function CommercialCleaningSutherlandPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Sutherland Shire',
        description: 'Sutherland Shire is one of Sydney\'s most distinctive business communities — a coastal and suburban region combining professional services, retail, medical facilities, hospitality, and industrial operations across an area that stretches from Cronulla\'s beachfront to the Royal National Park boundary. Businesses in the Shire have high presentation expectations that match the area\'s reputation as one of Sydney\'s most desirable places to live and work. Pro Clean Corp provides dependable, high-quality commercial cleaning services throughout Sutherland Shire with experienced local teams and a quality guarantee that covers every client.',
        benefits: [
            'Sutherland Shire Local Knowledge: Established service coverage across all Sutherland Shire suburbs — from Cronulla\'s coastal retail strip to Sutherland\'s corporate offices, Miranda\'s Westfield precinct, and Menai\'s professional services businesses.',
            'Medical & Healthcare Specialists: Hospital-grade cleaning protocols for Sutherland Shire\'s medical centres, dental practices, pathology labs, and allied health facilities — infection control compliant and suitable for sensitive clinical environments.',
            'Strata & Common Area Cleaning: Comprehensive strata cleaning for Sutherland Shire\'s widespread apartment and townhouse complexes — lobbies, lifts, common areas, basement car parks, and external areas maintained to body corporate standards.',
            'Retail & Hospitality Cleaning: High-presentation cleaning for Cronulla\'s coastal retail and restaurant precinct, Miranda\'s Westfield tenancies, and Caringbah\'s retail and hospitality businesses — customer-facing areas consistently pristine.',
            'After-Hours Scheduling: Evening and early morning cleaning for Sutherland Shire businesses — zero disruption to operations while maintaining the high presentation standards the Shire\'s commercial community expects.',
            'Police-Checked & $20M Insured: All staff hold National Police Clearances and full public liability insurance — meeting the requirements of Sutherland Shire\'s strata managers, medical landlords, and corporate building owners.',
            'Flexible Contract Options: Daily, weekly, fortnightly, monthly, or one-off commercial cleaning — tailored to the specific needs and budget of your Sutherland Shire business.'
        ],
        process: [
            'Free On-Site Assessment: We visit your Sutherland Shire premises, assess all cleaning requirements, and provide a written fixed-price quote within 24 hours — no obligation, no hidden costs.',
            'Customised Cleaning Schedule: A documented cleaning plan is agreed upfront covering every area of your Sutherland Shire business — specific tasks, agreed frequencies, and defined quality standards.',
            'Dedicated Southern Sydney Team: Experienced Sutherland Shire-familiar cleaners assigned to your account, with knowledge of the Shire\'s commercial buildings, strata complexes, and access requirements.',
            'Quality Management System: Regular supervisor inspections, direct account manager contact, and 24-hour resolution for any service feedback — consistent quality guaranteed on every visit.'
        ],
        whyChooseUs: [
            'Sutherland Shire Expertise: Deep familiarity with the Shire\'s commercial precincts — Cronulla, Miranda, Caringbah, Sutherland, Gymea, Kirrawee, and all surrounding suburbs are regularly serviced.',
            '15+ Years Southern Sydney Experience: Over 15 years cleaning commercial properties in southern Sydney — Sutherland Shire is a well-established and high-priority service area for our teams.',
            '$20M Public Liability Insurance: Full commercial coverage required by the Shire\'s strata managers, medical landlords, and corporate property owners.',
            'Police-Checked Staff: Current National Police Clearances for all team members — trusted access to Sutherland Shire\'s medical centres, strata complexes, and after-hours commercial premises.',
            '7-Day Service Availability: Monday to Sunday scheduling with after-hours options — accommodating the diverse operating hours of Sutherland Shire\'s retail, hospitality, and professional services businesses.',
            '100% Satisfaction Guarantee: Any quality issue resolved within 24 hours with a free return clean — your Sutherland Shire business always presented to the standard you require.'
        ],
        serviceAreas: [
            'Sutherland', 'Cronulla', 'Miranda', 'Caringbah',
            'Engadine', 'Gymea', 'Kirrawee', 'Woolooware',
            'Kurnell', 'Loftus', 'Menai', 'Bangor',
            'Heathcote', 'Waterfall', 'Jannali', 'Como'
        ],
        faqs,
        images: [
            { src: '/images/hero/hero1.jpg', alt: 'Commercial cleaning Sutherland Shire NSW professional business cleaners southern Sydney' },
            { src: '/images/services/strata.jpg', alt: 'Pro Clean Corp Sutherland Shire commercial and strata cleaning southern Sydney' }
        ],
        relatedServices: [
            'Strata Cleaning Sydney',
            'Office Cleaning Sydney',
            'Commercial Cleaning Sydney',
            'Medical Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Sutherland Shire"
                serviceDescription="Expert commercial cleaning services in Sutherland Shire NSW. Professional office, retail, medical, strata, and industrial cleaning for businesses across Cronulla, Miranda, Caringbah, Sutherland, Engadine, Menai, and all Sutherland Shire suburbs. Police-checked, $20M insured."
                serviceUrl="/commercial-cleaning-sutherland"
                serviceType="CommercialService"
                price="$$"
                additionalServices={['Office Cleaning', 'Strata Cleaning', 'Medical Facility Cleaning', 'Retail Cleaning', 'After-Hours Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
