import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Motel Cleaning Sydney | Accommodation & Guest Room Cleaning | Pro Clean Corp',
    description: 'Professional motel cleaning across Sydney. Rapid room turnovers, linen management, bathroom sanitisation, reception, pool area, car park, and nightly or weekly service.',
    keywords: 'motel cleaning sydney, accommodation cleaning sydney, guest room cleaning sydney, motel housekeeping sydney, room turnover cleaning, linen management cleaning, motel bathroom sanitisation, motel car park cleaning, hospitality cleaning sydney',
    openGraph: {
        title: 'Motel Cleaning Sydney | Accommodation & Guest Room Cleaning | Pro Clean Corp',
        description: 'Reliable motel cleaning across Sydney. Rapid room turnovers, linen management, bathroom sanitisation, pool areas, car parks, and nightly or weekly service contracts.',
        url: 'https://www.procleancorp.com.au/motel-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Motel cleaning Sydney accommodation guest room turnovers' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/motel-cleaning-sydney' },
};

export default function MotelCleaningSydneyPage() {
    const serviceInfo = {
        title: "Motel Cleaning Sydney | Accommodation Cleaning Specialists",
        description: "In the accommodation industry, cleanliness is the single most important driver of guest satisfaction, positive reviews, and repeat bookings. Pro Clean Corp provides professional motel cleaning and housekeeping services across Sydney, acting as your reliable outsourced housekeeping team. We deliver rapid room turnovers to meet your check-in schedule, provide linen management support, ensure bathroom sanitisation to hotel standards, and clean all common areas including reception, pool surrounds, car parks, and breakfast areas. We offer nightly, daily, and weekly service contracts tailored to your occupancy patterns.",
        benefits: [
            "Rapid room turnovers completed to your check-in schedule — rooms presented consistently on time, every time",
            "Linen management support including stripping, making beds, and coordinating with your linen supplier",
            "Bathroom sanitisation to hotel standards — tiles, grout, chrome, vanities, and toilets all included",
            "Reception, lobby, and common area cleaning maintains a professional first impression for every arriving guest",
            "Pool area and car park cleaning keeps all external areas presentable and compliant with health requirements",
            "Nightly or weekly service contracts available — we scale our team to your occupancy levels and roster needs"
        ],
        process: [
            "Daily roster coordination with your front desk — we receive the checkout room list and prioritise turnovers to meet your check-in availability schedule",
            "Room servicing: strip beds, replace linen, vacuum and mop floors, full bathroom sanitisation, wipe all surfaces, and restock amenities",
            "Common area cleaning including reception, corridors, stairwells, pool surrounds, breakfast area, and car park as per your service schedule",
            "Final quality walkthrough by team leader before rooms are released to front desk — maintaining a consistent standard for every guest"
        ],
        whyChooseUs: [
            "15+ years commercial cleaning experience",
            "$20M public liability insurance",
            "Police-checked, WHS-trained staff",
            "Eco-friendly commercial-grade products",
            "Flexible scheduling 7 days a week",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "Do you provide daily housekeeping services for motels in Sydney?",
                answer: "Yes. Pro Clean Corp provides daily room servicing including bed making, bathroom cleaning, floor vacuuming and mopping, surface wiping, and amenity restocking. We work from your daily checkout list, prioritising rooms for early check-ins and maintaining a consistent standard across all guest rooms."
            },
            {
                question: "Can you manage linen changes for our motel?",
                answer: "Yes. Linen management support is included in our motel cleaning service. We strip used linen, bag it for your laundry supplier, make beds with fresh linen, and ensure all rooms are presented to your property's standard. We can also coordinate directly with your linen supplier if required."
            },
            {
                question: "Do you clean pool areas and car parks at motels?",
                answer: "Yes. Common area cleaning is part of our full motel service scope. This includes pool surrounds and change facilities, car park areas, BBQ zones, and any external common spaces. We clean these areas on a schedule agreed with your management team to keep the entire property presentable."
            },
            {
                question: "Can you scale your team during peak occupancy periods?",
                answer: "Yes. One of the key advantages of Pro Clean Corp is our ability to flex crew size to match your occupancy. During peak periods such as school holidays or major events, we can deploy a larger team to ensure faster turnovers. During quieter periods, we scale back accordingly to keep your costs efficient."
            },
            {
                question: "Are your motel cleaning staff police-checked and insured?",
                answer: "Yes. All Pro Clean Corp staff are police-checked prior to employment and are covered under our $20 million public liability insurance policy. Staff members working in guest accommodation areas are fully vetted and trained in hospitality cleaning standards and guest privacy protocols."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Motel cleaning Sydney accommodation guest room turnovers" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp motel housekeeping Sydney" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Motel Cleaning Sydney"
                serviceDescription="Professional motel cleaning and housekeeping services across Sydney including rapid room turnovers, linen management, bathroom sanitisation, reception, pool areas, car parks, and nightly or weekly service contracts."
                serviceUrl="/motel-cleaning-sydney"
                serviceType="Motel Cleaning"
                price="$$"
                additionalServices={["Room Turnover Cleaning", "Linen Management", "Pool Area Cleaning", "Common Area Cleaning", "Accommodation Housekeeping"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
