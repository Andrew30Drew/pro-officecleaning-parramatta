
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Minchinbury NSW | Professional Business Cleaners | Pro Clean Corp',
    description: 'Trusted commercial cleaning in Minchinbury NSW. Serving light industrial facilities, warehouses, offices & childcare centres. Police-checked staff. Free quote.',
    keywords: 'commercial cleaning Minchinbury, office cleaning Minchinbury, business cleaning Minchinbury NSW, industrial cleaning Minchinbury, warehouse cleaning Minchinbury Western Sydney',
    openGraph: {
        title: 'Commercial Cleaning Minchinbury NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning for Minchinbury businesses. Industrial facilities, offices & warehouses. Fully insured, eco-friendly. Free site assessment.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-minchinbury',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Minchinbury NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-minchinbury' },
};

export default function MinchinburyCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Minchinbury NSW',
        description: "Minchinbury sits at the junction of Western Sydney's residential growth corridor and its light industrial heartland, making it home to a diverse mix of businesses — from manufacturing and logistics operators near Eastern Creek to small offices, childcare centres, and retail outlets serving the local community. Pro Clean Corp has been delivering commercial cleaning services to Minchinbury and the surrounding Blacktown LGA for over 15 years, and we understand what local businesses need: reliable cleaners who arrive on time, work efficiently, and produce consistent results. Whether you operate a warehouse that needs daily amenities cleaning, a small office suite that requires weekly maintenance, or a childcare facility demanding the highest hygiene standards, our tailored cleaning programs have you covered. Our fully trained, police-checked teams bring industry-grade equipment and eco-friendly products to every job.",
        benefits: [
            'Industrial and light manufacturing facility cleaning to WHS hygiene standards',
            'Childcare and community facility cleaning with hospital-grade sanitisation products',
            'Flexible after-hours scheduling to work around shift operations and trading hours',
            'Fully insured with $20M public liability — no risk to your business or landlord',
            'Police-checked, uniformed staff you can trust on your premises at any hour',
            'Consistent quality with regular supervisor check-ins and client reporting',
        ],
        process: [
            'Free Minchinbury site assessment and cleaning needs analysis',
            'Custom cleaning plan tailored to your facility type and operational schedule',
            'Professional cleaning delivered by trained, police-checked staff',
            'Quality sign-off inspection and ongoing client communication to maintain standards',
        ],
        whyChooseUs: [
            '15+ years serving Minchinbury and the Blacktown LGA',
            '$20M public liability insurance',
            'Police-checked and uniformed cleaning staff',
            'Eco-friendly, TGA-approved cleaning products',
            'Flexible scheduling — day, evening or weekend cleans available',
            '100% satisfaction guarantee on every clean',
        ],
        serviceAreas: [
            'Rooty Hill',
            'Eastern Creek',
            'Blacktown',
            'Glendenning',
            'Plumpton',
            'Doonside',
            'St Marys',
            'Arndell Park',
        ],
        faqs: [
            {
                question: 'Do you clean light industrial facilities in Minchinbury?',
                answer: 'Yes. We regularly service light industrial premises in Minchinbury and the surrounding Eastern Creek corridor, including factory floors, amenities blocks, lunchrooms, and office areas. Our industrial cleaning programs are designed around your shift patterns to minimise disruption to operations.',
            },
            {
                question: 'Can you provide cleaning for childcare centres in Minchinbury?',
                answer: 'Absolutely. Childcare cleaning requires hospital-grade sanitisation, and we are experienced in meeting the strict hygiene standards set by regulators. We use non-toxic, TGA-compliant products and ensure all touch points, play areas, bathrooms, and kitchens are thoroughly disinfected after every session.',
            },
            {
                question: 'Do you offer one-off deep cleans as well as regular contracts?',
                answer: 'Yes. In addition to ongoing commercial cleaning contracts, we offer one-off deep cleaning services for Minchinbury businesses. These are popular for post-renovation clean-ups, end-of-lease cleans, pre-audit preparation, or seasonal deep cleans of high-traffic areas.',
            },
            {
                question: 'How do you ensure the same standard of cleaning every visit?',
                answer: 'We use detailed cleaning checklists specific to each client\'s premises, combined with regular supervisor spot-checks and a client feedback system. Our team leaders conduct quality inspections after each session to ensure every area has been cleaned to the agreed standard.',
            },
            {
                question: 'Are your products safe for use in food handling and break room areas?',
                answer: 'Yes. We stock and use food-safe, biodegradable cleaning agents that comply with Australian food safety standards. These are suitable for use in commercial kitchens, food manufacturing areas, lunchrooms, and break rooms throughout Minchinbury facilities.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Minchinbury NSW' },
            { src: '/images/services/office.webp', alt: 'Office cleaning Minchinbury Western Sydney' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Minchinbury NSW"
                serviceDescription="Professional commercial cleaning services in Minchinbury NSW. Industrial, office, childcare and warehouse cleaning for Western Sydney businesses."
                serviceUrl="/commercial-cleaning-minchinbury"
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
