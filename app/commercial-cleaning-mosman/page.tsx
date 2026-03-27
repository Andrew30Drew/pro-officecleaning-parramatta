import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Mosman NSW | Upscale Retail, Gallery & Office Cleaners | Pro Clean Corp',
    description: 'Premium commercial cleaning in Mosman NSW. Luxury retail, art galleries, medical suites & professional offices on the Lower North Shore. Discreet. Free quote.',
    keywords: 'commercial cleaning Mosman, office cleaning Mosman, retail cleaning Mosman NSW',
    openGraph: {
        title: 'Commercial Cleaning Mosman NSW | Pro Clean Corp',
        description: 'Bespoke commercial cleaning for Mosman NSW. Serving upscale retail, art galleries, medical suites and professional offices on Sydney\'s prestigious Lower North Shore.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-mosman',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Mosman NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-mosman' },
};

export default function MosmanCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Mosman NSW',
        description:
            'Mosman is synonymous with Lower North Shore prestige — a suburb where upscale boutiques, art galleries, award-winning restaurants, specialist medical suites, and the offices of prominent professional firms line Military Road and the surrounding village precincts. Pro Clean Corp delivers premium commercial cleaning services calibrated to the exacting standards that Mosman\'s discerning business owners and their clients expect. Our teams are discreet, professionally presented, police-checked, and trained to work with meticulous care in environments housing high-value merchandise, sensitive artworks, and premium interior finishes — delivering consistent white-glove results every visit.',
        benefits: [
            'Upscale boutique and luxury retail cleaning to display-standard perfection',
            'Art gallery and exhibition space cleaning around sensitive artworks',
            'Medical suite and specialist consulting room sanitation on Military Road',
            'Professional office cleaning for legal, financial and consulting firms',
            'Strata and mixed-use building common area cleaning',
            'Discreet, police-checked staff with $20M public liability cover',
        ],
        process: [
            'Free Mosman site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Mosman and the Lower North Shore',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Eco-friendly, premium products safe for all surfaces',
            'Flexible scheduling including after-hours and weekends',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Cremorne', 'Neutral Bay', 'Balmoral', 'Spit Junction', 'Cammeray', 'Middle Harbour', 'North Sydney', 'Kirribilli'],
        faqs: [
            {
                question: 'What commercial properties do you clean in Mosman?',
                answer: 'We clean upscale retail boutiques, art galleries, cafes, medical and dental suites, beauty salons, professional offices, strata buildings, and all types of commercial premises throughout Mosman and along Military Road\'s prestigious village precincts.',
            },
            {
                question: 'How much does commercial cleaning cost in Mosman?',
                answer: 'Rates range $35–$60/hr. Free quotes for all Mosman businesses with no obligation.',
            },
            {
                question: 'Do you offer after-hours cleaning in Mosman?',
                answer: 'Yes, after-hours, early morning and weekend scheduling is available. After-hours cleaning is particularly popular for Mosman boutiques and galleries that require cleaning outside daytime trading hours.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained.',
            },
            {
                question: 'Do you clean medical and specialist suites along Military Road in Mosman?',
                answer: 'Yes. We service GP practices, dental clinics, specialist rooms, and allied health practices throughout Mosman using TGA-listed disinfectants and infection control protocols, scheduled outside consultation hours to ensure zero disruption to patient services.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Mosman NSW' },
            { src: '/images/services/office.webp', alt: 'Retail and office cleaning Mosman Lower North Shore' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Mosman NSW"
                serviceDescription="Bespoke commercial cleaning for Mosman NSW, serving upscale retail, art galleries, medical suites and professional offices on Sydney's prestigious Lower North Shore."
                serviceUrl="/commercial-cleaning-mosman"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
