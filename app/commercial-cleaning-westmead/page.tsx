import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Westmead NSW | Medical & Office Cleaners | Pro Clean Corp',
    description: 'Specialist commercial cleaning in Westmead NSW. Hospital precinct, medical suites, research offices & clinics. Infection control certified. Get a free quote.',
    keywords: 'commercial cleaning Westmead, medical cleaning Westmead, office cleaning Westmead NSW',
    openGraph: {
        title: 'Commercial Cleaning Westmead NSW | Pro Clean Corp',
        description: 'Certified commercial and medical cleaning in Westmead NSW. Serving the hospital precinct, specialist clinics, research offices and commercial businesses across Western Sydney.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-westmead',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Westmead NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-westmead' },
};

export default function WestmeadCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Westmead NSW',
        description:
            'Westmead is home to Australia\'s largest health and education precinct, encompassing Westmead Hospital, the Children\'s Hospital at Westmead, numerous specialist medical centres, research institutes, and a rapidly growing commercial office market. Pro Clean Corp is the trusted commercial cleaning partner for Westmead\'s demanding healthcare and business environment, providing certified infection control cleaning, daily office maintenance, and specialised cleaning programs that meet the strictest hygiene standards. Our teams are trained in healthcare cleaning protocols and deliver consistent, high-quality results for GP practices, specialist suites, pharmaceutical offices, and corporate headquarters across the precinct.',
        benefits: [
            'Hospital-grade infection control cleaning protocols',
            'TGA-listed disinfectants for medical and specialist suites',
            'Research facility and laboratory-adjacent office cleaning',
            'After-hours cleaning to avoid disruption to patient services',
            'Experienced healthcare environment cleaning teams',
            'Fully insured with $20M public liability for high-risk premises',
        ],
        process: [
            'Free Westmead site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Westmead and Western Sydney',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Eco-friendly, biodegradable products',
            'Flexible scheduling including after-hours',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Parramatta', 'Wentworthville', 'Pendle Hill', 'Toongabbie', 'Northmead', 'North Parramatta', 'Baulkham Hills', 'Girraween'],
        faqs: [
            {
                question: 'Are your cleaners trained for medical facility cleaning in Westmead?',
                answer: 'Yes. Our Westmead cleaning teams are specifically trained in healthcare infection control protocols, including the correct use of TGA-listed disinfectants, colour-coded cleaning systems, and the handling of clinical waste in compliance with health facility standards.',
            },
            {
                question: 'How much does commercial cleaning cost in Westmead?',
                answer: 'Rates range $35–$60/hr depending on scope and frequency. Free quotes for all Westmead businesses.',
            },
            {
                question: 'Do you offer after-hours cleaning in Westmead?',
                answer: 'Yes, after-hours, early morning and weekend scheduling is available. We work outside consultation hours for medical suites to ensure zero disruption to patient care.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained.',
            },
            {
                question: 'Do you provide consumables and washroom supplies for Westmead businesses?',
                answer: 'Yes, we can manage and replenish all washroom consumables including paper products, soap dispensers, and sanitary bins for medical suites and commercial offices throughout Westmead as part of a comprehensive cleaning contract.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Westmead NSW' },
            { src: '/images/services/office.webp', alt: 'Medical office cleaning Westmead hospital precinct' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Westmead NSW"
                serviceDescription="Specialist commercial and medical cleaning in Westmead NSW, serving the hospital precinct, specialist clinics, research offices and commercial businesses across Western Sydney."
                serviceUrl="/commercial-cleaning-westmead"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
