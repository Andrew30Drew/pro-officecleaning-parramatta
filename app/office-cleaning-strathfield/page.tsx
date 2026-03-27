import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Office Cleaning Strathfield | From $38/hr | Pro Clean Corp",
  description: "Office cleaning Strathfield from $38/hr. Serving medical centres, accountants, migration agents and professional offices NSW 2135. Free quote.",
  keywords: "office cleaning Strathfield, office cleaners Strathfield, commercial cleaning Strathfield NSW 2135, The Boulevarde office cleaning, Strathfield Plaza cleaning",
  openGraph: {
    title: "Office Cleaning Strathfield | From $38/hr | Pro Clean Corp",
    description: "Office cleaning Strathfield from $38/hr. Serving medical centres, accountants, migration agents and professional offices.",
    url: "/office-cleaning-strathfield",
    type: "website",
    images: [{ url: "/meta.png", alt: "Office Cleaning Strathfield" }]
  },
  alternates: { canonical: "/office-cleaning-strathfield" }
};

const faqs = [
  {
    question: "How much does office cleaning cost in Strathfield?",
    answer: "Office cleaning in Strathfield starts at $38/hr. Small offices such as accountants, migration agents and tutoring centres (1–5 staff) on The Boulevarde typically cost $150–$290 per visit. Medium-sized medical centres and professional services offices (6–20 staff) around Strathfield Plaza run $220–$430 per visit."
  },
  {
    question: "Do you clean Korean and Chinese business offices in Strathfield?",
    answer: "Yes. Strathfield has a large Korean and Chinese business community with many professional offices — including accountants, travel agencies, migration agents, beauty clinics and trading companies — concentrated around The Boulevarde and Burlington Road. We have experience serving multicultural business precincts and can communicate clearly with business owners and staff."
  },
  {
    question: "Can you clean our Strathfield medical centre or GP clinic?",
    answer: "Absolutely. We provide medical-grade cleaning for GP clinics, specialist suites and allied health practices in Strathfield. Our team uses hospital-grade disinfectants, colour-coded equipment and infection control protocols to maintain patient safety and regulatory compliance."
  },
  {
    question: "Do you clean tutoring centres in Strathfield?",
    answer: "Yes. Strathfield has a high concentration of tutoring centres serving students from across Inner West and the Inner suburbs. These spaces experience high foot traffic from students and parents and require frequent, thorough cleaning of desks, chairs, whiteboards, bathrooms and waiting areas. We can schedule cleans around tutoring session timetables."
  },
  {
    question: "Can you clean offices near Strathfield train station?",
    answer: "Yes. Many of Strathfield's offices are within walking distance of Strathfield Station — along The Boulevarde, Albert Road and Homebush Road. We service this entire precinct and can arrange keyholding or access management for after-hours cleaning without requiring staff to be present."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Strathfield"
        serviceDescription="Professional office cleaning in Strathfield NSW 2135. Serving medical centres, accountants, travel agencies, migration agents and tutoring centres on The Boulevarde and Strathfield Plaza."
        serviceUrl="/office-cleaning-strathfield"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={["Medical centre cleaning", "Tutoring centre cleaning", "Workstation sanitisation", "Bathroom disinfection", "Kitchen cleaning", "High-touch surface disinfection"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Office Cleaning Strathfield</h1>
              <p className="text-xl mb-8 text-gray-100">Professional office cleaning for Strathfield's multicultural business hub. Trusted by medical centres, accountants, travel agencies, migration agents and tutoring centres on The Boulevarde and Strathfield Plaza.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/office.webp" alt="Office Cleaning Strathfield" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Office cleaning in Strathfield starts at $38/hr.</strong> Small offices (1–5 staff) cost $150–$290 per visit. Medical centres and professional suites (6–20 staff) run $220–$430 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Strathfield site assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Office Cleaning in Strathfield</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Strathfield is one of Sydney's most active multicultural business precincts. The Boulevarde forms the commercial spine — lined with Korean BBQ restaurants, bubble tea shops, beauty clinics, accounting firms, travel agencies and migration agent offices that serve the suburb's Korean and Chinese communities. Strathfield Plaza adds a retail layer with medical centres, pharmacies and allied health services on the upper levels. The area has a distinctly high-density, high-footfall character that demands consistent, rigorous cleaning.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Pro Clean Corp understands the diversity of Strathfield's commercial landscape. Tutoring centres — a Strathfield institution, with some of the state's highest-volume academic coaching businesses clustered around Churchill Avenue and The Boulevarde — require daily desk and chair cleaning, whiteboard maintenance, and bathroom turnarounds between sessions. Medical centres and GP clinics need hospital-grade protocols. We provide both, and everything in between, with a team experienced in serving Strathfield's varied business types.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Strathfield Office Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Office Size</th><th className="p-4 text-left">Typical Business</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (1–5 staff)</td><td className="p-4 text-gray-600">Accountant, migration agent, tutor</td><td className="p-4 text-greenprimary font-bold">$150–$290</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (6–20 staff)</td><td className="p-4 text-gray-600">Medical centre, travel agency</td><td className="p-4 text-greenprimary font-bold">$220–$430</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (21–50 staff)</td><td className="p-4 text-gray-600">Large tutoring centre, multi-room clinic</td><td className="p-4 text-greenprimary font-bold">$380–$650</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or casual cleaning</td><td className="p-4 text-greenprimary font-bold">From $38/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Workstation & desk sanitisation","Tutoring desk & chair cleaning","Medical-grade disinfection available","Kitchen & breakroom hygiene","Bathroom disinfection & restocking","Floor vacuuming & mopping","Bin emptying & waste removal","Reception & waiting area cleaning","High-touch surface disinfection","Whiteboard & display board wiping"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Strathfield Businesses Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Multicultural precinct experience</li>
                  <li>• Medical-grade options available</li>
                  <li>• Tutoring centre specialists</li>
                  <li>• Police-checked, insured staff</li>
                  <li>• After-hours & weekend availability</li>
                  <li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free site assessment for Strathfield offices.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Office Cleaning Strathfield</h3>
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
              {[{name:"Burwood",href:"/commercial-cleaning-burwood"},{name:"Homebush",href:"/commercial-cleaning-homebush"},{name:"Auburn",href:"/commercial-cleaning-auburn"},{name:"Concord",href:"/commercial-cleaning-concord"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready for a Cleaner Strathfield Office?</h3>
            <p className="text-xl mb-6 text-gray-100">Get a free quote tailored to your Strathfield business today.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
