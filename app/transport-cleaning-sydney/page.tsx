import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Transport Cleaning Sydney | Fleet & Vehicle Interior Cleaning | Pro Clean Corp',
    description: 'Professional transport and fleet cleaning in Sydney. Bus interior sanitisation, truck cab cleaning, fleet vehicle contracts, passenger area disinfection, and overnight depot cleaning.',
    keywords: 'transport cleaning sydney, fleet cleaning sydney, bus interior cleaning sydney, truck cab cleaning, vehicle interior cleaning sydney, passenger area disinfection, overnight depot cleaning, fleet vehicle contracts sydney, driver area hygiene',
    openGraph: {
        title: 'Transport Cleaning Sydney | Fleet & Vehicle Interior Cleaning | Pro Clean Corp',
        description: 'Transport and fleet cleaning across Sydney. Bus interior sanitisation, truck cab cleaning, fleet vehicle contracts, passenger area disinfection, and overnight depot cleaning.',
        url: 'https://www.procleancorp.com.au/transport-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/warehouse.webp', alt: 'Transport cleaning Sydney fleet vehicle interior bus depot' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/transport-cleaning-sydney' },
};

export default function TransportCleaningSydneyPage() {
    const serviceInfo = {
        title: "Transport Cleaning Sydney | Fleet & Vehicle Cleaning",
        description: "The transport industry demands cleaning that works around the clock to match operational schedules. Pro Clean Corp provides specialist transport and fleet cleaning services across Sydney for bus operators, logistics companies, trucking fleets, and transport interchanges. Our teams deliver bus interior sanitisation, truck cab cleaning, driver area hygiene, passenger area disinfection, and complete overnight depot cleaning — all timed to coincide with vehicle downtime so your fleet is ready for service at the start of every shift. We offer flexible fleet vehicle contracts with dedicated crews and consistent standards.",
        benefits: [
            "Bus interior sanitisation covering seats, handrails, floors, driver areas, and all high-touch passenger contact surfaces",
            "Truck cab cleaning for logistics and freight fleets including cab interiors, sleeper areas, and driver hygiene zones",
            "Fleet vehicle contracts with dedicated cleaning crews, consistent standards, and flexible rostering to match depot schedules",
            "Driver area hygiene maintenance keeps cab interiors clean and compliant with OH&S requirements for commercial vehicle operators",
            "Passenger area disinfection using hospital-grade disinfectants for public transport vehicles and shuttle buses",
            "Overnight depot cleaning for entire fleet facilities including workshop areas, driver rooms, amenities, and administrative offices"
        ],
        process: [
            "Fleet roster coordination with your depot manager — we receive the vehicle schedule and plan cleaning windows around operational downtime and shift changes",
            "Vehicle interior cleaning: sweep and mop floors, sanitise all seating surfaces, clean and disinfect handrails and high-touch points, vacuum cab interiors, wipe all hard surfaces",
            "Driver area and cab cleaning: full cab interior clean including dashboard, controls (exterior only), sleeper areas, storage, and floor mats",
            "Overnight depot facility cleaning: driver rooms, amenities, workshop administration areas, and any common spaces included in your service scope"
        ],
        whyChooseUs: [
            "15+ years commercial cleaning experience",
            "$20M public liability insurance",
            "Police-checked, WHS-trained staff",
            "Eco-friendly commercial-grade products",
            "Flexible scheduling 7 days a week",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "Do you clean bus interiors for Sydney bus operators?",
                answer: "Yes. Bus interior cleaning is one of our core transport cleaning services. We clean all passenger seating surfaces, floors, handrails, windows, driver cab areas, and all high-touch passenger contact points. Disinfection protocols can be applied using hospital-grade disinfectants appropriate for public transport vehicles."
            },
            {
                question: "Can you clean truck cabs and sleeper compartments for fleet operators?",
                answer: "Yes. We provide thorough truck cab cleaning including dashboard and control surrounds (exterior only), cab floors, seating, storage areas, and sleeper compartments. We understand that truck cabs are effectively a driver's mobile workplace and apply appropriate care to personal items and driver comfort areas."
            },
            {
                question: "Do you offer fleet cleaning contracts for logistics and transport companies in Sydney?",
                answer: "Yes. We offer ongoing fleet cleaning contracts tailored to your vehicle numbers, depot location, and operational schedule. Contract clients receive dedicated crews familiar with your vehicles and depot layout, consistent service standards, and flexible scheduling including overnight and early-morning cleaning windows."
            },
            {
                question: "Can you clean during overnight depot downtime?",
                answer: "Yes. Overnight cleaning is a standard option for transport operators who need vehicles ready for the first shift of the day. We work during your designated maintenance and downtime window, completing all vehicle and facility cleaning before vehicles need to be deployed. Our teams are self-managed and do not require supervision from your depot staff."
            },
            {
                question: "Are your transport cleaning staff trained in depot safety?",
                answer: "Yes. All Pro Clean Corp staff working in transport depots and vehicle maintenance facilities complete a site-specific induction and are trained in the safety requirements of working around heavy vehicles, including depot traffic management, high-visibility PPE requirements, and safe working zones around vehicles under maintenance."
            }
        ],
        images: [
            { src: "/images/services/warehouse.webp", alt: "Transport cleaning Sydney fleet vehicle interior bus depot" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp transport fleet cleaning Sydney" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Transport Cleaning Sydney"
                serviceDescription="Specialist transport and fleet cleaning in Sydney including bus interior sanitisation, truck cab cleaning, fleet vehicle contracts, passenger area disinfection, and overnight depot facility cleaning."
                serviceUrl="/transport-cleaning-sydney"
                serviceType="Transport & Fleet Cleaning"
                price="$$"
                additionalServices={["Bus Interior Cleaning", "Truck Cab Cleaning", "Fleet Vehicle Contracts", "Overnight Depot Cleaning", "Passenger Area Disinfection"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
