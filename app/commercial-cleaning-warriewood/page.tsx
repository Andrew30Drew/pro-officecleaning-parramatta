import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Warriewood NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Warriewood on the Northern Beaches. Warriewood Square retail, offices & industrial units. Insured, police-checked. Free quote.',
    keywords: 'commercial cleaning Warriewood, office cleaning Warriewood, business cleaning Warriewood NSW',
    openGraph: {
        title: 'Commercial Cleaning Warriewood NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning in Warriewood on the Northern Beaches. Warriewood Square retail, offices & industrial units. Insured, police-checked. Free quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-warriewood',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Warriewood NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-warriewood' },
};

export default function WarriewoodCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Warriewood NSW',
        description:
            'Pro Clean Corp provides expert commercial cleaning services across Warriewood and the Northern Beaches. Whether you operate a retail tenancy inside Warriewood Square, a professional office suite, a medical centre, or a light industrial unit in Warriewood Valley Business Park, our uniformed crews deliver consistently high standards. We schedule around your trading hours to ensure zero disruption to staff and customers.',
        benefits: [
            'Warriewood Square retail and food court cleaning specialists',
            'Warriewood Valley Business Park office and industrial cleaning',
            'Flexible after-hours and early-morning scheduling',
            'Eco-friendly, low-odour commercial-grade products',
            'Dedicated account manager for every Warriewood client',
            'Real-time quality reporting and 100% satisfaction sign-off',
        ],
        process: [
            'Free Warriewood site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Warriewood and the Northern Beaches',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Eco-friendly commercial products',
            'Flexible scheduling available',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Mona Vale', 'Narrabeen', 'Ingleside', 'Terrey Hills', 'St Ives', 'Bayview', 'Newport', 'Frenchs Forest'],
        faqs: [
            {
                question: 'What commercial properties do you clean in Warriewood?',
                answer:
                    'We clean retail shops, food courts, offices, medical centres, gyms, childcare facilities and light industrial premises throughout Warriewood, including tenancies within Warriewood Square shopping centre and businesses in Warriewood Valley Business Park.',
            },
            {
                question: 'How much does commercial cleaning cost in Warriewood?',
                answer: 'Rates range $35–$60/hr depending on scope and frequency. We provide free, no-obligation quotes for all Warriewood businesses.',
            },
            {
                question: 'Do you offer after-hours cleaning in Warriewood?',
                answer: 'Yes, after-hours, early morning and weekend scheduling is available to suit retail and office trading hours at Warriewood Square and surrounding precincts.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, fully WHS trained and covered by workers compensation insurance.',
            },
            {
                question: 'Do you provide cleaning supplies and equipment for Warriewood jobs?',
                answer: 'Yes, our crews arrive fully equipped with commercial-grade, eco-friendly products and all necessary machinery — you supply nothing.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Warriewood NSW' },
            { src: '/images/services/office.webp', alt: 'Office cleaning Warriewood Northern Beaches' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Warriewood NSW"
                serviceDescription="Professional commercial cleaning in Warriewood NSW. Serving Warriewood Square businesses, offices and retail on the Northern Beaches. Insured, police-checked cleaners."
                serviceUrl="/commercial-cleaning-warriewood"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
