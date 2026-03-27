import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Church & Worship Facility Cleaning Services Sydney | Pro Clean Corp',
    description: 'Pro Clean Corp provides respectful church and worship facility cleaning across Sydney. Sanctuary, pews, baptismal area, church hall, kitchen, heritage building care & Sunday-flexible scheduling.',
    keywords: 'church cleaning sydney, worship facility cleaning sydney, sanctuary cleaning, pew cleaning, baptismal area cleaning, church hall cleaning, heritage building cleaning sydney, religious facility cleaning, place of worship cleaning sydney',
    openGraph: {
        title: 'Church & Worship Facility Cleaning Services Sydney | Pro Clean Corp',
        description: 'Respectful church and place of worship cleaning across Sydney. Sanctuary, pews, baptismal area, church hall, kitchen, heritage building care, and Sunday-flexible scheduling.',
        url: 'https://www.procleancorp.com.au/services/church-cleaning',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Church cleaning services Sydney worship facility' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/services/church-cleaning' },
};

export default function ChurchCleaningPage() {
    const serviceInfo = {
        title: "Church & Place of Worship Cleaning Services",
        description: "Places of worship require a unique approach to cleaning — one that combines thorough hygiene standards with deep respect for the sacred nature of the space, its contents, and the congregation it serves. Pro Clean Corp provides specialist church and worship facility cleaning services across Sydney for all denominations and faith communities. Our respectful, experienced teams work around your service schedule and take particular care with heritage buildings, stained glass, timber pews, and ceremonial areas to ensure your place of worship is always presented with dignity.",
        benefits: [
            "Sanctuary Cleaning: Careful cleaning of the main worship space with respect for all sacred furnishings.",
            "Pews and Chairs: Thorough wipe-down, vacuuming, and sanitisation of all congregation seating.",
            "Baptismal Area: Cleaning and sanitisation of baptismal fonts, pools, and surrounding areas.",
            "Church Hall: Full cleaning of multipurpose hall spaces used for community events and gatherings.",
            "Kitchen: Hygiene-standard cleaning of community kitchen areas used for post-service gatherings.",
            "Respectful Staff: Teams briefed on conduct, appropriate dress, and respect for religious spaces.",
            "Flexible Around Sunday Services: Scheduling that works around your weekly service programme.",
            "Heritage Building Care: Specialist techniques for cleaning delicate heritage materials and surfaces."
        ],
        process: [
            "Initial meeting with church administration to understand the facility layout, service schedule, and cleaning priorities.",
            "Custom cleaning programme developed to work around weekly services, community events, and seasonal religious observances.",
            "Regular cleaning of all areas including sanctuary, halls, offices, bathrooms, and kitchens using appropriate products.",
            "Annual deep clean scheduled during quieter periods for carpets, windows, floors, and high-level areas."
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
            { question: "Do you clean around religious artefacts and furnishings?", answer: "Yes, our teams are briefed to work with great care and respect around all religious artefacts, altars, candles, instruments, and ceremonial furnishings. We never move or handle sacred items without explicit guidance." },
            { question: "Can you schedule cleaning around Sunday services?", answer: "Absolutely. We schedule all cleaning outside of service times — typically on weekday mornings or evenings — and can adjust around special services, weddings, funerals, and seasonal observances." },
            { question: "Do you clean heritage church buildings?", answer: "Yes, we are experienced in cleaning heritage church buildings, using gentle, surface-appropriate products for timber pews, stone floors, stained glass surrounds, and delicate decorative features." },
            { question: "Can you clean the community hall and kitchen?", answer: "Yes, church halls, community rooms, and kitchens used for post-service gatherings and community events are included in our church cleaning scope and are cleaned to a hygiene-compliant standard." },
            { question: "How often does a church need professional cleaning?", answer: "Most churches benefit from weekly cleaning of the main areas, with monthly or quarterly deep cleans of carpets, bathrooms, and the church hall depending on community usage levels." }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Church cleaning services Sydney worship facility" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Church & Place of Worship Cleaning Services"
                serviceDescription="Respectful church and worship facility cleaning across Sydney including sanctuary, pews, baptismal area, church hall, kitchen, heritage building care, and flexible scheduling around Sunday services."
                serviceUrl="/services/church-cleaning"
                serviceType="Church & Place of Worship Cleaning"
                price="$$"
                additionalServices={["Sanctuary Cleaning", "Pew Sanitisation", "Church Hall Cleaning", "Heritage Building Care", "Carpet Steam Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
