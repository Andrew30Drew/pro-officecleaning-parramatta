import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaners Parramatta | Trusted Business Cleaning | Pro Clean Corp',
    description: 'Trusted commercial cleaners in Parramatta NSW. Serving Parramatta CBD offices, government buildings, medical practices & retail. Police-checked, $20M insured. Call 1300 494 983.',
    keywords: 'commercial cleaners parramatta, commercial cleaning parramatta, office cleaners parramatta, business cleaners parramatta nsw, cleaning company parramatta, parramatta commercial cleaning services, western sydney commercial cleaners parramatta',
    openGraph: {
        title: 'Commercial Cleaners Parramatta | Trusted Business Cleaning | Pro Clean Corp',
        description: 'Trusted commercial cleaners in Parramatta CBD. Police-checked, $20M insured, all business types. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/commercial-cleaners-parramatta',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaners Parramatta NSW trusted business cleaning' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaners-parramatta' },
};

const faqs = [
    {
        question: 'What makes Pro Clean Corp the right commercial cleaners for Parramatta businesses?',
        answer: 'Pro Clean Corp has been servicing commercial clients in Parramatta and Western Sydney for over 15 years. Our Parramatta commercial cleaning teams are experienced with the precinct\'s diverse business mix — from government agencies and corporate towers to medical practices, retail showrooms, and small professional offices. We know the buildings, the building managers, and the standards that Parramatta clients expect. That local knowledge, combined with consistent quality and responsive account management, is what keeps our Parramatta clients with us long-term.'
    },
    {
        question: 'What services do your commercial cleaners provide in Parramatta?',
        answer: 'Our Parramatta commercial cleaning services include regular office cleaning (daily to fortnightly), medical and dental practice cleaning, end of lease cleaning for commercial tenants, carpet steam cleaning, hard floor maintenance, window and glass cleaning, periodic deep cleaning, and specialised cleaning for government and corporate tenancies. All services are available as standalone or as part of a comprehensive managed cleaning program.'
    },
    {
        question: 'Are your Parramatta commercial cleaners available after business hours?',
        answer: 'Yes. Most of our Parramatta commercial cleaning services are delivered outside standard business hours — evening cleaning from 5:30pm is our most popular option for corporate clients, with early morning cleaning from 5am also available. Weekend cleaning is available for businesses requiring it. We manage key holding and building access with full security protocols.'
    },
    {
        question: 'Can your commercial cleaners handle multiple Parramatta locations?',
        answer: 'Yes. We manage multi-site commercial cleaning contracts across Parramatta and Greater Sydney. If your business has multiple offices, retail locations, or service centres across the Parramatta area, we can provide a single managed contract with consistent standards, consolidated invoicing, and a single account manager across all sites.'
    },
    {
        question: 'How do your commercial cleaners in Parramatta price their services?',
        answer: 'We provide fixed monthly pricing based on your premises size, the scope of tasks, and the frequency of service. All pricing is agreed upfront with no variable charges — you receive one monthly invoice covering all agreed cleaning services. Call 1300 494 983 to arrange a free on-site assessment and written quote for your Parramatta premises.'
    }
];

export default function CommercialCleanersParramattaPage() {
    const serviceInfo = {
        title: 'Commercial Cleaners Parramatta',
        description: 'Finding reliable, professional commercial cleaners in Parramatta means finding a cleaning company that understands the city\'s diverse commercial character — its government towers, corporate offices, medical precincts, retail centres, and the full spectrum of Western Sydney business types that call Parramatta home. Pro Clean Corp has been those commercial cleaners for Parramatta businesses for over 15 years, building a reputation for consistent quality, reliable scheduling, and the kind of account management that means you never have to chase your cleaning company.',
        benefits: [
            'Parramatta\'s Trusted Commercial Cleaners: 15+ years serving Parramatta CBD businesses — known by building managers, strata companies, and corporate tenants across the precinct.',
            'All Commercial Business Types: Government offices, corporate towers, medical practices, legal firms, real estate agencies, retail showrooms, and small professional suites — all cleaned to the appropriate standard.',
            'Reliable After-Hours Scheduling: Evening and early morning cleaning that fits Parramatta\'s busy commercial day — your office is always clean when your team arrives in the morning.',
            'Multi-Site Management: Single managed contract for businesses with multiple Parramatta or Greater Sydney locations — consistent standards, consolidated invoicing, one account manager.',
            'Full Commercial Services: Regular office cleaning, carpet cleaning, end of lease, window cleaning, medical cleaning, and periodic deep cleans — all under one provider.',
            'Police-Checked & Fully Insured: National Police Clearances and $20M public liability for every team member — non-negotiable for Parramatta\'s government and corporate clients.',
            'Fixed Monthly Pricing: Agreed price upfront, one invoice per month — no surprises, no variable charges, easy budget management for your Parramatta business.'
        ],
        process: [
            'Free Parramatta Assessment: We visit your premises, assess the full cleaning scope, and provide a written fixed monthly price within 24 hours — no obligation.',
            'Custom Cleaning Program: Documented checklist for every area, agreed schedule, and specific requirements all captured upfront so you know exactly what you are getting.',
            'Dedicated Parramatta Team: The same experienced cleaners at your premises every visit — consistent standards, site familiarity, and accountable service.',
            'Proactive Account Management: A named account manager, regular quality checks, and fast response to any feedback — you should never have to chase your commercial cleaners.'
        ],
        whyChooseUs: [
            '15+ Years Parramatta Commercial Cleaning: Deeply established in Parramatta\'s commercial cleaning market — known by the businesses and building managers who matter.',
            '$20M Public Liability Insurance: The coverage level required by Parramatta\'s major building managers, government agencies, and corporate tenants.',
            'Police-Checked Every Staff Member: Current National Police Clearances across the entire cleaning team — essential for Parramatta\'s government and security-sensitive buildings.',
            'Western Sydney Local Presence: Parramatta-based teams, fast mobilisation, and genuine local knowledge of the precinct\'s commercial buildings and operational patterns.',
            '100% Satisfaction Guarantee: Any quality concern is resolved with a free return visit within 24 hours — our commitment to every Parramatta commercial cleaning client.',
            'Transparent Fixed Pricing: One agreed monthly price covering all services — no hidden fees, no scope creep, no billing surprises.'
        ],
        serviceAreas: [
            'Parramatta CBD', 'North Parramatta', 'South Parramatta', 'Westmead',
            'Harris Park', 'Granville', 'Merrylands', 'Wentworthville',
            'Woodville', 'Toongabbie', 'Constitution Hill', 'Old Toongabbie'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaners Parramatta NSW trusted business cleaning' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Parramatta commercial cleaners Western Sydney' }
        ],
        relatedServices: [
            'Commercial Cleaning Parramatta',
            'Office Cleaning Parramatta',
            'Commercial Cleaning Sydney',
            'Office Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaners Parramatta"
                serviceDescription="Trusted commercial cleaners in Parramatta NSW. Serving Parramatta CBD offices, government buildings, medical practices, retail, and all commercial business types. Police-checked staff, $20M insured, fixed monthly pricing."
                serviceUrl="/commercial-cleaners-parramatta"
                serviceType="CommercialService"
                price="$$"
                additionalServices={['Office Cleaning', 'Medical Practice Cleaning', 'Carpet Cleaning', 'Window Cleaning', 'End of Lease Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
