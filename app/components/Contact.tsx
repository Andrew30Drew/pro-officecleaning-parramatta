import React from 'react'
import { servicesData } from "@/app/lib/Servicedata";

export const Contact = () => {
  return (
    <div className='flex justify-center py-6 md:py-4 lg:py-24 lg:my-24 my-12'>
        <div className='w-full max-w-[1440px] lg:px-20 md:px-10 px-5 '>
            <div>
                   <h2 className="text-center font-bold lg:text-3xl text-2xl text-greenprimary uppercase">
          Get Ready to Start!
          </h2>
          <h3 className="md:text-4xl text-3xl font-medium text-darkblue text-center mt-1">It's fast, free and very easy</h3>
            </div>
            <div className='flex justify-center mt-8'>
                <div className='w-full lg:w-3/4'>
                     <form>
                        <div className="flex lg:space-x-3 flex-col lg:flex-row space-y-3 lg:space-y-0 ">
                          <input
                            type="text"
                            className="px-4 py-5 lg:w-1/2 w-full rounded-xl bg-slate-100"
                            placeholder="First Name*"
                          />
                          <input
                            type="text"
                            className="px-4 py-5 lg:w-1/2  w-full rounded-xl bg-slate-100"
                            placeholder="Last Name*"
                          />
                        </div>
                        <div className="flex lg:space-x-3 mt-3 lg:mt-7 flex-col lg:flex-row space-y-3 lg:space-y-0">
                          <input
                            type="text"
                            className="px-4 py-5 lg:w-1/2 w-full rounded-xl bg-slate-100"
                            placeholder="Phone Number*"
                          />
                          <input
                            type="text"
                            className="px-4 py-5 lg:w-1/2 w-full rounded-xl bg-slate-100"
                            placeholder="Email*"
                          />
                        </div>
                        <div className="flex lg:space-x-3 mt-3 lg:mt-7 flex-col lg:flex-row space-y-3 lg:space-y-0">
                          <select
                            className={`px-4 py-5 lg:w-1/2 w-full rounded-xl bg-slate-100 text-gray-400`}
                            defaultValue=""
                          >
                            <option value="" disabled hidden>
                              Select a Service*
                            </option>
                            {servicesData.map((services) => (
                              <option
                                key={services.id}
                                value={services.title}
                                className="text-black"
                              >
                                {services.title}
                              </option>
                            ))}
                          </select>
                          <select
                            className={`px-4 py-5 lg:w-1/2 w-full rounded-xl bg-slate-100 text-gray-400`}
                            defaultValue=""
                          >
                            <option value="" disabled hidden>
                              Select Time*
                            </option>
                            <option value="Morning" className="text-black">
                              Morning
                            </option>
                            <option value="Evening" className="text-black">
                              Evening
                            </option>
                          </select>
                        </div>
                        <div className="flex space-x-3 mt-3 lg:mt-7">
                          <textarea
                            rows={3}
                            className="px-4 py-5 w-full rounded-xl bg-slate-100"
                            placeholder="Your message..."
                          />
                        </div>
                        <div className='flex justify-end'>
 <button
                        
                          className="bg-greenprimary px-8 py-4 mt-3 lg:mt-7 text-white font-bold rounded-full"
                        >
                          Send Message
                        </button>
                        </div>
                       
                      </form>
                </div>

            </div>
        
        </div>
    </div>
  )
}
