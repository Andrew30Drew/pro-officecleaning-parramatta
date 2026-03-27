import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Gym Cleaning Alexandria | From $45/hr | Pro Clean Corp",
  description: "Gym cleaning Alexandria from $45/hr. CrossFit boxes, boxing gyms and boutique fitness studios on Botany Rd and Mitchell Rd. Free quote.",
  keywords: "gym cleaning Alexandria, CrossFit cleaning Alexandria, boxing gym cleaning Alexandria, fitness studio cleaning Alexandria NSW 2015, Botany Road gym cleaning, Mitchell Road gym cleaning",
  openGraph: {
    title: "Gym Cleaning Alexandria | From $45/hr | Pro Clean Corp",
    description: "Gym cleaning Alexandria from $45/hr. CrossFit boxes, boxing gyms and boutique fitness studios on Botany Rd and Mitchell .",
    url: "/gym-cleaning-alexandria",
    type: "website",
    images: [{ url: "/meta.png", alt: "Gym Cleaning Alexandria" }]
  },
  alternates: { canonical: "/gym-cleaning-alexandria" }
};

const faqs = [
  {
    question: "How much does gym cleaning cost in Alexandria?",
    answer: "Gym cleaning in Alexandria starts at $45/hr. A small boutique CrossFit box or boxing gym (up to 200sqm) typically costs $200–$350 per visit. A medium functional fitness or dance studio (200–600sqm) in a converted Alexandria warehouse runs $300–$550 per visit. Large multi-discipline fitness centres cost $400–$800 per visit. Free on-site assessments available."
  },
  {
    question: "Can you clean CrossFit boxes and functional fitness studios in Alexandria?",
    answer: "Yes. Alexandria is home to some of Sydney's most respected CrossFit boxes and functional fitness studios — many operating from the suburb's characteristic converted industrial spaces on Mitchell Road, O'Riordan Street and the Botany Road corridor. We understand the specific cleaning requirements: chalk dust from barbells, rubber peg board surfaces, pull-up rig upholstery and the wide-open floor spaces used for WOD programming."
  },
  {
    question: "How do you handle chalk dust in Alexandria's weightlifting and CrossFit gyms?",
    answer: "Chalk is a significant cleaning challenge in weightlifting and functional fitness gyms. We use HEPA-filter vacuums to capture chalk particulate from floors and equipment before wet mopping, which prevents chalk from being spread and ground into rubber flooring. We also wipe down all barbell knurling, plates and collars to remove chalk build-up."
  },
  {
    question: "Can you clean dance studios and performing arts spaces in Alexandria?",
    answer: "Yes. Alexandria's warehouse district hosts several dance studios and performing arts spaces alongside the fitness studios. We use specialist floor cleaning products appropriate for sprung hardwood and vinyl Marley flooring — avoiding products that leave residue that can affect dancers' footing."
  },
  {
    question: "Do you clean Alexandria gyms during split cleaning windows between classes?",
    answer: "Yes. Many boutique Alexandria studios run back-to-back class timetables with limited windows for cleaning between sessions. We can provide rapid-clean services between classes — typically 20–30 minute targeted sanitation of high-touch surfaces, mats and bathrooms — as well as comprehensive end-of-day deep cleans."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Alexandria"
        serviceDescription="Professional gym and fitness centre cleaning in Alexandria NSW 2015. CrossFit boxes, boxing gyms, functional fitness studios and dance studios in converted warehouse spaces on Botany Road, O'Riordan Street and Mitchell Road."
        serviceUrl="/gym-cleaning-alexandria"
        serviceType="Gym Cleaning"
        price="$$"
        additionalServices={['CrossFit box cleaning", "Boxing gym cleaning", "Chalk dust removal", "Rubber floor scrubbing", "Dance studio floor cleaning", "Change room disinfection']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Gym Cleaning Alexandria</h1>
              <p className="text-xl mb-8 text-gray-100">Professional gym cleaning for Alexandria's boutique fitness hotspot. CrossFit boxes, boxing gyms, functional fitness studios and dance studios in the suburb's iconic converted warehouse spaces on Botany Road, O'Riordan Street and Mitchell Road.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Gym Cleaning Alexandria" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Gym cleaning in Alexandria starts at $45/hr.</strong> Small CrossFit boxes and boxing gyms (up to 200sqm) cost $200–$350 per visit. Medium functional fitness studios in warehouse spaces (200–600sqm) run $300–$550 per visit. Large multi-discipline centres cost $400–$800 per visit. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free Alexandria gym assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Gym Cleaning in Alexandria</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Alexandria's character as an industrial suburb transitioning to a creative and fitness precinct has produced one of Sydney's most distinctive gym landscapes. The suburb's double-brick warehouses — many on Mitchell Road, O'Riordan Street and the Botany Road industrial strip — have been converted into high-ceilinged, raw-aesthetic fitness facilities that host CrossFit boxes, functional fitness programmes, boxing and MMA gyms, dance studios and specialist strength training facilities. These spaces are beloved by serious athletes and fitness enthusiasts from across the inner south.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Warehouse gym environments present specific cleaning challenges that standard gym cleaners are not equipped to handle: chalk dust from Olympic lifting programmes, rubber crumb from flooring that migrates into corners, heavy sweat volumes on open-floor workout spaces, and industrial-height ceilings that require pole systems to reach cobwebs and dust accumulation. Pro Clean Corp's Alexandria team is trained for all of these — and we understand the tight inter-class cleaning windows that boutique gyms run on.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Alexandria Gym Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Facility Size</th><th className="p-4 text-left">Typical Facility</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small (up to 200sqm)</td><td className="p-4 text-gray-600">Boutique CrossFit box, boxing gym</td><td className="p-4 text-greenprimary font-bold">$200–$350</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium (200–600sqm)</td><td className="p-4 text-gray-600">Functional fitness studio, dance space</td><td className="p-4 text-greenprimary font-bold">$300–$550</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large (600sqm+)</td><td className="p-4 text-gray-600">Multi-discipline warehouse gym</td><td className="p-4 text-greenprimary font-bold">$400–$800</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or between-class cleaning</td><td className="p-4 text-greenprimary font-bold">From $45/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {['Barbell, plate & rack sanitisation","Chalk dust HEPA vacuuming","Rubber floor scrubbing & disinfection","Boxing ring & bag wipe-down","Change room & shower disinfection","Mat cleaning & deodourising","Bathroom disinfection & restocking","Reception area cleaning","Dance floor specialist cleaning","Industrial-height cobweb removal'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Alexandria Gyms Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• CrossFit & warehouse gym specialists</li>
                  <li>• Chalk dust HEPA removal</li>
                  <li>• Between-class rapid cleans</li>
                  <li>• Dance floor safe products</li>
                  <li>• Police-checked, insured staff</li>
                  <li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Quote</h4>
                <p className="text-sm mb-4">Free assessment for Alexandria gyms.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Gym Cleaning Alexandria</h3>
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
              {[{name:"Waterloo",href:"/commercial-cleaning-waterloo"},{name:"Zetland",href:"/commercial-cleaning-zetland"},{name:"Mascot",href:"/commercial-cleaning-mascot"},{name:"Erskineville",href:"/commercial-cleaning-erskineville"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Keep Your Alexandria Gym Spotless</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for professional gym cleaning in Alexandria.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
