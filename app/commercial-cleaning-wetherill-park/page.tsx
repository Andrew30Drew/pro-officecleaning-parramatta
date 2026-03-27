import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Wetherill Park NSW | Industrial & Warehouse Cleaners | Pro Clean Corp',
    description: 'Specialist commercial cleaning in Wetherill Park NSW. Warehouses, factories, offices & logistics in one of Western Sydney\'s major industrial estates. Free quote.',
    keywords: 'commercial cleaning Wetherill Park, industrial cleaning Wetherill Park, warehouse cleaning Wetherill Park NSW',
    openGraph: {
        title: 'Commercial Cleaning Wetherill Park NSW | Pro Clean Corp',
        description: 'Expert commercial and industrial cleaning in Wetherill Park NSW. Serving warehouses, factories, offices and logistics facilities in one of Western Sydney\'s largest industrial estates.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-wetherill-park',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Wetherill Park NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-wetherill-park' },
};

export default function WetherillParkCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Wetherill Park NSW',
        description:
            'Wetherill Park is one of Sydney\'s most significant industrial precincts, home to an extraordinary concentration of manufacturing plants, logistics and distribution facilities, trade warehouses, and the supporting commercial offices that manage these large-scale operations. Pro Clean Corp is the preferred cleaning partner for heavy industry in Wetherill Park, providing rugged, reliable cleaning services capable of tackling the grime, grease, and dust inherent to factory environments while maintaining pristine offices for administration teams. Our industrial cleaning crews hold White Cards, follow Safe Work Method Statements, and are equipped with commercial-grade machinery for large-scale floor scrubbing, high-level dusting, and comprehensive facility maintenance.',
        benefits: [
            'Industrial warehouse and factory floor scrubbing with ride-on equipment',
            'Manufacturing facility cleaning around production schedules and shift changes',
            'Office and administration area cleaning to professional standards',
            'High-level racking dusting, ceiling beam cleaning and cobweb removal',
            'WHS-compliant procedures with Safe Work Method Statements for all sites',
            'Fully insured with $20M public liability for industrial premises',
        ],
        process: [
            'Free Wetherill Park site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Wetherill Park and Western Sydney industrial estates',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Industrial-grade equipment and WHS-compliant procedures',
            'Flexible scheduling around shift times and production windows',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Smithfield', 'Fairfield', 'Horsley Park', 'Prospect', 'Bossley Park', 'Prairiewood', 'Yennora', 'Greystanes'],
        faqs: [
            {
                question: 'What commercial properties do you clean in Wetherill Park?',
                answer: 'We clean manufacturing plants, warehouses, distribution centres, logistics facilities, trade showrooms, and corporate offices throughout the Wetherill Park industrial estate — providing both industrial-grade and office-standard cleaning from a single trusted provider.',
            },
            {
                question: 'How much does commercial cleaning cost in Wetherill Park?',
                answer: 'Rates range $35–$60/hr. Free site assessments for all Wetherill Park businesses with no obligation.',
            },
            {
                question: 'Do you offer after-hours cleaning in Wetherill Park?',
                answer: 'Yes, after-hours, early morning and weekend scheduling is available. We build cleaning windows around your production schedule and shift changes to ensure zero disruption to operations in Wetherill Park.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained with White Cards held by all industrial-site crew members.',
            },
            {
                question: 'Do you offer machine floor scrubbing for Wetherill Park warehouses?',
                answer: 'Yes. We use industrial ride-on and walk-behind scrubber-dryers to efficiently clean large concrete warehouse and factory floor areas in Wetherill Park, removing tyre marks, oil spills, dust, and debris to maintain a safe and compliant working environment.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Wetherill Park NSW' },
            { src: '/images/services/office.webp', alt: 'Warehouse and factory cleaning Wetherill Park Western Sydney' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Wetherill Park NSW"
                serviceDescription="Expert commercial and industrial cleaning in Wetherill Park NSW, serving warehouses, factories, offices and logistics facilities in one of Western Sydney's largest industrial estates."
                serviceUrl="/commercial-cleaning-wetherill-park"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
