import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Villawood NSW | Pro Clean Corp',
    description: 'Commercial & industrial cleaning in Villawood NSW. Trusted by Western Sydney industrial businesses, warehouses & commercial premises. $20M insured. Free quote.',
    keywords: 'commercial cleaning Villawood, industrial cleaning Villawood, business cleaning Villawood NSW',
    openGraph: {
        title: 'Commercial Cleaning Villawood NSW | Pro Clean Corp',
        description: 'Commercial & industrial cleaning in Villawood NSW. Trusted by Western Sydney industrial businesses, warehouses & commercial premises. $20M insured. Free quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-villawood',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Villawood NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-villawood' },
};

export default function VillawoodCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Villawood NSW",
        description: "Villawood is an established Western Sydney industrial suburb with a strong concentration of warehouses, manufacturing businesses, trade suppliers and commercial operations conveniently located between Bankstown and Parramatta. Pro Clean Corp delivers specialist commercial and industrial cleaning services for Villawood's working businesses — from regular factory and warehouse floor maintenance to comprehensive site office cleaning and amenities management. Our team is experienced in working safely and efficiently around active industrial operations.",
        benefits: [
            "Industrial warehouse and factory floor cleaning",
            "Trade supplier and commercial unit maintenance",
            "Site office and administration area cleaning",
            "Amenities, bathroom and lunchroom hygiene management",
            "Scheduled cleaning to fit industrial shift patterns",
            "WHS-compliant industrial hygiene procedures"
        ],
        process: [
            "Free Villawood site assessment",
            "Custom cleaning plan for your facility type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Villawood and Western Sydney",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Bankstown", "Carramar", "Sefton", "Chester Hill", "Leightonfield", "Berala", "Yagoona", "Regents Park"],
        faqs: [
            {
                question: "What commercial properties do you clean in Villawood?",
                answer: "We clean industrial warehouses, manufacturing units, trade yards, commercial workshops, site offices, amenities blocks and mixed industrial-commercial buildings throughout Villawood and the Bankstown LGA."
            },
            {
                question: "How much does commercial cleaning cost in Villawood?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Villawood facility."
            },
            {
                question: "Do you offer after-hours cleaning in Villawood?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available — including between-shift cleaning for Villawood's manufacturing and industrial businesses."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Can you handle specialised industrial floor cleaning in Villawood?",
                answer: "Yes, we have the equipment and expertise to handle industrial floor cleaning in Villawood, including concrete floor scrubbing, degreasing, anti-slip treatment and high-pressure cleaning of loading areas and workshops."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Villawood NSW" },
            { src: "/images/services/office.webp", alt: "Industrial cleaning Villawood" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Villawood NSW"
                serviceDescription="Commercial & industrial cleaning in Villawood NSW. Trusted by Western Sydney industrial businesses, warehouses & commercial premises. $20M insured."
                serviceUrl="/commercial-cleaning-villawood"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
