import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Fitness Centre Cleaning Sydney | Gym & Health Club Cleaning | Pro Clean Corp',
    description: 'Pro Clean Corp delivers daily gym & fitness centre cleaning across Sydney. Equipment sanitisation every session, locker rooms, cardio floor, pool surrounds, anti-bacterial fogging.',
    keywords: 'fitness centre cleaning sydney, gym cleaning sydney, health club cleaning, gym equipment sanitisation, locker room cleaning, cardio floor cleaning, pool surround cleaning, anti-bacterial fogging gym, daily gym cleaning sydney',
    openGraph: {
        title: 'Fitness Centre Cleaning Sydney | Gym & Health Club Cleaning | Pro Clean Corp',
        description: 'Daily fitness centre and gym cleaning across Sydney. Equipment sanitisation, locker rooms, cardio floor, free weights, pool surrounds, and anti-bacterial fogging.',
        url: 'https://www.procleancorp.com.au/fitness-centre-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/gym.webp', alt: 'Fitness centre cleaning Sydney gym' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/fitness-centre-cleaning-sydney' },
};

export default function FitnessCentreCleaningPage() {
    const serviceInfo = {
        title: "Fitness Centre Cleaning Sydney",
        description: "In the fitness industry, hygiene is not just a health issue — it is a member retention issue. Pro Clean Corp provides specialist fitness centre and gym cleaning services across Sydney, covering every zone of your facility with anti-bacterial products and infection control protocols. From equipment sanitisation between every session to deep locker room cleaning, cardio floor maintenance, pool surrounds, and anti-bacterial fogging, we help you maintain a facility your members are proud to train in.",
        benefits: [
            "Equipment Sanitisation Every Session: Hospital-grade anti-bacterial wipe-down of all machines, weights, and benches.",
            "Locker Rooms and Showers: Deep cleaning and mould prevention for all wet area amenities.",
            "Cardio Floor: Machine scrubbing and sanitisation of high-traffic cardio zones.",
            "Free Weights: Individual weight cleaning and rack area sanitisation.",
            "Pool Surrounds: Wet area cleaning and slip-resistance maintenance around pool and spa areas.",
            "Reception: High-touch surface disinfection of reception, entry, and common areas.",
            "Anti-Bacterial Fogging: Scheduled disinfectant fogging for thorough pathogen elimination.",
            "Daily Service: Consistent daily cleaning programme to maintain 5-star facility standard."
        ],
        process: [
            "Facility assessment to identify high-risk zones, equipment types, wet areas, and traffic patterns.",
            "Custom cleaning roster covering daily tasks, periodic deep cleans, and anti-bacterial fogging schedule.",
            "Thorough cleaning of all equipment, floors, amenities, and common areas using anti-bacterial products.",
            "Quality inspection by on-site supervisor and member feedback monitoring for continuous improvement."
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
            { question: "How do you sanitise gym equipment?", answer: "We use hospital-grade anti-bacterial solutions applied with microfibre cloths to all equipment contact surfaces including handles, seats, pads, and screens — safe for electronics and upholstery." },
            { question: "Can you clean a 24-hour gym without disruption?", answer: "Yes, we are experienced in servicing 24-hour facilities. We can schedule cleaning during your lowest-traffic periods and work around members without disruption." },
            { question: "Do you deep clean locker rooms and showers?", answer: "Absolutely. We provide intensive daily cleaning for showers, toilets, and locker rooms with mould prevention treatment and regular deep descaling of wet area surfaces." },
            { question: "What is anti-bacterial fogging?", answer: "Anti-bacterial fogging disperses a fine mist of disinfectant throughout your facility that reaches surfaces and air spaces that manual cleaning cannot access. It is ideal for periodic deep sanitation of your full gym environment." },
            { question: "Do you clean pool surround areas?", answer: "Yes, we clean pool surrounds, spa areas, and associated wet zones including non-slip surface treatment and drain maintenance as part of our fitness centre cleaning scope." }
        ],
        images: [
            { src: "/images/services/gym.webp", alt: "Fitness centre cleaning Sydney gym" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Fitness Centre Cleaning Sydney"
                serviceDescription="Daily fitness centre and gym cleaning across Sydney including equipment sanitisation every session, locker rooms and showers, cardio floor, free weights, pool surrounds, reception, and anti-bacterial fogging."
                serviceUrl="/fitness-centre-cleaning-sydney"
                serviceType="Fitness Centre Cleaning"
                price="$$"
                additionalServices={["Equipment Sanitisation", "Locker Room Cleaning", "Pool Surround Cleaning", "Anti-Bacterial Fogging", "Reception Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
