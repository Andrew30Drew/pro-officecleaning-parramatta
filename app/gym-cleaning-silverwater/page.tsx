import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Gym Cleaning Silverwater NSW | Fitness Centre Cleaning | Pro Clean Corp',
    description: 'Professional gym cleaning in Silverwater NSW. Equipment sanitisation, locker rooms, change rooms & free weight areas. Serving Silverwater, Auburn, Parramatta & surrounds. Call 1300 494 983.',
    keywords: 'gym cleaning Silverwater, fitness centre cleaning Silverwater, gym cleaning Silverwater NSW, health club cleaning Silverwater, locker room cleaning Silverwater, commercial gym cleaning Auburn Parramatta',
    openGraph: {
        title: 'Gym Cleaning Silverwater NSW | Fitness Centre Cleaning | Pro Clean Corp',
        description: 'Expert gym & fitness centre cleaning in Silverwater. Equipment sanitisation, change rooms, locker rooms & high-touch surface disinfection. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/gym-cleaning-silverwater',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/gym.webp', alt: 'Gym cleaning services in Silverwater NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-silverwater' },
};

export default function GymCleaningSilverwaterPage() {
    const serviceInfo = {
        title: "Gym Cleaning Silverwater NSW",
        description: "Pro Clean Corp provides expert gym and fitness centre cleaning services across Silverwater and the surrounding industrial and residential suburbs of Western Sydney. Silverwater's location between Parramatta and Auburn makes it a natural hub for gyms serving a diverse, high-density membership base drawn from the surrounding residential and industrial workforce. These facilities see heavy foot traffic throughout the day and require rigorous, consistent hygiene practices to protect members' health.\n\nOur trained gym cleaning specialists address every high-risk zone — from the free weight floor to the furthest shower cubicle — using products that comply with Australian health facility hygiene standards. We operate around your schedule to avoid any disruption to your members, whether that means cleaning before a 5am opening, during a mid-afternoon quiet period, or after the facility closes in the evening. Our Silverwater and Western Sydney teams are locally based, familiar with the area's industrial park environments and corporate facilities, and equipped to handle any gym format from a large-format franchise to a small independent boxing or martial arts studio.",
        benefits: [
            "Equipment-focused cleaning programme covering all barbells, dumbbells, plate racks, cable machines, functional training rigs and cardio units, with hospital-grade disinfectant applied to every surface on every visit",
            "Locker room deep clean including full bench disinfection, locker exterior wiping, drainage area treatment, grout scrubbing and deodorising treatment applied to eliminate odour-causing bacteria in enclosed spaces",
            "Shower block cleaning with commercial descaling agents, grout scrubbing tools and anti-mould product applied to all tile surfaces, grout lines, drainage grates and fixtures during every scheduled service",
            "Rubber and vinyl gym floor cleaning using slip-resistant, equipment-safe solutions that provide genuine anti-bacterial hygiene results without leaving any residue that could create a slip hazard for barefoot users",
            "Toilet and amenities servicing including restocking of soap dispensers, paper towels, toilet paper and sanitary supplies, combined with full surface disinfection and porcelain cleaning on every visit",
            "High-touch surface programme covering all door handles, light switches, tap fixtures, entry scanners, equipment adjustment knobs and locker combination dials across the entire facility"
        ],
        process: [
            "Walk-through inspection of your Silverwater gym to document all areas, surface types, equipment inventory and access requirements before developing a written service proposal and tailored cleaning schedule",
            "Tailored cleaning schedule agreed with your facility manager, covering specific days, times and full service scope including zones, products, frequencies and any special requirements for particular surface types or equipment",
            "Professional clean executed zone by zone with dedicated equipment sets and colour-coded cloths assigned to specific areas, preventing cross-contamination between wet and dry zones throughout the facility",
            "Monthly reporting and account review with your dedicated account manager to confirm quality standards are being maintained, address any concerns and adjust the service programme as your facility evolves"
        ],
        whyChooseUs: [
            "Local knowledge of Silverwater, Auburn and Parramatta's gym and fitness facility landscape, with experience cleaning a broad range of facility types from large franchise operations to compact boutique studios",
            "Police-checked, uniformed and insured staff trained in commercial fitness facility hygiene standards, holding $20M public liability insurance and trained in correct chemical handling and surface-specific protocols",
            "Competitive rates for gyms of all sizes with transparent, itemised pricing and absolutely no hidden fees — every cost associated with your service is clearly listed in the written quote before commencement",
            "Same-day emergency cleaning available for spills, biohazard incidents, illness outbreaks or unscheduled events requiring immediate professional intervention before your next regular scheduled visit",
            "Environmentally responsible product choices available including certified biodegradable, fragrance-free and low-VOC options for facilities with members who have chemical sensitivities or environmental preferences",
            "Reliable, consistent team allocation to maintain member trust and facility security standards, ensuring the same vetted, familiar cleaning professionals attend your Silverwater gym on every scheduled visit"
        ],
        serviceAreas: ["Silverwater", "Auburn", "Granville", "Clyde", "Rosehill", "Parramatta", "Homebush", "Newington", "Lidcombe", "Berala"],
        faqs: [
            {
                question: "What types of gyms do you clean in Silverwater?",
                answer: "We clean all types of fitness facilities in Silverwater and the surrounding area including traditional weights gyms and strength training facilities, CrossFit boxes and functional fitness studios, martial arts and boxing gyms, yoga and Pilates studios, corporate fitness centres within office buildings, and large multi-facility health clubs with pools, saunas and group fitness studios. Our protocols adapt to the specific surfaces, equipment and hygiene requirements of each facility type."
            },
            {
                question: "Can you clean our Silverwater gym before 5am?",
                answer: "Yes. Our Silverwater cleaning teams are available from 3am onwards and can deliver a comprehensive full gym clean before your 5am or 5:30am early-bird opening. All staff assigned to early-morning shifts are thoroughly vetted with police checks, trained for unsupervised after-hours access, and carry proper identification. We coordinate all access credentials, key codes and security requirements with your management team before the first visit."
            },
            {
                question: "How do you disinfect gym mats in Silverwater facilities?",
                answer: "We apply a pH-neutral, anti-bacterial mat cleaner using professional spray-and-wipe methodology with clean microfibre cloths changed between mats to prevent cross-contamination. For heavily used mats with persistent odour or visible contamination, we offer a steam cleaning option that sanitises to a deep level without chemicals and is safe for all common mat materials including PVC, foam, NBR and TPE compounds."
            },
            {
                question: "Do you offer weekly or fortnightly gym cleaning in Silverwater?",
                answer: "Yes. We offer daily, three-times-per-week, weekly and fortnightly cleaning schedules depending on your facility's size, membership volume and hygiene requirements. For gyms with lower membership volumes or strong in-house maintenance between visits, a weekly professional deep clean complemented by daily in-house equipment wipe-downs can be a cost-effective and hygienically sufficient arrangement."
            },
            {
                question: "Is there a minimum contract length for gym cleaning in Silverwater?",
                answer: "We offer rolling monthly agreements with no long-term lock-in period required. We are confident in our service quality and do not need to hold clients to extended contracts to maintain the relationship. Most of our Silverwater gym clients transition naturally to multi-year arrangements because they are satisfied with the results and the team. Call 1300 494 983 to discuss the arrangement that best suits your facility."
            }
        ],
        images: [
            { src: "/images/services/gym.webp", alt: "Professional gym cleaning services in Silverwater NSW" },
            { src: "/images/services/gym.webp", alt: "Fitness centre cleaning Silverwater Auburn Western Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Gym Cleaning Silverwater"
                serviceDescription="Professional gym and fitness centre cleaning services in Silverwater NSW, covering equipment sanitisation, locker rooms, change rooms and all high-touch surfaces."
                serviceUrl="/gym-cleaning-silverwater"
                serviceType="Gym & Fitness Centre Cleaning"
                price="$$"
                additionalServices={["Locker Room Cleaning", "Mat & Studio Floor Sanitisation", "Equipment Disinfection", "Shower Block Deep Clean", "Toilet & Amenities Servicing"]}
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
                            { href: '/office-cleaning-silverwater', label: 'Office Cleaning Silverwater' },
                            { href: '/gym-cleaning-seven-hills', label: 'Gym Cleaning Seven Hills' },
                            { href: '/gym-cleaning-wetherill-park', label: 'Gym Cleaning Wetherill Park' },
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
