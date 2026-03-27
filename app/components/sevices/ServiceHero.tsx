import Image from 'next/image'
import hero_img2 from '../../../public/images/contactus/hero3.png'

const ServiceHero = () => {
return(
    <div className="bg-greenprimary  flex w-full justify-center">
        <div className="w-full lg:max-w-[1440px]  lg:px-20 md:px-10 px-5 flex ">
            <div className="w-1/2 flex flex-col justify-center ">
            <h1 className='lg:text-[80px] md:text-[50px] text-[25px] text-white font-bold'>Our Services</h1>
            <h3 className='md:text-3xl text-lg font-semibold text-white ml-0 md:ml-3'>Home / Service</h3>
            </div>
            <div className="w-1/2 flex justify-center">
            <Image height={400} width={400} src={hero_img2} alt='heroimage' className='' />
            </div>
        </div>
    </div>
)
}

export default ServiceHero