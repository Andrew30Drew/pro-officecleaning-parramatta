import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaner Near Me Sydney | Local Teams All Suburbs | Pro Clean Corp',
  description: 'Looking for a gym cleaner near you in Sydney? Pro Clean Corp has local teams across all suburbs. Equipment cleaning, changerooms, floors and more. Free quote today.',
  keywords: ['gym cleaner near me', 'gym cleaners near me sydney', 'local gym cleaners', 'gym cleaning company near me', 'fitness centre cleaner sydney'],
  openGraph: {
    title: 'Gym Cleaner Near Me Sydney | Local Teams All Suburbs | Pro Clean Corp',
    description: 'Local gym cleaners near you across all Sydney suburbs. Equipment cleaning, changerooms, floors. Book a free on-site quote today.',
    url: 'https://www.procleancorp.com.au/gym-cleaner-near-me',
    type: 'website',
    images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Gym cleaner near me Sydney' }]
  },
  twitter: { card: 'summary_large_image', title: 'Gym Cleaner Near Me Sydney | Pro Clean Corp', description: 'Local gym cleaners near you across all Sydney suburbs.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaner-near-me' }
};

const faqs = [
  {
    question: 'How do I find a gym cleaner near me in Sydney?',
    answer: 'Pro Clean Corp has gym cleaning teams based across Greater Sydney — from the CBD and Eastern Suburbs to the Western Suburbs, North Shore and Sutherland region. Call 1300 494 983 or request a quote online and we\'ll connect you with the nearest team. We can typically complete an on-site assessment within 48 hours and begin service within 5 business days.'
  },
  {
    question: 'What do gym cleaners include in their service?',
    answer: 'A professional gym cleaner covers: equipment surface disinfection (barbells, benches, machines, cables), floor cleaning and mopping, changeroom and toilet deep-clean, shower and locker area sanitisation, reception and common area cleaning, and restocking of paper products and sanitiser dispensers. Pro Clean Corp also includes HEPA vacuum of gym floors to reduce airborne dust and particulates.'
  },
  {
    question: 'How often should a gym be professionally cleaned?',
    answer: 'Most commercial gyms require daily professional cleaning, with high-traffic areas and equipment surfaces cleaned multiple times daily. 24-hour gyms may require overnight deep-cleaning services. Smaller studio gyms and boutique fitness centres can typically be maintained with a daily clean plus weekly deep-clean. We tailor frequency to your gym\'s membership size and operating hours.'
  },
  {
    question: 'Can gym cleaners work overnight or early morning?',
    answer: 'Yes. Most Pro Clean Corp gym cleaning services are scheduled outside peak training hours — typically overnight (10pm–5am) or early morning (5–7am) before the first sessions of the day. We can work around your gym\'s operating hours and member schedule to ensure cleaning never disrupts your members or classes.'
  }
];

const sydneyAreas = [
  { area: 'Eastern Suburbs', suburbs: 'Bondi, Randwick, Maroubra, Coogee, Kingsford, Kensington' },
  { area: 'Inner West', suburbs: 'Newtown, Glebe, Leichhardt, Balmain, Marrickville, Petersham' },
  { area: 'North Shore', suburbs: 'North Sydney, Chatswood, Artarmon, Lane Cove, St Leonards, Crows Nest' },
  { area: 'Western Sydney', suburbs: 'Parramatta, Auburn, Merrylands, Blacktown, Penrith, Liverpool' },
  { area: 'St George', suburbs: 'Hurstville, Kogarah, Rockdale, Bexley, Carlton, Allawah' },
  { area: 'Northern Beaches', suburbs: 'Manly, Dee Why, Brookvale, Mona Vale, Narrabeen, Curl Curl' }
];

export default function GymCleanerNearMePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaner Near Me Sydney"
        serviceDescription="Local gym cleaning teams across all Sydney suburbs. Equipment disinfection, changeroom cleaning, floors, showers and common areas. After-hours service available."
        serviceUrl="/gym-cleaner-near-me"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Gym Equipment Cleaning', 'Changeroom Cleaning', 'Shower Cleaning', 'Gym Floor Cleaning', 'Reception Cleaning', 'Sanitiser Restocking']}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-green-200 font-semibold uppercase tracking-widest text-sm mb-3">Local Gym Cleaning Teams · All Sydney Suburbs</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Find a Gym Cleaner Near You in Sydney
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                <strong>Pro Clean Corp has gym cleaners near you</strong> across all of Greater Sydney. We service commercial gyms, boutique studios and fitness centres — equipment, floors, changerooms and showers cleaned to hygiene standards your members expect.
              </p>
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-8">
                <p className="text-white font-semibold text-sm">✓ Teams in Eastern, Inner West, North Shore, Western, St George, Northern Beaches</p>
              </div>
              <a href="tel:1300494983" className="text-2xl font-bold text-green-200">1300 494 983</a>
            </div>
            <div>
              <Image
                src="/images/services/gym.jpg"
                alt="Gym cleaner near me Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-8 bg-greenprimary/10 border-l-4 border-greenprimary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>Find a gym cleaner near you in Sydney through Pro Clean Corp</strong> — with local teams covering every suburb from Bondi to Penrith, Manly to Cronulla. Equipment disinfection, changeroom deep-cleaning, gym floor mopping and sanitiser restocking — all scheduled outside peak training hours.
          </p>
        </div>
      </section>

      {/* Area Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-4 text-center">Gym Cleaners Near You — Sydney Coverage</h2>
          <p className="text-center text-gray-600 mb-10">Pro Clean Corp has gym cleaning teams across all major Sydney regions.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sydneyAreas.map((area, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-darkblue mb-2">{area.area}</h3>
                <p className="text-gray-600 text-sm">{area.suburbs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">What Your Local Gym Cleaner Covers</h2>
              <div className="space-y-3">
                {[
                  { area: 'Gym Floor', tasks: 'Sweep, mop and disinfect all gym floor surfaces including rubber matting, timber and vinyl.' },
                  { area: 'Equipment', tasks: 'Wipe down all machines, benches, barbells, dumbbells and cables with hospital-grade disinfectant.' },
                  { area: 'Changerooms', tasks: 'Deep clean of all changeroom surfaces, lockers, bench areas and mirrors.' },
                  { area: 'Showers', tasks: 'Grout scrubbing, fixture descaling, anti-slip floor treatment and drain cleaning.' },
                  { area: 'Toilets', tasks: 'Full disinfection of toilets, basins, taps and door handles. Restocking of consumables.' },
                  { area: 'Reception & Common Areas', tasks: 'Vacuuming, hard floor mopping, counter and glass cleaning.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border-l-4 border-greenprimary">
                    <h4 className="font-bold text-darkblue text-sm mb-1">{item.area}</h4>
                    <p className="text-gray-600 text-xs">{item.tasks}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/images/services/hero2.jpg"
                alt="Gym cleaning equipment"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                width={600}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8 text-center">FAQs — Gym Cleaner Near Me</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-darkblue mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blueprimary to-darkblue text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Find a Gym Cleaner Near You — Free Quote</h2>
          <p className="text-xl text-blue-100 mb-8">On-site assessment, fixed pricing. After-hours scheduling to suit your gym hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300494983" className="bg-greenprimary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition text-lg">Call 1300 494 983</a>
            <Link href="/contact-us" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition text-lg">Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
