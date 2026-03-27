import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaning Newtown | Eco Fitness Cleaners | ProCleanCorp',
  description: 'Gym cleaning in Newtown for CrossFit boxes, yoga studios and independent gyms. Non-toxic, eco-certified products. Flexible scheduling. Free quote today.',
  keywords: 'gym cleaning newtown, fitness studio cleaning newtown, crossfit cleaning newtown, yoga studio cleaning newtown, eco gym cleaning newtown, martial arts studio cleaning newtown, rubber floor cleaning newtown',
  openGraph: {
    title: 'Gym Cleaning Newtown | Eco Fitness Cleaners | ProCleanCorp',
    description: 'Gym cleaning in Newtown for CrossFit boxes, yoga studios and independent gyms. Non-toxic, eco-certified products. Free quote.',
    url: 'https://www.procleancorp.com.au/gym-cleaning-newtown',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Gym cleaning Newtown eco fitness studio' }]
  },
  alternates: { canonical: 'https://www.procleancorp.com.au/gym-cleaning-newtown' }
};

const faqs = [
  {
    question: 'Can you clean rubber floors and fitness mats in Newtown gyms?',
    answer: 'Yes. ProCleanCorp uses specialised rubber floor cleaning equipment and products designed for the porous surfaces common in CrossFit boxes, martial arts dojos and functional fitness studios in Newtown. Our rubber floor scrubbers deep clean the pores to remove sweat, chalk and dirt build-up — without leaving chemical residue on surfaces that members are in direct contact with.'
  },
  {
    question: 'What non-toxic disinfectants do you use for gym cleaning in Newtown?',
    answer: 'For Newtown fitness clients, we use TGA-approved disinfectants that are also certified non-toxic, fragrance-free and biodegradable. These products eliminate bacteria, viruses and fungi without harsh chemicals or synthetic fragrances — aligning with the health and environmental values of Newtown\'s fitness community. All products are safe for rubber floors, mats, timber and specialised surfaces.'
  },
  {
    question: 'Do you clean martial arts dojos or aerial yoga studios in Newtown?',
    answer: 'Yes. Newtown is the epicentre of Sydney\'s alternative fitness scene — aerial yoga, martial arts, parkour and functional movement studios all have non-standard surfaces and equipment that require specific cleaning protocols. ProCleanCorp has experience with aerial silks and rig structures, tatami mat cleaning, timber floor care and the specialist requirements of these unique facilities.'
  }
];

export default function GymCleaningNewtownPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceStructuredData
        serviceName="Gym Cleaning Newtown"
        serviceDescription="ProCleanCorp cleans gyms and fitness studios in Newtown using eco-certified, non-toxic disinfectants for CrossFit boxes, yoga studios, martial arts dojos and independent gyms."
        serviceUrl="https://www.procleancorp.com.au/gym-cleaning-newtown"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['CrossFit Box Cleaning', 'Yoga Studio Cleaning', 'Martial Arts Dojo Cleaning', 'Aerial Studio Cleaning', 'Rubber Floor Scrubbing', 'Eco-Certified Products']}
        faqs={faqs}
      />

      <section className="relative bg-gradient-to-r from-greenprimary to-blueprimary py-20">
        <div className="absolute inset-0 bg-black opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-sm font-semibold uppercase tracking-wide mb-3 text-green-200">Newtown & Inner West Fitness Cleaning</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Gym Cleaning Newtown — Eco-Friendly Fitness Centre Cleaners
              </h1>
              <p className="text-xl mb-4 text-gray-100">
                ProCleanCorp cleans gyms and fitness studios in Newtown using eco-certified, non-toxic disinfectants. CrossFit boxes, yoga studios, aerial studios and martial arts dojos — specialist surface protocols for every fitness format.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-white font-semibold">✓ Non-Toxic Products &nbsp;|&nbsp; ✓ Specialist Surfaces &nbsp;|&nbsp; ✓ Free Quote</p>
              </div>
              <div className="text-2xl font-bold text-green-200">Call 1300 494 983</div>
            </div>
            <div>
              <Image src="/images/services/gym.webp" alt="Gym cleaning Newtown eco fitness studio"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover" width={800} height={384} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 border-l-4 border-greenprimary py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>ProCleanCorp cleans gyms and fitness studios in Newtown using eco-certified, non-toxic disinfectants</strong> — the right choice for Newtown's health-conscious fitness community. CrossFit boxes, aerial yoga, martial arts dojos and functional movement studios all have non-standard surfaces that require specific cleaning protocols.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-darkblue mb-6">Specialist Gym Cleaning in Newtown</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Newtown is the epicentre of Sydney's alternative fitness scene. CrossFit boxes with chalk-covered rubber flooring and competition rigs, aerial yoga studios with silks and rigging, martial arts dojos with tatami mats, and functional movement spaces with timber floors — these venues have non-standard surfaces that require cleaning protocols most gym cleaners don't have.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ProCleanCorp has developed specific cleaning methods for each of these formats. We understand that rubber floor pores trap sweat and bacteria differently from vinyl, that chalk residue on rigs requires specific treatment, and that tatami mats need low-moisture cleaning to avoid degradation. Our non-toxic, eco-certified product range meets the health values of Newtown's fitness community.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-darkblue mb-4">Newtown Gym & Studio Cleaning</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {['CrossFit box & rig cleaning', 'Chalk removal from surfaces', 'Rubber floor deep scrubbing', 'Aerial studio & silk cleaning', 'Martial arts dojo & tatami', 'Yoga & pilates mat cleaning', 'Timber floor care', 'Non-toxic eco disinfectants', 'Locker room & shower cleaning', 'Early morning scheduling', 'Fragrance-free products', 'Biodegradable chemical range'].map((item, i) => (
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
                <h4 className="font-bold text-darkblue mb-3">Nearby Areas</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {['Newtown', 'Erskineville', 'St Peters', 'Redfern', 'Surry Hills', 'Marrickville', 'Enmore', 'Glebe'].map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
              <div className="bg-darkblue text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Free Quote — 24 Hours</h4>
                <p className="text-sm mb-3 text-gray-300">Eco gym cleaning. Newtown & Inner West.</p>
                <div className="text-xl font-bold text-green-300">1300 494 983</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-darkblue mb-6">FAQs — Gym Cleaning Newtown</h3>
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
                { label: 'Gym Cleaning Inner West', href: '/gym-cleaning-inner-west' },
                { label: 'Commercial Cleaning Newtown', href: '/commercial-cleaning-newtown' },
                { label: 'Gym Cleaning Sydney', href: '/gym-cleaning-sydney' },
                { label: 'Green Cleaning Sydney', href: '/green-cleaning-sydney' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-greenprimary transition">{link.label}</Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-greenprimary to-blueprimary rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-3">Eco Gym Cleaning — Newtown</h3>
            <p className="text-xl mb-4 text-gray-100">Non-toxic products for CrossFit boxes, yoga studios & martial arts dojos.</p>
            <div className="text-2xl font-bold">Call 1300 494 983</div>
          </div>
        </div>
      </section>
    </div>
  );
}
