import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Pub & Club Cleaning Sydney | From $55/hr | ProCleanCorp',
    description: 'Pub and club cleaning across Sydney from $55/hr. Late-night and pre-opening cleans. Bar areas, gaming rooms, beer gardens, kitchens, dance floors. Liquor licence compliant. Free quote.',
    keywords: 'pub cleaning sydney, club cleaning sydney, licensed venue cleaning sydney, bar cleaning sydney, gaming room cleaning, rsl club cleaning, nightclub cleaning sydney, beer garden cleaning, late night cleaning pub, early morning venue cleaning',
    openGraph: {
        title: 'Pub & Club Cleaning Sydney | Licensed Venue Cleaning Services | Pro Clean Corp',
        description: 'Late-night and early-morning cleaning for pubs, clubs, and licensed venues across Sydney. Bar areas, gaming rooms, beer gardens, kitchens, bathrooms, and dance floors.',
        url: 'https://www.procleancorp.com.au/pub-club-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Pub and club cleaning Sydney licensed venue' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/pub-club-cleaning-sydney' },
};

export default function PubClubCleaningPage() {
    const serviceInfo = {
        title: "Pub & Club Cleaning Sydney",
        description: "The hospitality industry demands spotless licensed venues to satisfy patrons and meet strict liquor licensing and food safety regulations. Pro Clean Corp provides dedicated pub and club cleaning services across Sydney, working after closing time and through the early morning to ensure your venue opens fresh, safe, and welcoming every day. We cover every zone — from bar areas and gaming rooms to beer gardens, commercial kitchens, bathrooms, and dance floors — with a weekly deep clean programme to maintain the highest standards.",
        benefits: [
            "Late-Night and Early Morning Cleaning: In and out before your first delivery arrives, every single day.",
            "Bar Areas: Thorough cleaning of bar tops, tap equipment, bottle fridges, and floor mats.",
            "Gaming Rooms: Careful sanitisation of gaming machines, screens, stools, and surrounds.",
            "Beer Garden: Sweeping, hosing, furniture wipe-down, and ashtray emptying.",
            "Kitchen: HACCP-aligned cleaning of all kitchen surfaces and equipment.",
            "Bathrooms: Deep sanitisation of all amenities including cubicles, basins, and floors.",
            "Dance Floors: Floor scrubbing, sticky residue removal, and buffing.",
            "Licensed Venue Compliance: Cleaning documented to support liquor licensing and health inspection requirements.",
            "Weekly Deep Clean: Scheduled intensive deep clean to address accumulated grease, staining, and odours."
        ],
        process: [
            "Venue walkthrough to identify all cleaning zones, problematic areas, and compliance requirements.",
            "Detailed nightly cleaning roster and periodic deep clean schedule developed with management.",
            "Overnight crew executes thorough cleaning of all bar, gaming, kitchen, amenity, and outdoor zones.",
            "Supervisor quality audit before venue opens to confirm presentation standard is met."
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
            { question: "Do you clean gaming machines and stools?", answer: "Yes, we carefully sanitise gaming machine surfaces, screens, and seating, paying close attention to detail without damaging sensitive electronics or displays." },
            { question: "Can you remove sticky residue from floors?", answer: "We use effective commercial degreasers and floor scrubbers to lift sticky residue from spilled drinks, leaving floors clean, safe, and non-slip." },
            { question: "Do you supply restroom consumables?", answer: "Yes, we can supply and restock toilet paper, hand towels, and soap as part of your ongoing service to ensure amenities are always ready for patrons." },
            { question: "Are you available on public holidays?", answer: "Yes, we operate 365 days a year to support the hospitality industry, including Christmas, New Year, and all public holidays." },
            { question: "Do you clean beer gardens and smoking areas?", answer: "Yes, we sweep, hose down, and tidy all outdoor areas including beer gardens, smoking areas, and courtyard spaces, emptying ashtrays and removing all debris." }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Pub and club cleaning Sydney licensed venue" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Pub & Club Cleaning Sydney"
                serviceDescription="Late-night and early-morning licensed venue cleaning across Sydney including bar areas, gaming rooms, beer gardens, kitchens, bathrooms, dance floors, and weekly deep clean programmes."
                serviceUrl="/pub-club-cleaning-sydney"
                serviceType="Pub & Club Cleaning"
                price="$$"
                additionalServices={["Bar Area Cleaning", "Gaming Room Cleaning", "Kitchen Cleaning", "Beer Garden Cleaning", "Weekly Deep Clean"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
