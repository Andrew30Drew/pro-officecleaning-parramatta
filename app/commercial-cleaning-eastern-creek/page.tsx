import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Eastern Creek NSW | Industrial & Warehouse Cleaners | Pro Clean Corp',
    description: 'Large-scale commercial cleaning in Eastern Creek NSW. Distribution centres, warehouses, motorsport venues & office parks in Western Sydney. Free site assessment.',
    keywords: 'commercial cleaning Eastern Creek, industrial cleaning Eastern Creek, warehouse cleaning Eastern Creek NSW',
    openGraph: {
        title: 'Commercial Cleaning Eastern Creek NSW | Pro Clean Corp',
        description: 'Specialist large-scale commercial and industrial cleaning in Eastern Creek NSW. Serving distribution centres, warehouses, motorsport facilities and office parks across Western Sydney.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-eastern-creek',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Eastern Creek NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-eastern-creek' },
};

export default function EasternCreekCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Eastern Creek NSW',
        description:
            'Eastern Creek is one of Western Sydney\'s most significant commercial and industrial precincts, anchored by massive distribution and logistics hubs including some of Australia\'s most advanced automated warehousing facilities, complemented by entertainment and motorsport venues, business parks, and a growing range of supporting commercial offices. Pro Clean Corp is fully equipped to handle the scale and complexity of Eastern Creek\'s diverse commercial environment — from deploying large ride-on scrubber fleets across hundreds of thousands of square metres of warehouse flooring to maintaining corporate office parks and event facilities to the highest presentation standards. Our Eastern Creek cleaning programs are built around your operational windows, shift patterns, and WHS requirements.',
        benefits: [
            'Large-scale warehouse floor scrubbing with industrial ride-on equipment',
            'Distribution centre cleaning scheduled around shift changes and throughput',
            'Motorsport and entertainment venue cleaning for event turnarounds',
            'Business park and corporate office cleaning to professional standards',
            'High-level dusting, racking cleaning and cobweb removal',
            'Fully insured with $20M public liability and WHS-compliant site induction',
        ],
        process: [
            'Free Eastern Creek site assessment',
            'Custom cleaning plan tailored to your premises',
            'Professional execution by trained, vetted staff',
            'Quality sign-off and client satisfaction check',
        ],
        whyChooseUs: [
            '15+ years serving Eastern Creek and the Western Sydney industrial precinct',
            '$20M public liability insurance',
            'Police-checked uniformed staff',
            'Industrial-grade equipment including large ride-on scrubber-dryers',
            'Flexible 24/7 scheduling to suit operations',
            '100% satisfaction guarantee',
        ],
        serviceAreas: ['Blacktown', 'Rooty Hill', 'Plumpton', 'Minchinbury', 'Glendenning', 'Arndell Park', 'Huntingwood', 'Prospect'],
        faqs: [
            {
                question: 'Can you clean large distribution centres and automated warehouses in Eastern Creek?',
                answer: 'Yes, large-scale distribution centre and warehouse cleaning is our speciality in Eastern Creek. We operate fleets of commercial ride-on scrubber-dryers and sweepers capable of covering vast floor areas efficiently, and our teams are trained to work safely around automated storage and retrieval systems.',
            },
            {
                question: 'How much does commercial cleaning cost in Eastern Creek?',
                answer: 'Rates range $35–$60/hr depending on scope and frequency. Free site assessments for all Eastern Creek businesses.',
            },
            {
                question: 'Do you offer after-hours and 24/7 cleaning in Eastern Creek?',
                answer: 'Yes. Many Eastern Creek logistics hubs operate around the clock, and we design cleaning schedules that fit within operational windows — including between-shift cleans, overnight facility maintenance, and weekend deep clean programs.',
            },
            {
                question: 'Are your cleaners insured?',
                answer: 'Yes, $20M public liability, police-checked, WHS trained.',
            },
            {
                question: 'Do you clean motorsport and entertainment facilities at Eastern Creek?',
                answer: 'Yes. Eastern Creek\'s motorsport precinct and entertainment venues require specialised event turnaround cleaning, grandstand cleaning, amenities maintenance, and post-event deep cleans. We have experience delivering rapid, high-quality cleaning for large event venues with tight turnaround windows.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Eastern Creek NSW' },
            { src: '/images/services/office.webp', alt: 'Warehouse and distribution centre cleaning Eastern Creek Western Sydney' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Eastern Creek NSW"
                serviceDescription="Specialist large-scale commercial and industrial cleaning in Eastern Creek NSW, serving distribution centres, warehouses, motorsport facilities and office parks across Western Sydney."
                serviceUrl="/commercial-cleaning-eastern-creek"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={['Office Cleaning', 'Retail Cleaning', 'Warehouse Cleaning', 'Strata Cleaning', 'Industrial Cleaning']}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
