import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Office Cleaning Neutral Bay | From $38/hr | Pro Clean Corp",
  description: "Office cleaning Neutral Bay from $38/hr. Serving legal firms, financial planners, dental and real estate offices on Military Rd. Free quote.",
  keywords: "office cleaning Neutral Bay, office cleaners Neutral Bay, commercial cleaning Neutral Bay NSW 2089, Military Road Neutral Bay office cleaning, Grosvenor Street cleaning",
  openGraph: {
    title: "Office Cleaning Neutral Bay | From $38/hr | Pro Clean Corp",
    description: "Office cleaning Neutral Bay from $38/hr. Serving legal firms, financial planners, dental and real estate offices on Mili.",
    url: "/office-cleaning-neutral-bay",
    type: "website",
    images: [{ url: "/meta.png", alt: "Office Cleaning Neutral Bay" }]
  },
  alternates: { canonical: "/office-cleaning-neutral-bay" }
};

const faqs = [
  {
    question: "How much does office cleaning cost in Neutral Bay?",
    answer: "Office cleaning in Neutral Bay starts at $38/hr. Small professional offices for solicitors, financial advisers or real estate agencies (1–5 staff) on Military Road cost $150–$290 per visit. Medium-sized practices (6–20 staff) including dental suites and financial planning groups run $220–$430 per visit. All quotes are obligation-free."
  },
  {
    question: "Can you clean our Neutral Bay real estate agency or property management office?",
    answer: "Yes. Real estate agencies are one of the most common business types we service on the Military Road strip. These offices often have high foot traffic from buyers, renters and landlords, requiring daily or near-daily cleaning of reception, consultation rooms, bathroom facilities and high-touch surfaces like door handles and glass partitions."
  },
  {
    question: "Do you service dental practices and medical offices in Neutral Bay?",
    answer: "Absolutely. We provide medical-grade cleaning for dental surgeries, GP clinics and specialist suites in Neutral Bay. Our protocols include colour-coded cleaning equipment, hospital-grade disinfectants and strict infection control procedures. We schedule cleans before patient hours or after the last appointment of the day."
  },
  {
    question: "Can you clean our law firm offices on Grosvenor Street?",
    answer: "Yes. Several boutique law firms and barristers' chambers operate from the quieter professional streets off Military Road, including Grosvenor Street and Wycombe Road. We provide discreet, thorough cleaning that maintains the professional image these firms require for client meetings and court preparation."
  },
  {
    question: "How do you handle after-hours access for Neutral Bay offices?",
    answer: "We operate a secure keyholding and alarm management system. Many of our Neutral Bay clients provide us with building access codes and keys so our team can clean after-hours without any staff needing to be present. All our cleaners are police-checked and fully insured."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Neutral Bay"
        serviceDescription="Professional office cleaning in Neutral Bay NSW 2089. Serving real estate agencies, legal firms, financial services and dental practices on Military Road and Grosvenor Street."
        serviceUrl="/office-cleaning-neutral-bay"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={['Real estate office cleaning", "Dental surgery cleaning", "Legal office cleaning", "Workstation sanitisation", "Bathroom disinfection", "Kitchen & breakroom hygiene']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Office Cleaning Neutral Bay</h1>
              <p className="text-xl mb-8 text-gray-100">Professional office cleaning for Neutral Bay's Lower North Shore professionals. Trusted by real estate agencies, legal firms, financial planners and dental practices on Military Road and Grosvenor Street.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/office.webp" alt="Office Cleaning Neutral Bay" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Office cleaning in Neutral Bay starts at $38/hr.</strong> Small professional offices (1–5 staff) cost $150–$290 per visit. Dental suites and larger practices (6–20 staff) run $220–$430 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Neutral Bay site assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Office Cleaning in Neutral Bay</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Neutral Bay sits at the commercial heart of Sydney's Lower North Shore professional belt. Military Road through Neutral Bay is one of the most consistently traded commercial strips north of the Harbour Bridge — with real estate agencies, financial planning practices, solicitors, accountants and a cluster of dental and medical practices all operating from a mix of ground-floor shopfronts and upper-level office suites. The suburb's proximity to the North Sydney CBD makes it a preferred address for professionals who want Lower North Shore prestige without CBD rents.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Pro Clean Corp provides office cleaning services across the full Neutral Bay commercial precinct — from the busy Military Road strip to the quieter professional streets like Grosvenor Street, Yeo Street and Wycombe Road. Our cleaners understand that client-facing businesses in Neutral Bay require immaculate presentation: spotless reception areas, streak-free glass, sanitised consultation rooms and fresh, clean bathrooms that reinforce client confidence. We work around your business hours and provide keyholding for after-hours access.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Neutral Bay Office Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Office Size</th><th className="p-4 text-left">Typical Business</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (1–5 staff)</td><td className="p-4 text-gray-600">Solicitor, financial adviser, real estate</td><td className="p-4 text-greenprimary font-bold">$150–$290</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (6–20 staff)</td><td className="p-4 text-gray-600">Dental suite, financial planning group</td><td className="p-4 text-greenprimary font-bold">$220–$430</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (21–50 staff)</td><td className="p-4 text-gray-600">Corporate office, multi-level practice</td><td className="p-4 text-greenprimary font-bold">$380–$650</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or casual cleaning</td><td className="p-4 text-greenprimary font-bold">From $38/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {['Workstation & desk sanitisation","Consultation room cleaning","Dental surgery disinfection (on request)","Kitchen & breakroom hygiene","Bathroom disinfection & restocking","Floor vacuuming & mopping","Bin emptying & waste removal","Reception & lobby detailing","Glass & window cleaning","High-touch surface disinfection'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Neutral Bay Businesses Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Police-checked, insured cleaners</li>
                  <li>• Secure keyholding service</li>
                  <li>• Medical-grade options available</li>
                  <li>• Consistent assigned team</li>
                  <li>• After-hours & weekend availability</li>
                  <li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free site assessment for Neutral Bay offices.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Office Cleaning Neutral Bay</h3>
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
              {[{name:"Cremorne",href:"/office-cleaning-cremorne"},{name:"Mosman",href:"/commercial-cleaning-mosman"},{name:"North Sydney",href:"/office-cleaning-north-sydney"},{name:"Kirribilli",href:"/commercial-cleaning-kirribilli"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready for a Cleaner Neutral Bay Office?</h3>
            <p className="text-xl mb-6 text-gray-100">Get a free, no-obligation quote for your Neutral Bay business today.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
