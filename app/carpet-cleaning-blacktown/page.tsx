import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carpet Cleaning Blacktown NSW | Professional Deep Cleaning & Stain Removal Services',
  description: 'Trusted carpet cleaning services in Blacktown NSW. Hot water extraction, stain removal, pet odor treatment for homes and offices. Affordable rates, experienced cleaners, 100% satisfaction guaranteed.',
  keywords: 'carpet cleaning Blacktown, professional carpet cleaners Blacktown NSW, steam cleaning Blacktown, carpet stain removal western Sydney',
  openGraph: {
    title: 'Carpet Cleaning Blacktown NSW | Professional Deep Cleaning & Stain Removal Services',
    description: 'Trusted carpet cleaning services in Blacktown NSW. Hot water extraction, stain removal, pet odor treatment for homes and offices. Affordable rates, experienced cleaners, 100% satisfaction guaranteed.',
    url: '/carpet-cleaning-blacktown',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Carpet cleaning Blacktown NSW' }]
  },
  alternates: { canonical: '/carpet-cleaning-blacktown' }
};

export default function CarpetCleaningBlacktownPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-darkblue via-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Carpet Cleaning Blacktown NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Blacktown&apos;s reliable carpet cleaning experts. Deep hot water extraction, stain and pet odor removal, end of lease carpet cleaning for family homes, rental properties, and businesses across Blacktown and the Hills District. Affordable rates, 100% satisfaction guaranteed.
              </p>
              <div className="bg-white/10 rounded-xl p-4 inline-block">
                <p className="text-white font-bold text-lg">Call 1300 494 983 — Free Quote</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero/hero2.jpg"
                alt="Carpet cleaning Blacktown NSW - Professional deep cleaning services"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Trusted Carpet Cleaning for Blacktown Homes & Businesses</h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Blacktown is one of Western Sydney&apos;s most vibrant and family-oriented communities, and Pro Clean Corp is proud to be the carpet cleaning service that local families and property managers trust. From busy households with kids and pets in Quakers Hill to rental properties in Mount Druitt and commercial offices in the Blacktown CBD, our experienced carpet cleaning technicians deliver results that make a genuine difference.
                </p>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  We know that finding an affordable, reliable carpet cleaner in Blacktown can be challenging. That&apos;s why we focus on delivering genuine value — transparent pricing, no hidden fees, and results you can see and smell. Our technicians are fully trained, police-checked, and equipped with professional truck-mounted extraction systems that outperform portable rental machines in both cleaning power and extraction efficiency.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Family Homes, Rentals & Commercial Properties</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Blacktown&apos;s rental market is active, and end of lease carpet cleaning is one of the most common requirements for tenants moving out of properties in the area. Our team understands what Blacktown property managers expect — thoroughly cleaned carpets, documented with invoices showing the cleaning date and method, with a satisfaction guarantee. We also service growing families who need regular maintenance cleans to keep their home carpets fresh and hygienic year-round.
                </p>
              </div>

              <div>
                <Image
                  src="/images/services/home.jpg"
                  alt="Carpet cleaning for Blacktown family homes and rentals"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
                <div className="bg-darkblue/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Why Choose Us</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ Affordable flat-rate pricing</li>
                    <li>✓ Trained & police-checked</li>
                    <li>✓ Truck-mounted systems</li>
                    <li>✓ Child & pet safe products</li>
                    <li>✓ Bond clean specialists</li>
                    <li>✓ 100% satisfaction guarantee</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">How We Clean Your Carpets in Blacktown</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Free On-Site Assessment</h4>
                <p className="text-gray-700 mb-4">
                  We start every Blacktown carpet cleaning job with a walk-through assessment, identifying carpet type, soiling levels, stain locations, and any areas needing specialist treatment. This lets us price the job accurately and set realistic expectations so you know exactly what to expect before we begin.
                </p>

                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Pre-Vacuum & Soil Removal</h4>
                <p className="text-gray-700 mb-4">
                  Thorough pre-vacuuming removes loose dry soil, pet hair, and debris before the wet cleaning process begins. This critical step prevents dry soil from becoming embedded deeper into carpet fibers during extraction and significantly improves the final cleaning result — especially important in Blacktown homes with pets or high foot traffic.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Stain Pre-Treatment & Deep Extraction</h4>
                <p className="text-gray-700 mb-4">
                  Individual stains receive targeted treatment with the correct spotting agents before our truck-mounted hot water extraction system is applied across the entire carpeted area. The high-temperature extraction process removes deep-seated soils, allergens, dust mites, and bacteria — leaving your Blacktown home carpets genuinely clean and sanitised.
                </p>

                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Post-Clean Inspection & Optional Protection</h4>
                <p className="text-gray-700 mb-4">
                  After cleaning, we groom carpet fibers, address any remaining spots, and offer Scotchgard fabric protection for carpets in high-traffic or high-risk areas. We walk through the results with you and don&apos;t consider the job complete until you are fully satisfied with the outcome.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Carpet Cleaning Services in Blacktown</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Hot water extraction cleaning',
                  'Deep steam cleaning',
                  'Stain & spot removal',
                  'Pet hair & odor removal',
                  'End of lease cleaning',
                  'Upholstery cleaning',
                  'Rug & mat cleaning',
                  'Carpet deodorizing',
                  'Mould & mildew treatment',
                  'Commercial carpet cleaning',
                  'Carpet dry cleaning',
                  'Scotchgard protection'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-darkblue rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">Benefits of Professional Carpet Cleaning for Blacktown Families</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/services/office.webp"
                  alt="Clean, healthy carpets for Blacktown homes"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-darkblue pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Healthier Home for Kids & Pets</h4>
                    <p className="text-gray-700">Professional cleaning removes allergens, dust mites, pet dander, and bacteria from carpet fibers — creating a safer environment for children who play on the floor and for family pets.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Protect Your Bond Refund</h4>
                    <p className="text-gray-700">Our end of lease carpet cleaning service meets the standards required by Blacktown property managers and agents, providing documented proof of professional cleaning for bond disputes.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Extend Carpet Life</h4>
                    <p className="text-gray-700">Regular professional cleaning removes abrasive soil particles that cut carpet fibers over time. Maintaining your carpet properly can add years to its life and delay costly replacement.</p>
                  </div>
                  <div className="border-l-4 border-darkblue pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Eliminate Stubborn Odors</h4>
                    <p className="text-gray-700">From pet urine to stale cooking smells absorbed into carpet, our deodorising and enzymatic treatments neutralise odors at the source, leaving your home smelling fresh.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">Blacktown Suburbs We Service</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp services carpet cleaning jobs across Blacktown and surrounding suburbs throughout the Hills District and Western Sydney:
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Blacktown', 'Seven Hills', 'Quakers Hill', 'Stanhope Gardens',
                'Rooty Hill', 'Mount Druitt', 'Doonside', 'Woodcroft',
                'Plumpton', 'Bidwill', 'Minchinbury', 'Kings Langley',
                'Glendenning', 'Lalor Park', 'Kings Park'
              ].map((location, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">{location}</span>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Carpet Cleaning Blacktown</h3>
            <div className="space-y-6 mb-12">
              {[
                {
                  question: 'How much does carpet cleaning cost in Blacktown?',
                  answer: 'Carpet cleaning prices in Blacktown start from around $150 for a 2-bedroom unit and $180–$300 for a 3–4 bedroom family home, depending on the area to be cleaned, carpet condition, and any specialist treatments required. We offer transparent, no-surprise pricing and provide free quotes. Call 1300 494 983 for your personalised Blacktown quote.'
                },
                {
                  question: 'Are your carpet cleaning products safe for children and pets in Blacktown?',
                  answer: 'Yes — all cleaning solutions we use in Blacktown homes are non-toxic, biodegradable, and safe for children and pets once dry. We do not use harsh chemical solvents. We recommend keeping children and pets off the cleaned area until the carpet is fully dry (typically 4–6 hours) as a simple precaution.'
                },
                {
                  question: 'How quickly can you clean my carpets for a rental inspection in Blacktown?',
                  answer: 'We understand rental inspections can be time-sensitive. We offer same-day and next-day carpet cleaning in Blacktown when our schedule allows. Call us as early as possible on 1300 494 983 and we will do our best to fit you in. We provide cleaning receipts and documentation required for real estate agents and property managers throughout the Blacktown area.'
                },
                {
                  question: 'Can you treat mould and mildew in carpets in Blacktown?',
                  answer: 'Yes — surface mould and mildew in carpets can often be effectively treated with our antimicrobial cleaning solutions and hot water extraction process. However, mould that has penetrated carpet backing or underlay may require more extensive remediation. We will assess the situation honestly and recommend the appropriate treatment or refer you to a mould remediation specialist if required.'
                },
                {
                  question: 'Do you clean commercial carpets in Blacktown offices and businesses?',
                  answer: 'Absolutely. We provide commercial carpet cleaning for offices, retail stores, medical practices, childcare centres, and other businesses in Blacktown and the greater western Sydney area. We can schedule commercial cleaning after hours or on weekends to minimise disruption to your business operations. Contact us for a commercial carpet cleaning quote.'
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
              <h3 className="text-3xl font-bold mb-4">Book Carpet Cleaning in Blacktown Today</h3>
              <p className="text-xl mb-6 text-gray-100">
                Affordable, professional carpet cleaning for homes, rentals, and businesses across Blacktown and Western Sydney. Guaranteed results, no hidden fees.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Your Free Blacktown Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
