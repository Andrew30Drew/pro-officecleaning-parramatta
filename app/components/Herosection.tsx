'use client';
import { IoCall, IoTimeOutline } from 'react-icons/io5';
import { FaArrowRight, FaLeaf, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import heroimg1 from '../../public/images/hero/hero5.jpg';
import Image from 'next/image';

const Herosection = () => {
  const slides = [
    {
      title: 'Professional Commercial Cleaning Services Sydney NSW',
      subtitle: 'Pro Clean Corp - Expert Office & Industrial Cleaners',
      description:
        'Premier commercial cleaning services in Sydney NSW. Fully insured and certified cleaning professionals with 9+ years experience. Over 1,200 satisfied business customers and 4.8★ rating. Serving all Sydney metropolitan areas.',
    },
    {
      title: 'Commercial Office Cleaning Sydney NSW',
      subtitle: 'Professional Business Cleaning Solutions',
      description:
        'Expert office cleaning, industrial cleaning, and commercial property maintenance across Sydney NSW. From medical centres to warehouses - we deliver spotless results for all business types.',
    },
    {
      title: 'Trusted Sydney NSW Commercial Cleaners',
      subtitle: 'Reliable Business Cleaning Services',
      description:
        'Flexible commercial cleaning schedules to suit your business needs. Daily, weekly, or monthly cleaning services. Licensed, insured professionals serving Sydney NSW businesses since 2015.',
    },
  ];

  return (
    <section 
      className="relative w-full min-h-screen lg:min-h-[60vh] xl:min-h-[60vh]"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Structured Data for Hero Section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': 'https://www.procleancorp.com.au/#organization',
            name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
            alternateName: 'Pro Clean Corp',
            description:
              'Professional commercial cleaning services in Sydney NSW specializing in office cleaning, industrial cleaning, medical centre cleaning, and warehouse cleaning. Licensed, insured professionals with 9+ years experience serving over 1,200 businesses.',
            url: 'https://www.procleancorp.com.au',
            logo: 'https://www.procleancorp.com.au/meta.png',
            image: 'https://www.procleancorp.com.au/meta.png',
            telephone: '1300494983',
            email: 'hello@procleancorp.com.au',
            foundingDate: '2015',
            slogan: 'Professional Commercial Cleaning Services Sydney NSW',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '77 Garfield Street',
              addressLocality: 'Sydney NSW',
              addressRegion: 'NSW',
              postalCode: '2164',
              addressCountry: 'AU',
            },
            areaServed: {
              '@type': 'City',
              name: 'Sydney NSW',
              containedInPlace: {
                '@type': 'State',
                name: 'New South Wales',
              },
            },
            serviceType: [
              'Commercial Cleaning Services',
              'Office Cleaning Sydney NSW',
              'Industrial Cleaning Sydney NSW',
              'Medical Centre Cleaning',
              'Warehouse Cleaning',
            ],
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'Professional License',
              recognizedBy: {
                '@type': 'Organization',
                name: 'Insurance Provider',
              },
            },
          }),
        }}
      />

      {/* Background for all devices */}
      <div className="absolute inset-0 z-0">
        {/* For Desktop */}
        <video
          className="hidden lg:block w-full h-full object-cover brightness-75"
          autoPlay
          muted
          loop
          preload="none"
          poster={heroimg1.src}
        >
          <source src="https://procleancorp.com.au/wp-content/uploads/2025/03/v4.mp4" type="video/mp4" />
        </video>

        {/* For Mobile & Tablet */}
        <div className="block lg:hidden w-full h-full brightness-75">
          <Image
            src={heroimg1}
            alt="Professional commercial cleaning services Sydney NSW - Pro Clean Corp office cleaners"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen lg:min-h-[60vh] xl:min-h-[60vh] flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl px-4  gap-8 lg:gap-16 mx-auto text-center lg:text-left py-16 lg:py-12 xl:py-16">
        {/* Left - Slider */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
          <Swiper modules={[Autoplay]} autoplay={{ delay: 4000, disableOnInteraction: false }} loop className="w-full">
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div>
                  <h1 
                    id="hero-heading"
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-greenprimary drop-shadow-lg leading-tight mb-3 lg:mb-4"
                  >
                    {slide.title}
                  </h1>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl text-white font-semibold drop-shadow-lg mb-4 lg:mb-6">
                    {slide.subtitle}
                  </h2>
                  <p className="max-w-lg lg:max-w-2xl text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-white drop-shadow-lg mx-auto lg:mx-0 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mt-8 lg:mt-10 w-full max-w-sm lg:max-w-none">
                    <Link
                      href="/contact-us"
                      className="hidden lg:flex lg:w-52 xl:w-56 flex-none items-center justify-between pl-6 bg-greenprimary text-white rounded-full py-4 pr-2 hover:bg-gold focus:bg-gold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-greenprimary transition-colors duration-300 shadow-lg hover:shadow-xl"
                      aria-label="Get free quote for commercial cleaning services in Sydney NSW from Pro Clean Corp"
                    >
                      <span className="text-lg font-semibold whitespace-nowrap">Get Free Quote</span>
                      <div className="rounded-full p-3 bg-white/10">
                        <FaArrowRight className="text-sm text-white" />
                      </div>
                    </Link>

                    <a
                      href="tel:1300494983"
                      className="flex items-center justify-between pl-6 bg-white border-2 border-white rounded-full py-5 lg:py-4 pr-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-greenprimary focus:ring-offset-2 transition-colors duration-300 shadow-lg hover:shadow-xl lg:w-52 xl:w-56 lg:flex-none"
                      aria-label="Call Pro Clean Corp at 1300 494 983 for immediate commercial cleaning quotes in Sydney NSW"
                    >
                      <div className="flex items-center gap-3 lg:gap-0 lg:flex-col lg:items-start">
                        <div className="lg:hidden rounded-full p-3 bg-greenprimary flex-shrink-0">
                          <IoCall className="text-lg text-white" />
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-greenprimary text-lg lg:text-base font-medium">Call Us Now</span>
                          <span className="text-greenprimary font-bold text-xl lg:text-lg">1300 494 983</span>
                        </div>
                      </div>
                      <div className="hidden lg:block rounded-full p-3 bg-greenprimary/10 flex-shrink-0">
                        <IoCall className="text-lg text-greenprimary" />
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right - Info Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 lg:gap-6 text-white max-w-lg lg:max-w-none">
          {/* 24/7 Available */}
          <div className="bg-white/20 backdrop-blur-sm h-36 lg:h-40 xl:h-44 rounded-xl p-4 lg:p-5 flex flex-col justify-center items-center lg:items-start hover:bg-white/30 transition-all duration-300">
            <div className="bg-green-700 p-2.5 lg:p-3 h-11 w-11 lg:h-12 lg:w-12 rounded-lg inline-flex items-center justify-center mb-3 lg:mb-4">
              <IoTimeOutline size={24} className="lg:text-2xl" />
            </div>
            <h3 className="font-bold text-base sm:text-lg lg:text-lg mb-1">24/7 Service</h3>
            <p className="text-sm sm:text-base lg:text-sm text-center lg:text-left opacity-90">
              Emergency cleaning available
            </p>
          </div>

          {/* Eco-Friendly */}
          <div className="bg-white/20 backdrop-blur-sm h-36 lg:h-40 xl:h-44 rounded-xl p-4 lg:p-5 flex flex-col justify-center items-center lg:items-start hover:bg-white/30 transition-all duration-300">
            <div className="bg-green-700 p-2.5 lg:p-3 h-11 w-11 lg:h-12 lg:w-12 rounded-lg inline-flex items-center justify-center mb-3 lg:mb-4">
              <FaLeaf size={24} className="lg:text-2xl" />
            </div>
            <h3 className="font-bold text-base sm:text-lg lg:text-lg mb-1">Eco-Friendly</h3>
            <p className="text-sm sm:text-base lg:text-sm text-center lg:text-left opacity-90">
              Green commercial cleaning
            </p>
          </div>

          {/* Insured Team */}
          <div className="bg-white/20 backdrop-blur-sm h-36 lg:h-40 xl:h-44 rounded-xl p-4 lg:p-5 flex flex-col justify-center items-center lg:items-start hover:bg-white/30 transition-all duration-300">
            <div className="bg-green-700 p-2.5 lg:p-3 h-11 w-11 lg:h-12 lg:w-12 rounded-lg inline-flex items-center justify-center mb-3 lg:mb-4">
              <FaShieldAlt size={24} className="lg:text-2xl" />
            </div>
            <h3 className="font-bold text-base sm:text-lg lg:text-lg mb-1">Fully Insured</h3>
            <p className="text-sm sm:text-base lg:text-sm text-center lg:text-left opacity-90">
              Licensed commercial cleaners
            </p>
          </div>

          {/* Sydney NSW Wide */}
          <div className="bg-white/20 backdrop-blur-sm h-36 lg:h-40 xl:h-44 rounded-xl p-4 lg:p-5 flex flex-col justify-center items-center lg:items-start hover:bg-white/30 transition-all duration-300">
            <div className="bg-green-700 p-2.5 lg:p-3 h-11 w-11 lg:h-12 lg:w-12 rounded-lg inline-flex items-center justify-center mb-3 lg:mb-4">
              <FaMapMarkerAlt size={24} className="lg:text-2xl" />
            </div>
            <h3 className="font-bold text-base sm:text-lg lg:text-lg mb-1">Sydney NSW</h3>
            <p className="text-sm sm:text-base lg:text-sm text-center lg:text-left opacity-90">
              All metro business areas
            </p>
          </div>

          {/* Commercial Services */}
          <div className="h-auto col-span-2 w-full bg-white/20 backdrop-blur-sm rounded-xl flex flex-wrap justify-center gap-2 lg:gap-3 px-4 lg:px-5 py-4 lg:py-5 hover:bg-white/30 transition-all duration-300">
            <Link
              href="/services/office-cleaning"
              className="px-4 py-2.5 lg:py-2 rounded-xl bg-white/20 text-sm lg:text-sm hover:bg-green-600 transition-all duration-300 hover:scale-105"
            >
              Office Cleaning
            </Link>
            <Link
              href="/services/commercial-cleaning"
              className="px-4 py-2.5 lg:py-2 rounded-xl bg-green-600 text-sm lg:text-sm hover:bg-green-700 transition-all duration-300 hover:scale-105"
            >
              Commercial Cleaning
            </Link>
            <Link
              href="/services/medicalcentre-cleaning"
              className="px-4 py-2.5 lg:py-2 rounded-xl bg-white/20 text-sm lg:text-sm hover:bg-green-600 transition-all duration-300 hover:scale-105"
            >
              Medical Centre
            </Link>
            <Link
              href="/services/warehouse-cleaning"
              className="px-4 py-2.5 lg:py-2 rounded-xl bg-white/20 text-sm lg:text-sm hover:bg-green-600 transition-all duration-300 hover:scale-105"
            >
              Warehouse Cleaning
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
