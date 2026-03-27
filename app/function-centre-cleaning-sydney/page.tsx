import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Function Centre Cleaning Sydney | Event Venue Cleaning Services | Pro Clean Corp',
    description: 'Pro Clean Corp cleans function centres and event venues across Sydney. Pre-event setup cleans, post-event turnaround, kitchen and bar areas, dance floor maintenance.',
    keywords: 'function centre cleaning sydney, event venue cleaning sydney, pre-event cleaning sydney, post-event cleanup sydney, wedding venue cleaning, conference centre cleaning sydney, dance floor cleaning, bar area cleaning, rapid turnaround event cleaning',
    openGraph: {
        title: 'Function Centre Cleaning Sydney | Event Venue Cleaning Services | Pro Clean Corp',
        description: "Sydney's event venue cleaning specialists. Pre-event setup cleans, post-event cleanup, kitchen and bar sanitation, dance floor maintenance, and rapid between-event turnarounds.",
        url: 'https://www.procleancorp.com.au/function-centre-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Function centre cleaning Sydney event venue pre and post clean' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/function-centre-cleaning-sydney' },
};

export default function FunctionCentreCleaningSydneyPage() {
    const serviceInfo = {
        title: "Function Centre Cleaning Sydney | Event Venue Specialists",
        description: "In the events industry, your venue's cleanliness is your reputation. Guests notice everything — from the sparkle of glassware and the gleam of dance floors to the hygiene of bathrooms and the freshness of the air. Pro Clean Corp provides specialist function centre and event venue cleaning across Sydney, handling pre-event setup cleans, active event support, and post-event cleanup with rapid between-event turnarounds. We service wedding venues, corporate event spaces, conference centres, exhibition halls, and licensed clubs — working to your schedule no matter the hour.",
        benefits: [
            "Pre-event setup cleans ensure your venue is immaculate and presentation-ready before the first guest arrives",
            "Post-event turnaround handles all waste removal, floor cleaning, table clearing, and full reset for the next event",
            "Kitchen and bar area deep cleaning to commercial food safety standards after every major event",
            "Dance floor cleaning, polishing, and buffing to restore slip resistance and presentation for back-to-back events",
            "Rapid between-event changeover capability — we prepare a venue for a second event the same day when timing is tight",
            "Late-night and early-morning availability — we work to your event schedule regardless of the hour"
        ],
        process: [
            "Pre-event briefing with your venue manager to understand the event schedule, layout, and any specific cleaning requirements",
            "Pre-event setup clean: vacuuming and mopping all floors, polishing dance floors, cleaning bathrooms, wiping all surfaces, and presenting the venue to your standard",
            "Post-event cleanup: clearing and disposing of all event waste, cleaning kitchen and bar areas to food safety standards, mopping all floors, and restoring the venue to its base condition",
            "Rapid turnaround reset between events — when you have back-to-back bookings, we work efficiently to re-present the full venue within your allocated window"
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
                question: "Do you provide cleaning services for wedding venues in Sydney?",
                answer: "Yes. Pro Clean Corp provides comprehensive cleaning for wedding venues including pre-ceremony and pre-reception setup cleans, bathroom maintenance during events, and full post-wedding cleanup including waste removal, floor cleaning, and venue reset. We work around your ceremony timeline and can be on-site for the full event duration if required."
            },
            {
                question: "How quickly can you turn around a function centre between events?",
                answer: "Turnaround time depends on venue size and the nature of the event. For mid-sized function rooms, we can typically complete a full post-event clean and reset within 2–4 hours. We assign sufficient crew to meet your specific turnaround window — contact us to discuss your event schedule."
            },
            {
                question: "Do you deep clean commercial kitchens in function centres?",
                answer: "Yes. Post-event kitchen cleaning is one of our specialist services. We deep clean all cooking equipment, benchtops, rangehoods, exhaust filters, floors, and dishwashing areas to commercial food safety standards — essential for venues maintaining NSW Food Authority compliance."
            },
            {
                question: "Can you clean and polish dance floors?",
                answer: "Yes. We clean timber, laminate, and vinyl dance floors using appropriate methods for each surface type. For timber floors, we dry-buff and apply a suitable polish to restore shine and slip resistance. For synthetic surfaces, we wet-scrub and machine-polish. We assess floor condition before each event to determine the appropriate treatment."
            },
            {
                question: "Do you provide function centre cleaning on a regular contract basis?",
                answer: "Yes. We offer regular cleaning contracts for function centres and event venues including daily, weekly, and after-event scheduled services. Regular contract clients receive priority booking, dedicated cleaning teams, and competitive contract pricing."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Function centre cleaning Sydney event venue pre and post event clean" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp event venue cleaning Sydney" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Function Centre Cleaning Sydney"
                serviceDescription="Specialist function centre and event venue cleaning in Sydney including pre-event setup cleans, post-event cleanup, kitchen and bar sanitation, dance floor maintenance, and rapid between-event turnarounds."
                serviceUrl="/function-centre-cleaning-sydney"
                serviceType="Function Centre Cleaning"
                price="$$"
                additionalServices={["Pre-Event Setup Clean", "Post-Event Cleanup", "Kitchen & Bar Cleaning", "Dance Floor Polishing", "Rapid Event Turnaround"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
