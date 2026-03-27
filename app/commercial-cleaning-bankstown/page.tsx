import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Bankstown NSW | Professional Office & Business Cleaning Services',
    description: 'Professional commercial cleaning in Bankstown NSW and Canterbury-Bankstown area. Office cleaning, retail cleaning, warehouse cleaning, restaurant cleaning for local businesses. Competitive rates, reliable service.',
    keywords: 'commercial cleaning Bankstown, office cleaning Bankstown NSW, business cleaning Canterbury Bankstown, professional cleaners south-west Sydney',
    openGraph: {
        title: 'Commercial Cleaning Bankstown NSW | Professional Office & Business Cleaning Services | Pro Clean Corp',
        description: 'Professional commercial cleaning for offices, retail, warehouses, restaurants, and all business types in Bankstown and Canterbury-Bankstown. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-bankstown',
        type: 'website',
        images: [{ url: '/images/hero/hero2.jpg', alt: 'Commercial cleaning Bankstown NSW professional business cleaners Canterbury Bankstown' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-bankstown' },
};

const faqs = [
    {
        question: 'What types of businesses do you clean in Bankstown?',
        answer: 'Pro Clean Corp provides commercial cleaning for all business types in Bankstown and the Canterbury-Bankstown LGA. This includes corporate offices, retail stores and shopfronts, restaurants, cafes, and takeaway food businesses, medical and dental clinics, warehouse and storage facilities, childcare centres and schools, gyms and fitness studios, strata complexes, and industrial facilities. Bankstown\'s diverse and high-density business community is one of the busiest commercial cleaning markets in south-west Sydney, and we are well-established across the entire Canterbury-Bankstown area.'
    },
    {
        question: 'How much does commercial cleaning cost in Bankstown?',
        answer: 'Commercial cleaning costs in Bankstown depend on the size of your premises, the frequency of cleaning, and the specific services required. Small offices in Bankstown typically start from $80-$120 per clean on a regular schedule. Larger commercial premises, warehouses, restaurants, and medical facilities are priced based on a free on-site assessment. Pro Clean Corp provides competitive, fixed-price quotes with no hidden charges — the price you receive is the price you pay. Call 1300 494 983 or enquire online for a tailored quote for your Bankstown business.'
    },
    {
        question: 'Do you clean restaurants and food businesses in Bankstown?',
        answer: 'Yes. Restaurant and food business cleaning is a specialty in the Bankstown area, which has one of the highest concentrations of food and beverage businesses in south-west Sydney. We provide front-of-house and back-of-house restaurant cleaning, commercial kitchen cleaning, grease trap area cleaning, exhaust and rangehood cleaning, and floor deep cleaning for Bankstown\'s diverse restaurant community. Our teams understand the strict hygiene standards required by local council and food safety regulations.'
    },
    {
        question: 'Can you schedule commercial cleaning around our Bankstown business hours?',
        answer: 'Yes. We offer fully flexible scheduling for all Bankstown commercial cleaning clients. After-hours cleaning (from 5:30pm), early morning cleaning (from 5am), weekend cleaning, and split-shift arrangements are all available. Bankstown\'s busy retail and restaurant precinct means many clients prefer late-night or early-morning cleaning — we accommodate all scheduling requirements to ensure your business is never disrupted during trading hours.'
    },
    {
        question: 'Are your Bankstown commercial cleaners reliable and trustworthy?',
        answer: 'Yes. Reliability and trustworthiness are the foundation of our business. All Pro Clean Corp staff working in Bankstown hold current National Police Clearances and are covered by $20M public liability insurance. We use team leaders and supervisor spot checks on all regular Bankstown cleaning contracts. You will have a dedicated account manager as your direct point of contact, and any service concern is addressed within 24 hours. Our Bankstown clients include businesses that have been with us for many years — that consistency is the measure of our reliability.'
    }
];

export default function CommercialCleaningBanktownPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Bankstown',
        description: 'Bankstown and the Canterbury-Bankstown LGA is one of south-west Sydney\'s most dynamic and densely populated commercial districts — a diverse business community spanning retail, food and beverage, healthcare, professional services, warehousing, education, and light industrial operations. The area\'s multicultural business landscape and competitive commercial environment demand cleaning services that are affordable, reliable, and delivered to a consistently high standard. Pro Clean Corp provides professional commercial cleaning across Bankstown and all Canterbury-Bankstown suburbs, with competitive pricing, flexible scheduling, and a quality guarantee behind every service.',
        benefits: [
            'Canterbury-Bankstown Specialists: Well-established service network across Bankstown CBD and all surrounding suburbs — Punchbowl, Greenacre, Roselands, Padstow, Revesby, Condell Park, Campsie, Lakemba, and Belmore.',
            'Restaurant & Food Business Cleaning: Specialist front and back-of-house restaurant cleaning for Bankstown\'s high-density food and beverage precinct — commercial kitchen cleaning, grease cleaning, and food safety compliance.',
            'Retail & Shopfront Cleaning: Daily or weekly retail cleaning for Bankstown\'s busy commercial strips and shopping centre tenancies — customer-facing areas always presented at their best.',
            'Warehouse & Storage Facility Cleaning: Industrial and warehouse cleaning for Bankstown\'s storage, logistics, and light manufacturing businesses — floor maintenance, amenities, and compliance standards.',
            'Competitive South-West Sydney Pricing: Fair, transparent, fixed-price commercial cleaning rates for Bankstown businesses — no lock-in contracts required for initial service, competitive ongoing contract pricing.',
            'Police-Checked & $20M Insured: All staff hold National Police Clearances and full public liability insurance — meeting the requirements of Bankstown\'s medical centres, childcare operators, and commercial property landlords.',
            'After-Hours & Weekend Cleaning: Evening, early morning, and weekend commercial cleaning for Bankstown\'s diverse business community — fully flexible around your operating hours and customer trading periods.'
        ],
        process: [
            'Free On-Site Assessment: We visit your Bankstown business, assess your premises and cleaning requirements, and provide a written fixed-price quote within 24 hours — tailored to your business type, size, and preferred cleaning schedule.',
            'Agreed Cleaning Scope: A detailed cleaning plan is documented and agreed before we start — covering every area of your Bankstown premises with specific tasks, frequencies, and measurable quality standards.',
            'Dedicated South-West Sydney Team: Experienced cleaners familiar with Bankstown\'s commercial precinct, food business hygiene requirements, and the diversity of the Canterbury-Bankstown business community assigned to your account.',
            'Quality Control & Account Management: Regular supervisor spot checks, a dedicated account manager for direct communication, and 24-hour response for any quality concern — reliable cleaning every single visit.'
        ],
        whyChooseUs: [
            'Bankstown Commercial Experience: Deep knowledge of the Canterbury-Bankstown commercial landscape — high-density retail, food businesses, warehouse operations, and professional services across all suburbs.',
            '15+ Years South-West Sydney Cleaning: Over 15 years servicing south-west Sydney commercial clients — Bankstown, Campsie, Punchbowl, and Padstow are established high-priority service areas.',
            '$20M Public Liability Insurance: Full commercial coverage required by Bankstown\'s childcare operators, medical landlords, strata managers, and commercial property owners.',
            'Police-Checked Staff: National Police Clearances for all team members — trusted access to Bankstown\'s medical centres, childcare facilities, schools, and after-hours commercial premises.',
            'Competitive Bankstown Pricing: Fair, transparent commercial cleaning rates designed for the Canterbury-Bankstown business community — quality service at competitive south-west Sydney prices.',
            '100% Satisfaction Guarantee: Any quality concern resolved within 24 hours with a complimentary return visit — every Bankstown client is guaranteed a consistently high cleaning standard.'
        ],
        serviceAreas: [
            'Bankstown', 'Punchbowl', 'Greenacre', 'Roselands',
            'Bass Hill', 'Padstow', 'Revesby', 'Condell Park',
            'Chester Hill', 'Yagoona', 'Regents Park', 'Wiley Park',
            'Lakemba', 'Belmore', 'Campsie', 'Canterbury'
        ],
        faqs,
        images: [
            { src: '/images/hero/hero2.jpg', alt: 'Commercial cleaning Bankstown NSW professional business cleaners Canterbury Bankstown' },
            { src: '/images/whychoose.jpg', alt: 'Pro Clean Corp Bankstown commercial cleaning south-west Sydney' }
        ],
        relatedServices: [
            'Commercial Cleaning Parramatta',
            'Office Cleaning Bankstown',
            'Commercial Cleaning Sydney',
            'Restaurant Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Bankstown"
                serviceDescription="Professional commercial cleaning in Bankstown NSW and Canterbury-Bankstown LGA. Office cleaning, retail cleaning, warehouse cleaning, restaurant cleaning, medical cleaning, and all commercial property types across Bankstown, Punchbowl, Greenacre, Padstow, Campsie, and all south-west Sydney suburbs."
                serviceUrl="/commercial-cleaning-bankstown"
                serviceType="CommercialService"
                price="$$"
                additionalServices={['Office Cleaning', 'Restaurant Cleaning', 'Warehouse Cleaning', 'Retail Cleaning', 'Medical Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
