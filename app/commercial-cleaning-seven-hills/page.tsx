import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Seven Hills NSW | Industrial & Office Cleaners | Pro Clean Corp',
    description: 'Top-rated commercial cleaning in Seven Hills NSW. Warehouses, factories, office suites & industrial estate businesses in Western Sydney. Free quote today.',
    keywords: 'commercial cleaning Seven Hills, industrial cleaning Seven Hills, warehouse cleaning Seven Hills NSW',
    openGraph: {
        title: 'Commercial Cleaning Seven Hills NSW | Pro Clean Corp',
        description: 'Expert commercial and industrial cleaning in Seven Hills NSW. Serving warehouses, factories, office suites and industrial estate businesses across Western Sydney.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-seven-hills',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Seven Hills NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-seven-hills' },
};

export default function SevenHillsCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Seven Hills NSW',
        description:
            'Seven Hills is a crucial industrial artery of Western Sydney, filled with manufacturing plants, warehouses, logistics centres, and commercial offices that keep the region\'s economy moving. Pro Clean Corp is the local choice for heavy-duty commercial cleaning across Seven Hills\' industrial estate and surrounding business precincts. We understand the specific needs of industrial businesses — from degreasing factory floors and maintaining pristine administration offices to high-level dusting of warehouse racking and safe work area preparation. Our teams hold White Cards, are trained in WHS requirements, and are equipped with commercial-grade machinery for efficient, compliant cleaning.',
        benefits: [
            'Industrial warehouse and factory floor scrubbing with ride-on equipment',
            'Manufacturing facility cleaning between shifts and during downtime',
            'Office and administration area cleaning in attached commercial suites',
            'High-level dusting of warehouse racking, beams and ventilation systems',
            'WHS-compliant procedures with Safe Work Method Statements available',
            'Fully insured with $20M public liability for industrial sites',
        ],
        process: [
            'Free Seven Hills site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Seven Hills and Western Sydney industrial estates',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Industrial-grade equipment and WHS-compliant procedures',
            'Flexible scheduling around shift times and production windows',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Blacktown', 'Baulkham Hills', 'Toongabbie', 'Pendle Hill', 'Kings Park', 'Wentworthville', 'Girraween', 'Greystanes'],
        faqs: [
            {
                question: 'What commercial properties do you clean in Seven Hills?',
                answer: 'We clean warehouses, factories, manufacturing plants, logistics centres, commercial offices, trade showrooms, gyms, and all types of industrial and commercial premises throughout the Seven Hills industrial estate and surrounding business areas.',
            },
            {
                question: 'How much does commercial cleaning cost in Seven Hills?',
                answer: 'Rates range $35–$60/hr. Free quotes for all Seven Hills businesses with no obligation.',
            },
            {
                question: 'Do you offer after-hours cleaning in Seven Hills?',
                answer: 'Yes, after-hours, early morning and weekend scheduling is available to work around your shift changes and production windows at Seven Hills.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained with White Cards held by all industrial-site crew members.',
            },
            {
                question: 'Do you offer ride-on floor scrubbing for Seven Hills warehouses?',
                answer: 'Yes. We use industrial ride-on and walk-behind scrubber-dryers to efficiently clean large concrete warehouse floor areas in Seven Hills, removing tyre marks, dust, and grease to maintain a safe, clean working environment.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Seven Hills NSW' },
            { src: '/images/services/office.webp', alt: 'Warehouse and office cleaning Seven Hills Western Sydney' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Seven Hills NSW"
                serviceDescription="Expert commercial and industrial cleaning in Seven Hills NSW, serving warehouses, factories, office suites and industrial estate businesses across Western Sydney."
                serviceUrl="/commercial-cleaning-seven-hills"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
