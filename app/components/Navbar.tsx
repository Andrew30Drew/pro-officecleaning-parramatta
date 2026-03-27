'use client';
import Image from 'next/image';
import logo from '../../public/images/logo.png';

import { IoCall, IoLocationOutline } from 'react-icons/io5';
import { MdOutlineEmail, MdOutlineWifiCalling3 } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { FaFacebookF, FaInstagramSquare, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdMenu } from 'react-icons/md';
import { FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [menuopen, setMenuopen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setMenuopen(!menuopen);
  };

  const isActive = (path: string): boolean => pathname === path || pathname.startsWith(`${path}/`);

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const socialLinks = [
    { href: 'https://www.facebook.com/profile.php?id=61557847062414', icon: FaFacebookF },
    { href: 'https://www.instagram.com/procleancorps/?hl=en', icon: FaInstagramSquare },
    { href: 'https://x.com/Pro_Clean_Corp', icon: FaXTwitter },
    { href: 'https://www.youtube.com/@ProCleanCorp', icon: FaYoutube },
    { href: 'https://www.linkedin.com/company/pro-clean-corp/', icon: FaLinkedinIn },
  ];

  const SocialIcons = () => (
    <div className="flex items-center space-x-3">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border-[1px] border-white hover:bg-white hover:text-greenprimary transition-all duration-300"
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Desktop view */}
      <div className="sticky top-0 z-50">
        <div className="bg-darkblue w-full md:flex justify-center p-3 hidden">
          <div className="w-full lg:max-w-[1440px] lg:px-20 md:px-10 flex justify-between text-white">
            <div className="flex items-center lg:space-x-8 space-x-4">
              <div className="flex space-x-2 items-center lg:text-lg">
                <IoCall /> 1300 494 983
              </div>
              <div className="flex space-x-2 items-center lg:text-lg">
                <MdOutlineEmail /> hello@procleancorp.com.au
              </div>
              <div className="flex space-x-2 items-center lg:text-lg">
                <GrLocation /> Sydney, NSW
              </div>
            </div>
            <SocialIcons />
          </div>
        </div>

        <div
          className={`bg-greenprimary md:flex justify-center p-3 hidden transition-all duration-300 ${
            isScrolled ? 'backdrop-blur-md bg-greenprimary/80' : 'bg-greenprimary'
          }`}
        >
          <div className="w-full lg:max-w-[1440px] lg:px-20 md:px-10 flex justify-between">
            <Link href="/">
              <Image width="120" height="120" src={logo} alt="logo" className="bg-white p-2 rounded-md" />
            </Link>
            <ul className="flex items-center space-x-12 lg:text-xl text-lg font-normal text-white">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/contact-us', label: 'Contact Us' },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <li
                    className={`cursor-pointer px-5 py-2 rounded-full transition-all duration-300 ${
                      isActive(item.href) ? 'bg-white text-greenprimary' : 'hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Contact - This will scroll away */}
      <div className="block md:hidden bg-darkblue text-white px-5 py-3">
        <div className="flex flex-col space-y-2 items-center">
          <div className="flex space-x-2 items-center lg:text-lg">
            <IoCall /> 1300 494 983
          </div>
          <div className="flex space-x-2 items-center lg:text-lg">
            <MdOutlineEmail /> hello@procleancorp.com.au
          </div>
          <div className="flex space-x-2 items-center lg:text-lg">
            <GrLocation /> Sydney, NSW
          </div>
          <SocialIcons />
        </div>
      </div>

      {/* Mobile Header - This will stick to top */}
      <div className="sticky top-0 z-50 md:hidden">
        <div
          className={`bg-greenprimary w-full flex items-center px-5 py-2 justify-between text-white transition-all duration-300 ${
            isScrolled ? 'backdrop-blur-md bg-greenprimary/90 shadow-lg' : 'bg-greenprimary'
          }`}
        >
          <Link href="/">
            <Image src={logo} alt="logo" width={70} height={64} className="bg-white p-2 rounded-md" />
          </Link>
          <button onClick={handleClick} className="text-3xl font-bold">
            {menuopen ? <FiX /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Professional Mobile Menu */}
      {menuopen && (
        <div className="fixed inset-0 z-50 bg-gradient-to-b from-darkblue via-[#0a2744] to-darkblue text-white overflow-y-auto flex flex-col md:hidden">
          {/* Header */}
          <div className="bg-greenprimary w-full flex items-center px-5 py-3 justify-between border-b border-white/20">
            <Link href="/" onClick={() => setMenuopen(false)}>
              <Image src={logo} alt="logo" width={70} height={64} className="bg-white p-2 rounded-md shadow-lg" />
            </Link>
            <button onClick={handleClick} className="text-3xl font-bold">
              <FiX />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="px-6 py-8">
            <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-6">Navigation</h2>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/contact-us', label: 'Contact Us' },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <li
                    onClick={() => setMenuopen(false)}
                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-greenprimary text-white'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/contact-us"
                onClick={() => setMenuopen(false)}
                className="block w-full bg-greenprimary hover:bg-green-600 text-white text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* Contact details */}
          <div className="px-6 py-6 border-t border-white/20 bg-white/5">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                <div className="bg-greenprimary rounded-full p-2">
                  <MdOutlineWifiCalling3 className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Call Anytime</p>
                  <p className="font-semibold">1300 494 983</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                <div className="bg-greenprimary rounded-full p-2">
                  <MdOutlineEmail className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email Us</p>
                  <p className="font-semibold text-sm">hello@procleancorp.com.au</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                <div className="bg-greenprimary rounded-full p-2">
                  <IoLocationOutline className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Office Address</p>
                  <p className="font-semibold text-sm">
                    77 Garfield Street,
                    <br />
                    Wentworthville NSW 2145
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="px-6 py-4 border-t border-white/20 mt-auto">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Follow Us</h3>
            <div className="flex space-x-3 justify-center">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 hover:bg-greenprimary transition-all duration-300"
                  >
                    <IconComponent className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-white/20 bg-darkblue">
            <p className="text-center text-xs text-gray-400">© 2025 Pro Clean Corp. All Rights Reserved.</p>
            <div className="flex items-center space-x-6 justify-center mt-3">
              <Link
                href="/privacy-policy"
                onClick={() => setMenuopen(false)}
                className="text-xs text-gray-400 hover:text-greenprimary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                onClick={() => setMenuopen(false)}
                className="text-xs text-gray-400 hover:text-greenprimary"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
