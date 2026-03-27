import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Parramatta | Western Sydney Business Cleaning | Pro Clean Corp',
    description: 'Professional commercial cleaning services in Parramatta NSW. Offices, government buildings, medical practices, retail & strata. Trusted since 2008. Call 1300 494 983 for a free quote.',
    keywords: 'commercial cleaning parramatta, commercial cleaning western sydney, office cleaning parramatta, business cleaning parramatta nsw, parramatta commercial cleaning services, commercial cleaners parramatta cbd, commercial cleaning company parramatta',
    openGraph: {
        title: 'Commercial Cleaning Parramatta | Western Sydney Business Cleaning | Pro Clean Corp',
        description: 'Commercial cleaning specialists in Parramatta CBD and Western Sydney. Offices, government, medical, retail. Police-checked, $20M insured. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-parramatta',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Parramatta CBD Western Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-parramatta' },
};

const spokePages = [
    { name: 'Office Cleaning Parramatta', slug: 'office-cleaning-parramatta' },
    { name: 'Commercial Cleaners Parramatta', slug: 'commercial-cleaners-parramatta' },
    { name: 'Strata Cleaning Parramatta', slug: 'strata-cleaning-parramatta' },
    { name: 'Office Cleaning Castle Hill', slug: 'office-cleaning-castle-hill' },
];

const faqs = [
    {
        question: 'What commercial cleaning services do you provide in Parramatta?',
        answer: 'Pro Clean Corp provides a comprehensive range of commercial cleaning services across Parramatta: regular office cleaning (daily to fortnightly), government building cleaning, medical and dental practice cleaning, retail and showroom cleaning, strata common area cleaning, end of lease commercial cleaning, carpet steam cleaning, window and glass cleaning, and periodic deep cleaning. All services can be packaged into a single managed program or booked individually.'
    },
    {
        question: 'Do you clean government offices and agencies in Parramatta?',
        answer: 'Yes. Parramatta is home to significant NSW Government office presence and we have experience with government building access protocols, security requirements, compliance documentation, and the procurement standards that apply to government cleaning contracts. We hold all required insurances and can provide police clearances, Safe Work Method Statements, and other compliance documentation for government tender and approved contractor requirements.'
    },
    {
        question: 'Do you offer commercial cleaning for Parramatta\'s medical precinct?',
        answer: 'Yes. Parramatta has a significant medical and allied health concentration, particularly around Westmead Hospital and the surrounding medical precinct. We provide specialist medical cleaning using TGA-approved disinfectants, infection control protocols aligned with RACGP and ACHS standards, and documented cleaning records for accreditation purposes. Our medical cleaning teams have specific training in clinical environment cleaning.'
    },
    {
        question: 'Can you provide commercial cleaning for multiple Parramatta sites?',
        answer: 'Yes. We manage multi-site commercial cleaning contracts across Parramatta and Greater Sydney. Single contract, single account manager, consistent standards, and consolidated invoicing across all your locations — whether that is three Parramatta offices or a mix of Parramatta and outer Western Sydney sites.'
    },
    {
        question: 'How long has Pro Clean Corp been providing commercial cleaning in Parramatta?',
        answer: 'Pro Clean Corp has been providing commercial cleaning services in Parramatta since 2008 — over 15 years in the Parramatta market. In that time we have built relationships with building managers, strata companies, and commercial tenants across the CBD and surrounding suburbs. That local knowledge and reputation is why Parramatta businesses trust us with their cleaning.'
    }
];

export default function CommercialCleaningParramattaPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Parramatta',
        description: 'Parramatta is Sydney\'s second city — a commercial powerhouse with government agencies, corporate headquarters, a major medical precinct, retail centres, and thousands of small and medium businesses all operating in one of Western Sydney\'s most economically active hubs. Every one of those businesses needs reliable, professional commercial cleaning. Pro Clean Corp has been the commercial cleaning company that Parramatta businesses trust since 2008 — delivering consistent quality, responsive service, and the specialist expertise to handle every commercial environment the city contains.',
        benefits: [
            'Parramatta\'s Established Commercial Cleaner: 15+ years in Parramatta\'s commercial cleaning market — trusted by building managers, strata companies, government agencies, and corporate tenants across the precinct.',
            'Government Building Expertise: Experienced with NSW Government access protocols, security requirements, and the compliance documentation standards required for government cleaning contracts in Parramatta.',
            'Medical Precinct Coverage: Specialist medical cleaning for Parramatta\'s Westmead medical precinct, GP clinics, specialist suites, and allied health providers — TGA-approved disinfectants, documented for accreditation.',
            'Corporate Tower Cleaning: Multi-floor tenancy cleaning for Parramatta CBD\'s commercial towers — comprehensive scope, after-hours scheduling, and building management coordination.',
            'Retail & Showroom Cleaning: High-presentation cleaning for Parramatta\'s retail and showroom businesses — customer-facing standards maintained on every visit.',
            'Police-Checked & $20M Insured: Every staff member holds a current National Police Clearance and is covered by $20M public liability — essential for government and corporate Parramatta buildings.',
            'Fixed Monthly Pricing: One agreed monthly price, one invoice, no surprises — straightforward commercial cleaning contracts for Parramatta businesses of every size.'
        ],
        process: [
            'Free Parramatta Site Assessment: On-site visit to your Parramatta premises with a senior account manager — full scope documented and written quote provided within 24 hours.',
            'Custom Commercial Cleaning Program: Zone-by-zone checklist covering every area of your business — agreed upfront, consistently delivered on every visit.',
            'Dedicated Parramatta Team: The same experienced cleaners assigned to your account for continuity, site familiarity, and consistent quality.',
            'Active Account Management: Named account manager, regular quality checks, fast response to any feedback, and proactive communication — your commercial cleaning should never be something you have to chase.'
        ],
        whyChooseUs: [
            'Parramatta\'s Most Trusted Commercial Cleaner: 15+ years of unbroken commercial cleaning service in Parramatta — a reputation built on consistent quality and genuine reliability.',
            '$20M Public Liability Insurance: The coverage required by Parramatta\'s building managers, government agencies, and major corporate tenants for approved contractor status.',
            'Police-Checked Workforce: Current National Police Clearances for every team member — non-negotiable for Parramatta\'s government and security-sensitive commercial buildings.',
            'Western Sydney Local: Parramatta-based operation with genuine local knowledge of the precinct, its buildings, and its commercial character.',
            '7-Day Availability: Monday to Sunday scheduling across Parramatta for businesses with diverse operational hours.',
            '100% Satisfaction Guarantee: Any quality concern resolved with a free return visit within 24 hours — our commitment to every Parramatta client.'
        ],
        serviceAreas: [
            'Parramatta CBD', 'North Parramatta', 'Westmead', 'Harris Park',
            'Granville', 'Merrylands', 'Wentworthville', 'Toongabbie',
            'Woodville', 'Old Toongabbie', 'Constitution Hill', 'South Granville'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Parramatta CBD Western Sydney Pro Clean Corp' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Parramatta commercial cleaning government corporate' }
        ],
        relatedServices: [
            'Commercial Cleaners Parramatta',
            'Office Cleaning Parramatta',
            'Strata Cleaning Parramatta',
            'Commercial Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Parramatta"
                serviceDescription="Professional commercial cleaning services in Parramatta CBD and Western Sydney. Government buildings, corporate offices, medical practices, retail, and strata. Police-checked staff, $20M insured, 15+ years in Parramatta."
                serviceUrl="/commercial-cleaning-parramatta"
                serviceType="CommercialService"
                price="$$"
                additionalServices={['Office Cleaning', 'Government Building Cleaning', 'Medical Practice Cleaning', 'Retail Cleaning', 'Strata Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />

            <section className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-darkblue mb-6 text-center">Commercial Cleaning Services in Parramatta</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {spokePages.map((page) => (
                            <Link
                                key={page.slug}
                                href={`/${page.slug}`}
                                className="bg-white p-3 rounded-lg text-center text-gray-700 hover:text-greenprimary hover:shadow-md transition border border-gray-100 font-medium text-sm"
                            >
                                {page.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
