import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Office Cleaning Bondi | From $38/hr | Pro Clean Corp",
  description: "Office cleaning Bondi from $38/hr. Serving digital agencies, wellness brands and allied health offices on Hall St and Campbell Parade. Free quote.",
  keywords: "office cleaning Bondi, office cleaners Bondi Beach, commercial cleaning Bondi NSW 2026, Hall Street office cleaning, Campbell Parade office cleaning",
  openGraph: {
    title: "Office Cleaning Bondi | From $38/hr | Pro Clean Corp",
    description: "Office cleaning Bondi from $38/hr. Serving digital agencies, wellness brands and allied health offices on Hall St and Ca.",
    url: "/office-cleaning-bondi",
    type: "website",
    images: [{ url: "/meta.png", alt: "Office Cleaning Bondi" }]
  },
  alternates: { canonical: "/office-cleaning-bondi" }
};

const faqs = [
  {
    question: "How much does office cleaning cost in Bondi?",
    answer: "Office cleaning in Bondi starts at $38/hr. Small creative offices and health practices (1–5 staff) on Hall Street or Gould Street typically cost $150–$290 per visit. Medium-sized digital agencies or allied health suites (6–20 staff) run $220–$430 per visit. We offer free on-site quotes for all Bondi businesses."
  },
  {
    question: "Can you clean our Bondi wellness studio or allied health practice?",
    answer: "Yes. We regularly service yoga studios, physiotherapy clinics, naturopath offices and wellness centres in the Bondi area. We use low-tox, fragrance-free products suitable for health-focused environments, and can schedule cleans outside of session hours."
  },
  {
    question: "Do you clean co-working spaces in Bondi?",
    answer: "Absolutely. Bondi's creative economy has produced a number of boutique co-working spaces and shared studios, particularly around the Campbell Parade and Gould Street area. We handle high-footfall shared spaces with daily or weekly cleaning plans."
  },
  {
    question: "Can you service our surf brand or creative agency office near the beach?",
    answer: "Yes. We understand that Bondi offices — often close to the beach — deal with sand, salt and humidity that standard cleaning routines don't address. We include targeted floor cleaning for sand ingress and treat surfaces prone to coastal grime."
  },
  {
    question: "Do you offer after-hours cleaning for Bondi offices?",
    answer: "Yes. Most of our Bondi clients choose after-hours or early morning cleans to avoid disrupting their team or clients during business hours. We operate 7 days a week with flexible scheduling to match your business rhythm."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Bondi"
        serviceDescription="Professional office cleaning in Bondi NSW 2026. Serving digital agencies, wellness brands, surf industry offices and allied health on Hall Street, Campbell Parade and Gould Street."
        serviceUrl="/office-cleaning-bondi"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={["Workstation sanitisation", "Bathroom disinfection", "Kitchen cleaning", "Floor vacuuming & mopping", "Sand & coastal grime removal", "Waste removal"]}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Cleaning Bondi
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional office cleaning for Bondi's beachside creative and health economy. Trusted by digital agencies, wellness brands, surf industry businesses and allied health practices on Hall Street, Campbell Parade and Gould Street.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">
                  Call 1300 494 983
                </a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">
                  Get a Free Quote
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/office.webp"
                alt="Office Cleaning Bondi"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium">
              <strong>Office cleaning in Bondi starts at $38/hr.</strong> Small offices and health studios (1–5 staff) cost $150–$290 per visit. Medium agencies and allied health suites (6–20 staff) run $220–$430 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Bondi site assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Office Cleaning in Bondi</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Bondi's commercial character is unlike any other Sydney suburb. Sandwiched between the iconic beach and the creative energy of Bondi Junction, the area's offices are populated by surf industry brands, digital agencies, allied health practitioners, wellness studios and independent consultants. Hall Street is the spine of Bondi's health economy — lined with naturopaths, physiotherapists, nutritionists and yoga teachers who all need their practices kept to a clinical standard. Campbell Parade and Gould Street house a mix of creative agencies and boutique operators who want their workspace to reflect their brand.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Cleaning a Bondi office comes with a coastal consideration most mainland cleaners overlook: sand. It drifts in on shoes, towels, and through gaps in doors — and it grinds into carpet and timber floors if not managed properly. Pro Clean Corp's Bondi teams use microfibre systems and floor care routines specifically designed for high-sand environments. We also understand the health-conscious expectations of Bondi businesses — we offer low-tox and fragrance-free product ranges for wellness-focused practices on request.
              </p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Bondi Office Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-blueprimary text-white">
                      <th className="p-4 text-left">Office Size</th>
                      <th className="p-4 text-left">Typical Business</th>
                      <th className="p-4 text-left">Price Per Visit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-medium">Small (1–5 staff)</td>
                      <td className="p-4 text-gray-600">Allied health studio, creative freelancer</td>
                      <td className="p-4 text-greenprimary font-bold">$150–$290</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 font-medium">Medium (6–20 staff)</td>
                      <td className="p-4 text-gray-600">Digital agency, wellness brand, surf co.</td>
                      <td className="p-4 text-greenprimary font-bold">$220–$430</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-medium">Large (21–50 staff)</td>
                      <td className="p-4 text-gray-600">Multi-room health centre, agency floor</td>
                      <td className="p-4 text-greenprimary font-bold">$380–$650</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium">Hourly Rate</td>
                      <td className="p-4 text-gray-600">Ad hoc or casual cleaning</td>
                      <td className="p-4 text-greenprimary font-bold">From $38/hr</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Workstation & desk sanitisation",
                  "Treatment room & studio cleaning",
                  "Kitchen & breakroom hygiene",
                  "Bathroom disinfection & restocking",
                  "Vacuuming & sand removal from floors",
                  "Mopping hard floors",
                  "Bin emptying & recycling",
                  "Reception & lobby detailing",
                  "Low-tox products on request",
                  "High-touch surface disinfection"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Bondi Businesses Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Coastal sand removal expertise</li>
                  <li>• Low-tox product options</li>
                  <li>• After-hours & weekend availability</li>
                  <li>• Police-checked, insured staff</li>
                  <li>• No lock-in contracts</li>
                  <li>• Consistent assigned team</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free site assessment for all Bondi offices.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Office Cleaning Bondi</h3>
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
              {[
                { name: "Bondi Junction", href: "/commercial-cleaning-bondi-junction" },
                { name: "Waverley", href: "/commercial-cleaning-waverley" },
                { name: "Bronte", href: "/commercial-cleaning-bronte" },
                { name: "Coogee", href: "/commercial-cleaning-coogee" },
              ].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">
                  {area.name}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready for a Cleaner Bondi Office?</h3>
            <p className="text-xl mb-6 text-gray-100">Get a free quote tailored to your Bondi business today.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">
              Call 1300 494 983
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
