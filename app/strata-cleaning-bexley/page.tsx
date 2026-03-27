import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Strata Cleaning Bexley | Common Area Cleaning Bexley NSW | Pro Clean Corp',
  description: 'Professional strata cleaning in Bexley NSW. Common areas, lobbies, corridors, car parks, and shared facilities for Bexley strata properties. Free quotes. Call 1300 494 983.',
  keywords: ['strata cleaning Bexley', 'Bexley strata cleaning', 'strata cleaners Bexley NSW', 'body corporate cleaning Bexley', 'common area cleaning Bexley'],
  openGraph: { title: 'Strata Cleaning Bexley | Pro Clean Corp', description: 'Professional strata cleaning services in Bexley NSW — lobbies, corridors, car parks, and common areas.', url: '/strata-cleaning-bexley', type: 'website', images: [{ url: 'https://www.procleancorp.com.au/meta.png', width: 1200, height: 630, alt: 'Strata Cleaning Bexley NSW' }] },
  twitter: { card: 'summary_large_image', title: 'Strata Cleaning Bexley | Pro Clean Corp', description: 'Strata cleaning specialists in Bexley NSW. Lobbies, corridors, car parks, and more.', images: ['https://www.procleancorp.com.au/meta.png'] },
  alternates: { canonical: '/strata-cleaning-bexley' }
};

export default function StrataCleaningBexleyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData serviceName="Strata Cleaning Bexley" serviceDescription="Pro Clean Corp provides professional strata cleaning in Bexley NSW. Common area cleaning for residential and commercial strata properties including lobbies, corridors, lifts, car parks, and shared facilities." serviceUrl="/strata-cleaning-bexley" serviceType="Strata Cleaning" price="$$" additionalServices={['Lobby Cleaning', 'Corridor Cleaning', 'Car Park Cleaning', 'Lift Cleaning', 'Bin Room Cleaning', 'Pool Area Cleaning']} faqs={[{ question: 'Do you provide strata cleaning in Bexley?', answer: 'Yes. Pro Clean Corp provides professional strata cleaning throughout Bexley and the surrounding Bayside area. We service residential strata buildings, commercial strata properties, and mixed-use complexes. Contact us for a free site assessment and quote.' }, { question: 'What strata areas do you clean in Bexley?', answer: 'We clean all common areas of Bexley strata properties including entrance lobbies, internal and external corridors, stairwells, lifts, car parks, bin rooms, garden paths, pool areas, and any other shared facilities.' }]} />
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-greenprimary text-white text-sm font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Bexley Strata Cleaning Specialists</div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Strata Cleaning Bexley</h1>
              <p className="text-xl mb-8 text-gray-100">Pro Clean Corp provides professional strata cleaning throughout Bexley NSW. Local cleaning teams servicing residential and commercial strata properties — lobbies, corridors, car parks, lifts, and all common areas — on schedules that work for your owners corporation.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact-us" className="bg-greenprimary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg">Get a Free Quote</a>
                <a href="tel:1300494983" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">1300 494 983</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
                <span>✓ Local Bexley Teams</span><span>✓ Flexible Scheduling</span><span>✓ Free Site Assessment</span>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/services/strata.jpg" alt="Strata cleaning Bexley NSW" className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-greenprimary/10 border-b border-greenprimary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-darkblue font-medium"><strong>Strata cleaning in Bexley</strong> from Pro Clean Corp keeps your building&apos;s common areas clean, presentable, and well-maintained — protecting property values and ensuring all residents enjoy a consistently high standard of shared facility hygiene in the Bayside area.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-darkblue mb-6">Strata Cleaning Services in Bexley</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">Bexley is a growing residential suburb in Sydney&apos;s Bayside area, approximately 12km south of the CBD. The suburb has seen significant strata development in recent years, with a mix of established apartment blocks and newer residential complexes. Pro Clean Corp has local teams servicing Bexley and surrounding suburbs including Bexley North, Kingsgrove, Arncliffe, and Rockdale.</p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">We work directly with strata managers, owners corporations, and building managers throughout Bexley to provide cleaning programs tailored to each property&apos;s size, resident expectations, and budget. Whether it&apos;s a small 10-unit block or a large residential complex, our local teams deliver consistent, professional results.</p>
              <div className="space-y-2">
                {['Entry lobby & foyer cleaning', 'Internal corridor vacuuming & mopping', 'Stairwell cleaning', 'Lift interior sanitisation', 'Car park sweeping', 'Bin room cleaning', 'External areas & paths', 'Pool area (if applicable)'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3"><div className="w-4 h-4 bg-greenprimary rounded-full flex-shrink-0"></div><span className="text-gray-700 text-sm">{item}</span></div>
                ))}
              </div>
            </div>
            <Image src="/images/services/hero3.jpg" alt="Strata cleaning team Bexley" className="rounded-2xl shadow-xl w-full h-full object-cover max-h-96" width={600} height={384} loading="lazy" />
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Nearby Areas We Also Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[{name:'Kogarah',href:'/strata-cleaning-kogarah'},{name:'Kingsgrove',href:'/strata-cleaning-kingsgrove'},{name:'Hurstville',href:'/strata-cleaning-sydney'},{name:'Rockdale',href:'/strata-cleaning-sydney'},{name:'Arncliffe',href:'/strata-cleaning-sydney'},{name:'Banksia',href:'/strata-cleaning-sydney'},{name:'Maroubra',href:'/strata-cleaning-maroubra'},{name:'Strata Sydney',href:'/strata-cleaning-sydney'}].map((link) => (
                <Link key={link.href} href={link.href} className="bg-white p-3 rounded text-sm text-center text-gray-700 hover:text-blueprimary hover:shadow-md transition border border-gray-100 block">{link.name}</Link>
              ))}
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Strata Cleaning Bexley</h3>
            <div className="space-y-4">
              {[
                { q: 'Do you provide strata cleaning in Bexley?', a: 'Yes. Pro Clean Corp provides professional strata cleaning throughout Bexley and surrounding Bayside suburbs. We service residential strata buildings, commercial strata properties, and mixed-use complexes.' },
                { q: 'How often should strata be cleaned in Bexley?', a: 'Most Bexley strata properties need cleaning 1–3 times per week depending on building size and resident numbers. We assess each property individually and recommend the optimal frequency.' },
                { q: 'Do you work with strata managers in Bexley?', a: 'Yes. We work directly with strata managers, owners corporations, and building managers across Bexley and the Bayside area. We provide regular reporting and respond quickly to any special cleaning requests.' },
                { q: 'Can you provide an emergency clean for a Bexley strata property?', a: 'Yes. We offer emergency strata cleaning services for incidents such as flooding, vandalism, or special events. Call 1300 494 983 for urgent strata cleaning across Bexley.' }
              ].map((faq, i) => <div key={i} className="bg-gray-50 rounded-xl p-6"><h4 className="font-bold text-darkblue mb-2">{faq.q}</h4><p className="text-gray-700">{faq.a}</p></div>)}
            </div>
          </div>
          <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Strata Cleaning Bexley NSW</h3>
            <p className="text-xl mb-6 text-gray-100">Professional strata cleaning for Bexley properties. Free site assessment for all Bayside strata buildings.</p>
            <div className="text-2xl font-bold text-greenprimary">Call 1300 494 983 Today</div>
          </div>
        </div>
      </section>
    </div>
  );
}
