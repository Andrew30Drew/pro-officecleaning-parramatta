import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Kirrawee NSW | Sutherland Shire Business Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Kirrawee NSW. Retail precincts, offices & businesses across Sutherland Shire. Fully insured, police-checked. Call today!',
    keywords: 'commercial cleaning Kirrawee, office cleaning Kirrawee, retail cleaning Kirrawee NSW, business cleaning Sutherland Shire, cleaners Kirrawee',
    openGraph: {
        title: 'Commercial Cleaning Kirrawee NSW | Pro Clean Corp',
        description: 'Trusted commercial cleaning for Kirrawee retail precincts, offices, and Sutherland Shire businesses. Insured, police-checked, flexible scheduling.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-kirrawee',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Kirrawee NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-kirrawee' },
};

export default function KirraweeCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Kirrawee NSW",
        description: "Kirrawee is a key commercial node in the Sutherland Shire, anchored by the substantial retail and trade precinct along Princes Highway that includes major hardware, homewares, and lifestyle retailers alongside a growing number of professional offices, medical suites, and automotive businesses. The suburb's position as a gateway to the broader Sutherland Shire makes it a busy, high-traffic commercial environment where businesses need dependable cleaning partners who understand the local market and deliver consistent results. Pro Clean Corp has served Kirrawee and the wider Sutherland Shire for many years, providing commercial cleaning programs for large-format retail, trade businesses, professional offices, strata complexes, and smaller independent retailers. Our Sutherland Shire team is locally based, highly responsive, and committed to building the kind of long-term relationships that Shire businesses expect from their service providers.",
        benefits: [
            "Large-format and big-box retail cleaning for Kirrawee's major Princes Highway retailers",
            "Trade and hardware business cleaning including showrooms, warehouses, and customer areas",
            "Professional office and medical suite cleaning in Kirrawee commercial buildings",
            "Automotive and service centre cleaning covering workshops, showrooms, and waiting areas",
            "Strata and mixed-use building common area cleaning for Kirrawee commercial centres",
            "Flexible scheduling designed around extended retail and trade trading hours"
        ],
        process: [
            "Free Kirrawee site assessment and cleaning requirements review",
            "Custom cleaning plan designed around your Kirrawee business type and trading schedule",
            "Professional cleaning by police-checked, uniformed technicians with Sutherland Shire experience",
            "Quality inspection and sign-off with a dedicated local account manager"
        ],
        whyChooseUs: [
            "15+ years serving Kirrawee and Sutherland Shire businesses",
            "Fully insured with $20M public liability coverage",
            "Police-checked, uniformed, and professionally trained cleaning staff",
            "Commercial-grade eco-friendly cleaning products",
            "Flexible day, evening, and weekend scheduling",
            "100% satisfaction guarantee on every clean"
        ],
        serviceAreas: ["Sutherland", "Gymea", "Miranda", "Caringbah", "Engadine", "Jannali", "Loftus", "Heathcote"],
        faqs: [
            {
                question: "Do you clean large retail stores and big-box businesses along Princes Highway in Kirrawee?",
                answer: "Yes. We are experienced in cleaning large-format retail environments in Kirrawee, including trade and hardware stores, homewares retailers, and lifestyle centres. We use industrial equipment for efficient floor care across large footprints and schedule cleaning to avoid peak trading hours."
            },
            {
                question: "Can you clean medical and professional offices in Kirrawee?",
                answer: "Absolutely. We provide medical-grade cleaning for GP clinics, dental practices, and allied health suites in Kirrawee, as well as standard commercial office cleaning for professional services businesses. All medical cleaning uses TGA-approved disinfectants with documented infection control protocols."
            },
            {
                question: "Do you service automotive businesses and service centres in Kirrawee?",
                answer: "Yes. Automotive cleaning is a regular part of our Kirrawee service portfolio. We clean car dealership showrooms, mechanical workshop areas, customer waiting rooms, staff amenities, and administration offices, using specialist products appropriate for oil, rubber, and grease residues."
            },
            {
                question: "Can you clean strata and common areas in Kirrawee commercial complexes?",
                answer: "Yes. We service strata-titled commercial complexes and mixed-use buildings throughout Kirrawee and the Sutherland Shire. Services include lobby and foyer cleaning, lift maintenance, stairwell cleaning, external entrance areas, and car park sweeping on regular scheduled programs."
            },
            {
                question: "Are your Kirrawee cleaning services available on weekends for retail businesses?",
                answer: "Yes. Weekend cleaning is readily available for Kirrawee retailers and trade businesses who need thorough cleans outside their busiest trading windows. We also offer early Monday morning cleans so your business starts the week looking its absolute best."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Kirrawee NSW" },
            { src: "/images/services/office.webp", alt: "Retail and office cleaning Kirrawee Sutherland Shire" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Kirrawee NSW"
                serviceDescription="Professional commercial cleaning for retail precincts, offices, and businesses in Kirrawee and across the Sutherland Shire."
                serviceUrl="/commercial-cleaning-kirrawee"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
