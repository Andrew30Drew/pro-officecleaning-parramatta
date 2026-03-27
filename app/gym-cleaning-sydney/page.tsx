import { Metadata } from 'next';
import Link from 'next/link';
import ServiceSEOContent from '@/app/components/services/ServiceSEOContent';
import ServiceStructuredData from '@/app/components/services/ServiceStructuredData';

export const metadata: Metadata = {
  title: 'Gym Cleaning Sydney NSW | Fitness Centre Cleaning | Free Quote | Pro Clean Corp',
  description: 'Professional gym and fitness centre cleaning in Sydney since 2015. Equipment sanitisation, locker rooms, rubber floors & 24/7 scheduling. TGA-approved disinfectants. Call 1300 494 983 for a free quote within 24 hours.',
  keywords: 'gym cleaning sydney, gym cleaning services sydney, fitness centre cleaning sydney, health club cleaning sydney, gym cleaning company sydney, gym cleaners sydney nsw, crossfit gym cleaning sydney, 24 hour gym cleaning sydney, gym equipment cleaning sydney, gym floor cleaning sydney',
  openGraph: {
    title: 'Gym Cleaning Sydney NSW | Fitness Centre Cleaning | Free Quote | Pro Clean Corp',
    description: 'Professional gym and fitness centre cleaning in Sydney. Equipment sanitisation, locker rooms, rubber floors, 24/7 availability. Call 1300 494 983.',
    url: '/gym-cleaning-sydney',
    type: 'website',
    images: [{ url: '/meta.png', alt: 'Gym cleaning Sydney NSW fitness centre' }]
  },
  alternates: { canonical: '/gym-cleaning-sydney' }
};

const spokePages = [
  { name: 'Gym Cleaning Blacktown', slug: 'gym-cleaning-blacktown' },
  { name: 'Gym Cleaning Bondi', slug: 'gym-cleaning-bondi' },
  { name: 'Gym Cleaning Hornsby', slug: 'gym-cleaning-hornsby' },
  { name: 'Gym Cleaning Kogarah', slug: 'gym-cleaning-kogarah' },
  { name: 'Gym Cleaning North Sydney', slug: 'gym-cleaning-north-sydney' },
  { name: 'Gym Cleaning Norwest', slug: 'gym-cleaning-norwest' },
  { name: 'Gym Cleaning Parramatta', slug: 'gym-cleaning-parramatta' },
  { name: 'Gym Cleaning Seven Hills', slug: 'gym-cleaning-seven-hills' },
  { name: 'Gym Cleaning Silverwater', slug: 'gym-cleaning-silverwater' },
  { name: 'Gym Cleaning Sydney CBD', slug: 'gym-cleaning-sydney-cbd' },
  { name: 'Gym Cleaning Wetherill Park', slug: 'gym-cleaning-wetherill-park' },
  { name: 'Gym Cleaning Newcastle', slug: 'gym-cleaning-newcastle' },
];

const faqs = [
  {
    question: 'What does gym cleaning include?',
    answer: 'Our Sydney gym cleaning service covers all areas of your fitness facility: cardio and weight equipment sanitisation, free weight zones, group fitness studios, yoga and Pilates rooms, locker rooms, showers, toilets, sauna and steam rooms, reception and café areas, rubber and synthetic turf floors, and all glass and mirror surfaces. We build a checklist specific to your gym\'s layout and the frequency required for each area.'
  },
  {
    question: 'What disinfectants do you use on gym equipment?',
    answer: 'We use TGA-approved, hospital-grade disinfectants effective against bacteria, viruses, fungi, and MRSA — the most common pathogens in gym environments. All products are tested to be safe on equipment finishes including rubber grips, vinyl upholstery, touchscreens, and powder-coated steel. We do not use bleach-based products that degrade equipment surfaces over time.'
  },
  {
    question: 'Can you clean a 24-hour gym without disrupting members?',
    answer: 'Yes. We schedule major cleaning during your lowest-traffic window — typically between 1am and 5am for 24-hour facilities. Our teams work efficiently and quietly, using equipment that does not disrupt members using the gym during that time. We can also provide a daytime porter service for ongoing maintenance between deep cleans.'
  },
  {
    question: 'Do you clean CrossFit boxes and functional fitness facilities?',
    answer: 'Yes. CrossFit boxes and functional fitness facilities have specific cleaning requirements — synthetic turf, plywood platforms, competition rubber flooring, rig structures, and chalk-covered surfaces. Our teams are experienced with these environments and use appropriate methods and products that clean thoroughly without damaging specialist flooring or equipment.'
  },
  {
    question: 'How often should locker rooms and showers be cleaned in a busy gym?',
    answer: 'For busy Sydney gyms, locker rooms and shower areas should receive a deep clean at least once daily — typically overnight — and spot checks 2–3 times during the day. High-traffic peak periods (6–8am and 5–7pm) often require an additional midday check. We will recommend the right frequency based on your membership numbers and peak usage times.'
  }
];

export default function GymCleaningSydneyPage() {
  const serviceInfo = {
    title: 'Gym Cleaning Sydney NSW',
    description: 'Gym hygiene is not optional — it is what members talk about, what reviews are written about, and what keeps memberships. Pro Clean Corp delivers specialist gym and fitness centre cleaning services across Sydney, using TGA-approved hospital-grade disinfectants, purpose-built rubber floor cleaning equipment, and flexible scheduling that works around your operating hours, whether you open at 5am, close at midnight, or never close at all.',
    benefits: [
      'Equipment Sanitisation: Full wipe-down and disinfection of every piece of cardio and resistance equipment — handles, seats, touchscreens, adjustment points, and bars — using TGA-approved disinfectant safe for equipment finishes.',
      'Locker Room & Shower Hygiene: Daily deep cleaning of locker rooms, showers, toilets, and change areas. Mould prevention, tile grout cleaning, drain maintenance, and consumable restocking on every visit.',
      'Rubber & Specialty Floor Cleaning: Dedicated rubber floor scrubbing machines for gym mats, functional fitness zones, and free weight areas. We also clean synthetic turf, timber aerobics floors, and competition lifting platforms.',
      'Group Fitness & Studio Cleaning: Thorough cleaning of group fitness studios, yoga and Pilates rooms, spin studios, and martial arts dojos — floors, mirrors, sound equipment surrounds, and props.',
      'CrossFit & Functional Fitness: Experienced in CrossFit box cleaning — chalk removal, rig cleaning, plywood platform care, and synthetic turf deep cleans without damaging specialist surfaces.',
      '24/7 Scheduling Flexibility: We work around your operating hours — overnight, early morning, or a combination of overnight deep clean and daytime porter maintenance throughout the day.'
    ],
    process: [
      'Free Gym Assessment: We walk your facility with your manager, identify all cleaning zones, equipment types, flooring surfaces, and peak traffic times.',
      'Custom Cleaning Plan: A zone-by-zone checklist covering every area at the right frequency — daily for locker rooms, weekly for deep equipment sanitisation, periodic for specialty surfaces.',
      'Experienced Gym Cleaning Team: Staff trained specifically in gym environments — understanding equipment care, hygiene priorities, and how to work around members discreetly.',
      'Ongoing Quality Checks: Supervisor inspections, member feedback monitoring, and a direct account manager for fast response to any hygiene concerns raised.'
    ],
    whyChooseUs: [
      'TGA-Approved Disinfectants: Hospital-grade products that kill MRSA, E. coli, Staph, and fungal infections — the pathogens that matter most in gym environments.',
      'Specialist Gym Equipment: Rubber floor scrubbers, auto-dosing disinfectant systems, and microfibre technology that cleans equipment without leaving residue.',
      'Sydney-Wide Gym Coverage: We service gyms, health clubs, CrossFit boxes, and boutique studios across the entire Greater Sydney area.',
      '24/7 Availability: We work when you need us — even in the small hours for 24-hour facilities.',
      'Member Retention Focus: Clean gyms keep members. We understand that our work directly impacts your membership retention and online reviews.'
    ],
    serviceAreas: [
      'Sydney CBD', 'North Sydney', 'Parramatta', 'Blacktown',
      'Bondi', 'Norwest', 'Seven Hills', 'Silverwater',
      'Hornsby', 'Kogarah', 'Wetherill Park', 'Newcastle'
    ],
    faqs,
    images: [
      { src: '/images/services/gym.webp', alt: 'Gym cleaning Sydney NSW fitness centre sanitisation' },
      { src: '/images/services/commercial.webp', alt: 'CrossFit box and functional fitness cleaning Sydney' }
    ],
    relatedServices: [
      'Commercial Cleaning Sydney',
      'Medical Cleaning Sydney',
      'Childcare Cleaning Sydney',
      'Office Cleaning Sydney'
    ]
  };

  return (
    <>
      <ServiceStructuredData
        serviceName="Gym Cleaning Sydney NSW"
        serviceDescription="Professional gym and fitness centre cleaning services across Sydney NSW. Equipment sanitisation, locker rooms, rubber floors, CrossFit boxes and 24-hour scheduling. TGA-approved disinfectants, licensed and insured."
        serviceUrl="https://www.procleancorp.com.au/gym-cleaning-sydney"
        serviceType="ProfessionalService"
        price="$$"
        additionalServices={['Equipment Sanitisation', 'Locker Room Cleaning', 'Rubber Floor Scrubbing', 'CrossFit Box Cleaning', 'Studio Cleaning']}
        faqs={faqs}
      />
      <ServiceSEOContent {...serviceInfo} />

      {/* Spoke Pages Hub Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-darkblue mb-6 text-center">Gym Cleaning by Sydney Suburb</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Find specialist gym and fitness centre cleaning services in your Sydney area:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {spokePages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="bg-white p-3 rounded-lg text-center text-gray-700 hover:text-greenprimary hover:shadow-md transition border border-gray-100 font-medium text-sm"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
