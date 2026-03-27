import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Kingsgrove NSW | Industrial & Retail Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Kingsgrove NSW. Industrial units, retail shops & offices in South Sydney. Fully insured, police-checked. Call Pro Clean Corp!',
    keywords: 'commercial cleaning Kingsgrove, office cleaning Kingsgrove, industrial cleaning Kingsgrove NSW, retail cleaning Kingsgrove, business cleaning South Sydney',
    openGraph: {
        title: 'Commercial Cleaning Kingsgrove NSW | Pro Clean Corp',
        description: 'Expert commercial and industrial cleaning for Kingsgrove warehouses, retail businesses, and offices in South Sydney. Trusted, insured, and locally experienced.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-kingsgrove',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Kingsgrove NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-kingsgrove' },
};

export default function KingsgroveCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Kingsgrove NSW",
        description: "Kingsgrove is one of South Sydney's most productive commercial suburbs, characterised by a practical and diverse mix of light-industrial units, trade businesses, retail showrooms, auto service centres, and professional offices clustered along Kingsgrove Road, the Princes Highway, and the commercial zones flanking the Illawarra rail line. Pro Clean Corp has extensive experience across the full spectrum of Kingsgrove commercial properties, from small retail shopfronts and trade workshops that need periodic maintenance cleans through to larger light-industrial facilities requiring scheduled floor scrubbing, amenities cleaning, and compliance-ready documentation. Our South Sydney cleaning teams understand the working-class, output-focused nature of Kingsgrove's commercial environment and deliver no-fuss, reliable cleaning that gets done right every time — without disrupting your operations or your bottom line.",
        benefits: [
            "Light-industrial unit and trade workshop cleaning aligned with WHS standards",
            "Retail showroom and shop cleaning maintaining customer-facing presentation",
            "Auto dealership and service centre cleaning including workshop floors and customer areas",
            "Office and professional suite cleaning for Kingsgrove commercial buildings",
            "Amenities and lunchroom cleaning for trade and light-industrial businesses",
            "Periodic deep-clean and strip-and-seal programs for vinyl and hard floors"
        ],
        process: [
            "Free Kingsgrove site assessment reviewing your facility layout and cleaning requirements",
            "Custom cleaning plan for your Kingsgrove business, matched to your operating schedule",
            "Professional cleaning by police-checked, uniformed staff experienced in South Sydney",
            "Quality inspection and sign-off with responsive account management and clear reporting"
        ],
        whyChooseUs: [
            "15+ years serving Kingsgrove and South Sydney businesses",
            "Fully insured with $20M public liability coverage",
            "Police-checked, uniformed, and professionally trained cleaning staff",
            "Commercial-grade eco-friendly cleaning products and industrial equipment",
            "Flexible scheduling including early morning, overnight, and weekend cleans",
            "100% satisfaction guarantee on every clean"
        ],
        serviceAreas: ["Bexley", "Rockdale", "Hurstville", "Beverly Hills", "Penshurst", "Wiley Park", "Riverwood", "Bardwell Park"],
        faqs: [
            {
                question: "Do you clean light-industrial units and trade workshops in Kingsgrove?",
                answer: "Yes. Light-industrial and trade cleaning is a core part of our Kingsgrove service. We clean workshop floors, trade storage areas, amenities, and offices using industrial equipment appropriate for the surfaces and grime levels typical of manufacturing and trade environments."
            },
            {
                question: "Can you clean auto dealerships and service centres in Kingsgrove?",
                answer: "Absolutely. We have specialist experience cleaning automotive businesses throughout South Sydney, including showroom floors, customer waiting areas, service writer offices, staff amenities, and workshop zones. We use appropriate products for oil, grease, and rubber residue removal."
            },
            {
                question: "Do you provide retail shopfront and showroom cleaning in Kingsgrove?",
                answer: "Yes. We clean retail shops, building material showrooms, and commercial showrooms throughout Kingsgrove. Services include floor care, glass and display cleaning, counter sanitisation, fitting area cleaning, and external entry cleaning to maintain a welcoming presentation for your customers."
            },
            {
                question: "Can you handle hard-floor strip and seal programs for Kingsgrove commercial premises?",
                answer: "Definitely. We offer complete hard-floor maintenance including vinyl strip and seal, machine scrubbing, polishing, and grout cleaning. These services restore the appearance of worn commercial floors throughout Kingsgrove's retail and industrial premises and extend the life of the floor finish significantly."
            },
            {
                question: "How do you handle cleaning for Kingsgrove businesses that operate long hours or shifts?",
                answer: "We schedule cleaning during the least disruptive window for your operation — whether that is before opening, after closing, between shifts, or over the weekend. We work with your facilities or operations manager to establish a routine that is completely transparent and minimises any impact on your daily business."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Kingsgrove NSW" },
            { src: "/images/services/office.webp", alt: "Industrial and retail cleaning Kingsgrove South Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Kingsgrove NSW"
                serviceDescription="Professional commercial and industrial cleaning for retail shops, warehouses, trade businesses, and offices in Kingsgrove and South Sydney."
                serviceUrl="/commercial-cleaning-kingsgrove"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
