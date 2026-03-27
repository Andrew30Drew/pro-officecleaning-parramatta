import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carpet Cleaning Parramatta NSW | Professional Steam Cleaning & Stain Removal',
  description: 'Expert carpet cleaning services in Parramatta NSW. Professional steam cleaning, stain removal, upholstery cleaning for homes and businesses. Fast drying, eco-friendly products, guaranteed results.',
  keywords: 'carpet cleaning Parramatta, steam cleaning Parramatta NSW, carpet stain removal Parramatta, professional carpet cleaners western Sydney',
  openGraph: {
    title: 'Carpet Cleaning Parramatta NSW | Professional Steam Cleaning & Stain Removal',
    description: 'Expert carpet cleaning services in Parramatta NSW. Professional steam cleaning, stain removal, upholstery cleaning for homes and businesses. Fast drying, eco-friendly products, guaranteed results.',
    url: '/carpet-cleaning-parramatta',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Carpet cleaning Parramatta NSW' }]
  },
  alternates: { canonical: '/carpet-cleaning-parramatta' }
};

export default function CarpetCleaningParramattaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-darkblue via-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Carpet Cleaning Parramatta NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Parramatta&apos;s trusted carpet cleaning specialists. We deliver deep steam cleaning, stubborn stain removal, pet odor elimination, and end of lease carpet restoration for homes and businesses across Parramatta and Western Sydney. Fast drying, eco-friendly products, results guaranteed.
              </p>
              <div className="bg-white/10 rounded-xl p-4 inline-block">
                <p className="text-white font-bold text-lg">Call 1300 494 983 for a Free Quote</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/carpet.jpg"
                alt="Carpet cleaning Parramatta NSW - Professional steam cleaning services"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Carpet Cleaning Services in Parramatta & Western Sydney</h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp brings professional-grade carpet cleaning directly to Parramatta households and businesses throughout Western Sydney. Whether you&apos;re dealing with high-traffic soiling in a busy family home, pet accidents in a rental property, or carpets that need restoring to meet end of lease requirements, our trained technicians deliver outstanding results using truck-mounted hot water extraction equipment and eco-friendly cleaning solutions.
                </p>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Parramatta&apos;s diverse mix of residential apartments, suburban family homes, and commercial offices means carpet cleaning requirements vary enormously. Our team is experienced with all major carpet fiber types — wool, nylon, polyester, and blended textiles — and we tailor our cleaning approach to the specific condition of each carpet. We never use one-size-fits-all methods because your carpet deserves targeted treatment for optimal results.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Steam Cleaning & Hot Water Extraction in Parramatta</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Hot water extraction — commonly called steam cleaning — is the most effective method for deep cleaning residential and commercial carpets. Our truck-mounted systems inject heated cleaning solution deep into carpet fibers to break down embedded soil, allergens, and bacteria, then extract it along with the loosened contaminants. This method is recommended by major carpet manufacturers and leaves carpets genuinely clean, not just surface-fresh. Our fast-drying techniques mean most carpets are ready to use within 4–6 hours.
                </p>
              </div>

              <div>
                <Image
                  src="/images/hero/hero1.jpg"
                  alt="Professional carpet cleaners Parramatta Western Sydney"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
                <div className="bg-darkblue/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Quick Facts</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ Same-day service available</li>
                    <li>✓ Eco-friendly products</li>
                    <li>✓ Fast 4–6 hr drying</li>
                    <li>✓ Pet stain specialists</li>
                    <li>✓ End of lease experts</li>
                    <li>✓ Free quotes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">Our Carpet Cleaning Process</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Inspection & Pre-Vacuuming</h4>
                <p className="text-gray-700 mb-4">
                  Every job starts with a thorough inspection to identify carpet fiber type, stain locations, high-traffic zones, and any areas requiring special attention. We pre-vacuum to remove loose dry soil before wet cleaning begins — this significantly improves cleaning effectiveness and avoids turning dry soil into mud during the extraction process.
                </p>

                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Pre-Treatment & Stain Spotting</h4>
                <p className="text-gray-700 mb-4">
                  We apply targeted pre-treatment solutions to soiled areas and individually treat each visible stain with the appropriate spotting agent. Pet stains, red wine, coffee, grease, and tannin-based marks each respond to different chemistry — our technicians carry a full range of professional spotting agents to address every type of stain found in Parramatta homes and offices.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Hot Water Extraction Cleaning</h4>
                <p className="text-gray-700 mb-4">
                  Our truck-mounted hot water extraction systems deliver powerful cleaning performance that portable machines simply cannot match. Heated solution is injected deep into the carpet pile at controlled pressure, agitated to release embedded soils, then extracted immediately along with all loosened contaminants — leaving carpets fresh, sanitised, and minimally damp.
                </p>

                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Grooming, Protection & Inspection</h4>
                <p className="text-gray-700 mb-4">
                  After cleaning, we groom carpet fibers to restore their upright position for even drying and a uniform appearance. Optional Scotchgard protection can be applied to create a stain-resistant barrier. A final walkthrough with our client ensures complete satisfaction before we leave the property.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Carpet Cleaning Services in Parramatta</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Steam cleaning & hot water extraction',
                  'Stain removal & spot treatment',
                  'Pet stain & odor removal',
                  'Upholstery & lounge cleaning',
                  'End of lease carpet cleaning',
                  'Commercial carpet maintenance',
                  'Rug cleaning & restoration',
                  'Carpet protection treatments',
                  'Same-day carpet cleaning',
                  'Dry carpet cleaning',
                  'Odor elimination',
                  'High-traffic area specialist'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-darkblue rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">Why Parramatta Residents Choose Pro Clean Corp</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/whychoose.jpg"
                  alt="Why choose Pro Clean Corp carpet cleaning Parramatta"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-darkblue pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Local Western Sydney Knowledge</h4>
                    <p className="text-gray-700">We understand the specific carpet cleaning challenges faced by Parramatta residents — from dust and pollen in older apartment buildings to pet hair in suburban homes and high-foot-traffic commercial spaces.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">End of Lease Specialists</h4>
                    <p className="text-gray-700">We work to real estate agent standards and provide receipts and documentation required by landlords in the Parramatta rental market, helping tenants secure their bond returns.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Pet Odor Elimination</h4>
                    <p className="text-gray-700">Our enzymatic odor treatments neutralise pet urine at the source rather than masking it — essential for Parramatta families and rental property managers dealing with pet-related odors.</p>
                  </div>
                  <div className="border-l-4 border-darkblue pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Satisfaction Guaranteed</h4>
                    <p className="text-gray-700">If you&apos;re not completely satisfied with our carpet cleaning results, we return to address any concerns at no additional cost. That&apos;s our commitment to every Parramatta client.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas Serviced */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">Areas We Service Around Parramatta</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides carpet cleaning throughout Parramatta and the surrounding Western Sydney suburbs including:
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Parramatta', 'Westmead', 'Harris Park', 'Granville',
                'Auburn', 'Merrylands', 'Guildford', 'Woodville',
                'Greystanes', 'Pemulwuy', 'Wentworthville', 'Pendle Hill',
                'Toongabbie', 'Seven Hills', 'Blacktown', 'Baulkham Hills',
                'Castle Hill', 'Bella Vista'
              ].map((location, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">{location}</span>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Carpet Cleaning Parramatta</h3>
            <div className="space-y-6 mb-12">
              {[
                {
                  question: 'How much does carpet cleaning cost in Parramatta?',
                  answer: 'Carpet cleaning prices in Parramatta vary depending on the size of the area, number of rooms, carpet condition, and services required. A standard 3-bedroom home typically starts from $180–$280. We provide free, no-obligation quotes based on your specific needs — call 1300 494 983 or request a quote online for an accurate price.'
                },
                {
                  question: 'Can you clean carpets for end of lease in Parramatta?',
                  answer: 'Yes — end of lease carpet cleaning is one of our most common services across Parramatta and Western Sydney. We clean to real estate agent standards and provide documentation of the clean. We also treat pet stains and odors, and can clean the entire property if required. Our results help tenants meet their obligations under NSW tenancy law and secure their bond refund.'
                },
                {
                  question: 'How long does carpet cleaning take to dry in the Parramatta area?',
                  answer: 'Most carpets cleaned by Pro Clean Corp in Parramatta are dry within 4–6 hours under normal conditions. We use powerful extraction to minimise moisture left in the carpet, and we recommend opening windows and running air conditioning to accelerate drying. Thicker carpets, humid weather, or poorly ventilated rooms may take slightly longer.'
                },
                {
                  question: 'Do you remove pet urine odors from carpets in Parramatta?',
                  answer: 'Yes. We use professional-grade enzymatic treatments that break down the urea crystals in pet urine at a molecular level — eliminating the odor permanently rather than masking it. For severe pet urine saturation that has soaked through to the underlay, we can assess and advise on the most effective treatment options. This service is available across all Parramatta suburbs and Western Sydney.'
                },
                {
                  question: 'Do you offer same-day carpet cleaning in Parramatta?',
                  answer: 'Same-day carpet cleaning is available in Parramatta and surrounding Western Sydney suburbs subject to technician availability. For urgent requests — such as before a rental inspection, after a spill, or prior to moving — call us on 1300 494 983 and we will do our best to accommodate your schedule. Booking ahead is always recommended to secure your preferred time.'
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
              <h3 className="text-3xl font-bold mb-4">Book Carpet Cleaning in Parramatta Today</h3>
              <p className="text-xl mb-6 text-gray-100">
                Professional steam cleaning, stain removal & end of lease carpet cleaning across Parramatta and Western Sydney. Eco-friendly products, fast drying, guaranteed results.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Your Free Parramatta Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
