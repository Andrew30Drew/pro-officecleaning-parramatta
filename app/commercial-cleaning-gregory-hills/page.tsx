import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Gregory Hills NSW | Professional Business Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Gregory Hills NSW. Offices, warehouses & retail in the South West Sydney growth corridor. Insured, police-checked. Call now!',
    keywords: 'commercial cleaning Gregory Hills, office cleaning Gregory Hills, business cleaning Gregory Hills NSW, warehouse cleaning Gregory Hills, industrial cleaning Gregory Hills',
    openGraph: {
        title: 'Commercial Cleaning Gregory Hills NSW | Pro Clean Corp',
        description: 'Expert commercial cleaning for Gregory Hills offices, business parks and warehouses. Fully insured, police-checked, flexible scheduling across the South West Sydney growth corridor.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-gregory-hills',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Gregory Hills NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-gregory-hills' },
};

export default function GregoryHillsCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Gregory Hills NSW",
        description: "Gregory Hills is one of South West Sydney's fastest-growing business destinations, anchored by the Gregory Hills Corporate Park and supported by a rapidly expanding retail and logistics precinct along Camden Valley Way. Pro Clean Corp has built a strong presence in this corridor, delivering commercial cleaning services to offices, warehouses, medical suites, and retail businesses that demand consistently high standards in a brand-new environment. Our teams understand the particular challenges of maintaining immaculate premises in an active construction zone — from ongoing dust management to preserving pristine finishes in newly fitted-out spaces. Whether you are a small business owner establishing your first office in Gregory Hills or a national logistics operator running a large distribution facility, we design a cleaning program that scales with your growth and reflects the modern, professional image your business needs to project.",
        benefits: [
            "Business park office cleaning maintaining brand-new corporate fitout standards",
            "Warehouse and logistics facility cleaning aligned with WHS compliance requirements",
            "Medical suite and allied health cleaning using TGA-approved hospital-grade disinfectants",
            "Ongoing construction dust management for businesses in active development precincts",
            "Eco-certified, low-VOC products safe for new-build HVAC and ventilation systems",
            "Rapid new-tenancy and pre-opening cleans to get your Gregory Hills premises launch-ready"
        ],
        process: [
            "Free Gregory Hills site assessment and scope review",
            "Custom cleaning plan tailored to your Gregory Hills business type and operating schedule",
            "Professional cleaning by police-checked, uniformed technicians using commercial-grade equipment",
            "Quality inspection, sign-off, and ongoing account management with performance reviews"
        ],
        whyChooseUs: [
            "15+ years serving Gregory Hills and South West Sydney businesses",
            "Fully insured with $20M public liability coverage",
            "Police-checked, uniformed, and professionally trained cleaning staff",
            "Commercial-grade eco-friendly cleaning products",
            "Flexible day, evening, and weekend scheduling to suit your operations",
            "100% satisfaction guarantee on every clean"
        ],
        serviceAreas: ["Camden", "Narellan", "Elderslie", "Currans Hill", "Mount Annan", "Oran Park", "Spring Farm", "Harrington Park"],
        faqs: [
            {
                question: "Do you service newly established businesses in the Gregory Hills Corporate Park?",
                answer: "Yes. We specialise in new-tenancy and post-construction cleans for offices and commercial suites within the Gregory Hills Corporate Park. We use fitout-safe products appropriate for fresh surfaces, new flooring, and recently installed cabinetry, ensuring your premises are spotless from day one."
            },
            {
                question: "Can you handle large warehouse and logistics facility cleaning in Gregory Hills?",
                answer: "Absolutely. Our industrial cleaning division regularly services large-footprint warehouses and distribution centres along the Camden Valley Way corridor. We provide high-bay dusting, floor scrubbing, amenities cleaning, and scheduled maintenance programs that meet WHS and insurance compliance requirements."
            },
            {
                question: "How quickly can Pro Clean Corp start servicing our Gregory Hills business?",
                answer: "In most cases we can schedule your first clean within 48 to 72 hours of a free site assessment. For urgent pre-opening or new-tenancy cleans, we offer priority booking so your Gregory Hills premises are ready on time for staff, clients, or inspections."
            },
            {
                question: "Do you offer after-hours cleaning so we don't disrupt Gregory Hills office operations?",
                answer: "Yes. We offer fully flexible scheduling including early mornings, evenings, and weekends. This is particularly popular with Gregory Hills businesses operating standard business hours who prefer cleaning to happen outside peak productivity windows without compromising results."
            },
            {
                question: "Are your cleaning products safe for medical and food businesses in Gregory Hills?",
                answer: "We stock a full range of TGA-approved and food-safe cleaning solutions suitable for GP clinics, dental practices, allied health suites, and commercial kitchens in Gregory Hills. We tailor product selections to the compliance requirements of your specific industry and business type."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Gregory Hills NSW" },
            { src: "/images/services/office.webp", alt: "Office cleaning Gregory Hills business park" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Gregory Hills NSW"
                serviceDescription="Professional commercial cleaning services for offices, warehouses, and business parks in Gregory Hills and the South West Sydney growth corridor."
                serviceUrl="/commercial-cleaning-gregory-hills"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
