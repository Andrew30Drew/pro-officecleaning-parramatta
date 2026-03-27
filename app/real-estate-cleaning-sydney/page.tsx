import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Real Estate Cleaning Sydney | Property Cleaning for Agents | Pro Clean Corp',
    description: 'Trusted cleaning partner for Sydney real estate agents and property managers. Rental cleaning, vacate cleans, open house presentation, sales photography prep, and PM packages.',
    keywords: 'real estate cleaning sydney, property cleaning agents sydney, rental property cleaning, vacate cleaning sydney, open house cleaning sydney, sales photography prep cleaning, end of tenancy cleaning agents, property manager cleaning packages',
    openGraph: {
        title: 'Real Estate Cleaning Sydney | Property Cleaning for Agents | Pro Clean Corp',
        description: "Sydney real estate agents' trusted cleaning partner. Rental property cleaning, vacate cleans, open house presentation, sales photography prep, and property manager packages.",
        url: 'https://www.procleancorp.com.au/real-estate-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Real estate cleaning Sydney property agent vacate open house' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/real-estate-cleaning-sydney' },
};

export default function RealEstateCleaningSydneyPage() {
    const serviceInfo = {
        title: "Real Estate Cleaning Sydney | For Property Agents",
        description: "A reliable cleaning partner is one of the most valuable assets a real estate agent or property manager can have. Pro Clean Corp works as a trusted extension of your team across Sydney, delivering rental property cleaning, vacate cleans, open house presentation preparation, sales photography prep, and end-of-tenancy deep cleans — all to a standard that protects your reputation with both landlords and tenants. We offer flexible property manager packages with priority scheduling, direct key access coordination, and completion reports for every job.",
        benefits: [
            "Rental property cleaning on a regular scheduled basis to maintain landlord and tenant satisfaction",
            "Vacate cleans following real estate agent checklists for fast bond release and smooth tenant transitions",
            "Open house presentation cleaning ensures properties show at their absolute best for inspections and marketing",
            "Sales photography preparation clean — the deep clean that makes professional photography shine and maximises sale price",
            "End-of-tenancy deep clean covering carpets, windows, kitchen, bathrooms, and all surfaces to a presentation standard",
            "Property manager packages with account terms, priority scheduling, and single invoice billing for easy trust accounting"
        ],
        process: [
            "Account setup with your agency — we assign a dedicated account manager, establish key access protocols, and agree on service standards for your property portfolio",
            "Property cleaning completed to your agency's specific checklist — room by room, following the standard your property managers and landlords expect",
            "Photographic completion report provided for every job — evidence of the clean condition for bond disputes, landlord reporting, and your records",
            "Direct communication with your property manager if any issues arise during the clean — transparent reporting and no surprises"
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
                question: "Do you offer cleaning accounts for real estate agencies in Sydney?",
                answer: "Yes. We offer account terms for established real estate agencies and property management companies. Account clients receive priority scheduling, a dedicated account manager, consolidated monthly invoicing, and agreed service rate cards. Contact us to discuss setting up an agency account."
            },
            {
                question: "Do you provide vacate cleaning with a bond guarantee in Sydney?",
                answer: "Yes. Our vacate cleans are performed to real estate agent inspection checklists and come with our re-clean guarantee — if the property manager identifies any area that does not meet standard on first inspection, we return to rectify at no charge, provided we are notified within 72 hours of completion."
            },
            {
                question: "Can you clean properties at short notice for open houses?",
                answer: "Yes. We understand that real estate timelines move fast. We maintain capacity for short-notice bookings and can typically accommodate open house presentation cleans with 24–48 hours notice. Contact us directly for urgent bookings."
            },
            {
                question: "Do you handle key collection from real estate agencies?",
                answer: "Yes. We are fully experienced with key management for rental properties. We collect keys from your office, complete the clean, and return keys with a signed completion sheet. We follow your agency's key security protocols and can accommodate lockbox access as an alternative."
            },
            {
                question: "What does a sales photography preparation clean include?",
                answer: "A sales photography prep clean is a high-detail presentation clean designed to make every room photograph beautifully. It includes full internal window cleaning, kitchen and bathroom deep clean, carpet vacuuming and spot treatment, floor polishing, surface wipe-down throughout, and attention to all visible details including light switches, door frames, and skirting boards."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Real estate cleaning Sydney property agents vacate open house" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp real estate cleaning Sydney property management" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Real Estate Cleaning Sydney"
                serviceDescription="Trusted real estate cleaning services for Sydney property agents and managers including rental property cleaning, vacate cleans, open house presentation, sales photography prep, and property manager packages."
                serviceUrl="/real-estate-cleaning-sydney"
                serviceType="Real Estate Cleaning"
                price="$$"
                additionalServices={["Vacate Cleaning", "Open House Cleaning", "Sales Photography Prep", "Rental Property Cleaning", "End-of-Tenancy Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
