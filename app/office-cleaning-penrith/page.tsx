import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Cleaning Penrith NSW | Professional Commercial Cleaning Services',
  description: 'Reliable office cleaning services in Penrith NSW and the Blue Mountains. Professional commercial cleaners for offices, medical suites, and businesses. Daily, weekly, and periodic cleaning available.',
  keywords: 'office cleaning Penrith, commercial cleaning Penrith NSW, professional cleaners Penrith, office cleaners western Sydney',
  openGraph: {
    title: 'Office Cleaning Penrith NSW | Professional Commercial Cleaning Services',
    description: 'Reliable office cleaning services in Penrith NSW and the Blue Mountains. Professional commercial cleaners for offices, medical suites, and businesses. Daily, weekly, and periodic cleaning available.',
    url: '/office-cleaning-penrith',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Office cleaning Penrith NSW' }]
  },
  alternates: { canonical: '/office-cleaning-penrith' }
};

export default function OfficeCleaningPenrithPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-darkblue via-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Cleaning Penrith NSW
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Penrith&apos;s trusted commercial cleaning partner. Professional office cleaning for businesses, medical suites, and corporate workplaces across Penrith and the Blue Mountains. Flexible daily, weekly, and periodic schedules — after-hours available, no disruption to your business.
              </p>
              <div className="bg-white/10 rounded-xl p-4 inline-block">
                <p className="text-white font-bold text-lg">Call 1300 494 983 — Free Office Cleaning Quote</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Office cleaning Penrith NSW - Professional commercial cleaning services"
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
            <h2 className="text-3xl font-bold text-darkblue mb-8">Reliable Office Cleaning Services in Penrith & Western Sydney</h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Penrith is one of Western Sydney&apos;s fastest-growing commercial centres, home to a thriving mix of professional services, medical practices, corporate offices, government agencies, and small businesses. Pro Clean Corp provides dependable, professional office cleaning across Penrith, Kingswood, St Marys, Glenmore Park, and through to the Blue Mountains, helping local businesses maintain clean, healthy, and well-presented workplaces.
                </p>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  A consistently clean office environment signals professionalism to clients, boosts staff morale, and contributes to employee health and productivity. We understand that Penrith businesses need a cleaning provider who shows up reliably, communicates clearly, and delivers consistently high standards — not just on the first day but on every visit thereafter. That&apos;s our commitment to every Penrith office cleaning client.
                </p>

                <h3 className="text-2xl font-bold text-darkblue mb-4">Flexible Cleaning Schedules for Penrith Businesses</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Every Penrith business has different cleaning needs based on office size, staff numbers, client foot traffic, and industry-specific hygiene requirements. We offer daily office cleaning for busy professional firms and medical practices, 3-times-per-week schedules for mid-sized offices, weekly cleaning for smaller businesses, and periodic deep cleans for all clients regardless of their regular schedule frequency. All cleans can be performed outside business hours to completely eliminate disruption to your team.
                </p>
              </div>

              <div>
                <Image
                  src="/images/hero/hero5.jpg"
                  alt="Professional office cleaners serving Penrith and Blue Mountains"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
                <div className="bg-darkblue/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Penrith Office Cleaning</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ After-hours cleaning available</li>
                    <li>✓ Daily, weekly & periodic</li>
                    <li>✓ Medical & corporate clients</li>
                    <li>✓ Police-checked staff</li>
                    <li>✓ Fully insured</li>
                    <li>✓ Free site assessment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">How We Set Up Your Penrith Office Cleaning</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">1. Free Site Assessment</h4>
                <p className="text-gray-700 mb-4">
                  We visit your Penrith office to understand its size, layout, specific cleaning priorities, and any sensitive areas such as server rooms, reception spaces, or client meeting rooms. This assessment lets us accurately scope the work, recommend an appropriate cleaning frequency, and provide a firm, transparent quote with no hidden extras.
                </p>

                <h4 className="text-xl font-semibold text-darkblue mb-3">2. Customised Cleaning Specification</h4>
                <p className="text-gray-700 mb-4">
                  We document your office cleaning requirements in a detailed specification that covers every area and every task — from daily desk wipes and kitchen sanitisation to weekly glass cleaning and periodic carpet vacuuming. This specification is shared with your assigned cleaning team and becomes the standard by which every clean is measured and quality-checked.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-darkblue mb-3">3. Consistent Assigned Team</h4>
                <p className="text-gray-700 mb-4">
                  Where possible, we assign the same cleaning staff to your Penrith office on every visit. Familiarity with your space means faster, more thorough cleaning — your team knows the layout, understands your priorities, and builds trust with your staff. All assigned cleaners are police-checked, uniformed, and carry company identification.
                </p>

                <h4 className="text-xl font-semibold text-darkblue mb-3">4. Ongoing Quality Management</h4>
                <p className="text-gray-700 mb-4">
                  Our supervisors conduct regular quality inspections across all Penrith office cleaning contracts. We use digital checklists and sign-off reports, and provide clients with access to cleaning records on request. Any concerns are addressed immediately — we don&apos;t wait for issues to accumulate before taking action.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Office Cleaning Services in Penrith NSW</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Daily office cleaning',
                  'Desk & workstation cleaning',
                  'Kitchen & breakroom cleaning',
                  'Bathroom & toilet sanitisation',
                  'Floor vacuuming & mopping',
                  'Window & glass cleaning',
                  'Bin emptying & waste removal',
                  'High-touch surface disinfection',
                  'Meeting room cleaning',
                  'Reception area cleaning',
                  'Computer equipment dusting',
                  'After-hours cleaning'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-darkblue rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">The Value of Professional Office Cleaning in Penrith</h3>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Image
                  src="/images/about_img1.webp"
                  alt="Professional office cleaning results in Penrith NSW"
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                  width={400}
                  height={256}
                  loading="lazy"
                />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="border-l-4 border-darkblue pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Staff Health & Reduced Absenteeism</h4>
                    <p className="text-gray-700">Regular professional office cleaning reduces the concentration of bacteria, viruses, and allergens in the workplace — helping to reduce illness transmission and the sick days that cost Penrith businesses thousands each year.</p>
                  </div>
                  <div className="border-l-4 border-greenprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Professional Client Impression</h4>
                    <p className="text-gray-700">A spotless reception area, clean meeting rooms, and fresh-smelling offices make a powerful statement to Penrith clients and visitors. First impressions in business are made in seconds — make sure yours is the right one.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">WHS Compliance</h4>
                    <p className="text-gray-700">NSW workplace health and safety laws require employers to maintain a clean, safe work environment. Professional cleaning with documented schedules helps Penrith businesses meet their WHS obligations and reduces risk of incidents.</p>
                  </div>
                  <div className="border-l-4 border-darkblue pl-6">
                    <h4 className="font-semibold text-darkblue mb-2">Focus on Your Core Business</h4>
                    <p className="text-gray-700">Outsourcing cleaning to Pro Clean Corp frees up your Penrith team to focus on what they do best. No more managing ad-hoc cleaners, buying supplies, or worrying about whether the office is presentable for Monday morning.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">Penrith & Blue Mountains Areas We Service</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Pro Clean Corp provides office cleaning across Penrith and the greater western corridor including the Blue Mountains:
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                'Penrith', 'Kingswood', 'St Marys', 'Emu Plains',
                'Werrington', 'Cambridge Park', 'Cranebrook', 'Jamisontown',
                'Glenmore Park', 'Orchard Hills', 'Mulgoa', 'Wallacia',
                'Blue Mountains', 'Katoomba', 'Springwood'
              ].map((location, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 font-medium">{location}</span>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Office Cleaning Penrith</h3>
            <div className="space-y-6 mb-12">
              {[
                {
                  question: 'How much does office cleaning cost in Penrith?',
                  answer: 'Office cleaning costs in Penrith depend on the office size, number of areas to be cleaned, frequency of service, and any specialist requirements. Small offices (under 200sqm) typically start from $80–$150 per visit on a regular schedule. Larger offices and medical suites are quoted individually following a free site assessment. Call 1300 494 983 for your personalised Penrith office cleaning quote.'
                },
                {
                  question: 'Can you clean our Penrith office outside business hours?',
                  answer: 'Yes — after-hours office cleaning is one of our most popular options for Penrith businesses. We schedule cleaning teams to arrive after your staff have left for the day (typically 5:30pm–9pm) or early in the morning before business opens. We can manage secure key-holding and alarm codes. After-hours cleaning means zero disruption to your Penrith team and clients throughout the working day.'
                },
                {
                  question: 'Do you clean medical and dental offices in Penrith?',
                  answer: 'Yes — we provide specialist medical cleaning services for GP practices, specialist clinics, dental surgeries, allied health offices, and medical suites across Penrith and the Blue Mountains. Medical cleaning requires a higher standard of infection control, appropriate disinfectants, and compliance with healthcare cleaning guidelines. Our medical cleaning teams are trained specifically for clinical environments.'
                },
                {
                  question: 'How do you manage cleaning quality for Penrith office clients?',
                  answer: 'We assign dedicated cleaning staff to each Penrith office wherever possible, so your team always knows who is in the building. Our supervisors conduct regular quality inspections and we use digital cleaning checklists and sign-off reports. Clients have access to a direct account manager who can address any concerns promptly. We also welcome regular feedback and conduct periodic review meetings for ongoing contracts.'
                },
                {
                  question: 'Do you provide cleaning supplies and consumables for Penrith offices?',
                  answer: 'Yes — we bring all professional cleaning equipment and products to every clean. We also offer consumable management services for Penrith offices, including restocking toilet paper, hand soap, paper towels, and sanitiser dispensers as part of your cleaning program. This removes one more administrative task from your team and ensures your amenities are never run out of stock.'
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
              <h3 className="text-3xl font-bold mb-4">Professional Office Cleaning in Penrith NSW</h3>
              <p className="text-xl mb-6 text-gray-100">
                Reliable commercial cleaning for offices, medical suites, and businesses across Penrith and the Blue Mountains. Daily, weekly, or periodic — after-hours available, results guaranteed.
              </p>
              <div className="text-2xl font-bold text-white">
                Call 1300 494 983 for Your Free Penrith Quote
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
