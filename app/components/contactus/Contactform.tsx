"use client";
import { useState } from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { servicesData } from "@/app/lib/Servicedata";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  serviceType: string;
  bestTime: string;
  message: string;
}

type SubmitStatus = "idle" | "success" | "error";

const Contactform = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    serviceType: "",
    bestTime: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service";
    }

    if (!formData.bestTime) {
      newErrors.bestTime = "Please select best time to call";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Prepare data for the Universal Contact Form API
      const submissionData = {
        ...formData,
        domain: "procleancorp.com.au", // Required field for the API
        sourceDomain: window.location.hostname, // Optional: current website domain
      };

      const response = await fetch("https://forms.app-dev.lk/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          serviceType: "",
          bestTime: "",
          message: "",
        });
      } else {
        console.error("API Error:", result?.message || "Unknown error");
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="w-full flex justify-center py-12 lg:py-16">
      <div className="w-full lg:max-w-[1440px] lg:px-20 md:px-10 px-5 flex flex-col lg:flex-row lg:space-x-10 space-y-10">
        <div className="w-full  lg:w-1/2 space-y-6 ">
          <h2 className="text-center font-bold lg:text-3xl text-2xl text-greenprimary lg:text-start">
            CONTACT US
          </h2>
          <p className="md:text-5xl text-3xl font-medium text-darkblue text-center lg:text-start mt-4">
            Get in touch with us
          </p>
          <p>
            <span className="uppercase md:text-lg font-semibold text-greenprimary">
              Address:
            </span>{" "}
            77 Garfield Street, Wentworthville NSW 2145
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-6">
              <div className="bg-[#4dd17e] p-1 md:w-20 md:h-20  w-14 h-14 rounded-full">
                <div className="bg-greenprimary w-full h-full rounded-full flex items-center justify-center text-white md:text-3xl text-xl">
                  <PiPhoneCallFill />
                </div>
              </div>
              <div>
                <p className=" font-medium uppercase text-gray-600 text-xs md:text-base">
                  Customer Service :
                </p>
                <p className="md:text-xl font-bold">1300 494 983</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="bg-[#4dd17e] p-1 md:w-20 md:h-20  w-14 h-14 rounded-full">
                <div className="bg-greenprimary w-full h-full rounded-full flex items-center justify-center text-white text-xl md:text-3xl">
                  <IoMail />
                </div>
              </div>
              <div>
                <p className=" text-xs md:text-base font-medium uppercase text-gray-600">
                  Email:
                </p>
                <p className="md:text-xl font-bold">
                  hello@procleancorp.com.au
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 border-dashed border-gray-400"></div>
          <div className="flex items-center space-x-3">
            <p className="text-base font-semobold uppercase text-gray-600">
              Follow us :
            </p>
            <div className="flex space-x-3 items-center text-gray-500">
              <a
                href="https://www.facebook.com/profile.php?id=61557847062414"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border-[1px] border-gray-500"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/procleancorps/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border-[1px] border-gray-600"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://x.com/Pro_Clean_Corp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border-[1px] border-gray-600"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.youtube.com/@ProCleanCorp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border-[1px] border-gray-600"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/company/pro-clean-corp/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border-[1px] border-gray-600"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <form onSubmit={handleSubmit}>
            <div className="flex lg:space-x-3 flex-col lg:flex-row space-y-3 lg:space-y-0 ">
              <div className="lg:w-1/2 w-full">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`px-4 py-5 w-full rounded-xl bg-slate-100 ${
                    errors.firstName ? "border-2 border-red-500" : ""
                  }`}
                  placeholder="First Name*"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="lg:w-1/2 w-full">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`px-4 py-5 w-full rounded-xl bg-slate-100 ${
                    errors.lastName ? "border-2 border-red-500" : ""
                  }`}
                  placeholder="Last Name*"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="flex lg:space-x-3 mt-3 lg:mt-7 flex-col lg:flex-row space-y-3 lg:space-y-0">
              <div className="lg:w-1/2 w-full">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`px-4 py-5 w-full rounded-xl bg-slate-100 ${
                    errors.phone ? "border-2 border-red-500" : ""
                  }`}
                  placeholder="Phone Number*"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div className="lg:w-1/2 w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`px-4 py-5 w-full rounded-xl bg-slate-100 ${
                    errors.email ? "border-2 border-red-500" : ""
                  }`}
                  placeholder="Email*"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="flex lg:space-x-3 mt-3 lg:mt-7 flex-col lg:flex-row space-y-3 lg:space-y-0">
              <div className="lg:w-1/2 w-full">
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className={`px-4 py-5 w-full rounded-xl bg-slate-100 ${
                    errors.serviceType ? "border-2 border-red-500" : ""
                  } ${formData.serviceType ? "text-black" : "text-gray-400"}`}
                >
                  <option value="" disabled hidden>
                    Select a Service*
                  </option>
                  {servicesData.map((service) => (
                    <option
                      key={service.id}
                      value={service.title}
                      className="text-black"
                    >
                      {service.title}
                    </option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.serviceType}
                  </p>
                )}
              </div>
              <div className="lg:w-1/2 w-full">
                <select
                  name="bestTime"
                  value={formData.bestTime}
                  onChange={handleInputChange}
                  className={`px-4 py-5 w-full rounded-xl bg-slate-100 ${
                    errors.bestTime ? "border-2 border-red-500" : ""
                  } ${formData.bestTime ? "text-black" : "text-gray-400"}`}
                >
                  <option value="" disabled hidden>
                    Best Time to Call*
                  </option>
                  <option value="Morning" className="text-black">
                    Morning
                  </option>
                  <option value="Afternoon" className="text-black">
                    Afternoon
                  </option>
                  <option value="Evening" className="text-black">
                    Evening
                  </option>
                  <option value="Anytime" className="text-black">
                    Anytime
                  </option>
                </select>
                {errors.bestTime && (
                  <p className="text-red-500 text-sm mt-1">{errors.bestTime}</p>
                )}
              </div>
            </div>
            <div className="flex space-x-3 mt-3 lg:mt-7">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="px-4 py-5 w-full rounded-xl bg-slate-100"
                placeholder="Your message..."
              />
            </div>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                <p className="font-semibold">Thank you for your message!</p>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                <p className="font-semibold">
                  Sorry, there was an error sending your message.
                </p>
                <p>Please try again or contact us directly.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-4 mt-3 lg:mt-7 text-white font-bold rounded-full ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-greenprimary hover:bg-green-600 transition-colors"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
