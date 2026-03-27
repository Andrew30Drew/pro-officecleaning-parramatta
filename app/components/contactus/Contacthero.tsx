import Image from 'next/image'
import hero_img from '../../../public/images/contactus/hero2.png'


const Contacthero = () => {
    return(
      <div className="bg-greenprimary  flex w-full justify-center">
        <div className="w-full lg:max-w-[1440px]  lg:px-20 md:px-10 px-5 flex ">
            <div className="w-1/2 flex flex-col justify-center ">
            <h1 className='lg:text-[80px] md:text-[50px] text-[25px] text-white font-bold'>Contact Us</h1>
            <h3 className='md:text-3xl text-lg font-semibold text-white ml-0 md:ml-3'>Home / Contact</h3>
            </div>
            <div className="w-1/2 flex justify-center">
           
              <Image height={350} width={350} src={hero_img} alt='heroimage' className='' />
            </div>
        </div>
    </div>
    )
}

export default Contacthero