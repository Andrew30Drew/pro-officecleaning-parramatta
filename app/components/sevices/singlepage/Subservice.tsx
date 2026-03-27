import Image from 'next/image';
import { notFound } from 'next/navigation';

import { servicesData } from '@/app/lib/Servicedata';

interface subserviceParams {
  slung: string;
}

const Subservice = ({ slung }: subserviceParams) => {
  const service = servicesData.find((s) => s.link === slung);
  if (!service) return notFound();
  return (
    <div className="flex justify-center py-6 md:py-14 lg:py-24 md:my-24 ">
      <div className="h-auto lg:px-20 md:px-10 px-5  w-full lg:max-w-[1440px] flex flex-col-reverse lg:flex-row lg:space-x-20 space-y-10 lg:space-y-0 ">
        <div className="w-full lg:w-1/2 flex flex-col space-y-2 ">
        <Image src={service.icon} height={600} width={600} className='rounded-xl' alt='' />
          <div className="w-full flex flex-col lg:flex-row lg:space-x-2 space-y-10 lg:space-y-0 ">
            <Image src={service.img1} width={250} height={250} alt="imag1" className="lg:w-1/2 w-full rounded-xl" />
            <Image src={service.img2} width={250} height={250} alt="imag1" className="lg:w-1/2 w-full rounded-xl" />
          </div>
         
        </div>
        <div className="lg:w-1/2 w-full flex flex-col space-y-6">
          <p className="text-3xl font-bold">{service.title}</p>
          <p>{service.topPara1}</p>
          <p>{service.topPara2}</p>
          <p className="text-2xl font-semibold">What the Benefits?</p>
          <p>{service.benifts}</p>
        
        </div>
      </div>
    </div>
  );
};

export default Subservice;
