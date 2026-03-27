
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Minto NSW | Industrial Estate & Warehouse Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Minto NSW. Specialists in industrial estate, warehouse & office cleaning for Macarthur businesses. Free site quote today.',
    keywords: 'commercial cleaning Minto, industrial cleaning Minto, warehouse cleaning Minto NSW, office cleaning Minto, factory cleaning Minto Macarthur, business cleaning Campbelltown',
    openGraph: {
        title: 'Commercial Cleaning Minto NSW | Pro Clean Corp',
        description: 'Expert commercial cleaning for Minto industrial estates, warehouses and offices. Police-checked staff, $20M insured, eco-friendly. Call for a free quote.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-minto',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Minto NSW industrial estate' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-minto' },
};

export default function MintoCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Minto NSW',
        description: "Minto is a cornerstone of South-Western Sydney's industrial landscape, home to one of the region's largest industrial estates with a broad range of manufacturing, warehousing, logistics, and distribution businesses operating across its network of business parks. Pro Clean Corp has served the Minto and greater Macarthur commercial market for over 15 years, providing heavy-duty industrial cleaning alongside high-standard office and amenities cleaning for businesses that need both. Our WHS-trained teams are experienced in working safely within active industrial environments — from navigating forklift zones to cleaning around production lines — and we design cleaning programs that work around your shift schedule without compromising safety or quality. From daily factory floor sweeping and scrubbing to weekly office cleans and periodic deep cleans, Pro Clean Corp is Minto's trusted commercial cleaning partner.",
        benefits: [
            'Heavy-duty industrial floor cleaning including scrubbing, sweeping and degreasing',
            'Warehouse amenities maintenance — lunchrooms, bathrooms, locker rooms and crib areas',
            'Office and administration area cleaning to professional corporate standards',
            'WHS-trained staff experienced in working safely in active industrial environments',
            '$20M public liability insurance with comprehensive coverage for all premises',
            'Flexible shift-aligned scheduling — day, afternoon and night cleans available',
        ],
        process: [
            'Free Minto site assessment including WHS hazard identification',
            'Custom industrial cleaning plan designed around your production schedule',
            'Professional cleaning by WHS-trained, police-checked staff with the right equipment',
            'Quality audit sign-off and regular supervisor reviews to maintain high standards',
        ],
        whyChooseUs: [
            '15+ years serving Minto and the Macarthur industrial region',
            '$20M public liability insurance',
            'Police-checked and WHS-trained staff',
            'Eco-friendly, biodegradable cleaning products',
            'Shift-aligned scheduling — day, evening and night cleans',
            '100% satisfaction guarantee on every clean',
        ],
        serviceAreas: [
            'Campbelltown',
            'Ingleburn',
            'Leumeah',
            'Macquarie Fields',
            'Glenfield',
            'Eagle Vale',
            'Raby',
            'Bow Bowing',
        ],
        faqs: [
            {
                question: 'Do you clean active industrial and manufacturing facilities in Minto?',
                answer: 'Yes. Our staff are WHS-trained and experienced in working safely within active industrial environments, including factories with operating machinery, forklifts in motion, and production lines. We carry out risk assessments prior to commencing service and follow all site induction requirements.',
            },
            {
                question: 'Can you clean large warehouse floors in Minto industrial estates?',
                answer: 'Absolutely. We use industrial ride-on scrubbers, walk-behind sweepers, and high-powered pressure washers to maintain large concrete and epoxy warehouse floors. We can remove tyre marks, oil stains, and general grime to keep floors safe and presentable for staff and auditors.',
            },
            {
                question: 'Do you provide after-hours or overnight cleaning for Minto factories?',
                answer: 'Yes. Many of our Minto clients operate 24-hour or multi-shift facilities. We schedule cleaning during changeover periods or overnight to avoid disrupting production. Our teams are experienced in operating within time-sensitive windows and can work to strict start and finish times.',
            },
            {
                question: 'Can you handle both the factory floor and the administration office in the same contract?',
                answer: 'Yes. We offer fully integrated cleaning programs that cover both the industrial areas and the office, meeting room, bathroom, and kitchen spaces within the same facility. This single-contract approach gives you a consistent standard across your entire premises without managing multiple cleaning providers.',
            },
            {
                question: 'Do you provide periodic deep cleans for Minto warehouses?',
                answer: 'Yes. In addition to regular scheduled cleaning, we offer periodic deep cleaning for Minto industrial facilities. These are particularly popular ahead of workplace audits, client facility tours, lease renewals, or end-of-financial-year inspections. High dusting, rack cleaning, wall washing, and floor restoration can all be included.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Minto NSW industrial estate' },
            { src: '/images/services/office.webp', alt: 'Office cleaning Minto Macarthur region' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Minto NSW"
                serviceDescription="Professional commercial cleaning services in Minto NSW. Industrial estate, warehouse, factory and office cleaning for Macarthur region businesses."
                serviceUrl="/commercial-cleaning-minto"
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
