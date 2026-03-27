import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Office Cleaning Roseville NSW | Commercial Office Cleaners | Pro Clean Corp',
    description: 'Professional office cleaning in Roseville NSW. Serving Upper North Shore — Chatswood, Gordon, Lindfield & Killara. Premium commercial cleaning, police-checked staff. Call 1300 494 983.',
    keywords: 'office cleaning Roseville, office cleaners Roseville, commercial cleaning Roseville, professional office cleaning Roseville, corporate cleaning Roseville NSW, office cleaning Upper North Shore',
    openGraph: {
        title: 'Office Cleaning Roseville NSW | Commercial Office Cleaners | Pro Clean Corp',
        description: 'Expert office and commercial cleaning in Roseville NSW. Serving the Upper North Shore including Chatswood, Gordon, Lindfield & Killara. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/office-cleaning-roseville',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/office.webp', alt: 'Office cleaning services in Roseville NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-roseville' },
};

const faqs = [
    {
        question: 'What types of offices do you clean in Roseville?',
        answer: 'We clean a range of professional and commercial premises in Roseville and the Upper North Shore including financial planning and wealth management offices, legal practices, medical and allied health suites, real estate agencies, technology firms and corporate offices within the Chatswood-to-Gordon commercial corridor. Roseville\'s business community is professional, service-oriented and expectations are high — we deliver a service level that reflects the premium character of the Upper North Shore.',
    },
    {
        question: 'Do you service offices across the Upper North Shore from Chatswood to Pymble?',
        answer: 'Yes. Our Upper North Shore office cleaning team services commercial premises across Roseville, Chatswood, Gordon, Lindfield, Killara, Pymble, Turramurra, St Ives, Wahroonga, North Sydney and Lane Cove on regular weekly and more frequent schedules. We are familiar with the commercial buildings, professional suites and corporate offices distributed along the Pacific Highway and Mona Vale Road corridors in this part of Sydney.',
    },
    {
        question: 'Can you match the premium presentation standards expected in Roseville offices?',
        answer: 'Absolutely. Roseville and the Upper North Shore business community operates in professional environments where appearance, hygiene and attention to detail are non-negotiable. Our cleaning protocols for premium commercial environments include streak-free glass and mirror polishing, thorough desk and surface presentation, consistently high restroom standards and careful attention to the communal areas and entry points that form the first impression for clients visiting your premises.',
    },
    {
        question: 'Do you offer flexible scheduling for Roseville offices?',
        answer: 'Yes. We offer early morning pre-opening cleans that have your office ready before the first staff member arrives, after-hours evening cleans completed once the last employee has left, and weekend services for offices that require cleaning outside of weekday hours. All schedules are agreed during the initial consultation and can be adjusted as your business requirements evolve.',
    },
    {
        question: 'How do I arrange office cleaning in Roseville?',
        answer: 'Call 1300 494 983 or submit an enquiry online and we will arrange a free site assessment at your Roseville office. After the visit we provide a detailed written quote within 24 hours covering all areas, recommended frequency and full pricing. There is no obligation and no lock-in contract required to proceed.',
    },
];

export default function OfficeCleaningRosevillePage() {
    const serviceInfo = {
        title: 'Office Cleaning Roseville NSW',
        description: 'Pro Clean Corp provides professional office and commercial cleaning services throughout Roseville and the Upper North Shore of Sydney. Roseville is a prestigious suburb located along the Pacific Highway corridor between Chatswood and Gordon, home to a mix of professional services firms, medical practices, financial advisers, legal offices and corporate suites that collectively serve the affluent and business-active communities of Sydney\'s Upper North Shore. Offices in this area operate to high standards and their cleaning service needs to match.\n\nOur Upper North Shore office cleaning teams understand the premium commercial environment they are working in. Presentation-focused, discreet and thorough, our Roseville cleaners deliver more than basic hygiene — they maintain the professional appearance that Upper North Shore businesses rely on for client confidence, staff satisfaction and their reputation in the local market. Whether you operate a boutique financial planning practice on Pacific Highway, a specialist medical suite near Chatswood, a legal firm in Gordon or a technology office in Lindfield, Pro Clean Corp delivers a reliable, consistent service that meets the expectations of the Upper North Shore\'s professional business community.',
        benefits: [
            'Premium desk and workstation cleaning with careful, thorough wipe-down of all surfaces, electronics, telephones, monitors and shared equipment using products safe for sensitive electronics and premium office finishes',
            'Kitchen and breakroom servicing to a high standard including full benchtop sanitisation, appliance exterior cleaning, sink and tap polishing, microwave interior cleaning and floor mopping on every visit',
            'Restroom maintenance to a consistently premium standard including full toilet and basin sanitisation, streak-free mirror polishing, floor mopping and restocking of quality soap and paper products',
            'Complete floor care with vacuuming of all carpeted areas and appropriate mopping of hard floor surfaces, maintaining clean, safe and well-presented flooring throughout your Roseville office premises',
            'Streak-free glass and window cleaning covering all glass partitions, meeting room walls, boardroom windows and entry door glass for an impeccably professional presentation to clients and visitors',
            'Waste and recycling management with all bins emptied, relined and correctly separated, and recycling streams maintained in accordance with your building\'s waste management programme and sustainability goals'
        ],
        process: [
            'Free site assessment of your Roseville office to understand all areas, premium finishes, surface types and any specific requirements such as particular product preferences, security-sensitive areas or specialist equipment zones',
            'Tailored cleaning programme developed with your office manager covering the appropriate schedule, scope and service level to match the professional character and operational requirements of your Roseville premises',
            'Consistent delivery by a dedicated, professionally presented cleaning team with systematic zone checklists and sign-off procedures providing quality assurance on every service appointment',
            'Regular account manager contact and responsive communication channels to address any feedback, adjust the service as your business grows or relocates within the Upper North Shore and maintain long-term service excellence'
        ],
        whyChooseUs: [
            'Upper North Shore expertise with established experience cleaning professional offices, medical practices and corporate suites across Roseville, Chatswood, Gordon, Lindfield, Killara and surrounding suburbs',
            'Fully insured with $20M public liability coverage and police-checked, professionally presented staff whose conduct and appearance are appropriate for premium commercial environments on the Upper North Shore',
            'Premium-grade cleaning products and protocols that deliver genuine hygiene results while protecting the quality finishes, carpets, furniture and electronics found in professional Upper North Shore office environments',
            'Flexible scheduling including early morning, after-hours and weekend services tailored to match the operational requirements of professional services firms, medical practices and corporate offices in Roseville',
            'Transparent, itemised pricing with no hidden fees — every element of your cleaning service is clearly costed, and agreements are month-to-month with no lock-in commitment required for commencement',
            'Dedicated account manager providing a single point of contact for all service matters and a commitment to fast, professional response to any queries, adjustments or special requests at your Roseville premises'
        ],
        serviceAreas: ['Chatswood', 'Gordon', 'Lindfield', 'Killara', 'Pymble', 'Turramurra', 'St Ives', 'Wahroonga', 'North Sydney', 'Lane Cove'],
        faqs,
        images: [
            { src: '/images/services/office.webp', alt: 'Professional office cleaning services in Roseville NSW' },
            { src: '/images/services/office.webp', alt: 'Commercial office cleaning Roseville Upper North Shore Sydney' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Office Cleaning Roseville NSW"
                serviceDescription="Professional office and commercial cleaning services in Roseville NSW. Serving the Upper North Shore including Chatswood, Gordon, Lindfield, Killara, Pymble and surrounding suburbs."
                serviceUrl="/office-cleaning-roseville"
                serviceType="Office & Commercial Cleaning"
                price="$$"
                additionalServices={['Premium Office Cleaning', 'Medical Suite Cleaning', 'Corporate Office Cleaning', 'After-Hours Cleaning', 'Glass & Mirror Polishing']}
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
                            { href: '/strata-cleaning-hornsby', label: 'Strata Cleaning Hornsby' },
                            { href: '/strata-cleaning-north-sydney', label: 'Strata Cleaning North Sydney' },
                            { href: '/medical-office-cleaning-sydney', label: 'Medical Office Cleaning Sydney' },
                            { href: '/commercial-cleaning-sydney', label: 'Commercial Cleaning Sydney' },
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
