import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'End of Lease Cleaning Blacktown NSW | Bond Cleaning & Exit Clean Specialists',
    description: 'Professional end of lease cleaning in Blacktown NSW. Bond cleaning specialists with 100% bond return guarantee. Comprehensive exit clean for rental properties including carpets, oven, windows. Book online today.',
    keywords: 'end of lease cleaning Blacktown, bond cleaning Blacktown NSW, exit clean Blacktown, vacate cleaning western Sydney, bond return guarantee',
    openGraph: {
        title: 'End of Lease Cleaning Blacktown NSW | Bond Cleaning & Exit Clean Specialists | Pro Clean Corp',
        description: 'Bond cleaning specialists in Blacktown NSW with a 100% bond return guarantee. Complete exit clean including carpets, oven, windows & more. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/end-of-lease-cleaning-blacktown',
        type: 'website',
        images: [{ url: '/images/services/endoflease.jpg', alt: 'End of lease cleaning Blacktown NSW bond cleaning specialists' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/end-of-lease-cleaning-blacktown' },
};

const faqs = [
    {
        question: 'What is included in an end of lease clean in Blacktown?',
        answer: 'Our Blacktown end of lease clean covers every area a property manager or real estate agent will inspect. This includes a full kitchen deep clean (oven, stovetop, rangehood, benchtops, cupboards inside and out), bathroom and toilet scrubbing, window and track cleaning, carpet steam cleaning, wall spot cleaning, skirting boards, light fittings, blinds, garage, and balcony. We follow the REINSW-standard vacate cleaning checklist so nothing is missed at your final inspection.'
    },
    {
        question: 'Do you offer a bond return guarantee for Blacktown rentals?',
        answer: 'Yes. Pro Clean Corp provides a 100% bond return guarantee on all end of lease cleans in Blacktown. If your property manager or real estate agent raises any cleaning-related issues following your final inspection, we will return and re-clean the flagged areas at no additional charge. This guarantee is valid for 72 hours after the initial clean and gives you complete peace of mind when handing back your rental property.'
    },
    {
        question: 'How long does an end of lease clean take in Blacktown?',
        answer: 'The duration of an end of lease clean depends on the size and condition of the property. A standard 2-bedroom apartment in Blacktown typically takes 4–6 hours, while a 3–4 bedroom house can take 6–9 hours or more. Properties that have not been professionally cleaned recently or that require heavy oven cleaning or carpet steam cleaning will take longer. We provide a time estimate when you book and ensure the job is completed thoroughly regardless of duration.'
    },
    {
        question: 'Do I need to be present during the end of lease clean in Blacktown?',
        answer: 'No, you do not need to be present. Many tenants in Blacktown arrange key handover with us directly. We are fully insured and all staff hold National Police Clearances, so you can confidently provide access to your property without being on-site. We will notify you when the clean is complete and send a confirmation for your records. You or your real estate agent can then arrange the final property inspection with confidence.'
    },
    {
        question: 'Does your Blacktown end of lease cleaning include carpet steam cleaning?',
        answer: 'Yes. Carpet steam cleaning is included in our comprehensive end of lease packages for Blacktown properties. Most tenancy agreements and lease condition reports require carpets to be professionally steam cleaned at the end of the tenancy. Our teams use hot water extraction equipment to remove embedded dirt, dust, and stains from carpets throughout the property. We provide a receipt confirming carpet steam cleaning was completed, which is accepted by Blacktown and western Sydney real estate agencies.'
    }
];

export default function EndOfLeaseCleaningBlacktownPage() {
    const serviceInfo = {
        title: 'End of Lease Cleaning Blacktown',
        description: 'Blacktown is one of western Sydney\'s largest and most active rental markets, with thousands of tenants turning over rental properties each year across the Blacktown LGA. When it comes time to vacate your rental property, securing your full bond return depends entirely on the standard of your exit clean. Pro Clean Corp provides professional end of lease cleaning services throughout Blacktown and the wider western Sydney region, with a 100% bond return guarantee, real estate agent-standard checklists, and experienced teams who understand exactly what property managers inspect.',
        benefits: [
            '100% Bond Return Guarantee: We stand behind every Blacktown end of lease clean with a full bond return guarantee — if any cleaning issue is raised at your final inspection, we return and re-clean at no charge within 72 hours.',
            'REINSW Checklist Compliant: Our end of lease cleaning checklist aligns with real estate industry standards used by Blacktown and western Sydney property managers, ensuring nothing is missed at your final inspection.',
            'Carpet Steam Cleaning Included: Hot water extraction carpet cleaning is included in our comprehensive packages — essential for meeting lease obligations and accepted by all Blacktown real estate agencies.',
            'Full Oven & Kitchen Deep Clean: Oven, stovetop, rangehood, and kitchen deep clean performed to the standard required by even the most thorough Blacktown property managers.',
            'Window & Track Cleaning: Windows, tracks, and flyscreens cleaned inside and out — a common point of dispute at bond inspections that we eliminate entirely.',
            'Police-Checked & Fully Insured: All staff hold National Police Clearances and full public liability insurance, giving you confidence when providing property access in Blacktown.',
            'Flexible Blacktown Scheduling: Morning, afternoon, and weekend bookings available across Blacktown and western Sydney — we work around your move-out timeline and property handover date.'
        ],
        process: [
            'Book & Confirm: Provide your Blacktown property details, size, and condition. We give a fixed-price quote and confirm your cleaning date to align with your lease end and final inspection.',
            'Full Property Assessment: On arrival our team assesses every area of your Blacktown rental against the exit clean checklist, identifying any high-attention areas such as heavy oven buildup or stained carpets.',
            'Systematic Exit Clean: We work methodically through every room — kitchen, bathrooms, bedrooms, living areas, windows, floors, and carpets — following the REINSW-standard checklist from top to bottom.',
            'Final Quality Check & Guarantee: A supervisor conducts a final walkthrough before sign-off. You receive your bond return guarantee certificate, valid for 72 hours against any property manager inspection queries.'
        ],
        whyChooseUs: [
            'Bond Return Guarantee: Written guarantee covering any re-clean required due to cleaning-related issues raised at your Blacktown final inspection — within 72 hours, at no extra cost.',
            'Western Sydney Expertise: Years of experience cleaning rental properties in Blacktown, Seven Hills, Quakers Hill, Mount Druitt, and across the western Sydney rental market.',
            '$20M Public Liability Insurance: Full coverage for any accidental damage during your end of lease clean — giving you, your landlord, and your property manager complete peace of mind.',
            'Real Estate Standard Checklist: Our cleaning program is aligned with what Blacktown and western Sydney real estate agents actually inspect, so you pass first time.',
            'All-Inclusive Pricing: One fixed price covers the complete end of lease clean including carpet steam cleaning — no hidden extras or surprise charges on moving day.',
            '7-Day Availability: Bookings available 7 days a week including weekends to suit the demands of moving out and coordinating settlement or new property access in Blacktown.'
        ],
        serviceAreas: [
            'Blacktown', 'Seven Hills', 'Quakers Hill', 'Stanhope Gardens',
            'Rooty Hill', 'Mount Druitt', 'Doonside', 'Woodcroft',
            'Plumpton', 'Bidwill', 'Minchinbury', 'Kings Langley',
            'Glendenning', 'Lalor Park', 'Kings Park'
        ],
        faqs,
        images: [
            { src: '/images/services/endoflease.jpg', alt: 'End of lease cleaning Blacktown NSW bond cleaning exit clean specialists' },
            { src: '/images/services/home.jpg', alt: 'Pro Clean Corp end of lease bond cleaning western Sydney rental property' }
        ],
        relatedServices: [
            'End of Lease Cleaning Sydney',
            'Carpet Cleaning Sydney',
            'Commercial Cleaning Blacktown',
            'Office Cleaning Parramatta'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="End of Lease Cleaning Blacktown"
                serviceDescription="Professional end of lease cleaning in Blacktown NSW with 100% bond return guarantee. Complete exit clean for rental properties including carpet steam cleaning, oven, windows, and bathroom. Serving Blacktown, Seven Hills, Quakers Hill, Mount Druitt and all western Sydney suburbs."
                serviceUrl="/end-of-lease-cleaning-blacktown"
                serviceType="HomeAndConstructionBusiness"
                price="$$"
                additionalServices={['Bond Cleaning', 'Carpet Steam Cleaning', 'Oven Deep Clean', 'Window Cleaning', 'Bathroom Sanitisation']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
