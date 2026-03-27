import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Gym Cleaning Kogarah NSW | Fitness Centre Cleaning | Pro Clean Corp',
    description: 'Expert gym cleaning in Kogarah NSW. Equipment sanitisation, locker rooms, change rooms & free weight areas deep cleaned. Serving St George & surrounds. Call 1300 494 983.',
    keywords: 'gym cleaning Kogarah, fitness centre cleaning Kogarah, health club cleaning Kogarah NSW, gym sanitisation Kogarah, locker room cleaning Kogarah, commercial gym cleaning St George',
    openGraph: {
        title: 'Gym Cleaning Kogarah NSW | Fitness Centre Cleaning | Pro Clean Corp',
        description: 'Professional gym & fitness centre cleaning in Kogarah. Equipment sanitisation, change rooms, locker rooms & high-touch surface disinfection. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/gym-cleaning-kogarah',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/gym.webp', alt: 'Gym cleaning services in Kogarah NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-kogarah' },
};

export default function GymCleaningKogarahPage() {
    const serviceInfo = {
        title: "Gym Cleaning Kogarah NSW",
        description: "Pro Clean Corp provides professional gym and fitness centre cleaning across Kogarah and the wider St George district. Our experienced cleaning teams target the highest-risk hygiene zones in any fitness facility — free weight areas, resistance machine handles, change rooms and communal showers — using hospital-grade disinfectants that kill 99.9% of bacteria and viruses on contact. Kogarah's growing fitness community deserves facilities that are genuinely clean, not just visually tidy. We eliminate odours at the source, prevent mould in wet areas and keep every surface in your gym ready for the next member, with flexible service windows that work around your peak hours.\n\nLocated at the heart of the St George district, Kogarah hosts a variety of fitness facilities serving a diverse, health-conscious community. Whether you operate a traditional weights gym, a CrossFit box, a boxing gym, a yoga studio, or a multi-format health club, every facility in Kogarah faces the same challenge: maintaining hygiene standards that protect members' health and build lasting trust. Our specialist teams arrive with all required equipment, apply systematic cleaning protocols to every zone, and deliver verifiable results on each visit. We work before opening, after closing or during quiet trading periods — whatever keeps your Kogarah gym running smoothly.",
        benefits: [
            "Complete sanitisation of all free weight areas including barbells, dumbbells, weight plates and storage racks, ensuring every surface members touch is disinfected with hospital-grade product on every visit",
            "Deep clean of change rooms and locker rooms covering every bench surface, locker handle, floor drainage area, ventilation grille and perimeter wall to eliminate bacteria and prevent mould accumulation",
            "Full cardio equipment disinfection covering every treadmill, stationary bike, rowing machine, stair stepper and elliptical — including touchscreens, handlebars, seat adjusters and all secondary contact points",
            "Toilet and shower block scrubbing with commercial anti-bacterial and mould-resistant treatment applied to all grout lines, tile surfaces, fixtures and drainage areas during every scheduled service",
            "High-touch point cleaning programme covering entry doors, reception counters, water fountains, EFTPOS terminals and every communal surface members contact on their way in and out of the facility",
            "Gym floor mopping and rubber mat deodorising using non-slip, equipment-safe solutions that protect the flooring investment while delivering genuine anti-bacterial hygiene results"
        ],
        process: [
            "Detailed walkthrough of your Kogarah gym to identify all high-contact zones, wet areas, surface types and peak usage patterns, documenting the scope in a written cleaning plan before service commences",
            "Zone-by-zone cleaning starting with dry exercise areas and reception, progressing systematically through change rooms to wet facilities, using colour-coded cloths to prevent cross-contamination throughout",
            "Application of hospital-grade disinfectants to all equipment surfaces, high-touch points and wet areas using correct dwell times to ensure maximum efficacy against bacteria, fungi and viruses",
            "Post-clean checklist sign-off by the team leader and optional ATP swab testing on request to provide objective surface hygiene verification and confirm compliance with commercial fitness facility standards"
        ],
        whyChooseUs: [
            "Proven track record cleaning gyms, fitness studios and health clubs across the St George and Sutherland Shire area, with long-term client relationships built on consistent, reliable service delivery",
            "Police-checked and fully insured cleaning professionals holding $20M public liability insurance, with fitness facility-specific hygiene training covering cross-contamination prevention and safe chemical handling",
            "Non-toxic, member-safe cleaning products appropriate for use around athletes, health-conscious gym-goers and children attending family fitness sessions, while still meeting commercial hygiene benchmarks",
            "Transparent pricing with no hidden charges — flat-rate schedules itemised by zone and service frequency, tailored precisely to your Kogarah gym's size, layout and membership volume",
            "Reliable, consistent team allocation so you always know exactly who is entering your facility after hours, building trust with your management team and maintaining member security standards",
            "Available seven days per week including public holidays, ensuring uninterrupted gym hygiene coverage regardless of your facility's trading hours or seasonal schedule variations"
        ],
        serviceAreas: ["Kogarah", "Rockdale", "Arncliffe", "Bexley", "Carlton", "Hurstville", "Sans Souci", "Ramsgate", "Brighton-Le-Sands", "Banksia"],
        faqs: [
            {
                question: "What areas of a gym do you clean in Kogarah?",
                answer: "We clean every area of your Kogarah gym including the main gym floor, free weight zone, cardio area, all resistance machines, change rooms, showers, toilets, sauna or steam room, reception desk and counter, staff areas, storage rooms, and all entry and exit points. Our scope is fully customisable — if your facility has a pool deck, sports court, group fitness studio or café area, we can include those zones within the same service agreement."
            },
            {
                question: "Can you start gym cleaning before 5am in Kogarah?",
                answer: "Yes. We regularly deploy cleaning teams from 3am onwards to ensure facilities are completely spotless before early morning peak hours at 5am or 5:30am. All staff assigned to early-morning shifts are background checked, trained for unsupervised access and carry all required credentials. We coordinate with your security system and building manager to ensure smooth, secure entry on every visit."
            },
            {
                question: "How do you handle odour control in change rooms?",
                answer: "We use enzymatic deodorising agents that break down odour-causing bacteria at a molecular level rather than simply masking smells with fragrance. This approach provides lasting freshness in locker rooms and shower areas rather than a temporary cover-up that fades within hours. In extreme cases we can deploy ozone treatment or UV-C sanitisation for a deeper reset of persistent odour problems in confined wet areas."
            },
            {
                question: "Do you bring your own equipment and products?",
                answer: "Yes. Our teams arrive fully equipped with industrial vacuum cleaners, commercial microfibre mop systems, colour-coded cloths to prevent cross-contamination, spray-and-wipe dispensing systems, and a complete range of cleaning and disinfecting products appropriate for every surface type in a fitness facility. You are not required to supply any cleaning materials, equipment or consumables — just access to water and a power outlet."
            },
            {
                question: "How do I get a quote for gym cleaning in Kogarah?",
                answer: "Call us on 1300 494 983 or submit an online enquiry through our website contact form. We will arrange a free, no-obligation site assessment at your Kogarah gym at a time that suits your schedule and provide a detailed written quote covering all zones, frequencies and pricing within 24 hours of the site visit."
            }
        ],
        images: [
            { src: "/images/services/gym.webp", alt: "Professional gym cleaning services in Kogarah NSW" },
            { src: "/images/services/gym.webp", alt: "Fitness centre sanitisation Kogarah St George" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Gym Cleaning Kogarah"
                serviceDescription="Professional gym and fitness centre cleaning services in Kogarah NSW, covering equipment sanitisation, locker rooms, change rooms and all high-touch surfaces."
                serviceUrl="/gym-cleaning-kogarah"
                serviceType="Gym & Fitness Centre Cleaning"
                price="$$"
                additionalServices={["Free Weight Area Cleaning", "Change Room Sanitisation", "Cardio Equipment Disinfection", "Shower Block Cleaning", "Rubber Floor Maintenance"]}
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
                            { href: '/strata-cleaning-arncliffe', label: 'Strata Cleaning Arncliffe' },
                            { href: '/office-cleaning-kogarah', label: 'Office Cleaning Kogarah' },
                            { href: '/strata-cleaning-sydney', label: 'Strata Cleaning Sydney' },
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
