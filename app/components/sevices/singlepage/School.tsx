import React from 'react'

export const School = () => {
   const  details= [
    {
      id: 1,
      heading: "Understanding School Cleaning",
      content:
        "School cleaning involves detailed and frequent cleaning tasks aimed at maintaining a healthy and safe environment for children and staff. These tasks cover classrooms, restrooms, cafeterias, and recreational areas.",
      sub: [
        {
          sub_id: 1,
          title: "Classroom Cleaning:",
          text: "Dusting and wiping desks, chairs, whiteboards, and electronic equipment to minimise allergens and germs.",
        },
        {
          sub_id: 2,
          title: "Restroom Sanitisation:",
          text: "Thorough cleaning and disinfecting of toilets, sinks, floors, and high-touch surfaces to prevent the spread of illness.",
        },
        {
          sub_id: 3,
          title: "Common Areas and Hallways:",
          text: "Regular sweeping, mopping, and sanitising of floors, doors, and handrails to maintain cleanliness throughout the school.",
        },
        {
          sub_id: 4,
          title: "Cafeteria Cleaning:",
          text: "Cleaning tables, chairs, food prep areas, and waste disposal zones to ensure hygiene and prevent pests.",
        },
      ],
    },
    {
      id: 2,
      heading: "Benefits of Professional School Cleaning",
      content: "",
      sub: [
        {
          sub_id: 1,
          title: "Healthier Learning Environment:",
          text: "Reduces absenteeism by minimising exposure to bacteria, viruses, and allergens.",
        },
        {
          sub_id: 2,
          title: "Enhanced Student and Staff Safety:",
          text: "Proper cleaning prevents accidents caused by spills and clutter while promoting a hygienic space.",
        },
        {
          sub_id: 3,
          title: "Positive Image for the School:",
          text: "A clean and well-maintained school improves reputation among parents, students, and the community.",
        },
        {
          sub_id: 4,
          title: "Compliance with Health Standards:",
          text: "Ensures adherence to local regulations and guidelines for educational facility cleanliness.",
        },
      ],
    },
    {
      id: 3,
      heading: "Choosing the Right School Cleaning Service",
      content:
        "When selecting a school cleaning provider, consider the following factors to ensure high-quality service:",
      sub: [
        {
          sub_id: 1,
          title: "Experience in Educational Facilities:",
          text: "Look for cleaners familiar with the unique challenges and schedules of schools.",
        },
        {
          sub_id: 2,
          title: "Safe and Eco-friendly Products:",
          text: "Use of non-toxic and environmentally friendly cleaning agents safe for children and staff.",
        },
        {
          sub_id: 3,
          title: "Flexible Scheduling:",
          text: "Cleaning services that work around school hours to minimise disruption to learning.",
        },
        {
          sub_id: 4,
          title: "Reliable and Trustworthy Staff:",
          text: "Background-checked and trained cleaners to ensure the safety and security of the school community.",
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
            Dedicated school cleaning services focused on safety, hygiene, and a clean environment to support the well-being and academic success of students.
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
