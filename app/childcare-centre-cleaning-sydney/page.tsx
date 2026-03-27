import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Childcare Centre Cleaning Sydney NSW | Childcare & Kindergarten Cleaning | Pro Clean Corp',
    description: 'Specialist childcare centre cleaning across Sydney NSW. Child-safe, non-toxic products, Working With Children Checks, infection control protocols. Serving Parramatta, Chatswood, Penrith & all Sydney regions. Call 1300 494 983.',
    keywords: 'childcare centre cleaning Sydney, childcare cleaning Sydney, kindergarten cleaning Sydney, daycare cleaning Sydney, childcare centre sanitisation, non-toxic cleaning childcare NSW, Working With Children cleaning Sydney',
    openGraph: {
        title: 'Childcare Centre Cleaning Sydney NSW | Childcare & Kindergarten Cleaning | Pro Clean Corp',
        description: 'Specialist childcare centre and kindergarten cleaning across Sydney. Child-safe products, Working With Children Checks, infection control and regulatory compliance. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/childcare-centre-cleaning-sydney',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/commercial.webp', alt: 'Childcare centre cleaning services in Sydney NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/childcare-centre-cleaning-sydney' },
};

const faqs = [
    {
        question: 'What cleaning products do you use in childcare centres in Sydney?',
        answer: 'We use only hypoallergenic, non-toxic, child-safe cleaning and disinfecting products that are certified safe for use in environments where children eat, sleep and play. Our products are TGA-listed where required, free from harsh volatile compounds, and selected to provide genuine disinfection efficacy without leaving residues that could affect children with chemical sensitivities. All products used in childcare environments are documented and available for review by the centre director or licensing authority upon request.',
    },
    {
        question: 'Do your staff hold Working With Children Checks?',
        answer: 'Yes. All Pro Clean Corp staff assigned to childcare centre cleaning contracts hold valid Working With Children Checks (WWCC) as required by the Child Protection (Working with Children) Act 2012 NSW. We maintain records of all WWCC numbers and expiry dates and ensure that only currently checked staff are assigned to childcare environments. Our staff are also police-checked, uniformed and trained in the conduct standards required in sensitive educational environments.',
    },
    {
        question: 'Can you help our Sydney childcare centre meet Education and Care Services National Regulations?',
        answer: 'Yes. Our childcare centre cleaning protocols are specifically designed to support compliance with the Education and Care Services National Regulations and the National Quality Standard, particularly Quality Area 2 (Children\'s Health and Safety) and Quality Area 3 (Physical Environment). We document all cleaning activities, use products that meet regulatory requirements, and provide service reports that can support your centre\'s Quality Improvement Plan and licensing audit documentation.',
    },
    {
        question: 'How often should a Sydney childcare centre be professionally cleaned?',
        answer: 'Most Sydney childcare centres require professional cleaning at least five days per week to maintain the hygiene standards required by regulation and expected by parents. High-contact surfaces such as nappy change areas, toilets, toy storage and food preparation zones require daily disinfection. Deep cleaning of all areas — floors, walls, ceilings, furniture and equipment — should be scheduled at least fortnightly, with additional deep cleans recommended at the start and end of each school holiday period.',
    },
    {
        question: 'Do you clean nappy change areas and bathrooms in childcare centres?',
        answer: 'Yes. Nappy change areas are a critical hygiene zone in childcare centres and receive priority treatment in our cleaning protocols. We apply TGA-approved disinfectants to all change mat surfaces, mat surrounds, wall surfaces within splash range, storage shelves and all fixtures using the correct dwell times to ensure full antimicrobial efficacy. Child-height bathroom facilities receive the same level of attention, with all basins, taps, floors and wall areas thoroughly sanitised on every visit.',
    },
];

export default function ChildcareCentreCleaningSydneyPage() {
    const serviceInfo = {
        title: 'Childcare Centre Cleaning Sydney NSW',
        description: 'Pro Clean Corp provides specialist childcare centre and kindergarten cleaning services across Sydney, delivering the child-safe, infection-controlled hygiene programmes that early childhood education facilities require. Childcare centres are among the most hygiene-sensitive environments in any commercial sector — children spend long hours in close contact with each other, with shared toys, furniture and equipment, and with surfaces at the precise height for mouth-contact. The transmission risk for bacteria and viruses is elevated, and the consequences of inadequate cleaning include illness outbreaks, regulatory non-compliance and damage to the centre\'s reputation and parent trust.\n\nPro Clean Corp\'s Sydney childcare cleaning teams are trained in infection control protocols appropriate for early childhood settings, use only child-safe and non-toxic products, and hold current Working With Children Checks (WWCC) as required by NSW law. We service childcare centres, long day care facilities, kindergartens, pre-schools and occasional care centres across all Sydney regions — from Parramatta and Penrith in the west to Chatswood and North Sydney on the north shore, Liverpool and Bankstown in the south west, and Bondi and Surry Hills in the inner east. Our protocols are aligned with the Education and Care Services National Regulations and support your centre\'s compliance with Quality Area 2 of the National Quality Standard.',
        benefits: [
            'Child-safe, hypoallergenic and non-toxic disinfecting products used exclusively throughout all childcare areas — all products are TGA-listed where required and free from harsh chemicals, bleach and phthalates that are unsafe around young children',
            'Nappy change area and child-height bathroom deep cleaning with TGA-approved disinfectants applied with correct dwell times to all change mats, wall surrounds, basins, taps, flush handles and all child-accessible fixtures',
            'Toy, furniture and equipment sanitisation covering all frequently handled items including plastic toys, wooden blocks, climbing frames, cots, highchairs and all shared play equipment on a regular rotation schedule',
            'Kitchen and food preparation area cleaning to food-safe standards covering all benchtops, sinks, appliances, highchair trays, cup and plate storage and all food-contact surfaces with food-grade disinfectant products',
            'Sleep room and nap area cleaning including cot frame and mattress sanitisation, floor cleaning, ventilation grille dusting and linen removal and replacement coordination as required by your centre\'s procedures',
            'All staff hold current Working With Children Checks, are police-checked and have received specific training in the conduct standards, hygiene protocols and infection control procedures required in licensed early childhood education environments'
        ],
        process: [
            'Consultation with your centre director or nominated supervisor to understand your regulatory obligations, existing cleaning protocols, any specific hygiene incidents or concerns and the preferred schedule for professional cleaning services',
            'Customised cleaning programme developed to align with the Education and Care Services National Regulations, your centre\'s Quality Improvement Plan and the operational requirements of your Sydney childcare facility',
            'Systematic zone-by-zone cleaning executed by WWCC-checked staff using child-safe products, zone-specific colour-coded cloths to prevent cross-contamination and detailed checklists signed off after every visit',
            'Regular service documentation and account manager communication to support your compliance records, address any regulatory feedback and adjust the cleaning programme as your centre grows or changes premises'
        ],
        whyChooseUs: [
            'Specialist childcare and early childhood education cleaning experience, with a deep understanding of the regulatory framework, infection control requirements and child safety standards that apply to Sydney childcare centres',
            'All staff hold current Working With Children Checks (WWCC) and are police-checked, providing the legally required level of verification for any person who accesses environments where children are present',
            'Exclusively child-safe and non-toxic product range — no harsh chemicals, bleach alternatives or VOC-emitting products are used in any area accessible to children, with all products fully documented and reviewable',
            'Infection control protocols aligned with Australian Commission on Safety and Quality in Health Care guidelines and adapted for the early childhood education context, reducing illness transmission between children and staff',
            'Regulatory compliance support — our documentation, product records and service reports provide the evidence trail your centre needs for licensing audits, quality reviews and parent transparency requirements',
            'Flexible scheduling that works around your childcare centre\'s operational hours — early morning deep cleans before children arrive, evening services after the last child departs and holiday period intensive cleans'
        ],
        serviceAreas: ['Parramatta', 'Chatswood', 'Penrith', 'Liverpool', 'Blacktown', 'North Sydney', 'Surry Hills', 'Newtown', 'Bondi', 'Balmain'],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Childcare centre cleaning services Sydney NSW' },
            { src: '/images/services/commercial.webp', alt: 'Kindergarten and daycare cleaning Sydney' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Childcare Centre Cleaning Sydney NSW"
                serviceDescription="Specialist childcare centre and kindergarten cleaning services across Sydney NSW. Child-safe products, Working With Children Checks, infection control protocols and regulatory compliance support."
                serviceUrl="/childcare-centre-cleaning-sydney"
                serviceType="Childcare Centre Cleaning"
                price="$$"
                additionalServices={['Kindergarten Cleaning', 'Nappy Change Area Sanitisation', 'Toy & Equipment Sanitisation', 'Food Preparation Area Cleaning', 'Sleep Room Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-darkblue mb-6">Related Cleaning Services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { href: '/childcare-cleaning-sydney', label: 'Childcare Cleaning Sydney' },
                            { href: '/commercial-cleaning', label: 'Commercial Cleaning Services' },
                            { href: '/school-cleaning-services-sydney', label: 'School Cleaning Services Sydney' },
                            { href: '/medical-office-cleaning-sydney', label: 'Medical Office Cleaning Sydney' },
                            { href: '/gym-cleaning-sydney', label: 'Gym Cleaning Sydney' },
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
