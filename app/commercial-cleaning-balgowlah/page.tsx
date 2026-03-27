import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Balgowlah NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Balgowlah NSW. Offices, medical practices & retail on the Northern Beaches. Eco-friendly, fully insured. Free quotes.',
    keywords: 'commercial cleaning Balgowlah, office cleaning Balgowlah, business cleaning Balgowlah NSW, cleaners Balgowlah',
    openGraph: { title: 'Commercial Cleaning Balgowlah NSW | Pro Clean Corp', description: 'Professional commercial cleaning in Balgowlah NSW. Offices, medical practices & retail on the Northern Beaches. Eco-friendly, fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-balgowlah', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Balgowlah NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-balgowlah' },
};

export default function BalgowlahCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Balgowlah NSW",
        description: "Balgowlah is a thriving Northern Beaches hub with a strong mix of medical practices, professional offices, cafés, and retail businesses serving the local coastal community. Pro Clean Corp has been delivering reliable commercial cleaning in Balgowlah for over 15 years, providing tailored programs for Stockland Balgowlah tenants, independent retailers, and the suburb's growing health and wellness sector. Our eco-conscious cleaning approach suits Balgowlah's community values while maintaining the high presentation standards your business demands.",
        benefits: [
            "Northern Beaches retail and Stockland Balgowlah tenancy cleaning with attention to high-footfall entry points and window presentation",
            "Medical and allied health cleaning using hospital-grade disinfection for Balgowlah GP practices, dental clinics, and physiotherapy suites",
            "Salt-air and coastal environment expertise — addressing sandy entries, salt-affected windows, and humidity-related grime unique to the Balgowlah area",
            "Biodegradable, low-toxicity products that align with Balgowlah's environmentally conscious community and protect local waterways",
            "Consistent staff allocation so your Balgowlah team knows exactly who is on site every clean",
            "Flexible early-morning and after-hours scheduling to keep your Balgowlah business disruption-free"
        ],
        process: ["Free Balgowlah site assessment", "Custom cleaning plan for your Balgowlah business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Balgowlah and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Manly", "Seaforth", "Freshwater", "Brookvale", "Dee Why", "Curl Curl", "Fairlight", "Mosman"],
        faqs: [
            { question: "What commercial properties do you clean in Balgowlah?", answer: "We clean offices, medical centres, dental practices, retail stores, cafés, gyms, and strata common areas throughout Balgowlah. Our team is experienced with Stockland Balgowlah tenancies and the independent businesses along Condamine Street and surrounding streets." },
            { question: "How much does commercial cleaning cost in Balgowlah?", answer: "Rates in Balgowlah typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Balgowlah?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Balgowlah business." },
            { question: "Are your Balgowlah cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Do you use eco-friendly products for cleaning in Balgowlah?", answer: "Yes. We use biodegradable, low-toxicity cleaning products across all our Balgowlah jobs. This is especially important for a coastal community like Balgowlah where runoff can affect local waterways and marine environments. Our products are also safer for staff and customers indoors." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Balgowlah NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Balgowlah" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Balgowlah NSW" serviceDescription="Professional commercial cleaning in Balgowlah NSW. Offices, medical practices & retail on the Northern Beaches. Eco-friendly, fully insured. Free quotes." serviceUrl="/commercial-cleaning-balgowlah" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
