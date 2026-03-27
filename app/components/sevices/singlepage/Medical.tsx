import React from 'react'

export const Medical = () => {
   const  details= [
    {
      id: 1,
      heading: "Understanding Medical Centre Cleaning",
      content:
        "Medical cleaning requires strict adherence to healthcare regulations and hygiene protocols. It involves thorough sanitisation, disinfection, and the handling of biohazards in clinical and non-clinical areas.",
      sub: [
        {
          sub_id: 1,
          title: "Infection Control Protocols:",
          text: "We use hospital-grade disinfectants and colour-coded equipment to prevent cross-contamination between zones such as patient rooms and staff areas.",
        },
        {
          sub_id: 2,
          title: "Clinical and Non-Clinical Area Cleaning:",
          text: "From reception desks to operating rooms, we provide consistent and careful cleaning based on the specific requirements of each area.",
        },
        {
          sub_id: 3,
          title: "Waste Management:",
          text: "We follow proper disposal practices for general, recyclable, and medical waste, including sharps and biohazards where required.",
        },
        {
          sub_id: 4,
          title: "Confidentiality and Sensitivity:",
          text: "Our staff are trained to work discreetly in sensitive medical environments, respecting privacy and ensuring minimal disruption to care delivery.",
        },
      ],
    },
    {
      id: 2,
      heading: "Benefits of Professional Medical Cleaning",
      content: "",
      sub: [
        {
          sub_id: 1,
          title: "Improved Patient Safety:",
          text: "Reduces the risk of healthcare-associated infections (HAIs) by maintaining a sterile and sanitised environment.",
        },
        {
          sub_id: 2,
          title: "Regulatory Compliance:",
          text: "Helps you meet cleaning standards required by health departments, infection control boards, and accrediting agencies.",
        },
        {
          sub_id: 3,
          title: "Professional Appearance:",
          text: "A spotless medical centre fosters trust and confidence among patients, families, and staff.",
        },
        {
          sub_id: 4,
          title: "Operational Efficiency:",
          text: "With cleaning handled by professionals, healthcare teams can focus more fully on patient care.",
        },
      ],
    },
    {
      id: 3,
      heading: "Choosing the Right Medical Cleaning Provider",
      content:
        "Hiring a cleaning provider for your medical centre is not just about cleanliness — it’s about trust, safety, and compliance. Here's what to consider:",
      sub: [
        {
          sub_id: 1,
          title: "Healthcare Cleaning Experience:",
          text: "Choose a provider with proven expertise in medical settings, including hospitals, GP clinics, and dental practices.",
        },
        {
          sub_id: 2,
          title: "Specialised Training:",
          text: "Ensure cleaners are trained in infection control, PPE use, and healthcare-specific protocols.",
        },
        {
          sub_id: 3,
          title: "Certifications and Insurance:",
          text: "Work only with providers who are fully insured and meet ISO or other industry-recognised standards.",
        },
        {
          sub_id: 4,
          title: "Strong Client References:",
          text: "Look for testimonials and references from other healthcare facilities to validate quality and reliability.",
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
          Ensuring a safe and sterile environment for both patients and health care providers.
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
