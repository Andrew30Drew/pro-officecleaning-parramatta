import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Burwood NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Burwood NSW. Westfield tenants, offices & retail in this major inner-west hub. Fully insured. Free quotes.',
    keywords: 'commercial cleaning Burwood, office cleaning Burwood, business cleaning Burwood NSW, cleaners Burwood',
    openGraph: { title: 'Commercial Cleaning Burwood NSW | Pro Clean Corp', description: 'Professional commercial cleaning in Burwood NSW. Westfield tenants, offices & retail in this major inner-west hub. Fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-burwood', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Burwood NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-burwood' },
};

export default function BurwoodCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Burwood NSW",
        description: "Burwood is one of Sydney's inner-west major retail and commercial hubs, anchored by Westfield Burwood and surrounded by professional offices, medical centres, restaurants, and a high density of businesses serving the suburb's multicultural population. Pro Clean Corp delivers professional commercial cleaning across Burwood, with programs tailored to the specific demands of high-footfall retail environments, corporate office floors, and the busy hospitality and medical sectors that define this vibrant suburb. Our Burwood cleaning teams work around your trading hours to keep your premises immaculate every day.",
        benefits: [
            "Westfield Burwood tenancy and retail cleaning with high-footfall floor care, display cleaning, and presentation standards that match centre management expectations",
            "Corporate office cleaning for Burwood's professional services sector, including law firms, accountants, and financial advisers near Burwood Plaza",
            "Medical and allied health cleaning for Burwood's busy GP practices, dental clinics, and specialist suites",
            "Restaurant and café cleaning for Burwood's diverse food and hospitality strip, with after-service sanitisation and kitchen hygiene",
            "Strata and common-area cleaning for Burwood's growing apartment and mixed-use developments",
            "After-hours and early-morning scheduling to keep all Burwood businesses disruption-free during trading"
        ],
        process: ["Free Burwood site assessment", "Custom cleaning plan for your Burwood business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Burwood and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Strathfield", "Croydon", "Ashfield", "Concord", "Homebush", "Five Dock", "Drummoyne", "Campsie"],
        faqs: [
            { question: "What commercial properties do you clean in Burwood?", answer: "We clean retail tenancies, corporate offices, medical centres, restaurants, cafés, gyms, strata buildings, and warehouses throughout Burwood. Our team has extensive experience with Westfield Burwood tenants and the professional offices and medical suites concentrated around the Burwood town centre." },
            { question: "How much does commercial cleaning cost in Burwood?", answer: "Rates in Burwood typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Burwood?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Burwood business." },
            { question: "Are your Burwood cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Can you clean Westfield Burwood retail tenancies to centre management standards?", answer: "Yes. Our team is experienced in Westfield tenancy cleaning and understands the presentation standards required by centre management. We use approved products and methods, maintain audit-ready documentation, and schedule cleans to align with centre trading hours and after-hours access requirements." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Burwood NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Burwood" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Burwood NSW" serviceDescription="Professional commercial cleaning in Burwood NSW. Westfield tenants, offices & retail in this major inner-west hub. Fully insured. Free quotes." serviceUrl="/commercial-cleaning-burwood" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
