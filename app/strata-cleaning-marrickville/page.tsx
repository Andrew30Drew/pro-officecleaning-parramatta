import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Strata Cleaning Marrickville | From $42/hr | Pro Clean Corp",
  description: "Strata cleaning Marrickville from $42/hr. New apartment developments, converted warehouses and older unit blocks NSW 2204. Free quote.",
  keywords: "strata cleaning Marrickville, strata cleaners Marrickville NSW 2204, apartment cleaning Marrickville, common area cleaning Marrickville, Marrickville Road strata, Illawarra Road strata cleaning",
  openGraph: {
    title: "Strata Cleaning Marrickville | From $42/hr | Pro Clean Corp",
    description: "Strata cleaning Marrickville from $42/hr. New apartment developments, converted warehouses and older unit blocks NSW 2204. Free quote.",
    url: "/strata-cleaning-marrickville",
    type: "website",
    images: [{ url: "/meta.png", alt: "Strata Cleaning Marrickville" }]
  },
  alternates: { canonical: "/strata-cleaning-marrickville" }
};

const faqs = [
  {
    question: "How much does strata cleaning cost in Marrickville?",
    answer: "Strata cleaning in Marrickville starts at $42/hr. Older small unit blocks of up to 20 lots on Marrickville Road or Illawarra Road typically cost $180–$320 per visit. Medium-sized newer strata developments of 20–60 lots run $280–$550 per visit. Larger luxury strata complexes with rooftop amenities and multiple lifts cost $400–$900 per visit. We offer free on-site assessments for strata managers and owners corporations."
  },
  {
    question: "Can you service the older 1960s–1980s unit blocks in Marrickville?",
    answer: "Yes. Marrickville has a large stock of older-generation unit blocks — brick walk-up buildings from the 1960s through 1980s that are now often in the hands of long-standing owners corporations or have been recently snapped up by investors. These older buildings typically have simpler common areas — ground-floor entries, stairwells and laundries — but often require more intensive cleaning due to their age and the wear on original surfaces."
  },
  {
    question: "Do you clean the new luxury strata developments in Marrickville?",
    answer: "Yes. Marrickville's gentrification wave has delivered a new generation of premium strata developments — particularly around the Sydenham station precinct and along the Marrickville Road main street. These buildings feature rooftop terraces, communal gardens, secure basement parking and well-appointed lobbies that require a higher standard of strata cleaning presentation than older stock."
  },
  {
    question: "Can you handle converted warehouse strata buildings in Marrickville?",
    answer: "Yes. Marrickville's former industrial zone — particularly around Sydenham and the streets off Illawarra Road — has seen many warehouse-to-residential conversions that create unique strata titles with unusual common areas: industrial-aesthetic lobbies, raw concrete corridors, and shared outdoor spaces in former loading docks. We are experienced with non-standard strata layouts common in inner-west warehouse conversions."
  },
  {
    question: "Do you work with Marrickville strata managing agents?",
    answer: "Yes. We work with strata management companies operating across the Inner West LGA — providing regular cleaning reports, reactive response for spills and vandalism, and clear communication with both managers and owners corporations. We understand the budget sensitivity of many Marrickville strata plans and offer cost-effective cleaning programmes without compromising standards."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Marrickville"
        serviceDescription="Professional strata cleaning in Marrickville NSW 2204. Serving older unit blocks and new luxury strata developments on Marrickville Road and Illawarra Road in Sydney's gentrifying inner west."
        serviceUrl="/strata-cleaning-marrickville"
        serviceType="Strata Cleaning"
        price="$$"
        additionalServices={["Older unit block cleaning", "New strata development cleaning", "Warehouse conversion strata cleaning", "Lobby & foyer cleaning", "Stairwell cleaning", "Bin room management"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Strata Cleaning Marrickville</h1>
              <p className="text-xl mb-8 text-gray-100">Professional strata cleaning for Marrickville's diverse strata stock. From the 1960s brick walk-up unit blocks on Marrickville Road to the new luxury apartment developments near Sydenham station — we keep every common area clean, fresh and resident-ready.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Strata Cleaning Marrickville" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Strata cleaning in Marrickville starts at $42/hr.</strong> Small unit blocks (up to 20 lots) cost $180–$320 per visit. Medium strata complexes (20–60 lots) run $280–$550 per visit. Larger luxury developments (60+ lots) cost $400–$900 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Marrickville strata assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Strata Cleaning in Marrickville</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Marrickville is inner west Sydney's most dynamic gentrifying suburb. The suburb's property market has undergone dramatic transformation over the past decade — driven by its proximity to the CBD, excellent rail connections at Sydenham and Marrickville stations, and the area's creative, multicultural character. This transformation has produced a wave of new strata apartment developments alongside a pre-existing stock of older unit blocks — creating a uniquely diverse strata cleaning market where a single street might contain a 1970s brick walk-up alongside a brand-new luxury tower with rooftop pool.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Marrickville's warehouse-to-residential conversions add a third dimension to its strata cleaning landscape. The industrial streets off Illawarra Road and around the Sydenham precinct have seen many former warehouses transformed into strata complexes with raw, industrial-aesthetic common areas that require a different cleaning approach to both the old brick blocks and the new luxury buildings. Pro Clean Corp's Marrickville teams are experienced with all three strata types and tailor their cleaning approach to the specific character of each building.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Marrickville Strata Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Complex Size</th><th className="p-4 text-left">Typical Complex</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (up to 20 lots)</td><td className="p-4 text-gray-600">Older walk-up unit block, villa complex</td><td className="p-4 text-greenprimary font-bold">$180–$320</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (20–60 lots)</td><td className="p-4 text-gray-600">Mid-rise apartment building, warehouse conversion</td><td className="p-4 text-greenprimary font-bold">$280–$550</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (60+ lots)</td><td className="p-4 text-gray-600">Luxury tower, large new strata development</td><td className="p-4 text-greenprimary font-bold">$400–$900</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or reactive cleaning</td><td className="p-4 text-greenprimary font-bold">From $42/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Lobby & foyer presentation cleaning","Stairwell sweeping & mopping","Lift interior & button sanitisation","Corridor & hallway cleaning","Bin room & waste area management","Common laundry area cleaning","Rooftop & outdoor terrace cleaning","Car park entry cleaning","Letterbox area maintenance","Reactive spill & vandalism response"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Marrickville Strata Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Old & new strata stock experience</li><li>• Warehouse conversion specialists</li><li>• Budget-conscious options available</li><li>• Inner West LGA coverage</li><li>• Police-checked, insured staff</li><li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free assessment for Marrickville strata.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Strata Cleaning Marrickville</h3>
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
              {[{name:"Sydenham",href:"/commercial-cleaning-sydenham"},{name:"Dulwich Hill",href:"/commercial-cleaning-dulwich-hill"},{name:"Tempe",href:"/commercial-cleaning-tempe"},{name:"Newtown",href:"/office-cleaning-newtown"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Reliable Strata Cleaning for Every Marrickville Building</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for professional strata cleaning in Marrickville.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
