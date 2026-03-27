import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'School Cleaning Services Sydney NSW | Primary & Secondary School Cleaning | Pro Clean Corp',
    description: 'Professional school cleaning services across Sydney NSW. Classrooms, halls, bathrooms, canteens & gyms. Security-cleared staff, flexible term & holiday schedules. Call 1300 494 983.',
    keywords: 'school cleaning Sydney, school cleaning services Sydney, primary school cleaning Sydney, secondary school cleaning Sydney, private school cleaning NSW, school janitor services Sydney, term cleaning schools Sydney',
    openGraph: {
        title: 'School Cleaning Services Sydney NSW | Primary & Secondary School Cleaning | Pro Clean Corp',
        description: 'Specialist school cleaning across Sydney NSW — classrooms, halls, toilets, canteens and playgrounds. Security-cleared staff and flexible holiday cleaning schedules. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/school-cleaning-services-sydney',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/commercial.webp', alt: 'School cleaning services in Sydney NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/school-cleaning-services-sydney' },
};

const faqs = [
    {
        question: 'What types of schools do you clean across Sydney?',
        answer: 'We clean all types of educational institutions across Sydney including NSW Department of Education public primary and secondary schools, Catholic systemic schools, independent private schools, selective high schools, special education centres and TAFE campuses. Our school cleaning teams are experienced in the large-campus, multi-building environments typical of Sydney secondary schools as well as the compact, high-touch environments of primary schools and infants schools across all regions of Sydney.',
    },
    {
        question: 'Do you offer school holiday deep cleaning in Sydney?',
        answer: 'Yes. School holiday deep cleaning is a specialised service we provide to Sydney schools during term breaks, enabling comprehensive cleaning of classrooms, corridors, toilets, canteens, sports halls and all other facilities without disruption to students or staff. Holiday period cleans allow us to address tasks that cannot be completed during the school term — including floor stripping and resealing, high-level dusting, chair and desk stacking and cleaning, and deep toilet block scrubbing. We schedule holiday cleans well in advance to fit your school calendar.',
    },
    {
        question: 'Are your school cleaning staff security-cleared?',
        answer: 'Yes. All Pro Clean Corp staff working on school cleaning contracts are police-checked and we ensure that staff working in schools during school hours or on school premises hold appropriate Working With Children Checks (WWCC) where required by the school\'s governing authority. We maintain records of all checks and can provide documentation to school principals or business managers as required for compliance purposes.',
    },
    {
        question: 'Can you clean a large Sydney secondary school campus?',
        answer: 'Yes. We have experience cleaning large multi-building secondary school campuses across Sydney with teams sized appropriately for the campus footprint and cleaning frequency required. We work closely with the school\'s facilities manager or business manager to understand the campus layout, access requirements, priority areas and scheduling constraints, and deploy a team that can cover the full scope efficiently within the available cleaning windows.',
    },
    {
        question: 'Do you provide day porter or caretaker services for Sydney schools?',
        answer: 'Yes. In addition to our standard after-hours and early morning school cleaning programmes, we can provide a daytime porter or caretaker service for Sydney schools requiring someone on site during school hours to address toilet presentation, spills, rubbish removal and other reactive hygiene needs throughout the school day. This is particularly valuable for larger schools or those with canteens, sports facilities and high-volume toilet blocks.',
    },
];

export default function SchoolCleaningServicesSydneyPage() {
    const serviceInfo = {
        title: 'School Cleaning Services Sydney NSW',
        description: 'Pro Clean Corp delivers professional school cleaning services across Sydney, providing primary schools, secondary schools, independent private schools and TAFE campuses with the thorough, reliable campus hygiene programmes they require. Schools are among the most demanding cleaning environments — high student densities, multi-building campuses, a range of surface types from classrooms and libraries to sports halls and canteens, and the ever-present challenge of maintaining hygiene standards that protect student and staff health throughout the year.\n\nOur Sydney school cleaning teams combine daily and weekly maintenance cleaning with structured holiday deep cleaning programmes to ensure every school we service is consistently clean and well-presented. We understand the operational constraints of the school environment — after-hours access requirements, term and holiday schedules, the difference between a term maintenance clean and a holiday restoration — and we work within these parameters to deliver a seamless, unobtrusive cleaning service. All staff are police-checked, hold appropriate Working With Children Checks where required, and are trained in the specific hygiene and conduct protocols required in educational environments across Sydney.',
        benefits: [
            'Classroom and learning area cleaning covering all desks, chairs, whiteboards, technology equipment, window ledges and floor surfaces using appropriate products safe for educational environments and student use',
            'Toilet block and bathroom deep cleaning with commercial-grade disinfectants applied to all fixtures, floors, walls and partitions to the high standard required for student welfare and regulatory compliance',
            'Canteen, food preparation and dining area cleaning to food-safe hygiene standards covering all benchtops, food preparation surfaces, equipment, seating areas and floors on every service visit',
            'Sports hall, gymnasium and changing room cleaning including floor scrubbing, equipment surface wiping, change room sanitisation and shower area cleaning with anti-mould and anti-bacterial treatment',
            'Corridor, stairwell and common area maintenance with systematic vacuuming or mopping of all floor surfaces, handrail wiping, locker cleaning and bin emptying throughout the campus on every visit',
            'School holiday deep cleaning programme providing comprehensive floor restorations, high-level dusting, thorough toilet block overhauls and detailed classroom cleaning that cannot be completed during the school term'
        ],
        process: [
            'Consultation with the school principal, business manager or facilities coordinator to understand the campus layout, building count, student enrolment, current cleaning concerns and preferred schedule for term and holiday services',
            'Comprehensive cleaning programme developed covering daily, weekly and holiday-period cleaning tasks with staffing levels matched to the campus size and the cleaning windows available within your school\'s operational schedule',
            'Consistent delivery by security-cleared, WWCC-checked staff working to detailed zone checklists, with a team leader responsible for quality sign-off after every service and communication with the school\'s facilities contact',
            'Regular service reviews with the school\'s business manager or facilities coordinator, addressing any feedback, adjusting team size for term changes or holiday periods and planning ahead for major deep clean programmes'
        ],
        whyChooseUs: [
            'Specialist school cleaning experience across public, Catholic and independent school sectors in Sydney, with a deep understanding of the operational environment, compliance requirements and expectations of each school type',
            'Security-cleared and Working With Children Checked staff who understand the behavioural and conduct standards required when working on school campuses, particularly during hours when students are present',
            'Comprehensive holiday deep cleaning capability that transforms school facilities during term breaks, addressing the accumulated maintenance backlog that cannot be managed through daily term-time cleaning alone',
            'Flexible scheduling designed around the school calendar — term maintenance programmes supplemented by intensive holiday cleans, with team sizes that scale to match campus size and cleaning requirements',
            'Cost-effective packages tailored for school operating budgets, whether government-funded, CALD community schools or independent fee-paying institutions — transparent pricing with no hidden charges or mandatory extras',
            'Responsive account management with a dedicated school sector contact who understands the school calendar, responds promptly to urgent requests and proactively manages the service to prevent issues before they arise'
        ],
        serviceAreas: ['Parramatta', 'Chatswood', 'Penrith', 'Liverpool', 'Blacktown', 'North Sydney', 'Hornsby', 'Bankstown', 'Sutherland', 'Campbelltown'],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'School cleaning services Sydney NSW' },
            { src: '/images/services/commercial.webp', alt: 'Primary and secondary school cleaning Sydney' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="School Cleaning Services Sydney NSW"
                serviceDescription="Professional school cleaning services across Sydney NSW for primary, secondary and private schools. Classrooms, toilets, canteens, sports halls and holiday deep cleaning."
                serviceUrl="/school-cleaning-services-sydney"
                serviceType="School Cleaning"
                price="$$"
                additionalServices={['School Holiday Deep Cleaning', 'Classroom Cleaning', 'Toilet Block Cleaning', 'Canteen Cleaning', 'Sports Hall Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-darkblue mb-6">Related Cleaning Services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { href: '/commercial-cleaning', label: 'Commercial Cleaning Services' },
                            { href: '/childcare-centre-cleaning-sydney', label: 'Childcare Centre Cleaning Sydney' },
                            { href: '/childcare-cleaning-sydney', label: 'Childcare Cleaning Sydney' },
                            { href: '/commercial-cleaning-sydney', label: 'Commercial Cleaning Sydney' },
                            { href: '/office-cleaning-sydney', label: 'Office Cleaning Sydney' },
                            { href: '/medical-office-cleaning-sydney', label: 'Medical Office Cleaning Sydney' },
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
