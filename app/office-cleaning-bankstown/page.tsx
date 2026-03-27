import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Office Cleaning Bankstown | Commercial Cleaners South Western Sydney | Pro Clean Corp',
    description: 'Professional office cleaning services in Bankstown NSW. Trusted by Bankstown CBD businesses, medical practices, government offices & retail. Police-checked, $20M insured. Call 1300 494 983.',
    keywords: 'office cleaning bankstown, commercial cleaning bankstown, office cleaners bankstown, cleaning services bankstown nsw, bankstown commercial cleaners, south western sydney office cleaning bankstown, business cleaning bankstown',
    openGraph: {
        title: 'Office Cleaning Bankstown | South Western Sydney Commercial Cleaning | Pro Clean Corp',
        description: 'Office cleaning specialists in Bankstown CBD and south-western Sydney. Police-checked, $20M insured, flexible scheduling. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/office-cleaning-bankstown',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Office cleaning Bankstown NSW south western Sydney commercial cleaners' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-bankstown' },
};

const faqs = [
    {
        question: 'What types of offices and businesses do you clean in Bankstown?',
        answer: 'Bankstown is south-western Sydney\'s major commercial hub — home to government service centres, medical and dental practices, legal and financial services firms, real estate agencies, retail businesses, and a diverse range of small and medium commercial offices along the Bankstown CBD corridor. Pro Clean Corp services all of these business types in Bankstown, with cleaning programs tailored to each environment\'s specific requirements.'
    },
    {
        question: 'Do you clean medical practices and allied health offices in Bankstown?',
        answer: 'Yes. Bankstown has a strong medical and allied health presence, particularly around Bankstown-Lidcombe Hospital and the surrounding medical precinct. We provide specialist medical and dental practice cleaning using TGA-approved disinfectants, infection control protocols, and the high-touch surface sanitisation standards required for clinical environments. We can provide compliance documentation for RACGP and other accreditation bodies.'
    },
    {
        question: 'Can you clean Bankstown offices after business hours?',
        answer: 'Yes. Evening cleaning from 5:30pm and early morning cleaning from 5am are available for all Bankstown commercial clients. After-hours cleaning is preferred by most Bankstown CBD businesses to avoid any disruption during client-facing trading hours. We manage building access codes and keys securely with full documented accountability.'
    },
    {
        question: 'Do you service government offices in Bankstown?',
        answer: 'Yes. Bankstown has significant government service centre presence including Service NSW, Centrelink, and various state government agency offices. We are experienced with government building access protocols, security requirements, and the compliance and documentation standards required for government cleaning contracts. All required police clearances and insurance certificates can be provided.'
    },
    {
        question: 'How do I arrange office cleaning for my Bankstown business?',
        answer: 'Call 1300 494 983 or complete our online quote form and we will arrange a free on-site assessment at your Bankstown premises. We provide a written fixed-price quote within 24 hours. Most Bankstown office cleaning clients are on weekly or twice-weekly contracts with fixed monthly billing for straightforward budget management.'
    }
];

export default function OfficeCleaningBankstownPage() {
    const serviceInfo = {
        title: 'Office Cleaning Bankstown',
        description: 'Bankstown is south-western Sydney\'s commercial heartland — a city centre with government services, medical facilities, legal and financial offices, retail businesses, and a diverse commercial community that spans the entire south-western corridor. Pro Clean Corp provides reliable, professional office cleaning services throughout Bankstown, with local cleaning teams, experienced staff, and flexible scheduling built around the operational hours of Bankstown\'s busy commercial environment.',
        benefits: [
            'South-Western Sydney Coverage: Dedicated cleaning teams covering Bankstown and the surrounding south-western suburbs — Bass Hill, Yagoona, Condell Park, Revesby, Punchbowl, Greenacre, and surrounds.',
            'Bankstown CBD Commercial Expertise: Experience with Bankstown\'s diverse commercial mix — government offices, medical practices, law firms, real estate, retail, and SME businesses.',
            'Medical & Allied Health Cleaning: TGA-approved disinfectants and infection control protocols for Bankstown\'s significant medical and dental practice sector — documentation for accreditation included.',
            'Government Office Experience: Familiar with government building access protocols, security requirements, and compliance documentation for Bankstown\'s government service centres.',
            'After-Hours Flexibility: Evening and early morning cleaning to suit Bankstown\'s commercial businesses — no disruption to your staff or clients during trading hours.',
            'Police-Checked & $20M Insured: All staff hold National Police Clearances and full public liability cover — required by Bankstown\'s government and medical building managers.',
            'Consistent Assigned Team: The same trained cleaners at your Bankstown premises every visit — site familiarity, security accountability, and consistent results.'
        ],
        process: [
            'Free On-Site Assessment: We visit your Bankstown office, assess all cleaning zones and specific requirements, and provide a written fixed-price quote within 24 hours.',
            'Custom Cleaning Plan: Documented checklist covering every area of your Bankstown premises — agreed upfront, delivered consistently on every visit.',
            'Dedicated Bankstown Team: Experienced south-western Sydney cleaners assigned to your account, familiar with Bankstown\'s commercial precinct and building types.',
            'Quality Management: Supervisor spot checks, direct account manager contact, and 24-hour resolution for any service feedback or quality concern.'
        ],
        whyChooseUs: [
            'Bankstown Local Knowledge: Teams based in south-western Sydney with genuine familiarity with Bankstown\'s commercial buildings, medical precinct, and government facilities.',
            '15+ Years Commercial Cleaning: Extensive experience serving south-western Sydney commercial clients with consistent quality and reliability.',
            '$20M Public Liability Insurance: Full commercial coverage required by Bankstown\'s building managers, medical facilities, and government agencies.',
            'Police-Checked Staff: Current National Police Clearances for all cleaners — essential for after-hours access to Bankstown\'s government and medical buildings.',
            '7-Day Scheduling: Monday to Sunday availability for Bankstown businesses with diverse operational requirements.',
            '100% Satisfaction Guarantee: Any quality concern resolved within 24 hours with a free return visit — guaranteed, no exceptions.'
        ],
        serviceAreas: [
            'Bankstown', 'Bass Hill', 'Yagoona', 'Condell Park',
            'Revesby', 'Punchbowl', 'Greenacre', 'Wiley Park',
            'Lakemba', 'Belmore', 'Campsie', 'Canterbury'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Office cleaning Bankstown NSW south western Sydney commercial cleaners' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Bankstown office cleaning south western Sydney' }
        ],
        relatedServices: [
            'Office Cleaning Parramatta',
            'Commercial Cleaning Sydney',
            'Medical Cleaning Sydney',
            'Office Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Office Cleaning Bankstown"
                serviceDescription="Professional office and commercial cleaning in Bankstown CBD and south-western Sydney. Specialists in government offices, medical practices, legal firms, and retail businesses. Police-checked staff, $20M insured, flexible after-hours scheduling."
                serviceUrl="/office-cleaning-bankstown"
                serviceType="Office Cleaning"
                price="$$"
                additionalServices={['Medical Practice Cleaning', 'Government Office Cleaning', 'Floor Cleaning', 'Kitchen Cleaning', 'Bathroom Sanitisation']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
