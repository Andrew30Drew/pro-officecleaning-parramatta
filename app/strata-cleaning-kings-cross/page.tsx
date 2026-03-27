import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Strata Cleaning Kings Cross NSW | Body Corporate Cleaning | Pro Clean Corp',
    description: 'Professional strata and body corporate cleaning in Kings Cross NSW. Foyers, lifts, corridors, car parks, bin rooms and pool surrounds. Trusted by strata managers. Free quote.',
    keywords: 'strata cleaning Kings Cross, body corporate cleaning Kings Cross, common area cleaning Kings Cross NSW, strata cleaners Kings Cross',
    openGraph: {
        title: 'Strata Cleaning Kings Cross NSW | Body Corporate Cleaning | Pro Clean Corp',
        description: 'Professional strata and body corporate cleaning in Kings Cross NSW. Foyers, lifts, corridors, car parks and bin rooms. Trusted by strata managers. Free quote.',
        url: 'https://www.procleancorp.com.au/strata-cleaning-kings-cross',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/strata.webp', alt: 'Strata cleaning Kings Cross NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-kings-cross' },
};

const faqs = [
    {
        question: 'What strata cleaning services do you provide in Kings Cross?',
        answer: 'Our Kings Cross strata cleaning service covers all common property areas as specified by your strata plan and owners corporation obligations: foyers, corridors, stairwells, lifts, car parks, bin rooms, letterbox areas, garden terraces, mail rooms, and pool or rooftop entertaining surrounds. We design a cleaning scope and frequency matched to your high-density building, addressing the elevated hygiene demands that come with the volume of residents and visitors typical of Kings Cross apartment complexes.',
    },
    {
        question: 'Do you service strata buildings in Potts Point and Elizabeth Bay?',
        answer: 'Yes. Our inner-east strata cleaning team services buildings across Kings Cross, Potts Point, Darlinghurst, Elizabeth Bay, Woolloomooloo, Surry Hills, Paddington, Rushcutters Bay and Edgecliff on regular weekly and fortnightly schedules. We are familiar with the diverse range of strata buildings in this area — from art deco heritage-listed apartment blocks to modern mixed-use towers — and tailor our approach to the specific character and requirements of each building.',
    },
    {
        question: 'How do you handle high-density strata buildings in Kings Cross?',
        answer: 'Kings Cross has some of Sydney\'s most densely occupied residential buildings, with very high lift and foyer usage rates throughout the day and evening. For these buildings we recommend a minimum of twice-weekly internal cleaning, with the largest complexes benefiting from daily or alternate-day foyer and lift attention. Our approach is to assess each building individually, review recent complaint histories and resident feedback, and recommend a frequency that genuinely meets the building\'s needs without unnecessary over-servicing.',
    },
    {
        question: 'Do you work with strata managers in Kings Cross?',
        answer: 'Yes. We work directly with strata managers, building managers and owners corporations across Kings Cross and the inner east. We provide detailed written service reports after every visit, maintain on-site communication logs available for committee review, and offer direct account manager access to ensure fast response to resident complaints, special clean requirements or urgent incidents in high-density buildings where issues can escalate quickly if not addressed promptly.',
    },
    {
        question: 'Are your cleaners police checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff are police-checked before commencing work on any strata contract and we hold full public liability insurance to $20 million. You receive the same assigned team on each visit, providing the consistency and accountability that residents in high-density Kings Cross buildings have a right to expect. Our staff carry photo identification on every visit and are fully inducted to your building\'s access control, security and visitor management protocols.',
    },
];

export default function StrataCleaningKingsCrossPage() {
    const serviceInfo = {
        title: 'Strata Cleaning Kings Cross NSW',
        description: 'Kings Cross is one of Sydney\'s most densely populated residential precincts, with a remarkable concentration of apartment buildings — from landmark art deco heritage complexes on Macleay Street to modern high-rise towers overlooking the harbour — all requiring professional, frequent strata cleaning to maintain the standard residents and owners corporations expect. The suburb\'s vibrant street life, high foot traffic and mix of short-term and long-term residents creates elevated demands on common areas, with lifts, foyers and bin rooms requiring more regular attention than comparable buildings in quieter suburbs.\n\nPro Clean Corp provides expert strata and body corporate cleaning services across Kings Cross, Potts Point, and the surrounding inner east, maintaining foyers, lifts, corridors, car parks, bin rooms, and pool surrounds to the standard that discerning residents and experienced strata committees demand. Our inner-east strata cleaning team understands the unique character of this precinct — the mix of heritage and modern buildings, the high resident turnover, the 24-hour activity levels — and delivers a service that is both thorough in its hygiene and attentive to the presentation standards that protect property values in Sydney\'s most iconic inner-city suburb.',
        benefits: [
            'Foyer and lobby cleaning with mopped or vacuumed floors, streak-free glass entry doors, dusted letterboxes and intercom systems, and emptied bins on every scheduled visit to maintain a first-class first impression',
            'Lift and elevator sanitisation covering every floor surface, wall panel, stainless steel door frame, control button pad with disinfection wipe, door track and ceiling fixture on every scheduled clean',
            'Common area corridor and stairwell maintenance with thorough cobweb removal, handrail disinfection, complete floor mopping or vacuuming and skirting board cleaning on every single visit',
            'Bin room management including full interior sanitisation, commercial-grade deodourising treatment, bin lid wiping, and complete bin presentation and retrieval service around council collection days',
            'Car park sweeping and periodic pressure washing with oil stain pre-treatment, drain cleaning and pedestrian path maintenance to ensure the car park is safe, presentable and odour-free',
            'Garden terrace, pool surround, rooftop entertaining area and mail room cleaning to maintain every element of the building\'s common property to the highest standard that Kings Cross residents expect'
        ],
        process: [
            'Free site assessment of your Kings Cross strata building, walking every common area level with the strata or building manager to document all zones, assess condition, note access requirements and agree on service frequency',
            'Frequency-matched cleaning plan tailored to high-density Kings Cross buildings, with foyers, lifts and high-traffic areas cleaned most frequently and outdoor zones maintained on a fortnightly or monthly cycle',
            'Consistent assigned cleaning team on every visit so the same trusted professionals build detailed familiarity with your building\'s specific layout, access systems, resident habits and any complex or unusual requirements',
            'Detailed written service reports after every visit and a dedicated account manager providing fast, direct communication for strata managers who need quick response to resident complaints or urgent incidents'
        ],
        whyChooseUs: [
            'Inner-east expertise with proven experience in Kings Cross and Potts Point high-density strata buildings, understanding the unique cleaning challenges and resident expectations found in Sydney\'s most iconic inner-city suburb',
            'Strata manager preferred service model with comprehensive reporting, documentation and accountability systems that support owners corporations in meeting their legal obligations and responding to resident concerns efficiently',
            'Police-checked, uniformed and fully insured staff with $20M public liability insurance, and consistent team allocation providing the security and accountability that residents in high-density Kings Cross buildings require',
            'High-density building experience managing large, complex strata contracts with multiple access points, high resident volumes, varied building ages and the elevated hygiene demands of inner-city apartment living',
            'No lock-in contracts — all service agreements are month-to-month arrangements that we renew through consistently excellent results rather than through long-term contractual obligation',
            'Responsive account management with a commitment to responding to all strata manager queries within four business hours and addressing urgent cleaning incidents within 24 hours across the inner-east portfolio'
        ],
        serviceAreas: ['Potts Point', 'Darlinghurst', 'Elizabeth Bay', 'Woolloomooloo', 'Surry Hills', 'Paddington', 'Rushcutters Bay', 'Edgecliff', 'Macleay Street', 'Victoria Street'],
        faqs,
        images: [
            { src: '/images/services/strata.webp', alt: 'Strata cleaning Kings Cross NSW foyer lobby' },
            { src: '/images/services/commercial.webp', alt: 'Body corporate cleaning Kings Cross Potts Point NSW' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Strata Cleaning Kings Cross NSW"
                serviceDescription="Professional strata and body corporate cleaning in Kings Cross NSW. Common areas, foyers, lifts, corridors, car parks and bin rooms. Serving Kings Cross, Potts Point, Darlinghurst, Elizabeth Bay and surrounding inner-east suburbs."
                serviceUrl="/strata-cleaning-kings-cross"
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
                            { href: '/strata-cleaning-arncliffe', label: 'Strata Cleaning Arncliffe' },
                            { href: '/strata-cleaning-hornsby', label: 'Strata Cleaning Hornsby' },
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
