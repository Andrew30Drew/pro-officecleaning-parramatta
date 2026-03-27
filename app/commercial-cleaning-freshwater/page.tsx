import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Freshwater NSW | Pro Clean Corp',
    description: 'Commercial cleaning in Freshwater NSW. Trusted by Northern Beaches boutique cafes, retail shops & professional businesses. Police-checked, $20M insured. Free quote.',
    keywords: 'commercial cleaning Freshwater, office cleaning Freshwater, business cleaning Freshwater NSW',
    openGraph: {
        title: 'Commercial Cleaning Freshwater NSW | Pro Clean Corp',
        description: 'Commercial cleaning in Freshwater NSW. Trusted by Northern Beaches boutique cafes, retail shops & professional businesses. Police-checked, $20M insured. Free quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-freshwater',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Freshwater NSW' }]
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-freshwater' },
};

export default function FreshwaterCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Freshwater NSW",
        description: "Freshwater is a beloved Northern Beaches village famous for its boutique cafe scene, independent retailers and relaxed coastal lifestyle that attracts a loyal local community and weekend visitors alike. Pro Clean Corp understands that Freshwater's small businesses thrive on atmosphere and presentation — our commercial cleaning services are designed to keep your Freshwater cafe, shop or office looking immaculate so you can focus on serving your customers. We offer flexible, reliable cleaning that works around your business hours.",
        benefits: [
            "Boutique cafe and hospitality venue cleaning",
            "Independent retail shopfront and floor maintenance",
            "Professional office and allied health suite cleaning",
            "Coastal dirt and sand management at entrances",
            "Early-morning scheduling before the morning rush",
            "Eco-friendly products suited to relaxed coastal businesses"
        ],
        process: [
            "Free Freshwater site assessment",
            "Custom cleaning plan for your premises type",
            "Professional execution by trained uniformed staff",
            "Quality sign-off and client satisfaction check"
        ],
        whyChooseUs: [
            "15+ years serving Freshwater and the Northern Beaches",
            "$20M public liability insurance",
            "Police-checked uniformed staff",
            "Eco-friendly commercial products",
            "Flexible scheduling available",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Manly", "Brookvale", "Curl Curl", "Balgowlah", "Dee Why", "Fairlight", "Harbord", "Queenscliff"],
        faqs: [
            {
                question: "What commercial properties do you clean in Freshwater?",
                answer: "We clean cafes, restaurants, retail boutiques, health and beauty studios, professional offices, medical practices and strata buildings throughout Freshwater and the surrounding Northern Beaches suburbs."
            },
            {
                question: "How much does commercial cleaning cost in Freshwater?",
                answer: "Rates typically range from $35–$60/hr. We provide free quotes tailored to your Freshwater facility."
            },
            {
                question: "Do you offer after-hours cleaning in Freshwater?",
                answer: "Yes, flexible after-hours, early morning and weekend scheduling available — perfect for Freshwater's busy cafe and retail businesses."
            },
            {
                question: "Are your cleaners insured and police checked?",
                answer: "Yes, all staff have $20M public liability insurance and are police background checked."
            },
            {
                question: "Can you clean a small boutique business in Freshwater on a weekly schedule?",
                answer: "Absolutely. We offer weekly, fortnightly and monthly cleaning contracts suited to smaller Freshwater boutiques and cafes, providing consistent, reliable service with no lock-in contract required."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Freshwater NSW" },
            { src: "/images/services/office.webp", alt: "Office cleaning Freshwater" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Freshwater NSW"
                serviceDescription="Commercial cleaning in Freshwater NSW. Trusted by Northern Beaches boutique cafes, retail shops & professional businesses. Police-checked, $20M insured."
                serviceUrl="/commercial-cleaning-freshwater"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
