import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Mould Removal Sydney | Commercial Mould Remediation Services | Pro Clean Corp',
    description: 'Professional mould removal and remediation in Sydney. HEPA filtration containment, EPA-approved biocides, moisture identification, air testing, and compliance certificates.',
    keywords: 'mould removal sydney, commercial mould remediation sydney, mould cleaning sydney, black mould removal sydney, HEPA mould containment, EPA biocide treatment, mould air testing sydney, mould compliance certificate, moisture source mould sydney',
    openGraph: {
        title: 'Mould Removal Sydney | Commercial Mould Remediation Services | Pro Clean Corp',
        description: 'Expert commercial mould removal and remediation in Sydney. HEPA containment, EPA-approved biocides, moisture source identification, post-remediation air testing, and compliance certificates.',
        url: 'https://www.procleancorp.com.au/mould-removal-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Mould removal Sydney commercial remediation HEPA containment' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/mould-removal-sydney' },
};

export default function MouldRemovalSydneyPage() {
    const serviceInfo = {
        title: "Mould Removal Sydney | Commercial Mould Remediation",
        description: "Mould in a commercial or residential property is not just an aesthetic problem — it is a serious health hazard and a structural risk that worsens with every passing week. Pro Clean Corp provides professional mould removal and remediation services across Sydney, following the Australian Standard for mould remediation. Our process begins with HEPA filtration containment to prevent spore spread, followed by EPA-approved biocide treatment, physical mould removal, and post-remediation air testing to confirm clearance. We identify and document moisture sources to prevent recurrence and provide compliance certificates upon completion.",
        benefits: [
            "HEPA filtration containment established before work begins to prevent mould spores spreading to unaffected areas",
            "EPA-approved biocides applied to kill mould at the root level — not surface bleaching that allows regrowth",
            "Moisture source identification to find and document the underlying water ingress or condensation cause driving mould growth",
            "Post-remediation air testing to confirm spore levels have returned to acceptable limits before clearance is issued",
            "Prevention advice and recommendations on building improvements to address the moisture source and prevent recurrence",
            "Compliance certificates provided on completion — required for property transactions, insurance claims, and strata management"
        ],
        process: [
            "Initial inspection and moisture mapping to identify the extent of mould growth, affected materials, and the underlying moisture source driving the problem",
            "Containment setup using HEPA-filtered negative air pressure machines and physical barriers to isolate the remediation zone and protect unaffected areas",
            "Mould remediation: physical removal of affected materials where necessary, HEPA vacuuming, EPA-approved biocide application, and surface treatment of all affected areas",
            "Post-remediation clearance testing — independent air quality testing to confirm spore levels meet Australian Standard requirements, followed by compliance certificate issue"
        ],
        whyChooseUs: [
            "15+ years commercial cleaning experience",
            "$20M public liability insurance",
            "Police-checked, WHS-trained staff",
            "Eco-friendly commercial-grade products",
            "Flexible scheduling 7 days a week",
            "100% satisfaction guarantee"
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "Is mould removal different from mould cleaning in Sydney?",
                answer: "Yes. Mould cleaning (surface wiping with bleach or biocide) is appropriate for minor surface mould on non-porous materials. Mould removal and remediation is required when mould has penetrated porous building materials such as plasterboard, timber, or insulation, or when spore counts in the air are elevated. Pro Clean Corp assesses each situation and recommends the appropriate level of intervention."
            },
            {
                question: "What EPA-approved biocides do you use for mould remediation?",
                answer: "We use EPA-registered and Australian-approved biocidal products including quaternary ammonium compounds and hydrogen peroxide-based solutions that are effective against mould species and safe for use in occupied buildings once dry. All chemicals used comply with APVMA registration requirements and are selected based on the surface type and mould species present."
            },
            {
                question: "How do you identify the moisture source causing mould growth?",
                answer: "We use thermal imaging cameras and professional moisture meters to detect hidden moisture in walls, floors, and ceilings. Common moisture sources include roof leaks, rising damp, plumbing leaks, condensation from poor ventilation, and HVAC system issues. We document the moisture source in our report and provide recommendations for the building owner or strata manager."
            },
            {
                question: "Do you provide compliance certificates for mould remediation in Sydney?",
                answer: "Yes. Upon successful completion of post-remediation clearance testing confirming that spore levels meet Australian Standard AS/NZS requirements, we issue a compliance certificate documenting the scope of remediation work completed, the clearance test results, and the date of certification. This is required for property sales, insurance claims, and strata remediation obligations."
            },
            {
                question: "Can mould come back after professional remediation?",
                answer: "Mould remediation eliminates the existing mould colony and spores. However, if the underlying moisture source is not addressed, mould can return. This is why we always identify and document the moisture source. When the building defect causing moisture ingress is repaired, properly remediated surfaces should not re-mould under normal conditions."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Mould removal Sydney commercial remediation HEPA containment" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp mould remediation Sydney biocide treatment" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Mould Removal Sydney"
                serviceDescription="Professional commercial mould removal and remediation in Sydney including HEPA filtration containment, EPA-approved biocides, moisture source identification, post-remediation air testing, and compliance certificates."
                serviceUrl="/mould-removal-sydney"
                serviceType="Mould Removal & Remediation"
                price="$$"
                additionalServices={["HEPA Mould Containment", "Biocide Treatment", "Moisture Source Identification", "Post-Remediation Air Testing", "Mould Compliance Certificate"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
