import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Carpet Cleaning Services | Pro Clean Corp Sydney',
    description: 'Pro Clean Corp delivers commercial carpet cleaning across Sydney. Hot water extraction, encapsulation, stain removal, odour treatment, Scotchgard protection & rapid dry service.',
    keywords: 'commercial carpet cleaning sydney, carpet cleaning services sydney, hot water extraction, encapsulation carpet cleaning, stain removal carpet, scotchgard carpet protection, rapid dry carpet, office carpet cleaning, retail carpet cleaning, strata carpet cleaning',
    openGraph: {
        title: 'Commercial Carpet Cleaning Services | Pro Clean Corp Sydney',
        description: 'Professional commercial carpet cleaning in Sydney using hot water extraction, encapsulation, stain removal, odour treatment, Scotchgard protection, and rapid dry technology.',
        url: 'https://www.procleancorp.com.au/services/carpet-cleaning',
        type: 'website',
        images: [{ url: '/images/services/carpet.webp', alt: 'Commercial carpet cleaning services Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/services/carpet-cleaning' },
};

export default function CarpetCleaningServicesPage() {
    const serviceInfo = {
        title: "Commercial Carpet Cleaning Services",
        description: "Commercial carpets take a daily beating from foot traffic, spills, and airborne soiling that steadily degrades appearance and indoor air quality. Pro Clean Corp provides professional commercial carpet cleaning services across Sydney for offices, retail stores, hotels, strata buildings, and aged care facilities. Using industry-leading hot water extraction and low-moisture encapsulation technology, our certified technicians remove deep-embedded dirt, allergens, and bacteria while minimising drying time to keep your business operating.",
        benefits: [
            "Hot Water Extraction: Deep restorative steam cleaning recommended by carpet manufacturers for periodic deep cleans.",
            "Encapsulation: Low-moisture maintenance cleaning ideal for occupied offices requiring minimum drying time.",
            "Stain Removal: Targeted pre-treatment for coffee, wine, ink, food, blood, and other commercial stains.",
            "Odour Treatment: Deodorising treatment to neutralise biological and environmental odours from carpet fibres.",
            "Scotchgard Protection: Fluorochemical barrier applied post-clean to repel liquid spills and extend time between cleans.",
            "Rapid Dry: High-powered extraction technology — most commercial carpets ready for traffic within 2-4 hours.",
            "Office/Retail/Strata: Specialist experience across all major commercial carpet types and environments."
        ],
        process: [
            "Carpet inspection to identify fibre type, soiling level, and stain locations requiring pre-treatment.",
            "Pre-treatment spray applied to high-traffic lanes, stains, and heavily soiled areas.",
            "Hot water extraction or encapsulation cleaning tailored to the carpet type and client's schedule.",
            "Post-clean pile grooming and optional Scotchgard protection application for lasting results."
        ],
        whyChooseUs: [
            "15+ years experience",
            "$20M public liability",
            "Police-checked staff",
            "Eco-friendly products",
            "7-day flexible scheduling",
            "100% satisfaction guarantee"
        ],
        serviceAreas: [
            "Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith",
            "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"
        ],
        faqs: [
            { question: "How long does commercial carpet cleaning take to dry?", answer: "With our high-powered extraction equipment, most commercial carpets are dry within 2-4 hours. Low-moisture encapsulation cleaning can leave carpets ready for traffic within 1-2 hours." },
            { question: "Can you remove old coffee stains?", answer: "Yes, we use specialist pre-treatment solutions effective on coffee, tea, wine, and other common commercial stains. Results vary depending on how long the stain has been set in the fibre." },
            { question: "Do you apply carpet protector after cleaning?", answer: "Yes, we offer Scotchgard carpet protection application immediately after cleaning. This creates a barrier that repels liquid spills and dry soiling, extending the life of your clean carpet." },
            { question: "How often should office carpet be professionally cleaned?", answer: "We recommend professional cleaning every 6-12 months for most commercial offices. High-traffic zones such as reception, corridors, and meeting rooms may benefit from quarterly encapsulation maintenance." },
            { question: "Do you clean carpet after hours to avoid disruption?", answer: "Yes, we routinely schedule commercial carpet cleaning after hours or on weekends so your business is not disrupted and carpets are dry and ready by the next working day." }
        ],
        images: [
            { src: "/images/services/carpet.webp", alt: "Commercial carpet cleaning services Sydney" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Carpet Cleaning Services"
                serviceDescription="Professional commercial carpet cleaning across Sydney using hot water extraction, encapsulation, stain removal, odour treatment, Scotchgard protection, and rapid dry technology for offices, retail, and strata."
                serviceUrl="/services/carpet-cleaning"
                serviceType="Carpet Cleaning Services"
                price="$$"
                additionalServices={["Hot Water Extraction", "Encapsulation Cleaning", "Stain Removal", "Scotchgard Protection", "Upholstery Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
