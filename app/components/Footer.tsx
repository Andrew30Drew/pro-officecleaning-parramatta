import logo from '../../public/images/logo.png';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineWifiCalling3 } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Link from 'next/link';
import { servicesData } from '../lib/Servicedata';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#041c30] to-[#062744] text-white">
      {/* Main Footer Content */}
      <div className="flex justify-center py-16 lg:py-20">
        <div className="w-full lg:max-w-[1440px] lg:px-20 md:px-10 px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-start  md:justify-items-center">
            {/* Company Info & Social Links */}
            <div className="lg:col-span-1 flex flex-col items-start">
              <Link href="/" className="mb-6">
                <Image
                  src={logo}
                  alt="Pro Clean Corp - Professional Cleaning Services Sydney"
                  className="w-[180px] h-auto bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </Link>

              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                Professional cleaning services across Sydney NSW since 2016. Trusted by businesses and families for
                reliable, eco-friendly cleaning solutions.
              </p>

              <div className="flex items-center space-x-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61557847062414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full border border-gray-600 hover:border-greenprimary hover:bg-greenprimary transition-all duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebookF className="text-sm group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/procleancorps/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full border border-gray-600 hover:border-greenprimary hover:bg-greenprimary transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagramSquare className="text-sm group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://x.com/Pro_Clean_Corp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full border border-gray-600 hover:border-greenprimary hover:bg-greenprimary transition-all duration-300"
                  aria-label="Follow us on Twitter"
                >
                  <FaXTwitter className="text-sm group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.youtube.com/@ProCleanCorp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full border border-gray-600 hover:border-greenprimary hover:bg-greenprimary transition-all duration-300"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <FaYoutube className="text-sm group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/company/pro-clean-corp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full border border-gray-600 hover:border-greenprimary hover:bg-greenprimary transition-all duration-300"
                  aria-label="Connect with us on LinkedIn"
                >
                  <FaLinkedinIn className="text-sm group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="font-bold text-xl mb-6 text-white border-b-2 border-greenprimary pb-2 inline-block">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="group flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="bg-greenprimary rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <MdOutlineWifiCalling3 className="text-lg text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">24/7 Support</p>
                    <a
                      href="tel:1300494983"
                      className="text-sm font-semibold text-white hover:text-greenprimary transition-colors"
                    >
                      1300 494 983
                    </a>
                  </div>
                </div>

                <div className="group flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="bg-greenprimary rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <MdOutlineEmail className="text-lg text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Email Us</p>
                    <a
                      href="mailto:hello@procleancorp.com.au"
                      className="text-sm font-semibold text-white hover:text-greenprimary transition-colors break-all"
                    >
                      hello@procleancorp.com.au
                    </a>
                  </div>
                </div>

                <div className="group flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="bg-greenprimary rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <IoLocationOutline className="text-lg text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Head Office</p>
                    <address className="text-sm font-semibold text-white not-italic">
                      77 Garfield Street,
                      <br />
                      Wentworthville NSW 2145
                    </address>
                    <a
                      href="https://share.google/rVLemiF0puaBnNCAf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs text-greenprimary hover:text-white transition-colors duration-300"
                      aria-label="View Pro Clean Corp on Google Maps"
                    >
                      ★ View us on Google
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2 justify-items-start md:justify-items-end">
              <h3 className="font-bold text-xl mb-6 text-white border-b-2 border-greenprimary pb-2 inline-block">
                Our Professional Services
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-2 ">
                <div className="space-y-3">
                  {servicesData.slice(0, Math.ceil(servicesData.length / 2)).map((service) => (
                    <Link
                      href={`/services/${service.link}`}
                      key={service.id}
                      className="group flex md:items-center md:space-x-3 text-gray-300 hover:text-white transition-all duration-300"
                    >
                      <IoIosArrowDroprightCircle className="text-greenprimary group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                      <span className="text-sm md:text-base group-hover:underline">{service.title}</span>
                    </Link>
                  ))}
                </div>

                <div className="space-y-3">
                  {servicesData.slice(Math.ceil(servicesData.length / 2)).map((service) => (
                    <Link
                      href={`/services/${service.link}`}
                      key={service.id}
                      className="group flex md:items-center md:space-x-3 text-gray-300 hover:text-white transition-all duration-300"
                    >
                      <IoIosArrowDroprightCircle className="text-greenprimary group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                      <span className="text-sm md:text-base group-hover:underline">{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 bg-[#041c30]">
        <div className="flex justify-center py-6">
          <div className="w-full lg:max-w-[1440px] lg:px-20 md:px-10 px-5">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © 2026 <span className="font-semibold text-white">Pro Clean Corp</span>. All Rights Reserved.
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-greenprimary text-xs md:text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/sitemap-page"
                  className="text-gray-400 hover:text-greenprimary text-xs md:text-sm transition-colors duration-300"
                >
                  Sitemap
                </Link>
                <Link
                  href="/terms-of-use"
                  className="text-gray-400 hover:text-greenprimary text-xs md:text-sm transition-colors duration-300"
                >
                  Terms of Use
                </Link>
                <Link
                  href="/contact-us"
                  className="bg-greenprimary text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium hover:bg-darkblue transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
