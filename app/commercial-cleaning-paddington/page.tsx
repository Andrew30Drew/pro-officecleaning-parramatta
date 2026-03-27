
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Paddington NSW | Oxford St Boutiques, Galleries & Offices | Pro Clean Corp',
    description: 'Expert commercial cleaning in Paddington NSW. Oxford St boutiques, galleries, creative offices & Inner East businesses. Police-checked, eco-friendly. Free quote.',
    keywords: 'commercial cleaning Paddington, office cleaning Paddington NSW, retail cleaning Paddington Oxford Street, boutique cleaning Paddington, gallery cleaning Paddington, commercial cleaners Paddington Inner East',
    openGraph: {
        title: 'Commercial Cleaning Paddington NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning for Paddington boutiques, galleries, creative studios and Oxford St businesses. Police-checked, eco-friendly. Free assessment.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-paddington',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Paddington Oxford Street NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-paddington' },
};

export default function PaddingtonCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Paddington NSW',
        description: "Paddington is Sydney's most celebrated Inner East village — a densely packed, architecturally rich suburb where Victorian terraces house some of the city's most exclusive boutiques, art galleries, design studios, advertising agencies, architectural practices, and an ever-growing number of premium food and beverage establishments along Oxford Street and the surrounding laneways. Businesses in Paddington operate in an environment where aesthetics matter profoundly — customers and clients arrive with high expectations, and the presentation of your premises is inseparable from the perception of your brand. Pro Clean Corp has been delivering premium commercial cleaning services in Paddington and the Inner East for over 15 years, working discreetly and efficiently to keep your boutique, gallery, office, or studio immaculate. Our early-morning and after-hours cleaning programs ensure your space is pristine before the first customer arrives or the first client walks through the door.",
        benefits: [
            'Oxford Street boutique and fashion retail cleaning to the exacting standards of Sydney\'s premier shopping strip',
            'Art gallery and creative studio cleaning that respects artwork, installations, and sensitive display environments',
            'Creative office and agency cleaning tailored to open-plan studios and heritage terrace conversions',
            'Discreet after-hours and early-morning scheduling that never interrupts your business or clientele',
            '$20M public liability insurance — complete coverage for Paddington heritage and commercial premises',
            'Police-checked, professionally presented staff trusted by Inner East Sydney\'s discerning businesses',
        ],
        process: [
            'Free Paddington site assessment respecting your heritage building and specific environment',
            'Custom cleaning plan designed around your retail, gallery or studio operating hours',
            'Professional cleaning by discreet, police-checked and uniformed staff',
            'Quality sign-off after every clean and responsive communication with your team',
        ],
        whyChooseUs: [
            '15+ years serving Paddington and the Inner East Sydney market',
            '$20M public liability insurance',
            'Police-checked and uniformed cleaning professionals',
            'Eco-friendly, low-VOC cleaning products safe for artwork and sensitive materials',
            'Early-morning and after-hours scheduling for retail and gallery businesses',
            '100% satisfaction guarantee on every clean',
        ],
        serviceAreas: [
            'Woollahra',
            'Bondi Junction',
            'Darlinghurst',
            'Surry Hills',
            'Edgecliff',
            'Centennial Park',
            'Redfern',
            'Newtown',
        ],
        faqs: [
            {
                question: 'Do you provide commercial cleaning for Oxford Street boutiques in Paddington?',
                answer: 'Yes. We specialise in retail cleaning for the Oxford Street and Five Ways precinct, including fashion boutiques, homeware stores, jewellers, and specialty retailers. Our cleaning programs are scheduled before trading hours each day to ensure floors are spotless, fitting rooms are tidy, and glass surfaces are streak-free when you open your doors.',
            },
            {
                question: 'Can you clean art galleries and creative studios in Paddington without disturbing displays?',
                answer: 'Yes. We have extensive experience cleaning commercial art galleries and creative studios in Paddington and the Inner East. We use appropriate low-residue, low-VOC products near artwork and installations, and our staff are briefed to clean around displays and sensitive materials with care. We work with gallery managers to schedule cleaning outside viewing hours where required.',
            },
            {
                question: 'Do you clean advertising agencies and design studios operating out of Paddington terraces?',
                answer: 'Yes. Many of our Paddington clients are creative and professional services firms operating in converted Victorian terrace buildings. We are experienced in cleaning these heritage spaces, including polished hardwood floors, ornate cornices, exposed brick, and open-plan studio environments, using products that are safe for timber and heritage finishes.',
            },
            {
                question: 'How do you handle cleaning in narrow laneways or buildings without street parking in Paddington?',
                answer: 'Our teams are experienced in working in dense urban environments like Paddington where vehicle access and parking can be limited. We plan logistics carefully, carry appropriately sized equipment for heritage building access points, and can schedule service at times when lane access is easier — such as early morning before the commercial strip opens.',
            },
            {
                question: 'Do you offer restaurant and hospitality cleaning for Oxford Street venues in Paddington?',
                answer: 'Yes. We service restaurants, wine bars, cafes, and hospitality venues along Oxford Street and throughout Paddington. Our hospitality cleaning includes kitchen degreasing, front-of-house floor maintenance, bathroom sanitisation, and commercial exhaust surface cleaning — all scheduled around your service and trading hours.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Paddington Oxford Street NSW' },
            { src: '/images/services/office.webp', alt: 'Office and studio cleaning Paddington Inner East Sydney' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Paddington NSW"
                serviceDescription="Professional commercial cleaning services in Paddington NSW. Oxford Street boutiques, galleries, creative offices and hospitality cleaning for Inner East Sydney."
                serviceUrl="/commercial-cleaning-paddington"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={[
                    'Office Cleaning',
                    'Retail Cleaning',
                    'Warehouse Cleaning',
                    'Strata Cleaning',
                    'Industrial Cleaning',
                ]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
