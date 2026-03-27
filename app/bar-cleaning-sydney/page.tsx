import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Bar Cleaning Sydney | From $42/hr | Pro Clean Corp",
  description: "Bar cleaning Sydney from $42/hr. Late-night and early morning cleans for pubs, clubs and bars on Oxford St and King St. Free quote.",
  keywords: "bar cleaning Sydney, pub cleaning Sydney, hospitality cleaning Sydney, nightclub cleaning Sydney, Oxford Street bar cleaning, Surry Hills bar cleaning, Darling Harbour cleaning, The Rocks cleaning Sydney",
  openGraph: {
    title: "Bar Cleaning Sydney | From $42/hr | Pro Clean Corp",
    description: "Bar cleaning Sydney from $42/hr. Late-night and early morning cleans for pubs, clubs and bars on Oxford St and King St. Free quote.",
    url: "/bar-cleaning-sydney",
    type: "website",
    images: [{ url: "/meta.png", alt: "Bar Cleaning Sydney" }]
  },
  alternates: { canonical: "/bar-cleaning-sydney" }
};

const faqs = [
  {
    question: "How much does bar cleaning cost in Sydney?",
    answer: "Bar cleaning in Sydney starts at $42/hr. A small bar or pub (up to 100sqm bar area) costs from $180 per visit. A medium-sized venue (100–300sqm) on Oxford Street, Crown Street or King Street typically runs $250–$450 per visit. Larger nightclubs and multi-level venues are quoted individually based on total area and specific cleaning requirements. Late-night and early morning turnarounds are available for all Sydney hospitality venues."
  },
  {
    question: "Can you clean Sydney bars overnight after closing?",
    answer: "Yes. Overnight and early morning cleaning is our most common bar cleaning schedule in Sydney. Most bars and pubs close between midnight and 4am — we send our bar cleaning teams in immediately after close to ensure the venue is ready for the next day's trade. Our teams are experienced in working quietly in residential-adjacent hospitality precincts like Surry Hills and Newtown, and in the tighter access constraints of the CBD and The Rocks."
  },
  {
    question: "Do you clean venues on Oxford Street, Crown Street and King Street Newtown?",
    answer: "Yes. Oxford Street (Darlinghurst and Paddington), Crown Street in Surry Hills and King Street in Newtown are Sydney's most active bar and hospitality strips — and three of our most serviced areas. We understand the specific challenges of each: Oxford Street's late-night LGBTQ+ venue concentration, Surry Hills' dense cocktail bar and restaurant scene, and Newtown's pub culture along the King Street commercial strip."
  },
  {
    question: "Can you clean The Rocks and Darling Harbour bars and restaurants?",
    answer: "Yes. The Rocks and Darling Harbour are two of Sydney's highest-volume tourist hospitality precincts. Venues in these areas often trade 7 days a week with very high customer volumes, requiring daily cleaning with comprehensive protocols for beer spills, glass breakage and deep kitchen-adjacent cleaning. We coordinate access through the precinct management requirements for both areas."
  },
  {
    question: "What does a bar clean include?",
    answer: "A standard Sydney bar clean includes: full bar top and back-bar cleaning, floor scrubbing (including sticky beer-soaked areas), toilet and bathroom disinfection, glass washing area cleaning, keg cellar access area cleaning, booth and seating wipe-down, bin emptying and waste management, and kitchen-adjacent areas where applicable. We also offer carpet shampoo services for venues with carpet in lounge areas."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Bar Cleaning Sydney"
        serviceDescription="Professional bar and hospitality cleaning across Sydney. Serving bars, pubs, nightclubs and hospitality venues on Oxford Street, Newtown King Street, Surry Hills Crown Street, The Rocks and Darling Harbour with late-night and early morning turnaround cleans."
        serviceUrl="/bar-cleaning-sydney"
        serviceType="Bar Cleaning"
        price="$$"
        additionalServices={['Bar top & back-bar cleaning", "Floor scrubbing", "Bathroom disinfection", "Keg area cleaning", "Booth & seating cleaning", "Waste management']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Bar Cleaning Sydney</h1>
              <p className="text-xl mb-8 text-gray-100">Professional bar and hospitality cleaning across Sydney's most active entertainment precincts. Late-night and early morning turnarounds for bars, pubs and nightclubs on Oxford Street, Newtown, Surry Hills, The Rocks and Darling Harbour.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:1300494983" className="bg-white text-blueprimary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-center">Call 1300 494 983</a>
                <a href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition text-center">Get a Free Quote</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/commercial.webp" alt="Bar Cleaning Sydney" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl">
            <p className="text-lg text-gray-800 font-medium"><strong>Bar cleaning in Sydney starts at $42/hr.</strong> Small bars (up to 100sqm) cost from $180 per visit. Medium venues on Oxford Street, Crown Street or King Street (100–300sqm) run $250–$450 per visit. Late-night turnarounds available 7 days. Call <a href="tel:1300494983" className="text-blueprimary font-bold">1300 494 983</a> for a free bar assessment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-8">Bar & Hospitality Cleaning Across Sydney</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Sydney's bar and hospitality sector is one of the most demanding cleaning environments in the commercial sector. Venues on Oxford Street, Surry Hills' Crown Street, Newtown's King Street, The Rocks and Darling Harbour trade to very high volumes — often until 3am or 4am — leaving behind floors sticky with spilled beer, bathrooms under intense pressure, and bar surfaces covered in the residue of hundreds of drinks. The turnaround window between closing and the following morning's prep is often just 3–4 hours. Getting a thorough clean done in that window requires experienced teams with the right equipment.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">Pro Clean Corp's Sydney bar cleaning teams are built for hospitality hours. We work overnight, we work early morning, and we understand that showing up late or doing a substandard job directly affects your licence compliance, your health inspection record, and your reputation with customers who expect a clean venue. We work across all of Sydney's entertainment precincts — from the Oxford Street strip to Darling Harbour, from The Rocks tourist bars to the craft beer venues of Marrickville and the cocktail bars of Potts Point.</p>

              <h3 className="text-2xl font-bold text-darkblue mb-4">Sydney Bar Cleaning Prices</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden">
                  <thead><tr className="bg-blueprimary text-white"><th className="p-4 text-left">Venue Size</th><th className="p-4 text-left">Typical Venue</th><th className="p-4 text-left">Price Per Visit</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Small bar (up to 100sqm)</td><td className="p-4 text-gray-600">Laneway bar, small pub, wine bar</td><td className="p-4 text-greenprimary font-bold">From $180</td></tr>
                    <tr className="border-b border-gray-200 bg-white"><td className="p-4 font-medium">Medium venue (100–300sqm)</td><td className="p-4 text-gray-600">Pub, cocktail bar, beer garden venue</td><td className="p-4 text-greenprimary font-bold">$250–$450</td></tr>
                    <tr className="border-b border-gray-200"><td className="p-4 font-medium">Large venue (300sqm+)</td><td className="p-4 text-gray-600">Nightclub, large pub, multi-room venue</td><td className="p-4 text-greenprimary font-bold">From $400</td></tr>
                    <tr className="bg-white"><td className="p-4 font-medium">Hourly Rate</td><td className="p-4 text-gray-600">Ad hoc or supplementary cleaning</td><td className="p-4 text-greenprimary font-bold">From $42/hr</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-darkblue mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {["Bar top & back-bar deep clean","Sticky floor scrubbing & degreasing","Bathroom & toilet disinfection","Keg room & cellar access cleaning","Booth & seating wipe-down","Glass washing area cleaning","Bin emptying & waste management","Kitchen-adjacent area cleaning","Outdoor & beer garden cleaning","Glass & window cleaning"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700">{item}</span></div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-blueprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Sydney Bars Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Overnight & 4am cleaning available</li>
                  <li>• Hospitality licence compliance</li>
                  <li>• All Sydney entertainment strips</li>
                  <li>• Sticky floor degreasing specialists</li>
                  <li>• Police-checked, insured staff</li>
                  <li>• No lock-in contracts</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Get a Bar Cleaning Quote</h4>
                <p className="text-sm mb-4">Free assessment for any Sydney venue.</p>
                <a href="tel:1300494983" className="block text-lg font-bold text-greenprimary hover:underline">1300 494 983</a>
                <a href="mailto:hello@procleancorp.com.au" className="block text-sm text-gray-300 mt-1">hello@procleancorp.com.au</a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions — Bar Cleaning Sydney</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-darkblue mb-4">Sydney Hospitality Precincts We Serve</h3>
            <div className="flex flex-wrap gap-3">
              {[{name:"Oxford Street",href:"/commercial-cleaning-darlinghurst"},{name:"Newtown",href:"/office-cleaning-newtown"},{name:"Surry Hills",href:"/commercial-cleaning-surry-hills"},{name:"The Rocks",href:"/commercial-cleaning-sydney-cbd"},{name:"Darling Harbour",href:"/commercial-cleaning-pyrmont"},{name:"Potts Point",href:"/commercial-cleaning-kings-cross"}].map((area) => (
                <a key={area.name} href={area.href} className="bg-white border border-gray-200 text-blueprimary font-medium px-4 py-2 rounded-lg hover:bg-blueprimary hover:text-white transition">{area.name}</a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Sydney's Reliable Bar Cleaning Specialists</h3>
            <p className="text-xl mb-6 text-gray-100">Contact Pro Clean Corp for professional bar and hospitality cleaning anywhere in Sydney.</p>
            <a href="tel:1300494983" className="inline-block bg-white text-blueprimary font-bold py-3 px-10 rounded-lg hover:bg-gray-100 transition text-lg">Call 1300 494 983</a>
          </div>
        </div>
      </section>
    </div>
  );
}
