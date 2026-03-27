import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Brighton-Le-Sands NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Brighton-Le-Sands NSW. Bayside restaurants, cafes & retail along The Grand Parade. Fully insured. Free quotes.',
    keywords: 'commercial cleaning Brighton-Le-Sands, office cleaning Brighton-Le-Sands, business cleaning Brighton-Le-Sands NSW, cleaners Brighton-Le-Sands',
    openGraph: { title: 'Commercial Cleaning Brighton-Le-Sands NSW | Pro Clean Corp', description: 'Professional commercial cleaning in Brighton-Le-Sands NSW. Bayside restaurants, cafes & retail along The Grand Parade. Fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-brighton-le-sands', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Brighton-Le-Sands NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-brighton-le-sands' },
};

export default function BrightonLeSandsCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Brighton-Le-Sands NSW",
        description: "Brighton-Le-Sands is one of Sydney's most scenic bayside dining and leisure destinations, with The Grand Parade lined with restaurants, cafés, and bars that attract visitors from across the city. Pro Clean Corp has been servicing Brighton-Le-Sands businesses for over 15 years, providing tailored commercial cleaning for hospitality venues, retail stores, medical practices, and professional offices along this vibrant foreshore precinct. Our team understands the intense weekend trade and high-presentation demands of bayside hospitality, and we schedule cleans to keep your venue spotless through the busiest periods.",
        benefits: [
            "Bayside hospitality cleaning for Brighton-Le-Sands' restaurants and cafés along The Grand Parade, including after-service sanitisation and kitchen hygiene",
            "Coastal environment expertise addressing salt-air affected surfaces, sandy entries, and waterfront grime in Brighton-Le-Sands venues",
            "Retail and medical cleaning for Brighton-Le-Sands' diverse commercial strip, keeping your space hygienic and welcoming",
            "High-presentation window and shopfront cleaning for Brighton-Le-Sands businesses facing the bay",
            "Weekend and after-hours scheduling to accommodate Brighton-Le-Sands' peak trade days without disruption",
            "Eco-friendly, low-toxicity products that respect the Brighton-Le-Sands foreshore environment"
        ],
        process: ["Free Brighton-Le-Sands site assessment", "Custom cleaning plan for your Brighton-Le-Sands business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Brighton-Le-Sands and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Rockdale", "Sans Souci", "Ramsgate", "Kogarah", "Monterey", "Kyeemagh", "Arncliffe", "Bexley"],
        faqs: [
            { question: "What commercial properties do you clean in Brighton-Le-Sands?", answer: "We clean restaurants, cafés, bars, retail stores, medical centres, offices, and strata buildings throughout Brighton-Le-Sands. Our team has extensive experience with the high-footfall hospitality businesses along The Grand Parade and the Brighton-Le-Sands foreshore." },
            { question: "How much does commercial cleaning cost in Brighton-Le-Sands?", answer: "Rates in Brighton-Le-Sands typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Brighton-Le-Sands?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Brighton-Le-Sands business." },
            { question: "Are your Brighton-Le-Sands cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Can you clean Brighton-Le-Sands restaurants after a busy weekend service?", answer: "Absolutely. We provide late-night and early-morning restaurant cleaning for Brighton-Le-Sands venues, covering dining areas, bathrooms, commercial kitchens, and outdoor dining spaces. Our cleans meet NSW Food Authority hygiene standards and can be completed before your next service opens." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Brighton-Le-Sands NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Brighton-Le-Sands" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Brighton-Le-Sands NSW" serviceDescription="Professional commercial cleaning in Brighton-Le-Sands NSW. Bayside restaurants, cafes & retail along The Grand Parade. Fully insured. Free quotes." serviceUrl="/commercial-cleaning-brighton-le-sands" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
