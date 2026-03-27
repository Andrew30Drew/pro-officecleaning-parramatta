import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Glendenning NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Glendenning NSW. Western Sydney light industrial, warehouses & offices near Blacktown. Fully insured. Free quotes.',
    keywords: 'commercial cleaning Glendenning, office cleaning Glendenning, business cleaning Glendenning NSW, cleaners Glendenning',
    openGraph: { title: 'Commercial Cleaning Glendenning NSW | Pro Clean Corp', description: 'Professional commercial cleaning in Glendenning NSW. Western Sydney light industrial, warehouses & offices near Blacktown. Fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-glendenning', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Glendenning NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-glendenning' },
};

export default function GlendenningCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Glendenning NSW",
        description: "Glendenning is a Western Sydney suburb with a significant light industrial and commercial base, positioned between Blacktown and Eastern Creek along the M7 and Richmond Road corridors. The suburb hosts a mix of trade businesses, warehousing, light manufacturing, and commercial service operators that rely on clean, safe, and well-maintained premises. Pro Clean Corp provides specialist commercial cleaning across Glendenning, with experienced teams who understand the Western Sydney industrial environment and can deliver flexible, reliable cleaning programs for businesses of all sizes.",
        benefits: [
            "Light industrial warehouse and workshop cleaning for Glendenning's trade and manufacturing businesses",
            "Commercial floor cleaning using industrial scrubbers and sweepers for Glendenning's warehouse floor plates",
            "Office and amenities cleaning for Glendenning's workforce, maintaining clean staff facilities and reception areas",
            "WHS-compliant cleaning with SWMS documentation for Glendenning's industrial and trade clients",
            "Flexible day, evening, and weekend scheduling to align with Glendenning's operational requirements",
            "Fast-response local team familiar with the Western Sydney industrial precinct around Glendenning and Blacktown"
        ],
        process: ["Free Glendenning site assessment", "Custom cleaning plan for your Glendenning business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Glendenning and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Blacktown", "Rooty Hill", "Eastern Creek", "Minchinbury", "Plumpton", "Doonside", "Kings Park", "Arndell Park"],
        faqs: [
            { question: "What commercial properties do you clean in Glendenning?", answer: "We clean light industrial units, warehouses, trade workshops, commercial offices, transport depots, and retail businesses throughout Glendenning and the surrounding Western Sydney industrial precinct near Blacktown." },
            { question: "How much does commercial cleaning cost in Glendenning?", answer: "Rates in Glendenning typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Glendenning?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Glendenning business." },
            { question: "Are your Glendenning cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Do you service industrial businesses across the entire Glendenning and Blacktown precinct?", answer: "Yes. Our Western Sydney team covers Glendenning and all surrounding suburbs including Blacktown, Eastern Creek, Minchinbury, Rooty Hill, and Arndell Park. If your business is located in the Western Sydney industrial corridor between the M7 and Richmond Road, we can service your premises reliably and efficiently." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Glendenning NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Glendenning" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Glendenning NSW" serviceDescription="Professional commercial cleaning in Glendenning NSW. Western Sydney light industrial, warehouses & offices near Blacktown. Fully insured. Free quotes." serviceUrl="/commercial-cleaning-glendenning" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
