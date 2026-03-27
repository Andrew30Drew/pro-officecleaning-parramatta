import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Office Cleaning Glebe | ProCleanCorp Commercial',
  description: 'Office cleaning in Glebe for creative studios, co-working spaces and small businesses. Eco-friendly products, flexible scheduling. Free quote — call today.',
  keywords: 'office cleaning glebe, office cleaners glebe, commercial cleaning glebe, eco friendly office cleaning glebe, co-working space cleaning glebe, professional office cleaners glebe sydney',
  openGraph: {
    title: 'Office Cleaning Glebe | ProCleanCorp Commercial',
    description: 'Office cleaning in Glebe for creative studios, co-working spaces and small businesses. Eco-friendly products, flexible scheduling. Free quote.',
    url: 'https://www.procleancorp.com.au/office-cleaning-glebe',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Office cleaning Glebe Sydney' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/office-cleaning-glebe' }
};

const faqs = [
  {
    question: 'Do you offer eco-friendly office cleaning in Glebe?',
    answer: 'Yes. ProCleanCorp uses eco-certified, biodegradable cleaning products for all Glebe office clients. Our green cleaning range is fragrance-free, non-toxic and safe for the heritage timber floors and exposed brick surfaces common in Glebe terrace office conversions. We hold Environmental Choice Australia certification for our commercial cleaning programs.'
  },
  {
    question: 'Can you clean our Glebe co-working space outside business hours?',
    answer: 'Absolutely. We offer early morning (from 5am), evening (from 6pm) and weekend cleaning for Glebe co-working spaces and creative offices. Our flexible scheduling ensures your space is clean and ready without disrupting the work day.'
  },
  {
    question: 'What suburbs near Glebe do ProCleanCorp cover?',
    answer: 'ProCleanCorp covers all Inner West suburbs surrounding Glebe including Newtown, Ultimo, Pyrmont, Leichhardt, Forest Lodge, Annandale and Camperdown. We can service multiple Inner West offices on a single route, which helps reduce costs for businesses with multiple sites.'
  }
];

export default function OfficeCleaningGlebePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Office Cleaning Glebe"
        serviceDescription="Tailored office cleaning for Glebe's creative industries and small businesses using eco-certified products. Weekly or fortnightly schedules available."
        serviceUrl="https://www.procleancorp.com.au/office-cleaning-glebe"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Eco-Friendly Office Cleaning', 'Co-Working Space Cleaning', 'Heritage Office Cleaning', 'After Hours Cleaning', 'Weekly Cleaning', 'Fortnightly Cleaning']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Glebe & Inner West Office Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Office Cleaning Glebe — Local Commercial Cleaners You Can Trust
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp provides tailored office cleaning for Glebe's creative studios, non-profits and health practices using eco-certified products and flexible scheduling.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Eco-Certified Products &nbsp;|&nbsp; ✓ Heritage-Safe &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/office.webp" alt="Office cleaning Glebe Sydney"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp provides tailored office cleaning for Glebe's creative industries and small businesses</strong>, using eco-certified products and offering weekly or fortnightly schedules suited to the suburb's design studios, non-profits and health practices.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Professional Office Cleaning in Glebe</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Glebe hosts a high density of design studios, non-profit organisations and health practices. These businesses have specific cleaning requirements — heritage terrace conversions with exposed timber and original tiling, open-plan studios that need careful product selection, and community-focused organisations that expect eco-friendly cleaning practices.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp understands the Glebe market. Our eco-certified product range is safe for heritage surfaces and aligns with the environmental values of Glebe's business community. We offer flexible access for terrace-style heritage offices, including careful staircase and hallway cleaning protocols.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Glebe Office Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Eco-certified product cleaning', 'Heritage surface care', 'Co-working space maintenance', 'Kitchen & breakroom cleaning', 'Bathroom sanitisation', 'Timber floor care & mopping', 'Internal glass & window cleaning', 'Bin removal & recycling', 'High-touch disinfection', 'After hours & weekend access', 'Weekly & fortnightly programs', 'One-off deep cleans'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: 'Eco-Certified Products', desc: 'Biodegradable, fragrance-free and non-toxic — safe for heritage offices and environmentally conscious businesses.' },
                  { title: 'Heritage-Safe Methods', desc: 'Experienced with original tiles, sandstone, exposed brick and timber common in Glebe\'s terrace conversions.' },
                  { title: 'Flexible Scheduling', desc: 'Weekly, fortnightly or on-demand — designed around your studio or practice hours.' },
                  { title: 'No Lock-In Contracts', desc: 'Month-to-month agreements — no 12-month lock-in for Glebe small businesses.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-greenprimary pl-4">
                    <h4 className="font-semibold text-darkblue mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Nearby Suburbs We Cover</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Newtown', 'Ultimo', 'Pyrmont', 'Leichhardt', 'Forest Lodge', 'Annandale', 'Camperdown', 'Chippendale'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">On-site assessment. Fixed pricing, no surprises.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Office Cleaning Glebe</h3>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-darkblue mb-2">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-darkblue mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Commercial Cleaning Glebe', href: '/commercial-cleaning-glebe' },
                { label: 'Office Cleaning Newtown', href: '/office-cleaning-newtown' },
                { label: 'Office Cleaning Inner West', href: '/office-cleaning-inner-west' },
                { label: 'Green Cleaning Sydney', href: '/green-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Get Your Free Glebe Office Cleaning Quote</h3>
            <p className="text-xl mb-4 text-gray-100">Eco-friendly, heritage-safe office cleaning for Glebe businesses.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
