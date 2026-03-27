import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Office Cleaning Ryde | From $38/hr | Pro Clean Corp",
  description: "Office cleaning Ryde from $38/hr. Serving Top Ryde City offices, Victoria Road corporate tenants and medical centres NSW 2112. Free quote.",
  keywords: "office cleaning Ryde, office cleaners Ryde, commercial cleaning Ryde NSW 2112, Top Ryde City office cleaning, Victoria Road commercial cleaning Ryde",
  openGraph: {
    title: "Office Cleaning Ryde | From $38/hr | Pro Clean Corp",
    description: "Office cleaning Ryde from $38/hr. Serving Top Ryde City offices, Victoria Road corporate tenants and medical centres NSW.",
    url: "/office-cleaning-ryde",
    type: "website",
    images: [{ url: "/meta.png", alt: "Office Cleaning Ryde" }]
  },
  alternates: { canonical: "/office-cleaning-ryde" }
};

const faqs = [
  {
    question: "How much does office cleaning cost in Ryde?",
    answer: "Office cleaning in Ryde starts at $38/hr. Small offices for technology firms, consultants or medical practices (1–5 staff) near Top Ryde City cost $150–$290 per visit. Medium corporate offices and medical centres (6–20 staff) along Victoria Road run $220–$430 per visit. We offer free on-site quotes for all Ryde businesses."
  },
  {
    question: "Can you clean technology company offices in Ryde?",
    answer: "Yes. Ryde has seen significant growth in technology firms, particularly around the Top Ryde precinct and the Victoria Road corridor towards Meadowbank. We understand that tech offices often have specialised equipment, server rooms and sensitive devices. Our teams work carefully around IT infrastructure and can use anti-static cleaning protocols on request."
  },
  {
    question: "Do you service council offices and government departments in Ryde?",
    answer: "Yes. City of Ryde council offices and state government departments operating in the Ryde LGA are within our service area. We hold all relevant insurances and can meet the compliance requirements for government and public sector cleaning contracts."
  },
  {
    question: "Can you clean medical centres near Top Ryde City?",
    answer: "Absolutely. Top Ryde City and the surrounding precinct has a cluster of medical centres, GP clinics, specialist suites and allied health practices. We provide medical-grade cleaning with hospital-grade disinfectants, infection control protocols and colour-coded equipment for all healthcare facilities in Ryde."
  },
  {
    question: "Do you clean offices along the full Victoria Road corridor in Ryde?",
    answer: "Yes. Our Ryde service area covers the full Victoria Road commercial corridor from West Ryde through to Meadowbank, as well as the Top Ryde precinct, Devlin Street, Blaxland Road and the surrounding commercial streets. We can service multiple business locations under a single cleaning agreement."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Ryde"
        serviceDescription="Professional office cleaning in Ryde NSW 2112. Serving technology firms, medical centres, corporate offices and council offices at Top Ryde City and along the Victoria Road corridor."
        serviceUrl="/office-cleaning-ryde"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={["Technology office cleaning", "Medical centre cleaning", "Corporate office cleaning", "Workstation sanitisation", "Bathroom disinfection", "Kitchen & breakroom hygiene"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Office Cleaning Ryde</h1>
              <p className="text-xl mb-8 text-gray-100">Professional office cleaning for Ryde's growing northern Sydney commercial hub. Trusted by technology firms, medical centres and corporate offices at Top Ryde City and along the Victoria Road corridor.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/office.webp" alt="Office Cleaning Ryde" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Office cleaning in Ryde starts at $38/hr.</strong> Small offices (1–5 staff) cost $150–$290 per visit. Medium corporate and medical offices (6–20 staff) run $220–$430 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Ryde site assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Office Cleaning in Ryde</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Ryde has transformed into one of Northern Sydney's most dynamic commercial hubs. The opening and expansion of Top Ryde City brought a significant uplift to the area's professional profile — with medical centres, financial services, legal firms and retail businesses populating the precinct's upper commercial levels. The Victoria Road corridor stretching from West Ryde through to Meadowbank adds a technology and corporate office dimension, with several mid-tier tech firms and business services companies establishing offices in the area's modern commercial buildings.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Pro Clean Corp provides comprehensive office cleaning services across the full Ryde commercial area. Our teams are experienced in the range of office types the suburb presents — from the clinical clean required by Ryde's growing medical precinct (in close proximity to Ryde Hospital on Eastwood Avenue) to the modern open-plan fitouts of technology companies in the Blaxland Road and Devlin Street corridors. We operate 7 days a week with flexible scheduling and can provide same-day emergency cleans when required.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Ryde Office Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Office Size</th><th className="p-4 text-left">Typical Business</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (1–5 staff)</td><td className="p-4 text-gray-600">Tech startup, GP clinic, consultant</td><td className="p-4 text-greenprimary font-bold">$150–$290</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (6–20 staff)</td><td className="p-4 text-gray-600">Medical centre, corporate office</td><td className="p-4 text-greenprimary font-bold">$220–$430</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (21–50 staff)</td><td className="p-4 text-gray-600">Technology firm, council office</td><td className="p-4 text-greenprimary font-bold">$380–$650</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or casual cleaning</td><td className="p-4 text-greenprimary font-bold">From $38/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Workstation & desk sanitisation","Open-plan office cleaning","Medical-grade options available","Server room perimeter cleaning","Kitchen & breakroom hygiene","Bathroom disinfection & restocking","Floor vacuuming & mopping","Bin emptying & waste removal","Reception & lobby detailing","High-touch surface disinfection"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Ryde Businesses Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Technology office specialists</li>
                  <li>• Medical-grade options available</li>
                  <li>• Government contract compliant</li>
                  <li>• Police-checked, insured staff</li>
                  <li>• After-hours & weekend cleans</li>
                  <li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free site assessment for Ryde offices.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Office Cleaning Ryde</h3>
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
              {[{name:"Meadowbank",href:"/commercial-cleaning-meadowbank"},{name:"Macquarie Park",href:"/commercial-cleaning-macquarie-park"},{name:"Gladesville",href:"/commercial-cleaning-gladesville"},{name:"Epping",href:"/commercial-cleaning-epping"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready for a Cleaner Ryde Office?</h3>
            <p className="text-xl mb-6 text-gray-100">Get a free, no-obligation quote for your Ryde business today.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
