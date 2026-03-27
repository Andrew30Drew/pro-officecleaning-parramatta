import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Yennora NSW | Industrial & Warehouse Cleaners | Pro Clean Corp',
    description: 'Reliable industrial and commercial cleaning in Yennora NSW. Warehouses, distribution centres, factories & offices in Western Sydney. Free quote. Call today.',
    keywords: 'commercial cleaning Yennora, industrial cleaning Yennora, warehouse cleaning Yennora NSW',
    openGraph: {
        title: 'Commercial Cleaning Yennora NSW | Pro Clean Corp',
        description: 'Professional industrial and commercial cleaning in Yennora NSW. Serving warehouses, distribution centres, factories and offices across the Western Sydney industrial estate.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-yennora',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Yennora NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-yennora' },
};

export default function YennoraCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Yennora NSW',
        description:
            'Yennora is a cornerstone of Western Sydney\'s industrial network, anchored by the Yennora Distribution Centre — one of Australia\'s most significant rail-linked logistics hubs — alongside a diverse range of manufacturing facilities, warehouses, and commercial offices. Pro Clean Corp is the specialist cleaning partner for Yennora\'s industrial sector, delivering robust cleaning programs that handle the demands of high-throughput warehouses, production floors, and corporate administration areas with equal capability. Our teams are WHS-compliant, trained in industrial safety and chemical handling, and equipped with commercial-grade machinery for large-scale floor scrubbing, high-level dusting, and waste management. We build cleaning schedules around your operational requirements, including shift changes and rail logistics timing.',
        benefits: [
            'Large-scale warehouse and distribution centre floor cleaning',
            'Manufacturing and production facility cleaning between shifts',
            'Commercial office and administration area maintenance',
            'High-level dusting, racking cleaning and cobweb removal',
            'WHS-compliant processes with all chemical handling training',
            'Fully insured with $20M public liability for industrial sites',
        ],
        process: [
            'Free Yennora site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Yennora and Western Sydney industrial estates',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Industrial-grade equipment and WHS-compliant procedures',
            'Flexible scheduling around shift times and production windows',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Fairfield', 'Wetherill Park', 'Smithfield', 'Guildford', 'Merrylands', 'Woodville', 'Granville', 'Villawood'],
        faqs: [
            {
                question: 'Do you clean large warehouses and distribution centres in Yennora?',
                answer: 'Yes, warehouse and distribution centre cleaning is our speciality in Yennora. We use commercial ride-on scrubbers and industrial equipment to maintain large concrete floor areas, loading docks, racking zones, and amenities blocks efficiently and to a high standard.',
            },
            {
                question: 'How much does commercial cleaning cost in Yennora?',
                answer: 'Rates range $35–$60/hr depending on scope and frequency. Free quotes for all Yennora businesses.',
            },
            {
                question: 'Do you offer after-hours cleaning in Yennora?',
                answer: 'Yes, after-hours, early morning and weekend scheduling is available. We build schedules around your shift changes and operational windows.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained.',
            },
            {
                question: 'Are your staff trained in industrial safety for Yennora sites?',
                answer: 'Yes. All our Yennora cleaning staff hold current WHS inductions, are trained in chemical handling and MSDS compliance, wear appropriate PPE, and are briefed on site-specific safety requirements before commencing work on any industrial premises.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Yennora NSW' },
            { src: '/images/services/office.webp', alt: 'Warehouse and office cleaning Yennora Western Sydney' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Yennora NSW"
                serviceDescription="Professional industrial and commercial cleaning in Yennora NSW, serving warehouses, distribution centres, factories and offices across the Western Sydney industrial estate."
                serviceUrl="/commercial-cleaning-yennora"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
