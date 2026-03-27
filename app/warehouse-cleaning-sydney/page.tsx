import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
    title: 'Warehouse Cleaning Sydney NSW | Professional Warehouse Sweeping & Scrubbing',
    description: 'Expert warehouse cleaning services in Sydney NSW. Professional floor scrubbing, high dusting, pressure washing & industrial facility maintenance. WHS compliant teams.',
    keywords: 'warehouse cleaning Sydney, warehouse sweeping Sydney, floor scrubbing services, industrial cleaning Sydney, warehouse maintenance NSW, high dusting services',
    openGraph: {
        title: 'Warehouse Cleaning Sydney NSW | Professional Warehouse Sweeping & Scrubbing',
        description: 'Expert warehouse cleaning services in Sydney NSW. Professional floor scrubbing, high dusting, pressure washing & industrial facility maintenance.',
        url: '/warehouse-cleaning-sydney',
        type: 'website',
        images: [{ url: '/meta.png', alt: 'Warehouse cleaning Sydney NSW' }]
    },
    alternates: { canonical: '/warehouse-cleaning-sydney' }
};

const suburbs = [
    { name: 'Alexandria', slug: 'commercial-cleaning-alexandria' },
    { name: 'Auburn', slug: 'commercial-cleaning-auburn' },
    { name: 'Bankstown', slug: 'commercial-cleaning-bankstown' },
    { name: 'Blacktown', slug: 'commercial-cleaning-blacktown' },
    { name: 'Botany', slug: 'commercial-cleaning-mascot' }, // Mapping to Mascot/Botany area
    { name: 'Campbelltown', slug: 'commercial-cleaning-campbelltown' },
    { name: 'Eastern Creek', slug: 'commercial-cleaning-blacktown' }, // Mapping to nearby major hub
    { name: 'Erskine Park', slug: 'commercial-cleaning-penrith' }, // Nearby
    { name: 'Fairfield', slug: 'commercial-cleaning-fairfield' },
    { name: 'Glendenning', slug: 'commercial-cleaning-blacktown' },
    { name: 'Granville', slug: 'commercial-cleaning-parramatta' },
    { name: 'Huntingwood', slug: 'commercial-cleaning-huntingwood' },
    { name: 'Ingleburn', slug: 'commercial-cleaning-liverpool' },
    { name: 'Liverpool', slug: 'commercial-cleaning-liverpool' },
    { name: 'Marrickville', slug: 'commercial-cleaning-marrickville' },
    { name: 'Mascot', slug: 'commercial-cleaning-mascot' },
    { name: 'Matraville', slug: 'commercial-cleaning-mascot' },
    { name: 'Minchinbury', slug: 'commercial-cleaning-blacktown' },
    { name: 'Moorebank', slug: 'commercial-cleaning-liverpool' },
    { name: 'Padstow', slug: 'commercial-cleaning-padstow' },
    { name: 'Penrith', slug: 'commercial-cleaning-penrith' },
    { name: 'Prestons', slug: 'commercial-cleaning-liverpool' },
    { name: 'Regents Park', slug: 'commercial-cleaning-auburn' },
    { name: 'Silverwater', slug: 'commercial-cleaning-silverwater' },
    { name: 'Seven Hills', slug: 'commercial-cleaning-blacktown' },
    { name: 'Smithfield', slug: 'commercial-cleaning-smithfield' },
    { name: 'St Marys', slug: 'commercial-cleaning-penrith' },
    { name: 'Villawood', slug: 'commercial-cleaning-fairfield' },
    { name: 'Wetherill Park', slug: 'commercial-cleaning-wetherill-park' },
    { name: 'Yennora', slug: 'commercial-cleaning-smithfield' }
];

export default function WarehouseCleaningSydneyPage() {
    const faqs = [
        {
            question: 'What warehouse cleaning services do you provide in Sydney NSW?',
            answer: 'We provide comprehensive warehouse cleaning services including machine floor scrubbing, sweeping, high dusting (rafters/pipes), pressure washing, degreasing, office area cleaning, bathroom sanitization, and car park maintenance throughout Sydney NSW.'
        },
        {
            question: 'Do you use industrial floor scrubbers and sweepers?',
            answer: 'Yes, we utilize industrial-grade ride-on and walk-behind floor scrubbers and sweepers to efficiently clean large concrete areas. Our equipment effectively removes dust, tire marks, oil stains, and grime from warehouse floors.'
        },
        {
            question: 'Are your staff trained in WHS and safety protocols?',
            answer: 'Absolutely. All our warehouse cleaning staff are trained in Work Health & Safety (WHS) protocols, safe chemical handling, and machinery operation. We adhere to site-specific safety inductions and provide Safe Work Method Statements (SWMS) for all jobs.'
        },
        {
            question: 'Can you clean high-reach areas like beams and lighting?',
            answer: 'Yes, we offer specialized high dusting services using scissor lifts or boom lifts to clean rafters, beams, lighting fixtures, and pipework. This removes accumulated dust and cobwebs, improving air quality and fire safety.'
        },
        {
            question: 'Do you offer one-off deep cleans or regular maintenance?',
            answer: 'We provide both. Whether you need a one-off deep clean for a lease end (make-good), an initial heavy-duty clean, or a scheduled weekly/daily maintenance program, we tailor our services to your warehouse operations.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <ServiceStructuredData
                serviceName="Warehouse Cleaning Sydney NSW"
                serviceDescription="Professional warehouse cleaning services in Sydney. Industrial floor scrubbing, high dusting, and facility maintenance for logistics and storage centres."
                serviceUrl="/warehouse-cleaning-sydney"
                serviceType="IndustrialCleaning"
                price="$$-$$$"
                additionalServices={[
                    'Floor Scrubbing',
                    'Industrial Sweeping',
                    'High Dusting',
                    'Pressure Washing',
                    'End of Lease Cleaning',
                    'Car Park Cleaning'
                ]}
                faqs={faqs}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-darkblue via-blueprimary to-darkblue py-20">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                                Warehouse Cleaning Sydney NSW
                            </h1>
                            <p className="text-xl mb-8 text-gray-100">
                                Heavy-duty warehouse cleaning and industrial floor care. Professional sweeping, scrubbing, and high-maintenance solutions for logistics centres, distribution hubs, and storage facilities across Sydney.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                                    Get a Free Quote
                                </Link>
                                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                                    Call 1300 494 983
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/services/warehouse.webp"
                                alt="Warehouse cleaning Sydney NSW - Professional industrial floor scrubbing"
                                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                                width={800}
                                height={384}
                                priority
                                />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Warehouse Cleaning Services in Sydney</h2>

                        <div className="grid lg:grid-cols-3 gap-8 mb-12">
                            <div className="lg:col-span-2">
                                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                                    Pro Clean Corp specializes in heavy-duty warehouse cleaning services throughout Sydney NSW. We understand that industrial environments face unique challenges with dust accumulation, oil spills, tire compaction, and debris. Our professional team uses industrial-grade equipment to maintain your facility's safety, hygiene, and operational efficiency.
                                </p>

                                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                                    From distribution centres in Western Sydney to logistics hubs near the airport, we provide tailored cleaning solutions. Whether you require a one-off <strong className="text-darkblue">end-of-lease make-good clean</strong> or <strong className="text-darkblue">regular floor maintenance</strong>, our WHS-compliant teams deliver superior results that meet industrial safety standards.
                                </p>

                                <h3 className="text-2xl font-bold text-darkblue mb-4">Industrial Floor Care Experts</h3>
                                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                                    Clean floors are safer floors. Our specialized floor scrubbing and sweeping services remove hazardous dust, slippery oil patches, and stubborn grime. We use ride-on scrubbers and sweepers to cover large areas efficiently, minimizing downtime for your operations.
                                </p>
                            </div>

                            <div>
                                <Image
                                    src="/images/services/commercial.webp"
                                    alt="Industrial warehouse cleaning equipment Sydney"
                                    className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                                    width={400}
                                    height={256}
                                    loading="lazy"
                                    />
                                <div className="bg-darkblue/10 p-6 rounded-xl">
                                    <h4 className="font-bold text-darkblue mb-3">Service Inclusions</h4>
                                    <ul className="text-sm text-gray-700 space-y-2">
                                        <li>✓ Machine Floor Scrubbing & Sweeping</li>
                                        <li>✓ High Dusting (Beams & Pipes)</li>
                                        <li>✓ Pressure Washing (Internal/External)</li>
                                        <li>✓ Degreasing & Oil Stain Removal</li>
                                        <li>✓ Packing Area & Office Cleaning</li>
                                        <li>✓ End of Lease Warehouse Cleaning</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Comprehensive Warehouse Solutions</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    'Ride-on floor scrubbing',
                                    'Industrial sweeping',
                                    'High-pressure cleaning',
                                    'High reach dusting',
                                    'Forklift tire mark removal',
                                    'Oil & grease removal',
                                    'Cobweb removal',
                                    'Amenities cleaning',
                                    'Kitchen & lunchroom care',
                                    'Bin & waste management',
                                    'Car park sweeping',
                                    'Driveway pressure clean'
                                ].map((service, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-darkblue rounded-full"></div>
                                        <span className="text-gray-700">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Service Areas */}
                        <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
                            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Sydney Industrial Areas We Service</h3>
                            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                                We service warehouses and industrial facilities across all major Sydney industrial zones:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                                {suburbs.map((suburb) => (
                                    <Link
                                        key={suburb.name} // Using name as key since duplicate slugs exist
                                        href={`/${suburb.slug}`}
                                        className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-darkblue hover:shadow-md transition border border-gray-100 block"
                                    >
                                        {suburb.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions</h3>
                        <div className="space-y-6 mb-12">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-6">
                                    <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-darkblue via-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
                            <h3 className="text-3xl font-bold mb-4">Professional Warehouse Cleaning Sydney</h3>
                            <p className="text-xl mb-6 text-gray-100">
                                Contact Pro Clean Corp for expert industrial cleaning. WHS compliant, efficient, and reliable warehouse maintenance.
                            </p>
                            <div className="text-2xl font-bold text-white">
                                Call 1300 494 983 for a Free Quote
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
