import React from 'react'

export const Office = () => {
    const details=[
      {
        id: 1,
        heading: "Core Office Cleaning Tasks",
        content:
          "Our core services keep your office spotless day-to-day, ensuring all key areas—from workstations to restrooms—are cleaned thoroughly. We handle all general cleaning needs such as vacuuming, waste removal, and sanitization. The goal is to create a tidy and safe workspace for staff and visitors. Services are flexible and scheduled based on your hours and needs. Every clean is done with care and attention to detail.",
        sub: [
          {
            sub_id: 1,
            title: "Desk & Surface Cleaning",
            text: "Wipe and sanitize desks, monitors, keyboards, and meeting tables to reduce germs and clutter.",
          },
          {
            sub_id: 2,
            title: "Floor Cleaning",
            text: "Vacuum carpets and mop hard floors to keep the office fresh and slip-free.",
          },
          {
            sub_id: 3,
            title: "Kitchen & Pantry Areas",
            text: "Clean countertops, appliances, and sinks to promote hygiene in shared food spaces.",
          },
          {
            sub_id: 4,
            title: "Restroom Maintenance",
            text: "Disinfect toilets, basins, mirrors, and replenish supplies for a sanitary bathroom experience.",
          },
        ],
      },
      {
        id: 2,
        heading: "Deep Cleaning & Sanitisation",
        content:
          "We offer intensive deep cleaning to target overlooked and high-touch areas in your office. These services are ideal during seasonal transitions, after events, or periodically to maintain top hygiene. Tasks include high-dusting, window washing, and steam cleaning of carpets and upholstery. Our team uses disinfectants approved for workplace safety. Deep cleans help prevent bacteria buildup and create a healthier indoor space.",
        sub: [
          {
            sub_id: 1,
            title: "Carpet & Upholstery Care",
            text: "Steam clean and remove stains from office chairs, carpets, and reception furniture.",
          },
          {
            sub_id: 2,
            title: "High-Touch Point Disinfection",
            text: "Sanitize door handles, switches, lift buttons, and shared equipment.",
          },
          {
            sub_id: 3,
            title: "Window & Partition Glass Cleaning",
            text: "Polish glass panels and internal windows for a clear, professional finish.",
          },
          {
            sub_id: 4,
            title: "Hard-to-Reach Areas",
            text: "Clean vents, baseboards, ceiling corners, and light fixtures for thorough coverage.",
          },
        ],
      },
      {
        id: 3,
        heading: "Advanced Tools & Cleaning Products",
        content:
          "We invest in commercial-grade equipment and eco-safe cleaning solutions to ensure safe, thorough, and fast cleaning results. Our vacuum systems feature HEPA filters to improve air quality. Microfiber cloths and green-certified products are used wherever possible. All materials are tested and compliant with workplace safety standards. This approach helps us deliver consistent results while minimizing environmental impact.",
        sub: [
          {
            sub_id: 1,
            title: "HEPA Filter Vacuums",
            text: "Trap allergens and dust particles to improve indoor air for staff.",
          },
          {
            sub_id: 2,
            title: "Eco-Friendly Chemicals",
            text: "Non-toxic, biodegradable products that are safe for office use.",
          },
          {
            sub_id: 3,
            title: "Microfiber Cloths & Mops",
            text: "Capture more dirt with less chemical use—ideal for sensitive areas.",
          },
          {
            sub_id: 4,
            title: "Touch-Free Dispensers",
            text: "Installed and maintained to reduce germ transmission in washrooms and kitchens.",
          },
        ],
      },
      {
        id: 4,
        heading: "Why Office Cleaning Matters",
        content:
          "A clean office contributes to productivity, reduces absenteeism, and leaves a strong impression on clients and partners. Beyond aesthetics, proper cleaning supports employee health and mental wellbeing. It’s a key factor in workplace safety and staff morale. Pro Clean Corp ensures your office space reflects the professionalism of your business. Regular cleaning also helps protect your furnishings and equipment from wear.",
        sub: [
          {
            sub_id: 1,
            title: "Healthier Work Environment",
            text: "Fewer germs mean reduced sickness and fewer missed workdays.",
          },
          {
            sub_id: 2,
            title: "Increased Employee Focus",
            text: "Tidy surroundings reduce distractions and improve mental clarity.",
          },
          {
            sub_id: 3,
            title: "Client Confidence",
            text: "A clean office boosts trust and builds your professional reputation.",
          },
          {
            sub_id: 4,
            title: "Asset Preservation",
            text: "Regular care extends the lifespan of floors, furniture, and electronics.",
          },
        ],
      },
      {
        id: 5,
        heading: "Tailored Office Cleaning Plans",
        content:
          "We offer flexible cleaning plans that align with your working hours, office size, and specific needs. Our team works closely with you to create a schedule that avoids disruptions and ensures full coverage. Whether you need after-hours cleaning, weekend service, or day porter support, we've got you covered. Every plan is backed by trained professionals and quality checks. You can count on consistent, reliable results—day in, day out.",
        sub: [
          {
            sub_id: 1,
            title: "Custom Schedules",
            text: "Daily, weekly, or monthly visits based on your business hours.",
          },
          {
            sub_id: 2,
            title: "After-Hours Service",
            text: "Cleaning done outside work hours to avoid disruption.",
          },
          {
            sub_id: 3,
            title: "Dedicated Team",
            text: "Trusted cleaners familiar with your premises and expectations.",
          },
          {
            sub_id: 4,
            title: "Ongoing Quality Checks",
            text: "Regular inspections and feedback loops ensure high standards.",
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
           Meticulous cleaning services tailored to maintain the cleanliness and hygiene of your workplace, enhancing productivity and morale.
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
