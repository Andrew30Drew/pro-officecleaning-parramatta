
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Mulgrave NSW | North West Sydney Business Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Mulgrave NSW. Serving rural-residential & semi-industrial businesses near Windsor. Police-checked staff. Free quote.',
    keywords: 'commercial cleaning Mulgrave, office cleaning Mulgrave NSW, business cleaning Mulgrave, industrial cleaning Mulgrave Hawkesbury, commercial cleaners Windsor NSW, warehouse cleaning Mulgrave',
    openGraph: {
        title: 'Commercial Cleaning Mulgrave NSW | Pro Clean Corp',
        description: 'Expert commercial cleaning for Mulgrave and North West Sydney businesses. Offices, warehouses and semi-industrial facilities. Police-checked, fully insured.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-mulgrave',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Mulgrave NSW North West Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-mulgrave' },
};

export default function MulgraveCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Mulgrave NSW',
        description: "Mulgrave occupies a unique position in Sydney's North West growth corridor — a semi-rural suburb rapidly transforming alongside the broader Hawkesbury fringe as residential development expands and business activity intensifies near major arterials connecting Windsor, Riverstone, and Box Hill. The suburb is home to a mix of semi-industrial operators, agricultural supply businesses, trade and service businesses, small offices, and rural lifestyle enterprises, all of which have distinct commercial cleaning needs that Pro Clean Corp is well-placed to meet. Our team services the Mulgrave corridor and surrounding suburbs including Windsor, Vineyard, Riverstone, and the emerging Box Hill and Marsden Park precincts, providing reliable, flexible commercial cleaning for the growing business community in this part of Greater Western Sydney. Whether your business is an established operator or part of the area's exciting new growth wave, we have a cleaning program designed for you.",
        benefits: [
            'Semi-industrial and trade business cleaning including workshops, depots and storage facilities',
            'Small office and professional services cleaning with flexible weekly or fortnightly programs',
            'Agricultural and rural supply business cleaning maintaining safe, hygienic workspaces',
            'Serving the rapidly growing Box Hill and Marsden Park commercial precincts nearby',
            '$20M public liability insurance covering all Mulgrave and Hawkesbury region premises',
            'Police-checked, reliable staff — consistent and trustworthy in rural and semi-rural settings',
        ],
        process: [
            'Free Mulgrave site assessment and consultation at your convenience',
            'Custom cleaning plan designed for your facility type and schedule',
            'Professional cleaning delivered by reliable, police-checked staff',
            'Quality sign-off and regular check-ins to maintain consistent standards',
        ],
        whyChooseUs: [
            '15+ years serving the Hawkesbury and North West Sydney region',
            '$20M public liability insurance',
            'Police-checked and uniformed cleaning staff',
            'Eco-friendly, biodegradable cleaning products',
            'Flexible scheduling — accommodating rural and semi-industrial business hours',
            '100% satisfaction guarantee on every clean',
        ],
        serviceAreas: [
            'Windsor',
            'Riverstone',
            'Vineyard',
            'Box Hill',
            'Rouse Hill',
            'Kellyville',
            'Marsden Park',
            'Schofields',
        ],
        faqs: [
            {
                question: 'Do you provide commercial cleaning for semi-industrial businesses in Mulgrave?',
                answer: 'Yes. We service a range of semi-industrial premises in the Mulgrave area including trade workshops, equipment storage facilities, rural supply depots, and light manufacturing operations. Our cleaning programs cover amenities, offices, lunchrooms, and operational areas, customised to the nature of your business.',
            },
            {
                question: 'Can you service new commercial developments in the Box Hill and Marsden Park growth precincts?',
                answer: 'Absolutely. As the North West Sydney growth corridor continues to expand, we are actively servicing new commercial and industrial developments in Box Hill, Marsden Park, Schofields, and surrounding areas. We can provide cleaning from day one of occupancy and scale our service as your business grows.',
            },
            {
                question: 'How often do you recommend commercial cleaning for a small office in Mulgrave?',
                answer: 'For small offices with fewer than 15 staff, we typically recommend weekly or fortnightly cleaning. This covers vacuuming, surface wiping, kitchen cleaning, bathroom sanitisation, and waste removal. Higher-traffic offices may benefit from 2–3 cleans per week. We will recommend the right frequency after your free site assessment.',
            },
            {
                question: 'Do you clean rural lifestyle and agricultural supply businesses in the Hawkesbury area?',
                answer: 'Yes. We are comfortable working in the non-traditional commercial environments common in the Hawkesbury region, including farm supply stores, veterinary practices, machinery dealerships, and rural service businesses. We bring appropriate equipment and products for each environment.',
            },
            {
                question: 'Can you provide a combined cleaning contract for our Windsor and Mulgrave locations?',
                answer: 'Yes. Many businesses in this corridor operate across multiple nearby sites. We can include Windsor, Riverstone, Vineyard, and other nearby locations within a single management contract, simplifying billing and ensuring consistent service standards across all your premises.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Mulgrave NSW North West Sydney' },
            { src: '/images/services/office.webp', alt: 'Office cleaning Mulgrave Hawkesbury region' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Mulgrave NSW"
                serviceDescription="Professional commercial cleaning services in Mulgrave NSW. Semi-industrial, office and rural business cleaning for Hawkesbury and North West Sydney."
                serviceUrl="/commercial-cleaning-mulgrave"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={[
                    'Office Cleaning',
                    'Retail Cleaning',
                    'Warehouse Cleaning',
                    'Strata Cleaning',
                    'Industrial Cleaning',
                ]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
