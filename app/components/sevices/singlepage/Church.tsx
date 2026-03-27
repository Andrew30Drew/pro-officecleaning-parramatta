import React from 'react'

export const Church = () => {
    const  details= [
      {
        id: 1,
        heading: "Understanding Church Cleaning",
        content:
          "Church cleaning involves thoughtful care tailored to sacred spaces. Unlike typical commercial cleaning, it considers the unique materials, layouts, and spiritual importance of worship areas.",
        sub: [
          {
            sub_id: 1,
            title: "Sanctuary and Worship Area Cleaning:",
            text: "Includes dusting and sanitising pews, altars, pulpits, and musical instruments, while ensuring the preservation of sacred items.",
          },
          {
            sub_id: 2,
            title: "Common Areas and Fellowship Halls:",
            text: "Regular mopping, vacuuming, and surface disinfection in community areas to maintain a clean and welcoming atmosphere.",
          },
          {
            sub_id: 3,
            title: "Restrooms and Kitchens:",
            text: "Thorough cleaning of high-traffic areas like bathrooms and church kitchens to promote hygiene and safety.",
          },
          {
            sub_id: 4,
            title: "Respectful Practices:",
            text: "Our team is trained to respect the sanctity of each space, using appropriate equipment and procedures during services or events.",
          },
        ],
      },
      {
        id: 2,
        heading: "Benefits of Professional Church Cleaning",
        content: "",
        sub: [
          {
            sub_id: 1,
            title: "Enhanced Worship Experience:",
            text: "A clean and peaceful environment supports focus, reverence, and comfort for congregants.",
          },
          {
            sub_id: 2,
            title: "Health and Safety:",
            text: "Disinfecting frequently touched surfaces helps prevent the spread of illnesses in community gatherings.",
          },
          {
            sub_id: 3,
            title: "Event-Readiness:",
            text: "Keeps the church ready for weddings, funerals, and weekly services without last-minute scrambles.",
          },
          {
            sub_id: 4,
            title: "Preservation of Church Assets:",
            text: "Protects valuable furnishings, flooring, and architectural details through proper cleaning techniques.",
          },
        ],
      },
      {
        id: 3,
        heading: "Choosing the Right Church Cleaning Service",
        content:
          "Selecting a cleaning service for your church means choosing a team that understands the unique needs of religious facilities. Here’s what to look for:",
        sub: [
          {
            sub_id: 1,
            title: "Experience with Religious Institutions:",
            text: "Work with cleaners who are familiar with the layout and respectful practices of churches.",
          },
          {
            sub_id: 2,
            title: "Flexible Scheduling:",
            text: "Ensure cleaning can be done around service times, special events, and weekly programs.",
          },
          {
            sub_id: 3,
            title: "Trained and Trusted Staff:",
            text: "Staff should be vetted, respectful, and capable of handling valuable or delicate items responsibly.",
          },
          {
            sub_id: 4,
            title: "Positive Feedback and References:",
            text: "Look for providers with strong reputations from other churches or community spaces.",
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
      Specialised cleaning services for churches and religious institutions, focusing on reverence, detail, and community health.
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
