import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Mascot | Office & Business Cleaners Botany Bay | Pro Clean Corp',
    description: 'Professional commercial cleaning services in Mascot NSW. Office buildings, airport-adjacent businesses, logistics hubs & showrooms. Police-checked staff, $20M insured. Call 1300 494 983.',
    keywords: 'commercial cleaning mascot, office cleaning mascot, commercial cleaners mascot, business cleaning mascot nsw, cleaning services mascot sydney, mascot office cleaners, botany bay commercial cleaning',
    openGraph: {
        title: 'Commercial Cleaning Mascot | Office & Business Cleaners | Pro Clean Corp',
        description: 'Commercial and office cleaning in Mascot NSW. Police-checked, $20M insured, flexible scheduling. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-mascot',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Mascot NSW office cleaners Botany Bay' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-mascot' },
};

const faqs = [
    {
        question: 'What types of commercial properties do you clean in Mascot?',
        answer: 'Mascot has a diverse commercial mix driven by its proximity to Sydney Airport — airline offices, freight and logistics companies, hotel back-of-house areas, aviation support businesses, corporate offices, retail showrooms, and warehouses. Pro Clean Corp has experience across all of these property types and can tailor a cleaning program to the specific requirements of each environment.'
    },
    {
        question: 'Can you clean Mascot offices and commercial premises outside business hours?',
        answer: 'Yes. We offer early morning cleaning from 5am, evening cleaning from 5:30pm, and weekend services across Mascot. Many Mascot businesses operate around airport schedules and have non-standard hours — we accommodate shift-based scheduling and can work around operational requirements to ensure cleaning happens without disruption.'
    },
    {
        question: 'Do you clean logistics and freight facilities in Mascot?',
        answer: 'Yes. Logistics and freight facilities have specific cleaning requirements — office areas, dispatch zones, amenities blocks, lunch rooms, and warehouse floor areas. We provide cleaning programs that cover both the office and operational components of logistics facilities in Mascot, using appropriate equipment and products for each area type.'
    },
    {
        question: 'Are your Mascot commercial cleaners police-checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff hold current National Police Clearances and are covered by $20 million public liability insurance. For businesses operating in Mascot\'s aviation-adjacent precinct with heightened security requirements, we can provide additional staff screening documentation on request.'
    },
    {
        question: 'How do I arrange commercial cleaning for my Mascot business?',
        answer: 'Call 1300 494 983 or complete our online enquiry form. We will arrange a free on-site assessment at your Mascot premises and provide a written fixed-price quote within 24 hours. Most Mascot commercial clients are on regular weekly or daily contracts with fixed monthly pricing.'
    }
];

export default function CommercialCleaningMascotPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Mascot',
        description: 'Mascot\'s position as Sydney\'s airport precinct makes it one of the city\'s most active commercial areas — airline operations, freight and logistics, corporate offices, hotel facilities, and support businesses all running around airport schedules that do not stop. Pro Clean Corp provides professional commercial cleaning services throughout Mascot, with the flexibility to work around your operational hours, the experience to clean diverse property types, and the reliability that businesses in this high-pressure precinct require.',
        benefits: [
            'Airport Precinct Commercial Experience: Familiar with Mascot\'s airport-adjacent commercial environment — airline offices, freight logistics, aviation support businesses, and high-turnover commercial properties.',
            'Shift-Flexible Scheduling: 24/7 scheduling capability to accommodate Mascot businesses operating around airport hours — early morning, overnight, and weekend cleaning available.',
            'Office & Operational Facility Cleaning: Full commercial cleaning scope for both office areas and operational zones within mixed-use logistics and commercial facilities.',
            'Showroom & Corporate Office Standards: High-presentation cleaning for Mascot\'s corporate offices and showrooms — first impressions matter for client-facing environments.',
            'Police-Checked & Aviation-Precinct Ready: All staff hold National Police Clearances — with additional screening documentation available for aviation-adjacent security requirements.',
            'Full Scope Coverage: Offices, kitchens, bathrooms, reception, meeting rooms, floor care, waste removal — every area covered on every scheduled visit.',
            '$20M Public Liability Insurance: Full commercial insurance required by Mascot\'s commercial building managers, corporate landlords, and airport-precinct facilities.'
        ],
        process: [
            'Free On-Site Assessment: We visit your Mascot premises, assess all cleaning areas, discuss operational hours, and provide a fixed-price quote within 24 hours.',
            'Custom Cleaning Program: Scope and schedule agreed to match your Mascot business\'s operational requirements — documented and delivered consistently.',
            'Assigned Mascot-Area Team: Experienced commercial cleaners allocated to your account with knowledge of Mascot\'s commercial precinct and building access.',
            'Quality Assurance: Supervisor checks, direct account manager contact, and 24-hour resolution for any service feedback.'
        ],
        whyChooseUs: [
            'Inner-South Sydney Coverage: Established cleaning teams covering Mascot, Botany, Rosebery, Zetland, Alexandria, and surrounds — local, responsive, reliable.',
            '15+ Years Commercial Cleaning: Over 15 years in Sydney\'s commercial cleaning market with experience across diverse commercial property types.',
            '$20M Public Liability Insurance: Full commercial coverage required by Mascot\'s property managers and airport-adjacent building security requirements.',
            'Police-Checked Staff: National Police Clearances for all staff — standard for Mascot\'s security-conscious commercial precinct.',
            '7-Day Scheduling: Monday to Sunday availability including early morning and late evening for businesses operating around airport schedules.',
            '100% Satisfaction Guarantee: Any quality concern resolved within 24 hours with a free return visit at no cost.'
        ],
        serviceAreas: [
            'Mascot', 'Botany', 'Rosebery', 'Zetland',
            'Alexandria', 'Waterloo', 'Beaconsfield', 'Daceyville',
            'Eastlakes', 'Hillsdale', 'Kingsford', 'Sydney Airport'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Mascot NSW office cleaners Botany Bay' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Mascot commercial cleaning airport precinct' }
        ],
        relatedServices: [
            'Commercial Cleaning Sydney',
            'Office Cleaning Alexandria',
            'Commercial Cleaning Chippendale',
            'Office Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Mascot"
                serviceDescription="Professional commercial cleaning services in Mascot NSW. Specialists in airport-precinct offices, logistics facilities, showrooms, and commercial buildings. Police-checked staff, $20M insured, flexible scheduling around airport hours."
                serviceUrl="/commercial-cleaning-mascot"
                serviceType="CommercialService"
                price="$$"
                additionalServices={['Office Cleaning', 'Logistics Facility Cleaning', 'Showroom Cleaning', 'Floor Care', 'Bathroom Sanitisation']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
