import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Penrith NSW | Professional Business Cleaning Services',
    description: 'Professional commercial cleaning services in Penrith NSW. Trusted cleaners for offices, warehouses, medical centres, and businesses across Western Sydney. Daily, weekly and one-off cleaning available.',
    keywords: 'commercial cleaning Penrith, professional cleaners Penrith NSW, business cleaning Penrith, office cleaning western Sydney',
    openGraph: {
        title: 'Commercial Cleaning Penrith NSW | Professional Business Cleaning Services | Pro Clean Corp',
        description: 'Trusted commercial cleaning for offices, warehouses, medical centres, and all business types in Penrith and western Sydney. Call Pro Clean Corp on 1300 494 983.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-penrith',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Penrith NSW professional business cleaners western Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-penrith' },
};

const faqs = [
    {
        question: 'What types of businesses do you clean in Penrith?',
        answer: 'Pro Clean Corp provides commercial cleaning for the full range of Penrith and western Sydney business types — corporate offices, professional services firms, medical and dental centres, retail stores, restaurants and cafes, warehouses and distribution facilities, industrial manufacturing sites, gyms, childcare centres, and government facilities. Penrith\'s position as western Sydney\'s major commercial hub means we service everything from small professional suites to large-scale industrial and logistics operations across the Penrith LGA.'
    },
    {
        question: 'Do you offer after-hours commercial cleaning in Penrith?',
        answer: 'Yes. After-hours commercial cleaning is available for all Penrith clients. We offer evening cleaning from 5:30pm and early morning cleaning from 5am, allowing your business to operate without disruption during the working day. We manage building access keys and codes with full security accountability. Most Penrith office and retail clients prefer after-hours cleaning to keep their premises tidy for staff and customers during business hours.'
    },
    {
        question: 'Can you clean Penrith warehouses and industrial facilities?',
        answer: 'Yes. Industrial and warehouse cleaning is one of our core commercial cleaning services in the Penrith area. Penrith and its surrounding industrial estates — including St Marys, Emu Plains, and Kingswood — have significant warehouse and logistics operations. We provide scheduled warehouse floor cleaning, factory cleaning, high-bay cleaning, loading dock cleaning, amenities cleaning, and compliance-standard industrial facility maintenance.'
    },
    {
        question: 'Do you offer commercial cleaning contracts for Penrith businesses?',
        answer: 'Yes. We offer flexible cleaning contracts for Penrith businesses of all sizes, from daily cleaning contracts for large commercial premises to weekly or fortnightly contracts for smaller offices. Contracts provide fixed monthly pricing, a dedicated account manager, and priority scheduling. We also offer one-off commercial cleaning for Penrith businesses requiring a deep clean, spring clean, or pre/post-event cleaning without an ongoing commitment.'
    },
    {
        question: 'How do I get a commercial cleaning quote in Penrith?',
        answer: 'Call 1300 494 983 or complete our online enquiry form to arrange a free on-site assessment at your Penrith premises. We will inspect your facility, understand your cleaning requirements and schedule, and provide a written fixed-price quote within 24 hours. There is no obligation, and our Penrith and western Sydney team will tailor a cleaning program specifically to your business needs and budget.'
    }
];

export default function CommercialCleaningPenrithPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Penrith',
        description: 'Penrith has grown into one of western Sydney\'s most significant commercial centres — a thriving hub of corporate offices, medical precincts, industrial estates, retail centres, and hospitality businesses that demand consistent, professional-grade cleaning services. Pro Clean Corp delivers dependable commercial cleaning across Penrith and the surrounding western Sydney region, with experienced teams, flexible scheduling, and a quality guarantee that ensures your business premises are always presented at their best.',
        benefits: [
            'Penrith Commercial Specialists: Established service network across Penrith CBD, Penrith industrial estates, Kingswood, St Marys, and the wider western Sydney commercial area — familiar with the region\'s diverse business landscape.',
            'All Business Types Covered: From corporate offices in Penrith CBD to warehouses in St Marys industrial estate, medical centres in Kingswood, and retail businesses across the Penrith LGA — we clean every commercial property type.',
            'After-Hours Flexibility: Evening and early morning cleaning available 7 days a week — zero disruption to your Penrith business operations, staff, or customers.',
            'Industrial & Warehouse Cleaning: Purpose-built cleaning programs for Penrith\'s warehouses, factories, and logistics facilities — floor cleaning, amenities, loading docks, and compliance-standard maintenance.',
            'Medical & Healthcare Cleaning: Hospital-grade cleaning protocols for Penrith\'s medical centres, dental practices, pathology labs, and allied health facilities — infection control compliant.',
            'Police-Checked & $20M Insured: All Pro Clean Corp staff hold National Police Clearances and full public liability insurance — essential for Penrith\'s medical, government, and corporate clients.',
            'Fixed-Price Contracts: Monthly fixed-price cleaning contracts for straightforward budget management — no surprises, no price hikes, just reliable cleaning delivered consistently every visit.'
        ],
        process: [
            'Free Site Assessment: We visit your Penrith premises, assess all cleaning areas and access requirements, and provide a written fixed-price quote within 24 hours tailored to your business type and schedule.',
            'Custom Cleaning Program: A documented cleaning scope and schedule is agreed upfront — covering every area of your Penrith facility with specific tasks, frequencies, and quality standards clearly defined.',
            'Dedicated Western Sydney Team: Experienced Penrith-region cleaners assigned to your account, familiar with the area\'s industrial estates, medical precincts, and commercial building access requirements.',
            'Ongoing Quality Assurance: Regular supervisor inspections, direct account manager contact, and 24-hour response for any service concern — quality guaranteed on every visit to your Penrith business.'
        ],
        whyChooseUs: [
            'Western Sydney Commercial Expertise: Deep knowledge of Penrith\'s commercial landscape — from Penrith CBD offices to St Marys industrial estates, Emu Plains retail, and Glenmore Park professional services.',
            '15+ Years Cleaning Experience: Over 15 years providing commercial cleaning to western Sydney businesses — Penrith and the Blue Mountains foothills region is a core part of our service area.',
            '$20M Public Liability Insurance: Full commercial coverage required by Penrith\'s industrial operators, medical landlords, and corporate property managers.',
            'Police-Checked Staff Only: Current National Police Clearances for all team members — essential for access to Penrith\'s medical centres, government facilities, and after-hours commercial premises.',
            '7-Day Availability: Monday to Sunday scheduling with after-hours options — accommodating the diverse operating hours of Penrith\'s retail, hospitality, and industrial businesses.',
            '100% Satisfaction Guarantee: Any quality concern resolved within 24 hours with a complimentary return visit — your Penrith business will always be cleaned to the standard you expect.'
        ],
        serviceAreas: [
            'Penrith', 'Kingswood', 'St Marys', 'Emu Plains',
            'Werrington', 'Cambridge Park', 'Cranebrook', 'Jamisontown',
            'Glenmore Park', 'Orchard Hills', 'Mulgoa', 'Wallacia',
            'Blue Mountains', 'Katoomba', 'Springwood'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Penrith NSW professional business cleaners western Sydney' },
            { src: '/images/services/office.webp', alt: 'Pro Clean Corp Penrith office and commercial cleaning western Sydney' }
        ],
        relatedServices: [
            'Commercial Cleaning Parramatta',
            'Office Cleaning Parramatta',
            'Commercial Cleaning Sydney',
            'Warehouse Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Penrith"
                serviceDescription="Professional commercial cleaning services in Penrith NSW and western Sydney. Office cleaning, warehouse cleaning, medical centre cleaning, retail cleaning, and industrial facility cleaning for all Penrith and western Sydney businesses. Police-checked, $20M insured, flexible scheduling."
                serviceUrl="/commercial-cleaning-penrith"
                serviceType="CommercialService"
                price="$$"
                additionalServices={['Office Cleaning', 'Warehouse Cleaning', 'Medical Facility Cleaning', 'Industrial Cleaning', 'Floor Care & Polishing']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
