import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Lindfield NSW | Upper North Shore Office Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Lindfield NSW. Village shopping, professional offices & Upper North Shore businesses. Fully insured. Call Pro Clean Corp today!',
    keywords: 'commercial cleaning Lindfield, office cleaning Lindfield, retail cleaning Lindfield NSW, Upper North Shore business cleaning, professional cleaning Lindfield',
    openGraph: {
        title: 'Commercial Cleaning Lindfield NSW | Pro Clean Corp',
        description: 'Expert commercial cleaning for Lindfield village retail, professional offices, and Upper North Shore businesses. Reliable, insured, and locally experienced.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-lindfield',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Lindfield NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-lindfield' },
};

export default function LindfieldCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Lindfield NSW",
        description: "Lindfield is one of the Upper North Shore's most refined commercial villages, centred on the charming Pacific Highway and Lindfield Avenue retail and dining precincts that attract a highly educated, affluent local clientele with correspondingly high expectations for the businesses they patronise. The suburb's commercial mix includes boutique specialty retailers, professional services offices, financial advisory firms, medical and dental practices, independent restaurants, and quality cafes — all of which rely on immaculate, professionally maintained premises to uphold the premium brand image that Lindfield customers expect. Pro Clean Corp delivers sophisticated commercial cleaning across the full range of Lindfield businesses, applying the attention to detail and discretion that Upper North Shore clients demand. Our North Shore teams are experienced, professional, and committed to cleaning that enhances rather than disrupts the quality experience your Lindfield business is built to deliver.",
        benefits: [
            "Premium boutique retail cleaning preserving high-quality fitouts and display presentations",
            "Professional office cleaning for financial, legal, and advisory firms in Lindfield",
            "Medical and dental practice cleaning with certified infection control protocols",
            "Restaurant and cafe cleaning aligned with NSW Food Authority compliance requirements",
            "Strata and heritage commercial building common area cleaning with appropriate product selection",
            "Discreet, low-disruption cleaning programs that protect Lindfield's quiet village atmosphere"
        ],
        process: [
            "Free Lindfield site assessment with attention to your fitout quality and specific requirements",
            "Custom cleaning plan tailored to your Lindfield business type, standards, and trading hours",
            "Professional cleaning by police-checked, uniformed technicians experienced in Upper North Shore",
            "Quality inspection and sign-off with a dedicated account manager committed to your satisfaction"
        ],
        whyChooseUs: [
            "15+ years serving Lindfield and Upper North Shore businesses",
            "Fully insured with $20M public liability coverage",
            "Police-checked, uniformed, and professionally trained cleaning staff",
            "Premium eco-friendly cleaning products safe for high-quality fitouts and surfaces",
            "Flexible early morning, daytime, and evening scheduling",
            "100% satisfaction guarantee on every clean"
        ],
        serviceAreas: ["Killara", "Roseville", "Gordon", "Pymble", "Chatswood", "East Lindfield", "Wahroonga", "Turramurra"],
        faqs: [
            {
                question: "Do you provide premium retail cleaning for boutique shops in Lindfield village?",
                answer: "Yes. Boutique retail cleaning is a core speciality for our Lindfield team. We clean specialty stores, homewares shops, fashion retailers, and gift businesses with meticulous care for display fixtures, glass surfaces, floors, and fitting rooms — maintaining the high-end presentation that Lindfield's discerning shoppers expect."
            },
            {
                question: "Can you clean professional offices for financial and legal firms in Lindfield?",
                answer: "Absolutely. We service a range of financial advisory, legal, accounting, and professional services offices throughout Lindfield. Our staff are discreet, reliable, and trained to work sensitively within high-trust professional environments where confidentiality and attention to detail are paramount."
            },
            {
                question: "Do you offer dental and medical practice cleaning in Lindfield?",
                answer: "Yes. We provide infection-control-standard cleaning for dental practices, GP clinics, and specialist suites in Lindfield. Our protocols use TGA-listed disinfectants, documented cleaning schedules, and colour-coded equipment systems to ensure the highest possible hygiene standards for your patients and staff."
            },
            {
                question: "Are your cleaning products safe for high-quality fitouts and heritage buildings in Lindfield?",
                answer: "Yes. We carefully select cleaning products that are safe for premium joinery, stone benchtops, polished timber floors, heritage brickwork, and delicate commercial fitouts. We never use harsh or abrasive chemicals that could damage surfaces or compromise the quality of your Lindfield premises."
            },
            {
                question: "Can you clean restaurants and cafes in Lindfield's Pacific Highway precinct?",
                answer: "Definitely. We provide pre-opening and post-service restaurant cleans throughout the Lindfield dining precinct. Services include kitchen cleaning, dining room maintenance, bathroom hygiene, and front-of-house presentation — all scheduled to complement your trading hours without disrupting service."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Lindfield NSW" },
            { src: "/images/services/office.webp", alt: "Office and retail cleaning Lindfield Upper North Shore" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Lindfield NSW"
                serviceDescription="Professional commercial cleaning for boutique retail, professional offices, medical practices, and village businesses in Lindfield on Sydney's Upper North Shore."
                serviceUrl="/commercial-cleaning-lindfield"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
