import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Hospital Cleaning Sydney | From $55/hr | Pro Clean Corp",
  description: "Hospital-grade cleaning Sydney from $55/hr. Terminal cleaning, ward and isolation room cleaning for Sydney hospital precincts. Free quote.",
  keywords: "hospital cleaning Sydney, hospital grade cleaning Sydney, terminal cleaning Sydney, isolation room cleaning Sydney, ward cleaning Sydney, Westmead Hospital cleaning, St Vincent's cleaning, Royal North Shore cleaning",
  openGraph: {
    title: "Hospital Cleaning Sydney | From $55/hr | Pro Clean Corp",
    description: "Hospital-grade cleaning Sydney from $55/hr. Terminal cleaning, ward and isolation room cleaning for Sydney hospital precincts. Free quote.",
    url: "/hospital-cleaning-sydney",
    type: "website",
    images: [{ url: "/meta.png", alt: "Hospital Cleaning Sydney" }]
  },
  alternates: { canonical: "/hospital-cleaning-sydney" }
};

const faqs = [
  {
    question: "How much does hospital cleaning cost in Sydney?",
    answer: "Hospital-grade cleaning in Sydney starts at $55/hr — reflecting the higher training requirements, specialised product use and rigorous protocols involved. Terminal room cleaning (thorough disinfection after patient discharge) is typically quoted per room from $180. Ward-level cleaning programmes are quoted on a per-session or per-shift basis depending on scope. We provide free on-site assessments for all hospital and clinical facility cleaning requirements in Sydney."
  },
  {
    question: "What Sydney hospital precincts do you service?",
    answer: "We service all major Sydney hospital precincts — including Westmead Hospital and the Westmead Health Precinct (Western Sydney), St Vincent's Hospital Darlinghurst (Inner East), Royal North Shore Hospital St Leonards (Northern Sydney), Liverpool Hospital and the South Western Sydney Health District, Prince of Wales Randwick Health Campus (Eastern Suburbs), and Nepean Hospital and the Penrith-area campus network in outer Western Sydney."
  },
  {
    question: "What is terminal cleaning and do you provide it in Sydney hospitals?",
    answer: "Terminal cleaning is the thorough, systematic disinfection of a patient room or clinical space after patient discharge — particularly following a patient with a communicable illness or multi-drug resistant organism (MDRO). It involves comprehensive disinfection of all surfaces including high-touch points, medical equipment surrounds, bathroom facilities and air vents. We provide terminal cleaning for hospital rooms, day procedure suites and isolation rooms across Sydney."
  },
  {
    question: "Can you clean isolation rooms in Sydney hospitals?",
    answer: "Yes. Isolation room cleaning requires enhanced PPE, strict donning and doffing procedures, and the use of disinfectants with proven efficacy against the relevant pathogen (e.g., C. diff, MRSA, VRE). Our isolation room cleaning staff are specifically trained in the additional precautions required for these high-risk environments and carry appropriate PPE at all times."
  },
  {
    question: "Are your hospital cleaners in Sydney trained to clinical standards?",
    answer: "Yes. Staff assigned to hospital and high-care environments complete formal infection control training covering hand hygiene (AS/NZS standards), PPE selection and use, colour-coded equipment protocols, correct disinfectant selection and contact times, spill management (including blood and body fluid spills), and MDRO awareness. Our supervisors hold formal qualifications in healthcare cleaning management."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Hospital Cleaning Sydney"
        serviceDescription="Hospital-grade cleaning services across Sydney including terminal cleaning, isolation room cleaning and ward cleaning. Servicing all major Sydney hospital precincts: Westmead, St Vincent's Darlinghurst, Royal North Shore, Liverpool, Prince of Wales and Nepean Penrith."
        serviceUrl="/hospital-cleaning-sydney"
        serviceType="Hospital Cleaning"
        price="$$$"
        additionalServices={["Terminal room cleaning", "Isolation room cleaning", "Ward cleaning", "Day surgery cleaning", "High-care environment disinfection", "MDRO outbreak cleaning"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Hospital Cleaning Sydney</h1>
              <p className="text-xl mb-8 text-gray-100">Hospital-grade cleaning for Sydney's high-care and clinical environments. Terminal cleaning, isolation room disinfection and ward cleaning — delivered by trained, infection-control-certified staff to all major Sydney hospital precincts.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Hospital Cleaning Sydney" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Hospital-grade cleaning in Sydney starts at $55/hr.</strong> Terminal room cleaning from $180 per room. Ward cleaning programmes quoted per session. Day surgery and procedure suites quoted individually. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free clinical assessment anywhere in Sydney.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Hospital-Grade Cleaning Services in Sydney</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Hospital cleaning is the most technically demanding, ethically weighty and operationally complex form of commercial cleaning. The direct link between cleaning quality and patient outcomes — particularly the prevention of healthcare-associated infections (HAIs) — means that the standard of hospital cleaning is a patient safety issue, not merely a comfort one. Pro Clean Corp approaches hospital-grade cleaning as a clinical service: our staff are trained to infection control standards, our products are TGA-approved for clinical environments, and our protocols reflect current Australian guidelines for hospital environmental cleaning.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">We provide hospital-grade cleaning services to facilities across all of Sydney's major hospital precincts. At Westmead, we work alongside one of Australia's largest and most complex public hospital campuses. At St Vincent's Darlinghurst, we operate in one of the inner city's densest clinical environments. Along the Royal North Shore St Leonards corridor, at Liverpool Hospital and the South Western Sydney Health District, and at the Prince of Wales Randwick Health Campus — our teams deliver consistent, clinically appropriate cleaning to the highest documented standard.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Hospital Cleaning Services We Provide</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Terminal room cleaning (post-discharge)","Isolation room cleaning & disinfection","Ward-level regular cleaning","Day procedure & day surgery cleaning","Operating theatre ancillary areas","Outpatient clinic & waiting area cleaning","MDRO/outbreak supplementary cleaning","Emergency department cleaning support","Bathroom & wet area disinfection","Documented cleaning records & logs"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Hospital Cleaning Pricing in Sydney</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Service Type</th><th className="p-4 text-left">Description</th><th className="p-4 text-left">Indicative Price</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Terminal Room Clean</td><td className="p-4 text-gray-600">Full post-discharge room disinfection</td><td className="p-4 text-greenprimary font-bold">From $180/room</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Isolation Room Clean</td><td className="p-4 text-gray-600">Enhanced PPE, MDRO-grade disinfection</td><td className="p-4 text-greenprimary font-bold">From $220/room</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Ward Cleaning</td><td className="p-4 text-gray-600">Regular ward-level service, quoted per session</td><td className="p-4 text-greenprimary font-bold">From $55/hr</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Day Surgery Cleaning</td><td className="p-4 text-gray-600">Procedure room turnaround between cases</td><td className="p-4 text-greenprimary font-bold">Quoted per facility</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Our Clinical Standards</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• TGA-approved hospital-grade products</li>
                  <li>• Infection control certified staff</li>
                  <li>• PPE-equipped for all environments</li>
                  <li>• MDRO outbreak response capability</li>
                  <li>• Documented cleaning logs</li>
                  <li>• 24/7 emergency response available</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Hospital Cleaning Quote</h4>
                <p className="text-sm mb-4">Free clinical assessment for Sydney facilities.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Hospital Cleaning Sydney</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-darkblue mb-4">Sydney Hospital Precincts We Service</h3>
            <div className="flex flex-wrap gap-3">
              {[{name:"Westmead",href:"/commercial-cleaning-westmead"},{name:"Darlinghurst (St Vincent's)",href:"/commercial-cleaning-darlinghurst"},{name:"St Leonards (RNS)",href:"/commercial-cleaning-st-leonards"},{name:"Liverpool",href:"/medical-cleaning-liverpool"},{name:"Randwick (Prince of Wales)",href:"/strata-cleaning-randwick"},{name:"Penrith (Nepean)",href:"/strata-cleaning-penrith"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Clinical-Grade Hospital Cleaning Across Sydney</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for hospital-grade cleaning services anywhere in the Sydney metro area.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
