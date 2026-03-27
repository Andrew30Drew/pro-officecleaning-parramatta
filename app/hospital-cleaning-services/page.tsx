import { Metadata } from 'next';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Hospital Cleaning Services Sydney | Healthcare Facility Cleaning | Pro Clean Corp',
    description: 'Professional hospital and healthcare facility cleaning services across Sydney. TGA-listed disinfectants, infection control protocols, AS/NZS 4146 compliant. Call 1300 494 983 for a specialist quote.',
    keywords: 'hospital cleaning services, hospital cleaning sydney, healthcare cleaning services sydney, hospital grade cleaning sydney, clinical cleaning services sydney, infection control cleaning sydney, medical facility cleaning sydney, operating theatre cleaning sydney',
    openGraph: {
        title: 'Hospital Cleaning Services Sydney | Healthcare Facility Cleaning | Pro Clean Corp',
        description: 'Hospital-grade cleaning for Sydney healthcare facilities. TGA-listed disinfectants, infection control protocols, clinical area specialists. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/hospital-cleaning-services',
        type: 'website',
        images: [{ url: '/images/services/commercial.webp', alt: 'Hospital cleaning services Sydney healthcare facility' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/hospital-cleaning-services' },
};

const faqs = [
    {
        question: 'What infection control standards do your hospital cleaning services follow?',
        answer: 'Our hospital cleaning services are aligned with the Australian Guidelines for the Prevention and Control of Infection in Healthcare (NHMRC 2019), AS/NZS 4146:2000 Laundry Practice, and relevant state health department environmental cleaning guidelines. We implement a colour-coded cleaning equipment system, correct product selection and dilution for each risk zone, terminal cleaning protocols for isolation rooms, and comprehensive staff training in infection prevention and control for healthcare environments.'
    },
    {
        question: 'Do you clean operating theatres and procedure rooms?',
        answer: 'Yes. We have specific expertise in the cleaning of operating theatres, procedure rooms, and day surgery units. This includes between-case cleaning (turnover cleans), terminal cleaning at end of list, and periodic deep decontamination. Our theatre cleaning teams are trained in correct sequencing, appropriate disinfectant selection (TGA-listed for surgical environments), and the stringent documentation requirements of clinical governance teams.'
    },
    {
        question: 'What products do you use for hospital cleaning?',
        answer: 'We use exclusively TGA-listed disinfectants appropriate to each healthcare zone — from general surface disinfectants for ward areas to sporicidal agents for C. diff isolation rooms and high-level disinfection solutions for specific clinical surfaces. Product selection is risk-stratified by zone: general areas, clinical contact areas, and critical care areas each have different product requirements. We document all products used in each area for infection control record purposes.'
    },
    {
        question: 'Can you provide hospital cleaning services 24/7?',
        answer: 'Yes. Hospitals operate 24 hours and so do we. We provide scheduled cleaning services aligned to your hospital\'s shift structure, reactive cleaning for spills and incidents at any time, and emergency deep cleaning or decontamination as required. We maintain an on-call supervisor and emergency cleaning team for Sydney hospitals requiring rapid response outside standard scheduling.'
    },
    {
        question: 'How do you handle cleaning during an infectious disease isolation event?',
        answer: 'We have established isolation cleaning protocols for all common healthcare-associated infection events — C. difficile, VRE, MRSA, norovirus, and respiratory viruses. These protocols specify correct PPE, entry and exit procedures for isolation rooms, appropriate disinfectant selection and contact times, waste management, and documentation for infection control records. Our teams can be briefed and deployed for isolation events within hours.'
    }
];

export default function HospitalCleaningServicesPage() {
    const serviceInfo = {
        title: 'Hospital Cleaning Services',
        description: 'Hospital-acquired infections are preventable — and environmental cleaning is one of the most critical prevention measures. Pro Clean Corp provides specialist hospital and healthcare facility cleaning services across Sydney, deploying TGA-listed disinfectants appropriate to each clinical zone, colour-coded cleaning systems to prevent cross-contamination, and staff trained specifically in infection prevention and control for healthcare environments. From ward cleaning and operating theatre turnovers to isolation room terminal cleans and emergency decontamination, our clinical cleaning teams operate to the standard that protects patients and supports your accreditation.',
        benefits: [
            'Clinical Zone Risk Stratification: Cleaning protocols and product selection stratified by risk zone — general areas, clinical contact surfaces, and critical care areas each treated to the appropriate standard.',
            'TGA-Listed Disinfectants: Therapeutic Goods Administration-listed disinfectants selected for proven efficacy against target organisms in each zone — including sporicidal agents for C. diff and high-level disinfectants for critical surfaces.',
            'Colour-Coded Equipment System: Strict colour-coded cloths, mops, and buckets for each clinical zone — zero cross-contamination between bathrooms, clinical areas, and general ward spaces.',
            'Operating Theatre Services: Specialised between-case turnover cleaning, terminal cleans at end of list, and periodic deep decontamination for theatres and procedure rooms.',
            'Isolation Room Terminal Cleaning: Full terminal clean protocols for vacated isolation rooms using appropriate sporicidal or antiviral agents, with documented verification of completion.',
            'Emergency Decontamination Response: On-call capability for spill response, outbreak-triggered enhanced cleaning, and emergency decontamination events — available 24/7 across Sydney.',
            'Compliance Documentation: Cleaning records, product logs, and staff competency documentation to support NSQHS Standards accreditation and infection control audits.'
        ],
        process: [
            'Clinical Environment Assessment: Facility walk-through with your infection control practitioner to map all cleaning zones, identify risk areas, review existing protocols, and agree on cleaning scope.',
            'Risk-Stratified Cleaning Plan: Zone-by-zone cleaning protocols with product specifications, frequencies, contact times, and documentation requirements for each area of your facility.',
            'Healthcare-Trained Cleaning Team: Staff with specific infection control training for healthcare environments allocated to your facility with consistent team membership.',
            'Quality Assurance & Audit Support: Supervisor checks, environmental monitoring support, cleaning records for infection control audits, and direct account manager contact for clinical governance liaison.'
        ],
        whyChooseUs: [
            'Healthcare Cleaning Specialists: Deep expertise in hospital and clinical facility cleaning — we understand the difference between cleaning for aesthetics and cleaning for infection control.',
            'TGA-Listed Products: Every disinfectant we use carries TGA listing — we never substitute unapproved products in clinical environments.',
            '$20M Public Liability Insurance: Full commercial insurance appropriate for healthcare facility environments, including clinical incident coverage.',
            'Police-Checked & Health Screened Staff: National Police Clearances and health screening for all staff working in clinical environments — mandatory for patient safety.',
            'NSQHS Standards Aligned: Cleaning services designed to support National Safety and Quality Health Service Standards accreditation, particularly Standard 3 (Preventing and Controlling Infections).',
            '24/7 Response Capability: Round-the-clock scheduling and emergency response for Sydney hospitals and day surgery facilities.'
        ],
        serviceAreas: [
            'Sydney CBD', 'Parramatta', 'Westmead', 'Blacktown',
            'Liverpool', 'Campbelltown', 'Penrith', 'Hornsby',
            'North Sydney', 'Chatswood', 'Randwick', 'Kogarah',
            'Hurstville', 'Sutherland', 'Castle Hill', 'Norwest'
        ],
        faqs,
        images: [
            { src: '/images/services/commercial.webp', alt: 'Hospital cleaning services Sydney healthcare facility infection control' },
            { src: '/images/services/commercial.webp', alt: 'Pro Clean Corp hospital grade cleaning clinical environment Sydney' }
        ],
        relatedServices: [
            'Medical Cleaning Sydney',
            'Aged Care Cleaning Sydney',
            'Hospital Grade Cleaning Sydney',
            'Childcare Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Hospital Cleaning Services Sydney"
                serviceDescription="Specialist hospital and healthcare facility cleaning services across Sydney. TGA-listed disinfectants, infection control protocols, operating theatre cleaning, isolation room terminal cleans, and 24/7 emergency response. NSQHS Standards aligned."
                serviceUrl="/hospital-cleaning-services"
                serviceType="ProfessionalService"
                price="$$$"
                additionalServices={['Operating Theatre Cleaning', 'Isolation Room Terminal Clean', 'Ward Cleaning', 'ICU Cleaning', 'Emergency Decontamination']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
        </>
    );
}
