import Image from 'next/image'
import hero_img from '../../../public/images/aboutus/aboutus.png'

const Herosection = () => {
return(
    <div className="bg-greenprimary  flex w-full justify-center">
        <div className="w-full lg:max-w-[1440px]  lg:px-20 md:px-10 px-5 flex ">
            <div className="w-1/2 flex flex-col justify-center ">
            <h1 className='lg:text-[80px] md:text-[50px] text-[25px] text-white font-bold'>About Us</h1>
            <h3 className='md:text-3xl text-lg font-semibold text-white'>Home / About</h3>
            </div>
            <div className="w-1/2">
            <Image height={500} width={500} src={hero_img} alt='heroimage' className='' />
            </div>
        </div>
    </div>
)
}

export default Herosection