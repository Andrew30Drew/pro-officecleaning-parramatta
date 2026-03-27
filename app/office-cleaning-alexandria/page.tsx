import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Office Cleaning Alexandria | Commercial Cleaners Inner South Sydney | Pro Clean Corp',
    description: 'Professional office cleaning services in Alexandria NSW. Trusted by design studios, tech companies, showrooms & warehouses. Police-checked, $20M insured. Call 1300 494 983.',
    keywords: 'office cleaning alexandria, commercial cleaning alexandria, office cleaners alexandria, cleaning services alexandria nsw, alexandria office cleaners sydney, inner south sydney commercial cleaning alexandria',
    openGraph: {
        title: 'Office Cleaning Alexandria | Inner South Sydney Commercial Cleaning | Pro Clean Corp',
        description: 'Office and commercial cleaning in Alexandria NSW. Police-checked staff, $20M insured, flexible scheduling. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/office-cleaning-alexandria',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Office cleaning Alexandria NSW commercial cleaners inner south Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-alexandria' },
};

const faqs = [
    {
        question: 'What types of businesses in Alexandria do you clean?',
        answer: 'Alexandria is one of Sydney\'s most creatively and commercially diverse inner suburbs — home to design studios, architecture firms, technology companies, fashion showrooms, food production businesses, and warehouse-conversion offices. Pro Clean Corp has experience with all of these environments and can tailor a cleaning scope to the unique character of Alexandria\'s mixed-use commercial buildings, whether it\'s a converted warehouse with polished concrete floors or a modern purpose-built office.'
    },
    {
        question: 'Do you clean showrooms and design studios in Alexandria?',
        answer: 'Yes. Alexandria\'s high-profile showrooms — furniture, lighting, fashion, interiors — demand a particularly high presentation standard. We provide specialist showroom cleaning that maintains the product presentation environment, carefully cleans display surfaces and product vitrines, polishes showroom floors to a high standard, and ensures the space looks immaculate for client visits and industry trade days.'
    },
    {
        question: 'Can you clean Alexandria offices and warehouses after hours?',
        answer: 'Yes. Early morning cleaning from 5am, evening cleaning from 5:30pm, and weekend services are available for all Alexandria clients. Many Alexandria businesses have non-standard hours — especially those with production or showroom components — and we accommodate flexible scheduling that works around your operational requirements.'
    },
    {
        question: 'Do you clean the warehouse component of office-warehouse properties in Alexandria?',
        answer: 'Yes. Alexandria has many combined office-warehouse properties where the same business occupies both spaces. We clean both components — the office areas to standard commercial cleaning specification and the warehouse areas using appropriate industrial floor cleaning equipment, degreasers, and methods. A single cleaning contractor covering both areas is more efficient and cost-effective for the business.'
    },
    {
        question: 'Are your Alexandria office cleaners insured and police-checked?',
        answer: 'Yes. All Pro Clean Corp staff hold current National Police Clearances and are covered by $20 million public liability insurance. We are WorkCover insured and provide all required documentation for building management access in Alexandria\'s commercial and industrial precincts.'
    }
];

export default function OfficeCleaningAlexandriaPage() {
    const serviceInfo = {
        title: 'Office Cleaning Alexandria',
        description: 'Alexandria has reinvented itself as one of Sydney\'s most exciting commercial precincts — a dense inner-south suburb where converted warehouses, design studios, tech companies, high-end showrooms, and food businesses coexist in a characterful urban environment. The businesses here are discerning, the spaces are often premium, and the cleaning required reflects that standard. Pro Clean Corp provides professional office and commercial cleaning services throughout Alexandria, with the experience and flexibility to serve this suburb\'s uniquely diverse commercial mix.',
        benefits: [
            'Inner-South Sydney Coverage: Established cleaning teams covering Alexandria, Waterloo, Zetland, Rosebery, Mascot, Beaconsfield, and surrounding inner-south suburbs.',
            'Warehouse-Conversion Office Specialists: Experienced in cleaning converted warehouse offices — polished concrete floors, exposed ceilings, mezzanine levels, and the unique character of industrial-to-commercial conversions.',
            'Showroom & Design Studio Cleaning: High-presentation cleaning for Alexandria\'s luxury showrooms, design studios, and architecture offices — product surfaces, display vitrines, and polished floors treated with care.',
            'Office-Warehouse Combined Cleaning: Single-provider cleaning for mixed office-warehouse premises — office areas to commercial standard, warehouse floors with industrial scrubbing equipment.',
            'Flexible After-Hours Scheduling: Evening, early morning, and weekend cleaning to fit Alexandria\'s diverse operating patterns — showrooms, production businesses, and creative studios all have different hours.',
            'Police-Checked & $20M Insured: All staff hold National Police Clearances and full public liability cover — required by Alexandria\'s commercial building managers.',
            'Eco-Conscious Products: Environmentally responsible cleaning products suited to Alexandria\'s progressive, sustainability-aware business community.'
        ],
        process: [
            'Free On-Site Assessment: We visit your Alexandria premises, assess the unique cleaning requirements of your space and business type, and provide a written fixed-price quote within 24 hours.',
            'Custom Cleaning Plan: Documented scope tailored to Alexandria\'s diverse commercial environments — from polished concrete showroom floors to standard office areas and combined warehouse spaces.',
            'Dedicated Inner-South Team: Experienced cleaners assigned to your Alexandria account who are familiar with the suburb\'s building types and operational character.',
            'Quality Management: Supervisor checks, direct account manager contact, and 24-hour resolution for any service feedback or quality concern.'
        ],
        whyChooseUs: [
            'Alexandria Commercial Expertise: Deep familiarity with Alexandria\'s unique commercial mix — warehouse conversions, showrooms, tech offices, and design studios all have different needs.',
            '15+ Years Inner-South Sydney Cleaning: Extensive experience serving Alexandria and surrounding inner-south suburbs with consistent quality and reliability.',
            '$20M Public Liability Insurance: Full commercial coverage required by Alexandria\'s property managers, strata plans, and commercial building owners.',
            'Police-Checked Staff: National Police Clearances for all cleaners — essential for after-hours access to commercial and creative premises.',
            'Industrial Cleaning Capability: Floor scrubbing machines and industrial products available for warehouse components and heavy-traffic production areas.',
            '100% Satisfaction Guarantee: Any quality concern resolved within 24 hours with a free return visit at no cost.'
        ],
        serviceAreas: [
            'Alexandria', 'Waterloo', 'Zetland', 'Rosebery',
            'Mascot', 'Beaconsfield', 'Redfern', 'Chippendale',
            'Surry Hills', 'Botany', 'Eastlakes', 'Newtown'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Office cleaning Alexandria NSW inner south Sydney commercial cleaners' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Alexandria office cleaning showroom warehouse' }
        ],
        relatedServices: [
            'Commercial Cleaning Mascot',
            'Commercial Cleaning Chippendale',
            'Office Cleaning Sydney',
            'Commercial Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Office Cleaning Alexandria"
                serviceDescription="Professional office and commercial cleaning in Alexandria NSW. Specialists in warehouse-conversion offices, design studios, showrooms, and mixed office-warehouse properties. Police-checked staff, $20M insured, flexible scheduling."
                serviceUrl="/office-cleaning-alexandria"
                serviceType="Office Cleaning"
                price="$$"
                additionalServices={['Showroom Cleaning', 'Warehouse Floor Cleaning', 'Kitchen Cleaning', 'Bathroom Sanitisation', 'Glass & Window Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
