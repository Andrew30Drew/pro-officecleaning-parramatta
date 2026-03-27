import React from 'react'

export const Gym = () => {
    const details= [
    {
      id: 1,
      heading: "Understanding Gym Cleaning",
      content:
        "Gyms are high-contact environments with constant exposure to sweat, skin oils, and airborne particles. Regular and targeted cleaning is essential to uphold hygiene standards and provide a welcoming atmosphere.",
      sub: [
        {
          sub_id: 1,
          title: "Daily Equipment Sanitisation:",
          text: "Disinfecting weights, benches, cardio machines, and high-touch surfaces like door handles and touchscreens.",
        },
        {
          sub_id: 2,
          title: "Locker Room and Restroom Maintenance:",
          text: "Thorough cleaning of showers, toilets, sinks, and changing areas to prevent mold and bacteria buildup.",
        },
        {
          sub_id: 3,
          title: "Floor and Mat Cleaning:",
          text: "Mopping and vacuuming gym flooring, mats, and stretching zones with appropriate cleaning agents that are safe for athletic use.",
        },
        {
          sub_id: 4,
          title: "Odour Control and Ventilation:",
          text: "Neutralising odours and maintaining fresh airflow through sanitised HVAC vents and air fresheners.",
        },
      ],
    },
    {
      id: 2,
      heading: "Benefits of Professional Gym Cleaning",
      content: "",
      sub: [
        {
          sub_id: 1,
          title: "Health & Safety Compliance:",
          text: "Helps prevent skin infections, illnesses, and ensures you meet local health standards.",
        },
        {
          sub_id: 2,
          title: "Improved Member Retention:",
          text: "A visibly clean and fresh gym boosts member confidence and satisfaction.",
        },
        {
          sub_id: 3,
          title: "Extended Equipment Lifespan:",
          text: "Removing sweat and debris from machines helps prevent rust, damage, and malfunction.",
        },
        {
          sub_id: 4,
          title: "Custom Cleaning Schedules:",
          text: "Flexible cleaning routines designed to work around your gym’s busiest hours with minimal disruption.",
        },
      ],
    },
    {
      id: 3,
      heading: "Choosing the Right Gym Cleaning Service",
      content:
        "Fitness centers require a cleaning provider that understands the unique needs of athletic environments. Here's what to consider:",
      sub: [
        {
          sub_id: 1,
          title: "Industry-Specific Experience:",
          text: "Work with professionals who know how to clean fitness equipment and moisture-prone areas properly.",
        },
        {
          sub_id: 2,
          title: "Health-Focused Products:",
          text: "Use of hospital-grade, non-toxic disinfectants to ensure safety for all gym users.",
        },
        {
          sub_id: 3,
          title: "Responsive Support and Flexibility:",
          text: "Quick response times and the ability to adjust services based on gym usage patterns.",
        },
        {
          sub_id: 4,
          title: "Trusted by Leading Facilities:",
          text: "Check for reviews, testimonials, or references from other gyms to confirm quality and reliability.",
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
           Specialised cleaning services for gyms and fitness centres — ensuring your equipment, floors, and amenities remain spotless, sanitised, and safe for every member.
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
