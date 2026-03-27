import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Corporate Cleaning Sydney | From $42/hr | Pro Clean Corp",
  description: "Corporate cleaning Sydney from $42/hr. Dedicated teams for CBD towers, North Sydney and Parramatta corporate offices. Free quote today.",
  keywords: "corporate cleaning Sydney, corporate office cleaning Sydney, premium office cleaning Sydney, North Sydney corporate cleaning, Parramatta corporate cleaning, Chatswood corporate cleaning, Macquarie Park corporate cleaning",
  openGraph: {
    title: "Corporate Cleaning Sydney | From $42/hr | Pro Clean Corp",
    description: "Corporate cleaning Sydney from $42/hr. Dedicated teams for CBD towers, North Sydney and Parramatta corporate offices. Free quote today.",
    url: "/corporate-cleaning-sydney",
    type: "website",
    images: [{ url: "/meta.png", alt: "Corporate Cleaning Sydney" }]
  },
  alternates: { canonical: "/corporate-cleaning-sydney" }
};

const faqs = [
  {
    question: "How much does corporate office cleaning cost in Sydney?",
    answer: "Corporate office cleaning in Sydney starts at $42/hr. Standard corporate tenancies (up to 300sqm) across CBD, North Sydney, Parramatta, Chatswood and Macquarie Park cost from $280 per visit. Mid-size corporate floors (300–800sqm) run $420–$750 per visit. Full-floor corporate tenancies and multi-level HQ offices are quoted individually with a dedicated account manager. All corporate contracts include QA inspection reports."
  },
  {
    question: "What makes your corporate cleaning service different from standard commercial cleaning?",
    answer: "Corporate cleaning with Pro Clean Corp includes a dedicated cleaning team assigned to your office (consistent staff, not rotated generics), a dedicated account manager as your single point of contact, regular QA inspection reports with photography documentation, and a 24/7 emergency response line for any cleaning issues. We also offer executive washroom servicing, boardroom detailing and end-of-trip facility management as corporate add-ons."
  },
  {
    question: "Do you service corporate offices in North Sydney?",
    answer: "Yes. North Sydney is Sydney's second-largest corporate office market — with a dense concentration of Tier 2 corporate tenants in the Miller Street, Berry Street and Pacific Highway corridors. We have a dedicated North Sydney corporate cleaning operation with teams experienced in the access, timing and standard requirements of the major North Sydney towers including 1 Pacific Highway and the North Sydney CBD precinct."
  },
  {
    question: "Can you service corporate campuses in Macquarie Park and Parramatta CBD?",
    answer: "Yes. Corporate campuses in Macquarie Park — where major multinationals have established Australian and Asia-Pacific headquarters along Waterloo Road — and the growing Parramatta CBD office market are both active areas of our corporate cleaning operation. We provide dedicated corporate cleaning teams for single-building tenancies and multi-building campus arrangements."
  },
  {
    question: "What is included in corporate cleaning that standard office cleaning does not cover?",
    answer: "Corporate cleaning packages typically include: dedicated assigned cleaning team (not rotated), boardroom and executive space detailing, end-of-trip facility management, QA inspection reports with photographic evidence, account manager coordination with your facilities team, emergency response SLA, and optional executive washroom servicing. We also offer carpet maintenance programmes, window cleaning schedules and periodic deep cleaning as part of corporate agreements."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Corporate Cleaning Sydney"
        serviceDescription="Premium corporate office cleaning across Sydney CBD, North Sydney, Parramatta CBD, Chatswood and Macquarie Park. Dedicated cleaning teams, QA inspection reports, account management and 24/7 emergency response."
        serviceUrl="/corporate-cleaning-sydney"
        serviceType="Corporate Cleaning"
        price="$$$"
        additionalServices={["Dedicated cleaning team", "QA inspection reports", "Account management", "Boardroom detailing", "Executive washroom servicing", "End-of-trip facility management"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Corporate Cleaning Sydney</h1>
              <p className="text-xl mb-8 text-gray-100">Premium corporate office cleaning across Sydney's major business districts. Dedicated cleaning teams, QA inspection reports and dedicated account management for corporate tenancies in the CBD, North Sydney, Parramatta CBD, Chatswood and Macquarie Park.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/office.webp" alt="Corporate Cleaning Sydney" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Corporate office cleaning in Sydney starts at $42/hr.</strong> Standard corporate tenancies from $280 per visit. Mid-size floors (300–800sqm) run $420–$750 per visit. Full-floor and multi-level HQ offices quoted individually. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free corporate cleaning assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Corporate Cleaning Services Across Sydney</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Corporate offices in Sydney — whether in the CBD towers of Martin Place and Pitt Street, the North Sydney cluster on Miller Street and Pacific Highway, the growing Parramatta CBD, the commercial precincts of Chatswood, or the corporate campuses of Macquarie Park — share a common set of elevated expectations. These are environments where senior executives, major clients and Board members walk through the door. The cleaning standard must reflect the brand value of the business occupying the space.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Pro Clean Corp's corporate cleaning service is specifically designed to meet these expectations. Every corporate client receives a dedicated cleaning team — not rotated staff but a consistent team who learn the layout, the preferences and the specific requirements of your office. Every corporate agreement includes a dedicated account manager as your single point of contact for scheduling, quality feedback and emergency response. Regular QA inspection reports with photographic documentation give your facilities manager objective evidence of cleaning quality at each visit.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Corporate Cleaning Prices in Sydney</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Tenancy Size</th><th className="p-4 text-left">Typical Office</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Standard (up to 300sqm)</td><td className="p-4 text-gray-600">Mid-tier corporate, satellite office</td><td className="p-4 text-greenprimary font-bold">From $280</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Mid-floor (300–800sqm)</td><td className="p-4 text-gray-600">Corporate floor, Tier 2 firm</td><td className="p-4 text-greenprimary font-bold">$420–$750</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Full floor / HQ (800sqm+)</td><td className="p-4 text-gray-600">HQ tenancy, multi-level office</td><td className="p-4 text-greenprimary font-bold">Quoted individually</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or supplementary cleaning</td><td className="p-4 text-greenprimary font-bold">From $42/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included in Corporate Cleaning</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Dedicated assigned cleaning team","Workstation & open plan cleaning","Executive office & boardroom detailing","Kitchen & end-of-trip facilities","Bathroom & washroom servicing","Carpet vacuuming & hard floor mopping","Waste & recycling management","Reception & lobby presentation","Glass partition & window cleaning","QA inspection reports with photos"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">The Corporate Cleaning Difference</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Dedicated assigned team</li>
                  <li>• Dedicated account manager</li>
                  <li>• QA reports with photos</li>
                  <li>• 24/7 emergency response</li>
                  <li>• Boardroom & exec detailing</li>
                  <li>• Police-checked, insured staff</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Corporate Quote</h4>
                <p className="text-sm mb-4">Free walkthrough for any Sydney corporate office.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Corporate Cleaning Sydney</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-darkblue mb-4">Sydney Corporate Business Districts We Serve</h3>
            <div className="flex flex-wrap gap-3">
              {[{name:"Sydney CBD",href:"/commercial-cleaning-sydney-cbd"},{name:"North Sydney",href:"/office-cleaning-north-sydney"},{name:"Parramatta CBD",href:"/office-cleaning-parramatta"},{name:"Chatswood",href:"/gym-cleaning-chatswood"},{name:"Macquarie Park",href:"/gym-cleaning-macquarie-park"},{name:"St Leonards",href:"/commercial-cleaning-st-leonards"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Premium Corporate Cleaning for Sydney's Top Businesses</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for a dedicated corporate cleaning programme across your Sydney office.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
