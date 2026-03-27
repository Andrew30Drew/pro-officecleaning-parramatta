import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Cherrybrook NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Cherrybrook NSW. Hills District offices, medical suites & retail cleaned to the highest standard. Fully insured. Free quotes.',
    keywords: 'commercial cleaning Cherrybrook, office cleaning Cherrybrook, business cleaning Cherrybrook NSW, cleaners Cherrybrook',
    openGraph: { title: 'Commercial Cleaning Cherrybrook NSW | Pro Clean Corp', description: 'Professional commercial cleaning in Cherrybrook NSW. Hills District offices, medical suites & retail cleaned to the highest standard. Fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-cherrybrook', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Cherrybrook NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-cherrybrook' },
};

export default function CherrybrookCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Cherrybrook NSW",
        description: "Cherrybrook is a highly desirable Hills District suburb with a growing commercial and retail sector centred around Cherrybrook Village shopping centre and the surrounding professional and medical precinct. As the area has developed rapidly following the opening of the Sydney Metro Northwest, demand for professional commercial cleaning in Cherrybrook has grown significantly. Pro Clean Corp has been serving Hills District businesses for over 15 years, delivering the consistent, high-standard cleaning that Cherrybrook's professional community expects — from medical suites and corporate offices to retail tenancies and childcare centres.",
        benefits: [
            "Cherrybrook Village tenancy and retail cleaning with thorough floor care, display maintenance, and presentation standards aligned with centre management",
            "Medical and allied health cleaning for Cherrybrook GP practices, specialist clinics, physiotherapy, and dental suites",
            "Childcare and education facility cleaning using child-safe, non-toxic products appropriate for Cherrybrook's family-focused environment",
            "Corporate office cleaning for Cherrybrook's professional services, technology, and financial services businesses",
            "Eco-friendly, low-VOC products suited to Cherrybrook's health-conscious community and indoor environments",
            "Early-morning and after-hours scheduling to keep Cherrybrook businesses clean and disruption-free"
        ],
        process: ["Free Cherrybrook site assessment", "Custom cleaning plan for your Cherrybrook business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Cherrybrook and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Pennant Hills", "Castle Hill", "West Pennant Hills", "Carlingford", "Baulkham Hills", "Beecroft", "Hornsby", "Normanhurst"],
        faqs: [
            { question: "What commercial properties do you clean in Cherrybrook?", answer: "We clean retail tenancies, medical centres, dental practices, childcare facilities, gyms, corporate offices, and strata buildings throughout Cherrybrook. Our team frequently services businesses in Cherrybrook Village shopping centre and the professional precincts around County Drive and New Line Road." },
            { question: "How much does commercial cleaning cost in Cherrybrook?", answer: "Rates in Cherrybrook typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Cherrybrook?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Cherrybrook business." },
            { question: "Are your Cherrybrook cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Do you use child-safe products for cleaning Cherrybrook childcare centres?", answer: "Yes. For Cherrybrook childcare facilities and education centres, we use non-toxic, child-safe cleaning products that meet Australian childcare regulatory requirements. Our team is also experienced in high-touch surface disinfection and safe chemical storage protocols essential for environments where children are present." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Cherrybrook NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Cherrybrook" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Cherrybrook NSW" serviceDescription="Professional commercial cleaning in Cherrybrook NSW. Hills District offices, medical suites & retail cleaned to the highest standard. Fully insured. Free quotes." serviceUrl="/commercial-cleaning-cherrybrook" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
