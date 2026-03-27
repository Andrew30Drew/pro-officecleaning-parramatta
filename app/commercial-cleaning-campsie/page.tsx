import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Campsie NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Campsie NSW. Multicultural retail, restaurants & offices along Canterbury Rd. Fully insured. Free quotes.',
    keywords: 'commercial cleaning Campsie, office cleaning Campsie, business cleaning Campsie NSW, cleaners Campsie',
    openGraph: { title: 'Commercial Cleaning Campsie NSW | Pro Clean Corp', description: 'Professional commercial cleaning in Campsie NSW. Multicultural retail, restaurants & offices along Canterbury Rd. Fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-campsie', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Campsie NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-campsie' },
};

export default function CampsieCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Campsie NSW",
        description: "Campsie is one of Sydney's most vibrant multicultural commercial centres, with Canterbury Road and the surrounding streets packed with restaurants, supermarkets, medical centres, professional offices, and specialty retailers serving one of the city's most diverse communities. Pro Clean Corp has been delivering reliable commercial cleaning in Campsie for over 15 years, building lasting relationships with local businesses who depend on consistent, high-quality cleaning to maintain their reputation in this competitive retail and dining environment. We tailor every program to the specific demands of your Campsie business type.",
        benefits: [
            "Multicultural restaurant and food-hall cleaning in Campsie with thorough kitchen sanitisation, grease management, and post-service deep cleaning",
            "Retail and supermarket cleaning along Canterbury Road and Campsie's busy side streets, including floor care and display-area maintenance",
            "Medical and dental cleaning for Campsie's high-demand healthcare sector, with infection-control-compliant protocols on every visit",
            "Professional office cleaning for Campsie's accountants, real estate agencies, and professional services businesses",
            "High-frequency cleaning programs suited to Campsie's intense daily trading volumes and diverse clientele",
            "Eco-friendly, food-safe products appropriate for Campsie's food-heavy business environment"
        ],
        process: ["Free Campsie site assessment", "Custom cleaning plan for your Campsie business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Campsie and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Belmore", "Lakemba", "Ashfield", "Burwood", "Strathfield", "Punchbowl", "Canterbury", "Hurlstone Park"],
        faqs: [
            { question: "What commercial properties do you clean in Campsie?", answer: "We clean restaurants, cafés, supermarkets, retail stores, medical centres, dental practices, offices, gyms, and strata buildings throughout Campsie. Our team is particularly experienced with the high-turnover food and hospitality businesses along Canterbury Road and the Campsie town centre." },
            { question: "How much does commercial cleaning cost in Campsie?", answer: "Rates in Campsie typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Campsie?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Campsie business." },
            { question: "Are your Campsie cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Can you provide daily cleaning for busy Campsie restaurants and food businesses?", answer: "Yes. We offer daily cleaning programs for Campsie's restaurants, food halls, and takeaway businesses. This includes thorough post-service kitchen cleans, dining area sanitisation, and bathroom hygiene — all completed after trading hours so you're ready to open fresh each day." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Campsie NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Campsie" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Campsie NSW" serviceDescription="Professional commercial cleaning in Campsie NSW. Multicultural retail, restaurants & offices along Canterbury Rd. Fully insured. Free quotes." serviceUrl="/commercial-cleaning-campsie" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
