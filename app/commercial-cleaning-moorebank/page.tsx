import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Moorebank NSW | Logistics & Warehouse Cleaners | Pro Clean Corp',
    description: 'Expert commercial cleaning for Moorebank\'s major logistics intermodal precinct NSW. Warehouses, distribution centres & offices in South West Sydney. Free quote.',
    keywords: 'commercial cleaning Moorebank, warehouse cleaning Moorebank, logistics cleaning Moorebank NSW',
    openGraph: {
        title: 'Commercial Cleaning Moorebank NSW | Pro Clean Corp',
        description: 'Specialist commercial and logistics cleaning in Moorebank NSW. Serving the intermodal terminal, distribution centres, warehouses and offices across South West Sydney.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-moorebank',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Moorebank NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-moorebank' },
};

export default function MoorebankCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Moorebank NSW',
        description:
            'Moorebank is a logistics powerhouse anchored by the Moorebank Intermodal Terminal — one of Australia\'s most significant freight infrastructure investments — alongside a rapidly expanding cluster of major distribution centres, warehouses, and supporting commercial offices that form the backbone of South West Sydney\'s supply chain network. Pro Clean Corp understands the scale and pace of businesses in this key freight corridor, providing robust commercial cleaning services designed for large-scale warehouses and transport facilities. Our teams are efficient, safety-conscious, and equipped to handle the demands of high-volume logistics operations without ever interrupting your throughput.',
        benefits: [
            'Large-scale warehouse and distribution centre floor scrubbing',
            'Intermodal terminal amenities and administration area cleaning',
            'Cleaning schedules built around 24/7 freight operations and shift changes',
            'Driver lounges, lunchrooms and office sanitation to hygiene standards',
            'High-level racking dusting and industrial cobweb removal',
            'Fully insured with $20M public liability and WHS-compliant procedures',
        ],
        process: [
            'Free Moorebank site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Moorebank and South West Sydney',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Industrial-grade equipment and WHS-compliant procedures',
            'Flexible scheduling around shift times and production windows',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Liverpool', 'Casula', 'Prestons', 'Chipping Norton', 'Hammondville', 'Wattle Grove', 'Holsworthy', 'Milperra'],
        faqs: [
            {
                question: 'Do you clean large warehouses and distribution centres at Moorebank?',
                answer: 'Yes, large-scale warehouse and distribution centre cleaning is our speciality in Moorebank. We use commercial ride-on scrubbers and industrial sweepers to maintain large concrete floor areas, loading docks, racking zones, and amenities blocks efficiently and safely.',
            },
            {
                question: 'How much does commercial cleaning cost in Moorebank?',
                answer: 'Rates range $35–$60/hr depending on scope and frequency. Free site assessments for all Moorebank businesses.',
            },
            {
                question: 'Do you offer after-hours and 24/7 cleaning for Moorebank logistics operations?',
                answer: 'Yes. We design cleaning schedules that fit within operational windows — including between-shift cleans, overnight facility maintenance, and weekend programs — ensuring cleaning never interferes with freight throughput at Moorebank\'s intermodal and logistics facilities.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained.',
            },
            {
                question: 'Can you clean around operating forklifts and materials handling equipment in Moorebank?',
                answer: 'Yes. Our staff are trained in warehouse safety awareness and work in designated safe zones coordinated with your traffic management plan to ensure safe operation alongside forklifts, reach trucks, and other materials handling equipment throughout Moorebank facilities.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Moorebank NSW' },
            { src: '/images/services/office.webp', alt: 'Logistics and warehouse cleaning Moorebank South West Sydney' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Moorebank NSW"
                serviceDescription="Specialist commercial and logistics cleaning in Moorebank NSW, serving the intermodal terminal, distribution centres, warehouses and offices across South West Sydney."
                serviceUrl="/commercial-cleaning-moorebank"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
