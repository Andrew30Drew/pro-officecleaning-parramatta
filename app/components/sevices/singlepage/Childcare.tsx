import React from 'react'

export const Childcare = () => {
    const details= [
    {
      id: 1,
      heading: "Understanding Childcare Cleaning",
      content:
        "Cleaning in a childcare facility goes beyond basic dusting and mopping. It involves high-frequency disinfection, allergen control, and attention to child-safe practices to protect developing immune systems.",
      sub: [
        {
          sub_id: 1,
          title: "Daily Disinfection and Surface Cleaning:",
          text: "High-touch areas like toys, tables, chairs, and learning materials are cleaned and disinfected multiple times daily to reduce germ spread.",
        },
        {
          sub_id: 2,
          title: "Safe Product Use:",
          text: "We use non-toxic, environmentally friendly, and child-safe cleaning products that ensure effective cleaning without harmful chemical residues.",
        },
        {
          sub_id: 3,
          title: "Restroom and Nappy Area Sanitisation:",
          text: "Restrooms and changing areas are cleaned with extra care, using proper disinfection procedures to maintain hygiene and odour control.",
        },
        {
          sub_id: 4,
          title: "Toy and Play Equipment Cleaning:",
          text: "Toys and play structures are cleaned regularly to prevent the buildup of saliva, dirt, and bacteria.",
        },
      ],
    },
    {
      id: 2,
      heading: "Benefits of Professional Childcare Cleaning",
      content: "",
      sub: [
        {
          sub_id: 1,
          title: "Healthier Environment for Children:",
          text: "Reduces the transmission of common childhood illnesses like colds, flu, and gastroenteritis.",
        },
        {
          sub_id: 2,
          title: "Supports Regulatory Compliance:",
          text: "Meets or exceeds state and local health and safety requirements for early learning and childcare centres.",
        },
        {
          sub_id: 3,
          title: "Peace of Mind for Parents and Staff:",
          text: "Visible cleanliness reassures families and educators that the centre prioritises health and wellbeing.",
        },
        {
          sub_id: 4,
          title: "Improved Attendance and Learning:",
          text: "Healthier spaces contribute to better attendance and uninterrupted learning experiences.",
        },
      ],
    },
    {
      id: 3,
      heading: "Choosing the Right Childcare Cleaning Provider",
      content:
        "When selecting a childcare cleaning partner, it’s essential to find one with specialised experience and sensitivity to the needs of children and educators.",
      sub: [
        {
          sub_id: 1,
          title: "Experience in Childcare Settings:",
          text: "Select a cleaning company familiar with the regulations, routines, and sensitivity required in childcare environments.",
        },
        {
          sub_id: 2,
          title: "Flexible Scheduling Around Centre Hours:",
          text: "Ensure the provider can clean before, after, or during breaks to avoid disrupting children’s activities.",
        },
        {
          sub_id: 3,
          title: "Trained and Screened Staff:",
          text: "All cleaners should undergo background checks and training specific to working in child-focused spaces.",
        },
        {
          sub_id: 4,
          title: "Positive Reviews and References:",
          text: "Choose a provider with strong testimonials from other childcare clients for trust and reliability.",
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
         Dedicated cleaning services for childcare centers, prioritising cleanliness and safety for children's well-being.
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
