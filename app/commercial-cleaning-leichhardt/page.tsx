import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Leichhardt NSW | Inner West Business Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Leichhardt NSW. Italian Forum, boutique retail, offices & restaurants in the Inner West. Fully insured. Call Pro Clean Corp!',
    keywords: 'commercial cleaning Leichhardt, office cleaning Leichhardt, retail cleaning Leichhardt NSW, Italian Forum cleaning, restaurant cleaning Leichhardt Inner West',
    openGraph: {
        title: 'Commercial Cleaning Leichhardt NSW | Pro Clean Corp',
        description: 'Expert commercial cleaning for Leichhardt restaurants, boutique retail, Italian Forum businesses, and Inner West offices. Trusted, insured, and locally experienced.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-leichhardt',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Leichhardt NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-leichhardt' },
};

export default function LeichhardtCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Leichhardt NSW",
        description: "Leichhardt is one of Sydney's Inner West's most characterful commercial suburbs, built around the iconic Norton Street strip, the beloved Italian Forum piazza, and a broader network of eclectic boutique retail, acclaimed restaurants, independent cafes, and professional offices that reflect the suburb's multicultural heritage and creative energy. Commercial cleaning in Leichhardt demands a level of sensitivity and sophistication that matches the suburb's character — our teams understand that the presentation of a Norton Street restaurant or an Italian Forum retailer must be impeccable to meet the expectations of the discerning local clientele. Pro Clean Corp delivers premium commercial cleaning throughout Leichhardt, from pre-opening restaurant deep cleans and boutique retail maintenance to professional office cleaning and heritage building common area maintenance. Our Inner West teams operate with discretion and care, treating every Leichhardt business as the individual, valued enterprise it is.",
        benefits: [
            "Restaurant and hospitality cleaning on Norton Street compliant with NSW Food Authority standards",
            "Italian Forum retail and commercial tenancy cleaning preserving heritage precinct presentation",
            "Boutique retail and specialty shop cleaning with meticulous attention to display and fitout care",
            "Professional office cleaning for creative, media, legal, and professional services businesses",
            "Heritage building common area and strata cleaning using surface-appropriate products",
            "Pre-opening deep cleans and periodic grease trap and kitchen exhaust hood cleaning"
        ],
        process: [
            "Free Leichhardt site assessment with sensitivity to your business type and heritage environment",
            "Custom cleaning plan aligned with your trading hours and Leichhardt-specific requirements",
            "Professional cleaning by police-checked, uniformed technicians experienced in Inner West businesses",
            "Quality inspection and sign-off with a dedicated account manager who knows the Leichhardt area"
        ],
        whyChooseUs: [
            "15+ years serving Leichhardt and Inner West businesses",
            "Fully insured with $20M public liability coverage",
            "Police-checked, uniformed, and professionally trained cleaning staff",
            "Commercial-grade eco-friendly cleaning products safe for heritage surfaces",
            "Flexible early morning, daytime, and late-evening scheduling",
            "100% satisfaction guarantee on every clean"
        ],
        serviceAreas: ["Balmain", "Annandale", "Glebe", "Five Dock", "Rozelle", "Lilyfield", "Petersham", "Newtown"],
        faqs: [
            {
                question: "Do you provide restaurant and kitchen cleaning for Norton Street hospitality businesses in Leichhardt?",
                answer: "Yes. Restaurant and kitchen cleaning is one of our most in-demand services in Leichhardt. We provide after-service deep cleans covering commercial kitchen equipment, exhaust hoods, floors, cool rooms, and front-of-house areas — all compliant with NSW Food Authority and local council requirements."
            },
            {
                question: "Can you clean Italian Forum retail and commercial tenancies in Leichhardt?",
                answer: "Absolutely. We have significant experience working within the Italian Forum precinct, cleaning retail tenancies, offices, and common areas with the level of care and presentation that this iconic Inner West destination demands. We work around tenant trading hours and respect the heritage character of the space."
            },
            {
                question: "Do you use eco-friendly products suitable for Leichhardt's boutique and heritage buildings?",
                answer: "Yes. We prioritise eco-certified, low-VOC, and surface-appropriate cleaning products in all Leichhardt premises. This is particularly important in heritage buildings where harsh chemicals can damage original surfaces, and in food-adjacent environments where residue-free products are essential."
            },
            {
                question: "Can you clean creative agency and professional services offices in Leichhardt?",
                answer: "Definitely. We clean a range of creative agencies, media companies, legal offices, and professional service businesses throughout Leichhardt. We are discreet, reliable, and understand the value of a clean, inspiring workspace for creative and knowledge-based workers."
            },
            {
                question: "Do you offer pre-opening cleans for new restaurants and retail businesses in Leichhardt?",
                answer: "Yes. Pre-opening and new-tenancy cleans are a speciality. We will deep-clean your Leichhardt premises from top to bottom before your first day of trading, ensuring your fitout, floors, kitchen, and customer areas are spotless and ready to make the best first impression on your new clientele."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Leichhardt NSW" },
            { src: "/images/services/office.webp", alt: "Restaurant and retail cleaning Leichhardt Inner West" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Leichhardt NSW"
                serviceDescription="Professional commercial cleaning for restaurants, boutique retail, Italian Forum businesses, and offices in Leichhardt and the Inner West."
                serviceUrl="/commercial-cleaning-leichhardt"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
