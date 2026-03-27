import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Exit Cleaning Sydney | Commercial End of Tenancy Cleaning | Pro Clean Corp',
    description: 'Professional exit and end of tenancy cleaning in Sydney. Full property deep clean, carpet steam, kitchen degrease, window clean, and real-estate agent ready. Call now.',
    keywords: 'exit cleaning sydney, end of tenancy cleaning sydney, bond cleaning sydney, vacate cleaning sydney, commercial exit cleaning, make good cleaning sydney, carpet steam cleaning sydney, kitchen degrease cleaning, real estate cleaning sydney',
    openGraph: {
        title: 'Exit Cleaning Sydney | Commercial End of Tenancy Cleaning | Pro Clean Corp',
        description: 'Sydney specialists in exit and end of tenancy cleaning. Full property deep cleans, carpet steam, window washing, and kitchen degreasing. Real-estate agent ready results.',
        url: 'https://www.procleancorp.com.au/exit-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Exit cleaning Sydney end of tenancy specialists' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/exit-cleaning-sydney' },
};

export default function ExitCleaningSydneyPage() {
    const serviceInfo = {
        title: "Exit Cleaning Sydney | End of Tenancy & Vacate Specialists",
        description: "Exit cleaning is the comprehensive clean required when a tenant or business leaves a commercial or residential property. Pro Clean Corp delivers thorough, real-estate-ready exit cleans across Sydney that cover every surface from floor to ceiling. Our scope includes carpet steam cleaning for bond compliance, full kitchen degreasing, internal and external window cleaning, bathroom and laundry sanitisation, and hard floor polishing. We follow real estate agent checklists precisely to ensure your property passes final inspection first time and your bond is released without dispute.",
        benefits: [
            "Full property deep clean from ceiling to floor including all fixtures, fittings, and appliances",
            "Carpet steam cleaning removes embedded dirt, stains, and allergens for bond compliance",
            "Internal and external window cleaning for a bright, inspection-ready presentation",
            "Deep kitchen degreasing including ovens, rangehoods, stovetops, and splashbacks",
            "Bathroom and laundry sanitisation to clinical standard — grout, tiles, and chrome all included",
            "Real estate agent checklist followed precisely to ensure first-pass bond recovery and inspection success"
        ],
        process: [
            "Book online or call us to schedule around your tenancy end date — we coordinate key access with your property manager",
            "Our team arrives fully equipped and works systematically through a room-by-room exit cleaning checklist approved by Sydney real estate agencies",
            "Carpet steam cleaning, window washing, and kitchen degreasing completed concurrently by specialist teams to minimise time on site",
            "Final walkthrough quality check with photographic evidence provided — your property manager receives a completion report ready for bond release"
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
                question: "What is exit cleaning and how does it differ from a regular clean?",
                answer: "Exit cleaning is a comprehensive, top-to-bottom clean of a property at the end of a tenancy or commercial lease. It covers everything a regular clean includes, plus deep oven cleaning, carpet steam cleaning, blind wiping, inside window cleaning, and detailed bathroom grout cleaning — all to a standard accepted by real estate agents for bond release."
            },
            {
                question: "Do you provide exit cleaning for commercial properties in Sydney?",
                answer: "Yes. Pro Clean Corp specialises in commercial make-good cleaning — the exit clean required under most commercial lease agreements. This includes stripping and sealing hard floors, carpet cleaning, window washing, kitchen deep cleaning, and restoring all areas to their original condition per the make-good clause."
            },
            {
                question: "Does your exit cleaning include carpet steam cleaning?",
                answer: "Yes. Carpet steam cleaning is included as part of our full exit cleaning package. We use high-powered steam extraction equipment to remove embedded soil, stains, and odours, meeting real estate agent requirements for bond return."
            },
            {
                question: "How much notice do you need to book an exit clean in Sydney?",
                answer: "We recommend booking at least 3–5 business days in advance to secure your preferred date. However, we regularly accommodate short-notice and same-week bookings — contact us to check availability."
            },
            {
                question: "What if the real estate agent is not satisfied with the exit clean?",
                answer: "We stand behind our work. If your property manager identifies any area that does not meet the standard checklist on first inspection, we will return to rectify the issue at no additional charge, provided we are notified within 72 hours of completion."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Exit cleaning Sydney end of tenancy commercial property" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney vacate cleaning services" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Exit Cleaning Sydney"
                serviceDescription="Professional exit and end of tenancy cleaning in Sydney for commercial and residential properties including carpet steam cleaning, window washing, kitchen degreasing, and real estate-ready presentation."
                serviceUrl="/exit-cleaning-sydney"
                serviceType="Exit & End of Tenancy Cleaning"
                price="$$"
                additionalServices={["Carpet Steam Cleaning", "Window Cleaning", "Kitchen Deep Clean", "Make Good Cleaning", "Bond Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
