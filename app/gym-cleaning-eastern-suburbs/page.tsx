import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaning Eastern Suburbs | ProCleanCorp Sydney',
  description: 'Gym and fitness centre cleaning across the Eastern Suburbs — Bondi, Randwick, Surry Hills and Paddington. Eco-friendly products, daily programs. Free quote.',
  keywords: 'gym cleaning eastern suburbs, fitness centre cleaning eastern suburbs, gym cleaners bondi, yoga studio cleaning eastern suburbs, pilates studio cleaning sydney, eco gym cleaning sydney, gym cleaning randwick, fitness cleaning surry hills',
  openGraph: {
    title: 'Gym Cleaning Eastern Suburbs | ProCleanCorp Sydney',
    description: 'Gym and fitness centre cleaning across the Eastern Suburbs. Eco-friendly products, flexible scheduling. Free quote.',
    url: 'https://www.procleancorp.com.au/gym-cleaning-eastern-suburbs',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Gym cleaning Eastern Suburbs Sydney' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-eastern-suburbs' }
};

const faqs = [
  {
    question: 'Do you clean yoga and pilates studios in the Eastern Suburbs?',
    answer: 'Yes. ProCleanCorp specialises in yoga and pilates studio cleaning across the Eastern Suburbs including Bondi, Coogee, Randwick, Surry Hills and Paddington. Studio cleaning requires non-toxic, fragrance-free products safe for close-contact floor environments — our eco-certified range is specifically selected for this requirement. We clean mats, props, mirrors, floors and change rooms.'
  },
  {
    question: 'What eco-friendly products do you use in fitness centres?',
    answer: 'For Eastern Suburbs fitness clients, we use biodegradable, fragrance-free and non-toxic cleaning products that are TGA-approved for disinfection but free of harsh chemicals, synthetic fragrances and known allergens. Our products align with the Environmental Choice Australia standard. These are the right choice for the health-conscious studio clientele in the Eastern Suburbs.'
  },
  {
    question: 'Which Eastern Suburbs gyms do ProCleanCorp currently service?',
    answer: 'ProCleanCorp currently services gyms and fitness studios across Bondi, Bondi Junction, Coogee, Randwick, Surry Hills, Paddington, Darlinghurst, Newtown and surrounding suburbs. We cover the full Eastern Suburbs fitness precinct from the beachside studios to the inner-city CrossFit boxes.'
  }
];

export default function GymCleaningEasternSuburbsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Eastern Suburbs Sydney"
        serviceDescription="ProCleanCorp cleans gyms and fitness centres across Sydney's Eastern Suburbs including Bondi, Coogee, Randwick, Surry Hills and Paddington, with eco-certified products and flexible scheduling."
        serviceUrl="https://www.procleancorp.com.au/gym-cleaning-eastern-suburbs"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Yoga Studio Cleaning', 'Pilates Studio Cleaning', 'CrossFit Box Cleaning', 'Eco-Friendly Gym Cleaning', 'Locker Room Cleaning', 'Equipment Disinfection']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Eastern Suburbs Gym & Fitness Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Gym Cleaning Eastern Suburbs Sydney — Fitness Centre Specialists
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp cleans gyms and fitness centres across the Eastern Suburbs — Bondi, Randwick, Surry Hills, Paddington. Eco-certified, non-toxic products for premium studios and health-conscious communities.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Eco-Certified Products &nbsp;|&nbsp; ✓ Yoga & Pilates Specialists &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/gym.webp" alt="Gym cleaning Eastern Suburbs Sydney fitness centre"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp cleans gyms and fitness centres across Sydney's Eastern Suburbs</strong> including Bondi, Coogee, Randwick, Surry Hills and Paddington, with eco-certified products and flexible scheduling. The Eastern Suburbs fitness market is premium and eco-conscious — our non-toxic, fragrance-free product range aligns with the values of this community.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Gym & Fitness Centre Cleaning — Eastern Suburbs</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                The Eastern Suburbs fitness market is unlike any other in Sydney. Between Bondi and Surry Hills, there is a high density of boutique yoga studios, pilates centres, CrossFit boxes, cycling studios and premium health clubs — all serving a clientele that is educated, health-conscious and demands non-toxic cleaning products.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp has selected an eco-certified cleaning product range specifically for Eastern Suburbs fitness clients — biodegradable, fragrance-free, no synthetic chemicals, aligned with Environmental Choice Australia standards. These products are TGA-approved for disinfection but safe for close-contact floor environments like yoga and pilates studios where members are on the floor daily.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Eastern Suburbs Gym Cleaning Services</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Yoga & pilates studio cleaning', 'CrossFit box & functional fitness', 'Gym equipment disinfection', 'Locker room & shower cleaning', 'Eco-certified product range', 'Rubber & specialty floor cleaning', 'Group fitness studio cleaning', 'Reception & café area', 'Mirror & glass cleaning', 'Early morning scheduling', 'Non-toxic fragrance-free products', 'Mat & prop cleaning'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-greenprimary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-greenprimary/10 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-darkblue mb-3">Eastern Suburbs Areas</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Bondi', 'Bondi Junction', 'Coogee', 'Randwick', 'Surry Hills', 'Paddington', 'Darlinghurst', 'Maroubra'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Eco-friendly gym cleaning. Free studio assessment.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Gym Cleaning Eastern Suburbs</h3>
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
                { label: 'Gym Cleaning Bondi', href: '/gym-cleaning-bondi' },
                { label: 'Gym Cleaning Sydney', href: '/gym-cleaning-sydney' },
                { label: 'Commercial Cleaning Eastern Suburbs', href: '/commercial-cleaning-eastern-suburbs' },
                { label: 'Green Cleaning Sydney', href: '/green-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Eastern Suburbs Gym Cleaning — Eco-Certified</h3>
            <p className="text-xl mb-4 text-gray-100">Non-toxic products for premium studios. Free fitness centre assessment.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
