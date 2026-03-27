import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Premier Commercial Cleaning Sydney | Elite Business Cleaning Services | Pro Clean Corp',
    description: 'Sydney\'s premier commercial cleaning company. Premium-grade cleaning for corporate offices, luxury buildings, medical facilities & strata. $20M insured, police-checked, 15+ years. Call 1300 494 983.',
    keywords: 'premier commercial cleaning, premier commercial cleaning sydney, elite commercial cleaning sydney, premium commercial cleaning sydney, top commercial cleaning company sydney, best commercial cleaning sydney, luxury commercial cleaning sydney',
    openGraph: {
        title: 'Premier Commercial Cleaning Sydney | Elite Business Cleaning | Pro Clean Corp',
        description: 'Sydney\'s premier commercial cleaning company. Corporate offices, luxury buildings, medical facilities. $20M insured, 15+ years. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/premier-commercial-cleaning',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Premier commercial cleaning Sydney elite business cleaning' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/premier-commercial-cleaning' },
};

const serviceLinks = [
    { name: 'Commercial Cleaning Sydney', slug: 'commercial-cleaning-sydney' },
    { name: 'Office Cleaning Sydney', slug: 'office-cleaning-sydney' },
    { name: 'Strata Cleaning Sydney', slug: 'strata-cleaning-sydney' },
    { name: 'Medical Cleaning Sydney', slug: 'medical-cleaning-sydney' },
];

const faqs = [
    {
        question: 'What makes Pro Clean Corp a premier commercial cleaning company?',
        answer: 'Pro Clean Corp has been operating in Sydney\'s commercial cleaning market for over 15 years. Premier status comes from consistent delivery — not just at contract start, but month after month, year after year. We invest in staff training, use commercial-grade equipment and TGA-approved products, assign dedicated account managers, and back every job with a satisfaction guarantee. Our 1,200+ business clients and 4.8-star aggregate rating reflect that consistency.'
    },
    {
        question: 'What types of properties do your premier commercial cleaning services cover?',
        answer: 'Our premier commercial cleaning services cover the full spectrum of Sydney commercial environments: A-grade corporate office towers, luxury residential strata buildings, medical and dental practices, aged care facilities, hospitals and day surgeries, gyms and fitness centres, childcare centres, retail showrooms, restaurants, schools, and industrial warehouses. Each environment receives a cleaning program tailored to its specific requirements, regulatory context, and presentation standard.'
    },
    {
        question: 'How do you maintain quality across all your Sydney commercial cleaning contracts?',
        answer: 'Quality control is built into every level of our operation. Each client has a dedicated account manager as their primary point of contact. Team supervisors conduct regular unannounced quality checks. We use digital checklists that cleaners complete on each visit, creating a documented audit trail. Any quality concern reported by a client triggers a same-day or next-day response. This systematic approach is what separates premier cleaning from average cleaning.'
    },
    {
        question: 'Do you hold the insurance and accreditations required by premium Sydney buildings?',
        answer: 'Yes. Pro Clean Corp holds $20 million public liability insurance — the level required by most A-grade commercial building managers in Sydney. All staff hold current National Police Clearances. We are fully WorkCover insured and can provide all required certificates, Safe Work Method Statements, and compliance documentation for building management systems and corporate procurement requirements.'
    },
    {
        question: 'Can you take over an existing commercial cleaning contract in Sydney?',
        answer: 'Yes. We regularly transition clients from existing cleaning providers. Our onboarding process involves a thorough site assessment, a custom cleaning plan, and a smooth handover that minimises disruption to your operations. Most transitions are completed with no gap in service. We are transparent about pricing and do not increase rates without notice.'
    }
];

export default function PremierCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Premier Commercial Cleaning Sydney',
        description: 'Not all commercial cleaning companies deliver the same result — and in Sydney\'s competitive business environment, the difference between average and premier is visible every day. Pro Clean Corp has spent over 15 years building a reputation as one of Sydney\'s most trusted commercial cleaning providers, serving corporate offices, luxury strata buildings, healthcare facilities, gyms, childcare centres, and industrial properties across the entire city. Premier commercial cleaning means consistent standards, accountable teams, superior products, and a service guarantee that backs up every promise.',
        benefits: [
            'A-Grade Corporate Office Cleaning: Premium-standard office cleaning for Sydney\'s top commercial buildings — boardrooms, executive floors, open plan environments, and glass-heavy modern fitouts cleaned to the standard they demand.',
            'Healthcare & Medical Facility Cleaning: TGA-approved, hospital-grade disinfection for medical practices, day surgeries, dental clinics, aged care facilities, and hospitals — infection control as a core competency, not an afterthought.',
            'Luxury Strata Building Cleaning: High-presentation cleaning for premium residential and commercial strata buildings — lobbies, lifts, common areas, and end-of-trip facilities that reflect the building\'s reputation.',
            'Gym & Fitness Centre Cleaning: Specialist gym cleaning with rubber floor equipment, TGA-grade equipment sanitisation, and locker room hygiene programs for Sydney\'s leading fitness operators.',
            'Childcare & Education Cleaning: Safe, TGA-approved products, infection control protocols, and compliance with NSW Health guidelines for childcare centres, preschools, and schools.',
            'Industrial & Warehouse Cleaning: Large-scale industrial cleaning for manufacturing, logistics, and distribution facilities — floor scrubbing machines, pressure washing, and industrial degreasing.',
            'Account Management & Quality Assurance: Every premier client has a dedicated account manager, documented quality checks, and a direct line to senior management for any escalation.'
        ],
        process: [
            'Comprehensive Site Assessment: Full walk-through of your facility with a senior account manager — every zone assessed, specific requirements documented, regulatory context understood.',
            'Custom Premier Cleaning Program: A detailed, zone-by-zone cleaning specification with product schedules, frequencies, compliance notes, and documented quality standards agreed upfront.',
            'Elite Cleaning Team Assigned: Experienced, trained, and police-checked cleaning staff allocated to your account with a named supervisor and account manager.',
            'Active Quality Management: Regular supervisor inspections, digital checklist completion on every visit, client satisfaction reviews, and rapid response to any concern.'
        ],
        whyChooseUs: [
            '15+ Years Sydney Premier Cleaning: Over 15 years serving Sydney\'s most demanding commercial clients — corporate towers, premium healthcare, luxury strata, and specialist facilities.',
            '$20M Public Liability Insurance: The commercial insurance level required by Sydney\'s A-grade building managers, healthcare facilities, and government procurement requirements.',
            'Police-Checked Workforce: Every staff member holds a current National Police Clearance — non-negotiable for access to premium commercial and healthcare environments.',
            '1,200+ Business Clients: A client base that spans every industry and every suburb of Greater Sydney, reflecting trust built over 15+ years.',
            'Dedicated Account Management: A named account manager for every client — not a call centre, a dedicated person who knows your facility and your standards.',
            '100% Satisfaction Guarantee: Any quality concern addressed within 24 hours with a free return visit. No arguments, no delays, no excuses.'
        ],
        serviceAreas: [
            'Sydney CBD', 'North Sydney', 'Parramatta', 'Chatswood',
            'Macquarie Park', 'Rhodes', 'Norwest', 'Castle Hill',
            'Bondi', 'Surry Hills', 'Randwick', 'Hurstville',
            'Liverpool', 'Penrith', 'Blacktown', 'Hornsby'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Premier commercial cleaning Sydney elite business cleaning Pro Clean Corp' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp premier commercial cleaning Sydney team' }
        ],
        relatedServices: [
            'Commercial Cleaning Sydney',
            'Office Cleaning Sydney',
            'Strata Cleaning Sydney',
            'Medical Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Premier Commercial Cleaning Sydney"
                serviceDescription="Sydney's premier commercial cleaning company. Premium-grade cleaning for corporate offices, luxury strata buildings, medical facilities, gyms, childcare centres, and industrial properties. $20M insured, police-checked, 15+ years experience, dedicated account management."
                serviceUrl="/premier-commercial-cleaning"
                serviceType="CommercialService"
                price="$$"
                additionalServices={['Corporate Office Cleaning', 'Medical Facility Cleaning', 'Strata Cleaning', 'Gym Cleaning', 'Industrial Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />

            <section className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-darkblue mb-6 text-center">Our Premier Commercial Cleaning Services</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {serviceLinks.map((s) => (
                            <Link
                                key={s.slug}
                                href={`/${s.slug}`}
                                className="bg-white p-3 rounded-lg text-center text-gray-700 hover:text-greenprimary hover:shadow-md transition border border-gray-100 font-medium text-sm"
                            >
                                {s.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
