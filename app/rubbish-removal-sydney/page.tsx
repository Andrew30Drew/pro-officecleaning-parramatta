import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Rubbish Removal Sydney | Commercial Waste & Junk Removal | Pro Clean Corp',
    description: 'Pro Clean Corp offers fast EPA-compliant rubbish removal across Sydney. Office clearouts, construction waste, furniture, e-waste & bulk junk — same-day pickup available.',
    keywords: 'rubbish removal sydney, junk removal sydney, commercial waste removal, office clearout sydney, construction waste removal, e-waste recycling sydney, bulk rubbish removal, same-day rubbish collection',
    openGraph: {
        title: 'Rubbish Removal Sydney | Commercial Waste & Junk Removal | Pro Clean Corp',
        description: 'Fast EPA-compliant rubbish removal across Sydney. Office clearouts, construction waste, furniture, e-waste and bulk junk — same-day pickup available.',
        url: 'https://www.procleancorp.com.au/rubbish-removal-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Rubbish removal services Sydney' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/rubbish-removal-sydney' },
};

export default function RubbishRemovalSydneyPage() {
    const serviceInfo = {
        title: "Rubbish Removal Sydney",
        description: "Pro Clean Corp provides comprehensive rubbish removal services for businesses, construction sites, and commercial properties across Sydney. From complete office clearouts and furniture removal to construction waste and certified e-waste recycling, our licensed teams handle it all with EPA-compliant disposal. We offer same-day and scheduled pickup to minimise disruption to your operations, with transparent fixed-price quotes and no hidden fees.",
        benefits: [
            "Office Clearouts: Full removal of furniture, filing cabinets, IT equipment, and general waste during relocations or fit-outs.",
            "Construction Waste: Safe EPA-compliant disposal of rubble, timber, plasterboard, and site debris.",
            "Furniture Removal: Responsible disposal or donation coordination for unwanted commercial furniture.",
            "E-Waste Recycling: Certified recycling of computers, monitors, printers, and electronic equipment.",
            "Same-Day Pickup: Urgent rubbish collection available across Greater Sydney with early-morning booking.",
            "EPA-Compliant Disposal: All waste tracked and disposed of according to NSW EPA regulations with documentation provided.",
            "Bulk Rubbish Removal: High-volume clearances for warehouses, factories, and large commercial sites."
        ],
        process: [
            "Assessment: We assess the volume and type of waste and provide a transparent fixed-price quote.",
            "Scheduled Collection: We arrive on time with the right vehicle and crew for the job size.",
            "Removal & Sorting: All items are sorted on-site for recycling, donation, or licensed disposal.",
            "Documentation: EPA waste tracking documentation provided on request for your compliance records."
        ],
        whyChooseUs: [
            "15+ years experience",
            "$20M public liability",
            "Police-checked staff",
            "Eco-friendly products",
            "7-day flexible scheduling",
            "100% satisfaction guarantee"
        ],
        serviceAreas: [
            "Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith",
            "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"
        ],
        faqs: [
            { question: "Do you offer same-day rubbish removal in Sydney?", answer: "Yes, we offer same-day rubbish removal across most Sydney suburbs, subject to availability. Contact us early in the day to secure a same-day booking." },
            { question: "Is your rubbish removal EPA compliant?", answer: "Absolutely. Pro Clean Corp holds all required NSW EPA licences for waste transport and disposal. We can provide waste tracking documentation for your compliance records." },
            { question: "Can you remove e-waste and electronics?", answer: "Yes. We offer certified e-waste recycling for computers, monitors, servers, printers, and other electronic equipment in accordance with NSW e-waste regulations." },
            { question: "Do you handle construction site waste removal?", answer: "Yes, we regularly service construction and renovation sites, removing rubble, timber, plasterboard, insulation, and other building waste with appropriate PPE and vehicles." },
            { question: "How is pricing calculated for rubbish removal?", answer: "Pricing is based on the volume and type of waste. We provide fixed quotes after a brief assessment so there are no surprises on the day." }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial rubbish removal Sydney" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Rubbish Removal Sydney"
                serviceDescription="Fast EPA-compliant rubbish removal across Sydney including office clearouts, construction waste, furniture, e-waste and bulk junk with same-day pickup available."
                serviceUrl="/rubbish-removal-sydney"
                serviceType="Rubbish Removal"
                price="$$"
                additionalServices={["Office Clearouts", "Construction Waste Removal", "E-Waste Recycling", "Furniture Removal", "Bulk Waste Collection"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
