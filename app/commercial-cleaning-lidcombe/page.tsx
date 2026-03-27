import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Lidcombe NSW | Industrial & Office Cleaners | Pro Clean Corp',
    description: 'Reliable commercial cleaning in Lidcombe NSW. Offices, industrial parks, retail showrooms & Auburn hospital area businesses in Western Sydney. Free quote today.',
    keywords: 'commercial cleaning Lidcombe, office cleaning Lidcombe, industrial cleaning Lidcombe NSW',
    openGraph: {
        title: 'Commercial Cleaning Lidcombe NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning in Lidcombe NSW. Serving offices, industrial parks, retail showrooms and businesses near Auburn and the hospital precinct in Western Sydney.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-lidcombe',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Lidcombe NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-lidcombe' },
};

export default function LidcombeCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Lidcombe NSW',
        description:
            'Lidcombe is a bustling Western Sydney hub that blends large industrial estates, retail showrooms along Parramatta Road, commercial offices, a major sports precinct, and businesses supporting the nearby Auburn Hospital and medical facilities. Pro Clean Corp delivers versatile commercial cleaning services tailored to this diverse mix. Whether you have a showroom on Parramatta Road, a warehouse in the industrial zone, a medical practice, or a corporate office suite near the station, our local team ensures your premises are always client-ready, hygienic, and professionally maintained.',
        benefits: [
            'Retail showroom and Parramatta Road business cleaning specialists',
            'Industrial warehouse and factory cleaning with commercial equipment',
            'Medical centre and allied health facility sanitation',
            'Office and administration area cleaning for Lidcombe commercial tenancies',
            'Flexible scheduling around trading hours and shift operations',
            'Fully insured with $20M public liability and police-checked staff',
        ],
        process: [
            'Free Lidcombe site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Lidcombe and Western Sydney',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Eco-friendly commercial products',
            'Flexible scheduling available',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Auburn', 'Berala', 'Regents Park', 'Homebush', 'Rookwood', 'Flemington', 'Newington', 'Silverwater'],
        faqs: [
            {
                question: 'What commercial properties do you clean in Lidcombe?',
                answer: 'We clean retail showrooms, offices, industrial warehouses, medical centres, gyms, and commercial premises of all types throughout Lidcombe — from Parramatta Road businesses to industrial estate facilities and office parks near Lidcombe station.',
            },
            {
                question: 'How much does commercial cleaning cost in Lidcombe?',
                answer: 'Rates range $35–$60/hr. Free quotes for all Lidcombe businesses with no obligation.',
            },
            {
                question: 'Do you offer after-hours cleaning in Lidcombe?',
                answer: 'Yes, after-hours, early morning and weekend scheduling is available to minimise disruption to your Lidcombe business operations.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained.',
            },
            {
                question: 'Do you clean retail showrooms on Parramatta Road in Lidcombe?',
                answer: 'Yes, we specialise in showroom cleaning for automotive, furniture, and specialty retailers along Parramatta Road — focusing on floor presentation, glass and window cleaning, and ensuring your products are always displayed at their absolute best.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Lidcombe NSW' },
            { src: '/images/services/office.webp', alt: 'Office and showroom cleaning Lidcombe Western Sydney' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Lidcombe NSW"
                serviceDescription="Professional commercial cleaning in Lidcombe NSW, serving offices, industrial parks, retail showrooms and businesses in the Auburn hospital area across Western Sydney."
                serviceUrl="/commercial-cleaning-lidcombe"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
