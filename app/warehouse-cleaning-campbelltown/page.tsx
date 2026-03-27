import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Warehouse Cleaning Campbelltown | From $55/hr | Pro Clean Corp",
  description: "Warehouse cleaning Campbelltown from $55/hr. Smeaton Grange Business Park and Narellan Road industrial facilities NSW 2560. Free quote.",
  keywords: "warehouse cleaning Campbelltown, warehouse cleaners Campbelltown NSW 2560, Smeaton Grange warehouse cleaning, Narellan Road industrial cleaning, distribution centre cleaning Campbelltown",
  openGraph: {
    title: "Warehouse Cleaning Campbelltown | From $55/hr | Pro Clean Corp",
    description: "Warehouse cleaning Campbelltown from $55/hr. Smeaton Grange Business Park and Narellan Road industrial facilities NSW 25.",
    url: "/warehouse-cleaning-campbelltown",
    type: "website",
    images: [{ url: "/meta.png", alt: "Warehouse Cleaning Campbelltown" }]
  },
  alternates: { canonical: "/warehouse-cleaning-campbelltown" }
};

const faqs = [
  {
    question: "How much does warehouse cleaning cost in Campbelltown?",
    answer: "Warehouse cleaning in Campbelltown starts at $55/hr. A small warehouse (up to 500sqm) at Smeaton Grange or the Narellan Road corridor typically costs $350–$700 per visit. Medium distribution or fulfilment warehouses (500–2000sqm) run $500–$1,100 per visit. Large logistics and manufacturing facilities (2000sqm+) are quoted on a per-m² basis from $900. We provide free on-site assessments for all Campbelltown facilities."
  },
  {
    question: "Do you clean Smeaton Grange Business Park warehouses?",
    answer: "Yes. Smeaton Grange Business Park is one of South-West Sydney's premier logistics and light industrial precincts — home to national distribution operations, food manufacturing facilities and e-commerce fulfilment centres. We are experienced in the specific access and operational requirements of Smeaton Grange's major tenants and can work around 24-hour logistics operations."
  },
  {
    question: "Can you clean cold storage and food-grade warehouses near Campbelltown?",
    answer: "Yes. Cold storage and food manufacturing facilities require cleaning to food-safe standards — including temperature-appropriate disinfectants, non-toxic food-contact surface cleaners and documented cleaning logs for regulatory compliance. We are experienced in food-safe warehouse cleaning and can provide HACCP-compliant cleaning programmes for Campbelltown food facilities."
  },
  {
    question: "Do you clean e-commerce fulfilment centres in the Campbelltown area?",
    answer: "Yes. E-commerce fulfilment warehouses in the Smeaton Grange and Ingleburn areas handle high-volume picking and packing operations that generate significant cardboard dust, packing material waste and foot traffic. We manage these environments with industrial HEPA vacuuming, forklift aisle floor scrubbing and regular amenity cleaning for large fulfilment workforces."
  },
  {
    question: "Can you service manufacturing facilities in Campbelltown and Ingleburn?",
    answer: "Yes. Light and medium manufacturing operations in Campbelltown and the neighbouring Ingleburn industrial precinct require tailored cleaning protocols — particularly for production floor areas, machinery perimeters, lunchrooms and change facilities. We assess each facility individually and design a cleaning programme that meets your operational and safety requirements."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Warehouse Cleaning Campbelltown"
        serviceDescription="Professional warehouse cleaning in Campbelltown NSW 2560. Serving Smeaton Grange Business Park, distribution centres, cold storage facilities, e-commerce fulfilment and manufacturing operations on Narellan Road."
        serviceUrl="/warehouse-cleaning-campbelltown"
        serviceType="Warehouse Cleaning"
        price="$$"
        additionalServices={["Distribution centre cleaning", "Cold storage cleaning", "Food-grade warehouse cleaning", "E-commerce fulfilment cleaning", "Manufacturing facility cleaning", "Forklift aisle floor scrubbing"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Warehouse Cleaning Campbelltown</h1>
              <p className="text-xl mb-8 text-gray-100">Professional warehouse cleaning for Campbelltown's South-West Sydney logistics hub. Serving Smeaton Grange Business Park, distribution centres, cold storage facilities, e-commerce fulfilment and manufacturing operations on Narellan Road.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Warehouse Cleaning Campbelltown" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Warehouse cleaning in Campbelltown starts at $55/hr.</strong> Small warehouses (up to 500sqm) cost $350–$700 per visit. Medium distribution and fulfilment facilities (500–2000sqm) run $500–$1,100 per visit. Large logistics and manufacturing facilities from $900. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Campbelltown warehouse assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Warehouse Cleaning in Campbelltown</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Campbelltown's Smeaton Grange Business Park has become one of South-West Sydney's most significant logistics and light industrial precincts. Located adjacent to the Hume Highway and the M5 South Western Motorway, the area provides exceptional freight connectivity that has attracted national distribution operations, food manufacturing businesses, e-commerce fulfilment centres and cold storage logistics providers. The precinct continues to expand as new warehouse developments rise on greenfield land around the established Gregory Hills and Narellan Road corridors.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Warehouse cleaning in Campbelltown's logistics zone demands specialist equipment and processes. Forklift aisles accumulate tyre residue, pallet debris and cardboard dust that standard cleaning equipment cannot address — our industrial ride-on floor scrubbers and sweepers are scaled for large floor areas. Cold storage facilities require cleaning at operating temperatures with products rated for cold-chain environments. E-commerce fulfilment operations need amenity facilities — lunchrooms, change rooms and bathrooms — cleaned to a standard that supports large shift-based workforces.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Campbelltown Warehouse Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Warehouse Size</th><th className="p-4 text-left">Typical Facility</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (up to 500sqm)</td><td className="p-4 text-gray-600">Small warehouse, storage unit, light mfg</td><td className="p-4 text-greenprimary font-bold">$350–$700</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (500–2000sqm)</td><td className="p-4 text-gray-600">Distribution centre, fulfilment warehouse</td><td className="p-4 text-greenprimary font-bold">$500–$1,100</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (2000sqm+)</td><td className="p-4 text-gray-600">Large logistics hub, cold storage facility</td><td className="p-4 text-greenprimary font-bold">From $900</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or supplementary cleaning</td><td className="p-4 text-greenprimary font-bold">From $55/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Forklift aisle floor scrubbing","Industrial HEPA dust & debris removal","Loading dock & ramp cleaning","Lunchroom & amenity cleaning","Bathroom & change room disinfection","Bin area & waste management","Cold storage cleaning (where applicable)","Office area within warehouse cleaning","High-bay cobweb & surface removal","Documented cleaning logs available"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Campbelltown Businesses Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Smeaton Grange precinct specialists</li><li>• Cold storage & food-safe cleaning</li><li>• Industrial ride-on floor scrubbers</li><li>• 24hr logistics operation experience</li><li>• Police-checked, insured staff</li><li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free assessment for Campbelltown warehouses.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Warehouse Cleaning Campbelltown</h3>
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
              {[{name:"Ingleburn",href:"/commercial-cleaning-ingleburn"},{name:"Minto",href:"/commercial-cleaning-minto"},{name:"Narellan",href:"/commercial-cleaning-narellan"},{name:"Gregory Hills",href:"/commercial-cleaning-gregory-hills"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Keep Your Campbelltown Warehouse Clean & Compliant</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for professional warehouse cleaning in Campbelltown and Smeaton Grange.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
