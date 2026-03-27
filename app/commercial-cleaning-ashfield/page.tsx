import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Ashfield NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Ashfield NSW. Serving offices, restaurants & retail along Liverpool Rd. Fully insured, police-checked. Free quotes.',
    keywords: 'commercial cleaning Ashfield, office cleaning Ashfield, business cleaning Ashfield NSW, cleaners Ashfield',
    openGraph: { title: 'Commercial Cleaning Ashfield NSW | Pro Clean Corp', description: 'Professional commercial cleaning in Ashfield NSW. Serving offices, restaurants & retail along Liverpool Rd. Fully insured, police-checked. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-ashfield', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Ashfield NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-ashfield' },
};

export default function AshfieldCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Ashfield NSW",
        description: "Ashfield's Liverpool Road multicultural strip is one of Sydney's busiest inner-west precincts, packed with restaurants, retailers, medical suites, and professional offices that all require immaculate, reliable cleaning. Pro Clean Corp has been servicing Ashfield businesses for over 15 years, providing tailored commercial cleaning programs that match the unique demands of each venue type. Whether you run a bustling café, a busy medical practice, or a corporate office near Ashfield station, our uniformed team delivers a consistent, high-standard clean every visit.",
        benefits: [
            "Restaurant and food-service deep cleaning for Ashfield's diverse Liverpool Rd dining strip, including grease-trap surrounds and kitchen sanitisation",
            "Medical and allied health cleaning with infection-control-compliant products for Ashfield clinics and specialist suites",
            "High-footfall retail floor polishing and shopfront maintenance to keep Ashfield stores looking sharp daily",
            "Eco-friendly, odour-neutralising products suited to Ashfield's food-heavy business mix",
            "Flexible after-hours and early-morning scheduling so Ashfield businesses stay disruption-free",
            "Consistent staff allocation so your Ashfield team always knows who is on site"
        ],
        process: ["Free Ashfield site assessment", "Custom cleaning plan for your Ashfield business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Ashfield and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Summer Hill", "Croydon", "Burwood", "Strathfield", "Campsie", "Leichhardt", "Haberfield", "Homebush"],
        faqs: [
            { question: "What commercial properties do you clean in Ashfield?", answer: "We clean all types of commercial premises in Ashfield including offices, restaurants, cafés, retail stores, medical centres, strata buildings, and warehouses. Our team is particularly experienced with the food and hospitality businesses concentrated along Liverpool Road." },
            { question: "How much does commercial cleaning cost in Ashfield?", answer: "Rates in Ashfield typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Ashfield?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Ashfield business." },
            { question: "Are your Ashfield cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Can you handle commercial kitchen cleaning for Ashfield restaurants?", answer: "Yes. We provide comprehensive commercial kitchen deep-cleaning for Ashfield restaurants and food businesses, including degreasing of extraction hoods, sanitising of food-prep surfaces, and cleaning of cool rooms — all meeting NSW Food Authority hygiene standards." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Ashfield NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Ashfield" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Ashfield NSW" serviceDescription="Professional commercial cleaning in Ashfield NSW. Serving offices, restaurants & retail along Liverpool Rd. Fully insured, police-checked. Free quotes." serviceUrl="/commercial-cleaning-ashfield" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
