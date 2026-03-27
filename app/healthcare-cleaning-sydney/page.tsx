import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Healthcare Cleaning Sydney | From $48/hr | Pro Clean Corp",
  description: "Specialist healthcare cleaning services across all of Sydney. All healthcare facility types, TGA-approved products, infection control protocols. Westmead, St Vincent's, Royal North Shore, Prince of Wales. From $48/hr.",
  keywords: "healthcare cleaning Sydney, healthcare facility cleaning Sydney, medical cleaning Sydney, clinic cleaning Sydney, TGA approved cleaning Sydney, infection control cleaning Sydney, Westmead cleaning, St Vincent's cleaning",
  openGraph: {
    title: "Healthcare Cleaning Sydney | From $48/hr | Pro Clean Corp",
    description: "Healthcare cleaning across all Sydney from $48/hr. TGA-approved disinfection for medical centres, GP clinics and allied health facilities. Free quote.",
    url: "/healthcare-cleaning-sydney",
    type: "website",
    images: [{ url: "/meta.png", alt: "Healthcare Cleaning Sydney" }]
  },
  alternates: { canonical: "/healthcare-cleaning-sydney" }
};

const faqs = [
  {
    question: "How much does healthcare cleaning cost in Sydney?",
    answer: "Healthcare cleaning in Sydney starts at $48/hr for most facility types. A small GP clinic or allied health practice (1–4 consulting rooms) costs $180–$320 per visit. Specialist centres and dental surgeries cost from $280 per visit. Larger healthcare facilities including community health centres and multi-specialty practices run $380–$700 per visit. We provide free on-site assessments for all Sydney healthcare facilities."
  },
  {
    question: "What healthcare precincts in Sydney do you service?",
    answer: "We service all major Sydney healthcare precincts — including the Westmead Hospital and Westmead Health Precinct in Western Sydney, St Vincent's Hospital and surrounding Darlinghurst specialist cluster, Royal North Shore Hospital and the St Leonards medical precinct, Prince of Wales Hospital and the Randwick Health Campus, Liverpool Hospital and the South Western Sydney Health District, and the Nepean Penrith hospital cluster in Western Sydney."
  },
  {
    question: "What products do you use for healthcare cleaning in Sydney?",
    answer: "We use TGA-approved hospital-grade disinfectants effective against a full spectrum of clinical pathogens — including MRSA, C. diff, VRE and respiratory viruses. We can provide Safety Data Sheets (SDS) for all products used. For facilities with specific product requirements or formulary restrictions, we can align our product selection to your approved list."
  },
  {
    question: "Are your healthcare cleaners trained in infection control?",
    answer: "Yes. All staff assigned to Sydney healthcare facilities undergo specific infection control training covering hand hygiene, PPE use, colour-coded cleaning equipment systems, correct disinfectant dilution and contact times, and spill management procedures. Our healthcare cleaning supervisors hold formal infection control qualifications."
  },
  {
    question: "Can you provide cleaning for RACGP or ACHS accreditation purposes in Sydney?",
    answer: "Yes. We maintain documented cleaning logs, service records and product registers that support RACGP general practice accreditation, ACHS hospital accreditation, and a range of other healthcare facility quality standards. We work with practices and facility managers to ensure our cleaning documentation meets the specific requirements of their accreditation bodies."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Healthcare Cleaning Sydney"
        serviceDescription="Specialist healthcare cleaning services across all of Sydney. All healthcare facility types including GP clinics, specialist centres, allied health and community health services. TGA-approved products, infection control protocols. Servicing all major Sydney healthcare precincts."
        serviceUrl="/healthcare-cleaning-sydney"
        serviceType="Healthcare Cleaning"
        price="$$"
        additionalServices={["GP clinic cleaning", "Specialist centre cleaning", "Allied health practice cleaning", "Community health centre cleaning", "Infection control disinfection", "RACGP-compliant documentation"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Healthcare Cleaning Sydney</h1>
              <p className="text-xl mb-8 text-gray-100">Specialist healthcare facility cleaning for all of Sydney. TGA-approved products, rigorous infection control protocols and trained healthcare cleaning staff — serving GP clinics, specialist suites, allied health, community health and every healthcare facility type across the Sydney metro area.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Healthcare Cleaning Sydney" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Healthcare cleaning in Sydney starts at $48/hr.</strong> Small GP clinics (1–4 rooms) cost $180–$320 per visit. Specialist centres from $280 per visit. Larger healthcare facilities run $380–$700 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free healthcare facility assessment anywhere in Sydney.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Healthcare Cleaning Services Across Sydney</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Healthcare cleaning is the most technically demanding and ethically critical form of commercial cleaning. The consequences of inadequate hygiene in a healthcare environment — hospital-acquired infections, cross-contamination, regulatory non-compliance — can directly harm patients and expose healthcare providers to serious legal and professional risk. Pro Clean Corp approaches healthcare cleaning as a clinical service, not a commercial one: our protocols, products and staff training are aligned with Australian healthcare cleaning standards.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">We service healthcare facilities across all of Sydney's major health precincts — from the massive Westmead Hospital complex in Western Sydney and the St Vincent's Darlinghurst specialist cluster, to the Royal North Shore St Leonards corridor and the Prince of Wales Randwick Health Campus in the eastern suburbs. Our operational network covers Liverpool Hospital and the South Western Sydney Health District, and extends to the Nepean and Penrith hospital campuses in outer Western Sydney. For any healthcare facility in the Sydney metropolitan area, we can mobilise a trained, insured, police-checked healthcare cleaning team.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Sydney Healthcare Cleaning — Facility Types We Serve</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["General practice (GP) clinics","Specialist medical suites","Allied health practices (physio, OT, psych)","Dental surgeries & orthodontic practices","Community health centres","Pathology collection centres","Radiology & medical imaging","Day procedure & day surgery centres","Aged care facility medical areas","Occupational health clinics"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Sydney Healthcare Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Facility Type</th><th className="p-4 text-left">Description</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small GP Clinic</td><td className="p-4 text-gray-600">1–4 consulting rooms, single practitioner</td><td className="p-4 text-greenprimary font-bold">$180–$320</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Specialist Centre</td><td className="p-4 text-gray-600">Specialist suite, dental, allied health</td><td className="p-4 text-greenprimary font-bold">From $280</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Community Health Centre</td><td className="p-4 text-gray-600">Multi-room, high-volume, mixed services</td><td className="p-4 text-greenprimary font-bold">$380–$700</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or supplementary cleaning</td><td className="p-4 text-greenprimary font-bold">From $48/hr</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Our Healthcare Cleaning Standards</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• TGA-approved hospital-grade products</li>
                  <li>• Colour-coded equipment systems</li>
                  <li>• Infection control trained staff</li>
                  <li>• RACGP-compliant documentation</li>
                  <li>• PPE-equipped cleaning teams</li>
                  <li>• After-hours scheduling available</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Healthcare Quote</h4>
                <p className="text-sm mb-4">Free assessment for any Sydney healthcare facility.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Healthcare Cleaning Sydney</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-darkblue mb-4">Sydney Healthcare Precincts We Serve</h3>
            <div className="flex flex-wrap gap-3">
              {[{name:"Westmead",href:"/commercial-cleaning-westmead"},{name:"Parramatta",href:"/medical-cleaning-parramatta"},{name:"Liverpool",href:"/medical-cleaning-liverpool"},{name:"Randwick",href:"/medical-cleaning-chatswood"},{name:"Chatswood",href:"/medical-cleaning-chatswood"},{name:"Ryde",href:"/medical-cleaning-ryde"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Sydney's Healthcare Cleaning Specialists</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for clinical-grade healthcare cleaning anywhere in Sydney.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
