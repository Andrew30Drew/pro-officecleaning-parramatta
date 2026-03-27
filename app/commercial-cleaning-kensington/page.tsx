import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Kensington NSW | Medical, Retail & Office Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Kensington NSW. UNSW precinct offices, medical centres & retail. Eco-friendly, fully insured, police-checked. Call now!',
    keywords: 'commercial cleaning Kensington, office cleaning Kensington, medical cleaning Kensington NSW, UNSW precinct cleaning, retail cleaning Kensington Sydney',
    openGraph: {
        title: 'Commercial Cleaning Kensington NSW | Pro Clean Corp',
        description: 'Expert commercial cleaning for Kensington medical centres, retail businesses, and UNSW precinct offices. Trusted by Eastern Sydney businesses, fully insured.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-kensington',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Kensington NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-kensington' },
};

export default function KensingtonCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Kensington NSW",
        description: "Kensington occupies a strategically important position in Sydney's Eastern Suburbs, shaped by its proximity to UNSW Sydney, the Prince of Wales Hospital network, and a thriving local retail and professional services strip along Anzac Parade. This combination produces a diverse commercial landscape that includes university-affiliated research offices, specialist medical practices, dental clinics, pharmacies, student-focused retail, and boutique professional services businesses — all with distinct cleaning requirements and often high foot-traffic environments. Pro Clean Corp delivers tailored commercial cleaning across the full spectrum of Kensington business types, applying medical-grade standards to healthcare facilities, high-frequency cleaning protocols to retail and hospitality businesses, and reliable office maintenance programs to professional suites. Our Eastern Suburbs teams are discreet, professional, and experienced in working within environments that mix commercial operations with sensitive institutional settings.",
        benefits: [
            "Medical-grade cleaning for GP clinics, specialist suites, and allied health practices near UNSW",
            "High-frequency retail cleaning for busy Anzac Parade businesses and food establishments",
            "Professional office cleaning for commercial suites and university-affiliated organisations",
            "Pharmacy and health retail cleaning using appropriate food-safe and hygiene-compliant products",
            "Student accommodation and mixed-use building common area cleaning programs",
            "Eco-certified, low-chemical products aligned with UNSW precinct sustainability standards"
        ],
        process: [
            "Free Kensington site assessment reviewing your facility type and specific hygiene requirements",
            "Custom cleaning plan tailored to your Kensington business, compliance needs, and trading hours",
            "Professional cleaning by police-checked, uniformed technicians experienced in mixed commercial precincts",
            "Quality inspection, sign-off, and responsive account management for ongoing requirements"
        ],
        whyChooseUs: [
            "15+ years serving Kensington and Eastern Suburbs businesses",
            "Fully insured with $20M public liability coverage",
            "Police-checked, uniformed, and professionally trained cleaning staff",
            "Commercial-grade eco-friendly and medically approved cleaning products",
            "Flexible early morning, daytime, and evening scheduling",
            "100% satisfaction guarantee on every clean"
        ],
        serviceAreas: ["Randwick", "Kingsford", "Coogee", "Maroubra", "Pagewood", "Rosebery", "Botany", "Alexandria"],
        faqs: [
            {
                question: "Do you provide medical-grade cleaning for clinics and specialist practices in Kensington?",
                answer: "Yes. Medical cleaning is a core capability for our Kensington team. We clean GP clinics, dental practices, physiotherapy studios, and specialist medical suites using TGA-listed hospital-grade disinfectants, documented infection control protocols, and colour-coded equipment systems to prevent cross-contamination."
            },
            {
                question: "Can you clean university-affiliated offices and research spaces near UNSW?",
                answer: "Absolutely. We service a range of commercial and professional offices affiliated with or adjacent to the UNSW campus. Our staff are discreet, security-conscious, and experienced in operating within institutional settings where privacy and access protocols are important."
            },
            {
                question: "Do you offer high-frequency cleaning for busy retail and hospitality businesses on Anzac Parade?",
                answer: "Yes. For high-traffic retail, cafes, and hospitality businesses on Anzac Parade and throughout Kensington, we offer daily and multiple-times-per-week cleaning programs. Early morning pre-opening cleans are particularly popular to ensure a fresh, hygienic presentation for the first customers of the day."
            },
            {
                question: "Are your products eco-friendly and safe for use in Kensington's busy pedestrian environment?",
                answer: "All cleaning products we use in Kensington are eco-certified, low-VOC, and where required, food-safe and medically appropriate. We are conscious of the dense residential and pedestrian environment and always use products that are safe for staff, customers, and the wider community."
            },
            {
                question: "Can you clean shared common areas in mixed-use buildings in Kensington?",
                answer: "Yes. We service mixed-use commercial and residential buildings throughout Kensington, providing strata-style common area cleaning that covers lobbies, lifts, stairwells, shared amenities, and bin rooms. We can work with body corporates, building managers, or individual commercial tenants."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Kensington NSW" },
            { src: "/images/services/office.webp", alt: "Medical and office cleaning Kensington UNSW precinct" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Kensington NSW"
                serviceDescription="Professional commercial cleaning for medical centres, retail businesses, and offices in Kensington and the UNSW Eastern Suburbs precinct."
                serviceUrl="/commercial-cleaning-kensington"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
