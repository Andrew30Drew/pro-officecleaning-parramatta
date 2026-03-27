import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Event Cleaning Sydney | Before During & After Event Cleaning | Pro Clean Corp',
    description: 'Pro Clean Corp provides full-cycle event cleaning across Sydney. Pre-event venue prep, during-event attendant cleaning, post-event rapid cleanup, waste management & overnight teams.',
    keywords: 'event cleaning sydney, before during after event cleaning, venue cleaning sydney, concert cleaning sydney, exhibition cleaning, corporate event cleaning, waste management events, post event cleanup, event cleaning crew sydney',
    openGraph: {
        title: 'Event Cleaning Sydney | Before During & After Event Cleaning | Pro Clean Corp',
        description: 'Full-cycle event cleaning across Sydney — pre-event prep, live attendant cleaning, post-event rapid cleanup, waste management, and overnight teams.',
        url: 'https://www.procleancorp.com.au/event-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Event cleaning Sydney before during after' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/event-cleaning-sydney' },
};

export default function EventCleaningPage() {
    const serviceInfo = {
        title: "Event Cleaning Sydney",
        description: "From intimate corporate functions to large-scale concerts and exhibitions, Pro Clean Corp provides professional event cleaning services across Sydney that cover the full event lifecycle. Our experienced event teams handle pre-event venue preparation, live attendant cleaning throughout the event, and rapid post-event cleanup to return your venue on schedule. We manage waste streams, restroom restocking, litter collection, and overnight crews for major event venues across Greater Sydney.",
        benefits: [
            "Pre-Event Venue Prep: Full venue clean and presentation setup before doors open.",
            "During-Event Attendant Cleaning: Uniformed cleaning attendants managing restrooms, bins, and spills throughout.",
            "Post-Event Rapid Cleanup: Fast turnaround teams to clear the venue to handover standard overnight.",
            "Concerts: Scalable crews for major concert venues including floor, seating, and FOH areas.",
            "Exhibitions: Display area protection and careful cleaning around valuable exhibits.",
            "Corporate Events: Discreet professional presentation for board meetings, gala dinners, and conferences.",
            "Waste Management: Bin supply, waste stream separation, and recycling coordination.",
            "Overnight Teams: After-midnight cleaning crews to meet early morning venue access requirements."
        ],
        process: [
            "Event planning meeting to assess expected attendance, venue layout, and waste volume requirements.",
            "Pre-event deployment for venue preparation, bin placement, and restroom stocking.",
            "During-event attendant management coordinated by on-site supervisor for continuous presentation.",
            "Post-event rapid cleanup to return the venue to handover condition within agreed timeframe."
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
            { question: "Do you provide cleaning during the event?", answer: "Yes, we deploy uniformed cleaning attendants throughout your event to manage restrooms, empty bins, respond to spills, and maintain presentation standards throughout." },
            { question: "Can you clean a venue overnight after a large event?", answer: "Yes, our overnight event teams are experienced at returning large venues — including Sydney Olympic Park and ICC-scale facilities — to handover condition by early morning." },
            { question: "Do you supply bins and waste management?", answer: "Yes, we can arrange supply and management of waste bins, recycling stations, and skip bins, and coordinate waste stream separation for sustainable event outcomes." },
            { question: "Can you handle large outdoor festivals?", answer: "Yes, we have the capacity and equipment to manage cleaning and waste for large-scale outdoor festivals, markets, and sporting events across Greater Sydney." },
            { question: "Do you clean exhibitions and trade shows?", answer: "Yes, we provide careful exhibition cleaning including display area maintenance, aisle cleaning, and restroom service throughout multi-day trade shows and exhibitions." }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Event cleaning Sydney before during after" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Event Cleaning Sydney"
                serviceDescription="Full-cycle event cleaning across Sydney including pre-event venue preparation, during-event attendant cleaning, post-event rapid cleanup, waste management, and overnight teams for concerts, exhibitions, and corporate events."
                serviceUrl="/event-cleaning-sydney"
                serviceType="Event Cleaning"
                price="$$"
                additionalServices={["Pre-Event Venue Prep", "During-Event Attendants", "Post-Event Cleanup", "Waste Management", "Overnight Teams"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
