import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Taren Point NSW | Sutherland Shire Industrial Cleaners | Pro Clean Corp',
    description: 'Specialist commercial cleaning in Taren Point NSW. Industrial waterfront businesses, warehouses, offices & showrooms in the Sutherland Shire. Free quote today.',
    keywords: 'commercial cleaning Taren Point, industrial cleaning Taren Point, warehouse cleaning Taren Point NSW',
    openGraph: {
        title: 'Commercial Cleaning Taren Point NSW | Pro Clean Corp',
        description: 'Expert commercial and industrial cleaning in Taren Point NSW. Serving waterfront industrial businesses, warehouses, offices and showrooms across the Sutherland Shire.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-taren-point',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Taren Point NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-taren-point' },
};

export default function TarenPointCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Taren Point NSW',
        description:
            'Taren Point is the industrial engine of the Sutherland Shire, occupying a prime waterfront location on the Port Hacking estuary with a concentration of manufacturing facilities, trade showrooms, marine businesses, warehouses, and commercial offices that serve the Shire\'s business community. Pro Clean Corp provides dedicated commercial cleaning services to the businesses that keep the Shire moving. From manufacturing workshops and warehouses to modern office suites and trade showrooms, our local Shire-based team delivers reliable, high-quality cleaning that meets industrial safety standards and corporate presentation needs every single visit.',
        benefits: [
            'Industrial warehouse and factory floor cleaning with commercial equipment',
            'Trade showroom and commercial display area cleaning to presentation standards',
            'Office and administration area maintenance for Taren Point businesses',
            'Marine and waterfront business facility cleaning',
            'WHS-compliant procedures with all necessary safety inductions',
            'Fully insured with $20M public liability and police-checked staff',
        ],
        process: [
            'Free Taren Point site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Taren Point and the Sutherland Shire',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Eco-friendly commercial products',
            'Flexible scheduling available',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Miranda', 'Caringbah', 'Sylvania', 'Sans Souci', 'Woolooware', 'Gymea', 'Port Hacking', 'Ramsgate'],
        faqs: [
            {
                question: 'What commercial properties do you clean in Taren Point?',
                answer: 'We clean industrial warehouses, manufacturing facilities, trade showrooms, marine businesses, waterfront commercial premises, office suites, and all types of commercial and industrial properties throughout the Taren Point estate and surrounding Sutherland Shire.',
            },
            {
                question: 'How much does commercial cleaning cost in Taren Point?',
                answer: 'Rates range $35–$60/hr. Free quotes for all Taren Point businesses with no obligation.',
            },
            {
                question: 'Do you offer after-hours cleaning in Taren Point?',
                answer: 'Yes, after-hours, early morning and weekend scheduling is available to work around your operational hours in Taren Point.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained.',
            },
            {
                question: 'Can you clean industrial workshops and trade showrooms in Taren Point?',
                answer: 'Yes. We specialise in cleaning industrial workshops, trade showrooms, and marine businesses along the Taren Point waterfront — including floor scrubbing, amenities maintenance, window and glass cleaning, and waste management scheduled around your operations.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Taren Point NSW' },
            { src: '/images/services/office.webp', alt: 'Industrial and office cleaning Taren Point Sutherland Shire' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Taren Point NSW"
                serviceDescription="Expert commercial and industrial cleaning in Taren Point NSW, serving waterfront industrial businesses, warehouses, offices and showrooms across the Sutherland Shire."
                serviceUrl="/commercial-cleaning-taren-point"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
