
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Mona Vale NSW | Northern Beaches Business Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Mona Vale NSW. Village retail, medical centres & offices on the Northern Beaches. Police-checked, eco-friendly. Free quote.',
    keywords: 'commercial cleaning Mona Vale, office cleaning Mona Vale NSW, medical cleaning Mona Vale, business cleaning Northern Beaches, retail cleaning Mona Vale, commercial cleaners Mona Vale',
    openGraph: {
        title: 'Commercial Cleaning Mona Vale NSW | Pro Clean Corp',
        description: 'Expert commercial cleaning for Mona Vale village retailers, medical centres and Northern Beaches offices. Police-checked staff. Free site assessment.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-mona-vale',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Mona Vale Northern Beaches NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-mona-vale' },
};

export default function MonaValeCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Mona Vale NSW',
        description: "Mona Vale is the Northern Beaches' premier commercial village, serving as a hub for retail boutiques, cafes and restaurants, medical and allied health practices, professional services offices, and a thriving small business community that caters to the affluent local population and visitors from across the peninsula. Businesses in Mona Vale operate in a competitive environment where presentation matters — customers expect clean, well-maintained premises, and medical practitioners must meet strict infection control requirements. Pro Clean Corp has been serving the Northern Beaches commercial market for over 15 years, providing tailored commercial cleaning services that match the standards demanded by Mona Vale's diverse business community. From early-morning retail cleans before the village comes alive to after-hours office services and clinical cleaning for the suburb's busy medical precinct, we deliver consistent quality without disruption.",
        benefits: [
            'Village retail and boutique cleaning delivering impeccable presentation before trading hours',
            'Medical and dental practice cleaning with TGA-compliant infection control protocols',
            'Professional office and financial services cleaning to corporate standards',
            'Eco-friendly, biodegradable products in line with Northern Beaches sustainability values',
            '$20M public liability insurance for complete peace of mind',
            'Police-checked, uniformed staff trusted by Northern Beaches businesses',
        ],
        process: [
            'Free Mona Vale site assessment tailored to your retail, medical or office environment',
            'Custom cleaning program designed around your business hours and hygiene requirements',
            'Professional cleaning delivered by eco-conscious, police-checked staff',
            'Quality inspection sign-off and ongoing client communication to maintain standards',
        ],
        whyChooseUs: [
            '15+ years serving Mona Vale and the Northern Beaches',
            '$20M public liability insurance',
            'Police-checked and uniformed cleaning staff',
            'Eco-friendly, biodegradable and low-VOC cleaning products',
            'Flexible scheduling — early morning, evening and weekend cleans',
            '100% satisfaction guarantee on every clean',
        ],
        serviceAreas: [
            'Warriewood',
            'Terrey Hills',
            'Ingleside',
            'Newport',
            'Narrabeen',
            'Bayview',
            'St Ives',
            'Frenchs Forest',
        ],
        faqs: [
            {
                question: 'Do you provide commercial cleaning for Mona Vale village retailers?',
                answer: 'Yes. We regularly clean boutique retail stores, fashion outlets, homewares shops, and specialty retailers throughout the Mona Vale village commercial strip. Our retail cleaning programs are scheduled before trading hours to ensure your store is spotless when customers arrive each day.',
            },
            {
                question: 'Can you clean medical and allied health practices in Mona Vale?',
                answer: 'Absolutely. We provide clinical-grade cleaning for GP clinics, specialist rooms, dental practices, physiotherapy and allied health offices throughout Mona Vale. We use TGA-listed hospital-grade disinfectants on all clinical contact surfaces and our staff are trained in infection control procedures.',
            },
            {
                question: 'Do you use eco-friendly cleaning products on the Northern Beaches?',
                answer: 'Yes, and this is something we prioritise for our Northern Beaches clients. We use biodegradable, low-VOC, plant-based cleaning products wherever possible. These are effective against bacteria and viruses while being gentle on the coastal environment — something our Mona Vale clients genuinely appreciate.',
            },
            {
                question: 'Can you clean our Mona Vale office after hours?',
                answer: 'Yes. After-hours cleaning is our standard approach for office clients in Mona Vale. We work around your team\'s schedule to clean your office, meeting rooms, kitchen, and bathrooms thoroughly while you are not there — ensuring your workspace is fresh and ready for the following morning.',
            },
            {
                question: 'Do you also service businesses in nearby Warriewood and Newport?',
                answer: 'Yes. Pro Clean Corp services the entire Northern Beaches peninsula, including Warriewood, Newport, Narrabeen, Bayview, Ingleside, Terrey Hills, and beyond. We can include multiple nearby locations within a single cleaning contract for businesses that operate across more than one site.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Mona Vale Northern Beaches NSW' },
            { src: '/images/services/office.webp', alt: 'Office and medical cleaning Mona Vale NSW' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Mona Vale NSW"
                serviceDescription="Professional commercial cleaning services in Mona Vale NSW. Village retail, medical, office and strata cleaning for Northern Beaches businesses."
                serviceUrl="/commercial-cleaning-mona-vale"
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
