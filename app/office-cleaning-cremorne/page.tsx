import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Office Cleaning Cremorne | From $38/hr | Pro Clean Corp",
  description: "Professional office cleaning in Cremorne NSW 2090. Serving law firms, cosmetic clinics, financial planners and real estate agencies on Military Road. From $38/hr.",
  keywords: "office cleaning Cremorne, office cleaners Cremorne, commercial cleaning Cremorne, professional office cleaning Cremorne NSW 2090, Military Road office cleaning",
  openGraph: {
    title: "Office Cleaning Cremorne | From $38/hr | Pro Clean Corp",
    description: "Office cleaning Cremorne from $38/hr. Serving law firms, cosmetic clinics and real estate offices on Military Road NSW 2.",
    url: "/office-cleaning-cremorne",
    type: "website",
    images: [{ url: "/meta.png", alt: "Office Cleaning Cremorne" }]
  },
  alternates: { canonical: "/office-cleaning-cremorne" }
};

const faqs = [
  {
    question: "How much does office cleaning cost in Cremorne?",
    answer: "Office cleaning in Cremorne starts at $38/hr. A small professional office (1–5 staff) on Military Road typically costs $150–$290 per visit. Medium offices for financial planners or law firms with 6–20 staff run $220–$430 per visit. We provide free site assessments for all Cremorne businesses."
  },
  {
    question: "Can you clean our Cremorne cosmetic clinic after patient hours?",
    answer: "Yes. We understand cosmetic clinics and allied health practices on Military Road require strict after-hours cleaning to maintain sterile environments. Our team works evenings and early mornings so your clinic is spotless before the first patient appointment."
  },
  {
    question: "Do you service the small boutique offices along Cremorne's residential streets?",
    answer: "Absolutely. Many Cremorne businesses operate from converted terrace offices on streets like Spofforth Street and Parraween Street. We tailor our service to compact layouts, ensuring thoroughness without disruption to neighbouring residents."
  },
  {
    question: "What is included in a standard Cremorne office clean?",
    answer: "Our standard service covers workstation and desk sanitisation, meeting room cleaning, kitchen and breakroom hygiene, bathroom disinfection, vacuuming and mopping all floor surfaces, bin emptying, and glass and surface wiping. We also offer add-ons like carpet steam cleaning and window cleaning."
  },
  {
    question: "How quickly can Pro Clean Corp start cleaning our Cremorne office?",
    answer: "We can typically commence service within 48–72 hours of a signed agreement for Cremorne offices. For urgent requests — such as post-event or pre-inspection cleans — we can often mobilise within 24 hours. Call 1300 494 983 to confirm availability."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Cremorne"
        serviceDescription="Professional office cleaning services in Cremorne NSW 2090. Serving law firms, cosmetic clinics, financial planners and real estate agencies on Military Road and surrounding streets."
        serviceUrl="/office-cleaning-cremorne"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={["Desk & workstation sanitisation", "Bathroom disinfection", "Kitchen cleaning", "Floor vacuuming & mopping", "Window & glass cleaning", "Waste removal"]}
        faqs={faqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Office Cleaning Cremorne
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Reliable office cleaning for Cremorne's professional enclave on the Lower North Shore. Trusted by law firms, cosmetic clinics, financial planners and real estate agencies on Military Road.
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
                alt="Office Cleaning Cremorne"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLUF Pricing Box */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium">
              <strong>Office cleaning in Cremorne starts at $38/hr.</strong> Small offices on Military Road (1–5 staff) typically cost $150–$290 per visit. Medium professional suites for law firms or financial planners (6–20 staff) run $220–$430 per visit. All quotes are obligation-free — call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> or <a href="/contact" className="text-blueprimary font-bold">request online</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Office Cleaning in Cremorne</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Cremorne is one of Sydney's most polished Lower North Shore professional precincts. The Military Road corridor between Neutral Bay and Mosman hosts a dense concentration of cosmetic clinics, boutique law firms, financial planning practices, real estate agencies and specialist medical suites. These businesses demand a cleaning standard that reflects their premium client-facing brand — spotless waiting areas, sanitised consultation rooms, and consistently fresh common spaces.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Pro Clean Corp has been servicing Cremorne offices for years, understanding the unique character of the suburb's commercial mix. From compact single-tenancy suites tucked above the Military Road shopfronts, to multi-level professional offices near Cremorne Junction, we tailor every clean to the layout and foot traffic of the specific business. Our cleaners are police-checked, insured, and trained to operate discreetly in client-sensitive environments.
              </p>

              {/* Pricing Table */}
              <h3 className="text-2xl font-bold text-darkblue mb-4">Cremorne Office Cleaning Prices</h3>
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
                      <td className="p-4 text-gray-600">Boutique law firm, financial planner</td>
                      <td className="p-4 text-greenprimary font-bold">$150–$290</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="p-4 font-medium">Medium (6–20 staff)</td>
                      <td className="p-4 text-gray-600">Real estate agency, medical suite</td>
                      <td className="p-4 text-greenprimary font-bold">$220–$430</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-medium">Large (21–50 staff)</td>
                      <td className="p-4 text-gray-600">Corporate office, multi-tenancy floor</td>
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

              {/* Service Checklist */}
              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Workstation & desk sanitisation",
                  "Meeting room cleaning & glass wiping",
                  "Kitchen & breakroom hygiene",
                  "Bathroom disinfection & restocking",
                  "Vacuuming carpets & hard floors",
                  "Mopping tiled & timber areas",
                  "Bin emptying & waste removal",
                  "Reception & lobby detailing",
                  "Internal window & glass cleaning",
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
                <h4 className="font-bold text-darkblue mb-3">Why Cremorne Businesses Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Police-checked, insured cleaners</li>
                  <li>• After-hours & weekend availability</li>
                  <li>• Client-sensitive, discreet service</li>
                  <li>• Consistent assigned cleaning team</li>
                  <li>• Eco-friendly product options</li>
                  <li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free site assessment for all Cremorne offices.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Office Cleaning Cremorne</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Nearby Areas */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-darkblue mb-4">Also Serving Nearby Suburbs</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Neutral Bay", href: "/office-cleaning-neutral-bay" },
                { name: "Mosman", href: "/commercial-cleaning-mosman" },
                { name: "North Sydney", href: "/office-cleaning-north-sydney" },
                { name: "Kirribilli", href: "/commercial-cleaning-kirribilli" },
              ].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">
                  {area.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready for a Cleaner Cremorne Office?</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for a free, no-obligation quote tailored to your Cremorne business.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">
              Call 1300 494 983
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
