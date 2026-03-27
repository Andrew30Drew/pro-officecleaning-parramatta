import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Auburn | Office & Industrial Cleaners Western Sydney | Pro Clean Corp',
    description: 'Professional commercial cleaning services in Auburn NSW. Offices, industrial facilities, food businesses & retail. Police-checked, $20M insured, local Western Sydney teams. Call 1300 494 983.',
    keywords: 'commercial cleaning auburn, office cleaning auburn, industrial cleaning auburn, commercial cleaners auburn nsw, cleaning services auburn sydney, auburn office cleaners western sydney, business cleaning auburn',
    openGraph: {
        title: 'Commercial Cleaning Auburn | Office & Industrial Cleaners | Pro Clean Corp',
        description: 'Commercial and industrial cleaning in Auburn NSW. Police-checked, $20M insured, flexible scheduling. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-auburn',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Auburn NSW office industrial cleaners western Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-auburn' },
};

const faqs = [
    {
        question: 'What types of commercial properties do you clean in Auburn?',
        answer: 'Auburn has a diverse commercial and industrial base — food manufacturing and processing businesses, automotive showrooms and workshops, retail centres, professional services offices, and light industrial facilities. Pro Clean Corp has experience across all of these property types, including the specific hygiene requirements of food-adjacent businesses and the heavy-duty cleaning needs of industrial environments.'
    },
    {
        question: 'Do you provide industrial cleaning services in Auburn?',
        answer: 'Yes. Industrial cleaning in Auburn requires different equipment and methods than standard office cleaning — floor scrubbing machines, industrial-grade degreasers, pressure washing, and the ability to clean large-footprint operational spaces. We service warehouses, light manufacturing facilities, food production areas, and automotive workshops across Auburn with appropriate industrial cleaning programs.'
    },
    {
        question: 'Can you clean food businesses and commercial kitchens in Auburn?',
        answer: 'Yes. Auburn has a significant food retail and manufacturing presence. We provide commercial kitchen cleaning, food processing area cleaning, cold room cleaning, and front-of-house cleaning for Auburn\'s food businesses. All products used in food areas are food-safe and compliant with NSW Food Authority standards. We can provide appropriate documentation for council and regulatory inspection purposes.'
    },
    {
        question: 'Are your Auburn commercial cleaners police-checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff hold current National Police Clearances and are covered by $20 million public liability insurance. We are WorkCover insured and can provide all documentation required for commercial building access in Auburn.'
    },
    {
        question: 'How quickly can you start commercial cleaning in Auburn?',
        answer: 'We can typically begin regular commercial cleaning services in Auburn within one week of quote acceptance. For urgent cleaning requirements, we can often mobilise within 24–48 hours. Call 1300 494 983 and we will arrange a free on-site assessment and quote at your earliest convenience.'
    }
];

export default function CommercialCleaningAuburnPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Auburn',
        description: 'Auburn is one of Western Sydney\'s most commercially and industrially active suburbs — a dynamic mix of food businesses, automotive services, retail, professional offices, and light industrial operations that all require professional, reliable cleaning. Pro Clean Corp provides tailored commercial cleaning services throughout Auburn, with experience across the full range of Auburn\'s commercial property types, flexible scheduling that works around your operational hours, and the local Western Sydney presence to deliver fast, responsive service.',
        benefits: [
            'Auburn & Western Sydney Coverage: Dedicated commercial cleaning teams covering Auburn and surrounding suburbs including Merrylands, Granville, Lidcombe, Berala, and Woodville.',
            'Industrial & Office Cleaning Expertise: Experience across Auburn\'s diverse commercial mix — from professional services offices to food manufacturing, automotive workshops, and retail centres.',
            'Food Business & Commercial Kitchen Cleaning: Food-safe products, NSW Food Authority-aligned cleaning standards, and documentation for regulatory compliance in Auburn\'s significant food sector.',
            'Industrial Floor Cleaning: Auto-scrubbing machines for warehouse floors, industrial degreasers for manufacturing areas, and pressure washing for car parks and external areas.',
            'Flexible Scheduling: Early morning, evening, and weekend cleaning to fit Auburn\'s diverse business operating hours — including around-the-clock availability for shift-based operations.',
            'Police-Checked & $20M Insured: All staff hold National Police Clearances and full public liability cover — the standard required by Auburn\'s commercial building managers.',
            'Consistent Local Team: Experienced Western Sydney cleaners assigned to your Auburn account for reliable service and site familiarity.'
        ],
        process: [
            'Free On-Site Assessment: We visit your Auburn premises, assess all cleaning requirements including any industrial or food-safe considerations, and provide a written fixed-price quote.',
            'Custom Cleaning Program: Scope, schedule, and product selection documented to match your Auburn business\'s operational environment and compliance requirements.',
            'Auburn-Area Team Assigned: Experienced Western Sydney cleaners allocated to your account with knowledge of Auburn\'s commercial precinct and operational environment types.',
            'Quality Management: Supervisor checks, direct account manager contact, and rapid resolution for any service feedback within 24 hours.'
        ],
        whyChooseUs: [
            'Western Sydney Local Presence: Teams based in Western Sydney covering Auburn, Merrylands, Granville, Lidcombe, Berala, Woodville, and surrounds — local response, reliable scheduling.',
            '15+ Years Commercial Cleaning: Extensive experience across Western Sydney\'s diverse commercial and industrial cleaning market.',
            '$20M Public Liability Insurance: Full commercial coverage required by Auburn\'s property managers, industrial facility operators, and commercial landlords.',
            'Police-Checked Staff: National Police Clearances for all cleaners — essential for after-hours access to commercial and industrial premises.',
            'Industrial Cleaning Capability: Floor scrubbers, pressure washers, and industrial-grade products for Auburn\'s heavier-duty commercial environments.',
            '100% Satisfaction Guarantee: Any quality concern resolved within 24 hours with a free return visit at no additional charge.'
        ],
        serviceAreas: [
            'Auburn', 'Merrylands', 'Granville', 'Lidcombe',
            'Berala', 'Woodville', 'Girraween', 'Clyde',
            'South Granville', 'Regents Park', 'Birrong', 'Chester Hill'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Auburn NSW office industrial cleaners western Sydney' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Auburn commercial cleaning western Sydney team' }
        ],
        relatedServices: [
            'Commercial Cleaning Sydney',
            'Industrial Cleaning Sydney',
            'Commercial Cleaning Concord',
            'Office Cleaning Parramatta'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Auburn"
                serviceDescription="Professional commercial and industrial cleaning services in Auburn NSW. Office cleaning, industrial facility cleaning, food business cleaning, and retail cleaning across Auburn and Western Sydney. Police-checked staff, $20M insured."
                serviceUrl="/commercial-cleaning-auburn"
                serviceType="CommercialService"
                price="$$"
                additionalServices={['Industrial Floor Cleaning', 'Office Cleaning', 'Food Business Cleaning', 'Pressure Washing', 'Bathroom Sanitisation']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
