'use client';

import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import plane from "/public/Asset 5.svg"; // adjust path if needed
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import avatar from "/public/avatar.png"; // Replace with your avatar image

const testimonials = [
  {
    name: "Kelly Williams",
    role: "Head of Design, Layers",
    message: "ClubMeister has transformed the way we manage our club. Everything is in one place!",
  },
  {
    name: "Kelly Williams",
    role: "Head of Design, Layers",
    message: "Love the simplicity, fast service and the way customer support actually cares. Can’t imagine working without it.",
  },
  {
    name: "Kelly Williams",
    role: "Head of Design, Layers",
    message: "The features are intuitive, and I finally feel in control of our club operations!",
  },
];

const Section8 = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    centerMode: false,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  

  return (
    <section className="max-w-[1350px] mx-auto px-4 py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Left Sticky Content */}
      <div className="lg:sticky top-[100px] self-start space-y-6">
        <p className="text-[#6D011C] font-poppins font-medium text-[24px]">Testimonials</p>
        <h2 className="text-black font-poppins font-semibold text-[52px] leading-[100%]">
          What <span className="text-[#6D011C]">Our Clients</span><br /> Say About Us?
        </h2>
        <p className="text-[#616161] font-poppins text-[20px] lg:text-[24px] font-[400] max-w-[450px]">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
        </p>

        {/* Arrows */}
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="w-15 h-15 rounded-full shadow-md border border-gray-300 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-[#1E1E1E] rotate-[25deg]" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="w-15 h-15 rounded-full border shadow-md  border-gray-300 flex items-center justify-center"
          >
            <ArrowRight className="w-5 h-5 text-[#1E1E1E] rotate-[-25deg]" />
          </button>
        </div>

      {/* Full paper plane icon */}
      <Image
  src={plane}
  alt="Paper plane"
  width={250}
  height={230}
  className="mt-8 hidden lg:block"
/>


      </div>

      {/* Right Slider */}
      <div className="-mx-[30px]">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((t, index) => (
         <div key={index} className="px-[15px] ml-4 lg:ml-0">
         <div className="w-[90%] lg:w-[445px] lg:h-[538px] p-4 md:pt-[90px] mb:pb-[90px] mb:px-[80px] rounded-[10px] border border-gray-200 bg-white shadow-sm flex flex-col items-center text-center  space-y-[40px]">
           <div className="flex flex-col items-center space-y-[16px]">
             <Image
               src={avatar}
               alt={t.name}
               width={84}
               height={84}
               className="rounded-full"
             />
             <div>
               <p className="font-poppins font-semibold text-[24px] leading-[28px] text-[#0F172A]">{t.name}</p>
               <p className="text-[#64748B] text-[20px] leading-[24px]">{t.role}</p>
             </div>
           </div>
           <blockquote className="text-[#0F172A] text-[20px] lg:text-[24px] lg:leading-[28px] font-[500] font-poppins max-w-[350px]">
             “{t.message}”
           </blockquote>
         </div>
       </div>
       
        
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Section8;
