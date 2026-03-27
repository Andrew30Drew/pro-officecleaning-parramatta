
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Office Cleaning Bella Vista NSW | Norwest Business Park Cleaners',
    description: 'Pro Clean Corp provides exceptional office cleaning in Bella Vista. Serving Norwest Business Park, corporate headquarters, and medical suites. High-end cleaning standards.',
    keywords: 'office cleaning bella vista, norwest business park cleaning, corporate cleaning bella vista, medical cleaning bella vista, business cleaners hills district',
    openGraph: {
        title: 'Office Cleaning Bella Vista NSW | Norwest Business Park Cleaners',
        description: 'Premium office cleaning for Norwest Business Park. Corporate, medical, and strata cleaning in Bella Vista.',
        url: 'https://www.procleancorp.com.au/office-cleaning-bella-vista',
        type: 'website',
        images: [
            {
                url: '/images/services/office.webp',
                alt: 'Office cleaning Bella Vista NSW',
            },
        ],
    },
    alternates: {
        canonical: 'https://www.procleancorp.com.au/office-cleaning-bella-vista',
    },
};

export default function BellaVistaCleaningPage() {
    const serviceInfo = {
        title: "Office Cleaning Bella Vista NSW",
        description: "Bella Vista, home to the prestigious Norwest Business Park, sets a high standard for corporate environments. Pro Clean Corp matches this with premium office cleaning services tailored for headquarters, tech firms, and medical specialists. We ensure your workspace reflects the professionalism of your brand, with meticulous attention to detail in boardrooms, reception areas, and clinical suites.",
        benefits: [
            "Corporate Image: Immaculate cleaning for high-end offices and lobbies.",
            "Medical Standards: Hygienic cleaning for Bella Vista's many specialist clinics.",
            "Norwest Local: Fast, reliable service for businesses in the park.",
            "Tech Savvy: Cleaning around sensitive server rooms and electronics with care.",
            "Strata Management: Comprehensive cleaning for multi-tenant buildings.",
            "Eco-Friendly: Sustainable practices for forward-thinking companies."
        ],
        process: [
            "Consultation: Understanding your specific building requirements and security.",
            "Custom Plan: A detailed scope for every zone, from the CEO's office to the kitchen.",
            "Execution: Delivering consistent high-quality results.",
            "Audit: Regular inspections to ensure contract compliance."
        ],
        whyChooseUs: [
            "Hills District Experts: We understand the local business community.",
            "Security Cleared: Police checked staff for peace of mind.",
            "Comprehensive: One provider for office, window, and carpet cleaning.",
            "Flexible: Cleaning schedules that suit your business hours.",
            "Quality Guaranteed: We fix any issues immediately."
        ],
        serviceAreas: [
            "Norwest", "Castle Hill", "Kellyville", "Baulkham Hills",
            "Rouse Hill", "Schofields", "Winston Hills", "Seven Hills"
        ],
        faqs: [
            {
                question: "Do you service Norwest Business Park?",
                answer: "Yes, we have multiple clients within Norwest Business Park and are familiar with building access and security protocols."
            },
            {
                question: "Can you clean medical specialist suites?",
                answer: "Absolutely. We provide infection-control cleaning for medical and dental specialist suites, adhering to strict hygiene standards."
            },
            {
                question: "Do you offer daytime cleaning?",
                answer: "Yes, we can provide day porters to maintain high-traffic areas like lobbies and restrooms throughout the business day."
            },
            {
                question: "Do you clean windows in multi-story buildings?",
                answer: "Yes, we offer internal window cleaning and can arrange external cleaning for accessible windows."
            },
            {
                question: "Are you insured?",
                answer: "Yes, we hold $20M Public Liability Insurance, essential for working in large corporate environments."
            }
        ],
        images: [
            { src: "/images/services/office.webp", alt: "Corporate office cleaning Bella Vista" },
            { src: "/images/services/commercial.webp", alt: "Medical suite cleaning Norwest" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Office Cleaning Bella Vista"
                serviceDescription="Premium office and commercial cleaning services for Norwest Business Park and Bella Vista NSW."
                serviceUrl="https://www.procleancorp.com.au/office-cleaning-bella-vista"
                serviceType="ProfessionalService"
                price="$$$"
                additionalServices={["Corporate Cleaning", "Medical Cleaning", "Strata Cleaning", "Carpet Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
