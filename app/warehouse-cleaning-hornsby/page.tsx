import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Warehouse Cleaning Hornsby | From $55/hr | Pro Clean Corp",
  description: "Warehouse cleaning Hornsby from $55/hr. Waitara industrial area, Pacific Highway distribution warehouses, Upper North Shore NSW 2077. Free quote.",
  keywords: "warehouse cleaning Hornsby, warehouse cleaners Hornsby NSW 2077, Waitara industrial cleaning, Pacific Highway warehouse cleaning, building supplies warehouse cleaning Hornsby",
  openGraph: {
    title: "Warehouse Cleaning Hornsby | From $55/hr | Pro Clean Corp",
    description: "Warehouse cleaning Hornsby from $55/hr. Waitara industrial area, Pacific Highway distribution warehouses, Upper North Shore NSW 2077. Free quote.",
    url: "/warehouse-cleaning-hornsby",
    type: "website",
    images: [{ url: "/meta.png", alt: "Warehouse Cleaning Hornsby" }]
  },
  alternates: { canonical: "/warehouse-cleaning-hornsby" }
};

const faqs = [
  {
    question: "How much does warehouse cleaning cost in Hornsby?",
    answer: "Warehouse cleaning in Hornsby starts at $55/hr. Small warehouses in the Waitara industrial area (up to 500sqm) typically cost $350–$700 per visit. Medium building supplies and hardware distribution facilities (500–2000sqm) run $500–$1,100 per visit. Large food distribution and logistics warehouses on the Pacific Highway corridor are quoted from $900 per visit. Free assessments available."
  },
  {
    question: "Can you clean timber and building supplies warehouses in the Waitara industrial area?",
    answer: "Yes. The Waitara industrial area south of Hornsby station has a cluster of building materials, timber and hardware distribution businesses serving the Upper North Shore, Hills District and Northern Beaches. These facilities accumulate significant sawdust, timber particulate and construction material debris. We use industrial HEPA vacuums and floor sweepers rated for construction material environments."
  },
  {
    question: "Do you clean food distribution warehouses in Hornsby?",
    answer: "Yes. Hornsby's position at the northern gateway to the Pacific Highway makes it a natural distribution point for food wholesale and grocery distribution businesses serving upper northern Sydney. We provide food-safe warehouse cleaning with HACCP-compliant protocols, food-contact-safe disinfectants and documented cleaning records."
  },
  {
    question: "Can you service warehouses along the Pacific Highway industrial corridor in Hornsby?",
    answer: "Yes. The Pacific Highway corridor through Hornsby and into Waitara and Asquith has a string of industrial and commercial warehouse facilities. We service this full corridor — from the Hornsby CBD-adjacent warehouses on Jersey Street North to the larger distribution facilities further north in Asquith and Mount Colah."
  },
  {
    question: "How do you handle the sawdust and timber dust common in Hornsby warehouse environments?",
    answer: "Timber and sawdust is a significant fire and respiratory hazard in building materials warehouses. We use industrial-grade HEPA-filter vacuums that capture fine timber particulate rather than recirculating it into the air, followed by a wet mop or floor scrubber pass to eliminate residual dust from concrete floors. We can also manage elevated surfaces like pallet racking uprights where timber dust accumulates."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Warehouse Cleaning Hornsby"
        serviceDescription="Professional warehouse cleaning in Hornsby NSW 2077. Serving the Waitara industrial area and Pacific Highway corridor for timber, building supplies, hardware and food distribution warehouses."
        serviceUrl="/warehouse-cleaning-hornsby"
        serviceType="Warehouse Cleaning"
        price="$$"
        additionalServices={["Timber & sawdust removal", "Building supplies warehouse cleaning", "Food distribution warehouse cleaning", "HEPA dust removal", "Loading dock cleaning", "Pallet racking area cleaning"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Warehouse Cleaning Hornsby</h1>
              <p className="text-xl mb-8 text-gray-100">Professional warehouse cleaning for Hornsby's northern Sydney distribution hub. Serving the Waitara industrial area and Pacific Highway corridor with specialist cleaning for timber, building supplies, hardware and food distribution warehouses.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Warehouse Cleaning Hornsby" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Warehouse cleaning in Hornsby starts at $55/hr.</strong> Small Waitara industrial warehouses (up to 500sqm) cost $350–$700 per visit. Medium distribution facilities (500–2000sqm) run $500–$1,100 per visit. Large food and logistics warehouses from $900. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Hornsby warehouse assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Warehouse Cleaning in Hornsby</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Hornsby sits at the northern gateway of Sydney's metropolitan area — where the Pacific Highway transitions from suburban commercial strip to regional highway. The Waitara industrial area, immediately south of Hornsby station and centred on Jersey Street North and Hunter Street, is Upper North Shore Sydney's primary warehousing and distribution precinct. It houses building materials and timber merchants, hardware distributors, food wholesalers and general logistics operators serving the Upper North Shore, Northern Beaches and Hawkesbury catchments.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">The specific cleaning challenges of Hornsby's warehouse environment are shaped by its dominant industry types. Timber and building materials businesses generate sawdust and silica-containing construction dust — a WHS hazard that requires HEPA-filter vacuuming rather than standard brooms or blowers. Food distribution warehouses need food-safe cleaning standards to maintain cold-chain integrity and compliance with food safety legislation. Pro Clean Corp brings the right equipment and product knowledge for each of Hornsby's warehouse types.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Hornsby Warehouse Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Warehouse Size</th><th className="p-4 text-left">Typical Facility</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (up to 500sqm)</td><td className="p-4 text-gray-600">Small warehouse, storage unit, trade supplier</td><td className="p-4 text-greenprimary font-bold">$350–$700</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (500–2000sqm)</td><td className="p-4 text-gray-600">Building supplies depot, food distribution centre</td><td className="p-4 text-greenprimary font-bold">$500–$1,100</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (2000sqm+)</td><td className="p-4 text-gray-600">Large hardware distributor, major food logistics hub</td><td className="p-4 text-greenprimary font-bold">From $900</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or supplementary cleaning</td><td className="p-4 text-greenprimary font-bold">From $55/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["HEPA vacuuming for sawdust & timber dust","Industrial floor sweeping & scrubbing","Loading dock & ramp cleaning","Lunchroom & amenity cleaning","Bathroom & change room disinfection","Bin area & waste management","Pallet racking perimeter cleaning","Food-safe cleaning available","Office area within warehouse cleaning","Documented cleaning logs available"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Hornsby Businesses Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Timber & sawdust HEPA removal</li><li>• Food-safe & HACCP-compliant options</li><li>• Building materials specialists</li><li>• Pacific Highway corridor coverage</li><li>• Police-checked, insured staff</li><li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free assessment for Hornsby warehouses.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Warehouse Cleaning Hornsby</h3>
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
              {[{name:"Waitara",href:"/commercial-cleaning-waitara"},{name:"Asquith",href:"/commercial-cleaning-asquith"},{name:"Berowra",href:"/commercial-cleaning-berowra"},{name:"Mount Colah",href:"/commercial-cleaning-mount-colah"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Keep Your Hornsby Warehouse Safe & Clean</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for professional warehouse cleaning in Hornsby and the Waitara industrial area.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
