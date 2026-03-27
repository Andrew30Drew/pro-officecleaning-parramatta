import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Office Cleaning Darlinghurst | From $38/hr | Pro Clean Corp",
  description: "Office cleaning Darlinghurst from $38/hr. Pro Clean Corp serves creative agencies, clinics and law firms on Oxford St and Victoria St. Free quote.",
  keywords: "office cleaning Darlinghurst, office cleaners Darlinghurst, commercial cleaning Darlinghurst, Oxford Street office cleaning, Victoria Street cleaning Darlinghurst NSW 2010",
  openGraph: {
    title: "Office Cleaning Darlinghurst | From $38/hr | Pro Clean Corp",
    description: "Office cleaning Darlinghurst from $38/hr. Pro Clean Corp serves creative agencies, clinics and law firms on Oxford St an.",
    url: "/office-cleaning-darlinghurst",
    type: "website",
    images: [{ url: "/meta.png", alt: "Office Cleaning Darlinghurst" }]
  },
  alternates: { canonical: "/office-cleaning-darlinghurst" }
};

const faqs = [
  {
    question: "How much does office cleaning cost in Darlinghurst?",
    answer: "Office cleaning in Darlinghurst starts at $38/hr for regular scheduled cleans. A typical small office (under 150m²) costs $150–$280 per visit. Larger creative studio floors or multi-room medical suites along Oxford Street or Victoria Street are quoted individually. We offer fixed-price weekly contracts with no lock-in terms."
  },
  {
    question: "Do you clean creative agencies and studio spaces in Darlinghurst?",
    answer: "Yes. We regularly clean design studios, advertising agencies, production companies, and tech startups in Darlinghurst. We understand open-plan creative environments — we clean around equipment, pinboards, and shared spaces without disturbing workflow or overnight project setups."
  },
  {
    question: "Can you clean our Darlinghurst medical or allied health clinic?",
    answer: "Absolutely. The Victoria Street medical strip in Darlinghurst has a high concentration of GP clinics, psychology practices, and allied health studios. We use TGA-approved disinfectants and infection control protocols for all healthcare environments, typically servicing before 7am."
  },
  {
    question: "Do you offer after-hours office cleaning in Darlinghurst?",
    answer: "Yes. Given Darlinghurst's dense nightlife and late-operating businesses, we offer late-evening cleans (post 10pm) and early morning pre-open cleans from 5am. Most of our Darlinghurst office clients prefer after-hours service to avoid disruption."
  },
  {
    question: "Which parts of Darlinghurst do you service?",
    answer: "We cover all of Darlinghurst (NSW 2010) including Oxford Street, Victoria Street, Crown Street, and Liverpool Street corridors. We also service neighbouring suburbs — Surry Hills, Kings Cross, Paddington, and the eastern CBD fringe — under the same contract if needed."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Darlinghurst"
        serviceDescription="Professional office cleaning in Darlinghurst from $38/hr. Serving creative agencies, healthcare clinics, legal firms and hospitality offices along Oxford St and Victoria St."
        serviceUrl="/office-cleaning-darlinghurst"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={["Creative Agency Cleaning", "Medical Office Cleaning", "After-Hours Office Cleaning", "Deep Office Cleaning", "Daily Office Cleaning", "Workstation Sanitisation"]}
        faqs={faqs}
      />
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Office Cleaning Darlinghurst</h1>
              <p className="text-xl mb-4 text-gray-100">
                <strong className="text-white">From $38/hr</strong> — professional office cleaning for Darlinghurst's creative agencies, healthcare clinics, legal firms, and hospitality businesses. After-hours and early-morning availability.
              </p>
              <p className="text-lg text-gray-200">Serving Oxford St, Victoria St, Crown St and all of NSW 2010.</p>
            </div>
            <div className="relative">
              <Image src="/images/services/office.webp" alt="Office Cleaning Darlinghurst NSW" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl mb-10">
            <p className="text-lg text-darkblue font-medium">
              <strong>Office cleaning in Darlinghurst starts at $38/hr</strong> for regularly scheduled visits. Small offices (under 150m²) average $150–$280 per clean. Pro Clean Corp has serviced Darlinghurst businesses for over 10 years — from Oxford Street creative studios to the Victoria Street medical precinct.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Office Cleaning for Darlinghurst's Business Mix</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Darlinghurst (NSW 2010) is one of Sydney's most creatively dense inner-city suburbs. Oxford Street runs through the heart of it — home to advertising agencies, architecture firms, boutique law practices, and a growing cluster of tech and digital media businesses. Victoria Street hosts a significant healthcare corridor, with GP clinics, psychology practices, physiotherapy studios, and specialist consulting rooms. Each of these environments has different cleaning requirements, and Pro Clean Corp services all of them.
              </p>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Creative studios require careful navigation around equipment and overnight setups. Medical rooms require TGA-grade disinfection and clinical protocol. Late-night hospitality offices need post-midnight turnaround cleans before the next working day. We've built our Darlinghurst cleaning service around this reality.
              </p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included in Every Office Clean</h3>
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {["Workstation & desk sanitisation", "Vacuuming & mopping all floors", "Kitchen & breakroom full clean", "Bathroom sanitisation & restock", "Bin emptying & liner replacement", "Window & glass wipe-down", "Reception & entry area clean", "High-touch surface disinfection", "Meeting room preparation", "Equipment surfaces (monitors, phones)", "Recycling bin sorting", "After-hours access available"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Darlinghurst Office Cleaning Pricing</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-darkblue text-white">
                      <th className="text-left p-3 rounded-tl-lg">Office Size</th>
                      <th className="text-left p-3">Frequency</th>
                      <th className="text-left p-3 rounded-tr-lg">Approx. Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Small (under 150m²)", "Weekly", "$150 – $280/visit"],
                      ["Medium (150–400m²)", "3x per week", "$220 – $420/visit"],
                      ["Large (400m²+)", "Daily", "Custom quote"],
                      ["Medical/clinical suite", "Daily or nightly", "From $180/visit"],
                    ].map(([size, freq, cost], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="p-3 font-medium text-darkblue">{size}</td>
                        <td className="p-3 text-gray-600">{freq}</td>
                        <td className="p-3 text-greenprimary font-semibold">{cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Areas Near Darlinghurst We Also Serve</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {[["Surry Hills", "/office-cleaning-surry-hills"], ["Kings Cross", "/office-cleaning-sydney-cbd"], ["Paddington", "/office-cleaning-sydney"], ["Potts Point", "/office-cleaning-sydney"], ["Woolloomooloo", "/office-cleaning-sydney"], ["Sydney CBD", "/office-cleaning-sydney-cbd"]].map(([name, href], i) => (
                  <a key={i} href={href} className="px-4 py-2 bg-blueprimary/10 text-blueprimary rounded-full text-sm font-medium hover:bg-blueprimary hover:text-white transition-colors">{name}</a>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Darlinghurst Businesses Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ From $38/hr, fixed-price contracts</li>
                  <li>✓ After-hours from 10pm, pre-open from 5am</li>
                  <li>✓ Medical-grade disinfection available</li>
                  <li>✓ Police-checked, fully insured staff</li>
                  <li>✓ No lock-in contracts</li>
                  <li>✓ Dedicated account manager</li>
                  <li>✓ 10+ years serving Darlinghurst</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl mb-6">
                <h4 className="font-bold mb-2">Free Quote — Darlinghurst</h4>
                <p className="text-sm mb-1 text-gray-300">Response within 2 hours on business days.</p>
                <div className="text-xl font-bold text-greenprimary mt-3">1300 494 983</div>
                <p className="text-xs text-gray-400 mt-2">hello@procleancorp.com.au</p>
              </div>
              <div className="border border-gray-200 p-5 rounded-xl">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">Service Area</p>
                <p className="text-sm text-gray-700">Darlinghurst NSW 2010 — Oxford St, Victoria St, Crown St, Liverpool St, Burton St, Forbes St</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Office Cleaning Darlinghurst</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-blueprimary">
                <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Get a Free Office Cleaning Quote in Darlinghurst</h3>
            <p className="text-xl mb-6 text-gray-100">From $38/hr. No lock-in. Same week start available.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
