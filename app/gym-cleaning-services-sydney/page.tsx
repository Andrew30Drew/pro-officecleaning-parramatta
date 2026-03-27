import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Gym Cleaning Services Sydney | Fitness Centre Hygiene Specialists | Pro Clean Corp',
    description: 'Professional gym cleaning services across Sydney. TGA-approved disinfectants, equipment sanitisation, locker rooms, rubber floors & 24/7 scheduling. Trusted by Sydney\'s top fitness centres. Call 1300 494 983.',
    keywords: 'gym cleaning services sydney, fitness centre cleaning sydney, gym cleaning company sydney, gym sanitisation sydney, health club cleaning sydney, gym cleaners sydney, crossfit cleaning sydney, 24 hour gym cleaning sydney, gym equipment sanitisation sydney',
    openGraph: {
        title: 'Gym Cleaning Services Sydney | Fitness Centre Hygiene Specialists | Pro Clean Corp',
        description: 'Expert gym and fitness centre cleaning across Sydney. TGA-approved disinfectants, 24/7 scheduling, equipment sanitisation. Call 1300 494 983.',
        url: 'https://www.procleancorp.com.au/gym-cleaning-services-sydney',
        type: 'website',
        images: [{ url: '/images/services/gym.webp', alt: 'Gym cleaning services Sydney fitness centre hygiene' }],
    },
    alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-services-sydney' },
};

const gymsSuburbs = [
    { name: 'Gym Cleaning Parramatta', slug: 'gym-cleaning-parramatta' },
    { name: 'Gym Cleaning North Sydney', slug: 'gym-cleaning-north-sydney' },
    { name: 'Gym Cleaning Blacktown', slug: 'gym-cleaning-blacktown' },
    { name: 'Gym Cleaning Hornsby', slug: 'gym-cleaning-hornsby' },
    { name: 'Gym Cleaning Sydney CBD', slug: 'gym-cleaning-sydney-cbd' },
    { name: 'Gym Cleaning Norwest', slug: 'gym-cleaning-norwest' },
];

const faqs = [
    {
        question: 'What does a professional gym cleaning service include?',
        answer: 'Our Sydney gym cleaning services cover every zone in your facility: cardio and resistance equipment sanitisation (handles, seats, touchscreens, adjustment points), free weight areas, group fitness studios, yoga and spin rooms, locker rooms and showers, toilets, reception and café zones, rubber and synthetic turf floors, mirrors, and all glass surfaces. We build a custom checklist for your gym\'s specific layout and equipment types.'
    },
    {
        question: 'Which disinfectants do your gym cleaning services use?',
        answer: 'We exclusively use TGA-approved, hospital-grade disinfectants proven effective against bacteria, viruses, fungi, MRSA, Staph, and E. coli — the pathogens most common in fitness environments. All products are tested safe on equipment finishes including rubber grips, vinyl upholstery, digital touchscreens, and powder-coated steel. We never use bleach-based products that degrade equipment over time.'
    },
    {
        question: 'Can your gym cleaning services work around our operating hours?',
        answer: 'Absolutely. We schedule around your peak and off-peak hours. For 24-hour gyms, our deep clean team typically works the 1am–5am low-traffic window. For standard gyms, we work outside your operating hours or arrive first thing in the morning before open. We also offer daytime porter services for ongoing hygiene maintenance between deep cleans.'
    },
    {
        question: 'How often should a busy Sydney gym be professionally cleaned?',
        answer: 'Most busy Sydney gyms require a full deep clean 5–7 nights per week, with locker rooms and showers receiving daily attention. High-traffic peak period spot checks (typically 6–8am and 5–7pm) should also be factored in for large facilities. We recommend a hygiene assessment of your gym before proposing a cleaning frequency — every facility is different.'
    },
    {
        question: 'Do you clean CrossFit boxes and boutique fitness studios?',
        answer: 'Yes. We have specific expertise in CrossFit boxes and boutique fitness studio cleaning — chalk removal from flooring and equipment, synthetic turf deep cleans, plywood platform care, rig cleaning, and rubber flooring maintenance. Our products and methods are tailored to protect specialist surfaces while delivering a genuine deep clean standard.'
    }
];

export default function GymCleaningServicesSydneyPage() {
    const serviceInfo = {
        title: 'Gym Cleaning Services Sydney',
        description: 'A clean gym is not just about appearances — it is about member health, membership retention, and your facility\'s reputation. Pro Clean Corp provides specialist gym cleaning services across Sydney, deploying TGA-approved hospital-grade disinfectants, purpose-built rubber floor cleaning equipment, and flexible scheduling built around your operating hours. Whether you run a large commercial gym, a boutique fitness studio, a CrossFit box, or a 24-hour facility, our Sydney gym cleaning teams deliver the hygiene standard your members expect.',
        benefits: [
            'Equipment Sanitisation: Full wipe-down and TGA-approved disinfection of every piece of cardio and resistance equipment — handles, seats, touchscreens, adjustment points, and free weights.',
            'Locker Room & Shower Hygiene: Daily deep cleaning of change rooms, showers, and toilets. Tile grout scrubbing, drain maintenance, mould prevention, and consumable restocking on every visit.',
            'Rubber & Specialty Floor Care: Dedicated rubber floor scrubbing machines for gym mats, functional training zones, and free weight areas. Synthetic turf, timber aerobics floors, and lifting platforms also serviced.',
            'Group Fitness Studio Cleaning: Complete studio cleaning — floors, mirrors, sound surrounds, props, spin bikes, and reformers — cleaned and disinfected after each class cycle.',
            'CrossFit & Functional Fitness: Chalk removal, rig structure cleaning, synthetic turf deep clean, plywood platform care — specialist methods for specialist environments.',
            'Reception & Café Hygiene: Front of house, reception desk, café equipment surrounds, seating areas, and entryway floors cleaned to a presentation standard matching member expectations.',
            '24/7 Scheduling Flexibility: Overnight, pre-open, post-close, or daytime porter — we fit your schedule, not the other way around.'
        ],
        process: [
            'Gym Walk-Through Assessment: We tour your facility with your manager, map every cleaning zone, identify equipment types, specialty surfaces, and peak member traffic periods.',
            'Custom Zone-by-Zone Cleaning Plan: A detailed checklist covering every area at the appropriate frequency — daily for locker rooms, weekly for deep equipment sanitisation, periodic for specialty surfaces.',
            'Trained Gym Cleaning Crew: Staff with specific gym cleaning experience — understanding equipment care, hygiene priorities, and how to work efficiently around members.',
            'Quality Checks & Account Management: Supervisor inspections, direct account manager contact, and rapid response to any hygiene concerns raised by your team or members.'
        ],
        whyChooseUs: [
            'TGA-Approved Disinfectants: Hospital-grade products killing MRSA, E. coli, Staph, and fungal infections — the pathogens that matter most in gym environments.',
            'Specialist Equipment: Rubber floor auto-scrubbers, auto-dosing disinfectant systems, and microfibre technology that cleans without leaving residue on equipment.',
            'Sydney-Wide Gym Coverage: CBD, North Sydney, Parramatta, Blacktown, Hills District, Inner West, Eastern Suburbs — we service gyms across all of Greater Sydney.',
            'Member Retention Focus: Clean gyms keep members and generate positive reviews. We understand that our hygiene work directly impacts your business performance.',
            '$20M Public Liability Insurance: Fully insured for commercial gym environments including equipment damage liability.',
            '15+ Years Commercial Cleaning: Deep experience with Sydney\'s fitness industry — from large franchise chains to independent boutique studios.'
        ],
        serviceAreas: [
            'Sydney CBD', 'North Sydney', 'Parramatta', 'Blacktown',
            'Bondi', 'Newtown', 'Surry Hills', 'Randwick',
            'Hornsby', 'Chatswood', 'Norwest', 'Seven Hills',
            'Liverpool', 'Penrith', 'Hurstville', 'Miranda'
        ],
        faqs,
        images: [
            { src: '/images/services/gym.webp', alt: 'Gym cleaning services Sydney fitness centre sanitisation' },
            { src: '/images/services/commercial.webp', alt: 'CrossFit and fitness studio cleaning Sydney Pro Clean Corp' }
        ],
        relatedServices: [
            'Gym Cleaning Sydney',
            'Commercial Cleaning Sydney',
            'Medical Cleaning Sydney',
            'Childcare Cleaning Sydney'
        ]
    };

    return (
        <>
            <ServiceStructuredData
                serviceName="Gym Cleaning Services Sydney"
                serviceDescription="Professional gym and fitness centre cleaning services across Sydney. TGA-approved disinfectants, equipment sanitisation, locker rooms, rubber floor scrubbing, CrossFit box cleaning and 24/7 flexible scheduling."
                serviceUrl="/gym-cleaning-services-sydney"
                serviceType="ProfessionalService"
                price="$$"
                additionalServices={['Equipment Sanitisation', 'Locker Room Cleaning', 'Rubber Floor Scrubbing', 'CrossFit Box Cleaning', 'Studio Cleaning', 'Reception Cleaning']}
                faqs={faqs}
            />
            <ServiceSEOContent {...serviceInfo} />

            <section className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-darkblue mb-6 text-center">Gym Cleaning Services by Sydney Suburb</h2>
                    <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                        Specialist gym and fitness facility cleaning across Sydney — find your area:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {gymsSuburbs.map((page) => (
                            <Link
                                key={page.slug}
                                href={`/${page.slug}`}
                                className="bg-white p-3 rounded-lg text-center text-gray-700 hover:text-greenprimary hover:shadow-md transition border border-gray-100 font-medium text-sm"
                            >
                                {page.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
