import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carpet Cleaning Liverpool NSW | Professional Steam Cleaning & Restoration Services',
  description: 'Expert carpet cleaning in Liverpool NSW and surrounding suburbs. Deep steam cleaning, stain removal, pet treatment, end of lease carpet restoration. Local cleaners, fast drying, free quotes.',
  keywords: 'carpet cleaning Liverpool NSW, steam cleaning Liverpool, carpet stain removal south-west Sydney, professional carpet cleaners Liverpool',
  openGraph: {
    title: 'Carpet Cleaning Liverpool NSW | Professional Steam Cleaning & Restoration Services',
    description: 'Expert carpet cleaning in Liverpool NSW and surrounding suburbs. Deep steam cleaning, stain removal, pet treatment, end of lease carpet restoration. Local cleaners, fast drying, free quotes.',
    url: '/carpet-cleaning-liverpool',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Carpet cleaning Liverpool NSW' }]
  },
  alternates: { canonical: '/carpet-cleaning-liverpool' }
};

export default function CarpetCleaningLiverpoolPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-darkblue via-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Carpet Cleaning Liverpool NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                South-west Sydney&apos;s carpet cleaning specialists. Expert steam cleaning, stain removal, pet odor treatment, and end of lease carpet restoration for Liverpool, Fairfield, Cabramatta, and surrounding suburbs. Local team, free quotes, fast drying guaranteed.
              </p>
              <div className="bg-white/10 rounded-xl p-4 inline-block">
                <p className="text-white font-bold text-lg">Call 1300 494 983 — Free Liverpool Quote</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero/hero3.jpg"
                alt="Carpet cleaning Liverpool NSW - Professional steam cleaning and restoration"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Expert Carpet Cleaning Across Liverpool & South-West Sydney</h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp delivers professional carpet cleaning services throughout Liverpool and the broader south-west Sydney corridor including Fairfield, Cabramatta, Casula, and Moorebank. Our Liverpool-based clients range from families in established suburban homes to tenants vacating rental properties, property investors maintaining their portfolios, and local businesses keeping their commercial spaces presentable.
                </p>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  South-west Sydney&apos;s warm climate can be tough on carpets — tracked-in soil from outdoor areas, high humidity contributing to dust mite proliferation, and active households with children and pets all take their toll. Our professional steam cleaning and hot water extraction services address these challenges head-on, removing the deep-seated grime that regular vacuuming simply cannot reach.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Carpet Restoration for Liverpool Rental Properties</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Liverpool&apos;s rental market is highly active, with significant demand across Warwick Farm, Casula, Green Valley, and the newer estates in Edmondson Park and Prestons. Tenants moving out of these properties frequently require professional carpet cleaning to meet their obligations under NSW tenancy agreements. Our team is experienced in restoring carpets that have seen years of family life — bringing them back to a condition that satisfies even the most particular property managers and protects tenant bond payments.
                </p>
              </div>

              <div>
                <Image
                  src="/images/services/strata.jpg"
                  alt="Carpet cleaning services across Liverpool and south-west Sydney"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
                <div className="bg-darkblue/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Liverpool Service Summary</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ Residential & commercial</li>
                    <li>✓ End of lease specialists</li>
                    <li>✓ Emergency spill response</li>
                    <li>✓ Enzymatic pet treatment</li>
                    <li>✓ Scotchgard protection</li>
                    <li>✓ Free on-site quotes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">Our Liverpool Carpet Cleaning Process</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Carpet Condition Assessment</h4>
                <p className="text-gray-700 mb-4">
                  Before we begin, our technician thoroughly inspects the carpet to assess fiber type, soiling severity, stain history, and any signs of mould, pet damage, or water penetration. This assessment guides our choice of cleaning method and pre-treatment products, ensuring the most effective approach for your Liverpool property&apos;s specific carpet condition.
                </p>

                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Pre-Treatment & Agitation</h4>
                <p className="text-gray-700 mb-4">
                  High-traffic lanes, pet accident zones, and visible stains receive targeted pre-treatment with professional-grade solutions designed to break down specific soil types. We agitate the pre-treatment into the carpet pile to maximise penetration and ensure thorough saturation of heavily soiled areas before the extraction step begins.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Hot Water Extraction & Sanitisation</h4>
                <p className="text-gray-700 mb-4">
                  Our truck-mounted hot water extraction systems deliver deep, powerful cleaning that penetrates the full depth of carpet pile. Heated solution dislodges embedded soil, neutralises bacteria and allergens, and the powerful vacuum extraction removes it all — along with moisture — leaving carpets clean, sanitised, and faster-drying than methods using portable machines.
                </p>

                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Deodorising, Protection & Sign-Off</h4>
                <p className="text-gray-700 mb-4">
                  A professional deodorising treatment is applied to neutralise odors rather than mask them. We offer optional Scotchgard protection, groom the carpet pile for even drying, and complete a post-clean inspection with you. For end of lease jobs in Liverpool, we provide a dated, signed invoice suitable for your property manager&apos;s records.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Carpet Cleaning Services in Liverpool NSW</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Steam & hot water extraction',
                  'Stain removal treatments',
                  'Pet stain & odor removal',
                  'End of lease carpet cleaning',
                  'Commercial carpet maintenance',
                  'Rug cleaning & restoration',
                  'Upholstery cleaning',
                  'Carpet deodorizing',
                  'Mould treatment',
                  'Dry cleaning methods',
                  'Scotchgard protection',
                  'Emergency carpet cleaning'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-darkblue rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">Why Liverpool Residents Trust Pro Clean Corp</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/services/gym.jpg"
                  alt="Professional carpet cleaning results in Liverpool NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-darkblue pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">South-West Sydney Local Knowledge</h4>
                    <p className="text-gray-700">We know the Liverpool area — its housing stock, common carpet types, the rental market requirements, and the seasonal cleaning challenges that come with south-west Sydney&apos;s climate. Our advice is always locally relevant.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Genuine Stain Removal Results</h4>
                    <p className="text-gray-700">We use professional-grade stain removal chemistry and the correct technique for each stain type. Wine, coffee, mud, crayon, grease, and pet accidents are all treated differently — and our technicians know the difference.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Fast, Reliable Scheduling</h4>
                    <p className="text-gray-700">We respect your time. Our Liverpool bookings run on schedule, and we communicate proactively if anything changes. Same-day service is available for urgent requests across Liverpool and Fairfield.</p>
                  </div>
                  <div className="border-l-4 border-darkblue pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Transparent, Competitive Pricing</h4>
                    <p className="text-gray-700">No hidden fees, no bait-and-switch pricing. We quote up front and stick to the price. Our Liverpool carpet cleaning rates are competitive for the south-west Sydney market.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">Liverpool & South-West Sydney Areas We Service</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides carpet cleaning across Liverpool and the surrounding south-west Sydney suburbs:
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Liverpool', 'Fairfield', 'Cabramatta', 'Casula',
                'Moorebank', 'Chipping Norton', 'Warwick Farm', 'Lurnea',
                'Miller', 'Green Valley', 'Prestons', 'Edmondson Park',
                'Hoxton Park', 'Hammondville', 'Carnes Hill', 'Cecil Hills'
              ].map((location, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">{location}</span>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Carpet Cleaning Liverpool</h3>
            <div className="space-y-6 mb-12">
              {[
                {
                  question: 'How long does carpet cleaning take in Liverpool?',
                  answer: 'A standard 3-bedroom home in Liverpool typically takes 1.5 to 2.5 hours to complete, depending on the size of the carpeted areas, carpet condition, and how many stain treatments are required. Larger homes or heavily soiled carpets may take longer. We\'ll give you an accurate time estimate when we provide your quote.'
                },
                {
                  question: 'Can you remove old, set-in stains from carpets in Liverpool?',
                  answer: 'We have good success with many set-in stains including red wine, coffee, juice, and general food stains using our professional chemistry and hot water extraction. However, stains that have been chemically altered over time (such as bleach damage) or dye-based stains that have permanently bonded to carpet fibers may not be fully removed. We are always honest about what is achievable before we begin.'
                },
                {
                  question: 'Do you offer emergency carpet cleaning in Liverpool for spills or floods?',
                  answer: 'Yes — we offer emergency carpet cleaning and water damage response across Liverpool and south-west Sydney. Fast response is critical for flood-affected carpets to prevent mould growth and permanent damage. Call 1300 494 983 immediately and we will prioritise your job. For flood situations, the sooner we can extract the water and begin the drying process, the better the outcome.'
                },
                {
                  question: 'What is the best carpet cleaning method for Liverpool homes with pets?',
                  answer: 'For homes with pets in Liverpool, we recommend our hot water extraction process combined with enzymatic pre-treatment for pet urine areas and a professional deodorising treatment. This combination removes pet hair and dander embedded in the carpet pile, neutralises urine odors at the source, and sanitises the carpet. Optional Scotchgard application after cleaning helps resist future staining.'
                },
                {
                  question: 'Do you service rental properties and work with property managers in Liverpool?',
                  answer: 'Yes — we regularly work with tenants, landlords, and property managers across Liverpool, Casula, Prestons, and surrounding suburbs. We provide itemised invoices with cleaning dates and method details, as required for bond cleaning documentation. Our results meet the professional standard expected by Liverpool-area property managers, and we offer a re-clean guarantee if issues are raised at the inspection.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-darkblue via-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Get a Free Carpet Cleaning Quote in Liverpool</h3>
              <p className="text-xl mb-6 text-gray-100">
                Professional steam cleaning, stain removal, and end of lease carpet restoration across Liverpool, Fairfield, Cabramatta, and all south-west Sydney suburbs.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 — Free Quote for Liverpool
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
