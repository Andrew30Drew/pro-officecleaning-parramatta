import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Strata Cleaning North Sydney NSW | Body Corporate Cleaning | Pro Clean Corp',
    description: 'Professional strata and body corporate cleaning in North Sydney NSW. Foyers, lifts, corridors, car parks, bin rooms and pool surrounds. Trusted by strata managers. Free quote.',
    keywords: 'strata cleaning North Sydney, body corporate cleaning North Sydney, common area cleaning North Sydney NSW, strata cleaners North Sydney',
    openGraph: {
        title: 'Strata Cleaning North Sydney NSW | Body Corporate Cleaning | Pro Clean Corp',
        description: 'Professional strata and body corporate cleaning in North Sydney NSW. Foyers, lifts, corridors, car parks and bin rooms. Trusted by strata managers. Free quote.',
        url: 'https://www.procleancorp.com.au/strata-cleaning-north-sydney',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/strata.webp', alt: 'Strata cleaning North Sydney NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-north-sydney' },
};

const faqs = [
    {
        question: 'What strata cleaning services do you provide in North Sydney?',
        answer: 'Our North Sydney strata cleaning service covers all common property areas as defined by your strata plan and owners corporation obligations: foyers, lobbies, corridors, stairwells, lifts, car parks, bin rooms, letterbox areas, garden paths, mail rooms, and pool surrounds. We tailor the scope and frequency precisely to your building\'s size, resident density and strata plan obligations, and provide written service reports after every visit to support your strata management reporting requirements.',
    },
    {
        question: 'Do you service strata buildings in Crows Nest and St Leonards?',
        answer: 'Yes. Our lower North Shore strata cleaning team services buildings across North Sydney, Crows Nest, St Leonards, Artarmon, Waverton, Kirribilli, Milsons Point, Neutral Bay, McMahons Point, Lavender Bay and Cremorne on regular weekly and fortnightly schedules. We are thoroughly familiar with the diverse range of strata buildings in this area and the specific management companies and owners corporations that operate in the lower North Shore market.',
    },
    {
        question: 'How do you handle premium strata buildings in North Sydney?',
        answer: 'North Sydney has a concentration of premium residential towers and corporate-adjacent apartment complexes whose residents hold high expectations for building presentation, hygiene and consistency. We provide presentation-focused cleaning that goes beyond basic hygiene — polishing entry surfaces and foyer fitments, maintaining lift presentation to showroom standard, ensuring foyers look pristine at all times — while also delivering thorough clinical hygiene work in bin rooms, car parks and amenity areas.',
    },
    {
        question: 'Do you work with strata managers in North Sydney?',
        answer: 'Yes. We work directly with strata managers and owners corporations across North Sydney and the lower North Shore. We provide detailed written service reports after every visit, maintain on-site communication logs, and offer direct account manager access for fast response to strata committee requests, resident complaints or special clean requirements. We understand the reporting obligations that North Sydney strata managers face and make compliance easy with our documentation systems.',
    },
    {
        question: 'Are your cleaners police checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff are police-checked before commencing work on any strata contract and we hold full public liability insurance to $20 million. You receive the same assigned team on each visit, providing the consistency and security that North Sydney strata residents and their management committees expect. Our staff carry photo identification on every visit and are fully inducted to your building\'s specific access and security requirements before their first service.',
    },
];

export default function StrataCleaningNorthSydneyPage() {
    const serviceInfo = {
        title: 'Strata Cleaning North Sydney NSW',
        description: 'North Sydney is one of the Lower North Shore\'s most significant residential and mixed-use precincts, home to a large and diverse population of strata buildings — from established residential towers on Miller Street and Berry Street to boutique apartment complexes with harbour views near Lavender Bay and Milsons Point. The suburb\'s proximity to the CBD, excellent transport connections and premium residential amenity make it one of Sydney\'s most sought-after strata markets, with residents who expect consistently high standards from their building management and cleaning services.\n\nPro Clean Corp provides professional strata and body corporate cleaning services across North Sydney, Crows Nest, and St Leonards, delivering the consistent, high-standard common area maintenance that residents, strata committees, and owners corporations in this premium suburb require. Our Lower North Shore strata cleaning team is locally based, familiar with the specific buildings and management companies in the North Sydney LGA, and equipped to handle any building size from a boutique 12-apartment block to a large residential tower. We provide the reporting, responsiveness and reliability that experienced strata managers expect from a professional contractor.',
        benefits: [
            'Foyer and lobby cleaning with mopped or vacuumed floors, streak-free glass entry doors, dusted and wiped letterboxes and intercom panels, and emptied bins and recycling on every scheduled visit to maintain an impressive first impression',
            'Lift and elevator sanitisation covering the floor, all wall and ceiling panels, stainless steel door surrounds and tracks, control button pads with disinfection wipe-down, and all interior fixtures on every scheduled clean',
            'Common area corridor and stairwell maintenance with thorough cobweb removal from all angles, handrail disinfection wiping, complete floor mopping or vacuuming of all surfaces and skirting board dusting on every visit',
            'Bin room management including full interior sanitisation with commercial deodourising treatment, bin lid and exterior wiping, and complete bin presentation and retrieval service coordinated with North Sydney council collection days',
            'Car park sweeping, blowing and periodic pressure washing with oil stain pre-treatment, drain surround cleaning and pedestrian path maintenance to keep the car park safe, compliant and well-presented for residents',
            'Garden path, pool surround, rooftop entertaining area and mail room cleaning to maintain every element of your North Sydney strata building\'s common property to the standard its premium location commands'
        ],
        process: [
            'Free site assessment of your North Sydney strata building, walking every common area with the strata or building manager to document all zones, assess current condition, note access requirements and agree on the most appropriate service frequency',
            'Frequency-matched cleaning plan with high-traffic zones such as foyers, lifts and main corridors cleaned most often, and outdoor areas, car parks and pool surrounds maintained on a fortnightly or monthly cycle as appropriate for the building',
            'Consistent assigned cleaning team on every visit so the same trusted professionals develop thorough familiarity with your North Sydney building\'s layout, security access, resident expectations and any building-specific requirements',
            'Written service reports provided after every visit and a dedicated account manager available for direct communication, providing fast response to strata manager requests, resident complaints or any special cleaning requirements'
        ],
        whyChooseUs: [
            'Lower North Shore expertise with proven experience in North Sydney, Crows Nest, St Leonards, Artarmon, Neutral Bay and Cremorne strata buildings, understanding the premium standards expected in this prestigious market',
            'Strata manager preferred service model with comprehensive reporting, documentation and accountability systems that support owners corporations in meeting their legal obligations and demonstrating compliance to their committees',
            'Police-checked, uniformed and fully insured staff with $20M public liability insurance, and consistent team allocation providing the reliability and security that North Sydney strata residents and managers require',
            'Premium building experience with presentation-focused cleaning that addresses both the clinical hygiene and the visual standards expected by residents in North Sydney\'s most sought-after residential addresses',
            'No lock-in contracts — all service agreements are month-to-month arrangements that we renew through consistently excellent results rather than through contractual lock-in, penalties or difficult exit processes',
            'Responsive account management committed to addressing all strata manager requests within four business hours and deploying additional cleaning resources for urgent incidents within 24 hours across the North Sydney portfolio'
        ],
        serviceAreas: ['Crows Nest', 'St Leonards', 'Artarmon', 'Waverton', 'Kirribilli', 'Milsons Point', 'Neutral Bay', 'Cremorne', 'McMahons Point', 'Lavender Bay'],
        faqs,
        images: [
            { src: '/images/services/strata.webp', alt: 'Strata cleaning North Sydney NSW foyer lobby' },
            { src: '/images/services/commercial.webp', alt: 'Body corporate cleaning North Sydney Crows Nest NSW' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Strata Cleaning North Sydney NSW"
                serviceDescription="Professional strata and body corporate cleaning in North Sydney NSW. Common areas, foyers, lifts, corridors, car parks and bin rooms. Serving North Sydney, Crows Nest, St Leonards, Artarmon and surrounding Lower North Shore suburbs."
                serviceUrl="/strata-cleaning-north-sydney"
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
                            { href: '/strata-cleaning-hornsby', label: 'Strata Cleaning Hornsby' },
                            { href: '/strata-cleaning-kings-cross', label: 'Strata Cleaning Kings Cross' },
                            { href: '/strata-cleaning-arncliffe', label: 'Strata Cleaning Arncliffe' },
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
