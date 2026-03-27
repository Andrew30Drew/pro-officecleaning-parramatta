import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gym & Fitness Centre Cleaning Parramatta | Professional Services',
  description: 'Top-rated gym and fitness centre cleaning in Parramatta NSW. We eliminate odors, sanitize equipment, and maintain sparkling change rooms. Create a healthy workout environment.',
  keywords: 'gym cleaning Parramatta, fitness centre cleaning Parramatta, sports centre cleaning Parramatta, yoga studio cleaning Parramatta, pilates studio cleaning Parramatta, gym cleaners Parramatta, professional gym cleaning Parramatta, health club cleaning Parramatta, change room sanitization Parramatta, gym equipment disinfection Parramatta, rubber floor cleaning Parramatta, mirror cleaning Parramatta, gym janitorial services Parramatta, affordable gym cleaning Parramatta, crossfit gym cleaning Parramatta, martial arts studio cleaning Parramatta, leisure centre cleaning Parramatta, gym sanitization Parramatta, commercial cleaning Parramatta, best gym cleaners Parramatta',
  openGraph: {
    title: 'Gym & Fitness Centre Cleaning Parramatta | Pro Clean Corp',
    description: 'Top-rated gym and fitness centre cleaning in Parramatta NSW. We eliminate odors, sanitize equipment, and maintain sparkling change rooms.',
    url: '/gym-cleaning-parramatta',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Gym & Fitness Centre Cleaning Parramatta' }]
  },
  alternates: { canonical: '/gym-cleaning-parramatta' }
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blueprimary to-darkblue py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Gym Cleaning Parramatta
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional gym and fitness centre cleaning in Parramatta. We eliminate odors, sanitize equipment, and maintain sparkling change rooms to create a healthy workout environment for your members.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/services/commercial.webp"
                alt="Gym Cleaning Parramatta"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                width={800}
                height={384}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-darkblue mb-8">Professional Gym Cleaning Services in Parramatta</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Pro Clean Corp delivers vigorous <strong>gym cleaning</strong> services throughout Parramatta. We know that hygiene is the #1 retention factor for fitness members. Our team ensures your facility smells fresh, looks professional, and is safe from bacteria.
                </p>
                
                <h3 className="text-2xl font-bold text-darkblue mb-4">Why Choose Us for Gym Cleaning in Parramatta?</h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Sweat and high traffic make gyms in Parramatta challenging to maintain. Our cleaners are equipped with specialized enzyme cleaners and disinfectants to tackle odors and bacteria at the source.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Odor Elimination</h4>
                    <p className="text-gray-600 text-sm">Industrial deodorizing for locker rooms and sweat zones.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Equipment Hygiene</h4>
                    <p className="text-gray-600 text-sm">Safe disinfection of vinyl pads, screens, and handles.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Floor Care</h4>
                    <p className="text-gray-600 text-sm">Specialized cleaning for rubber mats and timber floors.</p>
                  </div>
                  <div className="border-l-4 border-blueprimary pl-4">
                    <h4 className="font-semibold text-darkblue">Mirror Shine</h4>
                    <p className="text-gray-600 text-sm">Streak-free cleaning for wall-to-wall mirrors.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-blueprimary/10 p-6 rounded-xl">
                  <h4 className="font-bold text-darkblue mb-3">Our Services Include</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Equipment Wipe-down & Sanitization</li><li>• Change Room & Shower Deep Clean</li><li>• Rubber Floor Scrubbing</li><li>• Mirror Cleaning</li><li>• Reception Area Detailing</li><li>• Cardio Zone Sanitization</li><li>• HVAC Vent Dusting</li>
                  </ul>
                </div>
                <div className="mt-6 bg-darkblue text-white p-6 rounded-xl">
                    <h4 className="font-bold mb-2">Need a Quote?</h4>
                    <p className="text-sm mb-4">Contact us for a tailored cleaning plan.</p>
                    <div className="text-lg font-bold text-greenprimary">1300 494 983</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-darkblue mb-6">Frequently Asked Questions about Gym Cleaning in Parramatta</h3>
            <div className="space-y-6 mb-12">
              {[
                {
                  question: "Do you use products that won\'t damage our equipment?",
                  answer: 'Yes, we use manufacturer-approved, non-corrosive disinfectants specifically designed for gym equipment. We ensure vinyl pads and electronic screens in your Parramatta gym are cleaned safely without drying out or cracking.'
                },
                {
                  question: 'Can you get rid of locker room smells?',
                  answer: 'We specialize in odor removal. We use enzyme-based cleaners that break down bacteria causing odors in showers and locker rooms, rather than just masking them, keeping your Parramatta facility smelling fresh.'
                },
                {
                  question: 'What times can you clean our Parramatta gym?',
                  answer: "We typically clean during your lowest traffic hours—usually late at night or very early morning—to ensure the gym is pristine for your members\' morning rush in Parramatta."
                },
                {
                  question: 'Do you clean rubber gym flooring?',
                  answer: 'Yes, we have specialized floor scrubbers for rubber matting that deep clean the pores to remove sweat, chalk, and dirt build-up common in Parramatta fitness centres.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-darkblue mb-3 text-lg">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blueprimary to-darkblue rounded-2xl p-8 text-white text-center mt-12">
              <h3 className="text-3xl font-bold mb-4">Keep Your Members Happy</h3>
              <p className="text-xl mb-6 text-gray-100">
                Contact Pro Clean Corp today for professional gym cleaning services in Parramatta.
              </p>
              <div className="text-2xl font-bold text-greenprimary">
                Call 1300 494 983
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
