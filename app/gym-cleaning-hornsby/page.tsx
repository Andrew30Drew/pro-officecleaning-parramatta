import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Gym Cleaning Hornsby NSW | Fitness Centre & Health Club Cleaning | Pro Clean Corp',
    description: 'Professional gym cleaning in Hornsby NSW. We sanitise equipment, locker rooms, change rooms & high-touch surfaces. Trusted by fitness centres across Hornsby. Call 1300 494 983.',
    keywords: 'gym cleaning Hornsby, fitness centre cleaning Hornsby, health club cleaning Hornsby NSW, gym sanitisation Hornsby, locker room cleaning Hornsby, commercial gym cleaning',
    openGraph: {
        title: 'Gym Cleaning Hornsby NSW | Fitness Centre & Health Club Cleaning | Pro Clean Corp',
        description: 'Expert gym & fitness centre cleaning in Hornsby. Equipment sanitisation, change rooms, locker rooms & high-touch surface disinfection. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/gym-cleaning-hornsby',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/gym.webp', alt: 'Gym cleaning services in Hornsby NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-hornsby' },
};

export default function GymCleaningHornsbyPage() {
    const serviceInfo = {
        title: "Gym Cleaning Hornsby NSW",
        description: "Pro Clean Corp delivers specialised gym and fitness centre cleaning services throughout Hornsby and the Upper North Shore. Our trained technicians understand the unique hygiene demands of high-traffic fitness environments, targeting bacteria hotspots on free weights, cardio machines, resistance equipment and locker rooms. We use hospital-grade disinfectants approved for fitness facilities to eliminate sweat, bacteria and odours from every surface. From 24-hour gyms to boutique studios and health clubs in Hornsby, we provide flexible scheduling — including early morning, evening and weekend cleans — to keep your facility spotless without disrupting members.\n\nHornsby's fitness scene has expanded significantly in recent years, with a diverse range of facilities serving the suburb's growing residential population. Whether you operate a large-format franchise gym near Hornsby Westfield, an independent health club, a CrossFit box, a martial arts studio, or a boutique Pilates and yoga studio, your members expect rigorous, consistent hygiene standards. A single lapse in cleanliness can generate negative reviews and lost memberships. Our Hornsby gym cleaning teams arrive fully equipped — industrial vacuums, microfibre systems, colour-coded cloths, ATP testing kits — and work systematically through every zone to deliver verifiable hygiene results on every visit.",
        benefits: [
            "Hospital-grade disinfection of all gym equipment including free weights, barbells, kettlebells, benches and every piece of cardio machinery across your Hornsby facility",
            "Thorough locker room and change room cleaning with individual bench sanitisation, grout scrubbing, floor drainage treatment and full deodorising treatment applied to eliminate odour at the source",
            "High-touch surface sanitisation programme covering door handles, push plates, lockers, tap fixtures, entry handrails, and all EFTPOS and member check-in terminals",
            "Shower cubicle deep cleaning with commercial descaling, grout scrubbing and proven mould prevention treatment applied to all grout lines and tile surfaces in wet areas",
            "Cardio machine wipe-down including touchscreens, handlebars, seat adjustment levers, footrests and all secondary contact points on every piece of equipment",
            "Flexible scheduling windows available before opening, after closing or between morning and evening peak hours to deliver a spotless facility without any disruption to members"
        ],
        process: [
            "Initial facility audit to map all high-risk zones, equipment density and peak foot-traffic patterns across your Hornsby gym, identifying areas that need the most frequent attention and documenting all surface types and access requirements",
            "Systematic equipment sanitisation using EPA-registered and TGA-approved disinfectants rated for fitness facility surfaces, applied with colour-coded microfibre cloths to prevent cross-contamination between zones",
            "Deep clean of all wet areas including showers, toilets, change rooms and sauna spaces, with anti-mould and anti-bacterial treatment applied to every grout line, tile surface and fixture to prevent regrowth",
            "Final quality inspection with ATP surface testing available on request to provide objective, science-based verification that hygiene levels meet commercial fitness facility standards"
        ],
        whyChooseUs: [
            "Specialist gym cleaning experience with an established track record serving fitness centres, health clubs and boutique studios throughout the Hornsby and Upper North Shore region",
            "Fully insured with $20M public liability coverage and police-checked cleaning technicians who have received specific training in fitness facility hygiene protocols and cross-contamination prevention",
            "Biodegradable, member-safe cleaning products selected to be non-damaging to rubber flooring, vinyl upholstery, chrome fixtures, digital screens and all common gym surface materials",
            "Flexible contract structures available — daily, three-times-weekly, weekly, fortnightly or fully custom frequency schedules — designed to precisely match your gym's operating hours and membership volume",
            "Dedicated account manager providing consistent service oversight, rapid response to any hygiene concerns, and proactive communication about upcoming schedule adjustments or additional services",
            "Fully compliant with SafeWork NSW workplace hygiene standards and aligned with Australian fitness industry hygiene guidelines as published by Fitness Australia"
        ],
        serviceAreas: ["Hornsby", "Waitara", "Asquith", "Berowra", "Pennant Hills", "Wahroonga", "Turramurra", "Mount Colah", "Cheltenham", "Normanhurst"],
        faqs: [
            {
                question: "How often should a gym in Hornsby be professionally cleaned?",
                answer: "High-traffic gyms in Hornsby should receive professional cleaning at least 5–7 days per week, with daily equipment wipe-downs and locker room sanitisation included. For 24-hour gyms or those with 300+ daily members, we recommend a full clean every single day plus an additional mid-shift tidy during peak hours. We tailor the precise frequency to your membership numbers, opening hours and facility size to ensure optimal hygiene outcomes within your budget."
            },
            {
                question: "Do you clean gyms that are open 24 hours in Hornsby?",
                answer: "Yes. We work around the clock and can schedule dedicated cleaning teams during your quietest periods — typically between 2am and 5am — to ensure zero disruption to 24-hour gym members in Hornsby. Our after-hours staff are fully vetted, police-checked and trained for unsupervised access. We coordinate directly with your facility manager to obtain any required key codes or access credentials before commencement."
            },
            {
                question: "What products do you use on rubber gym flooring?",
                answer: "We use pH-neutral, rubber-safe disinfectants that effectively sanitise without degrading the flooring material over time. Our products are specifically formulated to be free from bleach, aggressive solvents and acidic compounds that can cause cracking, surface brittleness or discolouration on rubber gym floors. We apply them with clean mop heads and check that all residue is thoroughly removed to prevent any slipping hazard for members."
            },
            {
                question: "Can you handle locker room and shower cleaning as part of the same service?",
                answer: "Absolutely. Our gym cleaning packages for Hornsby facilities include comprehensive wet area servicing — showers, toilets, change rooms, sauna benches and all associated fixtures — as a standard inclusion within every scheduled clean. We treat locker rooms with enzymatic deodorising agents that break down odour-causing bacteria at a molecular level rather than simply masking smells, providing genuine lasting freshness rather than a temporary fragrance cover-up."
            },
            {
                question: "Are your cleaners trained specifically for gym environments?",
                answer: "Yes. All our Hornsby technicians receive specific training in fitness facility hygiene, covering correct dilution rates for disinfectants, safe product handling around electronic equipment and rubber surfaces, and strict protocols to avoid cross-contamination between wet zones such as showers and dry zones such as the gym floor. They are also trained to identify and report maintenance issues such as damaged equipment, plumbing drips or mould growth that could affect member safety."
            }
        ],
        images: [
            { src: "/images/services/gym.webp", alt: "Professional gym cleaning services in Hornsby NSW" },
            { src: "/images/services/gym.webp", alt: "Fitness centre equipment sanitisation Hornsby" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Gym Cleaning Hornsby"
                serviceDescription="Professional gym and fitness centre cleaning services in Hornsby NSW, including equipment sanitisation, locker room cleaning and high-touch surface disinfection."
                serviceUrl="/gym-cleaning-hornsby"
                serviceType="Gym & Fitness Centre Cleaning"
                price="$$"
                additionalServices={["Locker Room Cleaning", "Change Room Sanitisation", "Equipment Disinfection", "Rubber Floor Cleaning", "Sauna & Steam Room Cleaning"]}
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
                            { href: '/strata-cleaning-hornsby', label: 'Strata Cleaning Hornsby' },
                            { href: '/gym-cleaning-norwest', label: 'Gym Cleaning Norwest' },
                            { href: '/gym-cleaning-seven-hills', label: 'Gym Cleaning Seven Hills' },
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
