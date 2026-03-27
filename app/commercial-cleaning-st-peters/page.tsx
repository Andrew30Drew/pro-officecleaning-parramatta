import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning St Peters NSW | Industrial & Creative Precinct Cleaners | Pro Clean Corp',
    description: 'Expert commercial cleaning in St Peters NSW. Industrial facilities, creative studios & mixed-use spaces in inner south Sydney. Fully insured. Free quote today.',
    keywords: 'commercial cleaning St Peters, industrial cleaning St Peters, office cleaning St Peters NSW, creative studio cleaning St Peters, commercial cleaners inner south Sydney',
    openGraph: {
        title: 'Commercial Cleaning St Peters NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning in St Peters NSW. Industrial, creative & mixed-use inner south Sydney properties. Police-checked, $20M insured. Free quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-st-peters',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning St Peters NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-st-peters' },
};

export default function StPetersCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning St Peters NSW",
        description: "St Peters sits at the heart of Sydney's inner south industrial and creative transformation, a suburb where historic brick factories now house design studios, tech startups, artisan workshops, media production companies and innovative SMEs alongside traditional industrial and trade operators. Pro Clean Corp has the breadth of expertise to serve this diverse commercial landscape with equal competence — whether that means heavy-duty industrial cleaning for a manufacturing facility, meticulous presentation cleaning for a client-facing creative studio, or comprehensive maintenance programs for the mixed-use commercial buildings that define the St Peters precinct. We are the inner-south cleaning specialists who understand what modern St Peters businesses need.",
        benefits: [
            "Industrial and factory cleaning for St Peters' traditional manufacturing and trade operators",
            "Creative studio and workshop cleaning that respects equipment, materials and workspace layouts",
            "Office and co-working space cleaning for St Peters' growing tech and media community",
            "Mixed-use commercial building cleaning including common areas, lifts and car parks",
            "High-pressure exterior cleaning for heritage brick buildings and warehouse conversions",
            "Flexible after-hours scheduling to suit creative and production industry working patterns"
        ],
        process: [
            "Free on-site assessment of your St Peters premises and specific industry requirements",
            "Bespoke cleaning program developed around your workspace type and operational schedule",
            "Professional delivery by police-checked, uniformed technicians with appropriate equipment",
            "Ongoing quality management and account support to maintain exceptional outcomes"
        ],
        whyChooseUs: [
            "15+ years serving St Peters and the inner-south Sydney commercial precinct",
            "$20M public liability insurance covering all property types from industrial to creative",
            "Police-checked, uniformed staff trusted in both industrial and creative environments",
            "Flexible, non-intrusive cleaning approaches that respect your creative or operational workspace",
            "Eco-friendly products aligned with the sustainability values of St Peters' business community",
            "100% satisfaction guarantee with immediate response to any service issue"
        ],
        serviceAreas: [
            "Newtown", "Marrickville", "Alexandria", "Erskineville", "Tempe", "Sydenham", "Waterloo", "Redfern"
        ],
        faqs: [
            {
                question: "Do you clean creative studios and production spaces in St Peters?",
                answer: "Yes. Cleaning creative workspaces requires a different approach to standard office or industrial cleaning — we work around valuable equipment, artwork and materials while delivering thorough cleaning of floors, surfaces and amenities. Our teams follow detailed site-specific instructions to ensure your creative environment is clean, fresh and ready for work without ever disrupting your setup or assets."
            },
            {
                question: "Can you handle industrial cleaning for manufacturing businesses in St Peters?",
                answer: "Absolutely. St Peters still hosts a number of active industrial and trade businesses, and our industrial cleaning teams are fully equipped to handle these environments. We provide heavy-duty floor scrubbing, machinery surrounds cleaning, amenities maintenance and waste area management for manufacturing, fabrication and trade businesses operating in the St Peters industrial precinct."
            },
            {
                question: "Do you provide co-working and shared office space cleaning in St Peters?",
                answer: "Yes. Co-working spaces in St Peters present a unique cleaning challenge — they host multiple businesses, have high-turnover desk usage and require thorough daily sanitisation. We provide co-working space cleaning programs that address hot desks, meeting rooms, shared kitchens, reception areas and bathrooms, with particular focus on high-touch surface disinfection for shared environments."
            },
            {
                question: "Can you clean mixed-use commercial buildings in St Peters?",
                answer: "Yes. Many St Peters commercial buildings combine ground-floor retail or industrial space with upper-floor offices or studios. We manage cleaning programs across the full building footprint — from loading docks and ground-floor workshops to upper-floor offices, stairwells, common areas and external facades — providing a single, accountable cleaning partner for the entire property."
            },
            {
                question: "Do you offer after-hours commercial cleaning in St Peters?",
                answer: "Yes. Many St Peters creative, media and technology businesses work non-traditional hours, and we build our cleaning schedules around your operational pattern. Whether you need a 6am clean before the studio opens, a post-production clean at midnight, or a weekend maintenance service, we accommodate your schedule to deliver cleaning that genuinely works for your business."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning St Peters NSW" },
            { src: "/images/services/office.webp", alt: "Creative studio cleaning St Peters NSW" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning St Peters NSW"
                serviceDescription="Professional commercial cleaning services in St Peters NSW covering industrial facilities, creative studios, offices and mixed-use commercial spaces across inner south Sydney."
                serviceUrl="/commercial-cleaning-st-peters"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
