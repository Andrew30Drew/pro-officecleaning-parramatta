import { FaShieldAlt, FaCheckCircle, FaAward, FaLeaf, FaUserShield, FaClock } from 'react-icons/fa';

const badges = [
  {
    icon: FaShieldAlt,
    title: 'Fully Insured',
    description: '$20M Public Liability',
    ariaLabel: 'Pro Clean Corp holds $20 million public liability insurance',
  },
  {
    icon: FaCheckCircle,
    title: 'Police Checked',
    description: 'All staff background verified',
    ariaLabel: 'All Pro Clean Corp staff have passed police background checks',
  },
  {
    icon: FaAward,
    title: '9+ Years Experience',
    description: 'Established 2015',
    ariaLabel: 'Pro Clean Corp has over 9 years of commercial cleaning experience since 2015',
  },
  {
    icon: FaLeaf,
    title: 'Eco-Friendly',
    description: 'Green cleaning products',
    ariaLabel: 'Pro Clean Corp uses environmentally friendly, non-toxic cleaning products',
  },
  {
    icon: FaUserShield,
    title: 'Trained & Certified',
    description: 'Professional cleaners',
    ariaLabel: 'All Pro Clean Corp cleaners are professionally trained and certified',
  },
  {
    icon: FaClock,
    title: '24/7 Available',
    description: 'Emergency cleaning service',
    ariaLabel: 'Pro Clean Corp offers 24/7 emergency commercial cleaning services in Sydney NSW',
  },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-y border-gray-100" aria-label="Certifications and trust credentials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 uppercase tracking-widest font-semibold mb-8">
          Why Sydney Businesses Trust Pro Clean Corp
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-slate-50 transition-colors"
              aria-label={badge.ariaLabel}
            >
              <div className="bg-greenprimary/10 p-3 rounded-full mb-3">
                <badge.icon className="text-greenprimary text-2xl" aria-hidden="true" />
              </div>
              <p className="font-semibold text-darkblue text-sm">{badge.title}</p>
              <p className="text-gray-500 text-xs mt-1">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
