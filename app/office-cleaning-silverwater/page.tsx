import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Office Cleaning Silverwater NSW | Commercial Office Cleaners | Pro Clean Corp',
    description: 'Professional office cleaning in Silverwater NSW. Serving Western Sydney — Parramatta, Auburn, Granville & Homebush. Industrial & corporate office cleaning specialists. Call 1300 494 983.',
    keywords: 'office cleaning Silverwater, office cleaners Silverwater, commercial cleaning Silverwater, professional office cleaning Silverwater, corporate cleaning Silverwater NSW, office cleaning Parramatta area',
    openGraph: {
        title: 'Office Cleaning Silverwater NSW | Commercial Office Cleaners | Pro Clean Corp',
        description: 'Expert office and commercial cleaning in Silverwater NSW. Serving the Western Sydney industrial hub — Parramatta, Auburn, Granville & Homebush. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/office-cleaning-silverwater',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/office.webp', alt: 'Office cleaning services in Silverwater NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-silverwater' },
};

const faqs = [
    {
        question: 'What types of offices do you clean in Silverwater?',
        answer: 'We clean all types of commercial premises in Silverwater and the surrounding Western Sydney industrial hub including manufacturing company offices, warehousing and logistics administration offices, automotive and engineering firm offices, professional services suites, distribution centre management offices and corporate offices within Silverwater\'s established industrial parks. We have specific experience managing the unique cleaning challenges of offices within industrial environments where dust, heavy traffic and contamination from the factory floor are considerations.',
    },
    {
        question: 'Do you service offices in Parramatta, Auburn and surrounding suburbs?',
        answer: 'Yes. Our Western Sydney office cleaning team services commercial premises across Silverwater, Parramatta, Auburn, Granville, Homebush, Lidcombe, Merrylands, Woodville, Clyde, Berala and Newington. We are locally based and familiar with the commercial building stock, industrial estates and corporate parks throughout the Parramatta-Auburn corridor of Western Sydney.',
    },
    {
        question: 'Can you clean industrial offices and factories in Silverwater?',
        answer: 'Yes. Silverwater has a significant industrial character, and we regularly clean offices within manufacturing facilities, distribution centres and industrial parks where above-average dust levels, high-traffic entries, workshop grime and specific contamination risks require tailored cleaning protocols and products. We coordinate with your facility manager to ensure safe access to any restricted areas and adapt our methods to the specific requirements of your industrial environment.',
    },
    {
        question: 'Do you offer after-hours office cleaning in Silverwater?',
        answer: 'Yes. We offer flexible scheduling including early morning pre-opening cleans, after-hours evening services and weekend visits to suit your business operations. Our after-hours teams are police-checked, trained for unsupervised access and hold all required credentials. We coordinate all access arrangements with your facility or office administrator before the first service to ensure smooth, secure entry on every visit.',
    },
    {
        question: 'How do I get a quote for office cleaning in Silverwater?',
        answer: 'Call 1300 494 983 or submit an online enquiry and we will arrange a free site assessment at your Silverwater premises at a convenient time. We provide a detailed, itemised written quote covering all areas, frequency options and pricing within 24 hours of the site visit, with no obligation and no lock-in contract required to receive or proceed with a quotation.',
    },
];

export default function OfficeCleaningSilverwaterPage() {
    const serviceInfo = {
        title: 'Office Cleaning Silverwater NSW',
        description: 'Pro Clean Corp provides professional office and commercial cleaning services throughout Silverwater and Western Sydney\'s established industrial and commercial hub between Parramatta and Auburn. Silverwater is one of Sydney\'s most significant industrial and commercial precincts, hosting a concentration of manufacturing companies, distribution centres, automotive businesses, construction firms and the administrative offices that support their operations. Maintaining clean, hygienic and presentable office environments in this setting requires specific expertise and the right products for industrial contexts.\n\nOur Western Sydney office cleaning teams are locally based and thoroughly experienced in the range of commercial environments found in Silverwater and the Parramatta-Auburn corridor. From the front-of-house reception and meeting rooms of an automotive business to the administration offices of a large distribution centre, we deliver reliable, high-quality cleaning at any frequency your business requires. We work around your operational schedule — early mornings, after hours or weekends — and bring all necessary equipment and products, ensuring your Silverwater office is consistently clean without disrupting your team\'s productivity.',
        benefits: [
            'Complete desk, workstation and shared surface cleaning including wipe-down of all surfaces, keyboards, phones, monitors and shared office equipment with appropriate disinfectant products on every visit',
            'Kitchen and breakroom servicing including full benchtop sanitisation, appliance exterior wiping, sink and tap cleaning, microwave interior and fridge exterior cleaning, and thorough floor mopping',
            'Restroom maintenance to commercial hygiene standards with full toilet and basin sanitisation, floor mopping, mirror polishing, bin emptying and restocking of soap, paper and sanitary supplies',
            'Floor cleaning appropriate to each surface type within your Silverwater premises, from carpeted office areas vacuumed and spot-treated to hard floor areas mopped with slip-resistant, industrial-appropriate products',
            'Entry, reception and meeting room presentation cleaning to maintain a professional first impression for clients, suppliers and visitors accessing your Silverwater office or industrial facility',
            'Waste and recycling management with all bins emptied, correctly relined and waste streams properly separated, supporting your business\'s waste management compliance and sustainability commitments'
        ],
        process: [
            'Free site assessment of your Silverwater office or industrial premises covering all areas, identifying any specific contamination risks from the industrial environment and understanding your access requirements and schedule',
            'Tailored cleaning programme developed with your office or facilities manager, covering the appropriate schedule, scope and industrial-appropriate products required for your specific Silverwater business environment',
            'Consistent delivery by a dedicated team using appropriate products for industrial environments, systematic checklists and team leader sign-off after each visit to ensure verifiable quality on every service',
            'Regular account manager contact and open communication channels for fast response to feedback, scope adjustments and any evolving needs as your Silverwater business operations change or expand'
        ],
        whyChooseUs: [
            'Western Sydney expertise with extensive experience cleaning offices, industrial administration areas and commercial premises across Silverwater, Auburn, Parramatta, Granville, Homebush and surrounding suburbs',
            'Fully insured with $20M public liability coverage and police-checked staff with training in both standard office hygiene and the specific protocols required in industrial and manufacturing office environments',
            'Industrial-appropriate cleaning products and methods suited to Silverwater\'s demanding commercial environment, addressing above-average dust levels, heavy traffic entries and contamination from industrial operations',
            'Flexible scheduling including early morning, after-hours and weekend services designed to work around Silverwater\'s industrial operations and corporate office hours without disrupting your team or facility operations',
            'Transparent, itemised pricing with no hidden fees and no lock-in contracts, with every cost clearly documented before commencement and month-to-month service arrangements available from the outset',
            'Locally based team providing fast response for urgent additional cleans, emergency incidents or new facilities coming online within your Western Sydney business operations across Silverwater and surrounds'
        ],
        serviceAreas: ['Parramatta', 'Auburn', 'Granville', 'Homebush', 'Lidcombe', 'Merrylands', 'Woodville', 'Clyde', 'Berala', 'Newington'],
        faqs,
        images: [
            { src: '/images/services/office.webp', alt: 'Professional office cleaning services in Silverwater NSW' },
            { src: '/images/services/office.webp', alt: 'Commercial office cleaning Silverwater Parramatta Western Sydney' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Office Cleaning Silverwater NSW"
                serviceDescription="Professional office and commercial cleaning services in Silverwater NSW. Serving Western Sydney's industrial hub including Parramatta, Auburn, Granville, Homebush and surrounding suburbs."
                serviceUrl="/office-cleaning-silverwater"
                serviceType="Office & Commercial Cleaning"
                price="$$"
                additionalServices={['Industrial Office Cleaning', 'Workstation Sanitisation', 'Reception & Entry Cleaning', 'Restroom Maintenance', 'After-Hours Office Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-darkblue mb-6">Related Office & Cleaning Services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { href: '/office-cleaning-sydney', label: 'Office Cleaning Sydney' },
                            { href: '/commercial-cleaning', label: 'Commercial Cleaning Services' },
                            { href: '/gym-cleaning-silverwater', label: 'Gym Cleaning Silverwater' },
                            { href: '/industrial-cleaning-sydney', label: 'Industrial Cleaning Sydney' },
                            { href: '/commercial-cleaning-sydney', label: 'Commercial Cleaning Sydney' },
                            { href: '/office-cleaning-marsden-park', label: 'Office Cleaning Marsden Park' },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="block p-4 bg-slate-50 rounded-lg hover:bg-green-50 hover:text-greenprimary transition-colors font-medium text-gray-700">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
