import React from "react";
import Link from "next/link";
import {
    BsGeoAlt,
    BsTelephone,
    BsEnvelope
  } from "react-icons/bs";
  import {
    FaFacebook,
    FaInstagram,
    FaTiktok,
    FaAirbnb,
    FaPaypal,
    FaCcVisa,
    FaCcMastercard
  } from "react-icons/fa";
  
const Footer = () => {
 

  return (
    <footer className="bg-[#0f3039] text-white py-10">
      <div className="container mx-auto lg:px-24 sm:px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info Section */}
          <div>
            <h1 className="text-2xl font-bold mb-4">eqew</h1>
            <div className="space-y-2">
              <div className="flex items-center">
                <BsEnvelope className="mr-2" />
                <p>dasda</p>
              </div>
              <div className="flex items-center">
                <BsTelephone className="mr-2" />
                <p>ddasd</p>
              </div>
              <div className="flex items-center">
                <BsTelephone className="mr-2" />
                <p>eqweq</p>
              </div>
              <div className="flex items-center">
                <BsGeoAlt className="mr-2" />
                <p>
                 eqwe
                  <Link href="#" className="underline">
            eqwe
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">wqeqw</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="hover:underline">
              eqeq
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                eqwe
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:underline">
                eqwe
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">eqwe</h4>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61561708601034" className="text-xl">
                <FaFacebook />
              </Link>
              <Link href="https://www.instagram.com/r_r_rent_a_car/" className="text-xl">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} weqeqw. wqeqw
        </p>
      </div>
    </footer>
  );
};

export default Footer;
