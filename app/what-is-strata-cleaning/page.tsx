import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'What is Strata Cleaning? | Strata Cleaning Explained | Pro Clean Corp Sydney',
  description: 'What is strata cleaning? A complete guide to strata cleaning in NSW — what it includes, who pays, how often it\'s needed, and how to choose a strata cleaner. Pro Clean Corp 1300 494 983.',
  keywords: ['what is strata cleaning', 'strata cleaning explained', 'strata cleaning guide NSW', 'strata common area cleaning', 'strata cleaning Sydney'],
  openGraph: { title: 'What is Strata Cleaning? | Pro Clean Corp Sydney', description: 'Complete guide to strata cleaning in NSW — what it includes, who pays, frequency, and how to choose a strata cleaner.', url: '/what-is-strata-cleaning', type: 'website', images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'What is Strata Cleaning' }] },
  twitter: { card: 'summary_large_image', title: 'What is Strata Cleaning? | Pro Clean Corp Sydney', description: 'Everything you need to know about strata cleaning in NSW — explained by Pro Clean Corp.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: '/what-is-strata-cleaning' }
};

export default function WhatIsStrataCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData serviceName="Strata Cleaning Services Sydney" serviceDescription="Pro Clean Corp provides professional strata cleaning services for residential and commercial strata properties across Sydney NSW. Common areas, lobbies, car parks, gyms, and pool areas." serviceUrl="/what-is-strata-cleaning" serviceType="Strata Cleaning" price="$$" additionalServices={['Common Area Cleaning', 'Lobby & Foyer Cleaning', 'Car Park Cleaning', 'Pool Area Cleaning', 'Garden Path Cleaning', 'Bin Room Cleaning']} faqs={[{ question: 'What is strata cleaning?', answer: 'Strata cleaning is the regular cleaning and maintenance of common areas in strata-titled properties — areas shared by all owners or tenants such as lobbies, corridors, stairwells, lifts, car parks, gardens, pools, and gym facilities. Strata cleaning is typically organised and paid for by the owners corporation (body corporate) through strata levies.' }, { question: 'Who is responsible for strata cleaning?', answer: 'The owners corporation (previously called body corporate) is responsible for maintaining and cleaning common property in a strata scheme. They typically appoint a strata manager who arranges cleaning contracts with professional cleaning companies. Individual lot owners are responsible for cleaning their own lot.' }]} />
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Complete Guide to Strata Cleaning</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">What is Strata Cleaning?</h1>
              <p className="text-xl mb-8 text-gray-100">Strata cleaning is the regular cleaning of common property areas in strata-titled buildings — lobbies, corridors, lifts, car parks, gardens, and shared facilities. It&apos;s organised by the owners corporation and funded through strata levies.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Get a Strata Quote</a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
              </div>
            </div>
            <Image src="/images/services/strata.jpg" alt="What is strata cleaning" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
          </div>
        </div>
      </section>
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium"><strong>Strata cleaning</strong> is the professional cleaning of common property areas in a strata scheme — the shared spaces that all residents or tenants use and that the owners corporation is legally required to maintain. Pro Clean Corp provides strata cleaning services for residential and commercial strata properties across all of Sydney NSW.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-darkblue mb-6">What Does Strata Cleaning Include?</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">Strata cleaning covers all common property areas — any part of the property that is not privately owned by an individual lot owner. This typically includes:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {['Entry lobby & foyer cleaning', 'Corridor & hallway vacuuming and mopping', 'Stairwell sweeping and cleaning', 'Lift interior cleaning and sanitisation', 'Car park sweeping and mopping', 'Bin room cleaning and sanitisation', 'Pool area and surrounds cleaning', 'Gym and common facility cleaning', 'Garden path and paved area cleaning', 'Mail room and parcel storage cleaning', 'Visitor parking and driveway sweeping', 'External building entrance cleaning'].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg"><div className="w-5 h-5 bg-greenprimary rounded-full flex items-center justify-center flex-shrink-0"><span className="text-white text-xs">✓</span></div><span className="text-gray-700 text-sm">{item}</span></div>
            ))}
          </div>
          <h2 className="text-3xl font-bold text-darkblue mb-6">Who Pays for Strata Cleaning?</h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">Strata cleaning is paid for by the owners corporation from strata levies. Every lot owner pays levies (fees) to the owners corporation, which pools this money to pay for the maintenance and cleaning of common property — including professional strata cleaning contracts. Individual lot owners do not pay directly for strata cleaning; it is covered by their strata levies.</p>
          <h2 className="text-3xl font-bold text-darkblue mb-6">How Often Should Strata Be Cleaned?</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">The right strata cleaning frequency depends on the building type, number of residents, and quality expectations. As a general guide:</p>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead><tr className="bg-blueprimary text-white"><th className="p-4 font-semibold">Building Type</th><th className="p-4 font-semibold">Recommended Frequency</th></tr></thead>
              <tbody>
                {[['Small residential (under 20 units)', 'Weekly'], ['Medium residential (20–60 units)', '2–3x per week'], ['Large residential (60+ units)', 'Daily or 3–5x per week'], ['Commercial strata', 'Daily to weekly depending on tenant activity'], ['Mixed-use (residential + commercial)', 'Daily for commercial areas, 3x weekly for residential']].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}><td className="p-4 text-gray-700 font-medium">{row[0]}</td><td className="p-4 text-greenprimary font-semibold">{row[1]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-darkblue mb-6">Frequently Asked Questions About Strata Cleaning</h2>
            <div className="space-y-4">
              {[
                { q: 'What is strata cleaning?', a: 'Strata cleaning is the regular professional cleaning of common areas in strata-titled properties — lobbies, corridors, lifts, car parks, gardens, and shared facilities. It is organised by the owners corporation and funded through strata levies paid by all lot owners.' },
                { q: 'Who is responsible for strata cleaning?', a: 'The owners corporation (body corporate) is responsible for maintaining common property, including cleaning. They typically appoint a strata manager to arrange professional cleaning contracts. Individual lot owners are responsible only for their own lot.' },
                { q: 'What is not included in strata cleaning?', a: 'Strata cleaning covers common property only — it does not include cleaning inside individual apartments, townhouses, or commercial units. Lot owners are responsible for their own private spaces.' },
                { q: 'How much does strata cleaning cost in Sydney?', a: 'Strata cleaning costs in Sydney range from $100–$400+ per visit depending on building size, areas covered, and frequency. Most strata buildings pay $300–$800 per month for regular cleaning. We provide free quotes for all strata properties across Sydney.' },
                { q: 'Can I choose my own strata cleaner?', a: 'Individual lot owners cannot typically choose the strata cleaner — this is decided by the owners corporation or strata committee. However, if you are a strata manager or on the strata committee, you can recommend Pro Clean Corp for a competitive quote.' },
                { q: 'How do I get a quote for strata cleaning?', a: 'Contact Pro Clean Corp on 1300 494 983 or via our website. We provide free site assessments and detailed quotes for strata cleaning across all Sydney suburbs. We work directly with strata managers, owners corporations, and building managers.' }
              ].map((faq, i) => <div key={i} className="bg-gray-50 rounded-xl p-6"><h3 className="font-bold text-darkblue mb-2">{faq.q}</h3><p className="text-gray-700">{faq.a}</p></div>)}
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Strata Cleaning Across Sydney</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[{name:'Strata Cleaning Sydney',href:'/strata-cleaning-sydney'},{name:'Parramatta',href:'/strata-cleaning-parramatta'},{name:'Inner West',href:'/strata-cleaning-inner-west'},{name:'Sutherland',href:'/strata-cleaning-sutherland'},{name:'Maroubra',href:'/strata-cleaning-maroubra'},{name:'Balmain',href:'/strata-cleaning-balmain'},{name:'Newtown',href:'/strata-cleaning-newtown'},{name:'Chatswood',href:'/strata-cleaning-chatswood'}].map((link) => (
                <Link key={link.href} href={link.href} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">{link.name}</Link>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Professional Strata Cleaning — Sydney NSW</h3>
            <p className="text-xl mb-6 text-gray-100">Pro Clean Corp provides professional strata cleaning for residential and commercial strata properties across all Sydney suburbs. Contact us for a free quote.</p>
            <div className="text-2xl font-bold text-greenprimary">1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
