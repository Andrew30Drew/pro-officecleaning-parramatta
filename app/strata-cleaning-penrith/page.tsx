import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Strata Cleaning Penrith | From $42/hr | Pro Clean Corp",
  description: "Strata cleaning Penrith from $42/hr. High Street apartment towers, Thornton estate and South Penrith new developments NSW 2750. Free quote.",
  keywords: "strata cleaning Penrith, strata cleaners Penrith NSW 2750, apartment complex cleaning Penrith, common area cleaning Penrith, strata management cleaning Penrith, High Street Penrith strata",
  openGraph: {
    title: "Strata Cleaning Penrith | From $42/hr | Pro Clean Corp",
    description: "Strata cleaning Penrith from $42/hr. High Street apartment towers, Thornton estate and South Penrith new developments NSW 2750. Free quote.",
    url: "/strata-cleaning-penrith",
    type: "website",
    images: [{ url: "/meta.png", alt: "Strata Cleaning Penrith" }]
  },
  alternates: { canonical: "/strata-cleaning-penrith" }
};

const faqs = [
  {
    question: "How much does strata cleaning cost in Penrith?",
    answer: "Strata cleaning in Penrith starts at $42/hr. A small strata complex of up to 20 lots typically costs $180–$320 per visit. Medium complexes of 20–60 lots, common in the newer Penrith CBD apartment towers and Thornton estate, run $280–$550 per visit. Large complexes with 60+ lots cost $400–$900 per visit depending on facility scope. We provide free on-site assessments for strata managers and owners corporations."
  },
  {
    question: "Do you service the new apartment towers along High Street in Penrith CBD?",
    answer: "Yes. Penrith CBD has seen significant high-rise residential development along High Street and the surrounding streets in recent years, adding thousands of new strata lots to the suburb. These modern towers have extensive common area facilities — lobbies, lifts, rooftop terraces, gymnasiums and car parks — that require regular, professional cleaning. We are experienced with high-rise strata protocols and can coordinate with building managers directly."
  },
  {
    question: "Can you service the Thornton estate and South Penrith developments?",
    answer: "Yes. Thornton (Penrith) is one of Western Sydney's largest master-planned residential communities, with a mix of freestanding homes, townhouses and strata title properties. South Penrith's newer strata developments also fall within our service area. We cover all Penrith LGA strata properties from the CBD to the fringe growth estates."
  },
  {
    question: "Do you work with strata managers in the Penrith area?",
    answer: "Yes. We work directly with strata managing agents operating in the Penrith LGA — providing regular service reports, OC meeting attendance on request, and responsive communication on maintenance issues identified during cleaning. We are experienced with the reporting and compliance requirements of NSW strata management."
  },
  {
    question: "What does a standard strata clean include for a Penrith apartment building?",
    answer: "A standard Penrith strata clean covers: entrance lobby and foyer cleaning, lift interior and button panel sanitisation, corridor and hallway cleaning, common area bathroom maintenance, stairwell sweeping and mopping, bin room cleaning and waste area management, carpark entry cleaning, and any garden path or outdoor common area surfaces. We tailor scope to each complex's specific facilities."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Penrith"
        serviceDescription="Professional strata cleaning in Penrith NSW 2750. Serving high-rise apartment towers on High Street, Thornton estate and South Penrith strata developments in Western Sydney's rapidly growing residential market."
        serviceUrl="/strata-cleaning-penrith"
        serviceType="Strata Cleaning"
        price="$$"
        additionalServices={["Lobby & foyer cleaning", "Lift interior cleaning", "Corridor & stairwell cleaning", "Bin room maintenance", "Car park entry cleaning", "Common bathroom maintenance"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Strata Cleaning Penrith</h1>
              <p className="text-xl mb-8 text-gray-100">Professional strata cleaning for Penrith's rapidly growing Western Sydney strata market. Serving high-rise residential towers on High Street, the Thornton master-planned estate and South Penrith's newer apartment developments.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Strata Cleaning Penrith" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Strata cleaning in Penrith starts at $42/hr.</strong> Small strata complexes (up to 20 lots) cost $180–$320 per visit. Medium complexes (20–60 lots) run $280–$550 per visit. Large tower complexes (60+ lots) cost $400–$900 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Penrith strata assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Strata Cleaning in Penrith</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Penrith has undergone one of Western Sydney's most dramatic urban transformations. The Penrith CBD's High Street corridor has seen a wave of high-rise residential towers approved and constructed as part of the Western City District Plan, bringing thousands of new apartment dwellers to the area. Alongside this vertical growth, master-planned communities like Thornton and the newer South Penrith estates are adding strata title townhouse and villa complexes at significant scale — creating a fast-growing strata cleaning market in one of Sydney's most dynamic growth corridors.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Strata cleaning in Penrith requires understanding the diversity of building types across the LGA. The High Street towers are modern, amenity-rich buildings with gymnasiums, rooftop spaces, multiple lifts and complex waste management systems. The Thornton estate townhouse complexes have more land-based common areas — driveways, BBQ spaces, garden paths and shared pools. Pro Clean Corp's Penrith strata teams are equipped for both: high-rise vertical cleaning protocols and ground-level estate management cleaning programmes.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Penrith Strata Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Complex Size</th><th className="p-4 text-left">Typical Complex</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (up to 20 lots)</td><td className="p-4 text-gray-600">Small unit block, villa complex</td><td className="p-4 text-greenprimary font-bold">$180–$320</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (20–60 lots)</td><td className="p-4 text-gray-600">Mid-rise apartment building, townhouse estate</td><td className="p-4 text-greenprimary font-bold">$280–$550</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (60+ lots)</td><td className="p-4 text-gray-600">High-rise tower, large master-planned complex</td><td className="p-4 text-greenprimary font-bold">$400–$900</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or reactive cleaning</td><td className="p-4 text-greenprimary font-bold">From $42/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Lobby & foyer presentation cleaning","Lift interior & button sanitisation","Corridor & hallway mopping","Stairwell sweeping & cleaning","Bin room & waste area management","Common bathroom maintenance","Car park entry & ramp cleaning","Letterbox area cleaning","Outdoor path & courtyard cleaning","Lift landing & door track cleaning"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Penrith Strata Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• High-rise tower experience</li><li>• Estate & villa complex cleaning</li><li>• Strata manager coordination</li><li>• OC reporting available</li><li>• Police-checked, insured staff</li><li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free assessment for Penrith strata.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Strata Cleaning Penrith</h3>
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
              {[{name:"Kingswood",href:"/commercial-cleaning-kingswood"},{name:"St Marys",href:"/commercial-cleaning-st-marys"},{name:"Werrington",href:"/commercial-cleaning-werrington"},{name:"Emu Plains",href:"/commercial-cleaning-emu-plains"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Premium Strata Cleaning for Penrith's Growing Communities</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for professional strata cleaning in Penrith.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
