import Image from "next/image";
import logo from "/public/logo-yellow.svg";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#6D011C] text-white">
      {/* Top Section */}
      <div className="max-w-[1350px] mx-auto px-4 py-[40px] flex flex-col gap-10">
        {/* Logo + Description */}
        <div className="space-y-[20px]">
          <div className="lg:mt-[100px] flex items-center lg:ml-[-20px] ml-0 justify-center lg:justify-start">
            <Image
              src={logo}
              alt="ClubMeister Logo"
              width={300}
              height={80}
              className="w-[200px] sm:w-[280px] lg:ml-6 lg:w-[500px] h-auto lg:mb-[30px]"
            />
          </div>
          <p className="text-[#FFFFFF]  max-w-[580px] text-[16px] sm:text-[20px] lg:text-[22px] leading-[24px] sm:leading-[26px] lg:leading-[28px] font-poppins text-center lg:text-left">
            Streamline membership, finances, and documents with ClubMeister – the ultimate platform for<br className="hidden sm:block" /> managing your club with ease.
          </p>
        </div>

        {/* Menu */}
        <ul className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-[14px] sm:text-[15px] lg:text-[16px] font-poppins border-b border-[#D9D9D9] mt-[10px] pb-4 w-full">
          <li className="font-semibold">Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>Our Process</li>
          <li>Contact Us</li>
          <li>Impressum</li>
        </ul>

        {/* Bottom Line: Location + Icons */}
        <div className="lg:mb-[70px] flex flex-col-reverse sm:flex-row justify-between items-center w-full gap-4">
        <p className="text-[13px] sm:text-[14px] font-poppins text-center sm:text-left">
            Made in Switzerland
          </p>
          <div className="flex items-center gap-4">
            <FaLinkedinIn className="text-white hover:text-[#F5E7B8] cursor-pointer text-lg" />
            <FaInstagram className="text-white hover:text-[#F5E7B8] cursor-pointer text-lg" />
            <FaFacebookF className="text-white hover:text-[#F5E7B8] cursor-pointer text-lg" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#590016] text-center py-4 text-[13px] sm:text-[15px] text-white font-poppins">
        Copyright © 2025 Clubmeister | Powered by Berna Consulting
      </div>
    </footer>
  );
};

export default Footer;
