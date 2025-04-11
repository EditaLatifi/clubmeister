import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo3.svg"; 
import logo1 from "/public/logo1.png"
import { Menu, X } from "lucide-react"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#FFFFFF] max-w-[1350px] mx-auto w-full flex items-center justify-between px-2 py-8">
      <Link href="/">
        <div className="flex items-center gap-2">
        <Image src={logo} alt="Logo" width={289} height={48.06} className="w-[200px] md:w-[289px]"/>
        </div>
      </Link>

      {/* Desktop Nav */}
      <nav className="font-[Poppins] hidden md:flex gap-[32px] text-[#616161] font-poppins text-[22px] font-[500]">
        <Link href="/about">About</Link>
        <Link href="/functions">Functions</Link>
        <Link href="/demo">Live Demo</Link>
        <Link href="/pricing">Prices</Link>
        <Link href="/knowledge">Club Knowledge</Link>
      </nav>

      <Link href="/login">
        <div className="hidden md:flex items-center gap-2 px-[6.25px] py-[3.13px] border border-[#6D011C] bg-transparent text-[#6D011C] rounded-[7.5px] w-[206px] h-[60px] font-[Montserrat] text-[16px] justify-center">
          <Image src={logo1} alt="icon" width={20} height={20} />
          Log In
        </div>
      </Link>

      {/* Burger Icon */}
      <button className="md:hidden text-[#6D011C]" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 z-50 font-poppins">
          <Link href="/about">About</Link>
          <Link href="/functions">Functions</Link>
          <Link href="/demo">Live Demo</Link>
          <Link href="/pricing">Prices</Link>
          <Link href="/knowledge">Club Knowledge</Link>
          <Link href="/login">
            <div className="flex items-center gap-2 px-[6.25px] py-[3.13px] border border-[#6D011C] bg-[#6D011C] text-white rounded-[7.5px] w-[206px] h-[60px] font-montserrat text-[16px] justify-center">
              <Image src={logo1} alt="icon" width={20} height={20} />
              Log In
            </div>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
