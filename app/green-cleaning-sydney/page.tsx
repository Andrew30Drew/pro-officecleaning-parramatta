
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Green Cleaning Sydney | Eco-Friendly Commercial Cleaning | Pro Clean Corp',
    description: 'Certified eco-friendly commercial cleaning in Sydney. Biodegradable products, LEED building compatibility, microfibre technology, reduced water usage, and TGA-approved safe chemicals. Call 1300 494 983.',
    keywords: 'green cleaning sydney, eco friendly cleaning sydney, sustainable commercial cleaning, biodegradable cleaning products, LEED building cleaning, green star cleaning sydney, microfibre cleaning, chemical free commercial cleaning, environmentally friendly cleaning sydney, non toxic office cleaning',
    openGraph: {
        title: 'Green Cleaning Sydney | Eco-Friendly Commercial Cleaning | Pro Clean Corp',
        description: 'Sustainable, certified eco-friendly commercial cleaning across Sydney. Biodegradable products, LEED compatibility, microfibre technology, and reduced environmental footprint. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/green-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Green cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/green-cleaning-sydney' },
};

export default function GreenCleaningPage() {
    const serviceInfo = {
        title: "Green Cleaning Sydney",
        description: "Pro Clean Corp delivers certified green and eco-friendly commercial cleaning services across Sydney for businesses committed to sustainability, occupant health, and environmental responsibility. Conventional commercial cleaning relies heavily on petrochemical-based products that introduce harmful volatile organic compounds (VOCs) into the workplace and generate chemical waste that burdens the wastewater system. Our green cleaning program replaces these with GECA-certified, biodegradable cleaning products, advanced microfibre technology that cleans effectively with dramatically reduced water consumption, and low-energy equipment — delivering cleaning results equal to or superior to conventional methods while significantly reducing your building's environmental footprint and improving indoor air quality for staff and occupants.",
        benefits: [
            "Biodegradable Certified Products: All cleaning products in our green program carry recognised Australian and international biodegradability and environmental certifications, including GECA (Good Environmental Choice Australia) and Environmental Choice marks.",
            "LEED Building Compatibility: Our green cleaning program is specifically aligned with LEED (Leadership in Energy and Environmental Design) and Green Star building cleaning requirements, supporting your building's green certification maintenance.",
            "Microfibre Technology: High-quality microfibre cloths and mop systems physically remove bacteria and allergens from surfaces using only water in many applications — eliminating the need for chemical disinfectants on low-risk surfaces and reducing chemical usage across the facility.",
            "Reduced Water Usage: Our microfibre systems and precision dilution dispensing technology reduce water consumption by up to 90% compared to conventional mop-and-bucket methods, contributing measurably to your building's water sustainability targets.",
            "Carbon Footprint Reduction: We use energy-efficient equipment, optimise team routing to reduce vehicle emissions, and select products with low embedded carbon to measurably reduce the environmental impact of your cleaning program.",
            "TGA-Approved Safe Chemicals: Where disinfectants are required, we use TGA-approved formulations that achieve clinical-standard hygiene results with minimal environmental impact and maximum safety for building occupants."
        ],
        process: [
            "Green Cleaning Audit & Strategy: We conduct a detailed audit of your current cleaning practices, product usage, and environmental footprint to develop a customised green cleaning strategy aligned with your sustainability commitments and certification requirements.",
            "Product & Equipment Transition: Conventional products are systematically replaced with GECA-certified, biodegradable alternatives. Microfibre systems are introduced across all surface cleaning and mopping applications. Staff are trained in the correct use of all new products and techniques.",
            "Sustainable Cleaning Operations: Green cleaning is delivered on your regular schedule using certified products, microfibre technology, precision dilution systems, and low-energy equipment — with no compromise to cleaning quality or hygiene standards.",
            "Environmental Reporting & Review: We provide regular environmental impact reports quantifying chemical reduction, water savings, and VOC elimination, supporting your sustainability reporting, LEED/Green Star audits, and ESG commitments."
        ],
        whyChooseUs: [
            "Certified Green Program: Our green cleaning product range carries GECA and internationally recognised environmental certifications, providing verifiable proof of your building's commitment to sustainable cleaning practices.",
            "LEED & Green Star Aligned: We understand the specific cleaning criteria embedded in LEED and Green Star certification frameworks and structure our green cleaning program to satisfy and document compliance with these requirements.",
            "Indoor Air Quality Focus: Eliminating high-VOC chemical products improves measurable indoor air quality, reducing staff sick days, allergy symptoms, and chemical sensitivities that conventional cleaning products frequently cause.",
            "No Compromise on Hygiene: Our green cleaning program achieves equivalent or superior microbiological hygiene outcomes compared to conventional chemical cleaning, validated by independent surface testing data.",
            "Sustainability Reporting: We generate the environmental performance data — chemical usage reduction, water savings, product certification records — that you need for ESG reporting, sustainability audits, and Green Star evidence submissions.",
            "Fully Insured: $20 million public liability insurance covering all eco-friendly commercial cleaning activities."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "Is green cleaning as effective at killing bacteria as conventional cleaning?",
                answer: "Yes. Modern GECA-certified green cleaning products are formulated to achieve equivalent or superior microbiological results compared to conventional petroleum-based cleaning chemicals. In many applications, microfibre technology physically removes bacteria and allergens from surfaces more effectively than chemical wiping. Where clinical-standard disinfection is required, we use TGA-approved formulations that achieve this without high environmental impact."
            },
            {
                question: "Can your green cleaning program support our LEED or Green Star certification?",
                answer: "Yes. Our green cleaning program is specifically structured to meet the cleaning criteria in LEED v4 (Environmental Cleaning category) and Green Star Interiors frameworks. We provide GECA product certification records, dilution control documentation, microfibre usage logs, and chemical usage reduction reports that serve as direct evidence for your building's green certification audit."
            },
            {
                question: "What does GECA certification mean for your cleaning products?",
                answer: "GECA (Good Environmental Choice Australia) is an independent third-party certification that verifies cleaning products meet rigorous criteria for biodegradability, low aquatic toxicity, human health safety, and reduced environmental impact across their life cycle. Products must be reformulated and retested regularly to maintain certification, ensuring ongoing compliance with environmental standards."
            },
            {
                question: "Does green cleaning cost more than conventional cleaning?",
                answer: "In most cases the cost difference is minimal. Modern green cleaning products using concentrated formulations and precision dilution systems are cost-competitive with conventional alternatives when total chemical usage is measured. Microfibre systems reduce chemical and water costs. We provide green cleaning at a price point that makes sustainable cleaning accessible without significant budget premium for the vast majority of commercial clients."
            },
            {
                question: "Can you transition our existing cleaning contract to a green program?",
                answer: "Yes. We can conduct a full green cleaning audit of your existing cleaning program and implement a phased transition to certified biodegradable products and microfibre systems, generating a baseline-to-current environmental impact comparison that demonstrates measurable sustainability improvement for your reporting."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Green cleaning Sydney - eco-friendly commercial cleaning with biodegradable products" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney LEED-compatible green and sustainable cleaning" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Green Cleaning Sydney"
                serviceDescription="Certified eco-friendly commercial cleaning services in Sydney. Biodegradable GECA-certified products, LEED building compatibility, microfibre technology, and environmental impact reporting."
                serviceUrl="/green-cleaning-sydney"
                serviceType="Eco-Friendly Commercial Cleaning"
                price="$$"
                additionalServices={["LEED Building Cleaning", "Biodegradable Product Cleaning", "Microfibre Cleaning Systems", "Indoor Air Quality Improvement", "Sustainability Reporting"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
