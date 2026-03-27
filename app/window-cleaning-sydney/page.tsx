
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Window Cleaning Sydney | Commercial Window Cleaning Services | Pro Clean Corp',
    description: 'Professional commercial window cleaning in Sydney. Water-fed pole system, rope access for high-rise, scissor lift access, internal and external, streak-free deionised water. Call 1300 494 983.',
    keywords: 'window cleaning sydney, commercial window cleaning, high rise window cleaning sydney, rope access window cleaning, water fed pole window cleaning, streak free window cleaning, building window cleaning sydney, shopfront window cleaning, internal external window cleaning, deionised water window cleaning',
    openGraph: {
        title: 'Window Cleaning Sydney | Commercial Window Cleaning Services | Pro Clean Corp',
        description: 'Streak-free commercial window cleaning across Sydney. Water-fed pole, rope access, and scissor lift for every building height. Internal and external. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/window-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Window cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/window-cleaning-sydney' },
};

export default function WindowCleaningPage() {
    const serviceInfo = {
        title: "Window Cleaning Sydney",
        description: "Pro Clean Corp delivers professional commercial window cleaning services across Sydney for office buildings, retail storefronts, strata complexes, hotels, schools, and industrial facilities. Clean windows project professionalism, maximise natural light, and are fundamental to the presentation of any commercial premises — yet window cleaning is one of the most technically challenging building maintenance tasks, requiring the right access method, correct water treatment, and professional technique to achieve a genuinely streak-free result. Our window cleaning teams are equipped with pure water-fed pole systems using deionised water for low and medium-rise buildings, IRATA rope access certification for high-rise towers, and scissor lift and EWP capability for mid-rise facades and atrium glazing — delivering spotless results at any building height.",
        benefits: [
            "Water-Fed Pole System: Pure, deionised water delivered through carbon fibre water-fed poles allows streak-free cleaning of windows up to 4 storeys without ladders — the water leaves no residue as it evaporates, producing a genuinely spotless finish.",
            "Rope Access for High-Rise: IRATA-certified rope access technicians abseil on purpose-designed window cleaning rigs to clean glass on high-rise commercial towers safely and cost-effectively without fixed scaffolding.",
            "Scissor Lift & EWP Access: Elevated work platforms and scissor lifts provide stable, safe access for mid-rise buildings, atrium glazing, skylights, and architectural glass features that water-fed poles cannot reach.",
            "Internal & External Cleaning: Complete internal and external window cleaning as a combined or separate service — including internal glazed partitions, curtain wall interiors, atrium glass, and shopfront internal faces.",
            "Streak-Free Deionised Water: Our pure water systems remove all dissolved minerals and impurities from the water supply, eliminating the spotting and streaking caused by tap water mineral deposits on glass surfaces as they dry.",
            "Storefronts to Skyscrapers: From a single-tenancy retail shopfront cleaned weekly to a 40-storey commercial tower with quarterly rope access cleans, we scale our service, equipment, and team to any building size or window cleaning challenge."
        ],
        process: [
            "Building Assessment & Access Planning: We assess the building height, glazing type, access constraints, and WHS requirements to select the appropriate access method — water-fed pole, rope access, EWP, or scissor lift — and prepare a Safe Work Method Statement.",
            "Pure Water Preparation: Our on-board water treatment systems produce pure deionised water at zero TDS (total dissolved solids), ensuring the water used on glass is completely mineral-free and will leave no spotting or residue as it dries.",
            "Systematic Window Cleaning: Windows are cleaned systematically — agitated with soft brushes or applicators, rinsed with pure deionised water from water-fed poles, or squeegeed clean by rope access technicians — ensuring every pane is thoroughly cleaned.",
            "Frame, Track & Sill Cleaning: Window frames, tracks, sills, and flashings are cleaned as part of our comprehensive service — not just the glass — ensuring the complete window installation is presentable and functional after every service."
        ],
        whyChooseUs: [
            "Access Capability at Any Height: Water-fed poles, rope access, scissor lifts, and EWPs give us safe access to windows at any height — from ground-floor storefronts to Sydney's tallest commercial towers.",
            "IRATA-Certified Rope Access: Our high-rise window cleaning technicians are IRATA (Industrial Rope Access Trade Association) certified, meeting the highest international safety standards for rope access work.",
            "Pure Water Technology: Our deionised water systems produce zero-TDS pure water that evaporates without leaving mineral deposits, achieving a genuinely streak-free and spotless finish that squeegee methods alone cannot always deliver.",
            "WHS Compliant: All window cleaning work at height is performed under documented Safe Work Method Statements, with risk assessments, fall arrest systems, and pedestrian exclusion zones in full compliance with NSW WHS Regulations.",
            "Flexible Scheduling: Window cleaning can be scheduled during business hours (where access permits) or outside hours to minimise any impact on tenants and building users — particularly important for busy retail and hospitality premises.",
            "Fully Insured: $20 million public liability insurance and specific work at height coverage for all window cleaning activities at any building height."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "How do you clean windows on a high-rise building in Sydney?",
                answer: "For high-rise commercial towers, we use IRATA-certified rope access technicians who work from building roof anchors, descending controlled rope systems to clean window by window. Rope access is the most cost-effective method for high-rise window cleaning — significantly cheaper than scaffolding while maintaining the highest safety standards. We also use building gondola systems where installed."
            },
            {
                question: "What is deionised water window cleaning and why is it better?",
                answer: "Tap water contains dissolved minerals — calcium, magnesium, and other salts — that leave spots and streaks on glass as the water evaporates. Our pure water systems remove all dissolved minerals through deionisation, producing zero-TDS pure water that evaporates completely clean without leaving any mineral residue. This delivers a genuinely streak-free, spot-free result — particularly visible in direct sunlight where mineral spots are most noticeable."
            },
            {
                question: "Can you clean both inside and outside windows?",
                answer: "Yes. We offer both external-only and combined internal and external window cleaning services. Internal glazing including glass partitions, internal curtain wall faces, atrium glazing, and interior shopfront glass is cleaned using traditional squeegee and detergent methods or microfibre systems appropriate for interior glass surfaces."
            },
            {
                question: "How often should commercial windows be cleaned in Sydney?",
                answer: "For Sydney CBD high-rise commercial buildings, quarterly external cleaning is the typical recommendation to address pollution deposits and salt air. Ground-floor retail storefronts in high-footfall locations benefit from weekly or fortnightly cleaning. Strata and residential buildings generally schedule bi-annual full cleans. We tailor frequency to your building's location, exposure, and presentation requirements."
            },
            {
                question: "Do you clean window frames and tracks as well as the glass?",
                answer: "Yes. Our comprehensive window cleaning service includes cleaning of all accessible window frames, reveals, tracks, sill ledges, and weep holes — not just the glass panels. Clean frames and tracks are important not only for appearance but for ensuring drainage channels remain clear and window mechanisms operate correctly."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Window cleaning Sydney - water-fed pole and rope access commercial window cleaning" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney high-rise and shopfront window cleaning" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Window Cleaning Sydney"
                serviceDescription="Professional commercial window cleaning services in Sydney. Water-fed pole system, rope access for high-rise, scissor lift access, internal and external, streak-free deionised water."
                serviceUrl="/window-cleaning-sydney"
                serviceType="Commercial Window Cleaning"
                price="$$"
                additionalServices={["High-Rise Rope Access Window Cleaning", "Water-Fed Pole Window Cleaning", "Internal Window Cleaning", "Shopfront Window Cleaning", "Strata Window Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
