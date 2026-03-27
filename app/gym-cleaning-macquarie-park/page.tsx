import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Gym Cleaning Macquarie Park | From $45/hr | Pro Clean Corp",
  description: "Gym cleaning Macquarie Park from $45/hr. Corporate wellness centres and Macquarie University campus fitness facilities NSW 2113. Free quote.",
  keywords: "gym cleaning Macquarie Park, corporate gym cleaning Macquarie Park, fitness centre cleaning Macquarie Park NSW 2113, Waterloo Road gym cleaning, Macquarie University gym cleaning",
  openGraph: {
    title: "Gym Cleaning Macquarie Park | From $45/hr | Pro Clean Corp",
    description: "Gym cleaning Macquarie Park from $45/hr. Corporate wellness centres and Macquarie University campus fitness facilities N.",
    url: "/gym-cleaning-macquarie-park",
    type: "website",
    images: [{ url: "/meta.png", alt: "Gym Cleaning Macquarie Park" }]
  },
  alternates: { canonical: "/gym-cleaning-macquarie-park" }
};

const faqs = [
  {
    question: "How much does gym cleaning cost in Macquarie Park?",
    answer: "Gym cleaning in Macquarie Park starts at $45/hr. A small in-building corporate wellness centre (up to 200sqm) in a Waterloo Road office tower typically costs $200–$350 per visit. A medium corporate campus gym facility (200–600sqm) runs $300–$550 per visit. Large university-adjacent or multi-facility campus wellness centres cost $400–$800 per visit."
  },
  {
    question: "Can you clean in-building corporate gym facilities in Macquarie Business Park?",
    answer: "Yes. Macquarie Business Park on Waterloo Road is one of Sydney's largest corporate campus precincts — with dedicated gym and wellness facilities provided for tenants in buildings leased by major corporations including multinationals and professional services firms. These facilities require early morning cleaning (before 6am) to be ready for the pre-work fitness crowd and again after-hours for evening users."
  },
  {
    question: "Do you service Macquarie University gym and fitness facilities?",
    answer: "We service gym and fitness facilities in commercial and corporate buildings adjacent to the Macquarie University campus. For facilities directly managed by the university, we can provide a competitive quote. The surrounding suburb has significant student-facing gym operators who we regularly clean for."
  },
  {
    question: "What cleaning schedule works best for Macquarie Park corporate wellness centres?",
    answer: "Most Macquarie Park corporate gyms benefit from a morning clean (5am–7am before peak usage), a midday touchup and an after-hours deep clean. We can structure a multi-visit daily programme for high-usage corporate wellness facilities, or a single comprehensive clean for moderate-traffic in-building gyms."
  },
  {
    question: "Can you clean pilates and yoga studios near Macquarie Park?",
    answer: "Yes. There are a number of boutique pilates reformer studios and yoga spaces in the North Ryde and Meadowbank area immediately adjacent to Macquarie Park. We offer specialist mat and floor cleaning for these spaces, including low-fragrance product options appropriate for yoga environments."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Macquarie Park"
        serviceDescription="Professional gym and fitness centre cleaning in Macquarie Park NSW 2113. Serving corporate campus wellness centres, university-adjacent fitness facilities and in-building gyms on Waterloo Road."
        serviceUrl="/gym-cleaning-macquarie-park"
        serviceType="Gym Cleaning"
        price="$$"
        additionalServices={["Corporate wellness cleaning", "Equipment sanitisation", "Change room disinfection", "Rubber floor scrubbing", "Mirror cleaning", "Early morning pre-work cleaning"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Gym Cleaning Macquarie Park</h1>
              <p className="text-xl mb-8 text-gray-100">Professional gym and fitness centre cleaning in Macquarie Park. Serving corporate campus wellness centres, university-adjacent fitness facilities and in-building gyms for the thousands of corporate workers and students in one of Northern Sydney's largest business park precincts.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Gym Cleaning Macquarie Park" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Gym cleaning in Macquarie Park starts at $45/hr.</strong> Small in-building corporate gym facilities (up to 200sqm) cost $200–$350 per visit. Medium campus wellness centres (200–600sqm) run $300–$550 per visit. Large campus facilities cost $400–$800 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Macquarie Park gym assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Gym Cleaning in Macquarie Park</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Macquarie Park is Sydney's northern business district anchor — home to Macquarie Business Park on Waterloo Road, one of the largest suburban corporate campuses in Australia. The precinct houses Australian and Asia-Pacific headquarters for a raft of global corporations including technology, pharmaceutical and financial services companies. To attract and retain top talent in this competitive employment market, corporate tenants invest heavily in on-site wellness amenities — gyms, yoga studios, change rooms and wellness spaces are standard in most major Macquarie Park buildings.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">These corporate wellness facilities have unique cleaning requirements: they are used exclusively by employees who expect a very high hygiene standard, they often feed into security-controlled buildings that require pre-authorised access arrangements, and they need to be cleaned during the narrow windows between early morning corporate sessions and the start of the working day. Pro Clean Corp operates early-morning cleaning windows specifically for Macquarie Park and Macquarie University-adjacent facilities.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Macquarie Park Gym Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Facility Size</th><th className="p-4 text-left">Typical Facility</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (up to 200sqm)</td><td className="p-4 text-gray-600">In-building corporate gym, small wellness space</td><td className="p-4 text-greenprimary font-bold">$200–$350</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (200–600sqm)</td><td className="p-4 text-gray-600">Corporate campus wellness centre</td><td className="p-4 text-greenprimary font-bold">$300–$550</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (600sqm+)</td><td className="p-4 text-gray-600">Multi-facility campus gym complex</td><td className="p-4 text-greenprimary font-bold">$400–$800</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or supplementary cleaning</td><td className="p-4 text-greenprimary font-bold">From $45/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Equipment wipe-down & sanitisation","Corporate wellness centre cleaning","Change room & shower disinfection","Rubber floor scrubbing & mopping","Mirror & glass cleaning","Locker room maintenance","Bathroom disinfection & restocking","Reception & entry cleaning","HVAC vent surface dusting","Early morning cleaning windows"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Macquarie Park Gyms Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Corporate campus experience</li><li>• Pre-work 5am cleaning windows</li><li>• Security-access building experience</li><li>• Equipment-safe disinfectants</li><li>• Police-checked, insured staff</li><li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free assessment for Macquarie Park gyms.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Gym Cleaning Macquarie Park</h3>
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
              {[{name:"North Ryde",href:"/commercial-cleaning-north-ryde"},{name:"Meadowbank",href:"/commercial-cleaning-meadowbank"},{name:"Epping",href:"/commercial-cleaning-epping"},{name:"Lane Cove",href:"/commercial-cleaning-lane-cove"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Keep Your Macquarie Park Gym at Peak Condition</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for professional gym cleaning in Macquarie Park.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
