
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Blind Cleaning Sydney | Venetian, Roller & Vertical Blind Cleaners | Pro Clean Corp',
    description: 'Professional blind cleaning in Sydney for all blind types. On-site and off-site ultrasonic cleaning for venetian, roller, and vertical blinds. UV protection and fabric care. Call 1300 494 983.',
    keywords: 'blind cleaning sydney, venetian blind cleaning sydney, roller blind cleaning, vertical blind cleaning, ultrasonic blind cleaning, on-site blind cleaning, blind dust removal, UV protection blinds, fabric blind cleaning, office blind cleaners sydney',
    openGraph: {
        title: 'Blind Cleaning Sydney | Venetian, Roller & Vertical Blind Cleaners | Pro Clean Corp',
        description: 'Expert blind cleaning for all blind types across Sydney. On-site or off-site ultrasonic cleaning restoring your blinds to like-new condition. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/blind-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/office.webp', alt: 'Blind cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/blind-cleaning-sydney' },
};

export default function BlindCleaningPage() {
    const serviceInfo = {
        title: "Blind Cleaning Sydney",
        description: "Pro Clean Corp delivers professional blind cleaning services across Sydney, restoring venetian blinds, roller blinds, vertical blinds, and fabric window treatments to like-new condition through specialist on-site and off-site cleaning methods. Blinds accumulate dust, allergens, nicotine film, mould spores, and UV-degrading grime that regular dusting simply cannot remove. Our technicians use a combination of ultrasonic bath technology for hard slat blinds and specialist fabric-care processes for roller and fabric blinds, ensuring thorough deep cleaning without damage to materials or UV-protective coatings. Whether servicing a single room or an entire commercial building, Pro Clean Corp provides a convenient collect, clean, and rehang service or comprehensive on-site treatment — whichever suits your schedule best.",
        benefits: [
            "All Blind Types Covered: Venetian (aluminium, timber, faux-wood), roller blinds, vertical blinds, Roman blinds, and panel glide systems all professionally cleaned.",
            "Ultrasonic Deep Cleaning: High-frequency ultrasonic bath technology removes embedded dust, grime, nicotine, and allergens from every slat and crevice.",
            "On-Site & Off-Site Options: We offer convenient on-site cleaning for large commercial installations or a full collect-clean-rehang service for thorough off-site treatment.",
            "UV Protection Preservation: Our cleaning processes protect and restore UV-blocking coatings and fabric treatments, extending the lifespan and light-filtering performance of your blinds.",
            "Mould & Allergen Removal: Specialist treatment to eliminate mould spores and dust mite allergens from fabric and hard blinds, improving indoor air quality.",
            "Fabric Care & Colour Restoration: Gentle, fabric-safe cleaning solutions restore brightness and colour vibrancy to faded or discoloured roller and fabric blinds."
        ],
        process: [
            "Inspection & Assessment: We inspect each blind type, note soiling levels, assess fabric or slat condition, and determine whether on-site or off-site ultrasonic cleaning is most appropriate.",
            "Removal & Labelling: Blinds are carefully removed, labelled for correct reinstallation, and transported to our facility or prepared for on-site treatment.",
            "Ultrasonic or Fabric Cleaning: Hard slat blinds undergo ultrasonic bath treatment. Fabric roller and vertical blinds receive specialist low-moisture deep cleaning with pH-balanced, fabric-safe solutions.",
            "Drying, Quality Check & Rehang: Blinds are fully dried, inspected for quality, and professionally refit — returned to the exact same window in perfect working order."
        ],
        whyChooseUs: [
            "Specialist Blind Cleaners: Dedicated blind cleaning technicians with experience across all blind types, materials, and commercial environments.",
            "Ultrasonic Technology: Industrial ultrasonic cleaning equipment delivers a level of cleanliness impossible to achieve with manual methods or standard wet cleaning.",
            "Convenient Collect & Rehang Service: We handle everything — removal, transportation, cleaning, and reinstallation — with minimal disruption to your home or business.",
            "UV & Fabric Protection: Our processes preserve the integrity of UV coatings, moisture barriers, and fabric treatments that protect your furnishings and maintain privacy.",
            "Commercial & Residential Expertise: We service large-scale commercial projects including office towers, hotels, schools, and aged care facilities as well as residential homes.",
            "Fully Insured: $20 million public liability insurance for complete peace of mind during all blind removal, cleaning, and reinstallation work."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "What types of blinds do you clean?",
                answer: "We clean all blind types including aluminium venetian blinds, timber venetians, faux-wood venetians, roller blinds (sunscreen, blockout, and fabric), vertical blinds, Roman blinds, and panel glide systems. Both residential and commercial blind installations are serviced."
            },
            {
                question: "What is ultrasonic blind cleaning and how does it work?",
                answer: "Ultrasonic cleaning uses high-frequency sound waves transmitted through a water bath to create microscopic bubbles that implode on contact with the blind surface. This process dislodges and removes embedded dust, grime, nicotine, grease, and allergens from every crevice of the slats without physical scrubbing that could cause damage."
            },
            {
                question: "Do you offer on-site blind cleaning or do you take them away?",
                answer: "We offer both. For large commercial installations, we can perform on-site cleaning using specialist equipment. For most residential and standard commercial jobs, we provide a convenient collect-clean-rehang service where we remove the blinds, transport them to our cleaning facility, and return them cleaned and refit within 2–5 business days."
            },
            {
                question: "Will cleaning damage the UV protection on my blinds?",
                answer: "No. Our cleaning processes are specifically designed to preserve UV-blocking and light-filtering coatings on roller and fabric blinds. We use pH-balanced, fabric-safe cleaning solutions and controlled-temperature processes that clean without degrading protective treatments."
            },
            {
                question: "Can you remove mould from fabric blinds?",
                answer: "Yes. We apply specialist anti-mould treatments during the cleaning process to remove existing mould growth from fabric blinds and inhibit regrowth. Severely mould-damaged blinds may have permanent staining, but we will advise you on expected outcomes during our initial inspection."
            }
        ],
        images: [
            { src: "/images/services/office.webp", alt: "Blind cleaning Sydney - venetian and roller blind cleaning" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney professional blind cleaning service" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Blind Cleaning Sydney"
                serviceDescription="Professional blind cleaning services in Sydney for venetian, roller, and vertical blinds. On-site and off-site ultrasonic cleaning with UV protection and fabric care."
                serviceUrl="/blind-cleaning-sydney"
                serviceType="Blind & Window Treatment Cleaning"
                price="$$"
                additionalServices={["Venetian Blind Cleaning", "Roller Blind Cleaning", "Vertical Blind Cleaning", "Ultrasonic Cleaning", "Blind Rehang Service"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
