import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Sans Souci NSW | Restaurants, Retail & Office Cleaners | Pro Clean Corp',
    description: 'Expert commercial cleaning in Sans Souci NSW. Waterfront restaurants, retail shops & Bayside offices kept immaculate by Pro Clean Corp. Free quote today.',
    keywords: 'commercial cleaning Sans Souci, restaurant cleaning Sans Souci, retail cleaning Sans Souci NSW, office cleaning Bayside, commercial cleaners Sans Souci',
    openGraph: {
        title: 'Commercial Cleaning Sans Souci NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning in Sans Souci NSW. Waterfront restaurants, retail & Bayside offices. Police-checked, $20M insured. Book a free quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-sans-souci',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Sans Souci NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-sans-souci' },
};

export default function SansSouciCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Sans Souci NSW",
        description: "Sans Souci's stunning waterfront position on Botany Bay makes it one of Sydney's most appealing commercial destinations, with a thriving strip of waterfront restaurants, cafes, and boutique retailers along The Grand Parade and nearby streets. Pro Clean Corp understands that businesses in this premium Bayside location are held to a higher standard of presentation by their discerning clientele. Our commercial cleaning specialists deliver meticulous cleaning programs for Sans Souci's hospitality venues, retail shops, professional offices and medical suites — ensuring every space reflects the quality that this beautiful location demands. From pre-open restaurant kitchen deep cleans to sparkling shopfronts that attract passing foot traffic, we help Sans Souci businesses maintain the pristine standards their customers expect.",
        benefits: [
            "Hospitality-grade restaurant and cafe cleaning including commercial kitchen deep cleans",
            "Waterfront shopfront and glass cleaning to maximise street and bay-front appeal",
            "Retail shop floor and fitting room cleaning programs tailored to trading hours",
            "Medical and professional suite cleaning with hospital-grade sanitisation protocols",
            "Grease trap surrounds and alfresco dining area cleaning for waterfront venues",
            "Eco-conscious products that protect Sans Souci's sensitive Bayside environment"
        ],
        process: [
            "Free on-site consultation at your Sans Souci premises to assess your cleaning needs",
            "Tailored cleaning program built around your hospitality or retail operating schedule",
            "Delivery by trained, police-checked and uniformed cleaning professionals",
            "Regular quality reviews and direct account management for ongoing satisfaction"
        ],
        whyChooseUs: [
            "15+ years serving Sans Souci and the wider Bayside and St George commercial precinct",
            "$20M public liability insurance providing full cover for your waterfront property",
            "Police-checked, uniformed staff who respect your business environment and clientele",
            "Food-safe, eco-friendly cleaning products appropriate for waterfront dining venues",
            "Early morning and late-night scheduling aligned to restaurant and retail hours",
            "100% satisfaction guarantee — we return to address any concern at no additional cost"
        ],
        serviceAreas: [
            "Rockdale", "Brighton-Le-Sands", "Monterey", "Ramsgate", "Kogarah", "Taren Point", "Sylvania", "Gymea Bay"
        ],
        faqs: [
            {
                question: "Do you provide commercial kitchen cleaning for Sans Souci restaurants?",
                answer: "Yes. Commercial kitchen deep cleaning is one of our core specialities. We clean and degrease cooking equipment, exhausts, rangehoods, tile walls, floors and grease traps to meet NSW Food Authority standards. Our teams work outside trading hours so your kitchen is ready for each service. We also provide scheduled deep-clean programs to maintain compliance year-round."
            },
            {
                question: "Can you clean our waterfront restaurant's alfresco dining area in Sans Souci?",
                answer: "Absolutely. We specialise in alfresco and outdoor dining area cleaning including pressure washing pavers and decking, cleaning outdoor furniture and shade structures, and sanitising all food-contact surfaces. Given Sans Souci's proximity to Botany Bay, we use only biodegradable, environmentally safe cleaning products in all outdoor areas."
            },
            {
                question: "Do you offer window and glass cleaning for Sans Souci retail shops?",
                answer: "Yes. Crystal-clear windows and glass are essential for waterfront and street-front businesses in Sans Souci. We provide regular interior and exterior window cleaning as part of our retail cleaning programs, using streak-free techniques that showcase your products and maximise the appeal of your shopfront to passing customers."
            },
            {
                question: "What hygiene standards do you use for medical suites in Sans Souci?",
                answer: "Our medical facility cleaning follows AS/NZS 4187 infection control guidelines. We use hospital-grade TGA-listed disinfectants on all clinical contact surfaces, waiting areas, door handles and amenities. Staff assigned to medical facilities receive specific training in healthcare cleaning protocols and understand the critical importance of cross-contamination prevention."
            },
            {
                question: "How quickly can you start a commercial cleaning program for our Sans Souci business?",
                answer: "We aim to complete an initial site assessment within 24–48 hours of your enquiry and can typically have a cleaning program in place within the same week. For urgent requirements such as pre-opening cleans or post-renovation cleans, we can mobilise our team within one to two business days of confirmation."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Sans Souci NSW" },
            { src: "/images/services/office.webp", alt: "Restaurant and retail cleaning Sans Souci NSW" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Sans Souci NSW"
                serviceDescription="Professional commercial cleaning services in Sans Souci NSW covering waterfront restaurants, retail shops, medical suites and offices across the Bayside precinct."
                serviceUrl="/commercial-cleaning-sans-souci"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
