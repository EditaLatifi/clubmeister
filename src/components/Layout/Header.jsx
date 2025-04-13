import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";

import logo from "/public/logo3.svg";
import logo1 from "/public/logo1.png";

const navLinks = [
  { label: "Prices", path: "/pricing" },
  { label: "Functions", path: "/functions" },
  { label: "Live Demo", path: "/demo" },
  { label: "Club Knowledge", path: "/blog" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <header className="bg-white max-w-[1350px] mx-auto w-full flex items-center justify-between px-4 py-6 relative z-50">
      {/* Logo */}
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          width={289}
          height={48}
          className="w-[180px] md:w-[289px]"
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 text-[22px] font-[500] font-poppins items-center">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`px-3 py-2 rounded-md ${
              isActive(link.path)
                ? "text-[#6D011C] "
                : "text-[#616161] hover:text-[#6D011C]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Login Button (Desktop) */}
      <Link href="/login" className="hidden md:flex">
        <div className="flex items-center gap-2 px-3 py-2 border border-[#6D011C] bg-transparent text-[#6D011C] rounded-[7.5px] w-[206px] h-[60px] font-montserrat text-[16px] justify-center">
          <Image src={logo1} alt="icon" width={20} height={20} />
          Sign In
          </div>
      </Link>

      {/* Mobile Burger */}
      <button
        className="md:hidden text-[#6D011C] z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Fullscreen Mobile Nav */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 text-[22px] font-[500] font-poppins z-40">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className={`w-full text-center py-4 ${
                isActive(link.path)
                  ? "text-[#6D011C]"
                  : "text-[#616161]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Login Button (Mobile) */}
          <Link href="/login" onClick={() => setMenuOpen(false)}>
            <div className="mt-4 flex items-center gap-2 px-4 py-3 border border-[#6D011C] bg- text-[#6D011C] rounded-[7.5px] w-[206px] h-[60px] justify-center">
              <Image src={logo1} alt="icon" width={20} height={20} />
              Sign In
            </div>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
