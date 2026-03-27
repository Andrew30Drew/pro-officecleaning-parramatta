import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Fitness Cleaning Services Sydney NSW | Gym & Fitness Centre Cleaning | Pro Clean Corp',
  description: 'Professional fitness cleaning services across Sydney NSW. Specialist hygiene and sanitisation for gyms, fitness studios, CrossFit boxes, yoga studios, and health clubs. Call 1300 494 983.',
  keywords: [
    'fitness cleaning services',
    'fitness centre cleaning Sydney',
    'fitness studio cleaning NSW',
    'yoga studio cleaning Sydney',
    'CrossFit cleaning services',
    'health club cleaning Sydney',
    'fitness facility hygiene NSW',
    'gym and fitness cleaning Sydney',
    'Pro Clean Corp fitness cleaning'
  ],
  openGraph: {
    title: 'Fitness Cleaning Services Sydney | Pro Clean Corp',
    description: 'Specialist fitness cleaning for gyms, studios, CrossFit boxes, and health clubs across Sydney NSW.',
    url: '/fitness-cleaning-services',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Fitness Cleaning Services Sydney NSW' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitness Cleaning Services Sydney | Pro Clean Corp',
    description: 'Specialist fitness cleaning for gyms, studios, CrossFit boxes, and health clubs across Sydney NSW.',
    images: ['https://www.procleancorp.com.au/meta.png']
  },
  alternates: { canonical: '/fitness-cleaning-services' }
};

export default function FitnessCleaningServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Fitness Cleaning Services Sydney"
        serviceDescription="Specialist fitness cleaning services across Sydney NSW for gyms, fitness studios, CrossFit boxes, yoga studios, and health clubs using antimicrobial products and hygiene-focused protocols."
        serviceUrl="/fitness-cleaning-services"
        serviceType="Fitness Cleaning"
        price="$$-$$$"
        additionalServices={[
          'Gym Equipment Sanitisation',
          'Yoga & Pilates Studio Cleaning',
          'CrossFit Box Deep Clean',
          'Health Club Common Area Cleaning',
          'Changeroom & Shower Disinfection',
          'Reception & Retail Area Cleaning'
        ]}
        faqs={[
          {
            question: 'What does fitness facility cleaning involve?',
            answer: 'Fitness facility cleaning involves daily sanitisation of all workout equipment, floor cleaning and degreasing, changeroom and shower disinfection, odour control, reception and lounge area cleaning, and high-touch point disinfection throughout the facility. We use antimicrobial products safe for all fitness equipment materials.'
          },
          {
            question: 'How is fitness centre cleaning different from standard office cleaning?',
            answer: 'Fitness centre cleaning requires specialised antimicrobial products suited to equipment materials, knowledge of high-humidity environments like showers and steam rooms, odour management techniques, rubber and speciality flooring care, and the ability to schedule cleaning around member sessions including early morning and late night windows.'
          }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Fitness Facility Specialists
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Fitness Cleaning Services Sydney
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Hygienic, member-ready fitness facilities start with the right cleaning partner. Pro Clean Corp specialises in fitness cleaning across Sydney NSW — gyms, CrossFit boxes, yoga studios, pilates centres, health clubs, and leisure facilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                  Get a Free Quote
                </a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
                  Call 1300 494 983
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Antimicrobial Products</span>
                <span>✓ Equipment-Safe Methods</span>
                <span>✓ Flexible Scheduling</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/gym.jpg"
                alt="Fitness cleaning services Sydney - Gym and fitness centre cleaning"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-blueprimary">105</div>
                <div className="text-xs text-gray-500">Monthly Search Impressions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium">
            <strong>Fitness cleaning services</strong> are specialist cleaning programs designed for the unique hygiene demands of gyms, fitness studios, CrossFit boxes, yoga studios, and health clubs — using antimicrobial products, high-frequency sanitisation schedules, and equipment-safe techniques to keep fitness facilities hygienic and member-ready at all times.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Specialist Fitness Facility Cleaning — Sydney NSW</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Fitness facilities have unique cleaning demands. Sweat, bacteria, fungi, and high-contact surfaces create challenging hygiene environments. Member safety, satisfaction, and your facility&apos;s reputation all depend on getting the cleaning right — consistently, thoroughly, and with the right products for fitness environments.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Pro Clean Corp&apos;s fitness cleaning specialists understand the difference between cleaning a gym and cleaning a standard commercial space. From the rubber floor under power racks to the tiled changeroom floors, from cardio machines with electronic displays to yoga studio hardwood — every surface material and hygiene zone in a fitness facility requires specific care.
              </p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Fitness Cleaning for All Facility Types</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                We provide fitness cleaning services for traditional gyms and health clubs, boutique fitness studios, CrossFit and functional fitness facilities, yoga and pilates studios, leisure centres with pools and spa facilities, and personal training spaces. Each program is tailored to your facility&apos;s specific layout, member volumes, and operating hours.
              </p>
            </div>
            <div>
              <Image
                src="/images/hero/hero5.jpg"
                alt="Fitness cleaning specialist Sydney gym equipment"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
                width={400}
                height={256}
                loading="lazy"
              />
              <div className="bg-blueprimary/10 p-6 rounded-xl">
                <h4 className="font-bold text-darkblue mb-3">Fitness Facility Types</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Commercial gyms</li>
                  <li>✓ CrossFit boxes</li>
                  <li>✓ Yoga & pilates studios</li>
                  <li>✓ Health clubs</li>
                  <li>✓ Leisure centres</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services Checklist */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Complete Fitness Cleaning Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Gym equipment sanitisation & wipe-down',
                'Cardio machine cleaning',
                'Rubber & speciality floor cleaning',
                'Yoga studio mat cleaning & storage area',
                'CrossFit rig & equipment cleaning',
                'Changeroom deep cleaning',
                'Shower & toilet disinfection',
                'Sauna & steam room cleaning',
                'Pool deck & spa area cleaning',
                'Reception & lounge cleaning',
                'Café & juice bar area cleaning',
                'High-touch surface disinfection'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Related Fitness & Commercial Cleaning</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Gym Cleaners Sydney', sub: 'Gym specialists', href: '/gym-cleaners-sydney' },
                { label: 'Gym Cleaning Sydney', sub: 'Full gym services', href: '/gym-cleaning-services-sydney' },
                { label: 'Gym Floor Cleaning', sub: 'Rubber floor experts', href: '/gym-floor-cleaning-sydney' },
                { label: 'Commercial Cleaning', sub: 'All facility types', href: '/commercial-cleaning-sydney' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="bg-slate-50 p-4 rounded-xl text-center hover:bg-white hover:shadow-md transition border border-gray-100 group">
                  <span className="font-bold text-gray-700 group-hover:text-blueprimary block mb-2">{item.label}</span>
                  <span className="text-xs text-gray-500">{item.sub}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-darkblue mb-2 text-center">Fitness Cleaning Costs — Sydney NSW</h3>
            <p className="text-center text-gray-600 mb-8">Pricing based on facility type, size, and cleaning frequency requirements.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blueprimary text-white">
                    <th className="p-4 rounded-tl-lg font-semibold">Facility Type</th>
                    <th className="p-4 font-semibold">Estimated Cost Per Visit</th>
                    <th className="p-4 rounded-tr-lg font-semibold">Recommended Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'Boutique yoga/pilates studio', cost: '$150 – $280', freq: 'Daily' },
                    { type: 'CrossFit box / small gym', cost: '$250 – $420', freq: 'Daily' },
                    { type: 'Mid-size gym (with changerooms)', cost: '$420 – $750', freq: 'Daily + deep weekly' },
                    { type: 'Large health club / leisure centre', cost: 'Custom quote', freq: 'Multiple daily sessions' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-darkblue">{row.type}</td>
                      <td className="p-4 font-bold text-greenprimary text-lg">{row.cost}</td>
                      <td className="p-4 text-gray-600">{row.freq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-6">
              <a href="/contact-us" className="inline-block bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">
                Get Your Free Fitness Cleaning Quote →
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Fitness Cleaning Services</h3>
            <div className="space-y-6">
              {[
                { q: 'What does fitness facility cleaning involve?', a: 'Fitness facility cleaning involves daily sanitisation of all workout equipment, floor cleaning and degreasing, changeroom and shower disinfection, odour control, reception and lounge area cleaning, and high-touch point disinfection. We use antimicrobial products safe for all fitness equipment materials.' },
                { q: 'How is fitness centre cleaning different from standard office cleaning?', a: 'Fitness centre cleaning requires specialised antimicrobial products suited to equipment materials, knowledge of high-humidity environments like showers and steam rooms, odour management techniques, rubber and speciality flooring care, and the ability to schedule cleaning around early morning and late night member sessions.' },
                { q: 'Can fitness cleaning be done while members are present?', a: 'Yes. Our fitness cleaning teams are trained to work safely and unobtrusively around members. Surface sanitisation, floor maintenance, and common area cleaning can all be performed during operational hours. Deep cleans and changeroom cleaning are typically scheduled before opening or after closing.' },
                { q: 'Do you clean yoga mats and fitness equipment?', a: 'We clean and sanitise shared fitness equipment surfaces, handles, seats, and contact points using equipment-safe antimicrobial products. For yoga mats, we offer cleaning of mat storage areas and recommendation on appropriate mat-specific cleaning products that facilities can provide for members to self-clean.' }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-darkblue mb-2">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Specialist Fitness Cleaning Services — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">
              Keep your fitness facility hygienic, fresh, and member-ready with Pro Clean Corp&apos;s specialist fitness cleaning team. 7 days a week across all Sydney suburbs.
            </p>
            <div className="text-2xl font-bold text-greenprimary">
              Call 1300 494 983 for Your Fitness Cleaning Quote
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
