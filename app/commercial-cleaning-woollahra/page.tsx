import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Woollahra NSW | Boutique, Gallery & Office Cleaners | Pro Clean Corp',
    description: 'Premium commercial cleaning in Woollahra NSW. Specialist services for art galleries, luxury boutiques, medical suites & heritage offices. Discreet. Free quote.',
    keywords: 'commercial cleaning Woollahra, office cleaning Woollahra, gallery cleaning Woollahra NSW',
    openGraph: {
        title: 'Commercial Cleaning Woollahra NSW | Pro Clean Corp',
        description: 'Bespoke commercial cleaning for Woollahra NSW. Art galleries, luxury boutiques, medical suites and heritage office buildings cleaned to the highest standard.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-woollahra',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Woollahra NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-woollahra' },
};

export default function WoollahraCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Woollahra NSW',
        description:
            'Woollahra is synonymous with elegance, heritage, and prestige — a suburb where art galleries line Queen Street, luxury boutiques occupy beautifully restored terrace buildings, and professional offices serve some of Sydney\'s most discerning clients. Pro Clean Corp offers bespoke commercial cleaning services calibrated to Woollahra\'s exceptional standards. We are experienced in cleaning around original artworks, heritage timber floors, antique furnishings, and sensitive display arrangements, delivering a discreet, detail-oriented service that enhances rather than disrupts your business environment. Our teams are police-checked, professionally presented, and trained to work with the utmost respect for your premises.',
        benefits: [
            'Art gallery and exhibition space cleaning around sensitive artworks',
            'Luxury boutique and high-end retail cleaning to showroom standard',
            'Heritage building and period interior cleaning with appropriate care',
            'Medical suite and specialist consulting room sanitation',
            'Professional office cleaning for legal, financial and consulting firms',
            'Discreet, police-checked staff with $20M public liability cover',
        ],
        process: [
            'Free Woollahra site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Woollahra and the Eastern Suburbs',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Eco-friendly, heritage-safe cleaning products',
            'Flexible scheduling including after-hours and weekends',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Paddington', 'Bondi Junction', 'Double Bay', 'Edgecliff', 'Rose Bay', 'Darlinghurst', 'Surry Hills', 'Point Piper'],
        faqs: [
            {
                question: 'Do you clean art galleries and exhibition spaces in Woollahra?',
                answer: 'Yes, we are experienced in cleaning commercial galleries and exhibition spaces on Queen Street and throughout Woollahra. Our teams are trained to work safely around artworks, sculptures, and delicate installations, using appropriate dust-free methods and low-chemical products.',
            },
            {
                question: 'How much does commercial cleaning cost in Woollahra?',
                answer: 'Rates range $35–$60/hr. Free quotes for all Woollahra businesses with no obligation.',
            },
            {
                question: 'Do you offer after-hours cleaning in Woollahra?',
                answer: 'Yes, after-hours, early morning and weekend scheduling is available. After-hours cleaning is particularly popular for boutiques and galleries that operate during daytime.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained.',
            },
            {
                question: 'Are your products safe for heritage timber floors and period interiors in Woollahra?',
                answer: 'Yes. We select cleaning products specifically suited to heritage surfaces including original timber floors, sandstone, marble, and period joinery. We never use harsh chemicals that could damage or discolour these irreplaceable finishes.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Woollahra NSW' },
            { src: '/images/services/office.webp', alt: 'Boutique and office cleaning Woollahra Eastern Suburbs' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Woollahra NSW"
                serviceDescription="Bespoke commercial cleaning for Woollahra NSW, serving art galleries, luxury boutiques, medical suites and heritage office buildings in the Eastern Suburbs."
                serviceUrl="/commercial-cleaning-woollahra"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
