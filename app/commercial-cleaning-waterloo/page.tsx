import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Waterloo NSW | Pro Clean Corp',
    description: 'Expert commercial cleaning in Waterloo NSW. Tech offices, showrooms, co-working hubs & retail in Inner South Sydney. Insured, police-checked cleaners. Free quote.',
    keywords: 'commercial cleaning Waterloo, office cleaning Waterloo, business cleaning Waterloo NSW',
    openGraph: {
        title: 'Commercial Cleaning Waterloo NSW | Pro Clean Corp',
        description: 'Expert commercial cleaning in Waterloo NSW. Tech offices, showrooms, co-working hubs & retail in Inner South Sydney. Insured, police-checked cleaners. Free quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-waterloo',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Waterloo NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-waterloo' },
};

export default function WaterlooCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Waterloo NSW',
        description:
            'Waterloo has emerged as one of Sydney\'s premier tech and creative precincts, home to a growing number of technology companies, co-working spaces, design studios, showrooms, and mixed-use commercial buildings. Pro Clean Corp delivers commercial cleaning solutions perfectly matched to Waterloo\'s dynamic, high-density environment. Our inner-city teams maintain the high presentation standards that Waterloo\'s innovative businesses require, with flexible scheduling that works around your teams and tenants.',
        benefits: [
            'Tech office and co-working space daily cleaning and sanitation',
            'Design showroom and creative studio cleaning to display standards',
            'Strata lobby, lift and common area cleaning for Waterloo\'s high-rises',
            'Retail and ground-floor tenancy cleaning before trading hours',
            'Eco-friendly, low-VOC products suited to open-plan office environments',
            'Fully insured with $20M public liability and police-checked staff',
        ],
        process: [
            'Free Waterloo site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Waterloo and Inner South Sydney',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Eco-friendly commercial products',
            'Flexible scheduling available',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Redfern', 'Alexandria', 'Zetland', 'Rosebery', 'Surry Hills', 'Erskineville', 'Newtown', 'Chippendale'],
        faqs: [
            {
                question: 'What commercial properties do you clean in Waterloo?',
                answer:
                    'We clean technology offices, co-working spaces, design studios, showrooms, retail tenancies, medical centres, strata complexes and mixed-use commercial buildings throughout Waterloo and the surrounding Inner South Sydney precinct.',
            },
            {
                question: 'How much does commercial cleaning cost in Waterloo?',
                answer: 'Rates range $35–$60/hr depending on scope and frequency. We provide free, no-obligation quotes for all Waterloo businesses.',
            },
            {
                question: 'Do you offer after-hours cleaning in Waterloo?',
                answer: 'Yes, after-hours, early morning and weekend scheduling is available to suit the operational needs of Waterloo tech offices, co-working spaces and retail tenancies.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, fully WHS trained and covered by workers compensation insurance.',
            },
            {
                question: 'Can you clean co-working spaces and hot-desk offices in Waterloo?',
                answer: 'Yes. Co-working and hot-desk environments require thorough daily surface sanitation and consistent presentation standards. Our Waterloo teams are experienced in high-turnover shared workspace cleaning with appropriate disinfection protocols.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Waterloo NSW' },
            { src: '/images/services/office.webp', alt: 'Tech office cleaning Waterloo Inner South Sydney' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Waterloo NSW"
                serviceDescription="Expert commercial cleaning in Waterloo NSW, serving tech offices, showrooms, co-working hubs and retail in Sydney's Inner South tech precinct."
                serviceUrl="/commercial-cleaning-waterloo"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
