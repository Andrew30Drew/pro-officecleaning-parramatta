"use client"
import Image from "next/image";
import { servicesData } from "../../lib/Servicedata";
import { useRouter } from "next/navigation";

const Servicelist = () => {
 const router = useRouter()
  return (
    <div className=" flex w-full justify-center py-6 md:py-4 lg:py-24 my-16">
      <div className="w-full lg:max-w-[1440px]  lg:px-20 md:px-10 px-5">
        <h2 className="text-center font-bold lg:text-3xl text-2xl text-greenprimary">
          CLEANING SERVICE
        </h2>
        <p className="md:text-5xl text-3xl font-medium text-darkblue text-center mt-4">
          Our Excellent Service
        </p>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 mt-14 ">
                  {servicesData.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => router.push(`services/${item.link}`)}
                      className="bg-white rounded-lg  border-b-4 border-b-greenprimary shadow-2xl w-full group overflow-hidden transition-transform duration-300 hover:translate-y-[-10px]"
                    >
                      <div className="h-48 w-full overflow-hidden">
                        <Image
                        width={500}
                        height={500}
                          className="h-full w-full object-cover transform overflow-hidden transition-transform duration-[300ms] group-hover:scale-125 object-end"
                          src={item.icon}
                          alt="Home in Countryside"
                        />
                      </div>
        
                      <div className="p-8  flex flex-col space-y-6 ">
                        <h2 className="text-xl font-semibold">{item.title}</h2>
                        <p>{item.content}</p>
                        
                      </div>
                    </div>
                  ))}
                </div>
      </div>
    </div>
  );
};

export default Servicelist;
