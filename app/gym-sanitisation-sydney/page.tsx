import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Sanitisation Sydney | TGA-Approved Disinfection Programs | ProCleanCorp',
  description: 'Professional gym sanitisation services across Sydney. TGA-approved disinfection programs, equipment sanitisation logs, sanitisation certificates. Fitness centres, CrossFit, yoga studios. Free quote.',
  keywords: 'gym sanitisation sydney, gym sanitisation service sydney, fitness centre sanitisation sydney, gym disinfection service sydney, TGA approved gym sanitisation, gym hygiene sydney',
  openGraph: {
    title: 'Gym Sanitisation Sydney | TGA-Approved Disinfection Programs | ProCleanCorp',
    description: 'Professional gym sanitisation across Sydney. TGA-approved disinfection, equipment sanitisation logs, certificates. Fitness centres, CrossFit, yoga. Free quote.',
    url: 'https://www.procleancorp.com.au/gym-sanitisation-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Gym sanitisation Sydney fitness centre disinfection' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/gym-sanitisation-sydney' }
};

const faqs = [
  {
    question: 'What is gym sanitisation and how is it different from gym cleaning?',
    answer: 'Gym cleaning refers to the physical removal of dirt, sweat and debris from surfaces — vacuuming, mopping and wiping down equipment. Gym sanitisation is the application of a TGA-registered disinfectant at the correct concentration and contact time to kill pathogens remaining after cleaning. Both are needed: cleaning first removes organic matter that inactivates disinfectants, followed by sanitisation to kill bacteria, viruses and fungi that cause gym-acquired infections. ProCleanCorp provides combined clean + sanitise programs with TGA-registered products for all gym environments.'
  },
  {
    question: 'Can you provide a gym sanitisation certificate for our gym members or council inspectors?',
    answer: 'Yes. ProCleanCorp provides documented sanitisation records and, where required, a formal gym sanitisation certificate confirming the products used (including TGA ARTG numbers), the areas sanitised, the frequency and the date of service. These certificates are suitable for council health inspections, franchise compliance audits, and member-facing hygiene transparency programs.'
  },
  {
    question: 'How often should a Sydney gym be professionally sanitised?',
    answer: 'High-traffic gyms operating 12+ hours per day should be professionally sanitised daily — ideally before opening and optionally between sessions in high-touch areas (free weights, handles). Equipment sanitisation (wipe-down with TGA disinfectant) should happen throughout the day via member-accessible stations. A weekly deep sanitisation program covering all surfaces is the standard for most commercial gyms in Sydney.'
  },
  {
    question: 'What gym equipment and surfaces do you sanitise?',
    answer: 'We sanitise all gym equipment contact surfaces: free weight handles and plates, machine handles and seats, cable handles and attachments, cardio machine touchscreens, handles and seat rails, resistance bands and kettlebells, yoga and Pilates mats, and locker room surfaces. We also sanitise high-touch general surfaces: door handles, reception counter, towel dispensers and water stations.'
  }
];

export default function GymSanitisationSydneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Sanitisation Sydney"
        serviceDescription="Professional gym sanitisation services across Sydney using TGA-registered disinfectants. Equipment sanitisation, daily and weekly programs, certificates and logs for compliance. Fitness centres, CrossFit, yoga and pilates."
        serviceUrl="https://www.procleancorp.com.au/gym-sanitisation-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['TGA-Registered Disinfection', 'Equipment Sanitisation', 'Daily Sanitisation Programs', 'Sanitisation Certificates', 'Locker Room Disinfection', 'Deep Sanitisation Programs']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">TGA-Approved · Documented · Certified</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Gym Sanitisation Sydney — TGA-Approved Disinfection Programs for Fitness Centres
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp delivers professional gym sanitisation programs across Sydney using TGA-registered disinfectants, with equipment sanitisation logs and formal certificates for gym owners, franchise compliance and council inspections.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ TGA-Registered Disinfectants &nbsp;|&nbsp; ✓ Sanitisation Certificates &nbsp;|&nbsp; ✓ Free Quote in 24hrs</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/gym.webp" alt="Gym sanitisation Sydney fitness centre disinfection"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides professional gym sanitisation programs across Sydney</strong> using TGA-registered disinfectants at verified concentration and contact times. We service fitness centres, CrossFit boxes, yoga studios and boutique gyms with daily or weekly sanitisation programs, providing equipment sanitisation logs and formal certificates that gym owners can use for franchise compliance, council inspections and member-facing hygiene transparency.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Gym Sanitisation in Sydney</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Gyms are one of the highest-risk environments for pathogen transmission — high-touch equipment, shared sweat contact surfaces, warm humid change rooms and high-footfall floor areas create ideal conditions for bacteria and viruses to survive and spread. A documented gym sanitisation program with TGA-registered disinfectants is not just good practice — it is increasingly expected by members, franchise bodies and local councils.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Gym Sanitisation Program — What's Included</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'TGA-registered disinfectant application',
                    'Free weight area — handles, plates, racks',
                    'Machine handles, seats and touchscreens',
                    'Cardio equipment — all contact surfaces',
                    'Yoga/Pilates mat sanitisation',
                    'Locker room — benches, lockers, floors',
                    'Change room and shower sanitisation',
                    'Reception and member entry surfaces',
                    'Water station and towel dispenser points',
                    'Studio floor disinfection (post-class)',
                    'Sanitisation log (equipment + areas)',
                    'Formal sanitisation certificate on request'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: 'TGA-Registered Products', desc: 'Disinfectants with valid ARTG numbers — effective against MRSA, VRE, fungi and enveloped viruses including COVID-19.' },
                  { title: 'Sanitisation Certificates', desc: 'Formal certificates available for franchise audits, council inspections and member hygiene transparency programs.' },
                  { title: 'Equipment Logs', desc: 'Every piece of equipment and surface area logged per visit — timestamps, product used, staff initials.' },
                  { title: 'Flexible Programs', desc: 'Daily pre-opening, between-session top-up, evening post-close or weekly deep sanitisation — tailored to your schedule.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-greenprimary pl-4">
                    <h4 className="font-semibold text-darkblue mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Gym Types We Sanitise</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['24-hour commercial gyms', 'CrossFit boxes', 'Yoga & pilates studios', 'Boutique fitness studios', 'Council leisure centres', 'School & university gyms', 'Corporate wellness centres', 'Martial arts & boxing gyms'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site assessment. Sanitisation program and certificate pricing included.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Gym Sanitisation Sydney</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-darkblue mb-2">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-darkblue mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Gym Cleaning Sydney', href: '/gym-cleaning-sydney' },
                { label: 'Gym Floor Cleaning Sydney', href: '/gym-floor-cleaning-sydney' },
                { label: 'Gym Cleaning Company Sydney', href: '/gym-cleaning-company-sydney' },
                { label: 'Medical Grade Cleaning Sydney', href: '/medical-grade-cleaning-sydney' },
                { label: 'Commercial Cleaning Sydney', href: '/commercial-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get Your Free Gym Sanitisation Quote</h3>
            <p className="text-xl mb-4 text-gray-100">TGA-registered products, sanitisation certificates, equipment logs. Free on-site assessment within 24 hours.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
