"use client";
import Image from "next/image";
import user from "../../public/images/user1.png";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import { IoIosStar } from "react-icons/io";


const feedbacks = [
  {
    name: "Christine R.",
    suburb: "Parramatta NSW",
    date: "February 2026",
    service: "Office Cleaning",
    rating: 5,
    feedback:
      "Pro Clean Corp has been cleaning our Parramatta office for over 8 months now. The team is always on time, thorough, and professional. Our staff love coming in to a fresh, clean workspace every morning. Highly recommend for any Sydney business.",
    image: user,
  },
  {
    name: "Daniel F.",
    suburb: "Chatswood NSW",
    date: "January 2026",
    service: "Commercial Cleaning",
    rating: 5,
    feedback:
      "Transformed our Chatswood showroom completely. The commercial cleaning team handled everything — floors, windows, restrooms — to an immaculate standard. Clients have actually commented on how clean the space looks. Will definitely continue with Pro Clean Corp.",
    image: user,
  },
  {
    name: "Priya S.",
    suburb: "North Sydney NSW",
    date: "March 2026",
    service: "Office Cleaning",
    rating: 5,
    feedback:
      "We switched to Pro Clean Corp after our previous cleaner kept letting us down. What a difference — reliable, detail-oriented, and the communication is excellent. Our North Sydney office has never looked better.",
    image: user,
  },
  {
    name: "Michael T.",
    suburb: "Wetherill Park NSW",
    date: "January 2026",
    service: "Warehouse Cleaning",
    rating: 5,
    feedback:
      "Pro Clean Corp manages the cleaning for our 3,000m² Wetherill Park warehouse. They handle everything efficiently with minimal disruption to our operations. The site is always safe, clean, and compliant. Outstanding service.",
    image: user,
  },
  {
    name: "Sarah L.",
    suburb: "Kogarah NSW",
    date: "February 2026",
    service: "Medical Centre Cleaning",
    rating: 5,
    feedback:
      "As a medical centre manager, hygiene standards are critical. Pro Clean Corp understands exactly what's required. Their hospital-grade cleaning protocols give us complete confidence. Thoroughly professional team every single visit.",
    image: user,
  },
];

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevFeedback = () => {
    setCurrentIndex((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  };

  const nextFeedback = () => {
    setCurrentIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  };

  const current = feedbacks[currentIndex];

  return (
    <div className="flex justify-center bg-darkblue py-24 ">
      <div className="w-full max-w-[1440px] lg:px-20 md:px-10 px-5 text-white flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-14">
        {/* Left Text Section */}
        <div className="lg:w-1/3 flex flex-col space-y-6">
          <p className="text-greenprimary lg:text-3xl text-2xl font-bold uppercase">
            Testimonials
          </p>
          <p className="lg:text-5xl text-2xl">What Our Customers Say?</p>
          <p>
            <span className="font-semibold">
              Read glowing testimonials from satisfied businesses who have
              experienced the Pro Clean Corp difference.
            </span>{" "}
            Our dedicated team is committed to providing exceptional cleaning
            services that go beyond just surface level.
          </p>
        </div>

        {/* Feedback Card */}
        <div className="lg:w-2/3 bg-slate-50 rounded-xl text-black relative flex items-center justify-center ">
          <div className="p-10 w-full">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Image
                  src={current.image}
                  alt={current.name}
                  className="h-16 w-16 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-xl font-bold">{current.name}</p>
                  <p className="text-sm text-gray-500">{current.service} · {current.suburb}</p>
                  <div className="text-greenprimary flex text-xl items-center space-x-1 mt-1">
                    {Array.from({ length: current.rating }).map((_, i) => <IoIosStar key={i} />)}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <Image height={48} width={48} src="/images/quotes1.png" alt="quotes" />
                <p className="text-xs text-gray-400">{current.date}</p>
              </div>
            </div>
            <p className="mt-6 text-lg">{current.feedback}</p>
            <div className="flex justify-end mt-6 space-x-4">
              <button
                className="bg-greenprimary text-white text-2xl rounded-full p-2"
                onClick={prevFeedback}
              >
                <FaArrowLeft />
              </button>
              <button
                className="bg-greenprimary text-white text-2xl rounded-full p-2"
                onClick={nextFeedback}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
