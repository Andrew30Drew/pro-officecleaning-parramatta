import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Pharmacy Cleaning Sydney | TGA-Compliant Pharmacy Cleaning | Pro Clean Corp',
    description: 'TGA-compliant pharmacy cleaning in Sydney. Dispensary area cleaning, cold chain storage, customer zones, prescription counter sanitation, and health inspection ready.',
    keywords: 'pharmacy cleaning sydney, TGA compliant pharmacy cleaning, dispensary cleaning sydney, chemist cleaning services, pharmacy floor polishing, prescription counter sanitation, cold chain storage cleaning, pharmacy health inspection, medical retail cleaning sydney',
    openGraph: {
        title: 'Pharmacy Cleaning Sydney | TGA-Compliant Pharmacy Cleaning | Pro Clean Corp',
        description: 'TGA-compliant pharmacy cleaning across Sydney. Dispensary areas, cold chain storage, customer zones, prescription counters, and health inspection ready results.',
        url: 'https://www.procleancorp.com.au/pharmacy-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/medical.webp', alt: 'Pharmacy cleaning Sydney TGA compliant dispensary sanitation' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/pharmacy-cleaning-sydney' },
};

export default function PharmacyCleaningSydneyPage() {
    const serviceInfo = {
        title: "Pharmacy Cleaning Sydney | TGA-Compliant Services",
        description: "Pharmacies occupy a unique position as both a health facility and a retail environment, requiring cleaning standards that meet TGA (Therapeutic Goods Administration) compliance guidelines while maintaining an inviting, professional retail presentation. Pro Clean Corp delivers TGA-compliant pharmacy cleaning across Sydney, covering dispensary areas with pharmaceutical-grade sanitisers, cold chain storage areas, customer zones, prescription counter sanitation, and retail floor care. Our teams clean after hours to avoid disrupting trading and are trained in the specific requirements of pharmacy environments including medication security and contamination prevention.",
        benefits: [
            "TGA-compliant cleaning protocols applied in all dispensary and medication storage areas",
            "Dispensary area cleaning using pharmaceutical-grade sanitisers safe for use in medication preparation zones",
            "Cold chain storage area cleaning maintains hygiene without compromising temperature-sensitive medications",
            "Customer zones cleaned to infection control standards — protecting vulnerable patients who visit the pharmacy",
            "Prescription counter sanitation including high-touch surfaces, payment terminals, and customer-facing areas",
            "Health inspection ready at all times — our documentation and cleaning logs support council and TGA inspection requirements"
        ],
        process: [
            "After-hours arrival to avoid disrupting trading — we work to your pharmacy's schedule to minimise any impact on dispensing operations",
            "Dispensary and medication storage cleaning: pharmaceutical-grade sanitiser applied to all benches, equipment exteriors, and surfaces in compliance with TGA guidelines",
            "Retail floor cleaning, polishing, and mopping; customer zone disinfection including seating, baskets, and high-touch surfaces; window and counter cleaning",
            "Cleaning log completion and supervisor sign-off — documentation maintained to support council health inspections and TGA compliance requirements"
        ],
        whyChooseUs: [
            "15+ years commercial cleaning experience",
            "$20M public liability insurance",
            "Police-checked, WHS-trained staff",
            "Eco-friendly commercial-grade products",
            "Flexible scheduling 7 days a week",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "What does TGA-compliant pharmacy cleaning mean?",
                answer: "TGA-compliant cleaning means our cleaning protocols, chemicals, and procedures in dispensary and medication storage areas meet the requirements set by the Therapeutic Goods Administration for facilities handling therapeutic goods. This includes using appropriate disinfectants, maintaining cleaning records, preventing cross-contamination, and ensuring medication security is maintained during and after cleaning."
            },
            {
                question: "Do you clean inside the dispensary area of pharmacies in Sydney?",
                answer: "Yes. We clean dispensary floor areas, benchtop surfaces (exterior only where medications are not present), equipment exteriors, storage shelving exteriors, and dispensary floors. We do not access drawers, medication storage units, or areas where medications are handled — these remain the pharmacy's responsibility. All cleaning in dispensary areas uses pharmaceutical-grade disinfectants."
            },
            {
                question: "Can you clean cold chain storage areas without affecting medications?",
                answer: "Yes. Cold chain storage areas (fridges and refrigerated cabinets) are cleaned around the stored medications without removing or disturbing temperature-sensitive products. We clean the floor areas, fridge surrounds, and accessible shelf fronts. Any cleaning inside refrigerated units is arranged with pharmacy staff to ensure medications are temporarily relocated by pharmacy personnel."
            },
            {
                question: "Do you clean pharmacies outside trading hours?",
                answer: "Yes. We schedule all pharmacy cleaning outside trading hours — typically early morning before opening or after close. This prevents any disruption to dispensing operations, avoids contact between cleaning chemicals and customers, and allows thorough floor cleaning without having to work around foot traffic."
            },
            {
                question: "What documentation do you provide for pharmacy health inspections?",
                answer: "We maintain a site-specific cleaning log for each pharmacy location recording the date, time, areas cleaned, chemicals used, staff member, and supervisor sign-off. These records are available on request and provide evidence of consistent cleaning practices for NSW Health, council environmental health, and TGA inspection requirements."
            }
        ],
        images: [
            { src: "/images/services/medical.webp", alt: "Pharmacy cleaning Sydney TGA compliant dispensary sanitation" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp pharmacy cleaning Sydney health inspection ready" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Pharmacy Cleaning Sydney"
                serviceDescription="TGA-compliant pharmacy cleaning in Sydney covering dispensary areas, cold chain storage, customer zones, prescription counter sanitation, and health inspection ready documentation."
                serviceUrl="/pharmacy-cleaning-sydney"
                serviceType="Pharmacy Cleaning"
                price="$$"
                additionalServices={["TGA-Compliant Cleaning", "Dispensary Cleaning", "Cold Chain Storage Cleaning", "Retail Floor Polishing", "Medical Retail Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
