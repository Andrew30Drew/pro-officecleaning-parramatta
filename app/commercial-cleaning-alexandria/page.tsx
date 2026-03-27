import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Alexandria NSW | Industrial, Office & Warehouse Cleaners | Pro Clean Corp',
    description: 'Expert commercial cleaning in Alexandria NSW. Warehouses, creative offices, industrial units & showrooms near Sydney Airport. Trusted cleaners. Free quote.',
    keywords: 'commercial cleaning Alexandria, industrial cleaning Alexandria, warehouse cleaning Alexandria NSW',
    openGraph: {
        title: 'Commercial Cleaning Alexandria NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning in Alexandria NSW. Serving industrial warehouses, creative office conversions, showrooms and businesses in Sydney\'s premier inner industrial precinct.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-alexandria',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Alexandria NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-alexandria' },
};

export default function AlexandriaCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Alexandria NSW',
        description:
            'Alexandria is one of Sydney\'s most distinctive commercial precincts — a suburb that has evolved from a traditional heavy industrial area into a dynamic blend of technology companies, creative agencies, design showrooms, logistics operations, and converted warehouse offices that define the modern inner-city business landscape. Pro Clean Corp delivers commercial cleaning solutions that match Alexandria\'s extraordinary diversity, from scrubbing concrete floors in active warehouses and cleaning high-ceiling industrial spaces to maintaining the polished aesthetics of open-plan creative offices and architectural showrooms. Strategically positioned near Sydney Airport and Port Botany, Alexandria\'s businesses operate around the clock, and our flexible scheduling ensures your premises are always clean, safe, and professionally presented.',
        benefits: [
            'Warehouse and industrial floor cleaning with commercial-grade scrubbers',
            'Creative office and converted warehouse space cleaning with care for unique finishes',
            'Design showroom and architectural studio cleaning to display standards',
            'Logistics and distribution facility cleaning around operational schedules',
            'Technology office and co-working space cleaning with daily maintenance',
            'Fully insured with $20M public liability and WHS-compliant procedures',
        ],
        process: [
            'Free Alexandria site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Alexandria and the Inner South industrial precinct',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Eco-friendly, biodegradable products',
            'Flexible scheduling including 24/7 for logistics operations',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Waterloo', 'Erskineville', 'Mascot', 'Botany', 'Newtown', 'Redfern', 'Zetland', 'Rosebery'],
        faqs: [
            {
                question: 'Do you clean industrial warehouses and logistics facilities in Alexandria?',
                answer: 'Yes, industrial and warehouse cleaning is core to our Alexandria service. We use commercial ride-on scrubbers and industrial cleaning equipment to maintain large floor areas, loading docks, amenities blocks, and high-bay racking zones in Alexandria\'s active logistics and manufacturing facilities.',
            },
            {
                question: 'How much does commercial cleaning cost in Alexandria?',
                answer: 'Rates range $35–$60/hr depending on scope and frequency. Free quotes for all Alexandria businesses.',
            },
            {
                question: 'Do you offer after-hours cleaning in Alexandria?',
                answer: 'Yes, after-hours, early morning and 24/7 scheduling is available to support logistics and airport-adjacent businesses without operational disruption.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained.',
            },
            {
                question: 'Can you clean converted warehouse offices and creative spaces in Alexandria?',
                answer: 'Absolutely. Alexandria is famous for its stunning converted warehouse offices and creative studios, and we specialise in maintaining these unique environments using products and methods appropriate for exposed brick, polished concrete floors, and industrial-style fit-outs.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Alexandria NSW' },
            { src: '/images/services/office.webp', alt: 'Warehouse and creative office cleaning Alexandria Inner South' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Alexandria NSW"
                serviceDescription="Professional commercial cleaning in Alexandria NSW, serving industrial warehouses, creative office conversions, showrooms and businesses in Sydney's premier inner industrial precinct."
                serviceUrl="/commercial-cleaning-alexandria"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
