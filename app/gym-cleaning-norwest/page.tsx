import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Gym Cleaning Norwest NSW | Fitness Centre Cleaning Norwest Business Park | Pro Clean Corp',
    description: 'Professional gym cleaning in Norwest & Baulkham Hills NSW. Fitness centres, corporate health clubs & Norwest Business Park gyms. Equipment sanitisation & locker rooms. Call 1300 494 983.',
    keywords: 'gym cleaning Norwest, fitness centre cleaning Norwest, gym cleaning Norwest Business Park, health club cleaning Baulkham Hills, corporate gym cleaning Norwest NSW, fitness cleaning Hills District',
    openGraph: {
        title: 'Gym Cleaning Norwest NSW | Fitness Centre Cleaning Norwest Business Park | Pro Clean Corp',
        description: 'Expert gym & corporate fitness centre cleaning in Norwest. Equipment sanitisation, locker rooms & high-touch surface disinfection in Norwest Business Park. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/gym-cleaning-norwest',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/gym.webp', alt: 'Gym cleaning services in Norwest NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-norwest' },
};

export default function GymCleaningNorwestPage() {
    const serviceInfo = {
        title: "Gym Cleaning Norwest NSW",
        description: "Pro Clean Corp specialises in gym and fitness centre cleaning for Norwest Business Park, Baulkham Hills and the surrounding Hills District. Norwest's thriving corporate precinct hosts a growing number of high-end fitness facilities, corporate wellness centres and boutique gyms catering to the area's professional workforce. These facilities require meticulous hygiene standards to match the premium expectations of their members and the corporate tenants who manage them.\n\nOur specialist teams deliver consistent, thorough cleaning of all equipment, wet areas and communal zones, using products and protocols that meet commercial hygiene benchmarks while respecting the premium presentation standards that Norwest facilities demand. We understand the Norwest Business Park environment — including building access systems, security requirements and strata management protocols — and schedule our services to fit your facility's operating hours perfectly. Whether you manage a corporate gym within a Norwest Business Park tower, a standalone health club on Windsor Road, or a boutique studio in Baulkham Hills, Pro Clean Corp provides the professional, discreet cleaning service your facility requires.",
        benefits: [
            "Corporate gym and wellness centre cleaning specifically tailored to Norwest Business Park facility standards, with professionally presented uniformed staff who project the right image in premium commercial environments",
            "Full equipment sanitisation programme covering all cardio machines, resistance equipment, free weights, functional training rigs and cable systems — every piece cleaned to a showroom standard on every visit",
            "Locker room and change room deep clean with individual locker handle sanitisation, bench disinfection, shower block descaling and full anti-mould treatment applied to all grout lines and tile surfaces",
            "Premium shower block servicing using commercial-grade anti-bacterial and anti-mould treatments, combined with fixture polishing and careful presentation of dispensers, hooks and storage areas",
            "High-frequency cleaning of reception areas, member check-in stations, water stations and entry points to address all member touchpoints and maintain the immaculate first impression that Norwest members expect",
            "Discreet, professional service delivery appropriate for corporate business park environments, with all staff carrying identification, wearing uniforms and adhering to any site-specific induction or access requirements"
        ],
        process: [
            "Initial consultation and comprehensive site assessment of your Norwest gym or corporate wellness facility, including an audit of all zones, surface types, equipment inventory and access protocols specific to Norwest Business Park",
            "Customised cleaning programme aligned with Norwest Business Park access protocols, your facility's operational schedule and the presentation standards expected by corporate tenants and their staff members",
            "Systematic equipment and zone cleaning by professionally presented, security-cleared staff working to a detailed checklist, with colour-coded equipment preventing cross-contamination across zones",
            "Monthly service reviews with your dedicated account manager to ensure ongoing satisfaction, address any evolving needs and adjust scope as your membership grows or your facility undergoes changes"
        ],
        whyChooseUs: [
            "Established experience cleaning corporate gyms, wellness centres and boutique fitness studios across Norwest, Bella Vista, Castle Hill and the broader Hills District, with a deep understanding of the local market",
            "Professionally presented, police-checked and uniformed cleaning teams whose appearance and conduct are suited to premium corporate business park environments where presentation matters as much as hygiene",
            "Flexible contract structures aligned with commercial property lease cycles and corporate budgeting processes common in the Norwest Business Park precinct, with month-to-month options also available",
            "Eco-certified product range available for facilities operating within green-star rated buildings that have specific requirements around VOC levels, biodegradability and environmental impact of cleaning chemicals",
            "Consistent team allocation ensuring the same trusted cleaners service your facility on every visit, building familiarity with your building's layout, access system and the specific expectations of your management team",
            "Responsive account management with a direct escalation path for any service concerns, with a commitment to responding to all issues within four business hours and resolving them within 24 hours"
        ],
        serviceAreas: ["Norwest", "Bella Vista", "Castle Hill", "Baulkham Hills", "Kellyville", "Rouse Hill", "Schofields", "Seven Hills", "Winston Hills", "Stanhope Gardens"],
        faqs: [
            {
                question: "Do you clean corporate gym facilities in Norwest Business Park?",
                answer: "Yes. We have specific experience working within Norwest Business Park's access management systems and building management requirements. Our staff can be inducted, badged and briefed to comply with any site-specific protocols required by the building owner, strata manager or corporate tenant. We understand the professional expectations of this premium precinct and ensure our service delivery reflects those standards on every visit."
            },
            {
                question: "Can you service a gym that is only available outside business hours in Norwest?",
                answer: "Absolutely. Many Norwest corporate facilities prefer cleaning between 6pm and 6am to avoid disrupting staff use of the gym during the working day and evening peak. We accommodate any access window with appropriately scheduled, supervised and security-cleared teams. Our after-hours capability extends to 24-hour facilities requiring overnight cleaning between midnight and 5am without any disruption to early-morning users."
            },
            {
                question: "Do you handle boutique fitness studios as well as large gyms in Norwest?",
                answer: "Yes. We clean everything from 300–400 square metre boutique Pilates, yoga and barre studios through to 2,000 square metre corporate health and wellness centres across the Norwest and Hills District area. Our service approach scales to the facility — small studios receive the same attention to detail and product quality as large multi-floor health clubs, with pricing structured fairly to reflect the actual scope of work involved."
            },
            {
                question: "What makes your gym cleaning different for Norwest's premium facilities?",
                answer: "We understand that Norwest gym members and corporate clients expect a premium experience in every detail. Our teams pay close attention to presentation as well as clinical hygiene — straightening equipment accessories, polishing stainless fixtures, aligning mat storage and ensuring every zone of the facility looks showroom-ready at all times. This combination of hygiene and presentation is what distinguishes Pro Clean Corp in the Norwest corporate market."
            },
            {
                question: "How do I request a quote for gym cleaning in Norwest?",
                answer: "Call us on 1300 494 983 or complete our online contact form and we will arrange a convenient site visit to your Norwest facility. After the assessment we deliver a detailed, itemised quote within 24 hours covering all zones, service frequencies and pricing. There is no obligation, and our site visits are conducted at a time that minimises disruption to your members or corporate tenants."
            }
        ],
        images: [
            { src: "/images/services/gym.webp", alt: "Corporate gym cleaning services in Norwest Business Park NSW" },
            { src: "/images/services/gym.webp", alt: "Fitness centre cleaning Norwest Baulkham Hills Hills District" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Gym Cleaning Norwest"
                serviceDescription="Professional gym and fitness centre cleaning in Norwest NSW and Norwest Business Park, including corporate wellness centres, equipment sanitisation and locker room cleaning."
                serviceUrl="/gym-cleaning-norwest"
                serviceType="Gym & Fitness Centre Cleaning"
                price="$$"
                additionalServices={["Corporate Wellness Centre Cleaning", "Locker Room Sanitisation", "Equipment Disinfection", "Yoga & Studio Floor Cleaning", "Reception Area Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-darkblue mb-6">Related Gym & Cleaning Services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { href: '/gym-cleaning-sydney', label: 'Gym Cleaning Sydney' },
                            { href: '/gym-cleaning-services-sydney', label: 'Gym Cleaning Services Sydney' },
                            { href: '/commercial-cleaning', label: 'Commercial Cleaning Services' },
                            { href: '/gym-cleaning-seven-hills', label: 'Gym Cleaning Seven Hills' },
                            { href: '/gym-cleaning-hornsby', label: 'Gym Cleaning Hornsby' },
                            { href: '/office-cleaning-marsden-park', label: 'Office Cleaning Marsden Park' },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="block p-4 bg-slate-50 rounded-lg hover:bg-green-50 hover:text-greenprimary transition-colors font-medium text-gray-700">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
