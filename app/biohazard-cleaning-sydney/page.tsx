
import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Biohazard Cleaning Sydney | Trauma & Crime Scene Cleanup | Pro Clean Corp',
    description: 'Certified biohazard and trauma cleaning services in Sydney. PPE-equipped teams for bloodborne pathogen removal, crime scene cleanup, and certified hazardous waste disposal. Call 1300 494 983.',
    keywords: 'biohazard cleaning sydney, trauma cleaning sydney, crime scene cleaning sydney, blood cleanup sydney, bloodborne pathogen removal, hazardous waste cleaning, forensic cleaning sydney, sharps removal sydney, contamination cleaning, discreet biohazard service',
    openGraph: {
        title: 'Biohazard Cleaning Sydney | Trauma & Crime Scene Cleanup | Pro Clean Corp',
        description: 'Certified biohazard and trauma cleaning in Sydney. Discreet, compassionate, and fully equipped for bloodborne pathogen removal and crime scene remediation. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/biohazard-cleaning-sydney',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Biohazard cleaning Sydney - Pro Clean Corp' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/biohazard-cleaning-sydney' },
};

export default function BiohazardCleaningPage() {
    const serviceInfo = {
        title: "Biohazard Cleaning Sydney",
        description: "Pro Clean Corp provides certified biohazard and trauma cleaning services across Sydney, deploying fully PPE-equipped teams trained in bloodborne pathogen protocols, contamination control, and certified hazardous waste disposal. Biohazard situations — including trauma events, crime scenes, unattended deaths, and sewage contamination — demand more than standard cleaning; they require specialist training, hospital-grade disinfection, and strict regulatory compliance. Our teams respond rapidly, operate with complete discretion, and restore affected properties to safe, habitable condition. We work alongside families, property managers, insurance companies, and emergency services to provide a compassionate, professional, and thorough remediation service when it matters most.",
        benefits: [
            "PPE-Equipped Teams: All technicians wear full Level B/C PPE including respirators, suits, gloves, and eye protection for every biohazard job.",
            "Bloodborne Pathogen Removal: Certified cleanup of blood, bodily fluids, and infectious biological material using hospital-grade disinfectants.",
            "Crime Scene & Trauma Cleaning: Discreet, professional remediation of crime scenes, accident sites, and trauma-affected properties.",
            "Certified Hazardous Waste Disposal: All biohazardous materials are collected, packaged, and disposed of through certified waste management channels in compliance with NSW EPA regulations.",
            "Odour Elimination: Industrial-grade fogging and ozone treatments to permanently eliminate biohazard odours from affected structures.",
            "Discreet & Compassionate Service: Unmarked vehicles and non-uniformed teams available for sensitive residential situations requiring complete privacy."
        ],
        process: [
            "Risk Assessment & Containment: We assess the scene, establish contamination zones, and implement containment measures to prevent cross-contamination of unaffected areas.",
            "Biological Material Removal: Systematic removal of all biological contamination including blood, bodily fluids, tissue, and sharps using certified equipment and procedures.",
            "Deep Sanitisation & Disinfection: Hospital-grade disinfection of all affected surfaces, structures, and materials using EPA-approved biocidal agents proven effective against bloodborne pathogens.",
            "Odour Treatment & Clearance Certification: Ozone or fogging treatment to eliminate residual odours, followed by site clearance certification confirming the property is safe for re-occupancy."
        ],
        whyChooseUs: [
            "Certified Biohazard Technicians: All team members are trained and certified in biohazard remediation, bloodborne pathogen control, and hazardous waste handling.",
            "24/7 Emergency Response: We respond to biohazard situations around the clock across metropolitan Sydney and greater NSW.",
            "Hospital-Grade Disinfection: We use TGA-approved, hospital-grade disinfectants proven effective against all known bloodborne and airborne pathogens.",
            "NSW EPA Compliant Disposal: All biological waste is disposed of through licensed medical waste contractors in full compliance with NSW Environmental Protection Authority regulations.",
            "Discreet Service: Unmarked vehicles, non-branded uniforms, and complete operational confidentiality for sensitive residential and commercial situations.",
            "Fully Insured: $20 million public liability insurance with professional indemnity coverage for all biohazard remediation work."
        ],
        serviceAreas: ["Sydney CBD", "Parramatta", "North Sydney", "Chatswood", "Penrith", "Liverpool", "Blacktown", "Bondi", "Sutherland", "Hornsby"],
        faqs: [
            {
                question: "What qualifications do your biohazard cleaners hold?",
                answer: "Our biohazard technicians are trained and certified in biohazard remediation, bloodborne pathogen control (OSHA 29 CFR 1910.1030 equivalent), and hazardous waste handling. All staff are equipped with appropriate PPE and trained in contamination control procedures."
            },
            {
                question: "Is your biohazard cleaning service confidential?",
                answer: "Yes. We operate with complete discretion and confidentiality. We offer unmarked vehicles, non-branded uniforms, and do not discuss or disclose any details of the remediation work. All client information is kept strictly private."
            },
            {
                question: "How quickly can you respond to a biohazard situation?",
                answer: "We offer 24/7 emergency response for biohazard situations across Sydney. In most metropolitan areas we can deploy a certified team within 2–4 hours of your initial call to 1300 494 983."
            },
            {
                question: "Do you clean crime scenes and trauma sites?",
                answer: "Yes. We work alongside NSW Police, insurance companies, and property managers to clean and remediate crime scenes, accident sites, and trauma-affected properties. Our service includes coordination with relevant authorities and insurance documentation support."
            },
            {
                question: "Do you provide a clearance certificate after biohazard cleaning?",
                answer: "Yes. Upon completion of all biohazard remediation work, we provide a written site clearance certificate confirming that the property has been professionally decontaminated and is safe for re-occupancy, suitable for insurance and property management records."
            }
        ],
        images: [
            { src: "/images/services/commercial.webp", alt: "Biohazard cleaning Sydney - certified contamination removal" },
            { src: "/images/services/commercial.webp", alt: "Pro Clean Corp Sydney trauma and crime scene cleaning" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Biohazard Cleaning Sydney"
                serviceDescription="Certified biohazard and trauma cleaning services in Sydney. PPE-equipped teams for bloodborne pathogen removal, crime scene cleanup, and NSW EPA compliant hazardous waste disposal."
                serviceUrl="/biohazard-cleaning-sydney"
                serviceType="Biohazard & Trauma Cleaning"
                price="$$$"
                additionalServices={["Trauma Cleaning", "Crime Scene Cleaning", "Bloodborne Pathogen Removal", "Hazardous Waste Disposal", "Odour Elimination"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
