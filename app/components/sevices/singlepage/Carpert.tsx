import React from 'react'

export const Carpert = () => {
   const   details= [
    {
      id: 1,
      heading: "Understanding Carpet Cleaning",
      content:
        "Carpets trap dust, bacteria, and allergens deep within their fibres. Regular vacuuming helps, but only professional cleaning can fully extract embedded debris and revive worn or stained carpet surfaces.",
      sub: [
        {
          sub_id: 1,
          title: "Steam Cleaning:",
          text: "Hot water extraction penetrates deep into fibres, breaking down grime and sanitising carpets without leaving residue.",
        },
        {
          sub_id: 2,
          title: "Dry Cleaning Options:",
          text: "Low-moisture cleaning is ideal for delicate carpets or spaces needing fast drying times.",
        },
        {
          sub_id: 3,
          title: "Stain and Odour Removal:",
          text: "We treat tough stains and lingering odours from pets, food, and spills using specialised eco-safe products.",
        },
        {
          sub_id: 4,
          title: "Fabric Protection:",
          text: "Add an optional protective coating to help your carpets resist future stains and wear.",
        },
      ],
    },
    {
      id: 2,
      heading: "Benefits of Professional Carpet Cleaning",
      content: "",
      sub: [
        {
          sub_id: 1,
          title: "Enhanced Appearance:",
          text: "Bring life back to dull, stained carpets with professional-level deep cleaning.",
        },
        {
          sub_id: 2,
          title: "Healthier Indoor Environment:",
          text: "Remove allergens, bacteria, and dust mites to improve air quality and hygiene.",
        },
        {
          sub_id: 3,
          title: "Extended Carpet Life:",
          text: "Regular maintenance prevents premature wear, preserving texture and colour.",
        },
        {
          sub_id: 4,
          title: "Cost-Effective Care:",
          text: "Routine professional cleaning reduces the need for costly carpet replacement.",
        },
      ],
    },
    {
      id: 3,
      heading: "Choosing the Right Carpet Cleaning Service",
      content:
        "Your carpets deserve care from trained professionals who understand how to treat each fabric type and condition. Here's what to look for:",
      sub: [
        {
          sub_id: 1,
          title: "Experience with Various Carpet Types:",
          text: "From wool to synthetic blends, choose a provider who knows how to handle different materials.",
        },
        {
          sub_id: 2,
          title: "Advanced Equipment and Methods:",
          text: "Ensure they use high-quality machines and proven techniques for deep and safe cleaning.",
        },
        {
          sub_id: 3,
          title: "Eco-Friendly and Safe Products:",
          text: "Especially important for homes with children or pets — non-toxic, biodegradable solutions are a must.",
        },
        {
          sub_id: 4,
          title: "Satisfaction Guarantee and Reviews:",
          text: "Reputable cleaners offer peace of mind through customer satisfaction guarantees and strong feedback.",
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
           Professional carpet cleaning services that eliminate stains, dirt, and allergens — restoring freshness and comfort to your space.
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
