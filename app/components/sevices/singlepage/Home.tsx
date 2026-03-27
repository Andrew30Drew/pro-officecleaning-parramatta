import React from 'react'

export const Home = () => {
     const details= [
    {
      id: 1,
      heading: "Understanding Home Cleaning",
      content:
        "Home cleaning is more than just tidying up — it’s about creating a safe, organised, and hygienic environment. Our services can be scheduled regularly or as a one-off deep clean.",
      sub: [
        {
          sub_id: 1,
          title: "Routine Cleaning:",
          text: "Includes vacuuming, dusting, mopping, surface wiping, kitchen counters, and bathroom cleaning to keep your home fresh and orderly.",
        },
        {
          sub_id: 2,
          title: "Deep Cleaning Services:",
          text: "Targeting areas that require occasional but thorough attention such as baseboards, oven interiors, windows, and behind furniture.",
        },
        {
          sub_id: 3,
          title: "Eco-Friendly Products:",
          text: "We use non-toxic, environmentally responsible cleaning products that are safe for children, pets, and sensitive surfaces.",
        },
        {
          sub_id: 4,
          title: "Customisable Checklists:",
          text: "Choose the areas and tasks that matter most to you — whether it’s focusing on bathrooms or doing a full spring clean.",
        },
      ],
    },
    {
      id: 2,
      heading: "Benefits of Professional Home Cleaning",
      content: "",
      sub: [
        {
          sub_id: 1,
          title: "Healthier Living Environment:",
          text: "Eliminates allergens, bacteria, and dust mites that can affect your family’s health.",
        },
        {
          sub_id: 2,
          title: "More Free Time:",
          text: "Spend less time cleaning and more time relaxing, working, or enjoying life with loved ones.",
        },
        {
          sub_id: 3,
          title: "Consistent Results:",
          text: "Professional cleaners ensure high standards are met every visit — with attention to detail you can see and feel.",
        },
        {
          sub_id: 4,
          title: "Stress Reduction:",
          text: "A tidy, fresh-smelling home helps reduce mental clutter and improves overall wellbeing.",
        },
      ],
    },
    {
      id: 3,
      heading: "Choosing the Right Home Cleaning Service",
      content:
        "When hiring a home cleaning service, it’s important to find a provider that understands your needs, respects your space, and delivers reliable results.",
      sub: [
        {
          sub_id: 1,
          title: "Trusted and Vetted Staff:",
          text: "All cleaners are background-checked and professionally trained to handle your home with care and discretion.",
        },
        {
          sub_id: 2,
          title: "Flexible Scheduling Options:",
          text: "Whether you need weekly, fortnightly, or one-time service, we work around your schedule — not the other way around.",
        },
        {
          sub_id: 3,
          title: "Transparent Pricing:",
          text: "No hidden fees. Get clear quotes and flexible packages suited to your budget and needs.",
        },
        {
          sub_id: 4,
          title: "Positive Reviews and Repeat Clients:",
          text: "We’re proud to be trusted by many returning families who rely on us for dependable, high-quality home care.",
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
           Reliable and professional home cleaning services tailored to your lifestyle — for a clean, safe, and stress-free living space.
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
