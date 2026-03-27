import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Riverwood NSW | Professional Business Cleaners | Pro Clean Corp',
    description: 'Top-rated commercial cleaning in Riverwood NSW. Offices, retail & mixed commercial properties across South Sydney cleaned by Pro Clean Corp. Free quote today.',
    keywords: 'commercial cleaning Riverwood, office cleaning Riverwood, business cleaning Riverwood NSW, retail cleaning Riverwood, commercial cleaners Riverwood',
    openGraph: {
        title: 'Commercial Cleaning Riverwood NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning in Riverwood NSW. Office, retail & mixed commercial specialists. Police-checked staff, $20M insured. Book a free quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-riverwood',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Riverwood NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-riverwood' },
};

export default function RiverwoodCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Riverwood NSW",
        description: "Pro Clean Corp provides premium commercial cleaning services to the mixed-use business community of Riverwood in south Sydney. Situated between the St George and Canterbury commercial corridors, Riverwood supports a broad mix of neighbourhood retail, professional offices, medical practices, and light commercial operations along Belmore Road and the surrounding streets. Our experienced cleaning teams bring the right tools, techniques and products to each property type, ensuring every Riverwood business presents its best face to customers, staff and visitors. We pride ourselves on reliability, attention to detail, and cleaning outcomes that genuinely protect your brand and your premises.",
        benefits: [
            "Tailored office cleaning programs for Riverwood professional suites and medical practices",
            "Retail cleaning services that keep shopfronts, floors and fitting rooms immaculate",
            "Thorough sanitisation of high-touch surfaces including counters, door handles and shared amenities",
            "Window and glass cleaning to maximise natural light and street-front appeal",
            "Flexible after-hours cleaning schedules that never interrupt your trading day",
            "Eco-conscious cleaning products safe for customers, staff and neighbouring residential properties"
        ],
        process: [
            "Free on-site consultation at your Riverwood premises to understand your cleaning priorities",
            "Bespoke cleaning schedule and service plan developed around your business hours",
            "Delivery of services by trained, police-checked and uniformed cleaning professionals",
            "Regular quality audits and open communication to ensure ongoing satisfaction"
        ],
        whyChooseUs: [
            "15+ years serving Riverwood and the wider St George and Canterbury region",
            "$20M public liability insurance providing complete protection for your premises",
            "Police-checked, uniformed staff with verified references and industry training",
            "Eco-friendly, biodegradable cleaning solutions gentle on surfaces and the environment",
            "Flexible scheduling options including daily, weekly and after-hours services",
            "100% satisfaction guarantee with prompt free returns if any issue arises"
        ],
        serviceAreas: [
            "Peakhurst", "Hurstville", "Narwee", "Penshurst", "Mortdale", "Beverly Hills", "Kingsgrove", "Padstow"
        ],
        faqs: [
            {
                question: "What commercial cleaning services do you offer in Riverwood?",
                answer: "Pro Clean Corp offers a comprehensive range of commercial cleaning services in Riverwood including regular office cleaning, retail shop cleaning, medical and healthcare facility cleaning, strata common area cleaning, window cleaning, carpet cleaning, and end-of-lease cleaning. We customise every program to the specific needs of your business and premises."
            },
            {
                question: "Can you accommodate after-hours cleaning at our Riverwood business?",
                answer: "Absolutely. We understand that many Riverwood businesses cannot afford disruption to their trading hours or client-facing operations. We offer early morning, evening and weekend cleaning slots to ensure your premises are spotless before opening each day without any impact on your team or customers."
            },
            {
                question: "How do you ensure consistent cleaning quality in Riverwood?",
                answer: "We use a combination of detailed cleaning checklists, regular supervisor inspections and direct client feedback to maintain consistently high standards. Our Riverwood clients are assigned a dedicated account manager who is the single point of contact for scheduling, feedback and any service adjustments needed."
            },
            {
                question: "Are Pro Clean Corp's products safe for use near food in our Riverwood cafe or restaurant?",
                answer: "Yes. We select TGA-listed, food-safe and allergen-aware cleaning products for use in any food preparation or service area. Our teams are trained in the correct dilution and application of these products to ensure full effectiveness while meeting all NSW Food Authority hygiene requirements."
            },
            {
                question: "Do you offer one-off commercial cleaning in Riverwood as well as regular contracts?",
                answer: "Yes. We serve both ongoing contract clients and one-off commercial cleaning needs in Riverwood. Whether you need a spring clean, a post-renovation clean, an end-of-lease clean, or a deep sanitisation following an illness event, our team can mobilise quickly and deliver outstanding results."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Riverwood NSW" },
            { src: "/images/services/office.webp", alt: "Office cleaning Riverwood NSW" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Riverwood NSW"
                serviceDescription="Professional commercial cleaning services in Riverwood NSW covering offices, retail shops, medical practices and mixed commercial properties across south Sydney."
                serviceUrl="/commercial-cleaning-riverwood"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
