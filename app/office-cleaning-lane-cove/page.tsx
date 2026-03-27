import Image from "next/image";
import { Metadata } from "next";
import ServiceStructuredData from "@/app/components/services/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Office Cleaning Lane Cove | From $38/hr | Pro Clean Corp",
  description: "Office cleaning Lane Cove from $38/hr. Lane Cove Business Park specialists. Serving Longueville Rd offices and professional services. Free quote.",
  keywords: "office cleaning Lane Cove, office cleaners Lane Cove, Lane Cove Business Park cleaning, commercial cleaning Lane Cove, office cleaning Lane Cove NSW 2066",
  openGraph: {
    title: "Office Cleaning Lane Cove | From $38/hr | Pro Clean Corp",
    description: "Office cleaning Lane Cove from $38/hr. Lane Cove Business Park specialists. Serving Longueville Rd offices and professio.",
    url: "/office-cleaning-lane-cove",
    type: "website",
    images: [{ url: "/meta.png", alt: "Office Cleaning Lane Cove" }]
  },
  alternates: { canonical: "https://www.procleancorp.com.au/office-cleaning-lane-cove" }
};

const faqs = [
  {
    question: "How much does office cleaning cost in Lane Cove?",
    answer: "Office cleaning in Lane Cove starts at $38/hr for regular scheduled visits. Small professional offices (under 150m²) typically cost $160–$290 per clean. Larger corporate tenancies in the Lane Cove Business Park are quoted per floor plate size. We offer fixed weekly pricing with no lock-in contracts."
  },
  {
    question: "Do you clean the Lane Cove Business Park?",
    answer: "Yes. The Lane Cove Business Park on Sirius Road is one of our most active service areas on the Lower North Shore. We service corporate tenants across the campus including professional services firms, engineering companies, and technology businesses — typically with after-hours or early-morning cleans to minimise disruption."
  },
  {
    question: "What types of offices do you clean in Lane Cove?",
    answer: "Lane Cove's commercial precinct along Longueville Road includes professional services firms, financial advisors, insurance brokers, medical suites, and retail offices. The Business Park hosts engineering, technology, and corporate tenants. We clean all of these, tailoring our approach to each environment."
  },
  {
    question: "Do you service Lane Cove offices on weekends?",
    answer: "Yes. We offer Saturday and Sunday cleaning for Lane Cove offices that prefer a deep clean over the weekend without disrupting the Monday-Friday work week. Weekend rates apply — contact us for current pricing."
  },
  {
    question: "Which suburbs near Lane Cove do you also clean?",
    answer: "We service Lane Cove and surrounding Lower North Shore suburbs including Longueville, Linfield, St Leonards, Chatswood, Artarmon, Willoughby, and North Sydney — often under the same contract for multi-site clients."
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Lane Cove"
        serviceDescription="Professional office cleaning in Lane Cove from $38/hr. Serving Lane Cove Business Park, Longueville Rd offices, and professional services firms across NSW 2066."
        serviceUrl="/office-cleaning-lane-cove"
        serviceType="Office Cleaning"
        price="$$"
        additionalServices={["Lane Cove Business Park Cleaning", "Corporate Office Cleaning", "After-Hours Office Cleaning", "Deep Office Cleaning", "Medical Suite Cleaning", "Weekly Office Maintenance"]}
        faqs={faqs}
      />
      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Office Cleaning Lane Cove</h1>
              <p className="text-xl mb-4 text-gray-100"><strong className="text-white">From $38/hr</strong> — professional office cleaning for Lane Cove Business Park, Longueville Road offices, and all professional workspaces throughout NSW 2066.</p>
              <p className="text-lg text-gray-200">After-hours and early-morning cleaning available. No lock-in contracts.</p>
            </div>
            <div className="relative">
              <Image src="/images/services/office.webp" alt="Office Cleaning Lane Cove NSW" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-greenprimary/10 border-l-4 border-greenprimary p-6 rounded-r-xl mb-10">
            <p className="text-lg text-darkblue font-medium"><strong>Office cleaning in Lane Cove starts at $38/hr.</strong> The Lane Cove Business Park on Sirius Road and the Longueville Road commercial strip are our primary service corridors in NSW 2066. We have cleaned Lane Cove offices for over 10 years — from boutique professional suites to full corporate campus floors.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Office Cleaning Specialists for Lane Cove Businesses</h2>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">Lane Cove (NSW 2066) has two distinct commercial zones. The Longueville Road town centre hosts professional services businesses — accountants, financial planners, solicitors, insurance brokers, and medical suites. The Lane Cove Business Park on Sirius Road is a corporate campus environment housing engineering firms, technology companies, and national and multinational tenants. Both environments require different cleaning approaches, and Pro Clean Corp services both.</p>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">Business Park tenants typically require flexible scheduling around shared access arrangements and building management protocols. Town centre offices often prefer early-morning cleans before 8am. We work within both frameworks seamlessly.</p>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Office Cleaning Pricing — Lane Cove</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead><tr className="bg-darkblue text-white"><th className="text-left p-3 rounded-tl-lg">Office Size</th><th className="text-left p-3">Frequency</th><th className="text-left p-3 rounded-tr-lg">Approx. Cost</th></tr></thead>
                  <tbody>
                    {[["Small office (under 150m²)","Weekly","$160 – $290/visit"],["Medium (150–400m²)","3x per week","$230 – $430/visit"],["Business Park tenancy (400m²+)","Daily","Custom quote"],["Medical / professional suite","Nightly","From $185/visit"]].map(([s,f,c],i) => (
                      <tr key={i} className={i%2===0?"bg-gray-50":"bg-white"}><td className="p-3 font-medium text-darkblue">{s}</td><td className="p-3 text-gray-600">{f}</td><td className="p-3 text-greenprimary font-semibold">{c}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 className="text-2xl font-bold text-darkblue mb-4">Nearby Areas We Also Service</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {[["Chatswood","/office-cleaning-chatswood"],["Artarmon","/office-cleaning-artarmon"],["St Leonards","/office-cleaning-sydney"],["North Sydney","/office-cleaning-north-sydney"],["Willoughby","/office-cleaning-sydney"],["Lindfield","/office-cleaning-sydney"]].map(([n,h],i) => (
                  <a key={i} href={h} className="px-4 py-2 bg-blueprimary/10 text-blueprimary rounded-full text-sm font-medium hover:bg-blueprimary hover:text-white transition-colors">{n}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-darkblue mb-3">Why Lane Cove Offices Choose Us</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ From $38/hr — fixed-price contracts</li><li>✓ Business Park campus experience</li><li>✓ Early morning from 5am</li><li>✓ Police-checked, fully insured</li><li>✓ No lock-in contracts</li><li>✓ 10+ years on the Lower North Shore</li>
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — Lane Cove</h4>
                <div className="text-xl font-bold text-greenprimary mt-3">1300 494 983</div>
                <p className="text-xs text-gray-400 mt-2">hello@procleancorp.com.au</p>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Office Cleaning Lane Cove</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (<div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-blueprimary"><h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4><p className="text-gray-700 leading-relaxed">{faq.answer}</p></div>))}
          </div>
          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Get a Free Office Cleaning Quote in Lane Cove</h3>
            <p className="text-xl mb-6 text-gray-100">From $38/hr. No lock-in. Lane Cove Business Park specialists.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
