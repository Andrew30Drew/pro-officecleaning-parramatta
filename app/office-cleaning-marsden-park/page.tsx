import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Office Cleaning Marsden Park NSW | Commercial Office Cleaners | Pro Clean Corp',
    description: 'Professional office cleaning in Marsden Park NSW. Serving the North West Growth Corridor — Blacktown, Seven Hills, Stanhope Gardens & Quakers Hill. Call 1300 494 983.',
    keywords: 'office cleaning Marsden Park, office cleaners Marsden Park, commercial cleaning Marsden Park, professional office cleaning Marsden Park, corporate cleaning Marsden Park NSW, office cleaning Blacktown',
    openGraph: {
        title: 'Office Cleaning Marsden Park NSW | Commercial Office Cleaners | Pro Clean Corp',
        description: 'Expert office and commercial cleaning in Marsden Park NSW. Serving the North West Growth Corridor including Blacktown, Seven Hills, Stanhope Gardens & surrounding suburbs. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/office-cleaning-marsden-park',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/office.webp', alt: 'Office cleaning services in Marsden Park NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-marsden-park' },
};

const faqs = [
    {
        question: 'What types of businesses do you clean in Marsden Park?',
        answer: 'We clean a wide range of commercial premises in Marsden Park and the North West Growth Corridor including logistics and warehousing offices, trade and construction company offices, retail showrooms with office components, professional services firms, real estate agencies, small business suites and corporate offices within business park developments. Marsden Park\'s commercial sector is diverse and growing rapidly, and we have the team capacity and local knowledge to service all business types in the area.',
    },
    {
        question: 'How often should our Marsden Park office be cleaned?',
        answer: 'Cleaning frequency depends on your business type, staff numbers and visitor volumes. Trade and construction offices with higher dust levels, multiple staff and regular client visits typically benefit from three to five cleans per week. Smaller professional services offices in Marsden Park may be well-served with two or three cleans per week. We assess your specific environment and recommend a frequency and scope that delivers consistent hygiene within your budget.',
    },
    {
        question: 'Do you service offices in Blacktown and Seven Hills as well as Marsden Park?',
        answer: 'Yes. Our North West Sydney office cleaning team services commercial premises across Marsden Park, Blacktown, Seven Hills, Stanhope Gardens, Quakers Hill, Acacia Gardens, Riverstone, Schofields, Box Hill, Rouse Hill and Kellyville. We are familiar with the North West Growth Corridor\'s rapidly expanding commercial and industrial precincts and can mobilise quickly for new businesses opening in the area.',
    },
    {
        question: 'Can you provide cleaning for a business that recently opened in Marsden Park?',
        answer: 'Yes. We frequently onboard new businesses in Marsden Park and the surrounding growth corridor. We can typically arrange a site assessment within 24 to 48 hours of your enquiry and commence service within a week of agreeing on the scope and schedule. We also offer post-construction and builder\'s cleans for newly completed commercial premises in the area.',
    },
    {
        question: 'How do I get a quote for office cleaning in Marsden Park?',
        answer: 'Call 1300 494 983 or enquire online and we will arrange a free site assessment at your Marsden Park premises at a convenient time. After the visit we provide a detailed, itemised written quote covering all zones, service frequencies and pricing within 24 hours. There is no obligation and no minimum contract required to obtain a quote.',
    },
];

export default function OfficeCleaningMarsdenParkPage() {
    const serviceInfo = {
        title: 'Office Cleaning Marsden Park NSW',
        description: 'Pro Clean Corp delivers professional office and commercial cleaning services throughout Marsden Park and the North West Growth Corridor of Sydney. This rapidly developing area — encompassing Marsden Park\'s business parks, retail precincts and industrial estates alongside the residential growth of Stanhope Gardens, Quakers Hill, Riverstone and Schofields — represents one of the fastest-growing commercial regions in New South Wales. New businesses are establishing operations here every month, and maintaining clean, hygienic and well-presented workplaces is essential for staff attraction, client confidence and operational efficiency.\n\nOur Marsden Park office cleaning teams are locally based in North West Sydney, familiar with the area\'s diverse commercial property types and experienced in servicing everything from small trade businesses to large corporate offices within the North West Business Park developments. Whether you need a daily early-morning clean before your team arrives, an after-hours service after your last employee leaves, or a weekly deep clean complemented by in-house maintenance, Pro Clean Corp provides the reliable, professional service that growing North West Sydney businesses require.',
        benefits: [
            'Complete desk and workstation cleaning including all surface wipe-down, keyboard and telephone sanitisation, monitor cleaning and disinfection of all shared equipment and stationery surfaces on every visit',
            'Kitchen and breakroom servicing with full benchtop cleaning, appliance exterior wiping, sink and tap sanitisation, microwave interior cleaning and thorough floor mopping with appropriate products',
            'Restroom maintenance to commercial hygiene standards including full toilet and basin sanitisation, floor mopping, mirror cleaning, bin emptying and restocking of soap, paper towels and other consumables',
            'Vacuuming and hard floor cleaning using appropriate equipment and products for each floor type, maintaining clean, safe flooring throughout your Marsden Park office or business premises',
            'Window and glass cleaning covering internal partitions, meeting room glass walls, entry doors and external-facing windows for a consistently professional, well-presented appearance at your premises',
            'Waste removal and recycling management with all bins emptied, relined and recycling streams correctly separated on every visit, supporting your business\'s sustainability commitments and waste management obligations'
        ],
        process: [
            'Free site assessment of your Marsden Park business premises to understand all areas, surface types, staff numbers and any specific requirements such as trade dust management or after-hours-only access windows',
            'Tailored cleaning programme developed with your office manager or business owner, covering the most appropriate schedule, scope and service level for your specific business type and operational requirements',
            'Consistent cleaning delivery by a dedicated team with systematic checklists and a team leader sign-off after each visit, providing verifiable quality assurance on every service appointment',
            'Regular account manager communication and proactive service reviews to address any changes in your business, evolving cleaning needs or opportunities to improve the service as your Marsden Park premises grows'
        ],
        whyChooseUs: [
            'North West Sydney expertise with established experience cleaning offices, showrooms, trade businesses and corporate premises across Marsden Park, Blacktown, Seven Hills and the surrounding growth corridor',
            'Fully insured with $20M public liability coverage and police-checked staff trained in commercial office hygiene, with specific capability for trade environments with higher dust and contamination levels',
            'Commercial-grade cleaning products that address the specific challenges of North West Sydney\'s commercial and industrial environments, from fine construction dust to heavy-traffic reception areas',
            'Flexible scheduling capability including early morning pre-opening cleans, after-hours evening services and weekend visits designed to work around your business operations without disrupting your team',
            'No lock-in contracts and transparent, itemised pricing that clearly shows what you are paying for and at what frequency, with no hidden fees, call-out charges or mandatory extras',
            'Fast response and local team presence in North West Sydney, enabling quick deployment for urgent cleaning needs, additional visits or new sites within your business\'s Marsden Park area operations'
        ],
        serviceAreas: ['Blacktown', 'Stanhope Gardens', 'Quakers Hill', 'Acacia Gardens', 'Riverstone', 'Vineyard', 'Schofields', 'Box Hill', 'Rouse Hill', 'Kellyville'],
        faqs,
        images: [
            { src: '/images/services/office.webp', alt: 'Professional office cleaning services in Marsden Park NSW' },
            { src: '/images/services/office.webp', alt: 'Commercial office cleaning Marsden Park North West Sydney' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Office Cleaning Marsden Park NSW"
                serviceDescription="Professional office and commercial cleaning services in Marsden Park NSW. Servicing the North West Growth Corridor including Blacktown, Seven Hills, Stanhope Gardens, Quakers Hill and surrounding suburbs."
                serviceUrl="/office-cleaning-marsden-park"
                serviceType="Office & Commercial Cleaning"
                price="$$"
                additionalServices={['Workstation Sanitisation', 'Kitchen & Breakroom Cleaning', 'Restroom Maintenance', 'Builder\'s Clean', 'After-Hours Office Cleaning']}
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
                            { href: '/gym-cleaning-seven-hills', label: 'Gym Cleaning Seven Hills' },
                            { href: '/gym-cleaning-norwest', label: 'Gym Cleaning Norwest' },
                            { href: '/commercial-cleaning-sydney', label: 'Commercial Cleaning Sydney' },
                            { href: '/industrial-cleaning-sydney', label: 'Industrial Cleaning Sydney' },
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
