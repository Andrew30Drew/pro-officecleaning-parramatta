import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Kings Park NSW | Office & Business Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Kings Park NSW. Offices, retail & light commercial in the Blacktown area. Fully insured, police-checked. Call Pro Clean Corp!',
    keywords: 'commercial cleaning Kings Park, office cleaning Kings Park, business cleaning Kings Park NSW, retail cleaning Kings Park Blacktown, cleaners Kings Park',
    openGraph: {
        title: 'Commercial Cleaning Kings Park NSW | Pro Clean Corp',
        description: 'Reliable commercial cleaning for Kings Park offices, retail businesses, and light commercial premises in the Blacktown area. Trusted local cleaners, fully insured.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-kings-park',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Kings Park NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-kings-park' },
};

export default function KingsParkCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Kings Park NSW",
        description: "Kings Park is a growing residential and light-commercial suburb in the Blacktown Local Government Area, where a steady increase in small business activity, professional services, and community facilities has created growing demand for reliable commercial cleaning. Pro Clean Corp serves the Kings Park business community with flexible, affordable cleaning programs designed for the suburb's mix of strip retail, medical practices, childcare centres, professional offices, and light-commercial units. We understand the needs of small and growing businesses — consistent quality, fair pricing, and a trusted team that shows up on time and gets the job done without supervision. Our Western Sydney cleaning crews are local, responsive, and dedicated to building long-term relationships with Kings Park businesses that value professionalism and reliability above all else.",
        benefits: [
            "Daily and weekly office cleaning for small businesses and professional services in Kings Park",
            "Retail shop cleaning maintaining customer-ready presentation before and after trading",
            "Childcare and community facility cleaning using child-safe, non-toxic products",
            "Medical and allied health cleaning with hygiene-compliant disinfection protocols",
            "Light-commercial unit and workshop cleaning for Kings Park trade businesses",
            "Strata and common area cleaning for Kings Park mixed-use commercial buildings"
        ],
        process: [
            "Free Kings Park site assessment and cleaning needs review",
            "Custom cleaning plan tailored to your Kings Park business type and schedule",
            "Professional cleaning by police-checked, uniformed, and insured technicians",
            "Quality inspection and sign-off with direct access to your account manager"
        ],
        whyChooseUs: [
            "15+ years serving Kings Park and the Blacktown area",
            "Fully insured with $20M public liability coverage",
            "Police-checked, uniformed, and professionally trained cleaning staff",
            "Commercial-grade eco-friendly cleaning products",
            "Flexible scheduling including early morning and weekend cleans",
            "100% satisfaction guarantee on every clean"
        ],
        serviceAreas: ["Blacktown", "Marayong", "Lalor Park", "Seven Hills", "Toongabbie", "Pendle Hill", "Woodcroft", "Doonside"],
        faqs: [
            {
                question: "Do you clean small business offices and professional suites in Kings Park?",
                answer: "Yes. Small business office cleaning is one of our most popular services in Kings Park. We provide daily or weekly cleaning covering desks, surfaces, bathrooms, kitchens, floors, and waste removal on a schedule that suits your team size and business hours."
            },
            {
                question: "Can you clean childcare centres and community facilities in Kings Park?",
                answer: "Absolutely. We have extensive experience cleaning childcare centres, community halls, and family services facilities in the Blacktown area. We use child-safe, non-toxic, and fragrance-free cleaning products that meet the hygiene requirements of facilities regulated by NSW Health and ACECQA."
            },
            {
                question: "Do you offer medical and GP clinic cleaning in Kings Park?",
                answer: "Yes. We provide medical-grade cleaning for GP clinics, dental practices, physiotherapy studios, and allied health businesses in Kings Park. Our protocols use TGA-listed disinfectants and documented cleaning records to support infection control and accreditation requirements."
            },
            {
                question: "Can you clean the retail strip and small shops in Kings Park?",
                answer: "Definitely. We service retail shops, convenience stores, and boutique businesses throughout Kings Park, providing floor care, surface cleaning, glass polishing, and waste management on schedules that avoid disrupting your trading hours."
            },
            {
                question: "Are your Kings Park cleaning services affordable for small businesses?",
                answer: "Yes. We pride ourselves on offering transparent, competitive pricing that is accessible to small and growing businesses in Kings Park. We provide itemised quotes with no hidden costs and flexible program options that let you choose the frequency and scope that fits your budget."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Kings Park NSW" },
            { src: "/images/services/office.webp", alt: "Office and retail cleaning Kings Park Blacktown area" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Kings Park NSW"
                serviceDescription="Professional commercial cleaning for offices, retail shops, and light commercial premises in Kings Park and the Blacktown local government area."
                serviceUrl="/commercial-cleaning-kings-park"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
