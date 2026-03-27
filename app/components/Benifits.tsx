'use client';
import Image from 'next/image';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: 'Enhanced Productivity',
      content:
        'A clean and organized workspace facilitates efficiency by enabling employees to locate items easily and focus on their core tasks without distractions.',
    },
    {
      id: 2,
      title: 'Improved Health & Safety',
      content:
        'Professional commercial cleaning prevents the buildup of dust, dirt, and allergens, promoting a healthier work environment and reducing employee sick days.',
    },
    {
      id: 3,
      title: 'Professional Image',
      content:
        'Impress clients, partners, and visitors with a spotless office space that reflects your commitment to excellence and attention to detail.',
    },
    {
      id: 4,
      title: 'Cost-Effective Solutions',
      content:
        'Prevent costly equipment repairs and reduce absenteeism by maintaining a clean, well-maintained commercial environment.',
    },
    {
      id: 5,
      title: 'Compliance & Standards',
      content:
        'Ensure your business meets health and safety regulations with professional cleaning that adheres to industry standards and protocols.',
    },
    {
      id: 6,
      title: 'Employee Satisfaction',
      content:
        'Boost team morale and job satisfaction by providing a clean, comfortable workplace that employees are proud to work in.',
    },
  ];

  return (
    <section className="flex justify-center py-12 lg:py-16">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left - Images */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative">
                <Image
                  src="/images/hero/hero6.jpg"
                  alt="Commercial cleaning services Sydney NSW - Professional office cleaning"
                  width={500}
                  height={500}
                  className="w-full h-80 sm:h-96 lg:h-[600px] xl:h-[650px] object-cover rounded-2xl shadow-lg"
                  priority
                />
              </div>

              {/* Overlay Image */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 lg:-bottom-12 lg:-left-8">
                <Image
                  src="/images/hero/hero4.jpg"
                  alt="Professional commercial cleaners Sydney NSW"
                  width={180}
                  height={180}
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-xl shadow-xl border-4 border-white"
                />
              </div>

              {/* Satisfaction Badge */}
              <div className="absolute top-4 right-4 lg:top-6 lg:right-6 bg-greenprimary text-white rounded-full px-4 py-2 lg:px-6 lg:py-3 shadow-lg">
                <div className="text-center">
                  <div className="text-lg lg:text-xl font-bold">100%</div>
                  <div className="text-xs lg:text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Benefits List */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-6 lg:space-y-8">
              {/* Section Header */}
              <div className="space-y-4">
                <div className="inline-flex items-center bg-greenprimary/10 text-greenprimary px-4 py-2 rounded-full">
                  <span className="text-sm lg:text-base font-semibold uppercase tracking-wide">Key Benefits</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-darkblue leading-tight">
                  Why Choose Our Commercial <span className="text-greenprimary">Cleaning Services</span>
                </h2>

                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  Discover the advantages of professional commercial cleaning services that enhance your business
                  environment and boost productivity.
                </p>
              </div>

              {/* Benefits Timeline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-greenprimary/20"></div>

                <div className="space-y-6">
                  {benefits.map((benefit) => (
                    <div key={benefit.id} className="relative pl-12">
                      {/* Number Circle */}
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-greenprimary text-white font-bold flex items-center justify-center text-sm">
                        {benefit.id}
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="text-lg lg:text-xl font-bold text-darkblue">{benefit.title}</h3>
                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{benefit.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
