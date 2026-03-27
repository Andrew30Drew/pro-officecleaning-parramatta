import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Carlingford NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Carlingford NSW. Business parks, medical suites & offices in the Hills District. Fully insured. Free quotes.',
    keywords: 'commercial cleaning Carlingford, office cleaning Carlingford, business cleaning Carlingford NSW, cleaners Carlingford',
    openGraph: { title: 'Commercial Cleaning Carlingford NSW | Pro Clean Corp', description: 'Professional commercial cleaning in Carlingford NSW. Business parks, medical suites & offices in the Hills District. Fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-carlingford', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Carlingford NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-carlingford' },
};

export default function CarlingfordCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Carlingford NSW",
        description: "Carlingford is a well-established Hills District suburb with a strong commercial presence centred around the Carlingford Court shopping centre, surrounding business parks, and a dense concentration of professional offices and medical practices along Pennant Hills Road and Carlingford Road. Pro Clean Corp delivers reliable commercial cleaning across Carlingford, servicing office tenants, medical and allied health practices, retail businesses, and the light industrial operators in Carlingford's commercial precincts. Our team is local to the Hills District and understands the professional standards that Carlingford businesses expect.",
        benefits: [
            "Carlingford Court tenancy and retail cleaning with high-footfall floor care and presentation standards that meet centre management requirements",
            "Medical and allied health cleaning for Carlingford GP practices, specialist suites, physiotherapy, and dental clinics",
            "Corporate and professional office cleaning for Carlingford's business parks along Pennant Hills Road and surrounding commercial streets",
            "Eco-certified products suitable for the Hills District's family-oriented community and health-conscious workforce",
            "After-hours and early-morning cleaning schedules tailored to Carlingford office and medical trading hours",
            "Consistent staff allocation so your Carlingford team recognises who is on site every visit"
        ],
        process: ["Free Carlingford site assessment", "Custom cleaning plan for your Carlingford business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Carlingford and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Epping", "Pennant Hills", "West Pennant Hills", "Cherrybrook", "North Rocks", "Baulkham Hills", "Rydalmere", "Dundas"],
        faqs: [
            { question: "What commercial properties do you clean in Carlingford?", answer: "We clean retail tenancies, corporate offices, medical centres, dental practices, physiotherapy clinics, gyms, strata buildings, and light industrial premises throughout Carlingford. Our team regularly services businesses in Carlingford Court and the commercial precincts along Pennant Hills Road and Carlingford Road." },
            { question: "How much does commercial cleaning cost in Carlingford?", answer: "Rates in Carlingford typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Carlingford?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Carlingford business." },
            { question: "Are your Carlingford cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Do you clean medical practices in Carlingford to infection-control standards?", answer: "Yes. Our Carlingford medical cleaning programs use TGA-listed hospital-grade disinfectants and follow Australian infection control guidelines. We clean GP clinics, specialist suites, and allied health practices throughout Carlingford, with staff trained specifically in medical-environment cleaning protocols." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Carlingford NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Carlingford" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Carlingford NSW" serviceDescription="Professional commercial cleaning in Carlingford NSW. Business parks, medical suites & offices in the Hills District. Fully insured. Free quotes." serviceUrl="/commercial-cleaning-carlingford" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
