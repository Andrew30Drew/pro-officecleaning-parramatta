import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Food Manufacturing Cleaning Sydney | HACCP Compliant Facility Cleaning | Pro Clean Corp',
    description: 'HACCP-compliant food manufacturing facility cleaning in Sydney. Food-grade sanitisers, allergen control, production line cleaning, and audit-ready documentation.',
    keywords: 'food manufacturing cleaning sydney, HACCP cleaning sydney, food-grade sanitisers, allergen control cleaning, production line cleaning sydney, food factory cleaning sydney, FDA-safe chemicals, food hygiene audit cleaning, GMP cleaning sydney',
    openGraph: {
        title: 'Food Manufacturing Cleaning Sydney | HACCP Compliant Facility Cleaning | Pro Clean Corp',
        description: 'HACCP-compliant cleaning for Sydney food manufacturers. Food-grade sanitisers, allergen control, production line sanitation, and audit-ready documentation.',
        url: 'https://www.procleancorp.com.au/food-manufacturing-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/warehouse.webp', alt: 'Food manufacturing cleaning Sydney HACCP compliant facility' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/food-manufacturing-cleaning-sydney' },
};

export default function FoodManufacturingCleaningSydneyPage() {
    const serviceInfo = {
        title: "Food Manufacturing Cleaning Sydney | HACCP-Compliant",
        description: "In food manufacturing, hygiene is a non-negotiable regulatory obligation. Pro Clean Corp delivers HACCP-compliant cleaning services for food processing facilities, production lines, cold rooms, and food manufacturing plants across Sydney. We use only food-grade, TGA-approved, and FDA-safe cleaning chemicals, apply rigorous allergen control protocols, and provide full cleaning logs for your food safety management system. Our teams are trained in GMP (Good Manufacturing Practice) standards and understand the critical requirements of FSANZ Food Standards Code compliance.",
        benefits: [
            "HACCP-compliant cleaning plans tailored to your food safety management system and audit schedule",
            "Food-grade, TGA-approved, and FDA-safe sanitisers — no chemicals that compromise product safety or food contact surfaces",
            "Allergen control cleaning protocols including colour-coded equipment and dedicated allergen zone cleaning to prevent cross-contamination",
            "Production line cleaning with minimal downtime — schedules designed around your manufacturing shifts",
            "Audit-ready documentation including signed cleaning logs, chemical usage records, and verification results for every service",
            "High-level and low-level cleaning of ceilings, walls, drains, and all structural surfaces in food production zones"
        ],
        process: [
            "Facility assessment and HACCP cleaning plan development — we map your food zones, identify critical control points, and build a site-specific cleaning schedule",
            "Pre-operational setup including appropriate PPE, food-grade chemical preparation at correct concentrations, and colour-coded equipment allocation by zone",
            "Systematic cleaning of all production areas — CIP support, allergen zone cleaning, drain cleaning, and sanitisation of all food contact and non-food contact surfaces",
            "Post-clean verification including visual inspection, ATP swab testing where required, signed cleaning logs, and photographic records for your audit trail"
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
                question: "What is HACCP-compliant cleaning and why does my food facility need it?",
                answer: "HACCP (Hazard Analysis and Critical Control Points) is the internationally recognised food safety management system required under Australian food law. HACCP-compliant cleaning means your facility's cleaning program is designed to eliminate biological, chemical, and physical hazards at critical control points. It requires documented cleaning schedules, food-grade chemicals, verification records, and trained staff — all of which Pro Clean Corp provides."
            },
            {
                question: "Do you use food-safe chemicals in food manufacturing facilities?",
                answer: "Yes. All chemicals used on food contact surfaces are food-grade, TGA-approved, and FDA-safe. We maintain full Safety Data Sheets (SDS) for every chemical used and can provide these for your chemical register. No prohibited compounds are used on food contact surfaces without explicit site approval."
            },
            {
                question: "How do you manage allergen cleaning in food manufacturing?",
                answer: "Our allergen control cleaning protocol uses a colour-coded equipment system — dedicated mops, cloths, buckets, and brushes for allergen zones. Allergen cleaning is conducted as a separate step with enhanced sanitisation and ATP verification swabs, and all results are documented for your allergen management plan."
            },
            {
                question: "Can you integrate with our production schedule to minimise downtime?",
                answer: "Yes. We design our cleaning schedules around your production shifts, including overnight, weekend, and between-shift cleaning windows. Our teams understand the time-critical nature of food manufacturing environments and work efficiently to return production areas to operational readiness as quickly as possible."
            },
            {
                question: "What documentation do you provide for food safety audits?",
                answer: "We provide a complete audit-ready documentation package for every service: signed cleaning schedules, chemical names and concentrations used, staff names and times, visual inspection sign-off, ATP swab results where applicable, and photographic evidence. All records can be provided on demand for HACCP audits, council inspections, or third-party certification audits."
            }
        ],
        images: [
            { src: "/images/services/warehouse.webp", alt: "Food manufacturing cleaning Sydney HACCP compliant production facility" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp food factory cleaning Sydney" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Food Manufacturing Cleaning Sydney"
                serviceDescription="HACCP-compliant food manufacturing facility cleaning in Sydney using food-grade sanitisers, allergen control protocols, and full audit documentation for food processing plants and production facilities."
                serviceUrl="/food-manufacturing-cleaning-sydney"
                serviceType="Food Manufacturing Cleaning"
                price="$$"
                additionalServices={["HACCP Cleaning", "Allergen Control Cleaning", "Production Line Cleaning", "Food Safety Audit Documentation", "CIP Support"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
