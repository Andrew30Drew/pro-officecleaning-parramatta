import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Merrylands NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Merrylands NSW. Stockland mall tenants, busy retail strip & offices in Western Sydney. Fully insured. Free quotes.',
    keywords: 'commercial cleaning Merrylands, office cleaning Merrylands, business cleaning Merrylands NSW, cleaners Merrylands',
    openGraph: { title: 'Commercial Cleaning Merrylands NSW | Pro Clean Corp', description: 'Professional commercial cleaning in Merrylands NSW. Stockland mall tenants, busy retail strip & offices in Western Sydney. Fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-merrylands', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Merrylands NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-merrylands' },
};

export default function MerrylandsCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Merrylands NSW",
        description: "Merrylands is one of Western Sydney's most active retail and commercial centres, anchored by the Stockland Merrylands shopping complex and surrounded by a dense strip of independent retailers, restaurants, medical practices, and professional offices along Merrylands Road and surrounding streets. Pro Clean Corp has been a trusted commercial cleaning provider across Merrylands for over 15 years, delivering high-quality cleaning programs for Stockland tenants, local businesses, and the medical and professional services sector that serves this busy Western Sydney community. Our Merrylands team is experienced with high-footfall retail environments and the consistent presentation standards that centre management and local business owners demand.",
        benefits: [
            "Stockland Merrylands tenancy cleaning with high-footfall floor care, display maintenance, and presentation standards aligned with centre management requirements",
            "Independent retail and restaurant cleaning along Merrylands Road and the surrounding commercial strip",
            "Medical and dental cleaning for Merrylands' busy GP clinics, specialist suites, and dental practices",
            "Corporate and professional office cleaning for Merrylands' accountants, real estate agencies, and financial services businesses",
            "After-hours and early-morning scheduling to keep Merrylands businesses disruption-free during peak trading hours",
            "Eco-certified products suitable for the diverse range of business types operating in Merrylands"
        ],
        process: ["Free Merrylands site assessment", "Custom cleaning plan for your Merrylands business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Merrylands and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Granville", "Parramatta", "Guildford", "Woodville", "South Granville", "Pemulwuy", "Greystanes", "Girraween"],
        faqs: [
            { question: "What commercial properties do you clean in Merrylands?", answer: "We clean Stockland Merrylands retail tenancies, independent retail stores, restaurants, cafés, medical centres, dental practices, gyms, corporate offices, and strata buildings throughout Merrylands. Our team is experienced with centre management requirements and the high-footfall retail environment of the Merrylands town centre." },
            { question: "How much does commercial cleaning cost in Merrylands?", answer: "Rates in Merrylands typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Merrylands?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Merrylands business." },
            { question: "Are your Merrylands cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Can you clean Stockland Merrylands retail tenancies to centre management standards?", answer: "Yes. Our team is experienced with major shopping centre tenancy cleaning and understands the strict presentation standards, approved product requirements, and after-hours access protocols that Stockland Merrylands centre management expects. We maintain audit-ready documentation and communicate directly with centre management where required." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Merrylands NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Merrylands" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Merrylands NSW" serviceDescription="Professional commercial cleaning in Merrylands NSW. Stockland mall tenants, busy retail strip & offices in Western Sydney. Fully insured. Free quotes." serviceUrl="/commercial-cleaning-merrylands" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
