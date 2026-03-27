import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Gym Cleaning Wetherill Park NSW | Fitness Centre Cleaning | Pro Clean Corp',
    description: 'Professional gym and fitness centre cleaning in Wetherill Park NSW. TGA-approved disinfectants, equipment sanitisation, locker room deep cleans. Flexible scheduling. Free quote.',
    keywords: 'gym cleaning Wetherill Park, fitness centre cleaning Wetherill Park, health club cleaning Wetherill Park NSW',
    openGraph: {
        title: 'Gym Cleaning Wetherill Park NSW | Pro Clean Corp',
        description: 'Expert gym and fitness centre cleaning services in Wetherill Park NSW. Equipment sanitisation, locker room deep cleans, and flexible after-hours scheduling.',
        url: 'https://www.procleancorp.com.au/gym-cleaning-wetherill-park',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/gym.webp', alt: 'Gym cleaning Wetherill Park NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-wetherill-park' },
};

export default function GymCleaningWetherillParkPage() {
    const serviceInfo = {
        title: 'Gym Cleaning Wetherill Park NSW',
        description: 'Pro Clean Corp delivers specialist gym and fitness centre cleaning throughout Wetherill Park and the Fairfield industrial corridor. Our dedicated team services everything from free weight zones and cardio floors through to locker rooms and wet areas, applying TGA-approved disinfectants to every high-contact surface. Wetherill Park gyms serve a diverse, high-volume membership base drawn from the surrounding industrial workforce and residential communities, and we tailor our schedule around your trading hours to ensure zero disruption to operations.\n\nWetherill Park and the Fairfield LGA have a strong fitness culture, with numerous gyms, health clubs and martial arts studios serving the local community. The area\'s industrial setting means many members visit before or after long physical workdays, making robust hygiene essential to their recovery and wellbeing. Our Wetherill Park gym cleaning teams are locally based in Western Sydney, familiar with the area\'s facilities, and equipped with everything needed to deliver a comprehensive, verifiable clean on every visit. We bring all tools, products and equipment — all you need to provide is access. From a pre-dawn deep clean before your 5am opening to a post-closing sanitisation run, we work around your schedule with no disruption to members.',
        benefits: [
            "Equipment sanitisation between every session using TGA-approved disinfectants that kill 99.9% of bacteria, viruses and fungi on all gym surfaces including weights, barbells, benches and resistance machines",
            "Locker room and shower deep cleaning applying strict commercial hygiene standards with anti-mould treatment on all grout lines, tile surfaces and drainage areas to prevent fungal growth and odour accumulation",
            "Free weight area and cardio machine wipe-down protocols covering every piece of equipment from barbells and kettlebells to treadmills, rowing machines and stationary bikes including all handlebars and screens",
            "Change room and toilet sanitisation using hospital-grade disinfectants applied to all surfaces, fixtures, drainage areas and ventilation surrounds to maintain clinical hygiene standards throughout wet zones",
            "Reception and entry area daily presentation cleaning covering all countertops, check-in terminals, water stations, entry doors, glass surfaces and flooring to create a positive first impression for every member",
            "Flexible early morning or late night cleaning windows scheduled specifically around your member trading hours to deliver a spotless facility without inconveniencing your membership base at any time"
        ],
        process: [
            "Comprehensive gym facility walkthrough and equipment audit to identify all surface types, high-contact zones, wet areas and access requirements before developing a detailed written service proposal tailored to Wetherill Park",
            "Custom cleaning schedule developed in consultation with your facility manager, aligned with Wetherill Park gym opening hours, peak usage periods and any operational constraints on cleaning windows or noise levels",
            "Daily equipment sanitisation and systematic zone cleaning executed by a trained, dedicated team using colour-coded microfibre cloths, correct product dilutions and a signed-off checklist after every visit",
            "Weekly deep clean of all zones with a comprehensive quality inspection sign-off, followed by a monthly account review to discuss any feedback, evolving needs or adjustments to the service scope or frequency"
        ],
        whyChooseUs: [
            "Specialist gym and fitness centre cleaning experience serving facilities across Wetherill Park, Fairfield, Smithfield, Greystanes and the broader Western Sydney industrial and residential corridor",
            "All products TGA-approved, gym-safe and specifically selected to protect equipment surfaces, rubber flooring, vinyl upholstery and digital screens from damage caused by inappropriate cleaning chemicals",
            "Flexible scheduling capability covering any trading hour window — early morning from 3am, mid-shift during quiet periods, after-closing overnight — to ensure your facility is always clean without disrupting members",
            "Police-checked uniformed staff holding current Working With Children Checks where applicable, with $20M public liability insurance and comprehensive training in fitness facility hygiene and cross-contamination prevention",
            "Twenty million dollar public liability insurance coverage providing full peace of mind that your facility, equipment and members are protected against any cleaning-related incidents during service delivery",
            "100% satisfaction guarantee on every service — if any aspect of the clean does not meet your standards, we will return within 24 hours to remedy it at no additional charge, every single time"
        ],
        serviceAreas: ['Fairfield', 'Smithfield', 'Horsley Park', 'Prospect', 'Yennora', 'Prairiewood', 'Bossley Park', 'Greystanes', 'Woodville', 'Merrylands'],
        faqs: [
            {
                question: 'How often should a gym in Wetherill Park be professionally cleaned?',
                answer: 'High-traffic gyms in Wetherill Park should have daily equipment sanitisation as an absolute minimum, plus a weekly deep clean of all areas including locker rooms, shower blocks, free weight zones and change rooms. For facilities with 300 or more daily visits, we recommend a full professional clean every single day to maintain hygiene standards that protect members from bacteria, fungi and viruses that accumulate rapidly on shared fitness equipment and in wet areas.',
            },
            {
                question: 'What products do you use for gym cleaning in Wetherill Park?',
                answer: 'We use TGA-approved, gym-safe disinfectants that kill 99.9% of bacteria, viruses and fungi without damaging equipment surfaces, rubber flooring or leaving residue on weights and machines. Our product range includes hospital-grade quaternary ammonium disinfectants for equipment, enzymatic deodourisers for wet areas, pH-neutral floor cleaners for rubber and vinyl surfaces, and commercial descaling agents for shower and bathroom tiles.',
            },
            {
                question: 'Do you clean gym equipment surfaces?',
                answer: 'Yes. We clean and sanitise every piece of equipment in your Wetherill Park gym including cardio machines, weight benches, barbells, dumbbells, resistance machines, cable systems, functional training rigs, yoga and exercise mats, foam rollers, boxing equipment and all other high-touch surfaces. Our systematic equipment cleaning protocol ensures no item is missed and all products are applied with correct dwell times for maximum antimicrobial efficacy.',
            },
            {
                question: 'Can you clean our Wetherill Park gym after closing hours?',
                answer: 'Yes. We specialise in after-hours and early morning gym cleaning to ensure your facility is spotless and fresh before members arrive without disrupting your trading hours. Our Wetherill Park teams are available from 3am and regularly service 24-hour gyms during the quietest overnight window. All after-hours staff are police-checked, trained for unsupervised access and carry full identification and access credentials.',
            },
            {
                question: 'Do you provide gym cleaning contracts in Wetherill Park?',
                answer: 'Yes. We offer flexible weekly, fortnightly and monthly service contracts for gyms in Wetherill Park with no lock-in periods required. We are confident in our service quality and prefer clients to stay because they are satisfied with the results rather than because they are contractually obligated. All quotes are free and detailed — call 1300 494 983 or enquire online for a fast response and site assessment.',
            },
        ],
        images: [
            { src: '/images/services/gym.webp', alt: 'Gym cleaning Wetherill Park NSW' },
            { src: '/images/services/commercial.webp', alt: 'Fitness centre cleaning Wetherill Park' },
        ],
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Gym Cleaning Wetherill Park NSW"
                serviceDescription="Professional gym and fitness centre cleaning in Wetherill Park NSW. TGA-approved disinfectants, equipment sanitisation, locker room deep cleans."
                serviceUrl="/gym-cleaning-wetherill-park"
                serviceType="Gym & Fitness Centre Cleaning"
                price="$$"
                additionalServices={['Equipment Sanitisation', 'Locker Room Cleaning', 'Change Room Cleaning', 'Reception Cleaning', 'Deep Clean Services']}
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
                            { href: '/gym-cleaning-silverwater', label: 'Gym Cleaning Silverwater' },
                            { href: '/gym-cleaning-seven-hills', label: 'Gym Cleaning Seven Hills' },
                            { href: '/commercial-cleaning-sydney', label: 'Commercial Cleaning Sydney' },
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
