import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Carpet Cleaning Sydney | Office & Strata Carpet Cleaning | Pro Clean Corp',
    description: 'Pro Clean Corp delivers professional commercial carpet cleaning across Sydney. Hot water extraction, encapsulation, stain & odour treatment, Scotchgard protection & rapid drying.',
    keywords: 'commercial carpet cleaning sydney, office carpet cleaning sydney, strata carpet cleaning, hot water extraction sydney, encapsulation carpet cleaning, stain removal carpet sydney, scotchgard carpet protection, rapid dry carpet cleaning, hotel carpet cleaning, retail carpet cleaning',
    openGraph: {
        title: 'Commercial Carpet Cleaning Sydney | Office & Strata Carpet Cleaning | Pro Clean Corp',
        description: 'Professional commercial carpet cleaning across Sydney. Hot water extraction, encapsulation, stain and odour treatment, Scotchgard protection, and rapid drying.',
        url: 'https://www.procleancorp.com.au/commercial-carpet-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/carpet.webp', alt: 'Commercial carpet cleaning Sydney office strata' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-carpet-cleaning-sydney' },
};

export default function CommercialCarpetCleaningSydneyPage() {
    const serviceInfo = {
        title: "Commercial Carpet Cleaning Sydney",
        description: "Commercial carpets endure high foot traffic, spills, and daily soiling that degrades appearance, indoor air quality, and fibre longevity. Pro Clean Corp provides professional commercial carpet cleaning services across Sydney using hot water extraction, encapsulation, and targeted stain and odour treatment to restore your carpets to a presentation standard that reflects your business. We service offices, hotels, strata buildings, retail floors, and aged care facilities with minimal disruption and rapid drying technology.",
        benefits: [
            "Hot Water Extraction: Deep restorative steam cleaning that removes embedded dirt, allergens, and bacteria.",
            "Encapsulation Cleaning: Low-moisture maintenance cleaning for occupied offices requiring fast turnaround.",
            "Stain and Odour Treatment: Targeted pre-treatment for coffee, wine, ink, food, and pet stains.",
            "Scotchgard Protection: Carpet protector application to repel future spills and extend time between cleans.",
            "Rapid Drying: High-powered extraction technology minimises drying time for minimal business disruption.",
            "Office/Hotel/Strata/Retail Carpets: Experience across all commercial carpet types and fibre specifications."
        ],
        process: [
            "Carpet inspection to identify fibre type, soiling level, stain locations, and any damaged areas.",
            "Pre-treatment spray applied to high-traffic lanes, stains, and heavily soiled sections.",
            "Hot water extraction or encapsulation cleaning based on carpet type and client requirements.",
            "Post-clean grooming of carpet pile and optional Scotchgard protection application."
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
            { question: "How long does commercial carpet cleaning take to dry?", answer: "With our high-powered extraction equipment, most commercial carpets are dry within 2-4 hours. Low-moisture encapsulation cleaning can leave carpets ready for traffic within 1 hour." },
            { question: "Can you remove coffee stains from office carpet?", answer: "Yes, we use specialist stain removal pre-treatments that are highly effective on coffee, tea, wine, and other common office spills. Results depend on how long the stain has been set." },
            { question: "Is hot water extraction better than encapsulation?", answer: "Hot water extraction provides a deeper, more restorative clean and is recommended for periodic deep cleaning. Encapsulation is ideal for regular maintenance cleans in occupied offices due to faster drying times." },
            { question: "Do you apply Scotchgard or carpet protector?", answer: "Yes, we offer Scotchgard carpet protection application after cleaning. This creates a barrier that repels liquid spills and dry soiling, significantly extending the time between professional cleans." },
            { question: "How often should commercial carpets be cleaned?", answer: "Most commercial offices benefit from professional cleaning every 6-12 months. High-traffic areas such as reception, corridors, and meeting rooms may require quarterly maintenance cleaning." }
        ],
        images: [
            { src: "/images/services/carpet.webp", alt: "Commercial carpet cleaning Sydney office strata" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Carpet Cleaning Sydney"
                serviceDescription="Professional commercial carpet cleaning across Sydney using hot water extraction, encapsulation, stain and odour treatment, Scotchgard protection, and rapid drying technology for offices, hotels, strata, and retail."
                serviceUrl="/commercial-carpet-cleaning-sydney"
                serviceType="Commercial Carpet Cleaning"
                price="$$"
                additionalServices={["Hot Water Extraction", "Encapsulation Cleaning", "Stain Removal", "Scotchgard Protection", "Upholstery Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
