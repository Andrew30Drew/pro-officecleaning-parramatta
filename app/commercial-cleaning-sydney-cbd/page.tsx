import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Commercial Cleaning Sydney CBD | From $42/hr | Pro Clean Corp",
  description: "Commercial cleaning Sydney CBD from $42/hr. Serving law firms, banks and corporate towers on George St, Martin Place and Barangaroo. Free quote.",
  keywords: "commercial cleaning Sydney CBD, commercial cleaners Sydney CBD, office cleaning Sydney CBD, Martin Place cleaning, George Street commercial cleaning, Barangaroo cleaning, CBD commercial cleaning company",
  openGraph: {
    title: "Commercial Cleaning Sydney CBD | From $42/hr | Pro Clean Corp",
    description: "Commercial cleaning Sydney CBD from $42/hr. Serving law firms, banks and corporate towers on George St, Martin Place and.",
    url: "/commercial-cleaning-sydney-cbd",
    type: "website",
    images: [{ url: "/meta.png", alt: "Commercial Cleaning Sydney CBD" }]
  },
  alternates: { canonical: "/commercial-cleaning-sydney-cbd" }
};

const faqs = [
  {
    question: "How much does commercial cleaning cost in Sydney CBD?",
    answer: "Commercial cleaning in Sydney CBD starts at $42/hr. A standard CBD office floor plate (up to 200sqm) costs from $380 per visit. Law firms and financial institutions in premium Martin Place or Pitt Street towers with 20–50 staff typically budget $420–$850 per visit. Full-floor corporate tenancies from $680/visit. We offer free walkthroughs for all CBD premises with a same-week quote."
  },
  {
    question: "Can you clean after hours in Sydney CBD high-rise towers?",
    answer: "Yes. After-hours cleaning is standard for CBD commercial premises. We coordinate with building management for after-hours access passes, freight lifts and security protocols in all major CBD towers including Brookfield Place, 1 Martin Place, MLC Centre, Governor Phillip Tower and Barangaroo's International Towers. Our cleaning windows typically run 6pm–6am."
  },
  {
    question: "Do you service coworking spaces in the Sydney CBD?",
    answer: "Yes. Coworking operators in the CBD — including major flexible workspace providers along George Street, Clarence Street and York Street — are a growing segment of our CBD cleaning portfolio. These spaces need daily cleaning of hot desks, phone booths, meeting rooms, kitchens and amenities to maintain the premium member experience they promise."
  },
  {
    question: "Can you handle cleaning for government departments in the CBD?",
    answer: "Yes. We hold appropriate insurances and background check compliance for government and public sector contracts. We service federal and NSW state government tenancies throughout the CBD and have experience meeting the specific reporting, WHS and security requirements of public sector facilities management teams."
  },
  {
    question: "What areas of the Sydney CBD do you cover?",
    answer: "We cover the entire Sydney CBD 2000 postcode — from Barangaroo and Darling Harbour to the west, through Martin Place, George Street, Pitt Street, Elizabeth Street, and Macquarie Street, to Woolloomooloo and the Domain to the east. We also service the adjoining precincts of Wynyard, Town Hall, Central and Circular Quay."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Commercial Cleaning Sydney CBD"
        serviceDescription="Professional commercial cleaning in Sydney CBD NSW 2000. Serving law firms, financial institutions, consulting firms, coworking spaces and government departments at Martin Place, George Street, Pitt Street, Wynyard and Barangaroo."
        serviceUrl="/commercial-cleaning-sydney-cbd"
        serviceType="Commercial Cleaning"
        price="$$$"
        additionalServices={["Law firm cleaning", "Financial institution cleaning", "Coworking space cleaning", "Government office cleaning", "After-hours CBD cleaning", "High-rise floor plate cleaning"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Commercial Cleaning Sydney CBD</h1>
              <p className="text-xl mb-8 text-gray-100">Australia's prime business address demands a premium cleaning standard. Pro Clean Corp services law firms, financial institutions, consulting firms and government departments across Martin Place, George Street, Pitt Street, Wynyard and Barangaroo.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/office.webp" alt="Commercial Cleaning Sydney CBD" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Commercial cleaning in Sydney CBD starts at $42/hr.</strong> Standard CBD floor plates (up to 200sqm) cost from $380 per visit. Corporate tenancies for 20–50 staff run $420–$850 per visit. Full-floor cleaning from $680/visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free CBD walkthrough and quote.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Commercial Cleaning Services in Sydney CBD</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Sydney CBD is Australia's most prestigious and demanding commercial cleaning environment. The concentration of Tier 1 law firms on Martin Place and Pitt Street, the major banks and financial institutions throughout the core, the consulting firms in Barangaroo International Towers, and the expanding tech and coworking operators along George Street and Clarence Street — all require a cleaning standard that matches their brand positioning at Australia's apex business address.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Pro Clean Corp operates across the full CBD postcode with dedicated cleaning teams experienced in the specific access, security and timing protocols of Sydney's premium commercial towers. We coordinate with building management companies including CBRE, JLL, Colliers and Knight Frank to manage after-hours access, freight lift bookings and waste disposal in accordance with building-specific requirements. Our CBD cleaning managers personally oversee quality inspections and are contactable 24/7 for any service issues.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Sydney CBD Commercial Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Tenancy Type</th><th className="p-4 text-left">Typical Occupant</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small tenancy (up to 200sqm)</td><td className="p-4 text-gray-600">Boutique firm, satellite office</td><td className="p-4 text-greenprimary font-bold">From $380</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Mid-floor (200–500sqm)</td><td className="p-4 text-gray-600">Law firm, consulting team, tech company</td><td className="p-4 text-greenprimary font-bold">$420–$850</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Full floor (500sqm+)</td><td className="p-4 text-gray-600">Financial institution, government dept.</td><td className="p-4 text-greenprimary font-bold">From $680</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or supplementary cleaning</td><td className="p-4 text-greenprimary font-bold">From $42/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Workstation & open plan cleaning","Executive office detailing","Boardroom & meeting room cleaning","Kitchen & end-of-trip facilities","Bathroom disinfection & restocking","Full floor vacuuming & mopping","Waste & recycling management","Reception & lobby presentation","Glass partition & window cleaning","High-touch surface disinfection"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why CBD Businesses Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• High-rise tower experience</li>
                  <li>• After-hours CBD cleaning windows</li>
                  <li>• Building management coordination</li>
                  <li>• Dedicated account manager</li>
                  <li>• QA inspection reports</li>
                  <li>• Police-checked, insured staff</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a CBD Quote</h4>
                <p className="text-sm mb-4">Free walkthrough and same-week quote.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Commercial Cleaning Sydney CBD</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-darkblue mb-4">Also Serving Nearby Precincts</h3>
            <div className="flex flex-wrap gap-3">
              {[{name:"Barangaroo",href:"/commercial-cleaning-barangaroo"},{name:"Pyrmont",href:"/commercial-cleaning-pyrmont"},{name:"North Sydney",href:"/office-cleaning-north-sydney"},{name:"Surry Hills",href:"/commercial-cleaning-surry-hills"},{name:"Darlinghurst",href:"/commercial-cleaning-darlinghurst"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Elevate Your CBD Office Presentation</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for premium commercial cleaning across Sydney CBD.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
