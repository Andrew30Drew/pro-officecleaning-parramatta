import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Double Bay NSW | Luxury Retail & Medical Cleaners | Pro Clean Corp',
    description: 'Premium commercial cleaning in Double Bay NSW. Luxury boutiques, medical suites, salons & professional offices in the Eastern Suburbs. Discreet. Free quote.',
    keywords: 'commercial cleaning Double Bay, office cleaning Double Bay, luxury retail cleaning Double Bay NSW',
    openGraph: {
        title: 'Commercial Cleaning Double Bay NSW | Pro Clean Corp',
        description: 'Bespoke commercial cleaning for Double Bay NSW. Serving luxury boutiques, medical suites, salons and professional offices in Sydney\'s prestigious Eastern Suburbs.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-double-bay',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Double Bay NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-double-bay' },
};

export default function DoubleBayCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Double Bay NSW',
        description:
            'Double Bay is synonymous with luxury, prestige, and impeccable standards — home to some of Sydney\'s finest boutiques, high-end restaurants, luxury beauty salons, specialist medical suites, and the offices of prominent legal and financial firms. Pro Clean Corp provides bespoke commercial cleaning services calibrated to the exacting standards that Double Bay\'s discerning business owners and their clients expect. Our cleaning teams are discreet, professionally presented, and trained to work with care in environments housing high-value merchandise, sensitive medical equipment, and premium interior finishes — from polished marble floors of luxury retail stores to the hygiene-critical environments of specialist medical consulting rooms.',
        benefits: [
            'Luxury boutique and high-end retail cleaning to display-standard perfection',
            'Medical suite and specialist consulting room cleaning with infection control',
            'Beauty salon and day spa cleaning with professional sanitisation protocols',
            'Professional office cleaning for legal, financial and consulting firms',
            'Heritage and premium interior cleaning with care for fine materials',
            'Discreet, police-checked staff with $20M public liability cover',
        ],
        process: [
            'Free Double Bay site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Double Bay and the Eastern Suburbs',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Eco-friendly, premium products safe for all surfaces',
            'Flexible scheduling including after-hours and weekends',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Edgecliff', 'Rose Bay', 'Woollahra', 'Point Piper', 'Darling Point', 'Paddington', 'Bondi Junction', 'Bellevue Hill'],
        faqs: [
            {
                question: 'Do you clean luxury boutiques and fashion retailers in Double Bay?',
                answer: 'Yes, luxury retail cleaning is a specialisation we are proud of in Double Bay. Our teams clean boutique floors, display areas, fitting rooms, service counters, and windows to an impeccable standard — scheduled around your trading hours so your store is perfect when your clients arrive.',
            },
            {
                question: 'How much does commercial cleaning cost in Double Bay?',
                answer: 'Rates range $35–$60/hr. Free quotes for all Double Bay businesses with no obligation.',
            },
            {
                question: 'Do you offer after-hours cleaning in Double Bay?',
                answer: 'Yes, after-hours, early morning and weekend scheduling is available. After-hours cleaning is particularly popular for boutiques and salons that operate during daytime trading hours.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained.',
            },
            {
                question: 'Do you clean specialist medical and dental suites in Double Bay?',
                answer: 'Yes. Double Bay has a significant medical and specialist precinct, and we are experienced in cleaning these sensitive environments using TGA-listed disinfectants and healthcare-grade cleaning procedures. We schedule all medical cleans outside consultation hours.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Double Bay NSW' },
            { src: '/images/services/office.webp', alt: 'Luxury boutique and office cleaning Double Bay Eastern Suburbs' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Double Bay NSW"
                serviceDescription="Bespoke commercial cleaning for Double Bay NSW, serving luxury boutiques, medical suites, salons and professional offices in Sydney's prestigious Eastern Suburbs."
                serviceUrl="/commercial-cleaning-double-bay"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
