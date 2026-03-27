import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Gym Cleaning Campbelltown | From $45/hr | Pro Clean Corp",
  description: "Gym cleaning Campbelltown from $45/hr. Large commercial gyms and leisure centres along Queen Street and Narellan Rd NSW 2560. Free quote.",
  keywords: "gym cleaning Campbelltown, fitness centre cleaning Campbelltown, gym cleaners Campbelltown NSW 2560, Queen Street gym cleaning, commercial gym cleaning Campbelltown, leisure centre cleaning Campbelltown",
  openGraph: {
    title: "Gym Cleaning Campbelltown | From $45/hr | Pro Clean Corp",
    description: "Gym cleaning Campbelltown from $45/hr. Large commercial gyms and leisure centres along Queen Street and Narellan Rd NSW .",
    url: "/gym-cleaning-campbelltown",
    type: "website",
    images: [{ url: "/meta.png", alt: "Gym Cleaning Campbelltown" }]
  },
  alternates: { canonical: "/gym-cleaning-campbelltown" }
};

const faqs = [
  {
    question: "How much does gym cleaning cost in Campbelltown?",
    answer: "Gym cleaning in Campbelltown starts at $45/hr. A small gym or fitness studio (up to 200sqm) on Queen Street or the Narellan Road corridor typically costs $200–$350 per visit. A medium commercial gym with multiple zones (200–600sqm) runs $300–$550 per visit. Large community leisure centres and high-membership gyms cost $400–$800 per visit. Free on-site assessments available for all Campbelltown gyms."
  },
  {
    question: "Can you handle the high-membership volume of Campbelltown gyms?",
    answer: "Yes. Campbelltown gyms serve one of South-West Sydney's largest population catchments — drawing members from Campbelltown, Narellan, Minto, Ingleburn and the surrounding growth suburbs. This translates to very high daily membership usage. We use industrial-grade equipment and rapid-cycle cleaning protocols designed for facilities processing 500+ members per day."
  },
  {
    question: "Do you clean community leisure centres and council facilities in Campbelltown?",
    answer: "Yes. Community leisure centres operated by Campbelltown City Council and private operators in the area require thorough cleaning of pools, gym floors, change rooms, courts and reception areas. We hold appropriate insurances and have experience with community sport facilities across South-West Sydney."
  },
  {
    question: "Can you clean gyms along the Narellan Road growth corridor near Campbelltown?",
    answer: "Yes. The Narellan Road corridor — connecting Campbelltown to the rapidly expanding Camden LGA — has seen significant gym and leisure facility growth as new residential developments bring tens of thousands of residents. We service gyms in Campbelltown, Gregory Hills, Narellan and the surrounding corridor."
  },
  {
    question: "What time do you clean Campbelltown gyms to avoid peak hours?",
    answer: "We typically schedule Campbelltown gym cleans between 2am–5am for 24hr facilities, or immediately after closing for standard-hours gyms. We can also provide targeted inter-session cleaning during mid-morning or early afternoon low-traffic windows. We work to your timetable — not ours."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Campbelltown"
        serviceDescription="Professional gym cleaning in Campbelltown NSW 2560. Serving large commercial gyms and community leisure centres along Queen Street and the Narellan Road corridor in South-West Sydney."
        serviceUrl="/gym-cleaning-campbelltown"
        serviceType="Gym Cleaning"
        price="$$"
        additionalServices={["High-volume gym cleaning", "Community leisure centre cleaning", "Equipment sanitisation", "Change room disinfection", "Rubber floor scrubbing", "Court cleaning"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Gym Cleaning Campbelltown</h1>
              <p className="text-xl mb-8 text-gray-100">Professional gym and fitness centre cleaning in Campbelltown. Serving South-West Sydney's large commercial gyms and community leisure centres along Queen Street and the Narellan Road corridor, where high membership volumes demand rigorous, consistent hygiene standards.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Gym Cleaning Campbelltown" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Gym cleaning in Campbelltown starts at $45/hr.</strong> Small gyms and fitness studios (up to 200sqm) cost $200–$350 per visit. Medium commercial gyms (200–600sqm) run $300–$550 per visit. Large community leisure centres and high-volume gyms cost $400–$800 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Campbelltown gym assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Gym Cleaning in Campbelltown</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Campbelltown is South-West Sydney's regional commercial and fitness hub. The Queen Street CBD hosts a dense cluster of commercial gyms and health services, while the Narellan Road corridor — stretching towards the rapidly developing Camden LGA — has become a new frontier for gym development as new residential estates bring large numbers of health-conscious residents to the region. The Campbelltown-Macarthur precinct draws gym members from one of Sydney's fastest-growing population zones.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">High-membership gyms in Campbelltown present significant cleaning challenges: shower blocks, change rooms and locker areas used by hundreds of members per day accumulate bacteria and fungal growth rapidly if not maintained to a rigorous daily standard. Pro Clean Corp equips its South-West Sydney gym cleaning teams with TGA-approved hospital-grade disinfectants, industrial floor scrubbers and enzyme-based odour elimination products that ensure Campbelltown gym facilities are genuinely hygienic — not just superficially clean.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Campbelltown Gym Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Facility Size</th><th className="p-4 text-left">Typical Facility</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (up to 200sqm)</td><td className="p-4 text-gray-600">Boutique gym, yoga or pilates studio</td><td className="p-4 text-greenprimary font-bold">$200–$350</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (200–600sqm)</td><td className="p-4 text-gray-600">Commercial gym, multi-zone fitness centre</td><td className="p-4 text-greenprimary font-bold">$300–$550</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (600sqm+)</td><td className="p-4 text-gray-600">Community leisure centre, large commercial gym</td><td className="p-4 text-greenprimary font-bold">$400–$800</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or supplementary cleaning</td><td className="p-4 text-greenprimary font-bold">From $45/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Equipment wipe-down & sanitisation","Change room & shower disinfection","Rubber floor scrubbing & mopping","Locker room deodourising","Bathroom disinfection & restocking","Reception area cleaning","Cardio zone sanitisation","Free weights & rack cleaning","Court & multi-purpose area cleaning","Enzyme-based odour elimination"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Campbelltown Gyms Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• High-volume gym specialists</li><li>• Community leisure centre experience</li><li>• Industrial-grade equipment</li><li>• 24hr gym overnight cleaning</li><li>• Police-checked, insured staff</li><li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free assessment for Campbelltown gyms.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Gym Cleaning Campbelltown</h3>
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
              {[{name:"Minto",href:"/commercial-cleaning-minto"},{name:"Ingleburn",href:"/commercial-cleaning-ingleburn"},{name:"Narellan",href:"/commercial-cleaning-narellan"},{name:"Liverpool",href:"/commercial-cleaning-liverpool"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Keep Your Campbelltown Gym Clean & Safe</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for professional gym cleaning in Campbelltown.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
