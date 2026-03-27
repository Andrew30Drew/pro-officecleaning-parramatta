
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Office Cleaning Campbelltown NSW | Macarthur Business Cleaning',
    description: 'Pro Clean Corp provides reliable office cleaning in Campbelltown. Serving the Macarthur region with professional commercial cleaning for offices, medical, and strata.',
    keywords: 'office cleaning campbelltown, commercial cleaning campbelltown, macarthur cleaning services, local cleaners campbelltown, business cleaning nsw',
    openGraph: {
        title: 'Office Cleaning Campbelltown NSW | Macarthur Business Cleaning',
        description: 'Expert office and commercial cleaning for Campbelltown and the Macarthur region. Local, trusted, and affordable.',
        url: 'https://www.procleancorp.com.au/office-cleaning-campbelltown',
        type: 'website',
        images: [
            {
                url: '/images/services/office.webp',
                alt: 'Office cleaning Campbelltown NSW',
            },
        ],
    },
    alternates: {
        canonical: 'https://www.procleancorp.com.au/office-cleaning-campbelltown',
    },
};

export default function CampbelltownCleaningPage() {
    const serviceInfo = {
        title: "Office Cleaning Campbelltown NSW",
        description: "Campbelltown is the booming capital of the Macarthur region, home to a diverse mix of educational institutions, medical precincts, and commercial offices. Pro Clean Corp is your local cleaning partner, offering reliable, high-standard office cleaning services that keep pace with Campbelltown's growth. From small local businesses to large corporate facilities, we ensure a clean, healthy, and welcoming environment for everyone.",
        benefits: [
            "Macarthur Local: Fast response times for businesses in the region.",
            "Education & Medical: Experienced cleaning for schools and health clinics.",
            "Cost-Effective: Tailored packages for local Campbelltown businesses.",
            "Flexible: We work around your office hours, day or night.",
            "Detail Focused: Spotless reception areas, clean kitchens, and fresh restrooms.",
            "Comprehensive: Window cleaning, carpet steam cleaning, and more."
        ],
        process: [
            "Walkthrough: Meeting at your premises to discuss your needs.",
            "Quote: Providing a transparent, competitive price.",
            "Clean: Executing the plan with our trained local team.",
            "Review: Regular check-ins to ensure you're happy."
        ],
        whyChooseUs: [
            "Reliable: We pride ourselves on consistency.",
            "Experienced: Years of commercial cleaning knowledge.",
            "Insured: Fully covered for your peace of mind.",
            "Safe: Using eco-friendly products where possible.",
            "One Invoice: Simplifying your facility management."
        ],
        serviceAreas: [
            "Narellan", "Ingleburn", "Minto", "Leumeah",
            "Gregory Hills", "Camden", "Mount Annan", "Macquarie Fields"
        ],
        faqs: [
            {
                question: "Do you clean medical centres near Campbelltown Hospital?",
                answer: "Yes, we specialize in medical cleaning, ensuring strict hygiene protocols for clinics and specialist suites in the hospital precinct."
            },
            {
                question: "Can you provide regular office cleaning?",
                answer: "Absolutely. We offer daily, weekly, or fortnightly cleaning schedules to suit your business needs and budget."
            },
            {
                question: "Do you clean industrial offices in Minto/Ingleburn?",
                answer: "Yes, we service the industrial parks in Minto and Ingleburn, cleaning both factory offices and amenities."
            },
            {
                question: "Are your staff police checked?",
                answer: "Yes, all our cleaners undergo police checks to ensure the security of your business premise."
            },
            {
                question: "Do you bring your own equipment?",
                answer: "Yes, we supply all necessary cleaning equipment and chemicals, so you don't have to worry about a thing."
            }
        ],
        images: [
            { src: "/images/services/office.webp", alt: "Business cleaning Campbelltown" },
            { src: "/images/services/commercial.webp", alt: "Medical cleaning Macarthur" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Office Cleaning Campbelltown"
                serviceDescription="Professional office cleaning services for businesses in Campbelltown and the Macarthur region NSW."
                serviceUrl="https://www.procleancorp.com.au/office-cleaning-campbelltown"
                serviceType="ProfessionalService"
                price="$$"
                additionalServices={["Medical Cleaning", "Industrial Cleaning", "Strata Cleaning", "School Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
