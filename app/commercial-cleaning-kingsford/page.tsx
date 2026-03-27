import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Commercial Cleaning Kingsford NSW | Medical, Retail & Office Cleaners | Pro Clean Corp',
    description: 'Expert commercial cleaning in Kingsford NSW. UNSW adjacent medical, retail & offices on Anzac Parade. Fully insured, police-checked cleaners. Call us today!',
    keywords: 'commercial cleaning Kingsford, office cleaning Kingsford, medical cleaning Kingsford NSW, retail cleaning Kingsford, Anzac Parade commercial cleaning',
    openGraph: {
        title: 'Commercial Cleaning Kingsford NSW | Pro Clean Corp',
        description: 'Professional commercial cleaning for Kingsford medical centres, retail businesses, and offices along Anzac Parade. Serving Eastern Sydney with reliable, insured cleaning teams.',
        url: 'https://www.procleancorp.com.au/commercial-cleaning-kingsford',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Commercial cleaning Kingsford NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/commercial-cleaning-kingsford' },
};

export default function KingsfordCommercialCleaningPage() {
    const serviceInfo = {
        title: "Commercial Cleaning Kingsford NSW",
        description: "Kingsford is a vibrant commercial hub in Sydney's Eastern Suburbs, defined by the busy Anzac Parade strip that runs through its heart and the powerful influence of nearby UNSW Sydney. This combination drives enormous foot traffic through Kingsford's diverse mix of restaurants, retail shops, medical practices, pharmacies, real estate offices, and professional service businesses — all of which demand frequent, high-standard commercial cleaning to maintain the hygiene and presentation that customers and patients expect. Pro Clean Corp delivers reliable commercial cleaning throughout Kingsford, with specialist capability across medical facilities requiring infection control protocols, high-turnover food and hospitality premises, and professional office environments seeking consistent daily maintenance. Our Eastern Suburbs team is experienced, discreet, and well-versed in the unique requirements of businesses operating in this dense, high-activity commercial precinct.",
        benefits: [
            "High-frequency retail and hospitality cleaning for Anzac Parade's busiest businesses",
            "Medical and dental clinic cleaning using TGA-approved hospital-grade disinfectants",
            "Professional office cleaning for real estate, finance, and professional service businesses",
            "Restaurant and food premises cleaning compliant with NSW Food Authority hygiene standards",
            "Pharmacy and health retail cleaning with appropriate product selection for regulated environments",
            "After-hours and pre-opening cleans minimising disruption to Kingsford's high-traffic businesses"
        ],
        process: [
            "Free Kingsford site assessment and compliance review for your specific business type",
            "Custom cleaning plan aligned with your Kingsford trading hours and hygiene requirements",
            "Professional cleaning by police-checked, uniformed technicians experienced in Eastern Sydney",
            "Quality inspection and sign-off with responsive account management and real-time feedback"
        ],
        whyChooseUs: [
            "15+ years serving Kingsford and Eastern Suburbs businesses",
            "Fully insured with $20M public liability coverage",
            "Police-checked, uniformed, and professionally trained cleaning staff",
            "Commercial-grade eco-friendly and medically certified cleaning products",
            "Flexible early morning, daytime, and late-evening scheduling",
            "100% satisfaction guarantee on every clean"
        ],
        serviceAreas: ["Randwick", "Kensington", "Coogee", "Maroubra", "Pagewood", "Botany", "Rosebery", "Eastgardens"],
        faqs: [
            {
                question: "Do you provide daily cleaning for restaurants and cafes on Anzac Parade, Kingsford?",
                answer: "Yes. Restaurant and hospitality cleaning is a major part of our Kingsford operation. We provide pre-opening cleans, post-service deep cleans, and daily maintenance cleaning that covers kitchen surfaces, dining areas, toilets, and front-of-house presentation — all compliant with NSW Food Authority hygiene requirements."
            },
            {
                question: "Can you clean medical and dental practices in Kingsford?",
                answer: "Absolutely. We provide infection-control-standard cleaning for GP clinics, dental surgeries, specialist rooms, and allied health practices throughout Kingsford. We use TGA-listed disinfectants, colour-coded equipment, and documented cleaning schedules that satisfy accreditation body and Medicare compliance expectations."
            },
            {
                question: "Do you offer after-hours cleaning for busy Kingsford retail and office businesses?",
                answer: "Yes. After-hours cleaning is the preferred option for most of our Kingsford clients. We schedule cleaning after close of business or before opening to ensure your staff and customers always arrive to a spotless environment without any disruption to your daily operations."
            },
            {
                question: "Can you service student-focused retail and service businesses near UNSW in Kingsford?",
                answer: "Definitely. We understand the high-turnover, high-foot-traffic nature of student-adjacent businesses in Kingsford. We offer flexible cleaning frequencies — daily, several times per week, or weekly — with the ability to scale up during peak periods such as university orientation or exam season."
            },
            {
                question: "Are your Kingsford cleaning products safe for the dense residential and commercial environment?",
                answer: "Yes. All products used in Kingsford are eco-certified, low-VOC, and where required, food-safe and medically appropriate. We are mindful of the mixed-use nature of Kingsford's buildings and always select products that are safe for staff, customers, adjacent residents, and stormwater systems."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Commercial cleaning Kingsford NSW" },
            { src: "/images/services/office.webp", alt: "Medical and retail cleaning Kingsford Anzac Parade" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Commercial Cleaning Kingsford NSW"
                serviceDescription="Professional commercial cleaning for medical centres, retail businesses, restaurants, and offices in Kingsford along Anzac Parade and the UNSW Eastern Suburbs precinct."
                serviceUrl="/commercial-cleaning-kingsford"
                serviceType="Commercial Cleaning"
                price="$$"
                additionalServices={["Office Cleaning", "Retail Cleaning", "Warehouse Cleaning", "Strata Cleaning", "Industrial Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
