import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Cronulla NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Cronulla NSW. Specialists in beachside retail, hospitality venues & offices in the Sutherland Shire. $20M insured. Free quote today.',
    keywords: 'commercial cleaning Cronulla, office cleaning Cronulla, business cleaning Cronulla NSW',
    openGraph: {
        title: 'Commercial Cleaning Cronulla NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning in Cronulla NSW. Specialists in beachside retail, hospitality venues & offices in the Sutherland Shire. $20M insured. Free quote today.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-cronulla',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Cronulla NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-cronulla' },
};

export default function CronullaCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Cronulla NSW",
        description: "Cronulla's vibrant beachside strip attracts steady year-round foot traffic to its cafes, restaurants, retail boutiques and professional services. Pro Clean Corp understands the unique cleaning demands of coastal hospitality venues, where sand, salt air and high turnover require specialist care. Our team delivers thorough, reliable commercial cleaning across Cronulla's entire business district, keeping your premises fresh, hygienic and inviting for locals and visitors alike.",
        benefits: [
            "Specialist hospitality and beachside venue cleaning",
            "High-turnover cafe and restaurant sanitisation",
            "Retail shopfront and floor maintenance",
            "Salt and sand removal from entrances and surfaces",
            "Flexible early-morning and after-hours scheduling",
            "Eco-friendly products safe for coastal environments"
        ],
        process: [
            "Free Cronulla site assessment",
            "Custom cleaning plan for your premises type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Cronulla and Sutherland Shire",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Caringbah", "Miranda", "Woolooware", "Gymea", "Sutherland", "Kirrawee", "Taren Point", "Sans Souci"],
        faqs: [
            {
                question: "What commercial properties do you clean in Cronulla?",
                answer: "We clean beachside cafes, restaurants, retail shops, hotels, medical centres, professional offices and strata buildings throughout Cronulla and the surrounding Sutherland Shire."
            },
            {
                question: "How much does commercial cleaning cost in Cronulla?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Cronulla facility."
            },
            {
                question: "Do you offer after-hours cleaning in Cronulla?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available to minimise disruption to your Cronulla business operations."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Can you handle the sand and salt that comes with a beachside location?",
                answer: "Absolutely. We use specialised techniques and equipment to manage coastal dirt including sand removal from entrance areas, floor care suited to high foot-traffic and treatment for salt-affected surfaces."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Cronulla NSW" },
            { src: "/images/services/office.webp", alt: "Office cleaning Cronulla" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Cronulla NSW"
                serviceDescription="Professional commercial cleaning in Cronulla NSW. Specialists in beachside retail, hospitality venues & offices in the Sutherland Shire. $20M insured."
                serviceUrl="/commercial-cleaning-cronulla"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
