import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Medical Cleaning Fairfield | From $48/hr | Pro Clean Corp",
  description: "Medical cleaning Fairfield from $48/hr. Multicultural GP super-clinics and community health centres on Smart Street NSW 2165. Free quote.",
  keywords: "medical cleaning Fairfield, medical centre cleaning Fairfield NSW 2165, GP clinic cleaning Fairfield, community health centre cleaning Fairfield, Smart Street medical cleaning, healthcare cleaning Fairfield",
  openGraph: {
    title: "Medical Cleaning Fairfield | From $48/hr | Pro Clean Corp",
    description: "Medical cleaning Fairfield from $48/hr. Multicultural GP super-clinics and community health centres on Smart Street NSW 2165. Free quote.",
    url: "/medical-cleaning-fairfield",
    type: "website",
    images: [{ url: "/meta.png", alt: "Medical Cleaning Fairfield" }]
  },
  alternates: { canonical: "/medical-cleaning-fairfield" }
};

const faqs = [
  {
    question: "How much does medical cleaning cost in Fairfield?",
    answer: "Medical cleaning in Fairfield starts at $48/hr. A small GP clinic or allied health practice (1–4 consulting rooms) on Smart Street or the Fairfield CBD strip typically costs $180–$320 per visit. Specialist centres and larger practices cost from $280 per visit. High-volume multicultural super-clinics serving 200+ patients per day run $380–$700 per visit. All quotes are free and obligation-free."
  },
  {
    question: "Do you understand the specific needs of multicultural community health centres in Fairfield?",
    answer: "Yes. Fairfield's healthcare facilities are among the most culturally diverse in Australia — serving large Vietnamese, Khmer, Lebanese, Pacific Islander and South American communities. Many of these practices offer language-specific services and have culturally specific patient flow patterns. We are sensitive to these dynamics and can work quietly and respectfully around patient appointments and culturally sensitive consultations."
  },
  {
    question: "Can you clean Vietnamese and Cantonese-speaking health services in Fairfield?",
    answer: "Yes. The Fairfield CBD and Cabramatta area has a concentration of health services specifically serving Vietnamese and Cantonese-speaking communities. We understand these facilities often run extended hours to serve their patient base and can schedule cleaning accordingly. We also have multilingual capabilities within our cleaning team for basic communication."
  },
  {
    question: "Do you meet the infection control standards required for Fairfield's high-volume clinics?",
    answer: "Yes. High-volume bulk-billing clinics in Fairfield and Cabramatta can see 150–300 patients per day — creating very high bacterial load in waiting areas, examination rooms and bathrooms. Our medical cleaning protocols are calibrated for these volumes: TGA-approved hospital-grade disinfectants, colour-coded equipment to prevent cross-contamination, and systematic surface disinfection of all patient-contact points."
  },
  {
    question: "Can you provide cleaning records for Fairfield medical facility accreditation?",
    answer: "Yes. We provide documented cleaning logs and service records that meet RACGP accreditation standards and support practice accreditation processes. We can also provide Safety Data Sheets (SDS) for all chemicals used in your Fairfield practice."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Medical Cleaning Fairfield"
        serviceDescription="Professional medical cleaning in Fairfield NSW 2165. Serving multicultural GP super-clinics, Vietnamese and Cantonese-speaking health services and community health centres on Smart Street and the Fairfield CBD."
        serviceUrl="/medical-cleaning-fairfield"
        serviceType="Medical Cleaning"
        price="$$"
        additionalServices={["GP clinic cleaning", "Super-clinic cleaning", "Community health centre cleaning", "Infection control disinfection", "Waiting area sanitisation", "Consulting room cleaning"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Medical Cleaning Fairfield</h1>
              <p className="text-xl mb-8 text-gray-100">Professional medical cleaning for Fairfield's diverse Western Sydney medical hub. Hospital-grade disinfection for multicultural GP super-clinics, Vietnamese and Cantonese-speaking health services, and high-volume community health centres on Smart Street.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Medical Cleaning Fairfield" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Medical cleaning in Fairfield starts at $48/hr.</strong> Small GP clinics (1–4 consulting rooms) cost $180–$320 per visit. Specialist centres from $280 per visit. High-volume super-clinics run $380–$700 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Fairfield medical facility assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Medical Cleaning Services in Fairfield</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Fairfield's medical sector is one of Western Sydney's most diverse and high-volume healthcare environments. Smart Street and the surrounding Fairfield CBD streets host a concentration of GP practices, bulk-billing clinics, allied health services and community health centres that collectively serve one of Australia's most ethnically diverse populations. Vietnamese, Cantonese, Lebanese, Khmer and Pacific Islander community members attend Fairfield's health services in large numbers — many of these practices run bilingual or multilingual consultations and operate extended hours to accommodate their patient base.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">The combination of high patient volume and complex population needs creates demanding cleaning requirements. Waiting areas fill rapidly and are vacated multiple times per day — requiring frequent surface sanitisation. Consulting rooms must be reset to clinical standard between patients. Bathroom facilities serving hundreds of patients need continuous monitoring. Pro Clean Corp's Fairfield medical cleaning team uses TGA-approved hospital-grade disinfectants, strict colour-coded cleaning equipment segregation, and thorough infection control protocols designed for these high-throughput community health environments.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Fairfield Medical Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Facility Type</th><th className="p-4 text-left">Typical Facility</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small GP Clinic</td><td className="p-4 text-gray-600">1–4 room GP clinic, allied health practice</td><td className="p-4 text-greenprimary font-bold">$180–$320</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Specialist Centre</td><td className="p-4 text-gray-600">Specialist centre, dental surgery, imaging</td><td className="p-4 text-greenprimary font-bold">From $280</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Medical Super-clinic</td><td className="p-4 text-gray-600">Super-clinic, community health centre 10+ rooms</td><td className="p-4 text-greenprimary font-bold">$380–$700</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or supplementary cleaning</td><td className="p-4 text-greenprimary font-bold">From $48/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Waiting area sanitisation & seating wipe","Consulting room reset & disinfection","Reception desk & counter cleaning","Bathroom disinfection & restocking","High-touch surface TGA disinfection","Colour-coded equipment segregation","Floor vacuuming & mopping","Bin & clinical waste area management","SDS documentation available","RACGP-compliant cleaning records"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Fairfield Clinics Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Multicultural precinct experience</li><li>• High-volume clinic protocols</li><li>• TGA-approved disinfectants</li><li>• RACGP-compliant documentation</li><li>• Police-checked, insured staff</li><li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free assessment for Fairfield medical facilities.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Medical Cleaning Fairfield</h3>
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
              {[{name:"Cabramatta",href:"/medical-cleaning-cabramatta"},{name:"Bonnyrigg",href:"/commercial-cleaning-bonnyrigg"},{name:"Prairiewood",href:"/commercial-cleaning-prairiewood"},{name:"Liverpool",href:"/medical-cleaning-liverpool"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Hospital-Grade Medical Cleaning for Fairfield Clinics</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for professional medical cleaning in Fairfield.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
