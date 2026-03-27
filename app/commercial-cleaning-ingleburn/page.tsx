import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Ingleburn NSW | Industrial & Office Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Ingleburn NSW. Industrial estates, offices & retail in South West Sydney. Insured, police-checked, flexible. Call us today!',
    keywords: 'commercial cleaning Ingleburn, office cleaning Ingleburn, industrial cleaning Ingleburn NSW, warehouse cleaning Ingleburn, business cleaning South West Sydney',
    openGraph: {
        title: 'Commercial Cleaning Ingleburn NSW | Pro Clean Corp',
        description: 'Expert commercial and industrial cleaning for Ingleburn offices, warehouses, and retail businesses in South West Sydney. Trusted local cleaners, fully insured.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-ingleburn',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Ingleburn NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-ingleburn' },
};

export default function IngleburnCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Ingleburn NSW",
        description: "Ingleburn is a well-established commercial and industrial hub in South West Sydney, home to a diverse mix of manufacturing facilities, logistics operations, trade businesses, and commercial offices positioned conveniently near the Hume Highway and South Western Motorway. Pro Clean Corp has long served the Ingleburn business community, providing reliable commercial cleaning services that match the practical, no-nonsense ethos of this productive suburb. From daily office cleaning for small-to-medium businesses in Ingleburn's commercial streets to periodic deep-cleaning programs for warehouses and light-industrial units, we deliver consistent, high-quality results on schedules that work around your operations. Our Ingleburn teams are experienced across all commercial property types and carry the equipment, products, and expertise to handle everything from routine maintenance cleaning to comprehensive facility restoration.",
        benefits: [
            "Industrial and warehouse cleaning with ride-on scrubbers and high-reach equipment",
            "Daily office and commercial suite cleaning for Ingleburn business districts",
            "Retail shop and showroom cleaning maintaining customer-facing presentation standards",
            "Amenities and common area cleaning for multi-tenanted Ingleburn commercial buildings",
            "Pressure washing of loading docks, yards, and external concrete areas",
            "Documented cleaning records supporting WHS and insurance compliance requirements"
        ],
        process: [
            "Free Ingleburn site assessment reviewing your full cleaning scope and requirements",
            "Custom cleaning plan for your Ingleburn business aligned with shift schedules and operations",
            "Professional cleaning by police-checked, uniformed staff with industrial site experience",
            "Quality inspection and sign-off with a dedicated account manager for ongoing support"
        ],
        whyChooseUs: [
            "15+ years serving Ingleburn and South West Sydney businesses",
            "Fully insured with $20M public liability coverage",
            "Police-checked, uniformed, and professionally trained cleaning staff",
            "Commercial-grade eco-friendly cleaning products",
            "Flexible day, evening, and weekend scheduling around your operations",
            "100% satisfaction guarantee on every clean"
        ],
        serviceAreas: ["Minto", "Campbelltown", "Leumeah", "Macquarie Fields", "Glenfield", "Prestons", "Casula", "Liverpool"],
        faqs: [
            {
                question: "Do you service industrial and manufacturing facilities in Ingleburn?",
                answer: "Yes. Industrial cleaning is a core part of our service offering in Ingleburn. We clean manufacturing plants, light-industrial units, and logistics facilities using appropriate equipment and WHS-compliant procedures, including PPE for sites with specific safety requirements."
            },
            {
                question: "Can you provide daily office cleaning for small businesses in Ingleburn?",
                answer: "Absolutely. We offer daily, weekly, and fortnightly office cleaning programs tailored to Ingleburn's small and medium businesses. Services include vacuuming, surface sanitisation, bathroom cleaning, kitchen maintenance, and waste removal on a schedule that suits your team."
            },
            {
                question: "Do you clean retail shops and showrooms in Ingleburn?",
                answer: "Yes. We provide retail and showroom cleaning throughout Ingleburn, covering floor care, glass and display cleaning, fitting room maintenance, and front-of-house presentation work. We schedule around trading hours to minimise disruption to your customers and staff."
            },
            {
                question: "Can you handle periodic deep cleans for Ingleburn warehouses and storage facilities?",
                answer: "Definitely. We offer one-off and periodic deep-cleaning programs for warehouses and storage facilities in Ingleburn, including full floor scrubbing, racking and shelving dusting, amenities deep-cleans, and high-pressure washing of loading and unloading areas."
            },
            {
                question: "How do I get a quote for commercial cleaning in Ingleburn?",
                answer: "Contact Pro Clean Corp and we will arrange a free on-site assessment at your Ingleburn premises. Following the walk-through, we provide a detailed, itemised cleaning proposal within 24 hours with transparent pricing and no hidden charges."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Ingleburn NSW" },
            { src: "/images/services/office.webp", alt: "Office and industrial cleaning Ingleburn South West Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Ingleburn NSW"
                serviceDescription="Professional commercial and industrial cleaning for offices, warehouses, and retail businesses in Ingleburn and surrounding South West Sydney suburbs."
                serviceUrl="/commercial-cleaning-ingleburn"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
