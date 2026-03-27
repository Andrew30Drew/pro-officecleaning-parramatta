
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Miranda NSW | Westfield Retail & Business Cleaners | Pro Clean Corp',
    description: 'Expert commercial cleaning in Miranda NSW. Trusted by Westfield retailers, Sutherland Shire offices & medical suites. Police-checked, eco-friendly. Free quote.',
    keywords: 'commercial cleaning Miranda, office cleaning Miranda NSW, retail cleaning Miranda Westfield, business cleaning Sutherland Shire, medical cleaning Miranda, commercial cleaners Miranda',
    openGraph: {
        title: 'Commercial Cleaning Miranda NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning for Miranda Westfield retailers, Sutherland Shire offices and medical suites. Fully insured, eco-friendly. Free site assessment.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-miranda',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Miranda NSW Sutherland Shire' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-miranda' },
};

export default function MirandaCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Miranda NSW',
        description: "Miranda is the commercial heart of the Sutherland Shire, anchored by Westfield Miranda — one of Sydney's largest and busiest shopping centres — and surrounded by a thriving professional services precinct including medical specialists, dental practices, financial advisors, legal firms, and government offices. The combination of high-footfall retail and high-expectation professional environments creates diverse commercial cleaning demands that Pro Clean Corp is uniquely equipped to meet. Our experienced teams have been servicing Miranda and the broader Sutherland Shire for over 15 years, delivering retail-grade presentation cleaning for tenancies and clinical-grade sanitisation for health practices. We understand that your premises are a direct reflection of your brand, and we apply that philosophy to every clean we deliver — whether it is a weekly office service or a nightly retail clean.",
        benefits: [
            'Westfield Miranda retail tenancy cleaning aligned with centre management presentation standards',
            'Medical and allied health practice cleaning with TGA-compliant infection control protocols',
            'Corporate office cleaning including daily, weekly and fortnightly service options',
            'After-hours scheduling to keep your business running without interruption',
            '$20M public liability insurance — full protection for Sutherland Shire premises',
            'Police-checked, uniformed and professionally presented cleaning staff',
        ],
        process: [
            'Free Miranda site assessment tailored to your retail, office or medical environment',
            'Custom cleaning plan developed around your trading hours and hygiene requirements',
            'Professional cleaning delivered by vetted, uniformed staff with the right products',
            'Quality sign-off and ongoing communication to ensure your standards are always met',
        ],
        whyChooseUs: [
            '15+ years serving Miranda and the Sutherland Shire',
            '$20M public liability insurance',
            'Police-checked and uniformed staff',
            'Eco-friendly, TGA-approved cleaning and disinfection products',
            'Flexible scheduling including after-hours and weekend cleans',
            '100% satisfaction guarantee on every clean',
        ],
        serviceAreas: [
            'Caringbah',
            'Sutherland',
            'Kirrawee',
            'Gymea',
            'Cronulla',
            'Woolooware',
            'Port Hacking',
            'Taren Point',
        ],
        faqs: [
            {
                question: 'Do you provide commercial cleaning for Westfield Miranda retail tenants?',
                answer: 'Yes. We are experienced in cleaning retail tenancies within major Westfield centres and understand the strict presentation standards that centre management requires. We can schedule cleans around your trading hours — including early morning opens, late-night sessions after close, or during quiet trading periods throughout the day.',
            },
            {
                question: 'Can you clean medical specialist suites in Miranda?',
                answer: 'Absolutely. We provide clinical-grade cleaning for GP practices, specialist consulting rooms, dental surgeries, physiotherapy clinics, and allied health offices throughout Miranda. Our staff are trained in infection control procedures and we use TGA-listed hospital-grade disinfectants on all clinical contact surfaces.',
            },
            {
                question: 'How often should a retail business in Miranda be professionally cleaned?',
                answer: 'For high-footfall retail businesses like those in and around Westfield Miranda, we typically recommend daily cleaning. This covers floor maintenance, bathroom sanitisation, surface wiping, and waste removal. Lower-footfall retail or professional offices may be suited to a 2–3 times per week program, which we can discuss during your free site assessment.',
            },
            {
                question: 'Do you offer strata cleaning for commercial buildings in Miranda?',
                answer: 'Yes. We provide strata cleaning services for commercial buildings, business parks, and mixed-use complexes throughout Miranda and the Sutherland Shire. This includes foyer mopping, lift cleaning, common bathroom maintenance, car park sweeping, and external bin area management.',
            },
            {
                question: 'Are your cleaning products safe for use around customers and patients?',
                answer: 'Yes. We use biodegradable, low-VOC and TGA-compliant cleaning products that are safe for use around customers, patients, staff, and children. We can provide full product safety data sheets upon request for medical and health premises.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Miranda NSW Sutherland Shire' },
            { src: '/images/services/office.webp', alt: 'Office and medical cleaning Miranda NSW' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Miranda NSW"
                serviceDescription="Professional commercial cleaning services in Miranda NSW. Westfield retail, medical, office and strata cleaning for Sutherland Shire businesses."
                serviceUrl="/commercial-cleaning-miranda"
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
