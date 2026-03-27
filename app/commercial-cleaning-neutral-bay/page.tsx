
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Neutral Bay NSW | Lower North Shore Office & Retail Cleaners | Pro Clean Corp',
    description: 'Expert commercial cleaning in Neutral Bay NSW. Military Rd offices, retail strips & professional suites on the Lower North Shore. Police-checked. Free quote.',
    keywords: 'commercial cleaning Neutral Bay, office cleaning Neutral Bay NSW, retail cleaning Neutral Bay, business cleaning Lower North Shore, commercial cleaners Neutral Bay, Military Road cleaning',
    openGraph: {
        title: 'Commercial Cleaning Neutral Bay NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning for Neutral Bay offices, Military Rd retailers and Lower North Shore businesses. Police-checked, eco-friendly. Free assessment.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-neutral-bay',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Neutral Bay Lower North Shore NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-neutral-bay' },
};

export default function NeutralBayCommercialCleaningPage() {
    const serviceInfo = {
        title: 'Commercial Cleaning Neutral Bay NSW',
        description: "Neutral Bay is one of the Lower North Shore's most vibrant commercial precincts, anchored by the Military Road retail and restaurant strip and home to a concentrated cluster of professional services offices — from boutique law firms and financial advisers to marketing agencies, architectural studios, and real estate offices. The suburb's proximity to North Sydney's CBD-adjacent corporate market, combined with its own thriving village retail scene, creates a commercial cleaning environment that demands both high-end presentation and operational flexibility. Pro Clean Corp has been servicing the Lower North Shore business community for over 15 years, providing after-hours office cleaning, retail presentation cleaning, and professional-grade service to Neutral Bay's discerning business owners. Our police-checked, uniformed teams understand the premium standards expected in this market and deliver results that consistently reflect the quality of your brand.",
        benefits: [
            'Professional office cleaning for Law firms, financial advisers and creative agencies on the Lower North Shore',
            'Military Road retail strip cleaning delivering pristine presentation before trading hours each day',
            'Restaurant and hospitality venue cleaning compliant with NSW Food Authority standards',
            'After-hours scheduling ensuring zero disruption to staff and business operations',
            '$20M public liability insurance protecting Neutral Bay business owners and landlords',
            'Police-checked, professionally presented staff in line with premium North Shore expectations',
        ],
        process: [
            'Free Neutral Bay site assessment and consultation at a time that suits you',
            'Custom cleaning program designed around your business type and operating hours',
            'Professional cleaning delivered by vetted, uniformed and fully trained staff',
            'Quality sign-off after each clean and regular communication to maintain high standards',
        ],
        whyChooseUs: [
            '15+ years serving Neutral Bay and the Lower North Shore',
            '$20M public liability insurance',
            'Police-checked and uniformed cleaning staff',
            'Eco-friendly, low-VOC cleaning products',
            'After-hours and early-morning scheduling available',
            '100% satisfaction guarantee on every clean',
        ],
        serviceAreas: [
            'Cremorne',
            'Mosman',
            'Cammeray',
            'North Sydney',
            'Kirribilli',
            'Crows Nest',
            'Waverton',
            'Milsons Point',
        ],
        faqs: [
            {
                question: 'Do you provide regular office cleaning for professional firms in Neutral Bay?',
                answer: 'Yes. We service many professional services businesses along the Neutral Bay and Military Road corridor, including law firms, financial planning offices, real estate agencies, architectural studios, and medical specialists. Our after-hours office cleaning programs are tailored to each firm\'s layout and specific requirements.',
            },
            {
                question: 'Can you clean Military Road retail shops and restaurants in Neutral Bay?',
                answer: 'Absolutely. Military Road is one of Sydney\'s busiest retail and dining strips, and we have extensive experience cleaning boutique retailers, cafes, restaurants, and specialty food shops in this precinct. Restaurant cleaning includes kitchen degreasing, exhaust hood wiping, floor scrubbing, and front-of-house presentation to meet NSW Food Authority standards.',
            },
            {
                question: 'Do you offer strata building cleaning for Neutral Bay commercial blocks?',
                answer: 'Yes. We provide strata cleaning for commercial and mixed-use buildings throughout Neutral Bay, covering entrance foyers, lift cars, common corridors, car park areas, external bin enclosures, and ground-floor retail frontages. We work with building managers and owners corporations to schedule convenient, consistent service.',
            },
            {
                question: 'How do you handle security access for after-hours cleaning in Neutral Bay offices?',
                answer: 'We have well-established protocols for after-hours access, including key holding, fob access, and alarm set/disarm procedures. All our staff hold current police clearances and have experience operating within secure commercial premises. We carry full insurance and can provide references from other North Shore office clients.',
            },
            {
                question: 'Do you use eco-friendly cleaning products in Neutral Bay?',
                answer: 'Yes. We use biodegradable, low-VOC cleaning products across our Lower North Shore operations. These products are highly effective while being safer for staff, customers, and the environment — aligning with the sustainability expectations of many Neutral Bay businesses.',
            },
        ],
        images: [
            { src: '/images/services/commercial.webp', alt: 'Commercial cleaning Neutral Bay Lower North Shore NSW' },
            { src: '/images/services/office.webp', alt: 'Office cleaning Neutral Bay Military Road NSW' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Neutral Bay NSW"
                serviceDescription="Professional commercial cleaning services in Neutral Bay NSW. Office, retail, restaurant and strata cleaning for Lower North Shore businesses."
                serviceUrl="/commercial-cleaning-neutral-bay"
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
