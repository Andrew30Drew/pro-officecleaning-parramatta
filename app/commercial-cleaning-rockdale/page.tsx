import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Rockdale NSW | Bayside Business Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Rockdale NSW. Offices, retail, strata & industrial along the Princes Hwy in Bayside Sydney. Insured, police-checked. Free quote.',
    keywords: 'commercial cleaning Rockdale, office cleaning Rockdale, business cleaning Rockdale NSW',
    openGraph: {
        title: 'Commercial Cleaning Rockdale NSW | Pro Clean Corp',
        description: 'Trusted commercial cleaning in Rockdale NSW. Serving offices, retail, strata and industrial businesses along the Princes Highway and throughout Bayside Sydney.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-rockdale',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Rockdale NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-rockdale' },
};

export default function RockdaleCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Rockdale NSW',
        description:
            'Rockdale is a major commercial hub in Bayside Sydney, with a diverse business landscape stretching along the Princes Highway — encompassing busy retail strips, office towers, medical and dental practices, strata complexes, automotive businesses, and light industrial facilities. Pro Clean Corp is a trusted commercial cleaning partner for Rockdale businesses, delivering reliable, high-quality cleaning programs that maintain professional standards across every property type. Our locally experienced Bayside teams respond quickly, understand the rhythm of Rockdale\'s trading environment, and schedule cleans to minimise any disruption to your staff and customers.',
        benefits: [
            'Princes Highway retail and commercial shopfront cleaning',
            'Professional office and administration area cleaning',
            'Medical and dental practice sanitation to infection control standards',
            'Strata common area cleaning for Rockdale\'s apartment complexes',
            'Automotive and industrial business cleaning with WHS-compliant procedures',
            'Fully insured with $20M public liability and police-checked staff',
        ],
        process: [
            'Free Rockdale site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Rockdale and Bayside Sydney',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Eco-friendly, biodegradable products',
            'Flexible scheduling including after-hours and weekends',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Arncliffe', 'Banksia', 'Brighton-Le-Sands', 'Kogarah', 'Bexley', 'Kingsgrove', 'Mascot', 'Wolli Creek'],
        faqs: [
            {
                question: 'What commercial properties do you clean in Rockdale?',
                answer: 'We clean retail shops, offices, medical and dental practices, automotive businesses, strata complexes, gyms, childcare facilities, and light industrial premises throughout Rockdale and along the Princes Highway corridor in Bayside Sydney.',
            },
            {
                question: 'How much does commercial cleaning cost in Rockdale?',
                answer: 'Rates range $35–$60/hr. Free quotes for all Rockdale businesses with no obligation.',
            },
            {
                question: 'Do you offer after-hours cleaning in Rockdale?',
                answer: 'Yes, after-hours, early morning and weekend scheduling is available across Rockdale and Bayside Sydney.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained.',
            },
            {
                question: 'Do you handle strata cleaning for Rockdale apartment and commercial buildings?',
                answer: 'Yes. We work with strata managers and owners corporations across Rockdale to deliver regular cleaning of lobbies, corridors, lifts, car parks, bin rooms, and external areas for both residential and mixed-use strata properties throughout Bayside Sydney.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Rockdale NSW' },
            { src: '/images/services/office.webp', alt: 'Office and strata cleaning Rockdale Bayside Sydney' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Rockdale NSW"
                serviceDescription="Professional commercial cleaning in Rockdale NSW, serving offices, retail, strata and industrial businesses along the Princes Highway and throughout Bayside Sydney."
                serviceUrl="/commercial-cleaning-rockdale"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
