'use client';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { servicesData } from '@/app/lib/Servicedata';
import { useRouter } from 'next/navigation';
interface SingleServiceHeroProps {
  title: string;
  image: string; // this type is used for imported images in Next.js
}
const Subheropage = ({ image }: SingleServiceHeroProps) => {
  const router = useRouter();
  return (
    <div className="flex justify-center py-6 md:py-4 lg:py-24 my-12 md:my-24 bg-red-100">
      <div className="h-auto lg:px-20 md:px-10 px-5  w-full lg:max-w-[1440px] flex flex-col-reverse lg:flex-row lg:space-x-20 space-y-10 lg:space-y-0 ">
        <div className=" w-full lg:w-2/5 mt-10  lg:mt-0">
          <div>
            <div className="bg-greenprimary rounded-t-2xl py-4 w-full">
              <p className="text-white text-2xl font-bold px-12">All Services</p>
            </div>
            <div className="bg-slate-100 rounded-b-2xl w-full p-5 px-12 flex flex-col space-y-8">
              {servicesData.map((service) => (
                <div
                  onClick={() => router.push(`services/${service.link}`)}
                  key={service.id}
                  className="border-b-slate-200  border-b-[1px] pb-2  font-semibold flex items-center space-x-3"
                >
                  <FaArrowRight className="text-greenprimary" />
                  <p>{service.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <Image width={800} height={800} src={image} alt="img" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Subheropage;
