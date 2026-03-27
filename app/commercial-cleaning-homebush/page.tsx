import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Homebush NSW | Professional Business Cleaners | Pro Clean Corp',
    description: 'Expert commercial cleaning in Homebush NSW. Olympic Park precinct offices, event venues, retail & strata. Fully insured, police-checked. Call Pro Clean Corp today!',
    keywords: 'commercial cleaning Homebush, office cleaning Homebush, business cleaning Homebush NSW, event venue cleaning Homebush, Olympic Park cleaning services',
    openGraph: {
        title: 'Commercial Cleaning Homebush NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning for Homebush offices, Olympic Park venues, retail centres, and strata complexes. Trusted by Inner West and Sydney Olympic Park precinct businesses.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-homebush',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Homebush NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-homebush' },
};

export default function HomebushCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Homebush NSW",
        description: "Homebush sits at the epicentre of one of Sydney's most dynamic commercial and events precincts, anchored by Sydney Olympic Park and surrounded by dense retail, strata, and office development that generates constant demand for professional cleaning services. Pro Clean Corp delivers commercial cleaning across the full Homebush corridor — from corporate offices and government facilities around the Olympic Park precinct to retail strips, hospitality venues, and high-rise strata complexes along Homebush Bay Drive and Underwood Road. Our teams are experienced in the unique rhythm of event-adjacent cleaning, where turnaround times can be tight and presentation standards are non-negotiable. We operate around the clock with early morning, evening, and post-event cleaning crews available to ensure your Homebush business is always ready to impress clients, residents, and visitors alike.",
        benefits: [
            "Event precinct cleaning for venues and facilities adjacent to Sydney Olympic Park",
            "Corporate office cleaning for Homebush and Olympic Park commercial towers",
            "High-rise strata and apartment lobby cleaning in the Homebush Bay precinct",
            "Retail and hospitality cleaning with flexible scheduling around trading hours",
            "Post-event rapid turnaround cleaning for conference and exhibition facilities",
            "Specialist hard-floor care for polished concrete, marble, and commercial tile surfaces"
        ],
        process: [
            "Free Homebush site assessment and operational requirements review",
            "Custom cleaning plan designed around your Homebush venue or office schedule",
            "Professional cleaning by uniformed, police-checked technicians with event-precinct experience",
            "Quality inspection and sign-off with a dedicated Homebush account manager"
        ],
        whyChooseUs: [
            "15+ years serving Homebush and the Sydney Olympic Park precinct",
            "Fully insured with $20M public liability coverage",
            "Police-checked, uniformed, and professionally trained cleaning staff",
            "Commercial-grade eco-friendly cleaning products",
            "Flexible day, evening, weekend, and post-event scheduling",
            "100% satisfaction guarantee on every clean"
        ],
        serviceAreas: ["Strathfield", "Homebush West", "Concord", "Rhodes", "Auburn", "Granville", "Burwood", "Flemington"],
        faqs: [
            {
                question: "Do you provide post-event cleaning for venues in the Sydney Olympic Park precinct?",
                answer: "Yes. Post-event cleaning is one of our core specialisations in the Homebush area. We deploy rapid-response crews immediately after conferences, exhibitions, and corporate events, restoring venues to a presentation-ready condition with fast turnaround times that meet your next booking's requirements."
            },
            {
                question: "Can you clean high-rise strata complexes and apartment lobbies in Homebush?",
                answer: "Absolutely. We service numerous strata complexes throughout the Homebush Bay and Olympic Park precinct, providing lobby cleaning, lift cleaning, common area maintenance, car park sweeping, and bin room hygiene services on daily, weekly, or scheduled programs."
            },
            {
                question: "Do you offer cleaning for government and corporate offices around Olympic Park?",
                answer: "Yes. We have extensive experience cleaning government facilities and corporate offices throughout the Olympic Park commercial zone. Our staff are police-checked and we can meet the additional security and access requirements that government and institutional clients often require."
            },
            {
                question: "Can you schedule cleaning outside business hours for Homebush retail businesses?",
                answer: "Definitely. We offer early morning, late evening, and weekend cleaning specifically designed for Homebush retailers, hospitality businesses, and gyms who need spotless premises before opening without disrupting customers or staff during trading hours."
            },
            {
                question: "What hard-floor maintenance services do you offer for Homebush commercial buildings?",
                answer: "We provide a full range of hard-floor care including machine scrubbing, polishing, strip and seal for vinyl, grout cleaning for tiles, and buffing for polished concrete. These services are ideal for the high-traffic foyers and lobbies common throughout the Homebush commercial precinct."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Homebush NSW" },
            { src: "/images/services/office.webp", alt: "Office and venue cleaning Homebush Olympic Park precinct" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Homebush NSW"
                serviceDescription="Professional commercial cleaning for offices, event venues, retail centres, and strata complexes in Homebush and the Sydney Olympic Park precinct."
                serviceUrl="/commercial-cleaning-homebush"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
