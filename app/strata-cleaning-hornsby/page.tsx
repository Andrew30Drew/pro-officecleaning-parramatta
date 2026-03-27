import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Strata Cleaning Hornsby NSW | Body Corporate Cleaning | Pro Clean Corp',
    description: 'Professional strata and body corporate cleaning in Hornsby NSW. Foyers, lifts, corridors, car parks, bin rooms and pool surrounds. Trusted by strata managers. Free quote.',
    keywords: 'strata cleaning Hornsby, body corporate cleaning Hornsby, common area cleaning Hornsby NSW, strata cleaners Hornsby',
    openGraph: {
        title: 'Strata Cleaning Hornsby NSW | Body Corporate Cleaning | Pro Clean Corp',
        description: 'Professional strata and body corporate cleaning in Hornsby NSW. Foyers, lifts, corridors, car parks and bin rooms. Trusted by strata managers. Free quote.',
        url: 'https://www.procleancorp.com.au/strata-cleaning-hornsby',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/strata.webp', alt: 'Strata cleaning Hornsby NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-hornsby' },
};

const faqs = [
    {
        question: 'What strata cleaning services do you provide in Hornsby?',
        answer: 'Our Hornsby strata cleaning service covers all common property areas as defined by your strata plan and body corporate obligations: foyers, corridors, stairwells, lifts, car parks, bin rooms, letterbox areas, garden paths, mail rooms, and pool surrounds. We create a tailored scope and schedule precisely matched to your building\'s size, resident density, foot traffic levels and the specific maintenance standards required by your strata committee and management plan.',
    },
    {
        question: 'Do you service strata buildings in Waitara and Asquith?',
        answer: 'Yes. Our Upper North Shore strata cleaning team services buildings across Hornsby, Waitara, Asquith, Wahroonga, Pennant Hills, Berowra, Normanhurst, Turramurra and Mount Colah on regular weekly and fortnightly schedules. We are familiar with all the major strata complexes in the Hornsby LGA and the access systems, management companies and building requirements commonly found in this part of Sydney\'s Upper North Shore.',
    },
    {
        question: 'How often should our Hornsby strata building be cleaned?',
        answer: 'For most Hornsby apartment buildings we recommend weekly internal common area cleaning covering foyers, corridors and lifts, combined with fortnightly car park sweeping and outdoor area maintenance. Buildings located near Hornsby station or those housing more than 50 apartments typically benefit from twice-weekly foyer and lift visits due to the higher volume of residents, delivery drivers and visitors passing through. We assess each building individually and recommend the optimal frequency for your specific situation.',
    },
    {
        question: 'Do you work with strata managers in Hornsby?',
        answer: 'Yes. We work directly with strata managers, building managers and owners corporations across Hornsby and the Upper North Shore. We provide detailed written service reports after every visit, maintain on-site communication logs, and offer direct account manager access to ensure fast response to strata committee requests, special clean requirements or urgent incidents. We understand the reporting obligations strata managers face and make it easy to demonstrate service delivery to their committees.',
    },
    {
        question: 'Are your cleaners police checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff are police-checked before commencing work on any strata contract and we hold full public liability insurance to $20 million. You receive the same assigned team on each visit, providing the consistency and security that Hornsby strata residents and their management committees expect. Our staff carry identification on every visit and are fully inducted to your building\'s access, security and waste management protocols before their first service.',
    },
];

export default function StrataCleaningHornsbyPage() {
    const serviceInfo = {
        title: 'Strata Cleaning Hornsby NSW',
        description: 'Hornsby is the Upper North Shore\'s major residential and commercial hub, home to a large and growing number of strata apartment buildings ranging from established low-rise and medium-density blocks to modern high-density complexes near the Westfield and train station. The suburb\'s convenient transport links and excellent amenities have driven ongoing residential development, creating a substantial and diverse strata market with varying cleaning requirements and resident expectations.\n\nPro Clean Corp provides professional strata and body corporate cleaning services throughout Hornsby and all surrounding Upper North Shore suburbs, keeping foyers, lifts, corridors, car parks, bin rooms and pool surrounds in immaculate condition for residents and strata committees. Our dedicated Hornsby strata cleaning team is locally based, thoroughly familiar with the suburb\'s buildings and management companies, and equipped to handle any building size or complexity. We work to the standards that strata managers and owners corporations require — detailed reporting, consistent team allocation, fast response and a proactive approach to maintaining the building\'s presentation and hygiene between visits.',
        benefits: [
            'Foyer and lobby cleaning with mopped or vacuumed floors, streak-free glass entry doors, dusted letterboxes and intercom panels, and emptied bins and recycling containers on every single scheduled visit',
            'Lift and elevator sanitisation covering the floor, all wall panels, stainless steel door surrounds, control button pads with disinfection wipe-down, door tracks, and ceiling light fixtures on every scheduled clean',
            'Common area corridor and stairwell maintenance including thorough cobweb removal, handrail disinfection wiping, complete floor mopping or vacuuming and skirting board dusting on every visit to the building',
            'Bin room management including full interior sanitisation with deodourising treatment, bin lid wiping and sanitisation, and complete bin presentation and retrieval service coordinated with Hornsby council collection schedules',
            'Car park sweeping and blowing of gutters, drains and pedestrian paths, and periodic pressure washing with oil stain pre-treatment and drain surround cleaning to maintain a safe and presentable car park area',
            'Garden path, pool surround, BBQ area and mail room cleaning to keep every element of your Hornsby strata building\'s common property consistently presentable and compliant with building by-laws and strata obligations'
        ],
        process: [
            'Free site assessment of your Hornsby strata building, walking every common area with the strata or building manager to document the full scope of work, identify priority areas and agree on the most appropriate service frequency',
            'Frequency-matched cleaning plan with high-traffic zones such as foyers, lifts and ground-floor corridors cleaned most often, while outdoor areas, car parks and pool surrounds are maintained on a fortnightly or monthly cycle',
            'Consistent assigned cleaning team on every visit so the same professionals become thoroughly familiar with your Hornsby building\'s layout, security access procedures, resident preferences and any building-specific requirements',
            'Written service reports provided after every visit and a dedicated account manager available for strata managers who need fast response to resident complaints, special clean requests or adjustments to the agreed scope'
        ],
        whyChooseUs: [
            'Upper North Shore expertise with proven experience cleaning strata buildings across Hornsby, Waitara, Asquith, Pennant Hills and surrounding suburbs, understanding the character and expectations of the local residential market',
            'Strata manager preferred service model with comprehensive reporting, documentation and accountability systems that support owners corporations in meeting their obligations under the Strata Schemes Management Act',
            'Police-checked, uniformed and fully insured staff with $20M public liability insurance, and a consistent team allocation model providing the security and familiarity that Hornsby residents and committees expect',
            'Resident-focused approach that reduces complaint volumes, maintains consistent building presentation standards and protects the long-term property values that Hornsby strata owners and committees are responsible for',
            'No lock-in contracts — all service agreements are month-to-month and we earn ongoing engagement through the quality and consistency of our work rather than through contractual obligation',
            'Responsive account management committed to responding to all strata manager requests within four business hours and deploying additional resources for urgent incidents within 24 hours of notification'
        ],
        serviceAreas: ['Waitara', 'Asquith', 'Wahroonga', 'Pennant Hills', 'Berowra', 'Normanhurst', 'Turramurra', 'Mount Colah', 'Cheltenham', 'Mount Kuring-Gai'],
        faqs,
        images: [
            { src: '/images/services/strata.webp', alt: 'Strata cleaning Hornsby NSW foyer lobby' },
            { src: '/images/services/commercial.webp', alt: 'Body corporate cleaning Hornsby Upper North Shore NSW' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Strata Cleaning Hornsby NSW"
                serviceDescription="Professional strata and body corporate cleaning in Hornsby NSW. Common areas, foyers, lifts, corridors, car parks and bin rooms. Serving Hornsby, Waitara, Asquith and surrounding Upper North Shore suburbs."
                serviceUrl="/strata-cleaning-hornsby"
                serviceType="Strata & Body Corporate Cleaning"
                price="$$"
                additionalServices={['Body Corporate Cleaning', 'Common Area Cleaning', 'Bin Management', 'Car Park Cleaning', 'Lift Sanitisation']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-darkblue mb-6">Related Strata & Cleaning Services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { href: '/strata-cleaning-sydney', label: 'Strata Cleaning Sydney' },
                            { href: '/strata-cleaning-services', label: 'Strata Cleaning Services' },
                            { href: '/commercial-cleaning', label: 'Commercial Cleaning Services' },
                            { href: '/strata-cleaning-north-sydney', label: 'Strata Cleaning North Sydney' },
                            { href: '/strata-cleaning-kings-cross', label: 'Strata Cleaning Kings Cross' },
                            { href: '/gym-cleaning-hornsby', label: 'Gym Cleaning Hornsby' },
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
