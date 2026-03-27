import Image from 'next/image'
import member1 from '../../../public/images/aboutus/team_mem1.jpg'
import member2 from '../../../public/images/aboutus/team_mem2.jpg'
import member3 from '../../../public/images/aboutus/team_mem3.jpg'
import member4 from '../../../public/images/aboutus/team_mem4.jpg'

const team = [
  { id: 1, name: 'James Mitchell', position: 'Operations Manager', image: member1 },
  { id: 2, name: 'Sarah Chen', position: 'Senior Cleaning Supervisor', image: member2 },
  { id: 3, name: 'David Nguyen', position: 'Commercial Cleaning Specialist', image: member3 },
  { id: 4, name: 'Emma Wilson', position: 'Quality Assurance Manager', image: member4 },
];

const personSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: team.map((member, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Person',
      name: member.name,
      jobTitle: member.position,
      worksFor: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.procleancorp.com.au/#organization',
        name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
      },
      image: 'https://www.procleancorp.com.au/meta.png',
      url: 'https://www.procleancorp.com.au/about',
    },
  })),
};

const Teammember = () => {
    return(
        <div className=" lg:py-24   py-6 md:py-4  flex justify-center ">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemaData) }}
            />
            <div className="w-full max-w-[1440px] lg:px-20 md:px-10 px-5">
                 <h2 className="text-center font-bold lg:text-3xl text-2xl text-greenprimary uppercase">
           MEET OUR TEAM
          </h2>
          <h3 className="md:text-4xl text-3xl font-medium text-darkblue text-center">We have a expert team</h3>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 w-full gap-10 py-10'>
             {
                team.map((member) => (
                    <div key={member.id} className=' '>
                        <div className='relative rounded-2xl '>
                            <Image src={member.image} alt={`${member.name} - ${member.position} at Pro Clean Corp Sydney NSW`} className='rounded-2xl w-full' />
                            <div className='mt-3 text-center'>
                              <p className='font-semibold text-darkblue'>{member.name}</p>
                              <p className='text-sm text-gray-500'>{member.position}</p>
                            </div>
                        
                            {/* <div className='bottom-0 absolute bg-transparent w-16 h-[243px]  '>
                                     <div className=" border-r-[64px] border-b-[100px] border-l-transparent border-r-transparent border-greenprimary top-0 " />
                                     <div className='bg-greenprimary h-36 rounded-bl-2xl text-white flex flex-col justify-center text-2xl space-y-6 items-center '>
                                        <FaFacebookF />
                                        <FaXTwitter />
                                        <FaInstagramSquare />
                                     </div>
                            </div> */}
                        </div>
                       
                        
                    </div>
                ))
             }
          </div>
            </div>
        </div>
    )
}

export default Teammember