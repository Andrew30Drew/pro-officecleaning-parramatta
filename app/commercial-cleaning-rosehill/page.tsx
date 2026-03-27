import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Rosehill NSW | Industrial & Event Venue Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Rosehill NSW. Industrial precincts, racecourse precinct & Parramatta-area offices. Fully insured cleaners. Free quote.',
    keywords: 'commercial cleaning Rosehill, industrial cleaning Rosehill, office cleaning Rosehill NSW, Rosehill racecourse cleaning, business cleaning Parramatta area',
    openGraph: {
        title: 'Commercial Cleaning Rosehill NSW | Pro Clean Corp',
        description: 'Expert commercial cleaning in Rosehill NSW. Industrial facilities, event venues & Parramatta-area offices. Fully insured, police-checked. Free site quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-rosehill',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Rosehill NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-rosehill' },
};

export default function RosehillCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Rosehill NSW",
        description: "Rosehill occupies a unique position in Sydney's commercial landscape, combining a significant industrial and manufacturing precinct with one of NSW's premier event and racing venues — Rosehill Gardens Racecourse. Pro Clean Corp has the experience and capacity to service both ends of this spectrum. Our industrial cleaning teams handle heavy-duty degreasing, floor scrubbing and waste area maintenance across Rosehill's factories and warehouses, while our events and venue cleaning divisions are equipped for the rapid turnaround and impeccable presentation demanded by high-profile events at the racecourse precinct. We also serve the broader Parramatta-area office and commercial market with reliable, professional maintenance cleaning programs.",
        benefits: [
            "Heavy-duty industrial cleaning for Rosehill's manufacturing and warehouse facilities",
            "Event venue and post-event cleaning with rapid turnaround for the racecourse precinct",
            "Office and corporate suite cleaning for Parramatta-adjacent businesses in Rosehill",
            "Industrial floor scrubbing, degreasing and sealed floor maintenance programs",
            "Loading dock and external hard-stand pressure cleaning to maintain site presentation",
            "Compliant chemical storage and hazardous area cleaning for industrial operators"
        ],
        process: [
            "Free on-site assessment of your Rosehill facility or venue cleaning requirements",
            "Custom cleaning plan developed for your industry, event schedule or office routine",
            "Execution by trained, police-checked technicians with industry-appropriate equipment",
            "Post-service quality inspection and sign-off with direct client communication"
        ],
        whyChooseUs: [
            "15+ years serving Rosehill and the greater Parramatta industrial and commercial precinct",
            "$20M public liability insurance covering all facility types including event venues",
            "Police-checked, uniformed staff trusted by industrial and event operators alike",
            "Eco-friendly cleaning products that meet industrial safety data sheet requirements",
            "Rapid-response scheduling for post-event and emergency industrial cleaning needs",
            "100% satisfaction guarantee backed by our quality sign-off process"
        ],
        serviceAreas: [
            "Camellia", "Parramatta", "Rydalmere", "Granville", "Auburn", "Silverwater", "Merrylands", "Clyde"
        ],
        faqs: [
            {
                question: "Do you provide post-event cleaning at the Rosehill racecourse precinct?",
                answer: "Yes. Pro Clean Corp has extensive experience in event venue cleaning including post-race day and function cleaning at large entertainment precincts in the Parramatta area. We deploy dedicated event cleaning crews capable of rapid mobilisation and turnaround to restore venues to full presentation standard after major events."
            },
            {
                question: "Can you handle heavy industrial cleaning in Rosehill's manufacturing zone?",
                answer: "Absolutely. Our industrial cleaning teams are equipped with commercial ride-on scrubbers, industrial vacuum systems, high-pressure washers and appropriate PPE for heavy manufacturing environments. We understand the safety protocols required in active industrial facilities and work to your site's specific WHS requirements at all times."
            },
            {
                question: "What cleaning services do you provide for offices near Rosehill?",
                answer: "We provide full-service office cleaning for businesses in and around Rosehill including daily or weekly maintenance cleaning, kitchen and amenity hygiene, window cleaning, carpet steam cleaning and periodic deep-cleaning programs. We schedule all office cleans around your business hours for zero disruption to staff or clients."
            },
            {
                question: "Are you able to clean food and beverage areas at Rosehill event venues?",
                answer: "Yes. Our teams are trained in food-safe cleaning protocols using TGA-listed, food-grade sanitisers. We understand the requirements of commercial kitchens, bars and food service areas within event venues, ensuring full compliance with NSW Food Authority standards and venue hygiene policies."
            },
            {
                question: "How do you manage cleaning across large Rosehill industrial sites with multiple zones?",
                answer: "We assign a dedicated site supervisor and cleaning crew to large industrial facilities, using zone-based cleaning schedules and detailed checklists to ensure every area is addressed systematically. Our supervisors conduct inspections at the end of each service and report directly to your facilities or operations manager."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Rosehill NSW" },
            { src: "/images/services/office.webp", alt: "Industrial office cleaning Rosehill NSW" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Rosehill NSW"
                serviceDescription="Professional commercial cleaning services in Rosehill NSW covering industrial facilities, event venues and Parramatta-area offices."
                serviceUrl="/commercial-cleaning-rosehill"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
