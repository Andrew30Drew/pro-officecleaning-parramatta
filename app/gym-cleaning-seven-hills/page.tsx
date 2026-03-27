import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Gym Cleaning Seven Hills NSW | Fitness Centre Cleaning Services | Pro Clean Corp',
    description: 'Professional gym cleaning in Seven Hills NSW. Equipment sanitisation, locker rooms, change rooms & free weight areas. Serving Seven Hills, Blacktown, Pendle Hill & surrounds. Call 1300 494 983.',
    keywords: 'gym cleaning Seven Hills, fitness centre cleaning Seven Hills, gym cleaning Seven Hills NSW, health club cleaning Seven Hills, locker room cleaning Seven Hills, commercial gym cleaning Blacktown area',
    openGraph: {
        title: 'Gym Cleaning Seven Hills NSW | Fitness Centre Cleaning Services | Pro Clean Corp',
        description: 'Expert gym & fitness centre cleaning in Seven Hills. Equipment sanitisation, change rooms, locker rooms & high-touch surface disinfection. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/gym-cleaning-seven-hills',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/gym.webp', alt: 'Gym cleaning services in Seven Hills NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-seven-hills' },
};

export default function GymCleaningSevenHillsPage() {
    const serviceInfo = {
        title: "Gym Cleaning Seven Hills NSW",
        description: "Pro Clean Corp delivers reliable, thorough gym and fitness centre cleaning across Seven Hills and the greater Blacktown area of Western Sydney. Seven Hills is a busy residential and commercial hub with a strong fitness culture, hosting a range of gym formats from 24-hour chain gyms to independent health clubs, functional fitness studios and boxing academies. Each facility presents unique cleaning challenges that our specialist teams are equipped to handle — from rubber-floored weightlifting zones to tiled shower facilities and carpeted reception areas.\n\nWe use commercial-grade disinfectants and systematic cleaning protocols to ensure your Seven Hills gym meets the highest hygiene standards consistently. Our Western Sydney teams understand the local market, the high-density membership volumes many Seven Hills facilities service, and the importance of maintaining spotless conditions across every visit. Whether you need daily cleaning before your 5am opening, an after-closing deep clean once members have departed for the evening, or a mid-shift tidy during quiet periods, Pro Clean Corp has the team, the equipment and the protocols to deliver exceptional results for your Seven Hills fitness facility.",
        benefits: [
            "Thorough sanitisation of all gym equipment including free weights, barbells, cable machines, benches and functional training rigs, using hospital-grade disinfectants applied to every surface members touch during their workout",
            "Change room and locker room cleaning covering full bench sanitisation, locker handle wiping, floor scrubbing, drainage area treatment and complete deodorising service to eliminate odours at their source",
            "Cardio zone disinfection programme covering every treadmill, cross-trainer, spin bike, rowing machine and stair climber — including touchscreens, handlebars, seat adjusters and all secondary contact surfaces",
            "Shower and bathroom deep clean with commercial anti-fungal treatment applied to all grout lines, tile surfaces and drainage areas to prevent athlete's foot fungus, mould growth and persistent odours",
            "Stretching and functional training area floor scrubbing with full mat sanitisation, foam roller cleaning and complete mirror polishing to maintain a safe, hygienic and visually presentable training space",
            "Staff room, kitchen, reception area and entry point cleaning included as standard to ensure comprehensive facility hygiene coverage from the car park entrance to the back-of-house staff facilities"
        ],
        process: [
            "On-site assessment of your Seven Hills gym to map all cleaning zones, identify all surface types, document access requirements and record peak usage periods before developing a tailored service proposal",
            "Development of a structured cleaning schedule in consultation with your facility manager, aligned with your gym's specific opening hours, peak periods and any restrictions on cleaning windows or noise levels",
            "Consistent delivery by a dedicated cleaning team using approved products, colour-coded cloths and detailed zone checklists reviewed and signed off by the team leader after every single visit",
            "Periodic quality audits conducted by a Pro Clean Corp supervisor, complemented by regular account manager check-ins to ensure ongoing service excellence and address any evolving needs proactively"
        ],
        whyChooseUs: [
            "Deep familiarity with the gym and fitness market across Seven Hills, Blacktown, Toongabbie, Pendle Hill and the broader Western Sydney area, with experience cleaning a wide range of facility formats and sizes",
            "Fully insured with $20M public liability coverage, uniformed and police-checked staff with fitness facility hygiene certification and specific training in the cross-contamination prevention practices essential in gym environments",
            "Affordable gym cleaning packages designed for independent gym operators and franchise gym managers alike, with transparent pricing that accounts for facility size, cleaning frequency and service scope",
            "No lock-in contracts — start with a trial period and transition to a regular schedule once you are completely satisfied with the service quality and team consistency, with no penalties for adjustments",
            "Fast response times thanks to our local team presence in Western Sydney, reducing delays for urgent cleaning requirements, additional spot cleans or emergency biohazard response situations",
            "Comprehensive service scope covering every zone from the main gym floor and equipment through to bathrooms, reception, staff rooms and car park entry points for total facility hygiene management"
        ],
        serviceAreas: ["Seven Hills", "Blacktown", "Toongabbie", "Pendle Hill", "Baulkham Hills", "Kings Park", "Wentworthville", "Girraween", "Winston Hills", "Prospect"],
        faqs: [
            {
                question: "How often should a gym in Seven Hills be cleaned?",
                answer: "We recommend a minimum of five professional cleans per week for high-traffic gyms in Seven Hills, with daily equipment sanitisation and locker room servicing included in each visit. For 24-hour gyms or those with 500+ weekly visits, daily cleaning is strongly recommended to maintain the hygiene standards that prevent illness transmission and member complaints. We can tailor the exact frequency to your membership volume, budget and facility layout."
            },
            {
                question: "Do you clean 24-hour gyms in Seven Hills?",
                answer: "Yes. We schedule cleaning teams during the quietest periods of your 24-hour operation, typically between 1am and 5am, ensuring a thorough, uninterrupted clean without interfering with members' access rights. All staff assigned to overnight shifts are police-checked, trained for unsupervised access and carry proper identification. We coordinate access credentials with your management team before commencement and maintain records of every entry and exit."
            },
            {
                question: "Can you clean a gym in Seven Hills that does not have a dedicated cleaning area?",
                answer: "Yes. Our teams are entirely self-sufficient and bring all necessary equipment to your Seven Hills gym, including industrial vacuums, commercial microfibre mop systems, chemical caddy systems, colour-coded cloths and complete waste disposal bags. We require only access to a water outlet and a standard power point. No storage space, cleaning cupboard or equipment is required on your side."
            },
            {
                question: "Do you sanitise boxing equipment and heavy bags?",
                answer: "Yes. Boxing gyms in Seven Hills require specialised cleaning of gloves, focus pads, heavy bags, speed bags, ring canvas and corner post padding. We apply appropriate antibacterial sprays and antimicrobial treatments to all contact surfaces using approved methods that do not damage the materials. We can also arrange heavy bag deodorising treatments on request for facilities experiencing persistent odour issues with their boxing equipment."
            },
            {
                question: "What is your pricing for gym cleaning in Seven Hills?",
                answer: "Pricing for gym cleaning in Seven Hills depends on your facility's size in square metres, the frequency of cleaning visits, the number and type of zones to be serviced, and the specific products or methods required. We do not publish standard rates because every gym is different. Call 1300 494 983 to arrange a free site assessment and we will deliver a detailed, itemised written quote within 24 hours of visiting your Seven Hills facility."
            }
        ],
        images: [
            { src: "/images/services/gym.webp", alt: "Professional gym cleaning services in Seven Hills NSW" },
            { src: "/images/services/gym.webp", alt: "Fitness centre cleaning Seven Hills Western Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Gym Cleaning Seven Hills"
                serviceDescription="Professional gym and fitness centre cleaning services in Seven Hills NSW, including equipment sanitisation, locker rooms, change rooms and all high-touch surfaces."
                serviceUrl="/gym-cleaning-seven-hills"
                serviceType="Gym & Fitness Centre Cleaning"
                price="$$"
                additionalServices={["Free Weight Area Cleaning", "Change Room Sanitisation", "Boxing Equipment Cleaning", "Cardio Machine Disinfection", "Studio Floor Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-darkblue mb-6">Related Gym & Cleaning Services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { href: '/gym-cleaning-sydney', label: 'Gym Cleaning Sydney' },
                            { href: '/gym-cleaning-services-sydney', label: 'Gym Cleaning Services Sydney' },
                            { href: '/commercial-cleaning', label: 'Commercial Cleaning Services' },
                            { href: '/gym-cleaning-norwest', label: 'Gym Cleaning Norwest' },
                            { href: '/gym-cleaning-wetherill-park', label: 'Gym Cleaning Wetherill Park' },
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
