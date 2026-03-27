import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Medical Cleaning Ryde | From $48/hr | Pro Clean Corp",
  description: "Medical cleaning Ryde from $48/hr. Top Ryde Medical Centre, Ryde Hospital adjacent and allied health clinics NSW 2112. Free quote.",
  keywords: "medical cleaning Ryde, medical centre cleaning Ryde NSW 2112, Top Ryde Medical Centre cleaning, Ryde Hospital clinic cleaning, Victoria Road medical cleaning, healthcare cleaning Ryde",
  openGraph: {
    title: "Medical Cleaning Ryde | From $48/hr | Pro Clean Corp",
    description: "Medical cleaning Ryde from $48/hr. Top Ryde Medical Centre, Ryde Hospital adjacent and allied health clinics NSW 2112. Free quote.",
    url: "/medical-cleaning-ryde",
    type: "website",
    images: [{ url: "/meta.png", alt: "Medical Cleaning Ryde" }]
  },
  alternates: { canonical: "/medical-cleaning-ryde" }
};

const faqs = [
  {
    question: "How much does medical cleaning cost in Ryde?",
    answer: "Medical cleaning in Ryde starts at $48/hr. A small GP clinic or allied health practice near Top Ryde City (1–4 consulting rooms) typically costs $180–$320 per visit. Specialist centres and dental surgeries along Victoria Road cost from $280 per visit. Larger medical centres and multi-specialty clinics in the Ryde Hospital precinct run $380–$700 per visit."
  },
  {
    question: "Do you clean clinics near Ryde Hospital on Eastwood Avenue?",
    answer: "Yes. The area around Ryde Hospital on Eastwood Avenue has a cluster of specialist clinics, GP practices and allied health services — many of which rely on hospital proximity for patient referrals. We provide medical-grade cleaning for these practices with protocols aligned to the high hygiene expectations of hospital-adjacent clinical environments."
  },
  {
    question: "Can you clean specialist medical suites in the Top Ryde City precinct?",
    answer: "Yes. Top Ryde City and the surrounding commercial buildings have attracted a number of medical tenants — GP clinics, allied health practitioners, specialist rooms and pathology collection centres. These facilities are often located on upper levels of the retail and commercial complex and require coordinated access management for after-hours cleaning."
  },
  {
    question: "Do you service allied health practices in Ryde — physiotherapy, psychology, dietetics?",
    answer: "Yes. Allied health practices — including physiotherapy, psychology, occupational therapy, speech pathology and dietetics — are among the most common medical facilities we service in Ryde. These practices require thorough cleaning of consultation rooms, waiting areas and bathrooms, with particular attention to any treatment equipment surfaces."
  },
  {
    question: "Can you provide cleaning documentation for Ryde medical facility accreditation requirements?",
    answer: "Yes. We maintain detailed cleaning logs and service records that support RACGP accreditation, AHPRA registration requirements and general healthcare facility compliance. All products we use are TGA-approved and we can provide full Safety Data Sheets on request."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Cleaning Ryde"
        serviceDescription="Professional medical cleaning in Ryde NSW 2112. Serving Top Ryde Medical Centre, Ryde Hospital-adjacent clinics, specialist suites and allied health practices along Victoria Road and the Top Ryde precinct."
        serviceUrl="/medical-cleaning-ryde"
        serviceType="Medical Cleaning"
        price="$$"
        additionalServices={["GP clinic cleaning", "Specialist suite cleaning", "Allied health practice cleaning", "Hospital-adjacent clinic cleaning", "Top Ryde precinct medical cleaning", "Infection control disinfection"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Medical Cleaning Ryde</h1>
              <p className="text-xl mb-8 text-gray-100">Professional medical cleaning for Ryde's Northern Sydney medical precinct. Hospital-grade disinfection for Top Ryde Medical Centre, Ryde Hospital-adjacent clinics, specialist suites and allied health practices across the Victoria Road corridor and Top Ryde City precinct.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Medical Cleaning Ryde" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Medical cleaning in Ryde starts at $48/hr.</strong> Small GP clinics and allied health practices (1–4 rooms) cost $180–$320 per visit. Specialist centres from $280 per visit. Larger medical centres run $380–$700 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Ryde medical facility assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Medical Cleaning Services in Ryde</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Ryde's Northern Sydney medical precinct has grown substantially with the expansion of Top Ryde City and the sustained patient demand generated by Ryde Hospital on Eastwood Avenue. The Top Ryde precinct itself has attracted medical tenants to its upper commercial levels — GP clinics, specialist rooms and pathology collection centres that benefit from the retail complex's high foot traffic. The Victoria Road corridor extending from West Ryde through to Meadowbank has a further concentration of allied health practitioners, dental surgeries and specialist suites in the corridor's mix of older commercial buildings and newer developments.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">The proximity to Ryde Hospital makes the suburb's medical cleaning standard particularly important — hospital-adjacent practices are held to an implied standard that reflects their clinical neighbourhood, and patients transferring between the hospital and surrounding specialist practices expect consistent hygiene across the care continuum. Pro Clean Corp's Ryde medical cleaning protocols are calibrated accordingly: TGA-approved disinfectants effective against clinical pathogens, colour-coded equipment preventing cross-contamination between zones, and thorough documentation for accreditation purposes.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Ryde Medical Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Facility Type</th><th className="p-4 text-left">Typical Facility</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small GP Clinic</td><td className="p-4 text-gray-600">GP clinic, allied health practice 1–4 rooms</td><td className="p-4 text-greenprimary font-bold">$180–$320</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Specialist Centre</td><td className="p-4 text-gray-600">Specialist suite, dental surgery, pathology</td><td className="p-4 text-greenprimary font-bold">From $280</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Medical Super-clinic</td><td className="p-4 text-gray-600">Multi-specialty medical centre, 10+ rooms</td><td className="p-4 text-greenprimary font-bold">$380–$700</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or supplementary cleaning</td><td className="p-4 text-greenprimary font-bold">From $48/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Waiting area sanitisation & seating wipe","Consulting room reset & disinfection","Reception desk & counter cleaning","Bathroom disinfection & restocking","High-touch surface TGA disinfection","Colour-coded equipment segregation","Floor vacuuming & mopping","Clinical waste area management","After-hours cleaning available","RACGP-compliant cleaning records"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Ryde Clinics Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Hospital-adjacent clinic experience</li><li>• TGA-approved disinfectants</li><li>• Top Ryde precinct access experience</li><li>• RACGP-compliant documentation</li><li>• Police-checked, insured staff</li><li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free assessment for Ryde medical facilities.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Medical Cleaning Ryde</h3>
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

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Hospital-Grade Medical Cleaning for Ryde Clinics</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for professional medical cleaning in Ryde.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
