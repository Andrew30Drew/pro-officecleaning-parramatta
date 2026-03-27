import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Revesby NSW | Professional Business Cleaners | Pro Clean Corp',
    description: 'Expert commercial cleaning in Revesby NSW. Industrial facilities, retail strips & offices across SW Sydney cleaned by Pro Clean Corp. Fully insured. Free quote.',
    keywords: 'commercial cleaning Revesby, office cleaning Revesby, industrial cleaning Revesby NSW, business cleaning Revesby, warehouse cleaning Revesby',
    openGraph: {
        title: 'Commercial Cleaning Revesby NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning in Revesby NSW. Industrial, retail & office cleaning specialists. Fully insured, police-checked staff. Free quote today.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-revesby',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Revesby NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-revesby' },
};

export default function RevesbyCOmmercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Revesby NSW",
        description: "Pro Clean Corp delivers industry-leading commercial cleaning services to businesses throughout Revesby and the broader south-west Sydney corridor. Revesby's diverse commercial landscape — spanning light industrial facilities along Milperra Road, busy retail strips on Marco Avenue, and professional office suites near Revesby Station — demands a cleaning partner with the versatility and expertise to match. Our trained technicians understand the unique hygiene requirements of each sector, from heavy-duty industrial degreasing to detail-oriented retail and office presentation. With flexible scheduling that accommodates 24/7 industrial operations and standard business hours alike, Pro Clean Corp is Revesby's trusted name in commercial hygiene.",
        benefits: [
            "Specialist industrial and warehouse cleaning using commercial-grade ride-on scrubbers and pressure equipment",
            "Retail strip and shopfront cleaning that enhances customer first impressions and foot traffic",
            "Office and professional suite cleaning aligned to your business hours with zero disruption",
            "Compliant biohazard and chemical waste area cleaning for Revesby industrial sites",
            "High-pressure exterior cleaning for loading docks, car parks and building facades",
            "Eco-friendly, TGA-listed products safe for staff, customers and the Revesby environment"
        ],
        process: [
            "Free on-site assessment of your Revesby facility and specific cleaning requirements",
            "Custom cleaning plan tailored to your industry sector and operational schedule",
            "Professional execution by trained, police-checked, uniformed technicians",
            "Quality sign-off inspection and client satisfaction confirmation after every service"
        ],
        whyChooseUs: [
            "15+ years serving Revesby and south-west Sydney businesses across all sectors",
            "$20M public liability insurance for complete peace of mind on every job",
            "Police-checked and uniformed staff you can trust in your facility",
            "Eco-friendly, biodegradable cleaning products that protect your team and the planet",
            "Flexible scheduling including early morning, evening and weekend cleans",
            "100% satisfaction guarantee — we return to fix any issue at no extra cost"
        ],
        serviceAreas: [
            "Padstow", "Bankstown", "Panania", "East Hills", "Condell Park", "Milperra", "Peakhurst", "Riverwood"
        ],
        faqs: [
            {
                question: "What types of commercial properties do you clean in Revesby?",
                answer: "We clean a full range of commercial properties in Revesby including warehouses, light industrial facilities, retail shops, supermarkets, offices, medical centres, childcare facilities, and restaurants. Our team is equipped and trained to handle everything from standard office maintenance cleaning to heavy industrial degreasing and floor scrubbing."
            },
            {
                question: "Can you clean our Revesby warehouse during operating hours?",
                answer: "Yes. We specialise in around-the-clock scheduling to suit your operational needs. Many of our Revesby industrial clients prefer early morning or late evening cleans to avoid disrupting staff and workflow. We work around your production schedule to deliver a clean, safe working environment without impacting your output."
            },
            {
                question: "Are your cleaning products safe for food-handling areas in Revesby?",
                answer: "Absolutely. We use TGA-listed, food-safe sanitisers for any area where food is handled or stored. Our products meet Australian food safety standards and are highly effective against bacteria, viruses and common pathogens, ensuring your business remains fully compliant with NSW health regulations."
            },
            {
                question: "How quickly can Pro Clean Corp start cleaning our Revesby business?",
                answer: "In most cases we can arrange an initial site assessment within 24–48 hours of your enquiry and commence regular cleaning services shortly after. For urgent or one-off cleans — such as post-construction or end-of-lease — we can often mobilise within the same day or next business day."
            },
            {
                question: "Do you provide strata and multi-tenancy commercial cleaning in Revesby?",
                answer: "Yes. We offer comprehensive strata cleaning services for commercial complexes in Revesby, covering common areas, lobbies, lifts, car parks, bin enclosures and external areas. We coordinate closely with strata managers and building owners to ensure all communal spaces maintain a consistently high standard of cleanliness."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Revesby NSW" },
            { src: "/images/services/office.webp", alt: "Office cleaning Revesby NSW" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Revesby NSW"
                serviceDescription="Professional commercial cleaning services in Revesby NSW covering industrial facilities, retail stores, offices and warehouses across south-west Sydney."
                serviceUrl="/commercial-cleaning-revesby"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
