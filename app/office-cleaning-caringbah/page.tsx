import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Office Cleaning Caringbah | From $38/hr | Pro Clean Corp",
  description: "Office cleaning Caringbah from $38/hr. Sutherland Shire medical centres, real estate and professional services NSW 2229. Free quote.",
  keywords: "office cleaning Caringbah, office cleaners Caringbah, commercial cleaning Caringbah NSW 2229, Sutherland Shire office cleaning, Willarong Road office cleaning",
  openGraph: {
    title: "Office Cleaning Caringbah | From $38/hr | Pro Clean Corp",
    description: "Office cleaning Caringbah from $38/hr. Serving Sutherland Shire medical centres, real estate and professional services N.",
    url: "/office-cleaning-caringbah",
    type: "website",
    images: [{ url: "/meta.png", alt: "Office Cleaning Caringbah" }]
  },
  alternates: { canonical: "/office-cleaning-caringbah" }
};

const faqs = [
  {
    question: "How much does office cleaning cost in Caringbah?",
    answer: "Office cleaning in Caringbah starts at $38/hr. Small professional offices for real estate agencies or individual practitioners (1–5 staff) on Willarong Road and President Avenue typically cost $150–$290 per visit. Medium-sized medical centres and professional services offices (6–20 staff) run $220–$430 per visit. All quotes are free and obligation-free."
  },
  {
    question: "Can you clean our Caringbah medical centre or GP clinic?",
    answer: "Yes. Caringbah is the Sutherland Shire's commercial heart and has a strong cluster of medical centres, GP clinics and allied health practices. We provide hospital-grade disinfection, colour-coded cleaning equipment and infection control protocols for all healthcare facilities in Caringbah, with scheduling available around patient appointment times."
  },
  {
    question: "Do you service real estate offices in Caringbah?",
    answer: "Absolutely. Real estate offices in Caringbah experience high foot traffic from buyers, sellers and tenants across the Sutherland Shire market. We offer daily or weekly cleaning services to keep reception areas, open plan desks, conference rooms and bathrooms consistently presentable for client visits and open homes briefings."
  },
  {
    question: "Can you clean Shire-based businesses across the Caringbah commercial precinct?",
    answer: "Yes. Our Caringbah service area covers the full commercial precinct — Willarong Road, President Avenue, Billa Road, Gannons Road and the surrounding streets. We also service businesses in nearby Taren Point and Caringbah South industrial areas for light commercial office cleaning."
  },
  {
    question: "How do you schedule cleaning for busy Caringbah retail-adjacent offices?",
    answer: "Many Caringbah offices are located near or within retail strips, creating shared access and parking constraints during business hours. We schedule our cleans for early morning or after close-of-business to avoid congestion and minimise disruption to your staff and neighbouring businesses."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Caringbah"
        serviceDescription="Professional office cleaning in Caringbah NSW 2229. Serving medical centres, real estate agencies and professional services on Willarong Road and President Avenue in the Sutherland Shire."
        serviceUrl="/office-cleaning-caringbah"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={["Medical centre cleaning", "Real estate office cleaning", "Professional services cleaning", "Workstation sanitisation", "Bathroom disinfection", "Kitchen & breakroom hygiene"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Office Cleaning Caringbah</h1>
              <p className="text-xl mb-8 text-gray-100">Professional office cleaning for the Sutherland Shire's commercial heart. Trusted by medical centres, real estate agencies and Shire-based professional services businesses on Willarong Road and President Avenue.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/office.webp" alt="Office Cleaning Caringbah" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Office cleaning in Caringbah starts at $38/hr.</strong> Small professional offices (1–5 staff) cost $150–$290 per visit. Medical centres and larger offices (6–20 staff) run $220–$430 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Caringbah site assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Office Cleaning in Caringbah</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Caringbah serves as the commercial anchor of the Sutherland Shire — the geographic and business hub between Cronulla to the east, Miranda to the north and Sutherland to the west. Willarong Road and President Avenue form the core of the commercial precinct, with a strong mix of medical centres, GP bulk-billing clinics, real estate agencies, financial planning offices, accounting firms and specialist retailers. The area's commercial density has increased significantly with several new commercial developments along the Kingsway and the President Avenue frontage.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Pro Clean Corp has long-standing relationships with Caringbah businesses across multiple sectors. Medical centres here typically serve the entire Shire catchment and see high patient volumes — our medical cleaning protocols are calibrated for this. Real estate agencies serving the competitive Shire market need pristine front-of-office presentation at all times. We deliver consistent, reliable cleaning for all of these business types, with a dedicated team assigned to each Caringbah client for continuity and familiarity.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Caringbah Office Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Office Size</th><th className="p-4 text-left">Typical Business</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (1–5 staff)</td><td className="p-4 text-gray-600">Real estate agency, accountant, solicitor</td><td className="p-4 text-greenprimary font-bold">$150–$290</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (6–20 staff)</td><td className="p-4 text-gray-600">Medical centre, financial planning group</td><td className="p-4 text-greenprimary font-bold">$220–$430</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (21–50 staff)</td><td className="p-4 text-gray-600">Large clinic, multi-tenancy office floor</td><td className="p-4 text-greenprimary font-bold">$380–$650</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or casual cleaning</td><td className="p-4 text-greenprimary font-bold">From $38/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Workstation & desk sanitisation","Consultation room cleaning","Medical-grade options available","Kitchen & breakroom hygiene","Bathroom disinfection & restocking","Floor vacuuming & mopping","Bin emptying & waste removal","Reception & waiting area cleaning","Glass & window cleaning","High-touch surface disinfection"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Caringbah Businesses Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Sutherland Shire specialists</li>
                  <li>• Medical-grade options available</li>
                  <li>• Consistent assigned team</li>
                  <li>• Police-checked, insured staff</li>
                  <li>• After-hours & early morning cleans</li>
                  <li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free site assessment for Caringbah offices.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Office Cleaning Caringbah</h3>
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
              {[{name:"Miranda",href:"/commercial-cleaning-miranda"},{name:"Sutherland",href:"/commercial-cleaning-sutherland"},{name:"Cronulla",href:"/commercial-cleaning-cronulla"},{name:"Kirrawee",href:"/commercial-cleaning-kirrawee"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready for a Cleaner Caringbah Office?</h3>
            <p className="text-xl mb-6 text-gray-100">Get a free, no-obligation quote for your Caringbah business today.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
