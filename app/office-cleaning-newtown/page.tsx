import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Office Cleaning Newtown | From $38/hr | Pro Clean Corp",
  description: "Office cleaning Newtown from $38/hr. Serving King Street design studios, NGOs, co-working spaces and healthcare providers NSW 2042. Free quote.",
  keywords: "office cleaning Newtown, office cleaners Newtown, commercial cleaning Newtown NSW 2042, King Street office cleaning, co-working cleaning Newtown",
  openGraph: {
    title: "Office Cleaning Newtown | From $38/hr | Pro Clean Corp",
    description: "Office cleaning Newtown from $38/hr. Serving King Street design studios, NGOs, co-working spaces and healthcare provider.",
    url: "/office-cleaning-newtown",
    type: "website",
    images: [{ url: "/meta.png", alt: "Office Cleaning Newtown" }]
  },
  alternates: { canonical: "/office-cleaning-newtown" }
};

const faqs = [
  {
    question: "How much does office cleaning cost in Newtown?",
    answer: "Office cleaning in Newtown starts at $38/hr. Small offices, studios and NGO spaces (1–5 staff) along King Street typically cost $150–$290 per visit. Medium offices for healthcare providers or co-working spaces (6–20 staff) run $220–$430 per visit. We provide free on-site quotes for all Newtown businesses."
  },
  {
    question: "Do you clean co-working and shared studio spaces in Newtown?",
    answer: "Yes, co-working and shared creative studios are a significant part of Newtown's commercial landscape — particularly in the converted warehouses and terrace buildings off King Street and Australia Street. We manage high-turnover shared desks, meeting pods, kitchen areas and bathrooms used by multiple members daily."
  },
  {
    question: "Can you service our NGO or community organisation office in Newtown?",
    answer: "Absolutely. Newtown has a large concentration of non-profit organisations, advocacy groups and community services — many based in older terraces or converted commercial premises. We understand budget constraints and offer flexible, cost-effective cleaning schedules to suit NFP needs."
  },
  {
    question: "Do you clean near USYD campuses in Newtown?",
    answer: "Yes. We service offices, tutoring centres and research spin-offs in the streets immediately surrounding the University of Sydney boundary — including Missenden Road, Carillon Avenue and the streets between Newtown and Camperdown. These often require flexible scheduling around academic calendars."
  },
  {
    question: "What eco-friendly cleaning options do you offer for Newtown offices?",
    answer: "Newtown businesses often prioritise sustainability. We offer green cleaning programs using biodegradable, low-VOC products and microfibre systems that reduce chemical use by up to 80%. We can also provide recycling-focused waste management as part of your clean."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Newtown"
        serviceDescription="Professional office cleaning in Newtown NSW 2042. Serving design studios, NGOs, co-working spaces and healthcare providers on King Street and surrounding streets."
        serviceUrl="/office-cleaning-newtown"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={["Workstation sanitisation", "Co-working space cleaning", "Kitchen & breakroom hygiene", "Bathroom disinfection", "Eco-friendly product options", "Recycling-focused waste removal"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Office Cleaning Newtown</h1>
              <p className="text-xl mb-8 text-gray-100">Professional office cleaning for Newtown's creative, education and health hub. Trusted by design studios, NGOs, healthcare providers and co-working spaces along King Street and the USYD fringe.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/office.webp" alt="Office Cleaning Newtown" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Office cleaning in Newtown starts at $38/hr.</strong> Small studios and NFP offices (1–5 staff) cost $150–$290 per visit. Medium healthcare and co-working spaces (6–20 staff) run $220–$430 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Newtown site assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Office Cleaning in Newtown</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Newtown is inner Sydney's most eclectic commercial strip. King Street stretches from the USYD boundary at Missenden Road all the way to St Peters, threading through a constant mix of cafes, record stores, healthcare practices, design studios, law clinics and community organisations. The commercial buildings are overwhelmingly older — converted terraces, heritage shopfronts, Victorian-era warehouses — which means cleaning teams need to be adaptable to irregular layouts, tight stairwells and older amenities that don't conform to modern fitout standards.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Pro Clean Corp has significant experience in Newtown's commercial diversity. We clean everything from the boutique allied health practices around Australia Street to the sprawling co-working floors in the converted factories off Erskineville Road. Our teams are familiar with the suburb's sustainability ethos — we bring green cleaning options, minimise single-use disposables, and offer recycling management as standard. For USYD-adjacent research offices and tutoring centres, we work around academic schedules and lecture-free periods.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Newtown Office Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Office Size</th><th className="p-4 text-left">Typical Business</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (1–5 staff)</td><td className="p-4 text-gray-600">Design studio, NGO, allied health</td><td className="p-4 text-greenprimary font-bold">$150–$290</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (6–20 staff)</td><td className="p-4 text-gray-600">Co-working space, healthcare provider</td><td className="p-4 text-greenprimary font-bold">$220–$430</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (21–50 staff)</td><td className="p-4 text-gray-600">Multi-level agency, community centre</td><td className="p-4 text-greenprimary font-bold">$380–$650</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or casual cleaning</td><td className="p-4 text-greenprimary font-bold">From $38/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Workstation & desk sanitisation","Co-working hot desk cleaning","Kitchen & breakroom hygiene","Bathroom disinfection & restocking","Vacuuming & mopping all floors","Bin emptying & recycling management","Reception & common area cleaning","High-touch surface disinfection","Eco-friendly product options","Stairwell & corridor cleaning"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Newtown Businesses Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Green & eco-friendly options</li>
                  <li>• NFP-friendly pricing</li>
                  <li>• Adaptable to heritage buildings</li>
                  <li>• Police-checked, insured staff</li>
                  <li>• After-hours & weekend cleans</li>
                  <li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free site assessment for Newtown offices.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Office Cleaning Newtown</h3>
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
              {[{name:"Erskineville",href:"/commercial-cleaning-erskineville"},{name:"Marrickville",href:"/commercial-cleaning-marrickville"},{name:"Surry Hills",href:"/commercial-cleaning-surry-hills"},{name:"Glebe",href:"/commercial-cleaning-glebe"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready for a Cleaner Newtown Office?</h3>
            <p className="text-xl mb-6 text-gray-100">Get a free quote tailored to your Newtown business today.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
