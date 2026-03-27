import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Gym Cleaning Chatswood | From $45/hr | Pro Clean Corp",
  description: "Gym cleaning Chatswood from $45/hr. Pro Clean Corp serves 24hr gyms, pilates studios and corporate wellness centres in NSW 2067. Free quote.",
  keywords: "gym cleaning Chatswood, fitness centre cleaning Chatswood, gym cleaners Chatswood NSW 2067, pilates studio cleaning Chatswood, corporate gym cleaning Chatswood, Westfield Chatswood gym cleaning",
  openGraph: {
    title: "Gym Cleaning Chatswood | From $45/hr | Pro Clean Corp",
    description: "Gym cleaning Chatswood from $45/hr. Pro Clean Corp serves 24hr gyms, pilates studios and corporate wellness centres in N.",
    url: "/gym-cleaning-chatswood",
    type: "website",
    images: [{ url: "/meta.png", alt: "Gym Cleaning Chatswood" }]
  },
  alternates: { canonical: "/gym-cleaning-chatswood" }
};

const faqs = [
  {
    question: "How much does gym cleaning cost in Chatswood?",
    answer: "Gym cleaning in Chatswood starts at $45/hr. A small pilates studio or martial arts gym (up to 200sqm) typically costs $200–$350 per visit. A medium commercial gym or corporate wellness centre (200–600sqm) runs $300–$550 per visit. Large 24hr gyms and high-volume facilities in Chatswood's commercial towers cost $400–$800 per visit. Free site assessments available."
  },
  {
    question: "Can you clean corporate wellness centres in Chatswood's commercial towers?",
    answer: "Yes. Several of Chatswood's commercial office towers on Victoria Avenue and Pacific Highway have in-building gym and wellness facilities for corporate tenants. These require early morning cleans — typically before 6am — to ensure the space is ready for the early-morning workout crowd. We coordinate directly with building management for access."
  },
  {
    question: "Do you clean 24-hour gyms in Chatswood?",
    answer: "Yes. 24hr gyms near Westfield Chatswood and along the Victoria Avenue commercial strip operate around the clock and require targeted cleaning during their lowest-traffic windows — typically between 2am and 5am. We specialise in 24hr gym cleaning schedules and have teams available for overnight Chatswood runs."
  },
  {
    question: "What products do you use on gym equipment in Chatswood?",
    answer: "We use manufacturer-approved, non-corrosive disinfectants specifically formulated for gym equipment. These are safe for vinyl upholstery, LCD screens, rubber grips and powder-coated steel frames. We never use bleach or abrasive products that can degrade equipment in your Chatswood gym."
  },
  {
    question: "Can you clean martial arts and yoga studios in Chatswood?",
    answer: "Yes. Chatswood has a range of martial arts dojos, yoga studios and pilates reformer studios, particularly in the streets between Victoria Avenue and the Pacific Highway. We offer specialised mat cleaning and floor-level disinfection protocols for these spaces, with low-fragrance product options for yoga and wellness environments."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Chatswood"
        serviceDescription="Professional gym and fitness centre cleaning in Chatswood NSW 2067. Serving 24hr gyms, corporate wellness centres, pilates studios and martial arts gyms near Westfield Chatswood and Victoria Avenue."
        serviceUrl="/gym-cleaning-chatswood"
        serviceType="Gym Cleaning"
        price="$$"
        additionalServices={["Equipment sanitisation", "Change room & shower cleaning", "Rubber floor scrubbing", "Mirror cleaning", "Corporate wellness centre cleaning", "24hr gym overnight cleaning"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Gym Cleaning Chatswood</h1>
              <p className="text-xl mb-8 text-gray-100">Professional gym and fitness centre cleaning in Chatswood. Serving 24hr gyms, corporate wellness centres, pilates and yoga studios and martial arts gyms in one of Sydney's highest-density fitness markets.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Gym Cleaning Chatswood" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Gym cleaning in Chatswood starts at $45/hr.</strong> Small studios (up to 200sqm) cost $200–$350 per visit. Medium gyms and corporate wellness centres (200–600sqm) run $300–$550 per visit. Large 24hr facilities cost $400–$800 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Chatswood gym assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Gym Cleaning in Chatswood</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Chatswood is one of Sydney's most competitive fitness markets. The suburb's high residential density, strong corporate office population and proximity to major transport interchange — Chatswood Station serving both the T1 and Metro lines — creates a constant fitness consumer base that fills gyms from 5am to 10pm. Westfield Chatswood anchors a gym cluster on and around the retail precinct, while Victoria Avenue's commercial towers generate demand for in-building corporate wellness centres used by thousands of office workers daily.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">High membership volume means Chatswood gyms accumulate bacterial load faster than lower-traffic regional facilities — equipment, change rooms and showers are in continuous use. Pro Clean Corp's Chatswood gym cleaning protocols are designed for high-throughput environments: rapid equipment sanitisation cycles, systematic floor rotation cleaning for rubber mats, and thorough change room disinfection that addresses both visible soiling and odour at the microbial level.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Chatswood Gym Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Facility Size</th><th className="p-4 text-left">Typical Facility</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (up to 200sqm)</td><td className="p-4 text-gray-600">Pilates, yoga, martial arts studio</td><td className="p-4 text-greenprimary font-bold">$200–$350</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (200–600sqm)</td><td className="p-4 text-gray-600">Corporate wellness, boutique gym</td><td className="p-4 text-greenprimary font-bold">$300–$550</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (600sqm+)</td><td className="p-4 text-gray-600">24hr gym, commercial fitness centre</td><td className="p-4 text-greenprimary font-bold">$400–$800</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or supplementary cleaning</td><td className="p-4 text-greenprimary font-bold">From $45/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Equipment wipe-down & sanitisation","Change room & shower deep clean","Rubber floor scrubbing & disinfection","Mirror & glass streak-free cleaning","Reception & lounge area cleaning","Cardio zone equipment sanitisation","Free weights & rack cleaning","Locker room deodourising","Bathroom disinfection & restocking","HVAC vent & surface dusting"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Chatswood Gyms Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 24hr gym overnight cleaning</li>
                  <li>• Corporate tower access experience</li>
                  <li>• Enzyme-based odour elimination</li>
                  <li>• Equipment-safe disinfectants</li>
                  <li>• Police-checked, insured staff</li>
                  <li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free assessment for Chatswood gyms.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Gym Cleaning Chatswood</h3>
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
              {[{name:"Artarmon",href:"/commercial-cleaning-artarmon"},{name:"Lane Cove",href:"/commercial-cleaning-lane-cove"},{name:"North Sydney",href:"/gym-cleaning-north-sydney"},{name:"Gordon",href:"/commercial-cleaning-gordon"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Keep Your Chatswood Members Happy</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for professional gym cleaning in Chatswood.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
