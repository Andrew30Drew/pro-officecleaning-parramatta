

import Image from "next/image";


interface SingleServiceHeroProps {
  title: string;
}

const SingleServiceHero = ({ title }: SingleServiceHeroProps) => {
  return (
    <div className="bg-greenprimary  flex w-full justify-center">
        <div className="w-full lg:max-w-[1440px]  lg:px-20 md:px-10 px-5 flex ">
            <div className="w-1/2 flex flex-col justify-center ">
            <h1 className='lg:text-[50px] md:text-[30px] text-[20px] text-white font-bold'>{title}{" "}Sydney NSW</h1>
            <h3 className='md:text-2xl text-sm font-semibold text-white '>Service / {title}</h3>
            </div>
            <div className="w-1/2 flex justify-center">
           
              <Image height={350} width={350} src={`/images/contactus/hero2.png`} alt='heroimage' className='' />
            </div>
        </div>
    </div>
  );
};

export default SingleServiceHero;
