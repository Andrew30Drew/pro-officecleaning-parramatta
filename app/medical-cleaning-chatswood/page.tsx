import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Medical Cleaning Chatswood | From $48/hr | Pro Clean Corp",
  description: "Medical cleaning Chatswood from $48/hr. Pacific Highway medical towers, specialist clinics and dental practices NSW 2067. Free quote.",
  keywords: "medical cleaning Chatswood, medical centre cleaning Chatswood NSW 2067, Pacific Highway medical cleaning, Chatswood Private Hospital clinic cleaning, dental cleaning Chatswood, healthcare cleaning Chatswood",
  openGraph: {
    title: "Medical Cleaning Chatswood | From $48/hr | Pro Clean Corp",
    description: "Medical cleaning Chatswood from $48/hr. Pacific Highway medical towers, specialist clinics and dental practices NSW 2067. Free quote.",
    url: "/medical-cleaning-chatswood",
    type: "website",
    images: [{ url: "/meta.png", alt: "Medical Cleaning Chatswood" }]
  },
  alternates: { canonical: "/medical-cleaning-chatswood" }
};

const faqs = [
  {
    question: "How much does medical cleaning cost in Chatswood?",
    answer: "Medical cleaning in Chatswood starts at $48/hr. A small GP clinic or allied health practice in a Chatswood commercial building (1–4 consulting rooms) typically costs $180–$320 per visit. Specialist suites in the Pacific Highway medical towers cost from $280 per visit. Larger multi-specialty centres and practices adjacent to Chatswood Private Hospital run $380–$700 per visit."
  },
  {
    question: "Can you clean specialist medical suites in the Pacific Highway towers in Chatswood?",
    answer: "Yes. The Pacific Highway corridor through Chatswood has a high concentration of specialist medical suites — particularly in the commercial buildings immediately north of Chatswood station. These buildings house cardiologists, oncologists, neurologists, orthopaedic surgeons and other specialists who require the highest clinical cleaning standards. We manage building access, after-hours protocols and security coordination for all Pacific Highway tower tenants."
  },
  {
    question: "Do you clean dental practices in Chatswood?",
    answer: "Yes. Chatswood has a dense dental market — serving the North Shore's large residential catchment and the suburb's own high-density population. Dental surgeries require rigorous cleaning of treatment rooms, sterilisation areas, reception and waiting areas, and bathrooms. We use dental-surgery-appropriate products and protocols, including surface disinfectants rated for dental equipment surrounds."
  },
  {
    question: "Can you service clinics near Chatswood Private Hospital?",
    answer: "Yes. Chatswood Private Hospital on Mowbray Road attracts specialist practitioners to the surrounding streets and commercial buildings. Practices adjacent to or within referral networks of the hospital are held to a particularly high hygiene standard — one that our cleaning protocols are fully equipped to meet. We work around the hospital's visitor and clinical traffic flows."
  },
  {
    question: "Do you clean radiology and imaging centres in Chatswood?",
    answer: "Yes. Radiology and medical imaging centres have specific cleaning requirements — equipment surrounds that cannot be wet-mopped, waiting areas with high throughput, and patient change areas. We train our medical cleaning staff in the specific protocols for imaging centre environments and use non-corrosive products safe for use around radiological equipment."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Cleaning Chatswood"
        serviceDescription="Professional medical cleaning in Chatswood NSW 2067. Serving Pacific Highway medical towers, Chatswood Private Hospital-adjacent specialist clinics, GPs, dental practices, radiology centres and allied health."
        serviceUrl="/medical-cleaning-chatswood"
        serviceType="Medical Cleaning"
        price="$$"
        additionalServices={["Specialist suite cleaning", "Dental surgery cleaning", "Radiology centre cleaning", "Hospital-adjacent clinic cleaning", "Pacific Highway tower access", "Infection control disinfection"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Medical Cleaning Chatswood</h1>
              <p className="text-xl mb-8 text-gray-100">Professional medical cleaning for Chatswood's dense North Shore medical hub. Hospital-grade disinfection for Pacific Highway specialist towers, Chatswood Private Hospital-adjacent clinics, GPs, dental practices, radiology centres and allied health across the Chatswood precinct.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Medical Cleaning Chatswood" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Medical cleaning in Chatswood starts at $48/hr.</strong> Small GP clinics and allied health (1–4 rooms) cost $180–$320 per visit. Pacific Highway specialist suites from $280 per visit. Larger multi-specialty centres run $380–$700 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Chatswood medical facility assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Medical Cleaning Services in Chatswood</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Chatswood is the North Shore's premier medical destination — a suburb where the density of specialist practitioners per capita rivals inner-city hospital precincts. The Pacific Highway corridor through Chatswood is lined with commercial towers that house multiple levels of medical tenants: cardiologists, oncologists, dermatologists, ophthalmologists, orthopaedic surgeons and a full range of allied health practitioners. Chatswood Private Hospital on Mowbray Road anchors a specialist ecosystem that extends through the surrounding commercial streets. Westfield Chatswood itself hosts a significant allied health precinct on its upper levels.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">The concentration and calibre of medical practitioners in Chatswood means the cleaning standard expected is correspondingly high. Specialist practices on the Pacific Highway see referred patients from across the Northern Suburbs and beyond — patients whose expectations of clinical hygiene are shaped by the specialist-grade care they are receiving. Pro Clean Corp's Chatswood medical cleaning teams are trained to the standard that these practices demand: thorough surface disinfection with TGA-approved products, strict cross-contamination protocols using colour-coded equipment, and reliable after-hours scheduling that ensures every facility is pristine before the first patient appointment.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Chatswood Medical Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Facility Type</th><th className="p-4 text-left">Typical Facility</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small GP Clinic</td><td className="p-4 text-gray-600">GP clinic, allied health practice 1–4 rooms</td><td className="p-4 text-greenprimary font-bold">$180–$320</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Specialist Centre</td><td className="p-4 text-gray-600">Specialist suite, dental surgery, imaging centre</td><td className="p-4 text-greenprimary font-bold">From $280</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Medical Super-clinic</td><td className="p-4 text-gray-600">Multi-specialty centre, hospital-adjacent clinic</td><td className="p-4 text-greenprimary font-bold">$380–$700</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or supplementary cleaning</td><td className="p-4 text-greenprimary font-bold">From $48/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Specialist consulting room disinfection","Waiting area sanitisation & seating wipe","Reception desk & counter cleaning","Dental treatment room cleaning","Radiology area cleaning available","Bathroom disinfection & restocking","High-touch surface TGA disinfection","Colour-coded equipment segregation","Floor vacuuming & mopping","RACGP-compliant cleaning records"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Chatswood Clinics Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Pacific Highway tower access experience</li><li>• Dental & imaging suite specialists</li><li>• Hospital-adjacent clinic protocols</li><li>• TGA-approved disinfectants</li><li>• Police-checked, insured staff</li><li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free assessment for Chatswood medical facilities.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Medical Cleaning Chatswood</h3>
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
              {[{name:"Artarmon",href:"/commercial-cleaning-artarmon"},{name:"Lane Cove",href:"/commercial-cleaning-lane-cove"},{name:"Willoughby",href:"/commercial-cleaning-willoughby"},{name:"North Sydney",href:"/office-cleaning-north-sydney"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">North Shore's Trusted Medical Cleaning Specialists</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for professional medical cleaning in Chatswood.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
