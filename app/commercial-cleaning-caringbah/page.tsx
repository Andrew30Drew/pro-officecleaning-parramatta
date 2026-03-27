import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Caringbah NSW | Sutherland Shire Business Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Caringbah NSW. Offices, medical centres, retail & industrial across the Sutherland Shire\'s major commercial strip. Free quote.',
    keywords: 'commercial cleaning Caringbah, office cleaning Caringbah, business cleaning Sutherland Shire NSW',
    openGraph: {
        title: 'Commercial Cleaning Caringbah NSW | Pro Clean Corp',
        description: 'Trusted commercial cleaning in Caringbah NSW. Serving offices, medical centres, retail businesses and industrial premises across the Sutherland Shire.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-caringbah',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Caringbah NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-caringbah' },
};

export default function CaringbahCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Caringbah NSW',
        description:
            'Caringbah is the commercial heart of the Sutherland Shire, hosting a major retail strip on Karimbla Road, significant medical and dental precincts, light industrial estates, and an expanding professional services sector that serves the Shire\'s growing population. Pro Clean Corp has been a trusted cleaning partner for Caringbah businesses for over 15 years, providing tailored commercial cleaning programs that match the specific demands of each business type — from strict infection control protocols for medical practices to precision floor care for showrooms and auto dealerships. Our Shire-based teams respond rapidly and deliver consistent results that keep your premises looking professional and welcoming every day.',
        benefits: [
            'Medical and dental clinic cleaning to infection control standards',
            'Retail strip and shopfront cleaning along Caringbah\'s commercial precinct',
            'Office and professional suite cleaning for Shire business services',
            'Light industrial and warehouse cleaning in Caringbah\'s industrial zones',
            'Gym, childcare and hospitality venue cleaning with appropriate sanitation',
            'Fully insured with $20M public liability and police-checked staff',
        ],
        process: [
            'Free Caringbah site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Caringbah and the Sutherland Shire',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Eco-friendly, biodegradable products',
            'Flexible scheduling including after-hours and weekends',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Miranda', 'Cronulla', 'Taren Point', 'Woolooware', 'Gymea', 'Sutherland', 'Port Hacking', 'Sylvania'],
        faqs: [
            {
                question: 'Do you clean medical centres and dental practices in Caringbah?',
                answer: 'Yes, medical and dental cleaning is a core specialisation for our Caringbah team. We use TGA-listed hospital-grade disinfectants, follow infection control protocols, and clean outside consultation hours to ensure zero disruption to patient care.',
            },
            {
                question: 'How much does commercial cleaning cost in Caringbah?',
                answer: 'Rates range $35–$60/hr. Free quotes for all Caringbah businesses with no obligation.',
            },
            {
                question: 'Do you offer after-hours cleaning in Caringbah?',
                answer: 'Yes, after-hours, early morning and weekend scheduling is available across Caringbah and the Sutherland Shire.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained.',
            },
            {
                question: 'Are you able to clean gyms and fitness studios in Caringbah?',
                answer: 'Yes. Gym and fitness studio cleaning requires specific knowledge of equipment sanitisation, high-touch surface disinfection, and appropriate floor care for rubber and timber surfaces. Our Caringbah team is trained and experienced across these environments.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Caringbah NSW' },
            { src: '/images/services/office.webp', alt: 'Office and medical cleaning Caringbah Sutherland Shire' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Caringbah NSW"
                serviceDescription="Professional commercial cleaning in Caringbah NSW, serving offices, medical centres, retail businesses and industrial premises across the Sutherland Shire."
                serviceUrl="/commercial-cleaning-caringbah"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
