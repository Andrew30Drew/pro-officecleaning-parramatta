import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Coogee NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Coogee NSW. Beachside cafes, medical practices & retail near Coogee Beach. Eco-friendly, fully insured. Free quotes.',
    keywords: 'commercial cleaning Coogee, office cleaning Coogee, business cleaning Coogee NSW, cleaners Coogee',
    openGraph: { title: 'Commercial Cleaning Coogee NSW | Pro Clean Corp', description: 'Professional commercial cleaning in Coogee NSW. Beachside cafes, medical practices & retail near Coogee Beach. Eco-friendly, fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-coogee', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Coogee NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-coogee' },
};

export default function CoogeeCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Coogee NSW",
        description: "Coogee is one of Sydney's most popular beachside destinations, with Coogee Bay Road lined with high-demand cafés, restaurants, hotels, medical practices, and specialty retailers that serve a vibrant local community and waves of coastal visitors. Pro Clean Corp has been keeping Coogee businesses spotless for over 15 years, understanding the salt-air environment, the intense weekend hospitality trade, and the high-presentation standards that beachside businesses need to maintain year-round. Our Coogee cleaning programs are tailored to each business type and scheduled around your peak trading hours.",
        benefits: [
            "Beachside café and restaurant cleaning in Coogee with after-service kitchen sanitisation and coastal grime management",
            "Salt-air surface treatment and sandy entry cleaning unique to Coogee's foreshore business environment",
            "Medical, pharmacy, and allied health cleaning for Coogee's healthcare hub near Coogee Bay Road",
            "Hotel and accommodation cleaning for Coogee's visitor-facing hospitality properties",
            "Retail presentation cleaning along Coogee Bay Road, keeping shopfronts welcoming in this high-footfall strip",
            "Eco-friendly, marine-safe products that respect Coogee's beach and coastal environment"
        ],
        process: ["Free Coogee site assessment", "Custom cleaning plan for your Coogee business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Coogee and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Randwick", "Maroubra", "Bronte", "Kensington", "Kingsford", "Bondi", "Waverley", "Matraville"],
        faqs: [
            { question: "What commercial properties do you clean in Coogee?", answer: "We clean cafés, restaurants, bars, hotels, retail shops, medical centres, pharmacies, allied health practices, and strata buildings throughout Coogee. Our team is particularly experienced with the high-turnover hospitality businesses along Coogee Bay Road and the foreshore precinct." },
            { question: "How much does commercial cleaning cost in Coogee?", answer: "Rates in Coogee typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Coogee?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Coogee business." },
            { question: "Are your Coogee cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Do you use eco-friendly products for cleaning Coogee beachside businesses?", answer: "Yes. All cleaning in Coogee is performed with biodegradable, low-toxicity, and marine-safe products. This is especially important for businesses close to Coogee Beach where chemical runoff could affect the coastal environment. Our products are also safe for staff and customers and leave no harsh chemical odours." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Coogee NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Coogee" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Coogee NSW" serviceDescription="Professional commercial cleaning in Coogee NSW. Beachside cafes, medical practices & retail near Coogee Beach. Eco-friendly, fully insured. Free quotes." serviceUrl="/commercial-cleaning-coogee" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
