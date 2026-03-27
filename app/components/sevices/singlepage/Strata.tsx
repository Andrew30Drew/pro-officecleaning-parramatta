import React from 'react'

export const Strata = () => {
    const  details= [
      {
        id: 1,
        heading: "Routine Strata Cleaning Services",
        content:
          "Routine strata cleaning involves regular maintenance of shared spaces in residential and commercial buildings. We service foyers, lifts, hallways, mailrooms, and stairwells, keeping them free of dust, litter, and smudges. Our team handles light rubbish removal, surface sanitisation, and floor polishing. All tasks are carried out discreetly to avoid disturbing residents. Services are scheduled around building access times.",
        sub: [
          {
            sub_id: 1,
            title: "Lift & Lobby Cleaning",
            text: "Regular polishing, mirror cleaning, and sanitisation of lift buttons and lobby surfaces.",
          },
          {
            sub_id: 2,
            title: "Hallways & Stairwell Maintenance",
            text: "Sweeping, mopping, and cobweb removal from frequently used pathways and corners.",
          },
          {
            sub_id: 3,
            title: "Bin Room & Waste Area Cleaning",
            text: "Disinfecting bin rooms and waste zones to reduce odours, pests, and health risks.",
          },
          {
            sub_id: 4,
            title: "Glass & Entryway Polishing",
            text: "Clean and streak-free entrances to make a great first impression on all visitors.",
          },
        ],
      },
      {
        id: 2,
        heading: "Deep Cleaning & Common Area Care",
        content:
          "In addition to routine maintenance, we offer deep cleaning services for high-traffic or neglected strata zones. These include machine scrubbing of floors, power washing external walkways, and stain removal from carpets or tiles. This enhances property longevity and presentation. Deep cleans are usually scheduled quarterly or biannually for best results.",
        sub: [
          {
            sub_id: 1,
            title: "Carpet Steam Cleaning",
            text: "Removes deep-set dirt, stains, and allergens from high-use carpeted areas.",
          },
          {
            sub_id: 2,
            title: "Pressure Washing Outdoors",
            text: "Cleans driveways, entrance paths, and building facades to remove grime and moss.",
          },
          {
            sub_id: 3,
            title: "Tile & Grout Treatment",
            text: "Restores shine and removes mildew or buildup in tiled common areas.",
          },
          {
            sub_id: 4,
            title: "Garage & Car Park Sweeping",
            text: "Removes dust, oil, and litter from underground or shared parking zones.",
          },
        ],
      },
      {
        id: 3,
        heading: "Specialised Strata Services & Safety",
        content:
          "Strata environments require compliance with safety and hygiene regulations. We use industry-compliant methods and eco-friendly products to minimise disruption and health risks. All our staff are trained in strata protocols and emergency access. We also offer graffiti removal, light bulb replacements, and hygiene restocking where needed.",
        sub: [
          {
            sub_id: 1,
            title: "Eco-Friendly Cleaning Products",
            text: "Safe, non-toxic solutions that respect residential environments and local regulations.",
          },
          {
            sub_id: 2,
            title: "Graffiti Removal & Wall Cleaning",
            text: "Quick removal of vandalism or unsightly marks from exterior walls and surfaces.",
          },
          {
            sub_id: 3,
            title: "Light Fixture Cleaning & Replacements",
            text: "Dusting and bulb changes in foyers, corridors, and shared staircases.",
          },
          {
            sub_id: 4,
            title: "High-Touch Sanitisation",
            text: "Regular disinfection of handrails, switches, and door handles for resident safety.",
          },
        ],
      },
      {
        id: 4,
        heading: "Why Professional Strata Cleaning Matters",
        content:
          "Strata cleaning is more than aesthetics—it ensures safety, hygiene, and the long-term value of shared property. Residents expect clean, functional spaces, and poor maintenance leads to complaints and costly repairs. A professional approach guarantees consistency, compliance, and accountability. With Pro Clean Corp, strata managers can rely on results.",
        sub: [
          {
            sub_id: 1,
            title: "Increased Resident Satisfaction",
            text: "Clean surroundings make a positive impact on tenants and homeowners alike.",
          },
          {
            sub_id: 2,
            title: "Reduced Complaints & Work Orders",
            text: "Proactive cleaning reduces issues reported to property management.",
          },
          {
            sub_id: 3,
            title: "Lower Maintenance Costs",
            text: "Preventative cleaning extends the life of building surfaces and infrastructure.",
          },
          {
            sub_id: 4,
            title: "Improved Property Value",
            text: "Well-maintained common areas improve appeal for owners and prospective buyers.",
          },
        ],
      },
      {
        id: 5,
        heading: "Tailored Strata Cleaning Plans",
        content:
          "Every strata building is different—so we offer fully tailored cleaning plans based on layout, occupancy, and budget. From boutique apartments to multi-tower complexes, we scale our services accordingly. You’ll get a dedicated team, clear communication, and regular reporting. Adjustments can be made at any time to meet changing resident needs.",
        sub: [
          {
            sub_id: 1,
            title: "Flexible Scheduling",
            text: "Choose cleaning times that suit resident schedules and building access rules.",
          },
          {
            sub_id: 2,
            title: "Detailed Cleaning Checklists",
            text: "Site-specific checklists ensure no zone is missed during routine cleans.",
          },
          {
            sub_id: 3,
            title: "Consistent Team Allocation",
            text: "You’ll see familiar faces who understand the unique needs of your property.",
          },
          {
            sub_id: 4,
            title: "Transparent Reporting",
            text: "Service logs and updates provided after each visit for accountability.",
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
           Professional cleaning services for strata properties, ensuring common areas are clean, welcoming, and well-maintained.
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
