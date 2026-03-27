import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Maroubra NSW | Eastern Suburbs Business Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Maroubra NSW. Beachside retail, medical centres & offices in the Eastern Suburbs. Fully insured, police-checked. Call today!',
    keywords: 'commercial cleaning Maroubra, office cleaning Maroubra, medical cleaning Maroubra NSW, retail cleaning Maroubra, business cleaning Eastern Suburbs',
    openGraph: {
        title: 'Commercial Cleaning Maroubra NSW | Pro Clean Corp',
        description: 'Expert commercial cleaning for Maroubra retail, medical centres, and beachside businesses in Sydney\'s Eastern Suburbs. Trusted, insured, and locally experienced.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-maroubra',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Maroubra NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-maroubra' },
};

export default function MaroubraCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Maroubra NSW",
        description: "Maroubra is a vibrant Eastern Suburbs suburb where a thriving beachside lifestyle meets a surprisingly diverse commercial landscape spanning the busy Maroubra Junction shopping precinct, Anzac Parade retail strip, a cluster of medical and allied health practices serving the southern Eastern Suburbs community, and a range of professional offices. The suburb's dual identity — residential beach community and busy commercial node — means its businesses serve a high volume of local residents year-round, with seasonal spikes in visitor traffic during summer and events at Maroubra Beach. Pro Clean Corp provides reliable, high-quality commercial cleaning across Maroubra's full business mix, from junction retail shops and health clinics through to gyms, childcare centres, and professional offices that keep the suburb's busy community well-served. Our Eastern Suburbs teams deliver consistent results on flexible schedules that work around Maroubra's active, community-focused business rhythm.",
        benefits: [
            "Maroubra Junction retail and shopping precinct cleaning for high-traffic environments",
            "Medical and allied health practice cleaning with certified infection control protocols",
            "Gym and fitness centre cleaning using industry-appropriate sanitisation products",
            "Childcare and community centre cleaning using child-safe, non-toxic products",
            "Professional office and real estate cleaning along Anzac Parade and Maroubra Road",
            "Beachside business cleaning with awareness of sand, salt, and coastal grime management"
        ],
        process: [
            "Free Maroubra site assessment and business-specific requirements review",
            "Custom cleaning plan tailored to your Maroubra business type, hours, and hygiene standards",
            "Professional cleaning by police-checked, uniformed technicians with Eastern Suburbs experience",
            "Quality inspection and sign-off with a dedicated Maroubra account manager"
        ],
        whyChooseUs: [
            "15+ years serving Maroubra and Eastern Suburbs businesses",
            "Fully insured with $20M public liability coverage",
            "Police-checked, uniformed, and professionally trained cleaning staff",
            "Commercial-grade eco-friendly cleaning products",
            "Flexible day, evening, and weekend scheduling",
            "100% satisfaction guarantee on every clean"
        ],
        serviceAreas: ["Randwick", "Kensington", "Coogee", "Pagewood", "Matraville", "Kingsford", "Botany", "Daceyville"],
        faqs: [
            {
                question: "Do you clean retail shops and businesses at Maroubra Junction?",
                answer: "Yes. Maroubra Junction is one of our active service zones in the Eastern Suburbs. We provide daily retail cleaning covering floors, glass, counters, fitting rooms, and waste management for shops and businesses across the Junction precinct, scheduled to avoid disrupting trading hours."
            },
            {
                question: "Can you clean gyms and fitness centres in Maroubra?",
                answer: "Absolutely. Gym and fitness centre cleaning is a specialist service we offer throughout Maroubra and the Eastern Suburbs. We use gym-appropriate sanitisation products for equipment, mats, change rooms, showers, and communal areas — meeting the hygiene standards expected by fitness facility operators and their members."
            },
            {
                question: "Do you provide medical cleaning for GP clinics and specialists in Maroubra?",
                answer: "Yes. We clean medical centres, GP practices, specialist suites, and physiotherapy clinics throughout Maroubra using TGA-listed hospital-grade disinfectants and documented infection control procedures. Our medical cleaning protocols are designed to satisfy the requirements of RACGP and AHPRA accreditation frameworks."
            },
            {
                question: "How do you manage sand and coastal grime for beachside businesses near Maroubra Beach?",
                answer: "Coastal cleaning presents specific challenges that our Maroubra team understands well. We use industrial vacuuming equipment with HEPA filtration for sand removal, salt-resistant mopping techniques for hard floors, and appropriate products for the increased humidity and grime loads common in beachside commercial environments."
            },
            {
                question: "Can you clean childcare centres and community facilities in Maroubra?",
                answer: "Yes. We provide specialist childcare and community facility cleaning throughout Maroubra using only child-safe, non-toxic, and fragrance-free products that meet NSW Health and ACECQA requirements. Our cleaning programs cover indoor play areas, nappy change facilities, kitchens, bathrooms, and outdoor play surfaces."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Maroubra NSW" },
            { src: "/images/services/office.webp", alt: "Retail and medical cleaning Maroubra Eastern Suburbs" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Maroubra NSW"
                serviceDescription="Professional commercial cleaning for retail businesses, medical centres, gyms, and offices in Maroubra and surrounding Eastern Suburbs."
                serviceUrl="/commercial-cleaning-maroubra"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
