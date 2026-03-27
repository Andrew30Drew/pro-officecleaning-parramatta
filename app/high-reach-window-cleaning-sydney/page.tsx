import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'High Reach Window Cleaning Sydney | High-Rise Window Cleaning | Pro Clean Corp',
    description: 'High reach window cleaning in Sydney. Water-fed poles up to 6 storeys, rope access for high-rise, boom lifts, curtain wall systems, streak-free deionised water. WorkSafe certified.',
    keywords: 'high reach window cleaning sydney, high rise window cleaning sydney, water fed pole cleaning sydney, rope access window cleaning, boom lift window cleaning, curtain wall cleaning, commercial window cleaning sydney, streak-free window cleaning, deionised water window cleaning',
    openGraph: {
        title: 'High Reach Window Cleaning Sydney | High-Rise Window Cleaning | Pro Clean Corp',
        description: 'High reach and high-rise window cleaning in Sydney. Water-fed poles, rope access, and boom lifts for streak-free results on buildings of any height. WorkSafe certified.',
        url: 'https://www.procleancorp.com.au/high-reach-window-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'High reach window cleaning Sydney high rise water fed poles' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/high-reach-window-cleaning-sydney' },
};

export default function HighReachWindowCleaningSydneyPage() {
    const serviceInfo = {
        title: "High Reach Window Cleaning Sydney | High-Rise Specialists",
        description: "Clean windows transform the appearance of any commercial building — and when those windows are out of reach, you need a specialist. Pro Clean Corp provides high reach and high-rise window cleaning services across Sydney using the full range of access methods: water-fed carbon fibre poles for buildings up to 6 storeys, rope access by certified abseilers for multi-storey and high-rise facades, and boom lifts for complex curtain wall systems. Our deionised pure water technology delivers streak-free, residue-free results that stay cleaner for longer — without the use of soapy detergents.",
        benefits: [
            "Water-fed poles up to 6 storeys reach windows safely from the ground using deionised water for streak-free results",
            "Rope access by WorkSafe-certified abseilers for high-rise facades and buildings where other access methods cannot reach",
            "Boom lifts deployed for curtain wall systems, complex facades, and commercial buildings requiring elevated access platforms",
            "Curtain wall system cleaning including glass, aluminium framing, and facade panels cleaned as a complete system",
            "Streak-free deionised water technology — pure water leaves no mineral deposits or residue as it evaporates naturally",
            "WorkSafe certified working-at-heights team with full public liability insurance and site-specific safety management plans"
        ],
        process: [
            "Site assessment to determine building height, access requirements, facade type, and the safest and most effective cleaning method for each section",
            "Risk assessment and safe work method statement (SWMS) prepared — all working at heights activities follow WorkSafe NSW regulations",
            "Window cleaning using the appropriate access method: water-fed pole cleaning, rope access, or boom lift, with deionised pure water for streak-free results",
            "Final quality inspection from the ground and at height where accessible, with any missed spots addressed before completion"
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
                question: "How high can your water-fed poles reach for window cleaning in Sydney?",
                answer: "Our carbon fibre water-fed poles can reach windows up to approximately 6 storeys (around 18–21 metres) from the ground. For buildings higher than this, we use rope access by certified abseilers or boom lifts, depending on the building's design and access requirements."
            },
            {
                question: "What is deionised water window cleaning and why is it better?",
                answer: "Deionised (pure) water has had all minerals and impurities removed. When applied to glass and left to dry naturally, it evaporates without leaving any mineral deposits, spots, or residue — giving a perfectly streak-free finish. It also requires no soapy detergents, making it environmentally friendly and leaving windows cleaner for longer."
            },
            {
                question: "Do your window cleaners hold Working at Heights certification?",
                answer: "Yes. All Pro Clean Corp staff working at heights — including rope access technicians and boom lift operators — hold current Working at Heights certification issued in accordance with WorkSafe NSW requirements. We prepare site-specific safe work method statements (SWMS) for every elevated window cleaning job."
            },
            {
                question: "Can you clean curtain wall systems on commercial buildings in Sydney?",
                answer: "Yes. Curtain wall cleaning is a specialty. We clean the entire curtain wall system — glass panels, aluminium framing, silicone joints, and any cladding panels — as a complete facade. Access method (rope access or boom lift) is determined by the building's design and the manufacturer's cleaning recommendations."
            },
            {
                question: "How often should commercial high-rise windows be cleaned in Sydney?",
                answer: "For most commercial buildings in Sydney's CBD and inner suburbs, quarterly window cleaning is recommended to maintain presentation and prevent the buildup of traffic pollution, bird droppings, and environmental deposits. Coastal buildings may require more frequent cleaning due to salt spray. We offer contract pricing for regular scheduled window cleaning."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "High reach window cleaning Sydney water-fed poles high-rise" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp high-rise window cleaning Sydney" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="High Reach Window Cleaning Sydney"
                serviceDescription="High reach and high-rise window cleaning in Sydney using water-fed poles up to 6 storeys, rope access for high-rise, boom lifts, and deionised water for streak-free results on curtain wall systems."
                serviceUrl="/high-reach-window-cleaning-sydney"
                serviceType="High-Reach Window Cleaning"
                price="$$"
                additionalServices={["Water-Fed Pole Cleaning", "Rope Access Window Cleaning", "Boom Lift Window Cleaning", "Curtain Wall Cleaning", "Facade Washing"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
