import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Gladesville NSW | Office, Retail & Medical Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Gladesville NSW. Offices, retail strip, medical practices & showrooms on Victoria Road. Reliable Inner North cleaners. Free quote.',
    keywords: 'commercial cleaning Gladesville, office cleaning Gladesville, business cleaning Gladesville NSW',
    openGraph: {
        title: 'Commercial Cleaning Gladesville NSW | Pro Clean Corp',
        description: 'Trusted commercial cleaning in Gladesville NSW. Serving offices, retail shops, medical practices and showrooms along Victoria Road and the Inner North Shore.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-gladesville',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Gladesville NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-gladesville' },
};

export default function GladesvilleCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Gladesville NSW',
        description:
            'Gladesville is a vibrant Inner North suburb straddling the Ryde and Hunter\'s Hill LGAs, home to a lively retail strip along Victoria Road, a strong community of medical and allied health practices, professional service businesses, and a mix of light industrial and showroom operators who benefit from the suburb\'s arterial road access. Pro Clean Corp delivers versatile commercial cleaning programs matched to Gladesville\'s diverse business landscape — from daily office maintenance and retail shopfront cleaning to medical facility sanitation and showroom presentation services. Our teams are locally experienced, responsive, and committed to delivering consistent, high-quality results that help your Gladesville business make the best impression every day.',
        benefits: [
            'Victoria Road retail strip and shopfront cleaning before trading hours',
            'Medical and allied health practice cleaning to infection control standards',
            'Professional office cleaning for Gladesville\'s service business community',
            'Showroom and automotive dealership cleaning to display standards',
            'Light industrial and workshop cleaning with WHS-compliant procedures',
            'Fully insured with $20M public liability and police-checked staff',
        ],
        process: [
            'Free Gladesville site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Gladesville and the Inner North Shore',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Eco-friendly, biodegradable products',
            'Flexible scheduling including after-hours and weekends',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Ryde', 'Meadowbank', 'Huntleys Point', 'Putney', 'Tennyson Point', 'West Ryde', 'Ermington', 'Drummoyne'],
        faqs: [
            {
                question: 'Do you clean retail shops along Victoria Road in Gladesville?',
                answer: 'Yes, Victoria Road retail cleaning is a core service for our Gladesville team. We provide early morning and after-hours cleans for shops, cafes, restaurants, and service businesses along the strip, ensuring your premises are spotless and welcoming before customers arrive.',
            },
            {
                question: 'How much does commercial cleaning cost in Gladesville?',
                answer: 'Rates range $35–$60/hr. Free quotes for all Gladesville businesses with no obligation.',
            },
            {
                question: 'Do you offer after-hours cleaning in Gladesville?',
                answer: 'Yes, after-hours, early morning and weekend scheduling is available across Gladesville.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained.',
            },
            {
                question: 'Can you clean medical and dental practices in Gladesville?',
                answer: 'Absolutely. We service GP practices, dental clinics, physiotherapy studios, and specialist rooms throughout Gladesville using TGA-listed disinfectants and infection control protocols. All medical cleans are scheduled outside consultation hours to avoid disruption to patient services.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Gladesville NSW' },
            { src: '/images/services/office.webp', alt: 'Office and retail cleaning Gladesville Inner North' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Gladesville NSW"
                serviceDescription="Professional commercial cleaning in Gladesville NSW, serving offices, retail shops, medical practices and showrooms along Victoria Road and the Inner North Shore."
                serviceUrl="/commercial-cleaning-gladesville"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
