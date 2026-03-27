import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Office Cleaning Chullora | From $38/hr | Pro Clean Corp",
  description: "Office cleaning Chullora from $38/hr. Serving logistics offices, freight companies and industrial businesses on Fairford Rd NSW 2190. Free quote.",
  keywords: "office cleaning Chullora, office cleaners Chullora, commercial cleaning Chullora NSW 2190, Fairford Road office cleaning, logistics office cleaning Chullora",
  openGraph: {
    title: "Office Cleaning Chullora | From $38/hr | Pro Clean Corp",
    description: "Office cleaning Chullora from $38/hr. Serving logistics offices, freight companies and industrial businesses on Fairford.",
    url: "/office-cleaning-chullora",
    type: "website",
    images: [{ url: "/meta.png", alt: "Office Cleaning Chullora" }]
  },
  alternates: { canonical: "/office-cleaning-chullora" }
};

const faqs = [
  {
    question: "How much does office cleaning cost in Chullora?",
    answer: "Office cleaning in Chullora starts at $38/hr. Small logistics or freight forwarding offices (1–5 staff) on Fairford Road or Waterloo Road typically cost $150–$290 per visit. Medium-sized offices for import/export companies and manufacturing businesses (6–20 staff) run $220–$430 per visit. We offer free on-site quotes across the Chullora industrial zone."
  },
  {
    question: "Can you clean logistics and freight company offices in Chullora?",
    answer: "Yes. Logistics, freight forwarding and import/export offices in Chullora often run 24-hour operations with multiple shift changes. We can schedule cleaning during shift changeovers or quiet periods to ensure offices, staff rooms, bathrooms and dispatch areas are consistently maintained."
  },
  {
    question: "Do you clean industrial zone offices in the Canterbury-Bankstown area?",
    answer: "Absolutely. Chullora is part of the Canterbury-Bankstown commercial and industrial zone — one of Western Sydney's largest. We service the full industrial precinct including offices, administration areas, lunchrooms, bathrooms and amenity blocks adjacent to warehousing and manufacturing operations."
  },
  {
    question: "Can you handle the grime and dust specific to industrial office environments in Chullora?",
    answer: "Yes. Industrial office environments on Fairford Road and the surrounding Chullora zone typically accumulate more dust, diesel particulate and general grime than typical CBD offices. Our cleaning protocols include HEPA-filter vacuuming, heavy-duty floor degreasing and thorough air vent cleaning to manage industrial dust effectively."
  },
  {
    question: "Do you offer weekend or overnight cleaning for Chullora businesses?",
    answer: "Yes. Many Chullora businesses operate extended hours and cannot afford cleaning disruptions during the working day. We offer overnight and weekend cleaning windows for logistics offices, dispatch centres and manufacturing administration areas throughout the Chullora precinct."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Chullora"
        serviceDescription="Professional office cleaning in Chullora NSW 2190. Serving logistics company offices, manufacturing businesses and freight forwarding firms on Fairford Road and Waterloo Road."
        serviceUrl="/office-cleaning-chullora"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={["Logistics office cleaning", "Industrial zone office cleaning", "Lunchroom & amenity cleaning", "HEPA vacuuming", "Bathroom disinfection", "Heavy-duty floor cleaning"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Office Cleaning Chullora</h1>
              <p className="text-xl mb-8 text-gray-100">Professional office cleaning for Chullora's industrial and commercial zone. Trusted by logistics companies, freight forwarders, importers and manufacturing businesses on Fairford Road and Waterloo Road.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/office.webp" alt="Office Cleaning Chullora" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Office cleaning in Chullora starts at $38/hr.</strong> Small logistics and freight offices (1–5 staff) cost $150–$290 per visit. Medium offices for manufacturing and import/export businesses (6–20 staff) run $220–$430 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Chullora site assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Office Cleaning in Chullora</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Chullora is a core node in Sydney's Western and South-Western industrial network. Located in the Canterbury-Bankstown area, the suburb's commercial zone along Fairford Road and Waterloo Road hosts a dense concentration of logistics companies, freight forwarders, import/export businesses and manufacturing operations. Many of Australia's largest logistics and distribution businesses have administration offices and dispatch centres operating out of Chullora, taking advantage of its central location between the M5 and Hume Highway corridors.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Industrial zone offices present unique cleaning challenges — elevated dust levels from nearby warehouse and manufacturing operations, heavy foot traffic from shift workers, and lunchrooms and amenities that serve dozens of employees per day. Pro Clean Corp's Chullora cleaning teams are equipped for these conditions: HEPA-filter vacuum systems capture industrial particulate, heavy-duty degreasers handle floors near loading areas, and our amenity cleaning standards are designed for high-occupancy staff facilities.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Chullora Office Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Office Size</th><th className="p-4 text-left">Typical Business</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (1–5 staff)</td><td className="p-4 text-gray-600">Freight broker, import/export agent</td><td className="p-4 text-greenprimary font-bold">$150–$290</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (6–20 staff)</td><td className="p-4 text-gray-600">Logistics company, manufacturer admin</td><td className="p-4 text-greenprimary font-bold">$220–$430</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (21–50 staff)</td><td className="p-4 text-gray-600">Distribution centre HQ, large freight co.</td><td className="p-4 text-greenprimary font-bold">$380–$650</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or casual cleaning</td><td className="p-4 text-greenprimary font-bold">From $38/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Workstation & desk sanitisation","HEPA-filter vacuuming","Heavy-duty floor degreasing","Lunchroom & amenity cleaning","Bathroom disinfection & restocking","Bin emptying & waste removal","Air vent & duct surface cleaning","Reception & admin area cleaning","High-touch surface disinfection","Shift changeover cleaning available"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Chullora Businesses Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Industrial zone specialists</li>
                  <li>• HEPA vacuuming for dust control</li>
                  <li>• Overnight & weekend available</li>
                  <li>• Shift changeover scheduling</li>
                  <li>• Police-checked, insured staff</li>
                  <li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free site assessment for Chullora offices.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Office Cleaning Chullora</h3>
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
              {[{name:"Bankstown",href:"/commercial-cleaning-bankstown"},{name:"Greenacre",href:"/commercial-cleaning-greenacre"},{name:"Condell Park",href:"/commercial-cleaning-condell-park"},{name:"Chester Hill",href:"/commercial-cleaning-chester-hill"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready for a Cleaner Chullora Office?</h3>
            <p className="text-xl mb-6 text-gray-100">Get a free, no-obligation quote for your Chullora business today.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
