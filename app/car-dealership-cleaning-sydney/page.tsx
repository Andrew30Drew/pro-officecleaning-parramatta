
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Car Dealership Cleaning Sydney | Showroom & Service Bay Cleaners | Pro Clean Corp',
    description: 'Specialist car dealership cleaning in Sydney. Showroom floor polishing, display vehicle area cleaning, service bay degreasing, customer lounges, and glass facade maintenance. Daily and weekly plans. Call 1300 494 983.',
    keywords: 'car dealership cleaning sydney, showroom cleaning sydney, car yard cleaning, service bay cleaning, automotive dealership cleaning, showroom floor polishing, customer lounge cleaning, glass facade cleaning dealership, daily dealership cleaning, car dealership hygiene',
    openGraph: {
        title: 'Car Dealership Cleaning Sydney | Showroom & Service Bay Cleaners | Pro Clean Corp',
        description: 'Elevate your dealership\'s presentation with specialist cleaning. Showroom floors, service bays, customer lounges, and glass facades maintained to perfection. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/car-dealership-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Car dealership showroom cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/car-dealership-cleaning-sydney' },
};

export default function CarDealershipCleaningPage() {
    const serviceInfo = {
        title: "Car Dealership Cleaning Sydney",
        description: "Pro Clean Corp provides specialist cleaning services for car dealerships across Sydney, maintaining the showroom presentation standards that drive customer confidence and vehicle sales. In the automotive retail industry, cleanliness is directly linked to brand perception — a gleaming showroom floor, spotless glass facades, immaculate display vehicles surrounds, and a welcoming customer lounge all communicate quality and attention to detail. Our experienced dealership cleaning teams deliver daily and weekly cleaning programs that cover every zone of your facility, from the high-gloss showroom floor to the degreased service bays, finance offices, parts counters, and outdoor display forecourts — ensuring your dealership is sales-ready from the moment the doors open.",
        benefits: [
            "Showroom Floor Excellence: High-gloss polishing and maintenance of showroom tiles and sealed concrete floors that showcase your display vehicles to maximum effect.",
            "Display Vehicle Area Cleaning: Meticulous cleaning of the immediate surrounds of display vehicles including plinths, barriers, and floor areas to highlight vehicle presentation.",
            "Service Bay & Workshop Degreasing: Heavy-duty floor scrubbing and degreasing of service bays, workshop floors, and pit areas to maintain a safe, professional workshop environment.",
            "Customer Lounge & Waiting Area: Thorough cleaning and sanitisation of customer waiting areas, coffee stations, children's areas, and restrooms to deliver a premium customer experience.",
            "Glass Facade & Showroom Windows: Regular streak-free cleaning of floor-to-ceiling showroom glass, entrance doors, and exterior glass facades that frame your vehicle displays.",
            "Daily & Weekly Maintenance Plans: Flexible daily opening clean or weekly deep-clean programs tailored to your trading hours, peak selling periods, and dealership-specific requirements."
        ],
        process: [
            "Dealership Walk-Through & Custom Scope: Our operations team conducts a thorough walk-through of your facility to scope all cleaning zones, identify high-priority areas, and design a cleaning schedule matched to your opening hours and sales program.",
            "Daily Opening Clean: Early morning pre-opening clean covering showroom floors, glass, customer areas, restrooms, reception, and finance desks — ensuring the dealership is immaculate when the first customer arrives.",
            "Workshop & Service Bay Program: Scheduled heavy-duty floor scrubbing, drain cleaning, and degreasing of all service and parts areas to maintain a professional, compliant workshop environment.",
            "Quality Inspection & Reporting: Each cleaning visit concludes with a supervisor walkthrough against a dealership-specific checklist, with any rectifications completed before sign-off and a service report provided to management."
        ],
        whyChooseUs: [
            "Automotive Retail Experience: Specific experience cleaning car dealerships across multiple manufacturer brands and dealer groups throughout the Sydney metropolitan area.",
            "Pre-Opening Scheduling: We work around your trading hours, arriving before opening to ensure your showroom is sales-ready without disrupting customer or staff activity.",
            "Floor Care Specialists: Expert knowledge of showroom floor types including porcelain tile, polished concrete, and vinyl, with appropriate cleaning and polishing methods for each.",
            "Glass & Facade Excellence: Purpose-built glass cleaning systems delivering streak-free results on large showroom glass panels and floor-to-ceiling windows.",
            "Flexible Frequency: Daily, weekly, fortnightly, or ad-hoc cleaning options with the ability to scale service intensity around new model launches and major sales events.",
            "Fully Insured: $20 million public liability insurance covering all dealership cleaning activities across showroom, workshop, and outdoor areas."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "Can you clean our showroom before we open every morning?",
                answer: "Yes. Our early morning pre-opening cleaning service is specifically designed for car dealerships. We arrive before your staff and customers, complete all showroom, glass, customer area, and restroom cleaning, and ensure your entire facility is sales-ready before doors open. We typically work between 5am and 8am to accommodate standard dealership opening hours."
            },
            {
                question: "Do you degrease and scrub service bay and workshop floors?",
                answer: "Yes. Service bay and workshop floor cleaning is a specialised component of our dealership service. We use heavy-duty floor scrubbers, industrial degreasers, and hot water pressure washing to remove oil, brake fluid, grease, and tyre residue from workshop floors, pits, and service lanes, maintaining a safe and professional workshop environment."
            },
            {
                question: "How do you maintain high-gloss showroom floors?",
                answer: "Our showroom floor maintenance program uses auto-scrubbers with appropriate pads matched to your specific floor surface, followed by buffing or burnishing to restore and maintain gloss levels. For polished concrete floors we use diamond-impregnated pads. For tiles we use appropriate buffing compounds. We avoid any products that could leave streaks, hazing, or residue visible in showroom lighting."
            },
            {
                question: "Can you scale your service for new model launch events?",
                answer: "Absolutely. We provide additional cleaning resources and can increase service frequency in the lead-up to new model launches, sales events, or manufacturer inspection visits. We can also provide on-call cleaning during event days to maintain showroom presentation throughout high-traffic periods."
            },
            {
                question: "Do you clean outdoor display forecourts and vehicle display pads?",
                answer: "Yes. Outdoor forecourt cleaning including sweeping, pressure washing of display pads and pathways, drainage clearing, and perimeter cleaning is available as part of our dealership maintenance program. We can also manage regular cleaning of outdoor signage, flags, and branded display structures."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Car dealership showroom cleaning Sydney - floor polishing and glass cleaning" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney automotive dealership and workshop cleaning" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Car Dealership Cleaning Sydney"
                serviceDescription="Specialist car dealership cleaning services in Sydney covering showroom floors, display vehicle areas, service bays, customer lounges, and glass facades with daily and weekly programs."
                serviceUrl="/car-dealership-cleaning-sydney"
                serviceType="Car Dealership Cleaning"
                price="$$"
                additionalServices={["Showroom Floor Polishing", "Service Bay Degreasing", "Customer Lounge Cleaning", "Glass Facade Cleaning", "Forecourt Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
