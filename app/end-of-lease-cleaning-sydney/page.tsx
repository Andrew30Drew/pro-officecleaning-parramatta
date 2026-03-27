import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'End of Lease Cleaning Sydney | #1 Bond Cleaning Service | Pro Clean Corp',
    description: 'Sydney\'s trusted end of lease cleaning specialists since 2008. Bond-back guarantee, carpet steam cleaning, oven degreasing & window cleaning across all Sydney suburbs. 2,400 monthly searches — rank with us. Call 1300 494 983.',
    keywords: 'end of lease cleaning sydney, bond cleaning sydney, vacate cleaning sydney, end of tenancy cleaning sydney, move out cleaning sydney, bond back cleaning sydney, professional end of lease cleaning sydney, cheap end of lease cleaning sydney, same day end of lease cleaning sydney',
    openGraph: {
        title: 'End of Lease Cleaning Sydney | #1 Bond Cleaning Service | Pro Clean Corp',
        description: 'Sydney\'s trusted bond cleaning specialists. Full property deep clean, carpet steam, windows, oven & wall marks — 100% bond-back guarantee. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/end-of-lease-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'End of lease cleaning Sydney bond cleaning service' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/end-of-lease-cleaning-sydney' },
};

const suburbPages = [
    { name: 'End of Lease Cleaning Western Suburbs', slug: 'end-of-lease-cleaning-western-suburbs' },
    { name: 'End of Lease Cleaning Parramatta', slug: 'office-cleaning-parramatta' },
    { name: 'End of Lease Cleaning Inner West', slug: 'commercial-cleaning-inner-west' },
    { name: 'End of Lease Cleaning North Sydney', slug: 'office-cleaning-north-sydney' },
];

const faqs = [
    {
        question: 'What does end of lease cleaning in Sydney include?',
        answer: 'Our Sydney end of lease cleaning includes a complete property deep clean: kitchen (oven, rangehood, stovetop, cupboards inside and out), all bathrooms and toilets, floors vacuumed and mopped, wall marks and scuffs removed, windows cleaned internally, all surfaces dusted, and skirting boards cleaned. Professional carpet steam cleaning via hot water extraction is included as standard — required by most Sydney real estate agents.'
    },
    {
        question: 'How much does end of lease cleaning cost in Sydney?',
        answer: 'End of lease cleaning prices in Sydney depend on property size, number of bedrooms and bathrooms, and condition of the property. A standard 2-bedroom apartment typically starts from $350–$450 all-inclusive. A 3–4 bedroom house ranges from $550–$750. We provide fixed-price quotes upfront with no surprise charges on the day.'
    },
    {
        question: 'Do you guarantee the bond return?',
        answer: 'Yes. We provide a 72-hour rectification guarantee — if your real estate agent or property manager identifies any cleaning issue within 72 hours of completion, we return to fix it at no additional cost. Our bond-back pass rate across Sydney is consistently above 98%.'
    },
    {
        question: 'Is carpet cleaning included in your Sydney end of lease service?',
        answer: 'Yes. Professional hot water extraction carpet cleaning is included in all our end of lease packages — it is one of the most commonly required items on Sydney real estate agent cleaning checklists. We do not use dry-clean or bonnet methods; we use industrial hot water extraction for a genuine deep clean result.'
    },
    {
        question: 'How far in advance should I book end of lease cleaning in Sydney?',
        answer: 'We recommend booking 1–2 weeks in advance, particularly around the end of the month when demand peaks. However, our Sydney teams regularly accommodate 24–48 hour urgent requests. Call 1300 494 983 and we will do our best to fit you in, even on short notice.'
    },
    {
        question: 'Do you clean across all Sydney suburbs?',
        answer: 'Yes. Pro Clean Corp provides end of lease cleaning across the entire Greater Sydney metropolitan area including the CBD, Inner West, Eastern Suburbs, North Shore, Northern Beaches, Western Suburbs, South-West Sydney, and Hills District. We have multiple teams across the city to ensure fast scheduling regardless of your location.'
    }
];

export default function EndOfLeaseCleaningSydneyPage() {
    const serviceInfo = {
        title: 'End of Lease Cleaning Sydney',
        description: 'With Sydney\'s rental market as competitive as it is, losing your bond over cleaning disputes is simply not an option. Pro Clean Corp has been delivering bond-back results for Sydney tenants since 2008 — covering every suburb from the CBD to the outer west, north shore to the south. Our end of lease cleaning teams work directly to real estate agent checklists, cover carpet steam cleaning as standard, and back every job with a 72-hour bond-back guarantee.',
        benefits: [
            'Full Property Deep Clean: Every room, surface, fixture, and fitting cleaned to the real estate agent\'s exact inspection checklist standard — nothing missed.',
            'Carpet Steam Cleaning Included: Professional hot water extraction carpet cleaning included on every job. No extra charges, no surprises — the standard Sydney agents require.',
            'Kitchen & Oven Degreasing: Thorough oven interior, rangehood, grease filters, stovetop, and splashback degreasing that looks brand new for the inspection.',
            'Bathroom Sanitisation: Full bathroom and toilet deep clean — tile grout scrubbing, shower screen descaling, vanity and mirror cleaning to spotless standard.',
            'Wall Mark & Scuff Removal: Pencil, crayon, and scuff marks removed from walls and skirting boards included in the base price, not as an add-on.',
            'Window & Glass Cleaning: Internal windows, glass sliding doors, shower screens, and mirrors cleaned streak-free on every visit.',
            '72-Hour Bond-Back Guarantee: Any agent concerns within 72 hours are addressed with a free return visit — your bond is protected from start to finish.'
        ],
        process: [
            'Instant Fixed-Price Quote: Property size, bedroom and bathroom count, and condition assessed. You receive a firm quote — no hidden charges on arrival.',
            'Full Cleaning Team On Your Day: A dedicated crew arrives on your nominated handover date and works through every room to the agent\'s checklist.',
            'Supervisor Pre-Handover Check: Team supervisor reviews the property against standard Sydney real estate checklists before keys are returned.',
            '72-Hour Rectification Guarantee: We stay available for 72 hours post-clean. Any agent issues are resolved with a free return — no arguments, no delays.'
        ],
        whyChooseUs: [
            'Sydney-Wide Coverage: Every suburb across Greater Sydney serviced — CBD, Inner West, Eastern Suburbs, North Shore, West, and South-West.',
            '15+ Years Bond Cleaning: Over 15 years specialising in Sydney end of lease cleaning, with intimate knowledge of what each real estate agency expects.',
            '$20M Public Liability Insurance: Fully insured with $20M public liability — the level required by Sydney\'s top real estate agencies for approved cleaners.',
            'Police-Checked Staff: All cleaners hold current National Police Clearances — essential for key access and property entry.',
            '98%+ Bond-Back Rate: Our documented bond-back pass rate across Sydney properties is consistently above 98% with our standard cleaning package.',
            '7-Day Availability: Monday to Sunday scheduling available to match your lease end date, inspection time, and new tenant move-in schedule.'
        ],
        serviceAreas: [
            'Sydney CBD', 'Parramatta', 'North Sydney', 'Chatswood', 'Bondi',
            'Newtown', 'Surry Hills', 'Randwick', 'Manly', 'Hornsby',
            'Blacktown', 'Liverpool', 'Penrith', 'Hurstville', 'Cronulla',
            'Castle Hill', 'Baulkham Hills', 'Ryde', 'Epping', 'Rhodes'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'End of lease cleaning Sydney bond cleaning service' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp Sydney bond cleaning team at work' }
        ],
        relatedServices: [
            'End of Lease Cleaning Western Suburbs',
            'Carpet Cleaning Sydney',
            'Commercial Cleaning Sydney',
            'Window Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="End of Lease Cleaning Sydney"
                serviceDescription="Sydney's trusted end of lease cleaning and bond cleaning service. Full property deep clean, carpet steam cleaning, oven degreasing, window cleaning and wall mark removal. 72-hour bond-back guarantee across all Sydney suburbs."
                serviceUrl="/end-of-lease-cleaning-sydney"
                serviceType="End of Lease Cleaning"
                price="$$"
                additionalServices={['Carpet Steam Cleaning', 'Oven Degreasing', 'Window Cleaning', 'Wall Mark Removal', 'Bathroom Deep Clean', 'Rubbish Removal']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />

            {/* Location Hub Links */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-darkblue mb-6 text-center">End of Lease Cleaning by Sydney Area</h2>
                    <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                        Find specialist end of lease and bond cleaning services in your Sydney area:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {suburbPages.map((page) => (
                            <Link
                                key={page.slug}
                                href={`/${page.slug}`}
                                className="bg-white p-3 rounded-lg text-center text-gray-700 hover:text-greenprimary hover:shadow-md transition border border-gray-100 font-medium text-sm"
                            >
                                {page.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
