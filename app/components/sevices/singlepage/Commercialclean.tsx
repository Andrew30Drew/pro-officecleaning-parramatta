import React from 'react'

export const Commercialclean = () => {
     const details= [
      {
        id: 1,
        heading: "Core Cleaning Services",
        content:
          "Core Cleaning Services focus on maintaining a consistently clean and organized work environment through regular tasks. These include dusting surfaces, vacuuming floors, emptying trash bins, and disinfecting restrooms. Daily maintenance not only enhances your workspace appearance but also promotes employee health and hygiene. We customize the service schedule to suit your business operations and foot traffic. Whether for offices, retail spaces, or clinics, our cleaning ensures reliability and professionalism every day.",

        sub: [
          {
            sub_id: 1,
            title: "Surface Cleaning",
            text: "Dusting desks, counters, and common areas to maintain a neat and clean space.",
          },
          {
            sub_id: 2,
            title: "Floor Care",
            text: "Vacuuming, sweeping, and mopping all floor types for safety and appearance.",
          },
          {
            sub_id: 3,
            title: "Waste Management",
            text: "Emptying bins and replacing liners to prevent unpleasant odors and maintain cleanliness.",
          },
          {
            sub_id: 4,
            title: "Restroom Sanitation",
            text: "Cleaning and disinfecting toilets, sinks, and fixtures to meet hygiene standards.",
          },
        ],
      },
      {
        id: 2,
        heading: "Deep Cleaning Services",
        content:
          "Deep Cleaning Services go beyond everyday maintenance to target hidden dirt, bacteria, and buildup in hard-to-reach areas. This includes carpet shampooing, detailed restroom scrubbing, and air vent cleaning. Deep cleaning is ideal for seasonal refreshes or high-traffic areas requiring extra attention. It helps extend the life of furnishings and promotes a healthier indoor environment. Our team schedules deep cleans at your convenience to minimize disruption.",
        sub: [
          {
            sub_id: 1,
            title: "Carpet Shampooing",
            text: "Removing deep-set dirt and stains from carpets using industrial-grade shampooers.",
          },
          {
            sub_id: 2,
            title: "Window Washing",
            text: "Cleaning interior and exterior windows for a streak-free, polished look.",
          },
          {
            sub_id: 3,
            title: "Air Vent Cleaning",
            text: "Eliminating dust and debris from ducts and vents to improve air quality.",
          },
          {
            sub_id: 4,
            title: "High-Touch Area Disinfection",
            text: "Sanitizing door handles, phones, keyboards, and switches to reduce germ spread.",
          },
        ],
      },
      {
        id: 3,
        heading: "Equipment and Products",
        content:
          "We use high-quality equipment and eco-friendly cleaning products to ensure safety, efficiency, and consistent results. Our tools include HEPA vacuums, automatic scrubbers, and microfiber cloths to achieve deep and precise cleaning. Eco-conscious solutions help protect your team and the environment. Every product we use is tested for effectiveness and compliance with safety standards. This allows us to clean thoroughly without compromising indoor air quality.",
        sub: [
          {
            sub_id: 1,
            title: "Eco-Friendly Chemicals",
            text: "Non-toxic, biodegradable solutions that are safe for people and the environment.",
          },
          {
            sub_id: 2,
            title: "HEPA Vacuums",
            text: "High-efficiency particulate filters that remove fine dust and allergens effectively.",
          },
          {
            sub_id: 3,
            title: "Automatic Scrubbers",
            text: "Used on large floor areas for faster, more efficient cleaning.",
          },
          {
            sub_id: 4,
            title: "Microfiber Cloths",
            text: "Traps dust and bacteria better than traditional cloths, reducing cross-contamination.",
          },
        ],
      },
      {
        id: 4,
        heading: "Industries We Serve",
        content:
          "We provide tailored commercial cleaning solutions to a wide range of industries with unique needs. From corporate offices and retail shops to medical clinics and schools, each space receives specialized attention. Our staff understands industry-specific compliance standards and delivers cleaning that meets them. We adapt our methods and schedules to suit your environment. No matter your sector, we maintain cleanliness, professionalism, and health safety.",
        sub: [
          {
            sub_id: 1,
            title: "Corporate Offices",
            text: "Clean and welcoming workspaces that boost productivity and leave a strong impression.",
          },
          {
            sub_id: 2,
            title: "Retail & Shopping Centers",
            text: "Spotless floors, fitting rooms, and entrances to enhance customer experience.",
          },
          {
            sub_id: 3,
            title: "Healthcare Facilities",
            text: "Sanitized environments that meet strict health and hygiene regulations.",
          },
          {
            sub_id: 4,
            title: "Educational Institutions",
            text: "Safe, clean classrooms and campuses to protect students and staff.",
          },
        ],
      },
      {
        id: 5,
        heading: "Our Cleaning Process",
        content:
          "Our cleaning process is structured to ensure transparency, consistency, and satisfaction at every step. We begin with a site inspection to understand your space and requirements. A customized plan is then developed and executed by trained professionals. Regular quality checks and client feedback help us continuously improve. From start to finish, our process is smooth, reliable, and results-focused.",
        sub: [
          {
            sub_id: 1,
            title: "Site Assessment",
            text: "We inspect your premises to understand your cleaning requirements and challenges.",
          },
          {
            sub_id: 2,
            title: "Custom Plan Creation",
            text: "We design a cleaning schedule and checklist tailored to your space and usage.",
          },
          {
            sub_id: 3,
            title: "Service Execution",
            text: "Our team arrives on time and follows the agreed cleaning protocols with precision.",
          },
          {
            sub_id: 4,
            title: "Feedback and Support",
            text: "We actively seek your feedback and adjust services to ensure your full satisfaction.",
          },
        ],
      },
    ]
  return (
 <div className="flex justify-center py-6 md:py-4  md:my-24 ">
      <div className="h-auto lg:px-20 md:px-10 px-5  w-full lg:max-w-[1440px]">
        <div className="lg:px-40 md:px-10 ">
          <p className="text-center font-bold lg:text-3xl text-2xl text-greenprimary ">Service Details</p>
          <p className="text-center mt-8">
         Expert commercial cleaning in North Sydney. Keep your workplace pristine, professional, and productive with Pro Clean Corp.
          </p>
        </div>

        <div>
          {details.map((service) => (
            <div
              key={service.id}
              className={`py-10  flex flex-col space-y-5 ${service.id == 1 ? 'mt-8' : 'md:my-12 '} `}
            >
              <p className="text-2xl font-bold">{service.heading}</p>
              <p>{service.content}</p>
              <div className="grid grid-col-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
                {service.sub.map((sub) => (
                  <div key={sub.sub_id} className="bg-slate-50 rounded-xl py-4 px-2 border-b-2 border-b-greenprimary">
                    <div className="border-dashed border-b-2 border-b-greenprimary text-center  h-20  font-semibold flex px-2 space-x-2 items-center">
                      <div className="relative bg-greenprimary rounded-full p-2 w-14 h-14 lg:flex items-center justify-center">
                            {/* Outer rotating dashed ring */}
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-white animate-spin-slow m-2"></div>
                            {/* Solid green background with icon */}
                            <div className="w-12 h-12 rounded-full bg-greenprimary flex items-center justify-center">
                                 <div className="text-3xl text-white">{sub.sub_id}</div>
                            </div>
                          </div>
                          <p>{sub.title}</p>
                    </div>
                    
                    <div className=" py-4 px-4">{sub.text}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
