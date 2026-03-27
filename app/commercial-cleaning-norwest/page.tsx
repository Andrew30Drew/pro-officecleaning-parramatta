import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Norwest | Business Park Office Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning services in Norwest Business Park NSW. Trusted by Hills District corporations, insurance companies & tech offices. Police-checked, $20M insured. Call 1300 494 983.',
    keywords: 'commercial cleaning norwest, commercial cleaners norwest, norwest business park cleaning, office cleaning norwest, commercial cleaning hills district norwest, cleaning services norwest nsw, norwest commercial cleaners sydney',
    openGraph: {
        title: 'Commercial Cleaning Norwest Business Park | Hills District | Pro Clean Corp',
        description: 'Commercial cleaning specialists in Norwest Business Park and the Hills District. Police-checked, $20M insured. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-norwest',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Norwest Business Park Hills District' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-norwest' },
};

const faqs = [
    {
        question: 'What types of commercial businesses do you clean in Norwest?',
        answer: 'Norwest Business Park is home to some of Sydney\'s largest corporate operations — insurance company headquarters, technology firms, financial services providers, healthcare businesses, and national head offices. Pro Clean Corp services all of these commercial environments, from single-floor office suites to large multi-level corporate tenancies, with cleaning programs tailored to each client\'s specific operational requirements and presentation standards.'
    },
    {
        question: 'Do you coordinate with Norwest Business Park building management?',
        answer: 'Yes. We have established relationships with building management companies operating across Norwest Business Park. We are familiar with building access systems, after-hours protocols, and the strata and building management standards that govern cleaning contractors in the precinct. We can liaise directly with your building manager and provide all required insurance and compliance documentation for approved contractor listing.'
    },
    {
        question: 'Can you clean large corporate offices in Norwest outside business hours?',
        answer: 'Yes. Evening cleaning from 5:30pm and early morning cleaning from 5am are available for all Norwest clients. Large corporate offices in Norwest typically require 3–5 night per week cleaning with the full team arriving after staff leave. We manage security access, key holding, and alarm protocols with full accountability and documentation.'
    },
    {
        question: 'Do you provide end-of-trip facility cleaning for Norwest Business Park buildings?',
        answer: 'Yes. End-of-trip facilities — change rooms, showers, lockers, and bicycle areas — are a standard feature of Norwest Business Park\'s modern commercial buildings. We include these areas in our cleaning scope and apply appropriate hygiene standards. Daily cleaning of end-of-trip facilities is recommended for buildings with active cycling and running communities.'
    },
    {
        question: 'How is commercial cleaning in Norwest Business Park priced?',
        answer: 'Norwest commercial cleaning is priced based on your tenancy size, number of staff, cleaning frequency, and scope of tasks. We provide a free on-site assessment and a written fixed monthly price that covers all agreed tasks — no hidden charges or variable costs. Most Norwest corporate clients are on monthly contracts for straightforward budget management and invoice processing.'
    }
];

export default function CommercialCleaningNorwestPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Norwest',
        description: 'Norwest Business Park represents the commercial apex of Sydney\'s Hills District — a purpose-built business precinct housing national corporate headquarters, technology leaders, insurance giants, and healthcare companies that demand the highest operational standards in everything they do. Pro Clean Corp provides professional commercial cleaning services throughout Norwest Business Park, with the corporate cleaning experience, comprehensive insurance, and consistent quality that Norwest\'s premier tenants require day in, day out.',
        benefits: [
            'Norwest Business Park Specialists: Established commercial cleaning provider in Norwest with direct experience servicing the precinct\'s corporate tenants, building management expectations, and operational standards.',
            'Large Corporate Office Expertise: Experienced in multi-level, large-footprint corporate tenancies with open plan floors, boardrooms, executive areas, breakout spaces, and premium fitouts.',
            'Building Management Liaison: Direct coordination with Norwest building managers — appropriate insurance documentation, after-hours access protocols, and compliance with precinct-wide cleaning standards.',
            'End-of-Trip Facility Cleaning: Daily servicing of change rooms, showers, lockers, and bicycle storage areas — a standard requirement for Norwest\'s modern, active-lifestyle commercial buildings.',
            'After-Hours Corporate Scheduling: Evening cleaning from 5:30pm standard for Norwest\'s corporate clients — cleaning completed before your team arrives the next morning.',
            'Full Commercial Scope: Open plan workstations, boardrooms, kitchens, bathrooms, reception, meeting pods, glass partitions, lifts, and all common tenancy areas covered on every visit.',
            'Police-Checked & $20M Insured: All staff hold National Police Clearances and full public liability coverage — required for approved contractor status with Norwest\'s corporate building managers.'
        ],
        process: [
            'Free Norwest Site Assessment: We visit your Norwest office, assess all cleaning zones and corporate-specific requirements, and provide a written fixed-price monthly quote within 24 hours.',
            'Custom Corporate Cleaning Plan: Zone-by-zone documented checklist covering every area of your tenancy — agreed upfront, delivered consistently on every scheduled visit.',
            'Dedicated Norwest Team: Experienced corporate cleaners assigned specifically to your Norwest account, familiar with your building, security access, and presentation standards.',
            'Quality Assurance: Regular supervisor inspections, signed completion records, direct account manager contact, and 24-hour resolution for any quality feedback.'
        ],
        whyChooseUs: [
            'Norwest Corporate Cleaning Experience: Deep familiarity with Norwest Business Park\'s corporate environment, building management requirements, and the high standards its tenants expect.',
            '15+ Years Hills District Cleaning: Over 15 years servicing commercial clients across the Hills District, with Norwest as a core service area.',
            '$20M Public Liability Insurance: The insurance level mandated by Norwest\'s corporate building managers for all approved cleaning contractors.',
            'Police-Checked Workforce: Current National Police Clearances for every team member — essential for after-hours access to Norwest\'s corporate-grade buildings.',
            '7-Day Scheduling: Monday to Sunday availability for Norwest clients with diverse operational requirements.',
            '100% Satisfaction Guarantee: Any quality concern resolved within 24 hours with a free return visit — guaranteed, no exceptions.'
        ],
        serviceAreas: [
            'Norwest Business Park', 'Bella Vista', 'Baulkham Hills', 'Castle Hill',
            'Kellyville', 'Rouse Hill', 'Winston Hills', 'Pennant Hills',
            'Cherrybrook', 'Dural', 'Seven Hills', 'Blacktown'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Norwest Business Park Hills District corporate' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Norwest commercial cleaning Hills District team' }
        ],
        relatedServices: [
            'Office Cleaning Norwest',
            'Office Cleaning Castle Hill',
            'Commercial Cleaning Sydney',
            'Office Cleaning Parramatta'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Norwest"
                serviceDescription="Professional commercial cleaning services in Norwest Business Park and the Hills District NSW. Specialists in large corporate office cleaning, end-of-trip facilities, and multi-level tenancies. Police-checked staff, $20M insured, flexible after-hours scheduling."
                serviceUrl="/commercial-cleaning-norwest"
                serviceType="CommercialService"
                price="$$"
                additionalServices={['Corporate Office Cleaning', 'End-of-Trip Facility Cleaning', 'Boardroom Cleaning', 'Kitchen Cleaning', 'Bathroom Sanitisation']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
