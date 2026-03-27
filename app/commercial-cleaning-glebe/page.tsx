import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Glebe NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Glebe NSW. Inner-city cafes, galleries, university buildings & offices on Glebe Point Rd. Fully insured. Free quotes.',
    keywords: 'commercial cleaning Glebe, office cleaning Glebe, business cleaning Glebe NSW, cleaners Glebe',
    openGraph: { title: 'Commercial Cleaning Glebe NSW | Pro Clean Corp', description: 'Professional commercial cleaning in Glebe NSW. Inner-city cafes, galleries, university buildings & offices on Glebe Point Rd. Fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-glebe', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Glebe NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-glebe' },
};

export default function GlebeCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Glebe NSW",
        description: "Glebe is one of Sydney's most culturally rich inner-city neighbourhoods, with Glebe Point Road serving as a lively corridor of independent cafés, bookshops, galleries, medical practices, and professional offices. Proximity to the University of Sydney and Sydney Institute of TAFE adds a further layer of institutional cleaning demand, while Glebe's growing number of creative businesses and co-working spaces require cleaning that is both thorough and unobtrusive. Pro Clean Corp has been a trusted commercial cleaning partner for Glebe businesses for over 15 years, delivering programs as individual as the suburb itself.",
        benefits: [
            "Independent café and restaurant cleaning along Glebe Point Road, with after-service sanitisation and kitchen hygiene programs",
            "University-adjacent office and institutional cleaning for Glebe's professional and research organisations near USYD",
            "Gallery and creative studio cleaning with dust-sensitive techniques and protective protocols for artworks and equipment",
            "Medical and allied health cleaning for Glebe's GP practices, community health centres, and specialist suites",
            "Co-working space and small office cleaning tailored to Glebe's growing community of creative and tech businesses",
            "Eco-friendly, low-odour products appropriate for Glebe's health-conscious and environmentally aware business community"
        ],
        process: ["Free Glebe site assessment", "Custom cleaning plan for your Glebe business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Glebe and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Ultimo", "Pyrmont", "Newtown", "Leichhardt", "Annandale", "Forest Lodge", "Camperdown", "Chippendale"],
        faqs: [
            { question: "What commercial properties do you clean in Glebe?", answer: "We clean cafés, restaurants, retail shops, galleries, medical centres, community health facilities, co-working spaces, professional offices, and strata buildings throughout Glebe. Our team has extensive experience with the independent businesses and institutional clients along Glebe Point Road and the surrounding streets." },
            { question: "How much does commercial cleaning cost in Glebe?", answer: "Rates in Glebe typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Glebe?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Glebe business." },
            { question: "Are your Glebe cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Can you clean Glebe galleries and creative spaces without disturbing artworks or equipment?", answer: "Yes. Our Glebe team is trained in dust-sensitive cleaning techniques suitable for galleries, photography studios, and creative workspaces. We use microfibre technology and low-disturbance methods that protect artworks, equipment, and displays while achieving a thorough clean of all surfaces, floors, and facilities." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Glebe NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Glebe" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Glebe NSW" serviceDescription="Professional commercial cleaning in Glebe NSW. Inner-city cafes, galleries, university buildings & offices on Glebe Point Rd. Fully insured. Free quotes." serviceUrl="/commercial-cleaning-glebe" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
