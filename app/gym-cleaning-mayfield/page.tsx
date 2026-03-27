import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Gym Cleaning Mayfield NSW | Fitness Centre Cleaning Services | Pro Clean Corp',
    description: 'Professional gym cleaning in Mayfield NSW (Newcastle area). Equipment sanitisation, locker rooms, change rooms & free weight areas. Serving Mayfield, Waratah, Hamilton & surrounds. Call 1300 494 983.',
    keywords: 'gym cleaning Mayfield, fitness centre cleaning Mayfield, gym cleaning Mayfield Newcastle, health club cleaning Mayfield NSW, locker room cleaning Mayfield, commercial gym cleaning Newcastle',
    openGraph: {
        title: 'Gym Cleaning Mayfield NSW | Fitness Centre Cleaning Services | Pro Clean Corp',
        description: 'Expert gym & fitness centre cleaning in Mayfield, Newcastle. Equipment sanitisation, change rooms, locker rooms & high-touch surface disinfection. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/gym-cleaning-mayfield',
        type: 'website',
        images: [{ url: 'https://www.procleancorp.com.au/images/services/gym.webp', alt: 'Gym cleaning services in Mayfield NSW' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-mayfield' },
};

export default function GymCleaningMayfieldPage() {
    const serviceInfo = {
        title: "Gym Cleaning Mayfield NSW",
        description: "Pro Clean Corp delivers premium gym and fitness centre cleaning services in Mayfield and across the Newcastle inner suburbs. As one of Newcastle's most accessible industrial and residential areas, Mayfield hosts a diverse range of fitness facilities — from traditional weights gyms to functional fitness studios and martial arts academies — each with distinct hygiene requirements that our specialist teams are equipped to address. Our industrial-grade disinfectants and purpose-built tools sanitise every corner of your facility, from the free weight floor to the furthest shower cubicle.\n\nMayfield's fitness community has grown steadily alongside Newcastle's inner-city renewal, with members expecting the same high standards they'd find in a Sydney facility. We understand that member satisfaction hinges on cleanliness, and we work around your schedule to deliver spotless results every single time. Our Mayfield gym cleaning teams are familiar with Newcastle's local facilities, access systems and building requirements, ensuring smooth, professional service delivery from day one. We operate seven days per week and can accommodate any cleaning window — pre-opening, post-closing, or between morning and evening peak sessions — to keep your Mayfield gym in top condition without disrupting your members.",
        benefits: [
            "Comprehensive free weight area cleaning covering every barbell, kettlebell, dumbbell, weight plate, cable attachment and lifting platform to remove sweat, chalk residue and bacteria buildup after each session",
            "Full locker room and change room servicing including individual bench sanitisation, locker exterior wiping, grout scrubbing, drain clearing and complete mould treatment applied to all wet surfaces",
            "Machine-by-machine equipment wipe-down covering all resistance machines and cardio units including touchscreens, handlebars, seat adjustment mechanisms, foot pedals and all secondary contact points",
            "Shower and toilet deep clean using commercial-grade anti-bacterial and anti-fungal products applied with correct dwell times to grout, tiles, fixtures and drainage areas to eliminate pathogens effectively",
            "Stretching and functional fitness area floor cleaning with full mat sanitisation, mirror polishing and equipment storage area organisation to maintain a safe, presentable training environment",
            "Reception, water station and entry point disinfection to address all member touchpoints from the moment they enter the facility through to checkout, creating a consistently hygienic experience"
        ],
        process: [
            "Site visit and detailed assessment of your Mayfield gym to understand layout, equipment volume, surface types and cleaning priorities, followed by a written scope document and service proposal within 24 hours",
            "Structured cleaning plan developed in consultation with your facility manager, covering pre-opening, post-closing or between-session windows that protect your membership experience and minimise operational disruption",
            "Systematic zone-by-zone clean executed using colour-coded cloths and hospital-grade disinfectants throughout the facility, with dedicated equipment sets for wet areas to prevent cross-contamination",
            "Quality review and sign-off by the team leader after every visit, with access to ATP surface testing on request to provide objective verification of hygiene results across all key contact surfaces"
        ],
        whyChooseUs: [
            "Specialist knowledge of Newcastle-area fitness facilities including the Mayfield, Hamilton, Islington and Maryville markets, with an understanding of local facility formats, membership profiles and operator expectations",
            "Fully insured with $20M public liability coverage and police-checked teams with comprehensive training in fitness facility hygiene protocols and cross-contamination prevention techniques",
            "Eco-friendly, athlete-safe cleaning products that protect rubber floors, vinyl upholstery, chrome and metal equipment from corrosion, discolouration or degradation caused by harsh cleaning chemicals",
            "Consistent staffing model so you build genuine trust with the same dedicated cleaning team at your Mayfield facility, reducing security concerns and maintaining service continuity across every visit",
            "Competitive rates with no lock-in contracts — scale up or adjust your service frequency as your membership grows or seasonal demand changes, with no penalties for modifications",
            "Emergency cleaning and rapid response available for biohazard incidents, blood spills, illness outbreaks or post-event deep cleans requiring same-day or next-day deployment of our Mayfield team"
        ],
        serviceAreas: ["Mayfield", "Waratah", "Hamilton", "Broadmeadow", "Jesmond", "Georgetown", "Wickham", "Islington", "Tighes Hill", "Maryville"],
        faqs: [
            {
                question: "Do you service gyms throughout the Mayfield and Newcastle inner suburbs?",
                answer: "Yes. We clean fitness facilities across Mayfield, Waratah, Hamilton, Broadmeadow, Wickham, Georgetown, Islington, Tighes Hill, Maryville and all surrounding Newcastle inner suburbs. Our Newcastle team is locally based and familiar with the area's facilities and access requirements. Contact us to confirm coverage for your specific location and we will arrange a free site assessment at your convenience."
            },
            {
                question: "What is included in a standard gym clean in Mayfield?",
                answer: "A standard clean includes all exercise equipment sanitisation using hospital-grade disinfectants, floor mopping and vacuuming of gym floor and reception area, change room and shower block deep cleaning with anti-mould treatment, full toilet servicing and restocking, locker room wipe-down including bench and locker handle sanitisation, mirror cleaning, reception surface disinfection and waste removal. We can also include café areas, group fitness studios and any additional zones specific to your facility."
            },
            {
                question: "Can you clean our gym seven days a week in Mayfield?",
                answer: "Yes. We operate seven days a week including weekends and all NSW public holidays. For gyms open daily, we recommend a minimum of five professional cleans per week with weekend maintenance visits included to maintain hygiene standards across the full week. For 24-hour facilities or those with very high membership volumes, daily cleaning is strongly recommended and we can accommodate any access window that works with your operations."
            },
            {
                question: "Are your products safe for children who use the gym?",
                answer: "Absolutely. We use plant-based and non-toxic disinfectants that are certified safe for all users including children attending family fitness sessions, toddler gym classes or school holiday programs. Our products meet commercial hygiene standards and are effective against bacteria and viruses while containing no harsh chemical residues that could affect young users. All products are fully listed with their safety data sheets available on request."
            },
            {
                question: "How quickly can you start gym cleaning in Mayfield?",
                answer: "In most cases we can begin service within 48 to 72 hours of your initial enquiry, subject to completing a site assessment and agreeing on the scope and schedule. For urgent situations — such as a new gym opening, a hygiene incident or a competitor that has let standards slip — we can often mobilise faster. Call 1300 494 983 and we will arrange a fast-track site assessment and quote for your Mayfield gym the same day."
            }
        ],
        images: [
            { src: "/images/services/gym.webp", alt: "Professional gym cleaning services in Mayfield NSW" },
            { src: "/images/services/gym.webp", alt: "Fitness centre cleaning Mayfield Newcastle" }
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Gym Cleaning Mayfield"
                serviceDescription="Professional gym and fitness centre cleaning services in Mayfield NSW (Newcastle area), including equipment sanitisation, locker room cleaning and change room disinfection."
                serviceUrl="/gym-cleaning-mayfield"
                serviceType="Gym & Fitness Centre Cleaning"
                price="$$"
                additionalServices={["Free Weight Area Cleaning", "Locker Room Sanitisation", "Cardio Equipment Disinfection", "Shower Block Deep Clean", "Functional Fitness Area Cleaning"]}
                faqs={serviceInfo.faqs}
            />
            <ServiceSEOContent {...serviceInfo} />
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-darkblue mb-6">Related Gym & Cleaning Services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { href: '/gym-cleaning-sydney', label: 'Gym Cleaning Sydney' },
                            { href: '/gym-cleaning-newcastle', label: 'Gym Cleaning Newcastle' },
                            { href: '/commercial-cleaning', label: 'Commercial Cleaning Services' },
                            { href: '/gym-cleaning-services-sydney', label: 'Gym Cleaning Services Sydney' },
                            { href: '/office-cleaning-sydney', label: 'Office Cleaning Sydney' },
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
