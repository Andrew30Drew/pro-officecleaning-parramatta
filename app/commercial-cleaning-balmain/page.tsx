import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Balmain NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Balmain NSW. Heritage buildings, boutique cafes, bars & offices along Darling St. Fully insured. Free quotes.',
    keywords: 'commercial cleaning Balmain, office cleaning Balmain, business cleaning Balmain NSW, cleaners Balmain',
    openGraph: { title: 'Commercial Cleaning Balmain NSW | Pro Clean Corp', description: 'Professional commercial cleaning in Balmain NSW. Heritage buildings, boutique cafes, bars & offices along Darling St. Fully insured. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-balmain', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Balmain NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-balmain' },
};

export default function BalmainCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Balmain NSW",
        description: "Balmain's Darling Street is one of Sydney's most character-rich commercial strips, lined with boutique cafés, independent restaurants, heritage pubs, creative studios, and professional offices set within Victorian-era buildings. Pro Clean Corp has been trusted by Balmain businesses for over 15 years, delivering cleaning programs that respect the heritage environment while maintaining the impeccably high presentation standards this inner-west community expects. Whether you operate a late-night bar, a café with weekend trade, or a creative agency in a converted terrace, we have you covered.",
        benefits: [
            "Heritage building cleaning using pH-neutral, surface-safe products that protect Balmain's original timber floors, sandstone facades, and period fittings",
            "Hospitality and pub cleaning covering front-of-house, back-of-house, and commercial kitchens for Balmain's iconic bar and restaurant venues",
            "Boutique retail and gallery cleaning on Darling Street that keeps shopfronts polished and interiors pristine for discerning Balmain customers",
            "Creative office cleaning for design studios, architecture firms, and professional practices on the Balmain peninsula",
            "Late-night and early-morning scheduling to suit Balmain's hospitality trading hours without disrupting daytime operations",
            "Discreet key-holding service with strict security protocols for after-hours access to Balmain premises"
        ],
        process: ["Free Balmain site assessment", "Custom cleaning plan for your Balmain business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Balmain and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Rozelle", "Drummoyne", "Lilyfield", "Leichhardt", "Glebe", "Pyrmont", "Five Dock", "Annandale"],
        faqs: [
            { question: "What commercial properties do you clean in Balmain?", answer: "We clean all types of commercial premises in Balmain including heritage pubs, restaurants, cafés, boutique retail shops, galleries, creative offices, medical suites, and strata buildings. We have particular expertise with the hospitality venues and heritage buildings concentrated along Darling Street." },
            { question: "How much does commercial cleaning cost in Balmain?", answer: "Rates in Balmain typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Balmain?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Balmain business." },
            { question: "Are your Balmain cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Can you clean heritage buildings and period interiors in Balmain safely?", answer: "Yes. Our Balmain team is trained in heritage-safe cleaning techniques and uses pH-neutral, non-abrasive products that will not damage original sandstone, exposed brick, timber floors, or period fixtures. We assess each Balmain property before commencing to ensure the right products and methods are applied to every surface." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Balmain NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Balmain" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Balmain NSW" serviceDescription="Professional commercial cleaning in Balmain NSW. Heritage buildings, boutique cafes, bars & offices along Darling St. Fully insured. Free quotes." serviceUrl="/commercial-cleaning-balmain" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
