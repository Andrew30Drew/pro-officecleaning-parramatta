import React from 'react'

export const Endoflease = () => {
    
const details= [
    {
      id: 1,
      heading: "Understanding End of Lease Cleaning",
      content:
        "End of lease cleaning involves detailed cleaning of the entire property to restore it to a condition suitable for handover. This includes areas often neglected during regular cleaning.",
      sub: [
        {
          sub_id: 1,
          title: "Kitchen Cleaning:",
          text: "Cleaning ovens, stovetops, range hoods, sinks, cupboards, and benchtops to remove grease and grime.",
        },
        {
          sub_id: 2,
          title: "Bathroom Sanitisation:",
          text: "Deep cleaning showers, baths, toilets, tiles, mirrors, and fixtures to eliminate soap scum and bacteria.",
        },
        {
          sub_id: 3,
          title: "Carpet and Floor Cleaning:",
          text: "Vacuuming, shampooing, and stain removal for carpets; sweeping and mopping hard floors.",
        },
        {
          sub_id: 4,
          title: "Additional Services:",
          text: "Cleaning windows, walls, light fittings, doors, and skirting boards to ensure a thorough finish.",
        },
      ],
    },
    {
      id: 2,
      heading: "Benefits of Professional End of Lease Cleaning",
      content: "",
      sub: [
        {
          sub_id: 1,
          title: "Maximise Bond Refund:",
          text: "A meticulous clean helps satisfy landlord or agent requirements to get your full bond back.",
        },
        {
          sub_id: 2,
          title: "Stress-Free Move Out:",
          text: "Professional cleaners handle the tough, time-consuming cleaning, allowing you to focus on moving.",
        },
        {
          sub_id: 3,
          title: "High Cleaning Standards:",
          text: "Trained cleaners use specialised equipment and eco-friendly products to deliver superior results.",
        },
        {
          sub_id: 4,
          title: "Comprehensive Service:",
          text: "Covers all rooms and areas, leaving nothing overlooked for a spotless property handover.",
        },
      ],
    },
    {
      id: 3,
      heading: "Choosing the Right End of Lease Cleaning Service",
      content:
        "To ensure a successful end of lease clean, consider these factors when selecting a provider:",
      sub: [
        {
          sub_id: 1,
          title: "Experience and Reputation:",
          text: "Choose cleaners familiar with tenancy agreements and landlord expectations.",
        },
        {
          sub_id: 2,
          title: "Bond Back Guarantee:",
          text: "Look for services that offer a guarantee or re-clean if required by your landlord.",
        },
        {
          sub_id: 3,
          title: "Comprehensive Checklist:",
          text: "Ensure the service covers all critical cleaning tasks specified in your lease agreement.",
        },
        {
          sub_id: 4,
          title: "Flexible Scheduling:",
          text: "Cleaners who can work within your move-out timeline to meet deadlines.",
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
          Comprehensive end of lease cleaning that covers all aspects of your property to ensure it meets professional standards and landlord expectations.
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
