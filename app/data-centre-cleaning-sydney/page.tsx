import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Data Centre Cleaning Sydney | Server Room & IT Facility Cleaning | Pro Clean Corp',
    description: 'Pro Clean Corp provides anti-static data centre cleaning across Sydney. Raised floor cleaning, server rack exterior, HEPA vacuuming, subfloor particle control & cleanroom-standard results.',
    keywords: 'data centre cleaning sydney, server room cleaning, it facility cleaning sydney, anti-static cleaning, raised floor cleaning, hepa vacuum data centre, subfloor cleaning sydney, server rack cleaning, cleanroom cleaning sydney',
    openGraph: {
        title: 'Data Centre Cleaning Sydney | Server Room & IT Facility Cleaning | Pro Clean Corp',
        description: 'Anti-static data centre and server room cleaning across Sydney. Raised floors, server racks, HEPA vacuuming, subfloor particle control. Uptime guaranteed.',
        url: 'https://www.procleancorp.com.au/data-centre-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/office.webp', alt: 'Data centre cleaning Sydney server room' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/data-centre-cleaning-sydney' },
};

export default function DataCentreCleaningPage() {
    const serviceInfo = {
        title: "Data Centre Cleaning Sydney",
        description: "In a data centre, airborne dust particles are a silent threat to equipment uptime and operational reliability. Pro Clean Corp provides specialist data centre and server room cleaning services across Sydney, using anti-static protocols, HEPA-filtered equipment, and cleanroom-standard techniques to remove microscopic contamination without disrupting live systems. We clean raised floors, server rack exteriors, cable trays, subfloor plenums, and surrounding environments to ISO 14644-1 Class 8 standard or better.",
        benefits: [
            "Anti-Static Protocols: All equipment and techniques are ESD-safe to protect sensitive electronics.",
            "Raised Floor Cleaning: Removal of particulate from raised floor tiles and pedestals.",
            "Server Rack Exterior: Careful cleaning of cabinet surfaces, doors, and cable management.",
            "HEPA Vacuuming: HEPA-filtered vacuums capture particles down to 0.3 microns without recirculation.",
            "Subfloor Particle Control: Plenum cleaning to remove debris blocking critical airflow.",
            "Uptime Guaranteed: All work performed without touching active hardware or disrupting operations.",
            "Cleanroom-Standard Results: ISO 14644-1 Class 8 compliance or better on every engagement."
        ],
        process: [
            "Particulate assessment and contamination source mapping before commencing any cleaning work.",
            "Full ESD precaution setup including anti-static wrist straps, mats, and grounded equipment.",
            "HEPA vacuum and lint-free microfibre cleaning of all surfaces, racks, cable trays, and raised floors.",
            "Post-clean particulate count report provided for your compliance and maintenance records."
        ],
        whyChooseUs: [
            "15+ years experience",
            "$20M public liability",
            "Police-checked staff",
            "Eco-friendly products",
            "7-day flexible scheduling",
            "100% satisfaction guarantee"
        ],
        serviceAreas: [
            "Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith",
            "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"
        ],
        faqs: [
            { question: "Do you clean under the raised floor?", answer: "Yes, subfloor plenum cleaning is a core service. We carefully remove floor tiles, HEPA vacuum the plenum and pedestals, and replace tiles correctly to restore airflow efficiency." },
            { question: "What chemicals do you use in data centres?", answer: "We use only specialist anti-static, non-ammoniated, non-corrosive cleaners specifically formulated for use on electronics and data centre surfaces." },
            { question: "Is your equipment HEPA filtered?", answer: "Absolutely. We exclusively use HEPA-filtered vacuums rated to capture 99.97% of particles at 0.3 microns, ensuring captured contaminants are not recirculated into the environment." },
            { question: "Can you clean live server racks?", answer: "Yes, our technicians are trained to clean the exterior surfaces of live racks carefully without disturbing cables, airflow baffles, or active equipment." },
            { question: "How often should a data centre be cleaned?", answer: "ISO standards recommend quarterly or bi-annual deep cleaning for most data centres. High-density or older facilities may benefit from more frequent programmes." }
        ],
        images: [
            { src: "/images/services/office.webp", alt: "Data centre cleaning Sydney server room" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Data Centre Cleaning Sydney"
                serviceDescription="Anti-static data centre and server room cleaning across Sydney including raised floor cleaning, server rack exterior, HEPA vacuuming, subfloor particle control, and cleanroom-standard results."
                serviceUrl="/data-centre-cleaning-sydney"
                serviceType="Data Centre Cleaning"
                price="$$"
                additionalServices={["Raised Floor Cleaning", "Server Rack Cleaning", "Subfloor Plenum Cleaning", "HEPA Vacuuming", "Particulate Testing"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
