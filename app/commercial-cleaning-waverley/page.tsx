import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Waverley NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Waverley NSW. Offices, retail, medical & strata along Bondi Rd & Eastern Suburbs. Insured, police-checked cleaners. Free quote.',
    keywords: 'commercial cleaning Waverley, office cleaning Waverley, business cleaning Waverley NSW',
    openGraph: {
        title: 'Commercial Cleaning Waverley NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning in Waverley NSW. Serving offices, retail shops, medical suites and strata buildings along Bondi Road and across the Eastern Suburbs.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-waverley',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Waverley NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-waverley' },
};

export default function WaverleyCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Waverley NSW',
        description:
            'Waverley is one of Sydney\'s most vibrant Eastern Suburbs municipalities, home to a thriving mix of retail strips along Bondi Road, professional offices near Charing Cross, medical centres, and strata complexes that demand consistently high cleaning standards. Pro Clean Corp delivers comprehensive commercial cleaning solutions tailored to Waverley\'s diverse business landscape — from boutique cafes and wellness studios to legal firms and real estate agencies. Our locally experienced teams schedule cleans to minimise disruption to your operations, whether you need daily office maintenance, periodic deep cleans, or specialised strata cleaning.',
        benefits: [
            'Bondi Road retail and shopfront cleaning expertise',
            'Medical and allied health facility sanitation to infection control standards',
            'Strata and common area cleaning for Waverley\'s apartment complexes',
            'Eco-friendly, allergen-safe cleaning products used throughout',
            'Flexible after-hours and weekend scheduling to suit trading hours',
            'Fully insured with $20M public liability cover',
        ],
        process: [
            'Free Waverley site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Waverley and the Eastern Suburbs',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Eco-friendly, biodegradable products',
            'Flexible scheduling including after-hours and weekends',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Bondi', 'Bondi Junction', 'Bronte', 'Randwick', 'Clovelly', 'Woollahra', 'Paddington', 'Rose Bay'],
        faqs: [
            {
                question: 'Do you clean retail shops along Bondi Road in Waverley?',
                answer: 'Yes, we specialise in retail cleaning along Bondi Road and surrounding Waverley streets. Our teams work early mornings or after trading hours to ensure your shopfront, fitting rooms, and back-of-house areas are spotless before customers arrive each day.',
            },
            {
                question: 'How much does commercial cleaning cost in Waverley?',
                answer: 'Rates range $35–$60/hr. Free quotes for all Waverley businesses with no obligation.',
            },
            {
                question: 'Do you offer after-hours cleaning in Waverley?',
                answer: 'Yes, after-hours, early morning and weekend scheduling available to minimise disruption to your Waverley business.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained.',
            },
            {
                question: 'Do you offer once-off deep cleans for offices in Waverley?',
                answer: 'Yes, in addition to regular scheduled cleaning, we offer one-off deep cleans for offices, retail spaces, and commercial premises in Waverley — popular for end-of-lease, pre-opening, and post-renovation clean-ups across the Eastern Suburbs.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Waverley NSW' },
            { src: '/images/services/office.webp', alt: 'Office cleaning Waverley Eastern Suburbs' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Waverley NSW"
                serviceDescription="Professional commercial cleaning in Waverley NSW, serving offices, retail, medical suites and strata complexes along Bondi Road and the Eastern Suburbs."
                serviceUrl="/commercial-cleaning-waverley"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
