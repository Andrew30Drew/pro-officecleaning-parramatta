import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Meadowbank NSW | Ryde Area Business Cleaners | Pro Clean Corp',
    description: 'Professional commercial cleaning in Meadowbank NSW. Waterfront apartments, offices & commercial buildings in the Ryde area. Fully insured. Call Pro Clean Corp!',
    keywords: 'commercial cleaning Meadowbank, office cleaning Meadowbank, strata cleaning Meadowbank NSW, commercial building cleaning Ryde area, business cleaning Meadowbank',
    openGraph: {
        title: 'Commercial Cleaning Meadowbank NSW | Pro Clean Corp',
        description: 'Expert commercial and strata cleaning for Meadowbank waterfront apartments, offices, and commercial buildings in the Ryde area. Trusted, insured, locally experienced.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-meadowbank',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Meadowbank NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-meadowbank' },
};

export default function MeadowbankCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Meadowbank NSW",
        description: "Meadowbank has undergone dramatic transformation over the past decade, evolving from a light-industrial suburb into one of the Ryde area's premier waterfront mixed-use precincts, dominated by high-density apartment towers, boutique commercial ground-floor tenancies, professional offices, cafes, and a growing hospitality and retail offering along the Parramatta River foreshore. This transformation has generated substantial demand for commercial cleaning across a diverse mix of property types — from strata common areas and building lobbies in high-rise residential and commercial towers, to ground-floor retail and professional offices, to the corporate and educational facilities that have established themselves in the precinct. Pro Clean Corp delivers specialist commercial cleaning across Meadowbank's full property spectrum, with particular strength in strata and high-rise building cleaning, where our teams are experienced in managing lift lobbies, amenities, car parks, and landscaped outdoor areas that define the quality of living and working in this prestige waterfront location.",
        benefits: [
            "High-rise strata common area cleaning for Meadowbank's waterfront apartment and commercial towers",
            "Lift lobby, foyer, and concierge area cleaning to premium residential and commercial standards",
            "Ground-floor retail, cafe, and restaurant cleaning serving Meadowbank's growing hospitality scene",
            "Professional office cleaning for corporate and educational tenancies in Meadowbank's commercial buildings",
            "Car park sweeping and cleaning for multi-level strata and commercial parking structures",
            "External building facade, pool surrounds, and landscaped common area maintenance cleaning"
        ],
        process: [
            "Free Meadowbank site assessment covering all strata zones, commercial tenancies, and access requirements",
            "Custom cleaning plan developed with building managers, body corporates, or commercial tenants",
            "Professional cleaning by police-checked, uniformed technicians experienced in high-rise and strata environments",
            "Quality inspection and sign-off with detailed cleaning logs and responsive strata account management"
        ],
        whyChooseUs: [
            "15+ years serving Meadowbank and the Ryde area",
            "Fully insured with $20M public liability coverage",
            "Police-checked, uniformed, and professionally trained cleaning staff",
            "Specialist high-rise and strata cleaning capability",
            "Flexible scheduling aligned with building access protocols and resident requirements",
            "100% satisfaction guarantee on every clean"
        ],
        serviceAreas: ["Ryde", "West Ryde", "Ermington", "Rhodes", "Gladesville", "Eastwood", "Top Ryde", "Shepherd's Bay"],
        faqs: [
            {
                question: "Do you provide strata common area cleaning for high-rise buildings in Meadowbank?",
                answer: "Yes. Strata cleaning is one of our primary services in Meadowbank. We clean lift lobbies, corridors, foyers, stairwells, gym facilities, pool areas, car parks, and bin rooms for residential and mixed-use towers throughout the Meadowbank waterfront precinct, on schedules agreed with building managers and body corporates."
            },
            {
                question: "Can you clean ground-floor retail and commercial tenancies in Meadowbank's mixed-use buildings?",
                answer: "Absolutely. We service ground-floor retail shops, cafes, restaurants, and commercial offices throughout Meadowbank. We coordinate with both building management and individual tenants to ensure cleaning schedules respect strata building rules, trading hours, and resident amenity."
            },
            {
                question: "Do you offer car park cleaning for Meadowbank strata and commercial buildings?",
                answer: "Yes. Car park cleaning is a regular service for Meadowbank buildings. We provide machine sweeping and scrubbing of multi-level underground and surface car parks, oil and tyre mark treatment, line marking cleaning, and signage cleaning on monthly or quarterly programs suited to your strata plan."
            },
            {
                question: "Can you clean the pool surrounds and outdoor common areas of Meadowbank waterfront buildings?",
                answer: "Yes. We clean pool surrounds, deck areas, outdoor BBQ facilities, garden paths, and landscaped common areas for Meadowbank residential and mixed-use buildings. We use products appropriate for outdoor surfaces and safe for pool chemistry and surrounding water environments."
            },
            {
                question: "How do you work with body corporates and building managers in Meadowbank?",
                answer: "We have extensive experience working within the strata management structure common to Meadowbank's high-density buildings. We provide detailed cleaning schedules, documented service reports, and direct communication with your building manager or strata committee to ensure full transparency and accountability on every contract."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Meadowbank NSW" },
            { src: "/images/services/office.webp", alt: "Strata and office cleaning Meadowbank waterfront Ryde area" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Meadowbank NSW"
                serviceDescription="Professional commercial and strata cleaning for waterfront apartments, office buildings, and retail tenancies in Meadowbank and the Ryde area."
                serviceUrl="/commercial-cleaning-meadowbank"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
