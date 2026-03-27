import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Gym Cleaning Auburn | From $45/hr | Pro Clean Corp",
  description: "Gym cleaning Auburn from $45/hr. Serving martial arts gyms, MMA centres and commercial fitness facilities in NSW 2144. Free quote.",
  keywords: "gym cleaning Auburn, martial arts gym cleaning Auburn, boxing gym cleaning Auburn, MMA gym cleaning Auburn NSW 2144, commercial gym cleaning Auburn, Auburn Road gym cleaning",
  openGraph: {
    title: "Gym Cleaning Auburn | From $45/hr | Pro Clean Corp",
    description: "Gym cleaning Auburn from $45/hr. Serving martial arts gyms, MMA centres and commercial fitness facilities in NSW 2144. F.",
    url: "/gym-cleaning-auburn",
    type: "website",
    images: [{ url: "/meta.png", alt: "Gym Cleaning Auburn" }]
  },
  alternates: { canonical: "/gym-cleaning-auburn" }
};

const faqs = [
  {
    question: "How much does gym cleaning cost in Auburn?",
    answer: "Gym cleaning in Auburn starts at $45/hr. A small martial arts dojo or boxing gym (up to 200sqm) on Auburn Road or Rawson Street typically costs $200–$350 per visit. A medium-sized commercial fitness centre (200–600sqm) serving Auburn's high-membership community runs $300–$550 per visit. Large multi-sport facilities cost $400–$800 per visit."
  },
  {
    question: "Do you clean martial arts and wrestling gyms in Auburn?",
    answer: "Yes. Auburn has one of Western Sydney's strongest martial arts gym communities — with wrestling clubs, boxing gyms, muay thai dojos and MMA facilities serving a diverse multicultural membership. These gyms require specialist mat cleaning and disinfection. We use pH-neutral disinfectants safe for tatami mats, vinyl mats and EVA foam tiles, with enzyme-based solutions to eliminate odour from sweat-saturated surfaces."
  },
  {
    question: "How do you manage high-membership volume gyms in Auburn?",
    answer: "High-membership gyms in Auburn — particularly the large commercial fitness centres on Auburn Road — can see 400–800 members per day through their doors. This demands a cleaning approach that treats every surface as potentially high-touch: equipment handles, benches, shower floors, locker doors and change room floors are all cleaned with TGA-approved hospital-grade disinfectants."
  },
  {
    question: "Can you clean community sport halls and multi-purpose courts in Auburn?",
    answer: "Yes. Auburn has several community sport halls and multi-purpose court facilities used for basketball, volleyball and indoor soccer alongside martial arts training. We clean court surfaces, spectator areas, change rooms and canteen facilities for community sport operators throughout the Auburn LGA."
  },
  {
    question: "Do you service Auburn gyms during Ramadan high-traffic periods?",
    answer: "Yes. Auburn's large Muslim community means gyms experience significant usage pattern changes during Ramadan, with early morning and late evening sessions seeing very high attendance. We can adjust cleaning schedules during Ramadan to accommodate changed peak times and ensure facilities are clean before dawn training and after late-night iftar sessions."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Auburn"
        serviceDescription="Professional gym cleaning in Auburn NSW 2144. Serving martial arts gyms, MMA facilities, boxing gyms and high-volume commercial fitness centres on Auburn Road and Rawson Street."
        serviceUrl="/gym-cleaning-auburn"
        serviceType="Gym Cleaning"
        price="$$"
        additionalServices={["Martial arts mat cleaning", "Boxing ring & bag sanitisation", "MMA gym cleaning", "High-volume gym cleaning", "Change room disinfection", "Community sport hall cleaning"]}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Gym Cleaning Auburn</h1>
              <p className="text-xl mb-8 text-gray-100">Professional gym cleaning for Auburn's multicultural fitness community. Serving martial arts dojos, boxing gyms, MMA facilities and high-membership commercial fitness centres on Auburn Road and Rawson Street.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Gym Cleaning Auburn" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Gym cleaning in Auburn starts at $45/hr.</strong> Small martial arts and boxing gyms (up to 200sqm) cost $200–$350 per visit. Medium commercial gyms (200–600sqm) run $300–$550 per visit. Large multi-sport facilities cost $400–$800 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Auburn gym assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Gym Cleaning in Auburn</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Auburn's gym landscape reflects the suburb's exceptional cultural diversity. Auburn Road and Rawson Street host a range of fitness facilities serving Western Sydney's multicultural communities — Turkish wrestling clubs, Lebanese boxing gyms, Pacific Islander weightlifting facilities, and general commercial fitness centres with large Arabic, Korean and South Asian memberships. The suburb is one of Western Sydney's most active fitness communities, with gym usage that often extends into late evening and very early morning across multiple cultural training traditions.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Martial arts gyms and wrestling facilities in Auburn have particularly demanding hygiene requirements. Tatami mats, EVA foam training surfaces and vinyl wrestling mats absorb sweat and can harbour bacterial and fungal growth if not properly disinfected. Pro Clean Corp uses enzyme-based disinfectants that break down organic matter at the microbial level — not just masking odour but eliminating the bacteria that cause mat-borne skin infections like ringworm and staph, which are real concerns in high-contact training environments.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Auburn Gym Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Facility Size</th><th className="p-4 text-left">Typical Facility</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (up to 200sqm)</td><td className="p-4 text-gray-600">Martial arts dojo, boxing gym</td><td className="p-4 text-greenprimary font-bold">$200–$350</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (200–600sqm)</td><td className="p-4 text-gray-600">Commercial fitness centre, MMA gym</td><td className="p-4 text-greenprimary font-bold">$300–$550</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (600sqm+)</td><td className="p-4 text-gray-600">Community sport hall, multi-sport gym</td><td className="p-4 text-greenprimary font-bold">$400–$800</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or supplementary cleaning</td><td className="p-4 text-greenprimary font-bold">From $45/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Tatami & EVA mat disinfection","Boxing ring canvas cleaning","Equipment wipe-down & sanitisation","Change room & shower disinfection","Rubber floor scrubbing","Locker room deodourising","Bathroom disinfection & restocking","Reception area cleaning","Heavy bag & pad sanitisation","Enzyme-based odour elimination"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Auburn Gyms Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Martial arts mat specialists</li>
                  <li>• Enzyme-based odour elimination</li>
                  <li>• High-volume member experience</li>
                  <li>• Flexible cultural community scheduling</li>
                  <li>• Police-checked, insured staff</li>
                  <li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free assessment for Auburn gyms.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Gym Cleaning Auburn</h3>
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
              {[{name:"Berala",href:"/commercial-cleaning-berala"},{name:"Lidcombe",href:"/commercial-cleaning-lidcombe"},{name:"Granville",href:"/commercial-cleaning-granville"},{name:"Parramatta",href:"/office-cleaning-parramatta"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Keep Your Auburn Gym Clean & Safe</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for professional gym cleaning in Auburn.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
