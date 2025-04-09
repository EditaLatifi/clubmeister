import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
const Header = () => {


  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between  sm:px-0 py-4">
        <Link href="/home" className="flex items-center">
          <Image
            src="/1.png"
            alt="Logo"
            width={200}
            quality={100}
            height={50}
            className="object-contain h-20 "
          />
        </Link>
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                href="/home"
                className={`font-semibold tracking-wide ${scrolled ? "text-black" : "text-gray-700"
                  } hover:text-teal-600`}
              >
               ddsd
              </Link>
            </li>
            <li>
              <Link
                href="/rrethnesh"
                className={`font-semibold tracking-wide ${scrolled ? "text-black" : "text-gray-700"
                  } hover:text-teal-600`}
              >
      dd
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className={`font-semibold tracking-wide ${scrolled ? "text-black" : "text-gray-700"
                  } hover:text-teal-600`}
              >
             dd
              </Link>
            </li>
            <li>
              <Link
                href="/cars"
                className={`font-semibold tracking-wide ${scrolled ? "text-black" : "text-gray-700"
                  } hover:text-teal-600`}
              >
              dd
              </Link>
            </li>
            {/* <li>
              <Link
                href="/gallerija"
                className={`font-semibold tracking-wide ${scrolled ? "text-black" : "text-gray-700"
                  } hover:text-teal-600`}
              >
              {t("header.gallery")}
              </Link>
            </li> */}
            <li>
              <Link
                href="/contactus"
                className={`font-semibold tracking-wide ${scrolled ? "text-black" : "text-gray-700"
                  } hover:text-teal-600`}
              >
             dd
              </Link>
            </li>
           
          </ul>
        </nav>
        <Link
          href="/cars"
          className="hidden md:inline-flex bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition"
        >
          eqwe
        </Link>
      
        <button
          className={`md:hidden p-2 pr-9 ${scrolled ? "text-black" : "text-gray-700"
            } focus:outline-none`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>
      {mobileMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-start p-4 space-y-4">
            <li>
              <Link href="/home" className="text-gray-800 hover:text-teal-600">
              dd
              </Link>
            </li>
            <li>
              <Link href="/rrethnesh" className="text-gray-800 hover:text-teal-600">
               dd
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-800 hover:text-teal-600"
              >
               dd
              </Link>
            </li>
            <li>
              <Link
                href="/cars"
                className="text-gray-800 hover:text-teal-600"
              >
              dd
              </Link>
            </li>
        
            <li>
              <Link
                href="/contactus"
                className="text-gray-800 hover:text-teal-600"
              >
                dasd
              </Link>
            </li>
            <li>     </li>
            <li>
              <Link
                href="/"
                className="w-full bg-teal-500 text-white px-4 py-2 rounded-lg text-center hover:bg-teal-600 transition"
              >
               test
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
export default Header;
