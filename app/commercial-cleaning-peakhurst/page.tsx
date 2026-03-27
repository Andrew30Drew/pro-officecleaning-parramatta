
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Peakhurst NSW | Light Industrial & Office Cleaners | Pro Clean Corp',
    description: 'Trusted commercial cleaning in Peakhurst NSW. South Sydney light industrial, retail & office cleaning. Police-checked staff, $20M insured. Free quote today.',
    keywords: 'commercial cleaning Peakhurst, office cleaning Peakhurst NSW, industrial cleaning Peakhurst, light industrial cleaning South Sydney, business cleaning Peakhurst, warehouse cleaning Peakhurst',
    openGraph: {
        title: 'Commercial Cleaning Peakhurst NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning for Peakhurst light industrial, office and retail businesses in South Sydney. Police-checked, eco-friendly. Free assessment.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-peakhurst',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Peakhurst South Sydney NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-peakhurst' },
};

export default function PeakhurstCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Peakhurst NSW',
        description: "Peakhurst is a well-established South Sydney suburb with a distinctive commercial character — a blend of long-standing light industrial businesses, trade and automotive operators, commercial retail strips, and professional service offices serving the local St George community. The suburb's industrial zones accommodate a diverse range of manufacturers, fabricators, food producers, and logistics operators, while its neighbourhood retail and professional precincts cater to residents across Peakhurst, Mortdale, Riverwood, and surrounding suburbs. Pro Clean Corp has delivered commercial cleaning services across the South Sydney industrial corridor for over 15 years, and we understand the specific hygiene, safety, and presentation requirements of each business type found in Peakhurst. Our teams are equipped for both the heavy-duty demands of factory and warehouse environments and the meticulous standards expected in client-facing retail and professional spaces — providing a seamless, all-in-one cleaning solution for Peakhurst businesses.",
        benefits: [
            'Light industrial and factory cleaning including floor scrubbing, amenities and lunchroom maintenance',
            'Automotive and trade business cleaning to WHS hygiene and safety standards',
            'Retail strip and neighbourhood business cleaning before trading hours each day',
            'Professional office and real estate agency cleaning on weekly or daily programs',
            '$20M public liability insurance covering all South Sydney and St George premises',
            'Police-checked, WHS-trained staff experienced in South Sydney industrial environments',
        ],
        process: [
            'Free Peakhurst site assessment covering your industrial, retail or office space',
            'Custom cleaning plan designed around your shift times, trading hours and hygiene requirements',
            'Professional cleaning by WHS-trained, police-checked staff with appropriate industrial equipment',
            'Quality sign-off and supervisor checks to maintain consistent standards on every visit',
        ],
        whyChooseUs: [
            '15+ years serving Peakhurst and the South Sydney St George corridor',
            '$20M public liability insurance',
            'Police-checked and WHS-trained cleaning staff',
            'Eco-friendly, biodegradable cleaning products',
            'Flexible scheduling around industrial shifts and retail trading hours',
            '100% satisfaction guarantee on every clean',
        ],
        serviceAreas: [
            'Hurstville',
            'Riverwood',
            'Penshurst',
            'Mortdale',
            'Lugarno',
            'Padstow',
            'Narwee',
            'Beverly Hills',
        ],
        faqs: [
            {
                question: 'Do you clean light industrial facilities and factories in Peakhurst?',
                answer: 'Yes. We service a wide range of light industrial premises in Peakhurst including food manufacturing facilities, metal fabrication workshops, timber yards, plastics manufacturers, and general warehousing operations. Our industrial cleaning covers factory floors, amenities, crib rooms, loading docks, and office areas — all in one contract.',
            },
            {
                question: 'Can you provide cleaning for automotive and trade businesses in Peakhurst?',
                answer: 'Yes. We are experienced in cleaning automotive workshops, tyre centres, panel beating operations, and trade supply businesses. We use appropriate degreasers and floor treatments to address oils, grease, tyre marks, and general workshop grime, while maintaining hygienic amenities for staff.',
            },
            {
                question: 'Do you clean retail shops and local businesses along Peakhurst commercial strips?',
                answer: 'Yes. We service neighbourhood retailers, real estate offices, medical and dental practices, and professional services businesses along the Peakhurst commercial precincts. Retail cleans are typically scheduled before trading hours to ensure your shop is ready and presentable when you open each day.',
            },
            {
                question: 'How do you handle cleaning for businesses that operate 24 hours or across multiple shifts in Peakhurst?',
                answer: 'We are experienced in designing cleaning programs around continuous operations and shift work. For 24-hour or multi-shift Peakhurst businesses, we identify the optimum cleaning window — often during changeover periods — and staff our teams accordingly. We are flexible and can adjust schedules as your operational needs change.',
            },
            {
                question: 'Can you provide periodic deep cleans for Peakhurst industrial premises?',
                answer: 'Yes. In addition to regular scheduled cleaning, we offer periodic industrial deep cleans including high-level dusting of beams and racking, wall and ceiling wash-downs, pressure washing of loading dock areas, drain maintenance, and full amenities restoration. These are ideal ahead of audits, lease renewals, or annual compliance inspections.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Peakhurst South Sydney NSW' },
            { src: '/images/services/office.webp', alt: 'Office and industrial cleaning Peakhurst St George' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Peakhurst NSW"
                serviceDescription="Professional commercial cleaning services in Peakhurst NSW. Light industrial, factory, retail and office cleaning for South Sydney St George businesses."
                serviceUrl="/commercial-cleaning-peakhurst"
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
