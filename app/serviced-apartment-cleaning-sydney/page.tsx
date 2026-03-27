import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Serviced Apartment Cleaning Sydney | Short Stay & Airbnb Cleaning | Pro Clean Corp',
    description: 'Pro Clean Corp delivers hotel-standard Airbnb & serviced apartment cleaning across Sydney. Rapid turnovers, linen changes, kitchen restocking & 5-star presentation.',
    keywords: 'serviced apartment cleaning sydney, airbnb cleaning sydney, short stay cleaning sydney, vrbo cleaning sydney, holiday rental cleaning, apartment turnover service, linen change service, guest-ready cleaning',
    openGraph: {
        title: 'Serviced Apartment Cleaning Sydney | Short Stay & Airbnb Cleaning | Pro Clean Corp',
        description: 'Hotel-standard turnovers for Airbnb, VRBO & serviced apartments across Sydney. Linen changes, kitchen restocking & deep clean cycles included.',
        url: 'https://www.procleancorp.com.au/serviced-apartment-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Serviced apartment cleaning Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/serviced-apartment-cleaning-sydney' },
};

export default function ServicedApartmentCleaningPage() {
    const serviceInfo = {
        title: "Serviced Apartment Cleaning Sydney",
        description: "In the short-stay rental market, your cleaning standard is your review score. Pro Clean Corp delivers professional serviced apartment and Airbnb cleaning services across Sydney, helping hosts on Airbnb, VRBO, and Stayz maintain 5-star guest ratings through consistent hotel-quality turnovers. We manage rapid changeovers, professional linen changes, kitchen restocking preparation, and full deep clean cycles between long-stay guests — all coordinated around your check-in and check-out schedule.",
        benefits: [
            "Rapid Guest-Ready Turnovers: Apartments completed to 5-star presentation standard between 10am and 3pm on changeover days.",
            "Linen Change Management: Professional linen strip, fold, and hotel-presentation service with laundry coordination.",
            "Kitchen Restocking Prep: Amenity replenishment and kitchen reset to guest-ready standard as per your checklist.",
            "Deep Clean Cycles: Scheduled between long-stay guests or monthly to reset the property fully.",
            "Airbnb/VRBO Property Management: Photo documentation and damage reporting after every clean.",
            "5-Star Presentation Standard: Every room, bathroom, and surface checked to hospitality-grade standard before guest arrival."
        ],
        process: [
            "Guest checkout confirmed — our team dispatched to your property with full linen and supplies kit.",
            "Full linen strip, laundry collection, and deep clean of all rooms, bathrooms, and kitchen areas.",
            "Amenity restocking, kitchen reset, and property staging to guest-ready presentation standard.",
            "Final photographic inspection report sent to the host before next guest check-in."
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
            { question: "Do you clean Airbnb properties in Sydney?", answer: "Yes, serviced apartment and Airbnb cleaning is one of our core specialties. We work with hosts across Sydney to deliver reliable, hotel-standard turnovers between every guest stay." },
            { question: "Do you provide a linen service?", answer: "Yes, we can launder your own linen inventory or connect you with our linen hire partner for fresh hotel-grade linen delivered and collected with every clean." },
            { question: "How quickly can you turn over an apartment?", answer: "Most 1-2 bedroom apartments can be turned over within 2-3 hours. We schedule our teams tightly around your check-out and check-in windows to guarantee availability." },
            { question: "Do you restock guest amenities?", answer: "Yes, we replenish agreed amenities such as toiletries, coffee capsules, and kitchen essentials as part of your turnover package. Leave a stocked supply and we handle the rest." },
            { question: "Can you manage deep cleans between longer stays?", answer: "Absolutely. We offer scheduled deep clean cycles for properties with longer-term guests, ensuring the property is fully reset to guest-ready standard for the next booking." }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Serviced apartment cleaning Sydney" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Serviced Apartment Cleaning Sydney"
                serviceDescription="Professional short-stay and Airbnb cleaning services across Sydney including fast turnovers, linen changes, kitchen restocking, and deep clean cycles to guest-ready standard."
                serviceUrl="/serviced-apartment-cleaning-sydney"
                serviceType="Serviced Apartment Cleaning"
                price="$$"
                additionalServices={["Airbnb Cleaning", "Linen Change Service", "Kitchen Restocking Prep", "Deep Clean Cycles", "Damage Reporting"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
