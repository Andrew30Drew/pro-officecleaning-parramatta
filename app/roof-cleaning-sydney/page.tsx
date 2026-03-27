import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Roof Cleaning Sydney | Commercial Roof & Gutter Cleaning | Pro Clean Corp',
    description: 'Commercial roof cleaning across Sydney. Soft wash and pressure wash for lichen, algae, and moss removal on Colorbond, terracotta, flat roofs, and gutter clearing.',
    keywords: 'roof cleaning sydney, commercial roof cleaning sydney, gutter cleaning sydney, lichen removal roof sydney, algae removal roof, moss removal roof sydney, colorbond roof cleaning, terracotta tile cleaning, flat roof cleaning sydney, soft wash roof cleaning',
    openGraph: {
        title: 'Roof Cleaning Sydney | Commercial Roof & Gutter Cleaning | Pro Clean Corp',
        description: 'Commercial roof cleaning across Sydney. Soft wash and pressure wash for lichen, algae, and moss removal on Colorbond, terracotta tiles, and flat commercial roofs with gutter clearing.',
        url: 'https://www.procleancorp.com.au/roof-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Roof cleaning Sydney commercial soft wash lichen algae removal' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/roof-cleaning-sydney' },
};

export default function RoofCleaningSydneyPage() {
    const serviceInfo = {
        title: "Roof Cleaning Sydney | Commercial Roof & Gutter Cleaning",
        description: "A clean roof protects your building, extends the life of your roofing materials, and maintains the property's appearance and value. Pro Clean Corp provides commercial roof cleaning across Sydney using soft wash techniques for delicate surfaces and pressure washing for robust materials. We remove lichen, algae, moss, and organic growth from Colorbond metal roofs, terracotta tiles, concrete tiles, and flat commercial roofing systems — all while complying with working at heights regulations and protecting surrounding areas from runoff. Gutter clearing is included as part of our roof maintenance service.",
        benefits: [
            "Soft wash technique for Colorbond and terracotta roofs removes lichen, algae, and moss without damaging paint, coatings, or tile glazing",
            "Pressure washing for robust concrete tiles and flat commercial roofing removes heavy biological growth and debris buildup",
            "Lichen, algae, and moss removal extends roof life by eliminating organisms that trap moisture and accelerate corrosion and tile degradation",
            "Colorbond and terracotta tile cleaning preserves manufacturer warranties and maintains the visual appearance of the building",
            "Flat commercial roof cleaning keeps drainage pathways clear and surfaces free of debris that can cause ponding and membrane damage",
            "Gutter clearing included — blocked gutters are cleaned out and checked for proper flow to prevent overflow and fascia damage"
        ],
        process: [
            "Site inspection and safety assessment — we assess the roof type, pitch, height, access requirements, and develop a safe work method statement compliant with WorkSafe NSW working at heights regulations",
            "Biological growth pre-treatment — lichen, moss, and algae are pre-treated with appropriate biocidal solutions to kill growth at the root level before washing begins",
            "Roof cleaning using the appropriate method: soft wash for Colorbond and tiles, pressure washing for concrete and flat roofing — plus gutter clearing throughout",
            "Post-clean inspection, runoff management, and optional protective coating application to extend the interval between cleanings"
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
                question: "What is soft wash roof cleaning and when is it used?",
                answer: "Soft washing is a low-pressure cleaning method that relies on the chemical action of biocides and cleaners rather than high water pressure to remove biological growth. It is used on surfaces that could be damaged by high pressure — particularly Colorbond metal roofing (which can dent or have its paint coating damaged) and terracotta or glazed tiles (which can crack or have their glaze stripped). Soft wash kills lichen, algae, and moss at the root level without damaging the roofing material."
            },
            {
                question: "Can you clean Colorbond roofs without voiding the warranty?",
                answer: "Yes. We clean Colorbond steel roofing using soft wash techniques and low-pressure rinsing that are compatible with BlueScope's Colorbond warranty requirements. High-pressure washing at close range can damage Colorbond paint coatings and may void the manufacturer's warranty — we specifically avoid this. Our biocidal treatments are safe for Zincalume and Colorbond substrates."
            },
            {
                question: "Do you clear gutters as part of your roof cleaning service?",
                answer: "Yes. Gutter clearing is included as part of our standard roof cleaning service. Blocked gutters are a common consequence of organic growth and debris on roofs, and clearing them is essential to ensure proper stormwater drainage. We clear leaf matter, moss, dirt, and blockages from all gutters and downpipes and check for proper flow before completion."
            },
            {
                question: "How often should commercial roofs be cleaned in Sydney?",
                answer: "Most commercial roofs in Sydney's environment benefit from cleaning every 2–3 years to prevent significant biological growth buildup. Buildings in tree-lined areas, near the coast, or in humid environments may require annual cleaning. Flat roofs with drainage systems should be inspected and cleared more frequently — we recommend a minimum of annual inspections for flat commercial roofs."
            },
            {
                question: "Are your roof cleaners certified to work at heights in Sydney?",
                answer: "Yes. All Pro Clean Corp staff performing roof cleaning hold current Working at Heights certification. We use appropriate fall arrest equipment, safety harnesses, roof anchor systems, and elevated work platforms (EWPs) where required. A safe work method statement (SWMS) is prepared for every roof cleaning job in compliance with WorkSafe NSW regulations."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Roof cleaning Sydney commercial soft wash lichen algae removal" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp commercial roof gutter cleaning Sydney" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Roof Cleaning Sydney"
                serviceDescription="Commercial roof cleaning across Sydney using soft wash and pressure washing for lichen, algae, and moss removal on Colorbond, terracotta, flat roofs, and gutter clearing with safety-compliant teams."
                serviceUrl="/roof-cleaning-sydney"
                serviceType="Roof Cleaning"
                price="$$"
                additionalServices={["Soft Wash Roof Cleaning", "Gutter Clearing", "Lichen Removal", "Algae Removal", "Colorbond Roof Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
