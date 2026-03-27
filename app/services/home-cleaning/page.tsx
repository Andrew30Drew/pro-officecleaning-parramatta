import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Home Cleaning Services Sydney | Residential House Cleaning | Pro Clean Corp',
    description: 'Pro Clean Corp delivers trusted residential home cleaning across Sydney. Regular domestic cleaning, spring cleaning, deep clean packages, eco-friendly products & fully insured staff.',
    keywords: 'home cleaning services sydney, residential cleaning sydney, house cleaning sydney, domestic cleaning sydney, spring cleaning sydney, deep clean home sydney, eco friendly house cleaning, residential cleaners sydney, weekly house cleaning sydney',
    openGraph: {
        title: 'Home Cleaning Services Sydney | Residential House Cleaning | Pro Clean Corp',
        description: 'Trusted residential home cleaning across Sydney. Regular domestic cleaning, spring cleaning, deep clean packages, eco-friendly products, and fully insured staff.',
        url: 'https://www.procleancorp.com.au/services/home-cleaning',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Home cleaning services Sydney residential' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/services/home-cleaning' },
};

export default function HomeCleaningPage() {
    const serviceInfo = {
        title: "Residential Home Cleaning Services",
        description: "Your home deserves the same professional standard of cleaning that Pro Clean Corp delivers to Sydney's leading commercial businesses. Whether you need a reliable weekly cleaner to keep on top of the housework, a spring clean before a special occasion, or an intensive deep clean to restore your home, our experienced and fully insured residential cleaning teams deliver consistent, trustworthy results. We bring our own eco-friendly products and equipment, and all our staff are police-checked for your complete peace of mind.",
        benefits: [
            "Regular Domestic Cleaning: Weekly, fortnightly, or monthly house cleaning programmes tailored to your home.",
            "Spring Cleaning: Comprehensive whole-of-home spring clean covering every room, surface, and storage area.",
            "Deep Clean Packages: Intensive cleaning for heavily soiled homes, rental properties, or post-renovation residences.",
            "Kitchen: Full kitchen clean including appliances, benches, splashback, sink, and cupboard exteriors.",
            "Bathrooms: Thorough bathroom sanitisation including tiles, grout, fixtures, and mirrors.",
            "Bedrooms: Vacuuming, dusting, surface wipe-down, and linen change service available.",
            "Vacuuming and Mopping: All floor surfaces including carpet, timber, tiles, and vinyl.",
            "Eco-Friendly Products: Non-toxic, environmentally friendly products safe for children and pets.",
            "Fully Insured Staff: Comprehensive public liability coverage and police-checked team members."
        ],
        process: [
            "Initial home consultation to understand your cleaning priorities, preferences, and scheduling requirements.",
            "Custom cleaning plan developed outlining tasks, frequency, and any specific product or access requirements.",
            "Consistent cleaning team assigned to your home for familiarity, trust, and reliable results.",
            "Post-clean quality check and open communication with your dedicated account contact."
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
            { question: "Do you bring your own cleaning products and equipment?", answer: "Yes, our cleaners arrive fully equipped with eco-friendly, non-toxic cleaning products and professional equipment. If you have specific product preferences or allergies, please let us know in advance." },
            { question: "Will I get the same cleaner every visit?", answer: "We aim to assign the same team member for all your regular cleans to build familiarity and trust. If your regular cleaner is unavailable, we will always notify you in advance and arrange a suitable replacement." },
            { question: "Do you offer a spring cleaning service?", answer: "Yes, our spring cleaning service is a comprehensive whole-of-home clean covering areas not normally included in regular maintenance cleaning — inside cupboards, behind appliances, window tracks, and more." },
            { question: "Are your cleaners insured and police-checked?", answer: "Yes, Pro Clean Corp carries $20M public liability insurance and all staff undergo thorough police background checks before working in any residential home." },
            { question: "Can you clean while I am not home?", answer: "Yes, many of our residential clients provide a key or access code. We operate with strict security protocols and all our staff are fully vetted and trusted to work in unoccupied homes." }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Home cleaning services Sydney residential" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Residential Home Cleaning Services"
                serviceDescription="Professional residential home cleaning across Sydney including regular domestic cleaning, spring cleaning, deep clean packages, eco-friendly products, and fully insured police-checked staff."
                serviceUrl="/services/home-cleaning"
                serviceType="Residential Home Cleaning"
                price="$$"
                additionalServices={["Spring Cleaning", "Deep Clean Packages", "Carpet Steam Cleaning", "Window Cleaning", "Oven Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
