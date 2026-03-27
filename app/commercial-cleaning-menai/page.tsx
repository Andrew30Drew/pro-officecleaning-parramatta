import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Menai NSW | Sutherland Shire Office & Retail Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Menai NSW. Shopping centre, medical suites & offices across Sutherland Shire. Fully insured, police-checked. Call today!',
    keywords: 'commercial cleaning Menai, office cleaning Menai, retail cleaning Menai NSW, Menai shopping centre cleaning, business cleaning Sutherland Shire',
    openGraph: {
        title: 'Commercial Cleaning Menai NSW | Pro Clean Corp',
        description: 'Trusted commercial cleaning for Menai shopping centre businesses, medical suites, and offices in the Sutherland Shire. Insured, police-checked, locally experienced.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-menai',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Menai NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-menai' },
};

export default function MenaiCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Menai NSW",
        description: "Menai serves as one of the Sutherland Shire's key commercial centres, anchored by Menai Marketplace shopping centre and supported by a strong cluster of medical practices, professional offices, childcare services, and specialty retailers that make it the go-to commercial destination for residents throughout the southern Shire. The suburb's well-established, family-oriented commercial environment means that businesses here place enormous value on reliability, discretion, and consistent cleaning quality — attributes that define every Pro Clean Corp service engagement in Menai. Our Sutherland Shire cleaning teams have been serving Menai's diverse business community for years, delivering tailored commercial cleaning programs for retail tenants within Menai Marketplace, standalone medical suites, professional offices along Allison Crescent, and the growing number of childcare and community service businesses meeting the needs of Menai's growing residential catchment.",
        benefits: [
            "Shopping centre and retail tenancy cleaning for Menai Marketplace businesses",
            "Medical and dental practice cleaning with certified infection control and TGA-approved products",
            "Professional office cleaning for Menai's business and professional services community",
            "Childcare and early education facility cleaning using child-safe, non-toxic products",
            "Strata and common area cleaning for Menai commercial and mixed-use buildings",
            "Flexible scheduling that respects shopping centre management rules and peak trading periods"
        ],
        process: [
            "Free Menai site assessment reviewing your tenancy, facility type, and cleaning requirements",
            "Custom cleaning plan developed in coordination with your Menai business and, where required, centre management",
            "Professional cleaning by police-checked, uniformed technicians with Sutherland Shire experience",
            "Quality inspection and sign-off with a dedicated local account manager"
        ],
        whyChooseUs: [
            "15+ years serving Menai and the Sutherland Shire business community",
            "Fully insured with $20M public liability coverage",
            "Police-checked, uniformed, and professionally trained cleaning staff",
            "Commercial-grade eco-friendly cleaning products",
            "Flexible scheduling aligned with shopping centre hours and office operating requirements",
            "100% satisfaction guarantee on every clean"
        ],
        serviceAreas: ["Sutherland", "Engadine", "Bangor", "Lucas Heights", "Woronora", "Kirrawee", "Miranda", "Gymea"],
        faqs: [
            {
                question: "Do you clean retail tenancies within Menai Marketplace shopping centre?",
                answer: "Yes. We service retail tenancies within Menai Marketplace, providing after-hours and before-opening cleans that comply with shopping centre management requirements. We coordinate directly with centre management where required and ensure all work is completed within approved access windows without compromising security."
            },
            {
                question: "Can you clean medical and dental practices in Menai?",
                answer: "Absolutely. Medical-grade cleaning is one of our most requested services in Menai. We clean GP clinics, dental surgeries, physiotherapy practices, and specialist suites using TGA-listed hospital-grade disinfectants, documented infection control procedures, and colour-coded equipment systems that prevent cross-contamination."
            },
            {
                question: "Do you provide childcare centre cleaning in Menai?",
                answer: "Yes. We are experienced in cleaning childcare and early education centres throughout the Sutherland Shire including Menai. We use only child-safe, non-toxic, and ACECQA-compliant cleaning products, covering indoor play areas, change facilities, kitchens, bathrooms, sleep rooms, and outdoor play areas."
            },
            {
                question: "Can you clean professional offices and business premises in Menai?",
                answer: "Definitely. We provide regular office cleaning programs for Menai's professional services businesses including financial advisors, solicitors, real estate agencies, and healthcare administration offices. Services include daily desk and surface cleaning, bathroom maintenance, kitchen hygiene, waste removal, and floor care."
            },
            {
                question: "Are your Menai cleaning services available outside standard business hours?",
                answer: "Yes. We offer flexible scheduling including early morning pre-opening cleans, evening cleans after business closes, and weekend programs. This is particularly important for Menai Marketplace tenants and medical practices where cleaning must occur outside patient or customer hours to maintain a seamless, professional environment."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Menai NSW" },
            { src: "/images/services/office.webp", alt: "Retail and office cleaning Menai Sutherland Shire" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Menai NSW"
                serviceDescription="Professional commercial cleaning for shopping centre retailers, medical practices, offices, and childcare facilities in Menai and the Sutherland Shire."
                serviceUrl="/commercial-cleaning-menai"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
