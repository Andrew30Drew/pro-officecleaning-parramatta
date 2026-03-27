import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Smeaton Grange NSW | Industrial & Business Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Smeaton Grange NSW. Serving the booming SW Sydney industrial & commercial growth corridor. Fully insured. Free quote.',
    keywords: 'commercial cleaning Smeaton Grange, industrial cleaning Smeaton Grange, office cleaning Smeaton Grange NSW, warehouse cleaning Camden area, business cleaners SW Sydney',
    openGraph: {
        title: 'Commercial Cleaning Smeaton Grange NSW | Pro Clean Corp',
        description: 'Expert commercial cleaning in Smeaton Grange NSW. Industrial parks, warehouses & offices across the Camden growth corridor. Fully insured. Free site quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-smeaton-grange',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Smeaton Grange NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-smeaton-grange' },
};

export default function SmeatonGrangeCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Smeaton Grange NSW",
        description: "Smeaton Grange is one of south-west Sydney's fastest-growing industrial and commercial precincts, anchored by the Smeaton Grange Industrial Estate and the broader Camden-Narellan growth corridor. As major logistics operators, light manufacturers, tradesmen and service businesses continue to establish themselves in this dynamic area, the demand for professional, reliable commercial cleaning has never been greater. Pro Clean Corp brings the equipment, expertise and service culture required to keep Smeaton Grange's modern warehouses, distribution centres, offices and trade showrooms spotless and compliant. We understand the demands of high-growth industrial environments and tailor our programs to match the pace at which this exciting precinct continues to evolve.",
        benefits: [
            "Industrial warehouse and logistics centre cleaning for Smeaton Grange's fast-growing estate",
            "Office and trade showroom cleaning for businesses along the Camden Valley Way corridor",
            "High-pressure floor scrubbing and concrete cleaning for new and established warehouse spaces",
            "Construction phase and post-builders cleaning for new commercial developments in the area",
            "Amenities, lunchroom and end-of-shift cleaning for large industrial shift workforces",
            "Flexible scheduling including early starts and weekend cleans to suit 24/7 operations"
        ],
        process: [
            "Free on-site assessment of your Smeaton Grange facility and operational requirements",
            "Custom cleaning plan tailored to your industry sector, shift patterns and site layout",
            "Professional execution by trained, police-checked technicians with industrial-grade equipment",
            "Quality sign-off and ongoing account management to adapt to your evolving needs"
        ],
        whyChooseUs: [
            "15+ years serving south-west Sydney industrial and commercial clients in growth corridors",
            "$20M public liability insurance covering new developments and established industrial sites",
            "Police-checked, uniformed staff experienced in high-security industrial environments",
            "Eco-friendly cleaning products that meet industrial WHS and environmental requirements",
            "Scalable service programs that grow with your Smeaton Grange business",
            "100% satisfaction guarantee on every service we deliver"
        ],
        serviceAreas: [
            "Narellan", "Camden", "Elderslie", "Mount Annan", "Spring Farm", "Oran Park", "Gregory Hills", "Currans Hill"
        ],
        faqs: [
            {
                question: "Do you clean warehouses and distribution centres in the Smeaton Grange Industrial Estate?",
                answer: "Yes. Warehouse and logistics facility cleaning is a core specialty at Pro Clean Corp. We service distribution centres, fulfilment hubs, logistics depots and light industrial facilities throughout the Smeaton Grange estate. Our teams use commercial ride-on scrubbers, industrial vacuums and appropriate cleaning chemicals to maintain safe, clean working environments that meet WHS requirements."
            },
            {
                question: "Can you provide post-construction cleaning for new builds in Smeaton Grange?",
                answer: "Absolutely. We provide comprehensive post-builders and construction clean services for new commercial developments across the Smeaton Grange growth corridor. This includes removal of construction dust and debris, cleaning of all internal surfaces, windows and glass, sanitisation of amenities and full preparation of the space for handover or immediate occupation."
            },
            {
                question: "Do you clean trade showrooms and customer-facing offices in Smeaton Grange?",
                answer: "Yes. Many Smeaton Grange businesses combine industrial operations with customer-facing showrooms and professional offices. We provide tailored cleaning programs that address both the functional demands of the industrial space and the presentation standards required for client-facing areas, ensuring your entire premises reflects your brand professionally."
            },
            {
                question: "Can you manage cleaning for a large shift workforce at our Smeaton Grange facility?",
                answer: "Yes. We understand the demands of multi-shift industrial environments. We can schedule cleaning between shifts, at end-of-shift, or during planned downtime to ensure amenities, lunchrooms, toilets and common areas are consistently clean and hygienic for your entire workforce regardless of which shift they work."
            },
            {
                question: "How soon can Pro Clean Corp start cleaning our new Smeaton Grange premises?",
                answer: "We can typically conduct a site assessment within 24–48 hours of your enquiry and have services underway within the same week for new clients in Smeaton Grange. For post-construction or pre-opening cleans where speed is critical, we can prioritise your job and mobilise our team within one to two business days."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Smeaton Grange NSW" },
            { src: "/images/services/office.webp", alt: "Industrial warehouse cleaning Smeaton Grange NSW" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Smeaton Grange NSW"
                serviceDescription="Professional commercial cleaning services in Smeaton Grange NSW covering industrial warehouses, distribution centres, offices and trade showrooms across the Camden growth corridor."
                serviceUrl="/commercial-cleaning-smeaton-grange"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
