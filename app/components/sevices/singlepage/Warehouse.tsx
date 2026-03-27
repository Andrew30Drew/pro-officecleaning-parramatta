import React from 'react'

export const Warehouse = () => {
       const details= [
      {
        id: 1,
        heading: "Core Warehouse Cleaning Services",
        content:
          "Our core services include sweeping, dust control, spill cleanup, and floor scrubbing across large warehouse floors. We ensure loading docks, racking areas, and storage zones are cleaned regularly. The focus is on reducing slip hazards, contamination, and airborne dust. Services are adapted to your shift schedules for minimal downtime. Clean warehouses also reflect operational discipline and brand image.",
        sub: [
          {
            sub_id: 1,
            title: "Floor Scrubbing & Degreasing",
            text: "Heavy-duty scrubbers remove dust, oil, and chemical residue from concrete floors.",
          },
          {
            sub_id: 2,
            title: "Loading Dock Cleaning",
            text: "High-traffic entry points cleaned to remove debris and minimize tracking inside.",
          },
          {
            sub_id: 3,
            title: "Aisle & Racking Dusting",
            text: "Dust removal from shelving, beams, and pallet racks to reduce airborne contaminants.",
          },
          {
            sub_id: 4,
            title: "Restroom & Break Area Cleaning",
            text: "Sanitise common areas where warehouse staff take breaks or freshen up.",
          },
        ],
      },
      {
        id: 2,
        heading: "Deep Cleaning for Industrial Spaces",
        content:
          "Deep warehouse cleaning addresses built-up grime, machinery residue, and storage clutter in difficult-to-reach areas. This includes cleaning under racks, along high ledges, and inside machinery pits. Deep cleaning is scheduled during maintenance or downtime to avoid disruptions. We use industrial-grade tools and safe solvents suitable for sensitive goods storage. Ideal for quarterly or biannual refreshes.",
        sub: [
          {
            sub_id: 1,
            title: "High-Level Dust Removal",
            text: "Scissor lifts used to clean overhead beams, lights, and ventilation ducts.",
          },
          {
            sub_id: 2,
            title: "Equipment Cleaning",
            text: "Degrease forklifts, conveyers, and workstations to prevent buildup and improve function.",
          },
          {
            sub_id: 3,
            title: "Pallet & Storage Cleaning",
            text: "Clean around palletized goods and eliminate pests or mold-prone zones.",
          },
          {
            sub_id: 4,
            title: "Drain & Spill Area Sanitation",
            text: "Remove contaminants from drainage paths and emergency spill stations.",
          },
        ],
      },
      {
        id: 3,
        heading: "Tools & Products for Warehouse Safety",
        content:
          "Our warehouse cleaning arsenal includes ride-on scrubbers, high-reach vacuums, degreasers, and safe chemical agents. Every product we use is selected for industrial surfaces and large-scale application. We prioritize safety by using non-slip floor finishes and dust control equipment. Cleaning tools are regularly maintained to perform in tough conditions. This ensures deep cleaning without compromising warehouse operations.",
        sub: [
          {
            sub_id: 1,
            title: "Ride-On Scrubbers",
            text: "Efficient cleaning of vast floor areas with minimal labor and downtime.",
          },
          {
            sub_id: 2,
            title: "Industrial Degreasers",
            text: "Break down oil and chemical buildup safely and effectively.",
          },
          {
            sub_id: 3,
            title: "HEPA Dust Vacuums",
            text: "Remove fine airborne dust particles from racks and machinery.",
          },
          {
            sub_id: 4,
            title: "Non-Slip Cleaning Agents",
            text: "Prevent slips and injuries while maintaining surface shine.",
          },
        ],
      },
      {
        id: 4,
        heading: "Why Clean Warehouses Matter",
        content:
          "A clean warehouse ensures better logistics flow, equipment longevity, and staff morale. Dust and debris buildup can damage goods, impair machinery, and increase accident risks. Cleanliness helps meet workplace safety regulations and audits. It also promotes a culture of responsibility among workers. Pro Clean Corp helps you maintain a compliant and efficient environment year-round.",
        sub: [
          {
            sub_id: 1,
            title: "Injury & Accident Prevention",
            text: "Clean floors and equipment reduce the risk of slips, trips, and machine malfunctions.",
          },
          {
            sub_id: 2,
            title: "Pest & Contamination Control",
            text: "Regular cleaning eliminates hiding spots for pests and microbial growth.",
          },
          {
            sub_id: 3,
            title: "Improved Inventory Handling",
            text: "Well-organized, clean environments support faster stock movement and accuracy.",
          },
          {
            sub_id: 4,
            title: "Better Staff Productivity",
            text: "Employees are more focused and efficient in tidy, safe conditions.",
          },
        ],
      },
      {
        id: 5,
        heading: "Custom Warehouse Cleaning Plans",
        content:
          "We create tailored cleaning programs based on your warehouse size, layout, operations, and safety standards. Whether it's daily sweeping or monthly deep cleans, your plan is designed for flexibility and consistency. Our staff is trained in WHS-compliant procedures and PPE use. We operate during off-hours or alongside shifts to minimize disruption. Quality control ensures the same high standards every visit.",
        sub: [
          {
            sub_id: 1,
            title: "Shift-Friendly Scheduling",
            text: "Cleaning planned to avoid operational delays or downtime.",
          },
          {
            sub_id: 2,
            title: "Zoned Cleaning Approach",
            text: "Divide space into cleaning zones for better tracking and consistency.",
          },
          {
            sub_id: 3,
            title: "Trained Industrial Staff",
            text: "Cleaners familiar with warehouse layouts and equipment safety.",
          },
          {
            sub_id: 4,
            title: "Ongoing Reporting",
            text: "Detailed logs and supervisor checks after every session.",
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
          Specialised cleaning services to keep warehouses organised, safe, and compliant with industry standards.
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
