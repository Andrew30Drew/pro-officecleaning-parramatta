import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Gordon NSW | Pro Clean Corp',
    description: 'Professional commercial cleaning in Gordon NSW. Upper North Shore shopping village, offices & medical suites. Fully insured, police-checked. Free quotes.',
    keywords: 'commercial cleaning Gordon, office cleaning Gordon, business cleaning Gordon NSW, cleaners Gordon',
    openGraph: { title: 'Commercial Cleaning Gordon NSW | Pro Clean Corp', description: 'Professional commercial cleaning in Gordon NSW. Upper North Shore shopping village, offices & medical suites. Fully insured, police-checked. Free quotes.', url: 'https://www.procleancorp.com.au/commercial-cleaning-gordon', type: 'website', images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Gordon NSW' }] },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-gordon' },
};

export default function GordonCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Gordon NSW",
        description: "Gordon is an affluent Upper North Shore suburb with a picturesque village shopping precinct, a concentration of professional offices, specialist medical suites, and the kind of high-end businesses that demand cleaning to an exceptional standard. Pro Clean Corp has been trusted by Gordon businesses for over 15 years, delivering meticulous commercial cleaning programs for retail shops, GP and specialist practices, corporate offices, and the boutique hospitality venues that attract North Shore residents to this charming town centre. Our Gordon cleaning team understands the elevated expectations of this prestigious address.",
        benefits: [
            "Premium retail and village shopping precinct cleaning for Gordon's boutique shops and lifestyle businesses along Pacific Highway",
            "Medical and specialist cleaning for Gordon's concentration of GP practices, specialist suites, and allied health clinics",
            "Corporate office cleaning for Gordon's professional services firms, financial advisers, and legal practices",
            "Boutique café and restaurant cleaning for Gordon's village dining precinct with after-service kitchen hygiene",
            "Strata and commercial building cleaning for Gordon's mixed-use developments and professional office buildings",
            "Discreet, after-hours service by security-vetted, uniformed staff with strict key-holding protocols for Gordon premises"
        ],
        process: ["Free Gordon site assessment", "Custom cleaning plan for your Gordon business", "Professional execution by our trained team", "Quality inspection and client sign-off"],
        whyChooseUs: ["15+ years serving Gordon and surrounding areas", "Fully insured with $20M public liability coverage", "Police-checked, trained uniformed staff", "Commercial-grade eco-friendly products", "Flexible day, evening and weekend scheduling", "100% satisfaction guarantee — free re-clean if unhappy"],
        serviceAreas: ["Killara", "Pymble", "Turramurra", "St Ives", "Wahroonga", "Lindfield", "Roseville", "Chatswood"],
        faqs: [
            { question: "What commercial properties do you clean in Gordon?", answer: "We clean retail shops, medical centres, specialist practices, dental clinics, cafés, restaurants, corporate offices, strata buildings, and professional suites throughout Gordon. Our team is experienced with Gordon's premium village retail precinct and the medical and professional buildings along Pacific Highway." },
            { question: "How much does commercial cleaning cost in Gordon?", answer: "Rates in Gordon typically range from $35–$60 per hour depending on facility size and frequency. We provide free no-obligation quotes." },
            { question: "Do you offer after-hours cleaning in Gordon?", answer: "Yes, we offer flexible scheduling including after-hours, early morning and weekend cleans to minimise disruption to your Gordon business." },
            { question: "Are your Gordon cleaners insured and police checked?", answer: "All our staff are fully insured with public liability coverage, have undergone police background checks, and are trained in WHS protocols." },
            { question: "Can you meet the high presentation standards expected by Gordon's premium retail and professional businesses?", answer: "Absolutely. Pro Clean Corp is experienced working with Upper North Shore premium businesses and understands the elevated presentation standards expected at Gordon addresses. Our team pays close attention to detail, uses premium microfibre and commercial-grade equipment, and provides a quality-check at the end of every clean to ensure your Gordon premises meets the standard you expect." }
        ],
        images: [{ src: "/images/services/commercial.webp", alt: "Commercial cleaning Gordon NSW" }, { src: "/images/services/office.webp", alt: "Office cleaning Gordon" }]
    };
    return (
        <>
            <ServiceStructuredData serviceName="Commercial Cleaning Gordon NSW" serviceDescription="Professional commercial cleaning in Gordon NSW. Upper North Shore shopping village, offices & medical suites. Fully insured, police-checked. Free quotes." serviceUrl="/commercial-cleaning-gordon" serviceType="Commercial Cleaning" price="$$" additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]} faqs={serviceInfo.faqs} />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
