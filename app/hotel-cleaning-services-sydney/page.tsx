import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Hotel Cleaning Services Sydney | 5-Star Hotel Housekeeping | Pro Clean Corp',
    description: 'Pro Clean Corp delivers 5-star hotel cleaning across Sydney. Room turnovers, housekeeping management, conference rooms, restaurants, lobbies, pool areas & QA inspection systems.',
    keywords: 'hotel cleaning services sydney, 5 star hotel housekeeping, hotel room turnovers, housekeeping management sydney, hotel conference room cleaning, hotel lobby cleaning, pool area cleaning sydney, hotel linen coordination, outsourced hotel housekeeping',
    openGraph: {
        title: 'Hotel Cleaning Services Sydney | 5-Star Hotel Housekeeping | Pro Clean Corp',
        description: '5-star hotel cleaning and housekeeping management across Sydney. Room turnovers, conference rooms, restaurants, lobbies, pool areas, linen coordination & QA systems.',
        url: 'https://www.procleancorp.com.au/hotel-cleaning-services-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Hotel cleaning services Sydney 5 star housekeeping' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/hotel-cleaning-services-sydney' },
};

export default function HotelCleaningServicesPage() {
    const serviceInfo = {
        title: "Hotel Cleaning Services Sydney",
        description: "In the hospitality industry, cleanliness is the single biggest driver of guest satisfaction, online reviews, and repeat bookings. Pro Clean Corp partners with Sydney hotels, motels, boutique properties, and serviced apartment operators to deliver 5-star cleaning and housekeeping management across all property areas. From rapid room turnovers to conference room resets, restaurant cleaning, lobby maintenance, pool areas, and linen coordination, our experienced housekeeping teams uphold the presentation standards your brand demands.",
        benefits: [
            "Room Turnovers to 5-Star Standard: Efficient, quality-controlled room turnovers aligned to your brand standards.",
            "Housekeeping Management: On-site supervisors managing rosters, quality inspection, and guest room sign-off.",
            "Conference Rooms: Rapid reset and full clean between bookings for conference and event spaces.",
            "Restaurants: Before and after service cleaning of restaurant, kitchen pass, and bar areas.",
            "Lobbies: Continuous lobby and public area presentation throughout operating hours.",
            "Pool Areas: Wet area cleaning, furniture wipe-down, and surround maintenance.",
            "Linen Coordination: Linen collection, delivery management, and par-stock monitoring.",
            "QA Inspection Systems: Supervisor room checks with digital reporting to hotel management."
        ],
        process: [
            "Property induction covering brand standards, room layout, and management reporting requirements.",
            "Rostering aligned to daily arrivals and departures, conference bookings, and public area schedules.",
            "Room attendants and public area cleaners deployed with supervisor oversight and QA checks.",
            "Daily digital inspection reports provided to hotel management for accountability and performance tracking."
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
            { question: "Do you outsource full housekeeping departments?", answer: "Yes, we can manage your entire housekeeping operation including supervision, rostering, quality inspection, and chemical supply, providing a full outsourced department solution." },
            { question: "Can you provide staff for peak seasons?", answer: "Yes, we offer scalable staffing models and can rapidly increase crew size to meet demand during peak seasons, public holidays, and major events." },
            { question: "Do you manage linen coordination?", answer: "Yes, we can coordinate linen collection, delivery scheduling, par-stock monitoring, and replenishment as part of our housekeeping management service." },
            { question: "How do you ensure 5-star room quality?", answer: "We use a QA inspection system with digital checklists and photographic records. Supervisors inspect completed rooms before release to reception, with reports sent to hotel management daily." },
            { question: "Do you clean conference rooms and event spaces?", answer: "Yes, rapid conference room resets and full cleans between bookings are a core part of our hotel cleaning service, including AV setup area, catering surfaces, and amenities." }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Hotel cleaning services Sydney 5 star housekeeping" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Hotel Cleaning Services Sydney"
                serviceDescription="5-star hotel cleaning and housekeeping management across Sydney including room turnovers, conference rooms, restaurants, lobbies, pool areas, linen coordination, and QA inspection systems."
                serviceUrl="/hotel-cleaning-services-sydney"
                serviceType="Hotel Cleaning"
                price="$$"
                additionalServices={["Room Turnovers", "Housekeeping Management", "Conference Room Cleaning", "Restaurant Cleaning", "Linen Coordination"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
