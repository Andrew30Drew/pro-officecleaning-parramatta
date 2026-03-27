import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Zetland NSW | Office, Retail & Strata Cleaners | Pro Clean Corp',
    description: 'Expert commercial cleaning in Zetland NSW. East Village retail, modern offices, strata complexes & mixed-use buildings in Inner South Sydney. Free quote today.',
    keywords: 'commercial cleaning Zetland, office cleaning Zetland, strata cleaning Zetland NSW',
    openGraph: {
        title: 'Commercial Cleaning Zetland NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning in Zetland NSW. Serving East Village retail, modern offices and strata complexes in Sydney\'s fastest-growing inner south suburb.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-zetland',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Zetland NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-zetland' },
};

export default function ZetlandCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Zetland NSW',
        description:
            'Zetland has transformed into one of Inner Sydney\'s most dynamic growth corridors, anchored by the East Village retail and dining precinct, high-density residential towers, contemporary commercial offices, and a rapidly expanding base of professional service businesses. Pro Clean Corp delivers comprehensive commercial cleaning solutions matched to Zetland\'s modern, high-density environment — from East Village shopfronts and ground-floor commercial tenancies to corporate offices and the common areas of Zetland\'s landmark strata developments. Our inner-city cleaning teams understand the unique demands of high-footfall urban environments and deliver consistent, high-standard results every day.',
        benefits: [
            'East Village retail and food tenancy cleaning to hospitality standards',
            'Modern office and commercial suite cleaning in Zetland\'s new developments',
            'Strata lobby, lift, corridor and car park cleaning for high-rise towers',
            'Flexible scheduling that suits retail trading hours and office operations',
            'Eco-friendly cleaning products suitable for high-density living environments',
            'Fully insured with $20M public liability cover and police-checked staff',
        ],
        process: [
            'Free Zetland site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Zetland and the Inner South Sydney precinct',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Eco-friendly, biodegradable products',
            'Flexible scheduling including after-hours and weekends',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Alexandria', 'Waterloo', 'Rosebery', 'Erskineville', 'Mascot', 'Botany', 'Redfern', 'Surry Hills'],
        faqs: [
            {
                question: 'Do you clean East Village retail stores and food tenancies in Zetland?',
                answer: 'Yes, East Village is a busy retail and dining hub, and we provide cleaning services for shops, cafes, restaurants, and food outlets within and around the precinct. We schedule cleans before opening or after closing to ensure zero disruption to your trading day.',
            },
            {
                question: 'How much does commercial cleaning cost in Zetland?',
                answer: 'Rates range $35–$60/hr. Free quotes for all Zetland businesses with no obligation.',
            },
            {
                question: 'Do you offer after-hours cleaning in Zetland?',
                answer: 'Yes, after-hours, early morning and weekend scheduling is available across Zetland.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained.',
            },
            {
                question: 'Do you provide end-of-lease cleaning for commercial premises in Zetland?',
                answer: 'Yes. We offer thorough end-of-lease commercial cleaning for offices, retail spaces, and commercial tenancies in Zetland. Our end-of-lease clean covers all surfaces, floors, kitchens, bathrooms, windows, and storage areas to ensure bond return and compliance with lease obligations.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Zetland NSW' },
            { src: '/images/services/office.webp', alt: 'Office and strata cleaning Zetland Inner South Sydney' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Zetland NSW"
                serviceDescription="Professional commercial cleaning in Zetland NSW, serving East Village retail, modern offices and strata complexes in Sydney's fastest-growing inner south suburb."
                serviceUrl="/commercial-cleaning-zetland"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
