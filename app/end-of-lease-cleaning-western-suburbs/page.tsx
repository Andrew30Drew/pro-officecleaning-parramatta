import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'End of Lease Cleaning Western Suburbs Sydney | Bond Cleaning | Pro Clean Corp',
    description: 'End of lease cleaning in Sydney\'s Western Suburbs. Pro Clean Corp covers Parramatta, Blacktown, Liverpool, Penrith & surrounds. Bond-back guarantee, real estate inspection ready. Call 1300 494 983.',
    keywords: 'end of lease cleaning western suburbs, bond cleaning western suburbs sydney, vacate cleaning parramatta, end of lease cleaning blacktown, bond cleaning liverpool, vacate cleaning penrith, end of lease cleaning sydney west',
    openGraph: {
        title: 'End of Lease Cleaning Western Suburbs Sydney | Bond Cleaning | Pro Clean Corp',
        description: 'Bond-back guarantee end of lease cleaning across Sydney\'s Western Suburbs. Parramatta, Blacktown, Liverpool, Penrith & more. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/end-of-lease-cleaning-western-suburbs',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'End of lease cleaning western suburbs Sydney bond cleaning' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/end-of-lease-cleaning-western-suburbs' },
};

const faqs = [
    {
        question: 'Do you service all Western Suburbs areas for end of lease cleaning?',
        answer: 'Yes. Pro Clean Corp services all major Western Suburbs areas including Parramatta, Blacktown, Liverpool, Penrith, Auburn, Merrylands, Fairfield, Cabramatta, Seven Hills, Westmead, and all surrounding suburbs. We have cleaning teams based in the west for fast, responsive service.'
    },
    {
        question: 'What is included in a Western Suburbs end of lease clean?',
        answer: 'Our standard end of lease package includes full kitchen cleaning (oven, rangehood, stovetop, cupboards inside and out), bathroom and toilet sanitisation, all floors vacuumed and mopped, wall mark and scuff removal, window cleaning, dusting all surfaces, and skirting board cleaning. Carpet steam cleaning is included as standard — a requirement of most real estate agents in Western Sydney.'
    },
    {
        question: 'Do you work directly with real estate agents in Western Sydney?',
        answer: 'Yes. We have established relationships with many property management agencies across Western Sydney including those in Parramatta, Blacktown, and Liverpool. We understand their checklists and inspection standards, which is why our bond-back pass rate across Western Suburbs properties is consistently high.'
    },
    {
        question: 'How quickly can you book an end of lease clean in the Western Suburbs?',
        answer: 'We offer same-week and often next-day scheduling across Western Suburbs. For end-of-month handover dates, we recommend booking 1–2 weeks in advance. However, our local Western Sydney teams can often accommodate urgent 24–48 hour requests for tenants with tight handover deadlines.'
    },
    {
        question: 'What is your bond-back guarantee?',
        answer: 'If your property manager or real estate agent identifies any cleaning issues within 72 hours of our completion, we will return to rectify the work at no additional cost. This guarantee applies to all properties we clean across the Western Suburbs and is our commitment to delivering real estate inspection standard results.'
    }
];

export default function EndOfLeaseCleaningWesternSuburbsPage() {
    const serviceInfo = {
        title: 'End of Lease Cleaning Western Suburbs Sydney',
        description: 'Getting your bond back in Western Sydney\'s competitive rental market means meeting the exact standard your real estate agent expects — and Pro Clean Corp delivers precisely that. Our specialist end of lease cleaning teams service all Western Suburbs areas from Parramatta and Blacktown to Liverpool, Penrith, and everywhere in between. We know the property managers, we know the inspection checklists, and we deliver bond-back results backed by a 72-hour satisfaction guarantee.',
        benefits: [
            'Bond-Back Guarantee: If your agent flags any issues within 72 hours, we return to rectify at no charge — protecting your deposit from first clean to final inspection.',
            'Western Suburbs Specialists: Dedicated teams based in the west covering Parramatta, Blacktown, Liverpool, Penrith, Auburn, Merrylands, Fairfield, and all surrounding suburbs.',
            'Carpet Steam Clean Included: Hot water extraction carpet cleaning included as standard — the most common real estate agent requirement in Western Sydney properties.',
            'Kitchen & Oven Degreasing: Full oven interior, rangehood, grease filter, stovetop, and splashback degreasing to remove months of built-up grease and carbon.',
            'Bathroom & Toilet Sanitisation: Full bathroom deep clean including tile grout scrubbing, shower screen de-scaling, vanity cleaning, and toilet sanitisation to spotless standard.',
            'Wall Mark & Scuff Removal: Pencil marks, scuffs, and minor stains removed from walls and skirting boards as part of every end of lease service.',
            'Window & Glass Cleaning: Internal windows, glass doors, and mirrors cleaned streak-free. External window cleaning available for accessible ground floor windows.'
        ],
        process: [
            'Free Quote: Fixed-price quote based on property size, number of bedrooms, condition, and agent requirements — no hidden charges on the day.',
            'Dedicated Crew Assigned: A full cleaning team allocated to your property on handover day, working systematically through every room to the agent\'s checklist.',
            'Supervisor Inspection: Before we hand back the keys, a team supervisor reviews the property against standard Western Sydney real estate agent checklists.',
            '72-Hour Guarantee: We remain available for a return visit within 72 hours if your agent or property manager identifies anything that needs attention.'
        ],
        whyChooseUs: [
            'Western Suburbs Coverage: We service every suburb from Parramatta to Penrith, Blacktown to Liverpool — local teams for fast scheduling and response.',
            '15+ Years Experience: Over 15 years delivering end of lease cleans in Western Sydney, with an intimate knowledge of local property management standards.',
            '$20M Public Liability: Fully insured with $20 million public liability cover on every job — the level required by most real estate agents and strata managers.',
            'Police-Checked Staff: All cleaning staff hold current police clearances — essential for access to occupied properties and handling of keys.',
            '7-Day Scheduling: We work 7 days a week to accommodate your lease end date, whether it falls on a weekday or weekend.',
            'Eco-Friendly Products: TGA-approved, environmentally responsible cleaning products that are safe for families, pets, and the property.'
        ],
        serviceAreas: [
            'Parramatta', 'Blacktown', 'Liverpool', 'Penrith', 'Auburn',
            'Merrylands', 'Fairfield', 'Cabramatta', 'Seven Hills', 'Westmead',
            'Granville', 'Wentworthville', 'Toongabbie', 'Girraween', 'Greystanes',
            'Smithfield', 'Wetherill Park', 'Prairiewood', 'Bossley Park', 'Prospect'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'End of lease cleaning western suburbs Sydney bond cleaning' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Western Suburbs bond cleaning team' }
        ],
        relatedServices: [
            'End of Lease Cleaning Sydney',
            'Commercial Cleaning Sydney',
            'Office Cleaning Parramatta',
            'Carpet Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="End of Lease Cleaning Western Suburbs Sydney"
                serviceDescription="Specialist end of lease and bond cleaning services across Sydney's Western Suburbs including Parramatta, Blacktown, Liverpool, and Penrith. Bond-back guarantee, carpet steam cleaning included, 72-hour rectification guarantee."
                serviceUrl="/end-of-lease-cleaning-western-suburbs"
                serviceType="End of Lease Cleaning"
                price="$$"
                additionalServices={['Carpet Steam Cleaning', 'Oven & Kitchen Degreasing', 'Window Cleaning', 'Wall Mark Removal', 'Bathroom Deep Clean']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
