
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Olympic Park NSW | Corporate, Events & Hotel Cleaning | Pro Clean Corp',
    description: 'Premier commercial cleaning in Sydney Olympic Park NSW. Corporate HQs, event venues, hotels & stadiums. Police-checked, scalable teams. Free quote today.',
    keywords: 'commercial cleaning Olympic Park, office cleaning Sydney Olympic Park NSW, event venue cleaning Olympic Park, corporate cleaning Olympic Park, hotel cleaning Sydney Olympic Park, commercial cleaners Olympic Park',
    openGraph: {
        title: 'Commercial Cleaning Sydney Olympic Park NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning for Sydney Olympic Park corporate offices, event venues, hotels and stadium precincts. Fully insured, scalable. Free assessment.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-olympic-park',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Sydney Olympic Park NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-olympic-park' },
};

export default function OlympicParkCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Sydney Olympic Park NSW',
        description: "Sydney Olympic Park is one of Australia's most prestigious and diverse commercial precincts — a purpose-built, world-class environment hosting the headquarters of major national and multinational corporations, luxury hotels, exhibition and convention centres, sports stadiums, entertainment venues, and an expanding residential and retail community. The precinct's unique combination of corporate, hospitality, and events uses creates commercial cleaning demands that range from daily corporate office maintenance and hotel room servicing to large-scale event venue turnaround between concerts, sporting fixtures, and trade exhibitions. Pro Clean Corp has the experience, scale, and specialist capability to meet every cleaning requirement in Sydney Olympic Park, from the boardrooms of the Carter Street precinct to the concourse cleaning of its major venues. Our vetted, uniformed teams understand the security protocols, presentation standards, and operational constraints of this high-profile environment.",
        benefits: [
            'Corporate headquarters cleaning to multinational standards for Carter Street precinct tenants',
            'Event venue and exhibition hall cleaning with rapid turnaround between events',
            'Hotel and accommodation precinct cleaning delivered to hospitality industry standards',
            'Scalable teams capable of mobilising large crews for stadium and large-venue cleans',
            '$20M public liability insurance with capacity to meet complex precinct insurance requirements',
            'Police-checked, security-cleared and professionally presented cleaning personnel',
        ],
        process: [
            'Free Sydney Olympic Park site assessment and scope-of-works consultation',
            'Custom cleaning program developed for your office, venue or hotel operational requirements',
            'Professional cleaning by vetted, uniformed staff meeting precinct security protocols',
            'Quality audit sign-off and dedicated account management for ongoing client relationships',
        ],
        whyChooseUs: [
            '15+ years serving Sydney Olympic Park and the Inner West/Parramatta corridor',
            '$20M public liability insurance',
            'Police-checked, security-aware and uniformed staff',
            'Scalable crews for large event and venue cleaning requirements',
            'Eco-friendly cleaning products aligned with precinct sustainability standards',
            '100% satisfaction guarantee on every clean',
        ],
        serviceAreas: [
            'Homebush',
            'Strathfield',
            'Rhodes',
            'Newington',
            'Auburn',
            'Concord West',
            'Flemington',
            'Parramatta',
        ],
        faqs: [
            {
                question: 'Do you provide ongoing corporate office cleaning in Sydney Olympic Park?',
                answer: 'Yes. We service corporate headquarters and office tenancies throughout the Sydney Olympic Park precinct, including the Carter Street and Edwin Flack Avenue commercial corridors. Our daily office cleaning programs include vacuuming, surface sanitisation, kitchen maintenance, bathroom cleaning, and waste removal — delivered after hours or during the day as required.',
            },
            {
                question: 'Can you handle event venue cleaning and turnaround at Sydney Olympic Park?',
                answer: 'Yes. Event venue cleaning is one of our specialist capabilities. We have experience in rapid post-event turnaround cleaning for exhibitions, concerts, sporting events, and corporate functions. Our scalable teams can be mobilised at short notice and work within tight timeframes to prepare venues for the next event.',
            },
            {
                question: 'Do you clean hotel and accommodation facilities in the Olympic Park precinct?',
                answer: 'Yes. We provide cleaning services for hotel common areas, conference facilities, staff areas, and back-of-house spaces within the Sydney Olympic Park accommodation precinct. Our hotel-standard cleaning protocols ensure presentation that meets the expectations of hotel management and their guests.',
            },
            {
                question: 'How do you manage security access and clearance for Olympic Park corporate tenants?',
                answer: 'All of our staff hold current police clearances and we are experienced in adhering to strict corporate and precinct security protocols, including site inductions, access card management, and after-hours alarm procedures. We can provide a full list of credentials and compliance documentation prior to engagement.',
            },
            {
                question: 'Can you provide day porter and daytime cleaning services at Sydney Olympic Park?',
                answer: 'Yes. In addition to after-hours cleaning, we offer daytime porter and maintenance cleaning services for high-traffic areas. Day porter services include regular bathroom checks, lift lobbies, reception areas, and common areas — keeping your Olympic Park premises presentable throughout the business day.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Sydney Olympic Park NSW' },
            { src: '/images/services/office.webp', alt: 'Corporate office cleaning Sydney Olympic Park' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Sydney Olympic Park NSW"
                serviceDescription="Professional commercial cleaning services in Sydney Olympic Park NSW. Corporate offices, event venues, hotels and stadium precinct cleaning."
                serviceUrl="/commercial-cleaning-olympic-park"
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
