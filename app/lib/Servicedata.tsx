

interface serviceParams {
  id: number;
  title: string;
  icon: string;
  content: string;
  link: string;
  topPara1: string;
  topPara2: string;
  img1: string;
  img2: string;
  benifts: string;

}

export const servicesData: serviceParams[] = [
  {
    id: 1,
    title: "Commercial Cleaning",
    icon: "/images/services/commercial.webp",
    link: "commercial-cleaning",
    topPara1:
      "Our Commercial Cleaning services ensure a spotless, hygienic, and welcoming business environment for your staff and clients. We customize our services to fit your schedule and space requirements.",
    topPara2:
      "With a trained team and industry-grade tools, Pro Clean Corp delivers reliable commercial cleaning for offices, retail outlets, healthcare spaces, and more—ensuring cleanliness and compliance every day.",
    benifts:
      "Enjoy a healthier workspace, reduced sick days, improved client impressions, and long-term maintenance cost savings. Pro Clean Corp ensures commercial cleaning you can count on.",
    img1: "/images/services/strata.jpg",
    img2: "/images/services/children.jpg",
    content:
      "Expert commercial cleaning in North Sydney. Keep your workplace pristine, professional, and productive with Pro Clean Corp.",
  
  },

  {
    id: 2,
    title: "Office Cleaning",
    icon: "/images/services/office.webp",
    link: "office-cleaning",
    topPara1:
      "Office cleaning services by Pro Clean Corp focus on delivering a spotless, productive, and professional work environment. From daily upkeep to deep cleaning, we provide solutions that enhance employee wellness and leave a lasting impression on visitors.",
    topPara2:
      "We understand the unique needs of office spaces and tailor our services accordingly—ensuring desks, floors, shared equipment, and communal areas remain clean, safe, and organized. A clean office isn't just hygienic—it's a reflection of your company culture.",
    benifts:
      "Pro Clean Corp’s office cleaning services support better employee health, improved morale, and a consistently professional workspace. Using industry-grade equipment and environmentally safe products, we deliver consistent, high-quality results with minimal disruption.",
    img1: "/images/services/commercial.webp",
    img2: "/images/services/office.webp",
    content:
      "Meticulous cleaning services tailored to maintain the cleanliness and hygiene of your workplace, enhancing productivity and morale.",
   
  },
  {
    id: 3,
    title: "Warehouse Cleaning",
    icon: "/images/services/warehouse.webp",
    link: "warehouse-cleaning",
    topPara1:
      "Warehouse cleaning by Pro Clean Corp ensures a safe, efficient, and organized industrial space. We address dust, debris, spills, and grime in high-traffic areas to maintain compliance and safety. Our team is trained in handling large-scale warehouse environments with minimal disruption.",
    topPara2:
      "Maintaining a clean warehouse is essential not only for health and safety but also for equipment performance and operational efficiency. Our services are designed to meet industry regulations and keep your space running smoothly and hazard-free.",
    benifts:
      "A clean warehouse reduces the risk of accidents, improves staff productivity, and keeps your goods protected. Our tailored services ensure you're compliant with workplace safety standards while boosting overall operational hygiene.",
    img1: "/images/services/commercial.webp",
    img2: "/images/services/children.jpg",
    content:
      "Specialised cleaning services to keep warehouses organised, safe, and compliant with industry standards.",
 
  },
  {
    id: 4,
    title: "Strata Cleaning",
    icon: "/images/services/strata.jpg",
    link: "strata-cleaning",
    topPara1:
      "Strata cleaning by Pro Clean Corp ensures shared residential and commercial areas are kept spotless, safe, and inviting. We maintain lobbies, hallways, lifts, staircases, and outdoor spaces with consistent attention to detail. Our strata cleaning promotes hygiene, improves property value, and creates a welcoming atmosphere for residents and visitors alike.",
    topPara2:
      "With residents, tenants, and visitors frequently using common areas, regular strata cleaning is vital. We adapt our services to meet the needs of apartments, townhouses, and mixed-use buildings, ensuring compliance with building management standards and occupant expectations.",
    benifts:
      "Well-maintained strata spaces reflect positively on building management and increase resident satisfaction. Our services reduce liability risks, preserve surfaces, and keep shared zones clean and functional. From bins to balustrades, Pro Clean Corp ensures nothing is overlooked.",
    img1: "/images/services/warehouse.webp",
    img2: "/images/services/office.webp",
    content:
      "Professional cleaning services for strata properties, ensuring common areas are clean, welcoming, and well-maintained.",
  
  },
  {
  id: 5,
  title: "Medical Centre Cleaning",
  icon: "/images/services/medical.webp",
  link: "medicalcentre-cleaning",
  topPara1:
    "Pro Clean Corp’s Medical Centre Cleaning services are designed to meet the highest standards of hygiene, safety, and compliance. We ensure that clinics, hospitals, dental offices, and other healthcare facilities are maintained to support patient health and safety.",
  topPara2:
    "Our team follows strict cleaning protocols to prevent cross-contamination, using hospital-grade disinfectants and specialised equipment. From waiting rooms to surgical areas, we focus on sanitisation, compliance, and patient confidence.",
  benifts:
    "Maintaining a clean medical environment is essential for infection control, protecting both patients and staff. With our specialised services, healthcare providers can ensure regulatory compliance and create a safe, professional setting for care delivery.",
  img1: "/images/services/medical.webp", // Consider replacing with more specific clinic images
  img2: "/images/services/strata.jpg",
  content:
    "Ensuring a safe and sterile environment for both patients and health care providers.",
 
}
,
{
  id: 6,
  title: "Childcare Cleaning",
  icon: "/images/services/children.jpg",
  link: "childcare-cleaning",
  topPara1:
    "Pro Clean Corp’s Childcare Cleaning services are designed to provide a hygienic, safe, and nurturing environment for children. We understand the importance of maintaining spotless classrooms, play areas, restrooms, and kitchens where children spend their time.",
  topPara2:
    "Our team uses child-safe products and follows strict sanitisation protocols to minimise the spread of germs and ensure full compliance with childcare regulations. With our help, centres can maintain cleanliness without disrupting learning or play.",
  benifts:
    "Proper cleaning in childcare settings supports child health, meets licensing standards, and reassures both staff and parents. Our service reduces the risk of illness outbreaks, supports a healthy learning environment, and ensures your facility is always inspection-ready.",
  img1: "/images/services/office.webp", // Consider replacing with a daycare/classroom photo
  img2: "/images/services/medical.webp",
  content:
    "Dedicated cleaning services for childcare centers, prioritising cleanliness and safety for children's well-being.",
 
}
,
{
  id: 7,
  title: "Home Cleaning",
  icon: "/images/services/home.jpg",
  link: "home-cleaning",
  topPara1:
    "Pro Clean Corp’s Home Cleaning services are designed to give you more time, peace of mind, and a spotless living environment. Whether it’s a one-bedroom apartment or a large family home, we tailor our services to suit your lifestyle and schedule.",
  topPara2:
    "We handle everything from dusting, vacuuming, and mopping to deep cleaning kitchens and bathrooms. Using safe, effective products, our professional cleaners leave your home looking and feeling fresh — every time.",
  benifts:
    "A clean home isn’t just about appearances — it promotes physical and mental well-being. With Pro Clean Corp, enjoy a healthier living space, more free time, and the comfort of knowing every corner has been properly cared for.",
  img1: "/images/services/strata.jpg", // You can optionally update these to more house-related images
  img2: "/images/services/medical.webp",
  content:
    "Reliable and professional home cleaning services tailored to your lifestyle — for a clean, safe, and stress-free living space.",

}
,
{
  id: 8,
  title: "Carpet Cleaning",
  icon: "/images/services/carpet.jpg",
  link: "carpet-cleaning",
  topPara1:
    "Pro Clean Corp’s Carpet Cleaning services are designed to restore the look, feel, and hygiene of your carpets. Whether at home or in a commercial space, our advanced cleaning methods remove deep-seated dirt, stains, and allergens effectively.",
  topPara2:
    "We use professional-grade steam and dry-cleaning systems tailored to the type and condition of your carpets. Our trained team ensures your carpets are cleaned safely, efficiently, and with minimal disruption.",
  benifts:
    "Professional carpet cleaning improves indoor air quality, extends carpet lifespan, and enhances the appearance of your space. Whether it’s routine maintenance or spot treatment, Pro Clean Corp ensures your carpets look and feel their best.",
  img1: "/images/services/strata.jpg", // Consider replacing with a relevant carpet image
  img2: "/images/services/carpet.jpg",
  content:
    "Professional carpet cleaning services that eliminate stains, dirt, and allergens — restoring freshness and comfort to your space.",

}
,
{
  id: 9,
  title: "Gym Cleaning",
  icon: "/images/services/gym.jpg",
  link: "gym-cleaning",
  topPara1:
    "Pro Clean Corp’s Gym Cleaning services are designed to keep fitness centers hygienic, fresh-smelling, and safe for members and staff. High-traffic workout environments require meticulous cleaning to prevent the spread of germs and maintain equipment integrity.",
  topPara2:
    "From sanitising workout machines and locker rooms to maintaining clean floors and mirrors, our trained professionals deliver thorough and reliable cleaning services that meet health and safety standards for gyms and health clubs.",
  benifts:
    "Maintaining a clean gym not only boosts member satisfaction but also helps reduce the spread of bacteria, fungi, and viruses. Our detailed cleaning plans are customised for fitness facilities of all sizes, with flexible scheduling to avoid disruption.",
  img1: "/images/services/gym.jpg",
  img2: "/images/services/medical.webp", // Consider replacing with another gym interior image if available
  content:
    "Specialised cleaning services for gyms and fitness centres — ensuring your equipment, floors, and amenities remain spotless, sanitised, and safe for every member.",
 
}
,
{
  id: 10,
  title: "School Cleaning",
  icon: "/images/services/school.jpg",
  link: "school-cleaning",
  topPara1:
    "Pro Clean Corp offers comprehensive school cleaning services tailored to meet the unique needs of educational institutions. Maintaining a clean, safe, and healthy learning environment is essential for students, staff, and visitors.",
  topPara2:
    "Our team uses specialised cleaning methods and products designed to handle high-traffic classrooms, cafeterias, gyms, and administrative areas, ensuring your school stays hygienic and welcoming throughout the academic year.",
  benifts:
    "Regular and thorough cleaning reduces the spread of germs and illnesses, improves air quality, and creates a pleasant atmosphere conducive to learning and development for students and staff alike.",
  img1: "/images/services/school.jpg",
  img2: "/images/services/medical.webp", // You can replace with a school-related image if available
  content:
    "Dedicated school cleaning services focused on safety, hygiene, and a clean environment to support the well-being and academic success of students.",
 
}
,
{
  id: 11,
  title: "End of Lease Cleaning",
  icon: "/images/services/endoflease.jpg",
  link: "end-of-lease-cleaning",
  topPara1:
    "Moving out of a rental property? Pro Clean Corp provides thorough end of lease cleaning services to help you meet your landlord’s requirements and secure your bond refund.",
  topPara2:
    "Our experienced team ensures every corner of the property is spotless — from deep cleaning carpets and kitchens to sanitising bathrooms and removing stubborn stains, leaving the place pristine for the next tenant.",
  benifts:
    "A professional end of lease clean reduces stress, guarantees compliance with tenancy agreements, and improves your chances of receiving a full bond refund.",
  img1: "/images/services/strata.jpg", 
  img2: "/images/services/office.webp",
  content:
    "Comprehensive end of lease cleaning that covers all aspects of your property to ensure it meets professional standards and landlord expectations.",
 
}
,
  {
    id: 12,
    title: "Church Cleaning",
    icon: "/images/services/church.jpg",
    link: "church-cleaning",
    topPara1:
      "Church cleaning services by Pro Clean Corp focus on maintaining a clean, serene, and welcoming atmosphere for worshippers and visitors. From sanctuaries to fellowship halls, our tailored approach respects the sacredness of each space while ensuring health and hygiene standards are met.",
    topPara2:
      "Our trained staff provide detailed, respectful cleaning for religious facilities — including pews, altars, classrooms, offices, and kitchens — helping churches present a pristine environment for weekly services, special ceremonies, and community gatherings.",
    benifts:
      "A clean and well-maintained church enhances the worship experience, promotes good health among attendees, and reflects the values of respect and reverence. Our services help protect valuable furnishings and architectural features while ensuring compliance with cleanliness standards.",
    img1: "/images/services/strata.jpg", // You may want to replace these with more relevant church-related images
    img2: "/images/services/medical.webp",
    content:
      "Specialised cleaning services for churches and religious institutions, focusing on reverence, detail, and community health.",
  
  },
];
