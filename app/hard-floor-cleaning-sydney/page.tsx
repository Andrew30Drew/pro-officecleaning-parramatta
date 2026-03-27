
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Hard Floor Cleaning Sydney | Floor Stripping Sealing & Polishing | Pro Clean Corp',
    description: 'Professional hard floor cleaning and maintenance in Sydney. Stripping and sealing, diamond burnishing, marble, vinyl, timber, and epoxy floor care. Call 1300 494 983.',
    keywords: 'hard floor cleaning sydney, floor stripping sealing sydney, vinyl floor polishing, marble floor cleaning sydney, terrazzo floor polishing, epoxy floor cleaning, diamond burnishing sydney, floor maintenance program, commercial floor cleaning sydney, anti-slip floor treatment',
    openGraph: {
        title: 'Hard Floor Cleaning Sydney | Floor Stripping Sealing & Polishing | Pro Clean Corp',
        description: 'Restore and maintain your commercial hard floors across Sydney. Stripping, sealing, diamond burnishing, and anti-slip treatments for all floor types. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/hard-floor-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Hard floor cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/hard-floor-cleaning-sydney' },
};

export default function HardFloorCleaningPage() {
    const serviceInfo = {
        title: "Hard Floor Cleaning Sydney",
        description: "Pro Clean Corp delivers professional hard floor cleaning and maintenance services across Sydney, applying the right technique and technology to each floor type to restore appearance, extend lifespan, and maintain the safety standards your premises require. Hard floors in commercial settings — including vinyl, marble, terrazzo, timber, epoxy, and polished concrete — suffer accelerating wear, scratching, and dulling from foot traffic, cleaning chemical buildup, and improper maintenance that shortens their service life and degrades the professional appearance of your facility. Our floor care specialists use industrial stripping, scrubbing, diamond burnishing, and sealing equipment matched to the specific floor substrate, delivering results that dramatically transform tired commercial floors and establish periodic maintenance programs that protect your flooring investment long-term.",
        benefits: [
            "Stripping & Sealing: Complete removal of old, yellowed, or damaged sealer coats from vinyl, linoleum, and safety flooring using alkaline stripping agents and auto-scrubbers, followed by application of multiple coats of premium polymer sealer for lasting protection.",
            "Diamond Burnishing: High-speed diamond burnishing pad systems that restore and maintain high-gloss finishes on sealed vinyl, polished concrete, and marble floors without chemical stripping — ideal for between-strip maintenance.",
            "Marble, Terrazzo & Natural Stone: Specialist wet scrubbing, crystallisation, and polishing techniques for marble, terrazzo, limestone, and travertine floors that restore clarity and lustre without damaging the stone surface.",
            "Vinyl, Timber & Epoxy: Appropriate cleaning and maintenance methods for commercial vinyl, timber, laminate, and epoxy resin floors — including the specific chemical compatibility requirements of each flooring system.",
            "Wet Scrubbing Machines: Industrial ride-on and walk-behind auto-scrubbers with electronically controlled scrubbing pressure and detergent dosing systems that deep-clean large commercial floor areas efficiently and consistently.",
            "Anti-Slip Treatments: Application of certified anti-slip treatments to polished, sealed, and natural stone floors that reduce the coefficient of friction and reduce slip risk in wet or high-traffic areas to meet AS 4586 standards."
        ],
        process: [
            "Floor Assessment & Specification: Our floor care technician assesses the floor type, current sealer condition, soiling level, and wear pattern to specify the correct stripping, cleaning, and finishing program for the substrate.",
            "Stripping & Gross Soil Removal: For floors requiring strip-and-seal, old sealer coats are completely removed using alkaline stripping agents, floor machines, and edge tools, followed by thorough rinsing and pH neutralisation.",
            "Deep Scrubbing & Treatment: The bare or scrubbed floor surface is deep-cleaned using auto-scrubbers with appropriate pad selection, with targeted treatment of heavy staining, joint lines, and edge areas.",
            "Sealing, Burnishing & Quality Sign-Off: Multiple coats of premium sealer are applied with sufficient dry time between coats, followed by burnishing to the specified gloss level. A final quality inspection is completed under raking light to ensure even finish before handover."
        ],
        whyChooseUs: [
            "Floor Type Specialists: Deep technical knowledge of vinyl, marble, terrazzo, timber, epoxy, polished concrete, and safety flooring maintenance requirements — not a one-size-fits-all approach.",
            "Industrial Equipment Fleet: Ride-on and walk-behind auto-scrubbers, high-speed burnishers, propane burnishers, and diamond polishing systems matched to the scale of your facility.",
            "Premium Polymer Sealers: We use high-quality commercial floor sealers and finishes that last longer, maintain gloss better, and resist yellowing compared to economy products.",
            "Periodic Maintenance Programs: Structured annual strip-and-seal programs with scheduled interim burnishing visits that maximise floor appearance and minimise total lifetime floor maintenance cost.",
            "After-Hours & Weekend Scheduling: All stripping, sealing, and burnishing work scheduled outside business hours to allow proper sealer dry times without disrupting operations.",
            "Fully Insured: $20 million public liability insurance covering all hard floor cleaning, stripping, sealing, and polishing activities across commercial premises."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "How often should commercial vinyl floors be stripped and resealed?",
                answer: "For high-traffic commercial environments such as schools, hospitals, and supermarkets, annual strip-and-seal is typically required to remove accumulated dirt and chemical buildup from old sealer coats and apply fresh protection. Medium-traffic offices and retail premises may achieve 18–24 months between full strip-and-seal cycles, supplemented by interim buffing and top-coat programs to extend sealer life."
            },
            {
                question: "Can you restore a dull or scratched marble floor?",
                answer: "Yes. We provide specialist marble restoration including wet scrubbing to remove surface contamination and old crystallisation product, followed by professional crystallisation or polishing with diamond pad systems to restore the natural clarity and gloss of marble. Scratches in marble can often be significantly reduced or eliminated through appropriate polishing pad sequences on our floor machines."
            },
            {
                question: "What is diamond burnishing and when is it recommended?",
                answer: "Diamond burnishing uses diamond-impregnated burnishing pads on high-speed floor machines to maintain and restore gloss on sealed floors without full chemical stripping. It is recommended as an interim maintenance procedure between annual strip-and-seal cycles for vinyl, polished concrete, and sealed terrazzo. Regular diamond burnishing maintains gloss levels, removes minor surface scratches, and significantly extends the interval between full floor refurbishment."
            },
            {
                question: "Can you apply anti-slip treatment to a polished floor without dulling it?",
                answer: "Yes. We use certified penetrating anti-slip treatments that react within the pores of the floor surface to increase friction without leaving any visible surface coating or affecting the floor's appearance. These treatments are effective on polished stone, sealed concrete, and glazed tiles, and can achieve AS 4586 classification P3 or higher depending on the starting coefficient of friction."
            },
            {
                question: "How long does floor sealing take to dry before the area can be used?",
                answer: "Individual sealer coats applied to vinyl and linoleum typically dry in 20–30 minutes between coats. A full strip-and-seal with 3–5 coats is best left overnight before foot traffic resumes. For burnished finishes, areas can usually be returned to use 2–4 hours after completion. We schedule all floor work outside business hours to allow appropriate curing time without operational disruption."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Hard floor cleaning Sydney - vinyl strip and seal and marble polishing" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney commercial floor stripping sealing and burnishing" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Hard Floor Cleaning Sydney"
                serviceDescription="Professional hard floor cleaning and maintenance services in Sydney. Floor stripping and sealing, diamond burnishing, marble and terrazzo polishing, and anti-slip treatments."
                serviceUrl="/hard-floor-cleaning-sydney"
                serviceType="Hard Floor Cleaning & Maintenance"
                price="$$"
                additionalServices={["Vinyl Strip and Seal", "Marble Floor Polishing", "Diamond Burnishing", "Anti-Slip Treatment", "Periodic Maintenance Programs"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
