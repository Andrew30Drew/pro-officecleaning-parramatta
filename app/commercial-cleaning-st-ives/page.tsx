import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning St Ives NSW | Village Retail & Professional Office Cleaners | Pro Clean Corp',
    description: 'Premium commercial cleaning in St Ives NSW. Village shopping centre, professional offices & Upper North Shore businesses. Fully insured. Free quote today.',
    keywords: 'commercial cleaning St Ives, office cleaning St Ives, retail cleaning St Ives NSW, commercial cleaners Upper North Shore, business cleaning St Ives Chase',
    openGraph: {
        title: 'Commercial Cleaning St Ives NSW | Pro Clean Corp',
        description: 'Premium commercial cleaning in St Ives NSW. Village retail, professional offices & Upper North Shore businesses. Police-checked, $20M insured. Free quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-st-ives',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning St Ives NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-st-ives' },
};

export default function StIvesCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning St Ives NSW",
        description: "St Ives is one of Sydney's most prestigious Upper North Shore communities, home to a thriving village shopping centre, a concentration of professional service businesses, specialist medical and allied health practices, and a discerning residential population that expects the highest standards from every local business. Pro Clean Corp delivers premium commercial cleaning services to St Ives businesses that reflect the quality and character of this exceptional suburb. From meticulous maintenance cleaning for professional suites along Mona Vale Road to pristine retail presentation at the St Ives Village Shopping Centre, our cleaning programs are designed to help St Ives businesses make the best possible impression on their clients, staff and community every single day.",
        benefits: [
            "Premium office and professional suite cleaning for St Ives' lawyers, accountants and consultancies",
            "Specialist medical and allied health cleaning using hospital-grade disinfectants and protocols",
            "Retail shop and village shopping centre cleaning that showcases your products beautifully",
            "Childcare and early learning centre cleaning with strict hygiene and safety standards",
            "Window and glass cleaning to maximise street-front appeal across the St Ives village precinct",
            "Eco-friendly products appropriate for the bush-adjacent environment surrounding St Ives"
        ],
        process: [
            "Free on-site consultation at your St Ives premises to understand your specific requirements",
            "Premium cleaning program tailored to your industry, operating hours and business standards",
            "Delivery by vetted, police-checked, uniformed professionals who respect your environment",
            "Regular quality reviews and dedicated account management for consistent excellence"
        ],
        whyChooseUs: [
            "15+ years serving St Ives and the Upper North Shore professional and retail community",
            "$20M public liability insurance appropriate for premium North Shore commercial premises",
            "Police-checked, reference-verified staff trusted in high-value business environments",
            "Eco-friendly, biodegradable products safe for the surrounding Ku-ring-gai bushland environment",
            "Discreet, professional service that reflects the standards your clients expect",
            "100% satisfaction guarantee with prompt attention to any concern raised"
        ],
        serviceAreas: [
            "Pymble", "Gordon", "Turramurra", "Wahroonga", "Killara", "West Pymble", "Ku-ring-gai", "Frenchs Forest"
        ],
        faqs: [
            {
                question: "Do you provide cleaning for professional offices and legal firms in St Ives?",
                answer: "Yes. Professional service firms in St Ives — including law firms, accounting practices, financial planning offices and consulting businesses — are among our most valued clients. We provide discreet, high-quality maintenance cleaning scheduled outside business hours, with staff who understand the importance of confidentiality, attention to detail and the professional image you project to clients."
            },
            {
                question: "Can you clean medical and allied health practices in St Ives?",
                answer: "Absolutely. We specialise in medical and allied health facility cleaning across the Upper North Shore. Our protocols comply with AS/NZS 4187 infection control guidelines and we use TGA-listed, hospital-grade disinfectants on all clinical and high-touch surfaces. We clean general practitioner clinics, specialist consulting rooms, physiotherapy practices, dental offices and psychology suites throughout St Ives."
            },
            {
                question: "Do you offer retail cleaning for St Ives Village Shopping Centre tenants?",
                answer: "Yes. We provide comprehensive retail cleaning programs for shopping centre tenants and standalone retailers in St Ives. Our retail cleaning services cover shop floors, windows, display areas, fitting rooms, stockrooms and customer amenities. We schedule all retail cleans outside or before trading hours to ensure your store is perfectly presented when the doors open each day."
            },
            {
                question: "Are your products safe for use near St Ives' bushland environment?",
                answer: "Yes. St Ives borders significant Ku-ring-gai National Park bushland, and we take our environmental responsibility seriously. All cleaning products used in St Ives are biodegradable, phosphate-free and selected to minimise environmental impact. We are committed to sustainable cleaning practices that protect the natural environment this community values so highly."
            },
            {
                question: "Do you provide childcare and early learning centre cleaning in St Ives?",
                answer: "Yes. We have dedicated childcare cleaning programs for early learning centres throughout St Ives. Our childcare cleaning uses non-toxic, child-safe products approved for use in environments where children play and learn. We clean and sanitise all surfaces including toys, play equipment areas, bathrooms, nappy change areas and kitchens to the highest hygiene standard."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning St Ives NSW" },
            { src: "/images/services/office.webp", alt: "Professional office cleaning St Ives NSW" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning St Ives NSW"
                serviceDescription="Premium commercial cleaning services in St Ives NSW covering professional offices, medical practices, retail shops and childcare centres across the Upper North Shore."
                serviceUrl="/commercial-cleaning-st-ives"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
