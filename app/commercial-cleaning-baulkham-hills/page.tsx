import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Baulkham Hills NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Baulkham Hills NSW. Corporate offices, medical suites & Hills District businesses. Fully insured. Free quotes.',
    keywords: 'commercial cleaning Baulkham Hills, office cleaning Baulkham Hills, business cleaning Baulkham Hills NSW, cleaners Baulkham Hills',
    openGraph: { title: 'Commercial Cleaning Baulkham Hills NSW | Pro Clean Corp', description: 'Professional commercial cleaning in Baulkham Hills NSW. Corporate offices, medical suites & Hills District businesses. Fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-baulkham-hills', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Baulkham Hills NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-baulkham-hills' },
};

export default function BaulkhamHillsCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Baulkham Hills NSW",
        description: "Baulkham Hills is one of Sydney's most prominent Hills District business addresses, sitting alongside the Norwest Business Park and home to a dense concentration of corporate offices, medical centres, showrooms, and professional services. Pro Clean Corp delivers high-standard commercial cleaning across Baulkham Hills, serving everything from large multi-tenant office buildings to GP clinics and specialist suites. Our Baulkham Hills cleaning teams understand the elevated presentation expectations of this corporate community and deliver consistent, thorough results on every visit.",
        benefits: [
            "Corporate office cleaning for Baulkham Hills and Norwest Business Park tenants, including technology firms, financial services, and national headquarters",
            "Medical centre cleaning with infection-control-compliant protocols for Baulkham Hills GP practices, specialist suites, and dental clinics",
            "Showroom and retail cleaning for Baulkham Hills car dealerships, homewares, and lifestyle businesses where first impressions drive sales",
            "Eco-certified products that maintain excellent indoor air quality for Baulkham Hills office environments and protect staff wellbeing",
            "After-hours corporate cleaning scheduled before 7am or after 6pm with consistent, security-vetted staff holding site access",
            "Carpet maintenance and hard floor care programs to extend flooring life in Baulkham Hills offices and commercial spaces"
        ],
        process: ["Free Baulkham Hills site assessment", "Custom cleaning plan for your Baulkham Hills business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Baulkham Hills and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Castle Hill", "Norwest", "Bella Vista", "Cherrybrook", "Pennant Hills", "Kellyville", "Winston Hills", "Seven Hills"],
        faqs: [
            { question: "What commercial properties do you clean in Baulkham Hills?", answer: "We clean corporate offices, medical centres, dental practices, showrooms, retail stores, gyms, and strata buildings throughout Baulkham Hills. Our team regularly services tenants within the Norwest Business Park and along the Windsor Road commercial corridor." },
            { question: "How much does commercial cleaning cost in Baulkham Hills?", answer: "Rates in Baulkham Hills typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Baulkham Hills?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Baulkham Hills business." },
            { question: "Are your Baulkham Hills cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Do you service offices in the Norwest Business Park near Baulkham Hills?", answer: "Yes, Norwest Business Park is one of our busiest service areas. We clean a wide range of corporate, healthcare, and technology tenants in the park. Our Baulkham Hills team is familiar with the park's access and security requirements and can be inducted for specific building management systems." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Baulkham Hills NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Baulkham Hills" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Baulkham Hills NSW" serviceDescription="Professional commercial cleaning in Baulkham Hills NSW. Corporate offices, medical suites & Hills District businesses. Fully insured. Free quotes." serviceUrl="/commercial-cleaning-baulkham-hills" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
