import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Condell Park NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Condell Park NSW. Southwest Sydney industrial, warehouses & offices near Bankstown. Fully insured. Free quotes.',
    keywords: 'commercial cleaning Condell Park, office cleaning Condell Park, business cleaning Condell Park NSW, cleaners Condell Park',
    openGraph: { title: 'Commercial Cleaning Condell Park NSW | Pro Clean Corp', description: 'Professional commercial cleaning in Condell Park NSW. Southwest Sydney industrial, warehouses & offices near Bankstown. Fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-condell-park', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Condell Park NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-condell-park' },
};

export default function CondellParkCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Condell Park NSW",
        description: "Condell Park is a southwest Sydney suburb with a significant industrial and commercial base, hosting light and medium manufacturing, automotive businesses, trade suppliers, and logistics operators alongside a busy retail and services sector along Eldridge Road and surrounding streets. Pro Clean Corp delivers dependable commercial cleaning across Condell Park, with programs tailored to the specific demands of industrial facilities, retail businesses, and the medical and professional offices that serve this growing southwest Sydney community. Our local team provides fast response times and consistent, high-quality results for every Condell Park client.",
        benefits: [
            "Industrial and warehouse cleaning for Condell Park's light manufacturing, automotive, and trade businesses",
            "Retail and commercial strip cleaning along Eldridge Road and Condell Park's neighbourhood shopping areas",
            "Medical and dental cleaning for Condell Park's healthcare providers, using infection-control-compliant protocols",
            "Office and professional services cleaning for Condell Park's accountants, real estate agencies, and business operators",
            "Flexible scheduling including after-hours and weekend cleans for Condell Park's diverse business mix",
            "WHS-compliant industrial cleaning with documented risk assessments for Condell Park's manufacturing and trade clients"
        ],
        process: ["Free Condell Park site assessment", "Custom cleaning plan for your Condell Park business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Condell Park and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Bankstown", "Revesby", "Punchbowl", "Bass Hill", "Chullora", "Greenacre", "Panania", "East Hills"],
        faqs: [
            { question: "What commercial properties do you clean in Condell Park?", answer: "We clean warehouses, light industrial units, automotive workshops, retail stores, medical centres, dental practices, offices, and trade showrooms throughout Condell Park and the surrounding southwest Sydney area." },
            { question: "How much does commercial cleaning cost in Condell Park?", answer: "Rates in Condell Park typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Condell Park?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Condell Park business." },
            { question: "Are your Condell Park cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Can you service both industrial and retail premises in Condell Park?", answer: "Yes. Pro Clean Corp is experienced across the full commercial spectrum in Condell Park, from light industrial and warehouse environments to retail shopfronts and professional offices. We tailor our approach, products, and equipment to suit the specific requirements of each Condell Park premises type." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Condell Park NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Condell Park" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Condell Park NSW" serviceDescription="Professional commercial cleaning in Condell Park NSW. Southwest Sydney industrial, warehouses & offices near Bankstown. Fully insured. Free quotes." serviceUrl="/commercial-cleaning-condell-park" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
