import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Horsley Park NSW | Industrial & Warehouse Cleaners | Pro Clean Corp',
    description: 'Industrial and commercial cleaning in Horsley Park NSW. Warehouses, factories, logistics hubs & offices in Western Sydney. Fully insured. Call Pro Clean Corp!',
    keywords: 'commercial cleaning Horsley Park, industrial cleaning Horsley Park, warehouse cleaning Horsley Park NSW, factory cleaning Horsley Park, business cleaning Western Sydney',
    openGraph: {
        title: 'Commercial Cleaning Horsley Park NSW | Pro Clean Corp',
        description: 'Expert industrial and commercial cleaning for Horsley Park warehouses, factories, and logistics facilities. Trusted across the Western Sydney industrial estate.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-horsley-park',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Horsley Park NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-horsley-park' },
};

export default function HorsleyParkCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Horsley Park NSW",
        description: "Horsley Park is home to one of Western Sydney's most established and densely occupied industrial estates, housing hundreds of warehouses, logistics operations, manufacturing facilities, and trade businesses that collectively represent a significant portion of Sydney's commercial and freight activity. Pro Clean Corp has been a trusted cleaning partner for Horsley Park businesses for many years, delivering industrial-grade cleaning solutions that meet the demanding hygiene, safety, and compliance requirements of this high-output environment. From large-scale warehouse floor scrubbing and high-bay dusting to amenities cleaning for shift workers and office suite maintenance for transport and logistics companies, we cover every cleaning need across the Horsley Park industrial estate. Our teams are trained in WHS-compliant industrial cleaning procedures and understand the operational realities of businesses that run multiple shifts and cannot afford downtime.",
        benefits: [
            "Large-scale warehouse floor scrubbing using industrial ride-on scrubber machines",
            "High-bay racking and beam dusting for fire compliance and workplace safety",
            "Amenities and lunchroom cleaning for industrial shift workers",
            "Office and administration area cleaning for logistics and transport companies",
            "Hardstand and loading dock pressure washing for heavy vehicle facilities",
            "Hazardous substance spill-safe cleaning protocols for manufacturing environments"
        ],
        process: [
            "Free Horsley Park site assessment covering all cleaning zones and safety requirements",
            "Custom industrial cleaning plan aligned with your shift schedules and WHS obligations",
            "Professional cleaning by trained technicians with industrial site experience and PPE",
            "Quality inspection and sign-off with documented cleaning records for compliance purposes"
        ],
        whyChooseUs: [
            "15+ years serving Horsley Park and Western Sydney industrial businesses",
            "Fully insured with $20M public liability coverage",
            "Police-checked, uniformed, and WHS-trained cleaning staff",
            "Industrial-grade equipment including ride-on scrubbers and pressure washers",
            "Flexible scheduling around shift rosters, including overnight and weekend cleans",
            "100% satisfaction guarantee on every clean"
        ],
        serviceAreas: ["Wetherill Park", "Smithfield", "Prospect", "Bossley Park", "Prairiewood", "Wakeley", "Fairfield", "Pemulwuy"],
        faqs: [
            {
                question: "Can you clean large warehouses and distribution centres across the Horsley Park industrial estate?",
                answer: "Yes. Large-scale warehouse cleaning is our primary speciality in Horsley Park. We use industrial ride-on scrubber dryers to clean expansive concrete floors efficiently, alongside high-reach equipment for racking and beam dusting, ensuring your facility meets both hygiene standards and fire compliance requirements."
            },
            {
                question: "Do you provide cleaning for manufacturing and factory facilities in Horsley Park?",
                answer: "Absolutely. We service a wide range of manufacturing and production facilities throughout the Horsley Park industrial estate. Our teams are trained in WHS-compliant procedures, understand the safety requirements of production environments, and carry appropriate PPE for each site."
            },
            {
                question: "Can you schedule industrial cleaning around night shifts and weekend operations in Horsley Park?",
                answer: "Yes. We routinely schedule cleaning during overnight windows, between shifts, and across weekends to avoid any disruption to production or logistics operations. We work closely with your site manager or facilities team to identify the optimal cleaning windows for your Horsley Park facility."
            },
            {
                question: "Do you clean amenities, change rooms, and lunchrooms at Horsley Park industrial sites?",
                answer: "Yes. We provide thorough amenities cleaning including toilets, showers, change rooms, lunchrooms, and break areas at industrial sites throughout Horsley Park. Maintaining clean, hygienic facilities for shift workers is essential for staff wellbeing and WHS compliance."
            },
            {
                question: "Can you pressure wash loading docks and hardstand areas at Horsley Park warehouses?",
                answer: "Definitely. We offer high-pressure washing of loading docks, hardstands, truck bays, and external concrete areas as a scheduled service for Horsley Park warehouse operators. This is particularly effective for removing oil, grease, and heavy grime from high-traffic vehicle access zones."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Horsley Park NSW industrial estate" },
            { src: "/images/services/office.webp", alt: "Warehouse and office cleaning Horsley Park Western Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Horsley Park NSW"
                serviceDescription="Industrial and commercial cleaning for warehouses, factories, and logistics facilities across the Horsley Park industrial estate in Western Sydney."
                serviceUrl="/commercial-cleaning-horsley-park"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
