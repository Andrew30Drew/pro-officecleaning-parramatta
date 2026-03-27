import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Car Showroom & Showroom Cleaning Sydney | ProCleanCorp',
    description: 'Car showroom and dealership cleaning across Sydney. Floor polishing, glass buffing, vehicle display areas, service bays. Daily standard for car dealerships and retail showrooms. Free quote.',
    keywords: 'car showroom cleaning sydney, showroom cleaning sydney, car dealership cleaning sydney, auto dealership cleaning, display showroom cleaning, glass polishing showroom, floor buffing showroom',
    openGraph: {
        title: 'Showroom Cleaning Sydney | Retail & Display Showroom Cleaning | Pro Clean Corp',
        description: 'Immaculate showroom cleaning across Sydney. Glass polishing, floor buffing, product display area cleaning for car, furniture, and appliance showrooms.',
        url: 'https://www.procleancorp.com.au/showroom-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Showroom cleaning Sydney retail display' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/showroom-cleaning-sydney' },
};

export default function ShowroomCleaningPage() {
    const serviceInfo = {
        title: "Showroom Cleaning Sydney",
        description: "In a showroom, presentation is everything — your floor reflects the quality of your product. Pro Clean Corp specialises in showroom cleaning across Sydney, delivering the immaculate daily standard required by car dealerships, furniture showrooms, appliance retailers, and luxury display spaces. We focus on streak-free glass polishing, high-shine floor buffing, dust-free product display areas, and flawless reception zones that create the first impression your brand demands.",
        benefits: [
            "Immaculate Display Floor Presentation: Daily cleaning to brand-standard presentation that showcases your products.",
            "Glass Polishing: Streak-free internal and external glass for maximum showroom visibility.",
            "Floor Buffing: High-shine polishing of hard floors, tiles, and epoxy showroom surfaces.",
            "Product Display Area Cleaning: Careful dusting and cleaning around high-value display items.",
            "Furniture/Car/Appliance Showrooms: Specialist experience across all major showroom categories.",
            "Daily Standard: Consistent daily cleaning programme so your showroom is always at its best."
        ],
        process: [
            "Showroom walkthrough to identify key display areas, glass surfaces, high-traffic zones, and high-value items.",
            "Custom cleaning checklist tailored to your showroom layout and brand standards.",
            "Detail cleaning performed before opening hours — glass polishing, floor buffing, display dusting, and wet areas.",
            "Final quality check for streak-free glass and high-shine floors before the showroom opens to customers."
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
            { question: "Do you clean car dealership showroom floors?", answer: "Yes, we have extensive experience with automotive showrooms, using auto-scrubbers and high-speed buffers to maintain large showroom floors in pristine, oil-free, high-gloss condition." },
            { question: "Can you clean high showroom windows without streaks?", answer: "Absolutely. We use professional squeegee systems and streak-free solutions to clean large glass facades, internal showroom glass, and skylights to a perfect, crystal-clear standard." },
            { question: "Do you clean around display products?", answer: "Yes, we carefully clean and dust around all display items. For high-value or delicate products, we work with your team to establish safe cleaning boundaries and techniques." },
            { question: "How often does a showroom need cleaning?", answer: "Most high-end showrooms require daily cleaning to maintain that 'brand new' presentation standard. We can also provide day porter services for continuous maintenance during trading hours." },
            { question: "Are your chemicals safe for luxury finishes?", answer: "Yes, we use pH-neutral and surface-appropriate cleaning agents that clean effectively without damaging premium stone, polished concrete, timber, or glass display surfaces." }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Showroom cleaning Sydney retail display" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Showroom Cleaning Sydney"
                serviceDescription="Immaculate daily showroom cleaning across Sydney including glass polishing, floor buffing, product display area cleaning, and specialist service for car, furniture, and appliance showrooms."
                serviceUrl="/showroom-cleaning-sydney"
                serviceType="Showroom Cleaning"
                price="$$"
                additionalServices={["Glass Polishing", "Floor Buffing", "Display Area Cleaning", "Reception Cleaning", "Day Porter Services"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
