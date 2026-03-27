
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Cinema Cleaning Sydney | Movie Theatre Cleaning Services | Pro Clean Corp',
    description: 'Specialist cinema and movie theatre cleaning in Sydney. Between-session turnover cleaning, seat sanitisation, foyer and concession cleaning, nightly deep clean. Call 1300 494 983.',
    keywords: 'cinema cleaning sydney, movie theatre cleaning, cinema seat cleaning, theatre cleaning services, auditorium cleaning sydney, cinema carpet cleaning, popcorn removal cinema, foyer cleaning sydney, cinema hygiene services, entertainment venue cleaning',
    openGraph: {
        title: 'Cinema Cleaning Sydney | Movie Theatre Cleaning Services | Pro Clean Corp',
        description: 'Fast, thorough cinema and movie theatre cleaning across Sydney. Rapid between-session turnover, seat sanitisation, and nightly deep cleans. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/cinema-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Cinema cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/cinema-cleaning-sydney' },
};

export default function CinemaCleaningPage() {
    const serviceInfo = {
        title: "Cinema Cleaning Sydney",
        description: "Pro Clean Corp delivers specialist cinema and movie theatre cleaning services across Sydney, providing multiplex operators and independent cinema venues with the fast, reliable cleaning support the entertainment industry demands. Cinema cleaning is uniquely challenging — rapid between-session turnover windows of as little as 20 minutes leave no margin for error, while nightly deep cleans must address heavy food and beverage soiling, sticky flooring, and high-touch surface contamination accumulated across dozens of daily screenings. Our experienced cinema cleaning teams are trained in rapid deployment procedures, work efficiently under tight scheduling constraints, and deliver the spotless, welcoming environment that cinema patrons expect with every visit.",
        benefits: [
            "Between-Session Rapid Turnover: Dedicated rapid-response teams trained to clean entire auditoriums within the tight 15–25 minute window between film sessions, collecting all waste and resetting the space for the next audience.",
            "Popcorn & Drink Spill Removal: Thorough removal of popcorn, confectionery, ice cream, and beverage spills from seating, carpets, cup holders, and floor areas using extraction equipment and spot treatment products.",
            "Seat & Armrest Sanitisation: Complete disinfection of all seat surfaces, armrests, tray tables, and cup holders using TGA-approved disinfectants that eliminate pathogens without damaging upholstery materials.",
            "Foyer & Concession Counter Cleaning: Thorough cleaning and sanitisation of foyer floors, concession counter surfaces, self-serve stations, display cases, and customer queue areas to maintain food safety standards.",
            "Projection Room & Technical Area Cleaning: Careful, non-intrusive cleaning of projection rooms, sound booths, and technical areas by staff trained in equipment sensitivity and restricted access procedures.",
            "Nightly Deep Clean: Comprehensive overnight deep clean after final session closing, covering carpet steam extraction, chewing gum removal, thorough seat deep clean, restrooms, and all back-of-house areas."
        ],
        process: [
            "Session Schedule Integration: We integrate our cleaning rosters directly with your cinema's session schedule, ensuring rapid-response teams are positioned and ready to deploy the moment each session ends.",
            "Between-Session Turnover Clean: Rapid systematic collection of all food, beverage, and packaging waste from rows, cup holders, and aisles, followed by quick wipe-down of armrests and floor spot treatment.",
            "Nightly Deep Clean Program: After final session, comprehensive deep clean covering steam extraction of carpet aisles and seat bases, seat sanitisation, gum removal from floors, and full restroom service.",
            "Quality Inspection & Reporting: Supervisor walkthrough of all auditoriums and public areas against a cinema-specific checklist, with any rectifications completed before opening and a service report submitted to venue management."
        ],
        whyChooseUs: [
            "Entertainment Venue Specialists: Proven experience cleaning multiplex cinemas and independent theatres with a deep understanding of session scheduling and the unique cleaning demands of entertainment venues.",
            "Rapid Deployment Teams: Trained teams who work efficiently in tight timeframes, executing complete auditorium turnovers within industry-standard between-session windows.",
            "Food Spill & Carpet Expertise: Expert knowledge of food and beverage stain treatment and commercial carpet extraction, critical in high-soiling cinema environments.",
            "Flexible Rostering: We scale team size to match blockbuster release weekends, school holidays, and peak trading periods, ensuring consistent cleanliness standards regardless of patronage volumes.",
            "After-Hours Deep Clean: Our nightly deep clean teams work after final session close, completing all heavy cleaning without any impact on cinema operations or patron experience.",
            "Fully Insured: $20 million public liability insurance covering all cinema cleaning activities across auditoriums, foyers, concession areas, and back-of-house."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "Can you clean auditoriums between every session throughout the day?",
                answer: "Yes. We provide dedicated between-session rapid turnover teams trained to fully clean auditoriums within standard 15–25 minute session intervals. Teams are rostered on-site throughout your trading hours, repositioning between screens as sessions conclude across the multiplex."
            },
            {
                question: "How do you clean cinema seats and upholstery?",
                answer: "Between sessions we wipe down armrests, cup holders, and tray surfaces with TGA-approved disinfectant wipes. As part of our nightly deep clean, seat surfaces and cushions are extracted using upholstery cleaning attachments, and any fabric staining is spot-treated with appropriate cleaning agents. Stubborn gum deposits are removed using specialist hot water techniques."
            },
            {
                question: "Do you clean projection rooms and technical areas?",
                answer: "Yes. We provide careful, non-intrusive cleaning of projection rooms and technical areas using approaches agreed with your technical staff. Our cleaners are briefed on equipment sensitivity, restricted access zones, and appropriate cleaning methods for technical areas before commencing."
            },
            {
                question: "Can you scale your team for blockbuster opening weekends?",
                answer: "Absolutely. We can rapidly increase team size for high-traffic periods including blockbuster opening weekends, school holidays, and special event screenings. We work with your operations manager to plan staffing well in advance of major releases to ensure cleaning capacity matches patron volumes."
            },
            {
                question: "Do you supply cleaning consumables for the cinema?",
                answer: "Yes. We can manage the full supply of cleaning consumables including bin liners, paper towels, soap, and hand sanitiser dispensers for restrooms, foyer sanitation stations, and staff areas, integrated with our regular cleaning service."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Cinema cleaning Sydney - between-session auditorium turnover cleaning" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney movie theatre and entertainment venue cleaning" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Cinema Cleaning Sydney"
                serviceDescription="Specialist cinema and movie theatre cleaning services in Sydney. Between-session rapid turnover cleaning, seat sanitisation, foyer cleaning, and nightly deep cleans."
                serviceUrl="/cinema-cleaning-sydney"
                serviceType="Cinema & Theatre Cleaning"
                price="$$"
                additionalServices={["Between-Session Turnover Cleaning", "Seat Sanitisation", "Foyer Cleaning", "Concession Area Cleaning", "Nightly Deep Clean"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
