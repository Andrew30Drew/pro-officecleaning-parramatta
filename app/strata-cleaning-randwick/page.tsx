import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Strata Cleaning Randwick | From $42/hr | Pro Clean Corp",
  description: "Strata cleaning Randwick from $42/hr. UNSW precinct apartments, Randwick City Centre and heritage residential unit blocks NSW 2031. Free quote.",
  keywords: "strata cleaning Randwick, strata cleaners Randwick NSW 2031, apartment cleaning Randwick, UNSW strata cleaning, Eastern Suburbs strata cleaning Randwick, Randwick City Centre apartment cleaning",
  openGraph: {
    title: "Strata Cleaning Randwick | From $42/hr | Pro Clean Corp",
    description: "Strata cleaning Randwick from $42/hr. UNSW precinct apartments, Randwick City Centre and heritage residential unit blocks NSW 2031. Free quote.",
    url: "/strata-cleaning-randwick",
    type: "website",
    images: [{ url: "/meta.png", alt: "Strata Cleaning Randwick" }]
  },
  alternates: { canonical: "/strata-cleaning-randwick" }
};

const faqs = [
  {
    question: "How much does strata cleaning cost in Randwick?",
    answer: "Strata cleaning in Randwick starts at $42/hr. Small strata complexes of up to 20 lots, common in Randwick's heritage apartment buildings near Belmore Road, cost $180–$320 per visit. Medium complexes of 20–60 lots, typical in the UNSW and hospital precincts, run $280–$550 per visit. Large complexes with 60+ lots in the Randwick City Centre precinct cost $400–$900 per visit. Free on-site assessments available."
  },
  {
    question: "Do you service UNSW-adjacent strata buildings in Randwick?",
    answer: "Yes. The streets immediately surrounding UNSW — Anzac Parade, High Street, Botany Street, Barker Street — have very high strata building density, with student and academic occupants creating high common area foot traffic. Student accommodation strata buildings in particular need frequent cleaning of bin rooms, lifts and laundry facilities. We offer flexible schedules to accommodate UNSW's academic calendar."
  },
  {
    question: "Can you clean strata buildings near Prince of Wales Hospital in Randwick?",
    answer: "Yes. The Prince of Wales Hospital precinct and the surrounding High Street and Barker Street corridors house a significant population of medical professionals, interns and nursing staff in strata accommodation. These residents typically have demanding work schedules — making reliable, after-hours cleaning of common areas essential to maintaining building standards."
  },
  {
    question: "Do you clean heritage apartment blocks in Randwick?",
    answer: "Yes. Randwick has a substantial stock of pre-war and mid-century apartment buildings — particularly the characteristic red brick and rendered Art Deco-style blocks near Belmore Road, Perouse Road and the Randwick Junction area. These buildings have distinctive common area features — tessellated tile foyers, leadlight windows, terrazzo stairwells — that require careful, appropriate cleaning to preserve their heritage character."
  },
  {
    question: "How do you manage the high resident turnover in Randwick strata buildings?",
    answer: "High resident turnover — driven by student and medical professional populations — means Randwick strata buildings experience more frequent move-ins and move-outs, which creates additional common area wear, lift scrapes and bin room pressure. We can provide move-in/move-out common area clean assessments and reactive cleaning on short notice when tenant changeover events occur."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Strata Cleaning Randwick"
        serviceDescription="Professional strata cleaning in Randwick NSW 2031. Serving Randwick City Centre, UNSW-adjacent and Prince of Wales Hospital precinct strata buildings — both heritage apartment blocks and new high-density developments."
        serviceUrl="/strata-cleaning-randwick"
        serviceType="Strata Cleaning"
        price="$$"
        additionalServices={["Heritage foyer cleaning", "UNSW student building cleaning", "Medical professional building cleaning", "Lift interior cleaning", "Bin room management", "Move-in/move-out common area cleaning"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Strata Cleaning Randwick</h1>
              <p className="text-xl mb-8 text-gray-100">Professional strata cleaning for Randwick's high-density Eastern Suburbs strata market. Serving heritage apartment blocks near Belmore Road, UNSW-adjacent buildings, and the Prince of Wales Hospital precinct — where high resident turnover demands consistent, reliable cleaning standards.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Strata Cleaning Randwick" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Strata cleaning in Randwick starts at $42/hr.</strong> Small strata buildings (up to 20 lots) cost $180–$320 per visit. Medium complexes (20–60 lots) run $280–$550 per visit. Large city-centre complexes (60+ lots) cost $400–$900 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Randwick strata assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Strata Cleaning in Randwick</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Randwick is one of Sydney's Eastern Suburbs' most densely inhabited suburbs — packed with strata buildings that range from pre-war brick walk-ups to modern high-density towers. The suburb's strata landscape is shaped by three major institutional anchors: UNSW generates a large transient student and academic population that occupies the apartment buildings clustered around the campus boundary on Anzac Parade and High Street; Prince of Wales Hospital and the Randwick Health Campus draw medical professionals and nurses who live in the surrounding strata buildings; and Randwick City Centre itself has seen successive waves of medium-density apartment development along Belmore Road and Perouse Road.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">High resident turnover is the defining cleaning challenge for Randwick strata managers. The student and medical professional cohorts that dominate Randwick's strata population often rent on short-term leases and turn over frequently, creating above-average wear on lifts, bin rooms, stairwells and foyers. Pro Clean Corp's Randwick strata service accounts for this: we include reactive response for move-in/move-out related common area issues, offer flexible visit frequencies that can be increased during peak tenancy changeover periods, and provide detailed cleaning reports that document the state of common areas for strata managers and OC executives.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Randwick Strata Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Complex Size</th><th className="p-4 text-left">Typical Complex</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (up to 20 lots)</td><td className="p-4 text-gray-600">Heritage walk-up, small apartment block</td><td className="p-4 text-greenprimary font-bold">$180–$320</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (20–60 lots)</td><td className="p-4 text-gray-600">Mid-rise building, student accommodation block</td><td className="p-4 text-greenprimary font-bold">$280–$550</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (60+ lots)</td><td className="p-4 text-gray-600">Large apartment complex, Randwick City Centre tower</td><td className="p-4 text-greenprimary font-bold">$400–$900</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or reactive cleaning</td><td className="p-4 text-greenprimary font-bold">From $42/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {['Heritage foyer & tessellated tile cleaning","Lift interior & button sanitisation","Corridor & stairwell cleaning","Bin room & waste area management","Common laundry area cleaning","Ground level entry cleaning","Outdoor path & courtyard cleaning","Letterbox area maintenance","Reactive move-in/move-out cleaning","Terrace & balcony common area cleaning'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Randwick Strata Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Heritage building experience</li><li>• UNSW precinct specialists</li><li>• High-turnover building management</li><li>• Strata manager coordination</li><li>• Police-checked, insured staff</li><li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free assessment for Randwick strata.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Strata Cleaning Randwick</h3>
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
              {[{name:"Coogee",href:"/strata-cleaning-coogee"},{name:"Kensington",href:"/commercial-cleaning-kensington"},{name:"Maroubra",href:"/strata-cleaning-maroubra"},{name:"Kingsford",href:"/commercial-cleaning-kingsford"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Reliable Strata Cleaning for Every Randwick Building</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for professional strata cleaning in Randwick.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
