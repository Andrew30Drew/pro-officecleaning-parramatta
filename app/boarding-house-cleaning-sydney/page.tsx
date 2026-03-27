
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Boarding House Cleaning Sydney | Rooming House Cleaners | Pro Clean Corp',
    description: 'Specialist boarding house and rooming house cleaning in Sydney. Multi-tenancy cleaning for common areas, kitchens, bathrooms, and laundries. Boarding house compliance standards. Call 1300 494 983.',
    keywords: 'boarding house cleaning sydney, rooming house cleaning, shared accommodation cleaning sydney, co-living cleaning sydney, multi-tenancy cleaning, common area cleaning sydney, boarding house compliance, shared kitchen cleaning, hostel cleaning sydney, weekly cleaning schedule',
    openGraph: {
        title: 'Boarding House Cleaning Sydney | Rooming House Cleaners | Pro Clean Corp',
        description: 'Professional boarding house and rooming house cleaning across Sydney. Regular schedules, deep cleaning, and compliance with NSW boarding house standards. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/boarding-house-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Boarding house cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/boarding-house-cleaning-sydney' },
};

export default function BoardingHouseCleaningPage() {
    const serviceInfo = {
        title: "Boarding House Cleaning Sydney",
        description: "Pro Clean Corp specialises in boarding house and rooming house cleaning services across Sydney, providing property owners and managers with reliable, scheduled cleaning that keeps multi-tenancy accommodations hygienic, compliant, and attractive to current and prospective tenants. Shared living environments generate intensive cleaning demands — high-traffic kitchens, shared bathrooms, laundries, and hallways require professional-grade cleaning and sanitisation on a regular basis to meet NSW Fair Trading boarding house compliance standards and prevent the buildup of grease, mould, and bacteria. Our experienced teams work to a structured weekly or fortnightly schedule, delivering consistent results that protect your investment and the wellbeing of your tenants.",
        benefits: [
            "Multi-Tenancy Expertise: Experienced in the unique cleaning demands of shared accommodation with multiple residents using common facilities.",
            "Shared Kitchen Deep Cleaning: Thorough degreasing and sanitisation of shared stovetops, ovens, rangehoods, benchtops, and communal refrigerators.",
            "Bathroom & Toilet Sanitisation: Complete disinfection of shared bathroom facilities including toilets, showers, vanities, and tiles to prevent bacteria and mould growth.",
            "Common Area Maintenance: Regular cleaning of hallways, stairwells, laundry rooms, common lounges, and entry areas to maintain presentation and hygiene.",
            "Weekly & Fortnightly Schedules: Flexible cleaning frequency tailored to your tenancy numbers, occupancy patterns, and property management requirements.",
            "NSW Boarding House Compliance: Cleaning standards aligned with NSW Fair Trading Boarding Houses Act 2012 requirements for habitable, safe, and hygienic premises."
        ],
        process: [
            "Property Assessment & Schedule Planning: We assess tenant numbers, shared facility usage, and your compliance obligations to design a cleaning schedule and checklist tailored to your property.",
            "Common Area & Hallway Cleaning: Systematic vacuuming, mopping, and surface wiping of all shared hallways, stairwells, entry areas, and common lounges.",
            "Kitchen & Bathroom Deep Clean: Full degreasing of kitchen appliances and surfaces combined with thorough bathroom disinfection and tile scrubbing to eliminate mould, limescale, and bacteria.",
            "Laundry, Bins & Final Check: Cleaning of laundry facilities, managing waste bin cycles, restocking consumables, and supervisor sign-off against a compliance-ready checklist."
        ],
        whyChooseUs: [
            "Boarding House Specialists: Specific experience in multi-tenancy and shared accommodation cleaning across Sydney's inner suburbs and Western Sydney.",
            "Compliance-Focused Cleaning: Our checklists and standards are aligned with NSW Fair Trading requirements, supporting your obligations as a registered boarding house operator.",
            "Reliable Scheduled Service: Consistent weekly or fortnightly teams who know your property and deliver dependable results every visit.",
            "Robust Cleaning Capability: Our teams and equipment are suited to the heavy-duty cleaning demands of high-traffic shared accommodation.",
            "Flexible Scheduling: Morning, afternoon, or weekend cleaning visits arranged around your tenants' occupancy and your management preferences.",
            "Fully Insured: $20 million public liability insurance covering all boarding house cleaning activities across your property."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "How often should a boarding house be professionally cleaned?",
                answer: "For most boarding houses, we recommend weekly professional cleaning of all shared common areas — kitchens, bathrooms, laundries, and hallways. Properties with higher tenant numbers or heavy usage may benefit from additional mid-week visits. We can tailor the frequency to your specific property and budget."
            },
            {
                question: "Do you clean individual boarding house rooms as well as common areas?",
                answer: "Our standard boarding house service focuses on shared common areas including kitchens, bathrooms, laundries, and hallways. We can include individual room cleaning on tenant vacate or by arrangement with your property manager. Room-by-room cleaning during occupancy requires tenant consent."
            },
            {
                question: "Can you help with boarding house compliance under NSW Fair Trading standards?",
                answer: "Yes. Our cleaning checklists and service standards are designed to support compliance with the NSW Boarding Houses Act 2012 requirements for clean, safe, and habitable premises. We can provide service records and completion reports to support your compliance documentation."
            },
            {
                question: "Do you manage rubbish bins and waste collection for boarding houses?",
                answer: "Yes. Rubbish management including bin liner changes, bin placement for council collection, and waste area cleaning is a standard part of our boarding house service. We ensure waste does not accumulate in common areas between visits."
            },
            {
                question: "Are your boarding house cleaners background-checked?",
                answer: "Yes. All Pro Clean Corp staff undergo thorough background screening. For boarding house environments we ensure our teams are trustworthy, professional, and respectful of tenants' personal space and privacy during cleaning visits."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Boarding house cleaning Sydney - common area and kitchen cleaning" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney rooming house and shared accommodation cleaning" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Boarding House Cleaning Sydney"
                serviceDescription="Specialist boarding house and rooming house cleaning services in Sydney. Regular scheduled cleaning of common areas, kitchens, bathrooms, and laundries with compliance documentation."
                serviceUrl="/boarding-house-cleaning-sydney"
                serviceType="Boarding House & Rooming House Cleaning"
                price="$$"
                additionalServices={["Common Area Cleaning", "Shared Kitchen Cleaning", "Bathroom Sanitisation", "Laundry Room Cleaning", "Waste Management"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
