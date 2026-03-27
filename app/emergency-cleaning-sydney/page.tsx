import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Emergency Cleaning Sydney | 24/7 Emergency Cleaning Services | Pro Clean Corp',
    description: 'Pro Clean Corp provides 24/7 emergency cleaning in Sydney for flood, fire, sewage, and biohazard incidents. Same-day mobilisation. Insurance work accepted.',
    keywords: 'emergency cleaning sydney, 24/7 emergency cleaning, flood cleaning sydney, fire damage cleaning, sewage cleanup sydney, biohazard cleaning, same day emergency cleaning, disaster cleaning sydney, trauma cleaning, emergency commercial cleaning',
    openGraph: {
        title: 'Emergency Cleaning Sydney | 24/7 Emergency Cleaning Services | Pro Clean Corp',
        description: '24/7 emergency cleaning across Sydney. Flood, fire, sewage, and biohazard response with same-day mobilisation and insurance claim support.',
        url: 'https://www.procleancorp.com.au/emergency-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Emergency cleaning Sydney 24/7 rapid response team' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/emergency-cleaning-sydney' },
};

export default function EmergencyCleaningSydneyPage() {
    const serviceInfo = {
        title: "Emergency Cleaning Sydney | 24/7 Rapid Response",
        description: "When disaster strikes, Pro Clean Corp is ready around the clock with rapid emergency cleaning services across Sydney. Our specialist teams respond to flood, fire, sewage overflow, biohazard, and trauma incidents with same-day mobilisation and industry-certified equipment. We work directly with insurers and loss adjusters to document, remediate, and restore your property as quickly as possible, minimising business downtime and health risks. No after-hours price gouging — transparent pricing confirmed before work begins, any time of day or night.",
        benefits: [
            "24/7 availability with guaranteed same-day mobilisation across Greater Sydney",
            "Trained response teams for flood, fire, sewage, and biohazard incidents",
            "Full insurance claim documentation and direct insurer liaison at no extra charge",
            "Industrial water extraction, drying, and decontamination equipment on standby",
            "OH&S compliant containment protocols to protect occupants and staff",
            "Rapid property restoration to minimise business and residential downtime"
        ],
        process: [
            "Emergency call assessment — our 24/7 dispatcher takes details immediately and deploys the nearest available crew to your Sydney location",
            "On-site safety evaluation, hazard identification, and containment to prevent cross-contamination to unaffected areas",
            "Industrial remediation commences immediately — water extraction, structural drying, decontamination, and sanitisation",
            "Full completion documentation including before/after evidence, clearance report, and insurer-ready scope of works"
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
                question: "How quickly can Pro Clean Corp respond to an emergency cleaning call in Sydney?",
                answer: "Our emergency teams are stationed across Greater Sydney and can typically arrive on-site within 2–4 hours of your call, 24 hours a day, 7 days a week including public holidays. We dispatch the nearest available crew immediately upon your call."
            },
            {
                question: "Do you handle flood and sewage cleaning incidents in Sydney?",
                answer: "Yes. We are fully equipped for flood water extraction, sewage overflow decontamination, and structural drying. Our teams use industrial-grade pumps, wet vacuums, desiccant dehumidifiers, and EPA-approved disinfectants to make affected areas safe and habitable again."
            },
            {
                question: "Can you clean up after a fire or smoke damage event?",
                answer: "Absolutely. Our fire and smoke damage cleaning includes soot removal using chemical sponging, smoke odour treatment via thermal fogging and ozone generation, surface decontamination, and structural drying to address water damage from firefighting activities."
            },
            {
                question: "Do you work with insurance companies for emergency cleaning claims?",
                answer: "Yes. We liaise directly with all major Australian insurers and loss adjusters, providing detailed photographic and written documentation of the damage and remediation work completed, which supports your insurance claim and streamlines the approval process."
            },
            {
                question: "Are your emergency cleaners trained in biohazard safety?",
                answer: "All our emergency response staff are trained in WHS protocols, PPE use, and biohazard containment procedures. We follow Australian Standards for the safe handling and disposal of contaminated waste, including sewage, blood, and other Category 2 and 3 biohazards."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Emergency cleaning team Sydney 24/7 rapid response" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney emergency cleaning services" }
        ]
    };
    return (
        <>
            <ServiceStructuredData
                serviceName="Emergency Cleaning Sydney"
                serviceDescription="24/7 emergency cleaning services in Sydney for flood, fire, sewage, and biohazard incidents with same-day mobilisation and full insurance documentation."
                serviceUrl="/emergency-cleaning-sydney"
                serviceType="Emergency Cleaning"
                price="$$"
                additionalServices={["Flood Damage Cleaning", "Fire Damage Cleaning", "Sewage Cleanup", "Biohazard Cleaning", "Trauma Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
