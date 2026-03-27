
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Car Park Cleaning Sydney | Parking Station & Multi-Deck Cleaning | Pro Clean Corp',
    description: 'Professional car park cleaning in Sydney. Industrial floor scrubbing, oil stain removal, stairwell cleaning, and monthly sweeping programs for basement and multi-deck car parks. Call 1300 494 983.',
    keywords: 'car park cleaning sydney, parking station cleaning, multi-deck car park cleaning, basement car park cleaning, industrial floor scrubbing sydney, oil stain removal car park, car park sweeping, stairwell cleaning sydney, commercial car park maintenance, line marking preservation',
    openGraph: {
        title: 'Car Park Cleaning Sydney | Parking Station & Multi-Deck Cleaning | Pro Clean Corp',
        description: 'Industrial-grade car park cleaning for basement, multi-deck, and open-air parking across Sydney. Oil stain removal, floor scrubbing, and scheduled maintenance programs. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/car-park-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/warehouse.webp', alt: 'Car park cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/car-park-cleaning-sydney' },
};

export default function CarParkCleaningPage() {
    const serviceInfo = {
        title: "Car Park Cleaning Sydney",
        description: "Pro Clean Corp delivers industrial-grade car park cleaning services across Sydney for commercial buildings, shopping centres, strata complexes, hospitals, and universities. A clean, well-maintained car park is the first and last impression your visitors receive, and accumulated tyre dust, oil spills, litter, and grime create both safety hazards and a poor brand image. Our heavy-duty ride-on scrubbers, industrial sweepers, and high-pressure washing systems clean concrete floors at scale, removing entrenched contamination that manual methods cannot address. We design customised monthly maintenance programs that keep your car park presentation and safety standards consistently high throughout the year.",
        benefits: [
            "Concrete Floor Scrubbing Machines: Industrial ride-on and walk-behind floor scrubbers clean thousands of square metres of car park surface efficiently, removing tyre deposits, brake dust, and ground-in grime from concrete floors.",
            "Oil & Fuel Stain Removal: Specialist degreasing agents and hot-water pressure washing treat and lift oil, hydraulic fluid, and fuel stains from concrete surfaces, improving safety and appearance.",
            "Stairwell Cleaning: Comprehensive cleaning of all car park stairwells including treads, landings, handrails, walls, and ceilings to maintain safety, eliminate graffiti, and improve stairwell lighting effectiveness.",
            "Ticketing Area & Boom Gate Sanitisation: Thorough cleaning and disinfection of pay station surfaces, boom gate housings, intercom panels, and customer-contact touch points in entry and exit areas.",
            "Line Marking Preservation: Careful cleaning practices that protect painted bay markings, directional arrows, and safety line markings, preserving visibility and compliance with AS/NZS parking standards.",
            "Monthly Sweeping Programs: Scheduled monthly or fortnightly maintenance sweeping and scrubbing programs that prevent contamination buildup, maintain consistent presentation, and reduce long-term structural damage to concrete."
        ],
        process: [
            "Car Park Assessment & Program Design: We conduct a thorough assessment of your car park — level by level — noting floor condition, drainage points, staining patterns, and access requirements to design an optimal cleaning program.",
            "Industrial Sweeping & Litter Collection: Ride-on sweepers remove loose debris, tyre dust, leaves, and litter from all vehicle and pedestrian areas before wet cleaning commences, maximising scrubber efficiency.",
            "Floor Scrubbing & Degreasing: Industrial auto-scrubbers with appropriate scrubbing pads systematically clean all concrete floor areas, with targeted degreasing treatment applied to oil-stained zones.",
            "Stairwells, Entry Areas & Sign-Off: Manual deep cleaning of all stairwells, lift lobbies, pedestrian pathways, and ticketing areas, followed by supervisor inspection and a completion report provided to building management."
        ],
        whyChooseUs: [
            "Industrial Equipment Fleet: We operate a fleet of ride-on scrubbers, industrial sweepers, and high-pressure washers matched to the scale of commercial and multi-level car park cleaning.",
            "Multi-Deck & Basement Experience: Our machines and teams are configured for low-clearance basement environments and multi-deck parking structures including ramp access and split-level layouts.",
            "Oil & Contamination Specialists: Specialist knowledge of concrete stain chemistry with targeted degreasing treatment for oil, fuel, hydraulic fluid, and tyre deposit contamination.",
            "Scheduled Maintenance Programs: Structured monthly or fortnightly cleaning programs with consistent teams, scheduled completion, and service reports provided to strata managers and building facilities teams.",
            "Safety-First Approach: Full wet floor signage, traffic management procedures, and WHS-compliant cleaning protocols for working in live car park environments with vehicle and pedestrian traffic.",
            "Fully Insured: $20 million public liability insurance covering all car park cleaning activities across basement, multi-deck, and open-air parking facilities."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "How often should a commercial car park be professionally cleaned?",
                answer: "For most commercial and strata car parks, we recommend monthly floor scrubbing with more frequent sweeping passes in between. High-traffic shopping centre car parks may benefit from weekly scrubbing. We design a program based on vehicle volumes, floor area, and your budget to maintain consistent standards."
            },
            {
                question: "Can you remove deep-set oil stains from concrete car park floors?",
                answer: "Yes. We apply specialist concrete degreasers that break down the molecular bond between oil and concrete, followed by hot water pressure washing to lift the stain. The success rate depends on stain age and concrete porosity — fresh stains are almost fully removable while very old, deeply set stains may be lightened significantly but not completely eliminated."
            },
            {
                question: "Do your machines fit in low-clearance basement car parks?",
                answer: "Yes. We operate compact ride-on and walk-behind scrubbers with low profiles specifically selected for basement car park environments with standard 2.1 to 2.4 metre clearance. Our machines navigate standard ramp gradients and tight column layouts typical of Sydney basement car parks."
            },
            {
                question: "Do you clean stairwells and pedestrian areas as part of the car park service?",
                answer: "Yes. Stairwell cleaning — including treads, landings, handrails, walls, and ceilings — is a standard component of our comprehensive car park cleaning service. We also clean lift lobbies, pedestrian pathways, ticketing areas, and boom gate surrounds as part of our full program."
            },
            {
                question: "Will your cleaning damage the painted line markings on the car park floor?",
                answer: "No. Our operators are trained to use appropriate scrubbing pressures and pad types that clean the concrete surface effectively without abrading painted line markings, bay numbers, or directional arrows. We protect your line marking investment with careful, professional cleaning techniques."
            }
        ],
        images: [
            { src: "/images/services/warehouse.webp", alt: "Car park cleaning Sydney - industrial floor scrubbing" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney parking station and multi-deck car park cleaning" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Car Park Cleaning Sydney"
                serviceDescription="Industrial car park cleaning services in Sydney for basement, multi-deck, and open-air car parks. Floor scrubbing, oil stain removal, stairwell cleaning, and monthly maintenance programs."
                serviceUrl="/car-park-cleaning-sydney"
                serviceType="Car Park Cleaning"
                price="$$"
                additionalServices={["Industrial Floor Scrubbing", "Oil Stain Removal", "Stairwell Cleaning", "Pressure Washing", "Monthly Maintenance Programs"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
