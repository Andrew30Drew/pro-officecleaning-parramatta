import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Strata Cleaning Arncliffe NSW | Body Corporate Cleaning | Pro Clean Corp',
    description: 'Professional strata and body corporate cleaning in Arncliffe NSW. Foyers, lifts, corridors, car parks, bin rooms and pool surrounds. Trusted by strata managers. Free quote.',
    keywords: 'strata cleaning Arncliffe, body corporate cleaning Arncliffe, common area cleaning Arncliffe NSW, strata cleaners Arncliffe',
    openGraph: {
        title: 'Strata Cleaning Arncliffe NSW | Body Corporate Cleaning | Pro Clean Corp',
        description: 'Professional strata and body corporate cleaning in Arncliffe NSW. Foyers, lifts, corridors, car parks and bin rooms. Trusted by strata managers. Free quote.',
        url: 'https://www.procleancorp.com.au/strata-cleaning-arncliffe',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/strata.webp', alt: 'Strata cleaning Arncliffe NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/strata-cleaning-arncliffe' },
};

const faqs = [
    {
        question: 'What strata cleaning services do you provide in Arncliffe?',
        answer: 'Our Arncliffe strata cleaning service covers all common property areas as defined by your strata plan: foyers, lobbies, corridors, stairwells, lifts, car parks, bin rooms, letterbox areas, garden paths, mail rooms, and pool surrounds where applicable. We design a scope and frequency schedule matched precisely to your building\'s size, layout, resident density and the specific obligations set out in your strata management plan. All service reports are provided after each visit.',
    },
    {
        question: 'Do you service strata buildings near Wolli Creek and Rockdale?',
        answer: 'Yes. Our St George area team services strata buildings across Arncliffe, Rockdale, Wolli Creek, Banksia, Bexley, Bardwell Park, Tempe, Sydenham and Marrickville on regular weekly and fortnightly schedules. We are thoroughly familiar with the strata buildings along the Princes Highway corridor and near Arncliffe and Wolli Creek train stations, which have higher foot traffic requiring more frequent common area attention.',
    },
    {
        question: 'How often should our Arncliffe strata building be cleaned?',
        answer: 'For most Arncliffe apartment buildings we recommend weekly internal common area cleaning covering foyers, corridors and lifts, combined with fortnightly car park sweeping and outdoor maintenance. High-density buildings near Arncliffe station or those with more than 50 apartments may benefit from twice-weekly foyer and lift visits, particularly during wet weather seasons when mud and water tracking from the street increases rapidly. We assess each building individually to recommend the optimal frequency.',
    },
    {
        question: 'Do you work with strata managers in Arncliffe?',
        answer: 'Yes. We work directly with strata managers, building managers and owners corporations across Arncliffe and the St George district. We provide detailed written service reports after every visit, maintain on-site communication logs for the building\'s records, and offer direct account manager access to ensure fast response to strata committee requests, special clean requirements or urgent incidents that require same-day or next-day attention.',
    },
    {
        question: 'Are your cleaners police checked and insured?',
        answer: 'Yes. All Pro Clean Corp staff are police-checked before commencing work on any strata contract, and we hold full public liability insurance to $20 million. You receive the same assigned team on each visit, providing the consistency and security that Arncliffe strata residents and their management committees rightfully expect from a professional cleaning contractor. Our staff carry identification on every visit and are fully inducted to your building\'s access and security protocols.',
    },
];

export default function StrataCleaningArncliffePage() {
    const serviceInfo = {
        title: 'Strata Cleaning Arncliffe NSW',
        description: 'Arncliffe is a well-connected suburb positioned between the St George district and Sydney\'s inner south, home to a growing number of strata apartment buildings that require reliable, professional common area maintenance to keep residents satisfied and property values protected. Located close to the M5 motorway and Arncliffe train station, the suburb attracts a diverse residential community with high expectations for building presentation and cleanliness. Pro Clean Corp delivers expert strata and body corporate cleaning services across Arncliffe and surrounding suburbs, keeping foyers, lifts, corridors, car parks and bin rooms consistently clean and well-presented.\n\nOur St George area strata cleaning team is locally based and thoroughly familiar with the specific types of strata buildings in Arncliffe — from the older brick walk-up complexes on the slopes near the highway to the newer mixed-use apartment towers near Wolli Creek. Each building type presents different cleaning challenges and resident expectations. We tailor our approach, products and schedule to match your building\'s specific needs, ensuring strata managers receive a service that reduces complaints, simplifies their reporting obligations and maintains the property\'s long-term appeal.',
        benefits: [
            'Foyer and lobby cleaning with mopped or vacuumed floors, streak-free glass entry doors, dusted letterboxes and intercom panels, and emptied bins and recycling on every scheduled visit',
            'Lift and elevator sanitisation covering the floor surface, wall panels, stainless steel surrounds, button pads with disinfection wipe-down, door tracks and ceiling fixtures on every scheduled clean',
            'Common area corridor and stairwell maintenance including cobweb removal from all angles, handrail disinfection wiping, full floor mopping or vacuuming and skirting board dusting on every visit',
            'Bin room management covering full interior sanitisation, deodourising treatment, bin lid wiping and complete bin presentation and retrieval service coordinated with council collection day schedules',
            'Car park sweeping, compressed air blowing of gutters and drains, and periodic pressure washing with oil stain pre-treatment and drain surround cleaning to maintain a clean, presentable car park area',
            'Garden path, pool surround, BBQ area and mail room cleaning to keep every element of your Arncliffe building\'s common property areas consistently presentable and compliant with strata by-laws'
        ],
        process: [
            'Free site assessment of your Arncliffe strata building, walking every common area with the strata or building manager to document the full scope, note any priority areas and agree on the most appropriate service frequency',
            'Frequency-matched cleaning plan with high-traffic zones such as foyers and lifts cleaned most often, and outdoor areas, car parks and pool surrounds maintained on a fortnightly or monthly cycle as appropriate',
            'Consistent assigned cleaning team on every visit so the same professionals become thoroughly familiar with your Arncliffe building\'s layout, security access, resident expectations and any unique requirements',
            'Written service reports provided after every visit and direct account manager communication available for strata managers needing fast response to resident complaints, special cleans or scope adjustments'
        ],
        whyChooseUs: [
            'St George area expertise with deep, proven experience cleaning strata buildings across Arncliffe, Rockdale, Wolli Creek, Banksia and surrounding suburbs, understanding the specific character of each precinct',
            'Strata manager preferred service model with reporting, documentation and accountability systems that support owners corporations in meeting their legal obligations under the Strata Schemes Management Act',
            'Police-checked, uniformed and fully insured staff holding $20M public liability insurance, with consistent team allocation providing the security and familiarity residents expect from their building\'s cleaning service',
            'Resident-focused approach that actively reduces complaint volumes, maintains high building presentation standards and protects the long-term property values that strata owners and committees are responsible for',
            'No lock-in contracts — all agreements are month-to-month and we earn renewal through the consistent quality of our work, not through contractual obligation or difficult cancellation processes',
            'Responsive account management with a commitment to addressing all strata manager requests within four business hours and deploying additional cleaning resources for urgent incidents within 24 hours'
        ],
        serviceAreas: ['Rockdale', 'Banksia', 'Wolli Creek', 'Bexley', 'Bardwell Park', 'Tempe', 'Sydenham', 'Marrickville', 'Kogarah', 'Carlton'],
        faqs,
        images: [
            { src: '/images/services/strata.webp', alt: 'Strata cleaning Arncliffe NSW foyer lobby' },
            { src: '/images/services/commercial.webp', alt: 'Body corporate cleaning Arncliffe Rockdale NSW' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Strata Cleaning Arncliffe NSW"
                serviceDescription="Professional strata and body corporate cleaning in Arncliffe NSW. Common areas, foyers, lifts, corridors, car parks and bin rooms. Serving Arncliffe, Rockdale, Wolli Creek and surrounding St George suburbs."
                serviceUrl="/strata-cleaning-arncliffe"
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
                            { href: '/strata-cleaning-kings-cross', label: 'Strata Cleaning Kings Cross' },
                            { href: '/strata-cleaning-north-sydney', label: 'Strata Cleaning North Sydney' },
                            { href: '/gym-cleaning-kogarah', label: 'Gym Cleaning Kogarah' },
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
