import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Warehouse Cleaning Parramatta | From $55/hr | Pro Clean Corp",
  description: "Warehouse cleaning Parramatta from $55/hr. Camellia industrial precinct, Clyde and Granville distribution centres NSW 2150. Free quote.",
  keywords: "warehouse cleaning Parramatta, warehouse cleaners Parramatta NSW 2150, Camellia industrial cleaning, Clyde warehouse cleaning, Granville industrial cleaning, distribution warehouse cleaning Parramatta",
  openGraph: {
    title: "Warehouse Cleaning Parramatta | From $55/hr | Pro Clean Corp",
    description: "Warehouse cleaning Parramatta from $55/hr. Camellia industrial precinct, Clyde and Granville distribution centres NSW 21.",
    url: "/warehouse-cleaning-parramatta",
    type: "website",
    images: [{ url: "/meta.png", alt: "Warehouse Cleaning Parramatta" }]
  },
  alternates: { canonical: "/warehouse-cleaning-parramatta" }
};

const faqs = [
  {
    question: "How much does warehouse cleaning cost in Parramatta?",
    answer: "Warehouse cleaning in the Parramatta area starts at $55/hr. Small warehouses in Granville or Clyde (up to 500sqm) typically cost $350–$700 per visit. Medium industrial facilities in Camellia (500–2000sqm) run $500–$1,100 per visit. Large food manufacturing and distribution operations are quoted on a per-m² basis from $900. Free on-site assessments available."
  },
  {
    question: "Do you clean the Camellia industrial precinct?",
    answer: "Yes. The Camellia industrial precinct — on the banks of the Parramatta River — is one of Western Sydney's oldest and most strategically important industrial zones. We service food manufacturing, chemical storage, automotive and distribution operations throughout Camellia, working around continuous production schedules and complex access arrangements."
  },
  {
    question: "Can you clean automotive warehouses and parts distribution centres in Parramatta?",
    answer: "Automotive warehouses in the Clyde and Granville areas often involve oil, grease and chemical residue on floors that require specialist degreasing products and equipment. We are experienced in automotive facility cleaning — including workshop-adjacent warehouses — using safe, effective degreasers and floor scrubbing systems."
  },
  {
    question: "Do you provide food-grade cleaning for manufacturing facilities in Parramatta?",
    answer: "Yes. Several food manufacturing operations in the Camellia and Rydalmere areas require HACCP-compliant cleaning. We use food-contact-safe disinfectants, non-abrasive surfaces cleaning on food processing equipment surrounds, and maintain documented cleaning records for regulatory compliance and audit purposes."
  },
  {
    question: "Can you clean warehouse and distribution facilities across the broader Parramatta LGA?",
    answer: "Yes. Our Parramatta warehouse cleaning service covers the full Parramatta LGA industrial precinct — Camellia, Rydalmere, North Parramatta, Granville, Clyde, Woodville and Merrylands. We also extend into the neighbouring Auburn and Silverwater industrial zones under the same service agreement."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Warehouse Cleaning Parramatta"
        serviceDescription="Professional warehouse cleaning in Parramatta NSW 2150. Serving Camellia industrial precinct, Clyde and Granville for food manufacturing, automotive, distribution and light manufacturing businesses."
        serviceUrl="/warehouse-cleaning-parramatta"
        serviceType="Warehouse Cleaning"
        price="$$"
        additionalServices={["Camellia industrial cleaning", "Food manufacturing cleaning", "Automotive warehouse cleaning", "Distribution centre cleaning", "Floor degreasing", "Loading dock cleaning"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Warehouse Cleaning Parramatta</h1>
              <p className="text-xl mb-8 text-gray-100">Professional warehouse cleaning for Parramatta's Western Sydney commercial and industrial mix. Serving the Camellia industrial precinct, Clyde and Granville for food manufacturing, automotive, distribution and light manufacturing operations.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Warehouse Cleaning Parramatta" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Warehouse cleaning in Parramatta starts at $55/hr.</strong> Small warehouses in Granville or Clyde (up to 500sqm) cost $350–$700 per visit. Medium Camellia facilities (500–2000sqm) run $500–$1,100 per visit. Large manufacturing and distribution operations from $900. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Parramatta warehouse assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Warehouse Cleaning in Parramatta</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">The Parramatta industrial zone encompasses some of Western Sydney's most historically significant and actively used commercial and industrial land. The Camellia peninsula — framed by the Parramatta River — remains an active industrial precinct despite surrounding residential development pressures, hosting food manufacturing, chemical storage, logistics operations and heavy industry. Granville and Clyde add automotive, light manufacturing and distribution functions to the Parramatta industrial ecosystem, with Rydalmere hosting a growing technology and warehousing cluster.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Warehouse cleaning in the Parramatta industrial zone requires adaptability. Camellia's food manufacturing facilities need HACCP-compliant cleaning documentation and food-safe products. Granville's automotive operations need floor degreasers rated for oil and lubricant residue. Clyde's distribution centres need high-frequency amenity cleaning for large shift workforces. Pro Clean Corp brings industrial-grade equipment — ride-on scrubbers, HEPA-filter industrial vacuums, high-pressure washing capability — to every Parramatta warehouse engagement.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Parramatta Warehouse Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Warehouse Size</th><th className="p-4 text-left">Typical Facility</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (up to 500sqm)</td><td className="p-4 text-gray-600">Small warehouse, storage, light mfg unit</td><td className="p-4 text-greenprimary font-bold">$350–$700</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (500–2000sqm)</td><td className="p-4 text-gray-600">Distribution centre, manufacturing facility</td><td className="p-4 text-greenprimary font-bold">$500–$1,100</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (2000sqm+)</td><td className="p-4 text-gray-600">Large food manufacturing, automotive depot</td><td className="p-4 text-greenprimary font-bold">From $900</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or supplementary cleaning</td><td className="p-4 text-greenprimary font-bold">From $55/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Industrial floor scrubbing & degreasing","Loading dock & ramp cleaning","HEPA dust & debris removal","Food-safe cleaning available","Automotive degreasing available","Lunchroom & amenity cleaning","Bathroom & change room disinfection","Office area within warehouse cleaning","Bin area & waste management","Documented cleaning records available"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Parramatta Businesses Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Camellia precinct specialists</li><li>• Food-safe & HACCP-compliant options</li><li>• Automotive degreasing capability</li><li>• Industrial ride-on floor equipment</li><li>• Police-checked, insured staff</li><li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free assessment for Parramatta warehouses.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Warehouse Cleaning Parramatta</h3>
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
              {[{name:"Silverwater",href:"/warehouse-cleaning-silverwater"},{name:"Auburn",href:"/commercial-cleaning-auburn"},{name:"Rydalmere",href:"/commercial-cleaning-rydalmere"},{name:"North Parramatta",href:"/commercial-cleaning-north-parramatta"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Keep Your Parramatta Warehouse Clean & Productive</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for professional warehouse cleaning across the Parramatta industrial precinct.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
