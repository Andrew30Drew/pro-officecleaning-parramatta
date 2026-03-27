import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Gym Cleaning Inner West Sydney | From $45/hr | Pro Clean Corp",
  description: "Gym cleaning Inner West Sydney from $45/hr. CrossFit, yoga, pilates and boxing studios in Newtown, Marrickville and Balmain. Free quote.",
  keywords: "gym cleaning Inner West, gym cleaners Inner West Sydney, CrossFit cleaning Newtown, pilates studio cleaning Leichhardt, yoga studio cleaning Balmain, boxing gym cleaning Marrickville, fitness studio cleaning Inner West",
  openGraph: {
    title: "Gym Cleaning Inner West Sydney | From $45/hr | Pro Clean Corp",
    description: "Gym cleaning Inner West Sydney from $45/hr. CrossFit, yoga, pilates and boxing studios in Newtown, Marrickville and Balm.",
    url: "/gym-cleaning-inner-west",
    type: "website",
    images: [{ url: "/meta.png", alt: "Gym Cleaning Inner West" }]
  },
  alternates: { canonical: "/gym-cleaning-inner-west" }
};

const faqs = [
  {
    question: "How much does gym cleaning cost in the Inner West?",
    answer: "Gym cleaning across the Inner West starts at $45/hr. A small boutique yoga, pilates or barre studio (up to 200sqm) in Balmain, Leichhardt or Rozelle typically costs $200–$350 per visit. A medium CrossFit box or boxing gym (200–600sqm) in Newtown or Marrickville runs $300–$550 per visit. Large multi-discipline fitness centres cost $400–$800 per visit. We provide free on-site assessments across the Inner West."
  },
  {
    question: "Can you clean boutique yoga and pilates studios in Balmain and Rozelle?",
    answer: "Yes. Balmain and Rozelle have a high concentration of boutique wellness studios — pilates reformer studios, hot yoga spaces, barre classes and functional movement studios. These spaces have specific cleaning requirements: low-fragrance products, careful treatment of wooden floors and natural-fibre mats, and thorough bathroom and shower maintenance for post-class refresh areas. We offer fragrance-free and natural product options for wellness-focused studios."
  },
  {
    question: "Do you clean CrossFit and functional fitness gyms in Newtown and Marrickville?",
    answer: "Yes. Newtown and Marrickville host a number of high-intensity CrossFit boxes and functional fitness studios, often in converted warehouse or industrial spaces off King Street and Marrickville Road. We have specific protocols for chalk dust management, rubber floor scrubbing and equipment sanitisation in these high-sweat, high-traffic environments."
  },
  {
    question: "Can you clean boxing and combat sports gyms in the Inner West?",
    answer: "Yes. The Inner West has a strong tradition of boxing and combat sports — from historic boxing gyms in Leichhardt to modern MMA facilities in Marrickville and Sydenham. We clean boxing rings, heavy bags, speed bags, mats and change rooms using disinfectants proven effective against the bacteria responsible for skin infections that are a real concern in contact sports environments."
  },
  {
    question: "Do you service all Inner West gym locations — Annandale, Glebe, Pyrmont?",
    answer: "Yes. Our Inner West gym cleaning coverage extends across the full region: Newtown, Marrickville, Leichhardt, Balmain, Rozelle, Annandale, Glebe, Pyrmont, Dulwich Hill, Sydenham, Tempe and Erskineville. We assign a dedicated team to each suburb cluster for consistency and local knowledge."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Inner West"
        serviceDescription="Professional gym cleaning across Sydney's Inner West. Serving CrossFit boxes, yoga studios, pilates studios, boxing gyms and barre studios in Newtown, Marrickville, Leichhardt, Balmain, Rozelle and Annandale."
        serviceUrl="/gym-cleaning-inner-west"
        serviceType="Gym Cleaning"
        price="$$"
        additionalServices={["CrossFit box cleaning", "Yoga & pilates studio cleaning", "Boxing gym cleaning", "Barre studio cleaning", "Rubber floor scrubbing", "Mat disinfection"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Gym Cleaning Inner West</h1>
              <p className="text-xl mb-8 text-gray-100">Professional gym cleaning for Sydney's densest boutique fitness market. CrossFit boxes, yoga studios, pilates reformer spaces, boxing gyms and barre studios across Newtown, Marrickville, Leichhardt, Balmain, Rozelle and Annandale — all cleaned by teams who understand what each format requires.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Gym Cleaning Inner West" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Gym cleaning across the Inner West starts at $45/hr.</strong> Small boutique studios (up to 200sqm) cost $200–$350 per visit. Medium CrossFit boxes and boxing gyms (200–600sqm) run $300–$550 per visit. Large multi-discipline fitness centres cost $400–$800 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Inner West gym assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Gym Cleaning in Inner West</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Sydney's Inner West is Australia's most diverse boutique fitness market. The density of independent and franchise studios across Newtown, Marrickville, Leichhardt, Balmain, Rozelle and Annandale means the region has a gym for every training style — and a cleaning challenge for each of them. Yoga studios on Darling Street in Balmain need low-fragrance, mat-safe cleaning. CrossFit boxes off King Street in Newtown need chalk dust management and heavy rubber floor scrubbing. Boxing gyms in Leichhardt need ring canvas cleaning and odour elimination from decades of sweat-saturated leather.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Pro Clean Corp has built an Inner West gym cleaning operation that is genuinely differentiated by format. We do not apply a generic gym cleaning protocol across all facility types — we customise for each. Our yoga and wellness studio protocols use fragrance-free, TGA-listed disinfectants and wood-floor-safe cleaning systems. Our CrossFit and functional fitness protocols address chalk dust, barbell knurling and rubber floor penetration. Our boxing and combat sports protocols treat mat surfaces with enzyme-based disinfectants that eliminate the bacterial risk of contact training.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Inner West Gym Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Facility Size</th><th className="p-4 text-left">Typical Facility</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (up to 200sqm)</td><td className="p-4 text-gray-600">Yoga, pilates or barre studio</td><td className="p-4 text-greenprimary font-bold">$200–$350</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (200–600sqm)</td><td className="p-4 text-gray-600">CrossFit box, boxing or functional gym</td><td className="p-4 text-greenprimary font-bold">$300–$550</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (600sqm+)</td><td className="p-4 text-gray-600">Multi-discipline or large fitness centre</td><td className="p-4 text-greenprimary font-bold">$400–$800</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or supplementary cleaning</td><td className="p-4 text-greenprimary font-bold">From $45/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Yoga & pilates mat disinfection","CrossFit chalk dust removal","Boxing ring & bag cleaning","Rubber floor scrubbing","Change room & shower disinfection","Bathroom disinfection & restocking","Reception & lounge cleaning","Fragrance-free options for wellness studios","Equipment wipe-down & sanitisation","Enzyme-based odour elimination"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Inner West Gyms Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Format-specific cleaning protocols</li><li>• Fragrance-free options for wellness studios</li><li>• Chalk dust HEPA removal</li><li>• Boxing ring specialists</li><li>• Police-checked, insured staff</li><li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free assessment for Inner West gyms.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Gym Cleaning Inner West</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-darkblue mb-4">Also Serving Nearby Suburbs</h3>
            <div className="flex flex-wrap gap-3">
              {[{name:"CBD",href:"/commercial-cleaning-sydney"},{name:"Glebe",href:"/commercial-cleaning-glebe"},{name:"Surry Hills",href:"/commercial-cleaning-surry-hills"},{name:"Erskineville",href:"/commercial-cleaning-erskineville"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">The Inner West's Trusted Gym Cleaning Specialists</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for professional gym cleaning across Sydney's Inner West.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
